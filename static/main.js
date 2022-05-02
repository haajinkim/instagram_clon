const page_input = document.querySelector(".page_input");
const page_input_icon = document.querySelector(".page_input_icon");
page_input.addEventListener('focus', (event) => {
    page_input_icon.style.visibility = "hidden";
})
page_input.addEventListener('focusout', (e) => {
    page_input_icon.style.visibility = "visible";
})

const page_input2 = document.querySelector(".page_input2");
const page_icon2 = document.querySelector(".page_input_icon2");
page_input2.addEventListener('focus', (event) => {
    page_icon2.style.visibility = "hidden";
    console.log()
})
page_input2.addEventListener('focusout', (e) => {
    page_icon2.style.visibility = "visible";
})

const page_input3 = document.querySelector(".page_input3");
const page_icon3 = document.querySelector(".page_input_icon3");

page_input3.addEventListener('focus', (event) => {
    page_icon3.style.visibility = "hidden";
})
page_input3.addEventListener('focusout', (e) => {
    page_icon3.style.visibility = "visible";
})


//여기 까지 page foucs out
const head_input = document.querySelector(".head_input");
const search_icon = document.querySelector(".search_icon");
head_input.addEventListener('focus', (event) => {
    search_icon.style.visibility = "hidden";
})
head_input.addEventListener('focusout', (e) => {
    search_icon.style.visibility = "visible";
})
// 헤드 foucs 아웃

//모달 기능!
const open = document.querySelector(".modal_open");
const close = document.getElementById("modal_close");
const modal = document.querySelector(".modal_wrap");
open.onclick = () => {
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};
//모달 2
const open2 = document.querySelector(".modal_open2");
const close2 = document.getElementById("modal_close");
const modal2 = document.querySelector(".modal_wrap");
open2.onclick = () => {
    modal2.style.display = "flex";
};
close.onclick = () => {
    modal2.style.display = "none";
};
//모달 3
const open3 = document.querySelector(".modal_open3");
const close3 = document.getElementById("modal_close");
const modal3 = document.querySelector(".modal_wrap");
open3.onclick = () => {
    modal3.style.display = "flex";
};
close.onclick = () => {
    modal3.style.display = "none";
};
// 게시물 더보기 기능!!
const article = document.querySelector(".feed-article");
const article_button = document.querySelector(".feed-article-button");
article_button.onclick = () => {
    article.style.overflow = "visible";
    article.style.textOverflow = "''";
    article.style.whiteSpace = "normal";
    article.style.width = "640px";
    article_button.style.display = "none";
}
// 게시물 더보기 기능!! 2page
const article2 = document.querySelector(".feed-article2");
const article_button2 = document.querySelector(".feed-article-button2");
article_button2.onclick = () => {
    article2.style.overflow = "visible";
    article2.style.textOverflow = "''";
    article2.style.whiteSpace = "normal";
    article2.style.width = "640px";
    article_button2.style.display = "none";
}
// 게시물 더보기 기능!! 2page
const article3 = document.querySelector(".feed-article3");
const article_button3 = document.querySelector(".feed-article-button3");
article_button3.onclick = () => {
    article3.style.overflow = "visible";
    article3.style.textOverflow = "''";
    article3.style.whiteSpace = "normal";
    article3.style.width = "640px";
    article_button3.style.display = "none";
}

// 댓글 창 구현!
const input = document.querySelector('.page_input');
const itemAdd = document.querySelector('.input_button');
const items = document.querySelector('.items');

const onAdd = () => {
    const text = input.value;
    if (input.value === '') {
        input.focus();
        return;
    }

    const item = document.createElement('li');
    item.setAttribute('class', 'item');


    const itemText = document.createElement('span')
    itemText.setAttribute('class', 'itemText');
    item.innerText = text;
    // // item.innerHTML = text;
    itemText.innerHTML = '<i class="fa-regular head-regular fa-heart "></i>';


    // const itemDel = document.createElement('i')
    // itemDel.setAttribute('class', 'itemDel')
    // item.innerHTML = '<i class="fa-regular head-regular fa-heart "></i>';


    item.appendChild(itemText);
    // item.appendChild(itemDel);
    items.appendChild(item);
    input.value = '';
    input.focus();

};
    itemAdd.addEventListener('click', () => {
    onAdd();
});
    input.addEventListener('keypress', (event) =>{
    if (event.key ==='Enter') {
        onAdd();
    }
});

    // 댓글 창 2 구현!
const input2 = document.querySelector('.page_input2');
const itemAdd2 = document.querySelector('.input_button2');
const items2 = document.querySelector('.items2');

const onAdd2 = () => {
    const text2 = input2.value;
    if (input2.value === '') {
        input2.focus();
        return;
    }

    const item2 = document.createElement('li');
    item2.setAttribute('class', 'item2');


    const itemText2 = document.createElement('span')
    itemText2.setAttribute('class', 'itemText2');
    item2.innerText = text2;
    itemText2.innerHTML = '<i class="fa-regular head-regular fa-heart "></i>';


    item2.appendChild(itemText2);
    items2.appendChild(item2);
    input2.value = '';
    input2.focus();

};
    itemAdd2.addEventListener('click', () => {
    onAdd2();
});
    input2.addEventListener('keypress', (event) =>{
    if (event.key ==='Enter') {
        onAdd2();
    }
});

      // 댓글 창 3 구현!
const input3 = document.querySelector('.page_input3');
const itemAdd3 = document.querySelector('.input_button3');
const items3 = document.querySelector('.items3');

const onAdd3 = () => {
    const text3 = input3.value;
    if (input3.value === '') {
        input3.focus();
        return;
    }

    const item3 = document.createElement('li');
    item3.setAttribute('class', 'item3');


    const itemText3 = document.createElement('span')
    itemText3.setAttribute('class', 'itemText3');
    item3.innerText = text3;
    itemText3.innerHTML = '<i class="fa-regular head-regular fa-heart "></i>';


    item3.appendChild(itemText3);
    items3.appendChild(item3);
    input3.value = '';
    input3.focus();

};
    itemAdd3.addEventListener('click', () => {
    onAdd3();
});
    input3.addEventListener('keypress', (event) =>{
    if (event.key ==='Enter') {
        onAdd3();
    }
});
