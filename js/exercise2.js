const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onTooltipclick);
    tooltip.addEventListener("mouseleave", onTooltipclick);
});

function onTooltipclick (evt) {
    evt.currentTarget.classList.toggle("tooltip-animated");
}