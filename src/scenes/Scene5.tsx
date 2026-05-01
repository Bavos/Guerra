import React from 'react';
import {AbsoluteFill} from 'remotion';
import {AnimatedText} from '../components/AnimatedText';
import {Title} from '../components/Title';

export const Scene5: React.FC<{data: any; colors: any}> = ({data, colors}) => {
  return (
    <AbsoluteFill style={{padding: 90, justifyContent: 'space-between'}}>
      <div>
        <Title text={data.title} accent={colors.red} />
        <div style={{display: 'flex', gap: 20, marginTop: 40}}>
          <div style={{flex: 1, background: 'rgba(255,255,255,0.95)', color: colors.gray, padding: 24, borderRadius: 16, fontSize: 42, fontWeight: 700}}>
            {data.comparison.left}
          </div>
          <div style={{flex: 1, background: colors.blue, color: colors.white, padding: 24, borderRadius: 16, fontSize: 42, fontWeight: 700}}>
            {data.comparison.right}
          </div>
        </div>
      </div>
      <div style={{background: colors.red, borderRadius: 18, padding: '16px 22px'}}>
        <AnimatedText text={data.closing} size={48} weight={800} />
      </div>
    </AbsoluteFill>
  );
};
