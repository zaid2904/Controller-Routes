const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/product")

app.get("/", (req, res)=>{
    res.send("i am live express")
})

app.use("/api/product", product_routes);

const start = async () => {
    try{
        app.listen(PORT, ()=>{
            console.log(`${PORT} yes i am connected`);
        });
    }
    catch (error){
        console.log(error);
    }
};
start();