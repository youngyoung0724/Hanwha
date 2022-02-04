$(document).ready(function(){




});

// company
var company = [

    ["한화건설은 토목, 건축, 플랜트 등의 공사를 수행하는 종합 건설사로서 다양한 시공 경험과 기술력을 바탕으로 지속적인 성장을 이어오고 있습니다.", "2002년 이후 연평균 20%의 성장률을 기록해 온 한화건설은 2014년 세계 유력 건설 전문지 ENR(Engineering News Re- cord)이 발표한 Global Contractor 72위에 올랐으며 2020년까지 ‘Design the World’의 비전을 바탕으로 글로벌 건설사로 도약하고자 합니다.", "2012년 총 80억 달러 규모의 이라크 비스마야 신도시 건설 공사 계약을 체결했으며 2015년 21억 달러 규모의 사회 기반 시설공사를 추가로 수주해 이라크 누적 수주액 100억 달러 돌파로 세계 건설기의 이목을 집중시켰습니다. 2014년 필리핀에서는 세계 최대 규모의 돔 공연장을 준공하며 기술력을 인정받았습니다. 또한 중동 및 북아프리카 지역을 중심으로 발전 및 화공 플랜트 공사를 연이어 수주하고 미주 지역에서 대규모 부동산 개발 사업을 지속적으로 전개하고 있습니다. 2014년 사우디 아덴사가 발주한 9.35억 달러 규모의 화공 플랜트, 2012년 사우디 아람코사가 발주한 6억 달러 규모의 해양터미널 공사 등을 수주하며 세계적인 기업들과 다양한 사업을 수행하고 있습니다.", "국내에서는 민간이 개발한 국내 최대 규모의 도시개발 사업인 ‘한화 꿈에그린월드 인천 에코메트로’의 성공적인 분양을 통해 주택 사업이 한 단계 도약하는 계기가 되었습니다. 또한 제3경인고속화도로, 평택-시흥 고속 도로, 서울역, 청량리 민자역사, 63빌딩 및 갤러리아 명품관 리모델링 등 대규모 사업을 성공적으로 마무리하며 국내 건설 산업 발전에 기여해 왔습니다.‘꿈에그린’ 브랜드를 통해 전국에 4만 5,000여 세대의 아파트와 오피스텔을 공급했으며, 최고급 주상복합아파트 ‘갤러리아 포레’를 통해 프리미엄 고객을 위한 최고급 주거공간에 대한 새로운 기준을 제시하였습니다."]
]

var company_box = document.querySelector(".vision .wrap .txt_part");
var company_case = "";

company.forEach(function(v, i){
    company_case+= `
        <p class="txt1">${v[0]}</p>
        <p class="txt2">${v[1]}</p>
        <p class="txt3">${v[2]}</p>
        <p class="txt4">${v[3]}</p>
    `;
})
company_box.innerHTML = company_case;



// management
var management = [
    ["환경경영", "[Environmental Management]", "인간과 환경이 조화로운 세상을 열어가고 환경보<br>전을 최우선으로 생가하는 기업"],
    ["윤리경영", "[Ethical Management]", "기업의 이익에 앞서서 정직과 신용을 바탕으로<br> 고객과 사회, 국가에 대한 의무를 우선하는 윤리<br>경영 실현"],
    ["인재경영", "[Human resources management]", "인재경영을 통해 임직원의 지식과 창의력, 도덕<br>성이 최고로 실현될 수 있도록 역량 집중"],
]

var management_case = "";

management.forEach(function (v, i){
    management_case +=`
    <div class="box">
        <div class="txt_part">
            <h2>${v[0]}</h2>
            <h1>${v[1]}</h1>
            <p>${v[2]}</p>
        </div>
    </div>
    `;
})

var management_box = document.querySelector(".management .wrap .boxs");
management_box.innerHTML = management_case;

// management =>  mobile
var mobile_txt = [
    ["인간과 환경이 조화로운 세상을 열어가고 환경 보전을 최우선으로 생가하는 기업"],
    ["기업의 이익에 앞서서 정직과 신용을 바탕으로 고객과 사회, 국가에 대한 의무를 우선하는 윤리경영 실현"], ["인재경영을 통해 임직원의 지식과 창의력, 도덕성이 최고로 실현될 수 있도록 역량 집중"]
];
var mobile_case = "";

mobile_txt.forEach(function(v, i){
    mobile_case += `
    <div class="mobile_box">
        <p>${v[0]}</p>
    </div>
    `;
});
var mobile_box = document.querySelector(".management .wrap .mobile");
mobile_box.innerHTML = mobile_case;
