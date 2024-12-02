// ações que meu carrinho pode realizar

// adicionar item 
async function addItem(userCart, item) {
    userCart.push(item)
}
// excluir item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1)
    }

}

// remover item - diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(product => product.name === item.name)
    console.log(`Item encontrado: ${indexFound}`)

    if(indexFound == -1) {
        console.log(`Item não encontrado.`)
        return;
    }

    // item > 1, subtrair um item. Item = 1, deletar o item.
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return;
    } 
    
    if(userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1)
        return;
    }
}

// calcular valor total da compra
async function totalPrice(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`\n R$${result}. `)
}

async function displayCart (userCart) {
    console.log(`\n Shopee Cart list:`)
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity} | Subtotal R$${item.subtotal()}`)        
    });
}

export {
    addItem,
    deleteItem,
    removeItem, 
    totalPrice,
    displayCart
}
