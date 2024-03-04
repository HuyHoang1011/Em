var currentLine = 1;

function hienThiDongTiepTheo() {
    var nextLine = document.querySelector('.dong' + currentLine);
    if (nextLine) {
        nextLine.style.display = 'block';
        nextLine.classList.add('fadeIn');
        currentLine++;
    } else {
        var btnContainer = document.querySelector('.btn-container');
        var btnhear = document.querySelector('.btnhear');
        var btnNor = document.querySelector('.btn');

        if (btnContainer) {
            btnNor.style.display = 'none';
            btnhear.style.display='block';
        }
    }
}