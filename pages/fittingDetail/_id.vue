<template>
  <section>
    <div class="hidden img_box banner md:flex justify-center items-center">
      <p class="text-white text-2xl font-semibold">
        <span class="hover:text-yellow-400 transition-all duration-300"
          ></span
        >
        <span>首頁 / </span>
        <span>車用配件</span>
        <span> / </span>
        <span>{{ fittingInfo.name }}</span>
      </p>
    </div>
    <!---->
    <div class="container mx-auto px-5 py-20">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-center text-2xl lg:text-3xl font-semibold mb-5">
          {{ fittingInfo.name }}
        </h2>
        <p class="mb-5">{{ fittingInfo.memo_in }}</p>
        <img
            :src="fittingInfo.img"
            :alt="fittingInfo.name"
            class="w-full mb-10" />
      </div>
      <div v-html="fittingInfo.content"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fittingDetail-id",
  data() {
    return {
      fittingInfo: {}
    };
  },
  mounted() {
    this.getFitting();
  },
  methods: {
    getFitting() {
      this.$http.get('https://admin.meimai.com.tw/api/fitting/' + this.$route.query.id).then((response) => {
        let result = response.data.result;
        if (result) {
            this.fittingInfo = result;
            // 後端傳來的圖片置中效果無效，所以透過前端補上Tailwind 置中 css
            this.fittingInfo.content = this.fittingInfo.content.replaceAll('<img', '<img class="mx-auto" style="hight: auto"');
        }
      })
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/main.scss" scoped />
<style scoped>
.banner {
  background-image: url(~assets/img/fitting/banner.png);
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
