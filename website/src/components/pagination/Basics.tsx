'use client';

import React, { useEffect, useRef, useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';
import { Pane } from 'tweakpane';

const Basics = () => {
  const [value, setValue] = useState(1);
  const [params, setParams] = useState({
    totalSize: 100,
    pageSize: 10,
    prevNext: true,
    firstLast: false,
  });

  const tweakpaneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pane = new Pane({
      container: tweakpaneContainerRef.current as HTMLElement,
    });

    pane.addBinding(params, 'totalSize', {
      type: 'slider',
      min: 10,
      max: 200,
      step: 10,
    });

    pane.addBinding(params, 'pageSize', {
      type: 'slider',
      min: 10,
      max: 50,
      step: 1,
    });

    pane.addBinding(params, 'prevNext', {
      type: 'boolean',
    });

    pane.addBinding(params, 'firstLast', {
      type: 'boolean',
    });

    pane.on('change', (ev) => {
      setParams((prev) => ({
        ...prev,
        // @ts-ignore
        [ev.target.key]: ev.value,
      }));
    });

    return () => {
      pane.dispose();
    };
  }, []);

  return (
    <div>
      <CodeBox className="pt-[140px]">
        <div ref={tweakpaneContainerRef} className="absolute top-2 right-2 w-[250px] grayscale opacity-90" />
        <Springen.Pagination
          showPrevNext={params.prevNext}
          showFirstLast={params.firstLast}
          totalSize={params.totalSize}
          pageSize={params.pageSize}
          value={value}
          onChange={(_, value) => setValue(value)}
        />
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen'

// value: ${value}
const [value, setValue] = useState(1);

<Springen.Pagination
  ${params.prevNext ? 'showPrevNext' : 'showPrevNext={false}'}
  ${params.firstLast ? 'showFirstLast' : 'showFirstLast={false}'}
  totalSize={${params.totalSize}}
  pageSize={${params.pageSize}}
  value={value}
  onChange={(_, value) => setValue(value)}
/>`}</CodeBlock>
    </div>
  );
};

export default Basics;
