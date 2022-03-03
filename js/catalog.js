// project catalog
const btns = document.querySelectorAll('.project-btn');
const pItems = document.querySelectorAll('.portfolio-item');

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter)
        pItems.forEach((product) => {
            if (filter == "all") {
                product.style.display = "block";

            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block";

                } else {
                    product.style.display = "none";
                }
            }
        })

    })
}
btns.forEach(button => {
    button.addEventListener('click', function() {
        btns.forEach(btns => btns.classList.remove('active'));
        this.classList.add('active');
    })

})