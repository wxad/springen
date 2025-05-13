'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const Basics = () => {
  const [value, setValue] = useState<[number, number]>([18, 22]);

  return (
    <div>
      <CodeBox>
        <Springen.Slider tooltipVisible range unit="岁" className="flex-1" value={value} onChange={setValue} min={18} max={100} />
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

const [value, setValue] = useState<[number, number]>([18, 35]);

<Springen.Slider
  range
  unit="岁"
  className="flex-1"
  value={value}
  onChange={setValue}
  min={18}
  max={100}
/>`}</CodeBlock>
    </div>
  );
};

export default Basics;
