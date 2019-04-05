function  cuatro ( cadena )
{
  var x = parseInt ( cadena.length / 2 , 10 );
    if ( cadena . length % 2 == 0  &&  cadena . length > 0 ) {
      for ( var i = 0 ; i < x; i ++ ) {
        if (cadena.charAt(i) != cadena.charAt(i + x)) return  false ;
      }
      return  true ;
    }
    else {
      return  false ;
    }
}

console.log(cuatro("aa") ?  " true "  :  " false ");
