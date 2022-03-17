var loginForm = document.querySelector("#login-form")
        var loginBTN = document.querySelector("#go_login");
        var u_id = document.querySelector("#user_id");
        var u_pw = document.querySelector("#user_pw");

        var admin_id = "super7797", admin_pw = "super7797!";

        loginForm.addEventListener("submit", submitFunc);

        function submitFunc(e){
            e.preventDefault();
            // console.log(u_id.value, u_pw.value);
            if(admin_id === u_id.value){
                if(admin_pw === u_pw.value){
                    alert("관리자님 로그인을 환영합니다.\n관리자 페이지로이동합니다.");
                    location.href="/admin_only";
                }else{
                    alert("아이디 또는 비밀번호를 확인하세요");
                    location.reload();
                }
            }else{
                    alert("아이디 또는 비밀번호를 확인하세요");
                    location.reload();
                }
        }
        
