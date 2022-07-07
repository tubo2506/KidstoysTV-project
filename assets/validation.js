

//////////////// validation form


///// constructors nè
function validator (options) {
    ///// hàm thực hiện validate
    var selectorRules = {};
    
    function validate (inputElement,rule){
       var errorMess;
       var errorElement = inputElement.parentElement.querySelector(options.errorMessages)
       var rules = selectorRules[rule.selector]
       ////lấy ra các rules 
       for(var i=0; i< rules.length; ++i){
          var errorMess = rules[i](inputElement.value);
          if(errorMess){
             break
          }
       }
 
       if(errorMess){
          errorElement.innerText = errorMess;
          inputElement.classList.add('error')
       }else{
          errorElement.innerText = "";
          inputElement.classList.remove('error')
       }
    }
 
  var formElement = $(options.form)
 
 /////lấy element
  if(formElement){
    formElement.onsubmit = function(e){
       e.preventDefault();
 
       options.rules.forEach(function(rule){
       var inputElement = formElement.querySelector(rule.selector)
       validate (inputElement, rule)
       });
    }
    options.rules.forEach(function(rule){
       var inputElement = formElement.querySelector(rule.selector)
 
       if(Array.isArray(selectorRules[rule.selector])){
          selectorRules[rule.selector].push(rule.test)
       }else{
          selectorRules[rule.selector] = [rule.test]
       }
 
       if(inputElement){
          //////blur
          inputElement.onblur = function(){
             validate (inputElement,rule)
          }
          ////onimput
          inputElement.oninput = function(){
             var errorElement = inputElement.parentElement.querySelector(options.errorMessages)
             errorElement.innerText = '';
             inputElement.classList.remove('error')
          }
       }
    })
  }
 
 }
 
 
 //// định nghĩ rules nè
 validator.isRequired= function(selector, message){
    return {
       selector: selector,
       test: function(value){
          return value.trim() ? undefined : message || 'Vui lòng nhập email'
       }
    }
 }
 validator.isEmail = function(selector, message){
    return {
       selector: selector,
       test: function(value){
          var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return regex.test(value) ? undefined : message || 'vui lòng nhập đúng dạng email!!'
       }
    }
 }
 validator.isMinlength = function(selector, min,message){
    return {
       selector: selector,
       test: function(value){
 
          return value.length >= min ? undefined : message ||`Vui lòng nhập ít nhất ${min} ký tự`
       }
    }
 }
 validator.isConfirmation = function(selector, getValue, message){
    return {
       selector: selector,
       test: function(value){
          return value === getValue() ? undefined : message || 'Giá trị nhập lại không khớp'
       }
    }
 }
 validator.isNumber = function(selector,message){
    return {
       selector: selector,
       test: function(value){
          console.log(typeof value)
          return typeof value == 'number' ? undefined : message || 'Giá trị nhập không phải số'
       }
    }
 }