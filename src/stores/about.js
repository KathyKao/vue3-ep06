import { defineStore } from "pinia";
import { ref } from "vue";

// Pinia 官方建議 store 函式命名前面使用 useXXXXX
export const useAboutStore = defineStore("about", () => {
  const name = ref("Kathy");

  const setName = (userName) => {
    name.value = userName;
  };

  return { name, setName };
});
