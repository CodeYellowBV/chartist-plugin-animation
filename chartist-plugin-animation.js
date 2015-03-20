define(function (require) {
    'use strict';

    var Chartist = require('chartist');

    var defaultOptions = {
        duration: 1000
    };

    return function (options) {
        options = Chartist.extend(defaultOptions, options);

        return function animation (chart) {
            chart.on('draw', function (data) {
                if (data.type === 'line' || data.type === 'area') {
                    data.element.animate({
                        d: {
                            dur: options.duration,
                            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                            to: data.path.clone().stringify(),
                            easing: Chartist.Svg.Easing.easeOutQuint
                        }
                    });
                }

                if (data.type === 'bar') {
                    data.element.animate({
                        y2: {
                            dur: options.duration,
                            from: data.y1,
                            to: data.y2,
                            easing: Chartist.Svg.Easing.easeOutQuint
                        },
                        opacity: {
                            dur: options.duration,
                            from: 0,
                            to: 1,
                            easing: Chartist.Svg.Easing.easeOutQuint
                        }
                    });
                }
            });
        };
    };
});
