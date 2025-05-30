import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { SpringenVerticalProps, MOTION_CONFIG, SpringenItemValue } from './types';

const Vertical = <T extends SpringenItemValue>({
  gap = 14,
  items,
  value,
  onChange,
  itemClassName = '',
  itemStyle = {},
  activeItemClassName = '',
  activeItemStyle = {},
  indicatorWrapperClassName = '',
  indicatorWrapperStyle = {},
  indicatorClassName = '',
  indicatorStyle = {},
  ...props
}: SpringenVerticalProps<T>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clipStart = useSpring(0, MOTION_CONFIG);
  const clipEnd = useSpring(0, MOTION_CONFIG);
  const indicatorHeight = useSpring(0, MOTION_CONFIG);
  const indicatorVisible = useMotionValue('hidden');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const clipPath = useTransform([clipStart, clipEnd], ([start, end]) => `inset(${start}px 0 ${end}px)`);

  const reStyle = () => {
    setTimeout(() => {
      if (!wrapperRef.current) {
        return;
      }
      const currentIndex = items.findIndex((item) => item.value === value);
      const currentEl = itemRefs.current[currentIndex];

      if (currentEl) {
        const newStart = currentEl.offsetTop;
        const newEnd = wrapperRef.current.offsetHeight - newStart - currentEl.offsetHeight;

        if (indicatorVisible.get() === 'visible') {
          clipStart.set(newStart);
          clipEnd.set(newEnd);
          indicatorHeight.set(currentEl.offsetHeight);
        } else {
          clipStart.set(newStart);
          clipEnd.set(newEnd);
          indicatorHeight.set(currentEl.offsetHeight);
          indicatorVisible.set('visible');
        }
      }
    }, 0);
  };

  useEffect(() => {
    reStyle();
  }, [value, items.length]);

  return (
    <motion.div ref={wrapperRef} data-springen-vertical {...props}>
      {items?.map((item, index) => {
        const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
        const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;

        return (
          <React.Fragment key={item.value}>
            <div
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-springen-vertical-item
              data-springen-vertical-item-disabled={item.disabled}
              className={itemClass}
              style={{
                marginBottom: index === items.length - 1 ? 0 : gap,
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

      <motion.div data-springen-vertical-layer style={{ clipPath }}>
        {items?.map((item, index) => {
          const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
          const activeItemClass =
            typeof activeItemClassName === 'function' ? activeItemClassName(item, index) : activeItemClassName;
          const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;
          const activeItemCSS = typeof activeItemStyle === 'function' ? activeItemStyle(item, index) : activeItemStyle;

          return (
            <div
              key={item.value}
              data-springen-vertical-item
              data-springen-vertical-item-layer
              className={`${itemClass} ${activeItemClass}`}
              style={{
                marginBottom: index === items.length - 1 ? 0 : gap,
                ...(itemCSS || {}),
                ...(activeItemCSS || {}),
              }}
            >
              {typeof item.label === 'function' ? item.label(item, index, true) : item.label}
            </div>
          );
        })}
      </motion.div>

      <div data-springen-vertical-indicator-wrapper className={indicatorWrapperClassName} style={indicatorWrapperStyle}>
        <motion.div
          data-springen-vertical-indicator
          style={{
            y: clipStart,
            height: indicatorHeight,
            visibility: indicatorVisible,
            ...indicatorStyle,
          }}
          className={indicatorClassName}
        />
      </div>
    </motion.div>
  );
};

export default Vertical;
