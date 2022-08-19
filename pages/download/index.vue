<template>
  <section>
    <div class="img_box banner"></div>
    <div class="container mx-auto px-5 py-40 md:py-20">
      <div class="max-w-5xl mx-auto mb-16">
        <h2 class="text-2xl font-semibold uppercase lg:text-4xl mb-5">
          資源下載
        </h2>
        <div v-for="(i, idx) in download" :key="idx" class="mb-10">
          <h6
            @click.stop="i.isShow = !i.isShow"
            class="font-medium text-xl cursor-pointer mb-5"
          >
            <fa
              v-if="i.isShow"
              class="text-sm text-yellow-400 mr-2"
              :icon="['fas', 'minus']"
            />
            <fa
              v-else
              class="text-sm text-yellow-400 mr-2"
              :icon="['fas', 'plus']"
            />

            <span>{{ i.title }}</span>
          </h6>
          <transition name="slide">
            <div v-if="i.isShow">
              <p v-for="(x, n) in i.desc" :key="n" class="mb-3">{{ x }}</p>
              <ul>
                <li
                  v-for="(j, index) in i.version"
                  :key="index"
                  class="border rounded px-3 py-2 mb-3"
                >
                  <p>
                    <span class="mr-5">{{ j.name }}</span>
                    <a :href="j.link" target="_blank"
                      ><fa
                        class="text-sm text-yellow-400 mr-2"
                        :icon="['fas', 'download']"
                      /><span class="text-yellow-400">下載</span></a
                    >
                  </p>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import download from "~/static/download.js";
export default {
  name: "download",
  data() {
    return {
      download,
      versionList: []
    };
  },
  mounted() {
    this.getResource();
  },
  methods: {
    getResource() {
      this.$http.get('https://admin.meimai.com.tw/api/resource').then((response) => {
        let result = response.data.result;
        if (result) {
            this.versionList = result;
        }
      })
    }
  }
};
</script>

<style scoped>
.banner {
  background-image: url(~assets/img/download/banner.png);
}
/* vue slide up down */

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
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
