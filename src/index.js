import { useState, useEffect } from 'react';

export const colorSchemes = {
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
};

function onThemeChange(callback) {
    return (event) => {
        if (!event || !event.matches) {
            return;
        }

        callback();
    };
}

export default function useSystemTheme() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        // SSR or matchMedia not supported
        if (typeof window === 'undefined' || !window.matchMedia) {
            return;
        }

        const lightMatch = window.matchMedia(colorSchemes.light);
        const onLightMatches = onThemeChange(() => setTheme('light'));

        lightMatch.addEventListener('change', onLightMatches);

        const darkMatch = window.matchMedia(colorSchemes.dark);
        const onDarkMatches = onThemeChange(() => setTheme('dark'));

        darkMatch.addEventListener('change', onDarkMatches);

        return () => {
            lightMatch.removeEventListener(onLightMatches);
            darkMatch.removeEventListener(onDarkMatches);
        };
    }, []);

    // SSR or matchMedia not supported
    if (typeof window === 'undefined' || !window.matchMedia) {
        return;
    }

    if (window.matchMedia(colorSchemes.dark).matches && !theme) {
        setTheme('dark');
    } else if (window.matchMedia(colorSchemes.light).matches && !theme) {
        setTheme('light');
    }

    return theme;
}
