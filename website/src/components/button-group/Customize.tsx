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
        <Springen.ButtonGroup
          items={[
            {
              value: 'all',
              label: (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.50033 8.02652V4.66668H8.50033V8.03319L9.65333 6.88001L10.3603 7.58712L8.47503 9.4727C8.21466 9.73317 7.79255 9.73314 7.53222 9.47277L5.64699 7.58712L6.35399 6.88001L7.50033 8.02652ZM8.50033 4.66668H12.6677C13.0342 4.66668 13.3337 4.9639 13.3337 5.33055V14.0028C13.3337 14.3674 13.0364 14.6667 12.6698 14.6667H3.33086C2.96627 14.6667 2.66699 14.3695 2.66699 14.0028V5.33055C2.66699 4.96596 2.96516 4.66668 3.33296 4.66668H7.50033V1.33334H8.50033V4.66668Z"
                    />
                  </svg>
                  应用
                </>
              ),
            },
            {
              value: 'personal',
              label: (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0552 8.23791C9.60193 9.09045 8.4128 9.33646 7.39922 8.78745C6.38577 8.23843 5.9316 7.10193 6.38487 6.24952C6.83815 5.39673 8.02728 5.15072 9.04086 5.69999C10.0543 6.249 10.5085 7.38525 10.0552 8.23791ZM10.2137 5.09825C7.83684 2.91774 4.38916 2.83976 2.5128 4.92388C0.636309 7.00801 1.04197 10.4651 3.41858 12.6454C5.79557 14.8259 9.24324 14.9041 11.1196 12.8199C12.9961 10.7358 12.5904 7.27863 10.2137 5.09825Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.379 1.71485C13.3065 1.47001 14.2942 2.18212 14.5851 3.30567C14.8761 4.42895 14.3602 5.53812 13.4329 5.78283C12.5057 6.02767 11.518 5.31556 11.2267 4.19215C10.9357 3.06873 11.4516 1.95982 12.379 1.71485Z"
                    />
                  </svg>
                  小游戏
                </>
              ),
            },
            { value: 'mutual', label: '不启用' },
          ]}
          value={value}
          onChange={(_, value) => setValue(value)}
          gap={10}
          style={{ border: 'none' }}
          itemStyle={{
            padding: '0 12px 0 10px',
            fontSize: '13px',
            lineHeight: '32px',
            outline: '1px solid rgba(73, 90, 122, 0.1)',
            borderRadius: '4px',
          }}
          activeItemStyle={{ fontWeight: 600 }}
          indicatorStyle={{ borderRadius: '4px' }}
        />
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

const [value, setValue] = useState('all');

<Springen.ButtonGroup
  items={[
    {
      value: 'all',
      label: (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50033 8.02652V4.66668H8.50033V8.03319L9.65333 6.88001L10.3603 7.58712L8.47503 9.4727C8.21466 9.73317 7.79255 9.73314 7.53222 9.47277L5.64699 7.58712L6.35399 6.88001L7.50033 8.02652ZM8.50033 4.66668H12.6677C13.0342 4.66668 13.3337 4.9639 13.3337 5.33055V14.0028C13.3337 14.3674 13.0364 14.6667 12.6698 14.6667H3.33086C2.96627 14.6667 2.66699 14.3695 2.66699 14.0028V5.33055C2.66699 4.96596 2.96516 4.66668 3.33296 4.66668H7.50033V1.33334H8.50033V4.66668Z"
            />
          </svg>
          应用
        </>
      ),
    },
    {
      value: 'personal',
      label: (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0552 8.23791C9.60193 9.09045 8.4128 9.33646 7.39922 8.78745C6.38577 8.23843 5.9316 7.10193 6.38487 6.24952C6.83815 5.39673 8.02728 5.15072 9.04086 5.69999C10.0543 6.249 10.5085 7.38525 10.0552 8.23791ZM10.2137 5.09825C7.83684 2.91774 4.38916 2.83976 2.5128 4.92388C0.636309 7.00801 1.04197 10.4651 3.41858 12.6454C5.79557 14.8259 9.24324 14.9041 11.1196 12.8199C12.9961 10.7358 12.5904 7.27863 10.2137 5.09825Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.379 1.71485C13.3065 1.47001 14.2942 2.18212 14.5851 3.30567C14.8761 4.42895 14.3602 5.53812 13.4329 5.78283C12.5057 6.02767 11.518 5.31556 11.2267 4.19215C10.9357 3.06873 11.4516 1.95982 12.379 1.71485Z"
            />
          </svg>
          小游戏
        </>
      ),
    },
    { value: 'mutual', label: '不启用' },
  ]}
  value={value}
  onChange={(_, value) => setValue(value)}
  gap={10}
  style={{ border: 'none' }}
  itemStyle={{
    padding: '0 12px 0 10px',
    fontSize: '13px',
    lineHeight: '32px',
    outline: '1px solid rgba(73, 90, 122, 0.1)',
    borderRadius: '4px',
  }}
  activeItemStyle={{ fontWeight: 600 }}
  indicatorStyle={{ borderRadius: '4px' }}
/>`}</CodeBlock>
    </div>
  );
};

export default DemoBox;
