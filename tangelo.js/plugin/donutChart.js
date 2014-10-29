/*jslint browser: true, unparam: true, nomen: true */

(function (tangelo, $, vg) {
    "use strict";

    if (!($ && $.widget && vg)) {
        return;
    }

    tangelo.widget("tangelo.donutChart", {
        options: {
            width : 460,
            height : 300,
            data: null,
            label: tangelo.accessor({value: ""}),
            value: tangelo.accessor({value: 1})
        },

        _create: function () {
            console.log("create donutChart");
            this.options = $.extend(true, {}, this._defaults, this.options);
            this.svg = d3.select(this.element.get(0))
                .append("svg");
            this._update();
        },

        _update: function () {
            console.log("update donutChart");
            var width = this.options.width;
            var height = this.options.height;
            var radius = Math.min(width, height)/2;
            var inner = this.options.inner;
            var arc = d3.svg.arc()
                .innerRadius(inner)
                .outerRadius(radius - 20);
            var colorScale = d3.scale.category20();
            var pie = d3.layout.pie().sort(null).value(function(d) { return d.value; });
            var svg = this.svg.attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            var g = svg.selectAll(".arc")
                .data(pie(this.options.data))
                .enter()
                .append("g")
                .attr("class","arc");
            g.append("path")
                .attr("fill", function(d, i) { return colorScale(i); })
                .attr("d", arc)
            g.append("text")
                  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                  .attr("dy", ".35em")
                  .style("text-anchor", "middle")
                  .text(function(d) { return d.data.label; });
        },

        _destroy: function(){
            console.log("destroy donutChart");
            this.svg.remove();
        },

    });
}(window.tangelo, window.jQuery, window.vg));
