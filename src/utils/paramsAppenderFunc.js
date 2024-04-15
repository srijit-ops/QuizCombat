export const serialize = (object) => {
    const str = [];
    for (const p in object) {
      if (Object.prototype.hasOwnProperty.call(object, p)) {
        if (object[p] || typeof object[p] === 'boolean' || object[p] === null) {
          if (Array.isArray(object[p]) && !object[p].length) continue;
  
          str.push(`${encodeURIComponent(p)}=${encodeURIComponent(object[p])}`);
        }
      }
    }
    return str.join('&');
  };
  
  
  export const sleep = (time=5000)=>{
    return new Promise((res)=>{
      setTimeout(()=>{
        res()
      },time)
    })
  }