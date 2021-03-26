import COLOR_SCHEMES from './color-schemes';

const getCurrentTheme = () => {
    if (window.matchMedia(COLOR_SCHEMES.light).matches) {
        return 'light';
    } else if (window.matchMedia(COLOR_SCHEMES.dark).matches) {
        return 'dark';
    }
};

export default getCurrentTheme;
