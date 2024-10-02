<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files (adjust paths as needed)
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

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

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtpout.secureserver.net'; // GoDaddy SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'info@forever-rwa.com'; // Your GoDaddy email
        $mail->Password = 'FRVR7755123'; // Your GoDaddy email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Set email format to plain text
        $mail->isHTML(false);
        $mail->setFrom('info@forever-rwa.com', 'Forever RWA');
        $mail->addAddress('info@forever-rwa.com'); // Recipient email

        // Email subject and body
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $name\nEmail: $email\nPhone: $tel\nMessage: $message";

        // Send the email to the site owner
        if ($mail->send()) {
            // Send thank-you email to the user
            $mail->clearAddresses();
            $mail->addAddress($email); // User's email
            $mail->Subject = 'Thank You for Contacting Us!';
            $mail->Body = "Hello $name,\n\nThank you for reaching out! We have received your message:\n\n$message\n\nWe will get back to you shortly.\n\nBest Regards,\nForever RWA Team";
            $mail->send();

            // Success message
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
?>
