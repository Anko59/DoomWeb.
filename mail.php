<?php
    if( isset($_POST['content']) && isset($_POST['nom']) && isset($_POST['mail']) ){
    	$content = $_POST['content'];
        $nom = $_POST['nom'];
        $mail = $_POST['mail'];
        $message = $nom.$mail.'\n'.$content;
        mail('jeancollette61@yahoo.fr', 'Customer contact', $message);
    }

?>
