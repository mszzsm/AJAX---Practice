$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);


if ($email == '' || $phone == '' || $name == '');
    echo 'Set all fields';
elseif( !filter_var ($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Put correct email adress'
}
else {
    file_put_contents('app.txt', "$dt $email $phone $name \n", FILE_APPEND);
    echo '1';
}