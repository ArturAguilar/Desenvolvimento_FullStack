programa {
    real numero, soma
    inteiro quantidade

    funcao inicio() {

    /*Crie um programa leia vários números. A lista de números termina com o número 9999. Ao final, mostre a média de todos os números digitados (com exceção do 9999). Utilize o faca enquanto.*/
    
        soma = 0
        quantidade = 0

        faca {
            escreva("Digite um número (9999 para parar): ")
            leia(numero)

            se (numero != 9999) {
                soma = soma + numero
                quantidade++
            }
        } enquanto (numero != 9999)

        se (quantidade > 0) {
            escreva("A média dos números digitados é: ", soma / quantidade)
        } senao {
            escreva("Nenhum número válido foi digitado.")
        }
    }
}
