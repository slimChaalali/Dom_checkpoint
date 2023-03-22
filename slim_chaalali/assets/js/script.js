// Get references to all  DOM elements
let del = Array.from(document.querySelectorAll("#delete"));
let product = Array.from(document.querySelectorAll("#product"));
let quantiteEl = Array.from(document.querySelectorAll('#quantite'));
let plusBtn = Array.from(document.querySelectorAll('#plus1'));
let minusBtn = Array.from(document.querySelectorAll('#minus1'));
let price = Array.from(document.querySelectorAll('#price'))
let total = document.getElementById('total');
let prixArticle = Array.from(document.querySelectorAll('#prix-article'));
let heart= Array.from(document.querySelectorAll('#heart'));

// Call the updateprice function to set initial prices and total
updateprice();

// Add event listeners to the delete buttons for removing items from the cart
for (let i in del) {
    del[i].addEventListener('click', function () {
        quantiteEl[i].textContent = "Quantity: 0";
        product[i].remove();
        updateprice();
    })
};

// Add event listeners to the plus and minus buttons for changing the quantity of items in the cart
for (let i in (plusBtn && minusBtn)) {
    let count = 1;
    plusBtn[i].addEventListener('click', function () {
        count++;
        quantiteEl[i].textContent = "Quantity: " + count;
        updateprice()
    });

    minusBtn[i].addEventListener('click', function () {
        if (count > 1) {
            count--;
            quantiteEl[i].textContent = "Quantity: " + count;
            updateprice()
        }
    });
}

// A function to take only numbers from a string
function stringConvert(str) {
    let numStr = "";
    for (var i = 0; i < str.length; i++)
        if (!isNaN(str.charAt(i))) {
            numStr += str.charAt(i);
        }
    let numConv = parseInt(numStr);
    return numConv;
}

// A function to update the prices and total when items are added or removed from the cart
function updateprice() {
    let tot = 0;
    for (let i in price) {
        let prix = prixArticle[i].textContent;
        let quan = quantiteEl[i].textContent;
        let prixValue = stringConvert(prix);
        let quanValue = stringConvert(quan);
        let quanPrix = ((prixValue * quanValue) / 100).toFixed(2);
        tot += parseFloat(quanPrix);
        price[i].textContent = quanPrix;
    }
    total.textContent = `Total: ${tot.toFixed(2)} TND`;
}

// Add event listeners to the heart icon
for(let i in heart){
    heart[i].addEventListener('click',function(){
        if (heart[i].style.color == 'rgb(182, 180, 180)'){
          heart[i].style.color = 'red';
          heart[i].style.fontSize ='35px'
        }
        else{
            heart[i].style.color = 'rgb(182, 180, 180)';
            heart[i].style.fontSize ='30px';
        }
    })
}