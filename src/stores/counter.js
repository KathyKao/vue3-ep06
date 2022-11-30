import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import axios from "axios";
// store 之間可以互相 import
import { useAboutStore } from "./about.js";

// Pinana defineStore 會需要一個 id
// Composition API 寫法
export const useCounterStore = defineStore("counter", () => {
  // 取出其他 store 資料、function 方式都一樣
  const aboutStore = useAboutStore();
  const { name } = storeToRefs(aboutStore);

  const counter = ref(0);
  const cardList = ref([]);

  const doubleCount = computed(() => {
    return counter.value * 2 + name.value;
  });

  const addCount = () => {
    counter.value++;
  };

  const fetchApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      cardList.value = res.data;
    } catch (error) {
      // handle error
    }
  };

  return { counter, doubleCount, addCount, fetchApiData, cardList };
});

// // Option API 寫法
// export const useCounterStore = defineStore({
//   id: "counter",
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => {
//       return state.counter * 2;
//     },
//   },
//   actions: {
//     addCount() {
//       this.counter++;
//     },
//   },
// });
