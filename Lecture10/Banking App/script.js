// -------------------------------HTML elements--------------------------------------------------------------
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

//------------------------------- Storage---------------------------------------------------------------------
TransactionStorageAll = JSON.parse(localStorage.getItem('TransactionStorageAll')) ? JSON.parse(localStorage.getItem('TransactionStorageAll')): [];
TransactiondepositStorage = JSON.parse(localStorage.getItem('TransactiondepositStorage')) ? JSON.parse(localStorage.getItem('TransactiondepositStorage')): [];
TransactionWithdrawStorage = JSON.parse(localStorage.getItem('TransactionWithdrawStorage')) ? JSON.parse(localStorage.getItem('TransactionWithdrawStorage')): [];
lastClientNumber = JSON.parse(localStorage.getItem('lastClientNumber')) ? JSON.parse(localStorage.getItem('lastClientNumber')): 1000;

// Blue print (generic Transaction History from localstorage)
class transactionEveryProfile {
    constructor (dateTransact,timeTransact,accountNumber,typeTransact,amountTransact,accNameTransact) {
        this.dateTransact = dateTransact;
        this.timeTransact = timeTransact;
        this.accountNumber = accountNumber,
        this.typeTransact = typeTransact;
        this.amountTransact = amountTransact;
        this.accNameTransact = accNameTransact;
    };
    getLocalDataHistorydeposit = () => {
        TransactionStorageAll.push(saveTransactiondeposit);
        console.log(TransactionStorageAll);
        localStorage.setItem('TransactionStorageAll', JSON.stringify(TransactionStorageAll));
        TransactiondepositStorage.push(saveTransactiondeposit);
        localStorage.setItem('TransactiondepositStorage', JSON.stringify(TransactiondepositStorage));
    };
    getLocalDataHistoryWithdraw = () => {
        TransactionStorageAll.push(saveTransactionWithdraw);
        console.log(TransactionStorageAll);
        localStorage.setItem('TransactionStorageAll', JSON.stringify(TransactionStorageAll));
        TransactionWithdrawStorage.push(saveTransactionWithdraw);
        localStorage.setItem('TransactionWithdrawStorage', JSON.stringify(TransactionWithdrawStorage));
    };
}

//------------------------------------------------- Classes  ----------------------------------------
// Blue print (generic client profile)
class ClientProfile {
    constructor (firstName,middleName,lastName,email,contact,birthDate,address,balance,accNumber) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.contact = contact;
        this.birthDate = birthDate;
        this.address = address;
        this.balance = balance;
        this.accNumber = accNumber;
    };
    addClientProfile = () => {  
        // if (this.firstName.value === )
        lastClientNumber += 1;
        console.log(this.firstName,`${this.middleName.charAt(0)}.`, this.lastName, 'profile has been added', this.accNumber);
        clientProfileStorage.push(ClientProfileNew);
        localStorage.setItem(lastClientNumber, JSON.stringify(clientProfileStorage[clientProfileStorage.length -1]));
        localStorage.setItem('lastClientNumber', lastClientNumber);
    };
}

add = () => {
    ClientProfileNew = new ClientProfile (firstName.value, middleName.value, lastName.value, email.value, contact.value, birthDate.value, address.value, balance.value, lastClientNumber);                                      //add new client
    ClientProfileNew.addClientProfile();                                                                  // call method
    clearInput();
}

// -------------------------------Client Profiles, balance and transaction history----------------------------
addClientProfile = () => {  
    // if (this.firstName.value === )
    lastClientNumber += 1;
    console.log(this.firstName,`${this.middleName.charAt(0)}.`, this.lastName, 'profile has been added');
    clientProfileStorage.push(ClientProfileNew);
    localStorage.setItem(lastClientNumber, JSON.stringify(clientProfileStorage[clientProfileStorage.length -1]))
    localStorage.setItem('lastClientNumber', lastClientNumber);
    let saveTransactiondeposit = new transactionEveryProfile (date, time, 1000-lastClientNumber,'deposit', balance.value); 
    TransactiondepositStorage.push(saveTransactiondeposit);
    localStorage.setItem('TransactiondepositStorage', JSON.stringify(TransactiondepositStorage));
}

