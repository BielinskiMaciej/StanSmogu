<?php
/*
	   $message2="Użytkownik ".$idu." napisał nową wiadomość:\n".$message;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($message2,70,"\n");

// send email
mail("stansmogu@gmail.com","cat","msg");
	*/   
	$sender = 'X.com.pl';
$recipient = 'X@gmail.com';

$subject = "php mail test";
$message = "php test message";
$headers = 'From:' . $sender;

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}   
	   
?>