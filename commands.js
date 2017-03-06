var fs = require('fs');
var request = require('request')

var done = function(output) {
    process.stdout.write(output);
    setTimeout(function() {
        process.stdout.write('\nprompt > ');
    }, 0);
}

exports.pwd = function(file) {
    done(process.argv[1].toString());
}

exports.date = function(file) {
    var date = new Date()
    done(date.toString());
}

exports.ls = function(file) {
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
    fs.readFile(file, function(err, data) {
        if (err) throw err;
        done(data);
    });

}

exports.head = function(file) {
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

exports.sort = function(file) {
    fs.readFile(file, function(err, data) {
        if (err) throw err;
        var lines = data.toString("utf-8").split("\n");
        done(lines.sort().join('\n'))
    });
}

exports.wc = function(file) {
    fs.readFile(file, function(err, data) {
        if (err) throw err;
        var lines = data.toString("utf-8").split("\n");
        var output = lines.length.toString()
        done(output)
    });
}

exports.uniq = function(file) {
    fs.readFile(file, function(err, data) {
        if (err) throw err;
        var lines = data.toString("utf-8").split("\n");
        var output = lines.filter(function(elem,ind) {
            if(elem === lines[ind-1]) return false;
            else return true;
        }).join('\n')
        done(output)
    });
}

exports.curl = function(file) {
    // var http = 'http'
    // var www = 'www.'
    // if (file.includes(www) && file.includes(http)) {
        request(file, function(err, response, body) {
            if (err) throw err;
            done(body.toString())
        })
    // } else {
    //     throw 'invalid url';
    // }
}

