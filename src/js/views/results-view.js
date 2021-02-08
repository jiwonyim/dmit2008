import ejs from "ejs";

const tickerView = `
<aside class="ticker">
  <header><h3 class="name"> <%= ticker.name %></h3></header>
   
  <ul class="details" >
  <li> symbol: <span><%= ticker.symbol %></span></li>
  <li> current close price: <span><%= close %></span></li>
  <li> current date:<span><%= ticker.last_refreshed %>Kg</span></li>
  </ul>
</aside>
`;

const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>
`;

function ResultsView(viewId) {
  this.container = document.querySelector(viewId);

  this.configUI = function (ticker) {
    const elem = ejs.render(tickerView, { ticker });
    this.container.insertAdjacentHTML("afterbegin", elem);
  };

  this.renderTicker = function (ticker) {
    // if there are no tickers in the results
    this.removeChildElements();
    if (people.results.length === 0) {
      const elem = ejs.render(noResultsView);
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
    
    // search returns results
    if (ticker.results !== 0) {
      //this.removeChildElements();
      ticker.results.forEach((ticker) => {
        console.log(ticker);
        const elem = ejs.render(tickerView, { ticker });
        this.container.insertAdjacentHTML("afterbegin", elem);
      });
    }
  };

  this.removeChildElements = function () {
    this.container.querySelectorAll("aside").forEach((ticker) => {
      console.log("remove")
      console.log(ticker)
      this.container.removeChild(ticker);
    });
  };
  return this;
}

export default ResultsView;
