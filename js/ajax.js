//$("#login").text(user_name);
function sign()
{
    /*if($("#username").length!=11)
        {
            alert("手机号不符合规范");
            return;
        }
    else
    */
    var params=$("input").serialize();
    $.ajax({
        url:address+"test.php",
        type:"POST",
        data:params,
        //{username:"hello",password:"yest"},
        dataType:"json",
        error:function(){
            alert("error");
        },
        success:function(data)
        {
            alert(data.RegisterUserName);
            alert(data.RegisterPassword1);
        }
    });
        
}
function login()
{
    //alert("helloworld");
    //alert(document.cookie);
    //$.cookie("username","123456789");
    //alert(getCookie("username"));
   // alert($.cookie("username"));
    var str=document.getElementById("LLoginForm");
    var xmlhttp;
    if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();
        }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            
            var get_value=xmlhttp.responseText;
            alert(get_value);
            if(get_value==0)  //登录失败
                {
                    alert("登录失败:用户名或密码错误");
                    get_value="未登录";
                    //user_name=get_value;
                }
            else{
                    if(get_value==1){
                        jQuery.ready(function(){
                        $.cookie("phone_number",$("#username"));
                           });
                        alert("登录成功");
                    }
                    else alter("服务器异常，登录失败");
                //$.cookie("username",$("#username");
                //$("#login_href").attr('href',"about.html");
                //$("#to_hide").hide();
                //window.location.href="about.html"; 
               }  
                //user_name=get_value; document.getElementById("login").innerHTML=user_name;
        }
    }
    /*xmlhttp.open("GET",address+"get_user.php?username="+document.getElementById("Username").value+"&password="+document.getElementById("password").value,true);
    */
    xmlhttp.open("POST",address+"get_user.php");
   xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); xmlhttp.send("username="+document.getElementById("username").value+"&password="+document.getElementById("password").value);
}

/*
$(document).ready(function(){
    $("#submit").click(function(){
        alert("clicked");
        $.post(
                address+"get_user.php",
               {phone_number:$("#Username").val(),password:$("#password").val()}
              ).done(function(data){
           //$("#Username").text(data.username); 
            document.getElementById("Username").innerHTML=data.username;
        });
        alert("how?");
    });
    
});
*/
/*
$(document).ready(function{
                  $("#submit").click(function(){
    $.ajax({
        type: "GET",
        url: address+"get_user.php",
        data: {username:$("#Username").val(),password:$("#password").val()},
        dataType: "json",
        
    });
    
});
                  
                  });
                  */
/*
$(document).ready(function(){
   $("#submit").click(function(){
     $("#login").text($("#Username").val());
   });     
});
*/
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return "";
}