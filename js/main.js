var canvasSize = 100;
// sq1Img = sq1Gen('box', 100);
// sq1Img.drawDoubleShape('cceeeecc', 'ececcece');
var cases = [
    {
        shape : ['ceceecce', 'ceececec'],
        name: "Similar_Fist_A",
        step : '/ -3, 0 /'
    }
]
var casesHtml = '';
cases.forEach(function(c) {
	var canvas = htmlText('td', canvasCell(canvasSize, c.name));
    var row = canvas + htmlText('td', c.name + '<br>' + c.step);
	casesHtml += htmlText('tr', row, 'case' + c.name);
});
$('#cases').html(casesHtml);
$('td').css('font-size', '18px');

cases.forEach(function(c) {
	var sq1Img = sq1Gen(c.name, 100);
	sq1Img.drawDoubleShape(c.shape[0], c.shape[1]);
});

function otherCase(id) {
    return ' <button><a href="#case' + id + '">' + id + '</a></button>';
}

function htmlText(tag, content, id, classname){
    var text = '';
    text += '<'+ tag;
    if (id){
        text += ' id="' + id + '"';
    }
    if (classname) {
        text += ' class="' + classname + '"';
    }
    text += '>';
    if (content){
        text += content;
    }
    text += '</' + tag + '>';
    return text;
}

function tableRowSpan(content, span){
	var text = '';
	var tag = 'td';
    text += '<'+ tag;
    if (span){
        text += ' rowspan="' + span + '"';
    }
    text += '>';
    if (content){
        text += content;
    }
    text += '</' + tag + '>';
    return text;
}

function tableColSpan(content, span){
    var text = '';
    var tag = 'td';
    text += '<'+ tag;
    if (span){
        text += ' colspan="' + span + '"';
    }
    text += '>';
    if (content){
        text += content;
    }
    text += '</' + tag + '>';
    return text;
}

function canvasCell(size, id) {
	return '<canvas id="' + id + '" width="' + size * 2 + '" height="' + size  + '"></canvas>'
}