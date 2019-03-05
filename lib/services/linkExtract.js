// esta funcion va a almacenar la funcion que extraerá los links de la lista de archivos MD

export const recursionToDir = (path, result) => {
    if ( path.isFile() === true) {
        result.push(path)
    } else {
        result.hija.forEach( path => {
            // manda archivo a result
        });
    }
}


// FUNCTION TO EXTRACT .MD FILES IN A LIS
const fs = require('fs');
const path = require('path');
const pathToDir = process.argv[2];
const filterStr = process.argv[3];
export const getMdFiles = (dir, filterStr, callback) => {
  /*fs.readdir(dir, filterStr, function(err, list){
    if(err) return callback(err)
    list = list.filter(function(file){
      return path.extname(file) === '.' + filterStr;
    })
    callback(null, list);
  });*/
};