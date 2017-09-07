const axios = require("axios")



const searchArticles = (query, startYear, endYear) => {
    const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    const APIkey = "749dfe5607974a399b902a67c4adc4d2"
    return axios({
        method: 'get',
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        params: {
            'api-key': "4a684cd4ec6e4d98bbda2a155d5be0ee",
            q: query
        }
    })
}


module.exports = searchArticles