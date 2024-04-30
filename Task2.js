const AwaitCall = async () => {
    const x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const Y = await x.json();
    console.log(Y);

};
AwaitCall();

