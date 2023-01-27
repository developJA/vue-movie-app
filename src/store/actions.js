import { fetchDailyAllList } from '../api/index.js';

export default {
    FETCH_DAILY({ commit }) {
        fetchDailyAllList() 
        .then(({ data, status }) => {
            console.log(status);
            commit('SET_DAILY', data);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    
}