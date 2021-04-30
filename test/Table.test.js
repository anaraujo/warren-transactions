import { createLocalVue, shallow } from 'vue-test-utils'
import Table from "@components/Table";

describe("Table.test.js", () => {
    const items = [
        { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
        { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "created", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
    ];

    const statuses = [
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
    ];

    let localVue, cmp;

    beforeEach(() => {
        localVue = createLocalVue()
        cmp = shallow(Table, {
            localVue,
            propsData: {
                items,
                statuses
            }
        })
    });

    // PROPS

    it('prop named \'items\' is set to proper value', () => {
        expect(cmp.vm.items).toEqual([
            { "id": "5f89f9f257fe42957bf6dbfd", "title": "Resgate", "description": "et labore proident aute nulla", "status": "created", "amount": 2078.66, "date": "2020-07-01", "from": "Aposentadoria", "to": "Conta Warren" },
            { "id": "5f89f9f271e4213092bd4e41", "title": "Depósito", "description": "excepteur veniam proident irure pariatur", "status": "created", "amount": 148856.29, "date": "2020-06-23", "from": "Trade", "to": "Conta Warren" }
        ]);
    });

    it('prop named \'statuses\' is set to proper value', () => {
        expect(cmp.vm.statuses).toEqual([
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
        ]);
    });

    // METHODS

    it('when an item is selected, selectItem() is emmited', () => {
        cmp.vm.selectItem('5f89f9f257fe42957bf6dbfd');
        expect(cmp.emitted().selectItem).toBeTruthy()
        expect(cmp.emitted().selectItem.length).toBe(1)
        expect(cmp.emitted().selectItem[0]).toEqual(['5f89f9f257fe42957bf6dbfd'])
    })

    it('textColor() returns the text color of the status received as a parameter', () => {
        expect(cmp.vm.textColor('created')).toBe('#101c8b');
        expect(cmp.vm.textColor('processing')).toBe('#7a2f01');
        expect(cmp.vm.textColor('processed')).toBe('#004d3a');
    })

    it('bgColor() returns the background color of the status received as a parameter', () => {
        expect(cmp.vm.bgColor('created')).toBe('#b3baf4');
        expect(cmp.vm.bgColor('processing')).toBe('#fbb791');
        expect(cmp.vm.bgColor('processed')).toBe('#a0f4e0');
    })

    it('currentStatus() returns status object with the same name as the parameter received', () => {
        expect(cmp.vm.currentStatus('created')).toStrictEqual({
            name: "created",
            textColor: "#101c8b",
            backgroundColor: "#b3baf4",
        });
        expect(cmp.vm.currentStatus(undefined)).toStrictEqual({});
    })
});