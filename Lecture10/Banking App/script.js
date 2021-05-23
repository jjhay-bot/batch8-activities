// HTML elements
const clientList = document.querySelector('#clientListPage');
const transHistory = document.querySelector('#transHistory');
const createAcc = document.querySelector('#createAccPage');
const logOut = document.querySelector('#welcome');
const navBar = document.querySelector('#navBar');
const buttonAdmin = document.querySelector('.buttonAdmin');
const buttonAddAccount = document.querySelector('.buttonAddAccount');
const transList = document.querySelector('.transList');
const accountNo = document.querySelector('.accountNo');
const accountName = document.querySelector('.accountName');
const profileThis = document.querySelectorAll('.profileThis');

let date = new Date().toLocaleDateString("en-US");
let time = new Date().toLocaleTimeString("en-US");
let firstName = document.getElementById('firstName');
let middleName = document.getElementById('middleName');
let lastName = document.getElementById('lastName');
let balance = document.getElementById('balance');
// let dashboardButtons = document.querySelectorAll('.dashboardButtons');

// Storage
TransactionStorageAll = JSON.parse(localStorage.getItem('TransactionStorageAll')) ? JSON.parse(localStorage.getItem('TransactionStorageAll')): [];
TransactiondepositStorage = JSON.parse(localStorage.getItem('TransactiondepositStorage')) ? JSON.parse(localStorage.getItem('TransactiondepositStorage')): [];
TransactionWithdrawStorage = JSON.parse(localStorage.getItem('TransactionWithdrawStorage')) ? JSON.parse(localStorage.getItem('TransactionWithdrawStorage')): [];
lastClientNumber = JSON.parse(localStorage.getItem('lastClientNumber')) ? JSON.parse(localStorage.getItem('lastClientNumber')): 1000;

class transactionEveryProfile {
    constructor (dateTransact,timeTransact,accountNumber,typeTransact,amountTransact) {
        this.dateTransact = dateTransact;
        this.timeTransact = timeTransact;
        this.accountNumber = accountNumber,
        this.typeTransact = typeTransact;
        this.amountTransact = amountTransact;
    };

    getLocalDataHistorydeposit = () => {
        TransactionStorageAll.push(saveTransactiondeposit);
        console.log(TransactionStorageAll);

        // TransactionStorageAll = JSON.parse(localStorage.getItem('TransactionStorageAll'));
        localStorage.setItem('TransactionStorageAll', JSON.stringify(TransactionStorageAll));

        TransactiondepositStorage.push(saveTransactiondeposit);
        // TransactiondepositStorage = JSON.parse(localStorage.getItem('TransactiondepositStorage'));
        localStorage.setItem('TransactiondepositStorage', JSON.stringify(TransactiondepositStorage));

    };

    getLocalDataHistoryWithdraw = () => {
        TransactionStorageAll.push(saveTransactionWithdraw);
        console.log(TransactionStorageAll);

        // TransactionStorageAll = JSON.parse(localStorage.getItem('TransactionStorageAll'));
        localStorage.setItem('TransactionStorageAll', JSON.stringify(TransactionStorageAll));

        TransactionWithdrawStorage.push(saveTransactionWithdraw);
        // TransactionWithdrawStorage = JSON.parse(localStorage.getItem('TransactionWithdrawStorage'));
        localStorage.setItem('TransactionWithdrawStorage', JSON.stringify(TransactionWithdrawStorage));
    };
}

saveTransactiondeposited = () => {
    saveTransactiondeposit = new transactionEveryProfile (date, time, profileAccNumber.innerHTML,'deposit', getAmountdeposit.value );                                      //add new client
    saveTransactiondeposit.getLocalDataHistorydeposit();
}

saveWithdrawTransaction = () => {
    saveTransactionWithdraw = new transactionEveryProfile (date, time, profileAccNumber.innerHTML,'withdraw', getAmountWithdraw.value );                                      //add new client
    saveTransactionWithdraw.getLocalDataHistoryWithdraw();
}

addClientProfile = () => {  
    // if (this.firstName.value === )
    lastClientNumber += 1;
    console.log(this.firstName,`${this.middleName.charAt(0)}.`, this.lastName, 'profile has been added');
    clientProfileStorage.push(ClientProfileNew);
    localStorage.setItem(lastClientNumber, JSON.stringify(clientProfileStorage[clientProfileStorage.length -1]))
    localStorage.setItem('lastClientNumber', lastClientNumber)
}



