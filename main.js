var obj;
const sts = document.getElementById("sts");

function setup() {
    canvas = createCanvas(550, 450);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(550, 450);
    video.hide();
}

function draw(){
    image(video, 0, 0, 550, 450);
}

function f0cus() {
    if (obj_name.value < 1) {
        lbl_obj.style.cursor = "default";
        lbl_obj.style.animation = "focus 0.1s";
        setTimeout(function () {
            lbl_obj.style.marginTop = "0%";
            lbl_obj.style.borderBottomLeftRadius = "0px";
            lbl_obj.style.animation = "";
        }, 100);
    }
}

function b1ur() {
    if (obj_name.value < 1) {
        lbl_obj.style.cursor = "text"
        lbl_obj.style.animation = "blur 0.1s";
        setTimeout(function () {
            lbl_obj.style.marginTop = "1.55%";
            lbl_obj.style.borderBottomLeftRadius = "5px";
            lbl_obj.style.animation = "";
        }, 100);
    }
}

function start() {
    if (obj_name.value != 0){
        objectDetector = ml5.objectDetector("cocossd", modelLoaded);
        sts.innerHTML = "Status: Detecting Objects";
        obj = obj_name.value;
    }
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}