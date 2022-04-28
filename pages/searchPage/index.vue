<template>
  <section>
    <div class="img_box banner">
      <div class="text-center pt-28 pb-20 md:py-14 lg:pt-44">
        <p class="hidden lg:block text-white text-2xl font-semibold mb-10">
          <!-- <span class="hover:text-yellow-400 transition-all duration-300"
            ><nuxt-link to="/">首頁</nuxt-link></span
          >
          <span> / </span>
          <span>{{ breadcrumbBlands }} - {{ breadcrumbModel }}</span> -->
        </p>
        <div class="container mx-auto px-5">
          <div class="lg:grid grid-cols-10 gap-5">
            <!---->
            <div class="col-span-3 mb-3 lg:mb-0">
              <select
                v-model="blandInputValue"
                @change="blandChange"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇汽車品牌</option>
                <option v-for="(bland, idx) in blands" :key="idx">{{
                  bland
                }}</option>
              </select>
            </div>
            <!---->
            <div class="col-span-3 mb-3 lg:mb-0">
              <select
                v-model="typeInputValue"
                @change="typeChange"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇車款</option>
                <option v-for="(type, idx) in types" :key="idx">{{
                  type
                }}</option>
                <option value="all">所有車款</option>
              </select>
            </div>
            <!---->
            <div class="col-span-3 mb-3 lg:mb-0">
              <select
                v-model="yearInputValue"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇年份</option>
                <option v-for="(year, idx) in years" :key="idx">{{
                  year
                }}</option>
                <option value="all">所有年份</option>
              </select>
            </div>
            <!---->
            <div class="col-span-1">
              <button
                @click="searchData"
                class="w-full h-full text-white font-medium bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 py-2"
              >
                <fa class="text-sm mr-2" :icon="['fas', 'search']" />搜尋
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- -->
    <div class="container mx-auto px-5 py-20">
      <!-- 車框 -->
      <div class="py-10 lg:py-14">
        <h2 class="text-2xl lg:text-3xl font-semibold py-5">多媒體機車框</h2>
        <div class="md:grid md:grid-cols-3 xl:grid-cols-4 gap-8">
          <div
            v-for="(i, idx) in fiterCarFrames"
            :key="idx"
            class="col-span-1 py-5"
          >
            <nuxt-link
              :to="{
                name: 'carFrameDetail-id',
                query: {
                  img: i.img
                }
              }"
            >
              <img
                class="mb-3"
                :src="require(`@/assets/img/carFrame/${i.img}.png`)"
                :alt="i.name"
              />
              <hr class="mb-2" />
              <h3 class="text-xl font-semibold">
                <fa
                  class="text-yellow-400 mr-3"
                  :icon="['fas', 'arrow-alt-circle-right']"
                /><i>{{ i.bland }} {{ i.type }}</i>
              </h3>
              <p class="text-xl flex items-center">
                <span class="mr-2">{{ i.range }}</span>
                <span
                  class="text-sm font-medium border rounded-sm border-yellow-400 px-1"
                  >{{ i.size }}</span
                >
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- 多媒體機 -->
      <div class="py-10 lg:py-14">
        <h2 class="text-2xl lg:text-3xl font-semibold py-5">
          安卓車用多媒體機
        </h2>
        <div class="md:grid md:grid-cols-3 xl:grid-cols-4 gap-8">
          <div
            v-for="(i, idx) in multimedias"
            :key="idx"
            class="col-span-1 py-5"
          >
            <nuxt-link
              :to="{
                name: 'multimediaDetail-id',
                query: {
                  id: i.id
                }
              }"
            >
              <img
                class="mb-3"
                :src="require(`@/assets/img/multimedia/${i.img}`)"
                :alt="i.name"
              />
              <hr class="mb-2" />
              <h3 class="text-xl font-semibold">
                <fa
                  class="text-yellow-400 mr-3"
                  :icon="['fas', 'arrow-alt-circle-right']"
                /><i>{{ i.name }}</i>
              </h3>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- 盲點偵測 -->
      <div class="py-10 md:py-14 lg:py-20">
        <h2 class="text-2xl lg:text-3xl font-semibold py-5">盲點偵測</h2>
        <div class="md:grid md:grid-cols-3 xl:grid-cols-4 gap-8">
          <div class="col-span-1 py-5">
            <nuxt-link to="/blindSpot">
              <img src="@/assets/img/blindSpot/blindSpot-1.png" alt="" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- 車用配件 -->
      <div class="py-10 lg:py-14">
        <h2 class="text-2xl lg:text-3xl font-semibold py-5">車用配件</h2>
        <div class="md:grid md:grid-cols-3 xl:grid-cols-4 gap-8">
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
                class="mb-3"
                :src="require(`@/assets/img/fitting/${i.img}`)"
                :alt="i.name"
              />
              <hr class="mb-2" />
              <h3 class="text-xl font-semibold">
                <fa
                  class="text-yellow-400 mr-3"
                  :icon="['fas', 'arrow-alt-circle-right']"
                /><i>{{ i.name }}</i>
              </h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div v-show="filterData.length >= 20" class="container mx-auto px-5 py-20">
      <div class="flex justify-center">
        <ul class="flex">
          <li
            v-show="currentPage > 1"
            @click="decreasePage"
            class="bg-gray-50 hover:bg-yellow-400 text-2xl text-yellow-400 hover:text-white transition-all duration-300 cursor-pointer border px-5 py-2 mr-4"
          >
            <fa :icon="['fas', 'caret-left']" />
          </li>
          <li>
            <select
              v-model="currentPage"
              @change="changePage()"
              name=""
              id=""
              class="w-20 h-12 p-3 text-black border mr-4"
            >
              <option v-for="(page, idx) in totalPage" :key="idx">
                {{ page }}
              </option>
            </select>
          </li>
          <li
            v-show="currentPage < 5"
            @click="increasePage"
            class="bg-gray-50 hover:bg-yellow-400 text-2xl text-yellow-400 hover:text-white transition-all duration-300 cursor-pointer border px-5 py-2"
          >
            <fa :icon="['fas', 'caret-right']" />
          </li>
        </ul>
      </div>
      <!---->
    </div>
    <!-- end -->
  </section>
