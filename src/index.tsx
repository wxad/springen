'use client';

import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Vertical from './Vertical';
import Divider from './Divider';
import ButtonGroup from './ButtonGroup';

const Springen = () => <></>;

Springen.Vertical = Vertical;
Springen.Divider = Divider;
Springen.ButtonGroup = ButtonGroup;

export * from './types';

export default Springen;
