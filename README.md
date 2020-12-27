# Belly Button Biodiversity
![bacteria](https://user-images.githubusercontent.com/60836219/103164725-ba9d5500-47c3-11eb-823e-9a4a516a8b3e.jpg)

Build an interactive dashboard to explore the Belly Button Biodiversity dataset, which will catalog the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Horizontal Bar Chart

1. Use the D3 library to read in samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use sample_values as the values for the bar chart.

* Use otu_ids as the labels for the bar chart.

* Use otu_labels as the hovertext for the chart.

![Bar Chart](https://user-images.githubusercontent.com/60836219/103164722-b709ce00-47c3-11eb-82eb-290a24d3e74c.PNG)


## Step 2: Bubble Chart

1. Create a bubble chart that displays each sample.

* Use otu_ids for the x values.

* Use sample_values for the y values.

* Use sample_values for the marker size.

* Use otu_ids for the marker colors.

* Use otu_labels for the text values.

![Bubble Chart](https://user-images.githubusercontent.com/60836219/103164720-b4a77400-47c3-11eb-8444-5d173976cbae.PNG)

## Step 3: Demographic Info

1. Display the sample metadata, as an individual's demographic information.

2. Display each key-value pair from the metadata JSON object somewhere on the page.

![Demo](https://user-images.githubusercontent.com/60836219/103165028-8330a780-47c7-11eb-8758-8d959da94f54.PNG)

## Step 4: Gauge Chart

* Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![Gauge Chart](https://user-images.githubusercontent.com/60836219/103164719-b2451a00-47c3-11eb-96bf-a0c7f50fbaff.PNG)

### About the Data

Hulcr, J. et al.(2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
