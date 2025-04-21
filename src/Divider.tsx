import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { SpringenDividerProps, MOTION_CONFIG, SpringenItemValue } from './types';

const Divider = <T extends SpringenItemValue>({
  gap = 25,
  items,
  value,
  onChange,
  itemClassName = '',
  itemStyle = {},
  activeItemClassName = '',
  activeItemStyle = {},
  dividerClassName = '',
  dividerStyle = {},
  style = {},
  className = '',
  ...props
}: SpringenDividerProps<T>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clipStart = useSpring(0, MOTION_CONFIG);
  const clipEnd = useSpring(0, MOTION_CONFIG);
  const indicatorVisible = useMotionValue('hidden');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const layerClipPath = useTransform([clipStart, clipEnd], ([start, end]) => `inset(0 ${end}px 0 ${start}px)`);

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
        } else {
          clipStart.set(newStart);
          clipEnd.set(newEnd);
          indicatorVisible.set('visible');
        }
      }
    }, 0);
  };

  useEffect(() => {
    reStyle();
  }, [value]);

  return (
    <div ref={wrapperRef} data-springen-divider style={style} {...props}>
      {items?.map((item, index) => {
        const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
        const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;

        return (
          <React.Fragment key={item.value}>
            <div
              data-springen-divider-item
              data-springen-divider-item-disabled={item.disabled}
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
            {index < items.length - 1 && (
              <div
                className={dividerClassName}
                data-springen-divider-divider
                style={{
                  marginLeft: (gap - 1) / 2,
                  marginRight: (gap - 1) / 2,
                  ...dividerStyle,
                }}
              />
            )}
          </React.Fragment>
        );
      })}
      <motion.div
        data-springen-divider-layer
        style={{
          clipPath: layerClipPath,
        }}
      >
        {items?.map((item, index) => {
          const itemClass = typeof itemClassName === 'function' ? itemClassName(item, index) : itemClassName;
          const itemCSS = typeof itemStyle === 'function' ? itemStyle(item, index) : itemStyle;
          const itemLayerClass =
            typeof activeItemClassName === 'function' ? activeItemClassName(item, index) : activeItemClassName;
          const itemLayerCSS = typeof activeItemStyle === 'function' ? activeItemStyle(item, index) : activeItemStyle;

          return (
            <div
              key={item.value}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-springen-divider-item
              data-springen-divider-item-layer
              className={`${itemClass} ${itemLayerClass}`}
              style={{
                ...(itemCSS || {}),
                ...(itemLayerCSS || {}),
                marginLeft: index === 0 ? 0 : gap / 2,
                marginRight: index === items.length - 1 ? 0 : gap / 2,
              }}
            >
              {item.label}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Divider;
