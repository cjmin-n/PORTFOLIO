/*
json 파일 맨위 1개 데이터는 상단 TOP 영역
*/

var list_data = null;
var pointer = 0;
var page_size = 6;

function loadWorkData(url) {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        async: false,
        success: function (resultData) {
            list_data = resultData;

            $(".workList").empty();

            drawList(page_size);
            // drawList();
            // drawTopNews();

            if (list_data.length > page_size) $(".btn-more-cont").show();
        },

        error: function (request, status, error) {},
    });
}

// function drawTopNews(data) {
//     var path = isMobile() ? "../../" : "../";
//     var cnt = 0;

//     $.each(list_data, function (i, v) {
//         if (v.isTop == true) {
//             var data = list_data[i];
//             var target = $(".press-wrap .swiper-slide").eq(cnt);

//             target.find(".tag").text(data.media);
//             target.find(".tit").text(data.title);
//             target.find(".date").text(data.date);

//             target.find(".link_target").attr("href", data.link);
//             target.find(".wrap-img img").attr("src", path + data.thumb);

//             ++cnt;
//         }

//         if (cnt > 2) return false;
//     });
// }

function drawList(len) {
    var limit = pointer + len;

    for (var i = pointer; i < limit; ++i) {
        var data = list_data[i];

        if (data) {
            var item_str = drawPress(list_data[i]);

            $(".workList").append(item_str);

            ++pointer;
        } else {
            $(".btn-more-cont").hide();

            break;
        }
    }
}

function drawPress(data) {
    var str = "";

    str += "<li>";
    str += '	<a href="' + data.detail + '" target="_blank">';
    str += '		<div class="imgBox"> <img src=' + data.thumb + "></div>";
    // str += '		<div class="imgBox"> <img src="/static/images/work/work0' + pointer + '.jpg"></div>';
    str += '		<div class="textBox">';
    str += "			<h3>" + data.title + "</h3>";
    str += '			<div class="info">';
    str += "			    <p class='skill'>" + data.skill + "</p>";
    str += "			    <p class='date'>" + data.date + "</p>";
    str += "		    </div>";
    str += "		</div>";
    str += "	</a>";
    str += "</li>";

    return str;
}

function more_list() {
    drawList(page_size);
}
