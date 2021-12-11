const menu = ['Tandoori Chicken', 'Kadhai Paneer', 'Dal Makhni',
    'Chhole Bhature', 'Garlic Bread', 'Chowmein', 'Egg Curry', 'Mushroom',
    'Chicken Biryani', 'Khichdi', 'Onion Rings', 'Masala Dosa',
    'Chicken Momos', 'Veg Momos', 'Chilli Potato', 'Onion Dosa', 'Garlic Naan',
    'Zeera Rice', 'Gulab Jamun', 'Ice Cream', 'Sarson ka Saag'];




function isVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {
        return false;
    }
    return true;
}


const vegMenu = menu.filter(isVeg);
const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);