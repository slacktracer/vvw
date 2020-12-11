<template>
  <div id="app">
    <main-navbar />
    <router-view class="mt-5" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import { version } from "../../package.json";
import mainNavbar from "src/main-navbar/main-navbar.vue";

export default defineComponent({
  components: { mainNavbar },
  setup() {
    return { version };
  },
});
</script>
