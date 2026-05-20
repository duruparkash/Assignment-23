const account1 = {
  name: "Duru",
  balance: 5000,
};

const account2 = {
  name: "Huzaifa",
  balance: 8000,
};

const transactionHistory = [];

function showAccounts() {
  document.getElementById("user1").innerHTML =
    `<strong>Name:</strong> ${account1.name} <br>
     <strong>Balance:</strong> Rs. ${account1.balance}`;

  document.getElementById("user2").innerHTML =
    `<strong>Name:</strong> ${account2.name} <br>
     <strong>Balance:</strong> Rs. ${account2.balance}`;
}

function updateHistoryUI() {
  const historyLog = document.getElementById("history-log");

  historyLog.innerHTML = "";

  for (let i = transactionHistory.length - 1; i >= 0; i--) {
    const item = transactionHistory[i];

    const div = document.createElement("div");
    div.className = `log-item ${item.typeClass}`;
    div.innerHTML = item.text;

    historyLog.appendChild(div);
  }
}

showAccounts();

function deposit(amount) {
  if (!amount || amount <= 0) return;

  this.balance += amount;

  transactionHistory.push({
    text: `<strong>${this.name}</strong> deposited Rs. ${amount}. (Current Balance: Rs. ${this.balance})`,
    typeClass: "log-deposit",
  });

  showAccounts();
  updateHistoryUI();
}

function withdraw(amount) {
  if (!amount || amount <= 0) return;

  if (amount > this.balance) {
    transactionHistory.push({
      text: `⚠️ <strong>${this.name}</strong> tried to withdraw Rs. ${amount} but had Insufficient Balance!`,
      typeClass: "log-error",
    });
    updateHistoryUI();
    return;
  }

  this.balance -= amount;

  transactionHistory.push({
    text: `💸 <strong>${this.name}</strong> withdrew Rs. ${amount}. (Remaining Balance: Rs. ${this.balance})`,
    typeClass: "log-withdraw",
  });

  showAccounts();
  updateHistoryUI();
}

const duruWithdraw = withdraw.bind(account1);
