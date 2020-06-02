<template>
  <div class="home">
    <img alt="Vue logo" src="src/home/assets/logo.png" />
    <HelloWorld msg="vvw" />
    <div>
      <p>
        {{ greeting }} ({{ val }}) World! {{ version }}::{{ envvar }}::{{
          stuff("", 10)
        }}
        --- {{ crazy }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import x from "src/home/services/something";
import { version } from "../../../package.json";
import HelloWorld from "../components/hello-world.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data(): Record<string, any> {
    console.log(process.env.FF_CTHULHU);
    return {
      crazy: process.env.FF_CTHULHU,
      envvar: process.env.DATA,
      greeting: "Hello",
      version,
    };
  },
  computed: {
    val: (): number => x(),
  },
  methods: {
    stuff: function stuff(): string {
      return "test";
    },
  },
};
</script>
