function snakeToCamel(string) {
    let splitStringArr = string.split("_");
    console.log(splitStringArr);
    return splitStringArr.reduce((acc, curr, i) => {
        curr = i !== 0 ? curr[0].toUpperCase() + curr.slice(1) : curr;
        return acc + curr;
    }, "");
}

function camelToSnake(string) {
    let splitStringArr = string.split(/(?=[A-Z])/);
    return splitStringArr.reduce((acc, curr, i) => {
        curr = i !== 0 ? `_${curr.toLowerCase()}` : curr.toLowerCase();
        return acc + curr;
    }, "");
}

function convertObject(data, isSnakeToCamel) {
    let conversionMethod = isSnakeToCamel ? snakeToCamel : camelToSnake
    let parentKeys = Object.keys(data);
    parentKeys.forEach((key) => {
        let currentObj = data[key];
        delete data[key];
        let newKey = conversionMethod(key);
        data[newKey] = currentObj;
        if (typeof data[newKey] === "object") {
            convertObject(data[newKey], isSnakeToCamel);
        }
    });
    return data;
}

const snake2CamelObj = (data) => convertObject(data, true);
const camel2SnakeObj = (data) => convertObject(data, false);




module.exports = { snakeToCamel, snake2CamelObj, camelToSnake, camel2SnakeObj };