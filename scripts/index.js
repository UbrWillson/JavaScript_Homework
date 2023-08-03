
document.querySelectorAll(".galleryWrap img").forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src')
    };

    
});



btnClose = document.querySelector('.pop-up span');

btnClose.onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
}