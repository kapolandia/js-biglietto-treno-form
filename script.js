const buyBtn  = document.querySelector("#buy-btn");

buyBtn.addEventListener("click", function(){
    const myKm = document.getElementById("km").value;
    const myAge = document.getElementById("age").value;
    const price = document.getElementById("price");
    if(myAge < 18){
        price.innerHTML = (myKm *  0.21 - (myKm *  0.21 * 0.2)).toFixed(2) + ' €';
    } else if(myAge > 65){
        price.innerHTML = (myKm *  0.21 - (myKm *  0.21 * 0.4)).toFixed(2) + ' €';
    } else {
        price.innerHTML = (myKm *  0.21).toFixed(2) + ' €';
    }
})