
const transferBody = document.querySelector('#recent-transfer-tbody');
const availBal = document.querySelector('#avail-bal');
const viewBtns = document.querySelectorAll('.view-input-btn');

viewBtns.forEach(viewBtn => {
    console.log('lalala');
    viewBtn.addEventListener('click', () => {
        if (viewBtn.parentElement.querySelector('input').type === 'text') {
            viewBtn.parentElement.querySelector('input').type = 'password';
        } else {
            viewBtn.parentElement.querySelector('input').type = 'text';
        }
        ;
    })
});

let availableBalance = 2400;


availBal.textContent = availableBalance;



let recentTransfers = [
    {
        transaction: 56757522736373765,
        date: `17 Sep, 2021`,
        description: `Purchase`,
        amount: 500,
        balance: 2300
    },
    {
        transaction: 56757522736373765,
        date: `12 Sep, 2021`,
        description: `Po Upgrade`,
        amount: 1200,
        balance: 1200
    },
    {
        transaction: 56757522736373765,
        date: `24 Aug, 2021`,
        description: `Retrieval`,
        amount: 80,
        balance: 900
    }
]

const formatValue = (val) => {
    // let reversed = val.reverse();
    // let valLength = val.length;
    let reversedVal = '';
    if (val.length > 3) {
        for (let i = 3; i < val.length; i += 3) {
            // let part = reversed.splice(2, 0, ',');
            // let part = val.splice(2, 0, ',');
            let part = val.split('').join(',');
            reversedVal += part
            // const element = array[i];        
        }

    } else {
        // reversedVal = reversed;
        reversedVal = val;
    }
    // return reversedVal.reverse();
    return reversedVal;
}

// console.log(formatValue(200));
// console.log(formatValue(200000));
// console.log(formatValue(20000000));


const addTransactions = () => {
    recentTransfers.forEach(transfer => {
        let transferRow = `
        <tr>
            <td class="px-8 py-5 text-sm">${transfer.date}</td>
            <td class="px-8 py-5 text-sm">&dollar;${transfer.amount}</td>
        </tr>       
        `

        transferBody.innerHTML += transferRow;
    });
}


addTransactions();
