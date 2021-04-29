import { createLocalVue, shallow } from 'vue-test-utils'
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import App from "@/App";

describe("App.test.js", () => {
    const transactions = [
        { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
        { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "processing", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
    ];

    const transaction = {
        "id": "5f89f9f257fe42957bf6dbfd",
        "title": "Resgate",
        "description": "et labore proident aute nulla",
        "status": "created",
        "amount": 2078.66,
        "date": "2020-07-01",
        "from": "Aposentadoria",
        "to": "Conta Warren"
    };

    const statuses = ["created", "processing", "processed"];
    let localVue, cmp;

    beforeEach(() => {
        localVue = createLocalVue()
        cmp = shallow(App, {
            localVue,
            mocks: { axios }
        })

        cmp.vm.transactions = transactions;
    });

    afterEach(() => {
        cmp.destroy()
    })

    // DATA 

    it('\'transactions\' initializes with proper value', () => {
        expect(cmp.vm.transactions).toEqual([
            { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
            { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "processing", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
        ]);
    });

    it('\'title\' initializes as an empty string', () => {
        expect(cmp.vm.title).toEqual("");
    });

    it('\'status\' initializes equal to null', () => {
        expect(cmp.vm.status).toEqual(null);
    });

    it('\'statuses\' initializes with proper value', () => {
        expect(cmp.vm.statuses).toEqual(["created", "processing", "processed"]);
    });

    it('\'ready\' initializes equal to false', () => {
        expect(cmp.vm.ready).toEqual(false);
    });

    it('\'errored\' initializes equal to false', () => {
        expect(cmp.vm.errored).toEqual(false);
    });

    it('\'openModal\' initializes equal to false', () => {
        expect(cmp.vm.openModal).toEqual(false);
    });

    it('\'selectedTransaction\' initializes equal to null', () => {
        expect(cmp.vm.selectedTransaction).toEqual(null);
    });

    // COMPUTED 

    it('\'filteredItems \' is working properly', () => {
        expect(cmp.vm.filteredItems).toEqual(cmp.vm.transactions);

        cmp.vm.title = 'Resgate'; // filter by title
        expect(cmp.vm.filteredItems).toEqual([
            { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" }
        ]);

        cmp.vm.status = 'processing'; // filter by title and status
        expect(cmp.vm.filteredItems).toEqual([]);

        cmp.vm.title = 'Depósito'; // filter by title and status
        expect(cmp.vm.filteredItems).toEqual([
            { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "processing", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
        ]);

        cmp.vm.title = ''; // filter by status
        expect(cmp.vm.filteredItems).toEqual([
            { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "processing", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
        ]);
    });

    // METHODS

    it('\'selectStatus\' set \'status\' value', () => {
        cmp.vm.selectStatus('created');
        expect(cmp.vm.status).toEqual('created');
    });

    // it('\'selectTransaction \' set \'openModal\' to true', () => {
    //     cmp.vm.selectTransaction('5f89f9f257fe42957bf6dbfd');
    //     expect(cmp.vm.openModal).toEqual(true);
    // });

    it('\'closeModal \' set \'openModal\' to false', () => {
        cmp.vm.closeModal();
        expect(cmp.vm.openModal).toEqual(false);
    });
});
