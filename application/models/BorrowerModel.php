<?php
    class borrowermodel extends CI_Model{
        public function update($payload,$id){
            $this->db->where($id);
            $this->db->update($payload);
        }
        public function get_borrower($borrower_id){
			$sql = "SELECT 
							borrower.borrower_id,
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
                            CONCAT(borrower.lastname,', ',borrower.firstname,' ',borrower.middlename) as Name
					from borrower
					LEFT JOIN borrower_contact ON borrower_contact.borrower_id = borrower.borrower_id
					LEFT JOIN borrower_details ON borrower_details.borrower_id = borrower.borrower_id
					LEFT JOIN district 		   ON district.district_id = borrower.district_id
					WHERE borrower.is_active = 1 AND 
                    borrower.borrower_id = {$borrower_id}";
			return $this->db->query($sql)->result();
        }
        public function getBorrowerSchedule($borrower_id){
            $sql = "SELECT schedules.id,
                            schedules.name as title,
                            schedules.borrower_id,
                            -- DATE_FORMAT(schedules.start,'%H:%i') as title,
                            schedules.start,
                            schedules.end,
                            schedules.meridiem
                    FROM schedules
                    WHERE schedules.is_active = 1 AND schedules.borrower_id = {$borrower_id}";
            return $this->db->query($sql)->result();
        }
    }
?>