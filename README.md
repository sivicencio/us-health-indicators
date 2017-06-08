# US Health Indicators

US Health Prevalence Indicators viewer. Sources of data are spreadsheets which [are available](https://www.cdc.gov/diabetes/data/countydata/countydataindicators.html) at the US CDC site. Proved indicator sheets are Diagnosed Diabetes Prevalence, Leisure-time Physical Inactivity Prevalence and Obesity Prevalence.

The application does not read data directly from the spreadshets. Instead, it lets you load that data and exposes an API to access it. This way the access is faster. This API and the database connection is built with the [Loopback](https://loopback.io) framework.

The viewer is a client-side application that access the API, and is built with the [React](https://facebook.github.io/react/) framework.


### Stack

- Loopback 3.0.0 (Node required)
- React 15.5.4
- Webpack 2.5.1
- PostgreSQL (9.4 or above)


### Setup instructions

This project is only working in development mode. Production-like environments were left out of the scope.

To run the application from scratch, you need to follow the steps below:


1. **Install project NPM packages**

  ```
  npm install
  ```

2. **Configure the PostgreSQL data source**

  Rename file at `server/datasource.json.example` for `server/datasource.json` (`.example` suffix removed) and edit json properties with your own PostgreSQL connection data (`host`, `port`, `user` and `password`). For `database` property, you can keep the example name of create one of your preference.

  **Keep the rest just like the example.**

3. **Create database**

  Next you need to create the Postgres database. You can do something like:

  ```
  createdb database_name
  ```

  Or create the database directly using the `psql` CLI.

  **The database name has to be the same as the datasource.json `database` field**

4. **Migrate Loopback models**

  Loopback supports `auto-migration`, which lets you create a database schema from Loopback models. Execute the following at the root of the project:

  ```
  node bin/automigrate.js
  ```

  When it logs the message `Models automigrated`, press `Ctrl + C` to return to the prompt.


5.  **Run the application**

  Type the folliwing at the root of the project:

  ```
  npm run start
  ```

  At this point you can access the application at [http://localhost:3000](http://localhost:3000), but it will have empty data, so let's populate our database.

5. **Download actual data**

  Go to the [CDC county indicators](https://www.cdc.gov/diabetes/data/countydata/countydataindicators.html) site and download the three spreadsheet named at the beginning (Diagnosed Diabetes Prevalence, Leisure-time Physical Inactivity Prevalence and Obesity Prevalence). Make sure to download the `All states` sheets.

6.  **Upload sheets**

  Go to [http://localhost:3000/upload](http://localhost:3000/upload). You'll see a tiny form for uploading CDC Excel files. Choose each of the recently downloaded files, and press the `Load data` button.

  You'll see the following message:

  ```
  Data loading started. Check API later to see results.
  ```

  Yes, it's uploading the sheet data. You can just wait a few minutes or check the terminal to see if it's still logging messages, or if it's just quiet for more than a couple of minutes.

  **Repeat this process for each of the 3 downloaded spreadsheets.**

7.  **Visit the main page**

  Now that we have populated our database, it's time to see the application in action. Go to [http://localhost:3000](http://localhost:3000) and start playing.

And that's it! Enjoy! :)


Brought to you by [Sebastián Vicencio](https://github.com/sivicencio)
