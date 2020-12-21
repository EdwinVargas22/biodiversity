function init() {

    d3.json("samples.json").then((datas) => {
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
           text: labels,
           mode: 'markers',
           marker: {
               size: [values],
               color: [ids]
           } 
       };

       var data1 = [trace2];

       var layout2 = {
           showlegend: false,
           height: 600,
           width: 600
       };

       // Bubble Chart
       Plotly.newPlot("bubble", data1, layout2);

    });
};

function info() {
    d3.json("samples.json").then((demo) => {
        var meta  = demo.metadata[0]

        meta.forEach(function(infoData) {
            console.log(infoData);

        })

    })
}

init();