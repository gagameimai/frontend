<template>
  <section>
    <div class="img_box banner"></div>
    <div class="container mx-auto px-5 py-20">
      <div v-if="this.question" v-html="this.question"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "question",
  data() {
    return {
      question: ''
    };
  },
  mounted() {
    this.getQuestion();
  },
  methods: {
    getQuestion(){
      this.$http.get('https://admin.meimai.com.tw/api/question').then((response) => {
        let result = response.data.result;
        this.question = result.content;
      })
    }
  }
};
</script>

<style scoped>
.banner {
  background-image: url(~assets/img/qa/banner.png);
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
@media (min-width: 1536px) {
}
</style>
