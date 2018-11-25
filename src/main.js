// import VConsole from 'vconsole';
import {
    ARCameraParam,
    ARController,
    artoolkit
} from 'jsartoolkit5';
import createBox2d from './createBox2d';
import getCameraVideo from './getCameraVideo';


// async function inin(){
//     alert(33211)
// }
// inin();


const video = document.getElementById('video');
getCameraVideo().then(stream => {
    const url = window.URL.createObjectURL(stream);
    video.src = url;

    var arController = new ARController(video, 'Data/camera_para.dat');
    arController.onload = function() {
        arController.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_COLOR);
        arController.addEventListener('getMarker', function(ev) {
            console.log(ev);
            console.log(ev.target.videoWidth, ev.target.videoHeight, ev.data.marker.vertex);
            const vertex = ev.data.marker.vertex;
            createBox2d({
                width: ev.target.videoWidth,
                height: ev.target.videoHeight,
                vertex: ev.data.marker.vertex
            });
        });
        
        const play = ()=>{
            arController.process();
            requestAnimationFrame(()=>{
                play();
            });
        }
        play();
    };

});
document.addEventListener('click',ev=>{
    video.play();
})




// let img = document.getElementById('v');
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
    
//     const play = ()=>{
//         arController.process();
//         requestAnimationFrame(()=>{
//             play();
//         });
//     }
//     play();
// };