const supportsThemes = () => Boolean(typeof window !== 'undefined' && window.matchMedia);

export default supportsThemes;
