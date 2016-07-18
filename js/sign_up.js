function del(element, content){
    var input_value=element.value;
    if(input_value==content)
    //document.getElementsByTagName("input")
    {
           /*js中没有document.getElementsByClassName方法,如果想使用必须自己写*/
            element.value="";
    }
}
function ReChangeform()
{
    var user=document.getElementById("user_name");
    if(user.value=="")
        {
            user.value="用户名";
        }
    var email=document.getElementById("email");
    if(email.value=="")
        {
            email.value="邮箱";
        }
    var passworld=document.getElementById("passworld");
    if(passworld.value=="")
        {
            passworld.value="密码";
        }
}