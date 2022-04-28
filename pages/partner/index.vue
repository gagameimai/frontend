<template>
  <section class="overflow-hidden">
    <div class="img_box banner"></div>
    <div class="py-20">
      <div class="container mx-auto p-5">
        <div class="lg:grid grid-cols-6 lg:gap-10 xl:gap-20">
          <div class="col-span-2 mb-10 lg:text-right">
            <h1 class="text-2xl font-semibold uppercase lg:text-4xl lg:mb-5">
              合作經銷
            </h1>
          </div>
          <div class="col-span-4">
            <select
              v-model="positionValue"
              @change="filterData"
              class="border px-3 py-2 mb-5 w-full lg:w-2/5"
            >
              <option>全區域</option>
              <option v-for="(p, index) in positions" :key="index">{{
                p
              }}</option>
            </select>
            <!-- lists -->
            <!-- data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom" -->
            <div
              v-for="(p, idx) in partnerResult"
              :key="idx"
              class="border shadow-md p-5 mb-5"
            >
              <h4 class="text-lg font-semibold mb-3">{{ p.name }}</h4>
              <p class="mb-2">
                <fa
                  class="text-yellow-400 mr-3"
                  :icon="['fas', 'phone-alt']"
                />{{ p.tel }}
              </p>
              <a
                :href="`https://www.google.com.tw/maps/place/${p.addr}`"
                target="_blank"
              >
                <p>
                  <fa
                    class="text-yellow-400 mr-3"
                    :icon="['fas', 'map-marker-alt']"
                  />{{ p.addr }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import partner from "~/static/partner.js";
export default {
  name: "partner",
  data() {
    return {
      partner,
      partnerResult: partner,
      positions: [],
      positionValue: "全區域"
    };
  },
  mounted() {
    // 收集 option value
    let tempArr = [];
    partner.forEach(item => {
      tempArr.push(item.position);
    });
    console.log(tempArr);
    this.positions = [...new Set(tempArr)];
    console.log(this.positions);
  },
  methods: {
    filterData() {
      if (this.positionValue == "全區域") {
        this.partnerResult = this.partner;
      } else {
        this.partnerResult = this.partner.filter(
          item => item.position === this.positionValue
        );
      }
    }
  }
};
</script>

<style scoped>
.banner {
  background-image: url(~assets/img/partner/banner.png);
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
  .banner {
  }
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
@media (min-width: 1536px) {
}
</style>
