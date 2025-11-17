import React from 'react';

interface BackgroundGradientsProps {
  /**
   * Primary gradient color variable (defaults to --primary-500)
   */
  primaryColor?: string;
  /**
   * Secondary gradient color variable (defaults to --secondary-500)
   */
  secondaryColor?: string;
  /**
   * Layout type affects sphere positioning
   */
  layout?: 'sidebar' | 'fullwidth';
}

export function BackgroundGradients({ 
  primaryColor = 'var(--primary-500)',
  secondaryColor = 'var(--secondary-500)',
  layout = 'sidebar'
}: BackgroundGradientsProps) {
  
  // Sidebar layout has different positioning to account for sidebar offset
  if (layout === 'sidebar') {
    return (
      <>
        {/* Multiple overlapping gradient spheres that blend together - spread out */}
        <div 
          className="absolute -top-60 -right-40 w-[700px] h-[700px] rounded-full opacity-18 pointer-events-none" 
          style={{ 
            background: `radial-gradient(circle, ${primaryColor}, transparent)`,
            filter: 'blur(80px)',
            mixBlendMode: 'normal'
          }} 
        />
        <div 
          className="absolute top-20 right-[30%] w-[650px] h-[650px] rounded-full opacity-14 pointer-events-none" 
          style={{ 
            background: `radial-gradient(circle, ${secondaryColor}, transparent)`,
            filter: 'blur(90px)',
            mixBlendMode: 'normal'
          }} 
        />
        <div 
          className="absolute top-[200px] -left-60 w-[600px] h-[600px] rounded-full opacity-16 pointer-events-none" 
          style={{ 
            background: `radial-gradient(circle, var(--primary-400), transparent)`,
            filter: 'blur(85px)',
            mixBlendMode: 'normal'
          }} 
        />
        <div 
          className="absolute top-[500px] right-[10%] w-[650px] h-[650px] rounded-full opacity-15 pointer-events-none" 
          style={{ 
            background: `radial-gradient(circle, ${primaryColor}, transparent)`,
            filter: 'blur(100px)',
            mixBlendMode: 'normal'
          }} 
        />
        <div 
          className="absolute top-[800px] -left-40 w-[600px] h-[600px] rounded-full opacity-13 pointer-events-none" 
          style={{ 
            background: `radial-gradient(circle, ${secondaryColor}, transparent)`,
            filter: 'blur(90px)',
            mixBlendMode: 'normal'
          }} 
        />
        <div 
          className="absolute top-[1100px] right-[40%] w-[550px] h-[550px] rounded-full opacity-14 pointer-events-none" 
          style={{ 
            background: `radial-gradient(circle, var(--secondary-400), transparent)`,
            filter: 'blur(95px)',
            mixBlendMode: 'normal'
          }} 
        />
      </>
    );
  }
  
  // Fullwidth layout for pages without sidebar
  return (
    <>
      {/* Multiple overlapping gradient spheres that blend together - spread out */}
      <div 
        className="absolute -top-60 -right-60 w-[750px] h-[750px] rounded-full opacity-18 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, ${primaryColor}, transparent)`,
          filter: 'blur(80px)',
          mixBlendMode: 'normal'
        }} 
      />
      <div 
        className="absolute top-40 right-[20%] w-[700px] h-[700px] rounded-full opacity-14 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, ${secondaryColor}, transparent)`,
          filter: 'blur(90px)',
          mixBlendMode: 'normal'
        }} 
      />
      <div 
        className="absolute top-[300px] -left-80 w-[650px] h-[650px] rounded-full opacity-16 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, var(--primary-400), transparent)`,
          filter: 'blur(85px)',
          mixBlendMode: 'normal'
        }} 
      />
      <div 
        className="absolute top-[700px] right-[10%] w-[700px] h-[700px] rounded-full opacity-17 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, ${primaryColor}, transparent)`,
          filter: 'blur(100px)',
          mixBlendMode: 'normal'
        }} 
      />
      <div 
        className="absolute top-[1000px] -left-60 w-[650px] h-[650px] rounded-full opacity-15 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, ${secondaryColor}, transparent)`,
          filter: 'blur(90px)',
          mixBlendMode: 'normal'
        }} 
      />
      <div 
        className="absolute top-[1400px] right-[30%] w-[600px] h-[600px] rounded-full opacity-14 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, var(--secondary-400), transparent)`,
          filter: 'blur(95px)',
          mixBlendMode: 'normal'
        }} 
      />
      <div 
        className="absolute top-[1800px] -left-40 w-[650px] h-[650px] rounded-full opacity-16 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, var(--primary-400), transparent)`,
          filter: 'blur(85px)',
          mixBlendMode: 'normal'
        }} 
      />
    </>
  );
}
