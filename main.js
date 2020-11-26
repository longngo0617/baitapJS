class Counter {
     constructor(init){
         this.count = init || 0;
     }
     increase(){
        return ++this.count;
     }
     decrease(){
        return --this.count;
     }
     reset(){
        return this.count=0;
     }
};

let counter = new Counter(0);
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
let number = document.getElementsByTagName('h1')[0];

btnIncrease.addEventListener('click',function(){
    let count = counter.increase();
    number.innerHTML=count;
})
btnDecrease.addEventListener('click',function(){
    let count = counter.decrease();
    number.innerHTML=count;
})
btnReset.addEventListener('click',function(){
    let count = counter.reset();
    number.innerHTML=count;
})



