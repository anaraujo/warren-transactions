<template>
  <div class="w-table">
    <div class="t-header">
      <div>Título</div>
      <div>Descrição</div>
      <div>Status</div>
      <div>Valor</div>
    </div>
    <div
      class="t-row"
      v-for="item in items"
      :key="item.id"
      @click="selectItem(item.id)"
    >
      <div>{{ item.title | capitalize }}</div>
      <div>{{ item.description | capitalize }}</div>
      <div>{{ item.status | capitalize }}</div>
      <div>R$ {{ item.amount }}</div>
    </div>
  </div>
</template>

<script>
import { capitalize } from "@utils/filters";

export default {
  name: "Table",
  props: {
    items: Array,
  },
  filters: { capitalize },
  methods: {
    selectItem(id) {
      this.$emit("selectItem", id);
    },
  },
};
</script>