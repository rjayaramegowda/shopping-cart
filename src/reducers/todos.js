import {
  SORT_BY_PRICE_HIGH,
  SORT_BY_PRICE_LOW,
  SORT_BY_DISCOUNT,
  FILTER_BY_PRICE,
} from "../constants";

const productList = [
  { price: 1000, discount: 500 },
  { price: 3500, discount: 200 },
  { price: 3000, discount: 700 },
];

const todos = (state = productList, action) => {
  console.log("[todos] action.type = ", action.type);
  switch (action.type) {
    case SORT_BY_PRICE_HIGH:
      return soryByPirceHigh(state);
    case SORT_BY_PRICE_LOW:
      return soryByPirceLow(state);
    case SORT_BY_DISCOUNT:
      return soryByDiscount(state);
    case FILTER_BY_PRICE:
      return filterByPrice(state);
    default:
      return state;
  }
};

function soryByPirceHigh(dataProvider) {
  var result = Array.from(dataProvider);
  result = result.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log("[todos] soryByPirceHigh result = ", result);
  return result;
}

function soryByPirceLow(dataProvider) {  
  var result = Array.from(dataProvider);
  result = result.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log("[todos] soryByPirceLow result = ", result);
  return result;
}

function soryByDiscount(dataProvider) {
  var result = Array.from(dataProvider);
  result = result.sort(function (a, b) {
    return b.discount - a.discount;
  });
  console.log("[todos] soryByDiscount result = ", result);
  return result;
}

function filterByPrice(dataProvider, price = { low: 2000, high: 4000 }) {
  return dataProvider.filter(
    (a) => a.price > price.low && a.price < price.high
  );
}

export default todos;