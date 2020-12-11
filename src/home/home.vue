<template>
  <div class="home">
    <hello-world msg="Hello, World!" />
    <div>
      <p>
        {{ greeting }} ({{ val }}) World! from env: {{ envvar }}::{{
          stuff("test-", 42)
        }}::from env: {{ crazy }}
      </p>
    </div>
    <a
      href="https://www.deviantart.com/dio-03/art/MEKANO-Retrofix-d-201919932"
      target="_blank"
    >
      <img
        alt="Mekano"
        class="image mb-2"
        src="./assets/mekano-big-screenRS.jpg"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

import helloWorld from "src/home/components/hello-world.vue";
import x, { notTest } from "src/home/services/something";

console.log(process.env.FF_CTHULHU);

export default defineComponent({
  components: {
    helloWorld,
  },
  setup() {
    const crazy = process.env.FF_CTHULHU;
    const envvar = process.env.DATA;
    const greeting = "Hello";

    const stuff = (a: string, b: number): string => {
      notTest(8, "some string");
      return "test-" + a + b;
    };

    const val = computed((): number => x());

    return {
      crazy,
      envvar,
      greeting,
      stuff,
      val,
    };
  },
});
</script>

<style scoped>
.home {
  text-align: center;
}
.image {
  max-width: 100vw;
  width: 600px;
}
</style>
