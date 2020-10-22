$(()=>{
    var  getApiData  = JSON.parse(localStorage.getItem("session"));
    borrower = {
        init:()=>{
            borrower.ajax.getBorrower({
                borrower_id:getApiData.borrower_id
            })
            borrower.ajax.getBorrowerSchedules({
                borrower_id:getApiData.borrower_id
            })
        },
        ajax:{
            getBorrower:(payload)=>{
                ajaxAddOn.ajax({
                    type:'POST',
                    url:getBorrowerInfoApi,
                    payload:payload,
                    dataType:'json',
                }).then(response=>{
                    if(!response.isError){
                        // console.log("response",response)
                        $("#profile_name").append($("<b>").text("Name: "),`${ajaxAddOn.capitalize(response.data.Name)}`);
                        $("#profile_district").append($("<b>").text("District: "),`${ajaxAddOn.capitalize(response.data.district_name)}`);
                        $("#profile_gender").append($("<b>").text("Gender: "),`${ajaxAddOn.capitalize(response.data.gender)}`);
                        $("#profile_email").append($("<b>").text("Email: "),`${response.data.email}`);
                        $("#profile_phone").append($("<b>").text("Mobile: "),`${ajaxAddOn.capitalize(response.data.mobile)}`);
                        $("#profile_telephone").append($("<b>").text("Telephone: "),`${ajaxAddOn.capitalize(response.data.telephone)}`);
                        $("#profile_address").append($("<b>").text("Address: "),`${ajaxAddOn.capitalize(response.data.present_address)}`);
                        $("#profile_position").append($("<b>").text("Position: "),`${ajaxAddOn.capitalize(response.data.present_address)}`);
                        $("#profile-img").attr({
                            src:`${baseUrl}/uploads/${getApiData.borrower_id}/${getApiData.image}`
                        })
                    }else{
                        ajaxAddOn.swalMessage(!response.isError,response.message);
                    }
                    ajaxAddOn.removeFullPageLoading();
                })
            },
            getBorrowerSchedules:(payload)=>{
                ajaxAddOn.ajax({
                    type:'POST',
                    url:getBorrowerScheduleApi,
                    payload:payload,
                    dataType:'json',
                }).then(response=>{
                    if(!response.isError){
                        $("#table-schedule tbody").empty()
                        $.each(response.data,function(k,v){
                           $("#table-schedule tbody")
                            .append(
                                $("<tr>")
                                    .append(
                                        $("<td>")
                                            .append(
                                                $("<span>")
                                                    .addClass("float-right font-weight-bold")
                                                    .text(moment(v.start).format("dddd MMM DD, YYYY h:mm:ss a")),
                                                v.title
                                            )
                                    )
                            )
                       })
                    }else{
                        ajaxAddOn.swalMessage(!response.isError,response.message);
                    }
                    ajaxAddOn.removeFullPageLoading();
                })
            },
        },
    }
    borrower.init();
})