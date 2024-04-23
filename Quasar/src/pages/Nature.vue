<template>
  <div class="q-pa-md">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
    <q-btn class="slider-btn" color="primary" label="Primary" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
defineOptions({
  name: "Nature",
});
</script>

<style scoped>
.slider-btn{
  width: 150px;
  margin-top: 10px;
  display: inline-block;
  align-content: center;
  margin-left: 46%;
}
</style>