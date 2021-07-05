---
path: /blog/markdown-files
date: 2020-02-18T15:44:02.080Z
author: Yo
title: cómo son los markdown!
image: ''
tags: ['markdown', 'md', 'files']
---

As seen in the frontmatter (the block surrounded in dashes), we specified the post's title and date. You can inject any piece of data here. Like the tags, categories, featured image URL, posts description etc.
At the top is the front matter that represents general info about the post.
We plan to store all our markdown file here.
Now we have two places that Gatsby should know about:
1. src/images and
2. src/blog

The whole process is base on nodes:
1. we query for nodes.
2. gatsby-source-filesystem plugin “scans” the directories we tell it to (images and blog), and
3. creates nodes for each file in those directories.
4. gatsby-markdown-remark plugin comes, parses data inside the nodes, and adds extra fields to those node objects.
5. Furthermore, Gatsby then concludes and comes up with a GraphQL schema for those nodes, based on their content.