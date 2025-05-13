const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("click", onTooltipclick);
});

function onTooltipclick (evt) {
    evt.currentTarget.classList.toggle("tooltip-animated");
}