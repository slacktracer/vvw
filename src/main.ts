import Vue from "vue";

import App from "./app/ui/app.vue";
import router from "./app/routers/main";
import store from "./app/stores/main";

new Vue({
  router,
  store,
  render: (h): any => h(App),
}).$mount("#app");

function stuff(value: number, other: string): string {
  value;
  other;
  return "test";
}

console.log(stuff(2, "34"));

async function someAsyncFunction(): Promise<boolean> {
  return true;
}

someAsyncFunction().then((result) => console.log(result));
