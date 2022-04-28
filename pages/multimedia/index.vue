<template>
  <section class="overflow-hidden">
    <div class="hidden md:flex img_box banner justify-center items-center">
      <p class="text-white text-2xl font-semibold">
        <span class="hover:text-yellow-400 transition-all duration-300"
          ><nuxt-link to="/">首頁</nuxt-link></span
        >
        <span> / </span>
        <span>安卓多媒體機</span>
      </p>
    </div>
    <!-- -->
    <div class="container mx-auto px-5 py-20">
      <div
        v-for="(i, idx) in multimedias"
        :key="idx"
        class="lg:grid grid-cols-8 gap-8 mb-10"
      >
        <div class="col-span-3 py-0 lg:py-16">
          <div>
            <img
              :src="require(`@/assets/img/multimedia/${i.img}`)"
              :alt="i.name"
              class="w-full"
            />
          </div>
        </div>
        <div class="col-span-5 py-0 md:py-16 flex items-center">
          <div
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
            <p class="text-xl mb-8">{{ i.title }}</p>
            <p class="text-base mb-5">
              <span
                v-for="(j, id) in i.size"
                :key="id"
                class="border rounded border-yellow-400 px-3 py-1 mr-3"
                >{{ j }}</span
              >
            </p>
            <p class="text-base mb-3">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'check']"
              />硬體：{{ i.core }}
            </p>
            <p class="text-base mb-3">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'check']"
              />記憶體：{{ i.memory }}
            </p>
            <p class="text-base mb-3">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'check']"
              />解析度：{{ i.dpi }}
            </p>
            <p class="text-base mb-8">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'check']"
              />建議售價：{{ i.price }}
            </p>
            <nuxt-link
              :to="{
                name: 'multimediaDetail-id',
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
    </div>
    <!-- -->
    <div class="hidden lg:block container mx-auto px-5 py-10 md:py-20">
      <h2 class="text-center text-3xl font-semibold mb-8">規格比較</h2>
      <div class="lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
        <div
          v-for="(i, idx) in multimedias"
          :key="idx"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-once="true"
          data-aos-anchor-placement="bottom-bottom"
          class="col-span-1 py-5"
        >
          <img
            :src="require(`@/assets/img/multimedia/${i.img}`)"
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
            />硬體：{{ i.core }}
          </p>
          <p class="px-2 py-1">
            <fa
              class="text-xs text-yellow-400 mr-3"
              :icon="['fas', 'dot-circle']"
            />記憶體：{{ i.memory }}
          </p>
          <p class="px-2 py-1">
            <fa
              class="text-xs text-yellow-400 mr-3"
              :icon="['fas', 'dot-circle']"
            />解析度：{{ i.dpi }}
          </p>
          <p class="px-2 py-1">
            <fa
              class="text-xs text-yellow-400 mr-3"
              :icon="['fas', 'dot-circle']"
            />系統：{{ i.system }}
          </p>
          <p class="px-2 py-1">
            <fa
              class="text-xs text-yellow-400 mr-3"
              :icon="['fas', 'dot-circle']"
            />DSP：{{ i.dsp }}
          </p>
          <p class="px-2 py-1">
            <fa
              class="text-xs text-yellow-400 mr-3"
              :icon="['fas', 'dot-circle']"
            />建議售價：{{ i.price }}
          </p>
        </div>
      </div>
    </div>
    <!-- end -->
  </section>
</template>

<script>
import multimedias from "~/static/multimedias.js";
export default {
  name: "multimedia",
  data() {
    return {
      multimedias
    };
  }
};
</script>

<style scoped>
.banner {
  background-image: url(~assets/img/multimedia/banner.png);
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