//...............................   Retrive local storage data  .............................
getLocalData = () => {

    // save @ "clientProfileStorage"
    clientProfileStorage =  [];

    for (let key = 1001; key < localStorage.length +1000; key++) {

    // for (let i = 0; i < localStorage.length -1; i++) {
    // const key = localStorage.key(i);

    const firstName = localStorage[key];

    let clientProfileStoredObject = JSON.parse(localStorage.getItem(key));
    clientProfileStorage.push(clientProfileStoredObject);

}};

// call this to update "clientProfileStorage"
getLocalData();
//...............................   Retrive local storage data  .............................

transListShown = () => {
    for (let i = 0; i < localStorage.length -1; i++) {
    const key = localStorage.key(i);
    const value = localStorage[key];

    transList.innerHTML += `${key}: ${value}<br />`
    
}};
        



welcome =  () => {
    let adminUser = document.querySelector('#adminUser');
    let adminPassword = document.querySelector('#adminPassword');
        if ( adminUser.value === '1' && adminPassword.value === '1' ) {
                listClient ();
                console.log('welcom Admin');
        }
        else {
            alert ('wrong user / password')
            console.log('wrong user / password');
        } ;
}

welcomePage = () => {
    clientList.style.display = 'none';
    createAcc.style.display = 'none';
    logOut.style.display = 'flex';
    navBar.style.display = 'none';
    transHistory.style.display = 'none';
    console.log('Admin log-out');
}

listClient = () => {
    clientList.style.display = 'grid';
    createAcc.style.display = 'none';
    logOut.style.display = 'none';
    navBar.style.display = 'flex';
    transHistory.style.display = 'none';
    accListShown()
    
}

newClient = () => {
    clientList.style.display = 'none';
    createAcc.style.display = 'block';
    logOut.style.display = 'none';
    navBar.style.display = 'flex';
    transHistory.style.display = 'none';
}

transactionHistory = () => {
    clientList.style.display = 'none';
    createAcc.style.display = 'none';
    logOut.style.display = 'none';
    navBar.style.display = 'flex';
    transHistory.style.display = 'block';
}

// clearInputs 
clearInput = () => {  
    firstName.value = '';
    middleName.value = '';
    lastName.value = '';
    email.value = '';
    contact.value = '';
    birthDate.value = '';
    address.value = '';
    balance.value = '';
}

//------------------------------------------------- Classes  ----------------------------------------------------//

// Blue print (generic)
class ClientProfile {
    constructor (firstName,middleName,lastName,email,contact,birthDate,address,balance) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.contact = contact;
        this.birthDate = birthDate;
        this.address = address;
        this.balance = balance;
    }

    addClientProfile = () => {  
        // if (this.firstName.value === )
        lastClientNumber += 1;
        console.log(this.firstName,`${this.middleName.charAt(0)}.`, this.lastName, 'profile has been added');
        clientProfileStorage.push(ClientProfileNew);
        localStorage.setItem(lastClientNumber, JSON.stringify(clientProfileStorage[clientProfileStorage.length -1]))
        localStorage.setItem('lastClientNumber', lastClientNumber)
    }

    deleteClientProfile = () => {
        let target = document.getElementById('------').value;                                                   //balikan target id
        localStorage.removeItem(target);
    }

}

add = () => {
    ClientProfileNew = new ClientProfile (firstName.value, middleName.value, lastName.value, email.value, contact.value, birthDate.value, address.value, balance.value);                                      //add new client

    ClientProfileNew.addClientProfile();                                                                  // call method
    clearInput();
}

// Event listerner
buttonAddAccount.addEventListener('click', add);

transListShown = () => {
    for (let i = 0; i < localStorage.length -1; i++) {
    const key = localStorage.key(i);
    const firstName = localStorage[key];
    transList.innerHTML += `${key}<br />`, `${firstName}`;
}};

accListShown = () => {
    accountNo.innerHTML = ""
    for (let i = 0; i < clientProfileStorage.length; i++) {
        // let key = localStorage.key(i);
        accountNo.innerHTML +=  `<li class="main" >
                                    <div>1000-${[i + 1001]}</div>
                                    <div class="profileThis ${i + 1001}" onclick="profileDetails(event)">${clientProfileStorage[i].firstName} ${clientProfileStorage[i].middleName.charAt(0)}. ${clientProfileStorage[i].lastName}</div>
                                    <div>₱ ${clientProfileStorage[i].balance}</div>
                                </li>`;
        // console.log(clientProfileStoredObject[i].firstName)
    }
}

