function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        try {
            // Filter for strings and convert them to lowercase
            const result = arr
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}
// Test the function
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
