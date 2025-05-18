#include <iostream>

// Classe base
class Animal {
protected:
    std::string nome;

public:
    void setNome(std::string n) {
        nome = n;
    }
    void mostrarNome() {
        std::cout << "Nome: " << nome << std::endl;
    }
};

// Classe derivada com acesso protegido
class Gato : public Animal {
public:
    void miar() {
        std::cout << nome << " está miando." << std::endl; // Pode acessar nome porque é protected
    }
};

int main() {
    Gato meuGato;
    meuGato.setNome("Mimi");
    meuGato.mostrarNome();
    meuGato.miar();

    // meuGato.nome = "Outro"; // Erro: nome é protected, não pode ser acessado diretamente fora da classe

    return 0;
}