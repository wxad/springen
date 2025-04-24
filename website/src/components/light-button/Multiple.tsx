'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';

const Basics = () => {
  return (
    <div>
      <CodeBox className="gap-2 flex-wrap">
        <div>
          <Springen.LightButton>different parent</Springen.LightButton>
        </div>
        <i className="w-px h-4 bg-neutral-300" />
        <Springen.LightButton>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8.65 3C8.65 2.72386 8.42614 2.5 8.15 2.5H7.85C7.57386 2.5 7.35 2.72386 7.35 3V7.35H3C2.72386 7.35 2.5 7.57386 2.5 7.85V8.15C2.5 8.42614 2.72386 8.65 3 8.65H7.35V13C7.35 13.2761 7.57386 13.5 7.85 13.5H8.15C8.42614 13.5 8.65 13.2761 8.65 13V8.65H13C13.2761 8.65 13.5 8.42614 13.5 8.15V7.85C13.5 7.57386 13.2761 7.35 13 7.35H8.65V3Z"
              fill="#464749"
            />
          </svg>
          添加创作者
        </Springen.LightButton>
        <Springen.LightButton>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_1118_48610" fill="white">
              <rect x="2" y="2" width="11" height="12" rx="0.8" />
            </mask>
            <rect
              x="2"
              y="2"
              width="11"
              height="12"
              rx="0.8"
              stroke="black"
              strokeWidth="2"
              mask="url(#path-1-inside-1_1118_48610)"
            />
            <rect x="8" y="8" width="7" height="7" fill="#F7F7F7" />
            <path d="M4 5H11" stroke="black" />
            <path d="M4 7.5H11" stroke="black" />
            <path d="M4 10H8" stroke="black" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5 12.5V15H12.5V12.5H15V11.5H12.5V9H11.5V11.5H9V12.5H11.5Z"
              fill="black"
            />
          </svg>
          从名单添加
        </Springen.LightButton>
      </CodeBox>
      <CodeBox className="mt-2 gap-2 flex-wrap">
        <Springen.LightButton>hover them</Springen.LightButton>
        <Springen.LightButton>hover them</Springen.LightButton>
        <Springen.LightButton>hover them</Springen.LightButton>
        <Springen.LightButton>hover them</Springen.LightButton>
        <Springen.LightButton>hover them</Springen.LightButton>
        <Springen.LightButton>hover them</Springen.LightButton>
        <Springen.LightButton>hover them</Springen.LightButton>
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

<div>
  <Springen.LightButton>light-button</Springen.LightButton>
</div>
<Springen.LightButton>light-button</Springen.LightButton>
<Springen.LightButton>light-button</Springen.LightButton>`}</CodeBlock>
    </div>
  );
};

export default Basics;
