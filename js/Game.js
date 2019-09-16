(function() {
    window.Game = function() {
        //获得canvas
        this.dom = document.querySelector("canvas");
        //获得上下文
        this.ctx = this.dom.getContext("2d");
        //路的宽
        this.w = 600;
        //路的高
        this.h = 600;
        //画布的高
        this.dom.width = this.w;
        this.dom.height = this.h;
        //地图的属性
        this.background = new Background;
        //我自己的车的属性
        this.mydeche = new Mydeche;
        this.init()
            //第一个车的数组
        this.arr = []
            //第二个车的数组
        this.arr1 = []
        this.speed = 11
    }
    Game.prototype.init = function() {
        var self = this;
        //把所有的图片转化为join
        this.R = {
                "lu": "images/lu.jpg",
                "my": "images/6.png",
                "che1": "images/1.png",
                "che2": "images/2.png",
                "che3": "images/3.png",
                "che4": "images/4.png",
                "che5": "images/5.png",
                "baozha": "images/baozha.png",
                "shule": "images/shule.png",
            }
            //获得join数组的长度
        var allCount = Object.keys(this.R).length;
        //信号量，计算图片加载的个数
        var count = 0;
        for (k in this.R) {
            //获得join数组的所有属性的属性值
            var src = this.R[k];
            this.R[k] = new Image;
            //把图片途径给img
            this.R[k].src = src;
            this.R[k].onload = function() {
                count++;
                //判定图片是否加载完毕
                if (allCount == count){
                    self.preEnterMovie()
                }
            }
        }
    }
    Game.prototype.preEnterMovie = function() {
            //备份
            var self = this;
            //播放视频
            var video = document.querySelector("video");
            //检测视频播放状态
            video.addEventListener("play", function() {
                //开启定时器一直绘制视频
                var timer = setInterval(function() {
                    //播放视频
                    self.ctx.drawImage(video, 0, 0, self.w, self.h);
                    if (video.ended){
                        //清屏
                        self.clear();
                        //游戏开启
                        self.start();
                        self.start1();
                        //定时器关闭
                        clearInterval(timer);
                    }
                }, 20);
            });
        }
        //清楚画布的方法
    Game.prototype.clear = function() {
            this.ctx.clearRect(0, 0, this.w, this.h)
        }
        //死后的图片
    Game.prototype.toDie = function() {
            game.ctx.drawImage(game.R["baozha"], 50, 150)
            game.ctx.drawImage(game.R["shule"], 45, 20)
            document.querySelector(".a4").play()
        }
        //开始定时器
    Game.prototype.start = function() {
        var self = this;
        self.farme = 0;
        //开启定时器
        this.timer = setInterval(function() {
            //加载的图片
            document.querySelector(".a3").play()
            self.farme++;
            //清除画布
            self.clear()
                //调用地图的方法
            self.background.render()
                //是地图一直运动
            self.background.update();
            //我的车
            self.mydeche.render()
            self.mydeche.update()
            self.farme % 100 == 0 && new che;
            for (var i = 0; i < self.arr.length; i++) {
                self.arr[i].render()
            }
            self.farme % 100 == 0 && new che1;
            for (var i = 0; i < self.arr.length; i++) {
                self.arr1[i].render()
            }
            self.che1 = new che1;

        }, self.speed)
    }
    Game.prototype.start1 = function() {
        var self = this;
        setInterval(function() {
            self.speed--;
        }, 2000)
    }
})()