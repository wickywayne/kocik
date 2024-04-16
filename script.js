document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".przycisk").addEventListener("click", losujFotke);
});

function losujFotke() {
    const zdjeciaKotow = [
        { src: "kot1.jpg", podpis: "Kocik głupiutki" },
        { src: "kot2.jpg", podpis: "Kocik poważniutki" },
        { src: "kot3.jpg", podpis: "Kocik uszaty" },
        { src: "kot4.jpg", podpis: "Kocik kochany" },
        { src: "kot5.jpg", podpis: "Kocik jabłkowy" },
        { src: "kot6.jpg", podpis: "Kocik zdezorientowany" },
        { src: "kot7.jpg", podpis: "Kocik benc" },
        { src: "kot8.jpg", podpis: "Kocik arbuzowy" },
        { src: "kot9.jpg", podpis: "Kocik nerd" },
        { src: "kot10.jpg", podpis: "Kocik malutki" }
    ];
    
    const losowyIndeks = Math.floor(Math.random() * zdjeciaKotow.length);  
    const imgElement = document.getElementById("imgKocik");
    const podpisElement = document.querySelector(".podpis");

    imgElement.src = zdjeciaKotow[losowyIndeks].src;
    podpisElement.textContent = zdjeciaKotow[losowyIndeks].podpis;
}