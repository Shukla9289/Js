let prices=[250,645,300,90,50];;
let n=prices.length;
for(let i=0;i<n;i++){
let offer=prices[i]/10;
prices[i]=prices[i]-offer;

}
console.log(prices);
