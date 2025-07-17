<script setup>
import { computed, ref, watch } from 'vue';

const habit = defineModel({
  default: {
    name: '',
    description: '',
    frequency: 1,
    count: 0,
  },
});

const sum = computed(() => {
  const count = habit.value?.count ?? 0;
  const frequency = habit.value?.frequency ?? 0;
  return count * frequency;
});

const label = computed(() => {
  const name = habit.value?.name || '';
  const description = habit.value?.description || '';
  return `${name} - ${description}`;
});

// const sum = computed(() => habit.value.count * habit.value.frequency);
// const label = ref('');

watch(
  () => ({ name: habit.value.name, description: habit.value.description }),
  (newVal) => {
    label.value = `${newVal.name} - ${newVal.description}`;
  },
  { deep: true, immediate: true }
);
</script>


<template>
  <div class="card">
    <form @submit.prevent>
      <h1>Трекер привычек</h1>
      <p>Метка: {{ label }}</p>

      <div>
        <label for="habit-name">Название привычки</label>
        <input v-model="habit.name" id="habit-name" required />
      </div>

      <div>
        <label for="description">Описание привычки</label>
        <textarea v-model="habit.description" id="description" required></textarea>
      </div>

      <div>
        <label for="frequency">Частота выполнения</label>
        <select v-model.number="habit.frequency" id="frequency">
          <option value="1">Каждый день</option>
          <option value="7">Раз в неделю</option>
          <option value="30">Раз в месяц</option>
        </select>
      </div>

      <div>
        <label for="count">Количество повторений</label>
        <input v-model.number="habit.count" id="count" type="number" min="0" />
      </div>

      <div>Общее количество выполнений: <strong>{{ sum }}</strong></div>

      <button type="submit">Сохранить</button>
      <button type="button">Простое нажатие</button>
    </form>
  </div>
</template>
