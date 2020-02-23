# APNIC Practical Test

This is a respository to store code for the APNIC practical test. I have opened issues for each of the tasks and I will create Pull Requests against them with the format `issue_number-branch_name`.

## Installation

To get the project up and running please to the following:

1. Run `git clone https://github.com/BronsonQuick/APNIC-Practical-Test.git apnic-practical-test` in a terminal.
2. Run `cd apnic-practical-test` in a terminal.
3. Run `docker-composer up -d`.
4. Go to [http://localhost:8000/wp-admin](http://localhost:8000/wp-admin) in a browser.
5. Login with Username: `admin` and Password: `password`.

## Theme Development

1. Go to [http://localhost:8000/wp-admin/themes.php](http://localhost:8000/wp-admin/themes.php) in a browser and activate the "APNIC Test" theme.
2. Run `cd wp_data/themes/apnic-theme/react-src` in a Terminal.
3. Run `npm run wpstart` to start the development server.
4. Browse the frontend and edit the files inside `wp_data/themes/apnic-theme/react-src`.

### A gif demonstrating loading the REST API data in React

![screencast_2020-02-23_22-33-08](https://user-images.githubusercontent.com/1377956/75112325-7cf50a80-568e-11ea-922d-8c8060dfb3ad.gif)
