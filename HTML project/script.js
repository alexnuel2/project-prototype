// Existing functions...

function register() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const registrationDate = document.getElementById('registrationDate').value;

    // For demonstration purposes, we'll just log the values
    console.log(`Registered - Full Name: ${fullName}, Date of Birth: ${dob}, Registration Date: ${registrationDate}`);
    
    // You would typically send this data to your server here
    alert('Registration successful!');
}

function login() {
    const loginFullName = document.getElementById('loginFullName').value;

    // For demonstration purposes, we'll just log the values
    console.log(`Login - Full Name: ${loginFullName}`);
    
    // You would typically send this data to your server here
    alert('Login successful!');
}

function makePayment() {
    // For demonstration purposes, we'll just show an alert
    alert('Please contact us at 9133779532 to make a payment via Moniepoint.');
    
    // In a real implementation, this might redirect to a payment page or show further instructions
}
function register() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const registrationDate = document.getElementById('registrationDate').value;

    // Simulate registration logic
    console.log(`Registered - Full Name: ${fullName}, Date of Birth: ${dob}, Registration Date: ${registrationDate}`);
    
    // Redirect to the dashboard
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'flex';
}

function sellCoin() {
    alert('Sell Coin functionality');
    // Implement sell coin logic here
}

function buyCoin() {
    alert('Buy Coin functionality');
    // Implement buy coin logic here
}

function checkCoinRate() {
    alert('Check Coin Rate functionality');
    // Implement check coin rate logic here
}

function viewTransactionHistory() {
    alert('View Transaction History functionality');
    // Implement transaction history logic here
}
function register() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const registrationDate = document.getElementById('registrationDate').value;

    // Simulate registration logic
    console.log(`Registered - Full Name: ${fullName}, Date of Birth: ${dob}, Registration Date: ${registrationDate}`);
    
    // Redirect to the dashboard
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'flex';
}

function sellCoin() {
    alert('Sell Coin functionality');
    // Implement sell coin logic here
}

function buyCoin() {
    alert('Buy Coin functionality');
    // Implement buy coin logic here
}

function checkCoinRate() {
    alert('Check Coin Rate functionality');
    // Implement check coin rate logic here
}

function viewTransactionHistory() {
    alert('View Transaction History functionality');
    // Implement transaction history logic here
}
function register() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const registrationDate = document.getElementById('registrationDate').value;

    // Simulate registration logic
    console.log(`Registered - Full Name: ${fullName}, Date of Birth: ${dob}, Registration Date: ${registrationDate}`);
    
    // Redirect to the dashboard
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'flex';
}

function sellCoin() {
    alert('Sell Coin functionality');
    // Implement sell coin logic here
}

function buyCoin() {
    document.getElementById('payment-modal').style.display = 'block';
}

function checkCoinRate() {
    alert('Check Coin Rate functionality');
    // Implement check coin rate logic here
}

function viewTransactionHistory() {
    alert('View Transaction History functionality');
    // Implement transaction history logic here
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function openPaymentGateway(gateway) {
    closeModal();
    // Replace this with actual payment integration code
    alert(`Redirecting to ${gateway} payment gateway...`);
    // Example integration might include opening a new window or redirecting
}
function register() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const registrationDate = document.getElementById('registrationDate').value;

    // Simulate registration logic
    console.log(`Registered - Full Name: ${fullName}, Date of Birth: ${dob}, Registration Date: ${registrationDate}`);
    
    // Redirect to the dashboard
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'flex';
}

function sellCoin() {
    alert('Sell Coin functionality');
    // Implement sell coin logic here
}

function buyCoin() {
    document.getElementById('payment-modal').style.display = 'block';
}

function checkCoinRate() {
    alert('Check Coin Rate functionality');
    // Implement check coin rate logic here
}

function viewTransactionHistory() {
    window.location.href = 'transaction-history.html';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function openPaymentGateway(gateway) {
    closeModal();
    // Replace this with actual payment integration code
    alert(`Redirecting to ${gateway} payment gateway...`);
    // Example integration might include opening a new window or redirecting
}
function register() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const registrationDate = document.getElementById('registrationDate').value;

    // Simulate registration logic
    console.log(`Registered - Full Name: ${fullName}, Date of Birth: ${dob}, Registration Date: ${registrationDate}`);
    
    // Redirect to the dashboard
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'flex';
}

function sellCoin() {
    alert('Sell Coin functionality');
    // Implement sell coin logic here
}

function buyCoin() {
    document.getElementById('payment-modal').style.display = 'block';
}

function checkCoinRate() {
    alert('Check Coin Rate functionality');
    // Implement check coin rate logic here
}

function exchangeCoins() {
    alert('Coin Exchange functionality');
    // Implement coin exchange logic here
}

function scrollToTransactionHistory() {
    document.getElementById('transaction-history-section').style.display = 'block';
    document.getElementById('transaction-history-section').scrollIntoView({ behavior: 'smooth' });
}

