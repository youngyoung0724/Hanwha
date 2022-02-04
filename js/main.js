$(document).ready(function(){

    var $slide_txt = [
        ["main_slide01.jpg", "Aqua planet", "", "일산 아쿠아 플라넷", "한화건설의 모든 건축물들은 인간 중심의", "첨단 기술을 바탕으로예술성과 기능이 조화를 이룬 공간입니다.", "More"],
        ["main_slide02.jpg", "Seoul Forest", "Galleria Foret", "서울숲 갤러리아 포레", "서울숲과 어우러지는 입체적인 조경계획", "세계적인 프랑스 빛의 건축 디자이너 장누벨이 직접 공간 디자인에 참여", "More"],
        ["main_slide03.jpg", "Ulsan Bridge", "", "울산대교", "대한민국을 더욱 풍요롭게 만드는 국토 창조의 힘", "", "More"],
        ["main_slide04.jpg", "Eco Metro", "", "인천 에코메트로", "살기좋은 아파트의 대표 브랜드<꿈에그린>", "", "More"]
    ]    



    for(i=0; i<$slide_txt.length; i++){
        $(".slide .slider_inner ul").append(`
        <li class="slides" style="background-image:url(./img/${$slide_txt[i][0]})">
            <div class="wrap">
                <div class="txt_part">
                <div class="title ">${$slide_txt[i][1]}</div>
                <div class="sub_title font_play">${$slide_txt[i][2]}</div>
                <div class="plustext">${$slide_txt[i][3]}</div>
                <p class="p1">${$slide_txt[i][4]}</p>
                <p class="p2">${$slide_txt[i][5]}</p>
                <div class="button"><a href="#">${$slide_txt[i][6]}</a></div>
                </div>
            </div>
        </li>
        `)
    };


///////////////////슬라이드 

    setInterval(function(){
        var $hover = $(".slide").hasClass("hover");


        console.log($hover);

        var $stop = $(".slide .player .stop img").hasClass("stop");
        //true : 정지상태(화면상 : ▶<span>(재생)</span>)
        //false : 재생상태(화면상 : ■<span>(정지)</span>)
        // console.log($stop);

        if($hover == true || $stop == true){
            //일시정지
        }else{
            //자동재생
            var $first = $(".slide ul li").first();
            $(".slide ul").stop().animate({"margin-left":"-100%"}, 1000, function(){
                $(".slide ul").append($first).css("margin-left","0%");

            });
        }
    }, 4000);

    $(".slide").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });
    
    $(".slide .player .stop img").click(function(){
        var $stop = $(this).hasClass("stop");  //클릭시 검사
        //false : 현재 자동 슬라이드 기능이 작동되고 있는 상태
        //true : 현재 자동 슬라이드 기능이 멈춘 상태
        //console.log($stop);
        if($stop == false){
            $(this).addClass("stop");
            $(this).attr("src", "./img/btn_play.png");
            //시점상 슬라이드는 멈춰야해
        }else{
            $(this).removeClass("stop");
            $(this).attr("src", "./img/btn_stop.png");
            //시점상 슬라이드를 자동으로 돌려라
        }
        return false;
    });


    $(".slide .slide_bottom .prev img").click(function(){
        var $last = $(".slide ul li").last();
        console.log($last);
        $(".slide ul").stop().animate({"margin-left":"0%"}, 1000, function(){
            $(".slide ul ").prepend($last).css("margin-left", "-100%");
        });
        return false;
    });
 
    $(".slide .slide_bottom .next img").click(function(){
        var $first = $(".slide ul li").first();
        $(".slide ul").stop().animate({"margin-left":"-200%"}, 1000, function(){
            $(".slide ul").append($first).css("margin-left", "-100%");
        });
        return false;
    });

    
    var business = ["산업발전의 근간이 되는 도로,교량,철도 및 단지 조성 공사부터 생명의 근원인 맑고 깨끗한 물을 전국에 공급하기 위한 수처리 사업에 이르기까지 오늘도 한화건설은 국토 곳곳에 생명을 불어 넣습니다.", "둘러싼 한화건설의 모든 건축물들은 인간 중심의 첨단 기술을 바탕으로 예술성과 기능이 조화를 이룬 공간입니다. 최고의 효율성과 편의성이 구비된 공간 창조를 통해 행복한 생활과 쾌적한 여유까지 제공해 드립니다.", "발전 및 담수플랜트, 화공플랜트 등 국내 플랜트 사업의 선두 주자 한화건설은 사우디 현지법인을설립하여 각종 플랜트 공사를 성공적으로 수행하고 있으며, 중동 및 동남아시장 등으로 사업 영역을 확장하고 있습니다.",  "한화건설이 창조하는 주거 공간에는 친환경적인 이상과 인간 중심의 주거 과학이 고스란히 살아 있습니다. 대한민국을 대표하는 최고 수준의 랜드마크에서 누리는 삶, 이 모든 꿈과 행복을 함께 나누고 싶습니다."
    ];

    for(i=0; i<business.length; i++){
        console.log(i);
        $("#ourbusiness .wrap .boxs .box").eq(i).append(`
        <div class="bottom">
            <p>${business[i]}</p>
        </div>
        `)
    }

    $(".top_btn").click(function(){
        
    })


});

// middle_banner
var middleBanner = [
    ["business_img01.jpg", "business_over_btn.png", "more"],
    ["business_img02.jpg", "business_over_btn.png", "more"],
    ["business_img03.jpg", "business_over_btn.png", "more"],
];

var middleList = document.querySelector("#middle_banner .boxs");

var banner = "";

for(v of middleBanner){
    banner += `
    <div class="box" style="background-image : url(./img/${v[0]})">
        <div class="dark">
            <div class="dark_inner">
                <div class="icon" style="background-image : url(./img/${v[1]})"></div>
                <p class="font_play">${v[2]}</p>
                </div>
            </div>
        </div>
    </div>`;
}

middleList.innerHTML = banner;


// hanwha_story
hanwha_story = [
    ["story_img01.jpg", "한화건설, 수원 컨벤션센터 복합개발사업 민관협업 위한 업무협력 약정 체결", "한화건설(대표이사 최광호)은 11일 수원시청 상황실에서 수원 컨벤션센터 복합개발사업의 민관협업을 강화하기 위해..."],
    ["story_img02.jpg", "한화건설, 수도권 내 집 마련의 이상형‘김포 풍무 꿈에그린 2차’ 9월 분양", "한화건설(대표 최광호)은 오는 9월 경기도 김포시 풍무5지구 3~5 블록 일원에 총 1,070세대 신축아파트..."],
    ["story_img03.jpg", "한화건설, 서울~세종고속도로 안성~구리 건설공사 제10공구 수주", "서울~세종고속도로 건설공사는 수도권 고속도로망 계획 중 남북의 5축을 완성하는 대규모 국책사업으로..."]
]

var hanwa_box = document.querySelector("#hanwha_story .boxs");
var hanwa = "";

for(v of hanwha_story){
    hanwa += `
    <div class="story">
        <div class="story_img" style="background-image:url(./img/${v[0]})"></div>
        <div class="txt_part">
            <p class="txt_main">${v[1]}</p>
            <p class="txt_sub">${v[2]}</p>
        </div>
    </div>
    `;
}

hanwa_box.innerHTML = hanwa;