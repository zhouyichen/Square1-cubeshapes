var canvasSize = 100;
// sq1Img = sq1Gen('box', 100);
// sq1Img.drawDoubleShape('cceeeecc', 'ececcece');
var cases = [
    {
        shape : ['ceceecce', 'ceececec'],
        name : "Similar_Fist_A",
        step : '/ -3, 0 /'
    },
    {
        shape : ['ececceec', 'eccecece'],
        name : "Similar_Fist_B",
        step : '/ -3, 0 /'
    },
    {
        shape : ['ecececce', 'ceeccece'],
        name : "Similar_Fist_C",
        step : '/ 3, 0 /'
    },
    {
        shape : ['cececeec', 'ecceecec'],
        name : "Similar_Fist_D",
        step : '/ 3, 0 /'
    },
    {
        shape : ['ecceecce', 'ceecceec'],
        name : "Barrel_Barrel_A",
        step : '/ -3, -3 /'
    },
    {
        shape : ['ceecceec', 'ecceecce'],
        name : "Barrel_Barrel_B",
        step : '/ 3, 3 /'
    },
    {
        shape : ['ceecccee', 'cceeceec'],
        name : "Shield_Shield_A",
        step : '/ 1, 0 ',
        next : 'Barrel_Barrel_A'
    },
    {
        shape : ['cceeceec', 'ceecccee'],
        name : "Shield_Shield_B",
        step : '/ 0, 1 ',
        next : 'Barrel_Barrel_B'
    },
    {
        shape : ['cceeecce', 'ecceccee'],
        name : "Muffin_Muffin_A",
        step : '/ 0, -2 ',
        next : 'Barrel_Barrel_A'
    },
    {
        shape : ['ecceccee', 'cceeecce'],
        name : "Muffin_Muffin_B",
        step : '/ -2, 0 ',
        next : 'Barrel_Barrel_B'
    },
    {
        shape : ['eeccccee', 'cceeeecc'],
        name : "Scallop_Scallop_A",
        step : '/ 1, 2 ',
        next : 'Barrel_Barrel_A'
    },
    {
        shape : ['cceeeecc', 'eeccccee'],
        name : "Scallop_Scallop_B",
        step : '/ -1, -2 ',
        next : 'Barrel_Barrel_A'
    },
    {
        shape : ['ceecceec', 'ceceecec'],
        name : "Barrel_Kite_A",
        step : '/ -3, 0 ',
        next : 'Similar_Fist_A'
    },
    {
        shape : ['ecceeecc', 'ecececec'],
        name : "Muffin_Square_A",
        step : '/ -1, -3 ',
        next : 'Similar_Fist_A'
    },
    {
        shape : ['cceeecec', 'eecccece'],
        name : "Similar_Pawn_1A",
        step : '/ 5, -2 ',
        next : 'Similar_Fist_A'
    },
    {
        shape : ['eecccece', 'cceeecec'],
        name : "Similar_Pawn_2A",
        step : '/ 4, -1 ',
        next : 'Similar_Fist_B'
    },
    {
        shape : ['ceeceecc', 'ecececec'],
        name : "Shield_Square_A",
        step : '/ -1, 0 ',
        next : 'Similar_Fist_A'
    },
    {
        shape : ['eeccceec', 'ecececec'],
        name : "Shield_Square_B",
        step : '/ 0, -1 ',
        next : 'Similar_Fist_B'
    },
    {
        shape : ['eeceeccc', 'ceceecec'],
        name : "Shield_Kite_A",
        step : '/ -2, 0 / 2, 0 ',
        next : 'Shield_Square_A'
    },
    {
        shape : ['eeceeccc', 'ececcece'],
        name : "Shield_Kite_B",
        step : '/ 2, 0 / -4, 1 ',
        next : 'Shield_Square_B'
    },
    {
        shape : ['cececcee', 'ceececec'],
        name : "Opposite_Fist_A",
        step : '/ 2, 0 ',
        next : 'Shield_Kite_A'
    },
    {
        shape : ['ceececce', 'ecececec'],
        name : "Kite_Square_A",
        step : '/ -1, 0 ',
        next : 'Opposite_Fist_A'
    },
    {
        shape : ['cceeeecc', 'ececcece'],
        name : "Scallop_Kite_A",
        step : '/ -1, -2 ',
        next : 'Similar_Fist_A'
    },
    {
        shape : ['eeccccee', 'ceceecec'],
        name : "Scallop_Kite_B",
        step : '/ -2, -1',
        next : 'Similar_Fist_B'
    },
    {
        shape : ['ecceceeee', 'cccceec'],
        name : "15_2_A",
        step : '/ -4, 3',
        next : 'Scallop_Kite_A'
    },
    {
        shape : ['ecceeeeec', 'cccceec'],
        name : "15_2_B",
        step : '/ -2, 3',
        next : 'Scallop_Kite_A'
    },
    {
        shape : ['ececeeeec', 'ccccece'],
        name : "114_101",
        step : '/ -2, 0',
        next : 'Scallop_Kite_A'
    },
    {
        shape : ['eeccccee', 'ceecceec'],
        name : "Scallop_Barrel",
        step : '/ 0, -4',
        next : 'Shield_Shield_A'
    },
    {
        shape : ['eeeecccc', 'ceeceecc'],
        name : "Scallop_Shield",
        step : '/ 0, -2 / 4, 0',
        next : 'Shield_Shield_B'
    },
	{
		shape : ['ccceeeec', 'cececeec'],
        name : "Scallop_Fist_A",
		step : '/ 3, 0 / -4, 3',
        next : 'Scallop_Kite_A'
	},
    {
        shape : ['cccceeee', 'ececceec'],
        name : "Scallop_Fist_B",
        step : '/ -3, 0 / -2, 3',
        next : 'Scallop_Kite_A'
    },
    {
        shape : ['ccceeeec', 'ceceeecc'],
        name : "Scallop_Pawn_A",
        step : '/ 3, 2 / -4, 3',
        next : 'Scallop_Kite_A'
    },
    {
        shape : ['cccceeee', 'ececccee'],
        name : "Scallop_Pawn_B",
        step : '/ -3, -2 / -2, 3',
        next : 'Scallop_Kite_A'
    },
    {
        shape : ['ccceeeec', 'ecececec'],
        name : "Scallop_Square",
        step : '/ 0, 2 / -2, 0',
        next : 'Scallop_Kite_A'
    },
    {
        shape : ['ccceeeec', 'ecceccee'],
        name : "Scallop_Muffin",
        step : '/ 0, -2 / -2, 3',
        next : 'Scallop_Kite_A'
    }
]
var casesHtml = '';
cases.forEach(function(c) {
	var canvas = htmlText('td', canvasCell(canvasSize, c.name));
    var steps = c.step;
    if (c.next) {
        steps += renderNext(c.next);
    }
    var row = canvas + htmlText('td', c.name + '<br>' + steps);
	casesHtml += htmlText('tr', row, 'case' + c.name);
});
$('#cases').html(casesHtml);
$('td').css('font-size', '18px');

cases.forEach(function(c) {
	var sq1Img = sq1Gen(c.name, 100);
	sq1Img.drawDoubleShape(c.shape[0], c.shape[1]);
});

function renderNext(id) {
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