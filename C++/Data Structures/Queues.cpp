#include <iostream>
#include <queue>

int main() {
    // Declarando uma fila de inteiros
    std::queue<int> fila;

    // Adicionando elementos na fila (push)
    fila.push(10);
    fila.push(20);
    fila.push(30);

    // Exibindo o elemento da frente da fila
    std::cout << "Frente da fila: " << fila.front() << std::endl;

    // Removendo elementos da fila (pop)
    fila.pop();
    std::cout << "Nova frente após pop: " << fila.front() << std::endl;

    // Tamanho da fila
    std::cout << "Tamanho da fila: " << fila.size() << std::endl;

    // Esvaziando a fila
    while (!fila.empty()) {
        std::cout << "Removendo: " << fila.front() << std::endl;
        fila.pop();
    }

    return 0;
}