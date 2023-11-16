import axios from 'axios';

const apiKey = 'd9fcff04ad8341128757ed1a8c5694fe';

export const api = axios.create({
    baseUrl: 'https://api.spoonacular.com'
})

export const getFoods = async () => {
    const response = await api.get('/food/search?apiKey=${apiKey}');
    return response.data;
}