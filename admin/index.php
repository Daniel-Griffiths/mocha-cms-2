<?php
/* include core functionality */
require __DIR__.'/app/init.php';

echo View::Get($_SERVER['REQUEST_URI']);