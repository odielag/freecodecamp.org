function wouldAStrictEqualityOperatorMakeADifference(var1, var2) {
    if ((var1 == var2) && (var1 !== var2)) {
        return true;
    }
    else
        return false;
}

/* test program
    console.log(wouldAStrictEqualityOperatorMakeADifference(2, "2"));
*/


/* REFACTORING and putting it above

    // I'm going to try to make a function that returns true if it would make a difference if a Strict Equality Operator is used or not.

    function doesAStrictEqualityOperatorMakeADifference(var1, var2) {
    if (var1 == var2) {
        if (var1 === var2) {
        return "false1";
        }
        return "true2";
    }
    return "false3";
    }

    console.log(doesAStrictEqualityOperatorMakeADifference(3, "3"));

    // Okay, now I got it to function when checking it manually while adjusting the values.
    console.log(1);

    // I thought I'd make a testing aparatus to automate seeing if the function works.
    var round = [[3,3,"false1"],[3,"3","true2"],[3,4,"false3"]]; // send the function the first two variables and expect the last one


    function testingFunction() {
    var passed = [];
    for (i = 0; i < 3; i++) {
        if (doesAStrictEqualityOperatorMakeADifference(round[i][0], round[i][1]) == round[i][2]) {
            passed.push(true);
        }
    }
    if (passed[0] == true && passed[1] == true && passed[2] == true) {
        console.log("The function has been tested and it works")
        return;
    }
    else console.log("I'm not sure if this is supposed to be here.");
    }

    testingFunction();

//Okay, now that I have a working function and a working function to test the function, I'm going to refactor and put the concise main function at the top.
*/
