import * as d3 from "d3";

export default class BaseChart {
	private parent: any;
	private data: any;
	private config: any;

	constructor(parent: any, options: any) {
		this.parent = document.querySelector(parent);
		this.data = options.data;
		this.config = options;
		this.draw();
	}

	draw() {
		var _svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		this.parent.appendChild(_svg);

		const color = d3
			.scaleOrdinal()
			.domain(this.data.map((d: any) => d.name))
			.range(d3.schemeSet2);

		const arc = d3
			.arc()
			.innerRadius(0)
			.outerRadius(Math.min(this.config.width, this.config.height) / 2);

		// @ts-ignore
		const pie = d3.pie().value((d) => d.value);

		const svg = d3
			.select("svg")
			.attr("width", this.config.width)
			.attr("height", this.config.height)
			.append("g")
			.attr(
				"transform",
				`translate(${this.config.width / 2}, ${this.config.height / 2})`
			);

		svg
			.selectAll("path")
			.data(pie(this.data))
			.enter()
			.append("path")
			// @ts-ignore
			.attr("d", arc)
			// @ts-ignore
			.attr("fill", (d) => color(d.data.name));
	}
}
