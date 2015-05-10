
var spellings = document.getElementById("testcontent").innerHTML.split("\n");

var t = spellings.length;
var i = 0;

alert("testing getBestReplacement");
console.log("testing getBestReplacement");
spellings.forEach(function (value) {
	var set = value.split("-&gt;");
	if(set.length) {
	if (getBestReplacement(set[0].split(",")[0]).value != set[1]) {
		console.log(set[0]);
		i++;
	}
	}
});
alert((t - i) / t);

alert("testing checkSpelling");
console.log("testing checkSpelling");


var t = spellings.length;
var i = 0;

spellings.forEach(function (value) {
	var set = value.split("-&gt;");
	if(set.length) {
	if (checkSpelling(set[0].split(",")[0]) == true) {
		console.log(set[0]);
		i++;
	}
	}
});
alert((t - i) / t);