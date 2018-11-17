import {
    ARCameraParam,
    ARController
} from 'jsartoolkit5';
var video = ARController.getUserMedia({

    maxARVideoSize: 320, // do AR processing on scaled down video of this size

    facing: "environment",

    onSuccess: function(video) {
        console.log('got video', video);
    }
})