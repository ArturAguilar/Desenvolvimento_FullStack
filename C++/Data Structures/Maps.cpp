#include <iostream>
#include <map>

int main() {
    // Declarando e inicializando um map (dicionário) de string para int
    std::map<std::string, int> idades;

    // Adicionando elementos ao map
    idades["Ana"] = 20;
    idades["Bruno"] = 25;
    idades["Carlos"] = 30;

    // Exibindo os elementos do map
    std::cout << "Elementos do map:" << std::endl;
    for (const auto& par : idades) {
        std::cout << par.first << " = " << par.second << std::endl;
    }

    // Acessando um valor pela chave
    std::cout << "Idade de Bruno: " << idades["Bruno"] << std::endl;

    // Verificando se uma chave existe
    if (idades.count("Ana") > 0) {
        std::cout << "Ana está no map." << std::endl;
    }

    // Removendo um elemento
    idades.erase("Carlos");

    std::cout << "Após remover Carlos:" << std::endl;
    for (const auto& par : idades) {
        std::cout << par.first << " = " << par.second << std::endl;
    }

    return 0;
}