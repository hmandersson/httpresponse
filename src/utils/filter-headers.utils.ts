const filterHeaders = (array: string[], keywords: string[]) => {

    const filtered = array.filter(
      value => keywords.some(key => 
      value.toLowerCase().startsWith(key)
    ));

    return filtered
  }

  export default filterHeaders;