document.getElementById("prev").onclick = function () {
    // 32 is added to itemWidth to add margin to total item width
    const itemWidth = document.getElementById("new-item").offsetWidth + 32;
    document.querySelector(".new-product").scrollLeft -= itemWidth;
};

document.getElementById("next").onclick = function () {
    const itemWidth = document.getElementById("new-item").offsetWidth + 32;
    document.querySelector(".new-product").scrollLeft += itemWidth;
};


