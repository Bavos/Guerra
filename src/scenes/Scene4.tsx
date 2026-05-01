import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedText} from '../components/AnimatedText';

export const Scene4: React.FC<{data: any; colors: any}> = ({data, colors}) => {
  const frame = useCurrentFrame();
  const leftX = interpolate(frame, [0, 20], [-120, 0], {extrapolateRight: 'clamp'});
  const rightX = interpolate(frame, [10, 30], [120, 0], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{padding: 80, flexDirection: 'row', gap: 24}}>
      <div style={{flex: 1, background: 'rgba(255,255,255,0.96)', borderRadius: 20, padding: 28, transform: `translateX(${leftX}px)`}}>
        <h2 style={{color: colors.blue, margin: 0, fontSize: 52}}>{data.block1.title}</h2>
        {data.block1.items.map((item: string, idx: number) => (
          <AnimatedText key={item} text={item} delay={idx * 8} size={38} color={colors.gray} />
        ))}
      </div>
      <div style={{flex: 1, background: 'rgba(31,41,55,0.92)', border: `2px solid ${colors.red}`, borderRadius: 20, padding: 28, transform: `translateX(${rightX}px)`}}>
        <h2 style={{color: colors.red, margin: 0, fontSize: 52}}>{data.block2.title}</h2>
        {data.block2.items.map((item: string, idx: number) => (
          <AnimatedText key={item} text={item} delay={12 + idx * 9} size={38} color="#F9FAFB" />
        ))}
      </div>
    </AbsoluteFill>
  );
};
