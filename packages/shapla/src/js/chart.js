import PieChart from "./charts/PieChart";

const chartTypes = {
	pie: PieChart,
};

function getChartByType(chartType = "pie", parent, options) {
	if (!chartTypes[chartType]) {
		console.error("Undefined chart type: " + chartType);
		return;
	}

	return new chartTypes[chartType](parent, options);
}

class Chart {
	constructor(parent, options) {
		console.log("getting chart by type");
		return getChartByType(options.type, parent, options);
	}
}

export { Chart, PieChart };
