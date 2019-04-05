function dos(a)
{
  if(a/100 > parseInt(a/100))
    return parseInt(a/100) + 1;
  else
    return a/100;
}
console.log(dos(1700));
