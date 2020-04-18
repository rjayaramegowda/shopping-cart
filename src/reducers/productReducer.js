import {
  SORT_BY_PRICE_HIGH,
  SORT_BY_PRICE_LOW,
  SORT_BY_DISCOUNT,
  FILTER_BY_PRICE,
} from "../constants";

const productReducer = (state = productList, action) => {
  // console.log("[productReducer] action.type = ", action.type);
  switch (action.type) {
    case SORT_BY_PRICE_HIGH:
      return soryByPirceHigh(state);
    case SORT_BY_PRICE_LOW:
      return soryByPirceLow(state);
    case SORT_BY_DISCOUNT:
      return soryByDiscount(state);
    case FILTER_BY_PRICE:
      return filterByPrice(action.data);
    default:
      return state;
  }
};

function soryByPirceHigh(dataProvider) {
  var result = Array.from(dataProvider);
  result = result.sort(function (a, b) {
    return b.price.actual - a.price.actual;
  });
  // console.log("[productReducer] soryByPirceHigh result = ", result);
  return result;
}

function soryByPirceLow(dataProvider) {  
  var result = Array.from(dataProvider);
  result = result.sort(function (a, b) {
    return a.price.actual - b.price.actual;
  });
  // console.log("[productReducer] soryByPirceLow result = ", result);
  return result;
}

function soryByDiscount(dataProvider) {
  var result = Array.from(dataProvider);
  result = result.sort(function (a, b) {
    return b.discount - a.discount;
  });
  // console.log("[productReducer] soryByDiscount result = ", result);
  return result;
}

function filterByPrice(data = { low: 100, high: 1000000 }) {
// console.log("[productReducer] filterByPrice data = ", data);
var result = Array.from(productList);
  return result.filter(
    (a) => a.price.actual > data.low && a.price.actual < data.high
  );
}

export default productReducer;

// dataProvider
const productList = [
   {
      name:"Samsung Series 4",
      image:"img/img1.png",
      price:{
         actual:13999,
         display:22500
      },
      discount:37,
      quantity: 1
   },
   {
      name:"Samsung Super 6",
      image:"img/img2.png",
      price:{
         actual:35999,
         display:66900
      },
      discount:46,
      quantity: 1
   },
   {
      name:"Samsung The Frame",
      image:"img/img3.png",
      price:{
         actual:84999,
         display:133900
      },
      discount:36,
      quantity: 1
   },
   {
      name:"Thomson B9 Pro",
      image:"img/img4.png",
      price:{
         actual:9999,
         display:16999
      },
      discount:41,
      quantity: 1
   },
   {
      name:"LG Ultra HD",
      image:"img/img5.png",
      price:{
         actual:39990,
         display:79990
      },
      discount:50,
      quantity: 1
   },
   {
      name:"Vu Ready LED TV",
      image:"img/img6.png",
      price:{
         actual:7999,
         display:17e3
      },
      discount:52,
      quantity: 1
   },
   {
      name:"Koryo Android TV",
      image:"img/img7.png",
      price:{
         actual:55999,
         display:199990
      },
      discount:71,
      quantity: 1
   },
   {
      name:"Micromax LED Smart",
      image:"img/img8.png",
      price:{
         actual:9999,
         display:27990
      },
      discount:64,
      quantity: 1
   }
 ];
 