// DB Giày
const shoesProduct = [
    {
        image:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/09/giay-the-thao-nike-air-jordan-1-high-og-unc-university-blue-555088-134-575441-134-mau-xanh-trang-size-41-631998251b927-08092022142213.jpg',
        name: 'Giày thể thao',
        category:'Giày Sneaker',
        color:'Ocean',
        price: '3 000 000 VND',
    },
    {
        image:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/03/giay-the-thao-nike-revolution-5-bq3204-400-mau-xanh-navy-size-40-623806bd0e4fb-21032022120149.jpg',
        name: 'Nike Revolution',
        category:'Giày Sneaker',
        color:'Blue',
        price: '1.750.000 VND', 
    },
    {
        image:'https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/11/giay-the-thao-nike-air-zoom-pegasus-38-cw7356-002-mau-den-size-40-636339de33f91-03112022104742.jpg',
        name: 'Nike Revolution ',
        category:'Giày Sneaker',
        color:'Black',
        price: '1.759.000 VND', 
    },
    {
        image:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/12/giay-the-thao-nike-air-jordan-1-retro-high-og-white-stealth-555088-037-mau-trang-xam-size-40-5-63996ab4c9bb9-14122022131828.jpg',
        name: 'Nike Air Jordan',
        category:'Giày Sneaker',
        color:' ',
        price: '10.500.000 VND',
    },
    {
        image:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/04/giay-tennis-nike-court-zoom-gp-turbo-ck7513-103-mau-trang-6250f0f4b34c0-09042022093532.jpg',
        name: 'Nike Epic React',
        category:'Giày Sneaker',
        color:'White - Flyknit',
        price: '2.250.000 VND', 
    },
    {
        image:'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/CW4555-109-1_540x.jpg?v=1663757371',
        name: 'Nike Air Force 1 ',
        category:'Giày Sneaker',
        color:'Shadow Mystic Navy',
        price: '4.250.000 VND', 
    },
    {
        image:'https://product.hstatic.net/200000078815/product/fz2498_03_f4d97ca7d929448292d27fc6852c023d_grande.jpg',
        name: 'Nike Air Max 97',
        category:'Giày Sneaker',
        color:' Purple',
        price: '6.890.000 VND', 
    },
    {
        image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShqIrh7wD-dHmFdl1ORKSWrGwFyeKcSzflzVsFmih9JXCzIk55O5z6oLgFM1V_hMdv69g2eB-zZucVRjlx0L8c40AOjfBsI9lRZ6SucJuF7qml9YUZH20h&usqp=CAE',
        name: 'Nike Air Max 95 Essential Comet',
        category:'Giày Sneaker',
        color:'',
        price: '6.090.000 VND',
    }
   
];



var igg = document.getElementById("product-list")
igg.innerHTML = '';

for (let i = 0; i < shoesProduct.length; i++) {
    igg.innerHTML +=
  
    '<div class="list">' +
    '<div class="img-product">'+
        '<img src="' + shoesProduct[i].image +  '" alt="">'+
    '</div>' + 
    '<hr>' +
    '<div class="product-info">'+
        '<ul class="product-title">'+
            '<li><span style="font-weight: bolder;">Category</span></li>'+
            '<li><span style="font-weight: bolder;">Name</span></li>'+
            '<li><span style="font-weight: bolder;">Color</span></li>'+
            '<li><span style="font-weight: bolder;">Price</span></li>'+
        '</ul>'+
        '<ul class="price-info">'+
            '<li>'+ shoesProduct[i].category +'</li>'+
            '<li>' + shoesProduct[i].name +'</li>'+
            '<li>' + shoesProduct[i].color +'</li>'+
            '<li>'+ shoesProduct[i].price +'</li>'+
        '</ul>'+
    '</div>'+
    '<hr>'+
    '<div class="icon-cart">'+
        '<button onclick="buyItem()" class="button-17"><img style="width:50px; height:50px" src="https://pngimg.com/uploads/plus/plus_PNG106.png">Thêm vào giỏ hàng</a></button>'+
    '</div>'+
    '</div>'
}

