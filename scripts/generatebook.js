var fs = require('fs');
var book = fs.createWriteStream('Book.txt');
var finished = 0, unfinished = 0, quickies = 0;

var parts = ['mainmatter', 'directives', 'controllers', 'services',
            'filters', 'promises', 'testing', '3rd-party', 'big-picture'];

book.write('introduction.md\n\n');

parts.forEach(function (part) {
    console.log('recipes/parts/'+part+'.md');
    book.write('recipes/parts/'+part+'.md\n');

    fs.readdirSync('recipes/done').forEach(function (filename) {
        if (filename.indexOf(part+'-') === 0) {
            if (filename.indexOf('-q-') !== -1) { quickies += 1; }
            console.log('recipes/done/'+filename);
            book.write('recipes/done/'+filename+'\n');
            finished += 1;
        }
    });

    fs.readdirSync('recipes/unfinished').forEach(function (filename) {
        if (filename.indexOf(part+'-') === 0) {
            if (filename.indexOf('-q-') !== -1) { quickies += 1; }
            console.log('recipes/unfinished/'+filename);
            book.write('recipes/unfinished/'+filename+'\n');
            unfinished += 1;
        }
    });

    console.log('');
    book.write('\n');
});

book.end();
console.log('Finished:   ', finished);
console.log('Unfinished: ', unfinished);
console.log('----------------');
console.log('Total:      ', (finished+unfinished), '('+quickies+' quickies)');