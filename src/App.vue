<script setup>
import { ref } from 'vue';
import HabitForm from './components/HabitForm.vue';
import HabitList from './components/HabitList.vue';

const currentHabit = ref({});

const selecthandler = (ev) => {
  currentHabit.value = { ...ev };
};
</script>

<template>
  <div class="main-layout">
    <HabitForm v-model="currentHabit" />
    <HabitList @select:habit="selecthandler" />
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  gap: 2rem;
  padding: 5px;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
