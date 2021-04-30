import { createLocalVue, shallow } from 'vue-test-utils'
import Modal from "@components/Modal";

describe("Modal.test.js", () => {
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
        cmp = shallow(Modal, {
            localVue,
            propsData: {
                transaction,
                statuses
            }
        })
    });

    // PROPS

    it('prop named \'transaction\' is set to proper value', () => {
        expect(cmp.vm.transaction).toEqual({
            "id": "5f89f9f257fe42957bf6dbfd",
            "title": "Resgate",
            "description": "et labore proident aute nulla",
            "status": "created",
            "amount": 2078.66,
            "date": "2020-07-01",
            "from": "Aposentadoria",
            "to": "Conta Warren"
        });
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

    // DATA

    it('statusPercentage initializes with proper value', () => {
        expect(cmp.vm.statusPercentage).toEqual({
            created: 0,
            processing: 50,
            processed: 100,
        });
    });

    // METHODS
    
    it('close() is emmited', () => {
        cmp.vm.close();
        expect(cmp.emitted().closeModal).toBeTruthy()
        expect(cmp.emitted().closeModal.length).toBe(1)
    })
});