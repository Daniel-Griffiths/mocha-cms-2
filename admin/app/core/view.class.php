<?php 
/*	
|--------------------------------------------------------------------------	
| View Class
|--------------------------------------------------------------------------
|
| This is the main view class that allows your app to grab template
| files and insert any necessary data.
|
*/

class View
{

	/*	
	|--------------------------------------------------------------------------	
	| Get View
	|--------------------------------------------------------------------------
	|
	| Grab the requested view, this is strictly used by the CMS
	|
	*/

	public static function get($view) 
	{
		global $config;

        $view = __DIR__.'/../views/' . strtok(explode('/', ($view))[2],'?') . '.php';

        if(file_exists($view)){
        	/* load the specified view */
			$output = self::Load($view);
			return $output;
        } 
		
		/* load the default view */
    	return self::Load(__DIR__.'/../views/' . $config['view']['default'] . '.php');   
    }

	/*	
	|--------------------------------------------------------------------------	
	| Serve View
	|--------------------------------------------------------------------------
	|
	| Similar to get but this is used for the website itself
	|
	*/

    //TODO refactor this method
	public static function serve($view,$layout) 
	{
		global $config;

		/* default to the homepage */
		if($view == '/'){ 
			$view = __DIR__.'/../../content/pages/default.php';
		} else {
			$view = __DIR__.'/../../content/pages/' . strtok(explode('/', ($view))[1],'?') . '.php';
		}

        $layout = __DIR__.'/../../content/layouts/' . $layout . '.php';

        if(file_exists($view) && file_exists($layout)){
			$output = self::Load($layout);
			$output = str_replace('{{content}}',self::Load($view),$output);
			$output = plugins::Load($output);

			return $output;
        } 
		
    	return self::Load(__DIR__.'/../../content/layouts/404.php');
	
    }

	/*	
	|--------------------------------------------------------------------------	
	| Load View
	|--------------------------------------------------------------------------
	|
	| Load the view into the output buffer
	|
	*/
	
	public static function load($file) 
	{
	
		global $config;

		ob_start();
		include $file;
		$file = ob_get_contents();
		ob_end_clean();
		
		return $file;
	}
}

