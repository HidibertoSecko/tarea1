function uno()
{
  var matrix = [[1, 1, 0, 0],
                [0, 5, 4, 1],
                [2, 1, 3, 10]];
  var suma = 0;
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 4; j++){
      if(i>=1){
        if(matrix[i-1][j] != 0)
          suma = suma + matrix[i][j];
          else {
            matrix[i][j]=0;
          }
      }
      else
        suma = suma + matrix[i][j];
    }
  }
  return suma;
}
console.log(uno());
