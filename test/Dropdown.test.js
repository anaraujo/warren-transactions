import { createLocalVue, shallow } from 'vue-test-utils'
import Dropdown from "@components/Dropdown";

describe("Dropdown.test.js", () => {
    const items = ["created", "processing", "processed"];
    let localVue, cmp;

    beforeEach(() => {
        localVue = createLocalVue()
        cmp = shallow(Dropdown, {
            localVue,
            propsData: {
                items
            }
        })
    });

    it('prop named \'items\' is set to proper value', () => {
        expect(cmp.vm.items).toEqual(["created", "processing", "processed"]);
    });

    it('selectedItem initializes equal to null', () => {
        expect(cmp.vm.selectedItem).toEqual(null);
    });

    it('when item on dropdown is selected, \'selectedItem\' is set to that item\'s value', () => { 
        cmp.vm.selectItem('processed');
        expect(cmp.vm.selectedItem).toBe('processed');
    })

    it('when item on dropdown is selected, the item\'s value is emmited', () => {
        cmp.vm.selectItem('processed');
        expect(cmp.emitted().selectItem).toBeTruthy()
        expect(cmp.emitted().selectItem.length).toBe(1)
        expect(cmp.emitted().selectItem[0]).toEqual(['processed'])
    })
});