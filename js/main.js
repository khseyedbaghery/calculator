const display = document.querySelector('.cal-display');

const btn = document.querySelectorAll('.my-btn');
const btnClear = document.getElementById('clear'); 
const btnEqual = document.getElementById('equal');
const btnBack = document.getElementById('back'); 

const btnSum = document.getElementById('sum'); 
const btnMinus = document.getElementById('minus'); 
const btnMulti = document.getElementById('multiplication'); 
const btnDivision = document.getElementById('division'); 


btn.forEach(item => {
    item.addEventListener('click',myDisplay);
    
});

btnClear.addEventListener('click',function(){
    display.innerText = '';
});

btnEqual.addEventListener('click',function(){
    
    var cal = display.innerText;
    var result = eval(cal);
    display.innerText = result;

});

btnBack.addEventListener('click',function backSpace(){

    let cont = display.innerText;
    let back = cont.substring(0, display.innerText.length-1);
    display.innerText = back;
})


function myDisplay(e){

    display.innerText += e.target.innerText;
}























///////////////////// function ///////////////

// // btn-addEventListener('click', myDisplay);


// btn_sum.addEventListener('click', func_sum);
// btn_minus.addEventListener('click',func_minus);
// btn_multi.addEventListener('click',func_multi);
// btn_division.addEventListener('click',func_division);
// btn_equal.addEventListener('click',func_equal);
// // btn_dot.addEventListener('click',func_dot);

// /////////////////// discription function ///////////

// var contain = [] ;
// var number2 = '';
// var number1 = '';
// var char1 = '';
// function myDisplay(e){

//      e.preventDefault();

//     if(e.target.className.includes('my-btn')){

//         contain += e.target.outerText;
//         display.innerHTML = contain;

//         if(e.target.className.includes('number')){
            
//             number2 += e.target.outerText;
//         } 

//         if(e.target.className.includes('charctor')){

//             char1 = e.target.outerText;
//             number1 = number2;
//             number2 = '';
//         }

//         if(e.target.id.includes('equal')){
          
//             console.log('number1 is :', number1);
//             console.log('number2 is :', number2);
//             display.innerHTML = func_equal(number1, number2);
        
//         }
          
//     }

// }


// function func_equal(a1, b1){
    
//     var a = Number(a1);
//     var b = Number(b1);
    
//     let result ;
    
//     switch(char1){
        
//         case '+':{
//             result = a + b;
//             break;
//         }

//         case '-':{
//             result = a - b;
//             break;
//         }

//         case '*':{
//             result = a * b;
//             break;
//         }

//         case '/':{
//             result = a / b;
//             break;
//         }

//         case '+':{
//             result = a + b;
//             break;
//         }
//     }
//     return result;
    
// }






//     // while(){

//     // }
//     // let num =[];
//     // var a = toNumber(contain);
    
//     // console.log(typeof(contain));
    
//     // return(contain);

//     // console.log(num);
//     // display.innerText = num;

//     // num = contain;


// }

// function stay(x){


//     // if()

// }

// function func_sum(a, b){ 
//     return(a + b);
// }

// function func_minus(a, b){
//     return(a - b);
// }

// function func_multi(a, b){
//     return( a * b);
// }

// function func_division(a, b) {
//     return( a / b);
// }

// function func_equal() {
    
// }