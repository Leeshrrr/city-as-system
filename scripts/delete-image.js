var deleteImage = document.querySelector(".delete-image");
var imagePile = document.querySelector(".image-pile")
if (deleteImage.style.opacity == 0) {
    console.log("suceed!");
    imagePile.innerHTML = "";
}

if (deleteImage.style.opacity == 1) {
    console.log("back!");
    imagePile.innerHTML = '<img id="f01" src="images/f01.png" alt=""><img id="f03" src="images/f03.jpeg" alt=""><img id="f04" src="images/f04.jpeg" alt=""><img id="f05" src="images/f05.jpeg" alt=""><img id="n02" src="images/n02.jpeg" alt=""><img id="n03" src="images/n03.jpeg" alt=""><img id="n04" src="images/n04.jpeg" alt=""><img id="n05" src="images/n05.jpeg" alt=""><img id="s01" src="images/s01.png" alt=""><img id="s02" src="images/s02.jpeg" alt=""><img id="s04" src="images/s04.png" alt=""><img id="s05" src="images/s05.jpeg" alt="">';
}