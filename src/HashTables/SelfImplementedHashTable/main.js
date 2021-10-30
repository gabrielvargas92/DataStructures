class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    get(key) {
        let address = this._hash(key);

        if(this.data[address].length > 1)
        {
            for(var i = 0; i < this.data[address].length; i++){
                if(this.data[address][i][0] == key) {
                    return this.data[address][i]
                }
            }
        }
        
         return this.data[address]
    }

    set(key, value) {
        let address = this._hash(key);

        if(!this.data[address])
            this.data[address] = []    
        
        this.data[address].push([key,value])

        //console.log(this.data)
    }

  }
  
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000)
  //console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  myHashTable.set('teste', 2)
  myHashTable.set('teste 123', 223)
  console.log(myHashTable.get('apples'))
  //console.log(myHashTable.get('apples'))

  