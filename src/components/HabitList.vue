<script setup>
import { reactive } from 'vue';

const habitList = reactive([
  {
    name: 'Бег',
    description: 'Бег в 7:00',
    frequency: 1,
    count: 365
  }
]);

const deleteHandler = (idx) => {
  habitList.splice(idx, 1);
};
</script>

<template>
  <ul>
    <li v-for="(item, idx) in habitList" :key="idx">
      <div>{{ item.name }}</div>
      <div>{{ item.description }}</div>
      <p>
        <template v-if="item.frequency === 1">Каждый день</template>
        <template v-else-if="item.frequency === 7">Раз в неделю</template>
        <template v-else-if="item.frequency === 30">Раз в месяц</template>
      </p>
      <button @click.stop="deleteHandler(idx)">Удалить</button>
    </li>
  </ul>
</template>
