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
            if(_this.isAnimate) return
            var itemWidth = _this.$box.find('li').outerWidth(true)
            var rowCount = Math.floor(_this.$box.width()/itemWidth)
            if(!_this.isToEnd){
                _this.isAnimate = true
                _this.$ul.animate({
                    left: '-=' + rowCount * itemWidth + 'px'
                },400,function(){
                    _this.isAnimate = false
                    _this.isToStart = false 
                    console.log('left ' + parseFloat(_this.$ul.css('left')))
                    console.log('box-width '+ parseFloat(_this.$box.width()))
                    console.log('ul-width '+ parseFloat(_this.$ul.css('width')))
                    if(parseFloat(_this.$box.width()) - parseFloat(_this.$ul.css('left')) + 20>= parseFloat(_this.$ul.css('width'))){
                        _this.isToEnd = true
                       
                    }
                })
            }
        })

        this.$leftBtn.on('click',function(){
            var itemWidth = _this.$box.find('li').outerWidth(true)
            var rowCount = Math.floor(_this.$box.width()/itemWidth)
            if(_this.isAnimate) return
            if(!_this.isToStart){
                _this.isAnimate = true
                _this.$ul.animate({
                    left: '+=' + rowCount * itemWidth
                },400,function(){
                    _this.isAnimate = false
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
        //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
        channels.unshift({
            channel_id:0, 
            name:'我的最爱',
            cover_small:'http://cloud.hunger-valley.com/17-10-24/1906806.jpg-small',
            cover_middle:'http://cloud.hunger-valley.com/17-10-24/1906806.jpg-middle',
            cover_big: 'http://cloud.hunger-valley.com/17-10-24/1906806.jpg-big',
        })
        channels.forEach(function(channel){
            html += '<li data-channel-id='+channel.channel_id+' data-channel-name='+channel.name+'>'
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

var Fm = {
    init:function(){
        this.$container = $('#page-music')
        this.audio = new Audio()
        this.audio.autoplay = true
        this.bind()
        
    },
    bind:function(){
        var _this = this
        EventCenter.on('select-album',function(e,channelObj){
            _this.channelId = channelObj.channelId
            _this.channelName = channelObj.channelName
            _this.loadMusic()
        })

        this.$container.find('.btn-play').on('click',function(){
            var $btn = $(this)
            if(($btn).hasClass('icon-play')){
                $btn.removeClass('icon-play').addClass('icon-pause')
                _this.audio.play()
            }else{
                $btn.removeClass('icon-pause').addClass('icon-play')
                _this.audio.pause()
            }
        })

        this.$container.find('.btn-next').on('click',function(){
            _this.loadMusic()
        })

        this.audio.addEventListener('play',function(){
            clearInterval(_this.statusClock)
            _this.statusClock = setInterval(function(){
                _this.updateStatus()
            },1000)
        })
        this.audio.addEventListener('pause',function(){
            clearInterval(_this.statusClock)  
        })
        this.$container.find('.btn-collect').on('click',function(){
            var $btn = $(this)
            
            if($btn.hasClass('active')){
                $btn.removeClass('active')
                songArr.pop(this.song)
            }else{
                $btn.addClass('active')
                songArr.push(this.song)
            }
        })
    },
    favorite: function(){
        this.$container.find('.btn-collect').on('click',function(){
            var songArr = []
            if(songArr.indexOf(this.song) < 0 ){
                songArr.push(this.song)
            }
        })
        this.collection = songArr
    },
    loadMusic(callback){   
        var _this = this
        $.getJSON('https://jirenguapi.applinzi.com/fm/getSong.php', {channel: this.channelId})
        .done(function(ret){
            console.log(ret.song[0])
            _this.song = ret['song'][0]
            _this.setMusic()
            _this.loadLyric()    
        })
    },
    loadLyric(){
        var _this = this
        $.getJSON('https://jirenguapi.applinzi.com/fm/getLyric.php', {sid: _this.song.sid})
        .done(function(ret){
            var lyric = ret.lyric
            var lyricObj = {}
            lyric.split('\n').forEach(function(line){
                var times = line.match(/\d{2}:\d{2}/g)
                var str = line.replace(/\[.+?\]/g,'')
                if(Array.isArray(times)){
                    times.forEach(function(time){
                        lyricObj[time] = str
                    })
                }
            })
            _this.lyric = lyricObj
        })
    },
    setMusic(){
        console.log('wuhoo')
        console.log(this.song)
        this.audio.src = this.song.url
        $('.bg').css('background-image','url('+this.song.picture+')')
        this.$container.find('.aside figure').css('background-image','url('+this.song.picture+')')
        this.$container.find('.detail h1').text(this.song.title)
        this.$container.find('.detail .author').text(this.song.artist)
        this.$container.find('.tag').text(this.channelName)
        this.$container.find('.btn-play').removeClass('icon-play').addClass('icon-pause')

    },
    updateStatus(){
        var min = Math.floor(this.audio.currentTime/60)  //将秒换算成分
        var second = Math.floor(Fm.audio.currentTime%60)+''
        second = second.length === 2?second:'0'+second
        this.$container.find('.current-time').text(min+':'+second)
        
         //进度条
         this.$container.find('.bar-progress').css('width',this.audio.currentTime/this.audio.duration*100+'%') 
        
         //歌词
         var line = this.lyricObj['0'+min+':'+second]
         if(line){
            this.$container.find('.lyric p').text(line)
         }
    },
    // loadFromLocal: function(){
    //     return JSON.parse(localStorage['collections']||'{}')
    // },

    // saveToLocal: function(){
    //     localStorage['collections'] = JSON.stringify(this.collections)
    // },

    // loadCollection: function(){
    //     var keyArray = Object.keys(this.collections)
    //     if(keyArray.length === 0) return
    //     var randomIndex = Math.floor(Math.random()* keyArray.length)
    //     var randomSid = keyArray[randomIndex]
    //     this.play(this.collections[randomSid])
    // }
    
}
Footer.init()
Fm.init()
