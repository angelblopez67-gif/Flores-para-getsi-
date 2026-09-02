window.addEventListener('load', () => {
    const loader = setTimeout(() => {
        document.body.classList.remove('not-loaded');
        clearTimeout(loader);
    }, 1000);
});
