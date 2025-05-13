import React, { useEffect, useRef, useState } from 'react';
import RcSlider from 'rc-slider';
import { SpringenSliderProps, SpringenSliderValue } from './types';

const Slider = <T extends SpringenSliderValue>({
  className,
  style,
  min = 0,
  max = 100,
  step = 1,
  value: valueProp = null,
  onChange,
  onChangeComplete,
  range = false,
  unit,
  tooltipVisible: tooltipVisibleProp,
  onTooltipVisibleChange,
  ...restProps
}: SpringenSliderProps<T>) => {
  /**
   * 初始化 Slider 的值
   * 1. 优先判断 Prop value，如果存在 Prop value，则 Slider 完全交由外部控制，内部状态无效；
   * 2. 再判断 Prop defaultValue，如果存在默认值，则 Slider 值为此默认值。
   */
  const [value, setValue] = useState((): SpringenSliderValue => {
    let val: SpringenSliderValue;
    if (valueProp !== null) {
      val = typeof valueProp === 'string' ? Number(valueProp) : valueProp;
    }
    if (val === undefined) {
      return val;
    }
    return range ? val : Number(val);
  });

  const [hoverOpen, setHoverOpen] = useState(false);
  const [focusOpen, setFocusOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  const tooltipLeft = useRef<HTMLDivElement>(null);
  const tooltipRight = useRef<HTMLDivElement>(null);
  const tooltipCombined = useRef<HTMLDivElement>(null);
  const [rangeTooltipCombinedStatus, setRangeTooltipCombinedStatus] = useState<'combined' | 'separated' | 'overlapped'>(
    'separated',
  );
  const tooltipVisible = hoverOpen || focusOpen || tooltipVisibleProp;

  useEffect(() => {
    if (onTooltipVisibleChange) {
      onTooltipVisibleChange(hoverOpen || focusOpen);
    }
  }, [hoverOpen, focusOpen, onTooltipVisibleChange]);

  useEffect(() => {
    if (
      valueProp !== null &&
      valueProp !== undefined &&
      (typeof valueProp === 'object' || !isNaN(valueProp)) &&
      (typeof valueProp === 'string' ? Number(valueProp) : valueProp) !== value
    ) {
      setValue(range ? valueProp : Number(valueProp));
    }
  }, [valueProp]);

  useEffect(() => {
    const onMouseUp = () => {
      // Delay for 1 frame to make the click to enable hide tooltip
      // even when the handle is focused
      setTimeout(() => {
        setFocusOpen(false);
      }, 1);
    };
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  useEffect(() => {
    // 这里做双滑块模式时的 tooltip 设计
    if (range && Array.isArray(value) && tooltipVisible && tooltipLeft.current && tooltipRight.current) {
      const rectLeft = tooltipLeft.current.getBoundingClientRect();
      const rectRight = tooltipRight.current.getBoundingClientRect();
      // 判断两个 tooltip 是否在位置上存在重叠
      if (rectLeft.left === rectRight.left) {
        setRangeTooltipCombinedStatus('overlapped');
      } else if (rectLeft.left + rectLeft.width > rectRight.left) {
        setRangeTooltipCombinedStatus('combined');

        if (tooltipCombined.current) {
          tooltipCombined.current.style.left = `calc(${value[0]}% - ${rectLeft.width / 2}px)`;

          tooltipCombined.current.style.width = `calc(${value[1] - value[0]}% + ${rectLeft.width}px)`;
        }
      } else {
        setRangeTooltipCombinedStatus('separated');
      }
    }
  }, [value, range, tooltipVisible]);

  const checkValueIsValid = (val: number) => {
    return (
      val !== value &&
      val !== null &&
      val !== undefined &&
      min !== undefined &&
      max !== undefined &&
      val >= min &&
      val <= max
    );
  };

  const handleChange = (val: SpringenSliderValue) => {
    const newValue = range ? val : Number(val);
    if (range || (typeof newValue === 'number' && checkValueIsValid(newValue))) {
      if (valueProp === null) {
        setValue(newValue);
      }
      if (onChange) {
        onChange(newValue as T);
      }
    }
  };

  const handleChangeComplete = (val: SpringenSliderValue) => {
    setDragging(false);

    if (valueProp === null) {
      setValue(val);
    }

    if (onChangeComplete) {
      onChangeComplete(val);
    }
  };

  return (
    <div data-springen-slider-wrapper className={className} style={style}>
      {range && Array.isArray(value) && (
        <div
          data-springen-slider-range-tooltip-wrapper
          data-springen-slider-range-tooltip-wrapper-visible={tooltipVisible}
          data-springen-slider-range-tooltip-wrapper-combined={rangeTooltipCombinedStatus === 'combined'}
          data-springen-slider-range-tooltip-wrapper-overlapped={rangeTooltipCombinedStatus === 'overlapped'}
        >
          <div
            data-springen-slider-range-tooltip
            data-springen-slider-range-tooltip-left
            style={{
              left: `${value[0]}%`,
            }}
            ref={tooltipLeft}
          >
            {unit ? `${value[0]}${unit}` : value[0]}
          </div>
          <div
            data-springen-slider-range-tooltip
            data-springen-slider-range-tooltip-right
            style={{
              left: `${value[1]}%`,
            }}
            ref={tooltipRight}
          >
            {unit ? `${value[1]}${unit}` : value[1]}
          </div>
          <div data-springen-slider-range-tooltip-combined ref={tooltipCombined}>
            {value[0]} - {unit ? `${value[1]}${unit}` : value[1]}
          </div>
        </div>
      )}
      <RcSlider
        range={range}
        allowCross={false}
        handleRender={(node, info) => {
          const nodeProps = node.props;

          function proxyEvent(
            eventName: keyof React.DOMAttributes<HTMLElement>,
            event: React.SyntheticEvent,
            triggerRestPropsEvent?: boolean,
          ) {
            if (triggerRestPropsEvent) {
              (restProps as any)[eventName]?.(event);
            }
            (nodeProps as any)[eventName]?.(event);
          }

          const passedProps: typeof nodeProps = {
            ...nodeProps,
            onMouseEnter: (e) => {
              setHoverOpen(true);
              proxyEvent('onMouseEnter', e);
            },
            onMouseLeave: (e) => {
              setHoverOpen(false);
              proxyEvent('onMouseLeave', e);
            },
            onMouseDown: (e) => {
              setFocusOpen(true);
              setDragging(true);
              proxyEvent('onMouseDown', e);
            },
            onFocus: (e) => {
              setFocusOpen(true);
              restProps.onFocus?.(e);
              proxyEvent('onFocus', e, true);
            },
            onBlur: (e) => {
              setFocusOpen(false);
              restProps.onBlur?.(e);
              proxyEvent('onBlur', e, true);
            },
            children: !range && (
              <>
                <div data-springen-slider-handle-tooltip data-springen-slider-handle-tooltip-visible={tooltipVisible}>
                  {unit ? `${info.value}${unit}` : info.value}
                </div>
              </>
            ),
          };
          const cloneNode = React.cloneElement(node, passedProps);
          return cloneNode;
        }}
        value={value}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
        prefixCls="springen-slider"
        {...restProps}
      />
    </div>
  );
};

export default Slider;
