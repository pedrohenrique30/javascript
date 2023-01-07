// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let index = 0; index <= 10; index++) {
    console.log(index)
}

for(let i = 0; i <= 10; i++) {
    if(i == 5) {
        continue;
    }

    console.log(i)
}

for(let x = 0; x <= 10; x++) {
    if(x == 5) {
        break;
    }

    console.log(x)
}