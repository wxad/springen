'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const Basics = () => {
  const [value, setValue] = useState<number | undefined>(50);

  return (
    <div>
      <CodeBox>
        <Springen.Slider
          className="flex-1"
          value={value}
          onChange={setValue}
          marks={{
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
              style: {
                color: '#f50',
              },
              label: <strong>100°C</strong>,
            },
          }}
        />
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

const [value, setValue] = useState<number | undefined>(50);
<Springen.Slider
  value={value}
  onChange={setValue}
  marks={{
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  }}
/>`}</CodeBlock>
    </div>
  );
};

export default Basics;
