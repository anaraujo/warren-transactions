<template>
  <div class="w-modal">
    <div class="m-backdrop">
      <div class="m-content">
        <div class="m-header">
          <h2>{{ transaction.title }}</h2>

          <i class="icon close-icon"></i>
        </div>
        <div class="m-body">
          <p>{{ transaction.status }}</p>
          <p>{{ transaction.from }}</p>
          <p>{{ transaction.amount }}</p>
          <p>{{ transaction.to }}</p>
          <p>{{ transaction.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { capitalize } from "@utils/filters";

export default {
  name: "Modal",
  props: {
    transaction: Object,
  },
  filters: { capitalize },
};
</script>