// DB áo thun
const shirtProduct = [
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/264790/t-shirt-tap-luyen-nam-nike-ct2923-den-1.jpg',
        name: 'Áo Thun Nam',
        category:'Áo Thun Nam',
        color:' ',
        price: '750.000 VND', 
    },
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/280828/nike-ar5004-010-1.jpg',
        name: 'Áo Thun Nam Có Cổ',
        category:'Áo Thun Nam',
        color:' ',
        price: '500.000 VND', 
    },
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/280811/nike-cw6951-013-1.jpg',
        name: 'Áo Thun Nam Nike',
        category:'Áo Thun Nam',
        color:' ',
        price: '1.000.000 VND', 
    },
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/295336/ao-thun-lifestyle-nam-nike-dr7806-100-thumb-600x600.jpg',
        name: 'Áo Thun Nam',
        category:'Áo Thun Nam',
        color:' ádasdasd',
        price: '1.500.00 VND', 
    },
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/264782/ao-thun-chay-bo-nam-nike-cj5689-040622-112511-600x600.jpg',
        name: 'Áo Thun Nam',
        category:'Áo Thun Nam',
        color:' ',
        price: '', 
    },
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/295339/ao-thun-lifestyle-nam-nike-dr7810-010-271022-101601-600x600.jpg',
        name: 'Áo Thun Nam',
        category:'Áo Thun Nam',
        color:' ',
        price: '1.000.000 VND', 
    },
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/295338/ao-thun-lifestyle-nam-nike-dr7808-435-thumb-600x600.jpg',
        name: 'Áo Thun Nam',
        category:'Áo Thun Nam',
        color:' ',
        price: '1.000.000 VND', 
    },
    {
        image:'https://cdn.tgdd.vn/Products/Images/10100/295340/ao-thun-lifestyle-nam-nike-dr7810-100-271022-101100-600x600.jpg',
        name: 'Áo Thun Nam',
        category:'Áo Thun Nam',
        color:' ',
        price: '500.000 VND', 
    },
]




let shirt = document.getElementById("shirt-list")
shirt.innerHTML = '';

for (let i = 0; i < shirtProduct.length; i++) {
    shirt.innerHTML +=
  
    '<div class="list">' +
    '<div class="img-product">'+
        '<img src="' + shirtProduct[i].image +  '" alt="">'+
    '</div>' + 
    '<hr>' +
    '<div class="product-info">'+
        '<ul class="product-title">'+
            '<li><span style="font-weight: bolder;">Category</span></li>'+
            '<li><span style="font-weight: bolder;">Name</span></li>'+
            '<li><span style="font-weight: bolder;">Color</span></li>'+
            '<li><span style="font-weight: bolder;">Price</span></li>'+
        '</ul>'+
        '<ul class="price-info">'+
            '<li>'+ shirtProduct[i].category +'</li>'+
            '<li>' + shirtProduct[i].name +'</li>'+
            '<li>' + shirtProduct[i].color +'</li>'+
            '<li>'+ shirtProduct[i].price +'</li>'+
        '</ul>'+
    '</div>'+
    '<hr>'+
    '<div class="icon-cart">'+
        '<button onclick="buyItem()" class="button-17"><img style="width:50px; height:50px" src="https://pngimg.com/uploads/plus/plus_PNG106.png">Thêm vào giỏ hàng</a></button>'+
    '</div>'+
    '</div>'
}

// MỞ GIỎ HÀNG KIỂM TRA
var check = document.getElementById("payment");
function checkCart(){
    check.style.display = "block";
}
function buying(){
    check.style.display = "none";
}
function closePayment(){
    check.style.display = "none";
}
function paying(){
    alert('Cảm ơn đã cúng tiền cho chúng tôi');
}

window.onclick = function (event) {
    if (event.target == check) {
      check.style.display = "none";
    }
}

//MỞ MAP SITE STORE
{
    var mapsite = document.getElementById("map-site");
    function openMap(){
        mapsite.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target == mapsite) {
        mapsite.style.display = "none";
        }}
}

var itemPayment = [];







