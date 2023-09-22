<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['family-name'];
    $prenom = $_POST['given-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "malgrasmartinsn@gmail.com";
    $subject = "Nouveau message de $nom $prenom";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    header('Location: thank_you_page.html');
    exit;
}
