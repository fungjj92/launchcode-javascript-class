/**** 
JS Basics PSET
ReBootU 
5/13/2015

Jenny Fung

****/
//Make order method for arrays
if (!Array.prototype.order){
	Array.prototype.order = function() {
		var newArr = this.slice();
		return newArr.sort();
	}
}

//Polyfill custom for array.includes()
if (!Array.prototype.includes) {
    Array.prototype.includes = function (element) {
        if (Array.isArray(this) !== true) {
            return console.log("not an array");
        } else if (!this.length) {
            return console.log("empty array");
        } else {
            return this.some(function (obj) {
                return (obj === element);
            });
        }
    }
}

if (!Array.prototype.find){
    Array.prototype.find = function(query){
        if(!query) {
            return console.log("need query input");
        } else if(this.includes(query)){
            return query;
        } else {return false;
        }
    }
}

////Polyfill custom for finding multi values in an array, as in array.find on crack
if (!Array.prototype.findAll){
	Array.prototype.findAll = function(query){
        if(!query){
            return console.log("need query input");
        } else
            return this.filter(function(value){ return value === query});
	}
}

//Testing
var arr = [1, 2, 4, 3];
console.log(arr.order()); // :)

console.log(arr.includes(2)); //true :)
console.log(arr.includes(5)); //false :)

var empty = [];
console.log(empty.includes(1)); //empty :)

console.log(arr.find(2)) //2 :)

var array1 = [1, 2, 4, 5, 2];
console.log(array1.findAll(2)); // :)
console.log(array1.findAll()); // need query input :)

var array2 = [[10, [8, 11]], [9]];
var final = Array.prototype.concat.apply(arr.concat([]), array2);
console.log(final);
