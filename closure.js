
function callApi(method){
    return function (url){
        console.log(`Fetching data from ${url} using ${method}`);
    }
}

const url = 'http://example.com/api';

callApi('GET')(url);