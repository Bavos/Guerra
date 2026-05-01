import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const AnimatedText: React.FC<{
  text: string;
  delay?: number;
  size?: number;
  color?: string;
  weight?: number;
}> = ({text, delay = 0, size = 48, color = '#FFFFFF', weight = 600}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const inFrame = frame - delay;

  const slide = spring({
    fps,
    frame: inFrame,
    config: {damping: 200, stiffness: 120}
  });

  const opacity = interpolate(inFrame, [0, 16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <p
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        fontSize: size,
        fontWeight: weight,
        color,
        margin: '10px 0',
        opacity,
        transform: `translateX(${interpolate(slide, [0, 1], [40, 0])}px)`
      }}
    >
      {text}
    </p>
  );
};
