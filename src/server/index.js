const express=require('express')
const bp=require('body-parser')
const cors=require('cors')
const path=require('path')

const app=express()

const port=process.env.PORT||3000;

app.use(bp.urlencoded({extended:true}),bp.json())
//app.use(cors())

app.use(express.static(path.resolve(__dirname,'../../dist')))

app.post('/calculate',(req,res)=>{
	let {cost,markup}=req.body;

	cost=parseFloat(cost);
	markup=parseFloat(markup);

	function round(num){
		return Number.parseFloat(num).toFixed(2);
	}

	const profit=(cost*markup)/100;
	const salePrice=cost+profit;
	const margin=((salePrice-cost)/salePrice)*100;

	res.send({salePrice:'$'+round(salePrice)
		,profit:'$'+round(profit)
		,margin:round(margin)+'%'
	})
})

app.get('*',(req,res)=>{
	res.sendFile(path.resolve('index.html'))
})

app.listen(port,()=>{
	console.log("Listening on "+port)
})