// see client profile details
function profileDetails(event) { 
    let target = event.target.classList[1] -1001;
    console.log(`AC#: 1000-${target+1001}`);
    document.querySelector('#profileOf').style.display = 'flex';
    document.querySelector('#profileAccNumber').innerHTML = `${target + 1001}`;
    document.querySelector('#profileName').innerHTML = `Name : ${clientProfileStorage[target].firstName} ${clientProfileStorage[target].middleName.charAt(0)}. ${clientProfileStorage[target].lastName} `;
    document.querySelector('#profileBalance').innerHTML = `Balance : ₱ ${clientProfileStorage[target].balance}`;

}

exitProfile = () => {
    document.querySelector('#profileOf').style.display = 'none';
    console.log('closed client profile');
    accListShown();
}

document.querySelector('#exitDashboard').addEventListener('click',exitProfile);

exitReceiverProfile = () => {
    document.querySelector('#transferDashboardPage').style.display = 'none';
    console.log('closed transfer dashboard');
    accListShown();
}

document.querySelector('#exitReceiverDashboard').addEventListener('click',exitReceiverProfile);

exitHistoryTransaction = () => {
    document.querySelector('#historyDashboardPage').style.display = 'none';
    console.log('closed history dashboard');
    accListShown();
}

document.querySelector('#exitReceiverDashboard').addEventListener('click',exitHistoryTransaction);




buttonAdmin.addEventListener('click', welcome);


//...............................   Dashboard button  .............................
withdrawClick = () => { 
    document.querySelector('#withdraw-dashboard').style.backgroundColor = 'blueviolet';
    document.querySelector('#withdraw-dashboard').style.borderRadius = '5% / 50%';
    document.querySelector('#deposit-dashboard').style.backgroundColor = 'transparent';
    document.querySelector('#transfer-dashboard').style.backgroundColor = 'transparent';
    document.querySelector('#depositDashboard').style.display = 'none';
    document.querySelector('#withdrawDashboard').style.display = 'flex';

}
depositClick = () => { 
    document.querySelector('#deposit-dashboard').style.backgroundColor = 'blueviolet';
    document.querySelector('#deposit-dashboard').style.borderRadius = '5% / 50%';
    document.querySelector('#withdraw-dashboard').style.backgroundColor = 'transparent';
    document.querySelector('#transfer-dashboard').style.backgroundColor = 'transparent';
    document.querySelector('#depositDashboard').style.display = 'flex';
    document.querySelector('#withdrawDashboard').style.display = 'none';
}
transferClick = () => { 
    document.querySelector('#transferDashboardPage').style.display = 'flex';
    console.log('test')
}

getDeposit = () => {
    let amount = (getAmountdeposit.value);
    let target = Number(profileAccNumber.innerText) -1000;
    console.log(target)
    if ( amount === "" ) {
        console.log('please write amount to add transaction');
        return alert('please write amount to add transaction');
    }
    else {
        console.log(`successfully deposit ₱ ${amount}`);
        alert(`successfully deposit ₱ ${amount}`);
        let newbalance = Number(clientProfileStorage[target -1 ].balance) + Number(amount);
        clientProfileStorage[target - 1].balance = newbalance;
        document.querySelector('#profileBalance').innerHTML = `Balance : ₱ ${newbalance}`;
        localStorage.setItem(profileAccNumber.innerText, JSON.stringify(clientProfileStorage[target - 1]));
        saveTransactiondeposited();
        getAmountdeposit.value = "";
        return;
    }
}

getWithdraw = () => {
    let amount = (getAmountWithdraw.value);
    let target = Number(profileAccNumber.innerText) -1000;
    if ( amount === "" ) {
        console.log('please write amount to add transaction');
        return alert('please write amount to add transaction');
    }
    else {
        console.log(`successfully withdraw ₱ ${amount}`);
        alert(`successfully withdraw ₱ ${amount}`);
        let newbalance = Number(clientProfileStorage[target -1 ].balance) - Number(amount);
        clientProfileStorage[target - 1].balance = newbalance;
        document.querySelector('#profileBalance').innerHTML = `Balance : ₱ ${newbalance}`;
        localStorage.setItem(profileAccNumber.innerText, JSON.stringify(clientProfileStorage[target - 1]))
        saveWithdrawTransaction();
        getAmountWithdraw.value = "";
        return;
    }
}

