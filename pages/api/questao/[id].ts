import questoes from "../bancoDeQuestoes"

export default function handler(req, res){

    const idSelecionada = +req.query.id

    const questaoSelecionada = questoes.filter(questao => idSelecionada === questao.id)
    

    if(questaoSelecionada.length === 1){
        const questao = questaoSelecionada[0]
        res.status(200).json(questao.paraObjeto())
    }else{
        res.status(204).send()
    }
}