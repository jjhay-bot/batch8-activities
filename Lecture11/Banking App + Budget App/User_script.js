// -------------------peso curency format ------------------
const peso = new Intl.NumberFormat('fil-PH', { style: 'currency', currency: 'PHP' });

// --------------------log out User ( @ logo click ) ------------------
logoutUser = () => {
    console.log('test')
    document.getElementById('welcomeUser').style.display = 'flex';
    document.getElementById('changeToAdmin').style.display = 'flex';    
    document.getElementById('budgetMainPage').style.display = 'none';
    document.getElementById('pieChart').style.display = 'none';
    document.getElementById('transactPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'none';
    document.getElementById('budgetNav').style.display = 'none';
}

// --------------------Show sign up form ------------------
signUpPageShown = () => {
    document.getElementById('UserSignUpPage').style.display = 'flex';
    document.getElementById('welcomeUser').style.display = 'none';
    document.getElementById('changeToUser').style.display = 'none'; 
    document.getElementById('changeToAdmin').style.display = 'none';   
};

// --------------------Back button @ (sign up page) ------------------
returnUserMainPage = () => {
    document.getElementById('UserSignUpPage').style.display = 'none';
    document.getElementById('welcomeUser').style.display = 'flex';
    document.getElementById('changeToAdmin').style.display = 'flex';  
};

class addUserProfile {
    constructor (AccCardNumber,passwordUser,rePasswordUser,userName,bdayUser,emailUser,contactNumberUser) {
        this.AccCardNumber = AccCardNumber,
        this.passwordUser = passwordUser;
        this.rePasswordUser = rePasswordUser;
        this.userName = userName;
        this.bdayUser = bdayUser;
        this.emailUser = emailUser;
        this.contactNumberUser = contactNumberUser;
    };
}

// --------------------Clear form (sign up page) ------------------
clearUserForm = () => {
    AccCardNumber.value = "", 
    passwordUser.value = "", 
    AccCardNumber.value = "", 
    passwordUser.value = "", 
    userName.value = "", 
    bdayUser.value = "", 
    emailUser.value = "", 
    contactNumberUser.value = ""
}

// --------------------Add userName with validation (sign up page) ------------------
addToUserStorage = () => {
    let newUserProfile = new addUserProfile (AccCardNumber.value,passwordUser.value,rePasswordUser.value,userName.value,bdayUser.value,emailUser.value,contactNumberUser.value)
    userProfileStorage.push(newUserProfile);
    console.log(userProfileStorage);
    localStorage.setItem('userProfileStorage', JSON.stringify(userProfileStorage));
    userProfileStorage = JSON.parse(localStorage.getItem('userProfileStorage'));
}

// --------------------Log in Page and validation ------------------
function submitUser () {
    let userChart = userName.value
    if (AccCardNumber.value == "", passwordUser.value =="", AccCardNumber.value == "", passwordUser.value =="", userName.value == "", bdayUser.value =="", emailUser.value =="", contactNumberUser.value =="" ) {
        return alert ('please complete customer Infomation before submitting ');
    }
    if (passwordUser.value !== rePasswordUser.value) {
        return alert ('password does not match');
    }
    if (userChart.charAt(5) === "") {
        return alert ('username should have minimum of 6 characters');
    }
    else {
        let filterTarget = clientProfileStorage.filter( ({ accNumber }) => accNumber == AccCardNumber.value );
        if (filterTarget.length === 1) {
            document.getElementById('UserSignUpPage').style.display = 'none';
            document.getElementById('welcomeUser').style.display = 'flex';
            document.getElementById('changeToAdmin').style.display = 'flex';
            addToUserStorage();
            clearUserForm();
            return alert ('registraion successful');
        }
        else {
            alert ('Account number does not exist');
        }
    }

}

// --------------------Welcome page button to show user Main page ------------------
welcomeUserButton =  () => {

    let filterTarget = userProfileStorage.filter( ({ userName }) => userName == userUser.value );
    if (filterTarget.length < 1) {
        return alert('Username does not registered, Sign up first')
    }
    else {
        console.log ('user name exist')
        if (filterTarget[0].passwordUser == userPassword.value &&  filterTarget[0].userName == userUser.value) {
            document.getElementById('welcomeUser').style.display = 'none';
            document.getElementById('changeToAdmin').style.display = 'none';
            document.getElementById('budgetMainPage').style.display = 'flex';
            document.getElementById('budgetNav').style.display = 'flex';
        }
        else {
            alert ('incorrect password');
        }
    }
}

// --------------------show Account page ------------------
accountShown =  () => {
    document.getElementById('budgetMainPage').style.display = 'flex';
    document.getElementById('pieChart').style.display = 'none';
    document.getElementById('transactPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'none';
}

// --------------------show Overview page ------------------
overviewShown =  () => {
    document.getElementById('budgetMainPage').style.display = 'none';
    document.getElementById('pieChart').style.display = 'flex';

    document.getElementById('transactPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'none';
    
    let findAccNumber = userProfileStorage.find( ({ userName }) => userName == userUser.value );
    currentUser = findAccNumber.AccCardNumber;

    let findClientBalance = clientProfileStorage.find( ({ accNumber }) => accNumber == currentUser );
    currentBalance = findClientBalance.balance;
    currentUserBalance.innerHTML = `₱ ${currentBalance}`;
}

// --------------------show Category page ------------------
transactionShown =  () => {
    document.getElementById('budgetMainPage').style.display = 'none';
    document.getElementById('pieChart').style.display = 'none';
    document.getElementById('transactPage').style.display = 'flex';
    document.getElementById('categoryPage').style.display = 'none';
    payeeContainerList.innerHTML = "";
    let findAccNumber = userProfileStorage.find( ({ userName }) => userName == userUser.value );
    currentUser = findAccNumber.AccCardNumber;
    

    let tempoStorage = []
    let list = TransactionWithdrawStorage.filter( ({ accountNumber }) => accountNumber == currentUser );
    for (let i = 0; i < list.length; i++) {
        target = list[i].amountTransact;
        tempoStorage.push(target);
        payeeContainerList.innerHTML += `<div class="payee">Withdraw</div>
                                <div class="payeeAmount">₱ ${list[i].amountTransact}</div>`;
    }
    payeeContainerList2.innerHTML = "";
    for (let i = 0; i < userBudgetTransStorage.length; i++) {
        payeeContainerList2.innerHTML +=    `<li class="payeeRow"> 
                                            <div class="payeeCat">${userBudgetTransStorage[i].PayeeAccName}</div>
                                            <div class="payeeAmountCat">₱ ${userBudgetTransStorage[i].Amount}</div>
                                            </li>`;
    }
    document.getElementById("totalSpending").innerHTML = `₱ ${tempoStorage.reduce(myFunc)}`;
    function myFunc(total, num) {
        return total + num;
    }
}

// --------------------show Category page ------------------
categoryShown =  () => {
    document.getElementById('budgetMainPage').style.display = 'none';
    document.getElementById('pieChart').style.display = 'none';
    document.getElementById('transactPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'flex';

    let filter = userProfileStorage.find( ({ userName }) => userName == userUser.value );
    currentUser = filter.AccCardNumber;
    
    // User payments using (mobile / Budget App)
    let listPayee = userBudgetTransStorage.filter( ({ UserAccNumber }) => UserAccNumber == currentUser );
    payeeCategoryContainer2.innerHTML = "";
    payeeCategoryContainer3.innerHTML = "";


    let tempoStoragePayee = []
    for (let i = 0; i < listPayee.length; i++) {
        target = listPayee[i].PayeeAccName;

        tempoStoragePayee.push(target);
    }
    var mySet = new Set(tempoStoragePayee);
    myArr = [...mySet];
    
    count = 0;
    for (let i = 0; i < myArr.length; i++) {
    payeeCategoryContainer2.innerHTML +=    `<li class="payeeCategoryContainer2Div">
                                            <div class="payeeCat2"> ${myArr[i]} </div>
                                            </li>`

            // add sum each here.............
            let listPayeeAmount = listPayee.filter( ({ PayeeAccName }) => PayeeAccName == myArr[i] );

            let tempStoragePayeeAmount = [];
            for (let i = 0; i < listPayeeAmount.length; i++) {
                let element = Number(listPayeeAmount[i].Amount);
                tempStoragePayeeAmount.push(element);
            }
            function myFunc(total, num) {
                return total + num;
            }
            count += 1;
            // payeeCategoryContainer2DivAmount.innerHTML +=    `<div class="payeeAmountCat"> ₱ ${tempStoragePayeeAmount.reduce(myFunc)} </div>`
            payeeCategoryContainer3.innerHTML +=    `<li class="payeeCategoryContainer2Div">
                                                    <div class="payeeAmountCat3" id="chart${count + 2}"> ₱ ${tempStoragePayeeAmount.reduce(myFunc)} </div>
                                                    </li>`
    }   
    
    let list = TransactionWithdrawStorage.filter( ({ accountNumber }) => accountNumber == currentUser );
    let tempoStorage = []
    for (let i = 0; i < list.length; i++) {
        target = list[i].accNameTransact;
        tempoStorage.push(target);
    }
    var mySet = new Set(tempoStorage);
    myArr = [...mySet];
    for (let i = 0; i < myArr.length; i++) {
        payee = myArr[i].amountTransact;      
        // payeeCategory.innerHTML += `<div> ${myArr[i]} </div>`
    }
    let tempoStorageAmount = []
    for (let i = 0; i < list.length; i++) {
        target = list[i].amountTransact;
        tempoStorageAmount.push(parseInt(target));
    }
    document.getElementById("payeeCategoryContainer").innerHTML = `<div class="payeeCat" > Withdraw </div>
                                                                    <div class="payeeAmountCat" id="chart2"> ₱ ${tempoStorageAmount.reduce(myFunc)} </div>`
    function myFunc(total, num) {
        return total + num;
    }

    // deposite total
    let listdeposit = TransactiondepositStorage.filter( ({ accountNumber }) => accountNumber == currentUser );
    let tempoStorageDeposit = []
    for (let i = 0; i < listdeposit.length; i++) {
        target = listdeposit[i].accNameTransact;
        tempoStorageDeposit.push(target);
    }
    var mySet = new Set(tempoStorageDeposit);
    myArr = [...mySet];
    for (let i = 0; i < myArr.length; i++) {
        payee = myArr[i].amountTransact;      
        // payeeCategory.innerHTML += `<div> ${myArr[i]} </div>`
    }
    let tempoStorageAmountDeposit = []
    for (let i = 0; i < listdeposit.length; i++) {
        target = listdeposit[i].amountTransact;
        tempoStorageAmountDeposit.push(parseInt(target));
    }
    document.getElementById("payeeCategoryContainer1").innerHTML = `<div class="payeeCat" > Deposit </div>
                                                                    <div class="payeeAmountCat" id="chart1"> ₱ ${tempoStorageAmountDeposit.reduce(myFunc)} </div>`
    function myFunc(total, num) {
        return total + num;
    }
}

// --------------------add transaction and payee dashboard--------
addTransactions = () => {
    document.getElementById('payBill').style.display = 'flex';
}
// --------------------exit payee dashboard--------
exitPayeeDashboard = () => {
    document.getElementById('payBill').style.display = 'none';
}

class userPayments {
    //userName , UserAccount number, PayeeAccount Number, PayeeAccountName, Amount
    constructor (userName, UserAccNumber,PayeeAccNumber, PayeeAccName, Amount  ) {
        this.userName = userName,
        this.UserAccNumber = UserAccNumber;
        this.PayeeAccNumber = PayeeAccNumber;
        this.PayeeAccName = PayeeAccName;
        this.Amount = Amount;
    }
}

// --------------------sendpayment button (update balance , payee and spendings)--------
sendPayments = () => {
    let filterTarget = userProfileStorage.find( ({ userName }) => userName == userUser.value );
    if (payeeSelect.value == "1001") {payeeName = 'Savemore'}
    else if (payeeSelect.value == "1002") {payeeName = 'Condo Rent'}
    else if (payeeSelect.value == "1003") {payeeName = 'Manila Water'}
    else if (payeeSelect.value == "1004") {payeeName = 'Meralco'}
    else if (payeeSelect.value == "1005") {payeeName = 'Lazada'}
    else if (payeeSelect.value == "1006") {payeeName = 'Grab'}
    else {return console.log('please select payee')};
    let amount = amountToPayee.value;
    
    let payeeHistoryTempo = new userPayments(userUser.value,filterTarget.AccCardNumber,payeeSelect.value,payeeName,amount);
    userBudgetTransStorage.push(payeeHistoryTempo);
    document.getElementById('payBill').style.display = 'none';
    console.log('added to userBudgetTransStorage:', payeeHistoryTempo);
    localStorage.setItem('userBudgetTransStorage', JSON.stringify(userBudgetTransStorage));

    payeeContainerList2.innerHTML = "";
    for (let i = 0; i < userBudgetTransStorage.length; i++) {
        payeeContainerList2.innerHTML +=    `<li class="payeeRow"> 
                                            <div class="payeeCat">${userBudgetTransStorage[i].PayeeAccName}</div>
                                            <div class="payeeAmountCat">₱ ${userBudgetTransStorage[i].Amount}</div>
                                            </li>`;
    }

    let SenderAccNumber = clientProfileStorage.find( ({ accNumber }) => accNumber == filterTarget.AccCardNumber);
    let newSenderbalance = SenderAccNumber.balance - amount;
    clientProfileStorage[SenderAccNumber.accNumber-1001].balance = newSenderbalance;
    
    let newReceiverbalance= Number(clientProfileStorage[payeeSelect.value - 1001].balance) + Number(amount);
    clientProfileStorage[payeeSelect.value - 1001].balance = newReceiverbalance;

    localStorage.setItem('clientProfileStorage', JSON.stringify(clientProfileStorage));

    console.log(`successfully pay ₱ ${amount}`);
    alert(`successfully pay ₱ ${amount} `);

    amountToPayee.value = "";
    return;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>For pie creation (not working) ------------- 
anychart.onDocumentReady(function() {
    // set the data
    var data = [
        {x: "deposit", value: 20000},
        {x: "withdraw", value: 500},
        {x: "Savemore", value: 500},
        {x: "Condo Rent", value: 500},
        {x: "Grab", value: 250},
    ];

    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Population by Race for the United States: 2010 Census");
  
    // add the data
    chart.data(data);
    
    // sort elements
    chart.sort("desc");  
    
    // set legend position
    chart.legend().position("bottom");
    // set items layout
    chart.legend().itemsLayout("vertical");  
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
});

function convertThis() {
    const char1 = document.getElementById('chart1').innerHTML;
    const char2 = document.getElementById('chart2').innerHTML;
    const char3 = document.getElementById('chart3').innerHTML;
    const char4 = document.getElementById('chart4').innerHTML;

    part1 = Number((char1).slice(2, char1.length));
    part2 = Number((char2).slice(2, char2.length));
    part3 = Number((char3).slice(2, char3.length));
    part4 = Number((char4).slice(2, char4.length));
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>> TEST SAMPLE <<<<<<<<<<<<<<<<<<<<<<<<<
sample = () => {
    clientProfileStorage = [
        {
            "firstName": "savemore",
            "middleName": ".",
            "lastName": "(grocery)",
            "email": "1",
            "contact": "1",
            "birthDate": "1",
            "address": "1",
            "balance": 10000,
            "accNumber": 1001
        },
        {
            "firstName": "condo",
            "middleName": ".",
            "lastName": "(rent)",
            "email": "1",
            "contact": "6666",
            "birthDate": "1",
            "address": "manila",
            "balance": 10000,
            "accNumber": 1002
        },
        {
            "firstName": "manila water",
            "middleName": ".",
            "lastName": "(bill)",
            "email": "1",
            "contact": "5555",
            "birthDate": "1",
            "address": "manila",
            "balance": 10000,
            "accNumber": 1003
        },
        {
            "firstName": "meralco",
            "middleName": ".",
            "lastName": "(bill)",
            "email": "1",
            "contact": "9999",
            "birthDate": "9",
            "address": "ortigas",
            "balance": 10000,
            "accNumber": 1004
        },
        {
            "firstName": "lazada",
            "middleName": ".",
            "lastName": "(shopping)",
            "email": "6",
            "contact": "6666",
            "birthDate": "6",
            "address": "6666",
            "balance": 10000,
            "accNumber": 1005
        },
        {
            "firstName": "grab",
            "middleName": ".",
            "lastName": "(food & delivery)",
            "email": "1",
            "contact": "3333",
            "birthDate": "3",
            "address": "3",
            "balance": 10000,
            "accNumber": 1006
        },
        {
            "firstName": "jhay",
            "middleName": "d",
            "lastName": "alcorcon",
            "email": "5",
            "contact": "099999999",
            "birthDate": "9",
            "address": "9",
            "balance": 19000,
            "accNumber": 1007
        },
        {
            "firstName": "juan",
            "middleName": "Dela",
            "lastName": "cruz",
            "email": "juan@gmail.com",
            "contact": "11111",
            "birthDate": "1",
            "address": "1",
            "balance": 195000,
            "accNumber": 1008
        }
    ]

    lastClientNumber = 1008

    TransactionStorageAll = [
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1001,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "savemore .. (grocery)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1002,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Condo .. (rent)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1003,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Manila Water .. (bill)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1004,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Meralco .. (bill)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1005,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Lazada .. (shopping)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1006,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Grab .. (food & delivery)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1007,
            "typeTransact": "deposit",
            "amountTransact": "20000",
            "accNameTransact": "jhay d. alcorcon"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "5:13:00 PM",
            "accountNumber": 1008,
            "typeTransact": "deposit",
            "amountTransact": "20000",
            "accNameTransact": "juan D. cruz"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "6:50:38 PM",
            "accountNumber": "1007",
            "typeTransact": "withdraw",
            "amountTransact": "500",
            "accNameTransact": "jhay d. alcorcon "
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "6:52:17 PM",
            "accountNumber": "1008",
            "typeTransact": "withdraw",
            "amountTransact": "500",
            "accNameTransact": "juan D. cruz "
        }
    ]

    TransactiondepositStorage = [
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1001,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "savemore .. (grocery)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1002,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Condo .. (rent)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1003,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Manila Water .. (bill)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1004,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Meralco .. (bill)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1005,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Lazada .. (shopping)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1006,
            "typeTransact": "deposit",
            "amountTransact": "10000",
            "accNameTransact": "Grab .. (food & delivery)"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "2:08:54 PM",
            "accountNumber": 1007,
            "typeTransact": "deposit",
            "amountTransact": "20000",
            "accNameTransact": "jhay d. alcorcon"
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "5:13:00 PM",
            "accountNumber": 1008,
            "typeTransact": "deposit",
            "amountTransact": "20000",
            "accNameTransact": "juan D. cruz"
        }
    ]

    TransactionWithdrawStorage = [
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "6:50:38 PM",
            "accountNumber": "1007",
            "typeTransact": "withdraw",
            "amountTransact": "500",
            "accNameTransact": "jhay d. alcorcon "
        },
        {
            "dateTransact": "5/30/2021",
            "timeTransact": "6:52:17 PM",
            "accountNumber": "1008",
            "typeTransact": "withdraw",
            "amountTransact": "500",
            "accNameTransact": "juan D. cruz "
        }
    ]

    userProfileStorage = [
    {
        "AccCardNumber": "1007",
        "passwordUser": "1",
        "rePasswordUser": "1",
        "userName": "juan_02",
        "bdayUser": "02-02-2011",
        "emailUser": "juan@gmail.com",
        "contactNumberUser": "0999999"
    }
    ]

    userBudgetTransStorage = [
    {
        "userName": "juan_02",
        "UserAccNumber": "1007",
        "PayeeAccNumber": "1001",
        "PayeeAccName": "Savemore",
        "Amount": "500"
    }
    ]

    localStorage.setItem('clientProfileStorage', JSON.stringify(clientProfileStorage));
    localStorage.setItem('lastClientNumber', JSON.stringify(lastClientNumber));
    localStorage.setItem('TransactionStorageAll', JSON.stringify(TransactionStorageAll));
    localStorage.setItem('TransactiondepositStorage', JSON.stringify(TransactiondepositStorage));
    localStorage.setItem('TransactionWithdrawStorage', JSON.stringify(TransactionWithdrawStorage));
    localStorage.setItem('userProfileStorage', JSON.stringify(userProfileStorage));
    localStorage.setItem('userBudgetTransStorage', JSON.stringify(userBudgetTransStorage));
}
