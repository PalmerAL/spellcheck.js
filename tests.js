var spellings = document.getElementById("testcontent").innerHTML.split("\n");

var t = spellings.length / 20;
var i = 0;

alert("testing getBestReplacement");
console.log("testing getBestReplacement");
spellings.forEach(function (value, index) {

	var set = value.split("-&gt;");
	if (set.length && index % 20 == 0) {
		console.log(set);
		if (spellcheck.getBestReplacement(set[0]) != set[1]) {
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
	if (set.length) {
		if (spellcheck.checkSpelling(set[0].split(",")[0]) == true) {
			i++;
		}
	}
});
alert((t - i) / t);

alert("testing checkSpelling - correct words");
console.log("testing checkSpelling - correct words");


var t = spellings.length;
var i = 0;

spellings.forEach(function (value) {
	var set = value.split("-&gt;");
	if (set.length) {
		if (spellcheck.checkSpelling(set[1]) == false) {
			i++;
		}
	}
});
alert((t - i) / t);
