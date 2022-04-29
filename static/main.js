const page_input = document.querySelector(".page_input");
const page_input_icon = document.querySelector(".page_input_icon");
page_input.addEventListener('focus', (event) => {
    // search_input_box.style.left = "-13.3%";
    page_input_icon.style.visibility = "hidden";

})
page_input.addEventListener('focusout', (e) => {
    // search_input_box.style.left = "13.3%";
    page_input_icon.style.visibility = "visible";
})

const head_input = document.querySelector(".head_input");
const search_icon = document.querySelector(".search_icon");
head_input.addEventListener('focus', (event) => {
    // search_input_box.style.left = "-13.3%";
    search_icon.style.visibility = "hidden";

})
head_input.addEventListener('focusout', (e) => {
    // search_input_box.style.left = "13.3%";
    search_icon.style.visibility = "visible";
})