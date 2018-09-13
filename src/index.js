/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var counts = 0;  
    for(var i = 0; i < preferences.length; i++) {
        var k = preferences[i] - 1;
        if (k === i ) continue;
        var j = preferences[k] - 1;
        if(k === j) continue;
        var c = preferences[j] - 1;
        if(c === j) continue;
        if(c === i) {
            counts++;
        }
    };
        return counts / 3;
    
  // your implementation
};
