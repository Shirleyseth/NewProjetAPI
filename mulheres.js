const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [ {

    nome: "Shirley Mello",
    imagem: "https://github.com/Shirleyseth",
    minibio: "Aspirante a programação desde 2021",
},
{
    nome: "Iana Chan",
    imagem: "https://bit.ly/3JCXBqP",
    minibio: "Fundadora PrograMaria",
},
{
    nome: "Nina da Hora",
    imagem: "https://bit.ly/3FKpFaz",
    minibio: "Hacker antiracista",
}]

function mostraMulheres(request, response) {

    response.json(mulheres)
    
    }
 
function mostraPorta() {
    console.log ("Servidor criado e rodando na porta", porta)
} 


app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)

