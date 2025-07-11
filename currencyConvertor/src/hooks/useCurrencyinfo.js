import { useEffect,useState } from "react";

export default function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((res) => setData(res[currency]))

        console.log(data);
    },[currency]);
    console.log(data);
    return data;
    
}