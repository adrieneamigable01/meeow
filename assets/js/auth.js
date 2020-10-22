$(()=>{
    var authenticate = {
        init:()=>{
            if(localStorage.getItem('session') != null){
                session = JSON.parse(localStorage.getItem('session'));
                if(session.key != null){
                    window.location.href = 'dashboard';
                }else{
                    localStorage.clear();
                }
            }
            ajaxAddOn.removeFullPageLoading();
        },
        ajax:{
            login:(payload)=>{
                ajaxAddOn.ajaxForm({
                    type:'POST',
                    url:loginApi,
                    dataType:'json',
                    payload:payload,
                }).then(response=>{
                    
                    if(!response.isError){
                        localStorage.setItem('session',JSON.stringify(response.data[0]));
                        window.location.href = 'dashboard';
                    }
                    ajaxAddOn.swalMessage(response.isError,response.message)
                })
            }
        }
    }
    authenticate.init();
    $("#frm_login").validate({
        errorElement: 'span',
		errorClass: 'text-danger',
	    highlight: function (element, errorClass, validClass) {
	      $(element).closest('.form-group').addClass("has-warning");
	      $(element).closest('.form-group').find("input").addClass('is-invalid');
	      $(element).closest('.form-group').find("select").addClass('is-invalid');
	    },
	    unhighlight: function (element, errorClass, validClass) {
	      $(element).closest('.form-group').removeClass("has-warning");
	      $(element).closest('.form-group').find("input").removeClass('is-invalid');
	      $(element).closest('.form-group').find("select").removeClass('is-invalid');
	    },
        rules:{
            email:{
                required:true,
            },
            // password:{
            //     required:true,
            // },
        },
        submitHandler: function(form) {
            let payload = $(form).serialize()
            authenticate.ajax.login(payload);
        }
    })

    window.addEventListener('beforeunload',(event) =>{
        if(localStorage.getItem('session') != null){
            ajaxAddOn.setSessionData('session',session);
        }
    });


   
})

