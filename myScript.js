//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

//utilizzo il ciclo per poter stampare i numeri da  1 a 100
for (var i = 1; i <= 100; i++) {

    //creo la variabile multiplo3 dicendo che l'indice i che contiente i numeri da 1 fino a 100 può avere numeri multipli di 3? se si allora è === 0 perchè è true (=== uguaglianza di valore e di tipo)
    var multiplo3 = i % 3 === 0;

    //creo la variabile multiplo5:  può avere numeri multipli di 5 ? se si allora è === 0 perchè è true
    var multiplo5 = i % 5 === 0;

    var risultato = "";

    //condizione da soddisfare 
    //se entrambi gli operandi (multiplo3 e multiplo5) sono veri allora entro nella condizione risultato = "numero multiplo di 3 e di 5"
    if (multiplo3 && multiplo5) {

        risultato = "numero multiplo di 3 e di 5"
        console.log("FizzBuzz " + risultato);
        
    } else if (multiplo3) {
        //altrimenti se c'è multiplo3 allora ho risultato = "numero multiplo di 3"
        risultato = "numero multiplo di 3"
        console.log("Fizz " + risultato);
    } else if (multiplo5) {
        //altrimenti se c'è multiplo5 allora ho risultato = "numero multiplo di 5"
        risultato = "numero multiplo di 5"
        console.log("Buzz " + risultato);
    } else {
        console.log(i)
    }
}




