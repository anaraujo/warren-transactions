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

    const statusPercentage = {
        created: 0,
        processing: 50,
        processed: 100,
    };

    const statuses = ["created", "processing", "processed"];
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

        cmp.vm.statusPercentage = statusPercentage;
    });

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
        expect(cmp.vm.statuses).toEqual(["created", "processing", "processed"]);
    });

    it('statusPercentage initializes with proper value', () => {
        expect(cmp.vm.statusPercentage).toEqual({
            created: 0,
            processing: 50,
            processed: 100,
        });
    });
});