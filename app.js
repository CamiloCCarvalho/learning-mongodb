const express = require('express')//instancia o objeto express
require('./config/database')//puxa config do banco pra este arquivo

const path = require('path')//auxilia na string de diretorio

//rotas agrupadas
const checklistRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')

//inicia o uso do express habilita leitura de json nas requisições
const app = express()
app.use(express.json())
//habilita chegada de form via url com middleware
app.search(express.urlencoded({extended: true}))

//serve arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//seta as views pra pasta views e indica o ejs para uso
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

//rotas
app.use('/', rootRouter)
app.use('/checklists', checklistRouter)


//sobe o servidor
app.listen(3000, ()=> {
    console.log('SERVER-UP | PORT: 3000 - LOG TO: [ ::1:3000/ ]')
})