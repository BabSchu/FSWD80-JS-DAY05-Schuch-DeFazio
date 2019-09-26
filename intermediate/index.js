/*Intermediate
Create a JSON schema which contains the following details per employee:

Unique ID
First Name
Last Name
Email address
Job Title
Salary
Fill the schema with meaningful data for 10 Employees. 
Print each employee's details in a table which will look representative 
and easily readable for the management team.*/

var companyXy = {

   "employee": [{

	"id": "01",

	"first_name": "Anna",

	"email": "anna.gehver@xy.com",

	"job_title": "CEO",

	"sallery": 10000

   }, {

	"id": "02",

	"first_name": "John",

	"email": "john.bfherg@xy.com",

	"job_title": "Marketing-Manager",

	"sallery": 10000

	}, {

	"id": "03",

	"first_name": "Meli",

	"email": "meli.bergerg@xy.com",

	"job_title": "Production-Manager",

	"sallery": 10000

	}, {

	"id": "04",

	"first_name": "Mary",

	"email": "mary.erwf@xy.com",

	"job_title": "Keyaccount-Manager",

	"sallery": 10000

	}, {

	"id": "05",

	"first_name": "Otto",

	"email": "otto.grbewd@xy.com",

	"job_title": "Facility-Manager",

	"sallery": 10000

	}, {

	"id": "06",

	"first_name": "Susi",

	"email": "susi.eefew@xy.com",

	"job_title": "Marketing-Assistant",

	"sallery": 10000

	}, {

	"id": "07",

	"first_name": "Michi",

	"email": "michi.geregr@xy.com",

	"job_title": "Housekeeper",

	"sallery": 10000

	}, {

	"id": "08",

	"first_name": "Lena",

	"email": "lena.grgda@xy.com",

	"job_title": "Head of IT",

	"sallery": 10000

	}, {

	"id": "09",

	"first_name": "Fritz",

	"email": "fritz.gsgrg@xy.com",

	"job_title": "Junior Developer",

	"sallery": 10000

	}, {

	"id": "10",

	"first_name": "Dani",

	"email": "dani.asda@xy.com",

	"job_title": "Senior Developer",

	"sallery": 10000

	},]
}

var i = 0
    document.writeln("<table border='2'><tr>");
    for (i = 0; i < companyXy.employee.length; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>Id</b></td><td width=50>" + companyXy.employee[i].id + "</td></tr>");
        document.writeln("<tr><td><b>Name</b></td><td width=50>" + companyXy.employee[i].first_name + "</td></tr>");
        document.writeln("<tr><td><b>E-Mail</b></td><td width=50>" + companyXy.employee[i].email + "</td></tr>");
        document.writeln("<tr><td><b>Job Title</b></td><td width=50>" + companyXy.employee[i].job_title + "</td></tr>");
        document.writeln("<tr><td><b>Sallery</b></td><td width=50>" + companyXy.employee[i].sallery + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    }

