//null 과 undefined

let user = null;

// 객체형
// 심볼형

// typeof  연산자

const name = "Mike";

console.log(typeof 3); //string
console.log(typeof name); // number
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); 
// object 객체형이라고 나오는데 객체형은 아님 하위 에러지만 일부러 바로 잡지 않음
console.log(typeof undefined); //undefined

const message = 'MY name is ${name}';
const message2 = "My name is ${name}";
console.log(message2)

const a = "나는 ";
const b = " 입니다.";
const age = 30;

console.log(a + name + b)
console.log(a + age + "살" + b)