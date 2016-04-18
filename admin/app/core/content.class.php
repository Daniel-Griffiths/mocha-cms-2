<?php
/*	
|--------------------------------------------------------------------------	
| Content Class
|--------------------------------------------------------------------------
|
| This class controls of all the content management functionality in the cms.
| It includes anything from retrieving pages/posts, to uploading 
| and deleting content. 
|
*/

class Content 
{
	private $contentDirectory = __DIR__.'/../../content/';
	public  $error = null;
	public  $content = null;

	/*	
	|--------------------------------------------------------------------------
	| Get Content
	|--------------------------------------------------------------------------
	|
	| Retrieves the specified page/post
	|
	|*/

	public function getContent($content) 
	{
		return $this->loadContent($content);
	}

	/*	
	|--------------------------------------------------------------------------
	| New Content
	|--------------------------------------------------------------------------
	|
	| Uploads new content to the site
	|
	|*/

	public function newContent($title,$content,$type) 
	{
		$contentFile = $this->contentDirectory . $type . '/' . $title . '.php';
		
		if($this->contentExists($contentFile) == false){
			file_put_contents($contentFile,$content);
			return true;
		}

		$this->setError('Error - A ' . $type .' with the name ' . $title . ' already exist'); 
		return $this->getError();
	}

	/*	
	|--------------------------------------------------------------------------
	| Edit Content
	|--------------------------------------------------------------------------
	|
	| Edits existing content
	|
	|*/

	public function editContent($title,$content,$type) 
	{
		$contentFile = $this->contentDirectory . $type . '/' . $title . '.php';
		
		if($this->contentExists($contentFile) == true){
			file_put_contents($contentFile,$content);
			//Http::redirect($_SERVER['HTTP_REFERER']);
			return 'The content has been saved';
		}

		$this->setError('Error - A ' . $type .' with the name ' . $title . ' does not exist');
		return $this->getError();
	}

	/*	
	|--------------------------------------------------------------------------
	| Content Exist
	|--------------------------------------------------------------------------
	*/

	private function contentExists($content)
	{
		if(file_exists($content)){
			return true;
		}

		return false;
	}

	/*	
	|--------------------------------------------------------------------------
	| Load Content
	|--------------------------------------------------------------------------
	*/

	private function loadContent($content)
	{
		if($this->contentExists($content) == true){
			return file_get_contents($content);
		} 

		Http::redirect('/admin/');

		return false;
	}

	/*	
	|--------------------------------------------------------------------------
	| Get all content
	|--------------------------------------------------------------------------
	*/

	//TODO - Refactor this method... it works but kinda messy
	public function getAllContent($type)
	{

		$contents = glob(__DIR__.'/../../content/' . $type .'/*.php');
		$contents_info = [];

		foreach($contents as $content){
			$last_modified = date("d F Y",filemtime($content));
			$content = pathinfo($content);
			$content['last_modified'] = $last_modified;
			array_push($contents_info, $content);
		}

		return $contents_info;

		$this->setError('Error - No content could be found');
		return $this->getError();
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

