const express=require('express')
const app=express()
require('dotenv').config()
const {open}=require('sqlite')
const sqlite3=require('sqlite3')
const path=require('path')
const dbPath=path.join(__dirname,'products.db')
const cors=require('cors')
app.use(cors())
app.use(express.json())
const port=process.env.PORT

let db;
const initializingDBandServer=async()=>{
    db=await open({
        filename:dbPath,
        driver:sqlite3.Database
    })

    await db.exec(`
            CREATE TABLE IF NOT EXISTS products(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                price REAL NOT NULL,
                quality INTEGER NOT NULL
            )
        `)
    console.log('data base created and working perfectly.')
}

app.post('/total-value',async(req,res)=>{
    const {products}=req.body
    if(!Array.isArray(products)){
        return res.status(400).json({error:'products Array invalid'})
    }
    let total=0;
    for (const product of products){
        if (product.price && product && product.price){
            total+=product.price
            await db.run(`
                    INSERT INTO products (name,price,quality) VALUES(?,?,?)
                `,[product.name,product.price,product.quality])
        }
    }
    res.json({
        total_value:total
    })
})

app.listen(port,()=>{
    console.log('server running on 3005..')
})
initializingDBandServer()
module.exports=app