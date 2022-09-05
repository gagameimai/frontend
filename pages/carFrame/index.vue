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
                v-model="brandInputValue"
                @change="brandChange"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇汽車品牌</option>
                <option
                  v-for="(brand, index) in brandList"
                  :key="index"
                  :value="brand.id">
                  {{ brand.name }}
                </option>
                <option value="all">所有品牌</option>
              </select>
            </div>
            <!---->
            <div class="col-span-3 mb-3 lg:mb-0">
              <select
                v-model="modelInputValue"
                @change="modelChange"
                :disabled="typeSelect"
                class="w-full h-12 p-3 text-black"
              >
                <option selected disabled>選擇車款</option>
                <option
                  v-for="(model, index) in modelList"
                  :key="index"
                  :value="model.id">
                  {{ model.name }}
                </option>
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
                <option
                  v-for="(year, index) in yearList"
                  :key="index">
                  {{ year }}
                </option>
                <option value="all">所有年份</option>
              </select>
            </div>
            <!---->
            <div class="col-span-1">
              <button
                @click="search"
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
        <div
          v-for="(carFrame, index) in carFrameList"
          :key="index"
          class="col-span-1 py-5">
          <nuxt-link
            :to="{
              name: 'carFrameDetail-id',
              query: {
                id: carFrame.id
              }
            }">
            <img
              class="mb-3"
              :src="carFrame.img"
              :alt="carFrame.name" />
            <hr class="mb-2" />
            <h3 class="text-xl font-semibold">
              <fa
                class="text-yellow-400 mr-3"
                :icon="['fas', 'arrow-alt-circle-right']" />
                <i>{{ carFrame.name }}</i>
            </h3>
            <p class="text-xl flex items-center">
              <span class="mr-2">{{ carFrame.year_start }}~{{ carFrame.year_end }}</span>
              <span
                class="text-sm font-medium border rounded-sm border-yellow-400 px-1"
                >{{ carFrame.size }}吋</span
              >
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <!-- <div v-show="!searchStatus" class="container mx-auto px-5 py-20">
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
    </div> -->
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
      carFrameList: [],
      blands: [],
      brandList: [],
      car: [],
      modelList: [],
      types: [],
      yearList: [],
      years: [],
      brandInputValue: "選擇汽車品牌",
      modelInputValue: "選擇車款",
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
      this.brandInputValue = LSBland;
      this.modelInputValue = LSType;
      this.yearInputValue = LSYear;
      //
      this.typeSelect = false;
      this.yearSelect = false;
      // 顯示車款
      const newTypeArray = this.carFrame.filter(
        item => item.bland === this.brandInputValue
      );
      const typeArr = [];
      newTypeArray.forEach(item => {
        typeArr.push(...item.model);
      });
      this.types = [...new Set(typeArr)];
      // 顯示年份
      const newYearArray = this.carFrame.filter(
        item =>
          item.bland === this.brandInputValue &&
          item.type.includes(this.modelInputValue)
      );
      const yearArr = [];
      newYearArray.forEach(item => {
        yearArr.push(...item.year);
      });
      this.years = [...new Set(yearArr)];
      // 顯示資料
      if (this.modelInputValue == "all" || this.yearInputValue == "all") {
        this.filterData = this.carFrame.filter(
          item => item.bland == this.brandInputValue
        );
      } else {
        this.filterData = this.carFrame.filter(
          item =>
            item.bland == this.brandInputValue &&
            item.model.includes(this.modelInputValue) &&
            item.year.includes(this.yearInputValue * 1)
        );
      }
    } else {
      this.changePage();
    }
    // 取得下拉選單所有資料
    this.getListData();
  },
  methods: {
    getListData() {
      this.$http.get('https://admin.meimai.com.tw/api/car').then((response) => {
        let carBrand = response.data.car_brand,
            car = response.data.car;
        if (carBrand) {
          this.brandList = carBrand;
          // 由於指定TOYOTA
          this.brandList.forEach(el => {
            if (el.name == 'AUDI') {
              this.brandInputValue = el.id;
              this.modelInputValue = 'all';
              this.yearInputValue = 'all';
              return;
            }
          });
          this.getCarFrame();
        }
        if (car) {
          this.car = car;
        }
      })
    },
    getCarFrame() {
      let params = {
        car_brand_id: this.brandInputValue == 'all' || !this.brandInputValue ? '' : this.brandInputValue,
        car_id: this.modelInputValue == 'all' || !this.modelInputValue ? '' : this.modelInputValue,
        year: this.yearInputValue == 'all' || !this.yearInputValue ? '' : this.yearInputValue
      }

      this.$http.get('https://admin.meimai.com.tw/api/carframe', {params}).then((response) => {
        let result = response.data.result;
        if (result) {
          this.carFrameList = result;
        }
      })
    },
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
    brandChange() {
      // default setting
      this.modelInputValue = "選擇車款";
      this.yearInputValue = "選擇年份";
      this.typeSelect = true;
      this.yearSelect = true;
      //
      if (this.brandInputValue == "all") {
        this.changePage();
        localStorage.removeItem("LSBland");
        localStorage.removeItem("LSType");
        localStorage.removeItem("LSYear");
      } else {
        const newArray = this.carFrame.filter(
          item => item.bland === this.brandInputValue
        );
        const arr = [];
        newArray.forEach(item => {
          arr.push(...item.model);
        });
        this.types = [...new Set(arr)];
        this.typeSelect = false;
      }

      this.modelList = [];
      this.car.forEach(el => {
        if(this.brandInputValue == el.car_brand_id) {
          this.modelList.push(el);
        }
      });
    },
    modelChange() {
      const newArray = this.carFrame.filter(
        item =>
          item.bland === this.brandInputValue &&
          item.type.includes(this.modelInputValue)
      );
      const arr = [];
      newArray.forEach(item => {
        arr.push(...item.year);
      });
      this.years = [...new Set(arr)];
      this.yearSelect = false;

      this.yearList = [];
      let tempStart = 0,
          tempEnd = 0;
      if(this.modelInputValue == 'all') {
        this.modelList.forEach((el, index) => {
          if (index == 0) {
            tempStart = el.year_start;
            tempEnd = el.year_end;
          }
          else {
            if (el.year_start < tempStart) {
              tempStart = el.year_start;
            }
            if (el.year_end > tempEnd) {
              tempEnd = el.year_end;
            }
          }
        });
        if (tempStart != 0 && tempEnd != 0) {
          let years = +tempEnd - +tempStart;
          this.yearList.push(tempStart);
          for(let i=1; i<=years; i++) {
            this.yearList.push(+tempStart + i);
          }
        }
      }
      else {
        this.modelList.forEach(el => {
          if(this.modelInputValue == el.id) {
            let years = +el.year_end - +el.year_start;
            this.yearList.push(el.year_start);
            for(let i=1; i<=years; i++) {
              this.yearList.push(+el.year_start + i);
            }
          }
        });
      }
    },
    search() {
      // 沒有選品牌就按
      if (this.brandInputValue == "選擇汽車品牌") {
        alert("請選擇汽車品牌");
        return;
      }
      // 沒有選車款就按
      if (this.modelInputValue == "選擇車款") {
        if (this.brandInputValue != "all") {
          alert("請選擇車款");
        }
        return;
      }
      // 沒有選年份就按
      if (this.yearInputValue == "選擇年份") {
        if (this.brandInputValue != "all") {
          alert("請選擇年份");
        }
        return;
      }
      // 當車款為 all 時且 年份為 all 時的情況
      if (this.modelInputValue == "all" && this.yearInputValue == "all") {
        this.filterData = this.carFrame.filter(
          item => item.bland == this.brandInputValue
        );
      }
      // 當年份為 all 時的情況
      else if (this.yearInputValue == "all") {
        this.filterData = this.carFrame.filter(
          item =>
            item.bland == this.brandInputValue &&
            item.model.includes(this.modelInputValue)
        );
      }
      // 車款、年份都有值的情況
      else {
        this.filterData = this.carFrame.filter(
          item =>
            item.bland == this.brandInputValue &&
            item.model.includes(this.modelInputValue) &&
            item.year.includes(this.yearInputValue * 1)
        );
      }
      // 隱藏頁籤
      this.searchStatus = true;
      // store LSBland、LSType、LSYear to localStorage
      localStorage.setItem("LSBland", this.brandInputValue);
      localStorage.setItem("LSType", this.modelInputValue);
      localStorage.setItem("LSYear", this.yearInputValue);
      localStorage.removeItem("page");
    }
  },
  watch: {
    currentPage() {
      localStorage.setItem("page", this.currentPage);
    }
    // brandInputValue: {
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
