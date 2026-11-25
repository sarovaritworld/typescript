/*
===========================================================
PROGRAM 09: CHARACTER FREQUENCY
===========================================================

Problem:
Count the number of occurrences of every character in a string.

Example:
Input: "programming"

Output:
{
    p: 1,
    r: 2,
    o: 1,
    g: 2,
    a: 1,
    m: 2,
    i: 1,
    n: 1
}

*/



function frequencies(str:string): Map<string, number> {

    const frequencyMap = new Map<string, number>();

    for(const char of str){

        if(frequencyMap.has(char)){
            frequencyMap.set(char, frequencyMap.get(char)!+1)
        }else{
            frequencyMap.set(char, 1);
        }
    }
    return frequencyMap;

}


let input = "annual";

let res = frequencies(input);

for(const [char, count] of res){
    console.log(`${char} repeates ${count} times`)
}