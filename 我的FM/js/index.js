//自定义事件
var EventCenter = {
    on: function(type, handler){
      $(document).on(type,handler)
    },
    fire: function(type, data){
      $(document).trigger(type,data)
    }
  }
  
//   EventCenter.on('hello', function(e,data){
//     console.log(data)
//   })
  
//   EventCenter.fire('hello', '你好')

var Footer = {
    init: function(){
        this.$footer = $('footer')
        this.$ul = this.$footer.find('ul')
        this.$box = this.$footer.find('.box')
        this.$leftBtn = this.footer.find('.icon-left')
        this.$rightBtn = this.$footer.find('.icon-right')
        this.isToend = false
        this.isToStart = true
        this.isAnimate = false

        this.blind()
        this.render()
    },
    blind:function(){
        var _this = this
        this.$rightBtn.on('click',function(){
            if(_this.isAnimate) return

            var itemWidth = _this.$box.find('li').outerWidth(true)
            var rowCount = Math.floor(_this.$box.width()/itemWidth)
            if(!_this.isToEnd){
                _this.isAnimate = true
                _this.$ul.animate({
                    left: '-='+rowCOunt*itemWidth
                },400,function(){
                    _this.isAnimate = false
                    _this.isToStart = false
                    if(parseFloat(_this.$box.width()) - parseFloat(_this.$ul.css('left')) >= parseFloat(_this.$ul.css('width'))){
                        _this.isToEnd = true
                    }
                })
            }
        })


        this.$leftBtn.on('click',function(){
            if(_this.isAnimate) return
            var itemWidth = _this.$box.find('li').outerWidth(true)
            var rowCount = Math.floor(_this.$box.width/itemWidth)
            if(!_this.isToStart) {
                _this.isAnimate = true
                _this.$ul.animate({
                    left:'+='+rowCount*itemWidth
                },400,function(){
                    _this.isToEnd = false
                    _this.isAnimate = false
                    if(parseFloat(_this.$ul.css('left')) >= 0){
                        _this.isToStart = true
                    }
                })
            }
        })


        this.$footer.on('click','li',function(){
            $(this).addClass('active')
            .siblings().removeClass('active')

            EventCenter.fire('select-albumn',{
                channelId:$(this).attr('data-channel-id'),
                channelName:$(this).attr('data-channel-name')
            })
        })
    },
    render(){
        var _this = this
        $.getJSON('//jirenguapi.applinzi.com/fm/getChannels.php')
        .done(function(ret){
            console.log(ret)
            _this.renderFooter(ret.channels)
        }).fail(function(){
            console.log('error')
        })
    },

    renderFooter:function(channels){
        console.log(channels)
        var html = ''
        channels.unshift({
            channel_id:0,
            name:'我的最爱',
            cover_small:'http://cloud.hunger-valley.com/17-10-24/1906806.jpg-small',
            cover_middle:'http://cloud.hunger-valley.com/17-10-24/1906806.jpg-middle',
            cover_big: 'http://cloud.hunger-valley.com/17-10-24/1906806.jpg-big',
        })
        channels.forEach(function(channel){
            html += '<li data-channel-id='+channel.channel_id+'data-channel-name='+channel.name+'>'
                
        })
    }
}

Footer.init()