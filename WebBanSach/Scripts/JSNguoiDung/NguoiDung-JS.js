$(function () {
    // bo khung tìm kiếm
    $("#txtTimKiem").focus(function () {
        $("#TimKiem").addClass("addcss-timkiem2");
    });
    $("#txtTimKiem").focusout(function () {
        $('div').removeClass('addcss-timkiem2');
    });
    $("#txtTimKiem,.search,#hinhanhtimkiem").hover(function () {
        $('#TimKiem').addClass('addcss-timkiem1');
    });
    $("#txtTimKiem,.search,#hinhanhtimkiem").mouseout(function () {
        $('div').removeClass('addcss-timkiem1');
    });
});
//$(function () {
//    $("#loaisach-1").click(function () {
//        $("#chude-1").slideToggle(350);
//        $("#sbdoc-1").slideToggle(0);
//        $("#sbngang-1").slideToggle(0);
//    })
//});
$(document).ready(function () {

    //click vào săp xếp sản phảm, và click ra bất cứ vị trí nào thì sẽ đóng cái danh sách sắp xếp sản phẩm
    $(".sort-button").click(function (e) {
        //$(".sort-list").slideToggle(150);
        e.stopPropagation();
        if ($(".sort-list").css("display") == "block") {
            $(".sort-list").css("display", "none");
        }
        else {
            $(".sort-list").css("display", "block");
        }

    });
    $(document).click(function (event) {
        $(".sort-list").css("display", "none");
    });
    ////hover vào sản phẩm thì hiển thị ra giỏ hàng
    //$(".sanpham").hover(function () {
    //    var data_sp = $(this).attr("data-sp");
    //    // Lay ra cai gio hang co data-cart = data-sp
    //    $('[data-cart=' + data_sp + ']').css("display", "block");
    //},
    //function () {
    //    var data_sp = $(this).attr("data-sp");
    //    // Lay ra cai gio hang co data-cart = data-sp
    //    $('[data-cart=' + data_sp + ']').css("display", "none");

    //});

    $(".sub-menu").click(function () {
        var data_loaisach = $(this).attr("data-loaisach");
        if ($('[data-chude = ' + data_loaisach + ']').css("display") == "none") {
            $(".chude").css("display", "none");
            $(".sb-right").css("display", "block");
            $(".sb-down").css("display", "none");
            $('[data-chude = ' + data_loaisach + ']').css("display", "block");
        }
        else {
            $('[data-chude = ' + data_loaisach + ']').css("display", "none");
            window.location.replace('http://localhost:7083/');
        }

        if ($('[data-symbol-right = ' + data_loaisach + ']').css("display") == "block") {
            $('[data-symbol-right = ' + data_loaisach + ']').css("display", "none");
            $('[data-symbol-down = ' + data_loaisach + ']').css("display", "block");
        }
        else {
            $('[data-symbol-right = ' + data_loaisach + ']').css("display", "block");
            $('[data-symbol-down = ' + data_loaisach + ']').css("display", "none");
        }
    });
    $(window).load(function () {
        var url_loaisach = $(".sub-menu").attr("url-loaisach");
        var url_chude = $(".chimuc-vanhoc").attr("url-chude");

        $('[data-chude = ' + url_loaisach + ']').css("display", "block");
        $('[data-symbol-right = ' + url_loaisach + ']').css("display", "none");
        $('[data-symbol-down = ' + url_loaisach + ']').css("display", "block");

        $('[chude-id = ' + url_chude + ']').css({ "font-weight": "bold", "background-color": "antiquewhite","color":"black"});
    });
    $(".item-header").click(function () {
        window.location.reload();
    });
    $(".chimuc-vanhoc").click(function () {
        $(this).css("font-weight", "bold");
    })
    
});



$(document).ready(function () {
    $(".sub-menu").click(function () {
        var a = $(this).attr("data-loaisach");
        var b = $(this).text();
        $("#bartieude").html(b);
        var options = {
            url: '/Home/Test',
            dataType: "Json",
            async: false,
            type: "GET",
            data: { loaisachId: a },
            success: function (data) {
                var html1;
                var html2;
                var html3;
                var html4;
                $("#content").html('');
                for (var i = 0; i < data.length; i++) {
                    html1 = '\
                               <div class="sanpham" data-sp="' + data[i].MaSach + '">\
                                <a class="sanpham-chuanoidung">\
                                    <img src="/Anh Bia Sach/' + data[i].AnhBia + '" />\
                                    <p class="tensach_sach">' + data[i].TenSach + '</p>\
                                    <p class="tentg_sach">' + data[i].TenTacGia + '</p>\
                                    <p class="gia_sach">\
                                        <span class="giaban">' + data[i].GiaBan + '</span>\
                                        <span class="giamgia">' + data[i].GiamGia + '%</span><br />\
                                        <span class="giacu">' + data[i].GiaCu + '</span>\
                                    </p>\
                                </a>';
                    html2 = '<button class="sanpham-giohang" data-cart="' + data[i].MaSach + '">\
                               <i class="fa fa-cart-plus" aria-hidden="true" style="font-size: 1.8em; line-height: .75em;vertical-align: -18%; margin-right:10px;"></i>Thêm vào giỏ hàng\
                           </button>\
                           </div>';


                    html3 = '<button class="sanpham-hethang" data-cart="' + data[i].MaSach + '">Đã hết hàng</button>\
                            </div>';
                    if (data[i].SoLuongTon > 0) {
                        html4 = html1 + html2;
                    } else {
                        html4 = html1 + html3;
                    }
                    $("#content").append(html4);
                }
            }

        }

        $.ajax(options);
    });
});
