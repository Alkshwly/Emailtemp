function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return email + '@example.com';
}

function generateEmail() {
    const email = generateRandomEmail();
    document.getElementById('email').textContent = email;
    startEmailExpiry();
}

function startEmailExpiry() {
    setTimeout(() => {
        alert('Email expired!');
        document.getElementById('email').textContent = 'Your temporary email has expired.';
        document.getElementById('message-list').innerHTML = ''; // Clear messages on expiration
    }, 1800000); // 30 minutes in milliseconds
}

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Add dummy messages
        const messageList = document.getElementById('message-list');
        const li = document.createElement('li');
        li.textContent = 'This is a dummy message';
        messageList.appendChild(li);
    }
}
