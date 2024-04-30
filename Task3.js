const AwaitCall = async () => {
    try {
      const x = await fetch("https://jsonplaeholder.typicode.com/todos/1");
      const Y = await x.json();
      console.log(Y);
    } catch (error) {
      console.log("something went wrong",error);
    }
  };
  AwaitCall();
  const chainedAsyncFunctions = async()=>{

    try{
 console.log("Firstfunction")

    }catch (error ){
        console.log("something went wrong",error)
    }
  }
  const AsynFunc1 =async()=>{
    try{
        console.log("First Function") }
        catch(error){
            console.log("something went wrong",error)

    } }
    const AsynFunc2=async()=>{
        try{
            console.log("second Function") }
            catch(error){
                console.log("something went wrong",error)
    
        } }
        const AsynFunc3 =async()=>{
            try{
                console.log("Third Function") }
                catch(error){
                    console.log("something went wrong",error)
        
            } }

const delay=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
}
const chainedAsyncFunction=async()=>{

    try{
        await delay(1000)
        await AsynFunc1()
        await delay(1000)
        await AsynFunc2()
        await delay(1000)
        await AsynFunc3()
    } catch(error){
        console.log("something went wrong",error)
    }
}
chainedAsyncFunction()
  