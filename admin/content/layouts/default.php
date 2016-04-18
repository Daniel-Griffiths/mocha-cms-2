<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<title><?=$config['company']['name']?></title>
	<link rel="stylesheet" href="/assets/css/main.css"/>
	<link rel="stylesheet" href="/assets/css/mobile.css"/>
	<link rel="stylesheet" href="/assets/css/lib/font-awesome-4.4.0/css/font-awesome.min.css"/>
	<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" >
</head>
<body>
	<header class="header">
		<div class="grid">
			<div class="col-1-1">
				<img src="/assets/img/logo.png">
			</div>
		</div>
		<nav>
			<div class="grid no-overflow">
				<ul class="col-1-1 clearfix no-margin"> 
					<li>
						<a href="#">Nav Item</a>
						<ul>
							<li>
								<a href="#">Sub</a>
							</li>
							<li>
								<a href="#">Sub</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Nav Item</a>
					</li> 
					<li>
						<a href="#">Nav Item</a>
					</li>
					<li><a href="#">Nav Item</a></li>
				</ul>
			</div>
		</nav>
	</header>
	<div class="grid">
		<aside class="col-3-12">
			<h3 class="title">Sidebar</h3>
			<p>Morbi vitae euismod sem, at iaculis ipsum. Morbi lobortis elementum sapien at pellentesque. Sed in vestibulum purus. Praesent molestie quis ligula ut dignissim. Aliquam eget ante sem. Sed commodo sagittis ante, id rhoncus neque blandit eget. Cras eget massa risus. Aliquam luctus nec nulla id congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam rutrum pellentesque sem sed faucibus. Phasellus eu dui sed arcu porta rhoncus. Cras luctus faucibus </p>
		</aside>
		<div class="col-9-12">
			{{content}}
		</div>
	</div><!-- /grid-pad -->
	<footer class="footer">
		<div class="grid">
			<div class="col-1-4">
			  <p>Morbi vitae euismod sem, at iaculis ipsum. Morbi lobortis elementum sapien at pellentesque. Sed in vestibulum purus. Praesent molestie quis ligula ut dignissim. Aliquam eget ante sem. Sed commodo sagittis ante, id rhoncus neque blandit</p> 
			</div>
			<div class="col-1-4">
			  <p>Morbi vitae euismod sem, at iaculis ipsum. Morbi lobortis elementum sapien at pellentesque. Sed in vestibulum purus. Praesent molestie quis ligula ut dignissim. Aliquam eget ante sem. Sed commodo sagittis ante, id rhoncus neque blandit </p>
			</div>
			<div class="col-1-4">
			  <p>Morbi vitae euismod sem, at iaculis ipsum. Morbi lobortis elementum sapien at pellentesque. Sed in vestibulum purus. Praesent molestie quis ligula ut dignissim. Aliquam eget ante sem. Sed commodo sagittis ante, id rhoncus neque blandit </p>
			</div>
			<div class="col-1-4">
			  <p>Morbi vitae euismod sem, at iaculis ipsum. Morbi lobortis elementum sapien at pellentesque. Sed in vestibulum purus. Praesent molestie quis ligula ut dignissim. Aliquam eget ante sem. Sed commodo sagittis ante, id rhoncus neque blandit </p>
			</div>
		</div>
		<div class="bottom">
			<div class="grid">
				<div class="col-1-1">
				  Copyright <?php echo date('Y') . ' ' . $config['company']['name']; ?>
				</div>
			</div>
		</div>
	</footer>
	<!-- scripts -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/assets/js/lib/jquery-1.11.3.min.js"><\/script>')</script>
	<script src="/assets/js/main.js"></script>
</body>
</html>
