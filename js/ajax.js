//$("#login").text(user_name);
function get_message()
{
    var test=0;
    //  检验手机号是否已经注册
    $.ajax({
        url:address+"sign.php",
        type:"POST",
        data:{phonenumber:$("#RegisterUserName").val(),type:"1"},
        dataType:"json",
        error:function (){
            alert("error11111");
            //return;
        },
        success:function(data)
        {
            test=1;
            if(data.code==1)
                {
                    alert("手机号未被注册");
                }
            else{
                alert("手机号已被注册");
                return;
            }
        }
    });
    if(test==0)
        return;
    //获取验证码
    for(i=1;i<=4;i++)
        {
           var c=Math.ceil(Math.random()*10);
            if(c==10)
                c=0;
            str=str+c.toString();
        }
    alert(str);
    //将验证码发送至后台
    $.ajax({
        url:address+"message.php",
        type:"POST",
        data:{code:str},
        dataType:"json",
        error:function()
        {
            alert("将验证码发送至后台失败");
        },
        success:function(data)
        {
            alert("验证码未");
        }
    })
}

$(".required").attr("required","required");
function sign()
{
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
                    else alert("服务器异常，登录失败"+get_value);
               }  
        }
    }
    xmlhttp.open("POST",address+"get_user.php");
   xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); xmlhttp.send("username="+document.getElementById("username").value+"&password="+document.getElementById("password").value);
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