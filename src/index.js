import VConsole from 'vconsole';
import {
    ARCameraParam,
    ARController,
    artoolkit
} from 'jsartoolkit5';
// var vConsole = new VConsole();
import createBox2d from './createBox2d';
import getCameraVideo from './getCameraVideo';

(async () => {

    const video = await getCameraVideo();
    
    // let img = document.getElementById('img');
    // var arController = new ARController(img, 'Data/camera_para.dat');
    // arController.onload = function() {
    //     arController.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_COLOR);
    //     arController.addEventListener('getMarker', function(ev) {
    //         console.log(ev);
    //         console.log(ev.target.videoWidth, ev.target.videoHeight, ev.data.marker.vertex);
    //         const vertex = ev.data.marker.vertex;
    //         createBox2d({
    //             width: ev.target.videoWidth,
    //             height: ev.target.videoHeight,
    //             vertex: ev.data.marker.vertex
    //         });
    //     });
    //     arController.process(img);
    // };
})();

// var video = ARController.getUserMedia({

//     maxARVideoSize: 320, // do AR processing on scaled down video of this size

//     facing: "environment",

//     onSuccess: function(video) {
//         document.body.appendChild(video);
//         console.log('got video', video);

//         var arController = new ARController(video, 'Data/camera_para.dat');  
//         arController.onload = function() {  
//             console.log('ARController ready for use', arController);  
//         };  
//     }
// })