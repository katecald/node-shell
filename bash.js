var commands = require('./commands.js')

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    switch (cmd) {
        case 'pwd': 
            commands.pwd()
            break;
        case 'date':
            commands.date()
            break;
        case 'ls':
            //need to delay this call until after the new prompt
            setTimeout(commands.ls,0)
            
    }
    process.stdout.write('\nnewprompt > ')
  });

  