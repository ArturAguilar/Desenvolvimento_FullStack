programa {
   funcao inicio() {
    
        /*Crie um programa que leia um texto e passe um texto para uma função imprimir o texto na tela.*/

        cadeia texto

        escreva("Digite um texto: ")
        leia(texto)

        escrevaTexto(texto)
   }

   funcao escrevaTexto(cadeia texto) {
        escreva("O texto digitado foi: ", texto, "\n")
   }
}