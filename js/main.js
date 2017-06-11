(function () {
    var header = document.getElementById("mainHeader");

    function changeHeader() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        header.classList.toggle("drska-main-header--background", scrollTop >= 50 || document.body.classList.contains("nav-open"));
    }

    var didScroll = false;

    $(window).scroll(function () {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            didScroll = false;
            changeHeader();
        }
    }, 100);

    changeHeader();

    $("a[href*=\\#]").on("click", function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
            }, 500);
    });

    $('input textarea').on('change', function() {
        var input = $(this);
        var textarea = $(this);
        if (input.val().length) {
            input.addClass('populated');
        } else if(teaxtarea.val().length){
            textarea.addClass('populated');
        }
        else{
            input.removeClass('populated');
        }
        });

        setTimeout(function() {
            $('#fname').trigger('focus');
    }, 500);
})();
