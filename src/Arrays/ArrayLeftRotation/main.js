function rotateLeft(d, arr) {
  
    if(!arr || arr.lenght == 0){
        console.log("caiu na validção")
        return arr;
    }
  
    for(var i = 0; i < d ; i++) {
      var head = arr.shift();    
      arr.push(head);
    }
    
    console.log(arr)
  }
  
  rotateLeft(4, [1,2,3,4,5])
  