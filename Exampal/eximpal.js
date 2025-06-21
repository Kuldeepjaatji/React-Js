const number = [1,2,3,4,5,10,40,222];
const max = number.reduce((acc,num) => (acc<num?num:acc),number[0]);
console .log(max);



const numb = ['pink','black','blue','red','white','black','blue','pink','red','white','black'];
const wordcount = numb.reduce((acc,num1)=>{
    acc[num1]=(acc[num1] || 0)+1;
    return acc;
},{});
console.log(wordcount);