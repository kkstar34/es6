function moveZeros(arr) {
    let nbOfZeros = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        arr.splice(i,1);
        i--;
        nbOfZeros++
      }
    }
    
    for(let j =0; j < nbOfZeros; j++){
        arr.push(0);
    }

    return arr;
  }


  function getCount(str) {
    let vowelsTab = ["a", "e", "i", "o", "u"];
    let count = 0;
    
    
    for(let i=0; i<str.length; i++){
      for(let j =0; j<vowelsTab.length; j++){
        if(str[i]== vowelsTab[j]){
          count++
        }
      }
    }
    
    return count;   
    
  }

  var capitals = function (word) {
    let tab = [];
    for(let i = 0; i< word.length; i++){
      if(word[i] === word[i].toUpperCase()){
        tab.push(i);
      }
    }
  return tab;
};

function accum(s) {
  let tab = [];
  let x ;
  for (let i = 0; i < s.length; i++){
      if(i>0){
           tab.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
      }else{
          tab.push(s[i].toUpperCase());
      }
  }
  return tab.join("-");
}
  console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));