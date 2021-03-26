import { useEffect, useLayoutEffect } from 'react';
import supportsThemes from './supports-themes';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
