var ltNumber = 
[[07,09,18,22,26,36,37,38,42,43],
[05,08,09,15,22,24,27,37,45,49],
[02,08,10,17,19,35,38,40,41,44],
[03,04,05,13,16,19,21,26,33,34],
[02,04,06,14,18,22,24,26,39,47],
[05,07,11,16,22,31,36,40,42,43],
[06,08,17,28,31,33,34,38,41,46],
[01,04,11,19,23,26,34,35,40,43]];

function caculate(arr){
    var rs = 0;
	var tempArr = arr.split('.').map(function(i){
		return parseInt(i, 10);
	});
    for(var i = 0;i<ltNumber.length;i++){
		rs = _.intersection(ltNumber[i], tempArr).length;
		if (rs != 0) {
			console.log('第' + i + '組對中' + rs);
		}
    }
}