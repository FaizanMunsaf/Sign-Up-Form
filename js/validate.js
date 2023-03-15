var fname = document.forms['my_form']['f_name'];
var lname = document.forms['my_form']['l_name'];
var phone = document.forms['my_form']['phone'];
var email = document.forms['my_form']['email'];
var company = document.forms['my_form']['company'];
var employee = document.forms['my_form']['employee'];



var fname_error = document.getElementById('fname_error');
var lname_error = document.getElementById('lname_error'); 
var phone_error = document.getElementById('phone_error');
var email_error = document.getElementById('email_error');
var company_error = document.getElementById('company_error'); 
var employee_error = document.getElementById('employee_error');



fname.addEventListener('textInput', fname_Verify);
lname.addEventListener('textInput', lname_Verify);
phone.addEventListener('textInput', phone_Verify);
email.addEventListener('textInput', email_Verify);
company.addEventListener('textInput', company_Verify);
employee.addEventListener('textInput', employee_Verify);




function validate() {
        if( document.my_form.f_name.value.trim() == "" ) {
         fname_error.style.display = "block";
         fname.focus(); 
         return false;
         }
         if( document.my_form.l_name.value.trim() == "" ) {
            lname_error.style.display = "block";
            lname.focus(); 
            return false;
            }
         if( document.my_form.phone.value.trim() == "" ) {
               phone_error.style.display = "block";
               phone.focus(); 
               return false;
            }
            if( document.my_form.email.value.trim() == "" ) {
               email_error.style.display = "block";
               email.focus(); 
               return false;
               }
               if( document.my_form.company.value.trim() == "" ) {
                  company_error.style.display = "block";
                  company.focus(); 
                  return false;
                  }
               if( document.my_form.employee.value.trim() == "" ) {
                     employee_error.style.display = "block";
                     employee.focus(); 
                     return false;
                  }
      }
function fname_Verify(){
         if (fname.value.length =="") {
            fname.style.border = "border-bottom:1px solid;";
            fname_error.style.display = "none";
            return true;
         }
      }
function lname_Verify(){
         if (lname.value.length =="") {
            lname.style.border = "border-bottom:1px solid;";
            lname_error.style.display = "none";
            return true;
         }
      }      
      function phone_Verify(){
         if (phone.value.length =="") {
            phone.style.border = "border-bottom:1px solid;";
            phone_error.style.display = "none";
            return true;
         }
      }
      function email_Verify(){
         if (email.value.length =="") {
            email.style.border = "border-bottom:1px solid;";
            email_error.style.display = "none";
            return true;
         }
      }
      function company_Verify(){
         if (company.value.length =="") {
            company.style.border = "border-bottom:1px solid;";
            company_error.style.display = "none";
            return true;
         }
      }      
      function employee_Verify(){
         if (employee.value.length =="") {
            employee.style.border = "border-bottom:1px solid;";
            employee_error.style.display = "none";
            return true;
         }
      }      