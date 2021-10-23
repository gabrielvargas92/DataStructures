//O(n^2)
function arrayManipulation(n, queries) {
    // Write your code here
    var arr = Array(n).fill(0)
    // brute force
    for(var i = 0; i <= queries.length -1; i++)
    {
       var start = queries[i][0] -1;
       var end = queries[i][1] -1;
       var value = queries[i][2]

      console.log(i)
      
       var biggerValue = 0;
       for(var j = start; j <= end; j++)
       {
          arr[j] = arr[j] + value;
          if(arr[j] > biggerValue)
            biggerValue = arr[j]

       }
    }
}

//O(n + m)
//O(n)
function arrayManipulation2(n, queries) {
    var arr = Array(n).fill(0)

    for (var i = 0; i < queries.length; i++) {
      var start = queries[i][0] -1 ;
      var end = queries[i][1];
      var value = queries[i][2];
      
      arr[start] += value;
      arr[end] = arr[end] - value;

      
    }

    console.log(arr)
    var maxvalue = 0;
    for(var i = 0; i < arr.length -1 ; i++)
    {
         arr[i+1] = arr[i] + arr[i + 1]
         if(arr[i]> maxvalue)
          maxvalue = arr[i]
    }
    
    return maxvalue
}


arrayManipulation2(5, [[1,2,100], [2,5,100], [3,4,100]])