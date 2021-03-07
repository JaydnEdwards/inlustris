---
title: 'Blog'
layout: 'layouts/blog-feed.html'
metaDesc: 'A high-quality tarot deck of beautiful imagery and gorgeous colour to help you connect with the meanings behind tarot.'

pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---