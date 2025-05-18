#include <iostream>

// Classe com encapsulamento
class ContaBancaria {
private:
    double saldo; // atributo privado

public:
    // Construtor
    ContaBancaria(double valorInicial) {
        saldo = valorInicial;
    }

    // Método público para depositar
    void depositar(double valor) {
        saldo += valor;
    }

    // Método público para sacar
    void sacar(double valor) {
        if (valor <= saldo) {
            saldo -= valor;
        } else {
            std::cout << "Saldo insuficiente!" << std::endl;
        }
    }

    // Método público para consultar saldo
    double consultarSaldo() {
        return saldo;
    }
};

int main() {
    ContaBancaria conta(100.0); // saldo inicial

    conta.depositar(50.0);
    conta.sacar(30.0);

    std::cout << "Saldo atual: " << conta.consultarSaldo() << std::endl;

    conta.sacar(150.0); // Tentativa de saque maior que o saldo

    return 0;
}