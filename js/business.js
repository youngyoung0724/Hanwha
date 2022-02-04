$(document).ready(function(){
    

    
    $(".project .slick_group").slick({
        //vertical : true, // 수직방향으로 슬라이드 전환

        infinite : true, //초기 슬라이드의 회전여부(append 및 prepend 방식 써클링 적용) - 기본값 true
        
        slidesToShow : 1, // 현재 화면상에 몇 개의 슬라이드 파트를 보여줄 것인가를 결정 - 기본값 1
        
        slidesToScroll : 1, //현재 화면상에서 1회마다 전환되는 이미지의 개수 - 기본값 1
        
        autoplay : true, // 자동슬라이드 여부 걸졍 - 기본값 false
        
        autoplaySpeed : 2000, //자동 슬라이드가 진행되는 동안의 대기시간(setInterval)
        
        speed : 1000, //슬라이드의 전환속도(animate 효과 메서드)
        dots : true, //슬라이드 네비게이터의 존재 유무

        responsive : [
            {
                breakpoint : 1023, //반응형 시점(1200px 미만부터 적용해라)
                settings : {
                    slidesToShow : 1, //2개의 슬라이드를 보여줘라
                    slidesToScroll : 1
                }
            },
            {
                breakpoint : 767, //반응형 시점(1200px 미만부터 적용해라)
                settings : {
                    fade : true, // 슬라이드 모드를 페이드 방식으로 적용해라
                    slidesToShow : 1, //2개의 슬라이드를 보여줘라
                    slidesToScroll : 1,
                    dots : false
                }
            }
        ]
    });

    
});

business = [
    ["01", "업무시설", "예술적이고 쾌적한 사무용 빌딩을<br>한화건설이 만듭니다.", "01_img.png"],
    ["02", "레저시설", "아름다운 자연환경에 편리함이<br>조화를 이뤄 여유로운 레저생황을 창조합니다.", "02_img.png"],
    ["03", "판매/영업시설", "시선과 발길이 머무는 공간을 완성합니다.", "03_img.png"],
    ["04", "의료/교육시설", "최적의 의료환경, 최고의 교육환경을 만들어 갑니다.", "04_img.png"],
    ["05", "특수시설", "대전 엑스포 한빛탑, 종합운동장, 서울역사 등 지역의 랜드마크를 만들어 갑니다.", "05_img.png"],
    ["06", "리모델링", "시오래된 건물이 꿈에 그리던 아름다운 모습으로 재탄생 합니다.", "06_img.png"]
]

var business_case = "";

var bussiness_box = document.querySelector(".facility .wrap .boxs")

business.forEach(function(v, i){
    business_case +=`
    <div class="box">
        <div class="box_top">
            <div class="txt_box">
                <div class="title">
                    <p>${v[0]}</p>
                    <p>${v[1]}</p>
                </div>
                <h1>${v[2]}</h1>
            </div>
        </div>
        <div class="img" style="background-image:url(./img/business/${v[3]})"></div>
    </div>
    `;
})

bussiness_box.innerHTML = business_case;