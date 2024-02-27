document.addEventListener('DOMContentLoaded', function () {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carDom = document.querySelector('.car');
    let listItemDom = document.querySelector('.car .list');
    let thumbnailDom = document.querySelector('.car .thumbnail');

    nextDom.onclick = function () {
        showSlider('next');
    };

    let timeRunning = 3000;
    let timeAutoNext = 10000;
    let runTimeOut;
    let runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
        let itemSlider = document.querySelectorAll('.car .list .item');
        let itemThumbnail = document.querySelectorAll('.car .thumbnail .item');

        if (type === 'next') {
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carDom.classList.add('next');
        } else {
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carDom.classList.remove('next');
        }, timeRunning);

        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }
});
