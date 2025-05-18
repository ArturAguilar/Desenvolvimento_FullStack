programa
{
    caracter posicao // Declaração da variável posicao

    funcao inicio()
    {

    /*Crie o diagrama e um programa que imite a movimentação do personagem de um jogo. Siga as seguintes instruções:
    
    Se o usuário digitar “w” ou “8”, imprima “cima”.
    Se o usuário digitar “s” ou “2”, imprima “baixo”.
    Se o usuário digitar “a” ou “4”, imprima “esquerda”.
    Se o usuário digitar “d” ou “6”, imprima “direita”.*/
    
        escreva("Digite um comando (w, a, s, d ou 8, 4, 2, 6): ")
        leia(posicao)

        // Verificando o comando digitado
        se (posicao == 'w' ou posicao == '8')
        {
            escreva("cima")
        }
        senao se (posicao == 's' ou posicao == '2')
        {
            escreva("baixo")
        }
        senao se (posicao == 'a' ou posicao == '4')
        {
            escreva("esquerda")
        }
        senao se (posicao == 'd' ou posicao == '6')
        {
            escreva("direita")
        }
        senao
        {
            escreva("comando inválido")
        }
    }
}