(function() {
    window.che1 = function() {
            this.w = 30;
            this.h = 80;
            this.x = _.random(1, 5);
            this.y = _.random(300, 500);
            this.t = _.random(-100, -500);
            game.arr1.push(this);
            this.a = 0;
            this.num = 0;
        }
        //随机出来的车
    che1.prototype.render = function() {
        this.a += 0.1;
        this.t += this.a;
        this.a1 = this.y;
        this.a2 = this.y + this.w;
        this.b1 = this.t;
        this.b2 = this.t + this.h;
        //车的碰撞判断
        if (this.b2 < game.mydeche.b2 + 130) {
            game.ctx.drawImage(game.R["che" + this.x], this.y, this.t);

            if (game.mydeche.b1 <= this.b2 && game.mydeche.a2 >= this.a1 && game.mydeche.a1 <= this.a2) {
                game.toDie()

                clearInterval(game.timer)
            }
        }
    }
})()