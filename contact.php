<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */

// an email address that will be in the From field of the email.
$from = 'Demo contact form <89lukasz.prokop@gmail.com>';

// an email address that will receive the email with the output of the form
$sendTo = 'Demo contact form <89lukasz.prokop@gmail.com>';

// subject of the email
$subject = 'Nowa wiadomość z formularza kontaktowego!';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); 

// message that will be displayed when everything is OK :)
$okMessage = 'Prośba o kontakt została wysłana. Dziękujemy za wiadomość, skontaktujemy się tak szybko jak to tylko możliwe.';

// If something goes wrong, we will display this message.
$errorMessage = 'Podczas wysyłania formularza wystąpił błąd. Proszę spróbować później!';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try
{

    if(count($_POST) == 0) throw new \Exception('Formularz jest pusty');
            
    $emailText = "Masz nową wiadomość z formularza kontaktowego\n=============================\n";

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    // All the necessary headers for the email.
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'Od: ' . $from,
        'Odpowiedz do: ' . $_POST['email'],
        'Ścieżka powrotna: ' . $from,
    );
    
    // Send email
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
// else just display the message
else {
    echo $responseArray['message'];
}