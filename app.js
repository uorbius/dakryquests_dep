const express = require('express')
const config = require('config')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const app = express()

app.use(express.static('public'));

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/static')))
app.use(fileUpload())
app.use(cors({
    credentials: true
}))
  
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/table', require('./routes/table.routes'))
app.use('/api/token', require('./routes/token.routes'))
app.use('/api/billboard', require('./routes/billboard.routes'))
app.use('/api/quest', require('./routes/quest.routes'))
app.use('/api/order', require('./routes/order.routes'))

if(process.env.NODE_ENV === 'production'){
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))
	
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
	
}
const PORT = config.get('port') || 5000

async function start(){
	try{
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
	} catch (e) {
		console.log("Server Error: ", e.message)
	}
}

start();
