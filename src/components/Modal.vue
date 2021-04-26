<template>
  <div class="w-modal">
    <div class="m-wrapper">
      <div class="m-backdrop" @click="close"></div>
      <div class="m-content">
        <div class="m-header">
          <h2>{{ transaction.title | capitalize }}</h2>

          <i class="icon close-icon" @click="close"></i>
        </div>
        <div class="m-body">
          <div class="status-wrapper">
            <div class="status-bar">
              <div
                class="bar"
                :style="`width: ${statusPercentage[transaction.status]}%`"
              ></div>
            </div>
            <div class="status-label">
              <label v-for="(status, index) in statuses" :key="index">
                {{ status | translatedStatus }}
              </label>
            </div>
          </div>

          <div class="info-wrapper">
            <h3>Transferindo de</h3>

            <div class="info">
              <p>{{ transaction.from | capitalize }}</p>
              <p>{{ transaction.amount | money }}</p>
            </div>
          </div>

          <div class="info-wrapper">
            <h3>Para</h3>

            <div class="info">
              <p>{{ transaction.to | capitalize }}</p>
              <p>{{ transaction.amount | money }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { capitalize, money, translatedStatus } from "@utils/filters";

export default {
  name: "Modal",
  props: {
    transaction: Object,
    statuses: Array,
  },
  data() {
    return {
      statusPercentage: {
        created: 0,
        processing: 50,
        processed: 100,
      },
    };
  },
  filters: { capitalize, money, translatedStatus },
  methods: {
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>