

const delay=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
}
const iteratewithAsyncAwait=async(arr)=>{
    
for(const value of arr){
    await delay(1000)
    console.log(value)}
}
iteratewithAsyncAwait(["sana","ikbel","sedki"])







// const iteratewithAsyncAwait=async(arr)=>{
//          for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         await promise setTimeout(() => {}, 1000);
//     } }
// C([1, 2, 3]);