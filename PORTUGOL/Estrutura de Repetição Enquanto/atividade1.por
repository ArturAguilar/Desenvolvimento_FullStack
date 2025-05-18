programa {
   funcao inicio() {
    
    /*Crie um programa que leia um número inteiro digitado pelo usuário. Escreva na tela todos os números começando pelo 0 até o número digitado pelo usuário.*/
    
        inteiro i, n
        i = 0

        escreva("Digite um número: ")
        leia(n)

        enquanto (i <= n) {
            escreva("\nO número é: ", i)
            i++
        }
   }
}