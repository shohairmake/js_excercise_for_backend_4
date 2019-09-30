const axios = require('axios');
const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

class QuizFetcher{
    static async fetch(){
        const response = await axios.get(url);
        return response.data;
    }
}

module.exports = QuizFetcher;