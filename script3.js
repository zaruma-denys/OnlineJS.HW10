function getLength(arr) {
    return arr.map((str) => str.length);
  }
  
  const arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
  const arr2 = getLength(['Oleksiy', 'Andriana']);
  
  console.log(arr1); 
  console.log(arr2);