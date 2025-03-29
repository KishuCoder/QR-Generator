let imgbox = document.getElementById("imgbox");
let textimg = document.getElementById("textimg");
let qrimage = document.getElementById("qrimage");

function generteQR() {
    if (textimg.value.length > 0) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + textimg.value;
        imgbox.classList.add("show-img");
    }
    else {
        textimg.classList.add("error");
        setTimeout(() => { textimg.classList.remove("error"); }, 1000);
    }
}