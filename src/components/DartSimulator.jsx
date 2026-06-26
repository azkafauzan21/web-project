import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Target, AlertTriangle } from 'lucide-react';
import { Slider } from './ui/slider';

export function DartSimulator() {
  const canvasRef = useRef(null);
  const [asteroidMass, setAsteroidMass] = useState(500); // 10^9 kg
  const [impactorSpeed, setImpactorSpeed] = useState(6); // km/s
  const [impactFired, setImpactFired] = useState(false);
  const [deflectionDistance, setDeflectionDistance] = useState(0); // km

  // Simplified physics for DART impact (Kinetic Deflection)
  // Delta V = (m_impactor * v_impactor) / M_asteroid (simplified, ignoring beta factor)
  // Deflection distance over time: Delta V * Time (assuming fixed time to impact e.g., 5 years)
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Animation loop
    let animationId;
    let time = 0;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Earth (Target)
      ctx.beginPath();
      ctx.arc(600, 150, 40, 0, 2 * Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      
      // Earth atmosphere
      ctx.beginPath();
      ctx.arc(600, 150, 45, 0, 2 * Math.PI);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Calculate Asteroid Position
      const startX = 50;
      const startY = 150;
      const earthX = 600;
      
      // Baseline trajectory (straight to Earth)
      let currentX = startX + (time * 2);
      let currentY = startY;
      
      // If impacted, alter trajectory (deflection)
      if (impactFired && currentX > 300) {
        // Delta V effect on Y axis
        // mass: 100 to 1000. speed: 1 to 20
        const momentum = 500 * impactorSpeed; // Impactor mass fixed at 500kg
        const deltaV = (momentum / (asteroidMass * 1000)); // arbitrary scale
        
        // Time elapsed since impact
        const timeSinceImpact = currentX - 300;
        
        // Calculate Y deflection
        const deflection = deltaV * timeSinceImpact * 1.5;
        currentY = startY - deflection;
      }
      
      // Draw Asteroid Path (Predicted)
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      if (impactFired) {
        ctx.lineTo(300, startY);
        // Calculate final deflection point at x=600
        const finalDeflection = (500 * impactorSpeed / (asteroidMass * 1000)) * (600 - 300) * 1.5;
        ctx.lineTo(600, startY - finalDeflection);
      } else {
        ctx.lineTo(earthX, startY);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Draw Impactor Path
      if (impactFired && currentX <= 300) {
        ctx.beginPath();
        ctx.moveTo(300, 0);
        ctx.lineTo(currentX, currentY); // approximate meeting point
        ctx.strokeStyle = '#ef4444';
        ctx.stroke();
      }
      
      // Draw Asteroid
      ctx.beginPath();
      // Size relative to mass
      const astSize = Math.max(5, Math.min(25, asteroidMass / 40));
      ctx.arc(currentX, currentY, astSize, 0, 2 * Math.PI);
      ctx.fillStyle = '#9ca3af';
      ctx.fill();
      
      // Check for impact with Earth or Safe pass
      if (currentX >= 600) {
        // End of simulation
        const missDistance = Math.abs(currentY - 150);
        setDeflectionDistance(Math.round(missDistance * 100)); // Arbitrary unit scaling
        
        if (missDistance < 40) {
          // Boom
          ctx.beginPath();
          ctx.arc(600, 150, 60, 0, 2 * Math.PI);
          ctx.fillStyle = 'rgba(239, 68, 68, 0.5)';
          ctx.fill();
        }
        
        // Reset after a delay
        setTimeout(() => {
          time = 0;
          setImpactFired(false);
          setDeflectionDistance(0);
        }, 2000);
      } else {
        time += 1;
        animationId = requestAnimationFrame(render);
      }
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [impactFired, asteroidMass, impactorSpeed]);

  const handleLaunch = () => {
    setImpactFired(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-indigo-500" />
          Kalkulator Tumbukan Kinetik (Misi DART)
        </CardTitle>
        <CardDescription>
          Simulasikan misi Planetary Defense dengan menabrakkan wahana antariksa (impactor) 
          ke asteroid untuk mengubah orbitnya sebelum menghantam Bumi.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Massa Asteroid</label>
                <span className="text-sm text-muted-foreground">{asteroidMass} x 10^9 kg</span>
              </div>
              <Slider 
                value={[asteroidMass]} 
                min={100} 
                max={1000} 
                step={10} 
                onValueChange={(val) => setAsteroidMass(val[0])} 
              />
              <p className="text-xs text-muted-foreground">Semakin masif asteroid, semakin sulit dibelokkan.</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Kecepatan Impactor</label>
                <span className="text-sm text-muted-foreground">{impactorSpeed} km/s</span>
              </div>
              <Slider 
                value={[impactorSpeed]} 
                min={1} 
                max={20} 
                step={1} 
                onValueChange={(val) => setImpactorSpeed(val[0])} 
              />
              <p className="text-xs text-muted-foreground">Kecepatan wahana DART saat menabrak asteroid.</p>
            </div>
            
            <Button 
              onClick={handleLaunch} 
              disabled={impactFired} 
              className="w-full gap-2"
            >
              <Target className="w-4 h-4" />
              {impactFired ? 'Impactor Diluncurkan...' : 'Luncurkan Impactor'}
            </Button>
            
            {deflectionDistance > 0 && (
              <div className={`p-3 rounded-md border ${deflectionDistance > 4000 ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                <div className="flex items-center gap-2 mb-1">
                  {deflectionDistance > 4000 ? (
                    <Target className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  )}
                  <h4 className="font-semibold text-sm">Hasil Simulasi</h4>
                </div>
                <p className="text-xs">
                  Jarak meleset: <strong className={deflectionDistance > 4000 ? 'text-green-500' : 'text-red-500'}>{deflectionDistance} km</strong>
                  <br/>
                  {deflectionDistance > 4000 
                    ? 'Bumi Aman! Asteroid berhasil dibelokkan.' 
                    : 'Gagal! Jarak defleksi tidak cukup, tumbukan tak terhindarkan.'}
                </p>
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-2/3 bg-slate-950 rounded-md border flex items-center justify-center p-2 overflow-hidden">
            <canvas 
              ref={canvasRef} 
              width={700} 
              height={300} 
              className="max-w-full h-auto bg-transparent rounded"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
