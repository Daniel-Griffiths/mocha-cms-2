<?php
/* display all php errors */
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
date_default_timezone_set('Europe/London');

/* include core functionality */
require __DIR__.'/admin/app/core/plugins.class.php';
require __DIR__.'/admin/app/core/view.class.php';

echo View::Serve($_SERVER['REQUEST_URI'],'default');