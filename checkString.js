function checkString (str) {
    stack = [];
    for (const symbol of str) {

        if (symbol === '(' ) {
            stack.push(symbol);
        } else if (symbol === ')') {

            if (!stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


const str = '(((((()))))';

checkString(str);
