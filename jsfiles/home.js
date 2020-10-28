
upInteractive = false;

function autoToggle() {
    $('.arrow').toggleClass('auto');
}

$('.arrow').hover(function () {
    upInteractive = true;
    $('.arrow').removeClass('auto');
});

setInterval(function () {

    console.log(upInteractive);

    if (upInteractive === false) {
        autoToggle();
    }

}, 2000);

//Dark MODE

const colorSwitch = document.getElementById('m-color');

colorSwitch.addEventListener('click',checkMode);

function checkMode(){
    
    if(colorSwitch.checked){
        darkModeOn();
    }
    else{
        darkModeOff();
    }
}

function darkModeOn(){
    document.body.classList.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

//Dark MOde
