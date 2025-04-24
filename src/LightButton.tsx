import React, { useEffect, useRef } from 'react';
import { SpringenLightButtonProps } from './types';

const LightButton: React.FC<SpringenLightButtonProps> = ({
  bgClassName = '',
  bgStyle = {},
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    clearTimeout(window.springenLightButtonState.timer);
    const { x, y } = ref.current.getBoundingClientRect();

    if (
      window.springenLightButtonState.bgVisible &&
      window.springenLightButtonState.bgNode &&
      window.springenLightButtonState.buttonNode !== ref.current &&
      window.springenLightButtonState.buttonNode.parentNode === ref.current.parentNode
    ) {
      const { bgX, bgY, bgScale, buttonNode } = window.springenLightButtonState;
      const { x: originX, y: originY } = buttonNode.getBoundingClientRect();
      window.springenLightButtonState.bgNode.style.transformOrigin = '0 0';
      window.springenLightButtonState.bgNode.style.width = ref.current.offsetWidth + 'px';
      window.springenLightButtonState.bgNode.style.transform = `translate3d(${x - originX}px, ${
        y - originY
      }px, 0) scale(${bgScale})`;
    } else {
      if (window.springenLightButtonState.bgVisible && window.springenLightButtonState.bgNode) {
        window.springenLightButtonState.bgNode.style.background = 'rgba(33, 34, 38, 0)';
        window.springenLightButtonState.bgNode.style.transform = 'scale(0.7)';
        window.springenLightButtonState.bgNode.style.transition = '';
      }

      const { clientX, clientY } = e;
      if (bgRef.current) {
        bgRef.current.style.width = ref.current.offsetWidth + 'px';
        bgRef.current.style.transformOrigin = `${clientX - x}px ${clientY - y}px`;
        bgRef.current.style.background = 'rgba(33, 34, 38, 0.05)';
        bgRef.current.style.transform = 'scale(1)';
        bgRef.current.style.transition = '';
      }
      window.springenLightButtonState = {
        bgVisible: true,
        bgX: clientX - x,
        bgY: clientY - y,
        bgScale: 1,
        buttonNode: ref.current,
        bgNode: bgRef.current,
        timer: 0,
      };
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    clearTimeout(window.springenLightButtonState.timer);
    window.springenLightButtonState.timer = window.setTimeout(() => {
      if (window.springenLightButtonState.bgNode) {
        window.springenLightButtonState.bgNode.style.transformOrigin = '';
        window.springenLightButtonState.bgNode.style.background = 'rgba(33, 34, 38, 0)';
        window.springenLightButtonState.bgNode.style.width = '';
        window.springenLightButtonState.bgNode.style.transform = '';
        window.springenLightButtonState.bgNode.style.transition = '0s';
      }

      if (bgRef.current) {
        bgRef.current.style.background = 'rgba(33, 34, 38, 0.05)';
        bgRef.current.style.transform = 'scale(1)';
        bgRef.current.style.transition = '0s';
      }

      setTimeout(() => {
        const { clientX, clientY } = e;
        const { x, y } = ref.current.getBoundingClientRect();
        if (bgRef.current) {
          bgRef.current.style.transformOrigin = `${clientX - x}px ${clientY - y}px`;
          bgRef.current.style.background = 'rgba(33, 34, 38, 0)';
          bgRef.current.style.transform = 'scale(0.7)';
          bgRef.current.style.transition = '';
        }
        window.springenLightButtonState = {
          timer: 0,
          bgVisible: false,
          bgX: 0,
          bgY: 0,
          bgScale: 0,
          buttonNode: null,
          bgNode: null,
        };
      }, 0);
    }, 100);
  };

  useEffect(() => {
    if (!window.springenLightButtonState) {
      window.springenLightButtonState = {
        bgVisible: false,
        bgX: 0,
        bgY: 0,
        bgScale: 0,
        buttonNode: null,
        bgNode: null,
        timer: 0,
      };
    }
  }, []);

  return (
    <button
      ref={ref}
      data-springen-light-button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      <i
        ref={bgRef}
        data-springen-light-button-bg
        className={bgClassName}
        style={{
          ...(bgStyle || {}),
        }}
      />
    </button>
  );
};

export default LightButton;
