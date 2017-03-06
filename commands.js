var fs = require('fs');

var done = function(output) {
    process.stdout.write(output);
    setTimeout(function() {
        process.stdout.write('\nnewprompt > ');
    }, 0);
}

exports.pwd = function(file) {
    done(process.argv[1]);
}

exports.date = function(file) {
    var date = new Date()
    done(date.toString());
}

exports.ls = function(file) {
    //var fs = require('fs');
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        var output = "";
        files.forEach(function(file) {
            output += "\n" + file.toString();
        })
        done(output);
    });
}

exports.echo = function(file) {
    done(file);
}

exports.cat = function(file) {
    //var fs = require('fs');
    fs.readFile(file, function(err, data) {
        if (err) throw err;
        done(data);
    });

}

exports.head = function(file) {
    // fs.read(fd, buffer, 0, 1, 0, function(err, bytesRead, buffer) {
    //     done
    // })

    fs.readFile(file, function(err, data) {
        if (err) throw err;
        var lines = data.toString("utf-8").split("\n");
        var output = "";
        lines.forEach(function(line, idx) {
            if (idx < 5) output += line + "\n";
        });
        done(output);
    });
}

exports.tail = function(file) {
    fs.readFile(file, function(err, data) {
        if (err) throw err;
        var lines = data.toString("utf-8").split("\n");
        var output = "";
        lines.forEach(function(line, idx) {
            if (idx > lines.length - 6) output += (line + "\n");
        });
        done(output);
    });
}
