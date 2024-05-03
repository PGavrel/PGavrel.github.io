<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Email configuration
$to = "pierre.gavrel.pro@gmail.com"; // Change this to your email address
$subject = "New Contact Form Submission";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Compose email message
$email_message = "Name: $name\n";
$email_message .= "Email: $email\n";
$email_message .= "Message:\n$message\n";

// Send email
if (mail($to, $subject, $email_message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Error sending email.";
}
?>