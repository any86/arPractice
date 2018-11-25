import {
    ARController,
} from 'jsartoolkit5';
export default () => new Promise((resolve, reject) => {
    navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        .then(function(stream) {
            resolve(stream);
        })
        .catch(function(err) {
            reject(err);
        });
});