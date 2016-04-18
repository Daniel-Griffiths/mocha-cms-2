<?php 
/*	
|--------------------------------------------------------------------------	
| Authentication Class
|--------------------------------------------------------------------------
|
| ...
|
*/

class Authentication
{
    private $username;
    private $password;
    private $mysqli;
    private $usersDirectory = __DIR__.'/../../content/user/accounts/';
	public  $error = null;

	public function __construct()
	{
		global $config;

		if($this->isLoggedIn() == true){
			
		} else if ($_SERVER['REQUEST_URI'] != '/admin/login'){
			Http::redirect('login');
		}

		//$connection = new Connection($config['database']);
		//$this->mysqli = $connection->mysqli;
	}

	/*	
	|--------------------------------------------------------------------------
	| User Login
	|--------------------------------------------------------------------------
	|
	| The users details have been authenticated, sets the users session
	|
	*/

    public function userLogin($username, $password)
    {
		if ($this->checkCredentials($username,$password) == true) {
		   $_SESSION['logged_in']   = true;
		   $_SESSION['username']    = $this->username;
		   $_SESSION['preferences'] = json_decode(file_get_contents($this->usersDirectory . $this->username . '.json'),TRUE);
		   Http::redirect('/admin/pages');
		   return $this->error = null;
		} 
		
		return $this->error = 'Invalid username or password';
	}

	/*	
	|--------------------------------------------------------------------------
	| Check Credentials
	|--------------------------------------------------------------------------
	|
	| See if the users login credientials are valid
	|
	*/

    public function checkCredentials($username, $password)
    {
    	$accounts = glob($this->usersDirectory . '*.json');

		/* loop through all the accounts and check if any details match */
		foreach($accounts as $account){

			/* grab the account json and convert into an array */
			$account = json_decode(file_get_contents($account),TRUE);
			
			/* check if the details match, if so then set our username/password properties */
			if($username == $account['username'] 
				&& password_verify($password, $account['password']) == true){
				$this->username = $username;
				$this->password = $password;
				return true;
			} 
		}

		return false;
    }

	/*	
	|--------------------------------------------------------------------------
	| Check if user is logged in
	|--------------------------------------------------------------------------
	| 
	| Determine if the user is currently logged into the system.
	|
	*/

    public function isLoggedIn()
    {
		if(isset($_SESSION['logged_in'])){
			return true;
		} 

		return false;
    }

	/*	
	|--------------------------------------------------------------------------
	| Set Error
	|--------------------------------------------------------------------------
	*/

    public function setError($error)
    {
    	$this->error = $error;
    }

	/*	
	|--------------------------------------------------------------------------
	| Get Error
	|--------------------------------------------------------------------------
	*/

    public function getError() 
    {
    	return $this->error;
    }
}