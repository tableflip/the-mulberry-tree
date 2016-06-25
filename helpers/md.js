var md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
})
.use(require('markdown-it-container'), 'text-primary')
.use(require('markdown-it-container'), 'lead')

module.exports = md
