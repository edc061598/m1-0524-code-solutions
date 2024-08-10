const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((value) => {
  console.log('In order:', value);

})
values.forEach((item, index, array) =>{
  const valuesIndex = array.length - 1 - index;

  console.log(array[valuesIndex]);
})
