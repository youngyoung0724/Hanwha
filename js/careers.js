$(document).ready(function(){

    $(".talent .boxs .program .more").click(function(){
        var $show = $(this).hasClass("show");
        console.log($show);

        if($show == false){
            $(".talent .boxs .program .more").removeClass("show"); // more에서 show class 삭제 
            $(this).addClass("show"); //클릭한 부분의 more
            $(".talent .boxs .program .more").css("backgroundImage","url(./img/careers/btn_on.png");
            $(this).css("backgroundImage","url(./img/careers/btn_off.png");
            $(".talent .boxs .program .program_list").hide();
            $(this).closest(".program").find(".program_list").show();
            console.log(this);
        }else{
            $(this).removeClass("show");
            $(this).css("backgroundImage","url(./img/careers/btn_on.png");
            $(this).closest(".program").find(".program_list").hide();
        }

    }); 

});


var person_arr = [
    ["icon_challenge.jpg", "CHALLENGE", "도전적인 한화인", "기존의 틀에 안주하지 않고 변화와 혁신을 통해 최고를 추구한다.", "맡은 분야에서 최고가 되기 위해 적극적인 자기개발을 한다. 열린 사고와 창의적 발상으로 새로운 방안과 기회를 찾아낸다. 할 수 있다는자신감으로 도전적인 목표를 설정하고 달성한다."],
    ["icon_dedication.jpg", "DEDICATION", "혁신적인 한화인", "회사, 고객, 동료와의 인연을 소중히 여기며 보다 큰 목표를 위해 혼신의 힘을 다한다.", "고객과 약속을 소중히 여기며 고객가치를 지속적으로 창출한다. 공동운명체의식을 바탕으로, 서로의 가능성을 믿고 협력한다."],
    ["icon_integrity.jpg", "INTEGRITY", "진실된 한화인", "자긍심을 바탕으로 원칙에 따라 바르고 공정하게 행동합니다.", "눈 앞의 이익에 흔들리지 않고 원칙에 따라 정직하게 행동한다. 공과 사를 구분하여 능력과 성과에 따라 투명하고 공정하게 대우한다."],
];

var person_case = "";

var personBox = document.querySelector(".person .wrap .boxs");
// console.log(personBox);

person_arr.forEach(function (v, i){
    person_case += `
    <div class="box">
        <div class="img" style="background-image : url(./img/careers/${v[0]})"></div>
        <div class="mini_title font_play">${v[1]}</div>
        <div class="title">${v[2]}</div>
        <div class="sub_title">${v[3]}</div>
        <p>${v[4]}</p>
    </div>
    `;
});

personBox.innerHTML = person_case;


talent_arr = [
    ["img01.jpg", "icon01.png", "회사 비전 및 가치 공유 프로그램", "신입사원 조기 전력화 프로그램", "btn_on.png", "그룹 입문 과정", "건설 입문 과정", "OJT 과정", "Mentoring 제도", "Follow-up 과정", "3급사원 입문 과정", "正道경영 및 가치 공유 프로그램", "btn_on.png", "고객만족 CS특강", "윤리경영교육", "승격자 과정", "관리자 교육", "경력사원 입문 과정", ""],
    ["img02.jpg", "icon02.png", "전문인력 육성 프로그램", "전문가 양성 프로그램", "btn_on.png", "직무 전문가 양성 과정", "공통 역량 과정", "동계직무교육", "학점이수제도", "석박사 과정 및 고위경영자 과정", "", "차세대 리더 양성 프로그램", "btn_on.png", "차세대 현장 리더 양성 교육", "핵심인재 육성 프로그램", "혁신리더 과정", "", "", ""],
    [ "img03.jpg", "icon03.png","GLOBAL 인재 양성 프로그램", "해외 MBA 프로그램", "btn_on.png", "Global Executive MBA 과정", "TOP MBA 과정", "", "", "", "", "차세대 리더 양성 프로그램", "btn_on.png", "어학 지원 제도", "해외 지역전문가 제도", "Global Biz 과정", "해외사업 전문가 과정", "", ""],
]

var boxCase = "";

var talent_box = document.querySelector(".talent .wrap .boxs");

talent_arr.forEach(function(v, i){
    boxCase += `
    <div class="box">
        <div class="img" style="background-image: url(./img/careers/${v[0]})">
            <div class="icon" style="background-image : url(./img/careers/${v[1]})"></div>
            <p>${v[2]}</p>
        </div>
        <div class="program top">
            <h1>${v[3]}<span class="more" style="background-image: url(./img/careers/${v[4]})"></span></h1>
            <ul class="program_list">
                <li>${v[5]}</li>
                <li>${v[6]}</li>
                <li>${v[7]}</li>
                <li>${v[8]}</li>
                <li>${v[9]}</li>
                <li>${v[10]}</li>
            </ul>
        </div>
        <div class="program bottom">
            <h1>${v[11]}<span class="more" style="background-image: url(./img/careers/${v[12]})"></span></h1>
            <ul class="program_list">
                <li>${v[13]}</li>
                <li>${v[14]}</li>
                <li>${v[15]}</li>
                <li>${v[16]}</li>
                <li>${v[17]}</li>
                <li>${v[18]}</li>
            </ul>
        </div>
    </div>
    `;
});

talent_box.innerHTML = boxCase;