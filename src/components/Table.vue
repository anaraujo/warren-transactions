<template>
  <div class="w-table">
    <div
      class="t-row"
      v-for="item in items"
      :key="item.id"
      @click="selectItem(item.id)"
    >
      <p class="t-col title">{{ item.title | capitalize }}</p>
      <p class="t-col desc">{{ item.description }}</p>
      <p class="t-col status">
        <span
          :style="{
            color: textColor(item.status),
            backgroundColor: bgColor(item.status),
          }"
        >
          {{ item.status | translatedStatus }}
        </span>
      </p>
      <p class="t-col amount">{{ item.amount | money }}</p>
      <p class="t-col button"><i class="icon arrow-down-icon"></i></p>
    </div>
  </div>
</template>

<script>
import { capitalize, money, translatedStatus } from "@utils/filters";

export default {
  name: "Table",
  props: {
    items: Array,
    statuses: Array,
  },
  filters: { capitalize, money, translatedStatus },
  methods: {
    selectItem(id) {
      this.$emit("selectItem", id);
    },
    textColor(value) {
      let currentStatus = this.statuses.find((status) => status.name === value);
      return currentStatus.textColor;
    },
    bgColor(value) {
      let currentStatus = this.statuses.find((status) => status.name === value);
      return currentStatus.backgroundColor;
    },
  },
};
</script>