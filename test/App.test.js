import Vue from "vue";
import App from "@/App";

describe("App.test.js", () => {
    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(App); // Create a copy of the original component
        vm = new cmp({
            data: {
                transactions: [
                    { title: 'Mytitle', status: 'initialized' },
                    { title: 'Other title', status: 'to be processed' }
                ],
                title: 'Mytitle',
                status: 'initialized',
                statuses: ['initialized', 'to be processed'],
                ready: false,
                errored: false,
                openModal: false,
                selectedTransaction: { title: 'Mytitle', status: 'initialized' },
            }
        }).$mount(); // Instances and mounts the component
    });

    it('equals transactions to [{ title: "Mytitle", status: "initialized" }, { title: "Other title", status: "to be processed" }]', () => {
        expect(vm.transactions).toEqual([
            { title: 'Mytitle', status: 'initialized' },
            { title: 'Other title', status: 'to be processed' }
        ]);
    });

    it('equals title to "Mytitle"', () => {
        expect(vm.title).toEqual("Mytitle");
    });

    it('equals status to "initialized"', () => {
        expect(vm.status).toEqual("initialized");
    });

    it('equals statuses to ["initialized", "to be processed"]', () => {
        expect(vm.statuses).toEqual(['initialized', 'to be processed']);
    });

    it('equals ready to false', () => {
        expect(vm.ready).toEqual(false);
    });

    it('equals errored to false', () => {
        expect(vm.errored).toEqual(false);
    });

    it('equals openModal to false', () => {
        expect(vm.openModal).toEqual(false);
    });

    it('equals selectedTransaction to { title: "Mytitle", status: "initialized" }', () => {
        expect(vm.selectedTransaction).toEqual({ title: 'Mytitle', status: 'initialized' });
    });
});