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
          <Springen.HoverFill bgClassName="rounded-md">
            <div className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm">different parent</div>
          </Springen.HoverFill>
        </div>
        <i className="w-px h-4 bg-neutral-300" />
        <Springen.HoverFill bgClassName="rounded-md">
          <div className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8.65 3C8.65 2.72386 8.42614 2.5 8.15 2.5H7.85C7.57386 2.5 7.35 2.72386 7.35 3V7.35H3C2.72386 7.35 2.5 7.57386 2.5 7.85V8.15C2.5 8.42614 2.72386 8.65 3 8.65H7.35V13C7.35 13.2761 7.57386 13.5 7.85 13.5H8.15C8.42614 13.5 8.65 13.2761 8.65 13V8.65H13C13.2761 8.65 13.5 8.42614 13.5 8.15V7.85C13.5 7.57386 13.2761 7.35 13 7.35H8.65V3Z"
                fill="#464749"
              />
            </svg>
            添加达人
          </div>
        </Springen.HoverFill>
        <Springen.HoverFill bgClassName="rounded-md">
          <div className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
          </div>
        </Springen.HoverFill>
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

<div>
  <Springen.HoverFill className="flex-1">light-button</Springen.HoverFill>
</div>
<Springen.HoverFill className="flex-1">light-button</Springen.HoverFill>
<Springen.HoverFill className="flex-1">light-button</Springen.HoverFill>`}</CodeBlock>
      <hr className="my-4 border-t border-dashed border-neutral-200" />
      <CodeBox className="mt-2 p-0">
        <div className="bg-white w-full">
          <svg className="block w-full" viewBox="0 0 793 68" fill="none">
            <mask id="path-1-inside-1_1021_77874" fill="white">
              <path d="M0 0H793V68H0V0Z" />
            </mask>
            <path d="M793 67H0V69H793V67Z" fill="#4A618F" fillOpacity="0.08" mask="url(#path-1-inside-1_1021_77874)" />
            <path
              d="M26.412 25.366C27.618 26.302 28.644 27.22 29.49 28.156L28.122 29.524C27.42 28.624 26.43 27.634 25.134 26.59L26.412 25.366ZM37.158 41.584C36.132 41.584 35.016 41.566 33.81 41.548C32.586 41.53 31.578 41.422 30.804 41.242C30.03 41.026 29.382 40.612 28.842 40C28.59 39.694 28.338 39.55 28.122 39.55C27.762 39.55 27.132 40.378 26.214 42.034L24.828 40.756C25.728 39.28 26.556 38.344 27.276 37.948V33.052H24.864V31.216H29.058V38.092C29.13 38.164 29.202 38.218 29.274 38.29C29.706 38.758 30.156 39.118 30.588 39.352C31.146 39.604 31.974 39.766 33.09 39.802C34.17 39.82 35.448 39.838 36.906 39.838C37.734 39.838 38.58 39.82 39.444 39.802C40.308 39.766 40.974 39.73 41.424 39.694L40.974 41.584H37.158ZM30.354 29.02H34.134C34.206 28.192 34.26 27.346 34.278 26.482V25.222H36.15V26.068C36.15 27.112 36.096 28.084 35.988 29.02H40.254V30.856H35.718C35.646 31.234 35.556 31.594 35.466 31.954C36.996 33.25 38.778 35.068 40.83 37.408L39.462 38.758C38.094 37.012 36.582 35.32 34.908 33.7C34.044 35.896 32.73 37.588 30.966 38.776L29.814 37.228C31.866 35.914 33.198 33.79 33.846 30.856H30.354V29.02ZM51.882 25.24C51.882 26.824 51.828 28.174 51.756 29.29C52.8 34.024 55.374 37.642 59.46 40.144L58.2 41.8C54.834 39.532 52.458 36.508 51.072 32.71C49.884 36.382 47.418 39.424 43.674 41.836L42.522 40.144C47.346 37.264 49.812 33.232 49.956 28.066C49.956 26.86 49.974 25.924 49.974 25.24H51.882ZM69.576 33.574V35.374H72.204V33.574H69.576ZM69.576 37.12V39.172H72.204V37.12H69.576ZM69.576 40.972V41.782H67.722V32.008C67.362 32.476 67.002 32.944 66.642 33.394L66.354 32.494V34.366C65.868 34.582 65.382 34.798 64.896 34.996V39.766C64.896 40.99 64.248 41.62 62.988 41.62H61.368L60.954 39.802C61.44 39.874 61.908 39.928 62.34 39.928C62.772 39.928 63.006 39.712 63.006 39.28V35.698C62.358 35.914 61.692 36.13 61.026 36.31L60.558 34.402C61.386 34.24 62.196 34.042 63.006 33.79V30.154H60.9V28.336H63.006V25.222H64.896V28.336H66.498V30.154H64.896V33.106C65.4 32.89 65.868 32.674 66.336 32.44L66.012 31.432C67.416 29.56 68.388 27.49 68.964 25.24L70.8 25.6C70.548 26.464 70.26 27.292 69.918 28.102H72.438C72.168 27.274 71.862 26.446 71.502 25.654L73.32 25.168C73.698 26.23 74.004 27.202 74.22 28.102H76.902V29.902H74.058V31.81H76.542V33.574H74.058V35.374H76.542V37.12H74.058V39.172H77.1V40.972H69.576ZM72.204 29.902H69.576V31.81H72.204V29.902ZM79.098 26.302H83.004V25.222H84.912V26.302H89.088V25.222H90.996V26.302H94.902V28.012H90.996V29.128H89.088V28.012H84.912V28.912L86.73 29.254C86.622 29.542 86.514 29.83 86.406 30.1H94.812V31.81H85.56C85.02 32.71 84.408 33.574 83.688 34.366V41.908H81.87V36.13C81.24 36.652 80.574 37.156 79.89 37.624L78.72 36.076C80.664 34.816 82.212 33.394 83.364 31.81H79.404V30.1H84.39C84.552 29.758 84.696 29.434 84.84 29.11H83.004V28.012H79.098V26.302ZM89.304 35.518C89.7 35.248 90.276 34.888 91.032 34.438H85.848V32.746H93.75V34.078C93.012 34.636 92.166 35.266 91.194 35.986V36.274H94.884V38.038H91.194V40.198C91.194 41.314 90.636 41.872 89.538 41.872H87.324L86.784 40.054C87.63 40.126 88.296 40.18 88.8 40.18C89.124 40.18 89.304 40 89.304 39.676V38.038H84.606V36.274H89.304V35.518Z"
              fill="#313233"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M707.156 35.1109C707.637 36.7795 709.176 37.9998 711 37.9998C711.917 37.9998 712.761 37.6914 713.436 37.1725L714.385 38.1214C713.464 38.8786 712.285 39.3332 711 39.3332C708.435 39.3332 706.293 37.5232 705.782 35.1109H704.562C704.308 35.1109 704.241 34.9575 704.401 34.7682L706.265 32.5648C706.424 32.3774 706.685 32.3755 706.845 32.5648L708.71 34.7682C708.868 34.9556 708.798 35.1109 708.548 35.1109H707.156ZM716.259 33.1109H717.437C717.687 33.1109 717.757 33.2663 717.599 33.4537L715.734 35.6571C715.574 35.8464 715.313 35.8445 715.154 35.6571L713.29 33.4537C713.129 33.2644 713.197 33.1109 713.451 33.1109H714.901C714.496 31.3296 712.903 29.9998 711 29.9998C709.856 29.9998 708.825 30.4796 708.096 31.2487L707.153 30.3056C708.123 29.2953 709.488 28.6665 711 28.6665C713.642 28.6665 715.836 30.5885 716.259 33.1109Z"
              fill="#33373D"
              fillOpacity="0.58"
            />
            <path
              d="M735.558 31.426V35.234H736.44V36.158H732.912C733.654 37.586 734.858 38.692 736.51 39.504L736.048 40.456C734.2 39.42 732.87 38.048 732.086 36.368C731.498 37.992 730.168 39.35 728.096 40.442L727.438 39.602C729.342 38.706 730.574 37.558 731.134 36.158H727.872V35.234H728.866V31.426H732.058C732.464 30.866 732.87 30.222 733.262 29.48H730.826C730.238 30.292 729.468 31.02 728.544 31.65L727.956 30.866C729.356 29.942 730.308 28.808 730.812 27.478L731.792 27.604C731.666 27.954 731.526 28.29 731.358 28.612H734.326V29.34C733.92 30.152 733.5 30.852 733.08 31.426H735.558ZM729.762 35.234H731.414C731.582 34.422 731.68 33.442 731.708 32.308H729.762V35.234ZM732.38 35.234H734.662V32.308H732.632C732.604 33.47 732.52 34.45 732.38 35.234ZM725.198 40.246H724.008L723.798 39.28C724.162 39.322 724.512 39.35 724.848 39.35C725.212 39.35 725.408 39.14 725.408 38.748V35.374C724.848 35.598 724.288 35.794 723.728 35.976L723.476 34.968C724.134 34.8 724.778 34.604 725.408 34.366V31.104H723.742V30.138H725.408V27.576H726.416V30.138H727.844V31.104H726.416V33.96C726.92 33.736 727.41 33.484 727.9 33.204V34.226C727.41 34.478 726.92 34.73 726.416 34.954V39C726.416 39.826 726.01 40.246 725.198 40.246ZM737.7 33.358H750.286V34.366H737.7V33.358ZM755.76 33.68V34.632C755.312 34.828 754.85 35.01 754.402 35.178V39.098C754.402 39.91 754.024 40.316 753.268 40.316H752.05L751.84 39.322C752.204 39.364 752.568 39.392 752.918 39.392C753.254 39.392 753.422 39.21 753.422 38.846V35.514C752.918 35.668 752.414 35.808 751.91 35.948L751.672 34.982C752.26 34.856 752.848 34.716 753.422 34.548V31.118H751.84V30.152H753.422V27.562H754.402V30.152H755.788V31.118H754.402V34.226C754.864 34.058 755.312 33.876 755.76 33.68ZM757.44 32.714V38.958C758.112 38.776 758.714 38.552 759.274 38.286L759.456 39.224C758.518 39.616 757.44 39.952 756.236 40.232L755.984 39.294C756.292 39.196 756.446 38.986 756.446 38.678V27.702H757.44V31.734H759.414V32.714H757.44ZM762.48 40.204H761.304C760.492 40.204 760.086 39.756 760.086 38.888V27.604H761.08V31.832C761.92 31.552 762.746 31.16 763.53 30.656L764.118 31.482C763.054 32.07 762.046 32.532 761.08 32.84V38.678C761.08 39.056 761.262 39.252 761.626 39.252H762.312C762.634 39.252 762.858 39.14 762.998 38.944C763.18 38.692 763.292 37.936 763.348 36.676L764.272 36.97C764.174 38.51 763.978 39.434 763.684 39.77C763.432 40.05 763.04 40.204 762.48 40.204Z"
              fill="#0D0D0D"
            />
          </svg>
          <div className="grid grid-cols-2 gap-2 pt-6 px-10 pb-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <Springen.HoverFill key={index} className="flex-1" bgClassName="rounded-lg">
                <div className="flex p-4 gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1744219792921-a74da6141822?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="size-18 object-cover rounded-full"
                  />
                  <div>
                    <div className="mb-1 text-base font-semibold">隔壁大哥与小李</div>
                    <div className="mb-1 text-xs text-neutral-500">北京</div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#FA9D3B]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.95034 1.6875C2.47375 1.6875 2.93177 1.9773 3.30156 2.31113C3.68246 2.65497 4.05247 3.12099 4.40616 3.62976C4.94342 4.40259 5.49468 5.35282 6.02088 6.24805C6.55153 5.35495 7.10207 4.39995 7.62032 3.63526C7.96376 3.12852 8.31933 2.6638 8.68088 2.32066C9.02705 1.99212 9.46918 1.6875 9.98252 1.6875C10.9111 1.6875 11.1946 2.68232 11.24 3.43697C11.2884 4.24369 11.1562 5.27788 10.9361 6.27727C10.7147 7.28194 10.3941 8.2981 10.0395 9.07526C9.76384 9.67959 9.30679 10.625 8.52212 10.625C7.8495 10.625 7.30604 10.1036 6.89829 9.62485C6.60368 9.27893 6.30614 8.85579 6.01029 8.39727C5.70145 8.86029 5.38719 9.28774 5.07168 9.63712C4.6167 10.1409 4.03533 10.625 3.35858 10.625C2.5668 10.625 2.14842 9.66957 1.88823 9.06378C1.5549 8.28767 1.25496 7.27294 1.04745 6.27025C0.840836 5.27192 0.716824 4.24245 0.757797 3.44195C0.795031 2.71449 1.03384 1.6875 1.95034 1.6875ZM5.35736 7.33682C4.72087 6.26852 4.1007 5.16126 3.48244 4.27192C3.14695 3.78933 2.83433 3.40494 2.54772 3.1462C2.29911 2.92177 2.12256 2.83947 2.00977 2.81842C2.00814 2.82168 2.00641 2.8252 2.00459 2.82899C1.94996 2.94287 1.89869 3.16023 1.88133 3.49946C1.84732 4.1638 1.9515 5.08745 2.1491 6.04225C2.3458 6.99269 2.62612 7.93109 2.92193 8.61981C3.04598 8.90864 3.19348 9.26676 3.42645 9.49247C3.58999 9.45859 3.85745 9.30314 4.23674 8.88313C4.59212 8.4896 4.96652 7.95396 5.35736 7.33682ZM6.67611 7.34342C7.05778 7.96243 7.41793 8.49992 7.75476 8.89541C7.93874 9.11143 8.18034 9.4122 8.47042 9.49175C8.72587 9.26979 8.87955 8.90745 9.01601 8.60833C9.32973 7.92065 9.62845 6.98368 9.83741 6.03523C10.0475 5.0815 10.1565 4.16257 10.117 3.50444C10.104 3.28843 10.0933 2.99927 9.96195 2.8138C9.88317 2.82315 9.71847 2.88692 9.45533 3.13667C9.18196 3.39611 8.88003 3.78181 8.55159 4.26642C7.94142 5.16673 7.32933 6.26704 6.67611 7.34342Z"
                          fill="#FA9D3B"
                        />
                      </svg>
                      视频号特色
                    </div>
                  </div>
                </div>
              </Springen.HoverFill>
            ))}
          </div>
        </div>
      </CodeBox>
      <CodeBlock initialHeight={270}>{`import Springen from 'springen';

