<template>
  <div class="root">
    <h1>Tistory Blog Posts</h1>
    <div class="blog">
      <ul class="blog-posts">
        <li v-for="(post) in posts.slice(0, 10)" :key="post.guid">
          <div class="item-container">
            <div class="image-container">
              <img :src="post.imageUrl" alt="Image" v-if="post.imageUrl" />
              <img v-else src="../assets/logo.png" alt="Image" />
            </div>
            <div class="content-container">
              <h2 style="text-align:left">{{ post.title }}</h2>
              <p style="text-align:left">{{ post.pubDate }}</p>
              <p style="text-align:left">{{ post.category }}</p>
              <div class="textContent">
                <p style="text-align:left">{{ post.textContent }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <a id="blogButton" href="https://sy5683.tistory.com/">Go to Blog</a>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const rssUrl = 'https://sy5683.tistory.com/rss';
      axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent(rssUrl))
        .then(response => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response.data.contents, 'text/xml');
          const items = xmlDoc.querySelectorAll('item');
          let posts = [];
          let count = 0;
          for (const item of items) {
            if (count > 10) {
              break;
            }
            let descriptionHTML = item.querySelector('description').textContent;
            const parser = new DOMParser();
            const descriptionDoc = parser.parseFromString(descriptionHTML, 'text/html');

            // 이미지 태그 추출
            const imageTag = descriptionDoc.querySelector('img');
            const imageUrl = imageTag ? imageTag.getAttribute('src') : '';

            // p 태그 추출 (첫 번째 p 태그만)
            const pTag = descriptionDoc.querySelector('p');
            const textContent = pTag ? pTag.textContent : '';
            posts.push({
              title: item.querySelector('title').textContent,
              pubDate: item.querySelector('pubDate').textContent,
              textContent: textContent.replace('            \n                \n                    320x100\n                    \n                     \n                    \n                \n            ', '') + '...',
              imageUrl: imageUrl,
              category: item.querySelector('category').textContent
            });
          }
          this.posts = posts;
          count++;
        })
        .catch(error => {
          console.log('Error fetching data', error);
        });
    },
    moveToPage() {

    }
  }
};
</script>
  
<style scoped>
.blog {
  display: flex;
  justify-content: center;
  /* 중앙 정렬 */
}

.blogButton {
  margin-bottom: 20px;
}
.blog-posts {
  list-style: none;
}

.item-container {
  display: flex;
  /* align-items: flex-start; 요소들을 위쪽으로 정렬합니다. */
  margin-bottom: 20px;
  width: 50%;
  max-height: 300px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px rgb(203, 203, 203);
  border-radius: 30px 30px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}

.image-container {
  margin-right: 20px;
  width: 40%;
  /* 이미지 컨테이너의 고정된 너비 */
  aspect-ratio: 1/1;
  overflow: hidden;
  /* 이미지가 넘칠 경우 가립니다. */
  border-radius: 30px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.image-container img {
  width: 100%;
  /* 이미지를 컨테이너에 꽉 차게 표시합니다. */
  height: 100%;
  /* 이미지를 컨테이너에 꽉 차게 표시합니다. */
  object-fit: cover;
  /* 이미지를 자르지 않고 비율을 유지하면서 채웁니다. */
}

.content-container {
  flex: 1;
  display: inherit;
  width: 60%;
  height: 100%;
  flex-direction: column;
  /* 요소들을 세로로 정렬합니다. */
  justify-content: flex-start;
  /* 요소들을 위쪽으로 정렬합니다. */
  margin-right: 5px;
}

.title {
  font-size: 18px;
  /* 제목의 글자 크기 */
  white-space: nowrap;
  overflow: hidden;
  /* 텍스트가 넘칠 경우 가립니다. */
  text-overflow: ellipsis;
}

.pubDate {
  font-size: 14px;
  /* 발행일의 글자 크기 */
  color: #888;
  /* 회색으로 표시합니다. */
  white-space: nowrap;
  overflow: hidden;
  /* 텍스트가 넘칠 경우 가립니다. */
  text-overflow: ellipsis;
}

.textContent {
  font-size: 16px;
  /* 내용의 글자 크기 */
  width: 100%;
  line-height: 1.5;
  /* 줄간격 */
  overflow: hidden;
  /* 텍스트가 넘칠 경우 가립니다. */
  text-overflow: ellipsis;
  /* 텍스트가 넘칠 경우 말줄임표를 표시합니다. */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}
</style>
  
  