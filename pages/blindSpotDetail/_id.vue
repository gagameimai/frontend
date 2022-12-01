<template>
  <section>
    <div class="hidden img_box banner md:flex justify-center items-center">
      <p class="text-white text-2xl font-semibold">
        <span class="hover:text-yellow-400 transition-all duration-300"
          ></span
        >
        <span>首頁 / </span>
        <span>盲點偵測</span>
        <span> / </span>
        <span>{{ breadcrumb }}</span>
      </p>
    </div>
    <!---->
    <div class="container mx-auto px-5 py-20">
      <div
        v-for="(i, idx) in filterData"
        :key="idx"
        class="max-w-5xl mx-auto text-center"
      >
        <!---->
        <div>
          <h2 class="text-center text-2xl lg:text-3xl font-semibold mb-5">
            {{ i.name }}
          </h2>
          <p class="mb-5">{{ i.desc }}</p>
          <img
            :src="require(`@/assets/img/blindSpot/${i.img}`)"
            :alt="i.name"
            class="w-full mb-10"
          />
        </div>
        <!---->
        <div class="mb-20">
          <h2 class="text-center text-2xl lg:text-3xl font-semibold mb-10">
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
                    />工作頻率：{{ i.frequency }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />發射功率：{{ i.watt }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />探測範圍：{{ i.detectRange }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />速度範圍：{{ i.speedRange }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />速度準確值：{{ i.accurate }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />啟動方式：{{ i.startup }}
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
                    />
                    探測距離：<span
                      v-for="(d, index) in i.distance"
                      :key="index"
                      >{{ d }}</span
                    >
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />工作電壓：{{ i.voltage }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />防水等級：{{ i.IPS }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />工作電流：{{ i.ampere }}
                  </li>
                  <li class="py-1">
                    <fa
                      class="mr-3"
                      :icon="['fas', 'arrow-alt-circle-right']"
                    />工作溫度：{{ i.tempture }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="mb-20">
          <img
            v-for="(img, ix) in i.imgs"
            :key="ix"
            class="w-full"
            :src="require(`@/assets/img/blindSpot/${img}`)"
            alt=""
          />
        </div>
      </div>
    </div>
    <!---->
    <div class="container mx-auto px-5 py-10 md:py-20">
      <h2 class="text-center text-2xl lg:text-3xl font-semibold mb-5">
        適用車款
      </h2>
      <div class="flex justify-center items-center">
        <select
          v-model="blandValue"
          name=""
          id=""
          class="block w-56 border rounded px-3 py-1 mx-auto mb-10"
        >
          <option v-for="(bland, idx) in blands" :key="idx">{{ bland }}</option>
        </select>
      </div>
      <!---->
      <h3 class="text-2xl font-semibold mb-5">{{ blandValue }}</h3>
      <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 mb-14">
        <div
          v-for="(i, idx) in blindSpots[blandValue]"
          :key="idx"
          class="col-span-1 mb-5 md:mb-0"
        >
          <div class="border border-gray-300 rounded px-5 py-3">
            <h4 class="font-semibold">車款：{{ i.car }}</h4>
            <p>年份：{{ i.year }}</p>
            <p>規格：{{ i.spec }}</p>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <!---->
  </section>
</template>

<script>
import blindSpots from "~/static/blindSpots.js";
export default {
  name: "blindSpotDetail-id",
  data() {
    return {
      blindSpotInfo: {},
      blindSpots,
      filterData: [],
      breadcrumb: "",
      blandValue: "Audi",
      blands: [
        "Audi",
        "BMW",
        "Mercedes-Benz",
        "Mini",
        "Ford",
        "Honda",
        "Hyundai",
        "Infiniti",
        "Jaguar",
        "Jeep",
        "Kia",
        "Land Rover",
        "Lexus",
        "Mazda",
        "Mitsubishi",
        "Nissan",
        "Peugeot",
        "Porsche",
        "Skoda",
        "Smart",
        "Subara",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
      ],
      filterBlindSpots: []
    };
  },
  mounted() {
    this.filterData = this.blindSpots.prods.filter(
      item => item.id == this.$route.query.id
    );
    this.breadcrumb = this.filterData[0].name;
    this.getBlindSpot();
  },
  methods: {
    getBlindSpot() {
      this.$http.get('https://admin.meimai.com.tw/api/blindspot/' + this.$route.query.id).then((response) => {
        let result = response.data.result;
        if (result) {
          this.blindSpotInfo = result
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
