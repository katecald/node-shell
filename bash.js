var commands = require('./commands.js')

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    var input = data.toString().trim(); // remove the newline
    var spaceIndex = input.indexOf(" ");
    var cmd = spaceIndex === -1 ? input : input.slice(0, spaceIndex);
    var words = input.slice(spaceIndex + 1);

    // setTimeout(function() {
    //     process.stdout.write('\nnewprompt > ');
    // }, 0);

    switch (cmd) {
        case 'pwd':
            commands.pwd()
            break;
        case 'date':
            commands.date()
            break;
        case 'ls':
            //need to delay this call until after the new prompt
            commands.ls();
            break;
        case 'echo':
            commands.echo(words);
            break;
        case 'cat':
            commands.cat(words);
            break;

        case 'head':
            commands.head(words);
            break;

        case 'tail':
            commands.tail(words);
            break;

    }
    // var done = function(output) {
    //     process.stdout.write(output);
    //     setTimeout(function() {
    //         process.stdout.write('\nnewprompt > ');
    //     }, 0);
    // }
});
