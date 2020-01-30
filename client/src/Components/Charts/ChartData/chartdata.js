export const options = {
    backgroundColor: "transparent",
    animationEnabled: true,
    height: 220,
    width: 300,
    subtitles: [{
        text: "1,241.24 Spent",
        fontFamily: 'Roboto',
        verticalAlign: "center",
        fontSize: 12,
        dockInsidePlotArea: true
    }],
    
    data: [{
        type: "doughnut",
        showInLegend: true,
        dataPoints: [
            { name: "Shopping", y: 204.65 },
            { name: "Groceries", y: 298.51 },
            { name: "Health & Fitness", y: 92.35 },
            { name: "Travel", y: 92.89 },
            { name: "Food & Drink", y: 52.39 },
            { name: "Utilities", y: 500.45 }
        ]
    }]
}