{Array.from({ length: 6 }).map((_, index) => (
  <Springen.HoverFill key={index} className="flex-1" bgClassName="rounded-lg">
    <div className="flex p-4 gap-3" />
  </Springen.HoverFill>
))}`}</CodeBlock>
      <hr className="my-4 border-t border-dashed border-neutral-200" />
      <CodeBox className="mt-2 p-0">
        <div className="bg-white w-full">
          <div className="flex items-center justify-between pl-6 pr-4 h-[68px] border-b border-neutral-100">
            <div className="text-[18px] font-semibold">已选达人</div>
            <div className="flex">
              <Springen.HoverFill bgClassName="rounded-md">
                <div className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8.65 3C8.65 2.72386 8.42614 2.5 8.15 2.5H7.85C7.57386 2.5 7.35 2.72386 7.35 3V7.35H3C2.72386 7.35 2.5 7.57386 2.5 7.85V8.15C2.5 8.42614 2.72386 8.65 3 8.65H7.35V13C7.35 13.2761 7.57386 13.5 7.85 13.5H8.15C8.42614 13.5 8.65 13.2761 8.65 13V8.65H13C13.2761 8.65 13.5 8.42614 13.5 8.15V7.85C13.5 7.57386 13.2761 7.35 13 7.35H8.65V3Z"
                      fill="#464749"
                    />
                  </svg>
                  添加达人
                </div>
              </Springen.HoverFill>
              <Springen.HoverFill bgClassName="rounded-md">
                <div className="inline-flex items-center justify-center gap-0.5 h-9 px-3 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                </div>
              </Springen.HoverFill>
            </div>
          </div>
          <div className="flex items-center justify-between pl-6 pr-5 h-10 bg-neutral-50 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <img
                className="size-5 rounded-full"
                src="https://images.unsplash.com/photo-1744219792921-a74da6141822?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="text-sm font-semibold">微品牌</div>
            </div>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex items-center justify-center size-[26px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 5V15C14 15.5523 13.5523 16 13 16H5C4.44772 16 4 15.5523 4 15V5H2.5C2.22386 5 2 4.77614 2 4.5V4C2 3.72386 2.22386 3.5 2.5 3.5H6V2.5C6 2.22386 6.22386 2 6.5 2H11.5C11.7761 2 12 2.22386 12 2.5V3.5H15.5C15.7761 3.5 16 3.72386 16 4V4.5C16 4.77614 15.7761 5 15.5 5H14ZM5.5 5V14.5H12.5V5H5.5ZM7 6.5H8.5V13H7V6.5ZM9.5 6.5H11V13H9.5V6.5Z"
                    fill="#455066"
                    fillOpacity="0.25"
                  />
                </svg>
              </div>
            </Springen.HoverFill>
          </div>
          <div className="flex">
            <div className="w-[128px] border-r border-neutral-100">
              <div className="flex items-center pl-6 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                视频时长
              </div>
              <div className="h-[44px] border-b border-neutral-100">
                <div className="ml-2 p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm">1至60秒</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9834 6.32322C13.081 6.42085 13.081 6.57915 12.9834 6.67678L8.17505 11.4851C8.07742 11.5827 7.91913 11.5827 7.8215 11.4851L3.01317 6.67678C2.91554 6.57915 2.91554 6.42086 3.01317 6.32322L3.57886 5.75754C3.67649 5.65991 3.83478 5.65991 3.93241 5.75754L7.99828 9.8234L12.0641 5.75754C12.1618 5.65991 12.3201 5.65991 12.4177 5.75754L12.9834 6.32322Z"
                          fill="#3E4552"
                          fillOpacity="0.36"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
              <div className="h-[44px]">
                <div className="ml-2 p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm">60秒以上</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9834 6.32322C13.081 6.42085 13.081 6.57915 12.9834 6.67678L8.17505 11.4851C8.07742 11.5827 7.91913 11.5827 7.8215 11.4851L3.01317 6.67678C2.91554 6.57915 2.91554 6.42086 3.01317 6.32322L3.57886 5.75754C3.67649 5.65991 3.83478 5.65991 3.93241 5.75754L7.99828 9.8234L12.0641 5.75754C12.1618 5.65991 12.3201 5.65991 12.4177 5.75754L12.9834 6.32322Z"
                          fill="#3E4552"
                          fillOpacity="0.36"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
            </div>
            <div className="flex-1 border-r border-neutral-100">
              <div className="flex items-center pl-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                额外服务
              </div>
              <div className="h-[44px] border-b border-neutral-100">
                <div className="p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm text-neutral-500">选填额外服务</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9834 6.32322C13.081 6.42085 13.081 6.57915 12.9834 6.67678L8.17505 11.4851C8.07742 11.5827 7.91913 11.5827 7.8215 11.4851L3.01317 6.67678C2.91554 6.57915 2.91554 6.42086 3.01317 6.32322L3.57886 5.75754C3.67649 5.65991 3.83478 5.65991 3.93241 5.75754L7.99828 9.8234L12.0641 5.75754C12.1618 5.65991 12.3201 5.65991 12.4177 5.75754L12.9834 6.32322Z"
                          fill="#3E4552"
                          fillOpacity="0.36"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
              <div className="h-[44px]">
                <div className="p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm">出镜拍摄</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9834 6.32322C13.081 6.42085 13.081 6.57915 12.9834 6.67678L8.17505 11.4851C8.07742 11.5827 7.91913 11.5827 7.8215 11.4851L3.01317 6.67678C2.91554 6.57915 2.91554 6.42086 3.01317 6.32322L3.57886 5.75754C3.67649 5.65991 3.83478 5.65991 3.93241 5.75754L7.99828 9.8234L12.0641 5.75754C12.1618 5.65991 12.3201 5.65991 12.4177 5.75754L12.9834 6.32322Z"
                          fill="#3E4552"
                          fillOpacity="0.36"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
            </div>
            <div className="w-[240px] border-r border-neutral-100">
              <div className="flex items-center pl-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                期望发表时间段
              </div>
              <div className="h-[44px] border-b border-neutral-100">
                <div className="p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm text-neutral-500">请选择期望发表的时间段</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H2ZM14 2.07692H2V13.9231H14V2.07692Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path d="M2 5H14V6H2V5Z" fill="#33373D" fillOpacity="0.58" />
                        <path
                          d="M4.5 0C4.77614 1.20706e-08 5 0.223858 5 0.5L5 3.5C5 3.77614 4.77614 4 4.5 4C4.22386 4 4 3.77614 4 3.5V0.5C4 0.223858 4.22386 -1.20706e-08 4.5 0Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M11.5 0C11.7761 1.20706e-08 12 0.223858 12 0.5V3.5C12 3.77614 11.7761 4 11.5 4C11.2239 4 11 3.77614 11 3.5V0.5C11 0.223858 11.2239 -1.20706e-08 11.5 0Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M4 11.5C4 11.2239 4.22386 11 4.5 11H11.5C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M4 8.5C4 8.22386 4.22386 8 4.5 8H11.5C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H4.5C4.22386 9 4 8.77614 4 8.5Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
              <div className="h-[44px]">
                <div className="p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm">2025-03-11 ~ 2025-03-31</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H2ZM14 2.07692H2V13.9231H14V2.07692Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path d="M2 5H14V6H2V5Z" fill="#33373D" fillOpacity="0.58" />
                        <path
                          d="M4.5 0C4.77614 1.20706e-08 5 0.223858 5 0.5L5 3.5C5 3.77614 4.77614 4 4.5 4C4.22386 4 4 3.77614 4 3.5V0.5C4 0.223858 4.22386 -1.20706e-08 4.5 0Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M11.5 0C11.7761 1.20706e-08 12 0.223858 12 0.5V3.5C12 3.77614 11.7761 4 11.5 4C11.2239 4 11 3.77614 11 3.5V0.5C11 0.223858 11.2239 -1.20706e-08 11.5 0Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M4 11.5C4 11.2239 4.22386 11 4.5 11H11.5C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M4 8.5C4 8.22386 4.22386 8 4.5 8H11.5C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H4.5C4.22386 9 4 8.77614 4 8.5Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
            </div>
            <div className="w-[120px] border-r border-neutral-100">
              <div className="flex items-center justify-end pl-4 pr-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                合作报价
              </div>
              <div className="h-[44px] border-b border-neutral-100">
                <div className="flex items-center pr-4 justify-end h-[44px] text-sm">￥60,000</div>
              </div>
              <div className="h-[44px]">
                <div className="flex items-center pr-4 justify-end h-[44px] text-sm">￥8,888,888</div>
              </div>
            </div>
            <div className="w-[84px]">
              <div className="flex items-center pl-[30px] pr-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                操作
              </div>
              <div className="flex items-center pl-3 h-[44px] border-b border-neutral-100">
                <Springen.HoverFill bgClassName="rounded-sm">
                  <div className="flex items-center justify-center size-[26px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM5 8.25V9.75H13V8.25H5Z"
                        fill="#455066"
                        fillOpacity="0.25"
                      />
                    </svg>
                  </div>
                </Springen.HoverFill>
                <Springen.HoverFill bgClassName="rounded-sm">
                  <div className="flex items-center justify-center size-[26px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM8.25 8.25H5V9.75H8.25V13H9.75V9.75H13V8.25H9.75V5H8.25V8.25Z"
                        fill="#455066"
                        fillOpacity="0.25"
                      />
                    </svg>
                  </div>
                </Springen.HoverFill>
              </div>
              <div className="flex items-center pl-3 h-[44px] border-b border-neutral-100">
                <Springen.HoverFill bgClassName="rounded-sm">
                  <div className="flex items-center justify-center size-[26px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM5 8.25V9.75H13V8.25H5Z"
                        fill="#455066"
                        fillOpacity="0.25"
                      />
                    </svg>
                  </div>
                </Springen.HoverFill>
                <Springen.HoverFill bgClassName="rounded-sm">
                  <div className="flex items-center justify-center size-[26px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM8.25 8.25H5V9.75H8.25V13H9.75V9.75H13V8.25H9.75V5H8.25V8.25Z"
                        fill="#455066"
                        fillOpacity="0.25"
                      />
                    </svg>
                  </div>
                </Springen.HoverFill>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pl-6 pr-5 h-10 bg-neutral-50 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <img
                className="size-5 rounded-full"
                src="https://images.unsplash.com/photo-1744219792921-a74da6141822?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="text-sm font-semibold">菜菜美食日记</div>
            </div>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex items-center justify-center size-[26px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 5V15C14 15.5523 13.5523 16 13 16H5C4.44772 16 4 15.5523 4 15V5H2.5C2.22386 5 2 4.77614 2 4.5V4C2 3.72386 2.22386 3.5 2.5 3.5H6V2.5C6 2.22386 6.22386 2 6.5 2H11.5C11.7761 2 12 2.22386 12 2.5V3.5H15.5C15.7761 3.5 16 3.72386 16 4V4.5C16 4.77614 15.7761 5 15.5 5H14ZM5.5 5V14.5H12.5V5H5.5ZM7 6.5H8.5V13H7V6.5ZM9.5 6.5H11V13H9.5V6.5Z"
                    fill="#455066"
                    fillOpacity="0.25"
                  />
                </svg>
              </div>
            </Springen.HoverFill>
          </div>
          <div className="flex">
            <div className="w-[128px] border-r border-neutral-100">
              <div className="flex items-center pl-6 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                视频时长
              </div>
              <div className="h-[44px]">
                <div className="ml-2 p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm">1至60秒</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9834 6.32322C13.081 6.42085 13.081 6.57915 12.9834 6.67678L8.17505 11.4851C8.07742 11.5827 7.91913 11.5827 7.8215 11.4851L3.01317 6.67678C2.91554 6.57915 2.91554 6.42086 3.01317 6.32322L3.57886 5.75754C3.67649 5.65991 3.83478 5.65991 3.93241 5.75754L7.99828 9.8234L12.0641 5.75754C12.1618 5.65991 12.3201 5.65991 12.4177 5.75754L12.9834 6.32322Z"
                          fill="#3E4552"
                          fillOpacity="0.36"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
            </div>
            <div className="flex-1 border-r border-neutral-100">
              <div className="flex items-center pl-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                额外服务
              </div>
              <div className="h-[44px]">
                <div className="p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm text-neutral-500">选填额外服务</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9834 6.32322C13.081 6.42085 13.081 6.57915 12.9834 6.67678L8.17505 11.4851C8.07742 11.5827 7.91913 11.5827 7.8215 11.4851L3.01317 6.67678C2.91554 6.57915 2.91554 6.42086 3.01317 6.32322L3.57886 5.75754C3.67649 5.65991 3.83478 5.65991 3.93241 5.75754L7.99828 9.8234L12.0641 5.75754C12.1618 5.65991 12.3201 5.65991 12.4177 5.75754L12.9834 6.32322Z"
                          fill="#3E4552"
                          fillOpacity="0.36"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
            </div>
            <div className="w-[240px] border-r border-neutral-100">
              <div className="flex items-center pl-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                期望发表时间段
              </div>
              <div className="h-[44px]">
                <div className="p-1">
                  <Springen.HoverFill bgClassName="rounded">
                    <div className="flex items-center px-3 h-9">
                      <div className="flex-1 text-sm text-neutral-500">请选择期望发表的时间段</div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H2ZM14 2.07692H2V13.9231H14V2.07692Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path d="M2 5H14V6H2V5Z" fill="#33373D" fillOpacity="0.58" />
                        <path
                          d="M4.5 0C4.77614 1.20706e-08 5 0.223858 5 0.5L5 3.5C5 3.77614 4.77614 4 4.5 4C4.22386 4 4 3.77614 4 3.5V0.5C4 0.223858 4.22386 -1.20706e-08 4.5 0Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M11.5 0C11.7761 1.20706e-08 12 0.223858 12 0.5V3.5C12 3.77614 11.7761 4 11.5 4C11.2239 4 11 3.77614 11 3.5V0.5C11 0.223858 11.2239 -1.20706e-08 11.5 0Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M4 11.5C4 11.2239 4.22386 11 4.5 11H11.5C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                        <path
                          d="M4 8.5C4 8.22386 4.22386 8 4.5 8H11.5C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H4.5C4.22386 9 4 8.77614 4 8.5Z"
                          fill="#33373D"
                          fillOpacity="0.58"
                        />
                      </svg>
                    </div>
                  </Springen.HoverFill>
                </div>
              </div>
            </div>
            <div className="w-[120px] border-r border-neutral-100">
              <div className="flex items-center justify-end pl-4 pr-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                合作报价
              </div>
              <div className="h-[44px]">
                <div className="flex items-center pr-4 justify-end h-[44px] text-sm">￥60,000</div>
              </div>
            </div>
            <div className="w-[84px]">
              <div className="flex items-center pl-[30px] pr-4 h-[44px] text-neutral-500 text-sm border-b border-neutral-100">
                操作
              </div>
              <div className="flex items-center pl-3 h-[44px]">
                <Springen.HoverFill bgClassName="rounded-sm">
                  <div className="flex items-center justify-center size-[26px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM5 8.25V9.75H13V8.25H5Z"
                        fill="#455066"
                        fillOpacity="0.25"
                      />
                    </svg>
                  </div>
                </Springen.HoverFill>
                <Springen.HoverFill bgClassName="rounded-sm">
                  <div className="flex items-center justify-center size-[26px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM8.25 8.25H5V9.75H8.25V13H9.75V9.75H13V8.25H9.75V5H8.25V8.25Z"
                        fill="#455066"
                        fillOpacity="0.25"
                      />
                    </svg>
                  </div>
                </Springen.HoverFill>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
      <hr className="my-4 border-t border-dashed border-neutral-200" />
      <CodeBox className="mt-2 p-0">
        <div className="bg-white flex items-center justify-center p-5 w-full">
          <div>
            <div className="flex h-11 text-xs text-neutral-500">
              <div className="flex items-center w-[78px] pl-2">指数名称</div>
              <div className="flex justify-center items-center w-[70px]">指数值</div>
              <div className="flex justify-center items-center w-[70px]">30天环比</div>
              <div className="flex justify-center items-center w-[70px]">行业均值</div>
              <div className="flex justify-end items-center pr-2 w-[77px]">行业排名</div>
            </div>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex h-11 text-sm group">
                <div className="flex items-center w-[78px] pl-2 group-hover:text-[#296BEF] group-hover:font-semibold transition-colors duration-150">
                  社交指数
                </div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#296BEF] group-hover:font-medium transition-colors duration-150">
                  92.5
                </div>
                <div className="flex justify-center items-center w-[70px]">+0.5%</div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#10AEFF] group-hover:font-semibold transition-colors duration-150">
                  80
                </div>
                <div className="flex justify-end items-center pr-2 w-[77px]">前0.5%</div>
              </div>
            </Springen.HoverFill>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex h-11 text-sm group">
                <div className="flex items-center w-[78px] pl-2 group-hover:text-[#296BEF] group-hover:font-semibold transition-colors duration-150">
                  互动指数
                </div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#296BEF] group-hover:font-medium transition-colors duration-150">
                  84.2
                </div>
                <div className="flex justify-center items-center w-[70px]">-1.1%</div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#10AEFF] group-hover:font-semibold transition-colors duration-150">
                  80
                </div>
                <div className="flex justify-end items-center pr-2 w-[77px]">前50%</div>
              </div>
            </Springen.HoverFill>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex h-11 text-sm group">
                <div className="flex items-center w-[78px] pl-2 group-hover:text-[#296BEF] group-hover:font-semibold transition-colors duration-150">
                  合作指数
                </div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#296BEF] group-hover:font-medium transition-colors duration-150">
                  80.2
                </div>
                <div className="flex justify-center items-center w-[70px]">+3.4%</div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#10AEFF] group-hover:font-semibold transition-colors duration-150">
                  70
                </div>
                <div className="flex justify-end items-center pr-2 w-[77px]">前10%</div>
              </div>
            </Springen.HoverFill>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex h-11 text-sm group">
                <div className="flex items-center w-[78px] pl-2 group-hover:text-[#296BEF] group-hover:font-semibold transition-colors duration-150">
                  性价比指数
                </div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#296BEF] group-hover:font-medium transition-colors duration-150">
                  92.5
                </div>
                <div className="flex justify-center items-center w-[70px]">+0.5%</div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#10AEFF] group-hover:font-semibold transition-colors duration-150">
                  80
                </div>
                <div className="flex justify-end items-center pr-2 w-[77px]">低于50%</div>
              </div>
            </Springen.HoverFill>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex h-11 text-sm group">
                <div className="flex items-center w-[78px] pl-2 group-hover:text-[#296BEF] group-hover:font-semibold transition-colors duration-150">
                  成长指数
                </div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#296BEF] group-hover:font-medium transition-colors duration-150">
                  92.5
                </div>
                <div className="flex justify-center items-center w-[70px]">+0.5%</div>
                <div className="flex justify-center items-center w-[70px] group-hover:text-[#10AEFF] group-hover:font-semibold transition-colors duration-150">
                  80
                </div>
                <div className="flex justify-end items-center pr-2 w-[77px]">低于50%</div>
              </div>
            </Springen.HoverFill>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};

export default Basics;
