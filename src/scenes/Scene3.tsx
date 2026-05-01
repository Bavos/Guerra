import React from 'react';
import {AbsoluteFill} from 'remotion';
import {AnimatedText} from '../components/AnimatedText';
import {Title} from '../components/Title';

export const Scene3: React.FC<{data: any; colors: any}> = ({data, colors}) => {
  return (
    <AbsoluteFill style={{padding: 90, justifyContent: 'center'}}>
      <Title text={data.title} accent={colors.blue} />
      <div style={{marginTop: 40}}>
        {data.bullets.map((bullet: string, idx: number) => (
          <AnimatedText key={bullet} text={`• ${bullet}`} delay={idx * 10} size={54} />
        ))}
      </div>
      <div style={{marginTop: 40, alignSelf: 'flex-start', background: colors.red, padding: '14px 24px', borderRadius: 12}}>
        <AnimatedText text={data.highlight} delay={36} size={46} weight={800} />
      </div>
    </AbsoluteFill>
  );
};
