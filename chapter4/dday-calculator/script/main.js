

// dom요소 선택 (대상)
var startBTN = document.querySelector("#calc")

// 계산기 버튼 클릭하면 채인지 씬에 기록한 일을 처리해줘!
startBTN.addEventListener("click", changeScene)

// 누르면 할일 목록 .. 여러개 !
function changeScene(){
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

var calcBTN = document.querySelector("#dday_calc")
var calcBTN = document.querySelector("#dday_reset")

calcBTN.addEventListener("submit", ddayCalc);

function ddayCalc(e){
    e.preventDefault();
    // 년도 input의 값을 알아오고,
    var userYear = document.querySelector("#user_year").value;
    var usermonth = document.querySelector("#user_month").value;
    var userDate = document.querySelector("#user_date").value;
    // 월 input의 값도 알아오고,
    // 일 inpuit의 값을 알아와서

    // 시간, 날짜 객체를 생성해주고 (오늘기준)
    // 알아온 input의 값으로 알아내야하는 시간,날짜를 생성
    // 그리고 나서 두 시간,날짜 차이를 계산 .getTime()
    // 공식 1000x60x60x24 으로 나눠주고
    // 소수점 이하 Math.ceil() 적용해서 정수로 반환하고
    // alert() 알려줘
}