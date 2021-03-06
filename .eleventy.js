// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);

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

    // Returns minor arcana items, sorted by display order
    config.addCollection('minorArcana', collection => {
      return collection
        .getFilteredByGlob('./src/minor-arcana/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    // Returns minor arcana items, sorted by display order
    config.addCollection('blog', collection => {
  return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
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
  