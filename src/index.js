
exports.min = function min (array) {
    if (!array || array.length == 0) {
        return []
    }
    
    const minValue = Math.min.apply(null, array);
    return minValue;

}
    
exports.max = function max (array) {
    if (!array || array.length == 0) {
        return []
    }
    const maxValue = Math.max.apply(null, array); 
    return maxValue; 
}


exports.avg = function avg (array) {
    if (!array || array.length) {
        return []
    }

}

