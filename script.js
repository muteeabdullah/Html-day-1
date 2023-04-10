var button = document.getElementById('btn');
var para = document.getElementById('main1');
var j = 0;
para.innerHTML = j;
button.addEventListener('click', function () {
    j = j + 1;

    para.innerHTML = j;

});
var input = document.getElementById('input');
var image = document.getElementById('img');
var image1 = document.getElementById('img1');


function displayImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
        image.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function displayImage1(event) {
    var reader = new FileReader();
    reader.onload = function () {
        image1.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[1]);
}

var comment = document.getElementById('comment');
var commentBox = document.getElementById('showComment');
function showComment() {
    var commentValue = comment.value;
    commentBox.innerHTML = commentValue;
}