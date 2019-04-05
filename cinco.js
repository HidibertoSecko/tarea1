
function aux( n ) {
  n =n*n;
  var ans = 0 ;
  while (n > 0 ) {
    ans += n % 10 ;
    n = parseInt (n / 10 , 10 );
  }
  return ans
}
function  cinco( p , n ) {
  if (n >= 1 ) {
    return  aux (p * 100 + p);
  }
  else {
    return aux (p * 10 + p);
  }
}
console.log( cinco( 9 , 0 ));
 function cincop(p, n){

 }
