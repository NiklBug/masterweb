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
  DiceBetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cdfaE7Jz9OG5v2yEp8fIqx", "DiceBetMgr");
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
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var Chip_1 = require("../../../scripts/games/gameCommon/Chip");
    var ChipBtnItem_1 = require("../../../scripts/games/gameCommon/ChipBtnItem");
    var DiceBetTip_1 = require("./DiceBetTip");
    var DiceGameConfig_1 = require("./DiceGameConfig");
    var DiceMsgId_1 = require("./DiceMsgId");
    var DiceRecordList_1 = require("./DiceRecordList");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DiceBetMgr = function(_super) {
      __extends(DiceBetMgr, _super);
      function DiceBetMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chipLayout = null;
        _this.betPoolNodes = [];
        _this.chipBtnItem = null;
        _this.chipItem = null;
        _this.recordNode = null;
        _this.recordListPrefab = null;
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
      DiceBetMgr.prototype.start = function() {
        this.initCurBetData();
        this.initChipNodePool();
        this.storagePlayersOrignPos();
        VV_1.vv.analysis.startTimers.betgamecomplete = null;
      };
      DiceBetMgr.prototype.initCurBetData = function() {
        for (var i = 1; i <= this.betPoolNodes.length; i++) this.curBetData["" + i] = 0;
      };
      DiceBetMgr.prototype.reset = function() {
        this.lastBetData = VV_1.vv.uiMgr.deepClone(this.curBetData);
        cc.log("====\u4e0a\u4e00\u628a\u4e0b\u6ce8=====", this.lastBetData);
        for (var key in this.curBetData) this.curBetData[key] = 0;
      };
      DiceBetMgr.prototype.storagePlayersOrignPos = function() {
        var gameMgr = VV_1.vv.gameMgr;
        for (var i = 0; i < gameMgr.PlayerMgr.playerNode.length; i++) gameMgr.PlayerMgr.playerNode[i] && this.playerNodeOrignPos.push(gameMgr.PlayerMgr.playerNode[i].position);
      };
      DiceBetMgr.prototype.destoryChips = function() {
        for (var i = 0; i < this.chipNodes.length; i++) this.chipNodes[i] && this.flyChipFromAtoB(this.chipNodes[i], this.chipNodes[i], VV_1.vv.gameMgr.TableMgr.croupier);
        this.chipNodes.length > 0 && VV_1.vv.audioMgr.playSound("recycleCoin");
        this.chipNodes.splice(0);
      };
      DiceBetMgr.prototype.poolBtnCB = function(event, customData) {
        var index = parseInt(customData);
        index && this.requestBet(this.chipArr[this.curChipIndex] * VV_1.vv.global.exchange_rate, index);
      };
      DiceBetMgr.prototype.requestBet = function(chip, side) {
        if (parseInt(VV_1.vv.userMgr.coins) < 50 && false) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is under \u20b950, add cash and continue to play", false, true);
          return;
        }
        if (!VV_1.vv.userMgr.has_recharged && false) {
          VV_1.vv.uiMgr.highPlayerAlertTips();
          return;
        }
        VV_1.vv.netMgr.send(DiceMsgId_1.DICE_MSG_REQ_ID.MSG_PLAYEROPTION_REQ, {
          option: DiceGameConfig_1.OPTION_TYPE.BET,
          chip: chip,
          side: side
        });
      };
      DiceBetMgr.prototype.createChip = function(parentNode, pos) {
        var chip = null;
        chip = this.chipPool.size() > 0 ? this.chipPool.get() : cc.instantiate(this.chipItem);
        chip.parent = parentNode;
        chip.getComponent(Chip_1.default).init(pos);
        return chip;
      };
      DiceBetMgr.prototype.initChipNodePool = function() {
        this.chipPool = new cc.NodePool();
        for (var i = 0; i < this.poolSize; i++) {
          var chip = cc.instantiate(this.chipItem);
          this.chipPool.put(chip);
        }
      };
      DiceBetMgr.prototype.recyleChip = function(_chip) {
        this.chipPool.put(_chip);
      };
      DiceBetMgr.prototype.flyChipFromAtoB = function(node, nodeA, nodeB) {
        var sPos = nodeA.position;
        var wPos = nodeB.convertToWorldSpaceAR(sPos);
        var lPos = nodeA.convertToNodeSpaceAR(wPos);
        var ePos = this.getRandomPosInRect(lPos, nodeB.width / 2, nodeB.height / 2);
        node.stopAllActions();
        var self = this;
        cc.tween(node).to(.5, {
          position: ePos
        }, {
          easing: "cubicOut"
        }).call(function() {
          self.recyleChip(nodeA);
        }).start();
      };
      DiceBetMgr.prototype.flyChipToPlayer = function(pos, winning) {
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = gameMgr.PlayerMgr.banker.position;
        var ePos = gameMgr.PlayerMgr.playerNode[pos - 1].position;
        var eNode = gameMgr.PlayerMgr.playerNode[pos - 1];
        this.flyChip(winning, sPos, ePos, eNode, true);
      };
      DiceBetMgr.prototype.flyChipToPool = function(poorIndex, seatIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = null;
        var lPos = null;
        if (999 == seatIndex) sPos = gameMgr.PlayerMgr.playerList.position; else if (-1 == seatIndex) sPos = gameMgr.PlayerMgr.selfNode.position; else {
          sPos = gameMgr.PlayerMgr.playerNode[seatIndex - 1].position;
          this.playerShake(gameMgr.PlayerMgr.playerNode[seatIndex - 1], seatIndex);
        }
        var wPos = this.betPoolNodes[poorIndex - 1].convertToWorldSpaceAR(sPos);
        lPos = 999 == seatIndex ? gameMgr.PlayerMgr.playerList.convertToNodeSpaceAR(wPos) : -1 == seatIndex ? gameMgr.PlayerMgr.selfNode.convertToNodeSpaceAR(wPos) : gameMgr.PlayerMgr.playerNode[seatIndex - 1].convertToNodeSpaceAR(wPos);
        this.flyChip(betNum, sPos, lPos, this.betPoolNodes[poorIndex - 1], false);
      };
      DiceBetMgr.prototype.recoverChips = function(poolIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        for (var i = 0; i < this.getChipNumByBet(betNum); i++) {
          var pos = this.getRandomPosInRect(this.betPoolNodes[poolIndex - 1].position, this.betPoolNodes[poolIndex - 1].width / 2, this.betPoolNodes[poolIndex - 1].height / 2);
          var chip = this.createChip(this.node, pos);
          this.chipNodes.push(chip);
        }
      };
      DiceBetMgr.prototype.playerShake = function(tNode, seatIndex) {
        var _this = this;
        tNode.runAction(cc.sequence(cc.moveTo(.1, tNode.position.x + 5, tNode.position.y), cc.moveTo(.1, tNode.position.x - 5, tNode.position.y), cc.callFunc(function() {
          tNode.position = _this.playerNodeOrignPos[seatIndex - 1];
        })));
      };
      DiceBetMgr.prototype.flyChip = function(betNum, sPos, ePos, endNode, isTemp) {
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
      DiceBetMgr.prototype.updateBetBtn = function() {
        var coin = parseInt(VV_1.vv.userMgr.coins);
        coin >= 0 && coin <= 2e3 ? this.chipArr = DiceGameConfig_1.GameConfig.BET_COIN.level1 : coin > 2e3 && coin <= 5e3 ? this.chipArr = DiceGameConfig_1.GameConfig.BET_COIN.level2 : coin > 5e3 && coin <= 1e4 ? this.chipArr = DiceGameConfig_1.GameConfig.BET_COIN.level3 : coin > 1e4 && coin <= 2e4 ? this.chipArr = DiceGameConfig_1.GameConfig.BET_COIN.level4 : coin > 2e4 && (this.chipArr = DiceGameConfig_1.GameConfig.BET_COIN.level5);
        this.chipLayout.removeAllChildren();
        var _loop_2 = function(i) {
          var posX = 125 + 108 * (i - 1);
          var wPos = cc.v2(posX, 0);
          var item = cc.instantiate(this_2.chipBtnItem);
          item.setPosition(wPos);
          this_2.chipLayout.addChild(item);
          item.getComponent(ChipBtnItem_1.default).setChipInfo(this_2.chipArr[i], i);
          var self = this_2;
          item.on("click", function() {
            self.curChipIndex = i;
            self.updateChipState();
          }, this_2);
        };
        var this_2 = this;
        for (var i = 0; i < this.chipArr.length; i++) _loop_2(i);
        this.updateChipState();
      };
      DiceBetMgr.prototype.updateChipState = function() {
        for (var i = 0; i < this.chipLayout.childrenCount; i++) i == this.curChipIndex ? this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(true) : this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(false);
      };
      DiceBetMgr.prototype.getChipNumByBet = function(betNum) {
        var chipNum = 1;
        betNum > 0 && betNum <= 1 ? chipNum = 1 : betNum > 1 && betNum <= 10 ? chipNum = 2 : betNum > 10 && betNum <= 100 ? chipNum = 5 : betNum > 100 && betNum <= 1e3 ? chipNum = 10 : betNum > 1e3 && betNum <= 2e3 ? chipNum = 20 : betNum > 2e3 && (chipNum = 30);
        return chipNum;
      };
      DiceBetMgr.prototype.getRandomPosInRect = function(point, width, height) {
        var minX = point.x - width / 2;
        var maxX = point.x + width / 2;
        var x = Math.random() * (maxX - minX + 1) + minX;
        var minY = point.y - height / 2;
        var maxY = point.y + height / 2;
        var y = Math.random() * (maxY - minY + 1) + minY;
        return new cc.Vec3(x, y);
      };
      DiceBetMgr.prototype.showResult = function(tResult) {
        var self = this;
        var _loop_3 = function(i) {
          self.betPoolNodes[tResult[i] - 1].getChildByName("light").active = true;
          cc.tween(self.betPoolNodes[tResult[i] - 1].getChildByName("light")).repeat(8, cc.tween().to(.25, {
            opacity: 55
          }).to(.25, {
            opacity: 255
          })).call(function() {
            self.betPoolNodes[tResult[i] - 1].getChildByName("light").active = false;
          }).start();
        };
        for (var i = 0; i < tResult.length; i++) _loop_3(i);
      };
      DiceBetMgr.prototype.showRecordList = function(list) {
        var view = this.recordNode.getChildByName("recordList");
        if (null == view) {
          var node = cc.instantiate(this.recordListPrefab);
          this.recordNode.addChild(node);
          node.getComponent(DiceRecordList_1.default).setData(list);
        } else view.getComponent(DiceRecordList_1.default).setData(list);
      };
      DiceBetMgr.prototype.updatePoolState = function(state) {
        if (state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) for (var k = 0; k < this.betPoolNodes.length; k++) {
          this.betPoolNodes[k].getChildByName("myBet").getComponent(cc.Label).string = "";
          this.betPoolNodes[k].getChildByName("totalBet").getComponent(cc.Label).string = "";
        }
        if (state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
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
      DiceBetMgr.prototype.showTotalBetNum = function(pool, total) {
        for (var i = 0; i < this.betPoolNodes.length; i++) total && (this.betPoolNodes[pool - 1].getChildByName("totalBet").getComponent(cc.Label).string = "\u20b9:" + total);
      };
      DiceBetMgr.prototype.showMyBetNum = function(pool, num) {
        for (var i = 0; i < this.betPoolNodes.length; i++) num && (this.betPoolNodes[pool - 1].getChildByName("myBet").getComponent(cc.Label).string = "\u20b9:" + num);
        for (var key in this.curBetData) parseInt(key) == pool && (this.curBetData[key] = num);
      };
      DiceBetMgr.prototype.autoBetClick = function(event, data) {
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
      DiceBetMgr.prototype.updateRepeatBtn = function(state, forceShow) {
        null != state && (state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_BET ? this.autoBetNode.interactable = true : this.autoBetNode.interactable = false);
        null != forceShow && (this.autoBetNode.interactable = forceShow);
      };
      DiceBetMgr.prototype.autoBetSwitch = function(state) {
        var _this = this;
        if (!this.lastBetData) return;
        if (state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
          var totalCash = 0;
          for (var key in this.lastBetData) totalCash = this.lastBetData[key] + totalCash;
          if (!this.isCanAutoBet(totalCash)) return;
          var tIndex_1 = 0;
          var actRepeat = cc.repeat(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
            if (tIndex_1 > _this.betPoolNodes.length) return;
            ++tIndex_1;
            _this.lastBetData[tIndex_1] > 0 && _this.requestBet(_this.lastBetData[tIndex_1] * VV_1.vv.global.exchange_rate, tIndex_1);
          })), this.betPoolNodes.length);
          this.node.runAction(actRepeat);
        }
      };
      DiceBetMgr.prototype.isCanAutoBet = function(totalCash) {
        if (totalCash > parseInt(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return false;
        }
        return true;
      };
      DiceBetMgr.prototype.showBetTip = function(state) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("betTip");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Up7Down, function(bundle) {
          bundle.load("prefabs/betTip", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node);
              var script = node.getComponent(DiceBetTip_1.default);
              script && script.show(state);
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], DiceBetMgr.prototype, "chipLayout", void 0);
      __decorate([ property(cc.Node) ], DiceBetMgr.prototype, "betPoolNodes", void 0);
      __decorate([ property(cc.Prefab) ], DiceBetMgr.prototype, "chipBtnItem", void 0);
      __decorate([ property(cc.Prefab) ], DiceBetMgr.prototype, "chipItem", void 0);
      __decorate([ property(cc.Node) ], DiceBetMgr.prototype, "recordNode", void 0);
      __decorate([ property(cc.Prefab) ], DiceBetMgr.prototype, "recordListPrefab", void 0);
      __decorate([ property(cc.Button) ], DiceBetMgr.prototype, "autoBetNode", void 0);
      DiceBetMgr = __decorate([ ccclass ], DiceBetMgr);
      return DiceBetMgr;
    }(cc.Component);
    exports.default = DiceBetMgr;
    cc._RF.pop();
  }, {
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameCommon/Chip": void 0,
    "../../../scripts/games/gameCommon/ChipBtnItem": void 0,
    "./DiceBetTip": "DiceBetTip",
    "./DiceGameConfig": "DiceGameConfig",
    "./DiceMsgId": "DiceMsgId",
    "./DiceRecordList": "DiceRecordList"
  } ],
  DiceBetTip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65f079kKZVHwphYJ2J8DBNw", "DiceBetTip");
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
    var DiceBetTip = function(_super) {
      __extends(DiceBetTip, _super);
      function DiceBetTip() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betLabel = null;
        return _this;
      }
      DiceBetTip.prototype.start = function() {
        this.node.setScale(1, 0);
      };
      DiceBetTip.prototype.show = function(state) {
        var _this = this;
        VV_1.vv.audioMgr.playSound("outCardStart");
        this.node.runAction(cc.sequence(cc.scaleTo(.1, 1), cc.delayTime(1.5), cc.scaleTo(.1, 1, 0), cc.callFunc(function() {
          _this.node.destroy();
        })));
      };
      __decorate([ property(cc.Node) ], DiceBetTip.prototype, "betLabel", void 0);
      DiceBetTip = __decorate([ ccclass ], DiceBetTip);
      return DiceBetTip;
    }(cc.Component);
    exports.default = DiceBetTip;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  DiceDealingMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d108YmZiJKD4jkB9ybIGKR", "DiceDealingMgr");
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
    exports.DOUBLE_TYPE = void 0;
    var VV_1 = require("../../../scripts/frameworks/VV");
    var DOUBLE_TYPE;
    (function(DOUBLE_TYPE) {
      DOUBLE_TYPE[DOUBLE_TYPE["DOUBLE"] = 1] = "DOUBLE";
      DOUBLE_TYPE[DOUBLE_TYPE["NO_DOUBLE"] = 2] = "NO_DOUBLE";
    })(DOUBLE_TYPE = exports.DOUBLE_TYPE || (exports.DOUBLE_TYPE = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DiceDealingMgr = function(_super) {
      __extends(DiceDealingMgr, _super);
      function DiceDealingMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.diceNode = null;
        _this.goldDiceNode = null;
        _this.doubleAnimNode = null;
        _this.doubleTip = null;
        _this.sieveCupNode = null;
        _this.diceArmatureDisplayList = [];
        _this.goldDiceArmatureDisplayList = [];
        _this.sieveCupArmatureDisplay = null;
        _this.diceAnimList = {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6"
        };
        _this._diceA = "1";
        _this._diceB = "1";
        _this._double = null;
        return _this;
      }
      DiceDealingMgr.prototype.onLoad = function() {
        this.sieveCupArmatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.finishShakeHandler, this);
      };
      DiceDealingMgr.prototype.reset = function() {
        this.diceNode.active = false;
        this.goldDiceNode.active = false;
      };
      DiceDealingMgr.prototype.shuffle = function(diceA, diceB, dobule) {
        if (diceA > 6 || diceB > 6) return;
        this._diceA = diceA;
        this._diceB = diceB;
        this._double = dobule;
        this.sieveCupNode.active = true;
        this.sieveCupArmatureDisplay.playAnimation("shaizhong", 1);
        VV_1.vv.audioMgr.playSound("dice");
      };
      DiceDealingMgr.prototype.finishShakeHandler = function(event) {
        this.sieveCupNode.active = false;
        if (this._double == DOUBLE_TYPE.DOUBLE) {
          this.goldDiceNode.active = true;
          this.goldDiceArmatureDisplayList[0].playAnimation(this.diceAnimList[this._diceA], 1);
          this.goldDiceArmatureDisplayList[1].playAnimation(this.diceAnimList[this._diceB], 1);
          this.doubleAnimNode.addChild(cc.instantiate(this.doubleTip));
        } else {
          this.diceNode.active = true;
          this.diceArmatureDisplayList[0].playAnimation(this.diceAnimList[this._diceA], 1);
          this.diceArmatureDisplayList[1].playAnimation(this.diceAnimList[this._diceB], 1);
        }
      };
      __decorate([ property(cc.Node) ], DiceDealingMgr.prototype, "diceNode", void 0);
      __decorate([ property(cc.Node) ], DiceDealingMgr.prototype, "goldDiceNode", void 0);
      __decorate([ property(cc.Node) ], DiceDealingMgr.prototype, "doubleAnimNode", void 0);
      __decorate([ property(cc.Prefab) ], DiceDealingMgr.prototype, "doubleTip", void 0);
      __decorate([ property(cc.Node) ], DiceDealingMgr.prototype, "sieveCupNode", void 0);
      __decorate([ property(dragonBones.ArmatureDisplay) ], DiceDealingMgr.prototype, "diceArmatureDisplayList", void 0);
      __decorate([ property(dragonBones.ArmatureDisplay) ], DiceDealingMgr.prototype, "goldDiceArmatureDisplayList", void 0);
      __decorate([ property(dragonBones.ArmatureDisplay) ], DiceDealingMgr.prototype, "sieveCupArmatureDisplay", void 0);
      DiceDealingMgr = __decorate([ ccclass ], DiceDealingMgr);
      return DiceDealingMgr;
    }(cc.Component);
    exports.default = DiceDealingMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  DiceDoubleTip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e881UaDvdJdI/CgrOBrh9u", "DiceDoubleTip");
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
    var DiceDoubleTip = function(_super) {
      __extends(DiceDoubleTip, _super);
      function DiceDoubleTip() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DiceDoubleTip.prototype.onLoad = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).set({
          scale: 0
        }).delay(2).to(.1, {
          scale: 1.2
        }).to(.1, {
          scale: 1
        }).call(function() {
          VV_1.vv.audioMgr.playSound("sound_win");
        }).delay(3).call(function() {
          _this.node.destroy();
        }).start();
      };
      DiceDoubleTip.prototype.start = function() {};
      DiceDoubleTip = __decorate([ ccclass ], DiceDoubleTip);
      return DiceDoubleTip;
    }(cc.Component);
    exports.default = DiceDoubleTip;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  DiceGameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83035P1//tEe4amuRp1yRT8", "DiceGameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OPTION_TYPE = exports.TABLE_STATE = exports.GameConfig = void 0;
    var TABLE_STATE;
    (function(TABLE_STATE) {
      TABLE_STATE[TABLE_STATE["TABLE_STATE_WAITING"] = 1] = "TABLE_STATE_WAITING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_DEALING"] = 2] = "TABLE_STATE_DEALING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_BET"] = 3] = "TABLE_STATE_BET";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_RESULT"] = 4] = "TABLE_STATE_RESULT";
    })(TABLE_STATE || (TABLE_STATE = {}));
    exports.TABLE_STATE = TABLE_STATE;
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
          1: "Waiting",
          2: "Billing",
          3: "Betting",
          4: "Settle"
        }
      }
    };
    exports.GameConfig = GameConfig;
    cc._RF.pop();
  }, {} ],
  DiceGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d226A7eQVDj4fn+TP+FluI", "DiceGameMgr");
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
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var GameMgrBase_1 = require("../../../scripts/games/gameBase/GameMgrBase");
    var DiceBetMgr_1 = require("./DiceBetMgr");
    var DiceDealingMgr_1 = require("./DiceDealingMgr");
    var DiceGameConfig_1 = require("./DiceGameConfig");
    var DiceMsgId_1 = require("./DiceMsgId");
    var DicePlayerMgr_1 = require("./DicePlayerMgr");
    var DiceTableMgr_1 = require("./DiceTableMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DiceGameMgr = function(_super) {
      __extends(DiceGameMgr, _super);
      function DiceGameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TableMgr = null;
        _this.DealingMgr = null;
        _this.PlayerMgr = null;
        _this.BetMgr = null;
        _this.tableInfo = null;
        _this.exitTime = null;
        _this.bigWinnerData = null;
        return _this;
      }
      DiceGameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.Up7Down,
                  room_id: 999999
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) VV_1.vv.netMgr.send(DiceMsgId_1.DICE_MSG_REQ_ID.MSG_JOINTABLE_REQ, {}); else {
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
      DiceGameMgr.prototype.addNetListener = function() {
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.addHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.addBackGroundListener();
      };
      DiceGameMgr.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DiceMsgId_1.DICE_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.removeBackGroundListener();
      };
      DiceGameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      DiceGameMgr.prototype.addBackGroundListener = function() {
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_HIDE, this.onHide, this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_SHOW, this.onShow, this);
      };
      DiceGameMgr.prototype.removeBackGroundListener = function() {
        VV_1.vv.eventMgr.offTarget(this);
      };
      DiceGameMgr.prototype.onHide = function() {
        VV_1.vv.logger.log("GAME_EVENT_HIDE");
        this.exitTime = new Date().getTime();
      };
      DiceGameMgr.prototype.onShow = function() {
        var subTime = (new Date().getTime() - this.exitTime) / 1e3;
        VV_1.vv.logger.log("GAME_EVENT_SHOW   ", subTime);
        if (subTime >= 20) {
          console.warn("!!!!! exit exceed 20 seconds !!!!!");
          VV_1.vv.netMgr.closeNet();
        }
      };
      DiceGameMgr.prototype.OnPlayerLeaveBroadCast = function(data) {
        var _this = this;
        data.player_id == VV_1.vv.userMgr.player_id ? 1 == data.status ? VV_1.vv.uiMgr.noOperatingAlertTips(function() {
          _this.exitTable();
        }) : 2 == data.status && this.exitTable() : this.PlayerMgr.removePlayer(data.player_id);
      };
      DiceGameMgr.prototype.OnPlayerListResponse = function(data) {
        var playerInfo = data.player;
        playerInfo && this.PlayerMgr.showPlayerList(playerInfo);
      };
      DiceGameMgr.prototype.OnBigWinnerBroadCast = function(data) {
        data.player && data.player.length > 0 && (this.bigWinnerData = VV_1.vv.uiMgr.deepClone(data.player));
      };
      DiceGameMgr.prototype.OnRecordResponse = function(data) {
        data.info && this.BetMgr.showRecordList(data.info);
      };
      DiceGameMgr.prototype.OnJoinTableBroadCast = function(data) {
        data.player && this.PlayerMgr.updatePlayerinfo(data.player);
      };
      DiceGameMgr.prototype.OnJoinTableResponse = function(data) {
        if (data.table_info) {
          VV_1.vv.netMgr.send(DiceMsgId_1.DICE_MSG_REQ_ID.MSG_RECORD_REQ, {});
          this.tableInfo = VV_1.vv.uiMgr.deepClone(data.table_info);
          this.TableMgr.initTable(this.tableInfo);
          this.BetMgr.updatePoolState(this.tableInfo.state);
          this.PlayerMgr.initPlayer(this.tableInfo.players);
          this.PlayerMgr.initSelfInfo();
          if (this.tableInfo.tabledata && this.tableInfo.tabledata.betinfo) {
            if (this.tableInfo.state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_RESULT) return;
            for (var key in this.tableInfo.tabledata.betinfo) if (this.tableInfo.tabledata.betinfo[key] > 0) {
              var totalBet = this.tableInfo.tabledata.betinfo[key] / VV_1.vv.global.exchange_rate;
              1 != Number(key) && 2 != Number(key) && 7 != Number(key) || this.BetMgr.recoverChips(Number(key), totalBet);
              this.BetMgr.showTotalBetNum(Number(key), totalBet);
            }
          }
        }
      };
      DiceGameMgr.prototype.OnLeaveTableResponse = function(data) {
        1 == data.status && this.exitTable();
      };
      DiceGameMgr.prototype.OnPlayerOptionResponse = function(data) {
        if (1 == data.status) {
          if (data.Pool) for (var key in data.Pool) data.Pool[key] > 0 && this.BetMgr.showMyBetNum(Number(key), data.Pool[key] / VV_1.vv.global.exchange_rate);
        } else 2 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitNextBet")) : 3 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.rightBetPool")) : 4 == data.status ? VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is insufficient for play. Would you like to Add Cash?", true, false, true, "No,Thanks") : 5 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.betMaxLimit")) : VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitingStart"));
      };
      DiceGameMgr.prototype.OnPlayerOptionBroadCast = function(data) {
        if (data) {
          var pos = this.PlayerMgr.getLogicPosByPlayerID(data.player_id);
          data.player_id == VV_1.vv.userMgr.player_id && (pos = -1);
          if (data.chip) {
            var betChip = data.chip / VV_1.vv.global.exchange_rate;
            var betTotal = data.bettotal / VV_1.vv.global.exchange_rate;
            1 != data.betpool && 2 != data.betpool && 7 != data.betpool || this.BetMgr.flyChipToPool(data.betpool, pos, betChip);
            this.BetMgr.showTotalBetNum(data.betpool, betTotal);
          }
        }
      };
      DiceGameMgr.prototype.OnTableStateBroadCast = function(data) {
        if (data) {
          this.TableMgr.updateTableState(data.state, data.state_time);
          this.BetMgr.updatePoolState(data.state);
        }
      };
      DiceGameMgr.prototype.OnShufferBroadCast = function(data) {
        data.dice_a && data.dice_b && data.double && this.DealingMgr.shuffle(data.dice_a, data.dice_b, data.double);
      };
      DiceGameMgr.prototype.OnResultBroadCast = function(data) {
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
          var selfWin_1 = 0;
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
              if (data.resultplayer[i].player_id == VV_1.vv.userMgr.player_id) {
                _this.PlayerMgr.showResult(pos, settle, true);
                settle >= 1e3 && (selfWin_1 = settle);
              }
              pos && 999 != pos && _this.PlayerMgr.showResult(pos, settle, false);
            }
            _this.BetMgr.reset();
            _this.DealingMgr.reset();
            VV_1.vv.netMgr.send(DiceMsgId_1.DICE_MSG_REQ_ID.MSG_RECORD_REQ, {});
          }), cc.delayTime(1.5), cc.callFunc(function() {
            if (_this.bigWinnerData) {
              _this.PlayerMgr.showBigWinner(_this.bigWinnerData);
              _this.bigWinnerData = null;
            }
          }), cc.delayTime(2), cc.callFunc(function() {})));
        }
      };
      DiceGameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/TableLayer").getComponent(DiceTableMgr_1.default);
        this.PlayerMgr = cc.find("Canvas/PlayerLayer").getComponent(DicePlayerMgr_1.default);
        this.DealingMgr = cc.find("Canvas/DealingLayer").getComponent(DiceDealingMgr_1.default);
        this.BetMgr = cc.find("Canvas/BetLayer").getComponent(DiceBetMgr_1.default);
        this.BetMgr.updateBetBtn();
      };
      DiceGameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
      };
      DiceGameMgr = __decorate([ ccclass ], DiceGameMgr);
      return DiceGameMgr;
    }(GameMgrBase_1.default);
    exports.default = DiceGameMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "./DiceBetMgr": "DiceBetMgr",
    "./DiceDealingMgr": "DiceDealingMgr",
    "./DiceGameConfig": "DiceGameConfig",
    "./DiceMsgId": "DiceMsgId",
    "./DicePlayerMgr": "DicePlayerMgr",
    "./DiceTableMgr": "DiceTableMgr"
  } ],
  DiceMsgId: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73507Yz8sxCG54QlZBl0TCr", "DiceMsgId");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DICE_MSG_BROADCAST = exports.DICE_MSG_RES_ID = exports.DICE_MSG_REQ_ID = void 0;
    var DICE_MSG_REQ_ID;
    (function(DICE_MSG_REQ_ID) {
      DICE_MSG_REQ_ID["MSG_JOINTABLE_REQ"] = "DiceJoinTableRequest";
      DICE_MSG_REQ_ID["MSG_LEAVETABLE_REQ"] = "DiceLeaveTableRequest";
      DICE_MSG_REQ_ID["MSG_PLAYEROPTION_REQ"] = "DicePlayerOptionRequest";
      DICE_MSG_REQ_ID["MSG_PLAYERLIST_REQ"] = "DicePlayerListRequest";
      DICE_MSG_REQ_ID["MSG_RECORD_REQ"] = "DiceRecentRecordRequest";
    })(DICE_MSG_REQ_ID = exports.DICE_MSG_REQ_ID || (exports.DICE_MSG_REQ_ID = {}));
    var DICE_MSG_RES_ID;
    (function(DICE_MSG_RES_ID) {
      DICE_MSG_RES_ID["MSG_JOINTABLE_RES"] = "DiceJoinTableResponse";
      DICE_MSG_RES_ID["MSG_LEAVETABLE_RES"] = "DiceLeaveTableResponse";
      DICE_MSG_RES_ID["MSG_PLAYEROPTION_RES"] = "DicePlayerOptionResponse";
      DICE_MSG_RES_ID["MSG_PLAYERLIST_RES"] = "DicePlayerListResponse";
      DICE_MSG_RES_ID["MSG_RECORD_RES"] = "DiceRecentRecordResponse";
    })(DICE_MSG_RES_ID = exports.DICE_MSG_RES_ID || (exports.DICE_MSG_RES_ID = {}));
    var DICE_MSG_BROADCAST;
    (function(DICE_MSG_BROADCAST) {
      DICE_MSG_BROADCAST["MSG_TABLESTATE_BROADCAST"] = "DiceTableStateBroadCast";
      DICE_MSG_BROADCAST["MSG_DEALINGCARD_BROADCAST"] = "DiceTableDealingBroadCast";
      DICE_MSG_BROADCAST["MSG_PLAYEROPTION_BROADCAST"] = "DicePlayerOptionBroadCast";
      DICE_MSG_BROADCAST["MSG_JOINTABLE_BROADCAST"] = "DicePlayerJoinTableBroadCast";
      DICE_MSG_BROADCAST["MSG_RESULT_BROADCAST"] = "DiceResultBroadCast";
      DICE_MSG_BROADCAST["MSG_PLAYERLEAVETABLE_BROADCAST"] = "DicePlayerLeaveTableBroadCast";
      DICE_MSG_BROADCAST["MSG_BIGWINNER_BROADCAST"] = "DiceBigWinnerBroadcast";
    })(DICE_MSG_BROADCAST = exports.DICE_MSG_BROADCAST || (exports.DICE_MSG_BROADCAST = {}));
    cc._RF.pop();
  }, {} ],
  DicePlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c55fXIppVFmYy3DUQZ8j8f", "DicePlayerMgr");
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
    var DiceMsgId_1 = require("./DiceMsgId");
    var DicePlayer_1 = require("./DicePlayer");
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var PlayerList_1 = require("../../../scripts/games/gameCommon/PlayerList");
    var Score_1 = require("../../../scripts/games/gameCommon/Score");
    var BigWinner_1 = require("../../../scripts/games/gameCommon/BigWinner");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DicePlayerMgr = function(_super) {
      __extends(DicePlayerMgr, _super);
      function DicePlayerMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerNode = [];
        _this.selfNode = null;
        _this.playerList = null;
        _this.playerListPrefab = null;
        _this.banker = null;
        _this.playerItem = null;
        _this.refreshMoneyListener = null;
        _this.playerInfo = null;
        _this.seatCount = 7;
        return _this;
      }
      DicePlayerMgr.prototype.start = function() {
        this.refreshMoneyListener = this.refreshMoney.bind(this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      DicePlayerMgr.prototype.onDestroy = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      DicePlayerMgr.prototype.refreshMoney = function() {
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
      };
      DicePlayerMgr.prototype.reset = function() {};
      DicePlayerMgr.prototype.initSelfInfo = function() {
        this.selfNode.getChildByName("head").getChildByName("mask").getChildByName("icon").getComponent(NetPic_1.default).showNetView(VV_1.vv.userMgr.headUrl);
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
        this.selfNode.getChildByName("nick_name").getComponent(cc.Label).string = VV_1.vv.userMgr.userName;
      };
      DicePlayerMgr.prototype.initPlayer = function(_playerInfo) {
        if (_playerInfo) {
          this.playerInfo = VV_1.vv.uiMgr.deepClone(_playerInfo);
          for (var i = 0; i < this.playerNode.length; i++) {
            this.playerNode[i].removeAllChildren();
            this.playerNode[i].getComponent(cc.Sprite).enabled = true;
          }
          for (var j = 0; j < _playerInfo.length; j++) if (this.playerNode[j] && _playerInfo[j].pos && _playerInfo[j].pos < this.seatCount) {
            var player = cc.instantiate(this.playerItem);
            this.playerNode[_playerInfo[j].pos - 1].addChild(player);
            this.playerNode[_playerInfo[j].pos - 1].getComponent(cc.Sprite).enabled = false;
            player.getComponent(DicePlayer_1.default).setPlayerInfo(this.playerInfo[j]);
          }
        }
      };
      DicePlayerMgr.prototype.getLogicPosByPlayerID = function(player_id) {
        for (var i = 0; i < this.playerInfo.length; i++) if (player_id == this.playerInfo[i].player_id) return this.playerInfo[i].pos;
        return 999;
      };
      DicePlayerMgr.prototype.removePlayer = function(player_id) {
        var pos = this.getLogicPosByPlayerID(player_id);
        if (999 != pos) for (var i = 0; i < this.playerInfo.length; i++) if (pos == this.playerInfo[i].pos) {
          this.playerNode[pos - 1].removeAllChildren();
          this.playerInfo.splice(i, 1);
          break;
        }
      };
      DicePlayerMgr.prototype.updatePlayerinfo = function(_playerInfo) {
        this.initPlayer(_playerInfo);
      };
      DicePlayerMgr.prototype.showPlayerList = function(data) {
        var node = cc.instantiate(this.playerListPrefab);
        cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
        node.getComponent(PlayerList_1.default).setData(data);
      };
      DicePlayerMgr.prototype.PlayerListCB = function() {
        VV_1.vv.netMgr.send(DiceMsgId_1.DICE_MSG_REQ_ID.MSG_PLAYERLIST_REQ, {});
      };
      DicePlayerMgr.prototype.getPlayerInfo = function() {
        return this.playerInfo;
      };
      DicePlayerMgr.prototype.showResult = function(pos, settle, isSelf) {
        var self = this;
        BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Lobby, function(bundle) {
          bundle.load("gameCommon/prefabs/score", cc.Prefab, function(err, prefab) {
            if (err) return;
            var node = cc.instantiate(prefab);
            isSelf ? self.selfNode.addChild(node, GameConst_1.Z_ORDER.Z_DIALOG) : self.playerNode[pos - 1].addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
            var script = node.getComponent(Score_1.default);
            script && script.setScore(settle);
          });
        });
      };
      DicePlayerMgr.prototype.showBigWinner = function(data) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("bigWinner");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Lobby, function(bundle) {
          bundle.load("gameCommon/prefabs/bigWinner", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node);
              var script = node.getComponent(BigWinner_1.default);
              script && script.show(data);
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], DicePlayerMgr.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], DicePlayerMgr.prototype, "selfNode", void 0);
      __decorate([ property(cc.Node) ], DicePlayerMgr.prototype, "playerList", void 0);
      __decorate([ property(cc.Prefab) ], DicePlayerMgr.prototype, "playerListPrefab", void 0);
      __decorate([ property(cc.Node) ], DicePlayerMgr.prototype, "banker", void 0);
      __decorate([ property(cc.Prefab) ], DicePlayerMgr.prototype, "playerItem", void 0);
      DicePlayerMgr = __decorate([ ccclass ], DicePlayerMgr);
      return DicePlayerMgr;
    }(cc.Component);
    exports.default = DicePlayerMgr;
    cc._RF.pop();
  }, {
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameCommon/BigWinner": void 0,
    "../../../scripts/games/gameCommon/PlayerList": void 0,
    "../../../scripts/games/gameCommon/Score": void 0,
    "./DiceMsgId": "DiceMsgId",
    "./DicePlayer": "DicePlayer"
  } ],
  DicePlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8645exSuWhOO6OPoA/JhwZS", "DicePlayer");
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
    var DicePlayer = function(_super) {
      __extends(DicePlayer, _super);
      function DicePlayer() {
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
      DicePlayer.prototype.getPlayerInfo = function() {
        return this.info;
      };
      DicePlayer.prototype.setPlayerInfo = function(data) {
        data.player_id && (this.info.player_id = data.player_id);
        if (data.nick) {
          this.info.nick = data.nick;
          this.nickName.string = VV_1.vv.tools.transformNickName(this.info.nick);
        }
        data.facelook && (this.info.facelook = data.facelook);
        this.head.showNetView(this.info.facelook);
      };
      __decorate([ property(cc.Label) ], DicePlayer.prototype, "nickName", void 0);
      __decorate([ property(NetPic_1.default) ], DicePlayer.prototype, "head", void 0);
      DicePlayer = __decorate([ ccclass ], DicePlayer);
      return DicePlayer;
    }(cc.Component);
    exports.default = DicePlayer;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  DiceRecordItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00517hj0BZKfIpjLs19784T", "DiceRecordItem");
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
    var DiceRecordItem = function(_super) {
      __extends(DiceRecordItem, _super);
      function DiceRecordItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.diceA = null;
        _this.diceB = null;
        _this.value = null;
        _this.result = null;
        _this.valueTxt = null;
        _this.resultTxt = null;
        _this.latestBg = null;
        _this.diceSpArr = [];
        _this.goldDiceSpArr = [];
        _this.goldCircleSp = null;
        return _this;
      }
      DiceRecordItem.prototype.bindData = function(data, isLatest) {
        isLatest && (this.latestBg.active = true);
        if (data.dice) {
          data.dice[0] && (data.double ? this.diceA.spriteFrame = this.goldDiceSpArr[data.dice[0] - 1] : this.diceA.spriteFrame = this.diceSpArr[data.dice[0] - 1]);
          data.dice[1] && (data.double ? this.diceB.spriteFrame = this.goldDiceSpArr[data.dice[1] - 1] : this.diceB.spriteFrame = this.diceSpArr[data.dice[1] - 1]);
        }
        data.total && (this.valueTxt.string = "" + data.total);
        if (data.updown) {
          var txtColor = new cc.Color(255, 255, 255, 255);
          var goldColor = new cc.Color(116, 20, 12, 255);
          var blackColor = new cc.Color(36, 36, 36, 255);
          "U" == data.updown ? txtColor = new cc.Color(209, 43, 39, 255) : "T" == data.updown ? txtColor = new cc.Color(88, 157, 97, 255) : "D" == data.updown && (txtColor = new cc.Color(44, 90, 195, 255));
          this.resultTxt.string = "" + data.updown;
          if (data.double) {
            this.valueTxt.node.color = goldColor;
            this.resultTxt.node.color = goldColor;
            this.value.spriteFrame = this.goldCircleSp;
            this.result.spriteFrame = this.goldCircleSp;
          } else {
            this.result.node.color = txtColor;
            this.value.node.color = blackColor;
          }
        }
      };
      __decorate([ property(cc.Sprite) ], DiceRecordItem.prototype, "diceA", void 0);
      __decorate([ property(cc.Sprite) ], DiceRecordItem.prototype, "diceB", void 0);
      __decorate([ property(cc.Sprite) ], DiceRecordItem.prototype, "value", void 0);
      __decorate([ property(cc.Sprite) ], DiceRecordItem.prototype, "result", void 0);
      __decorate([ property(cc.Label) ], DiceRecordItem.prototype, "valueTxt", void 0);
      __decorate([ property(cc.Label) ], DiceRecordItem.prototype, "resultTxt", void 0);
      __decorate([ property(cc.Node) ], DiceRecordItem.prototype, "latestBg", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], DiceRecordItem.prototype, "diceSpArr", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], DiceRecordItem.prototype, "goldDiceSpArr", void 0);
      __decorate([ property(cc.SpriteFrame) ], DiceRecordItem.prototype, "goldCircleSp", void 0);
      DiceRecordItem = __decorate([ ccclass ], DiceRecordItem);
      return DiceRecordItem;
    }(cc.Component);
    exports.default = DiceRecordItem;
    cc._RF.pop();
  }, {} ],
  DiceRecordList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35ffayiUd9MmLpC/bJ7Gl3E", "DiceRecordList");
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
    var DiceRecordList = function(_super) {
      __extends(DiceRecordList, _super);
      function DiceRecordList() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.content = null;
        _this.itemPrefab = null;
        return _this;
      }
      DiceRecordList.prototype.setData = function(data) {
        this.content.removeAllChildren();
        for (var i = 0; i < data.length; i++) {
          var item = cc.instantiate(this.itemPrefab);
          this.content.addChild(item);
          item.getComponent("DiceRecordItem").bindData(data[i], i == data.length - 1);
        }
      };
      __decorate([ property(cc.ScrollView) ], DiceRecordList.prototype, "scrollView", void 0);
      __decorate([ property(cc.Node) ], DiceRecordList.prototype, "content", void 0);
      __decorate([ property(cc.Prefab) ], DiceRecordList.prototype, "itemPrefab", void 0);
      DiceRecordList = __decorate([ ccclass ], DiceRecordList);
      return DiceRecordList;
    }(cc.Component);
    exports.default = DiceRecordList;
    cc._RF.pop();
  }, {} ],
  DiceTableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f564d2UmyhIAYCyq7gDvdFO", "DiceTableMgr");
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
    var DiceGameConfig_1 = require("./DiceGameConfig");
    var DiceGameMgr_1 = require("./DiceGameMgr");
    var DiceMsgId_1 = require("./DiceMsgId");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_TableMgr = function(_super) {
      __extends(TP_TableMgr, _super);
      function TP_TableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tableInfo = null;
        _this.croupier = null;
        _this.countTime = null;
        _this.tableState = null;
        return _this;
      }
      TP_TableMgr.prototype.initTable = function(data) {
        data.state && this.updateTableState(data.state, data.state_time || 0);
      };
      TP_TableMgr.prototype.start = function() {
        VV_1.vv.gameMgr.launch();
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_ROOM_ENTER, {
          result: "suc"
        });
        VV_1.vv.analysis.startTimers.betgameEnter = Date.now();
      };
      TP_TableMgr.prototype.onEnable = function() {
        VV_1.vv.gameMgr = new DiceGameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
      };
      TP_TableMgr.prototype.reset = function() {};
      TP_TableMgr.prototype.btnCB = function(event, customData) {
        "btn_back" == customData ? VV_1.vv.gameMgr.showMenuUI() : "btn_addcash" == customData ? PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash) : "btn_rule" == customData ? VV_1.vv.uiMgr.showGameRule() : "btn_exit" == customData && this.exit();
      };
      TP_TableMgr.prototype.exit = function() {
        var isBeting = false;
        if (VV_1.vv.gameMgr) for (var key in VV_1.vv.gameMgr.BetMgr.curBetData) VV_1.vv.gameMgr.BetMgr.curBetData[key] > 0 && (isBeting = true);
        if (isBeting) {
          VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitSettle"));
          return;
        }
        VV_1.vv.netMgr.send(DiceMsgId_1.DICE_MSG_REQ_ID.MSG_LEAVETABLE_REQ, {});
      };
      TP_TableMgr.prototype.stateUpdate = function(dt) {
        if (!this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active) return;
        this.countTime -= dt;
        this.setState(Math.round(this.countTime));
        this.countTime <= 0 && this.stopTableState();
      };
      TP_TableMgr.prototype.getTipsText = function(state) {
        return 1 == state ? I18n_1.I18n.getText("up7Down.scene.tips1") : 2 == state ? I18n_1.I18n.getText("up7Down.scene.tips2") : 3 == state ? I18n_1.I18n.getText("baccarat.scene.tips2") : 4 == state ? I18n_1.I18n.getText("baccarat.scene.tips4") : "";
      };
      TP_TableMgr.prototype.updateTableState = function(state, state_time) {
        if (state) {
          this.tableState = state;
          this.tableInfo.getChildByName("tableState").getChildByName("txtTip").getComponent(cc.Label).string = this.getTipsText(state);
          if (state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_DEALING || state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_RESULT) return;
        }
        this.stopTableState();
        this.countTime = state_time;
        this.setState(this.countTime);
        (this.countTime > 0 && state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_BET || state == DiceGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) && (this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active = true);
      };
      TP_TableMgr.prototype.setState = function(dt) {
        if (dt >= 0) {
          this.tableInfo.getChildByName("tableState").active = true;
          this.tableInfo.getChildByName("tableState").getChildByName("txtTime").getComponent(cc.Label).string = "  " + dt + " s ";
        }
      };
      TP_TableMgr.prototype.stopTableState = function() {
        this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active = false;
        this.countTime = null;
      };
      TP_TableMgr.prototype.update = function(dt) {
        this.stateUpdate(dt);
      };
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "tableInfo", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "croupier", void 0);
      TP_TableMgr = __decorate([ ccclass ], TP_TableMgr);
      return TP_TableMgr;
    }(cc.Component);
    exports.default = TP_TableMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "./DiceGameConfig": "DiceGameConfig",
    "./DiceGameMgr": "DiceGameMgr",
    "./DiceMsgId": "DiceMsgId"
  } ]
}, {}, [ "DiceBetMgr", "DiceBetTip", "DiceDealingMgr", "DiceDoubleTip", "DiceGameConfig", "DiceGameMgr", "DiceMsgId", "DicePlayer", "DicePlayerMgr", "DiceRecordItem", "DiceRecordList", "DiceTableMgr" ]);