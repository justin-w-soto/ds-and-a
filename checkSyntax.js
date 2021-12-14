// const arr = [12, 3, 5, 7] [7, 3, 5, 12]

// function reverse(arr) {
//     const stack = new Stack();
//     for(let item of arr) {
//         stack.push(item);
//     }
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = stack.pop();

//         return arr;
//     }
// }


// TEST CASES

// Input	                            Output
// if(true) { return; }	                 true
// if(true( { return; }	                 false
// if(true) { return;	                 false
// (if(true) { return; }	             false
// ( true && { name: 'foo' } )	         true
// ( true && { name: 'foo' ) )	         false
// ( true && ( name: 'foo' } )	         false
// ((2 + 3) * (4 + 11 * (2 - 1)))     	 true
// ((2 + 3) * (4 + 11 * 2 - 1)))	     false
// ((2 + 3) * (4 + 11 * (2 - 1))	     false

const matchingParenthesis = (input) => {

    const stack = new Stack();
       for(let i =0; i < input.length; i++ ) {
            if(input[i] === '(') {
                stack.push(input[i])
            }
            if(input[i] === '{') {
                stack.push(input[i])
            }
            if(input[i] === ')') {
                if(stack.pop() !== ')') return false}
                if(input[i] === '}') {
                    if(stack.pop() !== '}') return false}
    
                    }

                    return !stack.size
                }
                   
            
// THE ABOVE WAS PAULS SOLUTION, I NEVER MADE IT ALL THE WAY THROUGH... 
    // take the input iterate over it 
    // look for opening parenthesis 
    // see if next parenthesis matches as a matching closing bracket

    // if all brackets are in the correct matching order, return true
    // else return false



