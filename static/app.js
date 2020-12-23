function init() {

    d3.json("static/samples.json").then((datas) => {
       var values = datas.samples[0].sample_values.slice(0, 10);
       console.log(values);
       var ids = datas.samples[0].otu_ids.slice(0, 10);
       console.log(ids);
       var labels = datas.samples[0].otu_labels.slice(0, 10);
       console.log(labels);
    
       var otuID = ids.map(name => "OTU" + name);
       console.log(`OTU IDs: ${otuID}`);

       var trace1 = {
           x: values,
           y: otuID,
           type: "bar",
           orientation: "h"
       };

       var data = [trace1];

       // Horizontal Bar Chart
       Plotly.newPlot("bar", data);

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
           showlegend: false,
           height: 600,
           width: 1200
       };

       // Bubble Chart
       Plotly.newPlot("bubble", data1, layout2);
       console.log(trace2);

    });
};

function info(dropValue) {
    d3.json("static/samples.json").then((demo) => {
        console.log(demo.metadata);
        var meta = demo.metadata;

        var ids2 = meta.filter(bed => bed.id  == dropValue );

        var ids1 = ids2[0];

        var samples = d3.select("#sample-metadata");
        samples.html("");

        Object.entries(ids1).forEach(([key, value]) => {

            samples.append("h5").text(`${key}: ${value}`);
        });
    });
};

function dropDown(){
d3.json("static/samples.json").then((filters) => {
    var names1 = filters.names;

    var dropDown = d3.select("#selDataset");
    dropDown.html("");

    names1.forEach((value) => {
        dropDown.append("option").text(`${value}`);
    });
    var initValue= names1[0];
    info(initValue);
});
};

function optionChanged(newID) {
    info(newID);

} 

dropDown()



// function info() {
//     d3.json("static/samples.json").then((demo) => {
//         var meta = demo.metadata[0]

//         meta.forEach(function(infoData) {
//             console.log(infoData);

//         })

//     })
// }

init();