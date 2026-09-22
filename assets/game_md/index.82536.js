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
  JhandiMundaBetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d156O/agxLjqOZLUzj59PU", "JhandiMundaBetMgr");
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
    var JhandiMundaGameConfig_1 = require("./JhandiMundaGameConfig");
    var JhandiMundaEvents_1 = require("./JhandiMundaEvents");
    var JhandiMundaRecordItem_1 = require("./JhandiMundaRecordItem");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var Chip_1 = require("../../../scripts/games/gameCommon/Chip");
    var ChipBtnItem_1 = require("../../../scripts/games/gameCommon/ChipBtnItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JhandiMundaBetMgr = function(_super) {
      __extends(JhandiMundaBetMgr, _super);
      function JhandiMundaBetMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chipLayout = null;
        _this.betPoolNodes = [];
        _this.chipBtnItem = null;
        _this.chipItem = null;
        _this.recordItemtPrefab = null;
        _this.winAnimPrefab = null;
        _this.btnRepeat = null;
        _this.btnDouble = null;
        _this.poolSize = 10;
        _this.chipPool = null;
        _this.chipArr = [];
        _this.chipNodes = [];
        _this.curChipIndex = 0;
        _this.playerNodeOrignPos = [];
        _this.lastBetData = null;
        _this.curBetData = {};
        _this.curState = null;
        return _this;
      }
      JhandiMundaBetMgr.prototype.start = function() {
        this.initCurBetData();
        this.initChipNodePool();
        this.storagePlayersOrignPos();
        VV_1.vv.analysis.startTimers.betgamecomplete = null;
      };
      JhandiMundaBetMgr.prototype.initCurBetData = function() {
        for (var i = 1; i <= this.betPoolNodes.length; i++) this.curBetData[i.toString()] = 0;
      };
      JhandiMundaBetMgr.prototype.reset = function() {
        this.lastBetData = VV_1.vv.uiMgr.deepClone(this.curBetData);
        VV_1.vv.logger.log("===\u4e0a\u4e00\u628a\u4e0b\u6ce8\u8bb0\u5f55====", this.lastBetData);
        for (var key in this.curBetData) this.curBetData[key] = 0;
      };
      JhandiMundaBetMgr.prototype.storagePlayersOrignPos = function() {
        var gameMgr = VV_1.vv.gameMgr;
        for (var i = 0; i < gameMgr.PlayerMgr.playerNode.length; i++) gameMgr.PlayerMgr.playerNode[i] && this.playerNodeOrignPos.push(gameMgr.PlayerMgr.playerNode[i].position);
      };
      JhandiMundaBetMgr.prototype.destoryChips = function() {
        for (var i = 0; i < this.chipNodes.length; i++) this.chipNodes[i] && this.flyChipFromAtoB(this.chipNodes[i], this.chipNodes[i], VV_1.vv.gameMgr.TableMgr.croupier);
        this.chipNodes.length > 0 && VV_1.vv.audioMgr.playSound("recycleCoin");
        this.chipNodes.splice(0);
      };
      JhandiMundaBetMgr.prototype.poolBtnCB = function(event, customData) {
        if (parseInt(VV_1.vv.userMgr.coins) < 50 && false) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is under \u20b950, add cash and continue to play", false, true);
          return;
        }
        if (!VV_1.vv.userMgr.has_recharged && false) {
          VV_1.vv.uiMgr.highPlayerAlertTips();
          return;
        }
        var index = Number(customData);
        var gameMgr = VV_1.vv.gameMgr;
        var betNum = this.chipArr[this.curChipIndex] * VV_1.vv.global.exchange_rate;
        Number(VV_1.vv.userMgr.coins) < this.chipArr[this.curChipIndex] && (betNum = Number(VV_1.vv.userMgr.coins) * VV_1.vv.global.exchange_rate);
        index && betNum > 0 ? VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaPlayerOptionRequest, {
          option: JhandiMundaGameConfig_1.OPTION_TYPE.BET,
          bet: betNum,
          side: index
        }) : VV_1.vv.uiMgr.showBalanceNotEnoughTips();
      };
      JhandiMundaBetMgr.prototype.createChip = function(parentNode, pos) {
        var chip = null;
        chip = this.chipPool.size() > 0 ? this.chipPool.get() : cc.instantiate(this.chipItem);
        chip.parent = parentNode;
        chip.getComponent(Chip_1.default).init(pos);
        return chip;
      };
      JhandiMundaBetMgr.prototype.initChipNodePool = function() {
        this.chipPool = new cc.NodePool();
        for (var i = 0; i < this.poolSize; i++) {
          var chip = cc.instantiate(this.chipItem);
          this.chipPool.put(chip);
        }
      };
      JhandiMundaBetMgr.prototype.recyleChip = function(_chip) {
        this.chipPool.put(_chip);
      };
      JhandiMundaBetMgr.prototype.flyChipFromAtoB = function(node, nodeA, nodeB) {
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
      JhandiMundaBetMgr.prototype.flyChipToPlayer = function(pos, winning) {
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = gameMgr.PlayerMgr.banker.position;
        var ePos = gameMgr.PlayerMgr.playerNode[pos - 1].position;
        var eNode = gameMgr.PlayerMgr.playerNode[pos - 1];
        this.flyChip(winning, sPos, ePos, eNode, true);
      };
      JhandiMundaBetMgr.prototype.flyChipToPool = function(poorIndex, seatIndex, betNum) {
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
      JhandiMundaBetMgr.prototype.recoverChips = function(poolIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        for (var i = 0; i < this.getChipNumByBet(betNum); i++) {
          var pos = this.getRandomPosInRect(this.betPoolNodes[poolIndex - 1].position, this.betPoolNodes[poolIndex - 1].width / 2, this.betPoolNodes[poolIndex - 1].height / 2);
          var chip = this.createChip(this.node, pos);
          this.chipNodes.push(chip);
        }
      };
      JhandiMundaBetMgr.prototype.playerShake = function(tNode, seatIndex) {
        var _this = this;
        cc.tween(tNode).to(.1, {
          position: cc.v3(tNode.position.x + 5, tNode.position.y, 0)
        }).to(.1, {
          position: cc.v3(tNode.position.x - 5, tNode.position.y, 0)
        }).call(function() {
          tNode.position = _this.playerNodeOrignPos[seatIndex - 1];
        }).start();
      };
      JhandiMundaBetMgr.prototype.flyChip = function(betNum, sPos, ePos, endNode, isTemp) {
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
      JhandiMundaBetMgr.prototype.updateBetBtn = function() {
        var coin = parseInt(VV_1.vv.userMgr.coins);
        coin >= 0 && coin <= 2e3 ? this.chipArr = JhandiMundaGameConfig_1.GameConfig.BET_COIN.level1 : coin > 2e3 && coin <= 5e3 ? this.chipArr = JhandiMundaGameConfig_1.GameConfig.BET_COIN.level2 : coin > 5e3 && coin <= 1e4 ? this.chipArr = JhandiMundaGameConfig_1.GameConfig.BET_COIN.level3 : coin > 1e4 && coin <= 2e4 ? this.chipArr = JhandiMundaGameConfig_1.GameConfig.BET_COIN.level4 : coin > 2e4 && (this.chipArr = JhandiMundaGameConfig_1.GameConfig.BET_COIN.level5);
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
      JhandiMundaBetMgr.prototype.updateChipState = function() {
        for (var i = 0; i < this.chipLayout.childrenCount; i++) i == this.curChipIndex ? this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(true) : this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(false);
      };
      JhandiMundaBetMgr.prototype.getChipNumByBet = function(betNum) {
        var chipNum = 1;
        betNum > 0 && betNum <= 1 ? chipNum = 1 : betNum > 1 && betNum <= 10 ? chipNum = 2 : betNum > 10 && betNum <= 100 ? chipNum = 5 : betNum > 100 && betNum <= 1e3 ? chipNum = 10 : betNum > 1e3 && betNum <= 2e3 ? chipNum = 20 : betNum > 2e3 && (chipNum = 30);
        return chipNum;
      };
      JhandiMundaBetMgr.prototype.getRandomPosInRect = function(point, width, height) {
        var minX = point.x - width / 2;
        var maxX = point.x + width / 2;
        var x = Math.random() * (maxX - minX + 1) + minX;
        var minY = point.y - height / 2;
        var maxY = point.y + height / 2;
        var y = Math.random() * (maxY - minY + 1) + minY;
        return new cc.Vec3(x, y);
      };
      JhandiMundaBetMgr.prototype.showResult = function(data) {
        var _this = this;
        var result = [];
        data.forEach(function(item) {
          data.indexOf(item) !== data.lastIndexOf(item) && -1 == result.indexOf(item) && result.push(item);
        });
        var _loop_3 = function(i) {
          this_3.betPoolNodes[result[i] - 1].getChildByName("BingoImg").active = true;
          cc.tween(this_3.betPoolNodes[result[i] - 1].getChildByName("BingoImg")).delay(3.5).call(function() {
            _this.betPoolNodes[result[i] - 1].getChildByName("BingoImg").active = false;
          }).start();
        };
        var this_3 = this;
        for (var i = 0; i < result.length; i++) _loop_3(i);
      };
      JhandiMundaBetMgr.prototype.showRecordList = function(recordData) {
        for (var i = 0; i < this.betPoolNodes.length; i++) if (this.betPoolNodes[i].getChildByName("RecordNode")) for (var j = 0; j < 9; j++) if (void 0 != recordData[i + 1][j]) if (this.betPoolNodes[i].getChildByName("RecordNode").children[j]) this.betPoolNodes[i].getChildByName("RecordNode").children[j].getComponent(JhandiMundaRecordItem_1.default).bindData(recordData[i + 1][j]); else {
          var item = cc.instantiate(this.recordItemtPrefab);
          this.betPoolNodes[i].getChildByName("RecordNode").addChild(item);
          item.getComponent(JhandiMundaRecordItem_1.default).bindData(recordData[i + 1][j]);
        }
      };
      JhandiMundaBetMgr.prototype.updatePoolState = function(state) {
        this.curState = state;
        if (state == JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) for (var k = 0; k < this.betPoolNodes.length; k++) {
          this.betPoolNodes[k].getChildByName("MyBetLabel").getComponent(cc.Label).string = "0";
          this.betPoolNodes[k].getChildByName("TotalBetLabel").getComponent(cc.Label).string = "0";
        }
        this.updateBtnDoubleState();
        this.updateBtnRepeatState();
        if (state == JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
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
      };
      JhandiMundaBetMgr.prototype.showTotalBetNum = function(pool, total) {
        for (var i = 0; i < this.betPoolNodes.length; i++) total && (this.betPoolNodes[pool - 1].getChildByName("TotalBetLabel").getComponent(cc.Label).string = total.toString());
      };
      JhandiMundaBetMgr.prototype.showMyBetNum = function(pool, num) {
        for (var i = 0; i < this.betPoolNodes.length; i++) num && (this.betPoolNodes[pool - 1].getChildByName("MyBetLabel").getComponent(cc.Label).string = num.toString());
        for (var key in this.curBetData) parseInt(key) == pool && (this.curBetData[key] = num);
        VV_1.vv.logger.log("==\u5f53\u524d\u4e0b\u6ce8\u91d1\u989d====", this.curBetData);
        this.updateBtnDoubleState();
        this.updateBtnRepeatState();
      };
      JhandiMundaBetMgr.prototype.showBetTip = function(state) {};
      JhandiMundaBetMgr.prototype._getLastTotalBetNum = function() {
        var lastTotalBtnNum = 0;
        if (null != this.lastBetData) for (var key in this.lastBetData) lastTotalBtnNum = this.lastBetData[key] + lastTotalBtnNum;
        return lastTotalBtnNum;
      };
      JhandiMundaBetMgr.prototype._getCurrentTotalBetNum = function() {
        var curTotalBtnNum = 0;
        if (null != this.curBetData) for (var key in this.curBetData) curTotalBtnNum = this.curBetData[key] + curTotalBtnNum;
        return curTotalBtnNum;
      };
      JhandiMundaBetMgr.prototype.onBtnRepeatCallback = function() {
        if (this.curState != JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_BET) return;
        if (this._getLastTotalBetNum() > Number(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.betAddCashAlertTips();
          return;
        }
        if (null != this.lastBetData) for (var key in this.lastBetData) this.lastBetData[key] > 0 && VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaPlayerOptionRequest, {
          option: JhandiMundaGameConfig_1.OPTION_TYPE.BET,
          bet: this.lastBetData[key] * VV_1.vv.global.exchange_rate,
          side: Number(key)
        });
      };
      JhandiMundaBetMgr.prototype.onBtnDoubleCallback = function() {
        if (this.curState != JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_BET) return;
        if (this._getCurrentTotalBetNum() > Number(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.betAddCashAlertTips();
          return;
        }
        if (null != this.curBetData) for (var key in this.curBetData) this.curBetData[key] > 0 && VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaPlayerOptionRequest, {
          option: JhandiMundaGameConfig_1.OPTION_TYPE.BET,
          bet: this.curBetData[key] * VV_1.vv.global.exchange_rate,
          side: Number(key)
        });
      };
      JhandiMundaBetMgr.prototype.updateBtnRepeatState = function() {
        this._getLastTotalBetNum() > 0 && 0 == this._getCurrentTotalBetNum() ? this.btnRepeat.interactable = true : this.btnRepeat.interactable = false;
      };
      JhandiMundaBetMgr.prototype.updateBtnDoubleState = function() {};
      JhandiMundaBetMgr.prototype.isBetCurRound = function() {
        for (var key in this.curBetData) if (Object.prototype.hasOwnProperty.call(this.curBetData, key)) {
          var value = this.curBetData[key];
          if (value > 0) return true;
        }
        return false;
      };
      __decorate([ property(cc.Node) ], JhandiMundaBetMgr.prototype, "chipLayout", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaBetMgr.prototype, "betPoolNodes", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaBetMgr.prototype, "chipBtnItem", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaBetMgr.prototype, "chipItem", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaBetMgr.prototype, "recordItemtPrefab", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaBetMgr.prototype, "winAnimPrefab", void 0);
      __decorate([ property({
        type: cc.Button,
        tooltip: "\u91cd\u590d\u4e0b\u6ce8\u6309\u94ae"
      }) ], JhandiMundaBetMgr.prototype, "btnRepeat", void 0);
      __decorate([ property({
        type: cc.Button,
        tooltip: "\u7ffb\u500d\u4e0b\u6ce8\u6309\u94ae"
      }) ], JhandiMundaBetMgr.prototype, "btnDouble", void 0);
      JhandiMundaBetMgr = __decorate([ ccclass ], JhandiMundaBetMgr);
      return JhandiMundaBetMgr;
    }(cc.Component);
    exports.default = JhandiMundaBetMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameCommon/Chip": void 0,
    "../../../scripts/games/gameCommon/ChipBtnItem": void 0,
    "./JhandiMundaEvents": "JhandiMundaEvents",
    "./JhandiMundaGameConfig": "JhandiMundaGameConfig",
    "./JhandiMundaRecordItem": "JhandiMundaRecordItem"
  } ],
  JhandiMundaDicePrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e11aiQ7qhIZbGdSiOy3Z0g", "JhandiMundaDicePrefab");
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
    var JhandiMundaDicePrefab = function(_super) {
      __extends(JhandiMundaDicePrefab, _super);
      function JhandiMundaDicePrefab() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.diceSriteFrames = [];
        _this.diceSp = null;
        return _this;
      }
      JhandiMundaDicePrefab.prototype.updateTexture = function(index) {
        this.diceSriteFrames[index - 1] && (this.diceSp.spriteFrame = this.diceSriteFrames[index - 1]);
      };
      __decorate([ property(cc.SpriteFrame) ], JhandiMundaDicePrefab.prototype, "diceSriteFrames", void 0);
      __decorate([ property(cc.Sprite) ], JhandiMundaDicePrefab.prototype, "diceSp", void 0);
      JhandiMundaDicePrefab = __decorate([ ccclass ], JhandiMundaDicePrefab);
      return JhandiMundaDicePrefab;
    }(cc.Component);
    exports.default = JhandiMundaDicePrefab;
    cc._RF.pop();
  }, {} ],
  JhandiMundaEvents: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c921fpDuqFN+4zB4++u8qS9", "JhandiMundaEvents");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JhandiMundaBroadCast = exports.JhandiMundaS2C = exports.JhandiMundaC2S = void 0;
    var JhandiMundaC2S;
    (function(JhandiMundaC2S) {
      JhandiMundaC2S["MundaJoinTableRequest"] = "MundaJoinTableRequest";
      JhandiMundaC2S["MundaLeaveTableRequest"] = "MundaLeaveTableRequest";
      JhandiMundaC2S["MundaPlayerOptionRequest"] = "MundaPlayerOptionRequest";
      JhandiMundaC2S["MundaPlayerListRequest"] = "MundaPlayerListRequest";
      JhandiMundaC2S["MundaRecentRecordRequest"] = "MundaRecentRecordRequest";
    })(JhandiMundaC2S = exports.JhandiMundaC2S || (exports.JhandiMundaC2S = {}));
    var JhandiMundaS2C;
    (function(JhandiMundaS2C) {
      JhandiMundaS2C["MundaJoinTableResponse"] = "MundaJoinTableResponse";
      JhandiMundaS2C["MundaLeaveTableResponse"] = "MundaLeaveTableResponse";
      JhandiMundaS2C["MundaPlayerOptionResponse"] = "MundaPlayerOptionResponse";
      JhandiMundaS2C["MundaPlayerListResponse"] = "MundaPlayerListResponse";
      JhandiMundaS2C["MundaRecentRecordResponse"] = "MundaRecentRecordResponse";
    })(JhandiMundaS2C = exports.JhandiMundaS2C || (exports.JhandiMundaS2C = {}));
    var JhandiMundaBroadCast;
    (function(JhandiMundaBroadCast) {
      JhandiMundaBroadCast["MundaTableStateBroadCast"] = "MundaTableStateBroadCast";
      JhandiMundaBroadCast["MundaTableDealingBroadCast"] = "MundaTableDealingBroadCast";
      JhandiMundaBroadCast["MundaPlayerOptionBroadCast"] = "MundaPlayerOptionBroadCast";
      JhandiMundaBroadCast["MundaPlayerJoinTableBroadCast"] = "MundaPlayerJoinTableBroadCast";
      JhandiMundaBroadCast["MundaResultBroadCast"] = "MundaResultBroadCast";
      JhandiMundaBroadCast["MundaPlayerLeaveTableBroadCast"] = "MundaPlayerLeaveTableBroadCast";
      JhandiMundaBroadCast["MundaBigWinnerBroadcast"] = "MundaBigWinnerBroadcast";
    })(JhandiMundaBroadCast = exports.JhandiMundaBroadCast || (exports.JhandiMundaBroadCast = {}));
    cc._RF.pop();
  }, {} ],
  JhandiMundaGameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f7e8YXGxpKO62nLI9xPmPm", "JhandiMundaGameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameConfig = exports.OPTION_TYPE = exports.TABLE_STATE = void 0;
    var TABLE_STATE;
    (function(TABLE_STATE) {
      TABLE_STATE[TABLE_STATE["TABLE_STATE_WAITING"] = 1] = "TABLE_STATE_WAITING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_DEALING"] = 2] = "TABLE_STATE_DEALING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_BET"] = 3] = "TABLE_STATE_BET";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_RESULT"] = 4] = "TABLE_STATE_RESULT";
    })(TABLE_STATE = exports.TABLE_STATE || (exports.TABLE_STATE = {}));
    var OPTION_TYPE;
    (function(OPTION_TYPE) {
      OPTION_TYPE[OPTION_TYPE["BET"] = 1] = "BET";
    })(OPTION_TYPE = exports.OPTION_TYPE || (exports.OPTION_TYPE = {}));
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
  JhandiMundaGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d6feuyS99FjJDjDxw0B5Le", "JhandiMundaGameMgr");
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
    var JhandiMundaPanelConfigs_1 = require("./JhandiMundaPanelConfigs");
    var JhandiMundaEvents_1 = require("./JhandiMundaEvents");
    var JhandiMundaBetMgr_1 = require("./JhandiMundaBetMgr");
    var JhandiMundaGameConfig_1 = require("./JhandiMundaGameConfig");
    var JhandiMundaPlayerMgr_1 = require("./JhandiMundaPlayerMgr");
    var JhandiMundaTableMgr_1 = require("./JhandiMundaTableMgr");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var GameMgrBase_1 = require("../../../scripts/games/gameBase/GameMgrBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JhandiMundaGameMgr = function(_super) {
      __extends(JhandiMundaGameMgr, _super);
      function JhandiMundaGameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sgame_QVERt2 = 7205;
        _this._sgame_vRhRlf = 5131;
        _this.TableMgr = null;
        _this.PlayerMgr = null;
        _this.BetMgr = null;
        _this.tableInfo = null;
        _this.exitTime = null;
        _this.bigWinnerData = null;
        _this._curChip = 20;
        return _this;
      }
      JhandiMundaGameMgr.prototype._sgame_L4eH5r = function() {
        var a = "A8nmQ";
        var b = 5578;
        return a.length + b;
      };
      Object.defineProperty(JhandiMundaGameMgr.prototype, "curChip", {
        get: function() {
          return this._curChip;
        },
        enumerable: false,
        configurable: true
      });
      JhandiMundaGameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.JhandiMunda,
                  room_id: 999999
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaJoinTableRequest, {}); else {
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
      JhandiMundaGameMgr.prototype.addNetListener = function() {
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaJoinTableResponse, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaLeaveTableResponse, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaPlayerOptionResponse, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaPlayerListResponse, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaRecentRecordResponse, this.OnRecordResponse, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaTableStateBroadCast, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaPlayerOptionBroadCast, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaPlayerJoinTableBroadCast, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaTableDealingBroadCast, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaResultBroadCast, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaPlayerLeaveTableBroadCast, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.addHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaBigWinnerBroadcast, this.OnBigWinnerBroadCast, this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_HIDE, this.onHide, this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_SHOW, this.onShow, this);
      };
      JhandiMundaGameMgr.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaJoinTableResponse, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaLeaveTableResponse, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaPlayerOptionResponse, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaPlayerListResponse, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaS2C.MundaRecentRecordResponse, this.OnRecordResponse, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaTableStateBroadCast, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaPlayerOptionBroadCast, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaPlayerJoinTableBroadCast, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaTableDealingBroadCast, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaResultBroadCast, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaPlayerLeaveTableBroadCast, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.removeHandler(JhandiMundaEvents_1.JhandiMundaBroadCast.MundaBigWinnerBroadcast, this.OnBigWinnerBroadCast, this);
        VV_1.vv.eventMgr.offTarget(this);
      };
      JhandiMundaGameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      JhandiMundaGameMgr.prototype.onHide = function() {
        VV_1.vv.logger.log("GAME_EVENT_HIDE");
        this.exitTime = new Date().getTime();
      };
      JhandiMundaGameMgr.prototype.onShow = function() {
        var subTime = (new Date().getTime() - this.exitTime) / 1e3;
        VV_1.vv.logger.log("GAME_EVENT_SHOW   ", subTime);
        if (subTime >= 20) {
          console.warn("!!!!! exit exceed 20 seconds !!!!!");
          VV_1.vv.netMgr.closeNet();
        }
      };
      JhandiMundaGameMgr.prototype.OnPlayerLeaveBroadCast = function(data) {
        var _this = this;
        data.player_id == VV_1.vv.userMgr.player_id ? 1 == data.status ? VV_1.vv.uiMgr.noOperatingAlertTips(function() {
          _this.exitTable();
        }) : 2 == data.status && this.exitTable() : this.PlayerMgr.removePlayer(data.player_id);
      };
      JhandiMundaGameMgr.prototype.OnPlayerListResponse = function(data) {
        if (data.player) {
          var playerInfo = data.player;
          playerInfo && this.PlayerMgr.showPlayerList(playerInfo);
        }
      };
      JhandiMundaGameMgr.prototype.OnBigWinnerBroadCast = function(data) {
        data.player_list && data.player_list.length > 0 && (this.bigWinnerData = VV_1.vv.uiMgr.deepClone(data.player_list));
      };
      JhandiMundaGameMgr.prototype.OnRecordResponse = function(data) {
        data.info && this.BetMgr.showRecordList(data.info);
      };
      JhandiMundaGameMgr.prototype.OnJoinTableBroadCast = function(data) {
        data.player && this.PlayerMgr.updatePlayerinfo(data.player);
      };
      JhandiMundaGameMgr.prototype.OnJoinTableResponse = function(data) {
        if (data.table_info) {
          VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaRecentRecordRequest, {});
          this.tableInfo = VV_1.vv.uiMgr.deepClone(data.table_info);
          this.TableMgr.initTable(this.tableInfo);
          this.BetMgr.updatePoolState(this.tableInfo.state);
          this.PlayerMgr.initPlayer(this.tableInfo.players);
          this.PlayerMgr.initSelfInfo();
          if (this.tableInfo.tabledata && this.tableInfo.tabledata.betinfo) {
            if (this.tableInfo.state == JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_RESULT) return;
            for (var key in this.tableInfo.tabledata.betinfo) if (this.tableInfo.tabledata.betinfo[key] > 0) {
              var totalBet = this.tableInfo.tabledata.betinfo[key] / VV_1.vv.global.exchange_rate;
              1 != Number(key) && 2 != Number(key) && 7 != Number(key) || this.BetMgr.recoverChips(Number(key), totalBet);
              this.BetMgr.showTotalBetNum(Number(key), totalBet);
            }
          }
        }
      };
      JhandiMundaGameMgr.prototype.OnLeaveTableResponse = function(data) {
        1 == data.status && this.exitTable();
      };
      JhandiMundaGameMgr.prototype.OnPlayerOptionResponse = function(data) {
        if (1 == data.status) {
          if (data.Pool) for (var key in data.Pool) data.Pool[key] > 0 && this.BetMgr.showMyBetNum(Number(key), data.Pool[key] / VV_1.vv.global.exchange_rate);
        } else 2 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitNextBet")) : 3 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.rightBetPool")) : 4 == data.status ? VV_1.vv.uiMgr.betAddCashAlertTips() : 5 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.betMaxLimit")) : VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitingStart"));
      };
      JhandiMundaGameMgr.prototype.OnPlayerOptionBroadCast = function(data) {
        if (data) {
          var pos = this.PlayerMgr.getLogicPosByPlayerID(data.player_id);
          data.player_id == VV_1.vv.userMgr.player_id && (pos = -1);
          if (data.chip) {
            var betChip = data.chip / VV_1.vv.global.exchange_rate;
            var betTotal = data.bettotal / VV_1.vv.global.exchange_rate;
            this.BetMgr.flyChipToPool(data.betpool, pos, betChip);
            this.BetMgr.showTotalBetNum(data.betpool, betTotal);
          }
        }
      };
      JhandiMundaGameMgr.prototype.OnTableStateBroadCast = function(data) {
        if (data) {
          this.TableMgr.updateTableState(data.state, data.state_time);
          this.BetMgr.updatePoolState(data.state);
        }
      };
      JhandiMundaGameMgr.prototype.OnShufferBroadCast = function(data) {
        data.munda_list && VV_1.vv.panelRouter.show({
          panel: JhandiMundaPanelConfigs_1.JhandiMundaPanelConfigs.shakeDicePanel,
          data: data.munda_list
        });
      };
      JhandiMundaGameMgr.prototype.OnResultBroadCast = function(data) {
        var _this = this;
        var selfWin = 0;
        var canvas = cc.find("Canvas");
        if (null != canvas && data) {
          cc.tween(canvas).call(function() {
            data.result && _this.BetMgr.showResult(data.result);
          }).delay(3).call(function() {
            _this.BetMgr.destoryChips();
          }).delay(1).call(function() {
            if (data.resultplayer) for (var i = 0; i < data.resultplayer.length; i++) {
              var pos = _this.PlayerMgr.getLogicPosByPlayerID(data.resultplayer[i].player_id);
              var settle = data.resultplayer[i].settle / VV_1.vv.global.exchange_rate || 0;
              999 != pos && settle > 0 && _this.BetMgr.flyChipToPlayer(pos, settle);
            }
          }).delay(1).call(function() {
            if (data.resultplayer) for (var i = 0; i < data.resultplayer.length; i++) {
              var pos = _this.PlayerMgr.getLogicPosByPlayerID(data.resultplayer[i].player_id);
              var settle = data.resultplayer[i].settle / VV_1.vv.global.exchange_rate || 0;
              if (data.resultplayer[i].player_id == VV_1.vv.userMgr.player_id) {
                _this.PlayerMgr.showResult(pos, settle, true);
                settle >= 1e4 && (selfWin = settle);
              }
              pos && 999 != pos && _this.PlayerMgr.showResult(pos, settle, false);
            }
            _this.BetMgr.reset();
            VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaRecentRecordRequest, {});
          }).delay(1.5).call(function() {}).delay(2).call(function() {}).start();
          if (VV_1.vv.analysis.startTimers.betgamecomplete) {
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
              result: "success"
            });
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GameCompleted, {
              result: "success"
            });
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME, {
              result: "jhand"
            });
            var cost = Date.now() - VV_1.vv.analysis.startTimers.betgamecomplete;
            VV_1.vv.logger.log("otp -> betgamecomplete cost:", cost / 1e3);
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_COMPLETE_COST, {
              cost: String(cost / 1e3),
              result: "jhand"
            });
            VV_1.vv.analysis.startTimers.betgamecomplete = null;
          }
        }
      };
      JhandiMundaGameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/TableLayer").getComponent(JhandiMundaTableMgr_1.default);
        this.PlayerMgr = cc.find("Canvas/PlayerLayer").getComponent(JhandiMundaPlayerMgr_1.default);
        this.BetMgr = cc.find("Canvas/BetLayer").getComponent(JhandiMundaBetMgr_1.default);
        this.BetMgr.updateBetBtn();
      };
      JhandiMundaGameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
        this.initMgr();
      };
      JhandiMundaGameMgr = __decorate([ ccclass ], JhandiMundaGameMgr);
      return JhandiMundaGameMgr;
    }(GameMgrBase_1.default);
    exports.default = JhandiMundaGameMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "./JhandiMundaBetMgr": "JhandiMundaBetMgr",
    "./JhandiMundaEvents": "JhandiMundaEvents",
    "./JhandiMundaGameConfig": "JhandiMundaGameConfig",
    "./JhandiMundaPanelConfigs": "JhandiMundaPanelConfigs",
    "./JhandiMundaPlayerMgr": "JhandiMundaPlayerMgr",
    "./JhandiMundaTableMgr": "JhandiMundaTableMgr"
  } ],
  JhandiMundaPanelConfigs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "edd84y9HcJI0Y62SWteaK1k", "JhandiMundaPanelConfigs");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JhandiMundaPanelConfigs = void 0;
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var PanelLayerEnum;
    (function(PanelLayerEnum) {
      PanelLayerEnum[PanelLayerEnum["UILayer"] = 10] = "UILayer";
      PanelLayerEnum[PanelLayerEnum["DialogLayer"] = 300] = "DialogLayer";
      PanelLayerEnum[PanelLayerEnum["ToastLayer"] = 600] = "ToastLayer";
    })(PanelLayerEnum || (PanelLayerEnum = {}));
    exports.JhandiMundaPanelConfigs = {
      shakeDicePanel: {
        bundleName: GameConst_1.GameBundle.JhandiMunda,
        prefabPath: "prefabs/JhandiMundaShakeDicePrefab",
        layerZIndex: PanelLayerEnum.UILayer
      }
    };
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0
  } ],
  JhandiMundaPlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ad122YBctLg6g5Fp7vD4Qm", "JhandiMundaPlayerMgr");
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
    var PlayerList_1 = require("../../../scripts/games/gameCommon/PlayerList");
    var Score_1 = require("../../../scripts/games/gameCommon/Score");
    var JhandiMundaEvents_1 = require("./JhandiMundaEvents");
    var JhandiMundaPlayer_1 = require("./JhandiMundaPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JhandiMundaPlayerMgr = function(_super) {
      __extends(JhandiMundaPlayerMgr, _super);
      function JhandiMundaPlayerMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerNode = [];
        _this.selfNode = null;
        _this.playerList = null;
        _this.playerListPrefab = null;
        _this.scorePrefab = null;
        _this.banker = null;
        _this.playerItem = null;
        _this.refreshMoneyListener = null;
        _this.playerInfo = null;
        _this.seatCount = 7;
        return _this;
      }
      JhandiMundaPlayerMgr.prototype.start = function() {
        this.refreshMoneyListener = this.refreshMoney.bind(this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      JhandiMundaPlayerMgr.prototype.onDestroy = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      JhandiMundaPlayerMgr.prototype.refreshMoney = function() {
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
      };
      JhandiMundaPlayerMgr.prototype.initSelfInfo = function() {
        this.selfNode.getChildByName("head").getChildByName("mask").getChildByName("icon").getComponent(NetPic_1.default).showNetView(VV_1.vv.userMgr.headUrl);
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
        this.selfNode.getChildByName("nick_name").getComponent(cc.Label).string = VV_1.vv.userMgr.userName;
      };
      JhandiMundaPlayerMgr.prototype.initPlayer = function(_playerInfo) {
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
            player.getComponent(JhandiMundaPlayer_1.default).setPlayerInfo(this.playerInfo[j]);
          }
        }
      };
      JhandiMundaPlayerMgr.prototype.getLogicPosByPlayerID = function(player_id) {
        for (var i = 0; i < this.playerInfo.length; i++) if (player_id == this.playerInfo[i].player_id) return this.playerInfo[i].pos;
        return 999;
      };
      JhandiMundaPlayerMgr.prototype.removePlayer = function(player_id) {
        var pos = this.getLogicPosByPlayerID(player_id);
        if (999 != pos) for (var i = 0; i < this.playerInfo.length; i++) if (pos == this.playerInfo[i].pos) {
          this.playerNode[pos - 1].removeAllChildren();
          this.playerInfo.splice(i, 1);
          break;
        }
      };
      JhandiMundaPlayerMgr.prototype.updatePlayerinfo = function(_playerInfo) {
        this.initPlayer(_playerInfo);
      };
      JhandiMundaPlayerMgr.prototype.PlayerListCB = function() {
        VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaPlayerListRequest, {});
      };
      JhandiMundaPlayerMgr.prototype.getPlayerInfo = function() {
        return this.playerInfo;
      };
      JhandiMundaPlayerMgr.prototype.showResult = function(pos, settle, isSelf) {
        var scoreItem = cc.instantiate(this.scorePrefab);
        isSelf ? this.selfNode.addChild(scoreItem, GameConst_1.Z_ORDER.Z_DIALOG) : this.playerNode[pos - 1].addChild(scoreItem, GameConst_1.Z_ORDER.Z_DIALOG);
        var script = scoreItem.getComponent(Score_1.default);
        script && script.setScore(settle);
      };
      JhandiMundaPlayerMgr.prototype.showPlayerList = function(data) {
        var node = cc.instantiate(this.playerListPrefab);
        cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
        node.getComponent(PlayerList_1.default).setData(data);
      };
      __decorate([ property(cc.Node) ], JhandiMundaPlayerMgr.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaPlayerMgr.prototype, "selfNode", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaPlayerMgr.prototype, "playerList", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaPlayerMgr.prototype, "playerListPrefab", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaPlayerMgr.prototype, "scorePrefab", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaPlayerMgr.prototype, "banker", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaPlayerMgr.prototype, "playerItem", void 0);
      JhandiMundaPlayerMgr = __decorate([ ccclass ], JhandiMundaPlayerMgr);
      return JhandiMundaPlayerMgr;
    }(cc.Component);
    exports.default = JhandiMundaPlayerMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameCommon/PlayerList": void 0,
    "../../../scripts/games/gameCommon/Score": void 0,
    "./JhandiMundaEvents": "JhandiMundaEvents",
    "./JhandiMundaPlayer": "JhandiMundaPlayer"
  } ],
  JhandiMundaPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ca99rg579DSYBCa2dqrU33", "JhandiMundaPlayer");
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
    var JhandiMundaPlayer = function(_super) {
      __extends(JhandiMundaPlayer, _super);
      function JhandiMundaPlayer() {
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
      JhandiMundaPlayer.prototype.getPlayerInfo = function() {
        return this.info;
      };
      JhandiMundaPlayer.prototype.setPlayerInfo = function(data) {
        data.player_id && (this.info.player_id = data.player_id);
        if (data.nick) {
          this.info.nick = data.nick;
          this.nickName.string = VV_1.vv.tools.transformNickName(this.info.nick);
        }
        data.facelook && (this.info.facelook = data.facelook);
        this.head.showNetView(this.info.facelook);
      };
      __decorate([ property(cc.Label) ], JhandiMundaPlayer.prototype, "nickName", void 0);
      __decorate([ property(NetPic_1.default) ], JhandiMundaPlayer.prototype, "head", void 0);
      JhandiMundaPlayer = __decorate([ ccclass ], JhandiMundaPlayer);
      return JhandiMundaPlayer;
    }(cc.Component);
    exports.default = JhandiMundaPlayer;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  JhandiMundaRecordItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d6a1MsenVES7L4d/SSVJBh", "JhandiMundaRecordItem");
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
    var JhandiMundaRecordItem = function(_super) {
      __extends(JhandiMundaRecordItem, _super);
      function JhandiMundaRecordItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.txt = null;
        _this.sps = [];
        return _this;
      }
      JhandiMundaRecordItem.prototype.bindData = function(index) {
        this.sps ? this.bg.getComponent(cc.Sprite).spriteFrame = index > 1 ? this.sps[0] : this.sps[1] : this.bg.color = index > 1 ? cc.color(226, 66, 76, 255) : cc.color(57, 116, 234, 255);
        this.txt.string = index > 1 ? String(index) : "X";
      };
      __decorate([ property(cc.Node) ], JhandiMundaRecordItem.prototype, "bg", void 0);
      __decorate([ property(cc.Label) ], JhandiMundaRecordItem.prototype, "txt", void 0);
      __decorate([ property(cc.SpriteFrame) ], JhandiMundaRecordItem.prototype, "sps", void 0);
      JhandiMundaRecordItem = __decorate([ ccclass ], JhandiMundaRecordItem);
      return JhandiMundaRecordItem;
    }(cc.Component);
    exports.default = JhandiMundaRecordItem;
    cc._RF.pop();
  }, {} ],
  JhandiMundaShakeDicePrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6eaa1p7NlNGnpOgXZS7VpzJ", "JhandiMundaShakeDicePrefab");
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
    var PanelComponent_1 = require("../../../scripts/frameworks/components/router/PanelComponent");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var JhandiMundaDicePrefab_1 = require("./JhandiMundaDicePrefab");
    var JhandiMundaPanelConfigs_1 = require("./JhandiMundaPanelConfigs");
    var JhandiMundaWinAnimPrefab_1 = require("./JhandiMundaWinAnimPrefab");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JhandiMundaShakeDicePrefab = function(_super) {
      __extends(JhandiMundaShakeDicePrefab, _super);
      function JhandiMundaShakeDicePrefab() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sgame_c3jxLv = 6983;
        _this._sgame_vAG5gG = 9291;
        _this.spineNode = null;
        _this.diceNodes = [];
        _this.targetNodes = [];
        _this.dicePrefab = null;
        _this.winAnimPrefab = null;
        return _this;
      }
      JhandiMundaShakeDicePrefab.prototype._sgame_sEoBQv = function() {
        var a = "I9Pde";
        var b = 4121;
        return a.length + b;
      };
      JhandiMundaShakeDicePrefab.prototype.show = function(option) {
        option.onShowed();
        option.data && this._startAnim(option.data);
      };
      JhandiMundaShakeDicePrefab.prototype.hide = function(option) {
        option.onHided();
      };
      JhandiMundaShakeDicePrefab.prototype._startAnim = function(data) {
        var _this = this;
        this.spineNode.getComponent(sp.Skeleton).setStartListener(function() {
          setTimeout(function() {
            VV_1.vv.audioMgr.playSound("dice");
          }, 2e3);
        });
        this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "rolldice1", false);
        for (var i = 1; i < 7; i++) this.spineNode.getComponent(sp.Skeleton).setAttachment("face" + i, "ani_kairajakai_dice_" + data[i - 1] + "-1");
        this.spineNode.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this._createTempDice(data);
        });
      };
      JhandiMundaShakeDicePrefab.prototype._createTempDice = function(data) {
        var _this = this;
        cc.tween(this.node).delay(2).call(function() {
          _this.spineNode.getComponent(sp.Skeleton).destroy();
          var _loop_1 = function(i) {
            var dice = cc.instantiate(_this.dicePrefab);
            dice.getComponent(JhandiMundaDicePrefab_1.default).updateTexture(data[i]);
            _this.diceNodes[i].addChild(dice);
            var _loop_2 = function(j) {
              j == data[i] - 1 && cc.tween(_this.diceNodes[i]).set({
                scale: .7
              }).to(.3, {
                position: _this.targetNodes[j].position
              }).call(function() {
                dice.parent = null;
                dice.scale = .7;
                _this.targetNodes[j].addChild(dice);
              }).start();
            };
            for (var j = 0; j < _this.targetNodes.length; j++) _loop_2(j);
          };
          for (var i = 0; i < data.length; i++) _loop_1(i);
        }).delay(1).call(function() {
          _this._startWinAnim(data);
        }).delay(3).call(function() {
          VV_1.vv.panelRouter.destroy({
            panel: JhandiMundaPanelConfigs_1.JhandiMundaPanelConfigs.shakeDicePanel
          });
        }).start();
      };
      JhandiMundaShakeDicePrefab.prototype._startWinAnim = function(data) {
        var winRate = {
          1: 0,
          2: 3,
          3: 5,
          4: 10,
          5: 20,
          6: 100
        };
        var temp = {
          1: [],
          2: [],
          3: [],
          4: [],
          5: [],
          6: []
        };
        var _loop_3 = function(key) {
          data.forEach(function(element) {
            element === Number(key) && temp[key].push(element);
          });
        };
        for (var key in temp) _loop_3(key);
        var result = [];
        data.forEach(function(item) {
          data.indexOf(item) !== data.lastIndexOf(item) && -1 == result.indexOf(item) && result.push(item);
        });
        for (var i = 0; i < result.length; i++) {
          var winAnim = cc.instantiate(this.winAnimPrefab);
          this.node.addChild(winAnim);
          winAnim.position = this.targetNodes[result[i] - 1].position;
          winAnim.getComponent(JhandiMundaWinAnimPrefab_1.default).updateWinRate(winRate[temp[result[i]].length]);
        }
      };
      __decorate([ property(cc.Node) ], JhandiMundaShakeDicePrefab.prototype, "spineNode", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaShakeDicePrefab.prototype, "diceNodes", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaShakeDicePrefab.prototype, "targetNodes", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaShakeDicePrefab.prototype, "dicePrefab", void 0);
      __decorate([ property(cc.Prefab) ], JhandiMundaShakeDicePrefab.prototype, "winAnimPrefab", void 0);
      JhandiMundaShakeDicePrefab = __decorate([ ccclass ], JhandiMundaShakeDicePrefab);
      return JhandiMundaShakeDicePrefab;
    }(PanelComponent_1.PanelComponent);
    exports.default = JhandiMundaShakeDicePrefab;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/router/PanelComponent": void 0,
    "./JhandiMundaDicePrefab": "JhandiMundaDicePrefab",
    "./JhandiMundaPanelConfigs": "JhandiMundaPanelConfigs",
    "./JhandiMundaWinAnimPrefab": "JhandiMundaWinAnimPrefab"
  } ],
  JhandiMundaTableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cff7G7V89LLaauQ4iyqZQ+", "JhandiMundaTableMgr");
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
    var JhandiMundaEvents_1 = require("./JhandiMundaEvents");
    var JhandiMundaGameConfig_1 = require("./JhandiMundaGameConfig");
    var JhandiMundaGameMgr_1 = require("./JhandiMundaGameMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JhandiMundaTableMgr = function(_super) {
      __extends(JhandiMundaTableMgr, _super);
      function JhandiMundaTableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.alarmClock = null;
        _this.croupier = null;
        _this.commonBottomNode = null;
        _this.alarmClockLabel = null;
        _this.tableTips = null;
        _this._state_time = null;
        _this._state = null;
        _this._shaking = true;
        return _this;
      }
      JhandiMundaTableMgr.prototype.initTable = function(data) {
        data.state && this.updateTableState(data.state, data.state_time || 0);
      };
      JhandiMundaTableMgr.prototype.start = function() {
        VV_1.vv.gameMgr.launch();
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_ROOM_ENTER, {
          result: "suc"
        });
        VV_1.vv.analysis.startTimers.betgameEnter = Date.now();
      };
      JhandiMundaTableMgr.prototype.onEnable = function() {
        VV_1.vv.gameMgr = new JhandiMundaGameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
      };
      JhandiMundaTableMgr.prototype.getTipsText = function(state) {
        return 1 == state ? I18n_1.I18n.getText("up7Down.scene.tips1") : 2 == state ? I18n_1.I18n.getText("up7Down.scene.tips2") : 3 == state ? I18n_1.I18n.getText("baccarat.scene.tips2") : 4 == state ? I18n_1.I18n.getText("baccarat.scene.tips4") : "";
      };
      JhandiMundaTableMgr.prototype.btnCB = function(event, customData) {
        "btn_back" == customData ? VV_1.vv.gameMgr.showMenuUI() : "btn_addcash" == customData ? PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash) : "btn_rule" == customData ? VV_1.vv.uiMgr.showGameRule() : "btn_exit" == customData ? this.exit() : "btn_superclient" == customData && VV_1.vv.supperClient.showBetList();
      };
      JhandiMundaTableMgr.prototype.exit = function() {
        var isBeting = false;
        if (VV_1.vv.gameMgr) for (var key in VV_1.vv.gameMgr.BetMgr.curBetData) VV_1.vv.gameMgr.BetMgr.curBetData[key] > 0 && (isBeting = true);
        if (isBeting) {
          VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitSettle"));
          return;
        }
        VV_1.vv.netMgr.send(JhandiMundaEvents_1.JhandiMundaC2S.MundaLeaveTableRequest, {});
      };
      JhandiMundaTableMgr.prototype.updateTableState = function(state, state_time) {
        this._state_time = state_time;
        this._state = state;
        this.tableTips.string = this.getTipsText(state);
        this._state == JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_BET || this._state == JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING ? this._showAlarmClock() : this._hideAlarmClock();
      };
      JhandiMundaTableMgr.prototype.update = function(dt) {
        if (this._state_time <= 0) {
          this._hideAlarmClock();
          this._state_time = null;
          return;
        }
        this._state_time -= dt;
        if (Math.round(this._state_time) >= 0) {
          this._state != JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_BET && this._state != JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING || (this.alarmClockLabel.string = String(Math.round(this._state_time)));
          if (this._state_time < 3 && this._state == JhandiMundaGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
            this._shakeAlarmClock();
            this._shaking = false;
          }
        }
      };
      JhandiMundaTableMgr.prototype._showAlarmClock = function() {
        this._shaking = true;
        this.alarmClock.active = true;
        cc.Tween.stopAllByTarget(this.alarmClock);
        cc.tween(this.alarmClock).set({
          scale: 0,
          angle: 0
        }).to(.1, {
          scale: 1
        }).start();
      };
      JhandiMundaTableMgr.prototype._hideAlarmClock = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.alarmClock);
        cc.tween(this.alarmClock).set({
          scale: 1
        }).to(.1, {
          scale: 0
        }).call(function() {
          _this.alarmClock.active = false;
        }).start();
      };
      JhandiMundaTableMgr.prototype._shakeAlarmClock = function() {
        this._shaking && cc.tween(this.alarmClock).repeatForever(cc.tween(this.alarmClock).to(.05, {
          angle: -5
        }).to(.05, {
          angle: 5
        }).start()).start();
      };
      __decorate([ property(cc.Node) ], JhandiMundaTableMgr.prototype, "alarmClock", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaTableMgr.prototype, "croupier", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaTableMgr.prototype, "commonBottomNode", void 0);
      __decorate([ property(cc.Label) ], JhandiMundaTableMgr.prototype, "alarmClockLabel", void 0);
      __decorate([ property(cc.Label) ], JhandiMundaTableMgr.prototype, "tableTips", void 0);
      JhandiMundaTableMgr = __decorate([ ccclass ], JhandiMundaTableMgr);
      return JhandiMundaTableMgr;
    }(cc.Component);
    exports.default = JhandiMundaTableMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "./JhandiMundaEvents": "JhandiMundaEvents",
    "./JhandiMundaGameConfig": "JhandiMundaGameConfig",
    "./JhandiMundaGameMgr": "JhandiMundaGameMgr"
  } ],
  JhandiMundaWinAnimPrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60effBJ8y5N2Z9o3WoS3ND2", "JhandiMundaWinAnimPrefab");
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
    var JhandiMundaWinAnimPrefab = function(_super) {
      __extends(JhandiMundaWinAnimPrefab, _super);
      function JhandiMundaWinAnimPrefab() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animNode = null;
        _this.lightSp = null;
        _this.numberSp = null;
        _this.numberSpriteFrames = [];
        return _this;
      }
      JhandiMundaWinAnimPrefab.prototype.updateWinRate = function(num) {
        var _this = this;
        num && void 0 != num && (3 == num ? this.numberSp.spriteFrame = this.numberSpriteFrames[0] : 5 == num ? this.numberSp.spriteFrame = this.numberSpriteFrames[1] : 10 == num ? this.numberSp.spriteFrame = this.numberSpriteFrames[2] : 20 == num ? this.numberSp.spriteFrame = this.numberSpriteFrames[3] : 100 == num ? this.numberSp.spriteFrame = this.numberSpriteFrames[4] : this.numberSp.node.active = false);
        cc.Tween.stopAllByTarget(this.animNode);
        cc.tween(this.animNode).set({
          scale: 0
        }).to(.5, {
          scale: 1
        }, {
          easing: "cubicOut"
        }).delay(3.5).call(function() {
          _this.node.destroy();
        }).start();
      };
      __decorate([ property(cc.Node) ], JhandiMundaWinAnimPrefab.prototype, "animNode", void 0);
      __decorate([ property(cc.Node) ], JhandiMundaWinAnimPrefab.prototype, "lightSp", void 0);
      __decorate([ property(cc.Sprite) ], JhandiMundaWinAnimPrefab.prototype, "numberSp", void 0);
      __decorate([ property(cc.SpriteFrame) ], JhandiMundaWinAnimPrefab.prototype, "numberSpriteFrames", void 0);
      JhandiMundaWinAnimPrefab = __decorate([ ccclass ], JhandiMundaWinAnimPrefab);
      return JhandiMundaWinAnimPrefab;
    }(cc.Component);
    exports.default = JhandiMundaWinAnimPrefab;
    cc._RF.pop();
  }, {} ]
}, {}, [ "JhandiMundaBetMgr", "JhandiMundaDicePrefab", "JhandiMundaEvents", "JhandiMundaGameConfig", "JhandiMundaGameMgr", "JhandiMundaPanelConfigs", "JhandiMundaPlayer", "JhandiMundaPlayerMgr", "JhandiMundaRecordItem", "JhandiMundaShakeDicePrefab", "JhandiMundaTableMgr", "JhandiMundaWinAnimPrefab" ]);