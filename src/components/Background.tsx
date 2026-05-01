import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Background: React.FC<{primary: string; secondary: string}> = ({primary, secondary}) => {
  const frame = useCurrentFrame();
  const parallax = interpolate(frame % 180, [0, 180], [0, -80]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 65%, #0f172a 100%)`,
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -120,
          transform: `translateX(${parallax}px)`,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '120px 120px'
        }}
      />
    </AbsoluteFill>
  );
};
