export default function ajax(url, method, functionName, data){
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(requestData(data));

    XMLHttpRequest.onreadystatechange = function() {
        if(this.status == 200){
            functionName(this.response);
        }
    }
    function requestData(dataArray){
        let out = '';
        for(let key in dataArray){
            out += `${key}=${dataArray[key]}&`;
        };
        console.log(out);
        return out;
    }
}

