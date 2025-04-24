'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const Basics = () => {
  return (
    <div>
      <CodeBox>
        <Springen.HoverFill bgClassName="rounded-md">
          <button className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm">
            light-button
          </button>
        </Springen.HoverFill>
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

<Springen.HoverFill bgClassName="rounded-md">
  <button className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm">
    light-button
  </button>
</Springen.HoverFill>`}</CodeBlock>
    </div>
  );
};

export default Basics;
