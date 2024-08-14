const qeryString  = window.location.search
console.log(qeryString)

const urlParams = new URLSearchParams(qeryString)

const id = urlParams.get('id')
const brand = urlParams.get('brand')


if(brand === "iphone"){
    document.getElementById('tenSP').innerHTML = "IPhone " + id
}
else if(brand === "samsung"){
    document.getElementById('tenSP').innerHTML = "Samsung Galaxy " + id
}

else
{
    alert('không tìm thấy thương hiệu')

}
