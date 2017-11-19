<?php
  $name = $_POST['name'] ;
  $email = $_POST['email'] ;
  $details = $_POST['details'];
  $message = $name."\n".$email."\n".$details;//\n
  mail("evanmillersolutions@gmail.com", "Mail", $message);
?>