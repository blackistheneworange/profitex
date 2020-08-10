const express=require('express')
const bp=require('body-parser')
const cors=require('cors')
const path=require('path')

const app=express()

const port=process.env.PORT||3000;

app.use(bp.urlencoded({extended:true}),bp.json())
app.use(cors())

app.use(express.static(path.resolve('public')))

app.listen(port,()=>{
	console.log("Listening on "+port)
})
