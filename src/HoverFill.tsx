import React, { useEffect, useRef } from 'react';
import { SpringenHoverFillProps } from './types';

const DEFAULT_HOVER_COLOR = 'rgba(33, 34, 38, 0.05)';
const DEFAULT_ACTIVE_COLOR = 'rgba(33, 34, 38, 0.08)';

const HoverFill: React.FC<SpringenHoverFillProps> = ({
  bgClassName = '',
  bgStyle = {},
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  hoverColor = DEFAULT_HOVER_COLOR,
  activeColor = DEFAULT_ACTIVE_COLOR,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.persist();
    clearTimeout(window.springenHoverFillState.timer);

    const root = ref.current || e.currentTarget;

    if (!root) {
      return;
    }

    const { x, y } = root.getBoundingClientRect();

    if (
      window.springenHoverFillState.bgVisible &&
      window.springenHoverFillState.bgNode &&
      window.springenHoverFillState.baseNode !== root &&
      window.springenHoverFillState.baseNode.parentNode === root.parentNode
    ) {
      const { bgX, bgY, bgScale, baseNode } = window.springenHoverFillState;
      const { x: originX, y: originY } = baseNode.getBoundingClientRect();
      window.springenHoverFillState.bgNode.style.transformOrigin = '0 0';
      window.springenHoverFillState.bgNode.style.width = root.offsetWidth + 'px';
      window.springenHoverFillState.bgNode.style.transform = `translate3d(${x - originX}px, ${
        y - originY
      }px, 0) scale(${bgScale})`;
    } else {
      if (window.springenHoverFillState.bgVisible && window.springenHoverFillState.bgNode) {
        window.springenHoverFillState.bgNode.style.background = 'transparent';
        window.springenHoverFillState.bgNode.style.transform = 'scale(0.8)';
        window.springenHoverFillState.bgNode.style.transition = '';
      }

      const { clientX, clientY } = e;
      if (bgRef.current) {
        bgRef.current.style.width = root.offsetWidth + 'px';
        bgRef.current.style.transformOrigin = `${clientX - x}px ${clientY - y}px`;
        bgRef.current.style.background = hoverColor;
        bgRef.current.style.transform = 'scale(1)';
        bgRef.current.style.transition = '';
      }
      window.springenHoverFillState = {
        bgVisible: true,
        bgX: clientX - x,
        bgY: clientY - y,
        bgScale: 1,
        baseNode: root,
        bgNode: bgRef.current,
        timer: 0,
      };
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.persist();
    clearTimeout(window.springenHoverFillState.timer);

    const root = ref.current || e.currentTarget;

    if (!root) {
      return;
    }

    window.springenHoverFillState.timer = window.setTimeout(() => {
      if (window.springenHoverFillState.bgNode) {
        window.springenHoverFillState.bgNode.style.transformOrigin = '';
        window.springenHoverFillState.bgNode.style.background = 'transparent';
        window.springenHoverFillState.bgNode.style.width = '';
        window.springenHoverFillState.bgNode.style.transform = '';
        window.springenHoverFillState.bgNode.style.transition = '0s';
      }

      if (bgRef.current) {
        bgRef.current.style.background = hoverColor;
        bgRef.current.style.transform = 'scale(1)';
        bgRef.current.style.transition = '0s';
      }

      setTimeout(() => {
        const { clientX, clientY } = e;
        const { x, y } = root.getBoundingClientRect();
        if (bgRef.current) {
          bgRef.current.style.transformOrigin = `${clientX - x}px ${clientY - y}px`;
          bgRef.current.style.background = 'transparent';
          bgRef.current.style.transform = 'scale(0.8)';
          bgRef.current.style.transition = '';
        }
        window.springenHoverFillState = {
          timer: 0,
          bgVisible: false,
          bgX: 0,
          bgY: 0,
          bgScale: 0,
          baseNode: null,
          bgNode: null,
        };
      }, 0);
    }, 100);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.persist();

    if (window.springenHoverFillState.bgVisible && window.springenHoverFillState.bgNode) {
      window.springenHoverFillState.bgNode.style.background =
        hoverColor === DEFAULT_HOVER_COLOR ? activeColor : hoverColor;
    }

    if (onMouseDown) {
      onMouseDown(e);
    }

    window.addEventListener('mouseup', handleMouseUp, false);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mouseup', handleMouseUp, false);
    if (window.springenHoverFillState.bgNode) {
      window.springenHoverFillState.bgNode.style.background = window.springenHoverFillState.bgVisible
        ? hoverColor
        : 'transparent';
    }
  };

  useEffect(() => {
    if (!window.springenHoverFillState) {
      window.springenHoverFillState = {
        bgVisible: false,
        bgX: 0,
        bgY: 0,
        bgScale: 0,
        baseNode: null,
        bgNode: null,
        timer: 0,
      };
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp, false);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-springen-hover-fill
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      {...props}
    >
      <div data-springen-hover-fill-content>{children}</div>
      <i
        ref={bgRef}
        data-springen-hover-fill-bg
        className={bgClassName}
        style={{
          ...(bgStyle || {}),
        }}
      />
    </div>
  );
};

export default HoverFill;
