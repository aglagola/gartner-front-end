Gartner Front End Part of the coding assessment.

Application: To display stock data for a single company in a chart format.

GitHub Repo: https://github.com/aglagola/gartner-front-end

1. First clone both Front End and Back End Repositories to your local machine.

2. Run back end application locally: should use port 8080, the endpoint is localhost:8080/api

3. Run front end application locally: npm start

4. Open browser to localhost:3000. It should display graph information using plot.ly

This is a react app that runs index.js upon startup.
Index.js renders App.js which then renders the component Stock

## stock.js:

The only component of the application.
Consist of one function componentDidMount() to fetch api data and return data in correct json format. We loop through the data and push all x axis values for our chart in an array. We do the same for our y axis values. We then update the state of these x and y values so we can use in our application to render a chart. We import react-plotly.js to our stock.js.
In our render() we return the chart html from documentation and replace the x and y values with the correct values from state that we got before.

The app returns a chart with stock market data for IBM.

## stock.css

some css to center data
