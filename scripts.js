import data from './data.js'

const itemsContainer = document.querySelector('#items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

const cart = [];

for (let i = 0; i < data.length; i += 1){
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    const img = document.createElement('img');
    img.src = data[i].image;
    img.width = 300;
    img.height = 300;
    newDiv.appendChild(img);
    //console.log(img)
    itemsContainer.appendChild(newDiv);

////////////////DESCRIPTION
    const desc = document.createElement('P');
    desc.innerText = data[i].desc;
    newDiv.appendChild(desc);
////////////////PRICE
    const price = document.createElement('P');
    price.innerText = data[i].price;
    newDiv.appendChild(price);

////////////////button
    const button = document.createElement('button');
    button.id = data[i].name;
    button.dataset.price = data[i].price;
    button.innerHTML = 'Add to Cart';
    newDiv.appendChild(button);
}

////////////////ADD ITEM 
function addItem(name, price) {
        for(let i = 0; i < cart.length; i += 1) {
            if (cart[i].name === name) { //updates exisiting item, to match quantity of duplicate item 
                cart[i].qty += 1
                return //stop code, incorrect duplicates 
            }
        }
         const item = {name, price, qty: 1} //qty must have a value
         cart.push(item)
     }
//--------------------------------------------------------------------------------------
////////////////ADD ITEMS BUTTON
    const all_items_button = Array.from(document.querySelectorAll("button"));
    all_items_button.forEach(elt => elt.addEventListener('click', () => {
        addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
        showItems()
    }))

////////////////SHOW ITEMS
function showItems() {
    const qty = getQty()
    cartQty.innerHTML = `You have ${qty} items in your cart`

    let itemStr = ''
    for (let i = 0; i < cart.length; i +=1) {
        const { name, price, qty } =  cart[i]
        itemStr += `<li>${name} $${price} x ${qty} = $${qty * price}</li>`
    }
    itemList.innerHTML = itemStr

    cartTotal.innerHTML = `Total in cart: $${getTotal()}`
}
//--------------------------------------------------------------------------------------
////////////////GET QUANTITY 
function getQty() {
    let qty = 0 //must be OUTSIDE  for loop, continues running total. inside = resets, BLOCK SCOPE
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty //corrects cart overall quantity 
    }
    return qty
}
//--------------------------------------------------------------------------------------
////////////////GET TOTAL
function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2) //toFixed(desired amount of decimal places) LAST BEFORE DISPLAYING 
}
//--------------------------------------------------------------------------------------
////////////////REMOVE ITEM 
function removeItem(name, qty = 0) { //zero is default value
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) { //comparing NAMES
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if(cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            return 
        }
    }
}
//----------------------------------------------------------------------------------------
    addItem('energetic', 5.99)
    addItem('scared', 5.99)
    addItem('gloomy', 5.99)
    addItem('energetic', 5.99)
    addItem('scared', 5.99)
    addItem('energetic', 5.99)

    showItems()
    
    removeItem('energetic', 1)
    removeItem('gloomy')

    showItems()

