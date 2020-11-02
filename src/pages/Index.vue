<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" :style="{
      backgroundImage: `url(${GRIDSOME_API_URL}${$page.posts.edges[0].node.cover.url})`
    }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ edge.node.title }}
              </h3>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">{{ edge.node.content }}</a>
              {{ edge.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <a href>{{ tag.title }}</a>
                &nbsp;&nbsp;
              </span>
            </p>
          </div>
          <hr />
          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            >
          </div> -->
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>

    <hr />
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allStrapiPost(sortBy: "id", order: ASC, perPage: 1, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content
        tags {
          id
          title
        }
        cover {
          url
        }
        created_at
      }
    }
  }
}
</page-query>

<script>
import axios from 'axios';
import { Pager } from 'gridsome'

export default {
  name: 'HomePage',
  metaInfo: {
    title: '首页'
  },
  components: {
    Pager
  },
  async created() {
    // ------ strapi ------
    // const { data } = await axios.post('http://localhost:1337/auth/local', {
    //   identifier: '1974193036@qq.com',
    //   password: 'Dcl123456',
    // });
    // console.log(data); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyOTk4ODE1LCJleHAiOjE2MDU1OTA4MTV9.oC7lOSNFNnwCf_g8X0TA-MgLxmNVRjBDJd3cmRzb0lY
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyOTk4ODE1LCJleHAiOjE2MDU1OTA4MTV9.oC7lOSNFNnwCf_g8X0TA-MgLxmNVRjBDJd3cmRzb0lY';
    // axios
    //   .get('http://localhost:1337/posts', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(response => {
    //     // Handle success.
    //     console.log('Data: ', response.data)
    //   })
    //   .catch(error => {
    //     // Handle error.
    //     console.log('An error occurred:', error.response)
    //   })
  }
}
</script>

<style>
</style>
