'use client';

import React, { useState } from 'react';
import Springen from 'springen';
import CodeBox from '../CodeBox';
import CodeBlock from '../CodeBlock';
import { cn } from '@/lib/utils';

const Basics = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <h3 className="text-[17px] mt-6 font-semibold mb-3 inline-block group relative w-fit">As Light Buttons:</h3>
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
      <h3 className="text-[17px] mt-6 font-semibold mb-3 inline-block group relative w-fit">As Light Cards:</h3>
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
      <h3 className="text-[17px] mt-6 font-semibold mb-3 inline-block group relative w-fit">
        As Light Form Controls in Table:
      </h3>
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
      <h3 className="text-[17px] mt-6 font-semibold mb-3 inline-block group relative w-fit">As Table Rows:</h3>
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
      <h3 className="text-[17px] mt-6 font-semibold mb-3 inline-block group relative w-fit">As List Items:</h3>
      <CodeBox className="mt-2 p-0">
        <div className="w-[366px] max-w-[95%] bg-white">
          <div className="flex items-center justify-between px-5 h-[62px]">
            <div className="flex items-center">
              <Springen.HoverFill bgClassName="rounded-sm">
                <div className="flex items-center justify-center size-[30px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.38564 6.00727C7.09274 5.71437 6.61787 5.71437 6.32498 6.00727L6.00678 6.32547C5.71389 6.61836 5.71389 7.09323 6.00678 7.38613L10.6207 12L6.00678 16.6139C5.71389 16.9068 5.71389 17.3816 6.00678 17.6745L6.32498 17.9927C6.61787 18.2856 7.09274 18.2856 7.38564 17.9927L11.9995 13.3789L16.6134 17.9927C16.9063 18.2856 17.3811 18.2856 17.674 17.9927L17.9922 17.6745C18.2851 17.3816 18.2851 16.9068 17.9922 16.6139L13.3784 12L17.9922 7.38613C18.2851 7.09323 18.2851 6.61836 17.9922 6.32547L17.674 6.00727C17.3811 5.71437 16.9063 5.71437 16.6134 6.00727L11.9995 10.6211L7.38564 6.00727Z"
                      fill="#464749"
                    />
                  </svg>
                </div>
              </Springen.HoverFill>
              <i className="ml-3 mr-4 w-px h-[26px] bg-neutral-200" />
              <div className="text-[18px] font-semibold">自定义列表</div>
            </div>
            <Springen.HoverFill bgClassName="rounded-sm">
              <div className="flex items-center justify-center w-[46px] h-[30px] font-medium text-[13px] text-neutral-500">
                重置
              </div>
            </Springen.HoverFill>
          </div>
          <div className="flex items-center pl-6 h-[54px] text-sm bg-neutral-100 border-y border-neutral-200">
            默认列：创作者、亮点视频、亮点标签
          </div>
          <div className="p-3">
            {['粉丝量级', '粉丝增长量', '粉丝增长率', '平均播放量', '播放中位数'].map((item) => (
              <Springen.HoverFill bgClassName="rounded-lg" key={item}>
                <div className="flex items-center justify-between pl-3 pr-2 h-12 text-sm">
                  {item}
                  <div className="flex items-center justify-center size-8 rounded-sm hover:bg-neutral-200 transition-all">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0004 20.4446C13.4615 20.4446 11.1557 19.0515 9.08296 16.2654C8.96584 16.108 8.96584 15.8923 9.08296 15.7349C11.1557 12.9488 13.4615 11.5557 16.0004 11.5557C18.5393 11.5557 20.8451 12.9487 22.9179 15.7348C23.035 15.8922 23.035 16.1079 22.9179 16.2653C20.8451 19.0514 18.5393 20.4446 16.0004 20.4446ZM16.0004 19.1112C17.7186 19.1112 19.1115 17.7183 19.1115 16.0001C19.1115 14.2819 17.7186 12.889 16.0004 12.889C14.2822 12.889 12.8893 14.2819 12.8893 16.0001C12.8893 17.7183 14.2822 19.1112 16.0004 19.1112ZM16.0004 17.7779C15.0186 17.7779 14.2226 16.9819 14.2226 16.0001C14.2226 15.0183 15.0186 14.2223 16.0004 14.2223C16.9823 14.2223 17.7782 15.0183 17.7782 16.0001C17.7782 16.9819 16.9823 17.7779 16.0004 17.7779Z"
                        fill="#296BEF"
                      />
                    </svg>
                  </div>
                </div>
              </Springen.HoverFill>
            ))}
          </div>
        </div>
      </CodeBox>
      {/* <h3 className="text-[17px] mt-6 font-semibold mb-3 inline-block group relative w-fit">As Nav Items:</h3>
      <CodeBox className="mt-2 p-0">
        <div className="flex-1 bg-black/3">
          <div className="flex items-center mb-4 pl-6 h-[54px]">
            <Springen.HoverFill
              bgClassName="rounded-lg"
              hoverColor="rgba(0, 0, 0, 0.05)"
              activeColor="rgba(0, 0, 0, 0.08)"
            >
              <div
                className="flex items-center justify-center size-8"
                onClick={() => {
                  setCollapsed((bool) => !bool);
                }}
              >
                <div className="relative w-[18px] h-[15px] border-2 rounded-[2px]">
                  <i
                    className={cn(
                      'absolute top-0 left-1 w-[2px] h-full bg-black transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && '-translate-x-0.5 scale-y-70',
                    )}
                  />
                </div>
              </div>
            </Springen.HoverFill>
            <svg className="-ml-5.5 h-[22px]" viewBox="0 0 238 22">
              <path
                d="M28.656 10.384C28.656 9.47733 28.8053 8.656 29.104 7.92C29.4027 7.17333 29.8133 6.53867 30.336 6.016C30.8693 5.49333 31.4987 5.09333 32.224 4.816C32.96 4.528 33.7653 4.384 34.64 4.384C35.5253 4.37333 36.336 4.50667 37.072 4.784C37.808 5.05067 38.4427 5.44533 38.976 5.968C39.5093 6.49067 39.9253 7.12 40.224 7.856C40.5227 8.592 40.672 9.41333 40.672 10.32C40.672 11.2053 40.5227 12.0107 40.224 12.736C39.9253 13.4613 39.5093 14.0853 38.976 14.608C38.4427 15.1307 37.808 15.5413 37.072 15.84C36.336 16.128 35.5253 16.2773 34.64 16.288C33.7653 16.288 32.96 16.1493 32.224 15.872C31.4987 15.584 30.8693 15.184 30.336 14.672C29.8133 14.1493 29.4027 13.5253 29.104 12.8C28.8053 12.0747 28.656 11.2693 28.656 10.384ZM30.768 10.256C30.768 10.864 30.8587 11.424 31.04 11.936C31.232 12.448 31.4987 12.8907 31.84 13.264C32.1813 13.6373 32.5867 13.9307 33.056 14.144C33.536 14.3573 34.0693 14.464 34.656 14.464C35.2427 14.464 35.776 14.3573 36.256 14.144C36.736 13.9307 37.1467 13.6373 37.488 13.264C37.8293 12.8907 38.0907 12.448 38.272 11.936C38.464 11.424 38.56 10.864 38.56 10.256C38.56 9.69067 38.464 9.16267 38.272 8.672C38.0907 8.18133 37.8293 7.75467 37.488 7.392C37.1467 7.01867 36.736 6.73067 36.256 6.528C35.776 6.31467 35.2427 6.208 34.656 6.208C34.0693 6.208 33.536 6.31467 33.056 6.528C32.5867 6.73067 32.1813 7.01867 31.84 7.392C31.4987 7.75467 31.232 8.18133 31.04 8.672C30.8587 9.16267 30.768 9.69067 30.768 10.256ZM42.5921 4.672H47.0561C47.8028 4.672 48.5228 4.78933 49.2161 5.024C49.9095 5.248 50.5228 5.59467 51.0561 6.064C51.5895 6.53333 52.0161 7.12533 52.3361 7.84C52.6561 8.544 52.8161 9.376 52.8161 10.336C52.8161 11.3067 52.6295 12.1493 52.2561 12.864C51.8935 13.568 51.4188 14.1547 50.8321 14.624C50.2561 15.0827 49.6108 15.4293 48.8961 15.664C48.1921 15.888 47.4988 16 46.8161 16H42.5921V4.672ZM46.1121 14.176C46.7415 14.176 47.3335 14.1067 47.8881 13.968C48.4535 13.8187 48.9441 13.5947 49.3601 13.296C49.7761 12.9867 50.1015 12.592 50.3361 12.112C50.5815 11.6213 50.7041 11.0293 50.7041 10.336C50.7041 9.65333 50.5975 9.06667 50.3841 8.576C50.1708 8.08533 49.8721 7.69067 49.4881 7.392C49.1148 7.08267 48.6668 6.85867 48.1441 6.72C47.6321 6.57067 47.0668 6.496 46.4481 6.496H44.6081V14.176H46.1121ZM62.5087 7.328C62.0928 6.88 61.6874 6.58133 61.2928 6.432C60.9088 6.28267 60.5194 6.208 60.1248 6.208C59.5381 6.208 59.0048 6.31467 58.5248 6.528C58.0554 6.73067 57.6501 7.01867 57.3088 7.392C56.9674 7.75467 56.7008 8.18133 56.5088 8.672C56.3274 9.16267 56.2368 9.69067 56.2368 10.256C56.2368 10.864 56.3274 11.424 56.5088 11.936C56.7008 12.448 56.9674 12.8907 57.3088 13.264C57.6501 13.6373 58.0554 13.9307 58.5248 14.144C59.0048 14.3573 59.5381 14.464 60.1248 14.464C60.5834 14.464 61.0261 14.3573 61.4528 14.144C61.8901 13.92 62.2954 13.568 62.6688 13.088L64.3328 14.272C63.8208 14.976 63.1968 15.488 62.4608 15.808C61.7248 16.128 60.9408 16.288 60.1088 16.288C59.2341 16.288 58.4288 16.1493 57.6927 15.872C56.9674 15.584 56.3381 15.184 55.8048 14.672C55.2821 14.1493 54.8714 13.5253 54.5728 12.8C54.2741 12.0747 54.1248 11.2693 54.1248 10.384C54.1248 9.47733 54.2741 8.656 54.5728 7.92C54.8714 7.17333 55.2821 6.53867 55.8048 6.016C56.3381 5.49333 56.9674 5.09333 57.6927 4.816C58.4288 4.528 59.2341 4.384 60.1088 4.384C60.8768 4.384 61.5861 4.52267 62.2368 4.8C62.8981 5.06667 63.5114 5.52533 64.0768 6.176L62.5087 7.328ZM70.4683 4.672H73.5403L76.5643 12.608L79.6203 4.672H82.6603V16H80.7403V6.592H80.7083L77.2683 16H75.8603L72.4203 6.592H72.3883V16H70.4683V4.672ZM84.6728 12.16C84.6728 11.552 84.7794 11.0027 84.9928 10.512C85.2168 10.0107 85.5154 9.584 85.8888 9.232C86.2621 8.88 86.7048 8.608 87.2168 8.416C87.7288 8.224 88.2728 8.128 88.8488 8.128C89.4248 8.128 89.9688 8.224 90.4808 8.416C90.9928 8.608 91.4354 8.88 91.8088 9.232C92.1821 9.584 92.4754 10.0107 92.6888 10.512C92.9128 11.0027 93.0248 11.552 93.0248 12.16C93.0248 12.768 92.9128 13.3227 92.6888 13.824C92.4754 14.3147 92.1821 14.736 91.8088 15.088C91.4354 15.44 90.9928 15.712 90.4808 15.904C89.9688 16.096 89.4248 16.192 88.8488 16.192C88.2728 16.192 87.7288 16.096 87.2168 15.904C86.7048 15.712 86.2621 15.44 85.8888 15.088C85.5154 14.736 85.2168 14.3147 84.9928 13.824C84.7794 13.3227 84.6728 12.768 84.6728 12.16ZM86.5928 12.16C86.5928 12.4587 86.6408 12.7467 86.7368 13.024C86.8434 13.3013 86.9928 13.5467 87.1848 13.76C87.3874 13.9733 87.6274 14.144 87.9048 14.272C88.1821 14.4 88.4968 14.464 88.8488 14.464C89.2008 14.464 89.5154 14.4 89.7928 14.272C90.0701 14.144 90.3048 13.9733 90.4968 13.76C90.6994 13.5467 90.8488 13.3013 90.9448 13.024C91.0514 12.7467 91.1048 12.4587 91.1048 12.16C91.1048 11.8613 91.0514 11.5733 90.9448 11.296C90.8488 11.0187 90.6994 10.7733 90.4968 10.56C90.3048 10.3467 90.0701 10.176 89.7928 10.048C89.5154 9.92 89.2008 9.856 88.8488 9.856C88.4968 9.856 88.1821 9.92 87.9048 10.048C87.6274 10.176 87.3874 10.3467 87.1848 10.56C86.9928 10.7733 86.8434 11.0187 86.7368 11.296C86.6408 11.5733 86.5928 11.8613 86.5928 12.16ZM94.8224 8.32H96.6464V9.552H96.6784C96.8597 9.168 97.137 8.83733 97.5104 8.56C97.8837 8.272 98.3904 8.128 99.0304 8.128C99.5424 8.128 99.9744 8.21333 100.326 8.384C100.689 8.55467 100.982 8.77867 101.206 9.056C101.43 9.33333 101.59 9.65333 101.686 10.016C101.782 10.3787 101.83 10.7573 101.83 11.152V16H99.9104V12.112C99.9104 11.8987 99.8997 11.664 99.8784 11.408C99.857 11.1413 99.7984 10.896 99.7024 10.672C99.617 10.4373 99.4784 10.2453 99.2864 10.096C99.0944 9.936 98.833 9.856 98.5024 9.856C98.1824 9.856 97.9104 9.90933 97.6864 10.016C97.473 10.1227 97.2917 10.2667 97.1424 10.448C97.0037 10.6293 96.9024 10.8373 96.8384 11.072C96.7744 11.3067 96.7424 11.552 96.7424 11.808V16H94.8224V8.32ZM105.546 12.832C105.61 13.408 105.834 13.856 106.218 14.176C106.602 14.496 107.066 14.656 107.61 14.656C108.09 14.656 108.49 14.56 108.81 14.368C109.141 14.1653 109.429 13.9147 109.674 13.616L111.05 14.656C110.602 15.2107 110.101 15.6053 109.546 15.84C108.991 16.0747 108.41 16.192 107.802 16.192C107.226 16.192 106.682 16.096 106.17 15.904C105.658 15.712 105.215 15.44 104.842 15.088C104.469 14.736 104.17 14.3147 103.946 13.824C103.733 13.3227 103.626 12.768 103.626 12.16C103.626 11.552 103.733 11.0027 103.946 10.512C104.17 10.0107 104.469 9.584 104.842 9.232C105.215 8.88 105.658 8.608 106.17 8.416C106.682 8.224 107.226 8.128 107.802 8.128C108.335 8.128 108.821 8.224 109.258 8.416C109.706 8.59733 110.085 8.864 110.394 9.216C110.714 9.568 110.959 10.0053 111.13 10.528C111.311 11.04 111.402 11.632 111.402 12.304V12.832H105.546ZM109.482 11.392C109.471 10.8267 109.295 10.384 108.954 10.064C108.613 9.73333 108.138 9.568 107.53 9.568C106.954 9.568 106.495 9.73333 106.154 10.064C105.823 10.3947 105.621 10.8373 105.546 11.392H109.482ZM112.301 9.952V8.32H113.885V6.096H115.805V8.32H117.917V9.952H115.805V13.312C115.805 13.696 115.875 14 116.013 14.224C116.163 14.448 116.451 14.56 116.877 14.56C117.048 14.56 117.235 14.544 117.437 14.512C117.64 14.4693 117.8 14.4053 117.917 14.32V15.936C117.715 16.032 117.464 16.096 117.165 16.128C116.877 16.1707 116.621 16.192 116.397 16.192C115.885 16.192 115.464 16.1333 115.133 16.016C114.813 15.9093 114.557 15.744 114.365 15.52C114.184 15.2853 114.056 14.9973 113.981 14.656C113.917 14.3147 113.885 13.92 113.885 13.472V9.952H112.301ZM119.464 8.32H121.384V16H119.464V8.32ZM119.192 5.712C119.192 5.40267 119.304 5.136 119.528 4.912C119.762 4.67733 120.056 4.56 120.408 4.56C120.76 4.56 121.053 4.672 121.288 4.896C121.533 5.10933 121.656 5.38133 121.656 5.712C121.656 6.04267 121.533 6.32 121.288 6.544C121.053 6.75733 120.76 6.864 120.408 6.864C120.056 6.864 119.762 6.752 119.528 6.528C119.304 6.29333 119.192 6.02133 119.192 5.712ZM123.044 14.224L127.156 9.888V9.856H123.236V8.32H129.476V10.064L125.316 14.464H129.668V16H123.044V14.224ZM136.107 14.944H136.059C135.781 15.3813 135.429 15.7013 135.003 15.904C134.576 16.096 134.107 16.192 133.595 16.192C133.243 16.192 132.896 16.144 132.555 16.048C132.224 15.952 131.925 15.808 131.659 15.616C131.403 15.424 131.195 15.184 131.035 14.896C130.875 14.608 130.795 14.272 130.795 13.888C130.795 13.472 130.869 13.12 131.019 12.832C131.168 12.5333 131.365 12.288 131.611 12.096C131.867 11.8933 132.16 11.7333 132.491 11.616C132.821 11.4987 133.163 11.4133 133.515 11.36C133.877 11.296 134.24 11.2587 134.603 11.248C134.965 11.2267 135.307 11.216 135.627 11.216H136.107V11.008C136.107 10.528 135.941 10.1707 135.611 9.936C135.28 9.69067 134.859 9.568 134.347 9.568C133.941 9.568 133.563 9.64267 133.211 9.792C132.859 9.93067 132.555 10.1227 132.299 10.368L131.291 9.36C131.717 8.92267 132.213 8.608 132.779 8.416C133.355 8.224 133.947 8.128 134.555 8.128C135.099 8.128 135.557 8.192 135.931 8.32C136.304 8.43733 136.613 8.592 136.859 8.784C137.104 8.976 137.291 9.2 137.419 9.456C137.557 9.70133 137.653 9.952 137.707 10.208C137.771 10.464 137.808 10.7147 137.819 10.96C137.829 11.1947 137.835 11.4027 137.835 11.584V16H136.107V14.944ZM135.995 12.56H135.595C135.328 12.56 135.029 12.5707 134.699 12.592C134.368 12.6133 134.053 12.6667 133.755 12.752C133.467 12.8267 133.221 12.944 133.019 13.104C132.816 13.2533 132.715 13.4667 132.715 13.744C132.715 13.9253 132.752 14.08 132.827 14.208C132.912 14.3253 133.019 14.4267 133.147 14.512C133.275 14.5973 133.419 14.6613 133.579 14.704C133.739 14.736 133.899 14.752 134.059 14.752C134.72 14.752 135.205 14.5973 135.515 14.288C135.835 13.968 135.995 13.536 135.995 12.992V12.56ZM139.005 9.952V8.32H140.589V6.096H142.509V8.32H144.621V9.952H142.509V13.312C142.509 13.696 142.578 14 142.717 14.224C142.866 14.448 143.154 14.56 143.581 14.56C143.751 14.56 143.938 14.544 144.141 14.512C144.343 14.4693 144.503 14.4053 144.621 14.32V15.936C144.418 16.032 144.167 16.096 143.869 16.128C143.581 16.1707 143.325 16.192 143.101 16.192C142.589 16.192 142.167 16.1333 141.837 16.016C141.517 15.9093 141.261 15.744 141.069 15.52C140.887 15.2853 140.759 14.9973 140.685 14.656C140.621 14.3147 140.589 13.92 140.589 13.472V9.952H139.005ZM146.167 8.32H148.087V16H146.167V8.32ZM145.895 5.712C145.895 5.40267 146.007 5.136 146.231 4.912C146.466 4.67733 146.759 4.56 147.111 4.56C147.463 4.56 147.756 4.672 147.991 4.896C148.236 5.10933 148.359 5.38133 148.359 5.712C148.359 6.04267 148.236 6.32 147.991 6.544C147.756 6.75733 147.463 6.864 147.111 6.864C146.759 6.864 146.466 6.752 146.231 6.528C146.007 6.29333 145.895 6.02133 145.895 5.712ZM149.907 12.16C149.907 11.552 150.014 11.0027 150.227 10.512C150.451 10.0107 150.75 9.584 151.123 9.232C151.496 8.88 151.939 8.608 152.451 8.416C152.963 8.224 153.507 8.128 154.083 8.128C154.659 8.128 155.203 8.224 155.715 8.416C156.227 8.608 156.67 8.88 157.043 9.232C157.416 9.584 157.71 10.0107 157.923 10.512C158.147 11.0027 158.259 11.552 158.259 12.16C158.259 12.768 158.147 13.3227 157.923 13.824C157.71 14.3147 157.416 14.736 157.043 15.088C156.67 15.44 156.227 15.712 155.715 15.904C155.203 16.096 154.659 16.192 154.083 16.192C153.507 16.192 152.963 16.096 152.451 15.904C151.939 15.712 151.496 15.44 151.123 15.088C150.75 14.736 150.451 14.3147 150.227 13.824C150.014 13.3227 149.907 12.768 149.907 12.16ZM151.827 12.16C151.827 12.4587 151.875 12.7467 151.971 13.024C152.078 13.3013 152.227 13.5467 152.419 13.76C152.622 13.9733 152.862 14.144 153.139 14.272C153.416 14.4 153.731 14.464 154.083 14.464C154.435 14.464 154.75 14.4 155.027 14.272C155.304 14.144 155.539 13.9733 155.731 13.76C155.934 13.5467 156.083 13.3013 156.179 13.024C156.286 12.7467 156.339 12.4587 156.339 12.16C156.339 11.8613 156.286 11.5733 156.179 11.296C156.083 11.0187 155.934 10.7733 155.731 10.56C155.539 10.3467 155.304 10.176 155.027 10.048C154.75 9.92 154.435 9.856 154.083 9.856C153.731 9.856 153.416 9.92 153.139 10.048C152.862 10.176 152.622 10.3467 152.419 10.56C152.227 10.7733 152.078 11.0187 151.971 11.296C151.875 11.5733 151.827 11.8613 151.827 12.16ZM160.057 8.32H161.881V9.552H161.913C162.094 9.168 162.371 8.83733 162.745 8.56C163.118 8.272 163.625 8.128 164.265 8.128C164.777 8.128 165.209 8.21333 165.561 8.384C165.923 8.55467 166.217 8.77867 166.441 9.056C166.665 9.33333 166.825 9.65333 166.921 10.016C167.017 10.3787 167.065 10.7573 167.065 11.152V16H165.145V12.112C165.145 11.8987 165.134 11.664 165.113 11.408C165.091 11.1413 165.033 10.896 164.937 10.672C164.851 10.4373 164.713 10.2453 164.521 10.096C164.329 9.936 164.067 9.856 163.737 9.856C163.417 9.856 163.145 9.90933 162.921 10.016C162.707 10.1227 162.526 10.2667 162.377 10.448C162.238 10.6293 162.137 10.8373 162.073 11.072C162.009 11.3067 161.977 11.552 161.977 11.808V16H160.057V8.32ZM174.155 4.672H177.963C178.507 4.672 179.029 4.72533 179.531 4.832C180.043 4.93867 180.491 5.12 180.875 5.376C181.259 5.62133 181.563 5.95733 181.787 6.384C182.021 6.8 182.139 7.32267 182.139 7.952C182.139 8.66667 182.016 9.24267 181.771 9.68C181.525 10.1173 181.195 10.4587 180.779 10.704C180.363 10.9387 179.877 11.0987 179.323 11.184C178.779 11.2693 178.208 11.312 177.611 11.312H176.171V16H174.155V4.672ZM177.387 9.584C177.675 9.584 177.973 9.57333 178.283 9.552C178.592 9.53067 178.875 9.46667 179.131 9.36C179.397 9.25333 179.611 9.09333 179.771 8.88C179.941 8.66667 180.027 8.368 180.027 7.984C180.027 7.632 179.952 7.35467 179.803 7.152C179.653 6.93867 179.461 6.77867 179.227 6.672C178.992 6.55467 178.731 6.48 178.443 6.448C178.155 6.416 177.877 6.4 177.611 6.4H176.171V9.584H177.387ZM183.792 3.904H185.712V16H183.792V3.904ZM192.716 14.944H192.668C192.391 15.3813 192.039 15.7013 191.612 15.904C191.185 16.096 190.716 16.192 190.204 16.192C189.852 16.192 189.505 16.144 189.164 16.048C188.833 15.952 188.535 15.808 188.268 15.616C188.012 15.424 187.804 15.184 187.644 14.896C187.484 14.608 187.404 14.272 187.404 13.888C187.404 13.472 187.479 13.12 187.628 12.832C187.777 12.5333 187.975 12.288 188.22 12.096C188.476 11.8933 188.769 11.7333 189.1 11.616C189.431 11.4987 189.772 11.4133 190.124 11.36C190.487 11.296 190.849 11.2587 191.212 11.248C191.575 11.2267 191.916 11.216 192.236 11.216H192.716V11.008C192.716 10.528 192.551 10.1707 192.22 9.936C191.889 9.69067 191.468 9.568 190.956 9.568C190.551 9.568 190.172 9.64267 189.82 9.792C189.468 9.93067 189.164 10.1227 188.908 10.368L187.9 9.36C188.327 8.92267 188.823 8.608 189.388 8.416C189.964 8.224 190.556 8.128 191.164 8.128C191.708 8.128 192.167 8.192 192.54 8.32C192.913 8.43733 193.223 8.592 193.468 8.784C193.713 8.976 193.9 9.2 194.028 9.456C194.167 9.70133 194.263 9.952 194.316 10.208C194.38 10.464 194.417 10.7147 194.428 10.96C194.439 11.1947 194.444 11.4027 194.444 11.584V16H192.716V14.944ZM192.604 12.56H192.204C191.937 12.56 191.639 12.5707 191.308 12.592C190.977 12.6133 190.663 12.6667 190.364 12.752C190.076 12.8267 189.831 12.944 189.628 13.104C189.425 13.2533 189.324 13.4667 189.324 13.744C189.324 13.9253 189.361 14.08 189.436 14.208C189.521 14.3253 189.628 14.4267 189.756 14.512C189.884 14.5973 190.028 14.6613 190.188 14.704C190.348 14.736 190.508 14.752 190.668 14.752C191.329 14.752 191.815 14.5973 192.124 14.288C192.444 13.968 192.604 13.536 192.604 12.992V12.56ZM195.614 9.952V8.32H197.198V6.096H199.118V8.32H201.23V9.952H199.118V13.312C199.118 13.696 199.187 14 199.326 14.224C199.475 14.448 199.763 14.56 200.19 14.56C200.361 14.56 200.547 14.544 200.75 14.512C200.953 14.4693 201.113 14.4053 201.23 14.32V15.936C201.027 16.032 200.777 16.096 200.478 16.128C200.19 16.1707 199.934 16.192 199.71 16.192C199.198 16.192 198.777 16.1333 198.446 16.016C198.126 15.9093 197.87 15.744 197.678 15.52C197.497 15.2853 197.369 14.9973 197.294 14.656C197.23 14.3147 197.198 13.92 197.198 13.472V9.952H195.614ZM203.432 9.952H201.848V8.32H203.432V7.232C203.432 6.69867 203.47 6.21867 203.544 5.792C203.619 5.35467 203.758 4.98133 203.96 4.672C204.174 4.36267 204.467 4.128 204.84 3.968C205.214 3.79733 205.699 3.712 206.296 3.712C206.734 3.712 207.139 3.74933 207.512 3.824L207.384 5.456C207.246 5.424 207.112 5.39733 206.984 5.376C206.856 5.35467 206.723 5.344 206.584 5.344C206.318 5.344 206.104 5.38667 205.944 5.472C205.784 5.55733 205.656 5.67467 205.56 5.824C205.475 5.96267 205.416 6.128 205.384 6.32C205.363 6.512 205.352 6.71467 205.352 6.928V8.32H207.128V9.952H205.352V16H203.432V9.952ZM207.985 12.16C207.985 11.552 208.092 11.0027 208.305 10.512C208.529 10.0107 208.828 9.584 209.201 9.232C209.575 8.88 210.017 8.608 210.529 8.416C211.041 8.224 211.585 8.128 212.161 8.128C212.737 8.128 213.281 8.224 213.793 8.416C214.305 8.608 214.748 8.88 215.121 9.232C215.495 9.584 215.788 10.0107 216.001 10.512C216.225 11.0027 216.337 11.552 216.337 12.16C216.337 12.768 216.225 13.3227 216.001 13.824C215.788 14.3147 215.495 14.736 215.121 15.088C214.748 15.44 214.305 15.712 213.793 15.904C213.281 16.096 212.737 16.192 212.161 16.192C211.585 16.192 211.041 16.096 210.529 15.904C210.017 15.712 209.575 15.44 209.201 15.088C208.828 14.736 208.529 14.3147 208.305 13.824C208.092 13.3227 207.985 12.768 207.985 12.16ZM209.905 12.16C209.905 12.4587 209.953 12.7467 210.049 13.024C210.156 13.3013 210.305 13.5467 210.497 13.76C210.7 13.9733 210.94 14.144 211.217 14.272C211.495 14.4 211.809 14.464 212.161 14.464C212.513 14.464 212.828 14.4 213.105 14.272C213.383 14.144 213.617 13.9733 213.809 13.76C214.012 13.5467 214.161 13.3013 214.257 13.024C214.364 12.7467 214.417 12.4587 214.417 12.16C214.417 11.8613 214.364 11.5733 214.257 11.296C214.161 11.0187 214.012 10.7733 213.809 10.56C213.617 10.3467 213.383 10.176 213.105 10.048C212.828 9.92 212.513 9.856 212.161 9.856C211.809 9.856 211.495 9.92 211.217 10.048C210.94 10.176 210.7 10.3467 210.497 10.56C210.305 10.7733 210.156 11.0187 210.049 11.296C209.953 11.5733 209.905 11.8613 209.905 12.16ZM218.135 8.32H220.055V9.536H220.087C220.3 9.088 220.604 8.74133 220.999 8.496C221.394 8.25067 221.847 8.128 222.359 8.128C222.476 8.128 222.588 8.13867 222.695 8.16C222.812 8.18133 222.93 8.208 223.047 8.24V10.096C222.887 10.0533 222.727 10.0213 222.567 10C222.418 9.968 222.268 9.952 222.119 9.952C221.671 9.952 221.308 10.0373 221.031 10.208C220.764 10.368 220.556 10.5547 220.407 10.768C220.268 10.9813 220.172 11.1947 220.119 11.408C220.076 11.6213 220.055 11.7813 220.055 11.888V16H218.135V8.32ZM224.555 8.32H226.379V9.52H226.411C226.582 9.15733 226.854 8.83733 227.227 8.56C227.611 8.272 228.123 8.128 228.763 8.128C229.968 8.128 230.768 8.60267 231.163 9.552C231.44 9.06133 231.787 8.704 232.203 8.48C232.619 8.24533 233.115 8.128 233.691 8.128C234.203 8.128 234.635 8.21333 234.987 8.384C235.339 8.55467 235.622 8.78933 235.835 9.088C236.059 9.38667 236.219 9.73867 236.315 10.144C236.411 10.5387 236.459 10.9653 236.459 11.424V16H234.539V11.648C234.539 11.4133 234.518 11.1893 234.475 10.976C234.432 10.752 234.358 10.56 234.251 10.4C234.144 10.2293 234 10.096 233.819 10C233.638 9.904 233.403 9.856 233.115 9.856C232.816 9.856 232.56 9.91467 232.347 10.032C232.144 10.1387 231.974 10.288 231.835 10.48C231.707 10.6613 231.611 10.8747 231.547 11.12C231.494 11.3547 231.467 11.5947 231.467 11.84V16H229.547V11.424C229.547 10.944 229.446 10.5653 229.243 10.288C229.04 10 228.704 9.856 228.235 9.856C227.915 9.856 227.643 9.90933 227.419 10.016C227.206 10.1227 227.024 10.2667 226.875 10.448C226.736 10.6293 226.635 10.8373 226.571 11.072C226.507 11.3067 226.475 11.552 226.475 11.808V16H224.555V8.32Z"
                fill="black"
                fillOpacity="0.96"
              />
            </svg>
          </div>
          <div className="flex text-base text-black/60">
            <div
              className={cn(
                'flex flex-col gap-3 ml-5 mr-14 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                collapsed ? 'w-10' : 'w-[186px]',
              )}
            >
              <Springen.HoverFill
                bgClassName="rounded-lg"
                hoverColor="rgba(0, 0, 0, 0.05)"
                activeColor="rgba(0, 0, 0, 0.08)"
              >
                <div className="relative flex items-center gap-2 h-10 overflow-hidden">
                  <svg
                    viewBox="0 0 20 20"
                    className={cn(
                      'absolute left-4 top-2.5 size-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && '-translate-x-1.5',
                    )}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.41104 2.60111C9.73648 2.27568 10.2641 2.27568 10.5895 2.60111L15.8337 7.84523V15.8333C15.8337 16.2936 15.4606 16.6667 15.0003 16.6667H11.667V12.2917C11.667 11.9465 11.3872 11.6667 11.042 11.6667H8.95867C8.61349 11.6667 8.33367 11.9465 8.33367 12.2917V16.6667H5.00034C4.5401 16.6667 4.167 16.2936 4.167 15.8333V7.84515L9.41104 2.60111ZM2.50034 9.51182L2.28149 9.73066C2.03741 9.97474 1.64169 9.97474 1.39761 9.73066L1.10298 9.43603C0.858902 9.19195 0.858902 8.79623 1.10298 8.55215L8.23253 1.4226C9.20884 0.446291 10.7917 0.446291 11.7681 1.4226L18.4809 8.13548C18.725 8.37956 18.725 8.77529 18.4809 9.01937L18.1863 9.31399C18.0009 9.49945 17.7278 9.54399 17.5003 9.44762V15.8333C17.5003 17.2141 16.381 18.3333 15.0003 18.3333H11.042H8.95867H5.00034C3.61962 18.3333 2.50034 17.2141 2.50034 15.8333V9.51182Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div
                    className={cn(
                      'absolute left-11 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && 'opacity-0 -translate-x-1.5',
                    )}
                  >
                    Home
                  </div>
                </div>
              </Springen.HoverFill>
              <Springen.HoverFill
                bgClassName="rounded-lg"
                hoverColor="rgba(0, 0, 0, 0.05)"
                activeColor="rgba(0, 0, 0, 0.08)"
              >
                <div className="relative flex items-center gap-2 h-10 overflow-hidden">
                  <svg
                    viewBox="0 0 20 20"
                    className={cn(
                      'absolute left-4 top-2.5 size-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && '-translate-x-1.5',
                    )}
                    fill="none"
                  >
                    <rect
                      x="2.50033"
                      y="2.50002"
                      width="5.83333"
                      height="5.83333"
                      rx="0.833333"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                    />
                    <rect
                      x="11.6663"
                      y="2.50002"
                      width="5.83333"
                      height="5.83333"
                      rx="0.833333"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                    />
                    <rect
                      x="2.50033"
                      y="11.6666"
                      width="5.83333"
                      height="5.83333"
                      rx="0.833333"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                    />
                    <rect
                      x="11.6663"
                      y="11.6666"
                      width="5.83333"
                      height="5.83333"
                      rx="0.833333"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                    />
                  </svg>
                  <div
                    className={cn(
                      'absolute left-11 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && 'opacity-0 -translate-x-1.5',
                    )}
                  >
                    Apps
                  </div>
                </div>
              </Springen.HoverFill>
              <Springen.HoverFill
                bgClassName="rounded-lg"
                hoverColor="rgba(0, 0, 0, 0.05)"
                activeColor="rgba(0, 0, 0, 0.08)"
              >
                <div className="relative flex items-center gap-2 h-10 overflow-hidden">
                  <svg
                    viewBox="0 0 20 20"
                    className={cn(
                      'absolute left-4 top-2.5 size-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && '-translate-x-1.5',
                    )}
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.16699 3.33335H15.8337C16.2939 3.33335 16.667 3.70645 16.667 4.16669V15.8334C16.667 16.2936 16.2939 16.6667 15.8337 16.6667H4.16699C3.70675 16.6667 3.33366 16.2936 3.33366 15.8334V4.16669C3.33366 3.70645 3.70675 3.33335 4.16699 3.33335ZM1.66699 4.16669C1.66699 2.78597 2.78628 1.66669 4.16699 1.66669H15.8337C17.2144 1.66669 18.3337 2.78598 18.3337 4.16669V15.8334C18.3337 17.2141 17.2144 18.3334 15.8337 18.3334H4.16699C2.78628 18.3334 1.66699 17.2141 1.66699 15.8334V4.16669ZM11.0192 7.64747C11.0192 8.10771 11.3923 8.48081 11.8525 8.48081H12.3365L10.4059 10.5768L9.20229 9.23946C8.67451 8.65303 7.75321 8.65859 7.23255 9.25135L4.44258 12.4276C4.13885 12.7734 4.17294 13.2999 4.51872 13.6037C4.86451 13.9074 5.39104 13.8733 5.69477 13.5275L8.22587 10.646L9.42337 11.9765C9.94285 12.5537 10.8462 12.5589 11.3723 11.9877L13.3336 9.8584V9.96184C13.3336 10.4221 13.7066 10.7952 14.1669 10.7952C14.6271 10.7952 15.0002 10.4221 15.0002 9.96184V7.85735C15.0002 7.2812 14.5332 6.81414 13.957 6.81414H11.8525C11.3923 6.81414 11.0192 7.18724 11.0192 7.64747Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div
                    className={cn(
                      'absolute left-11 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && 'opacity-0 -translate-x-1.5',
                    )}
                  >
                    Performance
                  </div>
                </div>
              </Springen.HoverFill>
              <Springen.HoverFill
                bgClassName="rounded-lg"
                hoverColor="rgba(0, 0, 0, 0.05)"
                activeColor="rgba(0, 0, 0, 0.08)"
              >
                <div className="relative flex items-center gap-2 h-10 overflow-hidden">
                  <svg
                    viewBox="0 0 20 20"
                    className={cn(
                      'absolute left-4 top-2.5 size-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && '-translate-x-1.5',
                    )}
                    fill="currentColor"
                  >
                    <g clipPath="url(#clip0_966_1012)">
                      <g clipPath="url(#clip1_966_1012)">
                        <path d="M10 0.625C15.1777 0.625 19.375 4.82233 19.375 10C19.375 12.4979 18.3953 14.765 16.8027 16.4453C17.2261 17.3707 17.4638 18.3969 17.4639 19.4785L17.4531 19.6377C17.0074 22.8588 2.99659 22.8588 2.55078 19.6377L2.54004 19.4785C2.54009 18.3985 2.77705 17.3736 3.19922 16.4492C1.60493 14.7686 0.625 12.4994 0.625 10C0.625 4.82233 4.82233 0.625 10 0.625ZM15.4736 17.6084C13.9332 18.7186 12.0438 19.375 10 19.375C7.95666 19.375 6.06759 18.7191 4.52734 17.6094C4.34022 18.1408 4.22992 18.707 4.21094 19.2949L4.21289 19.2969C4.39306 19.439 4.75767 19.6315 5.36035 19.8164C6.54877 20.1809 8.23677 20.3867 10.002 20.3867C11.7669 20.3867 13.4542 20.1808 14.6426 19.8164C15.2451 19.6316 15.6098 19.439 15.79 19.2969L15.791 19.2949C15.772 18.7066 15.6609 18.1402 15.4736 17.6084ZM10.002 13.7715C8.06839 13.7715 6.3677 14.7004 5.31738 16.1211C6.61555 17.1157 8.2382 17.708 10 17.708C11.7623 17.708 13.3853 17.1152 14.6836 16.1201C13.6337 14.7002 11.9348 13.7715 10.002 13.7715ZM10 2.29199C5.74281 2.29199 2.29199 5.74281 2.29199 10C2.29199 11.8909 2.97369 13.6219 4.10352 14.9629C4.95765 13.8749 6.11224 13.0283 7.44531 12.5479C6.39023 11.7999 5.68213 10.5942 5.6123 9.21973L5.60645 8.99512C5.60672 6.59156 7.55541 4.64279 9.95898 4.64258L10.1836 4.64844C12.483 4.76525 14.3113 6.66672 14.3115 8.99512L14.3057 9.21973C14.2365 10.5819 13.5413 11.7789 12.502 12.5283C13.8575 13.0045 15.0315 13.8583 15.8975 14.96C17.0262 13.6193 17.708 11.8898 17.708 10C17.708 5.74281 14.2572 2.29199 10 2.29199ZM9.95898 6.30957C8.47589 6.30978 7.27371 7.51203 7.27344 8.99512C7.27344 10.4784 8.47572 11.6814 9.95898 11.6816C11.4424 11.6816 12.6455 10.4786 12.6455 8.99512C12.6452 7.51191 11.4423 6.30957 9.95898 6.30957Z"></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_966_1012">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                      <clipPath id="clip1_966_1012">
                        <rect x="0.625" y="0.625" width="18.75" height="18.75" rx="9.375" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    className={cn(
                      'absolute left-11 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]',
                      collapsed && 'opacity-0 -translate-x-1.5',
                    )}
                  >
                    Members
                  </div>
                </div>
              </Springen.HoverFill>
            </div>
            <div className="flex-1 mr-4 mb-4">
              <div className="mb-6 text-[36px] font-semibold text-black/96">Apps</div>
              <div className="h-[300px] bg-white rounded-[12px]" />
            </div>
          </div>
        </div>
      </CodeBox> */}
    </div>
  );
};

export default Basics;
