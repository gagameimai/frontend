<template>
  <section>
    <div class="hidden img_box banner md:flex justify-center items-center">
      <p class="text-white text-2xl font-semibold">
        <span class="hover:text-yellow-400 transition-all duration-300"
          ><nuxt-link to="/">首頁</nuxt-link></span
        >
        <span> / </span>
        <span>安卓多媒體機</span>
        <span> / </span>
        <span>{{ breadcrumb }}</span>
      </p>
    </div>
    <div class="container mx-auto px-5 py-20">
      <div
        v-for="(i, idx) in filterData"
        :key="idx"
        class="max-w-5xl mx-auto text-center"
      >
        <!---->
        <div>
          <h2 class="text-center text-3xl font-semibold mb-5">
            {{ i.mode }}
          </h2>
          <p>{{ i.title }}</p>
          <img
            :src="require(`@/assets/img/multimedia/${i.img}`)"
            :alt="i.mode"
            class="w-full"
          />
        </div>
        <!---->
        <div class="mb-20">
          <h2 class="text-center text-3xl font-semibold mb-5">
            系統效能
          </h2>
          <p class="mb-10">{{ i.subTitle }}</p>
          <div class="md:grid grid-cols-3 gap-8 mb-5">
            <div class="col-span-1">
              <div>
                <p class="mb-5">
                  <fa
                    class="text-5xl text-yellow-400"
                    :icon="['fas', 'microchip']"
                  />
                </p>
                <p class="text-xl font-semibold">{{ i.core }}</p>
              </div>
            </div>
            <div class="col-span-1">
              <div>
                <p class="mb-5">
                  <fa
                    class="text-5xl text-yellow-400"
                    :icon="['fab', 'android']"
                  />
                </p>
                <p class="text-xl font-semibold">{{ i.system }}</p>
              </div>
            </div>
            <div class="col-span-1">
              <div>
                <p class="mb-5">
                  <fa
                    class="text-5xl text-yellow-400"
                    :icon="['fas', 'memory']"
                  />
                </p>
                <p class="text-xl font-semibold">{{ i.memory }}</p>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="mb-20">
          <h2 class="text-center text-3xl font-semibold mb-10">
            產品規格
          </h2>
          <div class="md:grid grid-cols-2">
            <div class="col-span-1 md:border-r">
              <div class="px-5">
                <ul class="text-left">
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />硬體：{{ i.core }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />記憶體：{{ i.memory }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />系統：{{ i.system }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />解析度：{{ i.dpi }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />連結：{{ i.connect }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />尺寸：<span v-for="(j, id) in i.size" :key="id">{{
                      j
                    }}</span>
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />DSP：{{ i.dsp }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />高清倒車：{{ i.backLens }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />方向盤控制：{{ i.wheel }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-span-1">
              <div class="px-5">
                <ul class="text-left">
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />收音機：{{ i.radio }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />GPS：{{ i.gps }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />USB：{{ i.usb }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />Carplay：{{ i.carplay }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />分割畫面：{{ i.pip }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />行車記錄器：{{ i.recorder }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />頭枕輸出：{{ i.output }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />建議售價：{{ i.price }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="text-left">
          <p class="mb-5">
            內容物： <span v-for="(j, x) in i.fitting" :key="x">{{ j }}、</span>
          </p>
          <p class="mb-1">備註：</p>
          <ol>
            <li v-for="(j, x) in i.notice" :key="x">{{ j }}</li>
          </ol>
        </div>
        <!---->
        <div class="mb-20">
          <img
            v-for="(img, idx) in i.imgs"
            :key="idx"
            :src="require(`@/assets/img/multimedia/${img}`)"
            alt=""
          />
        </div>
        <!---->
      </div>
    </div>
  </section>
</template>

<script>
import multimedias from "~/static/multimedias.js";
export default {
  name: "multimediaDetail-id",
  data() {
    return {
      multiMediasInfo: {},
      multimedias,
      filterData: [],
      breadcrumb: ""
    };
  },
  mounted() {
    this.filterData = this.multimedias.filter(
      item => item.id == this.$route.query.id
    );
    this.breadcrumb = this.filterData[0].mode;
    this.getMultiMedias();
  },
  methods: {
    getMultiMedias() {
      this.$http.get('https://admin.meimai.com.tw/api/multimedia/' + this.$route.query.id).then((response) => {
        let result = response.data.result;
        if (result) {
          this.multiMediasInfo = result
        }
      })
    }
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
