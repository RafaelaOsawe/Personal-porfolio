let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains_behind');
        let mountains_front = document.getElementById('mountains_front');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            mountains_front.style.top = value * 0 + 'px';
        })

var i = 0;
var images = [];
var time = 4000;

images [0] = "images\desk PC.jpg";
images [1] = 'images\gaming-newbies-stadia-videoSixteenByNineJumbo1600.jpg';
images [2] = 'images\maxresdefault.jpg';
images [3] = 'images\desk PC2.jpg';

function changeImg(){
    document.carousel.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;