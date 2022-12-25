const app = require("./app");
const dotenv=require('dotenv');
const connectDatabase = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });
//database connection
connectDatabase()
app.get('/',(req,res)=>{
    res.send('hello ');
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})