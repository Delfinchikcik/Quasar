<template>
  <div class="q-pa-md">
    <h3>Todoshka</h3>
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{'done bg-green-2': task.done}"
        v-for="(task, index) in tasks"
        :key="task.title"
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            val="teal"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
        v-if="task.done" side>
        <q-btn @click.stop="deleteTask(index)" dense flat round color="primary" icon="delete_forever">
        </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineOptions({
  name: "Todo",
});
const tasks = ref([
  {
    title: "First",
    done: true,
  },
  {
    title: "Second",
    done: false,
  },
  {
    title: "Three",
    done: false,
  },
]);

function deleteTask(index){
  tasks.value.splice(index,1)
}
</script>

<style lang="scss">
.done{
  .q-item__label{
    text-decoration: line-through;
    color: green;
  }
}
</style>




<!-- Options Api -->
<!-- <script>
    export default {
      data () {
        return {
          name: "Todo",
          tasks: [
      {
        title: "First",
        done: true,
      },
      {
        title: "Second",
        done: false,
      },
      {
        title: "Three",
        done: false,
      },
    ]
    }
      }
    }
    </script> -->
