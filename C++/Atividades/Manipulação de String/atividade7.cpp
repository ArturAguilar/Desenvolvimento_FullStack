#include <stdio.h>
#include <string.h>

/*Em uma escola, foram organizadas equipes de alunos para um concurso de conhecimento. Cada equipe é representada por uma matriz de strings contendo o nome dos alunos. Considere a seguinte matriz de strings representando três equipes:

Equipe 1: {"João", "Maria", "Pedro", "Ana"},
Equipe 2: {"Carlos", "Laura", "Lucas", "Mariana"},
Equipe 3: {"Paulo", "Julia", "Fernanda", "Rodrigo"}

Exiba na tela todos os alunos da segunda coluna.*/

int main()
{
    char equipe1[4][20] = {"João", "Maria", "Pedro", "Ana"};
    char equipe2[4][20] = {"Carlos", "Laura", "Lucas", "Mariana"};
    char equipe3[4][20] = {"Paulo", "Julia", "Fernanda", "Rodrigo"};
    int i;
    
    printf("Alunos da segunda coluna:\n");
    printf("Equipe 1: %s\n", equipe1[1]);
    printf("Equipe 2: %s\n", equipe2[1]);
    printf("Equipe 3: %s\n", equipe3[1]);

    printf("\nOs alunos das equipes são:\n");

    // Exibe os alunos da segunda coluna
    for (i = 0; i < 4; i++)
    {
        printf("Aluno da equipe %d: %s\n", i + 1, equipe1[i]);
        printf("Aluno da equipe %d: %s\n", i + 1, equipe2[i]);
        printf("Aluno da equipe %d: %s\n", i + 1, equipe3[i]);
    }

    return 0;
}
