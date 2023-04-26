function nbDig(n, d) {
  let str = '';
  let count = 0;
  for(let i = 0; i<=n;i++){
    let k = i**2;
    str +=String(k);
  }
  for(let item of str){
    if(item == d) count++;
  }
 
