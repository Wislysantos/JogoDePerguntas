import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

//aqui eu to passando a classe QuestaoModel com tds os atributos para const questao que ele vai ser um array de perguntas e respostas 
const questoes: QuestaoModel[] = [
    new QuestaoModel(306,'Qual bicho transmite a doença de chagar ?',[
        // eu fazendo com os metodo static fica mais facil a leitura, o que está fazendo 
        //estaciando fica um pouco maais dificio para vc saber o que esta fazendo, para vc saber vc tem que ir la resposta para ver 
        // new RespostaModel('Abelha', false) este era do jeito estancinado dava certo tambem 
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?',[
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),        
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cãoes?',[
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),        
    ]),
    new QuestaoModel(204, 'Qual é o triangulo que tem todos os lados diferentes?',[
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ])
]


export default questoes