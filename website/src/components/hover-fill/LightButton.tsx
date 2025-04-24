'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const Basics = () => {
  return (
    <div>
      <CodeBox>
        <Springen.HoverFill className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm rounded-md">
          light-button
        </Springen.HoverFill>
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

<Springen.HoverFill
  className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm rounded-md"
>
  light-button
</Springen.HoverFill>`}</CodeBlock>
    </div>
  );
};

export default Basics;
