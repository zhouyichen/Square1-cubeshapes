var canvasSize = 100;
// sq1Img = sq1Gen('box', 100);
// sq1Img.drawDoubleShape('cceeeecc', 'ececcece');
var cases = [
    {
        shape : ['ceceecce', 'ceececec'],
        name: "Similar_Fist_A",
        step : '/ -3, 0 /'
    },
    {
        shape : ['ececceec', 'eccecece'],
        name: "Similar_Fist_B",
        step : '/ -3, 0 /'
    },
    {
        shape : ['ecceecce', 'ceecceec'],
        name: "Barrel_Barrel_A",
        step : '/ -3, -3 /'
    },
    {
        shape : ['ceecceec', 'ecceecce'],
        name: "Barrel_Barrel_B",
        step : '/ 3, 3 /'
    },
    {
        shape : ['ceecccee', 'cceeceec'],
        name: "Shield_Shield_A",
        step : '/ 1, 0' + otherCase('Barrel_Barrel_A')
    },
    {
        shape : ['cceeceec', 'ceecccee'],
        name: "Shield_Shield_B",
        step : '/ 0, 1' + otherCase('Barrel_Barrel_B')
    },
    {
        shape : ['eeccccee', 'cceeeecc'],
        name: "Scallop_Scallop",
        step : '/ 1, 2' + otherCase('Barrel_Barrel_A')
    },
    {
        shape : ['eeccccee', 'ceecceec'],
        name: "Scallop_Barrel",
        step : '/ 0, -4' + otherCase('Shield_Shield_A')
    },
    {
        shape : ['eeeecccc', 'ceeceecc'],
        name: "Scallop_Shield",
        step : '/ 0, -2 / 4, 0' + otherCase('Shield_Shield_B')
    },
    {
        shape : ['cceeeecc', 'ececcece'],
        name: "Scallop_Kite_A",
        step : '/ -1, -2' + otherCase('Similar_Fist_A')
    },
    {
        shape : ['eeccccee', 'ceceecec'],
        name: "Scallop_Kite_B",
        step : '/ -2, -1' + otherCase('Similar_Fist_B')
    },
	{
		shape : ['ccceeeec', 'cececeec'],
        name: "Scallop_Fist_A",
		step : '/ 3, 0 / -4, 3' + otherCase('Scallop_Kite_A')
	},
    {
        shape : ['cccceeee', 'ececceec'],
        name: "Scallop_Fist_B",
        step : '/ -3, 0 / -2, 3' + otherCase('Scallop_Kite_A')
    },
    {
        shape : ['ccceeeec', 'ceceeecc'],
        name: "Scallop_Pawn_A",
        step : '/ 3, 2 / -4, 3' + otherCase('Scallop_Kite_A')
    },
    {
        shape : ['cccceeee', 'ececccee'],
        name: "Scallop_Pawn_B",
        step : '/ -3, -2 / -2, 3' + otherCase('Scallop_Kite_A')
    },
    {
        shape : ['ccceeeec', 'ecececec'],
        name: "Scallop_Square",
        step : '/ 0, 2 / -2, 0' + otherCase('Scallop_Kite_A')
    },
    {
        shape : ['ccceeeec', 'ecceccee'],
        name: "Scallop_Muffin",
        step : '/ 0, -2 / -2, 3' + otherCase('Scallop_Kite_A')
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