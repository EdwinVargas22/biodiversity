function charts(dropValue) {

    d3.json("static/samples.json").then((datas) => {
       var objects = datas.samples;
       console.log(objects)

       var idsNumber = objects.filter(idsNumber2 => idsNumber2.id == dropValue );
       console.log(idsNumber);
    
       var results = idsNumber[0];
       console.log(results);

       var values = results.sample_values;
       var ids = results.otu_ids;
       var labels = results.otu_labels;

       console.log(labels, ids, values);

       // Horizontal Bar Chart
       var trace1 = {
           x: values.slice(0, 10).reverse(),
           y: ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
           type: "bar",
           orientation: "h"
       };

       var data = [trace1];

       var layout = {
           title: "Top Ten OTUs found in the Individual"
       };

       Plotly.newPlot("bar", data, layout);

       // Bubble Chart
       var trace2 = {
           x: ids,
           y: values,
           type: "Scatter",
           text: labels,
           mode: 'markers',
           marker: {
               size: values,
               color: ids
           } 
       };

       var data1 = [trace2];

       var layout2 = {
           title: "Bacteria Samples",
           showlegend: false,
           height: 600,
           width: 1200
       };

       Plotly.newPlot("bubble", data1, layout2);

    });
};

function info(dropValue) {
    d3.json("static/samples.json").then((demo) => {
        console.log(demo.metadata);
        var meta = demo.metadata;

        var ids1 = meta.filter(metaObject => metaObject.id  == dropValue);

        var ids2 = ids1[0];

        var bellyWash = ids2.wfreq;

        var samples = d3.select("#sample-metadata");
        samples.html("");

        Object.entries(ids2).forEach(([key, value]) => {

            samples.append("h5").text(`${key}: ${value}`);
        });

        // Gauge Chart
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: bellyWash,
              title: { text: "Belly Button Washing Frequency: Scrubs per Week" },
              type: "indicator",
              mode: "gauge+number+delta",
              delta: { reference: 0 },
              gauge: {
                axis: { range: [null, 9] },
                steps: [
                  { range: [0, 1], color: "aliceblue" },
                  { range: [1, 2], color: "pink" },
                  { range: [2, 3], color: "yellow" },
                  { range: [3, 4], color: "orange" },
                  { range: [4, 5], color: "red" },
                  { range: [5, 6], color: "darkcyan" },
                  { range: [6, 7], color: "forestgreen" },
                  { range: [7, 8], color: "blue" },
                  { range: [8, 9], color: "purple" }
                ],
                threshold: {
                  line: { color: "red", width: 4 },
                  thickness: 0.75,
                  value: 9
                }
              }
            }
        ];
          
          var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    
          Plotly.newPlot("gauge", data, layout);
    });
};

function init() {

d3.json("static/samples.json").then((filters) => {
    var names1 = filters.names;

    var dropDown = d3.select("#selDataset");
    dropDown.html("");

    names1.forEach((value) => {
        dropDown.append("option").text(`${value}`);
    });

    // Using the first ID data to create the initial charts
    var initValue = names1[0];
    charts(initValue);
    info(initValue);
});
}

function optionChanged(newID) {

    // Fetching new data each time a new ID is selected
    charts(newID);
    info(newID);

} 

init();