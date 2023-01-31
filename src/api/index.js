import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    // baseUrl : 'http://kobis.or.kr/kobisopenapi/webservice/rest/',
    // key : 'f5eef3421c602c6cb7ea224104795888',
    baseUrl : 'https://api.themoviedb.org/3/',
    key : '96adfd580f1b1200d9ad2b24a3cef06d',
    lang : 'ko-KR',
    
}

// 2. API 함수들을 정리 
function fetchDailyAllList() {
    // https://api.themoviedb.org/3/trending/all/day?api_key=5c641d77de2e4b7554d8ebbf14934986&language=ko-KR
    return axios.get(`${config.baseUrl}trending/all/day?api_key=${config.key}&language=${config.lang}&page=1`);
}
function fetchWeeklyList() {
    return axios.get(`${config.baseUrl}trending/all/week?api_key=${config.key}&language=${config.lang}&page=1`);
}
function fetchDetailInfo(id) {
    return axios.get(`${config.baseUrl}movie/${id}?api_key=${config.key}&language=${config.lang}`);
}
function fetchSearchInfo(str) {
    return axios.get(`${config.baseUrl}search/movie?api_key=${config.key}&query=${str}&language=ko-KR`)
}

export {
    fetchDailyAllList,
    fetchWeeklyList,
    fetchDetailInfo,
    fetchSearchInfo,
}