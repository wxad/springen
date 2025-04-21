import React from 'react';

export const MOTION_CONFIG = {
  // visualDuration: 0.15,
  // bounce: 0,
  stiffness: 1754.4,
  damping: 83.776,
} as const;


export type SpringenItemValue = string;

export interface SpringenItem<T extends SpringenItemValue = SpringenItemValue> {
  value: T;
  label: React.ReactNode;
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
