/**
 * resposta
 */
 export default class RespostaModel{
    #valor: string
    #certa: boolean
    // é para mostrar se ele acertou ou se ele errou. "então ele vai revelar a resposta se esta certa ou errada "
    #revelada : boolean

    // revelada fica false para não mostrar qual esta certa ou errada 
    constructor(valor: string, certa: boolean, revelada = false){
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    get valor(){
        return this.#valor
    }

    get certa(){
        return this.#certa
    }

    get revelada(){
        return this.#revelada
    }

}