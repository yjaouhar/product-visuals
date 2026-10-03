const WHATSAPP_LINK = SITE_DATA.whatsapp_link;



function requestOffer(offerName, price, details) {
    let message = ''
    if (offerName && price && details) {
        message =
            `Salam, bghit nstafed men l'offre:
    
    Offre: ${offerName}
    Prix: ${price} DH
    Details: ${details}
    `;
    }

    const whatsappUrl = WHATSAPP_LINK + `?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
}
document.getElementById("start-price").textContent = SITE_DATA.start_price
document.getElementById("growth-price").textContent = SITE_DATA.growth_price

const faqItems = document.querySelectorAll("details");

faqItems.forEach((item) => {

    item.addEventListener("toggle", () => {

        if (!item.open) return;

        faqItems.forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.removeAttribute("open");
            }

        });

    });

});

document.querySelectorAll('.ba-slider').forEach(slider => {
    let dragging = false;

    const move = e => {
        const rect = slider.getBoundingClientRect();
        let pos = ((e.clientX - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        slider.style.setProperty('--pos', pos + '%');
    };

    slider.addEventListener('pointerdown', e => {
        dragging = true;
        slider.setPointerCapture(e.pointerId);
        move(e);
    });
    slider.addEventListener('pointermove', e => { if (dragging) move(e); });
    slider.addEventListener('pointerup', () => dragging = false);
    slider.addEventListener('pointercancel', () => dragging = false);
});