// -------------------------------Save transactions-----------------------------------------------------------
saveTransactiondeposited = () => {
    saveTransactiondeposit = new transactionEveryProfile (date, time, profileAccNumber.innerHTML,'deposit', getAmountdeposit.value, profileName.innerHTML );                                      //add new client
    saveTransactiondeposit.getLocalDataHistorydeposit();
}
saveWithdrawTransaction = () => {
    saveTransactionWithdraw = new transactionEveryProfile (date, time, profileAccNumber.innerHTML,'withdraw', getAmountWithdraw.value, profileName.innerHTML );                                      //add new client
    saveTransactionWithdraw.getLocalDataHistoryWithdraw();
}
saveTransferTransaction = () => {
    saveTransactionWithdraw = new transactionEveryProfile (date, time, profileAccNumber.innerHTML,'withdraw', getAmountTransfer.value, profileName.innerHTML );                                      //add new client
    saveTransactionWithdraw.getLocalDataHistoryWithdraw();
}



//------------------------------- Retrive local storage data -------------------------------
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
getLocalData();

//------------------------------- Admin Log-In page  ----------------------------------------
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
buttonAdmin.addEventListener('click', welcome);

//  ------->>>>>>>>>>>>>>>>     DASHBOARD PAGES BUTTOON     <<<<<<<<<<<<<<<<<<<<<--------
//------------------------------- Navigation bar ( ON / OFF ) --------------------------------------
welcomePage = () => {
    clientList.style.display = 'none';
    createAcc.style.display = 'none';
    logOut.style.display = 'flex';
    navBar.style.display = 'none';
    transHistory.style.display = 'none';
    console.log('Admin log-out');
}
welcomePage()

listClient = () => {
    clientList.style.display = 'grid';
    createAcc.style.display = 'none';
    logOut.style.display = 'none';
    navBar.style.display = 'flex';
    transHistory.style.display = 'none';
    accListShown();
}
newClient = () => {
    clientList.style.display = 'none';
    createAcc.style.display = 'block';
    logOut.style.display = 'none';
    navBar.style.display = 'flex';
    transHistory.style.display = 'none';
}

//-------------------------------clearInputs @ Create account --------------------------------------
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

//-------------------------------Button function to ADD ACCOUNT -----------------------------------------
add = () => {
    // if (firstName.value === '' || middleName.value === '' || lastName.value === '' || email.value === '' || contact.value === '' || birthDate.value === '' || address.value == '' || balance.value === "") {
    //     return alert ('please fill out the form and submit again');
    // }
    // if (balance.value < 5000) {
    //     return alert ('minimum initial deposite of ₱5000 is required');
    // }
    ClientProfileNew = new ClientProfile (firstName.value, middleName.value, lastName.value, email.value, contact.value, birthDate.value, address.value, balance.value, lastClientNumber);                                      //add new client
    ClientProfileNew.addClientProfile();                                                                  // call method
    clearInput();
}

//-------------------------------Button function to ADD ACCOUNT -----------------------------------------
//                                  GOT PROBLEM ON VALIDATION  :((((
// add = () => {
//     if (firstName.value === '' || middleName.value === '' || lastName.value === '' || email.value === '' || contact.value === '' || birthDate.value === '' || address.value == '' || balance.value === "") {
//         alert ('please fill out the form and submit again');
//     }
//     else {
//         for (let i = 0; i < clientProfileStorage.length; i++) {
//             if (clientProfileStorage[i].firstName === firstName.value && clientProfileStorage[i].middleName === middleName.value) {                
//                 return console.log('Account Name already exit');
//             }
//             else {
//                 if (balance.value < 5000) {
//                     return alert ('minimum initial deposite of ₱5000 is required');
//                 }
//                 else {
//                     ClientProfileNew = new ClientProfile (firstName.value, middleName.value, lastName.value, email.value, contact.value, birthDate.value, address.value, balance.value, lastClientNumber);                                      //add new client
//                     ClientProfileNew.addClientProfile();                                                                  // call method
//                     clearInput();
//                 }
//             }
//         }
//     }
// }

buttonAddAccount.addEventListener('click', add);

//----------------------------------- FUNCTIONS-----------------------------------------------//
//-------------------------------  Show ACCOUNT LIST FORM  ------------------------------------------
accListShown = () => {
    accountNo.innerHTML = "";
    for (let i = 0; i < clientProfileStorage.length; i++) {
        // let key = localStorage.key(i);
        accountNo.innerHTML +=  `<li class="main" >
                                    <div>1000-${[i + 1001]}</div>
                                    <div class="profileThis ${i + 1001}" onclick="profileDetails(event)">${clientProfileStorage[i].firstName} ${clientProfileStorage[i].middleName.charAt(0)}. ${clientProfileStorage[i].lastName}</div>
                                    <div>₱ ${clientProfileStorage[i].balance}</div>
                                </li>`;
    }
}

