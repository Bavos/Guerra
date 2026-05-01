import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame} from 'remotion';
import input from './data/input.json';
import {Background} from './components/Background';
import {Scene1} from './scenes/Scene1';
import {Scene2} from './scenes/Scene2';
import {Scene3} from './scenes/Scene3';
import {Scene4} from './scenes/Scene4';
import {Scene5} from './scenes/Scene5';

const TICKER_TEXT = 'AO VIVO • BREAKING NEWS • IA, DEFESA, DADOS E ESTRATÉGIA GLOBAL •';

export const Video: React.FC = () => {
  const frame = useCurrentFrame();
  const {colors, scenes} = input;

  return (
    <AbsoluteFill style={{fontFamily: 'Inter, Arial, sans-serif'}}>
      <Background primary={colors.gray} secondary={colors.blue} />

      <Sequence from={0} durationInFrames={180}>
        <Scene1 data={scenes.scene1} colors={colors} />
      </Sequence>
      <Sequence from={180} durationInFrames={180}>
        <Scene2 data={scenes.scene2} colors={colors} />
      </Sequence>
      <Sequence from={360} durationInFrames={180}>
        <Scene3 data={scenes.scene3} colors={colors} />
      </Sequence>
      <Sequence from={540} durationInFrames={180}>
        <Scene4 data={scenes.scene4} colors={colors} />
      </Sequence>
      <Sequence from={720} durationInFrames={180}>
        <Scene5 data={scenes.scene5} colors={colors} />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 110,
          background: 'rgba(15,23,42,0.95)',
          borderTop: `4px solid ${colors.red}`,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            whiteSpace: 'nowrap',
            color: '#fff',
            fontSize: 38,
            fontWeight: 700,
            paddingTop: 28,
            transform: `translateX(${1080 - (frame * 6) % 2200}px)`
          }}
        >
          {Array(4).fill(TICKER_TEXT).join(' ')}
        </div>
      </div>
    </AbsoluteFill>
  );
};
