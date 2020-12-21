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

       var trace = {
           x: values,
           y: otuID,
           type: "bar",
           orientation: "h"
       };

       var data = [trace];

       Plotly.newPlot("bar", data);


    });


};

init();