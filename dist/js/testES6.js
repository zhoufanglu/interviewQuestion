'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contants = 1;
$(function () {
    testArr();
    //类
    testClass();
    //函数测试
    var number = countSum(1, 2);
    console.log(8, number);
});
//es6箭头函数
add = function add(person) {
    return { name: 'lfz', age: '22' };
};

function testArr() {
    var numberArr = ['one', 'two', 'three'];
    numberArr.forEach(function (item, index) {});
}
//类

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'toString',
        value: function toString() {
            return '[name=' + this.name + ', age=' + this.age + ']';
        }
    }]);

    return Person;
}();

function testClass() {
    var person = new Person('lfz', 22).toString();
    console.log(26, person);
}
/*function countSum(x,y) {
    return x + y ;
}*/
//求和
countSum = function countSum(x, y) {
    return x + y;
};
//对象
var color = 'green';
var point = _defineProperty({
    x: 5,
    y: 10,
    color: color,
    toString: function toString() {
        return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color;
    }
}, 'prop_' + 42, 42);

console.log(point.toString());
console.log('The dynamic property is ' + point.prop_42);
//# sourceMappingURL=testES6.js.map