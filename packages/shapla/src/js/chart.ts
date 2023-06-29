import PieChart from "./charts/PieChart";

const chartTypes = {
	pie: PieChart,
};

function getChartByType(chartType = "pie", parent: any, options: any) {
	// @ts-ignore
	if (!chartTypes[chartType]) {
		console.error("Undefined chart type: " + chartType);
		return;
	}

	// @ts-ignore
	return new chartTypes[chartType](parent, options);
}

class Chart {
	constructor(parent: any, options: any) {
		console.log("getting chart by type");
		return getChartByType(options.type, parent, options);
	}
}

export { Chart, PieChart };
