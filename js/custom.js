$("document").ready(function () {
//===============form validation================


//-------------first Name ---------------
$("#firstName").keyup(function(){
  let firstName = $("#firstName").val();
  if (firstName.length > 1){
    $("#firstNameStatusOk").show();
    $("#firstNameStatusWorng").hide();
  }else{
    $("#firstNameStatusWorng").show();
    $("#firstNameStatusOk").hide();
  }

});
//---------------- last Name -----------------
$("#lastName").keyup(function(){
  let lastName = $("#lastName").val();
  if (lastName != ""){
    $("#lastNameStatusOk").show();
    $("#lastNameStatusWorng").hide();
  }else{
    $("#lastNameStatusWorng").show();
    $("#lastNameStatusOk").hide();
  }
  
});
//------------------- Email field----------------
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
//------------------ password------------------
$("#toggle-password1").click(function(){
  $(this).toggleClass("fa-eye fa-eye-slash");
  var inputType = $($(this).attr("toggle"));
  if(inputType.attr("type") == "password"){
    inputType.attr("type","text");
  }else{
    inputType.attr("type","password");
  }
});
// When the user clicks on the password field, show the message box
$("#pass").focus(function(){
  $("#message").show();
});
// When the user clicks outside of the password field, hide the message box
$("#pass").blur(function(){
  $("#message").hide();
});

// When the user starts to type something inside the password field

//-------------- lowerCaseLetters validation -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var lowerCaseLetters = /[a-z]/g;
  if(inputedPass.match(lowerCaseLetters)){
    $("#letter").removeClass("invalid");
    $("#letter").addClass("valid");
  }else{
    $("#letter").removeClass("valid");
    $("#letter").addClass("invalid");
  }
});

//-------------- UpperCaseLetters validation -----------

$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var capitalCaseLetters = /[A-Z]/g;
  if(inputedPass.match(capitalCaseLetters)){
    $("#capital").removeClass("invalid");
    $("#capital").addClass("valid");
  }else{
    $("#capital").removeClass("valid");
    $("#capital").addClass("invalid");
  }
});
//-------------- numbers validation -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var numbers = /[0-9]/g;
  if(inputedPass.match(numbers)){
    $("#number").removeClass("invalid");
    $("#number").addClass("valid");
  }else{
    $("#number").removeClass("valid");
    $("#number").addClass("invalid");
  }
});

//-------------- special character -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var specialChar = /[!@#$%^&*]/g;
  if(inputedPass.match(specialChar)){
    $("#special").removeClass("invalid");
    $("#special").addClass("valid");
  }else{
    $("#special").removeClass("valid");
    $("#special").addClass("invalid");
  }
});
//-------------- length validation  -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  
  if(inputedPass.length > 8){
    $("#length").removeClass("invalid");
    $("#length").addClass("valid");
  }else{
    $("#length").removeClass("valid");
    $("#length").addClass("invalid");
  }
});

//------------------ Repeat password---------------
$("#passConfirm").keyup(function(){
  var passValue = $("#pass").val();
  var passConfirmValue = $("#passConfirm").val();
  if(passValue === passConfirmValue){
    $("#passNotMatchStatus").hide();
  }else{
    $("#passNotMatchStatus").show();
    $("#passNotMatchStatus").css("color","red");
  }
})
//-----------------Show/Hide password field-----------
$("#toggle-password").click(function(){
  $(this).toggleClass("fa-eye fa-eye-slash");
  var inputType = $($(this).attr("toggle"));
  if(inputType.attr("type") == "password"){
    inputType.attr("type" , "text");
  }else{
    inputType.attr("type", "password");
  }
});

  });