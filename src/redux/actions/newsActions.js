import axios from "axios"
export function fetchNews(category) {
    return (dispatch, getState) => {
        axios
        .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=a6c3f397825441b1887051aef349fe12`)
        .then((response) => {
            const articles = response.data.articles;
            console.log(articles);
            dispatch({
                type: "FETCH_NEWS", 
                payload: articles
            })
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    } 
}