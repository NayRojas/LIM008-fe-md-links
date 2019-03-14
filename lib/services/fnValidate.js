const fetch = require('node-fetch');

export const linkValidate = (arrayLinks) => {
  const callback = (link) => new Promise((resolve, reject) => {
    fetch(link.href).then((res) => {
      if (res.status >= 200 && res.status < 400) {
        link.code = res.status;
        link.status = res.statusText;
        resolve(link);
      } else {
        link.code = res.status;
        link.status = 'FAIL' ;
        resolve(link);
      }
    }).catch(error => {
      error = 'URL must be checked';
      link.code = error;
      link.status = 'FAIL';
      resolve(link);
    });
  });
  const result = arrayLinks.map(callback);
  return Promise.all(result);
};

