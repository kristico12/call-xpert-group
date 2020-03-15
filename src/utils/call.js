function Header(url, data) {
    const files = new FormData();
    data.forEach((img,i) => {
        files.append(`${i}${img.name}`,img);
    });
    const options = {
        method: 'POST',
        mode: 'cors',
        body: files
    };
    return new Request(url, options)
}
function CallFiles(url, data) {
    return new Promise((resolve, reject) => {
        fetch(Header(url, data))
            .then(() => resolve())
            .catch(() => reject())
    });
}
export {
    CallFiles
}
