<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $tel = htmlspecialchars(trim($_POST['tel']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Email to site owner
    $to = "info@forever-rwa.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $tel\nMessage: $message";
    $headers = "From: $email";

    // Send email to the site owner
    if (mail($to, $subject, $body, $headers)) {
        // Thank-you email to sender
        $thank_you_subject = "Thank You for Contacting Us!";
        $thank_you_body = "Hello $name,\n\nThank you for reaching out! We have received your message:\n\n$message\n\nWe will get back to you shortly.\n\nBest Regards,\nForever RWA Team";
        $thank_you_headers = "From: info@forever-rwa.com";

        // Send thank-you email
        mail($email, $thank_you_subject, $thank_you_body, $thank_you_headers);

        // Return success message
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
