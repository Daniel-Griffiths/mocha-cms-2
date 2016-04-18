<?php 
  $error = false;
 
	if(isset($_POST['username'],$_POST['password'])){
		$authentication = new authentication(); 
		$error = $authentication->userLogin($_POST['username'],$_POST['password']);
	}
?> <!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Mocha CMS</title><link href="assets/css/main.css" rel="stylesheet"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"></head><body> </body><div class="login-box"><form method="post" class="login-box__inner"><input type="text" name="username" placeholder="Username" required="true" class="login-box__field"><input type="password" name="password" placeholder="Password" required="true" class="login-box__field"><button class="login-box__btn"><i class="fa fa-lock"></i> Login</button></form><?php if($error != false): ?><p class="login-box__error">	
<i class="fa fa-exclamation-circle"></i> <?=$error?></p><?php endif; ?></div></html>