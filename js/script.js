var btn = document.querySelector('.search');
var menu = document.querySelector('.search-div');


btn.addEventListener('click', function () {
    menu.style.display =
        menu.style.display === 'none' ? 'block' : 'none';
})

var bt = document.querySelector('.search2');
var men = document.querySelector('.search-div2');


bt.addEventListener('click', function () {
    men.style.display =
        men.style.display === 'none' ? 'block' : 'none';
})


var nav = document.querySelector('.list');
var dn = document.querySelector('.list1');


nav.addEventListener('click', function () {
    dn.style.display =
        dn.style.display === 'none' ? 'block' : 'none';
})

var list = document.querySelector('.a-lnk');
var down = document.querySelector('.down-list');


list.addEventListener('click', function () {
    down.style.display =
        down.style.display === 'none' ? 'block' : 'none';
})


var dslst = document.querySelector('.a-lnk2');
var dow = document.querySelector('.down-list2');


dslst.addEventListener('click', function () {
    dow.style.display =
        dow.style.display === 'none' ? 'block' : 'none';
})


var dsls = document.querySelector('.a-lnk3');
var dol = document.querySelector('.down-list3');


dsls.addEventListener('click', function () {
    dol.style.display =
        dol.style.display === 'none' ? 'block' : 'none';
})

var dsl = document.querySelector('.a-lnk4');
var dom = document.querySelector('.down-list4');


dsl.addEventListener('click', function () {
    dom.style.display =
        dom.style.display === 'none' ? 'block' : 'none';
})



var add = document.querySelector('.search').onclick = () =>
    document.querySelector('.search-div').style.display = 'block'

var add = document.querySelector('.cancl').onclick = () =>
    document.querySelector('.search-div').style.display = 'none'

var add = document.querySelector('.search2').onclick = () =>
    document.querySelector('.search-div2').style.display = 'block'

var add = document.querySelector('.cancl2').onclick = () =>
    document.querySelector('.search-div2').style.display = 'none'


const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var cnd = document.querySelector('.dn-cn');
var dropdown = document.querySelector('.dropdown-menu');


cnd.addEventListener('click', function () {
    dropdown.style.display =
    dropdown.style.display === 'none' ? 'block' : 'none';
    dropdown.style.margin-top === 'none' ? 'block' : 'none';
})

var lls = document.querySelector('.dn-cn22');
var dropdowns = document.querySelector('.dropdown-menu');


lls.addEventListener('click', function () {
    dropdowns.style.display =
    dropdowns.style.display === 'none' ? 'block' : 'none';
    dropdowns.style.margin-top === 'none' ? 'block' : 'none';
})

var dnc = document.querySelector('.dn-cn3');
var dropdo = document.querySelector('.dropdown-menu2');


dnc.addEventListener('click', function () {
    dropdo.style.display =
    dropdo.style.display === 'none' ? 'block' : 'none';
    dropdo.style.margin-top === 'none' ? 'block' : 'none';
})


var cn = document.querySelector('.dn-cn4');
var dropdow = document.querySelector('.dropdown-menu2');


cn.addEventListener('click', function () {
    dropdow.style.display =
    dropdow.style.display === 'none' ? 'block' : 'none';
    dropdow.style.margin-top === 'none' ? 'block' : 'none';
})

var dnl = document.querySelector('.dn-cn5');
var dropd = document.querySelector('.dropdown-menu3');


dnl.addEventListener('click', function () {
    dropd.style.display =
    dropd.style.display === 'none' ? 'block' : 'none';
    dropd.style.margin-top === 'none' ? 'block' : 'none';
})


var cnl = document.querySelector('.dn-cn6');
var drop = document.querySelector('.dropdown-menu3');


cnl.addEventListener('click', function () {
    drop.style.display =
    drop.style.display === 'none' ? 'block' : 'none';
    drop.style.margin-top === 'none' ? 'block' : 'none';
})

var dnlc = document.querySelector('.dn-cn7');
var dro = document.querySelector('.dropdown-menu4');


dnlc.addEventListener('click', function () {
    dro.style.display =
    dro.style.display === 'none' ? 'block' : 'none';
    dro.style.margin-top === 'none' ? 'block' : 'none';
})


var cnlc = document.querySelector('.dn-cn8');
var dropc = document.querySelector('.dropdown-menu4');


cnlc.addEventListener('click', function () {
    dropc.style.display =
    dropc.style.display === 'none' ? 'block' : 'none';
    dropc.style.margin-top === 'none' ? 'block' : 'none';
})