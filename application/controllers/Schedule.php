<?php
    date_default_timezone_set('Asia/Manila');
    class Schedule extends CI_Controller{
        public function __construct() {
            parent::__construct();
            $this->load->model('ScheduleModel','schedulemodel');
            $this->load->model('AuthModel','authmodel');
        }
        public function all($borrower_id){
            $response = array();
            echo json_encode($this->schedulemodel->all($borrower_id));
        }
        public  function countPopulation(){
            $response       = array();
            $date           = date("Y/m/d",strtotime($this->input->post("_date")));
            $meridiem       = $this->input->post("meridiem");
            $count          = $this->schedulemodel->countPopulation($date,$meridiem);
            if($count > 1){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Please select another date already have its limit',
                );
            }else{
                $response = array(
                    'isError'   => false,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => '',
                );
            }
            $this->displayJSON($response); 
        }
        public function test(){
            $date           = date("2020/09/25");
            // $date           = date("Y/m/d",strtotime($this->input->post("_date")));
            $data = $this->schedulemodel->schedule_holidays($date,"AM");
            print_r($data);
        }
        public function checkIfAvailable(){
            $date = $this->input->post("date");
            $d = date('w',strtotime($date));
            $response    = array();
            if($d == 0 || $d == 1){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'No schedule on this date please select another date',
                );
                // $respons = false;
            }else{
                $response = array(
                    'isError'   => false,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => '',
                );
                // $response = true;
            }
            $this->displayJSON($response); 
        }
        public function add(){
            $response       = array();
            $meridiem       = $this->input->post("meridiem");
            $date           = date("Y/m/d",strtotime($this->input->post("_date")));
            $borrower_id    = $this->input->post("borrower_id");
            $cheack         = $this->schedulemodel->check_schedule($borrower_id,$date);
            $isAdmin        = empty($this->input->post("isAdmin")) ? false : $this->input->post("isAdmin");
            $count          = $this->schedulemodel->countPopulation($date,$meridiem);
            $holiday        = $this->schedulemodel->schedule_holidays($date,$meridiem);
            // print_r($holiday);exit;
            // $checkIfAvailable          = $this->checkIfAvailable($date);
            $d = date('w',strtotime($date));
            
            if($cheack > 0){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'This user already have a schedule on this date',
                );
            }
            else if($holiday['isError']){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => $holiday['message'],
                );
            }
            else if($count >= 25){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Reachout the maximum limit of schedule for this '.$meridiem.' schedules please select another schedule',
                );
            }
            else if($d == 0 || $d == 1){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'No schedule on this date please select another date',
                );
            }
            else{
                if(empty($date)){
                    $response = array(
                        'isError'   => true,
                        'data'      => '',
                        'date'      => date("Y-m-d"),
                        'message'   => 'Empty date',
                    );
                }
                else if(empty($borrower_id)){
                    $response = array(
                        'isError'   => true,
                        'data'      => '',
                        'date'      => date("Y-m-d"),
                        'message'   => 'Invalid user',
                    );
                }
                else{
                    try {
                        $start          = $meridiem == "AM" ? date("Y/m/d 8:00:00",strtotime($date)) : date("Y/m/d 13:00:00",strtotime($date));
                        $end            = $meridiem == "AM" ? date("Y/m/d 11:30:00",strtotime($date)) : date("Y/m/d 17:00:00",strtotime($date));
                        $payload = array(
                            'borrower_id'       => $borrower_id,
                            'name'              => $this->input->post("name"),
                            'title'             => $this->input->post("title"),
                            'meridiem'          => $this->input->post("meridiem"),
                            'start'             => $start,  
                            'end'               => $end,  
                        );
                        $data = $this->schedulemodel->add($payload);
                        if($data){
                            $name = $this->input->post("name");
                            $payload_logs= array(
                                'logs'=> "Mr/Ms. {$name} add a schedule to meeow for the date of {$date}",
                            );
                            $logs = $this->authmodel->insert_logs($payload_logs);
                            if($logs){
                                $response = array(
                                    'isError'   => false,
                                    'data'      => $payload,
                                    'date_request' =>$this->input->post("_date"),
                                    'date'      => date("Y-m-d"),
                                    'message'   => 'Successuly plotted new schedule'
                                );
                            }else{
                                $response = array(
                                    'isError'   => false,
                                    'data'      => $payload,
                                    'date_request' =>$this->input->post("_date"),
                                    'date'      => date("Y-m-d"),
                                    'message'   => 'Successuly plotted new schedule'
                                );
                            }
                        }else{
                            $response = array(
                                'isError'   => true,
                                'data'      => $payload,
                                'date'      => date("Y-m-d"),
                                'message'   => 'Error plotting schedule'
                            );
                        }
                    }
                    catch(Exception $e) {
                        $response = array(
                            'isError'   => true,
                            'data'      => '',
                            'date'      => date("Y-m-d"),
                            'message'   => $e->getMessage(),
                        );
                    }
                }
            }
            
            $this->displayJSON($response); 
        }   
        public function update(){
            $response          = array();
            $meridiem          = $this->input->post("meridiem");
            $date              = date("Y/m/d",strtotime($this->input->post("_date")));
            $borrower_id       = $this->input->post("borrower_id");
            $id                = $this->input->post("id");
            $title             = $this->input->post("title");
            // $isAdmin        = empty($this->input->post("isAdmin")) ? false : $this->input->post("isAdmin");
            // $end            = strtotime("+5 minutes", strtotime($time));
            $cheack            = $this->schedulemodel->check_schedule_update($borrower_id,$date,$meridiem);
            $count             = $this->schedulemodel->countPopulation($date,$meridiem);
            $holiday           = $this->schedulemodel->schedule_holidays($date,$meridiem);
            // $checkIfAvailable  = $this->checkIfAvailable($date);
            $d = date('w',strtotime($date));
            // print_r($cheack);exit;
            if($cheack){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'This user already have a schedule on this date',
                );
            }
            else if($holiday['isError']){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => $holiday['message'],
                );
            }
            else if($count >= 25){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Please select another date already have its limit',
                );
            }
            else if($d == 0 || $d == 1){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'No schedule on this date please select another date',
                );
            }
            else{  
                if(empty($date)){
                    $response = array(
                        'isError'   => true,
                        'data'      => '',
                        'date'      => date("Y-m-d"),
                        'message'   => 'Empty date',
                    );
                }
                else if(empty($id)){
                    $response = array(
                        'isError'   => true,
                        'data'      => '',
                        'date'      => date("Y-m-d"),
                        'message'   => 'Empty schedule id',
                    );
                }
                else{
                    try {
                        $start          = $meridiem == "AM" ? date("Y/m/d 8:00:00",strtotime($date)) : date("Y/m/d 13:00:00",strtotime($date));
                        $end            = $meridiem == "AM" ? date("Y/m/d 11:30:00",strtotime($date)) : date("Y/m/d 17:00:00",strtotime($date));
                        $payload = array(
                            'start'             => $start,  
                            'end'               => $end,  
                            'meridiem'          => $meridiem,  
                        );
                        if(!empty($title)){
                            $payload['title'] = $title;
                        }
                        $data = $this->schedulemodel->update($payload,$id);
                        if($data){
                            $name = $this->input->post("name");
                            $payload_logs= array(
                                'logs'=> "Mr/Ms. {$name} updated schedule ({$start}) to meeow for the date of {$date}",
                            );
                            $logs = $this->authmodel->insert_logs($payload_logs);
                            if($logs){
                                $response = array(
                                    'isError'   => false,
                                    'date_request'      => $date,
                                    'data'      => $data,
                                    'date'      => date("Y-m-d"),
                                    'message'   => 'Successuly update the plotted schedule'
                                );
                            }else{
                                $response = array(
                                    'isError'   => false,
                                    'date_request'      => $date,
                                    'data'      => $data,
                                    'date'      => date("Y-m-d"),
                                    'message'   => 'Successuly update the plotted schedule'
                                );
                            }
                        }else{
                            $response = array(
                                'isError'   => true,
                                'data'      => '',
                                'date'      => date("Y-m-d"),
                                'message'   => 'Error'
                            );
                        }
                        
                    }
                    catch(Exception $e) {
                        $response = array(
                            'isError'   => true,
                            'data'      => '',
                            'date'      => date("Y-m-d"),
                            'message'   => $e->getMessage(),
                        );
                    }
                }
            }
            $this->displayJSON($response); 
        }
        public function void(){
            $response       = array();
            $id             = $this->input->post("id");
            // print_r($id);exit;
            // print_r($cheack);exit;
            if(empty($id)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty schedule id',
                );
            }
            else{
                try {
                    $payload = array(
                        'is_active'         => 0,  
                        'description'       => $this->input->post("description"),  
                        'void_date'         => date("Y-m-d H:i:s"),  
                    );
                    $data = $this->schedulemodel->update($payload,$id);
                    $response = array(
                        'isError'   => false,
                        'data'      => $data,
                        'date'      => date("Y-m-d"),
                        'message'   => 'Successuly void schedule'
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
            }
            $this->displayJSON($response); 
        }
        public function status(){
            $response       = array();
            $id             = $this->input->post("id");
            try {
                $payload = array(
                    'status_id'             => $this->input->post("status_id"),  
                );
                $data = $this->schedulemodel->update($payload,$id);
                $response = array(
                    'isError'       => false,
                    'data'          => $data,
                    'date'          => date("Y-m-d"),
                    'message'       => 'Successuly update schedule status'
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
        public function count_entries(){
            $response       = array();
            $date           = date("Y/m",strtotime($this->input->post("date")));
            if(empty($date)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty date',
                );
            }else{
                try {
                    $data = $this->schedulemodel->count_entries($date);
                    $response = array(
                        'isError'       => false,
                        'request_date'  => $date,
                        'data'          => $data,
                        'date'          => date("Y-m-d"),
                        'message'       => 'Success'
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
            }
            $this->displayJSON($response); 
        }
        public function info(){
            $response   = array();
            $id       = $this->input->post("id");
            if(empty($id)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty Schedule id',
                );
            }else{
                try {
                    $data = $this->schedulemodel->info($id);
                    $response = array(
                        'isError'   => false,
                        'data'      => $data,
                        'date'      => date("Y-m-d"),
                        'message'   => 'Success'
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
            }
            $this->displayJSON($response); 
        }
        public function check_schedule(){
            $response   = array();
            $borrower_id       = $this->input->post("borrower_id");
            // $date               = $this->input->post("date");
            $date           = date("Y/m/d",strtotime($this->input->post("date")));
            if(empty($date)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty Date',
                );
            }
            else if(empty($borrower_id)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty borrower id',
                );
            }
            else{
                try {
                    $data = $this->schedulemodel->check_schedule($borrower_id,$date);
                   
                    if($data > 0 ){
                        $response = array(
                            'isError'   => true,
                            'date'      => date("Y-m-d"),
                            'message'   => 'You already have schedule on this date'
                        );
                    }else{
                        
                        $response = array(
                            'isError'   => false,
                            'date'      => date("Y-m-d"),
                            'message'   => 'Success'
                        );
                    }
                }
                catch(Exception $e) {
                    $response = array(
                        'isError'   => true,
                        'data'      => '',
                        'date'      => date("Y-m-d"),
                        'message'   => $e->getMessage(),
                    );
                }
            }
            $this->displayJSON($response); 
        }
        public function getAllScheduleHolidays(){
            $response   = array();
            try {
                $data = $this->schedulemodel->getAllScheduleHolidays();
                // print_r($data);exit;
                $response = array(
                    'isError'   => false,
                    'data'      => $data,
                    'date'      => date("Y-m-d"),
                    'message'   => 'Success'
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
        public function checkScheduleHoliday(){
            $response   = array();
            $date       = date("Y/m/d",strtotime($this->input->post("date")));
            try {
                $data = $this->schedulemodel->checkScheduleHoliday($date);

                $response = array(
                    'isError'   => false,
                    'data'      => count($data) > 0 ? $data[0] : '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Success'
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
        public function get_available_date(){
            $response   = array();
            $date       = date("Y/m/d",strtotime($this->input->post("date")));
            if(empty($date)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty Date',
                );
            }else{
                try {
                    $data = $this->schedulemodel->get_available_date($date);
                    $response = array(
                        'isError'   => false,
                        'data'      => $data,
                        'date'      => date("Y-m-d"),
                        'message'   => 'Success'
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
            }
            $this->displayJSON($response); 
        }
        public function getAll(){
            $response   = array();
            $date       = $this->input->post("date");
            if(empty($date)){
                $response = array(
                    'isError'   => true,
                    'data'      => '',
                    'date'      => date("Y-m-d"),
                    'message'   => 'Empty Date',
                );
            }else{
                $date       = date("Y/m/d",strtotime($date));
                try {
                    $data = $this->schedulemodel->getAll($date);
                    $response = array(
                        'isError'   => false,
                        'data'      => $data,
                        'date_request'=>$date,
                        'date'      => date("Y-m-d"),
                        'message'   => 'Success'
                    );
                }
                catch(Exception $e) {
                    $response = array(
                        'isError'   => true,
                        'data'      => '',
                        'date_request'=>$date,
                        'date'      => date("Y-m-d"),
                        'message'   => $e->getMessage(),
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