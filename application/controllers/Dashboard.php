<?php
    /**
     * Dashboard Controller
     * Author: Adriene Carre Amigable
     * Date Created : 5/10/2020
     * Version: 0.0.1
     */
    class Dashboard extends CI_Controller{
        public function __construct() {
			parent::__construct();
            date_default_timezone_set('Asia/Manila');
        }
        /** 
         * Display
         * This function is only for display
        */
        public function index(){
        
            $data['title'] = 'Dashboard';
            $this->load->view('header/dashboard_header',$data);
            // $this->load->view('sidebar/dashboard_sidebar');
            $this->load->view('topbar/dashboard_topbar');
            $this->load->view('dashboard_content/dashboard');
            $this->load->view('footer/dashboard_footer');
        }
        
        public function profile(){
            $data['extra_scripts'] = array(
                base_url().'/assets/js/borrower.js',
            );
            $data['title'] = 'Profile';
            $this->load->view('header/dashboard_header',$data);
            // $this->load->view('sidebar/dashboard_sidebar');
            $this->load->view('topbar/dashboard_topbar');
            $this->load->view('dashboard_content/profile');
            $this->load->view('footer/dashboard_footer');
        }
        public function answers(){
            $data['extra_scripts'] = array(
                base_url().'/assets/js/borrower.js',
            );
            $data['title'] = 'Profile';
            $this->load->view('header/dashboard_header',$data);
            // $this->load->view('sidebar/dashboard_sidebar');
            $this->load->view('topbar/dashboard_topbar');
            $this->load->view('dashboard_content/answers');
            $this->load->view('footer/dashboard_footer');
        }
    }
?>