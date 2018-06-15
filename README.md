# Distribution-Website-Load-To-Google-Servers

This prototype implementation can be used to solve problem of exam results site getting crashed on result publishing day due to large number of users accessing at same time.

I have used Google blogger to host result publishing website and Google drive to host my resut database file as Google servers will not crash even if large number of people access the site at same time and also you don't have to setup servers yourself thus saving costs.

This project can be used by any educational
institution to declare results to the students without the need to worry about
the crashing of servers.

The concept of this project can be used to create
websites which can handle lots of stress without the need of hosting of
webservers and databases, that too free of cost.





Please refer to my documentation for full information:

https://drive.google.com/file/d/1zoF_X0_L3pkJ2KL0YimUPs4kL83nOkwQ/view?usp=sharing


### Output

Refer for live demo: 

http://examresultsuniv.blogspot.com/2017/08/2nd-year-result.html

## Screenshots

- The Website shows
the format in which the hall ticket number should be entered and it consists of
a text field to enter hall ticket and Submit button





![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-045.jpg)

### Database file Screenshot

- This Database file is in excel format and stored at Google drive

![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-033.jpg)

### Input Validation Screenshots

- When a user enters
hall ticket number less than 10 characters, an error message is show to the
user to enter hall ticket number with 10 characters.





![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-048.jpg)

- When a user enters
hall ticket number more than 10 characters, an error message is show to the
user to enter hall ticket number with 10 characters.





![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-049.jpg)

- When a user enters
a hall ticket number in wrong format, an error message is given to user
indicating to enter hall ticket in correct format.





![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-051.jpg)




- When a user enters
a hall ticket number with year more than the current year, an error message is
shown to user telling that the year does not exists.

![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-052.jpg)

- If a user enters a
hall ticket number in correct format and if it does not exist in database file,
an error message is shown to the user telling that the hall ticket does not
exist in the database





![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-053.jpg)

### Website Output Screenshot



       
- User Enters avalid Hall Ticket Number and Clicks Submit, the result is shown to the user





![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-046.jpg)

![image](https://github.com/fawazahmed0/Distributing-website-load-to-google-servers/blob/master/images/-2018-jan-29-054.jpg)




