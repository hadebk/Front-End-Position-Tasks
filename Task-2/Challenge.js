/*
 ----------
 Algorithm:
 ----------
    1- check if num = 0 -> retun false (message).
    2- check if num = 1 -> return 0.
    3- check if num < 0 -> return false (message).
    4- check if num even:
        * generate n/2 unique random number and greater than 0.
        * then push each unique random number with its negative value.
        * then return output array.
    5- check if num odd:
        * first, push 0 to output array.
        * then generate (n-1)/2 unique random number and greater than 0.
        * then push each unique random number with its negative value.
    
-----
NOTE:
-----
    in loop below, as limit to loop i use (n,n-1) instead of (n/2, n-1/2),
    cause in one iteration i push to output array twice (+/-),
    and actually loop will stop after (n/2 or n-1/2) iterations.

------------------------------------------
**  this function has an O(N/2) runtime **
------------------------------------------

*/

//=========================================================================
function solution(n){
    let output_arr = [];
    // number = 0
    if(n == 0) return 'please enter number greater than 0!'
    // number = 1
    if ( n == 1 ) return 0
    // number < 0
    if (Math.sign(n) == -1) return 'please enter positiv number!'
    // number is even
    if (n%2 == 0){
        while(output_arr.length < n){ /// n/2 iterations only 
            let unique_rand_num = Math.floor(Math.random() * 100) + 1; // generate random num in range 1-101
            if(output_arr.indexOf(unique_rand_num) === -1){ // check if num already exist in array or not
                output_arr.push(unique_rand_num); // push positive num
                output_arr.unshift(-Math.abs(unique_rand_num))// push negative num
            }
        }
        return output_arr
    }
    // number is odd
    if (n%2 !== 0){
        output_arr.push(0);
        while(output_arr.length < n-1){
            let unique_rand_num = Math.floor(Math.random() * 100) + 1;
            if(output_arr.indexOf(unique_rand_num) === -1){ 
                output_arr.push(unique_rand_num);
                output_arr.unshift(-Math.abs(unique_rand_num))
            }
        }
        return output_arr
    }
}
//=========================================================================


