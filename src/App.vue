<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script setup lang="ts">
import Axios from "@/http/index";
import { onMounted } from "vue";
import { reactive } from "vue";

onMounted(() => {
  getSomeData();
  postSomData();
});

let postData = reactive({});

async function postSomData() {
  try {
    // post시 첫번째 인자느 url, 두번째는 body, 세번째는 header
    const response = await Axios.post("/posts1", {
      firstData: "body 첫번째 데이터",
      secondData: "body 첫번째 데이터",
      thirdData: "body 첫번째 데이터",
    });
    console.log(response);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function getSomeData() {
  try {
    const response = await Axios.get("/posts", {
      params: {},
    });
    const data = response.data;
    postData = data;
    console.log(postData);
  } catch {
    throw new Error("에러발생 !!");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
