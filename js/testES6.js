const contants = 1;
$(function () {
    testArr();
    //类
    testClass();
    //函数测试
    var number = countSum(1,2);
    console.log(8,number);
});
//es6箭头函数
add = person => (
    {name: 'lfz', age: '22'}
);

function testArr() {
    let numberArr = ['one', 'two', 'three'];
    numberArr.forEach(function (item, index) {
    });
}
//类
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    toString() {
        return '[name=' + this.name + ', age=' + this.age + ']'
    }
}
function testClass() {
    let person = new Person('lfz',22).toString();
    console.log(26,person);
}
/*function countSum(x,y) {
    return x + y ;
}*/
//求和
countSum = (x,y)=>{
    return x+y;
};
//对象
let color = 'green'
const point = {
    x: 5,
    y: 10,
    color,
    toString() {
        return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color
    },
    [ 'prop_' + 42 ]: 42
}

console.log(point.toString());
console.log('The dynamic property is ' + point.prop_42)

