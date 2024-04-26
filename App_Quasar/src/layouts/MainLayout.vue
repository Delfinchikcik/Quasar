<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="planet-earth.png" />
          </q-avatar>
          Our Nature
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">My Todoshka</div>
        <div class="text-subtitle">{{ dataTime }}</div>
      </div>
      <q-img
        class="header-bg-image absolute-top"
        src="https://cdn.quasar.dev/img/mountains.jpg"
      ></q-img>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="220"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple
            to="/" exact>
              <q-item-section avatar>
                <q-icon name="public" />
              </q-item-section>

              <q-item-section>
                Todoshki
              </q-item-section>
            </q-item>

            <q-item  clickable v-ripple
            to="/nature" exact>
              <q-item-section avatar>
                <q-icon name="cloud" />
              </q-item-section>

              <q-item-section>
                Nature
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple
            to="/aboutus" exact>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                About us
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple
            to="/contacts" exact>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Contacts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://img.freepik.com/free-vector/hand-drawn-olive-green-background_23-2149724852.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1713398400&semt=ais" style="height: 185px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://img1.freepng.ru/20180506/txe/kisspng-alien-extraterrestrials-in-fiction-royalty-free-5aef17c11d4096.0275351715256186251198.jpg">
            </q-avatar>
            <div class="text-weight-bold">Green Peesovec</div>
            <div>@grenBrocoli</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar class="text-center">
        <q-toolbar-title class="q-my-md">
          <q-avatar>
            <img src="planet-earth.png" />
          </q-avatar>
            <q-label>Our Nature</q-label>
        </q-toolbar-title>
        <q-img
        class="header-bg-image absolute-top"
        src="https://cdn.quasar.dev/img/mountains.jpg"
      ></q-img>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { computed, ref } from "vue";
import { date } from "quasar";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  computed: {
    dataTime() {
      const timeStamp = Date.now();
      return date.formatDate(
        timeStamp,
        "dddd H mm"
      );
    },
  },
};
</script>
<style scoped>
.header-bg-image {
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

</style>
