<template>
  <div id="app">
    <header class="container-fluid">
      <i class="icon logo-icon"></i>
    </header>
    <main class="container-fluid">
      <div class="filters-wrapper">
        <input
          type="text"
          name="title"
          id="title"
          v-model="title"
          placeholder="Pesquise pelo título"
        />
      </div>

      <section v-if="errored">
        <p>
          Pedimos desculpas, não estamos conseguindo recuperar as informações no
          momento. Por favor, tente novamente mais tarde.
        </p>
      </section>

      <section v-else>
        <div v-if="loading">Carregando...</div>

        <div v-else class="warren-table">
          <div class="warren-header">
            <div>Título</div>
            <div>Descrição</div>
            <div>Status</div>
            <div>Valor</div>
          </div>
          <div
            class="warren-row"
            v-for="(tsc, index) in filteredItems"
            :key="index"
          >
            <div>{{ tsc.title | capitalize }}</div>
            <div>{{ tsc.description | capitalize }}</div>
            <div>{{ tsc.status | capitalize }}</div>
            <div>R$ {{ tsc.amount }}</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transactions: null,
      title: "",
      loading: true,
      errored: false,
    };
  },
  computed: {
    filteredItems() {
      if (this.title !== "") {
        return this.transactions.filter(
          (item) =>
            item.title.toLowerCase().indexOf(this.title.toLowerCase()) > -1
        );
      } else {
        return this.transactions;
      }
    },
  },
  mounted() {
    this.axios
      .get("https://warren-transactions-api.herokuapp.com/api/transactions")
      .then((response) => (this.transactions = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  // methods: {
  //   filterTitle() {
  //     console.log(this.title);
  //   },
  // },
};
</script>