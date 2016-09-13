//$("#login").text(user_name);
function getCode( n)
{
    var str="";
    for(i=1;i<=n;i++)
        {
           var c=Math.ceil(Math.random()*10);
            if(c==10)
                c=0;
            str=str+c.toString();
        }
    return str;
}
function get_message(a) 
{
    var str=getCode(4);
    var phone_number=$("#phone_number").val();
    //alert(phone_number);
    var test=-1;
    //  检验手机号是否已经注册
    var message=$.ajax({
        url:address+"message.php",
        type:"POST",
        data:{phonenumber:phone_number,type:a,mycode:str},
        dataType:"json",
        error:function (){
            alert(address+"message.php");
            alert("error11111");
            test=0;
            return;
        },
        success:function(data)
        {
            if(data.code==1)   //数据库中不存在手机号
                { 
                    if(a=="sign")  //注册
                    {
                    $.session.set("phone_number",phone_number);
                    $.session.set("code",str);
                        alert("验证码发送成功");
                    }
                    if(a=="forget")  //忘记密码
                        {
                           alert("改手机号未被注册，请前去注册"); 
                        }
                }
            else{   //数据库中存在此手机号
                    if(a=="sign") 
                        {
                            alert("改手机号已被注册");
                        }
                if(a=="forget")
                    {
                    $.session.set("phone_number",phone_number);
                    $.session.set("code",str); 
                        alert("验证码发送成功");
                    }
                    // return;
            }
        }
    });
}

$(".required").attr("required","required");
function sign()
{
    var code_number=$.session.get("phone_number");  
    //上一次短信验证的手机号
    if(code_number!=$("#phone_number").val())
        {
            alert("请进行短信验证");
            //alert(code_number);
            //alert($("#phone_number").val());
            return;
        }
    if($.session.get("code")!=$("#code").val())  
        //检验验证码
        {
            alert("验证码错误");
            return;
        }
    //-----------提交请求
    var params=$("input").serialize();
    //var phone_number=$("#phone_number").val();
    //var password=$("#password").val();
     alert(params.phone_number111);
    $.ajax({
        url:address+"sign.php",
        type:"POST",
        data:params,
        //{username:"hello",password:"yest"},
        dataType:"json",
        error:function(){
            alert("error");
        },
        success:function(data)
        {
            alert("注册成功");
            //alert(data.phone_number);
           // alert(data.Password);   //空
        }
    });
        
}
function login()
{
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
            //alert(get_value);
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
                    else alert("服务器异常，登录失败"+get_value);
               }  
        }
    }
    xmlhttp.open("POST",address+"get_user.php");
   xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); xmlhttp.send("username="+document.getElementById("username").value+"&password="+document.getElementById("password").value);
}
function forget_password()
{
    
    var params=$("input").serialize();
    $.ajax({
        url:address+"update.php",
        type:"POST",
        data:params,
        //{username:"hello",password:"yest"},
        dataType:"json",
        error:function(){
            alert("error");
        },
        success:function(data)
        {
            alert("修改密码成功");
            alert(data.phone_number);
            alert(data.Password);
        }
    });
}
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
