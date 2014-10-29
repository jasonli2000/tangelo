/*jslint browser: true */
/*globals $ */

$(function () {
    "use strict";

    var data = [
            {label: "b", value: 53245}, {label: 2, value: 28479},
            {label: 3, value: 19697}, {label: 4, value: 24037},
            {label: 5, value: 40245}, {label: 6, value: 34355},
          ];

    var initSize = {
      width: 400,
      height: 400,
      inner: 100
    };

    var donutChartOptions = {
      data: data,
      width: initSize.width,
      height: initSize.height,
      inner: initSize.inner
      label: {field: "label"},
      value: {field: "label"}
    };
    
    function updateInputOptions() {
        $("input:text[id='inner']").val(donutChartOptions.inner);
        $("input:text[id='width']").val(donutChartOptions.width);
        $("input:text[id='height']").val(donutChartOptions.height);
    }

    $("#content").donutChart(donutChartOptions);
    updateInputOptions();

    function resizeDonutChart(width, height, inner) {
      donutChartOptions.width = width;
      donutChartOptions.height = height;
      donutChartOptions.inner = inner;
      $("#content").donutChart("destroy");
      $("#content").donutChart(donutChartOptions);
    }

    $("input:text[id='width']").change(function() {
        var value = $(this).val();
        resizeDonutChart(Math.round(value), donutChartOptions.height, donutChartOptions.inner);
    });

    $("input:text[id='height']").change(function() {
        var value = $(this).val();
        resizeDonutChart(donutChartOptions.width, Math.round(value), donutChartOptions.inner);
    });

    $("input:text[id='inner']").change(function() {
        var value = $(this).val();
        console.log("val is " + value);
        resizeDonutChart(donutChartOptions.width, donutChartOptions.height, Math.round(value));
    });
});

