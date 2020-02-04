import { renderHook } from '@testing-library/react-hooks';

import mocks from './mocks';
import useSystemTheme from '../src';
import hideGlobalErrors from './util/hide-global-errors';

beforeEach(() => {
    // Hide "An update to null inside a test was not wrapped in act(...)" error
    // This won't be needed in react-dom@^16.9.0 because `act()` will support promises
    // See: https://github.com/facebook/react/issues/14769#issuecomment-479592338
    hideGlobalErrors();
});

it('should not run if window.matchMedia is not available', () => {
    window.matchMedia = null;

    const { result } = renderHook(() => useSystemTheme());

    expect(result.current).toBe(null);
});

it('should initialize with the current system theme', () => {
    const windowMatchMediaMock = mocks.windowMatchMedia();

    window.matchMedia = windowMatchMediaMock.mock('light');

    const { result } = renderHook(() => useSystemTheme());

    expect(result.current).toBe('light');

    window.matchMedia = windowMatchMediaMock.mock('dark');

    const { result: result2 } = renderHook(() => useSystemTheme());

    expect(result2.current).toBe('dark');
});

it('should return the new system theme if it changes', () => {
    const windowMatchMediaMock = mocks.windowMatchMedia();

    window.matchMedia = windowMatchMediaMock.mock('no-preferance');

    const { result } = renderHook(() => useSystemTheme());

    expect(result.current).toBe(null);

    window.matchMedia = windowMatchMediaMock.mock('dark');
    windowMatchMediaMock.triggerOnChangeEvent('dark');

    expect(result.current).toBe('dark');

    window.matchMedia = windowMatchMediaMock.mock('light');
    windowMatchMediaMock.triggerOnChangeEvent('light');

    expect(result.current).toBe('light');
});
