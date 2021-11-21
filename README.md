# Add-to-localStorage-and-Remove-from-localStorage

## Process for add to localStorage and remove from local storage.

### Process 1:
```
const addToDb = id => {
    const exists = localStorage.getItem(id);
    //getItem diye check kore dekbo, Jodi value na thake, Then
    if(!exists){
        localStorage.setItem(id, 1);
    }
    else{
        const newCount = parseInt(exists) + 1;
        localStorage.setItem(id, newCount);
    }
}

export { addToDb };
```

### Process 2: We will always use this Process
```
const addToDb = id => {
    const exists = localStorage.getItem('shopping_cart');
    let shopping_cart = {};
    if(!exists){
        shopping_cart[id] = 1;
    }
    else{
        shopping_cart = JSON.parse(exists);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else{
            shopping_cart[id] = 1;
        }
    }
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
}

const removeFromDb = id => {
    const exists = localStorage.getItem('shopping_cart');
    if(!exists){
        
    }
    else{
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
    }
}

export { addToDb, removeFromDb };
```

- Click Handler for this project: Here (_id) is product id
```
<button onClick={() => handlePurchase(_id)}>Purchase</button><br/>
```