
// TODO: load the dataset 
let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
    
    
    function filterData(category) {
        console.log(category);
        if (category == "all"){
            attractions.sort((a,b) => {
                return a.Visitors - b.Visitors;
            });
            let data = attractions.reverse().slice(0,5);
            console.log(data);
            renderBarChart(data);
        }
        else {
            let filteredAttractions = attractions.filter(attractions => attractions.Category == category);
            filteredAttractions.sort((a,b) => {
                return a.Visitors - b.Visitors;
            });
            let data = filteredAttractions.reverse().slice(0,5);
            console.log(data);
            renderBarChart(data);
        }
    }


let selectedElement = document.querySelector("#attraction-category");
selectedElement.addEventListener( 'change', function(event) {
    console.log(event.target.value);
    attractions.filter(filterData(event.target.value));
});

    
});
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/


// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category