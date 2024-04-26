<template>
  <q-page class="q-pa-md">
    <h3 class="text-center q-my-sm">Todoshka</h3>
    <q-input
      @keyup.enter="addTask"
      class="q-mb-md"
      filled
      v-model="newTask"
      placeholder="Add task"
    >
      <q-btn :disable="!newTask" @click="addTask" round dense flat icon="add"></q-btn>
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
    <div v-if="tasks == ''" class="absolute-center">
      <div class="text-h4 text-primary text-center"><h4>
        No Tasks
      </h4>
        <q-img class="image-noTask" src="https://cdn-icons-png.flaticon.com/512/762/762686.png"></q-img>
      </div>
    </div>
  </q-page>
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
  if(newTask.value){
    tasks.value.push({
      title: newTask.value,
      done: false,
    });
    newTask.value = "";
  } else{
    $q.dialog({
    dark: true,
    title: "Your input is empty?",
    message: "Please enter your task",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    });
  };
  
  }

</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: green;
  }
}
.image-noTask{
  width: 200px;
  height: 200px;
  opacity: .2;
  
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
