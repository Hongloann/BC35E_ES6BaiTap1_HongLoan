function Sum(...restParam) {
    let sum = 0;
    let total = 0;
    for (let value of restParam) {
        sum += value

        total++

    }

    return sum / total;
}
console.log(Sum(Number([1, 2, 3])));



document.querySelector('#btnKhoi1').onclick = () => {


    let toan = document.querySelector('#inpToan').value * 1;
    let ly = document.querySelector('#inpLy').value * 1;
    let hoa = document.querySelector('#inpHoa').value * 1;
    let result1 = Sum(toan, ly, hoa);
    document.querySelector('#tbKhoi1').innerHTML = result1;
}
document.querySelector('#btnKhoi2').onclick = () => {
    let van = document.querySelector('#inpVan').value * 1;
    let su = document.querySelector('#inpSu').value * 1;
    let dia = document.querySelector('#inpDia').value * 1;
    let anh = document.querySelector('#inpEnglish').value * 1;
    let result2 = Sum(van, su, dia, anh);
    document.querySelector('#tbKhoi2').innerHTML = result2;
}