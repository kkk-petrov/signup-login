export default async function fetchRequest(url = '', method = '', data, func) {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: requestData(data)
    })
    .then(response => response.text())
    .then(response => {
      func(response)
    })
    
    
    function requestData(dataArray){
      let out = '';
      for(let key in dataArray){
          out += `${key}=${dataArray[key]}&`;
      };
      return out;
    }
  }

      
