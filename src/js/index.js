import alphaVantage from './models/vantage.js'
import SearchView from './views/search-view.js'
import ResultsView from './views/results-view.js'


(function(){
    const model = new alphaVantage()
    const searchView = new SearchView('#search')
    const resultsView = new ResultsView('#results')
})()