var welfare_arr = [
    ["사회복지", "border_orange.png", "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", "content_img1.jpg"],
    ["문화예술", "border_orange.png", "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", "content_img2.jpg"],
    ["자원봉사", "border_orange.png", "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", "content_img3.jpg"],
]

var welfare_case = "";

var welfare_box = document.querySelector(".welfare .wrap .welfare_boxs ");

welfare_arr.forEach(function (v, i){
    welfare_case += `
    <div class="box">
        <div class="title">${v[0]}</div>
        <div class="bar" style="background-image : url(./img/prcenter/${v[1]})"></div>
        <p>${v[2]}</p>
        <div class="img" style="background-image : url(./img/prcenter/${v[3]})"></div>
    </div>
    
    `;
})

welfare_box.innerHTML = welfare_case;