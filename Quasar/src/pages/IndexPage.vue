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
    <q-btn color="primary" label="Primary" />
    <div class="q-pa-md q-gutter-sm">
      <q-banner rounded :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
        <template v-slot:avatar>
          <img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            style="width: 100px; height: 64px"
          />

          Could not retrieve travel data.

          <q-btn flat label="Retry" />
        </template>
      </q-banner>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
defineOptions({
  name: "IndexPage",
});
</script>
