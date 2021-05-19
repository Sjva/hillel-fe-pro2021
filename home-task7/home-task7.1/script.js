

(function main(oldArray) {
    let userArray;
    if (!oldArray) {
        userArray = operationWhisUserArray("Please, entered an array separated by a space (min 3 or max 20 elements)");
    }
    else {
        userArray = oldArray;
    }

    let choice = getMenuResult();
    processUserChoice(choice, userArray);

    while (repeatOperation) {
// Questions for new operation
        repeatOperation = confirm("Do you want to repeat the operation");
        let selectionOperations;
// New operation
        if (repeatOperation === true) {
            do {
                selectionOperations = +prompt(`1- Repeat with old array \n 2- Repeat with new array`);
                if (selectionOperations === 1) {
                    main( userArray);
                } else if (selectionOperations === 2) {
                    main();
                }
            } while (selectionOperations !== 1 && selectionOperations !== 2);
        }
    }
})();


