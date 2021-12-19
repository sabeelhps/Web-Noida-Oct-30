

// function fun(f) {
//     console.log('fun');
//     f();
// }




// fun(function() {
//     console.log('inner fun');
// });


// BAD WAY

// // download the file from the url
// function downloadFile(url,downloaded) {
//     console.log(`Starting the download from ${url}`);
//     setTimeout(() => {
//         const fileName = url.split('/').pop();
//         downloaded(fileName);
//     }, 3000);

// }

// function compressFile(fileName, compressed) {
//     console.log(`Starting the file compression from ${fileName}`);
//     setTimeout(() => {
//         const compressedPath = `http://facebook.com/${fileName.split('.')[0]}.zip`;
//         compressed(compressedPath);
//     }, 2000);
// }

// function uploadFile(compressedPath, uploaded) {
//     console.log(`Starting to upload the file from ${compressedPath}`);
//     setTimeout(() => {
//         const uploadedPath = `http://facebook.com/localsystem/${compressedPath.split('/').pop().split('.')[0]}.jpg`;
//         uploaded(uploadedPath);
//     }, 2000);
// }


// downloadFile('http://facebook.com/profile.jpg', function (fileName) {
//     console.log(`File downloaded successfully as ${fileName}`); 
//     compressFile(fileName, function (compressedPath) {
//         console.log(`File Compressed Successfully as ${compressedPath}`);
//         uploadFile(compressedPath, function (uploadedPath) {
//             console.log(`File uploaded successfully at ${uploadedPath}`);
//             console.log('Everything done');
//         })
//     })
// });




// GOOD WAY using promise
// ------------------------------

function downloadFile(url) {
    return new Promise((resolve, reject) => {

        if (!url.startsWith('http')) {
            throw new Error('Wrong Url')
        }

        console.log(`Starting the download from ${url}`);
        setTimeout(() => {
            const fileName = url.split('/').pop();
            resolve(fileName);
        }, 3000);
    })

}

function compressFile(fileName) {

    return new Promise((resolve, reject) => {
        console.log(`Starting the file compression from ${fileName}`);
        setTimeout(() => {
            const compressedPath = `http://facebook.com/${fileName.split('.')[0]}.zip`;
            resolve(compressedPath);
        }, 2000);
    })
   
}


function uploadFile(compressedPath) {
    
    return new Promise((resolve, reject) => {
        console.log(`Starting to upload the file from ${compressedPath}`);
        setTimeout(() => {
            const uploadedPath = `http://facebook.com/localsystem/${compressedPath.split('/').pop().split('.')[0]}.jpg`;
            resolve(uploadedPath);
        }, 2000);
    })
   
}



// downloadFile('http://facebook.com/profile.jpg')
//     .then((fileName) => {
//         console.log(`File download successfully as ${fileName}`);
//         compressFile(fileName)
//             .then((compressedPath) => {
//                 console.log(`File compressed as ${compressedPath}`);
//                 uploadFile(compressedPath)
//                     .then((uploadedPath) => {
//                         console.log(`File uploaded successfully as ${uploadedPath}`);
//                         console.log('Everything done');
//                     })
//             })
//     })



downloadFile('smtp://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then((uploadedPath) => {
        console.log(`File uploaded Successfully at ${uploadedPath}`);
        console.log('Everything done');
    })
    .catch((err) => {
        console.log('Something went wrong');
        console.log(err);
    });



