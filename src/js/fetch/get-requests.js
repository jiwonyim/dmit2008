function getTickerRequest(url){
    const result = fetch(url)
    .then(res => console.log(res))

    return "get ticker request"
}


export {getTickerRequest}