import { createLocalVue, mount } from 'vue-test-utils'
import Dropdown from "@components/Dropdown";

describe("Dropdown.test.js", () => {
    const items = [
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
        cmp = mount(Dropdown, {
            localVue,
            propsData: {
                items
            }
        })
    });

    // PROPS

    it('prop named \'items\' is set to proper value', () => {
        expect(cmp.vm.items).toEqual([
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

    it('selectedItem initializes equal to null', () => {
        expect(cmp.vm.selectedItem).toEqual(null);
    });

    // METHODS 

    it('when item on dropdown is selected, \'selectedItem\' is set to that item\'s value', () => { 
        cmp.vm.selectItem('processed');
        expect(cmp.vm.selectedItem).toBe('processed');
    })

    it('when item on dropdown is selected, the dropdown closes', () => {
        const details = cmp.find(".w-dropdown");

        cmp.vm.selectItem('processed');
        expect(details.attributes().open).toBe(undefined);
    })

    it('when item on dropdown is selected, the item\'s value is emmited', () => {
        cmp.vm.selectItem('processed');
        expect(cmp.emitted().selectItem).toBeTruthy()
        expect(cmp.emitted().selectItem.length).toBe(1)
        expect(cmp.emitted().selectItem[0]).toEqual(['processed'])
    })
});