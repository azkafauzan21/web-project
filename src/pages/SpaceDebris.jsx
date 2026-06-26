import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Satellite, ShieldAlert, Rocket, AlertOctagon } from 'lucide-react';

export function SpaceDebris() {
  const canvasRef = useRef(null);
  const [satelliteDensity, setSatelliteDensity] = useState(50);
  const [isSimulating, setIsSimulating] = useState(false);
  const [debrisCount, setDebrisCount] = useState(0);
  const animationRef = useRef(null);
  
  // Data for regulations
  const debrisData = [
    {
      id: "kessler",
      title: "Sindrom Kessler (Kessler Syndrome)",
      content: "Sindrom Kessler adalah ancaman mematikan di Orbit Rendah Bumi (LEO). Diajukan oleh ilmuwan NASA Donald Kessler pada tahun 1978, teori ini memperingatkan bahwa ketika jumlah satelit mencapai titik kritis (kepadatan ekstrem), satu saja tabrakan akan menciptakan lautan puing (debris) yang bergerak sangat cepat. Puing tersebut akan menabrak satelit lain, menciptakan lebih banyak puing dalam reaksi berantai eksponensial (efek kaskade)."
    },
    {
      id: "debris-threat",
      title: "Ancaman Terhadap Eksplorasi Antariksa",
      content: "Di ruang hampa, serpihan kecil berukuran 1 sentimeter (seperti bongkahan cat kering) melaju dengan kecepatan orbital 28.000 km/jam. Pada kecepatan tersebut, energi kinetiknya setara dengan lemparan peluru tajam. Serpihan ini dapat menghancurkan panel surya, menembus kaca pesawat ulang-alik, hingga melumpuhkan Stasiun Luar Angkasa (ISS). Jika Sindrom Kessler berlanjut, umat manusia akan terkunci di permukaan Bumi karena orbit menjadi medan ranjau tak tertembus."
    },
    {
      id: "debris-mitigasi",
      title: "Protokol Pembersihan Orbit Internasional",
      content: "Mitigasi melibatkan dua aspek utama: Regulasi dan Pembersihan Aktif. Secara hukum, pedoman Inter-Agency Space Debris Coordination Committee (IADC) mewajibkan seluruh satelit baru memiliki sistem de-orbit agar terbakar di atmosfer dalam kurun waktu 25 tahun pasca pensiun. Secara teknis, proyek seperti ClearSpace-1 (ESA) dan misi dari JAXA menguji teknologi revolusioner menggunakan jaring raksasa, tombak (harpoon), serta tarikan magnetis untuk menangkap dan membuang satelit mati."
    }
  ];

  // Kessler Syndrome Simulator (2D Physics Engine)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Config
    const width = canvas.width;
    const height = canvas.height;
    
    let particles = [];
    const earthRadius = 100;
    
    // Initialize standard satellites
    const initSatellites = () => {
      particles = [];
      const numSats = satelliteDensity * 2;
      for (let i = 0; i < numSats; i++) {
        const orbitR = earthRadius + 20 + Math.random() * 150;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1;
        
        particles.push({
          x: width/2 + Math.cos(angle) * orbitR,
          y: height/2 + Math.sin(angle) * orbitR,
          vx: Math.cos(angle + Math.PI/2) * speed,
          vy: Math.sin(angle + Math.PI/2) * speed,
          type: 'satellite',
          radius: 3,
          color: '#3b82f6'
        });
      }
      setDebrisCount(0);
    };

    if (!isSimulating) {
      initSatellites();
    } else {
      // Add initial ASAT explosion debris if simulation just started
      for (let i=0; i<10; i++) {
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: width/2 + Math.cos(angle) * (earthRadius + 50),
          y: height/2 + Math.sin(angle) * (earthRadius + 50),
          vx: Math.cos(angle) * 3,
          vy: Math.sin(angle) * 3,
          type: 'debris',
          radius: 1.5,
          color: '#ef4444'
        });
      }
    }

    const render = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.3)'; // Trail effect
      ctx.fillRect(0, 0, width, height);

      // Draw Earth
      ctx.beginPath();
      ctx.arc(width/2, height/2, earthRadius, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, earthRadius);
      gradient.addColorStop(0, '#1d4ed8');
      gradient.addColorStop(1, '#1e3a8a');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      let newDebrisCount = 0;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move
        p.x += p.vx;
        p.y += p.vy;
        
        // Gravity (towards center)
        const dx = width/2 - p.x;
        const dy = height/2 - p.y;
        const distSq = dx*dx + dy*dy;
        const dist = Math.sqrt(distSq);
        
        // Simple orbital mechanics pull
        const pull = 100 / Math.max(distSq, 100);
        p.vx += (dx / dist) * pull;
        p.vy += (dy / dist) * pull;
        
        // Collision detection if simulating
        if (isSimulating) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx2 = p2.x - p.x;
            const dy2 = p2.y - p.y;
            const dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);
            
            if (dist2 < (p.radius + p2.radius)) {
              // Collision! Both become debris
              if (p.type === 'satellite' || p2.type === 'satellite') {
                p.type = 'debris';
                p.color = '#ef4444';
                p.radius = 1.5;
                p2.type = 'debris';
                p2.color = '#ef4444';
                p2.radius = 1.5;
                
                // Add more debris
                particles.push({
                  x: p.x, y: p.y,
                  vx: -p.vx + (Math.random()-0.5)*4,
                  vy: -p.vy + (Math.random()-0.5)*4,
                  type: 'debris', radius: 1, color: '#f87171'
                });
              }
            }
          }
        }
        
        // Re-enter atmosphere or escape bounds
        if (dist < earthRadius || p.x < -100 || p.x > width+100 || p.y < -100 || p.y > height+100) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        if (p.type === 'debris') newDebrisCount++;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      if (isSimulating && newDebrisCount !== debrisCount) {
        setDebrisCount(newDebrisCount);
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [satelliteDensity, isSimulating]); // Re-run when these change

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Sampah Antariksa</h1>
        <p className="text-muted-foreground">
          Simulator Fisika Sindrom Kessler dan pedoman hukum mitigasi ruang angkasa (IADC).
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Simulator Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Satellite className="h-5 w-5 text-indigo-500" />
              Simulator Sindrom Kessler
            </CardTitle>
            <CardDescription>
              Uji coba hipotesis tabrakan berantai (kaskade) akibat jumlah satelit berlebih di LEO.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <div className="bg-slate-950 rounded-md border overflow-hidden flex items-center justify-center p-2 relative h-[350px]">
              <canvas ref={canvasRef} width={600} height={350} className="max-w-full h-full object-contain" />
              
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded text-xs border">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Satelit Aktif</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Puing (Debris)</div>
              </div>
              
              {isSimulating && (
                <div className="absolute top-4 right-4 bg-red-500/10 border border-red-500/20 text-red-500 p-2 rounded text-xs font-bold animate-pulse">
                  Total Puing: {debrisCount}
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Kepadatan Konstelasi Satelit (LEO)</label>
                <span className="text-sm text-muted-foreground">{satelliteDensity * 2} Satelit</span>
              </div>
              <Slider 
                value={[satelliteDensity]} 
                min={10} 
                max={100} 
                step={5} 
                disabled={isSimulating}
                onValueChange={(val) => setSatelliteDensity(val[0])} 
              />
              
              <div className="flex gap-4">
                <Button 
                  onClick={() => setIsSimulating(!isSimulating)}
                  variant={isSimulating ? "destructive" : "default"}
                  className="flex-1 gap-2"
                >
                  {isSimulating ? <AlertOctagon className="w-4 h-4"/> : <Rocket className="w-4 h-4"/>}
                  {isSimulating ? 'Hentikan Simulasi' : 'Picu Rudal ASAT'}
                </Button>
                {isSimulating && (
                  <Button onClick={() => setIsSimulating(false)} variant="outline">Reset</Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Encyclopedia Card */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <ShieldAlert className="h-5 w-5 text-orange-500" />
            Ensiklopedia & Regulasi Internasional
          </h3>
          <div className="grid gap-4">
            {debrisData.map((item) => (
              <Card key={item.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
