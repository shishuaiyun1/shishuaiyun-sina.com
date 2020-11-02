<template>
  <Layout>
    <!-- 详情页 -->
    <header
      class="masthead"
      :style="{backgroundImage: `url(${GRIDSOME_API_URL}${$page.post.cover.url})`}"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{$page.post.title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <p v-html="mdToHtml($page.post.content)"></p>
          </div>
        </div>
      </div>
    </article>
    <!-- <div> -->
      <!-- 详情页 ----------- {{ $route.params.id }} -->
      <!-- <h1>{{ $page.post.title }}</h1> -->
      <!-- <p>{{ $page.post.content }}</p> -->
      <!-- <p v-html="mdToHtml($page.post.content)"></p> -->
    <!-- </div> -->
  </Layout>
</template>

<page-query>
# ID! 不能为空，动态路由参数会自动传入进来
query($id: ID!) {
  post: strapiPost(id: $id) {
    id
    title
    content
    cover {
      url
    }
    tags {
      id
      title
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'PostPage',
  // metaInfo: {
  //   title: 'Post2'
  // },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  }
}
</script>