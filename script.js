(function() {
    emailjs.init("fXlnx_fWCFv8Vd6mi"); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Organize data into email format
    const emailContent = `
        Full Name: ${name}
        Email: ${email}
        Phone Number: ${phone}
        Subject: ${subject}
        Message: ${message}
    `;

    // Send email using EmailJS
    emailjs.send('service_hkvwnx2', 'template_5osrz2k', {
        from_name: name,
        from_email: email,
        phone: phone,
        subject: subject,
        message: message,
        email_content: emailContent
    }).then(function() {
        alert('Email sent successfully!');
    }, function(error) {
        alert('Failed to send email. Please try again later.');
    });
});
