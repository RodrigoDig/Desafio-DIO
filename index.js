function rankeada(vitorias, derrotas){
    let saldo = vitorias - derrotas;

    if(saldo <= 10){
        console.log("O Herói tem saldo de " + saldo + " está no nivel Ferro");
    }
    else if(saldo >= 11 && saldo <=20){
        console.log("O Herói tem saldo de " + saldo + " está no nivel Bronze");
    }
    else if(saldo >= 21 && saldo <= 50){
        console.log("O Herói tem saldo de " + saldo + " está no nivel Prata");
    }
    else if(saldo >= 22 && saldo <= 80){
        console.log("O Herói tem saldo de " + saldo + " está no nivel Ouro");
    }
    else if(saldo >= 81 && saldo <= 90){
        console.log("O Herói tem saldo de " + saldo + " está no nivel Diamante");
    }
    else if(saldo >= 91 && saldo <= 100){
        console.log("O Herói tem saldo de " + saldo + " está no nivel Lendário");
    }
    else if(saldo >= 101){
        console.log("O Herói tem saldo de " + saldo + " está no nivel Imortal");
    }
    else{
        throw new Error("Saldo inválido")
    }
}

let heroi = rankeada(130, 10);
console.log(heroi);