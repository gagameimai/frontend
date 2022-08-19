<template>
  <section class="overflow-hidden">
    <div class="hidden img_box banner md:flex justify-center items-center">
      <p class="text-white text-2xl font-semibold">
        <span class="hover:text-yellow-400 transition-all duration-300"
          ><nuxt-link to="/">首頁</nuxt-link></span
        >
        <span> / </span>
        <span>車用配件</span>
      </p>
    </div>
    <div class="container mx-auto px-5 py-20">
      <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="(fitting, index) in fittingList" :key="index" class="col-span-1 py-5">
          <nuxt-link
            :to="{
              name: 'fittingDetail-id',
              query: {
                id: fitting.id
              }
            }"
          >
            <img
              :src="fitting.img"
              :alt="fitting.name" />
            <h2 class="text-lg font-medium mb-5">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'arrow-alt-circle-right']"
              />{{ fitting.name }}
            </h2>
            <hr class="mb-5" />
            <p class="px-2 py-1">
              <fa
                class="text-xs text-yellow-400 mr-3"
                :icon="['fas', 'dot-circle']"
              />材質: {{ fitting.material }}
            </p>
            <p class="px-2 py-1">
              <fa
                class="text-xs text-yellow-400 mr-3"
                :icon="['fas', 'dot-circle']"
              />電源: {{ fitting.power }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- end -->
  </section>
</template>

<script>
export default {
  name: "fitting",
  data() {
    return {
      fittingList: []
    };
  },
  mounted() {
    this.getFitting();
  },
  methods: {
    getFitting() {
      this.$http.get('https://admin.meimai.com.tw/api/fitting').then((response) => {
        let result = response.data.result;
        if (result) {
            this.fittingList = result;
        }
      })
    }
  }
};
</script>

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
