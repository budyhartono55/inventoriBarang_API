<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    // home controller
    public function index($nama = 'Welcome to Nutech API'){
        
        // get data
        $data['title'] = 'nutech_API';
        $data['nama'] = $nama;

        //load 
        $this->load->view('templates/header.php', $data);
        $this->load->view('home/index.php', $data);
        $this->load->view('templates/footer.php');
        
    }

}