//---------------==------------- Show CLIENT PROFILE DATA  -------------------------------------------
function profileDetails(event) { 
    let target = event.target.classList[1] -1001;
    console.log(`AC#: 1000-${target+1001}`);
    document.querySelector('#profileOf').style.display = 'flex';
    document.querySelector('#historyDashboardPage').style.display = 'none';
    document.querySelector('#profileAccNumber').innerHTML = `${target + 1001}`;
    document.querySelector('#profileName').innerHTML = `${clientProfileStorage[target].firstName} ${clientProfileStorage[target].middleName.charAt(0)}. ${clientProfileStorage[target].lastName} `;
    document.querySelector('#profileBalance').innerHTML = `${clientProfileStorage[target].balance}`;
}

//---------------------------- CLOSE PROFILE DASHBOARD  -------------------------------------------
exitProfile = () => {
    document.querySelector('#profileOf').style.display = 'none';
    console.log('closed client profile');
    accListShown();
}
document.querySelector('#exitDashboard').addEventListener('click',exitProfile);

//---------------------------- CLOSE TRANSFER DASHBOARD  -------------------------------------------
exitReceiverProfile = () => {
    document.querySelector('#transferDashboardPage').style.display = 'none';
    console.log('closed transfer dashboard');
    accListShown();
}
document.querySelector('#exitReceiverDashboard').addEventListener('click',exitReceiverProfile);

//------------------------- CLOSE TRANSACTION HISTORY DASHBOARD  -----------------------------------
exitHistoryTransaction = () => {
    document.querySelector('#historyDashboardPage').style.display = 'none';
    console.log('closed history dashboard');
    accListShown();
}
document.querySelector('#exitReceiverDashboard').addEventListener('click',exitHistoryTransaction);

//............................... TRANSACTION  DASHBOARD BUTTON  .............................
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

