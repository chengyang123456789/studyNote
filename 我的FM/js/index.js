//自定义事件
var EventCenter = {
    on: function(type, handler){
      $(document).on(type,handler)
    },
    fire: function(type, data){
      $(document).trigger(type,data)
    }
  }


var Footer = {
    init: function(){
        this.$footer = $('footer')
        this.$ul = this.$footer.find('ul')
        this.$box = this.$footer.find('.box')
        this.$leftBtn = this.$footer.find('.icon-left')
        this.$rightBtn = this.$footer.find('.icon-right')
        this.isToEnd = false
        this.isToStart = true
        this.isAnimate = false

        this.blind()
        this.render()
    },

    blind:function(){
        var _this = this
        this.$rightBtn.on('click',function(){
            
            var itemWidth = _this.$box.find('li').outerWidth(true)
            var rowCount = Math.floor(_this.$box.width()/itemWidth)
            if(!_this.isToEnd){
                _this.$ul.animate({
                    left: '-=' + rowCount * itemWidth + 'px'
                },400,function(){
                    
                    _this.isToStart = false 
                    console.log('left ' + parseFloat(_this.$ul.css('left')))
                    console.log('box-width '+ parseFloat(_this.$box.width()))
                    console.log('ul-width '+ parseFloat(_this.$ul.css('width')))
                    if(parseFloat(_this.$box.width()) - parseFloat(_this.$ul.css('left')) >= parseFloat(_this.$ul.css('width'))){
                        _this.isToEnd = true
                    }
                })
            }
        })

        this.$leftBtn.on('click',function(){
            var itemWidth = _this.$box.find('li').outerWidth(true)
            var rowCount = Math.floor(_this.$box.width()/itemWidth)
            if(!_this.isToStart){
                _this.$ul.animate({
                    left: '+=' + rowCount * itemWidth
                },400,function(){
                    _this.isToEnd = false
                    if(parseFloat(_this.$ul.css('left')) >=0){
                        _this.isToStart = true
                    }
                })
            }
        })

        this.$footer.on('click','li',function(){
            $(this).addClass('active')
            .siblings().removeClass('active')
            EventCenter.fire('select-album',{
                channelId:$(this).attr('data-channel-id'),
                channelName:$(this).attr('data-channel-name')
            })
        })
    },


    render(){
        var _this = this
        $.getJSON('https://jirenguapi.applinzi.com/fm/getChannels.php')
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
            html += '<li data-channel-id='+channel.channel_id+'>'
                    +'  <div class="cover" style="background-image:url('+channel.cover_small+')"></div>'
                    + '  <h3>'+ channel.name+'</h3>'
                    + '</li>'
                
        })
        this.$ul.html(html)
        this.setStyle()
    },
    setStyle:function(){
        var count = this.$footer.find('li').length  //获得ｌｉ的个数
        var width = this.$footer.find('li').outerWidth(true)　//获取宽度、包括外边距
        this.$ul.css({
            width:count * width + 'px'
        })
    }
}

var App = {
    init:function(){
        this.blind
    },
    bind:function(){
        EventCenter.on('select-album',function(e,data){
            console.log('select',data)
        })
    }
}
Footer.init()
App.init()