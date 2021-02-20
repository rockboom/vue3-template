let path = require('path');
module.exports = {
    entry:'index.html',
    output:path.resolve(__dirname,'dist'),
    include:[
        'src/**/*',
        'public/**/*',
    ]
}