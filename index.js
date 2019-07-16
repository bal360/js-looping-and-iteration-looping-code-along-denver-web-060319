function writeCards(array, eventName) {
    const thankYouArray = []
    for (let i = 0; i < array.length; i++) {
        thankYouArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouArray;
}

function countdown(int) {
    while (int > -1) {
        console.log(int);
        int--;
    }
}