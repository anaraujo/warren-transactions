import { createLocalVue, shallow } from 'vue-test-utils'
import axios from "axios";
import App from "@/App";

describe("App.test.js", () => {
    const transactions = [
        { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
        { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "created", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
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
        cmp.vm.title = '';
        cmp.vm.status = null;
        cmp.vm.statuses = statuses;
        cmp.vm.ready = false;
        cmp.vm.errored = false;
        cmp.vm.openModal = false;
        cmp.vm.selectedTransaction = null;
    });

    afterEach(() => {
        cmp.destroy()
    })

    it('\'transactions\' initializes with proper value', () => {
        expect(cmp.vm.transactions).toEqual([
            { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
            { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "created", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
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
});
