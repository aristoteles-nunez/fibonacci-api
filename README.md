# Fibonacci API

Scenario: There is a need for a Rest (or Rest-like) API that can receive an index "n" and returns the Fibonacci value that corresponds to the given index, and you have been tasked with implementing the first version of this API.

Examples: the first values of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, ..., so, if we were to give the API the index n=3, we should get the response value "2", and if we request n=6, we should get "8" as the response, and so on.

# About the solution

The first approach was just execute the fibonacci as it is in an Express Server.
But as we can see the results depends on previous calculations, so the second version store the values in a memory dictionary.
The API is only listening GET requets on port `8080` .

## Improvements

- The API require more validations as the value maximun to calculate.
- Handle exceptions with correct error messages.
- If this api will be deployed in a stateless environment, for example cloud run from Google Cloud Platform, we need to separate the in memory dictionary to maybe a database in this way the API can scale without issues.

# Run

In local run as:

```
node main.js
```

# Send request

On the webbrowser access with the desired param `n`:

```
http://127.0.0.1:8080/?n=8
```
