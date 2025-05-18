#include <iostream>

int main() {
    bool a = true;
    bool b = false;

    // Operadores lógicos
    bool e_logico = (a && b);   // E lógico (AND)
    bool ou_logico = (a || b);  // OU lógico (OR)
    bool nao_logico = !a;       // NÃO lógico (NOT)

    std::cout << "a && b: " << e_logico << std::endl;
    std::cout << "a || b: " << ou_logico << std::endl;
    std::cout << "!a: " << nao_logico << std::endl;

    return 0;
}