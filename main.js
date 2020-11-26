// class Counter {
//      constructor(init){
//          this.count = init || 0;
//      }
//      increase(){
//         return ++this.count;
//      }
//      decrease(){
//         return --this.count;
//      }
//      reset(){
//         return this.count=0;
//      }
// };

// let counter = new Counter(0);

// function Counter(){
//     let count =0;
//     return {
//         increase: function(){
//             return ++count;
//         },
//         decrease: function(){
//             return --count;
//         },
//         reset: function(){
//             return count=0;
//         }
//     };
// };
// const btnIncrease = document.querySelector(".increase");
// const btnDecrease = document.querySelector(".decrease");
// const btnReset = document.querySelector(".reset");
// let number = document.getElementsByTagName('h1')[0];
// let count = Counter();
// btnIncrease.addEventListener('click',function(){
     
//     number.innerHTML=count.increase();
// })
// btnDecrease.addEventListener('click',function(){
    
//     number.innerHTML=count.decrease();
// })
// btnReset.addEventListener('click',function(){
  
//     number.innerHTML=count.reset();
// })


let arr =[1,24,5,126,21,7,79];

let arr2= arr.filter(e=> e % 2==0)

Object.defineProperty(Array.prototype,'filter2',{
    value:function(callback){
        let arr3 =[];
        for(let i in this)
        {
            if(callback(this[i],i))
            {
                arr3.push(this[i]);
            }
        }
        return arr3;
    },
    enumerable:false
});

let arr3 = arr.filter2(e=>e %2==0);
console.log(arr3)



