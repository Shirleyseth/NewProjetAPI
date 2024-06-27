const express = require("express") //iniciando o express
const router = express.Router() //configurando 1º parte da rota
const { v4: uuidv4 } = require('uuid')

const app = express() //iniciando o app

app.use(express.json())
const porta = 3333 //criando a porta

//lista inical de mulheres
const mulheres = [ {

    id: "1",
    nome: "Shirley Mello",
    imagem: "https://github.com/Shirleyseth",
    minibio: "Aspirante a programação desde 2021"
},
{   
    id: "2",
    nome: "Iana Chan",
    imagem: "https://bit.ly/3JCXBqP",
    minibio: "Fundadora PrograMaria"
},
{
    id: "3",
    nome: "Nina da Hora",
    imagem: "https://bit.ly/3FKpFaz",
    minibio: "Hacker antiracista"
}]


//GET
function mostraMulheres(request, response) {

    response.json(mulheres)
    
    }
 //POST 
 function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)
    
    response.json(mulheres)
 }



//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher
        }
    }
    const mulherEncontrada = mulheres.find(encontraMulher)

    if(request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if(request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if(request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}


app.use(router.get("/mulheres", mostraMulheres)) //configurar rota GET / mulheres
app.use(router.post("/mulheres", criaMulher)) //configurar rota POST / mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher )) //configurar rota PATCH / mulheres/:id

 //PORTA
 function mostraPorta() {
    console.log ("Servidor criado e rodando na porta", porta)
} 

app.listen(porta, mostraPorta) //servidor ouvindo a porta

