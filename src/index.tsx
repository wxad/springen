'use client';

import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Vertical from './Vertical';
import Divider from './Divider';
import ButtonGroup from './ButtonGroup';
import Tabs from './Tabs';
import Tag from './Tag';

const Springen = () => <></>;

Springen.Vertical = Vertical;
Springen.Divider = Divider;
Springen.ButtonGroup = ButtonGroup;
Springen.Tabs = Tabs;
Springen.Tag = Tag;

export * from './types';

export default Springen;
