<template>
  <section>
    <div class="img_box banner flex justify-center items-center">
      <p class="text-white text-2xl font-semibold">
        <span class="hover:text-yellow-400 transition-all duration-300"
          ><nuxt-link to="/">首頁</nuxt-link></span
        >
        <span> / </span>
        <span>盲點偵測</span>
      </p>
    </div>
    <!-- -->
    <div class="container mx-auto px-5 py-10 md:py-20">
      <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(i, idx) in blindSpots.prods"
          :key="idx"
          class="col-span-1 py-5"
        >
          <nuxt-link
            :to="{
              name: 'blindSpotDetail-id',
              query: {
                id: i.id
              }
            }"
          >
            <img
              :src="require(`@/assets/img/blindSpot/${i.img}`)"
              :alt="i.name"
            />
            <hr class="mb-5" />
            <h2 class="text-lg font-medium mb-5">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'arrow-alt-circle-right']"
              />{{ i.name }}
            </h2>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- end -->
  </section>
</template>

<script>
import blindSpots from "~/static/blindSpots.js";
export default {
  name: "blindSpot",
  data() {
    return {
      blindSpots
    };
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
