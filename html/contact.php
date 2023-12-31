<?php
$messageSent = false;
$errorMessage = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Checking For reCAPTCHA
    $captcha = $_POST['g-recaptcha-response'] ?? '';
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LftAdUaAAAAAIte8m8B3YNRwbygHrnFiTf0vFN2&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']);

    // if (!$captcha || !json_decode($response)->success) {
    //     $errorMessage = "Your CAPTCHA response was wrong.";
    // } else {
        if (empty($_POST["name"]) || empty($_POST["surname"]) || empty($_POST["email"]) || empty($_POST["message"])) {
            $errorMessage = "Fill All Fields.";
        } else {
            $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
            $email = filter_var($email, FILTER_VALIDATE_EMAIL);

            if (!$email) {
                $errorMessage = "Invalid Sender's Email";
            } else {
                $to = 'contact@ellipsys-lab.com';
                $subject = 'Message from website';
                $messageContent = "Nom: " . $_POST['surname'] . "\n" . "Prénom: " . $_POST['name'] . "\n\n" . $_POST['message'];
                $headers = 'From:' . $email . "\r\n";

                if (mail($to, $subject, $messageContent, $headers)) {
                    $messageSent = true;
                } else {
                    $errorMessage = "Failed to send email, try again.";
                }
            }
        }
    // }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="pagestyle" rel="stylesheet" type="text/css" href="../css/styleG.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js"></script>
    <title>Ellipsys - Contact</title>
    <meta name="description" content="Une équipe à votre disposition pour vos projets les plus ambitieux">
    <link rel="canonical" href="https://www.ellipsys-bi.com/contact.php" />
</head>

<body class="ui-light-theme">

    <header>
        <div class="news-container">
            <div class="news-wrapper">
                <span class="news"><a href="html/Contact.html">
                        {openAudit} permet de migrer SAP BO au forfait vers Power BI ou Looker !</a></span>
                <span class="news"><a href="html/Contact.html">
                        Ellipsys est maintenant membre de l'UGAP - les collaborations avec les acteurs publics français
                        sont facilitées.</a></span>
                <span class="news"><a href="html/Contact.html">
                        Ellipsys travaille en collaboration avec Dawizz, un spécialiste Français du Data Catalogue
                    pour une solution de Data / Metadata Management complètement automatisée</a></span>
                
                <!--            <span class="news"><a href="html/Contact.html">-->
                <!--                Autres News en attente</a></span>-->
                <!-- Ajoute autant de news que voulu... mais les DUPLIQUER pour que cela fonctionne-->
                <!--            <span class="news"><a href="html/Contact.html"> -->
                <!--                    Ellipsys exposait au salon Big Data et AI Paris 2023 les 25 et 26 septembre 2023, pour présenter les nouvelles fonctionnalités de {openAudit}. </a></span>-->
                <span class="news"><a href="html/Contact.html">
                        {openAudit} permet de migrer SAP BO au forfait vers Power BI ou Looker !</a></span>
                <span class="news"><a href="html/Contact.html">
                        Ellipsys est maintenant membre de l'UGAP - les collaborations avec les acteurs publics français
                        sont facilitées.</a></span>
                <!--            <span class="news"><a href="html/Contact.html">-->
                <!--                Autres News en attente</a></span>-->
            </div>
        </div>
        <!--        <svg class="mon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" fill="none" width="46px"-->
        <!--             height="39px">-->
        <!--            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"-->
        <!--                  d="M6.22919 19.5C6.22919 18.8269 6.87278 18.2812 7.66669 18.2812H25.3959V20.7188H7.66669C6.87278 20.7188 6.22919 20.1731 6.22919 19.5Z"-->
        <!--                  fill="white" stroke="white" />-->
        <!--            <path-->
        <!--                    d="M25.3959 20.7188V29.25C25.3959 29.743 25.746 30.1873 26.2833 30.376C26.8203 30.5646 27.4387 30.4605 27.8498 30.1119L39.3498 20.3619C39.6195 20.1333 39.7709 19.8232 39.7709 19.5C39.7709 19.1768 39.6195 18.8667 39.3498 18.6383L27.8498 8.88825C27.4387 8.53968 26.8203 8.43542 26.2833 8.62405C25.746 8.8127 25.3959 9.25711 25.3959 9.75003V18.2812V20.7188Z"-->
        <!--                    fill="white" stroke="white" />-->
        <!--        </svg>-->
        <nav id="nav">
            <a href="../index.html" background="transparent">
                <img id="logo_elypsis" src="../images/logotr.png" class="logo" alt="Logo Ellipsys">
            </a>
            <ul class="links">
                <li class="dropdown">
                    <a href="../html/Cartographier.html" >Cartographier<i class="mdi mdi-arrow-down-thick"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="../html/Cartographier.html#dataflows">{oA.Lineage} -</br>DataFlows</a></li>
                        <li><a href="../html/Cartographier.html#dataviz">{oA.Lineage} -</br>DataViz</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="../html/Migrer.html">Migrer<i class="mdi mdi-arrow-down-thick"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="../html/Migrer.html#dataflows">{oA.Reverse} -</br>DataFlows</a></li>
                        <li><a href="../html/Migrer.html#dataviz">{oA.Reverse} -</br>Dataviz</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="../html/Simplifier.html">Simplifier<i class="mdi mdi-arrow-down-thick"></i></a>
                    <ul class="dropdown-content">
                        <li><a href="../html/Simplifier.html#dataflows">{oA.Harmony} -<br>DataFlows</a></li>
                        <li><a href="../html/Simplifier.html#dataviz">{oA.Harmony} -<br>Dataviz</a></li>
                    </ul>
                </li>
                <!-- <li><a href="../html/methodologie.html">Methodologies</a></li> -->
                <li><a href="../html/apropos.html">A PROPOS</a></li>
                <li><a href="../html/contact.php" class="active">CONTACT</a></li>
                <li><a href="../html/blog.html">BLOG</a></li>
            </ul>
            <div id="icons"></div>
        </nav>
    </header>
    
