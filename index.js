/*Sistema de Cadastro de Eventos*/

console.log ("Inicio Sistema\n");
console.log ("Sistema = data do evento.\n")

/*Variavéis*/

let DataEventoConverter;
let PartesData;
let DataEvento;
let DataAtual = new Date();
let IdadeParticipante;
let ListaParticipantes = ["User 01", "User 02", "User 03"];
let ListaPalestrantes = ["Dev Senior 01", "Dev Senior 02", "Dev Senior 03"];

let AnoAtual;
let NascimentoParticipante;
let QuantidadeParticipantes = 0;

/* Verificação 01 - data evento > data atual = permitir evento; se não, alertar que o cadastro não será permitido por data inválida.*/

DataEventoConverter = "25/09/2021"
PartesData = DataEventoConverter.split("/");
DataEvento = new Date(PartesData[2], PartesData[1] - 1, PartesData[0]);

if (DataEvento > DataAtual) {
    console.log("Sistema recebe sua data de nascimento.\n");
    
} else {
    console.log("Permissão negada, data inválida.\n");
}

/*Verificação 02 - participante > 18 anos, permitir o cadastro; se não, alertar que o cadastro não é permitido pela idade.*/

AnoAtual = 2021;
NascimentoParticipante = 2003;
IdadeParticipante = AnoAtual - NascimentoParticipante;

if (IdadeParticipante >= 18) {

    /*Listar participantes e palestrantes por evento*/

    ListaParticipantes.push("Usuário");
    console.log("Sistema gera lista de participantes e palestrantes.\n");

    console.log("Palestrantes: " + ListaPalestrantes +"\n");

    console.log("Participantes: " + ListaParticipantes +"\n");
} else {
    console.log("Cadastro não sera permitido pela idade.\n");
}

/*Enquanto qtd participantes < 100, permitir cadastro; se não, alertar que o cadastro não será permitido por ter excedido o limite.*/

if (ListaParticipantes.length <= 100) {
    console.log("Cadastro realizado com sucesso!\n");
} else {
    console.log("Quantidade de participantes atingiu o limite!\n");
}

console.log("Fim Sistema");