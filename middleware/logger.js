export const requestLogger = (req, res, next) => {
    const startTime = Date.now();
    const { method, url } = req;

    res.on('finish', () => {
        const statusCode = res.statusCode;
        const duration = Date.now() - startTime;
        console.log(`${method} ${url} - Status: ${statusCode} - ${duration}ms`);
    });
    
    next();
};