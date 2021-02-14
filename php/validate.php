<?php 

if (!$_POST) {
  return;
}

$user_agent = $_SERVER['HTTP_USER_AGENT'];

$city = null;
$city = $_POST['data_city']; 

if($city === null) {
  return;
}

$computer = $_POST['data_computers'];
$servers = $_POST['data_servers'];
$offices = $_POST['data_offices'];
$budget = $_POST['data_budget'];
$whatsapp = $_POST['data_whatsapp'];
$viber = $_POST['data_viber'];
$telegram = $_POST['data_telegram'];
$sms = $_POST['data_sms'];
$email = $_POST['data_email'];
$phone = $_POST['data_phone'];

$theme = 'Квиз: Заявка на бесплатный выезд';
$theme_1 = 'Квиз:';

$subject = 'Content-Type: text/html; charset=utf-8';

//$subject_2 = 'multipart/form-data;charset=UTF-8';

/* $subject_1 = 'Content-type: text/html;charset=utf-8' . "\r\n" .
'From: gdi@bypro.by' . "\r\n" .
'Reply-To: gdi@bypro.by';
*/


function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}

function check_length($value = "", $min, $max) {
    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
    return !$result;
}
    
// Надежда fwdbrbg30mh2agc48ckoo4gw8gcw@bypro.bitrix24.by

// Мой fwdbrbg30mh2agc48ckoo4gw8gcw@bypro.bitrix24.by

// Дима fwd4vhypizvnj0ggw88ockskokkg@bypro.bitrix24.by

//$send_1 = mail("tdm@bypro.by", 'Это тест на русском', 'Это тест на русском', $subject);


// robotbitrix@bypro.by

$send_1 = mail("robotbitrix@bypro.by", $theme_1, 'Компьютеры: '.$computer."\r\n".'Серверы: '.$servers."\r\n"
              .'Офисы: '.$offices."\r\n".'Бюджет: '.$budget. ' бел.руб.'."\r\n".'Регион: '.$city."\r\n".'Whatsapp: '.$whatsapp
              ."\r\n".'Viber: '.$viber."\r\n".'Telegram: '.$telegram."\r\n".'SMS: '.$sms."\r\n".'Email: '.$email
              ."\r\n".'Телефон: '.$phone, $subject); 


// office@bypro.by

$send_2 = mail("office@bypro.by", $theme, 'Компьютеры: '.$computer."\r\n".'Серверы: '.$servers."\r\n"
              .'Офисы: '.$offices."\r\n".'Бюджет: '.$budget. ' бел.руб.'."\r\n".'Регион: '.$city."\r\n".'Whatsapp: '.$whatsapp
              ."\r\n".'Viber: '.$viber."\r\n".'Telegram: '.$telegram."\r\n".'SMS: '.$sms."\r\n".'Email: '.$email
              ."\r\n".'Телефон: '.$phone, $subject); 


if($send_2 && $send_1) {
    mail("gdi@bypro.by", "Пришёл Квиз", $user_agent);  //"Пришёл Квиз"
} else {
    mail("gdi@bypro.by", "Не пришёл Квиз", "Не пришёл Квиз"); 
}
    
