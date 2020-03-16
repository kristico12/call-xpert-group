function Header(url, data) {
    const files = new FormData();
    for (let x = 0; x < data.length; x++) {
        files.append('file' + x, data.item(x));
    }
    const options = {
        method: 'POST',
        modo: 'cors',
        body: files
    };
    return new Request(url, options)
}

function CallFiles(url, data) {
    return new Promise((resolve, reject) => {
        fetch(Header(url, data))
            .then(succes => resolve(succes))
            .catch(error => reject(error))
    });
}

export {
    CallFiles
}
