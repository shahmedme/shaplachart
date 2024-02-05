# ShaplaChart

ShaplaChart is a lightweight and customizable charting library for creating beautiful and interactive charts in your web applications.

## Features

- **Easy to Use:** Simple API and configuration for quick integration.
- **Customizable:** Customize the appearance and behavior of charts to suit your needs.
- **Responsive:** Create charts that adapt to different screen sizes.
- **Interactive:** Support for interactive features like tooltips and zooming.
- **Wide Range of Chart Types:** Line charts, bar charts, pie charts, and more.

## Getting Started

### Installation

You can install ShaplaChart using npm:

```bash
npm install shaplachart
```

```bash
const chart = new ShaplaChart({
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 120, 200, 80, 150],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  },
});
```

## Documentation
Check out the full documentation here for detailed information on how to use ShaplaChart.

## Demo
See ShaplaChart in action in our demo.

## Contributing
If you would like to contribute to ShaplaChart, please follow our [contribution guidelines](./docs/CONTRIBUTING.md).

## License
This project is licensed under the MIT License - see the [LICENSE file](LICENSE.md) for details.