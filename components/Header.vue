<template>
  <section class="fixed w-full z-50" id="header">
    <!-- desktop nav -->
    <nav class="hidden lg:block nav" :class="{ nav_effect: isScroll }">
      <div class="flex justify-between px-10">
        <!-- logo -->
        <div>
          <nuxt-link to="/"
            ><img class="h-10" src="~/assets/img/Header/meimai.png" alt=""
          /></nuxt-link>
        </div>
        <!-- link -->
        <ul @click="removeLocalStorage()" class="flex items-center space-x-10">
          <li class="font-semibold hover:text-yellow-400 transition-all">
            <nuxt-link to="/">首頁</nuxt-link>
          </li>
          <li
            class="relative font-semibold hover:text-yellow-400 transition-all"
          >
            <nuxt-link to="/multimedia">多媒體機</nuxt-link>
          </li>
          <li class="font-semibold hover:text-yellow-400 transition-all">
            <nuxt-link to="/carFrame">安卓車框</nuxt-link>
          </li>
          <li class="font-semibold hover:text-yellow-400 transition-all">
            <nuxt-link to="/blindSpot">盲點偵測</nuxt-link>
          </li>
          <li class="font-semibold hover:text-yellow-400 transition-all">
            <nuxt-link to="/fitting">車用配件</nuxt-link>
          </li>
          <li class="font-semibold hover:text-yellow-400 transition-all">
            <nuxt-link to="/partner">經銷據點</nuxt-link>
          </li>
          <li class="font-semibold">
            <nuxt-link to="/qa">常見問題</nuxt-link>
          </li>
          <li class="font-semibold">
            <nuxt-link to="/download">資源下載</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- mobile nav -->
    <nav class="lg:hidden relative shadow-lg w-full mobile_nav">
      <!-- logo -->
      <div class="p-3 flex justify-between">
        <div>
          <nuxt-link class="w-28" to="/"
            ><img class="h-7" src="~/assets/img/Header/meimai.png" alt=""
          /></nuxt-link>
        </div>
        <button @click="openHamburger()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            stroke="#FFFFFF"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <ul
        @click="removeLocalStorage()"
        class="absolute inset-0 z-50 transform duration-300 ease-in-out bg-white h-screen"
        :class="{ 'translate-x-full': hamburger }"
      >
        <li
          class="font-medium px-4 py-3 border-b hover:text-yellow-400 text-right"
        >
          <button @click="closeHamburger()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="#000"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/" class="block w-full py-1">首頁</nuxt-link>
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/multimedia" class="block w-full py-1"
            >多媒體機</nuxt-link
          >
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/carFrame" class="block w-full py-1"
            >安卓車框</nuxt-link
          >
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/blindSpot" class="block w-full py-1"
            >盲點偵測</nuxt-link
          >
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/fitting" class="block w-full py-1"
            >車用配件</nuxt-link
          >
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/partner" class="block w-full py-1"
            >經銷據點</nuxt-link
          >
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/qa" class="block w-full py-1">常見問題</nuxt-link>
        </li>
        <li
          class="font-medium px-4 py-2 border-b hover:bg-gray-100"
          @click="closeHamburger()"
        >
          <nuxt-link to="/download" class="block w-full py-1"
            >資源下載</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1QLZNF29EP');
</script>
<script>
export default {
  data() {
    return {
      isScroll: false,
      hamburger: true
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.changeScroll();
    });
  },
  methods: {
    changeScroll() {
      if (window.scrollY < 1) {
        this.isScroll = false;
      } else {
        this.isScroll = true;
      }
    },
    openHamburger() {
      this.hamburger = false;
    },
    closeHamburger() {
      this.hamburger = true;
    },
    removeLocalStorage() {
      localStorage.clear();
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.nav {
  padding: 2.5rem 1.5rem;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 15px rgba(35, 24, 21, 0);
  color: #fff;
  transition: all 0.4s;
}

.actived {
  color: rgba(243, 182, 31, 1) !important;
}
.nav_effect {
  backdrop-filter: blur(0.5rem);
  padding: 0.8rem 1.5rem;
  /* background-color: rgba(255, 255, 255, 0.85); */
  background-color: rgba(13, 0, 43, 0.8);
  box-shadow: 0 8px 15px rgba(35, 24, 21, 0.12);
  /* color: rgba(13, 0, 43, 1); */
}
.mobile_nav {
  backdrop-filter: blur(0.5rem);
  background-color: rgba(13, 0, 43, 0.8);
  box-shadow: 0 8px 15px rgba(35, 24, 21, 0.12);
}
.nav_effect .nuxt_link {
  /* color: rgba(13, 0, 43, 1); */
  /* color: #0D002B; */
  transition: all 0.3s;
}
.nav_effect .nuxt_link:hover {
  color: rgba(243, 182, 31, 1);
}
/* mobile-nav */

.nuxt-link-exact-active {
  color: rgba(243, 182, 31, 1);
}
</style>
