let cleanup;

afterEach(() => {
    if (cleanup) {
        cleanup();
        cleanup = undefined;
    }
});

const hideGlobalErrors = () => {
    if (cleanup) {
        return;
    }

    const originalConsoleError = console.error;
    const globalWindowErrorHandler = (event) => event.preventDefault();

    console.error = jest.fn();
    window.addEventListener('error', globalWindowErrorHandler);

    cleanup = () => {
        console.error = originalConsoleError;
        window.removeEventListener('error', globalWindowErrorHandler);
    };
};

export default hideGlobalErrors;
