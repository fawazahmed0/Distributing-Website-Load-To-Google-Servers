<html>

<head>



    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <!-- rss2json is required to access Database File-->
    <script src='//rss2json.com/gfapi.js' type='text/javascript'>
    </script>



    <script>
        // disable button and textfield until page loads completely
        document.onreadystatechange = function() {
            if (document.readyState == "complete") {
                $("#hallid").removeAttr("disabled");
                $("#btn").removeAttr("disabled");
            }
        }


        // '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
        $(window).on("load resize ", function() {
            var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
            $('.tbl-header').css({
                'padding-right': scrollWidth
            });
        }).resize();




        // calling myfunc() when pressing enter
        $(document).keypress(function(e) {
            if (e.which == 13) {
                validation();
            }
        });




        var arr = [];
        var docKey = '1ZvgfNnkGjy4nYf7PsgssmZ8RvuEo9yYXk5KoQEwFIss'; // the docKey of your Google Docs spreadsheet 
        var url = 'http://spreadsheets.google.com/feeds/list/' + docKey + '/default/public/values?alt=json';
        console.log("hello");
        $(document).ready(function() {

            google.load('feeds', '1', {
                'callback': function() {
                    ($.getJSON(url, 'callback=?')).success(function(data) {


                        $(data.feed.entry).each(function(i, entry) {
                            //spreadsheet should have rollno name etc in first row,and in lowercase



                            var rollno = entry.gsx$rollno.$t;
                            var name = entry.gsx$name.$t;
                            var subject1 = entry.gsx$subject1.$t;
                            var subject2 = entry.gsx$subject2.$t;
                            var subject3 = entry.gsx$subject3.$t;
                            var subject4 = entry.gsx$subject4.$t;
                            var subject5 = entry.gsx$subject5.$t;
                            var subject6 = entry.gsx$subject6.$t;
                            var subject7 = entry.gsx$subject7.$t;
                            var subject8 = entry.gsx$subject8.$t;
                            var total = entry.gsx$total.$t;
                            var result = entry.gsx$result.$t;
                            arr.push(rollno + ',' + name + ',' + subject1 + ',' + subject2 + ',' + subject3 + ',' + subject4 + ',' + subject5 + ',' + subject6 + ',' + subject7 + ',' + subject8 + ',' + total + ',' + result);




                        });



                    });
                }
            });
        });

        function myfunc() {
            var bool = true;
            for (var i = 0; i < arr.length; i++) {

                if ($('#hallid').val().toUpperCase() == arr[i].split(',')[0].toUpperCase()) {



                    GenerateTable(arr[i].split(',')[0], arr[i].split(',')[1], arr[i].split(',')[2], arr[i].split(',')[3], arr[i].split(',')[4], arr[i].split(',')[5], arr[i].split(',')[6], arr[i].split(',')[7], arr[i].split(',')[8], arr[i].split(',')[9], arr[i].split(',')[10], arr[i].split(',')[11]);
                    bool = false;
                    break;
                }
            }
            if (bool) {
                $('#Blog1').html('<p style="color:red;font-weight:bold;" >Hallticket does not exist in Database. Please enter valid Hallticket Number</p>');
            }
        }

        function GenerateTable(a, b, c, d, e, f, g, h, i, j, k, l) {
            //Build an array containing Customer records.

            var customers = new Array();
            customers.push(["Roll No", "Name", "Design Pattern", "Linux Programming", "DataMining & DataWareHousing", "Cloud Computing", "Software Project Management", "Information Retrieval Systems", "Linux Programming Lab", "DataMining & DataWareHousing Lab", "Total", "Result"]);
            customers.push([a, b, c, d, e, f, g, h, i, j, k, l]);

            //Create a HTML Table element.
            var table = document.createElement("TABLE");


            //Get the count of columns.
            var columnCount = customers[0].length;

            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = customers[0][i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
            for (var i = 1; i < customers.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = customers[i][j];
                }
            }

            var dvTable = document.getElementById("Blog1");

            dvTable.innerHTML = "";

            dvTable.appendChild(table);

            $("#Blog1").prepend("<p style='color:white;'>" + romanize(year) + " Year Result </p>");
        }
        var year;

        function validation() {
            var d = new Date();
            var strr = $("#hallid").val();
            year = (d.getFullYear() % 100) - parseInt(strr.substring(0, 2)) + 1;
            //check size
            if (strr.length < 10) {

                $('#Blog1').html('<p style="color:red;font-weight:bold;" >Hallticket cannot be less than 10 characters.Please Enter Hallticket Number with 10 Characters</p>');
                return false;
            }
            if (strr.length > 10) {

                $('#Blog1').html('<p style="color:red;font-weight:bold;" >Hallticket cannot be more than 10 characters.Please Enter Hallticket Number with 10 Characters</p>');
                return false;
            }

            if (!$.isNumeric(strr.substring(0, 2)) || !$.isNumeric(strr.substring(6, 10)) || !$.isNumeric(strr.substring(4, 5)) || $.isNumeric(strr.substring(5, 6))) {

                $('#Blog1').html('<p style="color:red;font-weight:bold;" >Please Enter Hallticket in correct format</p>');
                return false;
            }

            if (parseInt(strr.substring(0, 2)) > d.getFullYear() % 100) {


                $('#Blog1').html('<p style="color:red;font-weight:bold;" >Year does not exist</p>');
                return false;
            }


            myfunc();
        }

        function romanize(num) {
            var lookup = {
                    M: 1000,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1
                },
                roman = '',
                i;
            for (i in lookup) {
                while (num >= lookup[i]) {
                    roman += i;
                    num -= lookup[i];
                }
            }
            return roman;
        }
    </script>
</head>

<body>
    <p><b> Please Enter HallTicket in the below Given Format: </b><br><br> Year-CollegeCode-TypeofCourse-CourseCode-BranchCode-StudentSerialNo <br><br> Example: 14E31A0563
    </p>
    <br><br><br> Enter HallTicket Number: <input id='hallid' type='text' name='hallno' required='required' autocomplete="off" disabled="disabled">

    <input id='btn' type='submit' value='Submit' disabled='disabled' onclick="validation();">

    <div id='Blog1'></div>
</body>

</html>