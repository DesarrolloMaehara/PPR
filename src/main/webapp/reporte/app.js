var categories, dataset;
function getusers() {

    $.ajax({
            type: 'GET',
            async: false,
            url: "http://localhost/sample/msline_plot_mysql_jquery/msline.php",
            data: {},
            dataType: "json",
            success: function(result){
                
                if(result){
                        categories = (result.categories);
                        dataset = (result.dataset);
                }
            },
            error: function(errmsg) {
                alert("Ajax??????????!"+ errmsg);
            }
        });
    return categories,dataset;
    }

    getusers();

FusionCharts.ready(function () {
 salesAnlysisChart = new FusionCharts({
    type: 'mscombi2d',
    renderAt: 'chart-container',
    id:"mychart",
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Sales analysis of last year",
        "xAxisname": "Month",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        "showBorder": "0",
        "showValues": "0",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500",
        "bgColor": "#ffffff",
        "showCanvasBorder": "0",
        "canvasBgColor": "#ffffff",
        "captionFontSize": "14",
        "subcaptionFontSize": "14",
        "subcaptionFontBold": "0",
        "divlineColor": "#999999",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1",
        "showAlternateHGridColor": "0",
        "usePlotGradientColor": "0",
        "toolTipColor": "#ffffff",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "5",
        "legendBgColor": "#ffffff",
        "legendBorderAlpha": '0',
        "legendShadow": '0',
        "legendItemFontSize": '10',
        "legendItemFontColor": '#666666'
      },
      "categories": categories,
      "dataset": dataset,
    }
  });
    salesAnlysisChart.render();
});