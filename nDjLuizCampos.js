//nDjLuiz
(function ($) {

    var self = $.nDjLuiz = new function () { };

    $.extend(self, {

        nDjLuizBackgrounds: [
            'https://i.imgur.com/7dnpBYD.png'
        ],

        nDjLuizImgs: [
            'https://i.imgur.com/VhMWUwn.jpg',
            'https://i.imgur.com/7YSbaUF.jpg',
            'https://i.imgur.com/zTSkfjs.jpg',
            'https://i.imgur.com/nlQ4al2.jpg',
            'https://i.imgur.com/BEKJOkG.jpg',
            'https://i.imgur.com/d9jsdoA.jpg',
            'https://i.imgur.com/RVIv4Hm.jpg',
            'https://i.imgur.com/6qRqlEx.jpg',
            'https://i.imgur.com/Q53SwqU.jpg',
            'https://i.imgur.com/SmVXqyx.jpg',
            'https://i.imgur.com/3ZGEnDS.jpg',
            'https://i.imgur.com/P67dhS9.jpg',
            'https://i.imgur.com/sU1tcaM.jpg',
            'https://i.imgur.com/4jmqDqD.jpg',
            'https://i.imgur.com/oERdUvl.jpg',
            'https://i.imgur.com/nB4EXs6.jpg',
            'https://i.imgur.com/F1DQUhW.jpg',
            'https://i.imgur.com/iWYh7iW.jpg',
            'https://i.imgur.com/7dnpBYD.png',
            'https://i.imgur.com/CN0RuWH.png',
            'https://i.imgur.com/ggA0nZM.jpg',
            'https://i.imgur.com/HTAvaXp.jpg',
            'https://i.imgur.com/8HMxVMn.png',
            'https://i.imgur.com/3CL1YQq.png',
            'https://i.imgur.com/9Oh9GuT.jpg',
            'https://i.imgur.com/ITn64Q7.jpg',
            'https://i.imgur.com/9P0OfyW.jpg',
            'https://i.imgur.com/uUsxtIK.jpg',
            'https://i.imgur.com/7sG7Zcp.jpg'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    if (h > 0 && w > 0) {
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        $(item).load(function () {
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();

                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    $(function () {
        self.handleImages(self.nDjLuizImgs, 3000);
        self.handleLogo(self.nDjLuizBackgrounds, 3000);
    });
})(jQuery);