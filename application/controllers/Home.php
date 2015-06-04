<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

public function __construct(){
	parent::__construct();

				$this->load->view("header");
				$this->load->view("navigation/site_nav");
}

public function index(){
	$data["message"] = "";
	$this->load->view("homepage", $data);
  }

public function about(){
	$data["message"] = "";
	$this->load->view("aboutmepage", $data);
		}

}
?>
