var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Namespace;
(function (Namespace) {
    var Entity;
    (function (Entity) {
        var GameItem = (function (_super) {
            __extends(GameItem, _super);
            function GameItem(game, x, y, spritename, frame) {
                _super.call(this, game, x, y, spritename, frame);
            }
            return GameItem;
        })(Phaser.Sprite);
        Entity.GameItem = GameItem;
        var Inventory = (function () {
            function Inventory(game) {
                this.game = game;
                this.items = new Array();
            }
            Inventory.prototype.addItem = function (item) {
                this.items.push(item);
                console.log(this.items);
            };
            return Inventory;
        })();
        Entity.Inventory = Inventory;
    })(Entity = Namespace.Entity || (Namespace.Entity = {}));
})(Namespace || (Namespace = {}));
