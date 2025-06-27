"use client"
import React from 'react';
import { 
  Code, 
  PenTool, 
  BarChart2, 
  Mic, 
  Camera,
  Layers
} from 'lucide-react';

const icons = [
  { icon: <Code className="w-8 h-8 text-cyan-300" />, name: 'Code' },
  { icon: <PenTool className="w-8 h-8 text-pink-300" />, name: 'Design' },
  { icon: <BarChart2 className="w-8 h-8 text-emerald-300" />, name: 'Marketing' },
  { icon: <Mic className="w-8 h-8 text-purple-300" />, name: 'Audio' },
  { icon: <Camera className="w-8 h-8 text-orange-300" />, name: 'Video' },
  { icon: <Layers className="w-8 h-8 text-yellow-300" />, name: 'PM' },
];

const SkillsOrbit = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-accent/10 to-primary/20 border border-slate-700 animate-pulse" />
      
      {/* Orbiting Icons */}
      {icons.map((item, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const x = Math.cos(angle) * 180; // 180 is orbit radius
        const y = Math.sin(angle) * 180;

        return (
          <div
            key={item.name}
            className="absolute flex items-center justify-center w-20 h-20 bg-slate-800/50 rounded-full border border-slate-700/80 backdrop-blur-sm"
            style={{
              animation: `orbit 6s linear infinite`,
              animationDelay: `${index * -1}s`,
              '--orbit-radius': '180px',
              '--angle-offset': `${angle}rad`,
            } as React.CSSProperties}
          >
            <div className="transform transition-transform duration-300 hover:scale-125">
              {item.icon}
            </div>
          </div>
        );
      })}

      <div className="absolute w-40 h-40 rounded-full bg-slate-900 shadow-2xl flex items-center justify-center">
        <div className="text-5xl font-logo text-accent animate-pulse">
          100
        </div>
      </div>
    </div>
  );
};

export default SkillsOrbit; 