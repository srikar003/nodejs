readValuesSync = () => {
    let amount, coins;
    const readlineSync = require('readline-sync');
    amount = readlineSync.question('What is the total amount? ');
    coins = readlineSync.question('What are the coins? ');
    console.log(coinChange(JSON.parse(amount), JSON.parse(coins)));
}

readValuesAsync = async () => {
    let amount1, coins1;
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    amount1 = await new Promise((resolve, reject) => {
        rl.question('What is the total amount? ', (amt) => {
            console.log('Your gave Total amount as :', amt);
            resolve(amt);
        });
    });

    coins1 = await new Promise((resolve, reject) => {
        rl.question('What are the coins? ', (cns) => {
            console.log('Your gave coins list as :', cns);
            rl.close();
            resolve(cns);
        });
    });
    console.log(coinChange(JSON.parse(amount1), JSON.parse(coins1)));
}



coinChange = (amount, coins) => {
    let combinations = new Array(amount + 1).fill(0);
    combinations[0] = 1;
    coins.forEach(coinValue => {
        for (let i = 1; i < combinations.length; i++) {
            if (i >= coinValue) {
                combinations[i] += combinations[i - coinValue];
                console.log(...combinations);
            }
        }
        console.log('\n');
    });
    return combinations[amount];
}
readValuesAsync();
// readValuesSync();