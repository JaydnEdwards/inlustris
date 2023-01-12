// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);
    config.addFilter("limit", function (arr, limit) {
      return arr.slice(0, limit);
    });
    config.addFilter("randomLimit", (arr, limit, currPage) => {
      // Filters out current page
      const pageArr = arr.filter((page) => page.url !== currPage);
    
      // Randomizes remaining items
      pageArr.sort(() => {
        return 0.5 - Math.random();
      });
    
      // Returns array items up to limit
      return pageArr.slice(0, limit);
    });

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
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
        .getFilteredByGlob(['./src/minor-arcana/pentacles/*.md', './src/minor-arcana/wands/*.md', './src/minor-arcana/cups/*.md', './src/minor-arcana/swords/*.md'])
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    // Returns minor arcana items, sorted by display order
    config.addCollection('wands', collection => {
      return collection
        .getFilteredByGlob('./src/minor-arcana/wands/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    config.addCollection('pentacles', collection => {
      return collection
        .getFilteredByGlob('./src/minor-arcana/pentacles/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    config.addCollection('cups', collection => {
      return collection
        .getFilteredByGlob('./src/minor-arcana/cups/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    config.addCollection('swords', collection => {
      return collection
        .getFilteredByGlob('./src/minor-arcana/swords/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    // Returns minor arcana items, sorted by display order
    config.addCollection('blog', collection => {
  return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
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
  