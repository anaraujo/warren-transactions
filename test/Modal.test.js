import Vue from "vue";
import Modal from "@components/Modal";

describe("Modal.test.js", () => {
    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(Modal); // Create a copy of the original component
        vm = new cmp({
            data: {
                statusPercentage: {
                    created: 0,
                    processing: 50,
                    processed: 100,
                },
            }
        }).$mount(); // Instances and mounts the component
    });

    it('equals statusPercentage to {created: 0, processing: 50, processed: 100,}', () => {
        expect(vm.statusPercentage).toEqual({
            created: 0,
            processing: 50,
            processed: 100,
        });
    });
});