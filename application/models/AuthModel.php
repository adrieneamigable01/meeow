<?php
/**
 * Auth Model
 * Author: Adriene Carre Amigable
 * Date Created : 5/3/2020
 * Version: 0.0.1
 */
 class AuthModel extends CI_Model{
    /**
     * This will authenticate the user
     * @param array payload 
    */
    public function authenticate($email){
            $sql = "SELECT  borrower.borrower_id,
                    borrower.firstname,
                    borrower.lastname,
                    borrower.middlename,
                    borrower.image,
                    borrower_contact.mobile,
                    borrower_contact.telephone,
                    borrower_contact.email,
                    borrower_details.gender,
                    borrower_details.birthdate,
                    borrower_details.present_address,
                    borrower_details.position,
                    borrower_details.id_name,
                    borrower_details.id_number,
                    borrower_details.income,
                    borrower_details.gross,
                    borrower_details.net,
                    district.name as 'district_name',
                    CONCAT(borrower.lastname,', ',borrower.firstname,' ',borrower.middlename) as Name,
                    borrower.is_active
            from borrower
            LEFT JOIN borrower_contact ON borrower_contact.borrower_id = borrower.borrower_id
            LEFT JOIN borrower_details ON borrower_details.borrower_id = borrower.borrower_id
            LEFT JOIN district 		   ON district.district_id = borrower.district_id 
            WHERE borrower.is_active = 1 AND borrower_contact.email =  '{$email}' ";
        $sql .= "ORDER BY borrower.borrower_id ASC";
        return $this->db->query($sql)->result();
    }
    public function insert_logs($payload){
        return $this->db->insert("schedule_log",$payload);
    }
 }
?>