import { embaralhar } from "../../../functions/array"
import questoes from "../bancoDeQuestoes"

export default (req, res)=>{
    //fiz uma const para pegar o arry dos ids para usar no metodo embaralhar aque aii eu embaralho as perguntas
    const ids = questoes.map(questao => questao.id)
    return res.status(200).json(embaralhar(ids))
}