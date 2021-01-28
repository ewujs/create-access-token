(()=>{"use strict";const e=e=>{let t={};switch(typeof e){case"string":t.url=e;break;case"object":t=e}"data"in t||(t.data={}),"method"in t||(t.method="POST");let s={resolve:null,reject:null};const r=new XMLHttpRequest,o=(e,s)=>{switch(typeof e){case"string":t.data=Object.assign({[e]:s},t.data);break;case"object":t.data=Object.assign(e,t.data)}},a=e=>(o(e),new Promise(((e,o)=>{var a,n;s.resolve=e,s.reject=o,r.open(t.method,t.url),a=r,(n=(n=t.headers)||{})["Content-Type"]="application/x-www-form-urlencoded",Object.keys(n).forEach((e=>{n[e]&&a.setRequestHeader(e,n[e])})),r.send(Object.keys(t.data).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t.data[e]))).join("&")),r.onreadystatechange=()=>{4===r.readyState&&(r.status<200||r.status>299?s.reject(r):s.resolve(r.responseText))}})));return{url:e=>t.url=e,headers:e=>t.headers=e,method:e=>t.method=e,data:(e,t)=>o(e,t),send:a,post:e=>(t.method="POST",a(e)),get:e=>(t.method="GET",a(e))}};!function(t){const s=t.location.hostname.split(".")[0],r=["cte","pte","lte"].find((e=>-1!==s.indexOf(e)));let o="";o=void 0===r?-1!==s.indexOf("sys")?"dispatch-test.digitalriver.com":"api.digitalriver.com":`dispatch-${r}.digitalriverws.net`;const a=async s=>{if("string"!=typeof s)throw new Error("Please pass the site ID.");try{return(await e({url:`https://${t.location.hostname}/store/${s}/SessionToken`,method:"GET"}).send().then((e=>e)).catch((e=>{throw Error(e)}))).session_token}catch(e){console.error(e)}};t.DRAccessToken={createLimitedAccessToken:async s=>{const{key:r,secret:n,siteId:c}=s||{};if("string"!=typeof r)throw new Error("Please pass a API Key.");if("string"!=typeof n)throw new Error("Please pass a API secret.");if("string"!=typeof c)throw new Error("Please pass the site ID.");try{const s=await a(c);return await e({url:`https://${o}/oauth20/token`,method:"POST",headers:{Authorization:`Basic ${t.btoa(r+":"+n)}`},data:{grant_type:"password",dr_session_token:s}}).send().then((e=>e)).catch((e=>{throw Error(e)}))}catch(e){console.error(e)}},createFullAccessToken:async s=>{const{key:r,secret:n,siteId:c,username:i,password:h}=s||{};if("string"!=typeof r)throw new Error("Please pass a API Key.");if("string"!=typeof n)throw new Error("Please pass a API secret.");if("string"!=typeof c)throw new Error("Please pass the site ID.");try{const s=await a(c);return await e({url:`https://${o}/oauth20/token`,method:"POST",headers:{Authorization:`Basic ${t.btoa(r+":"+n)}`},data:{grant_type:"password",username:i,password:t.btoa(h),dr_session_token:s}}).send().then((e=>e)).catch((e=>{throw Error(e)}))}catch(e){console.error(e)}},createLimitedAccessTokenByPk:async(s,r)=>{if("string"!=typeof s)throw new Error("Please pass the site ID.");if("string"!=typeof r)throw new Error("Please pass a public API Key.");try{return await e({url:`https://${t.location.hostname}/store/${s}/SessionToken?apiKey=${r}`,method:"GET"}).send().then((e=>e)).catch((e=>{throw Error(e)}))}catch(e){console.error(e)}},getTokenInfo:async t=>{if("string"!=typeof t)throw new Error("Please pass the token.");try{return await e({url:`https://${o}/oauth20/access-tokens?token=${t}`,method:"GET"}).send().then((e=>e)).catch((e=>{throw Error(e)}))}catch(e){console.error(e)}}}}(window)})();