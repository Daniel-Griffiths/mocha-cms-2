<?php
/*	
|--------------------------------------------------------------------------	
| Users Class
|--------------------------------------------------------------------------
|
| ...
|
*/

class Users {

	private $usersDirectory = __DIR__.'/../../content/user/accounts/';
	public  $error = null;

	/*	
	|--------------------------------------------------------------------------	
	| Create New User
	|--------------------------------------------------------------------------	
	*/

	public function createUser($newUser)
	{
		/* create the new user */
		if($this->userExists($newUser['username']) == false){
			$newUser['password'] = password_hash($newUser['password'], PASSWORD_DEFAULT); //encrypt the password
			file_put_contents($this->usersDirectory . $newUser['username'] . '.json', json_encode($newUser,JSON_PRETTY_PRINT));
			return true;
		}

		$this->setError('Error - A user with this name already exists');
		return $this->getError();
	}

	/*	
	|--------------------------------------------------------------------------	
	| Check if a user already exists
	|--------------------------------------------------------------------------	
	*/

	private function userExists($user)
	{
		if(file_exists($this->usersDirectory . $user . '.json')){
			return true;
		}

		return false;
	}

	/*	
	|--------------------------------------------------------------------------	
	| Validate Username
	|--------------------------------------------------------------------------	
	|
	| Ensure that the username only has alphanumeric characers
	|
	*/

	private function usernameValid($username)
	{
		return ctype_alnum($username);
	}

	/*	
	|--------------------------------------------------------------------------	
	| Validate Password
	|--------------------------------------------------------------------------	
	|
	| Ensures that the password does not contain any weird tags
	|
	*/

	private function passwordValid($password)
	{
		if($password == strip_tags($password)){
			return true;
		}

		return false;
	}

	/*	
	|--------------------------------------------------------------------------	
	| Get Profile Image
	|--------------------------------------------------------------------------	
	*/

	public static function getProfileImage($username)
	{

		$profileImage = 'content/user/accounts/profile-images/' . $username . '.jpg';

		if(file_exists($profileImage)){
			return $profileImage;
		}

		return 'content/user/accounts/profile-images/default.jpg';
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

