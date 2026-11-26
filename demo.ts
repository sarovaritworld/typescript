function twoSum(nums: number[], target: number): number[] {

    let res:number[] = [];
    for(let i =0;i<nums.length;i++){

        for(let j =i+1; j<nums.length; j++){
            if(nums[i] + nums[j]==target){
                res.push(i,j)
            }

        }
    }
    return res; 
   
}

let nums = [2, 11, 15, 7]

console.log(twoSum(nums, 9))
