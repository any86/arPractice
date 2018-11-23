import {
    ARController,
} from 'jsartoolkit5';
export default () => new Promise((resolve, reject) => {
    try {
        ARController.getUserMedia({
            maxARVideoSize: 320, // do AR processing on scaled down video of this size
            facing: "environment",
            onSuccess: function(video) {
                document.body.appendChild(video);
                console.log(video);
                resolve(video);
            }
        });
    } catch (error) {
        reject(error);
    }
});