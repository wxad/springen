import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { SpringenTabsProps, MOTION_CONFIG, SpringenItemValue } from './types';

const Tabs = <T extends SpringenItemValue>({
  gap = 32,
  items,
  value,
  onChange,
  itemClassName = '',
  itemStyle = {},
  activeItemClassName = '',
  activeItemStyle = {},
  indicatorClassName = '',
  indicatorStyle = {},
  style = {},
  ...props
}: SpringenTabsProps<T>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clipStart = useSpring(0, MOTION_CONFIG);
  const clipEnd = useSpring(0, MOTION_CONFIG);
  const indicatorWidth = useSpring(0, MOTION_CONFIG);
  const indicatorVisible = useMotionValue('hidden');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const clipPath = useTransform([clipStart, clipEnd], ([start, end]) => `inset(0 ${end}px 0 ${start}px round 6px)`);

  const reStyle = () => {
    setTimeout(() => {
      if (!wrapperRef.current) {
        return;
      }
      const currentIndex = items.findIndex((item) => item.value === value);
      const currentEl = itemRefs.current[currentIndex];

      if (currentEl) {
        const newStart = currentEl.offsetLeft;
        const newEnd = wrapperRef.current.offsetWidth - newStart - currentEl.offsetWidth;

        if (indicatorVisible.get() === 'visible') {
          clipStart.set(newStart);
          clipEnd.set(newEnd);
          indicatorWidth.set(currentEl.offsetWidth);
        } else {
          clipStart.set(newStart);
          clipEnd.set(newEnd);
          indicatorWidth.set(currentEl.offsetWidth);
          indicatorVisible.set('visible');
        }
      }
    }, 0);
  };

  useEffect(() => {
    reStyle();
  }, [value, items.length]);

  return (
    <motion.div ref={wrapperRef} data-springen-tabs style={{ gap, ...style }} {...props}>
      {items?.map((item, index) => {
        const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
        const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;

        return (
          <React.Fragment key={item.value}>
            <div
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-springen-tabs-item
              data-springen-tabs-item-disabled={item.disabled}
              className={itemClass}
              style={{
                ...(itemCSS || {}),
              }}
              onClick={(e) => {
                if (onChange && !item.disabled) {
                  onChange(e, item.value);
                }
              }}
            >
              {typeof item.label === 'function' ? item.label(item, index, false) : item.label}
            </div>
          </React.Fragment>
        );
      })}

      <motion.div data-springen-tabs-layer style={{ clipPath, gap }}>
        {items?.map((item, index) => {
          const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
          const activeItemClass =
            typeof activeItemClassName === 'function' ? activeItemClassName(item, index) : activeItemClassName;
          const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;
          const activeItemCSS = typeof activeItemStyle === 'function' ? activeItemStyle(item, index) : activeItemStyle;

          return (
            <div
              key={item.value}
              data-springen-tabs-item
              data-springen-tabs-item-layer
              className={`${itemClass} ${activeItemClass}`}
              style={{
                ...(itemCSS || {}),
                ...(activeItemCSS || {}),
              }}
            >
              {typeof item.label === 'function' ? item.label(item, index, true) : item.label}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        data-springen-tabs-indicator
        style={{
          x: clipStart,
          width: indicatorWidth,
          visibility: indicatorVisible,
          ...indicatorStyle,
        }}
        className={indicatorClassName}
      />
    </motion.div>
  );
};

export default Tabs;
