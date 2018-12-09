 window.onclick = () => {
     const h1Value = document.getElementsByTagName('h1')[0];
     h1Value.setAttribute('style', 'color:blue; font-size:30px');
     h1Value.innerText = 'my name is srikar';
     log = (msg = "default msg") => console.log(msg);
     log();
     log("i am fine");
 }
 window.onload = () => {
     let arr1 = [1, 2, 3];
     let arr2 = [4, 5, 6];
     const name = 'srikar';
     console.log(arr1);
     console.log(arr2);
     //spread operator
     let arr3 = [...arr1, ...arr2];
     console.log(arr3);

     //template strings
     console.log(`my name is ${name} and my age is ${10+12}`);
 }

 window.onload = () => {

     name = 'srikar';
     belt = 'black';
     //es5
     var ninja = {
         name: name,
         belt: belt,
         chop: function (x) {
             console.log('you chopped enemy ' + x + ' times');
         }
     }

     //es6
    //  let ninja = {
    //      name,
    //      belt,
    //      chop(x) {
    //          console.log(`you chopped enemy ${x} times`)
    //      }
    //  }

     ninja.chop(5);
 }
 window.onload=()=>{
     function* log(){  
        console.log('sri');
         yield console.log('kar');
         yield console.log('vuppala');
     }
     var namelog=log();
    //  namelog.next();
     namelog.next();
 }