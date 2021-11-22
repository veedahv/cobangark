
const transactionCarousel = document.querySelector('#transaction-carousel');
const transactionBody = document.querySelector('#trans-tbody');


let transactions = [
    {
        transaction: 56757522736373765,
        date: `5 minutes ago`,
        description: `Purchase`,
        amount: 500,
        balance: 2300
    },
    {
        transaction: 56757522736373765,
        date: `Sep 20, 2021`,
        description: `Plan Upgrade`,
        amount: 1200,
        balance: 1200
    },
    {
        transaction: 56757522736373765,
        date: `Sep 15, 2021`,
        description: `Withdrawal`,
        amount: 250,
        balance: 300
    },
    {
        transaction: 56757522736373765,
        date: `Sep 12, 2021`,
        description: `Retrieval`,
        amount: 80,
        balance: 900
    },
    {
        transaction: 56757522736373765,
        date: `5 minutes ago`,
        description: `Purchase`,
        amount: 500,
        balance: 2300
    },
    {
        transaction: 56757522736373765,
        date: `Sep 20, 2021`,
        description: `Plan Upgrade`,
        amount: 1200,
        balance: 1200
    },
    {
        transaction: 56757522736373765,
        date: `Sep 15, 2021`,
        description: `Withdrawal`,
        amount: 250,
        balance: 300
    },
    {
        transaction: 56757522736373765,
        date: `Sep 12, 2021`,
        description: `Retrieval`,
        amount: 80,
        balance: 900
    },
    {
        transaction: 56757522736373765,
        date: `Sep 15, 2021`,
        description: `Withdrawal`,
        amount: 250,
        balance: 300
    },
    {
        transaction: 56757522736373765,
        date: `Sep 12, 2021`,
        description: `Retrieval`,
        amount: 80,
        balance: 900
    }
]

const addTransactions = () => {
    let sN = 1;
    transactions.forEach(transaction => {
        let transactionRow = `
        <tr class="transaction-row">
            <td class="px-3.5 py-5 text-sm">${sN}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.transaction}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.date}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.description}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.amount}</td>
            <td class="px-3.5 py-5 text-sm">${transaction.balance}</td>
        </tr>       
        `

        transactionBody.innerHTML += transactionRow;
        sN++;
    });
}


transactionCarousel.scrollLeft = 150;

let pos = { left: 0, x: 0 };

const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.x;
    transactionCarousel.scrollLeft = pos.left - dx;
};

const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    transactionCarousel.style.cursor = 'grab';
    transactionCarousel.style.removeProperty('user-select');
};

const mouseDownHandler = (e) => {
    transactionCarousel.style.cursor = 'grabbing';
    transactionCarousel.style.userSelect = 'none';
    pos = {
        left: transactionCarousel.scrollLeft,
        x: e.clientX
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

transactionCarousel.addEventListener('mousedown', mouseDownHandler);


addTransactions();
