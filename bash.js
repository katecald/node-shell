var commands = require('./commands.js')

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    var input = data.toString().trim();
    var spaceIndex = input.indexOf(" ");
    var cmd = spaceIndex === -1 ? input : input.slice(0, spaceIndex);
    var words = input.slice(spaceIndex + 1);

    switch (cmd) {
        case 'pwd':
            commands.pwd()
            break;
        case 'date':
            commands.date()
            break;
        case 'ls':
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
        case 'sort':
            commands.sort(words);
            break;
        case 'wc':
            commands.wc(words)
            break;
        case 'uniq':
            commands.uniq(words)
            break;
        case 'curl':
            commands.curl(words)
            break;

    }
});
