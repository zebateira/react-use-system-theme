declare type EventCallback = (event: MediaQueryListEvent) => never;

declare const onThemeChange: (callback: () => EventCallback) => EventCallback;

export default onThemeChange;
