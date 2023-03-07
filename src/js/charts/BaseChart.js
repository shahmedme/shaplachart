export default class BaseChart {
	constructor(parent, options) {
		console.log("on base chart---------->>>>>>>>>");
		this.parent = document.querySelector(parent);
		this.data = options.data;
		this.config = options;
		this.draw(options);
	}

	draw() {
		var _svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		this.parent.appendChild(_svg);

		// Set up the colors for the pie chart
		const color = d3
			.scaleOrdinal()
			.domain(this.data.map((d) => d.name))
			.range(d3.schemeSet2);

		// Set up the arc for each slice of the pie chart
		const arc = d3
			.arc()
			.innerRadius(0)
			.outerRadius(Math.min(this.config.width, this.config.height) / 2);

		// Set up the pie layout
		const pie = d3.pie().value((d) => d.value);

		// Create the SVG element
		const svg = d3
			.select("svg")
			.attr("width", this.config.width)
			.attr("height", this.config.height)
			.append("g")
			.attr(
				"transform",
				`translate(${this.config.width / 2}, ${this.config.height / 2})`
			);

		// Draw the slices of the pie chart
		svg
			.selectAll("path")
			.data(pie(this.data))
			.enter()
			.append("path")
			.attr("d", arc)
			.attr("fill", (d) => color(d.data.name));
	}
}
