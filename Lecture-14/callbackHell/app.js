

// function fun(f) {
//     console.log('fun');
//     f();
// }




// fun(function() {
//     console.log('inner fun');
// });




// // download the file from the url
function downloadFile(url,downloaded) {
    console.log(`Starting the download from ${url}`);
    setTimeout(() => {
        const fileName = url.split('/').pop();
        downloaded(fileName);
    }, 3000);

}

function compressFile(fileName, compressed) {
    console.log(`Starting the file compression from ${fileName}`);
    setTimeout(() => {
        const compressedPath = `http://facebook.com/${fileName.split('.')[0]}.zip`;
        compressed(compressedPath);
    }, 2000);
}

function uploadFile(compressedPath, uploaded) {
    console.log(`Starting to upload the file from ${compressedPath}`);
    setTimeout(() => {
        const uploadedPath = `http://facebook.com/localsystem/${compressedPath.split('/').pop().split('.')[0]}.jpg`;
        uploaded(uploadedPath);
    }, 2000);
}


downloadFile('http://facebook.com/profile.jpg', function (fileName) {
    console.log(`File downloaded successfully as ${fileName}`); 
    compressFile(fileName, function (compressedPath) {
        console.log(`File Compressed Successfully as ${compressedPath}`);
        uploadFile(compressedPath, function (uploadedPath) {
            console.log(`File uploaded successfully at ${uploadedPath}`);
            console.log('Everything done');
        })
    })
});

