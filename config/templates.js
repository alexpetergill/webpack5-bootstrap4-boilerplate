module.exports = {
  templates: [
    {
      filename: 'home.html',
      template: 'src/html/home.html',
      chunks: ['main'],
    },
    {
      filename: 'other.html',
      template: 'src/html/other.html',
      chunks: ['main'],
    },
  ],
}
