import data from './data.js'
const itemList = document.getElementById('item-list')
itemList.innerHTML = '<li>Hello world</li>'

const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1){
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    const img = document.createElement('img');
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)
    itemsContainer.appendChild(newDiv)
//console.log(img)
    const desc = document.createElement('P')
   // desc.className = 'desc'
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)
    
    const price = document.createElement('P')
    //price.className = 'price'
    price.innerText = data[i].price
    newDiv.appendChild(price)
///button
    const button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = 'Add to Cart'
    newDiv.appendChild(button)
///itemsContainer.appendChild(newDiv)
}
