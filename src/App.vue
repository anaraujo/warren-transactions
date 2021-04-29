<template>
  <div id="app" v-if="ready">
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

        <Dropdown :items="statuses" @selectItem="selectStatus"></Dropdown>
      </div>

      <section v-if="errored">
        <p>
          Pedimos desculpas, não estamos conseguindo recuperar as informações no
          momento. Por favor, tente novamente mais tarde.
        </p>
      </section>

      <section v-else>
        <Table :items="filteredItems" @selectItem="selectTransaction"></Table>
      </section>
    </main>

    <Modal
      v-if="openModal"
      :transaction="selectedTransaction"
      :statuses="statuses"
      @closeModal="closeModal"
    ></Modal>
  </div>
</template>

<script>
import Dropdown from "@components/Dropdown";
import Modal from "@components/Modal";
import Table from "@components/Table";

export default {
  name: "App",
  components: { Dropdown, Modal, Table },
  data() {
    return {
      transactions: null,
      title: "",
      status: null,
      statuses: ["created", "processing", "processed"],
      ready: false,
      errored: false,
      openModal: false,
      selectedTransaction: null,
    };
  },
  computed: {
    filteredItems() {
      if (this.title !== "") {
        if (this.status !== null) {
          return this.transactions.filter(
            (item) =>
              item.status === this.status &&
              item.title.toLowerCase().indexOf(this.title.toLowerCase()) > -1
          );
        }

        return this.transactions.filter(
          (item) =>
            item.title.toLowerCase().indexOf(this.title.toLowerCase()) > -1
        );
      } else if (this.status !== null) {
        return this.transactions.filter((item) => item.status === this.status);
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
      .finally(() => {
        this.ready = true;
      });
  },
  methods: {
    selectStatus(status) {
      this.status = status;
    },
    selectTransaction(id) {
      this.axios
        .get(
          `https://warren-transactions-api.herokuapp.com/api/transactions/${id}`
        )
        .then((response) => (this.selectedTransaction = response.data))
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.openModal = true;
        });
    },
    closeModal() {
      this.openModal = false;
    },
  },
};
</script>