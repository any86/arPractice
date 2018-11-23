import {
    ARController,
} from 'jsartoolkit5';
// export default () => new Promise((resolve, reject) => {
//     try {
//         ARController.getUserMedia({
//             maxARVideoSize: 320, // do AR processing on scaled down video of this size
//             facingMode:  { exact: "environment"},
//             onSuccess: function(video) {
//                 console.log(video);
//                 resolve(video);
//             }
//         });
//     } catch (error) {
//         reject(error);
//     }
// });

export default () => new Promise((resolve, reject) => {
    navigator.mediaDevices.getUserMedia({
            facingMode: {
                exact: "environment"
            },
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