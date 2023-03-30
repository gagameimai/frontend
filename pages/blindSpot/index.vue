<template>
  <section>
    <div class="img_box banner flex justify-center items-center">
      <div class="text-white text-2xl font-semibold flex">
        <div class="hover:text-yellow-400 transition-all duration-300">
          <nuxt-link to="/">首頁</nuxt-link>
        </div>
        <div> / </div>
        <h1 class="text-white text-2xl font-semibold">盲點偵測</h1>
      </div>
    </div>
    <!-- -->
    <div class="container mx-auto px-5 py-10 md:py-20">
      <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(blindSpot, index) in blindSpotList"
          :key="index"
          class="col-span-1 py-5"
        >
          <nuxt-link
            :to="{
              name: 'blindSpotDetail-id',
              query: {
                id: blindSpot.id
              }
            }"
          >
            <img
              :src="blindSpot.img"
              :alt="blindSpot.name"
            />
            <hr class="mb-5" />
            <h2 class="text-lg font-medium mb-5">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'arrow-alt-circle-right']"
              />{{ blindSpot.name }}
            </h2>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- end -->
  </section>
</template>

<script>
export default {
  name: "blindSpot",
  data() {
    return {
      blindSpotList:[]
    };
  },
  mounted() {
    this.getBlindSpot();
  },
  methods: {
    getBlindSpot() {
      this.$http.get('https://admin.meimai.com.tw/api/blindspot').then((response) => {
        let result = response.data.result;
        if (result) {
          this.blindSpotList = result
        }
      })
    }
  }
};
</script>

<style scoped>
.banner {
  background-image: url(~assets/img/blindSpot/banner.png);
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
