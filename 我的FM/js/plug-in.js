// $.fn.boomText = function(type){
//    console.log(this)
//    this.boomText(str.split('').reverse().join(''))
// }

$.fn.boomText = function(){
    type = type || 'rollIn'
    this.html(function(){
        var arr = $(this).text()
        .split('').map(function(word){
            return '<span style="opacity:0;display:inline-block">'+word+'</span>'
        })
        return arr.join('')
    })
    var index = 0
    var $boomTexts = $(this).find('span')
    var clock = setInterval(function(){
        $boomTexts.eq(index).addClass('animated '+type)
        index++
        if(index >= $boomTexts.length){
            clearInterval(clock)
        }
    },300)
}

$('p').boomText()
$('.hello').boomText()






