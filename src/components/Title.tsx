import React from 'react';

export const Title: React.FC<{text: string; accent?: string}> = ({text, accent}) => {
  return (
    <h1
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        fontSize: 88,
        fontWeight: 800,
        letterSpacing: 1,
        margin: 0,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        textShadow: '0 8px 24px rgba(0,0,0,0.35)',
        borderLeft: accent ? `16px solid ${accent}` : undefined,
        paddingLeft: accent ? 24 : 0
      }}
    >
      {text}
    </h1>
  );
};
