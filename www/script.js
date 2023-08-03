$(document).ready(function() {
  console.log("jqery is ready");

  $("#loginForm").submit(function(event) {
    event.preventDefault();
    ajaxPost();
  })

  function ajaxPost() {
    let forData = {
      email: $('#email').val(),
      upwd: $('#upwd').val()
    }

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "api/login",
      data: JSON.stringify(forData),
      dataType: 'json',
      success : function(customer) {
        if(customer.valid == true) {
          $("#loginForm").addClass("success");
          $("#loginForm").removeClass("fail");
        }else{
          $("#loginForm").removeClass("success");
          $("#loginForm").addClass("fail");
        };

        $("#postResultDiv").html("<p>" + "post Successfully! <br>" + "Email Address:" + customer.email + "</br>" +
          "Password:" + customer.upwd + "</br>" + "Valid User" + customer.valid + "</P>"
        );
      },

      error : function(e) {
       alert("error");
       console.log("Error:", e);
      }
    })
    resetData();
  }
  
  function resetData() {
    $("#email").val('');
    $("#upwd").val('');
  }
})