function alphaVantage(){
    this.apiBaseUrl = 'https://www.alphavantage.co/'

    this.init = function (){
        const result = this.query('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=L0FXXPK5RH77KQ4X').then(res=> res)
        return result
    }

    this.query= async function(url){
        const req = await fetch(url);
        const res = await req.json();
        return res
     }

    this.search = async function (formObj){
    const {name} = {...formObj}
    let url = new URL( this.apiBaseUrl + 'function=TIME_SERIES_INTRADAY&symbol=' + '?' + '&interval=5min&apikey=L0FXXPK5RH77KQ4X')
    // console.log(url.search url must have function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=L0FXXPK5RH77KQ4X)
    
    // create search params for the url
    const params = new URLSearchParams()
    params.set('search', name)
    url =url+params 
    console.log(url)
    
    // fetch the data
    const req = await fetch(url);
    const res = await req.json();
    
    return res
    
    }

    return this
}

export default alphaVantage