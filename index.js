//promises in javascript
// 1. def:--> promises is a way to handle a ascyn operations in javascript
// 2. there are 3 state in promises :--> fullfilled,rejected,pending
// 3. promise aviod a very callback nature of ascyn
//sleep(200)
//.then(operation1)
//.then(operation2)

function sleep(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
           res() 
        },time)
        
    })
}
sleep(2000)
.then(res => console.log("printed after 2s"))