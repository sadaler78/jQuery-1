$(".ask").on("click", function (even) {
    even.preventDefault()
    $(this).toggleClass("active").next().stop().slideToggle(500);
    $(".answer").not($(this).next()).slideUp(500);
    $(".ask").not($(this)).removeClass("active");
})

$("button[data-filter]").click(function () {
    $("div[data-filter]").stop().slideUp();
    let attr = $(this).attr("data-filter");
    $(`div[data-filter=${attr}]`).stop().slideDown();
    if (attr == "all") {
        $("div[data-filter]").stop().slideDown();
    }
    $(this).addClass("active");
    $("button[data-filter]").not($(this)).removeClass("active");
})

//Бегущая строка
function typing(element) {
    if (typeof element == "string") {
        let text = $(element).html();
        let fullText = "";
        let count = 0;
        let a = setInterval(() => {
            fullText = fullText + text[count];
            $(element).html(fullText);
            count++
            if (fullText == text) {
                clearInterval(a)
            }
        }, 100);        
    }
}

typing("h1");

//Модальное окно
$(".js-modal-show").click(function (e) {
    e.preventDefault();
    $(".modal").fadeIn(700);
})
$(".close").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut();
})


// read more 
$(".read-more").click(function (l) {
    $(".text-hidden").toggleClass("hidden")
    if ($(".text-hidden").hasClass("hidden")) {
        $(".read-more").text("Read-More")

    } else {
        $(".read-more").text("hidden")
    }
})



