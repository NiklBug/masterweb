window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  PattiBetBeadRoadItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a45c7oUoIpHWIrEho+ifgyn", "PattiBetBeadRoadItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PattiBetRecordRoad_1 = require("./PattiBetRecordRoad");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetBeadRoadItem = function(_super) {
      __extends(PattiBetBeadRoadItem, _super);
      function PattiBetBeadRoadItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.SignC = null;
        _this.SignP = null;
        return _this;
      }
      PattiBetBeadRoadItem.prototype.start = function() {};
      PattiBetBeadRoadItem.prototype.bindData = function(value, tieRound) {
        value == PattiBetRecordRoad_1.ResultType.C ? this.SignC.active = true : value == PattiBetRecordRoad_1.ResultType.P && (this.SignP.active = true);
      };
      __decorate([ property(cc.Node) ], PattiBetBeadRoadItem.prototype, "SignC", void 0);
      __decorate([ property(cc.Node) ], PattiBetBeadRoadItem.prototype, "SignP", void 0);
      PattiBetBeadRoadItem = __decorate([ ccclass ], PattiBetBeadRoadItem);
      return PattiBetBeadRoadItem;
    }(cc.Component);
    exports.default = PattiBetBeadRoadItem;
    cc._RF.pop();
  }, {
    "./PattiBetRecordRoad": "PattiBetRecordRoad"
  } ],
  PattiBetBigRoadItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dcb3S0Fk9Ajpko+0RRrBQp", "PattiBetBigRoadItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetBigRoadItem = function(_super) {
      __extends(PattiBetBigRoadItem, _super);
      function PattiBetBigRoadItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.SignC = null;
        _this.SignP = null;
        return _this;
      }
      PattiBetBigRoadItem.prototype.bindData = function(value) {
        1 == value ? this.SignC.active = true : 2 == value && (this.SignP.active = true);
      };
      __decorate([ property(cc.Node) ], PattiBetBigRoadItem.prototype, "SignC", void 0);
      __decorate([ property(cc.Node) ], PattiBetBigRoadItem.prototype, "SignP", void 0);
      PattiBetBigRoadItem = __decorate([ ccclass ], PattiBetBigRoadItem);
      return PattiBetBigRoadItem;
    }(cc.Component);
    exports.default = PattiBetBigRoadItem;
    cc._RF.pop();
  }, {} ],
  PattiBetCardMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe1ffCICwpJ7q/6rMc8CtYG", "PattiBetCardMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VV_1 = require("../../../scripts/frameworks/VV");
    var PattiBetCard_1 = require("./PattiBetCard");
    var PattiBetCardType_1 = require("./PattiBetCardType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var cardPosCfg = {
      0: cc.v3(-30, 0, 0),
      1: cc.v3(0, 0, 0),
      2: cc.v3(30, 0, 0)
    };
    var PattiBetCardMgr = function(_super) {
      __extends(PattiBetCardMgr, _super);
      function PattiBetCardMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardLeft = null;
        _this.cardRight = null;
        _this.croupier = null;
        _this.cardItem = null;
        _this.cardType = null;
        _this.winLight = null;
        return _this;
      }
      PattiBetCardMgr.prototype.reset = function() {
        this.cardLeft.childrenCount > 0 && this.cardLeft.removeAllChildren();
        this.cardRight.childrenCount > 0 && this.cardRight.removeAllChildren();
      };
      PattiBetCardMgr.prototype.sendSingleCard = function(value, parentNode, pos) {
        var card = cc.instantiate(this.cardItem);
        parentNode.addChild(card);
        cc.Tween.stopAllByTarget(card);
        cc.tween(card).set({
          scale: 0,
          position: pos
        }).to(.2, {
          scale: .5
        }, {
          easing: "cubicOut"
        }).call(function() {
          VV_1.vv.audioMgr.playSound("card");
          value && card.getComponent(PattiBetCard_1.default).setCardValue(value);
        }).start();
      };
      PattiBetCardMgr.prototype.shuffleFakeCard = function() {
        this.reset();
        for (var i = 0; i < 3; i++) {
          this.sendSingleCard(null, this.cardLeft, cardPosCfg[i]);
          this.sendSingleCard(null, this.cardRight, cardPosCfg[i]);
        }
      };
      PattiBetCardMgr.prototype.recoverCards = function(card1, card2, cardtype1, cardtype2) {
        for (var i = 0; i < 3; i++) {
          this.sendSingleCard(card1[i], this.cardLeft, cardPosCfg[i]);
          this.sendSingleCard(card2[i], this.cardRight, cardPosCfg[i]);
        }
        this.showCardType(cardtype1, this.cardLeft);
        this.showCardType(cardtype2, this.cardRight);
      };
      PattiBetCardMgr.prototype.openCard = function(card1, card2, cardType1, cardType2) {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).call(function() {
          _this.flipCard(_this.cardLeft.children[0], card1[0], .5);
          _this.flipCard(_this.cardLeft.children[1], card1[1], .5);
          _this.flipCard(_this.cardRight.children[0], card2[0], .5);
          _this.flipCard(_this.cardRight.children[1], card2[1], .5);
        }).delay(1).call(function() {
          var ePos1 = cc.v3(130, -300, 0);
          var ePos2 = cc.v3(-130, -300, 0);
          var sPos = cardPosCfg[2];
          cc.tween(_this.cardLeft.children[2]).to(.3, {
            position: ePos1,
            scale: 1.5
          }).delay(.5).call(function() {
            _this.flipCard(_this.cardLeft.children[2], card1[2], 1.5);
          }).delay(.8).to(.3, {
            position: sPos,
            scale: .5
          }).delay(.2).call(function() {
            _this.showCardType(cardType1, _this.cardLeft);
          }).delay(.5).call(function() {
            cc.tween(_this.cardRight.children[2]).to(.3, {
              position: ePos2,
              scale: 1.5
            }).delay(.5).call(function() {
              _this.flipCard(_this.cardRight.children[2], card2[2], 1.5);
            }).delay(.8).to(.3, {
              position: sPos,
              scale: .5
            }).delay(.2).call(function() {
              _this.showCardType(cardType2, _this.cardRight);
            }).start();
          }).start();
        }).start();
      };
      PattiBetCardMgr.prototype.showCardType = function(value, parentNode) {
        var cardtype = cc.instantiate(this.cardType);
        parentNode.addChild(cardtype);
        cardtype.getComponent(PattiBetCardType_1.default).showCardType(value);
      };
      PattiBetCardMgr.prototype.showWinLight = function(isLeft) {
        var light = cc.instantiate(this.winLight);
        isLeft ? this.cardLeft.addChild(light) : this.cardRight.addChild(light);
        cc.Tween.stopAllByTarget(light);
        cc.tween(light).repeat(8, cc.tween().to(.25, {
          opacity: 55
        }).to(.25, {
          opacity: 255
        })).start();
      };
      PattiBetCardMgr.prototype.flipCard = function(parentNode, value, scale) {
        cc.tween(parentNode).to(.2, {
          scaleX: 0,
          scaleY: scale
        }).to(.2, {
          scaleX: scale,
          scaleY: scale
        }).call(function() {
          VV_1.vv.audioMgr.playSound("card");
          parentNode.getComponent(PattiBetCard_1.default).setCardValue(value);
        }).start();
      };
      __decorate([ property(cc.Node) ], PattiBetCardMgr.prototype, "cardLeft", void 0);
      __decorate([ property(cc.Node) ], PattiBetCardMgr.prototype, "cardRight", void 0);
      __decorate([ property(cc.Node) ], PattiBetCardMgr.prototype, "croupier", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetCardMgr.prototype, "cardItem", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetCardMgr.prototype, "cardType", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetCardMgr.prototype, "winLight", void 0);
      PattiBetCardMgr = __decorate([ ccclass ], PattiBetCardMgr);
      return PattiBetCardMgr;
    }(cc.Component);
    exports.default = PattiBetCardMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./PattiBetCard": "PattiBetCard",
    "./PattiBetCardType": "PattiBetCardType"
  } ],
  PattiBetCardType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a08b4taWj5K2a1RplLVGzhX", "PattiBetCardType");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetCardType = function(_super) {
      __extends(PattiBetCardType, _super);
      function PattiBetCardType() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardTypeSpriteFrameArr = [];
        _this.cardTypeSprite = null;
        return _this;
      }
      PattiBetCardType.prototype.showCardType = function(value) {
        value && (this.cardTypeSprite.spriteFrame = this.cardTypeSpriteFrameArr[value - 1]);
      };
      PattiBetCardType.prototype.hideCardType = function() {
        this.node.destroy();
      };
      __decorate([ property(cc.SpriteFrame) ], PattiBetCardType.prototype, "cardTypeSpriteFrameArr", void 0);
      __decorate([ property(cc.Sprite) ], PattiBetCardType.prototype, "cardTypeSprite", void 0);
      PattiBetCardType = __decorate([ ccclass ], PattiBetCardType);
      return PattiBetCardType;
    }(cc.Component);
    exports.default = PattiBetCardType;
    cc._RF.pop();
  }, {} ],
  PattiBetCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8028b7F+jtEfoETSYRNjMSf", "PattiBetCard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PattiBetGameHelper_1 = require("./PattiBetGameHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetCard = function(_super) {
      __extends(PattiBetCard, _super);
      function PattiBetCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.cardFront = null;
        _this.cardBack = null;
        _this.blinkNode = null;
        _this._cardValue = null;
        return _this;
      }
      PattiBetCard.prototype.getCardData = function() {
        return this._cardValue;
      };
      PattiBetCard.prototype.setCardValue = function(_value) {
        this.updateCardValue(_value);
      };
      PattiBetCard.prototype.lightCard = function() {
        var _this = this;
        this.blinkNode.active = true;
        cc.tween(this.blinkNode).repeat(8, cc.tween().to(.25, {
          opacity: 55
        }).to(.25, {
          opacity: 255
        })).call(function() {
          _this.blinkNode.active = false;
        }).start();
      };
      PattiBetCard.prototype.setGray = function() {
        this.cardFront.getChildByName("gray").active = true;
      };
      PattiBetCard.prototype.updateCardValue = function(_cardValue) {
        return __awaiter(this, void 0, void 0, function() {
          var CARD_VALUE, CARD_COLOR;
          return __generator(this, function(_a) {
            if (_cardValue) {
              this._cardValue = _cardValue;
              this.cardBack.active = false;
              this.cardFront.active = true;
              CARD_VALUE = PattiBetGameHelper_1.PattiBetGameHelper.getCardValue(_cardValue);
              CARD_COLOR = PattiBetGameHelper_1.PattiBetGameHelper.getCardColor(_cardValue);
              if (CARD_COLOR > 3) {
                this.cardFront.getChildByName("common").active = false;
                this.cardFront.getChildByName("joker").active = true;
              } else {
                this.cardFront.getChildByName("common").active = true;
                this.cardFront.getChildByName("joker").active = false;
                CARD_VALUE && (this.cardFront.getChildByName("common").getChildByName("value").getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("new_card_" + CARD_COLOR + CARD_VALUE.toString(16)));
              }
            } else {
              this.cardFront.active = false;
              this.cardBack.active = true;
            }
            return [ 2 ];
          });
        });
      };
      __decorate([ property(cc.SpriteAtlas) ], PattiBetCard.prototype, "atlas", void 0);
      __decorate([ property(cc.Node) ], PattiBetCard.prototype, "cardFront", void 0);
      __decorate([ property(cc.Node) ], PattiBetCard.prototype, "cardBack", void 0);
      __decorate([ property(cc.Node) ], PattiBetCard.prototype, "blinkNode", void 0);
      PattiBetCard = __decorate([ ccclass ], PattiBetCard);
      return PattiBetCard;
    }(cc.Component);
    exports.default = PattiBetCard;
    cc._RF.pop();
  }, {
    "./PattiBetGameHelper": "PattiBetGameHelper"
  } ],
  PattiBetGameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c219dyQ2pN56xMeJ8ud4FE", "PattiBetGameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SINGLE_GAME_GOLD = exports.OPTION_TYPE = exports.CARD_TYPE = exports.TABLE_STATE = exports.GameConfig = void 0;
    var TABLE_STATE;
    (function(TABLE_STATE) {
      TABLE_STATE[TABLE_STATE["TABLE_STATE_WAITING"] = 1] = "TABLE_STATE_WAITING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_DEALING"] = 2] = "TABLE_STATE_DEALING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_BET"] = 3] = "TABLE_STATE_BET";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_RESULT"] = 4] = "TABLE_STATE_RESULT";
    })(TABLE_STATE || (TABLE_STATE = {}));
    exports.TABLE_STATE = TABLE_STATE;
    var CARD_TYPE;
    (function(CARD_TYPE) {
      CARD_TYPE[CARD_TYPE["BAOZI"] = 1] = "BAOZI";
      CARD_TYPE[CARD_TYPE["PURESEQ"] = 2] = "PURESEQ";
      CARD_TYPE[CARD_TYPE["SEQ"] = 3] = "SEQ";
      CARD_TYPE[CARD_TYPE["COLOR"] = 4] = "COLOR";
      CARD_TYPE[CARD_TYPE["DUIPAI"] = 5] = "DUIPAI";
      CARD_TYPE[CARD_TYPE["GAO"] = 6] = "GAO";
    })(CARD_TYPE || (CARD_TYPE = {}));
    exports.CARD_TYPE = CARD_TYPE;
    var OPTION_TYPE;
    (function(OPTION_TYPE) {
      OPTION_TYPE[OPTION_TYPE["BET"] = 1] = "BET";
    })(OPTION_TYPE || (OPTION_TYPE = {}));
    exports.OPTION_TYPE = OPTION_TYPE;
    var GameConfig = {
      BET_COIN: {
        level1: [ 20, 50, 100, 200, 500 ],
        level2: [ 50, 100, 200, 500, 1e3 ],
        level3: [ 100, 200, 500, 1e3, 2e3 ],
        level4: [ 200, 500, 1e3, 2e3, 5e3 ],
        level5: [ 500, 1e3, 2e3, 5e3, 1e4 ]
      },
      TIP_STR: {
        tableState: {
          1: "Wait for game to start",
          2: "Dealing Cards",
          3: "Beting",
          4: "Settle"
        }
      }
    };
    exports.GameConfig = GameConfig;
    var SINGLE_GAME_GOLD = 2e4;
    exports.SINGLE_GAME_GOLD = SINGLE_GAME_GOLD;
    cc._RF.pop();
  }, {} ],
  PattiBetGameHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74605tIUExOarGxTJ8lOpwp", "PattiBetGameHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PattiBetGameHelper = void 0;
    var PattiBetGameHelper = function() {
      function PattiBetGameHelper() {}
      PattiBetGameHelper.getCardValue = function(_value) {
        if (_value) return _value % 16;
      };
      PattiBetGameHelper.getCardColor = function(_value) {
        if (_value) return Math.floor(_value / 16);
      };
      PattiBetGameHelper.CardData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 79 ];
      return PattiBetGameHelper;
    }();
    exports.PattiBetGameHelper = PattiBetGameHelper;
    cc._RF.pop();
  }, {} ],
  PattiBetGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c9a76RlSBDfbQCs8SUTorX", "PattiBetGameMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PattiBetMgr_1 = require("./PattiBetMgr");
    var PattiBetCardMgr_1 = require("./PattiBetCardMgr");
    var PattiBetPlayerMgr_1 = require("./PattiBetPlayerMgr");
    var PattiBetTableMgr_1 = require("./PattiBetTableMgr");
    var PattiBetMsgId_1 = require("./PattiBetMsgId");
    var PattiBetGameConfig_1 = require("./PattiBetGameConfig");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var GameMgrBase_1 = require("../../../scripts/games/gameBase/GameMgrBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetGameMgr = function(_super) {
      __extends(PattiBetGameMgr, _super);
      function PattiBetGameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sgame_4b3cfq = 4994;
        _this._sgame_iv7yMI = 6532;
        _this.TableMgr = null;
        _this.CardMgr = null;
        _this.PlayerMgr = null;
        _this.BetMgr = null;
        _this.tableInfo = null;
        _this.exitTime = null;
        _this.bigWinnerData = null;
        _this.recordData = null;
        return _this;
      }
      PattiBetGameMgr.prototype._sgame_Woc3Aq = function() {
        var a = "gXjXs";
        var b = 8417;
        return a.length + b;
      };
      PattiBetGameMgr.prototype.launch = function() {
        return __awaiter(this, void 0, void 0, function() {
          var data, error_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, VV_1.vv.netMgr.asyncHandler({
                reqid: "JoinRoomRequest",
                resid: "JoinRoomResponse",
                reqData: {
                  game_id: GameConst_1.GAME_ID.PattiBet,
                  room_id: 999999
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) VV_1.vv.netMgr.send(PattiBetMsgId_1.PattiBet_MSG_REQ_ID.MSG_JOINTABLE_REQ, {}); else {
                VV_1.vv.logger.warn("\u8fdb\u5165dice\u95f4\u5931\u8d25", data);
                this.exitTable();
              }
              return [ 3, 3 ];

             case 2:
              error_1 = _a.sent();
              VV_1.vv.logger.warn("\u8fdb\u5165dice\u623f\u95f4\u5931\u8d25", error_1);
              this.exitTable();
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      PattiBetGameMgr.prototype.addNetListener = function() {
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.addHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.addBackGroundListener();
      };
      PattiBetGameMgr.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.removeHandler(PattiBetMsgId_1.PattiBet_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.removeBackGroundListener();
      };
      PattiBetGameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      PattiBetGameMgr.prototype.addBackGroundListener = function() {
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_HIDE, this.onHide, this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_SHOW, this.onShow, this);
      };
      PattiBetGameMgr.prototype.removeBackGroundListener = function() {
        VV_1.vv.eventMgr.offTarget(this);
      };
      PattiBetGameMgr.prototype.onHide = function() {
        VV_1.vv.logger.log("GAME_EVENT_HIDE");
      };
      PattiBetGameMgr.prototype.onShow = function() {
        VV_1.vv.logger.log("GAME_EVENT_SHOW");
        VV_1.vv.netMgr.closeNet();
      };
      PattiBetGameMgr.prototype.OnPlayerLeaveBroadCast = function(data) {
        var _this = this;
        data.player_id == VV_1.vv.userMgr.player_id ? 1 == data.status ? VV_1.vv.uiMgr.noOperatingAlertTips(function() {
          _this.exitTable();
        }) : 2 == data.status && this.exitTable() : this.PlayerMgr.removePlayer(data.player_id);
      };
      PattiBetGameMgr.prototype.OnPlayerListResponse = function(data) {
        var playerInfo = data.player;
        playerInfo && this.PlayerMgr.showPlayerList(playerInfo);
      };
      PattiBetGameMgr.prototype.OnBigWinnerBroadCast = function(data) {
        data.player && data.player.length > 0 && (this.bigWinnerData = data.player);
      };
      PattiBetGameMgr.prototype.OnRecordResponse = function(data) {
        if (data.info) {
          this.recordData = data.info;
          this.BetMgr.showRecordList(data.info);
        }
      };
      PattiBetGameMgr.prototype.OnJoinTableBroadCast = function(data) {
        data.player && this.PlayerMgr.updatePlayerinfo(data.player);
      };
      PattiBetGameMgr.prototype.OnJoinTableResponse = function(data) {
        if (data.table_info) {
          VV_1.vv.netMgr.send(PattiBetMsgId_1.PattiBet_MSG_REQ_ID.MSG_RECORD_REQ, {});
          this.tableInfo = data.table_info;
          this.TableMgr.initTable(this.tableInfo);
          this.BetMgr.updatePoolState(this.tableInfo.state, this.tableInfo.state_time);
          this.PlayerMgr.initPlayer(this.tableInfo.players);
          this.PlayerMgr.initSelfInfo();
          if (this.tableInfo.tabledata && this.tableInfo.tabledata.betinfo) {
            this.tableInfo.state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING || this.tableInfo.state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_BET ? this.CardMgr.shuffleFakeCard() : this.tableInfo.state != PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_DEALING && this.tableInfo.state != PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_RESULT || this.tableInfo.tabledata.card1 && this.tableInfo.tabledata.card2 && this.tableInfo.tabledata.card_type1 && this.tableInfo.tabledata.card_type2 && this.CardMgr.recoverCards(this.tableInfo.tabledata.card1, this.tableInfo.tabledata.card2, this.tableInfo.tabledata.card_type1, this.tableInfo.tabledata.card_type2);
            if (this.tableInfo.state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_RESULT) return;
            for (var key in this.tableInfo.tabledata.betinfo) if (this.tableInfo.tabledata.betinfo[key] > 0) {
              var totalBet = this.tableInfo.tabledata.betinfo[key] / VV_1.vv.global.exchange_rate;
              this.BetMgr.showTotalBetNum(parseInt(key), totalBet, this.tableInfo.tabledata.bet_ratio);
              this.BetMgr.recoverChips(parseInt(key), totalBet);
            }
          }
        }
      };
      PattiBetGameMgr.prototype.OnLeaveTableResponse = function(data) {
        1 == data.status && this.exitTable();
      };
      PattiBetGameMgr.prototype.OnPlayerOptionResponse = function(data) {
        if (1 == data.status) {
          if (data.Pool) for (var key in data.Pool) data.Pool[key] > 0 && this.BetMgr.showMyBetNum(parseInt(key), data.Pool[key] / VV_1.vv.global.exchange_rate);
        } else 2 == data.status ? VV_1.vv.toast.show("Please Wait For Next Bet.") : 3 == data.status ? VV_1.vv.toast.show("Please Choose a Right Bet Pool") : 4 == data.status ? VV_1.vv.uiMgr.betAddCashAlertTips() : 5 == data.status ? VV_1.vv.toast.show("Max Bet Limit Reached.") : VV_1.vv.toast.show("Waiting For The Game To Start");
      };
      PattiBetGameMgr.prototype.OnPlayerOptionBroadCast = function(data) {
        if (data) {
          var pos = this.PlayerMgr.getLogicPosByPlayerID(data.player_id);
          data.player_id == VV_1.vv.userMgr.player_id && (pos = -1);
          if (data.chip) {
            var betChip = data.chip / VV_1.vv.global.exchange_rate;
            var betTotal = data.bettotal / VV_1.vv.global.exchange_rate;
            this.BetMgr.flyChipToPool(data.betpool, pos, betChip);
            this.BetMgr.showTotalBetNum(data.betpool, betTotal, data.bet_ratio);
          }
        }
      };
      PattiBetGameMgr.prototype.OnTableStateBroadCast = function(data) {
        if (data) {
          this.TableMgr.updateTableState(data.state, data.state_time);
          this.BetMgr.updatePoolState(data.state, data.state_time);
        }
      };
      PattiBetGameMgr.prototype.OnShufferBroadCast = function(data) {
        data.card1 && data.card2 && data.card_type1 && data.card_type2 && this.CardMgr.openCard(data.card1, data.card2, data.card_type1, data.card_type2);
      };
      PattiBetGameMgr.prototype.OnResultBroadCast = function(data) {
        var _this = this;
        if (VV_1.vv.analysis.startTimers.betgamecomplete) {
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
            result: "success"
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GameCompleted, {
            result: "success"
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME, {
            result: "7up_down"
          });
          var cost = Date.now() - VV_1.vv.analysis.startTimers.betgamecomplete;
          VV_1.vv.logger.log("otp -> betgamecomplete cost:", cost / 1e3);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_COMPLETE_COST, {
            cost: String(cost / 1e3),
            result: "7up_down"
          });
          VV_1.vv.analysis.startTimers.betgamecomplete = null;
        }
        if (data) {
          var canvas = cc.find("Canvas");
          canvas.runAction(cc.sequence(cc.callFunc(function() {
            data.result && _this.BetMgr.showResult(data.result);
          }), cc.delayTime(3), cc.callFunc(function() {
            _this.BetMgr.destoryChips();
          }), cc.delayTime(1), cc.callFunc(function() {
            if (data.resultplayer) for (var i = 0; i < data.resultplayer.length; i++) {
              var pos = _this.PlayerMgr.getLogicPosByPlayerID(data.resultplayer[i].player_id);
              var settle = data.resultplayer[i].settle / VV_1.vv.global.exchange_rate || 0;
              999 != pos && settle > 0 && _this.BetMgr.flyChipToPlayer(pos, settle);
            }
          }), cc.delayTime(1), cc.callFunc(function() {
            if (data.resultplayer) for (var i = 0; i < data.resultplayer.length; i++) {
              var pos = _this.PlayerMgr.getLogicPosByPlayerID(data.resultplayer[i].player_id);
              var settle = data.resultplayer[i].settle / VV_1.vv.global.exchange_rate || 0;
              data.resultplayer[i].player_id == VV_1.vv.userMgr.player_id && _this.PlayerMgr.showResult(pos, settle, true);
              pos && 999 != pos && _this.PlayerMgr.showResult(pos, settle, false);
            }
            _this.BetMgr.reset();
            _this.CardMgr.reset();
            VV_1.vv.netMgr.send(PattiBetMsgId_1.PattiBet_MSG_REQ_ID.MSG_RECORD_REQ, {});
          }), cc.delayTime(1.5), cc.callFunc(function() {
            if (_this.bigWinnerData) {
              _this.PlayerMgr.showBigWinner(_this.bigWinnerData);
              _this.bigWinnerData = null;
            }
          })));
        }
      };
      PattiBetGameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/TableLayer").getComponent(PattiBetTableMgr_1.default);
        this.PlayerMgr = cc.find("Canvas/PlayerLayer").getComponent(PattiBetPlayerMgr_1.default);
        this.CardMgr = cc.find("Canvas/CardLayer").getComponent(PattiBetCardMgr_1.default);
        this.BetMgr = cc.find("Canvas/BetLayer").getComponent(PattiBetMgr_1.default);
        this.BetMgr.updateBetBtn();
      };
      PattiBetGameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
      };
      PattiBetGameMgr = __decorate([ ccclass ], PattiBetGameMgr);
      return PattiBetGameMgr;
    }(GameMgrBase_1.default);
    exports.default = PattiBetGameMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "./PattiBetCardMgr": "PattiBetCardMgr",
    "./PattiBetGameConfig": "PattiBetGameConfig",
    "./PattiBetMgr": "PattiBetMgr",
    "./PattiBetMsgId": "PattiBetMsgId",
    "./PattiBetPlayerMgr": "PattiBetPlayerMgr",
    "./PattiBetTableMgr": "PattiBetTableMgr"
  } ],
  PattiBetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80e21Yaj7pGIKCuI+zZrDbZ", "PattiBetMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PattiBetTip_1 = require("./PattiBetTip");
    var PattiBetGameConfig_1 = require("./PattiBetGameConfig");
    var PattiBetMsgId_1 = require("./PattiBetMsgId");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var Chip_1 = require("../../../scripts/games/gameCommon/Chip");
    var ChipBtnItem_1 = require("../../../scripts/games/gameCommon/ChipBtnItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetBetMgr = function(_super) {
      __extends(PattiBetBetMgr, _super);
      function PattiBetBetMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chipLayout = null;
        _this.betPoolNodes = [];
        _this.chipBtnItem = null;
        _this.chipItem = null;
        _this.recordItem = null;
        _this.roadPrefab = null;
        _this.betTipPrefab = null;
        _this.recordList = null;
        _this.autoBetNode = null;
        _this.poolSize = 10;
        _this.chipPool = null;
        _this.chipArr = [];
        _this.chipNodes = [];
        _this.curChipIndex = 0;
        _this.playerNodeOrignPos = [];
        _this.lastBetData = null;
        _this.curBetData = {};
        return _this;
      }
      PattiBetBetMgr.prototype.start = function() {
        this.initCurBetData();
        this.initChipNodePool();
        this.storagePlayersOrignPos();
        VV_1.vv.analysis.startTimers.betgamecomplete = null;
      };
      PattiBetBetMgr.prototype.initCurBetData = function() {
        for (var i = 1; i <= this.betPoolNodes.length; i++) this.curBetData[i.toString()] = 0;
      };
      PattiBetBetMgr.prototype.reset = function() {
        this.lastBetData = VV_1.vv.uiMgr.deepClone(this.curBetData);
        for (var key in this.curBetData) this.curBetData[key] = 0;
      };
      PattiBetBetMgr.prototype.storagePlayersOrignPos = function() {
        var gameMgr = VV_1.vv.gameMgr;
        for (var i = 0; i < gameMgr.PlayerMgr.playerNode.length; i++) gameMgr.PlayerMgr.playerNode[i] && this.playerNodeOrignPos.push(gameMgr.PlayerMgr.playerNode[i].position);
      };
      PattiBetBetMgr.prototype.destoryChips = function() {
        for (var i = 0; i < this.chipNodes.length; i++) this.chipNodes[i] && this.flyChipFromAtoB(this.chipNodes[i], this.chipNodes[i], VV_1.vv.gameMgr.CardMgr.croupier);
        this.chipNodes.length > 0 && VV_1.vv.audioMgr.playSound("recycleCoin");
        this.chipNodes.splice(0);
      };
      PattiBetBetMgr.prototype.poolBtnCB = function(event, customData) {
        if (parseInt(VV_1.vv.userMgr.coins) < 50 && false) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is under \u20b950, add cash and continue to play", false, true);
          return;
        }
        if (!VV_1.vv.userMgr.has_recharged && false) {
          VV_1.vv.uiMgr.highPlayerAlertTips();
          return;
        }
        var index = parseInt(customData);
        index && VV_1.vv.netMgr.send(PattiBetMsgId_1.PattiBet_MSG_REQ_ID.MSG_PLAYEROPTION_REQ, {
          option: PattiBetGameConfig_1.OPTION_TYPE.BET,
          chip: this.chipArr[this.curChipIndex] * VV_1.vv.global.exchange_rate,
          side: index
        });
        this.updateRepeatBtn(null, false);
      };
      PattiBetBetMgr.prototype.createChip = function(parentNode, pos) {
        var chip = null;
        chip = this.chipPool.size() > 0 ? this.chipPool.get() : cc.instantiate(this.chipItem);
        chip.parent = parentNode;
        chip.getComponent(Chip_1.default).init(pos);
        return chip;
      };
      PattiBetBetMgr.prototype.initChipNodePool = function() {
        this.chipPool = new cc.NodePool();
        for (var i = 0; i < this.poolSize; i++) {
          var chip = cc.instantiate(this.chipItem);
          this.chipPool.put(chip);
        }
      };
      PattiBetBetMgr.prototype.recyleChip = function(_chip) {
        this.chipPool.put(_chip);
      };
      PattiBetBetMgr.prototype.flyChipFromAtoB = function(node, nodeA, nodeB) {
        var _this = this;
        var sPos = nodeA.position;
        var wPos = nodeB.convertToWorldSpaceAR(sPos);
        var lPos = nodeA.convertToNodeSpaceAR(wPos);
        var ePos = this.getRandomPosInRect(lPos, nodeB.width / 2, nodeB.height / 2);
        node.stopAllActions();
        cc.tween(node).to(.5, {
          position: ePos
        }, {
          easing: "cubicOut"
        }).call(function() {
          _this.recyleChip(nodeA);
        }).start();
      };
      PattiBetBetMgr.prototype.flyChipToPlayer = function(pos, winning) {
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = gameMgr.PlayerMgr.banker.position;
        var ePos = gameMgr.PlayerMgr.playerNode[pos - 1].position;
        var eNode = gameMgr.PlayerMgr.playerNode[pos - 1];
        this.flyChip(winning, sPos, ePos, eNode, true);
      };
      PattiBetBetMgr.prototype.flyChipToPool = function(poorIndex, seatIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = null;
        var lPos = null;
        if (999 == seatIndex) sPos = gameMgr.PlayerMgr.lookersNode.position; else if (-1 == seatIndex) sPos = gameMgr.PlayerMgr.selfNode.position; else {
          sPos = gameMgr.PlayerMgr.playerNode[seatIndex - 1].position;
          this.playerShake(gameMgr.PlayerMgr.playerNode[seatIndex - 1], seatIndex);
        }
        var wPos = this.betPoolNodes[poorIndex - 1].convertToWorldSpaceAR(sPos);
        lPos = 999 == seatIndex ? gameMgr.PlayerMgr.lookersNode.convertToNodeSpaceAR(wPos) : -1 == seatIndex ? gameMgr.PlayerMgr.selfNode.convertToNodeSpaceAR(wPos) : gameMgr.PlayerMgr.playerNode[seatIndex - 1].convertToNodeSpaceAR(wPos);
        this.flyChip(betNum, sPos, lPos, this.betPoolNodes[poorIndex - 1], false);
      };
      PattiBetBetMgr.prototype.recoverChips = function(poolIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        for (var i = 0; i < this.getChipNumByBet(betNum); i++) {
          var pos = this.getRandomPosInRect(this.betPoolNodes[poolIndex - 1].position, this.betPoolNodes[poolIndex - 1].width / 2, this.betPoolNodes[poolIndex - 1].height / 2);
          var chip = this.createChip(this.node, pos);
          this.chipNodes.push(chip);
        }
      };
      PattiBetBetMgr.prototype.playerShake = function(tNode, seatIndex) {
        var _this = this;
        tNode.runAction(cc.sequence(cc.moveTo(.1, tNode.position.x + 5, tNode.position.y), cc.moveTo(.1, tNode.position.x - 5, tNode.position.y), cc.callFunc(function() {
          tNode.position = _this.playerNodeOrignPos[seatIndex - 1];
        })));
      };
      PattiBetBetMgr.prototype.flyChip = function(betNum, sPos, ePos, endNode, isTemp) {
        var _this = this;
        var _loop_1 = function(i) {
          var pos = this_1.getRandomPosInRect(ePos, endNode.width / 2, endNode.height / 2);
          var chip = this_1.createChip(this_1.node, sPos);
          var speed = 1200;
          var mag = sPos.sub(pos).mag();
          if (chip) {
            chip.stopAllActions();
            cc.tween(chip).to(mag / speed, {
              position: pos
            }, {
              easing: "cubicOut"
            }).to(.1, {
              scale: 1.1
            }).to(.1, {
              scale: 1
            }).call(function() {
              isTemp ? _this.recyleChip(chip) : _this.chipNodes.push(chip);
            }).start();
          }
        };
        var this_1 = this;
        for (var i = 0; i < this.getChipNumByBet(betNum); i++) _loop_1(i);
        VV_1.vv.audioMgr.playSound("coins_fly");
      };
      PattiBetBetMgr.prototype.updateBetBtn = function() {
        var _this = this;
        var coin = parseInt(VV_1.vv.userMgr.coins);
        coin >= 0 && coin <= 2e3 ? this.chipArr = PattiBetGameConfig_1.GameConfig.BET_COIN.level1 : coin > 2e3 && coin <= 5e3 ? this.chipArr = PattiBetGameConfig_1.GameConfig.BET_COIN.level2 : coin > 5e3 && coin <= 1e4 ? this.chipArr = PattiBetGameConfig_1.GameConfig.BET_COIN.level3 : coin > 1e4 && coin <= 2e4 ? this.chipArr = PattiBetGameConfig_1.GameConfig.BET_COIN.level4 : coin > 2e4 && (this.chipArr = PattiBetGameConfig_1.GameConfig.BET_COIN.level5);
        this.chipLayout.removeAllChildren();
        var _loop_2 = function(i) {
          var posX = 125 + 108 * (i - 1);
          var wPos = cc.v2(posX, 0);
          var item = cc.instantiate(this_2.chipBtnItem);
          item.setPosition(wPos);
          this_2.chipLayout.addChild(item);
          item.getComponent(ChipBtnItem_1.default).setChipInfo(this_2.chipArr[i], i);
          item.on("click", function() {
            _this.curChipIndex = i;
            _this.updateChipState();
          }, this_2);
        };
        var this_2 = this;
        for (var i = 0; i < this.chipArr.length; i++) _loop_2(i);
        this.updateChipState();
      };
      PattiBetBetMgr.prototype.updateChipState = function() {
        for (var i = 0; i < this.chipLayout.childrenCount; i++) i == this.curChipIndex ? this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(true) : this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(false);
      };
      PattiBetBetMgr.prototype.getChipNumByBet = function(betNum) {
        var chipNum = 1;
        betNum > 0 && betNum <= 1 ? chipNum = 1 : betNum > 1 && betNum <= 10 ? chipNum = 2 : betNum > 10 && betNum <= 100 ? chipNum = 5 : betNum > 100 && betNum <= 1e3 ? chipNum = 10 : betNum > 1e3 && betNum <= 2e3 ? chipNum = 20 : betNum > 2e3 && (chipNum = 30);
        return chipNum;
      };
      PattiBetBetMgr.prototype.getRandomPosInRect = function(point, width, height) {
        var minX = point.x - width / 2;
        var maxX = point.x + width / 2;
        var x = Math.random() * (maxX - minX + 1) + minX;
        var minY = point.y - height / 2;
        var maxY = point.y + height / 2;
        var y = Math.random() * (maxY - minY + 1) + minY;
        return new cc.Vec3(x, y, 0);
      };
      PattiBetBetMgr.prototype.showResult = function(pools) {
        var _this = this;
        var _loop_3 = function(i) {
          this_3.betPoolNodes[pools[i] - 1].getChildByName("select").active = true;
          cc.tween(this_3.betPoolNodes[pools[i] - 1].getChildByName("select")).repeat(8, cc.tween().to(.25, {
            opacity: 55
          }).to(.25, {
            opacity: 255
          })).call(function() {
            _this.betPoolNodes[pools[i] - 1].getChildByName("select").active = false;
          }).start();
        };
        var this_3 = this;
        for (var i = 0; i < pools.length; i++) _loop_3(i);
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.CardMgr.showWinLight(pools.indexOf(1) > -1);
      };
      PattiBetBetMgr.prototype.showRecordList = function(list) {
        var recordData = [];
        recordData = list.length > 15 ? list.slice(-15) : list;
        this.recordList.node.getChildByName("view").getChildByName("content").childrenCount > 0 && this.recordList.node.getChildByName("view").getChildByName("content").removeAllChildren();
        for (var i = 0; i < recordData.length; i++) {
          var record = cc.instantiate(this.recordItem);
          this.recordList.node.getChildByName("view").getChildByName("content").addChild(record);
          recordData[i] && (record.getChildByName("lfhSign" + recordData[i]).active = true);
        }
      };
      PattiBetBetMgr.prototype.updatePoolState = function(state, state_time) {
        if (state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) {
          for (var k = 0; k < this.betPoolNodes.length; k++) {
            this.betPoolNodes[k].getChildByName("mybet").getComponent(cc.Label).string = "";
            this.betPoolNodes[k].getChildByName("totalbet").getComponent(cc.Label).string = "";
          }
          var gameMgr = VV_1.vv.gameMgr;
          gameMgr.CardMgr.shuffleFakeCard();
        }
        if (state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
          this.showBetTip(state);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_START, {
            result: "suc"
          });
          if (VV_1.vv.analysis.startTimers.betgameEnter) {
            var cost = Date.now() - VV_1.vv.analysis.startTimers.betgameEnter;
            VV_1.vv.logger.log("otp -> betgameEnter cost:", cost / 1e3);
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_START_COST, {
              cost: String(cost / 1e3)
            });
            VV_1.vv.analysis.startTimers.betgameEnter = null;
          }
          VV_1.vv.analysis.startTimers.betgamecomplete = Date.now();
        }
        this.updateRepeatBtn(state);
      };
      PattiBetBetMgr.prototype.showTotalBetNum = function(pool, total, allBetMap) {
        for (var i = 0; i < this.betPoolNodes.length; i++) total && (this.betPoolNodes[pool - 1].getChildByName("totalbet").getComponent(cc.Label).string = "\u20b9:" + total);
      };
      PattiBetBetMgr.prototype.showMyBetNum = function(pool, num) {
        for (var i = 0; i < this.betPoolNodes.length; i++) num && (this.betPoolNodes[pool - 1].getChildByName("mybet").getComponent(cc.Label).string = "\u20b9:" + num);
        for (var key in this.curBetData) parseInt(key) == pool && (this.curBetData[key] = num);
      };
      PattiBetBetMgr.prototype.autoBetEventHandler = function(event, data) {
        var canAutoBet = false;
        for (var key in this.lastBetData) if (this.lastBetData[key] > 0) {
          canAutoBet = true;
          break;
        }
        var gameMgr = VV_1.vv.gameMgr;
        if (canAutoBet) {
          this.autoBetSwitch(gameMgr.TableMgr.tableState);
          this.updateRepeatBtn(null, false);
        }
      };
      PattiBetBetMgr.prototype.updateRepeatBtn = function(state, forceShow) {
        null != state && (state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_BET ? this.autoBetNode.interactable = true : this.autoBetNode.interactable = false);
        null != forceShow && (this.autoBetNode.interactable = forceShow);
      };
      PattiBetBetMgr.prototype.autoBetSwitch = function(state) {
        var _this = this;
        if (!this.lastBetData) return;
        if (state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
          var totalCash = 0;
          for (var key in this.lastBetData) totalCash = this.lastBetData[key] + totalCash;
          if (!this.isCanAutoBet(totalCash)) return;
          var tIndex_1 = 0;
          var actRepeat = cc.repeat(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
            if (tIndex_1 > _this.betPoolNodes.length) return;
            ++tIndex_1;
            _this.lastBetData[tIndex_1] > 0 && VV_1.vv.netMgr.send(PattiBetMsgId_1.PattiBet_MSG_REQ_ID.MSG_PLAYEROPTION_REQ, {
              option: PattiBetGameConfig_1.OPTION_TYPE.BET,
              chip: _this.lastBetData[tIndex_1] * VV_1.vv.global.exchange_rate,
              side: tIndex_1
            });
          })), this.betPoolNodes.length);
          this.node.runAction(actRepeat);
        }
      };
      PattiBetBetMgr.prototype.isCanAutoBet = function(totalCash) {
        if (totalCash > parseInt(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return false;
        }
        return true;
      };
      PattiBetBetMgr.prototype.showBetTip = function(state) {
        var node = cc.instantiate(this.betTipPrefab);
        cc.find("Canvas").addChild(node);
        var script = node.getComponent(PattiBetTip_1.default);
        script && script.show(state);
      };
      PattiBetBetMgr.prototype.showRecordRoadUI = function() {
        var node = cc.instantiate(this.roadPrefab);
        cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
      };
      __decorate([ property(cc.Node) ], PattiBetBetMgr.prototype, "chipLayout", void 0);
      __decorate([ property(cc.Node) ], PattiBetBetMgr.prototype, "betPoolNodes", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetBetMgr.prototype, "chipBtnItem", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetBetMgr.prototype, "chipItem", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetBetMgr.prototype, "recordItem", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetBetMgr.prototype, "roadPrefab", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetBetMgr.prototype, "betTipPrefab", void 0);
      __decorate([ property(cc.ScrollView) ], PattiBetBetMgr.prototype, "recordList", void 0);
      __decorate([ property(cc.Button) ], PattiBetBetMgr.prototype, "autoBetNode", void 0);
      PattiBetBetMgr = __decorate([ ccclass ], PattiBetBetMgr);
      return PattiBetBetMgr;
    }(cc.Component);
    exports.default = PattiBetBetMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameCommon/Chip": void 0,
    "../../../scripts/games/gameCommon/ChipBtnItem": void 0,
    "./PattiBetGameConfig": "PattiBetGameConfig",
    "./PattiBetMsgId": "PattiBetMsgId",
    "./PattiBetTip": "PattiBetTip"
  } ],
  PattiBetMsgId: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2157AlUBtMz5hczuBC0M7X", "PattiBetMsgId");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PattiBet_MSG_BROADCAST = exports.PattiBet_MSG_RES_ID = exports.PattiBet_MSG_REQ_ID = void 0;
    var PattiBet_MSG_REQ_ID;
    (function(PattiBet_MSG_REQ_ID) {
      PattiBet_MSG_REQ_ID["MSG_JOINTABLE_REQ"] = "PattiBetJoinTableRequest";
      PattiBet_MSG_REQ_ID["MSG_LEAVETABLE_REQ"] = "PattiBetLeaveTableRequest";
      PattiBet_MSG_REQ_ID["MSG_PLAYEROPTION_REQ"] = "PattiBetPlayerOptionRequest";
      PattiBet_MSG_REQ_ID["MSG_PLAYERLIST_REQ"] = "PattiBetPlayerListRequest";
      PattiBet_MSG_REQ_ID["MSG_RECORD_REQ"] = "PattiBetRecentRecordRequest";
    })(PattiBet_MSG_REQ_ID = exports.PattiBet_MSG_REQ_ID || (exports.PattiBet_MSG_REQ_ID = {}));
    var PattiBet_MSG_RES_ID;
    (function(PattiBet_MSG_RES_ID) {
      PattiBet_MSG_RES_ID["MSG_JOINTABLE_RES"] = "PattiBetJoinTableResponse";
      PattiBet_MSG_RES_ID["MSG_LEAVETABLE_RES"] = "PattiBetLeaveTableResponse";
      PattiBet_MSG_RES_ID["MSG_PLAYEROPTION_RES"] = "PattiBetPlayerOptionResponse";
      PattiBet_MSG_RES_ID["MSG_PLAYERLIST_RES"] = "PattiBetPlayerListResponse";
      PattiBet_MSG_RES_ID["MSG_RECORD_RES"] = "PattiBetRecentRecordResponse";
    })(PattiBet_MSG_RES_ID = exports.PattiBet_MSG_RES_ID || (exports.PattiBet_MSG_RES_ID = {}));
    var PattiBet_MSG_BROADCAST;
    (function(PattiBet_MSG_BROADCAST) {
      PattiBet_MSG_BROADCAST["MSG_TABLESTATE_BROADCAST"] = "PattiBetTableStateBroadCast";
      PattiBet_MSG_BROADCAST["MSG_DEALINGCARD_BROADCAST"] = "PattiBetTableDealingBroadCast";
      PattiBet_MSG_BROADCAST["MSG_PLAYEROPTION_BROADCAST"] = "PattiBetPlayerOptionBroadCast";
      PattiBet_MSG_BROADCAST["MSG_JOINTABLE_BROADCAST"] = "PattiBetPlayerJoinTableBroadCast";
      PattiBet_MSG_BROADCAST["MSG_RESULT_BROADCAST"] = "PattiBetResultBroadCast";
      PattiBet_MSG_BROADCAST["MSG_PLAYERLEAVETABLE_BROADCAST"] = "PattiBetPlayerLeaveTableBroadCast";
      PattiBet_MSG_BROADCAST["MSG_BIGWINNER_BROADCAST"] = "PattiBetBigWinnerBroadcast";
    })(PattiBet_MSG_BROADCAST = exports.PattiBet_MSG_BROADCAST || (exports.PattiBet_MSG_BROADCAST = {}));
    cc._RF.pop();
  }, {} ],
  PattiBetPlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3c1eP9FQVLLrjJTpzZICbY", "PattiBetPlayerMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var BigWinner_1 = require("../../../scripts/games/gameCommon/BigWinner");
    var PlayerList_1 = require("../../../scripts/games/gameCommon/PlayerList");
    var Score_1 = require("../../../scripts/games/gameCommon/Score");
    var PattiBetMsgId_1 = require("./PattiBetMsgId");
    var PattiBetPlayer_1 = require("./PattiBetPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetPlayerMgr = function(_super) {
      __extends(PattiBetPlayerMgr, _super);
      function PattiBetPlayerMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerNode = [];
        _this.selfNode = null;
        _this.playerList = null;
        _this.scorePrefab = null;
        _this.bigWinnerPrefab = null;
        _this.lookersNode = null;
        _this.banker = null;
        _this.playerItem = null;
        _this.refreshMoneyListener = null;
        _this.playerInfo = null;
        _this.seatCount = 7;
        return _this;
      }
      PattiBetPlayerMgr.prototype.start = function() {
        this.refreshMoneyListener = this.refreshMoney.bind(this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      PattiBetPlayerMgr.prototype.onDestroy = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      PattiBetPlayerMgr.prototype.refreshMoney = function() {
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
      };
      PattiBetPlayerMgr.prototype.initSelfInfo = function() {
        this.selfNode.getChildByName("head").getChildByName("mask").getChildByName("icon").getComponent(NetPic_1.default).showNetView(VV_1.vv.userMgr.headUrl);
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
        this.selfNode.getChildByName("nick_name").getComponent(cc.Label).string = VV_1.vv.userMgr.userName;
      };
      PattiBetPlayerMgr.prototype.initPlayer = function(_playerInfo) {
        if (_playerInfo) {
          this.playerInfo = _playerInfo;
          for (var i = 0; i < this.playerNode.length; i++) {
            this.playerNode[i].removeAllChildren();
            this.playerNode[i].getComponent(cc.Sprite).enabled = true;
          }
          for (var j = 0; j < _playerInfo.length; j++) if (this.playerNode[j] && _playerInfo[j].pos && _playerInfo[j].pos < this.seatCount) {
            var player = cc.instantiate(this.playerItem);
            this.playerNode[_playerInfo[j].pos - 1].addChild(player);
            this.playerNode[_playerInfo[j].pos - 1].getComponent(cc.Sprite).enabled = false;
            player.getComponent(PattiBetPlayer_1.default).setPlayerInfo(this.playerInfo[j]);
          }
        }
      };
      PattiBetPlayerMgr.prototype.getLogicPosByPlayerID = function(player_id) {
        for (var i = 0; i < this.playerInfo.length; i++) if (player_id == this.playerInfo[i].player_id) return this.playerInfo[i].pos;
        return 999;
      };
      PattiBetPlayerMgr.prototype.removePlayer = function(player_id) {
        var pos = this.getLogicPosByPlayerID(player_id);
        if (999 != pos) for (var i = 0; i < this.playerInfo.length; i++) if (pos == this.playerInfo[i].pos) {
          this.playerNode[pos - 1].removeAllChildren();
          this.playerInfo.splice(i, 1);
          break;
        }
      };
      PattiBetPlayerMgr.prototype.updatePlayerinfo = function(_playerInfo) {
        this.initPlayer(_playerInfo);
      };
      PattiBetPlayerMgr.prototype.showPlayerList = function(data) {
        var node = cc.instantiate(this.playerList);
        cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
        node.getComponent(PlayerList_1.default).setData(data);
      };
      PattiBetPlayerMgr.prototype.getPlayerInfo = function() {
        return this.playerInfo;
      };
      PattiBetPlayerMgr.prototype.PlayerListCB = function() {
        VV_1.vv.netMgr.send(PattiBetMsgId_1.PattiBet_MSG_REQ_ID.MSG_PLAYERLIST_REQ, {});
      };
      PattiBetPlayerMgr.prototype.showResult = function(pos, settle, isSelf) {
        var node = cc.instantiate(this.scorePrefab);
        isSelf ? this.selfNode.addChild(node, GameConst_1.Z_ORDER.Z_DIALOG) : this.playerNode[pos - 1].addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
        var script = node.getComponent(Score_1.default);
        script && script.setScore(settle);
      };
      PattiBetPlayerMgr.prototype.showBigWinner = function(data) {
        if (null != cc.find("Canvas")) {
          var node = cc.instantiate(this.bigWinnerPrefab);
          cc.find("Canvas").addChild(node);
          var script = node.getComponent(BigWinner_1.default);
          script && script.show(data);
        }
      };
      __decorate([ property(cc.Node) ], PattiBetPlayerMgr.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], PattiBetPlayerMgr.prototype, "selfNode", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetPlayerMgr.prototype, "playerList", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetPlayerMgr.prototype, "scorePrefab", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetPlayerMgr.prototype, "bigWinnerPrefab", void 0);
      __decorate([ property(cc.Node) ], PattiBetPlayerMgr.prototype, "lookersNode", void 0);
      __decorate([ property(cc.Node) ], PattiBetPlayerMgr.prototype, "banker", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetPlayerMgr.prototype, "playerItem", void 0);
      PattiBetPlayerMgr = __decorate([ ccclass ], PattiBetPlayerMgr);
      return PattiBetPlayerMgr;
    }(cc.Component);
    exports.default = PattiBetPlayerMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameCommon/BigWinner": void 0,
    "../../../scripts/games/gameCommon/PlayerList": void 0,
    "../../../scripts/games/gameCommon/Score": void 0,
    "./PattiBetMsgId": "PattiBetMsgId",
    "./PattiBetPlayer": "PattiBetPlayer"
  } ],
  PattiBetPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60adakZQ5lE44063rwCGzlO", "PattiBetPlayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetPlayer = function(_super) {
      __extends(PattiBetPlayer, _super);
      function PattiBetPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nickName = null;
        _this.head = null;
        _this.info = {
          player_id: "",
          nick: "",
          facelook: "",
          coin: 0
        };
        return _this;
      }
      PattiBetPlayer.prototype.getPlayerInfo = function() {
        return this.info;
      };
      PattiBetPlayer.prototype.setPlayerInfo = function(data) {
        data.player_id && (this.info.player_id = data.player_id);
        if (data.nick) {
          this.info.nick = data.nick;
          this.nickName.string = VV_1.vv.tools.transformNickName(this.info.nick);
        }
        data.facelook && (this.info.facelook = data.facelook);
        this.head.showNetView(this.info.facelook);
      };
      __decorate([ property(cc.Label) ], PattiBetPlayer.prototype, "nickName", void 0);
      __decorate([ property(NetPic_1.default) ], PattiBetPlayer.prototype, "head", void 0);
      PattiBetPlayer = __decorate([ ccclass ], PattiBetPlayer);
      return PattiBetPlayer;
    }(cc.Component);
    exports.default = PattiBetPlayer;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  PattiBetRecordRoad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3cea7cCW89ABLqG+GgljGGt", "PattiBetRecordRoad");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ResultType = exports.RoadItemType = void 0;
    var PattiBetBigRoadItem_1 = require("./PattiBetBigRoadItem");
    var PattiBetBeadRoadItem_1 = require("./PattiBetBeadRoadItem");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var UIBase_1 = require("../../../scripts/games/gameBase/UIBase");
    var RoadItemType;
    (function(RoadItemType) {
      RoadItemType[RoadItemType["BigRoad"] = 1] = "BigRoad";
      RoadItemType[RoadItemType["BeadRoad"] = 2] = "BeadRoad";
    })(RoadItemType = exports.RoadItemType || (exports.RoadItemType = {}));
    var ResultType;
    (function(ResultType) {
      ResultType[ResultType["C"] = 1] = "C";
      ResultType[ResultType["P"] = 2] = "P";
    })(ResultType = exports.ResultType || (exports.ResultType = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetRecordRoad = function(_super) {
      __extends(PattiBetRecordRoad, _super);
      function PattiBetRecordRoad() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bigRoadLayout = null;
        _this.bigRoadItem = null;
        _this.beadRoadItem = null;
        _this.roundLabel = null;
        _this.roundCLabel = null;
        _this.roundPLabel = null;
        _this.beadRoadStartPos = null;
        _this.beadRoadNode = null;
        _this.poolSize = 10;
        _this.bigRoadItemPool = null;
        _this.beadRoadItemPool = null;
        return _this;
      }
      PattiBetRecordRoad.prototype.onLoad = function() {
        this.initRoadItemNodePool();
        var gameMgr = VV_1.vv.gameMgr;
        if (gameMgr.recordData) {
          this.updateRoundLabel(gameMgr.recordData);
          this.updateBigRoad(gameMgr.recordData);
          this.updateBeadRoad(this.getBeadRoadResult(gameMgr.recordData));
        }
      };
      PattiBetRecordRoad.prototype.onDestroy = function() {
        this.bigRoadItemPool.clear();
        this.beadRoadItemPool.clear();
      };
      PattiBetRecordRoad.prototype.initRoadItemNodePool = function() {
        this.bigRoadItemPool = new cc.NodePool();
        this.beadRoadItemPool = new cc.NodePool();
        for (var i = 0; i < this.poolSize; i++) {
          var item = cc.instantiate(this.bigRoadItem);
          this.bigRoadItemPool.put(item);
        }
        for (var j = 0; j < this.poolSize; j++) {
          var beadItem = cc.instantiate(this.beadRoadItem);
          this.beadRoadItemPool.put(beadItem);
        }
      };
      PattiBetRecordRoad.prototype.createRoadItem = function(type, value, parentNode, pos, tieRound) {
        var item = null;
        if (type == RoadItemType.BeadRoad) {
          item = this.beadRoadItemPool.size() > 0 ? this.beadRoadItemPool.get() : cc.instantiate(this.beadRoadItem);
          item.parent = parentNode;
          item.setPosition(pos);
          item.getComponent(PattiBetBeadRoadItem_1.default).bindData(value, tieRound);
        } else if (type == RoadItemType.BigRoad) {
          item = this.bigRoadItemPool.size() > 0 ? this.bigRoadItemPool.get() : cc.instantiate(this.bigRoadItem);
          item.getComponent(PattiBetBigRoadItem_1.default).bindData(value);
        }
        return item;
      };
      PattiBetRecordRoad.prototype.updateRoundLabel = function(recordData) {
        var RoundCSum = 0;
        var RoundPSum = 0;
        var roundSum = recordData.length;
        for (var i = 0; i < recordData.length; i++) recordData[i] == ResultType.C ? RoundCSum += 1 : recordData[i] == ResultType.P && (RoundPSum += 1);
        this.roundCLabel.string = String(RoundCSum);
        this.roundPLabel.string = String(RoundPSum);
        this.roundLabel.string = "Round: " + roundSum;
      };
      PattiBetRecordRoad.prototype.updateBigRoad = function(recordData) {
        var temp = recordData;
        recordData.length > 120 && (temp = recordData.slice(-120));
        this.bigRoadLayout.removeAllChildren(true);
        for (var i = 0; i < temp.length; i++) {
          var item = this.createRoadItem(RoadItemType.BigRoad, temp[i]);
          this.bigRoadLayout.addChild(item);
        }
      };
      PattiBetRecordRoad.prototype.updateBeadRoad = function(beadRoadData) {
        var temp = beadRoadData;
        beadRoadData.length > 28 && (temp = beadRoadData.slice(-28));
        var startPos = this.beadRoadStartPos.getPosition();
        var gapX = 40;
        var gapY = 40;
        for (var i = 0; i < temp.length; i++) for (var j = 0; j < temp[i].length; j++) {
          var px = 0;
          var py = 0;
          if (j > 5) {
            if (28 == i && j > 5) break;
            px = startPos.x + i * gapX + (j - 5) * gapX;
            py = startPos.y - 5 * gapY;
          } else {
            px = startPos.x + i * gapX;
            py = startPos.y - j * gapY;
          }
          this.createRoadItem(RoadItemType.BeadRoad, temp[i][j], this.beadRoadNode, cc.v2(px, py));
        }
      };
      PattiBetRecordRoad.prototype.getBeadRoadResult = function(a) {
        var t = [];
        var com = [];
        var s = 0;
        while (a.length > 0) {
          if (s >= a.length) {
            t.push(com);
            break;
          }
          if (0 == com.length) {
            com.push(a[s]);
            ++s;
          } else if (com[0] == a[s]) {
            com.push(a[s]);
            ++s;
          } else {
            t.push(com);
            com = [];
          }
        }
        return t;
      };
      PattiBetRecordRoad.prototype.start = function() {
        this.show();
      };
      PattiBetRecordRoad.prototype.btnClose = function() {
        this.hide();
      };
      __decorate([ property(cc.Node) ], PattiBetRecordRoad.prototype, "bigRoadLayout", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetRecordRoad.prototype, "bigRoadItem", void 0);
      __decorate([ property(cc.Prefab) ], PattiBetRecordRoad.prototype, "beadRoadItem", void 0);
      __decorate([ property(cc.Label) ], PattiBetRecordRoad.prototype, "roundLabel", void 0);
      __decorate([ property(cc.Label) ], PattiBetRecordRoad.prototype, "roundCLabel", void 0);
      __decorate([ property(cc.Label) ], PattiBetRecordRoad.prototype, "roundPLabel", void 0);
      __decorate([ property(cc.Node) ], PattiBetRecordRoad.prototype, "beadRoadStartPos", void 0);
      __decorate([ property(cc.Node) ], PattiBetRecordRoad.prototype, "beadRoadNode", void 0);
      PattiBetRecordRoad = __decorate([ ccclass ], PattiBetRecordRoad);
      return PattiBetRecordRoad;
    }(UIBase_1.default);
    exports.default = PattiBetRecordRoad;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameBase/UIBase": void 0,
    "./PattiBetBeadRoadItem": "PattiBetBeadRoadItem",
    "./PattiBetBigRoadItem": "PattiBetBigRoadItem"
  } ],
  PattiBetTableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c00369r/1ZE3r1hz5fJwtde", "PattiBetTableMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var PattiBetGameConfig_1 = require("./PattiBetGameConfig");
    var PattiBetGameMgr_1 = require("./PattiBetGameMgr");
    var PattiBetMsgId_1 = require("./PattiBetMsgId");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetTableMgr = function(_super) {
      __extends(PattiBetTableMgr, _super);
      function PattiBetTableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tableInfo = null;
        _this.countTime = null;
        _this.tableState = null;
        return _this;
      }
      PattiBetTableMgr.prototype.initTable = function(data) {
        data.state && this.updateTableState(data.state, data.state_time || 0);
      };
      PattiBetTableMgr.prototype.start = function() {
        VV_1.vv.gameMgr.launch();
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_ROOM_ENTER, {
          result: "suc"
        });
        VV_1.vv.analysis.startTimers.betgameEnter = Date.now();
      };
      PattiBetTableMgr.prototype.onEnable = function() {
        VV_1.vv.gameMgr = new PattiBetGameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
      };
      PattiBetTableMgr.prototype.reset = function() {};
      PattiBetTableMgr.prototype.btnCB = function(event, customData) {
        if ("btnMenu" == customData) VV_1.vv.gameMgr.showMenuUI(); else if ("btn_addcash" == customData) PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash); else if ("btn_exit" == customData) this.exit(); else if ("btn_record" == customData) {
          var gameMgr = VV_1.vv.gameMgr;
          gameMgr.BetMgr.showRecordRoadUI();
        } else "btn_rule" == customData && VV_1.vv.uiMgr.showGameRule();
      };
      PattiBetTableMgr.prototype.exit = function() {
        var isBeting = false;
        if (VV_1.vv.gameMgr) for (var key in VV_1.vv.gameMgr.BetMgr.curBetData) VV_1.vv.gameMgr.BetMgr.curBetData[key] > 0 && (isBeting = true);
        if (isBeting) {
          VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitSettle"));
          return;
        }
        VV_1.vv.netMgr.send(PattiBetMsgId_1.PattiBet_MSG_REQ_ID.MSG_LEAVETABLE_REQ, {});
      };
      PattiBetTableMgr.prototype.stateUpdate = function(dt) {
        if (!this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active) return;
        this.countTime -= dt;
        this.setState(Math.round(this.countTime));
        this.countTime <= 0 && this.stopTableState();
      };
      PattiBetTableMgr.prototype.updateTableState = function(state, state_time) {
        if (state) {
          this.tableState = state;
          this.tableInfo.getChildByName("tableState").getChildByName("txtTip").getComponent(cc.Label).string = PattiBetGameConfig_1.GameConfig.TIP_STR.tableState[state];
        }
        this.stopTableState();
        this.countTime = state_time;
        this.setState(this.countTime);
        (this.countTime > 0 && state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_BET || state == PattiBetGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) && (this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active = true);
      };
      PattiBetTableMgr.prototype.setState = function(dt) {
        if (dt >= 0) {
          this.tableInfo.getChildByName("tableState").active = true;
          this.tableInfo.getChildByName("tableState").getChildByName("txtTime").getComponent(cc.Label).string = "  " + dt + " s ";
        }
      };
      PattiBetTableMgr.prototype.stopTableState = function() {
        this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active = false;
        this.countTime = null;
      };
      PattiBetTableMgr.prototype.update = function(dt) {
        this.stateUpdate(dt);
      };
      __decorate([ property(cc.Node) ], PattiBetTableMgr.prototype, "tableInfo", void 0);
      PattiBetTableMgr = __decorate([ ccclass ], PattiBetTableMgr);
      return PattiBetTableMgr;
    }(cc.Component);
    exports.default = PattiBetTableMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "./PattiBetGameConfig": "PattiBetGameConfig",
    "./PattiBetGameMgr": "PattiBetGameMgr",
    "./PattiBetMsgId": "PattiBetMsgId"
  } ],
  PattiBetTip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb424oHzSNP9YUbNrs4o0Kr", "PattiBetTip");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VV_1 = require("../../../scripts/frameworks/VV");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PattiBetBetTip = function(_super) {
      __extends(PattiBetBetTip, _super);
      function PattiBetBetTip() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PattiBetBetTip.prototype.show = function(state) {
        var _this = this;
        VV_1.vv.audioMgr.playSound("outCardStart");
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).set({
          scaleX: 1,
          scaleY: 0
        }).to(.1, {
          scaleX: 1,
          scaleY: 1
        }).delay(2).to(.1, {
          scaleX: 1,
          scaleY: 0
        }).call(function() {
          _this.node.destroy();
        }).start();
      };
      PattiBetBetTip = __decorate([ ccclass ], PattiBetBetTip);
      return PattiBetBetTip;
    }(cc.Component);
    exports.default = PattiBetBetTip;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ]
}, {}, [ "PattiBetBeadRoadItem", "PattiBetBigRoadItem", "PattiBetCard", "PattiBetCardMgr", "PattiBetCardType", "PattiBetGameConfig", "PattiBetGameHelper", "PattiBetGameMgr", "PattiBetMgr", "PattiBetMsgId", "PattiBetPlayer", "PattiBetPlayerMgr", "PattiBetRecordRoad", "PattiBetTableMgr", "PattiBetTip" ]);