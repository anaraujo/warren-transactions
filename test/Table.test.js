import { createLocalVue, shallow } from 'vue-test-utils'
import Table from "@components/Table";

describe("Table.test.js", () => {
    const items = [
        { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
        { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "created", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
    ];

    let localVue, cmp;

    beforeEach(() => {
        localVue = createLocalVue()
        cmp = shallow(Table, {
            localVue,
            propsData: {
                items,
            }
        })
    });

    it('prop named \'items\' is set to proper value', () => {
        expect(cmp.vm.items).toEqual([
            { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
            { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "created", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
        ]);
    });
});