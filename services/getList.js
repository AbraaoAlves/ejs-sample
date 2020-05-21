function getRandomNumber(limit) {
    return (Math.ceil(Math.random() * limit))
}
const names = ['abu', 'bia', 'cia', 'dio', 'eby', 'fio', 'gio', 'hei', 'ju', 'lia', 'mia'];
function mapIndexedItem(_item, index) {
    const randomNameIndex = getRandomNumber(names.length-1) 
    return {
        name : names[randomNameIndex],
        age : getRandomNumber(80 - index),
        id: index+1
    }
}

function getRandowList(size) {
    return Array.from(Array(size)).map(mapIndexedItem);
}

module.exports = function(size, callback) {
    const list = getRandowList(size);

    //simulate a database connection
    setTimeout(() => {
        console.log('[list]');
        console.log(list);
        callback(list);
    }, 1000);
}