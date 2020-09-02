//in this lesson it is said that if an option in a switch statement doesn't have a break statement that the executing of the switch statement continues.
//in the code below I am going to verify if that is true, and also verify if a case will execute automatically if it comes after a case that executed that did not have a break in it.
var num = "";

function runSwitch(num){
  switch (num) {
    case 1:
      console.log(1);
    case 2:
      console.log(2);
  }
}

runSwitch(1);

/* (output)
1
2
*/

//I see that it does
