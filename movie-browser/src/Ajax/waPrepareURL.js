import config from './ajaxconfig'
export function WaPrepareURLs(type,page=1){
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
        }
    }
    return {url,options};
}