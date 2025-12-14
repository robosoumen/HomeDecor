//get
export const loadWishlist = () => {
    try{
        const data = localStorage.getItem('wishList')
        return data ? JSON.parse(data) : []
    }  catch (err) {
        console.log(err)
        return []
    }
}

//save
export const updateList = product => {
    const wishlist = loadWishlist()

    try{
        const isDuplicate = wishlist.some(p => p.id === product.id)
        if (isDuplicate) return alert('already added in wishList')
            const updatedWishlist = [...wishlist, product]
        localStorage.setItem('wishList', JSON.stringify(updatedWishlist))
    }
    catch(err) {
        console.log(err)
    }
}


//delete
export const removeFromWishlist = id => {
    const wishlist = loadWishlist()
    try{
        const updatedWishlist = wishlist.filter(p => p.id !== id)
        localStorage.setItem('wishList', JSON.stringify(updatedWishlist))
    }
    catch (err) {
        console.log(err)
    }
}