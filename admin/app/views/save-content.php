<?php 
$content = new Content;
//if($_POST['edit'] == true){
	echo $content->editContent($_POST['title'],$_POST['content'],$_POST['type']);  
//} else {
	//echo $content->newContent($_POST['title'],$_POST['content'],$_POST['type']);  
//} 
?> 