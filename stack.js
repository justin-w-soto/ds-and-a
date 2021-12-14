
class Stack {
    #list = [];
  
    push(item) {
      //implement me
      this.#list.push('item')
    }
  
    pop(item) {
      //implement me
      return this.#list.pop()
    }
  
    peek() {
      //implement me
      return this.#list.at(-1)

    }
  
    get size() {
      //implement me
      return this.#list.length
    }
  }

  // test cases 
//   const stack = new Stack();
// stack.push('fox');
// stack.push('goose');
// stack.push('lizard');
// console.log(stack.pop()); // 'lizard'
// console.log(stack.peek()); // 'goose'
// console.log(stack.pop()); // 'goose'
// stack.push('llama');
// console.log(stack.pop()); // 'llama'
// console.log(stack.peek()); // 'fox'
// console.log(stack.pop()); // 'fox'
// console.log(stack.pop()); // null