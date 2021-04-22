module.exports = function searchItem(item, search) {
    if(!isNaN(item)) {
        if(String(item).indexOf(search) != -1) { return item }
    } else {
        if(item.toLowerCase().includes(search.toLowerCase())) { return item }
    }
}