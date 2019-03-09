var BUBBLE_PARAMETERS = {
    "data_file": "largest_cities.csv",
    "report_title": "Largest Cities of the World",
    "footer_text": "A demonstration of animated bubble charts in JavaScript and D3.js",
    "width": 940,
    "height": 700,
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": "Population",
    "numeric_fields": ["Price Momentum LT Rank", "Pc Away from Target", "Area", "Population", "Density"],
    "fill_color": {
        "data_field": "Density Level",
        "color_groups": {
            "low": "#d84b2a",
            "medium": "#beccae",
            "high": "#7aa25c"
        }
    },
    "tooltip": [
        {"title": "City", "data_field": "City"},
        {"title": "Country", "data_field": "Country"},
        {"title": "Part of the World", "data_field": "Region"},
        {"title": "Population", "data_field": "Population", "format_string": ",.2r"},
        {"title": "Area (km^2)", "data_field": "Area", "format_string": ",.2r"},
        {"title": "Pc Away from Target", "data_field": "Pc Away from Target", "format_string": ",.2r"},
        {"title": "Price Momentum LT Rank", "data_field": "Price Momentum LT Rank", "format_string": ",.2r"},
        {"title": "Density (pop / km^2)", "data_field": "Density"}
    ],
    "modes": [
        {
            "button_text": "All Cities",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Cities by Region",
            "button_id": "region",
            "type": "grid",
            "labels": ["Financials", "Energy", "Communication Services", "Consumer Discretionary", "Materials", "Health Care","Discretionary", "Industrials", "Technology", "Staples"],
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Region"
        },
        {
            "button_text": "Cities by Density Level",
            "button_id": "density_level",
            "type": "grid",
            "labels": ["Negative Return", "Between 0 and 10% Return", "Return Greater than 10%"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "Density Level"
        },
        {
            "button_text": "Area vs. Population",
            "button_id": "area_vs_population",
            "type": "scatterplot",
            "x_data_field": "Pc Away from Target",
            "y_data_field": "Price Momentum LT Rank",
            "x_format_string": "",
            "y_format_string": ""
        },
        {
            "button_text": "World Map",
            "button_id": "world_map",
            "type": "map",
            "latitude_field": "Latitude",
            "longitude_field": "Longitude"
        }
    ]
};
