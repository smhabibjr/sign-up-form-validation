$("document").ready(function () {
    /*$("#btnSignUp").on("click", function(){
      $("#signUpForm").show();
      $("#mainContainer").hide();

    });*/

//===============form validation================

$("#firstName").keyup(function(){
  let firstName = $("#firstName").val();
  if (firstName != ""){
    console.log("ok");
    $("#firstNameStatusOk").show();
    $("#firstNameStatusWorng").hide();
  }else{
    $("#firstNameStatusWorng").show();
    $("#firstNameStatusOk").hide();
  }

});

$("#lastName").keyup(function(){
  let lastName = $("#lastName").val();
  if (lastName != ""){
    console.log("ok");
    $("#lastNameStatusOk").show();
    $("#lastNameStatusWorng").hide();
  }else{
    $("#lastNameStatusWorng").show();
    $("#lastNameStatusOk").hide();
  }
  
});



$("#userEmail").keyup(function(){
  let userEmail = $("#userEmail").val();
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(userEmail.match(emailFormat)){
    $("#emailStatusOk").show();
    $("#emailStatusWorng").hide();
  }else{
    $("#emailStatusOk").hide();
    $("#emailStatusWorng").show();
  }

});
//------------------ password---------------------
$("#toggle-password1").click(function(){
  $(this).toggleClass("fa-eye fa-eye-slash");
})
//------------------ Repeat password---------------
$("#toggle-password").click(function(){
  $(this).toggleClass("fa-eye fa-eye-slash");
});













  });