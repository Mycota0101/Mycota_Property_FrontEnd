//filter harga
function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

document.getElementById('filterBtn').addEventListener('click', function() {
    let maxPrice = parseFloat(document.getElementById('priceFilter').value);
    let villas = document.querySelectorAll('.villa');

    villas.forEach(function(villa) {
        let villaPrice = parseFloat(villa.getAttribute('data-price'));

        if (villaPrice <= maxPrice || isNaN(maxPrice)) {
            villa.style.display = 'block'; 
        } else {
            villa.style.display = 'none'; 
        }
    });
});

const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

//tombol detail pop up
document.querySelectorAll('.detail-btn').forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

