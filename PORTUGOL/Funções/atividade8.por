programa {
   funcao inicio() {
    
        /*Crie um programa que possua 3 funções (além da inicio). O programa deve ler o nome, sobrenome e a idade do usuário. 
        Cada função ficará responsável por cada leitura. Ao final, imprima uma mensagem como demonstrado no exemplo:
        “Seja bem vindo, Nícollas Cretton 22”*/

        cadeia nome = leNome()
        cadeia sobrenome = leSobrenome()
        inteiro idade = leIdade()

        escreva("Seja bem vindo, ", nome, " ", sobrenome, " ", idade)
   }

   funcao cadeia leNome() {
        cadeia nome
        escreva("Digite seu nome: ")
        leia(nome)
        retorne nome
   }

   funcao cadeia leSobrenome() {
        cadeia sobrenome
        escreva("Digite seu sobrenome: ")
        leia(sobrenome)
        retorne sobrenome
   }

   funcao inteiro leIdade() {
        inteiro idade
        escreva("Digite sua idade: ")
        leia(idade)
        retorne idade
   }
}