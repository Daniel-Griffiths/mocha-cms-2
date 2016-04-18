<?php 
/*	
|--------------------------------------------------------------------------	
| Plugin Class
|--------------------------------------------------------------------------
|
| This class deals with all things plugin related! Duh.
|
*/

class Plugins   
{
	/*	
	|--------------------------------------------------------------------------
	| Load Plugins
	|--------------------------------------------------------------------------
	|
	| Loops and includes any plugins
	|
	|*/

	public static function load($output) 
	{
		$plugins = self::getPlugins();

		/* load plugins */
		foreach($plugins as $plugin){
			include $plugin;
		}

		return $output;
	}

	/*	
	|--------------------------------------------------------------------------
	| Add Shortcode
	|--------------------------------------------------------------------------
	|
	| Adds a new shortcode. Usually used by plugins.
	|
	|*/

	public static function addShortcode($shortcode, $function, $output)
	{
		return str_replace('{{'.$shortcode.'}}', $function, $output);
	} 

	/*	
	|--------------------------------------------------------------------------
	| Get Plugins
	|--------------------------------------------------------------------------
	|
	| Gets an array of all the available plugins
	|
	|*/

	public static function getPlugins()
	{
		return $plugins = glob(__DIR__.'/../../content/plugins/*/index.php');
	} 

	/*	
	|--------------------------------------------------------------------------
	| Plugin Info
	|--------------------------------------------------------------------------
	|
	| Gets an array of all the selected plugin information
	| For example: Author Name, Verion Number etc.
	|
	|*/

	public static function pluginInfo($plugin)
	{
		$plugin = file($plugin); //return file as an array
     	$plugin = array_splice($plugin, 2, 4); //slice array to get the needed lines
     	$plugin_details = [];

		foreach($plugin as $plugin_line){
			$plugin_line = str_replace(':','',strstr($plugin_line, ':'));
			array_push($plugin_details, $plugin_line);
		}

		return $plugin_details;
	} 

}




