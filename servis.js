
// function getImageOld(input) {
//     const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${input}&count=1`)
//    return promise;
// }


function getImage(input) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${input}&count=1`)
    return promise.then((response)=>{return response.data})
}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=266767`)
    return promise.then((response)=>{return response.data})
}