getTransfer = () => {
    let amount = (getAmountTransfer.value);
    let target = Number(profileAccNumber.innerText) -1000;
    let receiverAcc = (receiverAccountNumber.value) - 10001001;
    // let receiver = (receiverName.value);

    if ( amount === "" ) {
        console.log('please write amount to add transaction');
        return alert('please write amount to add transaction');
    }
    else {
        console.log(`successfully transfer ₱ ${amount} to Account Number:1000-${receiverAcc +1001}`);
        alert(`successfully transfer ₱ ${amount} to Account Number:1000-${receiverAcc +1001}`);
        getAmountTransfer.value = "";
        let newbalance = Number(clientProfileStorage[target -1 ].balance) - Number(amount);
        clientProfileStorage[target - 1].balance = newbalance;
        document.querySelector('#profileBalance').innerHTML = `Balance : ₱ ${newbalance}`;
        localStorage.setItem(profileAccNumber.innerText, JSON.stringify(clientProfileStorage[target - 1]))
        let newReceiverbalance= Number(clientProfileStorage[receiverAcc].balance) + Number(amount);
        clientProfileStorage[receiverAcc].balance = newReceiverbalance;
        localStorage.setItem(receiverAcc+1001, JSON.stringify(clientProfileStorage[receiverAcc]));       
        return;
    }
}

getReceiver = () => {
    let receiverAcc = (receiverAccountNumber.value) - 10001001;
    let targetReceiver = receiverAcc


    if (receiverAcc >= 0 && receiverAcc <= clientProfileStorage.length) {         
        document.getElementById('receiverName').value = `${clientProfileStorage[receiverAcc].firstName} ${clientProfileStorage[receiverAcc].middleName.charAt(0)}. ${clientProfileStorage[receiverAcc].lastName} `
        console.log(`${clientProfileStorage[receiverAcc].firstName} ${clientProfileStorage[receiverAcc].middleName.charAt(0)}. ${clientProfileStorage[receiverAcc].lastName} `)
    }
    else {
        return document.getElementById('receiverName').value = "";
    }
}


shownHistoryAll = () => {
    document.querySelector('#historyDashboardPage').style.display = 'flex';
    historyListSection.innerHTML = "";
    let TransactionStorage = TransactionStorageAll;
    let accNumber = profileAccNumber.innerHTML;

    for (let i = 0; i < TransactionStorage.length; i++) {
        let target = Number(TransactionStorage[i].accountNumber);
        if (target == accNumber) {
            historyListSection.innerHTML += `<div class="historyList" >
                                                <div class="historyListDiv"> ${TransactionStorage[i].dateTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].timeTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].typeTransact}</div>
                                                <div class="historyListDiv"> ₱ ${TransactionStorage[i].amountTransact} </div>
                                            </div>`;
        }
        else {
            console.log('no trans?')
            historyListSection.innerHTML = "";
        }

    }
}

shownHistoryWithdraw = () => {
    document.querySelector('#historyDashboardPage').style.display = 'flex';
    historyListSection.innerHTML = "";
    let TransactionStorage = TransactionWithdrawStorage;
    let accNumber = profileAccNumber.innerHTML;

    for (let i = 0; i < TransactionStorage.length; i++) {
        let target = Number(TransactionStorage[i].accountNumber);
        console.log(target == accNumber)
        if (target == accNumber) {
            historyListSection.innerHTML += `<div class="historyList" >
                                                <div class="historyListDiv"> ${TransactionStorage[i].dateTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].timeTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].typeTransact}</div>
                                                <div class="historyListDiv"> ₱ ${TransactionStorage[i].amountTransact} </div>
                                            </div>`;
        }
        else {
            console.log('no trans?')
            historyListSection.innerHTML = "";
        }
    }
}

shownHistoryDeposite = () => {
    document.querySelector('#historyDashboardPage').style.display = 'flex';
    historyListSection.innerHTML = "";
    let TransactionStorage = TransactiondepositStorage;
    let accNumber = profileAccNumber.innerHTML;

    for (let i = 0; i < TransactionStorage.length; i++) {
        let target = Number(TransactionStorage[i].accountNumber);

        if (target == accNumber) {
            historyListSection.innerHTML += `<div class="historyList" >
                                                <div class="historyListDiv"> ${TransactionStorage[i].dateTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].timeTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].typeTransact}</div>
                                                <div class="historyListDiv"> ₱ ${TransactionStorage[i].amountTransact} </div>
                                            </div>`;
        }
        else {
            console.log('no trans?')
            historyListSection.innerHTML = "";
        }
    }
}