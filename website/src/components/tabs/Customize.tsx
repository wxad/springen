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
        <Springen.Tabs
          items={[
            { value: 'all', label: '全部视频' },
            { value: 'personal', label: '个人视频' },
            { value: 'mutual', label: '互选视频' },
          ]}
          value={value}
          onChange={(_, value) => setValue(value)}
          gap={28}
          itemStyle={{ paddingBottom: '15px', fontWeight: 400, fontSize: '13px', lineHeight: '20px' }}
          indicatorStyle={{ borderRadius: '0px' }}
        />
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

const [value, setValue] = useState('all');

<Springen.Tabs
  items={[
    { value: 'all', label: '全部视频' },
    { value: 'personal', label: '个人视频' },
    { value: 'mutual', label: '互选视频' },
  ]}
  value={value}
  onChange={(_, value) => setValue(value)}
  gap={28}
  itemStyle={{ paddingBottom: '15px', fontWeight: 400, fontSize: '13px', lineHeight: '20px' }}
  indicatorStyle={{ borderRadius: '0px' }}
/>`}</CodeBlock>
    </div>
  );
};

export default DemoBox;
