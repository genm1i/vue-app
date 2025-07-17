<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <li>
    <div>{{ item.name }}</div>
    <div>{{ item.description }}</div>
    <p>
      <template v-if="item.frequency === 1">Каждый день</template>
      <template v-else-if="item.frequency === 7">Раз в неделю</template>
      <template v-else-if="item.frequency === 30">Раз в месяц</template>
      <template v-else>Раз в {{ item.frequency }} дней</template>
    </p>
    <slot name="action"></slot>
  </li>
</template>
