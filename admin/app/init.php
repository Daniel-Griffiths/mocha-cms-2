<?php
/* display all php errors */
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
date_default_timezone_set('Europe/London');

session_start();

/*
|--------------------------------------------------------------------------
| Auto Initiate
|--------------------------------------------------------------------------
|
| Include all the core components that are required for the application
| to run correctly.
|
*/

require __DIR__.'/core/config.php';

spl_autoload_register(function($class){
    require __DIR__.'/core/' . $class . '.class.php';
});

$authentication = new Authentication;