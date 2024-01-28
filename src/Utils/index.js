export const totalPrice = (prices) => {
  var total = 0;
  prices.forEach((element) => {
    total += element.price;
  });
  return total;

  /*const totPrice = prices.map((price) => {
    var sumPrice = price + price;
    return sumPrice; 
  });

  console.log("valor total:  ", totPrice);*/
};
