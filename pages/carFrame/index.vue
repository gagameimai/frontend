<template>
  <section>
    <div class="img_box banner">
      <div class="text-center pt-28 pb-20 md:py-14 lg:pt-44">
        <p class="hidden lg:block text-white text-2xl font-semibold mb-10">
          <span class="hover:text-yellow-400 transition-all duration-300"
            ><nuxt-link to="/">首頁</nuxt-link></span
          >
          <span> / </span>
          <span>安卓車框</span>
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
                <option value="all">所有品牌</option>
              </select>
            </div>
            <!---->
            <div class="col-span-3 mb-3 lg:mb-0">
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
            <!---->
            <div class="col-span-3 mb-3 lg:mb-0">
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
    <div class="container mx-auto px-5 py-10 md:py-20">
      <!-- tag -->
      <!-- <div class="mb-10">
        <ul class="flex flex-wrap text-sm">
          <li
            @click="tagList('allBland')"
            class="px-5 py-1 mr-5 mb-3 cursor-pointer border rounded-full border-yellow-300 hover:bg-yellow-200 transition-all duration-300 text-gray-500"
          >
            # 所有品牌
          </li>
          <li
            v-for="(item, index) in blands"
            :key="index"
            @click="tagList(item)"
            class="px-5 py-1 mr-5 mb-3 cursor-pointer border rounded-full border-yellow-300 hover:bg-yellow-200 transition-all duration-300 text-gray-500"
          >
            {{ item }}
          </li>
        </ul>
      </div> -->
      <!-- item lists -->
      <div class="md:grid md:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="(i, idx) in filterData" :key="idx" class="col-span-1 py-5">
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
    <!-- pagination -->
    <div v-show="!searchStatus" class="container mx-auto px-5 py-20">
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
            v-show="currentPage < totalPage"
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
// import years from "~/static/years.js";

export default {
  name: "carFrame",
  data() {
    return {
      carFrame,
      blands: [],
      types: [],
      years: [],
      blandInputValue: "選擇汽車品牌",
      typeInputValue: "選擇車款",
      yearInputValue: "選擇年份",
      typeSelect: true,
      yearSelect: true,
      totalPage: 1,
      currentPage: 1,
      filterData: [],
      searchStatus: false
    };
  },
  mounted() {
    // filter all blands
    const newBlands = this.carFrame.map(item => item.bland);
    this.blands = [...new Set(newBlands)];
    // computed total pages
    this.totalPage = Math.ceil(this.carFrame.length / 20);
    // 如果有 currentPage（default 20's data）
    // if LSBland、LSType、LSYear
    let page = localStorage.getItem("page");
    let LSBland = localStorage.getItem("LSBland");
    let LSType = localStorage.getItem("LSType");
    let LSYear = localStorage.getItem("LSYear");
    if (page) {
      this.currentPage = localStorage.getItem("page") * 1;
      this.changePage();
    } else if (LSBland && LSType && LSYear) {
      // 隱藏頁籤
      this.searchStatus = true;
      //
      this.blandInputValue = LSBland;
      this.typeInputValue = LSType;
      this.yearInputValue = LSYear;
      //
      this.typeSelect = false;
      this.yearSelect = false;
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
      // 顯示資料
      if (this.typeInputValue == "all" || this.yearInputValue == "all") {
        this.filterData = this.carFrame.filter(
          item => item.bland == this.blandInputValue
        );
      } else {
        this.filterData = this.carFrame.filter(
          item =>
            item.bland == this.blandInputValue &&
            item.model.includes(this.typeInputValue) &&
            item.year.includes(this.yearInputValue * 1)
        );
      }
    } else {
      this.changePage();
    }
  },
  methods: {
    //test
    tagList(bland) {
      if (bland == "allBland") {
        this.changePage();
      } else {
        this.filterData = this.carFrame.filter(item => item.bland == bland);
        // 隱藏頁籤
        this.searchStatus = true;
      }
    },
    // 依 currentPage 顯示資料範圍
    changePage() {
      this.filterData = this.carFrame.slice(
        (this.currentPage - 1) * 20,
        this.currentPage * 20
      );
      window.scrollTo(0, 0);
    },
    increasePage() {
      if (this.currentPage >= this.totalPage) {
        return;
      }
      this.currentPage++;
      this.changePage();
    },
    decreasePage() {
      if (this.currentPage <= 1) {
        return;
      }
      this.currentPage--;
      this.changePage();
    },
    blandChange() {
      // default setting
      this.typeInputValue = "選擇車款";
      this.yearInputValue = "選擇年份";
      this.typeSelect = true;
      this.yearSelect = true;
      //
      if (this.blandInputValue == "all") {
        this.changePage();
        localStorage.removeItem("LSBland");
        localStorage.removeItem("LSType");
        localStorage.removeItem("LSYear");
      } else {
        const newArray = this.carFrame.filter(
          item => item.bland === this.blandInputValue
        );
        const arr = [];
        newArray.forEach(item => {
          arr.push(...item.model);
        });
        this.types = [...new Set(arr)];
        this.typeSelect = false;
      }
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
      // 沒有選品牌就按
      if (this.blandInputValue == "選擇汽車品牌") {
        alert("請選擇汽車品牌");
        return;
      }
      // 沒有選車款就按
      if (this.typeInputValue == "選擇車款") {
        if (this.blandInputValue != "all") {
          alert("請選擇車款");
        }
        return;
      }
      // 沒有選年份就按
      if (this.yearInputValue == "選擇年份") {
        if (this.blandInputValue != "all") {
          alert("請選擇年份");
        }
        return;
      }
      // 當車款為 all 時且 年份為 all 時的情況
      if (this.typeInputValue == "all" && this.yearInputValue == "all") {
        this.filterData = this.carFrame.filter(
          item => item.bland == this.blandInputValue
        );
      }
      // 當年份為 all 時的情況
      else if (this.yearInputValue == "all") {
        this.filterData = this.carFrame.filter(
          item =>
            item.bland == this.blandInputValue &&
            item.model.includes(this.typeInputValue)
        );
      }
      // 車款、年份都有值的情況
      else {
        this.filterData = this.carFrame.filter(
          item =>
            item.bland == this.blandInputValue &&
            item.model.includes(this.typeInputValue) &&
            item.year.includes(this.yearInputValue * 1)
        );
      }
      // 隱藏頁籤
      this.searchStatus = true;
      // store LSBland、LSType、LSYear to localStorage
      localStorage.setItem("LSBland", this.blandInputValue);
      localStorage.setItem("LSType", this.typeInputValue);
      localStorage.setItem("LSYear", this.yearInputValue);
      localStorage.removeItem("page");
    }
  },
  watch: {
    currentPage() {
      localStorage.setItem("page", this.currentPage);
    }
    // blandInputValue: {
    //   immediate: true,
    //   handler(newValue, oldValue) {
    //     console.log("newValue", newValue);
    //     console.log("oldValue", oldValue);
    //     if (newValue != "all") {
    //       console.log("要做事~");
    //     }
    //   }
    // }
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
