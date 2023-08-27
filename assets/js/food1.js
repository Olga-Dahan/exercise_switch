function countPrice() {
    var typeFood = document.getElementById("the-food").value;
    var data = document.getElementById("myDiv");
    var price = 0;


    switch (typeFood) {
        case "Vegan":
            price = 1000;
            break;
        case "Vegetarian":
            price = 10;
            break;
        case "Meat":
            price = 150;
            break;
        case "Dairy":
            price = 50;
            break;
        default:
            data.innerHTML = "WtF";

    }

    data.innerHTML = `The price is: ${price} &#8362`;
    document.getElementById("myForm").reset();
}