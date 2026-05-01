import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Title} from '../components/Title';

export const Scene2: React.FC<{data: any; colors: any}> = ({data, colors}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{padding: 90}}>
      <Title text={data.title} accent={colors.blue} />
      <div style={{marginTop: 40, display: 'grid', gap: 18}}>
        {data.items.map((item: string, idx: number) => {
          const start = idx * 12;
          const opacity = interpolate(frame, [start, start + 18], [0, 1], {extrapolateRight: 'clamp'});
          const translate = interpolate(frame, [start, start + 18], [80, 0], {extrapolateRight: 'clamp'});
          return (
            <div
              key={item}
              style={{
                background: 'rgba(255,255,255,0.95)',
                color: colors.gray,
                borderLeft: `10px solid ${colors.red}`,
                borderRadius: 14,
                padding: '22px 26px',
                fontSize: 52,
                fontWeight: 700,
                opacity,
                transform: `translateX(${translate}px)`
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
