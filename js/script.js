var computerMove;
computerMove = 'kamień';
playerMove = 'papier';
printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to' + playerMove + ', to wygrywasz!')

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}        
printMessage('Wylosowana liczba to: ' + randomNumber);
