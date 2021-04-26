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
      <div>{{ item.status | translatedStatus }}</div>
      <div>{{ item.amount | money }}</div>
    </div>
  </div>
</template>

<script>
import { capitalize, money, translatedStatus } from "@utils/filters";

export default {
  name: "Table",
  props: {
    items: Array,
  },
  filters: { capitalize, money, translatedStatus },
  methods: {
    selectItem(id) {
      this.$emit("selectItem", id);
    },
  },
};
</script>