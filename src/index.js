import {
    ARCameraParam,
    ARController
} from 'jsartoolkit5';
var param = new ARCameraParam();
param.onload = function() {
    console.log(321);
    var img = document.getElementById('test-img');
    var ar = new ARController(img.width, img.height, param);
    // Set pattern detection mode to detect both pattern markers and barcode markers.
    // This is more error-prone than detecting only pattern markers (default) or only barcode markers.
    //
    // For barcode markers, use artoolkit.AR_MATRIX_CODE_DETECTION
    // For pattern markers, use artoolkit.AR_TEMPLATE_MATCHING_COLOR
    //
    ar.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX);

    ar.addEventListener('markerNum', function(ev) {
        console.log('got markers', markerNum);
    });

    ar.addEventListener('getMarker', function(ev) {
        console.log('found marker?', ev);
    });

    ar.loadMarker('Data/patt.hiro', function(marker) {
        console.log('loaded marker', marker);
        ar.process(img);
    });
}