var modal_page = document.getElementById('modal-page');

var modal_btn = document.getElementById('modal-btn');

var close_btn = document.getElementsByClassName('closebtn')[0];

modal_btn.addEventListener('click', openModal);

close_btn.addEventListener('click', closeModal);

window.addEventListener('click', clickoutside);

function openModal(){
    modal_page.style.display = 'block';
}

function closeModal(){
    modal_page.style.display = 'none';
}

function clickoutside(e){
    if(e.target == modal_page){
        modal_page.style.display = 'none';
    }
}


$(document).ready(() => {
    var menu = [
        {
            id: 1,
            name: 'Genmaicha Tea',
            price: 250,
            img: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 2,
            name: 'Espresso Coffee',
            price: 250,
            img: 'https://images.unsplash.com/photo-1587519963283-b12c49ec2a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 3,
            name: 'Hojicha Tea',
            price: 250,
            img: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 4,
            name: 'Macchiato latte',
            price: 250,
            img: 'https://images.unsplash.com/photo-1551887558-ba05e2c08419?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1108&q=80'
        }
    ];

    console.log(menu);

    var html = '';
    for (let i = 0; i < menu.length; i++) {
        html += ` <div onclick="selectproduct(${menu[i].id}, '${menu[i].name}', ${menu[i].price})" class="product-card">
        <img class="product-img" src="${menu[i].img}" alt="">
        <p class="text-product" style="font-size: 1.5vw;"> &nbsp;${menu[i].name}</p>
        <p class="text-product" style="font-size: 1vw;"> &nbsp; ${menu[i].price} THB</p><div class="add-itembt">+</div>
        <div class="adddelbt">   
            <div class="bt-left">
                <p id="del-item" class="delbt">-</p>
            </div>
            <div class="bt-right">
                <p id="add-item" class="addbt">+</p>
            </div>
        </div>
    </div>`;
    }
    $("#product-boxs").html(html);
});

var list = [];

function selectproduct(mid, mname, mprice) {
    console.log(mid, mname, mprice);
    var pass = true;

    for (let i = 0; i < list.length; i++) {
        if (list[i].id == mid) {
            list[i].count++;
            pass = false;
        }
    }

    if (pass) {
        list.push({
            id: mid,
            name: mname,
            price: mprice,
            count: 1
        });
    }
    console.log(list);

    var html = '';
    var sumprice = 0;
    for (let i = 0; i < list.length; i++) {
        sumprice += list[i].price * list[i].count;
        html += `<div class="list-name-price">
                    <p>${list[i].name} x${list[i].count}</p>
                    <p>${numberWithCommas(list[i].price * list[i].count)} THB</p>
                </div>`;
    }

    var discount = 0;
    if (sumprice > 1000) {
        discount = sumprice * 0.1;
        html += `<div class="list-name-price">
                <div style="color: #F01515">Discount:</div>
                 10% When price > 1K</div>`;
    }

    html += `<div class="list-name-price">
                <p style="color: #D85604">Total Price</p>
                <p>合計金額 :</p>
                <p>${numberWithCommas(sumprice - discount)} THB</p>
            </div>`;
    $("#list-boxs").html(html);
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function clearlist(){
    list = [];
    $("#list-boxs").html('<p class="list-name-price">Please select Your Baverage</p>')
}

