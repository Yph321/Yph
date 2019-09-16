(function() {
    window.Mydeche = function() {
            this.w = 30;
            this.h = 80;
            this.x = 100;
            this.x1 = 0;
            this.fenshu = 0;
        }
        //自己的小车
    Mydeche.prototype.render = function() {
            game.ctx.drawImage(game.R["my"], this.x + this.x1, 460)
        }
        //小车的状态
    Mydeche.prototype.update = function() {
        var self = this;
        document.onkeydown = function(e) {
            if (e.keyCode == 39) {
                self.x1 += 40;
                if (self.x1 > 400) {
                    self.x1 = 400;
                }
            } else if (e.keyCode == 37) {
                self.x1 -= 40;
                if (self.x1 <= 0) {
                    self.x1 = 0;
                }
            } else if (e.keyCode == 38) {
                clearInterval(game.timer)
            } else if (e.keyCode == 40) {
                game.start()
            }
        }
        this.a1 = this.x + this.x1;
        this.a2 = this.x + this.x1 + this.w;
        this.b1 = 400 + 60 + 20;
        this.b2 = 400 + 60 + this.h + 20;
        this.fenshu++;
        game.ctx.fillStyle = "Skyblue";
        game.ctx.font = "40px Arial"
        game.ctx.fillText(this.fenshu + "m", 50, 50)
    }
})()