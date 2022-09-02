<template>
  <section>
    <div class="hidden img_box banner md:flex justify-center items-center">
      <p class="text-white text-2xl font-semibold">
        <span class="hover:text-yellow-400 transition-all duration-300"
          ><nuxt-link to="/">首頁</nuxt-link></span
        >
        <span> / </span>
        <span>車用配件</span>
        <span> / </span>
        <span>{{ breadcrumb }}</span>
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
      <div
        v-for="(i, idx) in filterData"
        :key="idx"
        class="lg:grid grid-cols-5 gap-8"
      >
        <div class="col-span-2 py-5">
          <div>
            <img
              class="w-full"
              :src="require(`@/assets/img/fitting/${i.img}`)"
              :alt="i.name"
            />
          </div>
        </div>
        <div class="col-span-3 py-5">
          <h2 class="text-2xl font-semibold mb-3">
            <fa
              class="text-yellow-400 mr-3"
              :icon="['fas', 'arrow-alt-circle-right']"
            />{{ i.name }}
          </h2>
          <p class="mb-8">{{ i.desc }}</p>
          <div v-for="(j, n) in i.spec" :key="n" class="mb-5">
            <h3 class="text-xl font-semibold mb-3">
              <fa class="text-yellow-400 mr-3" :icon="['fas', 'check']" />{{
                j.title
              }}
            </h3>
            <p>{{ j.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="container mx-auto px-5 py-12">
      <div
        v-for="(i, idx) in filterData"
        :key="idx"
        class="max-w-5xl mx-auto text-center"
      >
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
                    />功能：<span v-for="(j, n) in i.fn" :key="n"
                      >{{ j }}、</span
                    >
                  </li>

                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />材質：{{ i.material }}
                  </li>
                  <li v-if="i.size" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />尺寸：{{ i.size }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />電源：{{ i.power }}
                  </li>
                  <li v-if="i.store" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />儲存：{{ i.store }}
                  </li>
                  <li v-if="i.suit" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />適用：{{ i.suit }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-span-1">
              <div class="px-5">
                <ul class="text-left">
                  <li v-if="i.frontLens" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />前置鏡頭：{{ i.frontLens }}
                  </li>
                  <li v-if="i.backLens" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />後置鏡頭：{{ i.backLens }}
                  </li>
                  <li v-if="i.install" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />安裝：{{ i.install }}
                  </li>
                  <li v-if="i.model" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />型號：{{ i.model }}
                  </li>
                  <li v-if="i.dpi" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />解析度：{{ i.dpi }}
                  </li>
                  <li v-if="i.format" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />格式：{{ i.format }}
                  </li>
                  <li v-if="i.angle" class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />角度：{{ i.angle }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="mb-20">
          <img
            v-for="(img, idx) in i.imgs"
            :key="idx"
            :src="require(`@/assets/img/fitting/${img}`)"
            alt=""
          />
        </div>
        <!---->
      </div>
    </div>
  </section>
</template>

<script>
import fittings from "~/static/fittings.js";
export default {
  name: "fittingDetail-id",
  data() {
    return {
      fittings,
      filterData: [],
      breadcrumb: "",
      fittingInfo: {}
    };
  },
  mounted() {
    this.filterData = this.fittings.filter(
      item => item.id == this.$route.query.id
    );
    this.breadcrumb = this.filterData[0].name;
    this.getFitting();
  },
  methods: {
    getFitting() {
      this.$http.get('https://admin.meimai.com.tw/api/fitting/' + this.$route.query.id).then((response) => {
        let result = response.data.result;
        if (result) {
            this.fittingInfo = result;
            // 後端傳來的圖片置中效果無效，所以透過前端補上Tailwind 置中 css 
            this.fittingInfo.content = this.fittingInfo.content.replaceAll('<img', '<img class="mx-auto"');
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
