export default {
    SET_DAILY(state, dailys) {
        state.dailys = dailys;
    },
    SET_WEEKLY(state, weeklys) {
        state.weeklys = weeklys;
    },
    SET_SEARCH(state, search) {
        console.log("SET_SEARCH state : ",state);
        console.log("SET_SEARCH search : ",search);
        state.search = search.results;
    },
    UPDATE_SEARCH(state, search) {
        state.search = search;
    }
}