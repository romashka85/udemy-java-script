let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};
let clone = Object.assign({}, obj);  //copy the object
let clone2 = {...obj};   //spred operator
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'haaaaa';


console.log(obj);
console.log(clone);
console.log(superClone);
