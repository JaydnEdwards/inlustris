module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/css/');
    config.addPassthroughCopy('./src/fonts/');

    // Returns major arcana items, sorted by display order
    config.addCollection('majorArcana', collection => {
      return collection
        .getFilteredByGlob('./src/major-arcana/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    // Returns mminor arcana items, sorted by display order
    config.addCollection('minorArcana', collection => {
      return collection
        .getFilteredByGlob('./src/minor-arcana/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
        

      dir: {
        input: 'src',
        output: 'dist'
      }
    };
  };
  