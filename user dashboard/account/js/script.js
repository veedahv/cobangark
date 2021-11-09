
const cryptoForm = document.querySelector('#crypto-form');
const bankForm = document.querySelector('#bank-form');
const withdrawalSelect = document.querySelector('#withdrawal-options');
const withdrawalTBodies = document.querySelectorAll('.withdrawal-options-tbody');


withdrawalSelect.addEventListener('change', () => {
    if (withdrawalSelect.value === 'Bank Account') {
        bankForm.style.display = 'inline-block'
        cryptoForm.style.display = 'none'
    } else if (withdrawalSelect.value === 'Crypto Account') {
        bankForm.style.display = 'none';
        cryptoForm.style.display = 'inline-block';
    } else {
        bankForm.style.display = 'none';
        cryptoForm.style.display = 'none';        
    }
})

let withdrawalOpts = [
    {
        type: 'Bank Account',
        details: {
            bankName: 'GTBank',
            acctNo: '013334578',
            acctName: 'OGOLUWA SIMON OJEWALE'
        }
    },
    {
        type: 'Crypto Account',
        details: {
            cryptoType: 'Bitcoin',
            address: '013334578013334578',
        }
    },
    {
        type: 'Bank Account',
        details: {
            bankName: 'GTBank',
            acctNo: '013334578',
            acctName: 'OGOLUWA SIMON OJEWALE'
        }
    }
]


const withdrawalTable = () => {
    withdrawalTBodies.forEach(withdrawalTBody => {        
        withdrawalOpts.forEach(opt => {
            let optRow;
            if (opt.type === 'Bank Account') {
                optRow = `
                <tr>
                    <td class="px-3.5 py-3 text-sm">${opt.type}</td>
                    <td class="px-3.5 py-3 text-sm">
                        <span class="block">${opt.details.bankName}</span>
                        <span class="block">${opt.details.acctNo}</span>
                    </td>
                    <td class="px-3.5 py-3 text-sm">
                        <div class="flex items-center gap-2">
                            <button class="btn">
                                <img src="../assets/images/Table-Edit.png"
                                    alt="edit image" class="edit-img w-5">
                            </button>
                            <button class="btn">
                                <img src="../assets/images/trash-2.png"
                                    alt="delete image" class="del-img w-5">
                            </button>
                        </div>
                    </td>
                </tr>
                `
            } else if (opt.type === 'Crypto Account') {
                optRow = `
                <tr>
                    <td class="px-3.5 py-3 text-sm">${opt.type}</td>
                    <td class="px-3.5 py-3 text-sm">${opt.details.address}</td>
                    <td class="px-3.5 py-3 text-sm">
                        <div class="flex items-center gap-2">
                            <button class="btn">
                                <img src="../assets/images/Table-Edit.png"
                                    alt="edit image" class="edit-img w-5">
                            </button>
                            <button class="btn">
                                <img src="../assets/images/trash-2.png"
                                    alt="delete image" class="del-img w-5">
                            </button>
                        </div>
                    </td>
                </tr>
                `
            }
            withdrawalTBody.innerHTML += optRow;
        });
    });
}

withdrawalTable();
