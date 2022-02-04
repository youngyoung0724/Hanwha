$(document).ready(function(){
    $("#header_part").load("./header.html", function(){
    
        function resizeevt(){
            var $cur_width = $(window).width();
            if($cur_width > 767){
                $("header").removeClass("mobile_head");
                $("header").addClass("pc_head");
            }else{
                $("header").removeClass("pc_head");
                $("header").addClass("mobile_head");
            }
        }
        resizeevt();

        $(window).resize(function(){
            resizeevt();
        })
        // $("header .wrap .nav > ul > li > ul").hide();
        $("header .wrap .nav ul> li > a > .mobile").click(function(){
            var $open = $(this).hasClass("open");
            console.log($open);
                    
            if($open == false){
                $("header .wrap .nav ul> li > a > .mobile").removeClass("open");
                $(this).addClass("open");
                $("header .wrap .nav > ul > li ").removeClass("active");
                $(this).closest("li").addClass("active");
                console.log(this);
                // console.log("slideDown");
            }else{
                console.log($open);
                $(this).removeClass("open");
                $(this).closest("li").removeClass("active");
                // console.log("slideUp");
            }
            return false;
        })

    
        $("header .menu a").click(function(){
            console.log("클릭");
            $(this).closest("header").find(".header_menu").addClass("active");

            // $(this).find("nav ul").addClass("active");
            return false;
        })
    
        $(".header_menu .menu a").click(function(){
            $(this).parents(".header_menu").removeClass("active");

            // $(this).find("nav ul").removeClass("active");
            return false;
        })

        // 메뉴, 닫기 
        $("header .menu a").click(function(){
            console.log("클릭");
            $(".nav > ul").toggleClass("active");
            return false;
        })

    });

    $("#footer_part").load("./footer.html", function(){

        // $(".sns .family_site").click(function(){
        //     var $show = $(this).hasClass("show");
        //     console.log($show);

        //     if($show == false){ 
        //         // $(".sns .family_site").removeClass("show");
        //         $(this).addClass("show");
        //         $(this).siblings(".family_list").addClass("active");
        //         console.log(this);
        //     }else{
        //         $(this).removeClass("show");
        //         $(this).siblings(".family_list").removeClass("active");
        //     }
        // })
        $(".sns .family").click(function(){
            var $active = $(this).hasClass("active");
            if($active == false){
                $(this).addClass("active");
                $(this).find(".family_list").slideDown();
            }else{
                $(this).removeClass("active");
                $(this).find(".family_list").slideUp();
            }
        });   

    });

});

