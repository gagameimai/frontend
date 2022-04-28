<template>
  <section class="overflow-hidden">
    <!-- banner -->
    <div class="banner">
      <div
        class="container mx-auto lg:grid grid-cols-6 gap-10 text-white px-5 py-16 md:py-20 lg:py-40"
      >
        <div class="col-span-4">
          <div>
            <!-- <img
              class="w-full"
              src="@/assets/img/Home/bannerProduct.png"
              alt=""
            /> -->
          </div>
        </div>
        <div class="col-span-2">
          <div class="py-10">
            <h1 class="font-extrabold text-3xl md:text-4xl mb-5 text-shadow">
              為您的愛車量身打造
            </h1>
            <h2 class="font-semibold text-2xl mb-3 text-shadow">
              您的車型是？
            </h2>
            <div cclass="mb-3">
              <select
                v-model="blandInputValue"
                @change="blandChange"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇汽車品牌</option>
                <option
                  v-for="(bland, idx) in blands"
                  :key="idx"
                  class="capitalize"
                  >{{ bland }}</option
                >
              </select>
            </div>
            <br />
            <div cclass="mb-3">
              <select
                v-model="typeInputValue"
                @change="typeChange"
                :disabled="typeSelect"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇車款</option>
                <option v-for="(type, idx) in types" :key="idx">{{
                  type
                }}</option>
                <option value="all">所有車款</option>
              </select>
            </div>
            <br />
            <div cclass="mb-10">
              <select
                v-model="yearInputValue"
                :disabled="yearSelect"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇年份</option>
                <option v-for="(year, idx) in years" :key="idx">{{
                  year
                }}</option>
                <option value="all">所有年份</option>
              </select>
            </div>
            <br />
            <button
              @click="searchData"
              class="w-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3"
            >
              搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- banner end-->
    <!-- product -->
    <div id="productList">
      <div class="container mx-auto p-5">
        <!---->
        <div class="md:grid grid-cols-7 gap-8">
          <div class="col-span-3 py-5 md:py-10">
            <div>
              <img src="@/assets/img/Home/android.png" alt="" />
            </div>
          </div>
          <div class="col-span-4 py-5 md:py-10 flex items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h2 class="font-semibold text-4xl mb-5">安卓車用多媒體機</h2>
              <p class="text-xl mb-5">
                輕鬆操作智能導航與聯網影音，為車內增添視聽享受與便利結合多功能、挑戰高效能的美邁車用多媒體車機。
              </p>
              <nuxt-link
                to="/multimedia"
                class="block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3"
                >了解更多</nuxt-link
              >
            </div>
          </div>
        </div>
        <hr />
        <!---->
        <div class="md:grid grid-cols-7 gap-8">
          <div class="col-span-3 py-5 md:py-10">
            <div>
              <img src="@/assets/img/Home/carFrame.jpg" alt="" />
            </div>
          </div>
          <div class="col-span-4 py-5 md:py-10 flex items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h2 class="font-semibold text-4xl mb-5">安卓車框</h2>
              <p class="text-xl mb-5">
                與安卓機完美匹配，美觀專用車框，車款完備。
              </p>
              <nuxt-link
                to="/carFrame"
                class="block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3"
                >了解更多</nuxt-link
              >
            </div>
          </div>
        </div>
        <hr />
        <!---->
        <div class="md:grid grid-cols-7 gap-8">
          <div class="col-span-3 py-5 md:py-10">
            <div>
              <img src="@/assets/img/Home/blindSpot.png" alt="" />
            </div>
          </div>
          <div class="col-span-4 py-5 md:py-10 flex items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h2 class="font-semibold text-4xl mb-5">盲點偵測</h2>
              <p class="text-xl mb-5">
                無法看見的區域，讓盲點偵測幫您看見。
              </p>
              <nuxt-link
                to="/blindSpot"
                class="block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3"
                >了解更多</nuxt-link
              >
            </div>
          </div>
        </div>
        <hr />
        <!---->
        <div class="md:grid grid-cols-7 gap-8">
          <div class="col-span-3 py-5 md:py-10">
            <div>
              <img src="@/assets/img/Home/fitting.png" alt="" />
            </div>
          </div>
          <div class="col-span-4 py-5 md:py-10 flex items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h2 class="font-semibold text-4xl mb-5">車用配件</h2>
              <p class="text-xl mb-5">
                更多全面性的車用電子配件選擇，搭配安卓機使用更升級。
              </p>
              <nuxt-link
                to="/fitting"
                class="block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3"
                >了解更多</nuxt-link
              >
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
    <!-- product end -->
    <!-- transition -->
    <div class="relative z-40 flex items-center solution">
      <div
        class="container mx-auto text-white p-5 z-10"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-once="true"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1 class="text-2xl md:text-4xl font-semibold mb-3 uppercase">
          MEIMAI 美邁車用電子有限公司
        </h1>
        <p class="text-xl font-medium leading-loose">
          美邁精選每一樣車用產品，從品質把關到保固認證，只提供最適合的優質產品；<br />
          也在台灣逐漸拓展據點，帶來更專業便利的服務。美邁不只是不錯，而是向更美好的行車體驗邁進。
        </p>
      </div>
    </div>
    <!-- transition end-->
    <!-- partner -->
    <div class="px-5 py-10 md:py-20">
      <div class="container mx-auto">
        <h2 class="uppercase text-2xl md:text-4xl font-extrabold mb-5">
          合作經銷
        </h2>
        <select
          v-model="positionValue"
          @change="filterPostiton"
          class="border px-3 py-2 mb-5 w-full lg:w-1/3"
        >
          <option v-for="(p, index) in positions" :key="index">{{ p }}</option>
        </select>
        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(i, idx) in partnerResult"
            :key="idx"
            class="col-span-1"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="min-h-full border shadow-md p-5 mb-5">
              <h4 class="text-lg font-semibold mb-3">{{ i.name }}</h4>
              <p class="mb-2">
                <fa
                  class="text-yellow-400 mr-3"
                  :icon="['fas', 'phone-alt']"
                />{{ i.tel }}
              </p>
              <p>
                <fa
                  class="text-yellow-400 mr-3"
                  :icon="['fas', 'map-marker-alt']"
                />{{ i.addr }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- partner end -->
  </section>
</template>

<script>
import carFrame from "~/static/carFrame.js";
import partner from "~/static/partner.js";

export default {
  name: "home",
  data() {
    return {
      partner,
      carFrame,
      blands: [],
      types: [],
      years: [],
      blandInputValue: "選擇汽車品牌",
      typeInputValue: "選擇車款",
      yearInputValue: "選擇年份",
      typeSelect: true,
      yearSelect: true,
      filterData: [],
      partnerResult: partner,
      positions: [],
      positionValue: "台北市"
    };
  },
  mounted() {
    //
    const newBlands = this.carFrame.map(item => item.bland);
    this.blands = [...new Set(newBlands)];
    // 收集 option value
    let tempArr = [];
    partner.forEach(item => {
      tempArr.push(item.position);
    });
    this.positions = [...new Set(tempArr)];
  },
  methods: {
    blandChange() {
      // default setting
      this.typeInputValue = "選擇車款";
      this.yearInputValue = "選擇年份";
      this.typeSelect = true;
      this.yearSelect = true;
      //
      const newArray = this.carFrame.filter(
        item => item.bland === this.blandInputValue
      );
      const arr = [];
      newArray.forEach(item => {
        // arr.push(item.type);
        arr.push(...item.model);
      });
      this.types = [...new Set(arr)];
      this.typeSelect = false;
    },
    typeChange() {
      const newArray = this.carFrame.filter(
        item =>
          item.bland === this.blandInputValue &&
          item.type.includes(this.typeInputValue)
      );
      const arr = [];
      newArray.forEach(item => {
        arr.push(...item.year);
      });
      this.years = [...new Set(arr)];
      this.yearSelect = false;
    },
    searchData() {
      if (this.blandInputValue == "選擇汽車品牌") {
        alert("請選擇汽車品牌");
        return;
      }
      if (this.typeInputValue == "選擇車款") {
        alert("請選擇車款");
        return;
      }
      if (this.yearInputValue == "選擇年份") {
        alert("請選擇年份");
        return;
      }
      this.$router.push({
        name: "searchPage",
        query: {
          // bland: this.blandInputValue,
          // model: this.typeInputValue,
          // year: this.yearInputValue
        }
      });
      localStorage.setItem("bland", this.blandInputValue);
      localStorage.setItem("model", this.typeInputValue);
      localStorage.setItem("year", this.yearInputValue);
    },
    filterPostiton() {
      this.partnerResult = this.partner.filter(
        item => item.position === this.positionValue
      );
    }
  }
};
</script>

<style scoped>
.banner {
  background-image: url(~assets/img/Home/banner_homepage.jpg);
  background-attachment: fixed;
}
.text-shadow {
  text-shadow: 1px 1px 3px rgba(35, 24, 21, 0.3);
}

.solution {
  position: relative;
  height: 350px;
  background-image: url(~assets/img/Home/bannerBG.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: 4;
}

.solution::after {
  content: "00000";
  position: absolute;
  inset: 0 0 0 0;
  z-index: 5;
  background-color: rgba(35, 24, 21, 0.5);
}

@media (max-width: 640px) {
  .banner {
    background-image: url(~assets/img/Home/banner_phonepage.png);
  }
}
@media (min-width: 641px) and (max-width: 767px) {
  .banner {
    background-image: url(~assets/img/Home/banner_homepage.jpg);
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
}
@media (min-width: 1025px) and (max-width: 1280px) {
}
@media (min-width: 1281px) {
}
</style>
