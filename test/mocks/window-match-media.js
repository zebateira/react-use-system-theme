export default function windowMatchMedia() {
    const listeners = [];

    return {
        listeners,
        mock: (theme) => (query) => ({
            matches: query === `(prefers-color-scheme: ${theme})`,
            addEventListener: (eventName, listener) => listeners.push({ listener, query }),
            removeEventListener: (listenerToRemove) => listeners.filter(({ listener }) => listener !== listenerToRemove),
        }),
        triggerOnChangeEvent: (newTheme) => {
            listeners.forEach(({ listener, query }) => listener({ matches: query === `(prefers-color-scheme: ${newTheme})` }));
        },
    };
}
