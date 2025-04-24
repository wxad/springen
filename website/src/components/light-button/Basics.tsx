'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const Basics = () => {
  return (
    <div>
      <CodeBox>
        <Springen.LightButton>light-button</Springen.LightButton>
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

<Springen.LightButton>light-button</Springen.LightButton>`}</CodeBlock>
    </div>
  );
};

export default Basics;
