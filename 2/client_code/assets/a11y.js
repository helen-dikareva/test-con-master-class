window.addEventListener('load', () => {
    axe
        .run()
        .then(results => {
            if (results.violations.length)
                throw new Error(results.violations.map(violation => violation.description).join('\n'));
        });
});
