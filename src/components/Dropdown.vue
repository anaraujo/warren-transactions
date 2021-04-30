<template>
  <details class="w-dropdown">
    <summary v-if="selectedItem">
      <span class="selected-item">
        {{ selectedItem | translatedStatus }}
        <div class="icon-wrapper" @click="selectItem(null)">
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
        @click="selectItem(item.name)"
      >
        {{ item.name | translatedStatus }}
      </div>
    </div>
  </details>
</template>

<script>
import { translatedStatus } from "@utils/filters";

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
  filters: { translatedStatus },
  methods: {
    selectItem(value) {
      const details = document.querySelector(".w-dropdown");

      details && details.removeAttribute("open"); // closing dropdown

      this.selectedItem = value;
      this.$emit("selectItem", value); // passing value selected to parent component
    },
  },
};
</script>