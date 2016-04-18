<?php 
/*
  Plugin Name: Hello World
  Description: A simple test plugin
  Version: 1.0
  Author: Daniel Griffiths
*/

function helloWorld(){
	return 'Hello World';
}

$output = plugins::addShortcode('hello_world',helloWorld(),$output);