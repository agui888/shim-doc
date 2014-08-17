var jade = require('jade')
var fs = require('fs')
var yaml = require('js-yaml')

main()

function main() {
    var config = yaml.load(fs.readFileSync('config.yml', 'utf-8'))
    fs.writeFileSync('mixin.jade', getMixin(config.section))
    var ret = jade.renderFile('views/index.jade', config)
    fs.writeFileSync('index.html', ret)
}

function getMixin(section) {
    return section.map(function(x) {
        return 'mixin ' + x + '\n  include:markdown docs/' + x + '.md'
    }).join('\n')
}
