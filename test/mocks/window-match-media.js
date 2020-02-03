export default function windowMatchMedia() {
    const listeners = [];

    return {
        listeners,
        mock: (theme) => (query) => ({
            matches: query === `(prefers-color-scheme: ${theme})`,
            addListener: (listener) => listeners.push({ listener, query }),
            removeListener: (listenerToRemove) => listeners.filter(({ listener }) => listener !== listenerToRemove),
        }),
        triggerOnChangeEvent: (newTheme) => {
            listeners.forEach(({ listener, query }) => listener({ matches: query === `(prefers-color-scheme: ${newTheme})` }));
        },
    };
}
