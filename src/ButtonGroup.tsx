import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { SpringenVerticalProps, MOTION_CONFIG } from './types';

const Vertical: React.FC<SpringenVerticalProps> = ({
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
}) => {
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
          clipStart.jump(newStart);
          clipEnd.jump(newEnd);
          indicatorHeight.jump(currentEl.offsetHeight);
          indicatorVisible.set('visible');
        }
      }
    }, 0);
  };

  useEffect(() => {
    reStyle();
  }, [value]);

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
              {item.label}
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
              {item.label}
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