</template>

<script>
import carFrame from "~/static/carFrame.js";
import fittings from "~/static/fittings.js";
import multimedias from "~/static/multimedias.js";
// import years from "~/static/years.js";

export default {
  name: "carFrame",
  data() {
    return {
      carFrame,
      fittings,
      multimedias,
      breadcrumbBlands: this.$route.query.bland,
      breadcrumbModel: this.$route.query.model,
      blands: [],
      types: [],
      years: [],
      blandInputValue: "選擇汽車品牌",
      typeInputValue: "選擇車款",
      yearInputValue: "選擇年份",
      // typeSelect: true,
      // yearSelect: true,
      totalPage: 5,
      currentPage: 1,
      filterData: [],
      fiterCarFrames: []
    };
  },
  mounted() {
    // 若有 localStorage 就用，不然就用 route.query 的值
    if (localStorage.getItem("bland")) {
      this.blandInputValue = localStorage.getItem("bland");
      this.typeInputValue = localStorage.getItem("model");
      this.yearInputValue = localStorage.getItem("year");
      // 顯示車款
      const newTypeArray = this.carFrame.filter(
        item => item.bland === this.blandInputValue
      );
      const typeArr = [];
      newTypeArray.forEach(item => {
        typeArr.push(...item.model);
      });
      this.types = [...new Set(typeArr)];
      // 顯示年份
      const newYearArray = this.carFrame.filter(
        item =>
          item.bland === this.blandInputValue &&
          item.type.includes(this.typeInputValue)
      );
      const yearArr = [];
      newYearArray.forEach(item => {
        yearArr.push(...item.year);
      });
      this.years = [...new Set(yearArr)];
    } else {
      this.blandInputValue = this.$route.query.bland;
      this.typeInputValue = this.$route.query.model;
      this.yearInputValue = this.$route.query.year;
    }
    //
    if (this.typeInputValue == "all" && this.yearInputValue == "all") {
      this.fiterCarFrames = this.carFrame.filter(
        item => item.bland == this.blandInputValue
      );
    } else if (this.yearInputValue == "all") {
      this.fiterCarFrames = this.carFrame.filter(item => {
        return (
          item.bland == this.blandInputValue &&
          item.model.includes(this.typeInputValue)
        );
      });
    } else {
      this.fiterCarFrames = this.carFrame.filter(item => {
        return (
          item.bland == this.blandInputValue &&
          item.model.includes(this.typeInputValue) &&
          item.year.includes(this.yearInputValue * 1)
        );
      });
    }
    //
    const newBlands = this.carFrame.map(item => item.bland);
    this.blands = [...new Set(newBlands)];
    //
    let newPage = Math.ceil(this.carFrame.length / 20);
    this.totalPage = newPage;
  },
  methods: {
    increasePage() {
      if (this.currentPage >= this.totalPage) {
        return;
      } else {
        this.currentPage++;
        this.changePage();
      }
    },
    decreasePage() {
      if (this.currentPage <= 1) {
        return;
      } else {
        this.currentPage--;
        this.changePage();
      }
    },
    changePage() {
      this.filterData = this.carFrame.slice(
        (this.currentPage - 1) * 20,
        this.currentPage * 20
      );
      window.scrollTo(0, 0);
    },
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
        arr.push(...item.model);
      });
      this.types = [...new Set(arr)];
      this.typeSelect = false;

      this.breadcrumbBlands = this.blandInputValue;
      this.breadcrumbModel = "";
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
      this.breadcrumbModel = this.typeInputValue;
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
      if (this.typeInputValue == "all" && this.yearInputValue == "all") {
        this.fiterCarFrames = this.carFrame.filter(
          item => item.bland == this.blandInputValue
        );
      } else if (this.yearInputValue == "all") {
        this.fiterCarFrames = this.carFrame.filter(item => {
          return (
            item.bland == this.blandInputValue &&
            item.model.includes(this.typeInputValue)
          );
        });
      } else {
        this.fiterCarFrames = this.carFrame.filter(item => {
          return (
            item.bland == this.blandInputValue &&
            item.model.includes(this.typeInputValue) &&
            item.year.includes(this.yearInputValue * 1)
          );
        });
      }
      this.storeLocalStorage();
    },
    storeLocalStorage() {
      localStorage.setItem("bland", this.blandInputValue);
      localStorage.setItem("model", this.typeInputValue);
      localStorage.setItem("year", this.yearInputValue);
    }
  }
};
</script>

<style scoped>
.banner {
  background-image: url(~assets/img/carFrame/banner.png);
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
