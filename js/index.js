// Fixed button 

window.onscroll = () => {
    if (window.scrollY > 250) {
        document.querySelector('.fixed').style.display = "flex";
    } else {
        document.querySelector('.fixed').style.display = "none";
    }
}
document.querySelector('.fixed').onclick = () => window.scrollTo(0, 0);


// read more button 
const readMoreBtn = document.querySelector('.read-more-btn');
const showmoreText = document.querySelector('.readmore');
readMoreBtn.addEventListener('click', (e) => {
    showmoreText.classList.toggle('show-more');
    if (readMoreBtn.innerText === 'Read More') {
        readMoreBtn.innerText = 'Read Less';
    } else {
        readMoreBtn.innerText = 'Read More';
    }
})