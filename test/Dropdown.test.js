import Vue from "vue";
import Dropdown from "@components/Dropdown";

describe("Dropdown.test.js", () => {
    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(Dropdown); // Create a copy of the original component
        vm = new cmp({
            data: {
                selectedItem: 'initialized'
            }
        }).$mount(); // Instances and mounts the component
    });

    it('equals selectedItem to "initialized"', () => {
        expect(vm.selectedItem).toEqual("initialized");
    });
});