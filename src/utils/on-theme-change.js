const onThemeChange = (callback) => (event) => {
    if (!event?.matches) {
        return;
    }

    callback();
};

export default onThemeChange;
