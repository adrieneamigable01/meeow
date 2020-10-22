$(()=>{
    var headers = {};
    ajaxAddOn = {
        systemMessage:(data,message,elem)=>{
            $(elem)
                .prepend(
                    $("<div>")
                        .addClass("alert alert-danger")
                        .append(
                            $("<stong>")
                                .text(data == true ? 'Success: ' : 'Error: '),
                            $("<span>")
                                .text(message)
                        )
                )
        },
        // swalMessage:(isError,message)=>{

        //     icon = isError ? 'error' : 'success';

        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: 'top-end',
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: true,
        //         onOpen: (toast) => {
        //           toast.addEventListener('mouseenter', Swal.stopTimer)
        //           toast.addEventListener('mouseleave', Swal.resumeTimer)
        //         }
        //       })
              
        //       Toast.fire({
        //         icon: icon,
        //         title: message
        //       })
        // },
        swalMessage:(isError,message,redirectUrl = "")=>{

            icon = isError ? 'error' : 'success';
            const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })
            
            Toast.fire({
                icon: icon,
                title: message
            }).then(()=>{
                if(redirectUrl != ""){
                    window.location.href = redirectUrl;
                }
            })
            
        },
        addFullPageLoading:()=>{
            $(".loading").show()
        },
        removeFullPageLoading:()=>{
            $(".loading").hide()
        },
        addLoading:(elem)=>{
            $(elem).find("div.alert").remove()
            $(elem).find(":input").prop({"disabled":"disabled"})
            $(elem).find("button").prop({"disabled":"disabled"})
            $(elem).find("button").prepend(
                $("<i>")
                    .addClass("fas fa-spinner fa-spin"),
            )
        },
        removeLoading:(elem)=>{
            $(elem).find(":input").prop({"disabled":""})
            $(elem).find("button").prop({"disabled":""})
            $(elem).find("button").find("i.fa-spinner").remove();
        },
        ajaxForm:(object)=>{
            var apiData = localStorage.getItem("original");
            if(apiData != null){
                headers = {
                    "Authorization": 'Bearer '+ JSON.parse(apiData).access_token
                }
            }
            return new Promise((resolve,reject)=>{
                $.ajax({
                    type:object.type,
                    url:object.url,
                    dataType:object.dataType,
                    data:object.payload,
                    headers: headers,
                    beforeSend:function(xhr){
                       ajaxAddOn.addLoading("form")
                    },
                    success:function(response){
                        if(response.isError && response.message == "Token has expired"){
                            localStorage.clear();
                            window.location.href = baseUrl;
                        }else{
                            resolve(response)
                        }
                        
                    },
                    complete:function(){
                        ajaxAddOn.removeLoading("form")
                    }
                })
            })
        },
        ajax:(object)=>{

            var apiData = localStorage.getItem("original"); 

            if(apiData != null){
                headers = {
                    "Authorization": 'Bearer '+ JSON.parse(apiData).access_token
                }
            }

            return new Promise((resolve,reject)=>{
                $.ajax({
                    type:object.type,
                    url:object.url,
                    dataType:object.dataType,
                    data:object.payload,
                    headers: headers,
                    beforeSend:function(xhr){
                        ajaxAddOn.addFullPageLoading()
                    },
                    error:function(response){
                        console.error(response)
                    },
                    success:function(response){
                        if(response.isError && response.message == "Token has expired"){
                            ajaxAddOn.swalMessage(response.isError,response.message);
                            setTimeout(() => {
                                localStorage.clear();
                                window.location.href = baseUrl;
                            }, 1500);
                        }else{
                            resolve(response)
                        }
                    },
                    complete:function(){
                        ajaxAddOn.removeFullPageLoading()
                    }
                })
            })
        },
        setStorage:(storageName,data)=>{
            localStorage.setItem(storageName,data);
        },
        getStorage:(storageName)=>{
            return localStorage.getItem(storageName);
        },
        capitalizeFirst:(text)=> {
            return typeof text == "string" ? text.charAt(0).toUpperCase() + text.slice(1) : text
        },
        capitalize:(text)=> {
            return typeof text == "string" ?  text.toUpperCase() : text
        },
        lowecase:(text)=> {
            return typeof text == "string" ?  text.toLocaleLowerCase() : text
        },
        removeSpaces:(text)=>{
            return text.replace(/ /g,'');
        },
        sanitizeText:(text)=>{
            let sanitize =  text.replace(/_/g,' ');
            return ajaxAddOn.titleCase(sanitize);
        },
        titleCase:(str) => {
            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            }
            // Directly return the joined string
            return splitStr.join(' '); 
        },
        currency:(num)=>{
            let newNum  = parseFloat(num).toFixed(2);
            newNum = newNum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            return '₱ '+newNum;
        },
        lowercase:(str)=>{
            if(str != null){
                return str.toLowerCase();
            }
        }
    }
})