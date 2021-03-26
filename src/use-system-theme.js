import {
    useEffect,
    useState,
} from 'react';
import { COLOR_SCHEMES, supportsThemes, onThemeChange, useIsomorphicLayoutEffect } from './utils';

const useThemeSystem = (initialTheme = null) => {
    const [theme, setTheme] = useState(initialTheme);

    // Listen for theme changes
    useEffect(() => {
        if (!supportsThemes()) {
            return;
        }

        // Register listeners
        const listeners = Object.entries(COLOR_SCHEMES).map(([identifier, scheme]) => {
            const listener = window.matchMedia(scheme);
            const onChange = onThemeChange(() => setTheme(identifier));

            listener.addListener(onChange);

            return [
                listener, onChange,
            ];
        });

        // Remove listeners
        return () =>
            listeners.forEach(([listener, fn]) => listener.removeListener(fn));
    }, []);

    // Sync theme
    useIsomorphicLayoutEffect(() => {
        if (!supportsThemes()) {
            return;
        }

        for (const [identifier, scheme] of Object.entries(COLOR_SCHEMES)) {
            if (theme !== identifier && window.matchMedia(scheme).matches) {
                setTheme(identifier);
                break;
            }
        }
    }, [theme]);

    return theme;
};

export default useThemeSystem;
