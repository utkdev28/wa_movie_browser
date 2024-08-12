export default function fireRequest(url,options){
    return new Promise((res,rej)=>{
       fetch(url,options).then((response)=>{
            return  response.json();
       }).then(jsonresponse=>res(jsonresponse))
       .catch(err=>{debugger; rej(err)});
    })
}