<!--<div class="l-container">-->
<!--    <div class="c-theme-switch" id="js-switch">-->
<!--        <div class="c-theme-switch__toggle"></div>-->
<!--    </div>-->
<!--    <div class="language-switcher">-->
<!--        <a href="#"><img src="../images/french.png" alt="Français"></a>-->
<!--        <a href="Contact_en.html"><img src="../images/english.png" alt="English"></a>-->
<!--    </div>-->
<!--</div>-->
<!-- section contact-->
<div class="contact-container">
    <h1>Contactez-Nous</h1>

    <?php if($messageSent): ?>
        <p>Votre message a été envoyé avec succès !</p>
    <?php else: ?>
        <?php if(!empty($errorMessage)): ?>
            <p class="error-message"><?php echo $errorMessage; ?></p>
        <?php endif; ?>

        <form class="contact-form" method="post">
            <div class="input-field">
                <input type="text" id="surname" name="surname" placeholder="Votre nom" autocomplete="family-name" required>
                <label for="surname">Nom</label>
            </div>
            <div class="input-field">
                <input type="text" id="name" name="name" placeholder="Votre prénom" autocomplete="given-name" required>
                <label for="name">Prénom</label>
            </div>
            <div class="input-field">
                <input type="email" id="email" name="email" placeholder="Adresse e-mail" autocomplete="email" required>
                <label for="email">Email</label>
            </div>
            <div class="input-field">
                <textarea id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
                <label for="message">Message</label>
            </div>
            <button type="submit" class="submit-button"><span>Envoyer</span></button>
        </form>
    <?php endif; ?>
</div>

<footer class="footer">
    <div class="footer-content">
        <div class="contact-info">
            <h3>Contactez-nous</h3>
            <p>contact@ellipsys-lab.com</p>
        </div>

        <div class="address">
            <h3>Adresse</h3>
            <p>29 Route d'Esch</p>
            <p>L-3230 Bettembourg, Luxembourg</p>
        </div>

        <div class="social-icons">
            <h3>Suivez-nous</h3>
            <ul>
                <li><a href="https://www.linkedin.com/company/ellipsys/?viewAsMember=true"><i class="mdi mdi-linkedin"></i></a></li>
                <li><a href="https://twitter.com/ellipsys_BI"><i class="mdi mdi-twitter"></i></a></li>
            </ul>
        </div>
        <div class="footer-nav">
            <h3>Liens</h3>
            <ul>
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="casusages.html">Cas d'usages</a></li>
                <li><a href="apropos.html">À propos</a></li>
                <li><a href="Contact.html">Contact</a></li>
                <!--                    <li><a href="methodologie.html">Méthodologies</a></li>-->
                <li><a href="blog.html">Blog</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p><a href="https://ampleurweb.com/"> © 2023 AmpleurWeb.</a></p>
    </div>
</footer>

<div class="scroll-to-top">
    <a href="#top"><i class="mdi mdi-arrow-up-drop-circle-outline"></i></a>
</div>
</body>
<script src="../js/script.js"></script>
</html>