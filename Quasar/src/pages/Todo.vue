<template>
  <div class="q-pa-md">
    <h3>Todoshka</h3>
    <q-input
    @keyup.enter="addTask"
      class="q-mb-md"
      filled
      v-model="newTask"
      placeholder="Add task"
    >
      <q-btn @click="addTask" round dense flat icon="add"></q-btn>
    </q-input>
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-green-2': task.done }"
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
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            dense
            flat
            round
            color="primary"
            icon="delete_forever"
          >
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
const $q = useQuasar();
defineOptions({
  name: "Todo",
});
let newTask = ref("");
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

function deleteTask(index) {
  $q.dialog({
    dark: true,
    title: "REALLY?",
    message: "You really want kill these tree??? ಥ_ಥ",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    tasks.value.splice(index, 1);
    $q.notify({
      message: "YoU KiLL Him, MONSTER!",
      color: "secondary",
    });
  });
}
function addTask() {
  tasks.value.push({
    title: newTask.value,
    done: false,
  });
  newTask.value = ''
};
</script>

<style lang="scss">
.done {
  .q-item__label {
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
