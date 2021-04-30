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
      <p class="t-col button">
        <i class="icon arrow-down-icon"></i>
      </p>
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
      this.$emit("selectItem", id); // pass id of transaction selected to the parent component
    },
    currentStatus(value) {
      let status = this.statuses.find((status) => status.name === value);
      return status ? status : {}; // return status object when name equals to parameter received
    },
    textColor(value) {
      return this.currentStatus(value).textColor;
    },
    bgColor(value) {
      return this.currentStatus(value).backgroundColor;
    },
  },
};
</script>