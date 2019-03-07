const fetch = require('node-fetch');

export const linkValidate =  (arrayLinks) => {
    console.log(arrayLinks)
  const mapCb = (link) => new Promise((resolve, reject) => {
    fetch(link.href).then((res) => {
        if (res.status >= 200 && res.status <= 400) {
            link.code = res.status;
            link.status =  res.statusText;
            resolve(link)
        } else {
            link.code = res.status;
            link.status = 'FAIL' ;
            resolve(link)
        }
        }).catch(error => {
            error = 'Página no encontrada'
          link.code = error;
          link.status = 'FAIL';
          resolve(link)
        });
    })
    const result = arrayLinks.map(mapCb)
    return Promise.all(result)
};

//console.log(linkValidate('https://es.wikipedia.org/wiki/Markdown'));

 /*const linkValidate =  (link) => {
        fetch(link).then((res) => {
            console.log(res.status, res.statusText);
        })
  };*/
  // un array de promesas, paquete de promesas (como valor de retorno promise.All(arrayLinks) para va)