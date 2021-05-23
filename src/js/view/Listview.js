import { elements } from './base';

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
        
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const renderClearBtn = () =>{
    var btn= document.querySelector('.shopping__item__btn')
    if (elements.shopping.contains(btn)){
       
        
    }
    else{
        const mark=`<li class="shopping__item__btn">
    <button class="list_btn_delete-small">Clear Shopping List</button>
    </li>`

    elements.shopping.insertAdjacentHTML('beforeend', mark);
    }
};
export const removeClearBtn = () =>{
    var btn= document.querySelector('.shopping__item__btn')
    if (elements.shopping.contains(btn)){
        btn.parentElement.removeChild(btn);
    }
}
export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};

export const deleteAllItem = () =>{
    var item= Array.from(document.querySelectorAll('.shopping__item'))
    item.forEach(item => {
        item.parentElement.removeChild(item);
    })
}