//calls create_form function and saves it's return to a constant variable
const headerForm = create_form({
  //method attribute and it's value for form tag
  method:"post",
  //action attribute and it's value for form tag
  action:"#",
  //input tags that will be added inside form and is attributes with values
  inputs:{
    //type attributes with values
    type:["text","password","submit"],
    //name attributes with values
    name:["name","password","submit"],
    //value attributes with values
    value:["Enter name","Enter password","Log In"]
  }
});
//shows form inside header tag
document.querySelector("header").appendChild(headerForm);
const mainForm = create_form({
  method:"get",
  action:"#",
  inputs:{
    type:["text","email","password","submit"],
    name:["name","email","password","submit"],
    value:["Enter name","Enter email","Enter password","Sign Up"]
  }
});
document.querySelector("main").appendChild(mainForm);
const footerForm = create_form({
  method:"post",
  action:"#",
  inputs:{
    type:["file","text","password","number","date","color","button","checkbox","radio","range","submit"],
    name:["file","name","password","number","date","color","button","checkbox","radio","range","submit"],
    value:["file","Enter name","Enter password","Enter number","date","choice a color","Button","checkbox","radio","range","log in"]
  }
});
document.querySelector("footer").appendChild(footerForm);
