const btn = document.querySelector("button");

btn.addEventListener(`click`,(event) => {
    const isYes = confirm(`天気は晴れていますか？`);
    document.querySelector(`.log`).innerHTML
});;