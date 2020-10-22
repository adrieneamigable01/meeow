<?php

   /**
     * @author  Adriene Care Llanos Amigable <adrienecarreamigable01@gmail.com>
     * @version 0.1.0
    */ 

    class Borrower extends CI_Controller{
        /**
            * Class constructor.
            *
        */
        public function __construct() {
			parent::__construct();
            date_default_timezone_set('Asia/Manila');
            $this->load->model('BorrowerModel','borrowermodel');
        }
        public function sync_contact(){
            $payload = array(
                'mobile'    => $mobile,
                'telephone' => $telephone,
                'email'     => $email,
            );
            // $id = $this->input->post("id");
            $this->borrowermodel->update($payload,$id);
        }
        public function get_borrower(){
            $response = array();
            // $borrower_id = 1;
            $borrower_id = $this->input->post('borrower_id');
            if(empty($borrower_id)){
                $response  = array(
                    'isError'  => true,
                    'message'   => "Empty borrower id",
                    'date'      => date("Y-m-d H:i:s")
                );
            }else{
                $data = $this->borrowermodel->get_borrower($borrower_id);
                if(count($data) > 0){
                    $response  = array(
                        'isError'  => false,
                        'message'   => "Success",
                        'data'      => $data[0],
                        'date'      => date("Y-m-d H:i:s")
                    );
                }else{
                    $response  = array(
                        'isError'  => false,
                        'message'   => "Success",
                        'data'      => $data,
                        'date'      => date("Y-m-d H:i:s")
                    );
                }
            }
            $this->displayJSON($response);
        }
        public function getBorrowerSchedule(){
            $response = array();
            // $borrower_id = 1;
            $borrower_id = $this->input->post('borrower_id');
            if(empty($borrower_id)){
                $response  = array(
                    'isError'  => true,
                    'message'   => "Empty borrower id",
                    'date'      => date("Y-m-d H:i:s")
                );
            }else{
                $data = $this->borrowermodel->getBorrowerSchedule($borrower_id);
                if(count($data) > 0){
                    $response  = array(
                        'isError'  => false,
                        'message'   => "Success",
                        'data'      => $data,
                        'date'      => date("Y-m-d H:i:s")
                    );
                }else{
                    $response  = array(
                        'isError'  => false,
                        'message'   => "Success",
                        'data'      => $data,
                        'date'      => date("Y-m-d H:i:s")
                    );
                }
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