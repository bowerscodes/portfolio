function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        let output = [0];
        
        if (n === 1) {
            output === [0];
            return output
        }
        else if (n === 2) {
            output === [0, 1];
        }
        else {
            output = [0, 1, 1, 2]

            for (var i =2;  i < n;) {
                output.push(output[output.length - 2] + output[output.length -1]);
            }


    }
    

        return output;
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    