//----------------------- FUNCTION TO GET DATA EACH TRANSACTION -----------------------------------
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
        document.querySelector('#profileBalance').innerHTML = `${newbalance}`;
        localStorage.setItem(profileAccNumber.innerText, JSON.stringify(clientProfileStorage[target - 1]));
        saveTransactiondeposited();
        getAmountdeposit.value = "";
        return;
    }
}
getWithdraw = () => {
    let amount = (getAmountWithdraw.value);
    let target = Number(profileAccNumber.innerText) -1000;
    if (Number(amount) > Number(profileBalance.innerHTML)) {
        return alert ('insufficient balance');
    }
    if ( amount === "" ) {
        console.log('please write amount to add transaction');
        return alert('please write amount to add transaction');
    }
    else {
        console.log(`successfully withdraw ₱ ${amount}`);
        alert(`successfully withdraw ₱ ${amount}`);
        let newbalance = Number(clientProfileStorage[target -1 ].balance) - Number(amount);
        clientProfileStorage[target - 1].balance = newbalance;
        document.querySelector('#profileBalance').innerHTML = `${newbalance}`;
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
    accountNo.innerHTML = "";
    searchThis = document.querySelector('.search').value

    for (let i = 0; i < clientProfileStorage.length; i++) {
        if (Number(clientProfileStorage[1].accNumber) === receiverAccountNumber.value - 10000000) {
            console.log(Number(clientProfileStorage[i].accNumber) === receiverAccountNumber.value- 10000000)
        }
        else {
            return alert (`Receiver's Account Number does not exist`);
        }
    }
    if (Number(amount) > Number(profileBalance.innerHTML)) {
        return alert ('insufficient balance');
    }
    if ( amount === "" ) {
        console.log('please write amount to add transaction');
        return alert('please write amount to add transaction');
    }
    else {
        console.log(`successfully transfer ₱ ${amount} to Account Number:1000-${receiverAcc +1001}`);
        alert(`successfully transfer ₱ ${amount} to Account Number:1000-${receiverAcc +1001}`);
        let newbalance = Number(clientProfileStorage[target -1 ].balance) - Number(amount);
        clientProfileStorage[target - 1].balance = newbalance;
        document.querySelector('#profileBalance').innerHTML = `${newbalance}`;
        localStorage.setItem(profileAccNumber.innerText, JSON.stringify(clientProfileStorage[target - 1]))
        let newReceiverbalance= Number(clientProfileStorage[receiverAcc].balance) + Number(amount);
        clientProfileStorage[receiverAcc].balance = newReceiverbalance;
        localStorage.setItem(receiverAcc+1001, JSON.stringify(clientProfileStorage[receiverAcc]));
        saveTransferTransaction();
        receiverName.value = "";
        receiverAccountNumber.value = "";
        getAmountTransfer.value = "";
        return;
    }
}
getReceiver = () => {
    let receiverAcc = (receiverAccountNumber.value) - 10001001;
    if (receiverAcc >= 0 && receiverAcc <= clientProfileStorage.length) {
        document.getElementById('receiverName').value = `${clientProfileStorage[receiverAcc].firstName} ${clientProfileStorage[receiverAcc].middleName.charAt(0)}. ${clientProfileStorage[receiverAcc].lastName}`
        console.log(`${clientProfileStorage[receiverAcc].firstName} ${clientProfileStorage[receiverAcc].middleName.charAt(0)}. ${clientProfileStorage[receiverAcc].lastName} `)
    }
    else {
        return document.getElementById('receiverName').value = "";
    }
}

//----------------------------- SHOW TRANSACTION HISTORY (MAIN NAVIGATION) ------------------------------------------
transactionHistory = () => {
    let transList2 = document.querySelector('.transList2');
    transList2.innerHTML = "";
    document.querySelector('#historyDashboardPage').style.display = 'flex';
    document.querySelector('#createAccPage').style.display = 'none';
    document.querySelector('#clientListPage').style.display = 'none';
    document.querySelector('#transHistory').style.display = 'flex';
    let TransactionStorage = TransactionStorageAll;
    let accNumber = profileAccNumber.innerHTML;
    for (let i = 0; i < TransactionStorage.length; i++) {
        // let target = Number(TransactionStorage[i].accountNumber);
        let name = TransactionStorage[i].firstName;
        transList2.innerHTML += `<li class="transListContainer" >
                                                <div class="transListDiv"> 1000-${TransactionStorage[i].accountNumber} </div>
                                                <div class="transListDiv"> ${TransactionStorage[i].accNameTransact} </div>
                                                <div class="transListDiv"> ${TransactionStorage[i].typeTransact}</div>
                                                <div class="transListDiv"> ₱ ${TransactionStorage[i].amountTransact} </div>
                                                <div class="transListDiv"> ₱ ${TransactionStorage[i].dateTransact} </div>
                                                <div class="transListDiv"> ${TransactionStorage[i].timeTransact} </div>
                                            </li>`;
    }
}

//----------------------------- SHOW TRANSACTION HISTORY  INDIVIDUAL ( ALL )  ------------------------------------------
shownHistoryAll = () => {
    document.querySelector('#historyDashboardPage').style.display = 'flex';
    let TransactionStorage = TransactionStorageAll;
    let accNumber = profileAccNumber.innerHTML;
    for (let i = 0; i < TransactionStorage.length; i++) {
        let target = Number(TransactionStorage[i].accountNumber);
        if (target == accNumber) {
            historyListSection.innerHTML += `<li class="historyList" >
                                                <div class="historyListDiv"> ${TransactionStorage[i].dateTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].timeTransact} </div>
                                                <div class="historyListDiv"> ${TransactionStorage[i].typeTransact}</div>
                                                <div class="historyListDiv"> ₱ ${TransactionStorage[i].amountTransact} </div>
                                            </li>`;
        }
        else {
            historyListSection.innerHTML = "";
        }
    }
}

//----------------------------- SHOW TRANSACTION HISTORY  INDIVIDUAL ( WITHDRAW )  ------------------------------------------
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
            historyListSection.innerHTML = "";
        }
    }
}

//----------------------------- SHOW TRANSACTION HISTORY  INDIVIDUAL ( DEPOSIT )  ------------------------------------------
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

//----------------------------- SHOW ACCOUNT (MAIN NAVIGATION)  ------------------------------------------
searchAccount = () => {
    accountNo.innerHTML = "";
    searchThis = document.querySelector('.search').value
    for (let i = 0; i < clientProfileStorage.length; i++) {
        let xx =clientProfileStorage[i].firstName;
        let target = xx.charAt(0);
        let target1 = xx.charAt(0) + xx.charAt(1);
        let target2 = xx.charAt(0) + xx.charAt(1) + xx.charAt(2);
        let target3 = xx.charAt(0) + xx.charAt(1) + xx.charAt(2) + xx.charAt(3);
        if (searchThis === '') {
            listClient();
        }
        if (searchThis == target || searchThis == target1 || searchThis == target2 || searchThis == target3) {
            accountNo.innerHTML +=  `<li class="main" >
                <div>1000-${[clientProfileStorage[i].accNumber + 1]}</div>
                <div class="profileThis ${i + 1001}" onclick="profileDetails(event)">${clientProfileStorage[i].firstName} ${clientProfileStorage[i].middleName.charAt(0)}. ${clientProfileStorage[i].lastName}</div>
                <div>₱ ${clientProfileStorage[i].balance}</div>
            </li>`;
            console.log( searchThis == target)
        }
        else {
            return;
        }
    }
}
accListShown();
