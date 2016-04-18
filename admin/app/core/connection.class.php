<?php
/*	
|--------------------------------------------------------------------------	
| Connection Class
|--------------------------------------------------------------------------
|
| This is the main connection class that allows the system to connect to
| the database. This can be disabled in the configuration file if 
| database functionality is not needed.
|
*/

class Connection 
{
	public $mysqli;

	public function __construct($database) 
	{
		extract($database);
		
		if($enabled == true){
			$this->mysqli = new mysqli(   
			  $host,      
			  $username,  
			  $password, 
			  $database   
			);
		}
	}
}

