import config from './ajaxconfig'
export function WaPrepareURLs(type,page=1,queryVal){
    let url;
    let options
    switch(type){
        case "list": {
            url  = config.base_url + `/popular?language=en-US&page=${page}`;
            // let header = config.header
            options = {
                method: config.methods_supported[0],
                headers: config.header
            };
            break;
        }
        case "query":{
            url = config.base_url.split('3/')[0] + `3/search/movie?query=${queryVal}&page=${page}`;
            options = {
                method: config.methods_supported[0],
                headers: config.header
            };
            break;
        }
    }
    return {url,options};
}