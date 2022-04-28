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
    <!-- -->
    <!-- <div class="container mx-auto px-5 py-10 lg:py-20">
      <div
        v-for="(i, idx) in fittings"
        :key="idx"
        class="lg:grid grid-cols-8 gap-8 mb-10"
      >
        <div class="col-span-3 py-0 lg:py-16">
          <div>
            <img
              :src="require(`@/assets/img/fitting/${i.img}`)"
              :alt="i.name"
            />
          </div>
        </div>
        <div class="col-span-5 py-0 md:py-16 flex items-center">
          <div
            class="w-full"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h2 class="text-2xl font-semibold mb-5">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'arrow-alt-circle-right']"
              />{{ i.name }}
            </h2>
            <p class="text-xl mb-8">{{ i.desc }}</p>
            <p class="text-base mb-5">
              <span
                v-for="(j, id) in i.fn"
                :key="id"
                class="inline-block border rounded border-yellow-400 px-3 py-1 mr-3 mb-3"
                >{{ j }}</span
              >
            </p>
            <div class="mb-8">
              <p v-for="(k, d) in i.spec" :key="d" class="mb-3">
                <fa class="text-yellow-400 mr-3" :icon="['fas', 'check']" />{{
                  k.title
                }}
              </p>
            </div>
            <nuxt-link
              :to="{
                name: 'fittingDetail-id',
                query: {
                  id: i.id
                }
              }"
              class="block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3"
              >詳細規格</nuxt-link
            >
          </div>
        </div>
      </div>
    </div> -->
    <!-- -->
    <div class="container mx-auto px-5 py-20">
      <!-- <h2 class="text-center text-3xl font-semibold mb-8">產品總覽</h2> -->
      <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="(i, idx) in fittings" :key="idx" class="col-span-1 py-5">
          <nuxt-link
            :to="{
              name: 'fittingDetail-id',
              query: {
                id: i.id
              }
            }"
          >
            <img
              :src="require(`@/assets/img/fitting/${i.img}`)"
              :alt="i.name"
            />
            <h2 class="text-lg font-medium mb-5">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'arrow-alt-circle-right']"
              />{{ i.name }}
            </h2>
            <hr class="mb-5" />
            <p class="px-2 py-1">
              <fa
                class="text-xs text-yellow-400 mr-3"
                :icon="['fas', 'dot-circle']"
              />材質：{{ i.material }}
            </p>
            <p class="px-2 py-1">
              <fa
                class="text-xs text-yellow-400 mr-3"
                :icon="['fas', 'dot-circle']"
              />電源：{{ i.power }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- end -->
  </section>
</template>

<script>
import fittings from "~/static/fittings.js";
export default {
  name: "fitting",
  data() {
    return {
      fittings
    };
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
