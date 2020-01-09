import { observable, decorate , action } from "mobx";

class GeneralStore {
    data = [];

    addData(data){
        this.data.push(data);
    }
}

decorate(GeneralStore, {
    data: observable,
    addData: action
})

const store = new GeneralStore();
export default store;