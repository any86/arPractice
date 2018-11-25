// import VConsole from 'vconsole';
import {
    ARCameraParam,
    ARController,
    artoolkit
} from 'jsartoolkit5';
import createBox2d from './createBox2d';
import getCameraVideo from './getCameraVideo';


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
getCameraVideo().then(video => {
    // document.body.appendChild(video);
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(stream);
    console.log(video.src);

    // video.onloadedmetadata = function(e) {
    //     video.play();
    // };
    // var arController = new ARController(video, 'Data/camera_para.dat');
    // arController.onload = function() {
    //     arController.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_COLOR);
    //     arController.addEventListener('getMarker', function(ev) {
    //         console.log(ev);
    //         console.log(ev.target.videoWidth, ev.target.videoHeight, ev.data.marker.vertex);
    //         createBox2d({
    //             width: ev.target.videoWidth,
    //             height: ev.target.videoHeight,
    //             vertex: ev.data.marker.vertex
    //         });
    //     });
    //     arController.process();
    // };


}).catch(e => {

});