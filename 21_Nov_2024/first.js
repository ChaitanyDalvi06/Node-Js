const fs= require('fs')

// console.log("begin")

// let data =fs.readFileSync("./abc.txt" , {encoding:"utf-8"})
// console.log(data)

// fs.readFile("./abc.txt" ,{encoding:"utf-8"}, (err,data)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log(data)

// })

// console.log("end")


// fs.writeFileSync("./xyz.txt" , "new data");

// fs.writeFile("./xyz.txt" , "Avengers assemble" , (err)=>
// {
//     if(!err)
//     {
//         console.log("success")
//     }
// })

fs.appendFile("./xyz.txt" , "bring me thanos " , (err)=>
{
    if(!err)
    {
        console.log("append success")
    }
})