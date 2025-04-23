import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { SpringenTagProps, MOTION_CONFIG, SpringenItemValue } from './types';

const Tag = <T extends SpringenItemValue>({
  gap = 8,
  items,
  value,
  onChange,
  itemClassName = '',
  itemStyle = {},
  activeItemClassName = '',
  activeItemStyle = {},
  style = {},
  ...props
}: SpringenTagProps<T>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clipStart = useSpring(0, MOTION_CONFIG);
  const clipEnd = useSpring(0, MOTION_CONFIG);
  const indicatorWidth = useSpring(0, MOTION_CONFIG);
  const indicatorVisible = useMotionValue('hidden');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const clipPath = useTransform([clipStart, clipEnd], ([start, end]) => `inset(0 ${end}px 0 ${start}px)`);

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
    <motion.div ref={wrapperRef} data-springen-tag style={{ gap, ...style }} {...props}>
      {items?.map((item, index) => {
        const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
        const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;

        return (
          <React.Fragment key={item.value}>
            <div
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-springen-tag-item
              data-springen-tag-item-disabled={item.disabled}
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
              {item.label}
            </div>
          </React.Fragment>
        );
      })}

      <motion.div data-springen-tag-layer style={{ clipPath, gap }}>
        {items?.map((item, index) => {
          const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
          const activeItemClass =
            typeof activeItemClassName === 'function' ? activeItemClassName(item, index) : activeItemClassName;
          const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;
          const activeItemCSS = typeof activeItemStyle === 'function' ? activeItemStyle(item, index) : activeItemStyle;

          return (
            <div
              key={item.value}
              data-springen-tag-item
              data-springen-tag-item-layer
              className={`${itemClass} ${activeItemClass}`}
              style={{
                ...(itemCSS || {}),
                ...(activeItemCSS || {}),
              }}
            >
              {item.label}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Tag;
