var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Namespace;
(function (Namespace) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, {
                width: 800,
                height: 1024,
                renderer: Phaser.AUTO
            });
            this.state.add('preloader', Namespace.State.Preloader, true);
            this.state.add('game', Namespace.State.Game);
        }
        return Game;
    })(Phaser.Game);
    Namespace.Game = Game;
})(Namespace || (Namespace = {}));
var Game = Namespace.Game;
