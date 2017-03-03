exports.pwd = function () {
    process.stdout.write(process.argv[1])
}

exports.date = function () {
    var date = new Date()
    process.stdout.write(date.toString())
}

exports.ls = function() {
    var fs = require('fs');
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write("\n" + file.toString());
        })
  //process.stdout.write("prompt > ");
});
}   