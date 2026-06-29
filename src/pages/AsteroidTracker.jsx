import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { formatDistance, formatVelocity, formatDiameter } from '../utils/astronomyUtils';
import { Skeleton } from '../components/ui/skeleton';
import { AsteroidOrbitMap } from '../components/AsteroidOrbitMap';
import { DartSimulator } from '../components/DartSimulator';

export function AsteroidTracker() {
  const { neoData, isLoading, hasFetched, fetchData } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!hasFetched && !isLoading) {
      fetchData();
    }
  }, [hasFetched, isLoading, fetchData]);

  const filteredData = neoData.filter(neo => 
    neo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">CNEOS Live Tracker</h2>
          <p className="text-muted-foreground">Pemantauan Objek Dekat Bumi (NEO) real-time dari NASA.</p>
        </div>
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Cari nama objek..."
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="max-h-[500px] overflow-y-auto">
            <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="px-4">Nama Objek</TableHead>
                <TableHead>Tgl Pendekatan</TableHead>
                <TableHead>Kecepatan Relatif</TableHead>
                <TableHead>Jarak (LD)</TableHead>
                <TableHead>Est. Diameter</TableHead>
                <TableHead className="text-right px-4">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="px-4"><Skeleton className="h-4 w-32" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell className="text-right px-4"><Skeleton className="h-4 w-16 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : filteredData.length > 0 ? (
                filteredData.map((neo) => (
                  <TableRow key={neo.id}>
                    <TableCell className="font-medium px-4">{neo.name}</TableCell>
                    <TableCell>{neo.date}</TableCell>
                    <TableCell>{formatVelocity(neo.velocity)}</TableCell>
                    <TableCell>{formatDistance(neo.missDistance)}</TableCell>
                    <TableCell>{formatDiameter(neo.diameterMin, neo.diameterMax)}</TableCell>
                    <TableCell className="text-right px-4">
                      {neo.isPotentiallyHazardous ? (
                        <Badge variant="destructive">Berbahaya</Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Aman</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                    Tidak ada data yang ditemukan.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Orbit 3D Live & Efek Yarkovsky
          </h3>
          <AsteroidOrbitMap neoData={neoData} />
          
          <Card className="bg-slate-50 dark:bg-slate-900 mt-4 border-l-4 border-l-amber-500">
            <CardContent className="p-4">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-amber-500">☀️</span> Dinamika Orbit: Efek Yarkovsky
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Tahukah Anda? Orbit asteroid dekat-Bumi (NEO) tidak statis. Radiasi panas dari matahari yang diserap dan dipancarkan kembali secara asimetris oleh permukaan asteroid yang berputar dapat menghasilkan dorongan kecil namun konstan. Gaya ini perlahan-lahan mengubah lintasan asteroid dalam jangka panjang, fenomena yang diteliti secara mendalam dalam dinamika populasi NEO (Utama, 2017).
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Simulasi Defleksi (DART)
          </h3>
          <DartSimulator />
        </div>
      </div>
    </div>
  );
}
