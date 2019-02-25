// Aquí debería analizar el archivo markdown (a partir de la ruta que recibe como argumento)e imprimir los links que vaya encontrando


const fnValidate = (link) => {
    // si link 400 || 300 || 301 = FAIL si no OK
    }
    
const fnStats = (link) => {
    // link.href, link.text, link.
    }

const mdLinks = (path, options) => {
    mdLinks(path)
    .then(links => {
    // => [{ href, text, file }]
    })
    .catch(console.error);

mdLinks(path, { validate: true })
    .then(links => {
    // => [{ href, text, file, status, ok }]
    })
    .catch(console.error);

mdLinks(path)
    .then(links => {
    // => [{ href, text, file }]
    })
    .catch(console.error);
};
