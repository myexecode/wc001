import api from "./network.js";

let homeApi = {
    getMultiData(){
        return api({
            url: 'home/index/navfn'
        })
    }
};

export default homeApi;