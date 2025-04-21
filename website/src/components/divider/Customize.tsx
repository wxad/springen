'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const DemoBox = () => {
  const [value, setValue] = useState('all');

  return (
    <div>
      <CodeBox>
        <Springen.Divider
          items={[
            { value: 'all', label: '全部视频' },
            { value: 'personal', label: '个人视频' },
            { value: 'mutual', label: '互选视频' },
          ]}
          value={value}
          onChange={(_, value) => setValue(value)}
          itemStyle={(_, index) => ({
            fontSize: 16 - index * 2,
          })}
          activeItemStyle={{
            textDecoration: 'underline',
            textUnderlineOffset: 2,
          }}
          dividerStyle={{ background: 'transparent' }}
        />
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

const [value, setValue] = useState('all');

<Springen.Divider
  items={[
    { value: 'all', label: '全部视频' },
    { value: 'personal', label: '个人视频' },
    { value: 'mutual', label: '互选视频' },
  ]}
  value={value}
  onChange={(_, value) => setValue(value)}
  itemStyle={(_, index) => ({
    fontSize: 16 - index * 2,
  })}
  activeItemStyle={{
    textDecoration: 'underline',
    textUnderlineOffset: 2,
  }}
  dividerStyle={{ background: 'transparent' }}
/>`}</CodeBlock>
    </div>
  );
};

export default DemoBox;
