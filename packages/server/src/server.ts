import app from './app';

(async () => {
  try {
    await app.ready();
    app.log.debug(`\nRoutes:\n${app.printRoutes()}`);
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.fatal(err);
    process.exit(1);
  }
})();
