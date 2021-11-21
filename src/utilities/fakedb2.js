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