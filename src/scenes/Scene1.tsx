import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AnimatedText} from '../components/AnimatedText';
import {Title} from '../components/Title';

export const Scene1: React.FC<{data: any; colors: any}> = ({data, colors}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const cardIn = spring({fps, frame, config: {damping: 180, stiffness: 110}});
  const cardOpacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{padding: 90, justifyContent: 'center'}}>
      <div style={{background: colors.red, color: colors.white, width: 320, padding: '12px 20px', fontWeight: 800}}>BREAKING NEWS</div>
      <div
        style={{
          marginTop: 24,
          background: 'rgba(17,24,39,0.85)',
          border: `2px solid ${colors.red}`,
          borderRadius: 20,
          padding: 42,
          opacity: cardOpacity,
          transform: `translateX(${interpolate(cardIn, [0, 1], [120, 0])}px) scale(${interpolate(cardIn, [0, 1], [0.96, 1])})`
        }}
      >
        <AnimatedText text={data.label} size={42} color={colors.red} weight={800} />
        <Title text={data.title} accent={colors.blue} />
        <AnimatedText text={data.text} delay={8} size={60} />
        <AnimatedText text={data.subtext} delay={18} size={38} color="#D1D5DB" />
        <AnimatedText text={data.closing} delay={30} size={44} color={colors.red} weight={700} />
      </div>
    </AbsoluteFill>
  );
};
