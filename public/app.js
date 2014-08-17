$(function() {
    var root = $('.content')
    var menu = root.find('h1, h2, h3')
    var li = menu.map(function(i) {
        var a = '<a href="#' + this.id + '" class="' + this.tagName.toLowerCase() + '">' + this.innerText + '</a>'
        return '<li>' + a + '</li>'
    }).toArray().join('')
    $('#menu').html('<ul>' + li + '</ul>')
})
