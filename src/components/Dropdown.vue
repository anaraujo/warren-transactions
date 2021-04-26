<template>
  <details class="w-dropdown">
    <summary v-if="selectedItem">
      <span class="selected-item">
        {{ selectedItem | capitalize }}
        <div class="icon-wrapper" @click="deselectItem">
          <i class="icon close-icon"></i>
        </div>
      </span>
      <i class="icon arrow-down-icon"></i>
    </summary>
    <summary v-else>
      <span>Status</span>
      <i class="icon arrow-down-icon"></i>
    </summary>
    <div class="d-options">
      <div
        class="option"
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
      >
        {{ item | capitalize }}
      </div>
    </div>
  </details>
</template>

<script>
import { capitalize } from "@utils/filters";

export default {
  name: "Table",
  props: {
    items: Array,
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  filters: { capitalize },
  methods: {
    selectItem(value) {
      const details = document.querySelector(".w-dropdown");

      this.selectedItem = value;
      details.removeAttribute("open");
      this.$emit("selectItem", value);
    },
    deselectItem() {
      this.selectedItem = null;
      this.$emit("selectItem", null);
    },
  },
};
</script>