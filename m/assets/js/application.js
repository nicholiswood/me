$(document).ready(function() {
    $(".r").each(function() {
        var t = $(this),
            o = t.data("rot"),
            i = {
                rot: 0,
                pos: 0
            };
        $(i).animate({
            rot: o,
            pos: 200
        }, {
            step: function(o, i) {
                var n = i.elem.pos,
                    e = i.elem.rot;
                "pos" == i.prop ? n = o : "rot" ==
                    i.prop && (e = o), t.css(
                        "transform", "rotate(" + e +
                        "deg) translate(" + n +
                        "px) rotate(-" + e + "deg)"
                    )
            },
            duration: 1e3
        })
    })
}), $(document).ready(function() {
    function t() {
        $(".modal").each(function() {
            0 == $(this).hasClass("in") && $(this).show();
            var t = $(window).height() - 60,
                o = $(this).find(".modal-header").outerHeight() ||
                2,
                i = $(this).find(".modal-footer").outerHeight() ||
                2;
            $(this).find(".modal-content").css({
                "max-height": function() {
                    return t
                }
            }), $(this).find(".modal-body").css({
                "max-height": function() {
                    return t - (o + i)
                }
            }), $(this).find(".modal-dialog").css({
                "margin-top": function() {
                    return -($(this).outerHeight() /
                        2)
                },
                "margin-left": function() {
                    return -($(this).outerWidth() /
                        2)
                }
            }), 0 == $(this).hasClass("in") && $(this).hide()
        })
    }
    $(window).resize(t).trigger("resize")
}), $(document).ready(function() {
    var t = ["top", "bottom", "left", "right"];
    for (var o in t) {
        var i = t[o];
        $("[rel=tt-" + i + "]").tooltip({
            placement: i,
            container: "body"
        })
    }
    $(".modal").on("show.bs.modal", function() {
        $("[rel=tt-top]").tooltip("hide")
    })
});