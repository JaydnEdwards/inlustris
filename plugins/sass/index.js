module.exports = {
    onPreBuild: async ({ utils: { run } }) => {
      await run.command(
        "sass src/sass/inlustris.scss dist/css/inlustris.css"
      );
    },
  };