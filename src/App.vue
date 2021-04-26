<template>
  <div id="app">
    <header class="container-fluid">
      <i class="icon logo-icon"></i>
    </header>
    <main class="container-fluid">
      <div class="transaction-table">
        <div class="transaction-header">
          <div>Título</div>
          <div>Descrição</div>
          <div>Status</div>
          <div>Valor</div>
        </div>
        <div class="transaction-row" v-for="tsc in transactions" :key="tsc.id">
          <div>{{ tsc.title }}</div>
          <div>{{ tsc.description }}</div>
          <div>{{ tsc.status }}</div>
          <div>R$ {{ tsc.amount }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transactions: null,
    };
  },
  mounted() {
    this.axios
      .get("https://warren-transactions-api.herokuapp.com/api/transactions")
      .then((response) => (this.transactions = response.data));
  },
};
</script>