function uno()
{
  var matrix = [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]];
  var suma = 0;
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 4; j++){
      if(i>=1){
        if(matrix[i-1][j] != 0)
          suma = suma + matrix[i][j];
      }
      else
        suma = suma + matrix[i][j];
    }
  }
  return suma;
}
console.log(uno());
