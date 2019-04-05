function tres(cadena)
{
  var aux = "" , aux2 = "" , aux3 = "" ;
  var i = 0 , j = 0 ;
  for (i = 0; i < cadena.length; i++)
  {
      if(cadena.charAt(i)== '(')
      {
        for (var j = i + 1 ; cadena.charAt( j ) != ')' ; j++) {
            aux2 = aux2 + cadena.charAt( j ) ;
          }
        for (var c = aux2.length; c >= 0 ; c--) {
          aux3 = aux3 + aux2.charAt( c ) ;
        }
        aux = aux + aux3 ;
        i = j ;
        aux2 = "" , aux3 = "" ;
      }
      else {  aux = aux + cadena.charAt(i) ; }
  }
  return aux;
}
console.log(tres("hola(mundo)mi(primera)(tarea)"));
