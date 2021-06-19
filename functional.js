const arr = [0, 1, 2, 3, 4, 5];

const newArr = arr.map((ele) => {
  return ele * 2;
});
//no side effect and it is pure function
//map 操作陣列裡面的元素並回傳新的陣列
const newArr2 = arr.map((ele) => ele * 2);

const newArr5 = [];
for (let i = 0; i < arr.length - 1; i++) {
  newArr5.push(arr[i] * 2);
}
//以下方法都傳入boolean
const evenArr = arr.filter((e) => e % 2 === 0); //回傳所有符合條件的值
const oddArr = arr.filter((e) => e % 2 !== 0);
//只會回傳第一個符合條件的值
const findArr = arr.find((e) => e % 2 === 0);

//只會回傳boolean
//每個元素都符合
const everyArr = arr.every((e) => e % 2 === 0);

//只要有一個元素符合
const someArr = arr.some((e) => e % 2 === 0);

console.log(everyArr);

const sum = arr.reduce((a, b) => {
  console.log(a);
  console.log(b);
  //a = a+b
  return a + b;
});

const products = [
  {
    id: 1,
    manufactory: "bmw",
    type: "bmw",
    minPrice: "9.9",
    price: "9.2",
  },
  {
    id: 2,
    manufactory: "bmw2",
    type: "bmw2",
    minPrice: "9.9",
    price: "9.2",
  },
];
//解構
products.filter(({ id }) => id % 2 === 0);
//   [
//       {
//     id: 2,
//     manufactory: 'bmw2',
//     type: 'bmw2',
//     minPrice: '9.9',
//     price: '9.2',
//   },]

const newObj = { id: 2 };
const data = {
  manufactory: "bmw",
  type: "bmw",
  minPrice: "9.9",
  price: "9.2",
};

//newData 的值會被data影響 淺拷貝
//const newData = data;

//newData 的值不會被data影響 深拷貝 可是寫法很麻煩 需把值一個一個取出
//const newData = {price : data.price};

//newData 的值不會被data影響 深拷貝
const newData = { ...data };

const id = 1;
const manu = "bmw";
const name = "wilson";

const o = { id, manu, name };

console.log(o);

data.price = "999";

console.log(newData);

const newObj2 = { ...newObj, ...data };
products.push({
  id: this.products.length + 1,
  manufactory: data.manufactory,
  type: data.type,
});

//   const newP =  products.reduce((a ,b)=>{
//     return ;
//   },[])
console.log(newP);

const newArr3 = arr.forEach((ele) => ele * 2);
