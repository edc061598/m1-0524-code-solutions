function getRangeReport(start:number, end:number):any {
  let total:number = 0;
  let odds:number[] = [];
  let evens:number[] = [];
  let range:number[] = [];
  let average:number = 0;

for(let i:number = start; i <= end; i++){

  if(i % 2 !== 0){
    odds.push(i);


  } else{
    evens.push(i);
  }

  range.push(i);

   average = (start + end) / 2;
  total += i;

}

return [total, odds, evens, range, average];
}
