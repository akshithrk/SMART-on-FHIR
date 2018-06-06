<p id="demo"></p>

<script>
 var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

var test =  '{"address": [' +
    '{"use": "home",' +
      '"type": "both",' +
      '"line": ["534 Erewhon St"],' +
      '"city": "PleasantVille",' +
      '"district": "Rainbow",' +
      '"state": "Vic",' +
      '"postalCode": "3999",' +
      '"period": {"start": "1974-12-25"}}]}';

obj = JSON.parse(text);
add = JSON.parse(test);

document.getElementById("demo").innerHTML =  obj.employees[1].firstName + ", " + obj.employees[0].lastName;
/* always returns the later return statement */
document.getElementById("demo").innerHTML = add.address[0].city + ', ' + add.address[0].line;
</script>