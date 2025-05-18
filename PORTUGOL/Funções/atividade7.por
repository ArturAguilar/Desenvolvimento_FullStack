programa {

   funcao inicio() {

        inteiro numero
        caracter turnoChar

        /*Crie um programa que leia um número digitado pelo usuário, sendo 1 – manhã, 2 – tarde e 3 – noite.
        Crie uma função que transforme este número em um char para representar o turno e imprima.*/

        escreva("Digite o número do turno (1 - manhã, 2 - tarde, 3 - noite): ")
        leia(numero)

        // Chama a função para converter o número do turno em char
        turnoChar = converteTurno(numero)

        // Verifica se o turno é válido e imprime o resultado
        se (turnoChar != ' ') {
            escreva("O turno correspondente é: ", turnoChar, "\n")
        } senao {
            escreva("Número inválido para o turno.\n")
        }
   }

   funcao caracter converteTurno(inteiro numero) {
        // Converte o número do turno em char
        se (numero == 1) {
            retorne 'M' // Manhã
        } senao se (numero == 2) {
            retorne 'T' // Tarde
        } senao se (numero == 3) {
            retorne 'N' // Noite
        } senao {
            retorne ' ' // Retorna espaço em branco para número inválido
        }
   }
}