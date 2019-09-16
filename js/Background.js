(function() {
    window.Background = function() {
            this.w = 640;
            this.h = 960;
            this.x = 0;
        }
        //地图
    Background.prototype.render = function() {
        game.ctx.drawImage(game.R["lu"], 0, this.x, );
        game.ctx.drawImage(game.R["lu"], 0, -this.h + this.x);
    }
    Background.prototype.update = function() {
        //修改x属性值：一直变小
        this.x += 2;
        //无缝滚动轮播z
        if (this.x >= this.h) {
            this.x = 0;
        }
    }
})()