
    /* 
        * File Name     : dashboard.js
        * Path:         : assets/js/dashboard.js
    */
   $(()=>{
    var role        = null;
    var calendar    = null;
    var isUpdate    = false;
    var _date       = false;
    var _isMobile       = false;
    var _id       = false;
    var doneTime    = [];
    var getApiData  = JSON.parse(localStorage.getItem("session"));
    var det         = null;
    dashboard = {
        init:()=>{
            dashboard.display.setNavActive();
            ajaxAddOn.addFullPageLoading();
            if(getApiData != null){
                $("#dashboard_fullname")
                    .addClass("text-center")
                    .empty()
                    .append(
                        $("<span>").text(`${getApiData.Name}`),
                        $("<br>"),
                        $("<span>").text(ajaxAddOn.capitalizeFirst(getApiData.district_name)),
                    )
                        // alert(navigator.userAgent)
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
                    $("#calendar").addClass("row")
                    dashboard.ajax.showSchedules({
                        date:moment().format("L")
                    });
                    $("#calendar-container").prepend(
                        $("<div>")
                        .addClass("col-lg-12 text-center mb-5 mb-lg-0")
                        .append(
                            $("<div>")
                                .addClass("input-group date")
                                .attr({
                                    "data-provide":"datepicker",
                                })
                                .append(
                                    $("<input>")
                                        .addClass("form-control")
                                        .attr({
                                            type:'text',
                                            id:'datepicker-select',
                                            value:moment().format("L")
                                        })
                                        .change(function(){
                                            // let _this = $(this).val();
                                            // dashboard.ajax.showSchedules({
                                            //     date:moment(_this).format("L")
                                            // });
                                        }),
                                )
                        )

                    )
                    $('#datepicker-select').datepicker({
                        uiLibrary: 'bootstrap4', iconsLibrary: 'materialicons',
                        change: function (e) {
                           let _this = $(this).val();
                           dashboard.ajax.showSchedules({
                                date:moment(_this).format("L")
                            });

                            if(moment(_this).format("L") < moment().format("L")){
                                $("#btn-add-schedule").addClass("hidden")
                            }else{
                                $("#btn-add-schedule").removeClass("hidden")
                            }
                        }
                        // uiLibrary: 'materialdesign', iconsLibrary: 'materialicons'
                    })
                    _isMobile = true;
                    $("#btn-add-schedule").removeClass("hidden")
                }else{
                    $("#btn-add-schedule").addClass("hidden")
                    dashboard.display.showCalendar();
                    _isMobile = false;
                }
                
                
                ajaxAddOn.removeFullPageLoading();
                $('.profile-image').attr({
                    src:`${baseUrl}/uploads/${getApiData.borrower_id}/${getApiData.image}`
                });
            }else{
                window.location.href = `${baseUrl}/public/auth`;
            }
        },
        ajax:{
            checkScheduleHoliday:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajax({
                        type:'post',
                        url:checkScheduleHolidayApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                    })
                })
            },
            getAllScheduleHolidays:()=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajax({
                        type:'get',
                        url:getAllScheduleHolidaysApi,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                    })
                })
            },
            checkIfAvailable:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajax({
                        type:'post',
                        url:checkIfAvailableApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                    })
                })
            },
            getScheduleByDate:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajax({
                        type:'post',
                        url:getScheduleByDateApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                        // console.log(response)
                        // if(!response.isError){
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }else{
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }
                        // ajaxAddOn.swalMessage(response.isError,response.message);
                    })
                })
            },
            getAvailableTime:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajax({
                        type:'post',
                        url:getAvailableTimeApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                        // console.log(response)
                        // if(!response.isError){
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }else{
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }
                        // ajaxAddOn.swalMessage(response.isError,response.message);
                    })
                })
            },
            getSingleSchedule:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajax({
                        type:'post',
                        url:getSingleScheduleApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                        // console.log(response)
                        // if(!response.isError){
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }else{
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }
                        // ajaxAddOn.swalMessage(response.isError,response.message);
                    })
                })
            },
            checkifHasSchedule:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajax({
                        type:'post',
                        url:checkifHasScheduleApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                        // console.log(response)
                        // if(!response.isError){
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }else{
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }
                        // ajaxAddOn.swalMessage(response.isError,response.message);
                    })
                })
            },
            addSchedule:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajaxForm({
                        type:'post',
                        url:addScheduleApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                        // console.log(response)
                        // if(!response.isError){
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }else{
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }
                        // ajaxAddOn.swalMessage(response.isError,response.message);
                    })
                })
            },
            updateSchedule:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajaxForm({
                        type:'post',
                        url:updateScheduleApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                        // console.log(response)
                        // if(!response.isError){
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }else{
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }
                        // ajaxAddOn.swalMessage(response.isError,response.message);
                    })
                })
            },
            changePassword:(payload)=>{
                return new Promise((resolve,reject)=>{
                    ajaxAddOn.ajaxForm({
                        type:'post',
                        url:changePasswordApi,
                        payload:payload,
                        dataType:'json',
                    })
                    .then(response=>{
                        resolve(response)
                        // console.log(response)
                        // if(!response.isError){
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }else{
                        //     localStorage.clear();
                        //     window.location.href = baseUrl;
                        // }
                        // ajaxAddOn.swalMessage(response.isError,response.message);
                    })
                })
            },
            showSchedules:(payload)=>{

                dashboard.ajax.checkScheduleHoliday(payload)
                .then(response=>{
                   if(!response.isError){
                    //    console.log("response.data.length",response.dat)
                        if(response.data != ""){
                            $("#note")
                            .empty()
                            .append(
                                $("<div>")
                                    .attr({
                                        role:'alert'
                                    })
                                    .addClass("alert alert-warning")
                                    .append(
                                        $("<p>")
                                            .addClass("alert-heading")
                                            .text("Holiday/Special Event")
                                        ,
                                        $("<p>")
                                            .text(response.data.event),
                                        $("<p>")
                                            .text(response.data.meridiem == "ALL" ? "No schedule will be plotted on this date" : (response.data.meridiem == "AM" ? "Available schedule on this date is PM only" : "Available schedule on this date is AM only") ),
                                    )
                                    
                            )
                        }else{
                            $("#note")
                            .empty()
                        }
                        ajaxAddOn.removeFullPageLoading();
                   }
                })

                ajaxAddOn.ajax({
                    type:'post',
                    url:getScheduleAllApi,
                    payload:payload,
                    dataType:'json',
                })
                .then(response=>{
                    if(!response.isError){
                        $("#calendar").empty()
                        if(response.data.length > 0){
                            $.each(response.data,function(k,v){
                                $("#calendar").append(
                                    $("<div>")
                                    .addClass("col-12 mb-1")
                                    .append(
                                        $("<div>")
                                        .addClass(`card ${v.borrower_id == getApiData.borrower_id ? "border-left-primary" : "border-left-secondary"}  shadow h-100 py-2`)
                                        .append(
                                            $("<div>")
                                            .addClass("card-body")
                                            .append(
                                                $("<div>")
                                                .addClass("row no-gutters align-items-center")
                                                .append(
                                                    $("<div>")
                                                    .addClass("col mr-2")
                                                    .append(
                                                        $("<div>")
                                                            .addClass(`text-xs font-weight-bold ${v.borrower_id == getApiData.borrower_id ? "text-primary" : "text-secondary"} text-uppercase mb-1`)
                                                            .text(`${moment(v.start).format("MMM, DD YYYY HH:mm a")} - ${moment(v.end).format("HH:mm a")}`),
                                                        $("<div>")
                                                            .addClass("mb-0 font-weight-bold text-gray-800")
                                                            .append(
                                                                $("<span>")
                                                                    .text(v.name),
                                                                // $("</br>"),
                                                                // $("<span>")
                                                                //     .text(v.title)
                                                            ),
                                                            
                                                    ),
                                                    v.borrower_id == getApiData.borrower_id ?
                                                    $('<div>')
                                                    .addClass("col-auto dropdown")
                                                    .css({
                                                        'font-size':'15px',
                                                    })
                                                    .append(
                                                        $("<a>")
                                                            .addClass("dropdown-toggle")
                                                            .attr({
                                                                id:`dropdownMenuButton-${v.id}`,
                                                                'data-toggle':'dropdown',
                                                                'aria-haspopup':true,
                                                                'aria-expanded':false,
                                                            }),
                                                            $("<div>")
                                                                .addClass("dropdown-menu")
                                                                .attr({
                                                                    'aria-labelledby':`dropdownMenuButton-${v.id}`
                                                                })
                                                                .append(
                                                                    
                                                                    $("<a>")
                                                                    .addClass("dropdown-item")
                                                                    .attr({
                                                                        href:'#'
                                                                    }).text("View")
                                                                    .click(function(){
                                                                            let id = v.id;
                                                                            dashboard.ajax.getSingleSchedule({
                                                                                'id':id
                                                                            }).then(response=>{
                                                                                let name     = response.data.name;
                                                                                let start    = response.data.start;
                                                                                let end      = response.data.end;
                                                                                let district = response.data.district_name;
                                                                                let title    = response.data.title;
                                                                                Swal.fire({
                                                                                    title: `${name}`,
                                                                                    icon: 'info',
                                                                                    html:
                                                                                        "<ul class='list-group'>"+
                                                                                        "<li class='list-group-item'>Start:"+ start +'</li>'+
                                                                                        "<li class='list-group-item'>End:"+ end +'</li>'+
                                                                                        "<li class='list-group-item'>District:"+ district +'</li>'+
                                                                                        "<li class='list-group-item'>Description:"+ title +'</li>'+
                                                                                        "</ul>",
                                                                                    howCancelButton: true,
                                                                                    confirmButtonColor: '#3085d6',
                                                                                    cancelButtonColor: '#d33',
                                                                                    confirmButtonText: 'Ok'
                                                                                })
                                                                                ajaxAddOn.removeFullPageLoading();
                                                                            })
                                                                    }),
                                                                    $("<a>")
                                                                    .addClass("dropdown-item")
                                                                    .attr({
                                                                        href:'#'
                                                                    })
                                                                    .text("Update")
                                                                    .click(function(){
                                                                        if(v.borrower_id == getApiData.borrower_id){
                                                                            // if(moment(v.start).format("L HH:mm") <= moment().format("L HH:mm")){/
                                                                                _id          = v.id;
                                                                                _borrower_id = v.borrower_id;
                                                                                let payload  = {
                                                                                    'borrower_id':_borrower_id,
                                                                                    'date':moment(v.start).format("L")
                                                                                }
                                                                                let pastDate        = moment(v.start).format("L h:mm");
                                                                                _date = pastDate;
                                                                                isUpdate = true;
                                                                                dashboard.display.showUpdateTitle();
                                                                                if(moment(v.start).format("L") < moment().format("L")){
                                                                                    Swal.fire(
                                                                                        'Error',
                                                                                        'Date is already behind the current date!',
                                                                                        'warning'
                                                                                    )
                                                                                    calendar.fullCalendar('refetchEvents');
                                                                                    ajaxAddOn.removeFullPageLoading();
                                                                                    return false;
                                                                                }
                                                                                new Promise((r,j)=>{
                                                                                    dashboard.ajax.getScheduleByDate({
                                                                                        'date':pastDate
                                                                                    }).then(response=>{
                                                                                        let doneTime = [];
                                                                                        if(!response.isError){
                                                                                            // $("#frm-add-schedule :input#time").empty()
                                                                                            // console.log(response.data)
                                                                                            // $.each(response.data,function(k,v){
                                                                                            //     doneTime.push(v.start)
                                                                                            // })
                                                                                            // let minutes         = moment(v.start).format("h");
                                                                                            // let isfirst         = true;
                                                                                            // let scheduleDate    = moment().format("L");
                                                                                            // let todayDate       = moment(v.start).format("L");
                                                                                            // // alert(todayDate +">="+scheduleDate)
                                                                                            // if(todayDate >= scheduleDate){
                                                                                            //     time = (todayDate <= moment().format("L")) ? moment().format("H") : 9;
                                                                                            //     for (let i = time; i < 18; i++) {
                                                                                            //         let sec2 = 0;
                                                                                            //         if(isfirst){
                                                                                            //             if(todayDate == scheduleDate){
                                                                                            //                 if(minutes >= 0 && minutes < 15){
                                                                                            //                     sec2 = 0;
                                                                                            //                 }else{
                                                                                            //                     sec2 = 30;
                                                                                            //                 }
                                                                                            //             }
                                                                                            //             isfirst = false;
                                                                                            //         }
                                                                                            //         for (i2= sec2; i2 <= 30; i2 = i2 + 30) { 
                                                                                            //             sec             = i2 == 0 ? `0${i2}` : i2;
                                                                                            //             timeDisplay     = i.toString().length == 1 ? `0${i}:${sec}` : `${i}:${sec}`;
                                                                                            //             if(!doneTime.includes(timeDisplay)){
                                                                                            //                 $("#frm-add-schedule :input#time").append(
                                                                                            //                     $("<option>")
                                                                                            //                         .attr({
                                                                                            //                             value:timeDisplay
                                                                                            //                         })
                                                                                            //                         .text(timeDisplay),
                                                                                            //                 )
                                                                                            //             }
                                                                                            //         }
                                                                                                    
                                                                                            //     }
                                                                                            //     console.log("doneTime",doneTime)
                                                                                                
                                                                                            //         $("#add-schedule-modal").modal("show");
                                                                                            //         $("#add-schedule-modal :input#name").val(getApiData.Name)
                                                                                            //         $("#add-schedule-modal :input#district").val(getApiData.district_name)
                                                                                                    
                                                                    
                                                                                                    // }
                                                                                                    $("#add-schedule-modal").modal("show");
                                                                                                    $("#add-schedule-modal :input#name").val(getApiData.Name)
                                                                                                    $("#add-schedule-modal :input#title").val(v.title)
                                                                                                    $("#add-schedule-modal :input#meridiem").find(`option[value=${v.meridiem}]`).attr({selected:"selected"})
                                                                                                    $("#add-schedule-modal :input#district").val(getApiData.district_name)  
                                                                                                
                                                                                                }
                                                                                                ajaxAddOn.removeFullPageLoading();
                                                                                            })
                                                                                        })
                                                                                // dashboard.ajax.checkifHasSchedule(payload)
                                                                                // .then(response_check=>{
                                                                                //     if(!response_check.isError){
                                                                                        
                                                                                //     }else{
                                                                                //         ajaxAddOn.swalMessage(response_check.isError,response_check.message);
                                                                                //         if(!_isMobile){
                                                                                //             calendar.fullCalendar('refetchEvents');
                                                                                //         }
                                                                                //     }
                                                                                //     ajaxAddOn.removeFullPageLoading();
                                                                                // })
                                                                            // }
                                                                        }
                                                                    })
                                                                )
                                                        // $("<i>")
                                                        // .addClass("fas fa-calendar fa-2x text-gray-300")
                                                    ) : 
                                                    $("<i>")
                                                        .addClass("fas fa-calendar fa-2x text-gray-300")
                                                )
                                            )
                                        )
                                    )
                                    
                                )
                            })
                        }else{
                            $("#calendar").append(
                                $("<div>")
                                .addClass("col-12")
                                .append(
                                    $("<div>")
                                    .addClass("card border-left-success shadow h-100 py-2")
                                    .append(
                                        $("<div>")
                                        .addClass("card-body")
                                        .append(
                                            $("<div>")
                                            .addClass("row no-gutters align-items-center")
                                            .append(
                                                $("<div>")
                                                .addClass("col mr-2")
                                                .append(
                                                    $("<div>")
                                                        .addClass("text-xs font-weight-bold text-success text-uppercase mb-1")
                                                        .text("No schedule on this date"),
                                                    $("<div>")
                                                        .addClass("h5 mb-0 font-weight-bold text-gray-800")
                                                        .text("-"),
                                                ),
                                                $('<div>')
                                                .addClass("col-auto")
                                                .append(
                                                    $("<i>")
                                                    .addClass("fas fa-calendar fa-2x text-gray-300")
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        }
                    }else{
                        ajaxAddOn.swalMessage(response.isError,response.message);
                    }
                    ajaxAddOn.removeFullPageLoading();
                })
            },
            deAuth:(payload)=>{
                ajaxAddOn.ajax({
                    type:'post',
                    url:deauthApi,
                    payload:payload,
                    dataType:'json',
                })
                .then(response=>{
                    if(!response.isError){
                        localStorage.clear();
                        window.location.href = baseUrl;
                        ajaxAddOn.swalMessage(response.isError,response.message);
                    }else{
                        localStorage.clear();
                        window.location.href = baseUrl;
                    }
                    
                })
              
            },
        },
        display:{
            removeSpace:(str)=>{
                str =  str.replace(/\s/g, '');
                return str;
            },
            setNavActive:()=>{
                let current_nav = localStorage.getItem("current-tab");
                if(current_nav != null){
                    $("ul#accordionSidebar").find(".nav-item").removeClass("active")
                    $("ul#accordionSidebar").find("[data-item='" + current_nav + "']").addClass("active"); 
                }
            },
            showAddTitle:()=>{
                $("#add-schedule-modal").find(".modal-title")
                    .empty()
                    .text("Add Schedule");
            },
            showUpdateTitle:()=>{
                $("#add-schedule-modal").find(".modal-title")
                    .empty()
                    .text("Update Schedule");
            },
            showCalendar:()=>{
                calendar = $('#calendar').fullCalendar({
                    // editable:true,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month'
                        // right: 'month,agendaWeek,agendaDay'
                    },
                    events: baseUrl + `schedule/all/${getApiData.borrower_id}`,
                    eventRender: function (event, element) {
                        // console.log(ajaxAddOn.lowercase(event.title)+" Meow "+ ajaxAddOn.lowercase(getApiData.Name) )
                        if(event.borrower_id != getApiData.borrower_id){
                            event.editable= false;
                        }else{
                            event.editable= true;
                        }
                        
                        if(moment(event.start).format("L HH:mm") <= moment().format("L HH:mm")){
                            event.editable= false;
                        }
                    } ,
                    selectable:true,
                    selectHelper:true,
                    dayRender: function(date, cell){
                        minDate = moment().format("L")
                        console.log(minDate + "-" + moment(date).format("L"));
                        if (moment(date).format("L") < minDate){
                            $(cell).addClass('disabled');
                        }
                    },
                    dayClick: function(date, jsEvent, view) {

                        dashboard.ajax.checkIfAvailable({
                            'name': 'date',
                            'value': moment(date).format("L"),
                        }).then(response=>{
                            if(!response.isError){
                                let payload = {
                                    'borrower_id':getApiData.borrower_id,
                                    'date':moment(date).format("L")
                                }
                                dashboard.ajax.checkifHasSchedule(payload)
                                .then(response_check=>{
                                    if(!response_check.isError){
                                        _date = date.format();
                                        dashboard.ajax.getScheduleByDate({
                                            'date':_date
                                        }).then(response=>{
                                            let doneTime = [];
                                            if(!response.isError){
                                                // $("#frm-add-schedule :input#time").empty()
                                                // $.each(response.data,function(k,v){
                                                //     doneTime.push(v.start)
                                                // })
                                                // let time            = new Date().getHours() <= 9 ? 9 : new Date().getHours();
                                                // let minutes         = new Date().getMinutes();
                                                // let isfirst         = true;
                                                // let scheduleDate    = moment(_date).format("L");
                                                // let currentDate     = moment().format("L");
                                                // if(scheduleDate >= currentDate){
                                                //     time = (currentDate == scheduleDate) ? time : 9;
                                                //     for (let i = time; i < 18; i++) {
                                                //         let sec2 = 0;
                                                //         if(isfirst){
                                                //             if(currentDate == scheduleDate){
                                                //                 if(minutes >= 0 && minutes < 15){
                                                //                     sec2 = 0;
                                                //                 }else{
                                                //                     sec2 = 30;
                                                //                 }
                                                //             }
                                                //             isfirst = false;
                                                //         }
                                                //         for (i2= sec2; i2 <= 30; i2 = i2 + 30) { 
                                                //             sec             = i2 == 0 ? `0${i2}` : i2;
                                                //             timeDisplay   = i.toString().length == 1 ? `0${i}:${sec}` : `${i}:${sec}`;
                                                //             if(!doneTime.includes(timeDisplay)){
                                                //                 $("#frm-add-schedule :input#time").append(
                                                //                     $("<option>")
                                                //                         .attr({
                                                //                             value:timeDisplay
                                                //                         })
                                                //                         .text(timeDisplay),
                                                //                 )
                                                //             }
                                                        
                                                //         }
                                                        
                                                //     }
                                                //     console.log("doneTime",doneTime)
                                                    
                                                    // if($("#frm-add-schedule :input#time").find("option").length <= 0){
                                                        // Swal.fire(
                                                        //     'Warning',
                                                        //     'No more schedule available on this date please select another date !',
                                                        //     'warning'
                                                        // )
                                                    // }else{
                                                        $("#add-schedule-modal :input#name").val(getApiData.Name)
                                                        $("#add-schedule-modal :input#district").val(getApiData.district_name)
                                                        $("#add-schedule-modal").modal("show");
                                                    // }
        
                                                // }
                                            }
                                            ajaxAddOn.removeFullPageLoading();
                                        })
                                    }else{
                                        ajaxAddOn.swalMessage(response_check.isError,response_check.message);
                                        if(!_isMobile){
                                            calendar.fullCalendar('refetchEvents');
                                        }
                                    }
                                    ajaxAddOn.removeFullPageLoading();
                                })
                            }else{

                            }
                        })
                    },
                    eventClick:function(event){
                        let v = event;
                        if(v.borrower_id == getApiData.borrower_id){
                            // if(moment(v.start).format("L HH:mm") <= moment().format("L HH:mm")){/
                                _id          = v.id;
                                _borrower_id = v.borrower_id;
                                let payload  = {
                                    'borrower_id':_borrower_id,
                                    'date':moment(v.start).format("L")
                                }
                                let pastDate        = moment(v.start).format("L h:mm");
                                _date = pastDate;
                                isUpdate = true;
                                dashboard.display.showUpdateTitle();
                                if(moment(v.start).format("L") < moment().format("L")){
                                    Swal.fire(
                                        'Error',
                                        'Date is already behind the current date!',
                                        'warning'
                                    )
                                    if(!_isMobile){
                                        calendar.fullCalendar('refetchEvents');
                                    }
                                    ajaxAddOn.removeFullPageLoading();
                                    return false;
                                }
                                new Promise((r,j)=>{
                                    dashboard.ajax.getScheduleByDate({
                                        'date':pastDate
                                    }).then(response=>{
                                        let doneTime = [];
                                        if(!response.isError){
                                            // $("#frm-add-schedule :input#time").empty()
                                            // console.log(response.data)
                                            // $.each(response.data,function(k,v){
                                            //     doneTime.push(v.start)
                                            // })
                                            // let minutes         = moment(v.start).format("h");
                                            // let isfirst         = true;
                                            // let scheduleDate    = moment().format("L");
                                            // let todayDate       = moment(v.start).format("L");
                                            // // alert(todayDate +">="+scheduleDate)
                                            // if(todayDate >= scheduleDate){
                                            //     time = (todayDate <= moment().format("L")) ? moment().format("H") : 9;
                                            //     for (let i = time; i < 18; i++) {
                                            //         let sec2 = 0;
                                            //         if(isfirst){
                                            //             if(todayDate == scheduleDate){
                                            //                 if(minutes >= 0 && minutes < 15){
                                            //                     sec2 = 0;
                                            //                 }else{
                                            //                     sec2 = 30;
                                            //                 }
                                            //             }
                                            //             isfirst = false;
                                            //         }
                                            //         for (i2= sec2; i2 <= 30; i2 = i2 + 30) { 
                                            //             sec             = i2 == 0 ? `0${i2}` : i2;
                                            //             timeDisplay     = i.toString().length == 1 ? `0${i}:${sec}` : `${i}:${sec}`;
                                            //             if(!doneTime.includes(timeDisplay)){
                                            //                 $("#frm-add-schedule :input#time").append(
                                            //                     $("<option>")
                                            //                         .attr({
                                            //                             value:timeDisplay
                                            //                         })
                                            //                         .text(timeDisplay),
                                            //                 )
                                            //             }
                                            //         }
                                                    
                                            //     }
                                            //     console.log("doneTime",doneTime)
                                                
                                            //         $("#add-schedule-modal").modal("show");
                                            //         $("#add-schedule-modal :input#name").val(getApiData.Name)
                                            //         $("#add-schedule-modal :input#district").val(getApiData.district_name)
                                           
            
                                            // }
                                            $("#add-schedule-modal").modal("show");
                                            $("#add-schedule-modal :input#name").val(getApiData.Name)
                                            $("#add-schedule-modal :input#title").val(v.title)
                                            $("#add-schedule-modal :input#meridiem").find(`option[value=${v.meridiem}]`).attr({selected:"selected"})
                                            $("#add-schedule-modal :input#district").val(getApiData.district_name)  
                                        
                                        }
                                        ajaxAddOn.removeFullPageLoading();
                                    })
                                })
                            // }
                        }
                    },
                    // eventClick:function(event){
                    //     let id = event.id;
                    //     dashboard.ajax.getSingleSchedule({
                    //         'id':id
                    //     }).then(response=>{
                    //         let name     = response.data.name;
                    //         let start    = response.data.start;
                    //         let end      = response.data.end;
                    //         let district = response.data.district_name;
                    //         let title    = response.data.title;
                    //         Swal.fire({
                    //             title: "<strong> Name:"+name+"</strong>",
                    //             icon: 'info',
                    //             html:
                    //                 "<ul class='list-group'>"+
                    //                 "<li class='list-group-item'>Start:"+ start +'</li>'+
                    //                 "<li class='list-group-item'>End:"+ end +'</li>'+
                    //                 "<li class='list-group-item'>District:"+ district +'</li>'+
                    //                 "<li class='list-group-item'>Description:"+ title +'</li>'+
                    //                 "</ul>",
                    //             howCancelButton: true,
                    //             confirmButtonColor: '#3085d6',
                    //             cancelButtonColor: '#d33',
                    //             confirmButtonText: 'Ok'
                    //         })
                    //         ajaxAddOn.removeFullPageLoading();
                    //     })
                    // },
                    eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {

                        dashboard.ajax.checkIfAvailable({
                            'name': 'date',
                            'value': event.start.format("L"),
                        }).then(response=>{
                            if(!response.isError){
                                _id          = event.id;
                                _borrower_id = event.borrower_id;
                                let payload  = {
                                    'borrower_id':_borrower_id,
                                    'date':event.start.format("L")
                                }
                                dashboard.ajax.checkifHasSchedule(payload)
                                .then(response_check=>{
                                    if(!response_check.isError){
                                        let pastDate = event.start.format("L h:mm:ss");
                                        let currentDate     = moment(event.start._i).format("L h:mm:ss");
                                        let pastTime        = event.start.format("hh:mm");
                                        let currentTime     = moment(event.start._i).format("hh:mm");
                                        _date = pastDate;
                                        isUpdate = true;
                                        dashboard.display.showUpdateTitle();
                                        if(event.start.format("L") < moment().format("L")){
                                            Swal.fire(
                                                'Error',
                                                'Date is already behind the current date!',
                                                'warning'
                                            )
                                            calendar.fullCalendar('refetchEvents');
                                            ajaxAddOn.removeFullPageLoading();
                                            return false;
                                        }
                                        new Promise((r,j)=>{
                                            dashboard.ajax.getScheduleByDate({
                                                'date':pastDate
                                            }).then(response=>{
                                                let doneTime = [];
                                                if(!response.isError){
                                    
                                                        // if(currentDate != )
                                                    // $("#frm-add-schedule :input#time").empty()
                                                    // console.log(response.data)
                                                    // $.each(response.data,function(k,v){
                                                    //     doneTime.push(v.start)
                                                    // })
                                                    // // let time            = event.start.format("h") <= 9 ? 9 : event.start.format("h");
                                                    // let minutes         = event.start.format("h");
                                                    // let isfirst         = true;
                                                    // let scheduleDate    = moment().format("L");
                                                    // let todayDate       = moment(event.start).format("L");
                                                    // // alert(todayDate +">="+scheduleDate)
                                                    // if(todayDate >= scheduleDate){
                                                    //     time = (todayDate <= moment().format("L")) ? moment().format("H") : 9;
                                                    //     for (let i = time; i < 18; i++) {
                                                    //         let sec2 = 0;
                                                    //         if(isfirst){
                                                    //             if(todayDate == scheduleDate){
                                                    //                 if(minutes >= 0 && minutes < 15){
                                                    //                     sec2 = 0;
                                                    //                 }else{
                                                    //                     sec2 = 30;
                                                    //                 }
                                                    //             }
                                                    //             isfirst = false;
                                                    //         }
                                                    //         for (i2= sec2; i2 <= 30; i2 = i2 + 30) { 
                                                    //             sec             = i2 == 0 ? `0${i2}` : i2;
                                                    //             timeDisplay     = i.toString().length == 1 ? `0${i}:${sec}` : `${i}:${sec}`;
                                                    //             if(!doneTime.includes(timeDisplay)){
                                                    //                 $("#frm-add-schedule :input#time").append(
                                                    //                     $("<option>")
                                                    //                         .attr({
                                                    //                             value:timeDisplay
                                                    //                         })
                                                    //                         .text(timeDisplay),
                                                    //                 )
                                                    //             }
                                                    //         }
                                                            
                                                    //     }
                                                    //     console.log("doneTime",doneTime)
                                                        
                                                        // if($("#frm-add-schedule :input#time").find("option").length <= 0){
                                                        //     Swal.fire(
                                                        //         'Warning',
                                                        //         'No more schedule available on this date please select another date !',
                                                        //         'warning'
                                                        //     )
                                                        // }else{
                                                            $("#add-schedule-modal").modal("show");
                                                            $("#add-schedule-modal :input#name").val(getApiData.Name)
                                                            $("#add-schedule-modal :input#district").val(getApiData.district_name)
                                                            $("#add-schedule-modal :input#meridiem").val(event.meridiem)
                                                            $("#add-schedule-modal :input#title").val(event.title)
                                                        // }
                    
                                                    // }
                    
                                                
                                                }
                                                ajaxAddOn.removeFullPageLoading();
                                            })
                                        })
                                    }else{
                                        ajaxAddOn.swalMessage(response_check.isError,response_check.message);
                                        calendar.fullCalendar('refetchEvents');
                                    }
                                    ajaxAddOn.removeFullPageLoading();
                                })
                            }else{
                                ajaxAddOn.swalMessage(response.isError,response.message);
                            }
                        }) 
                    },
                    eventAfterAllRender: function (view) {
                        //Use view.intervalStart and view.intervalEnd to find date range of holidays
                        //Make ajax call to find holidays in range.
                       
                        dashboard.ajax.getAllScheduleHolidays()
                        .then(response=>{
                            if(!response.isError){
                                console.log("responseresponse",response)
                                $.each(response.data,function(k,v){
                                    holidayMoment = moment(v.date,'YYYY-MM-DD');
                                    if (view.name == 'month') {
                                        $("td[data-date=" + holidayMoment.format('YYYY-MM-DD') + "]").addClass('holiday text-danger text-center bold').text(ajaxAddOn.capitalize(v.event));
                                    }else if (view.name =='agendaWeek') {
                                        var classNames = $("th:contains(' " + holidayMoment.format('M/D') + "')").attr("class");
                                        if (classNames != null) {
                                            var classNamesArray = classNames.split(" ");
                                            for(var i = 0; i < classNamesArray.length; i++) {
                                                if(classNamesArray[i].indexOf('fc-col') > -1) {
                                                    $("td." + classNamesArray[i])
                                                        .addClass('holiday text-danger text-center bold')
                                                        .text(ajaxAddOn.capitalize(v.event));
                                                    break;
                                                }
                                            }
                                        }
                                    } else if (view.name == 'agendaDay') {
                                        if(holidayMoment.format('YYYY-MM-DD') == $('#calendar').fullCalendar('getDate').format('YYYY-MM-DD')) {
                                            $("td.fc-col0").addClass('holiday text-danger text-center bold').text(ajaxAddOn.capitalize(v.event));
                                        };
                                    }
                                })
                            }else{
                                ajaxAddOn.swalMessage(response.isError,response.message);
                            }
                            ajaxAddOn.removeFullPageLoading();
                        })
                    }
                });
            }
        }
    }

    dashboard.init();
    $('#add-schedule-modal').on('hidden.bs.modal', function (e) {
        if(!_isMobile){
            calendar.fullCalendar('refetchEvents');
        }
        isUpdate = false;
        dashboard.display.showAddTitle();
    })
    $("#frm-add-schedule").validate({
        errorElement: 'span', //change error placement to span
        errorClass: 'text-danger', // add error class to text danger on bootstrap
        highlight: function (element, errorClass, validClass) {  //init hightligh function
            $(element).closest('.form-group').removeClass("has-success"); // removed class success if the data is error
            $(element).closest('.form-group').addClass("has-error"); // add error class
            $(element).addClass("is-invalid"); // add error class
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass("has-error"); // removed class error if the data is error
            $(element).closest('.form-group').addClass("has-success"); // add success class
            $(element).removeClass("is-invalid"); // add error class
        },
        rules:{ // initialize rules
            title:{
                required:true, // add required
            },
            time:{
                required:true, // add required
            },
            reason:{
                required:true, // add required
            },
        },
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form).serializeArray();
            formData.push({
                'name': '_date',
                'value': _date,
            })

            dashboard.ajax.checkIfAvailable({
                'name': 'date',
                'value': _date,
            }).then(response=>{
                if(!response.isError){
                    if(!isUpdate){
                        formData.push({
                            'name': 'name',
                            'value': getApiData.Name,
                        })
                        formData.push({
                            'name': 'borrower_id',
                            'value': getApiData.borrower_id,
                        })
                        dashboard.ajax.addSchedule(formData)
                        .then(data=>{
                            if(!data.isError){
                                if(!_isMobile){
                                    calendar.fullCalendar('refetchEvents');
                                }else{
                                    dashboard.ajax.showSchedules({
                                        date:moment(_date).format("L")
                                    });
                                }
                                $(".modal").modal("hide")
                            }
                            ajaxAddOn.swalMessage(data.isError,data.message)
                            ajaxAddOn.removeFullPageLoading();
                            $("form").find("button").find("i.fa-spinner").remove();
                        })
                    }else{
                        formData.push({
                            name:"_date",
                            value:_date,
                        })
                        formData.push({
                            name:"id",
                            value:_id,
                        })
                        formData.push({
                            'name': 'name',
                            'value': getApiData.Name,
                        })
                        formData.push({
                            'name': 'borrower_id',
                            'value': getApiData.borrower_id,
                        })
                        dashboard.ajax.updateSchedule(formData)
                        .then(data=>{
                            if(!data.isError){
                                if(!_isMobile){
                                    calendar.fullCalendar('refetchEvents');
                                }else{
                                    dashboard.ajax.showSchedules({
                                        date:moment(_date).format("L")
                                    });
                                }
                                $(".modal").modal("hide")
                            }
                            ajaxAddOn.swalMessage(data.isError,data.message)
                            ajaxAddOn.removeFullPageLoading();
                            $("form").find("button").find("i.fa-spinner").remove();
                        })
                    }
                }else{
                    ajaxAddOn.swalMessage(response.isError,response.message);
                }
            })

            
        }
    })
    $("#btn-add-schedule").click(function(){
        let date = $("#datepicker-select").val();

        dashboard.ajax.checkIfAvailable({
            'name': 'date',
            'value': date,
        }).then(response=>{
            if(!response.isError){
                let payload = {
                    'borrower_id':getApiData.borrower_id,
                    'date':moment(date).format("L")
                }
                dashboard.ajax.checkifHasSchedule(payload)
                .then(response_check=>{
                    if(!response_check.isError){
                        _date = moment(date).format("L");
                        dashboard.ajax.getScheduleByDate({
                            'date':_date
                        }).then(response=>{
                            let doneTime = [];
                            if(!response.isError){
                                // $("#frm-add-schedule :input#time").empty()
                                // $.each(response.data,function(k,v){
                                //     doneTime.push(v.start)
                                // })
                                // let time            = new Date().getHours() <= 9 ? 9 : new Date().getHours();
                                // let minutes         = new Date().getMinutes();
                                // let isfirst         = true;
                                // let scheduleDate    = moment(_date).format("L");
                                // let currentDate     = moment().format("L");
                                // if(scheduleDate >= currentDate){
                                //     time = (currentDate == scheduleDate) ? time : 9;
                                //     for (let i = time; i < 18; i++) {
                                //         let sec2 = 0;
                                //         if(isfirst){
                                //             if(currentDate == scheduleDate){
                                //                 if(minutes >= 0 && minutes < 5){
                                //                     sec2 = 0;
                                //                 }
                                //                 else if(minutes >= 5 && minutes < 10){
                                //                     sec2 = 10;
                                //                 }
                                //                 else if(minutes >= 10 && minutes < 15){
                                //                     sec2 = 15;
                                //                 }
                                //                 else if(minutes >= 15 && minutes < 20){
                                //                     sec2 = 20;
                                //                 }
                                //                 else if(minutes >= 20 && minutes < 25){
                                //                     sec2 = 25;
                                //                 }
                                //                 else if(minutes >= 25 && minutes < 30){
                                //                     sec2 = 30;
                                //                 }
                                //                 else if(minutes >= 30 && minutes < 35){
                                //                     sec2 = 35;
                                //                 }
                                //                 else if(minutes >= 35 && minutes < 40){
                                //                     sec2 = 40;
                                //                 }
                                //                 else if(minutes >= 40 && minutes < 45){
                                //                     sec2 = 45;
                                //                 }
                                //                 else if(minutes >= 45 && minutes < 50){
                                //                     sec2 = 50;
                                //                 }
                                //                 else if(minutes >= 50 && minutes < 55){
                                //                     sec2 = 55;
                                //                 }
                                //                 else{
                                //                     sec2 = 0;
                                //                 }
                                //             }
                                //             isfirst = false;
                                //         }
                                //         for (i2= sec2; i2 <= 60; i2 = i2 + 5) { 
                                //             sec             = i2 < 10 ? `0${i2}` : i2;
                                //             timeDisplay   = i.toString().length == 1 ? `0${i}:${sec}` : `${i}:${sec}`;
                                //             if(!doneTime.includes(timeDisplay)){
                                //                 $("#frm-add-schedule :input#time").append(
                                //                     $("<option>")
                                //                         .attr({
                                //                             value:timeDisplay
                                //                         })
                                //                         .text(timeDisplay),
                                //                 )
                                //             }
                                        
                                //         }
                                        
                                //     }
                                //     console.log("doneTime",doneTime)
                                    
                                    // if($("#frm-add-schedule :input#time").find("option").length <= 0){
                                    //     Swal.fire(
                                    //         'Warning',
                                    //         'No more schedule available on this date please select another date !',
                                    //         'warning'
                                    //     )
                                    // }else{
                                        $("#add-schedule-modal :input#name").val(getApiData.Name)
                                        $("#add-schedule-modal :input#district").val(getApiData.district_name)
                                        $("#add-schedule-modal").modal("show");
                                    // }

                                // }
                            }
                            ajaxAddOn.removeFullPageLoading();
                        })
                    }else{
                        ajaxAddOn.swalMessage(response_check.isError,response_check.message);
                        if(!_isMobile){
                            calendar.fullCalendar('refetchEvents');
                        }
                    }
                    ajaxAddOn.removeFullPageLoading();
                })
            }else{
                ajaxAddOn.swalMessage(response.isError,response.message);
            }
        })
    })
    $("select[name=title]").change(function(){
        let _this = $(this).val()
        if(_this == "Others" || _this == "Add Capital"){
            $(":input[name=reason]").parents(".col-sm-12").removeClass("hidden");
            if(_this == "Add Capital"){
                $(":input[name=reason]").attr({
                    placeholder:'Please especify where you want to add capital Ex. SSS UMID etc.'
                })
            }else{
                $(":input[name=reason]").attr({
                    placeholder:'Please especify'
                })
            }
        }else{
            $(":input[name=reason]").parents(".col-sm-12").addClass("hidden");
        }
        
    })
    // $('input.date').datepicker({
    //     uiLibrary: 'bootstrap4'
    // });
    $(".logout").on('click',function(){
        dashboard.ajax.deAuth();
    })
    // $("#change-password").on('click',function(){
    //    $("#change-pass-modal").modal("show")
    // })
    // $("#frm-change-password").validate({
    // 	errorElement: 'span', //change error placement to span
    //     errorClass: 'text-danger', // add error class to text danger on bootstrap
    //     highlight: function (element, errorClass, validClass) {  //init hightligh function
    //         $(element).closest('.form-group').removeClass("has-success"); // removed class success if the data is error
    //         $(element).closest('.form-group').addClass("has-error"); // add error class
    //     },
    //     unhighlight: function (element, errorClass, validClass) {
    //         $(element).closest('.form-group').removeClass("has-error"); // removed class error if the data is error
    //         $(element).closest('.form-group').addClass("has-success"); // add success class
    //     },
    // 	rules:{ // initialize rules
    // 		current_password:{
    // 			required:true, // add required
    //         },
    //         new_password:{
    // 			required:true, // add required
    //         },
    //         repassword:{
    //             required:true, // add required
    //             equalTo:$("#frm-change-password input[name=new_password]")
    //         },
    // 	},
    //     submitHandler:function(form){ // submit function if the all rules is true
    //         let formSerialize = $(form).serializeArray()
    //         newForm = formSerialize.filter(function( obj ) {
    //             return obj.name.indexOf("repassword") < 0;
    //         });
    //        dashboard.ajax.changePassword($.param(newForm))
    //        .then(response=>{
    //            if(!response.isError){
    //                 $(".modal").modal("hide");
    //                 $("#frm-change-password")[0].reset()
    //            }
    //            ajaxAddOn.swalMessage(response.isError,response.message);
    //        })
    // 	}
    // })

    // var optionsMobile =  {
    //     onKeyPress: function(cep, e, field, options) { 
    //       var masks = ['0000-000-0000','(+00)-000-000-0000'];
    //       var mask = (cep.charAt(2) == "0" ) ? masks[0] : masks[1];
    //       field.mask(mask,optionsMobile);
    //     }
    // };

    // var optionsTel =  {
    //     onKeyPress: function(cep, e, field, options) { 
    //       var masks = ['000-0000','(000)-000-0000'];
    //       var char = ["0","("]
    //       var mask = (char.includes(cep.charAt(0))) ? masks[1] : masks[0];

    //       field.mask(mask,optionsTel);
    //     }
    // };
    // var optionZip =  {
    //     onKeyPress: function(cep, e, field, options) { 
    //       var masks = ['0000'];
    //       var mask = masks[0];
    //       field.mask(mask,optionsTel);
    //     }
    // };
    // var optionSalary =  {
    //     onKeyPress: function(cep, e, field, options) { 
    //       var masks = ['0#'];
    //     //   var masks = ['000,000,000.00'];
    //       var mask = masks[0];
    //       field.mask(mask,{reverse: true},optionSalary);
    //     }
    // };
    // var optionTerm =  {
    //     onKeyPress: function(cep, e, field, options) { 
    //       var masks = ['000'];
    //     //   var masks = ['000,000,000.00'];
    //       var mask = masks[0];
    //       field.mask(mask,optionTerm);
    //     }
    // };
      
    // $('.mobile-mask').mask('(+00) 0000-0000',optionsMobile);
    // $('.home-mask').mask('0000-000',optionsTel);
    // $('.zip-mask').mask('0000',optionZip);
    // $('.term-mask').mask('000',optionTerm);
    // $('.salary-mask').mask('0#');
    // $('.number-mask').mask('0#');
    // // $('.salary-mask').mask('000.000.000.000.000,00', {reverse: true},optionSalary);

    // $('.sss-mask').mask('00-0000000-0');
    // $('.philhealth-mask').mask('00-000000000-0');
    // $('.pagibig-mask').mask('0000-0000-0000');
    // $('.tin-mask').mask('000-000-000-000');

    // $('[data-search]').on('keyup', function() {
    //     var searchVal = $(this).val();
    //     var filterItems = $('[data-filter-item]');

    //     if ( searchVal != '' ) {
    //         filterItems.addClass('hidden');
    //         $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    //     } else {
    //         filterItems.removeClass('hidden');
    //     }
    // });

    // $("ul#accordionSidebar").find(".nav-item").click(function(){
    //     $("ul#accordionSidebar").find(".nav-item").removeClass("active")
    //     $(this).addClass("active")
    //     localStorage.setItem("current-tab",$(this).data("item"));
    // })

})

$(document).ready(function(){
    // $("select").select2();
    $("#side-nav-container")
    .click(function(){
        dashboard.display.openSideNav();
    })

    $("#closeSideNav")
    .click(function(){
        dashboard.display.closeSideNav();
    })
    
  
    
})