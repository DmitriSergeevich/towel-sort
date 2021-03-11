
// You should implement your task here.

module.exports = function towelSort (matrix) {
  //return arr = matrix.map(char=> char.indexOf()%2!==0 ? String(char.reverse()) : String(char) );
  let arr =[];
  if(matrix===undefined){
    return [];
  }
  for(let i=0; i<matrix.length; i++){
  	
    if(i%2!==0){
      arr.push(...matrix[i].reverse())
    }else{
      arr.push(...matrix[i])
    }
    
    
  }return arr;
}
