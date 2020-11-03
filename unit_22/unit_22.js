//  Task 1
// Добавьте в код функции try catch так, чтобы вместо ошибки выводилось в out-1 цифра 1.

let outT1 = document.querySelector('.out-1');

function t1() {
    try{
        let a = 22;
        let c = a + d;
    }
    catch{
        outT1.innerHTML = 1;
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

let outT2 = document.querySelector('.out-2');

function t2() {
    try{
        let a = 4;
        let b = 5;
        document.querySelector('.out-2222222').innerHTML = a*b;
    }
    catch(err){
        outT2.innerHTML = err;
    }

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-3. Если его нет - создавайте в коде. 
// т.е. вы не знаете будет или нет он в html.


function t3() {
    try{
        let a = 4;
        let b = 5;
        document.querySelector('.out-3').innerHTML = a*b;
    }
    catch(err){
        let outT3 = document.createElement('div');
        outT3.innerHTML = err;
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Дана переменная a. В переменную делается push. Используя try catch отловите ошибки если они есть. 
// Если ошибка вывести в out-4 число 0. Если не ошибка - то результирующий массив через пробел.

let outT4 = document.querySelector('.out-4');
let a = [2,3,4];
// a = 5;

function t4() {
    try{
        a.push(7);
        for(let i = 0; i < a.length; i++){
            outT4.innerHTML += a[i] + ' ';
        }
    }
    catch{
        outT4.innerHTML = 0;
    }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Добавьте try, catch, finnaly так, чтобы в out-5 выводился 0 при ошибки. А в out-5-1 всегда выводилось слово 'finnaly';

let outT5 = document.querySelector('.out-5');
let outT5_1 = document.querySelector('.out-5-1');

function t5() {
    try{
        let p = document.querySelectorAll('p');
        p.push(3);
    }
    catch{
        outT5.innerHTML = 0;
    }
    finally{
        outT5_1.innerHTML = 'finnaly';
    }
}

document.querySelector('.b-5').onclick = t5;

