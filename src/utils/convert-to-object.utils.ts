const createResponseObjects = (responseArray: string[]) => {

    const ResponseObj = responseArray.map((item: string, index: number) => {
      
      /** Split using regex positive lookbehind */
      const tmpArray = item.split(/(?<=^[^:]+):/);
      
      const name = tmpArray[0].trim();
      let value = tmpArray[1].trim();
      
      if (name.toLowerCase() === 'date'){
        /** Flytta till utils */
        const localDateTime = new Date(value);
        value = localDateTime.toLocaleString('sv-SE').toString();
      }
      else if (name.toLowerCase() === 'content-length'){
        /** Flytta till utils */
        let humanReadable = parseInt(value) / Math.pow(1024,1);
        value = humanReadable.toFixed(4)+' kb';
      }

      return { 'id': index, 'name': name, 'value': value }
   
    });
    
    return ResponseObj;

  }

  export default createResponseObjects;
