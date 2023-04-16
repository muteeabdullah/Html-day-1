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


var row = document.querySelector(".row");
		var isDragging = false;
		var startPosition = 0;
		var currentTranslate = 0;
		var prevTranslate = 0;

		row.addEventListener("mousedown", dragStart);
		row.addEventListener("touchstart", dragStart);
		row.addEventListener("mouseup", dragEnd);
		row.addEventListener("touchend", dragEnd);
		row.addEventListener("mousemove", drag);
		row.addEventListener("touchmove", drag);

		function dragStart(event) {
			if (event.type === "touchstart") {
				startPosition = event.touches[0].clientX;
			} else {
				startPosition = event.clientX;
			}
			isDragging = true;
		}

		function dragEnd(event) {
			if (event.type === "touchend") {
				currentTranslate = prevTranslate + event.changedTouches[0].clientX - startPosition;
			} else {
				currentTranslate = prevTranslate + event.clientX - startPosition;
			}
			isDragging = false;
			prevTranslate = currentTranslate;
		}

		function drag(event) {
			if (isDragging) {
				event.preventDefault();
				if (event.type === "touchmove") {
					currentTranslate = prevTranslate + event.touches[0].clientX - startPosition;
				} else {
					currentTranslate = prevTranslate + event.clientX - startPosition;
				}
				row.style.transform = "translateX(" + currentTranslate + "px)";
			}
		}