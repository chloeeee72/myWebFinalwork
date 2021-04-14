window.onload = function(){
    var usernameElt = document.getElementById("username");
    var passwordElt = document.getElementById("password");
    var yElt = document.getElementById("y");
    var usernameSpan = document.getElementById("usernameError");
    var passwordSpan = document.getElementById("passwordError");
    var ySpan = document.getElementById('ySpan');
// 用户名：失去焦点即验证
    usernameElt.onblur = function(){ 
        var username = usernameElt.value;
        // 去除用户名前后空格
        username = username.trim();  
        if(username === ""){
            // 用户名为空
            usernameSpan.innerText = "用户名不能为空";
        }else{
            // 用户名非空，继续判断长度
            if(username.length > 14 || username.length < 6){
                // 用户名长度非法
                usernameSpan.innerText = "用户名长度必须在6-14之间";
            }else{
                // 用户名长度合法，继续判断特殊符号
                var usernameRegExp = /^[A-Za-z0-9]+$/;
                var ok = usernameRegExp.test(username);
                if(!ok){
                    usernameSpan.innerText = "用户名只能含有字母和数字";
                }
            }
        }
    }
// focus验证,消除span内容
    usernameElt.onfocus = function(){
        if (usernameSpan.innerText != "") {
            usernameElt.value= " ";
        }
        usernameSpan.innerText = " ";
    }
// 密码：失去焦点即验证
    passwordElt.onblur = function(){
        var password = passwordElt.value;
        password = password.trim();
        if(password === ''){
            passwordSpan.innerText = '密码不能为空';
        }else if (password.length > 14 || password.length < 6) {
            passwordSpan.innerText = '密码长度必须在6-14之间';
        }
    }
// focus验证,消除span内容
    passwordElt.onfocus = function(){
        var password = passwordElt.value;
        if (passwordSpan.innerText != "") {
            password = "";
        }
        passwordSpan.innerText =" ";
    }
// 验证码：
    var ySpan = document.getElementById('ySpan');
    yElt.onblur = function(){
        var y = yElt.value;
        if(y === ''){
            ySpan.innerText = '验证码不能为空';
        }else if(y != 'abcd'){
            ySpan.innerText = '验证码错误';
        }else if(y === 'abcd'){
            ySpan.innerText = '';
        }
    }
    yElt.onfocus = function(){
        if (ySpan.innerText != '') {
            yElt.value === '';
        }
        ySpan.innerText === '';
    }
// 填写完毕：
// 登陆按钮onclick
    var logElt = document.getElementById("loginBtn");

    logElt.onclick = function(){
        usernameElt.focus();
        usernameElt.blur();
        passwordElt.focus();
        passwordElt.blur();
        yElt.focus();
        yElt.blur();
        if(usernameSpan.innerText === "" && passwordSpan.innerText ===""  && ySpan.innerText === ""){
            window.open('./pageOne_home.html');
        }
    }
// 重置按钮的onclick
    var resetElt = document.getElementById("reset");
    resetElt.onclick = function(){
        usernameElt.value === ""
        passwordElt.value === ""
        yElt.value === ""
        usernameSpan.innerText === ""
        passwordSpan.innerText === ""
        ySpan.innerText === ""  
        usernameElt.focus();
    }
}