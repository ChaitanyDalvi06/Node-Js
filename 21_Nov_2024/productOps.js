const fs= require('fs')

fs.readFile("./products.json" , {encoding:"utf-8"},(err,data)=>
{
    let products = (JSON.parse(data))

    // for(let i=0 ; i<products.length ; i++)
    // {
    //     console.log(products[i].name)
    // }
    products.push(newProduct)


    fs.writeFile("./products.json",JSON.stringify(products),(err)=>
    {
        if(!err)
        {
            console.log("successfully added")
        }
    })

})

// let data = fs.readFileSync("./products.json",{encoding:"utf-8"})
// let products = JSON.parse(data)


let newProduct={

        id: 21,
        name: "GPU",
        price: 100,
        category: "Electronics",
        brand: "NVIDIA"

}