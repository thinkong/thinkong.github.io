var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Namespace;
(function (Namespace) {
    var State;
    (function (State) {
        var Preloader = (function (_super) {
            __extends(Preloader, _super);
            function Preloader() {
                _super.apply(this, arguments);
            }
            Preloader.prototype.preload = function () {
                this.game.stage.disableVisibilityChange = true;
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.game.scale.pageAlignVertically = true;
                this.loadingBar = new Namespace.Entity.PreloadBar(this.game);
                this.load.image('phaser-logo', 'assets/images/phaser-logo.png');
                this.load.spritesheet('items', 'assets/images/equipment.png', 34, 34);
                this.load.spritesheet('chars', 'assets/images/tmpchar_1.png', 32, 48);
            };
            Preloader.prototype.create = function () {
                this.loadingBar.setFillPercent(100);
                var tween = this.game.add.tween(this.loadingBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
                tween.onComplete.add(this.startGame, this);
            };
            Preloader.prototype.startGame = function () {
                this.game.state.start('game', true);
            };
            Preloader.prototype.loadUpdate = function () {
                this.loadingBar.setFillPercent(this.load.progress);
            };
            return Preloader;
        })(Phaser.State);
        State.Preloader = Preloader;
    })(State = Namespace.State || (Namespace.State = {}));
})(Namespace || (Namespace = {}));
