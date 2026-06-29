import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { MetricCard } from '../components/MetricCard';
import { spaceWeatherService } from '../services/spaceWeatherService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IconActivity, IconAlertTriangle, IconBolt, IconClock, IconShieldExclamation, IconSun } from '@tabler/icons-react';
import { Skeleton } from '../components/ui/skeleton';
import { Badge } from '../components/ui/badge';

export function SpaceWeather() {
  const [sunspotData, setSunspotData] = useState([]);
  const [flares, setFlares] = useState([]);
  const [cmes, setCmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timelineStep, setTimelineStep] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [sunspotsRes, flaresRes, cmesRes] = await Promise.all([
          spaceWeatherService.getNOAASunspotData(),
          spaceWeatherService.getSolarFlares(30),
          spaceWeatherService.getCMEAlerts(30)
        ]);

        if (sunspotsRes && sunspotsRes.length > 0) {
          const processedSunspots = sunspotsRes
            .slice(-120)
            .map(item => ({
              date: item['time-tag'].substring(0, 7),
              ssn: item.ssn
            }));
          setSunspotData(processedSunspots);
        }

        setFlares(flaresRes || []);
        setCmes(cmesRes || []);
      } catch (error) {
        console.error("Failed to load space weather data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cmeTimeline = [
    { time: '0 Menit', title: 'Ledakan Terjadi', desc: 'Solar flare meletus di permukaan Matahari.', icon: IconSun },
    { time: '+8 Menit', title: 'Radiasi Tiba', desc: 'Sinar-X mengganggu sinyal HF di sisi Bumi yang terang.', icon: IconBolt },
    { time: '+30 Menit', title: 'Badai Radiasi', desc: 'Partikel berenergi tinggi (SEP) membahayakan satelit.', icon: IconShieldExclamation },
    { time: '+72 Jam', title: 'Dampak CME', desc: 'Awan plasma menghantam Bumi. Aurora & Listrik terganggu.', icon: IconAlertTriangle }
  ];

  const latestSSN = sunspotData.length > 0 ? sunspotData[sunspotData.length - 1].ssn : 0;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight text-[var(--navy)]">Cuaca Antariksa</h1>
        <p className="text-xs text-[var(--slate2)]">
          Pemantauan aktivitas Matahari secara langsung dan mitigasi badai geomagnetik.
        </p>
      </div>

      <div className="grid-3">
        <MetricCard 
          icon={IconActivity} 
          value={loading ? '-' : latestSSN} 
          label="Sunspot Number (SSN)" 
          subtext="Siklus Terkini" 
          color="orange" 
        />
        <MetricCard 
          icon={IconBolt} 
          value={loading ? '-' : flares.length} 
          label="Solar Flares" 
          subtext="Dalam 30 Hari (M/X Class)" 
          color="red" 
        />
        <MetricCard 
          icon={IconAlertTriangle} 
          value={loading ? '-' : cmes.length} 
          label="CME Alerts" 
          subtext="Dalam 30 Hari (DONKI)" 
          color="purple" 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>
              <IconSun className="h-4 w-4 text-[var(--orange)]" />
              Siklus Bintik Matahari (10 Tahun)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-[250px] w-full" />
            ) : sunspotData.length > 0 ? (
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sunspotData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} vertical={false} />
                    <XAxis dataKey="date" tick={{fontSize: 10, fill: '#64748b'}} tickMargin={10} minTickGap={30} axisLine={false} tickLine={false} />
                    <YAxis tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: '8px', fontSize: '12px' }}
                      itemStyle={{ color: '#0f172a', fontWeight: 'bold' }}
                    />
                    <Line type="monotone" dataKey="ssn" stroke="#f97316" strokeWidth={2} dot={false} name="SSN" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex h-[250px] items-center justify-center text-[var(--slate2)] text-sm">
                Data tidak tersedia
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>
              <IconShieldExclamation className="h-4 w-4 text-[var(--red)]" />
              Peringatan Dini DONKI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xs font-bold text-[var(--slate)] uppercase tracking-wider">Flares Terkini</h4>
                {loading ? (
                   <div className="space-y-2"><Skeleton className="h-8 w-full" /><Skeleton className="h-8 w-full" /></div>
                ) : flares.length > 0 ? (
                  <div className="space-y-2 max-h-[100px] overflow-y-auto pr-2 custom-scrollbar">
                    {flares.slice(0, 5).map((flare, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-md border border-[var(--border-gema)] p-2 text-xs">
                        <span className="text-[var(--navy)]">{flare.beginTime.substring(0,10)}</span>
                        <Badge variant="outline" className={flare.classType.includes('X') ? 'bg-[var(--red-lt)] text-[var(--red)] border-[var(--red-lt)]' : 'bg-[var(--orange-lt)] text-[var(--orange)] border-[var(--orange-lt)]'}>
                          {flare.classType}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[var(--slate2)]">Nihil</p>
                )}
              </div>
              
              <div>
                <h4 className="mb-2 text-xs font-bold text-[var(--slate)] uppercase tracking-wider">Deteksi CME</h4>
                {loading ? (
                   <div className="space-y-2"><Skeleton className="h-8 w-full" /><Skeleton className="h-8 w-full" /></div>
                ) : cmes.length > 0 ? (
                  <div className="space-y-2 max-h-[100px] overflow-y-auto pr-2 custom-scrollbar">
                    {cmes.slice(0, 5).map((cme, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-md border border-[var(--border-gema)] p-2 text-xs">
                        <span className="text-[var(--navy)]">{cme.startTime.substring(0,10)}</span>
                        <span className="text-[var(--slate2)] font-medium">CME</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[var(--slate2)]">Nihil</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            <IconClock className="h-4 w-4 text-[var(--blue)]" />
            Simulator Dampak CME (Timeline)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative mt-4 flex flex-col md:flex-row justify-between gap-4 md:gap-0">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--border-gema)] hidden md:block -translate-y-1/2 z-0" />
            <div className="absolute top-0 left-6 w-1 h-full bg-[var(--border-gema)] md:hidden z-0" />

            {cmeTimeline.map((step, idx) => {
              const Icon = step.icon;
              const isActive = timelineStep === idx;
              const isPassed = timelineStep > idx;
              
              return (
                <div 
                  key={idx} 
                  className="relative z-10 flex md:flex-col items-center gap-4 md:gap-2 cursor-pointer group"
                  onClick={() => setTimelineStep(idx)}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] transition-colors ${isActive ? 'border-[var(--blue)] bg-[var(--blue)] text-white' : isPassed ? 'border-[var(--blue)] bg-[var(--bg)] text-[var(--blue)]' : 'border-[var(--border-gema)] bg-[var(--bg)] text-[var(--slate2)] group-hover:border-[var(--blue-bd)]'}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="md:text-center mt-2">
                    <Badge variant="outline" className={`mb-1 text-[10px] ${isActive ? 'border-[var(--blue)] text-[var(--blue)] bg-[var(--blue-lt)]' : 'border-transparent text-[var(--slate2)] bg-[var(--border-gema)]'}`}>{step.time}</Badge>
                    <h4 className={`text-xs font-bold ${isActive ? 'text-[var(--navy)]' : 'text-[var(--slate)]'}`}>{step.title}</h4>
                    <p className={`text-[10px] mt-1 md:max-w-[160px] text-[var(--slate2)] ${isActive ? 'block' : 'hidden md:block'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
