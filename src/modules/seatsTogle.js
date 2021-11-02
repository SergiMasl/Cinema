const seatsTogle = () => {

    const schemeSvg = document.querySelector('.scheme-svg'),
    totalPriceTag = document.querySelector('.price-total'),
    menuBtn = document.querySelector('.m-menu'),
    menuList = document.querySelector('.menu');

    let cost = 15;
    let totalPrice = 0;


    schemeSvg.addEventListener('click', (e) => {
        const elem = e.target.classList;

        if (!elem.contains('booked') && !e.target.classList.contains('light')){
            elem.toggle('active')
        }

        const seatsCount = schemeSvg.querySelectorAll('.active').length;
        totalPrice = seatsCount * cost;
        totalPriceTag.textContent = totalPrice;
    })

    menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('is-open');
    })
}

export default seatsTogle;

