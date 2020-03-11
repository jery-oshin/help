module.exports = {
  siteMetadata: {
    title: 'OshinBlog',
    author: 'Jery Ramirez'
  },
  plugins: [
    'gatsby-plugin-sass', {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}