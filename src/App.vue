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
        <div
          v-for="(transaction, date) in groupByDate"
          :key="date"
          class="date-wrapper"
        >
          <h6>{{ date | longDate }}</h6>

          <Table
            :items="transaction"
            :statuses="statuses"
            @selectItem="selectTransaction"
          ></Table>
        </div>
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
import { date, longDate } from "@utils/filters";
import Dropdown from "@components/Dropdown";
import Modal from "@components/Modal";
import Table from "@components/Table";

export default {
  name: "App",
  components: { Dropdown, Modal, Table },
  filters: { date, longDate },
  data() {
    return {
      transactions: null,
      title: "",
      status: null,
      statuses: [
        {
          name: "created",
          textColor: "#101c8b",
          backgroundColor: "#b3baf4",
        },
        {
          name: "processing",
          textColor: "#7a2f01",
          backgroundColor: "#fbb791",
        },
        {
          name: "processed",
          textColor: "#004d3a",
          backgroundColor: "#a0f4e0",
        },
      ],
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
    groupByDate() {
      var keyDate = Object.keys(this.filteredItems).map((index) => {
        return {
          date: this.filteredItems[index].date,
          transaction: this.filteredItems[index],
        };
      });

      keyDate.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      var groupDate = {};

      keyDate.forEach((item) => {
        if (item.date in groupDate) {
          groupDate[item.date].push(item.transaction);
        } else {
          groupDate[item.date] = new Array(item.transaction);
        }
      });

      return groupDate;
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