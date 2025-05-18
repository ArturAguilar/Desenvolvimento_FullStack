#include <iostream>
#include <ctime>

int main() {
    // Obtendo o tempo atual
    std::time_t tempoAtual = std::time(nullptr);

    // Convertendo para estrutura tm local
    std::tm* tempoLocal = std::localtime(&tempoAtual);

    std::cout << "Data e hora atual: "
              << (tempoLocal->tm_mday) << "/"
              << (tempoLocal->tm_mon + 1) << "/"
              << (tempoLocal->tm_year + 1900) << " - "
              << (tempoLocal->tm_hour) << ":"
              << (tempoLocal->tm_min) << ":"
              << (tempoLocal->tm_sec) << std::endl;

    return 0;
}