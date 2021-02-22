# Number Fetching Application

This application was created with React.

## Using the application

The application is running in Heroku. I chose to use Heroku, since it is familiar platform and fitting for this case.
You can access the application from [https://numberfetchapplication.herokuapp.com/](https://numberfetchapplication.herokuapp.com/!#).

You can also pull the project from GitHub repository and run application locally by using command `npm start` in the project directory.

## Application features and functionality

When you first open this application you should see this interface:

![Kuva](https://github.com/willmana/NumberFetchApplication/blob/master/img/start.png)

There you can find fields for start and end dates, and of course field for you access key. I chose to use form with submit-button to avoid continuous calls to API when filling the fields.

If you input invalid access key, the application will notice this from 401 status code and will let you know: 

![Kuva](https://github.com/willmana/NumberFetchApplication/blob/master/img/wrongkey.png)

If you insert dates in a way that API wouldn't allow, the application will also notice this from 400 status code and informs you:

![Kuva](https://github.com/willmana/NumberFetchApplication/blob/master/img/wrongdates.png)

When both dates and access key are valid, you will finally get access to the data you wish to inspect and see the following interface:

![Kuva](https://github.com/willmana/NumberFetchApplication/blob/master/img/search.png)

## Extra features

The application stores your access key to local storage. After you close the application and open it again, it will populate your access key into its field. I chose to use local storage only for the access key, since I wanted to use 'demo-data' dates as default states in my useState constants. You will see this after reloading:

![Kuva](https://github.com/willmana/NumberFetchApplication/blob/master/img/reload.png)

The application uses pagination to show only 5 fields of data at the time. Application will calculate amount of pages needed accordingly in respect to the amount of data provided from the API. For example if your data fits to two pages application will show you this: 

![Kuva](https://github.com/willmana/NumberFetchApplication/blob/master/img/pagination.png)

## Other comments

This application uses React Bootstrap. I wasn't as familiar with this library but wanted to give it a try. I utilized multiple components from the Bootstrap library such as Jumbotron, Cards, Containers and Rows/Cols.

I had few issues with the application that I couldn't find a simple fix. When using the pagination, it will redirect the application to path `!#` and may reload the page, since onClick wanted any href on call and it didn't seem to like empty reference. Other issues I had was with vertical centering of the access key-field. I used Bootstrap's grid system and it worked as I wished excluding the vertical alignment of this one input field. I am not that pro with css and couldn't find a fix for this quite simple issue. Picture as a reference: 

![Kuva](https://github.com/willmana/NumberFetchApplication/blob/master/img/center.png)
