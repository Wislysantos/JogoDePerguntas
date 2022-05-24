import RespostaModel from "./resposta"

export default class QuestaoModel{

    #id: number
    #enuciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number,enuciado: string, respostas: RespostaModel[], acertou?: boolean ){
        this.#id = id
        this.#enuciado = enuciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(){
        return this.#id
    }

    get enuciado(){
        return this.#enuciado
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#acertou
    }

    get respondida(){  
        /**aqui eu vou percorrer cada uma das reposta e fazer o teste 
         * se exite alguma resposta revelada significa que essa pergunta foi respondida ai eu retorno true se não false
         */
        for(let resposta of this.#respostas){
            if(resposta.revelada) return true
        }
        return false
    }

    //este metodo é para converte o meu objeto para instancia para objeto literal do javaScript
    paraObjeto(){
        return{
            id: this.#id,
            enuciado: this.#enuciado,
            //aqui eu estou pegando cada elemento e convertando para um objeto 
            respostas: this.#respostas.map(resp=>resp.paraObjeto()),
            acertou: this.#acertou,
        }
    }

}