'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const Basics = () => {
  const [value, setValue] = useState('all');

  return (
    <div>
      <CodeBox>
        <Springen.Tag
          items={[
            { value: 'all', label: '全部视频' },
            { value: 'personal', label: '个人视频' },
            { value: 'mutual', label: '互选视频' },
          ]}
          value={value}
          onChange={(_, value) => setValue(value)}
        />
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

const [value, setValue] = useState('all');

<Springen.Tag
  items={[
    { value: 'all', label: '全部视频' },
    { value: 'personal', label: '个人视频' },
    { value: 'mutual', label: '互选视频' },
  ]}
  value={value}
  onChange={(_, value) => setValue(value)}
/>`}</CodeBlock>
    </div>
  );
};

export default Basics;
