<?php

   /**
     * @author  Adriene Care Llanos Amigable <adrienecarreamigable01@gmail.com>
     * @version 0.1.0
    */ 

    class Auth extends CI_Controller{
        /**
            * Class constructor.
            *
        */
        public function __construct() {
			parent::__construct();
            date_default_timezone_set('Asia/Manila');
            $this->load->model('AuthModel','authmodel');
        }
        /** 
         * Display
         * This function is only for display
        */
        public function index(){
            $data['title'] = 'Login';
            $this->load->view('header/auth_header',$data);
            $this->load->view('auth_content/login');
            $this->load->view('footer/auth_footer');
        }
        /**
            * Generate a key
            * 
            *
            * @return string return a string use to be the accessKey 
        */
        private function keygen($length=10)
        {
            $key = '';
            list($usec, $sec) = explode(' ', microtime());
            mt_srand((float) $sec + ((float) $usec * 100000));
            
            $inputs = array_merge(range('z','a'),range(0,9),range('A','Z'));

            for($i=0; $i<$length; $i++)
            {
                $key .= $inputs[mt_rand(0,61)];
            }
            return $key;
        }
        /**
            * Authenticate a user
            * 
            *
            * @return array return the data info of a user
        */
        public function authenticate(){
            $response   = array();
            // $email      = "test@gmail.com";
            $email       = $this->input->post("email");
            if(empty($email)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty Email',
                );
            }else{
                try {
                    $data = $this->authmodel->authenticate($email);
                    if(count($data) == 1){
                        $response = array(
                            'isError'   => false,
                            'data'      => $data,
                            'date'      => date("Y-m-d"),
                            'message'   => 'Successfuly Login'
                        );
                    }
                    else if(count($data) > 1){
                        $response = array(
                            'isError'   => true,
                            'date'      => date("Y-m-d"),
                            'message'   => 'Duplicate email found please contact or go to the office for update'
                        );
                    }else{
                        $response = array(
                            'isError'   => true,
                            'date'      => date("Y-m-d"),
                            'message'   => 'No data found'
                        );
                    }
                    
                }
                catch(Exception $e) {
                    $response = array(
                        'isError'   => true,
                        'data'      => '',
                        'count'      => 0,
                        'date'      => date("Y-m-d"),
                        'message'   => $e->getMessage(),
                    );
                }
            }
            $this->displayJSON($response);
        }
        public function logout(){
            $response = array();
            try{
                session_destroy();
                $response = array(
                    'isError'   => false,
                    'date'      => date("Y-m-d"),
                    'message'   => 'Successfuly Logout',
                );
            }
            catch(Exception $e) {
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => $e->getMessage(),
                );
            }
            $this->displayJSON($response);
        }
        private function displayJSON($data){
            if(isset($_SERVER['HTTP_USER_AGENT']) && strstr($_SERVER['HTTP_USER_AGENT'],"MSIE")){
                header('Content-Type: application/json');
            }
            else{
                header('Content-Type: application/json');
                header('Access-Control-Allow-Methods: GET, POST');
                header('Access-Control-Allow-Origin: *');
                header("Cache-Control: no-cache");
                header("Pragma: no-cache");
                echo json_encode($data);
            }
           
        }
    }
?>