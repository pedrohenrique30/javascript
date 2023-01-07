// let e const
// let e const são locais so existem onde foram criadas

console.log("Existe y antes do bloco? " + y); // vai da erro pq y so existe no escopo local

{
    let y = 1; // y existe apenas aqui dentro
    console.log(y) // vai da certo
}

console.log("Existe y depois do bloco? " + y); // vai da erro pq y so existe no escopo local

let x = 0;

{
    {
        {
            {
                {
                    x = 1;
                }
            }
        }
    }
}

console.log(x); // vai da certo, isso ocorre porque let e pode ser reatribuida diferente de const