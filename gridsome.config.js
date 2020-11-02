// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
console.log(process.env.GRIDSOME_API_URL)
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem', // 抓取 .md 文件，生成 GraphQL 数据源
      options: {
        path: './content/blog/**/*.md', // 相当于 GraphQL 的数据源
        typeName: 'BlogPost' // 此处是 GraphQL 类型和模板名称: query { allBlogPost { edges { ... } } }, 必须与src/templates 中的 .vue 文件匹配才能应用其模板
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337', // 接口地址
        apiURL: process.env.GRIDSOME_API_URL, // 接口地址
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'] // 对应的数据类型，接口名称，后面在strapi上建的集合
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  // 定义集合的路由模板，最终打包会生成多个文件
  templates: {
    StrapiPost: [ // 集合名称
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
