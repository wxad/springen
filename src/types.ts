import React from 'react';
import type { SliderProps } from 'rc-slider';

declare global {
  interface Window {
    springenHoverFillState: SpringenHoverFillState;
  }
}

export const MOTION_CONFIG = {
  // visualDuration: 0.15,
  // bounce: 0,
  stiffness: 1754.4,
  damping: 83.776,
} as const;


export type SpringenItemValue = string | number;

export interface SpringenItem<T extends SpringenItemValue = SpringenItemValue> {
  value: T;
  label: React.ReactNode | ((item: SpringenItem<T>, index: number, active: boolean) => React.ReactNode);
  disabled?: boolean;
}

export interface SpringenBaseProps<T extends SpringenItemValue = SpringenItemValue> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "onDragEndCapture" | "onDragCapture"> {
  gap?: number;
  items?: SpringenItem<T>[];
  value?: T;
  onChange?: (e: React.MouseEvent<HTMLDivElement>, value: T) => void;
  itemClassName?: string | ((item: SpringenItem<T>, index: number) => string);
  itemStyle?: React.CSSProperties | ((item: SpringenItem<T>, index: number) => React.CSSProperties);
  activeItemClassName?: string | ((item: SpringenItem<T>, index: number) => string);
  activeItemStyle?: React.CSSProperties | ((item: SpringenItem<T>, index: number) => React.CSSProperties);
}

export interface SpringenVerticalProps<T extends SpringenItemValue = SpringenItemValue> extends SpringenBaseProps<T> {
  indicatorWrapperClassName?: string;
  indicatorWrapperStyle?: React.CSSProperties;
  indicatorClassName?: string;
  indicatorStyle?: React.CSSProperties;
}

export interface SpringenDividerProps<T extends SpringenItemValue = SpringenItemValue> extends SpringenBaseProps<T> {
  dividerClassName?: string;
  dividerStyle?: React.CSSProperties;
}

export interface SpringenButtonGroupProps<T extends SpringenItemValue = SpringenItemValue> extends SpringenBaseProps<T> {
  indicatorClassName?: string;
  indicatorStyle?: React.CSSProperties;
}

export interface SpringenTabsProps<T extends SpringenItemValue = SpringenItemValue> extends SpringenBaseProps<T> {
  indicatorClassName?: string;
  indicatorStyle?: React.CSSProperties;
}

export interface SpringenTagProps<T extends SpringenItemValue = SpringenItemValue> extends SpringenBaseProps<T> { }

export interface SpringenHoverFillProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverColor?: string;
  activeColor?: string;
  bgClassName?: string;
  bgStyle?: React.CSSProperties;
}

export interface SpringenHoverFillState {
  timer: number;
  bgVisible: boolean;
  baseNode: HTMLDivElement;
  bgNode: HTMLDivElement;
  bgX: number;
  bgY: number;
  bgScale: number;
}

export interface SpringenPaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: number;
  totalSize: number;
  pageSize?: number;
  onChange?: (e: React.MouseEvent<HTMLDivElement>, value: number, pageSize: number) => void;
  onPageSizeChange?: (newPageSize: number, pageSize: number) => void;
  showPrevNext?: boolean;
}

export type SpringenSliderValue = number | [number, number] | undefined;

export interface SpringenSliderProps<T extends SpringenSliderValue = SpringenSliderValue> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | "defaultValue"> {
  min?: number;
  max?: number;
  step?: number;
  value?: T;
  onChange?: (value: T) => void;
  onChangeComplete?: (value: SpringenSliderValue) => void;
  range?: boolean;
  marks?: SliderProps['marks'];
  unit?: React.ReactNode;
  tooltipVisible?: boolean;
  onTooltipVisibleChange?: (visible: boolean) => void;
}