function saveTransactionToDevice() {
    const data = `
        Date, Coin Name, Description, Amount, Rate
        2024-09-01, Bitcoin, Buy Coin, $100, $50,000
        2024-09-05, Ethereum, Sell Coin, $50, $3,000
        2024-09-10, Litecoin, Buy Coin, $200, $200
    `;

    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transaction_history.csv';
    a.click();
    URL.revokeObjectURL(url);
}

function callHelpService() {
    // Replace with actual customer service phone number
    const phoneNumber = '9133779532';
    window.location.href = `tel:${phoneNumber}`;
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function openPaymentGateway(gateway) {
    closeModal();
    // Replace this with actual payment integration code
    alert(`Redirecting to ${gateway} payment gateway...`);
    // Example integration might include opening a new window or redirecting
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('addTransactionButton');
    const tableBody = document.querySelector('#transactionTable tbody');
    
    button.addEventListener('click', () => {
        const date = document.getElementById('transactionDate').value;
        const time = document.getElementById('transactionTime').value;
        const coin = document.getElementById('coinTransacted').value;
        const rate = parseFloat(document.getElementById('coinRate').value).toFixed(2);

        if (date && time && coin && !isNaN(rate)) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${time}</td>
                <td>${coin}</td>
                <td>${rate}</td>
            `;
            tableBody.appendChild(newRow);

            // Clear form fields
            document.getElementById('transactionForm').reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('addTransactionButton');
    const helpButton = document.getElementById('helpButton');
    const tableBody = document.querySelector('#transactionTable tbody');
    
    button.addEventListener('click', () => {
        const date = document.getElementById('transactionDate').value;
        const time = document.getElementById('transactionTime').value;
        const coin = document.getElementById('coinTransacted').value;
        const rate = parseFloat(document.getElementById('coinRate').value).toFixed(2);

        if (date && time && coin && !isNaN(rate)) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${time}</td>
                <td>${coin}</td>
                <td>${rate}</td>
            `;
            tableBody.appendChild(newRow);

            // Clear form fields
            document.getElementById('transactionForm').reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    helpButton.addEventListener('click', () => {
        const phoneNumber = '09133779532';
        const smsUrl = `sms:${phoneNumber}?body=I need help with the transaction table.`;
        window.location.href = smsUrl;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const helpCenterButton = document.getElementById('helpCenterButton');
    
    helpCenterButton.addEventListener('click', () => {
        const phoneNumber = '09133779532'; // Phone number to call
        const phoneCallUrl = `tel:${phoneNumber}`;
        window.location.href = phoneCallUrl;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addTransactionButton = document.getElementById('addTransactionButton');
    const saveModal = document.getElementById('saveModal');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');
    const closeModalButton = document.querySelector('.close');
    const tableBody = document.querySelector('#transactionTable tbody');

    addTransactionButton.addEventListener('click', () => {
        // Show the modal
        saveModal.style.display = 'block';
    });

    saveButton.addEventListener('click', () => {
        // Get form values
        const date = document.getElementById('transactionDate').value;
        const time = document.getElementById('transactionTime').value;
        const coin = document.getElementById('coinTransacted').value;
        const rate = parseFloat(document.getElementById('coinRate').value).toFixed(2);

        if (date && time && coin && !isNaN(rate)) {
            // Add transaction to table
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${time}</td>
                <td>${coin}</td>
                <td>${rate}</td>
            `;
            tableBody.appendChild(newRow);

            // Clear form fields
            document.getElementById('transactionForm').reset();
        } else {
            alert('Please fill out all fields correctly.');
        }

        // Hide the modal
        saveModal.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        // Hide the modal
        saveModal.style.display = 'none';
    });

    closeModalButton.addEventListener('click', () => {
        // Hide the modal
        saveModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === saveModal) {
            // Hide the modal if clicking outside of it
            saveModal.style.display = 'none';
        }
    });

    document.getElementById('helpButton').addEventListener('click', () => {
        const phoneNumber = '09133779532';
        const smsUrl = `sms:${phoneNumber}?body=I need help with the Help Center.`;
        window.location.href = smsUrl;
    });
});
function copyReferralLink() {
    const referralLink = document.getElementById("referralLink");
    referralLink.select();
    document.execCommand("copy");

    alert("Referral link copied to clipboard!");
}
document.addEventListener('DOMContentLoaded', function() {
    // Sample data - in a real scenario, you would fetch this data from a server
    const withdrawals = [
        { date: '2024-09-01', amountUSD: 100, amountNGN: 76000 },
        { date: '2024-09-05', amountUSD: 200, amountNGN: 152000 },
        { date: '2024-09-10', amountUSD: 50, amountNGN: 38000 }
    ];

    const tableBody = document.querySelector('#withdrawalTable tbody');

    withdrawals.forEach(withdrawal => {
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = withdrawal.date;
        row.appendChild(dateCell);

        const amountUSCell = document.createElement('td');
        amountUSCell.textContent = `$${withdrawal.amountUSD.toFixed(2)}`;
        row.appendChild(amountUSCell);

        const amountNGNCell = document.createElement('td');
        amountNGNCell.textContent = `₦${withdrawal.amountNGN.toLocaleString()}`;
        row.appendChild(amountNGNCell);

        tableBody.appendChild(row);
    });
});
