
console.log('contoh1=member')

const isBaju1 = 10000
const isJumlah1 = 5
const isOngkir1 = 15000
const isMember1 = true;

function hitungCheckout1() {
    const regexAngkaValid = /^\d+$/;
if (!regexAngkaValid.test(isBaju1)  || isBaju1 < 0 || isBaju1 % 1 !== 0) 
{
    return ("Angka tidak valid, silahkan perbaiki terlebih dulu")
}

if (isNaN(isJumlah1) || isJumlah1 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

    if (isMember1 === true) {
        diskon = 10;
    } else {
        diskon = 0;
    }

let totalBayar = 0;
    totalSementara = isBaju1 * isJumlah1;
    totalDiskon = totalSementara * (diskon/100);
    totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir1
    } else {
        totalBayar
    }
    return totalBayar;
}

console.log(hitungCheckout1());


console.log('contoh2=non-member')

const isBaju2 = 10000
const isJumlah2= 5
const isOngkir2 = 15000
const isMember2 = false;

function hitungCheckout2() {
    const regexAngkaValid = /^\d+$/;
if (!regexAngkaValid.test(isBaju2)  || isBaju2 < 0 || isBaju2 % 1 !== 0) 
{
    return ("Angka tidak valid, silahkan perbaiki terlebih dulu")
}

if (isNaN(isJumlah2) || isJumlah2 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

    if (isMember2 === true) {
        diskon = 10;
    } else {
        diskon = 0;
    }

let totalBayar = 0;
    totalSementara = isBaju2 * isJumlah2;
    totalDiskon = totalSementara * (diskon/100);
    totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir2
    } else {
        totalBayar
    }
    return totalBayar;
}

console.log(hitungCheckout2());

console.log('contoh3=non-member 250k')

const isBaju3 = 50000
const isJumlah3= 5
const isOngkir3 = 15000
const isMember3 = false;

function hitungCheckout3() {
    const regexAngkaValid = /^\d+$/;
if (!regexAngkaValid.test(isBaju3)  || isBaju3 < 0 || isBaju3 % 1 !== 0) 
{
    return ("Angka tidak valid, silahkan perbaiki terlebih dulu")
}

if (isNaN(isJumlah3) || isJumlah3 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

    if (isMember3 === true) {
        diskon = 10;
    } else {
        diskon = 0;
    }

let totalBayar = 0;
    totalSementara = isBaju3 * isJumlah3;
    totalDiskon = totalSementara * (diskon/100);
    totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir3
    } else {
        totalBayar
    }
    return totalBayar;
}

console.log(hitungCheckout3());

console.log('contoh4=non-member 200k')

const isBaju4 = 40000
const isJumlah4= 5
const isOngkir4 = 15000
const isMember4 = false;

function hitungCheckout4() {
    const regexAngkaValid = /^\d+$/;
if (!regexAngkaValid.test(isBaju4)  || isBaju4 < 0 || isBaju4 % 1 !== 0) 
{
    return ("Angka tidak valid, silahkan perbaiki terlebih dulu")
}

if (isNaN(isJumlah4) || isJumlah4 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

    if (isMember4 === true) {
        diskon = 10;
    } else {
        diskon = 0;
    }

let totalBayar = 0;
    totalSementara = isBaju4 * isJumlah4;
    totalDiskon = totalSementara * (diskon/100);
    totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir4
    } else {
        totalBayar
    }
    return totalBayar;
}

console.log(hitungCheckout4());

console.log('contoh5=non-member 300k')

const isBaju5 = 50000
const isJumlah5= 6
const isOngkir5 = 15000
const isMember5 = false;

function hitungCheckout5() {
    const regexAngkaValid = /^\d+$/;
if (!regexAngkaValid.test(isBaju5)  || isBaju5 < 0 || isBaju5 % 1 !== 0) 
{
    return ("Angka tidak valid, silahkan perbaiki terlebih dulu")
}

if (isNaN(isJumlah5) || isJumlah5 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

    if (isMember5 === true) {
        diskon = 10;
    } else {
        diskon = 0;
    }

let totalBayar = 0;
    totalSementara = isBaju5 * isJumlah5;
    totalDiskon = totalSementara * (diskon/100);
    totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir5
    } else {
        totalBayar
    }
    return totalBayar;
}

console.log(hitungCheckout5());

console.log('contoh6=non-member jumlah 0')

const isBaju6 = 10000
const isJumlah6= 0
const isOngkir6 = 15000
const isMember6 = false;

function hitungCheckout6() {
    const regexAngkaValid = /^\d+$/;
if (!regexAngkaValid.test(isBaju6)  || isBaju6 < 0 || isBaju6 % 1 !== 0) 
{
    return ("Angka tidak valid, silahkan perbaiki terlebih dulu")
}

if (isNaN(isJumlah6) || isJumlah6 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

    if (isMember6 === true) {
        diskon = 10;
    } else {
        diskon = 0;
    }

let totalBayar = 0;
    totalSementara = isBaju6 * isJumlah6;
    totalDiskon = totalSementara * (diskon/100);
    totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir6
    } else {
        totalBayar
    }
    return totalBayar;
}

console.log(hitungCheckout6());

console.log('contoh7= harga baju berupa pecahan')

const isBaju7 = 1.5
const isJumlah7= 5
const isOngkir7 = 15000
const isMember7 = false;

function hitungCheckout7() {
    const regexAngkaValid = /^\d+$/;
if (!regexAngkaValid.test(isBaju7)  || isBaju7 < 0 || isBaju7 % 1 !== 0) 
{
    return ("Angka tidak valid, silahkan perbaiki terlebih dulu")
}

if (isNaN(isJumlah7) || isJumlah7 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

    if (isMember7 === true) {
        diskon = 10;
    } else {
        diskon = 0;
    }

let totalBayar = 0;
    totalSementara = isBaju7 * isJumlah7;
    totalDiskon = totalSementara * (diskon/100);
    totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir7
    } else {
        totalBayar
    }
    return totalBayar;
}

console.log(hitungCheckout7());

console.log('contoh8= harga baju berupa huruf')

const isBaju8 = "100000" 
const isJumlah8= 5
const isOngkir8 = 15000
const isMember8 = false;

function hitungCheckout8() {

if (typeof isBaju8 !== 'number' || isNaN(isBaju8) || isBaju8 < 0 || isBaju8 % 1 !== 0) {
        return "Angka tidak valid atau mengandung huruf, silahkan perbaiki terlebih dulu";
    }

if (isNaN(isJumlah8) || isJumlah8 < 1 )
{
    return ("jumlah tidak valid, silahkan perbaiki terlebih dulu")
}

const diskon = isMember8 ? 10 : 0;

    totalSementara = isBaju8 * isJumlah8;
    totalDiskon = totalSementara * (diskon/100);
let totalBayar = totalSementara - totalDiskon;
    
    if (totalBayar < 250000) {
        totalBayar += isOngkir8
    } 
    return totalBayar;
}

console.log(hitungCheckout8());


