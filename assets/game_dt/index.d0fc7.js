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
  DragonTigerBeadRoadItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "398c94HSD1EJIbLgUe4rn0w", "DragonTigerBeadRoadItem");
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
    var DragonTigerRecordRoad_1 = require("./DragonTigerRecordRoad");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragonTigerBeadRoadItem = function(_super) {
      __extends(DragonTigerBeadRoadItem, _super);
      function DragonTigerBeadRoadItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dragonSign = null;
        _this.tigerSign = null;
        _this.tieSign = null;
        _this.tieLabel = null;
        return _this;
      }
      DragonTigerBeadRoadItem.prototype.start = function() {};
      DragonTigerBeadRoadItem.prototype.bindData = function(value, tieRound) {
        if (value == DragonTigerRecordRoad_1.ResultType.Dragon) this.dragonSign.active = true; else if (value == DragonTigerRecordRoad_1.ResultType.Tiger) this.tigerSign.active = true; else {
          this.tieSign.active = true;
          if (tieRound) {
            this.tieSign.getChildByName("sign").active = false;
            this.tieSign.getChildByName("txt").active = true;
            this.tieSign.getChildByName("txt").getComponent(cc.Label).string = String(tieRound);
          }
        }
      };
      __decorate([ property(cc.Node) ], DragonTigerBeadRoadItem.prototype, "dragonSign", void 0);
      __decorate([ property(cc.Node) ], DragonTigerBeadRoadItem.prototype, "tigerSign", void 0);
      __decorate([ property(cc.Node) ], DragonTigerBeadRoadItem.prototype, "tieSign", void 0);
      __decorate([ property(cc.Label) ], DragonTigerBeadRoadItem.prototype, "tieLabel", void 0);
      DragonTigerBeadRoadItem = __decorate([ ccclass ], DragonTigerBeadRoadItem);
      return DragonTigerBeadRoadItem;
    }(cc.Component);
    exports.default = DragonTigerBeadRoadItem;
    cc._RF.pop();
  }, {
    "./DragonTigerRecordRoad": "DragonTigerRecordRoad"
  } ],
  DragonTigerBetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4059cH4JWxCXp6t0NkT9k5s", "DragonTigerBetMgr");
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
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var Chip_1 = require("../../../scripts/games/gameCommon/Chip");
    var ChipBtnItem_1 = require("../../../scripts/games/gameCommon/ChipBtnItem");
    var DragonTigerGameConfig_1 = require("./DragonTigerGameConfig");
    var DragonTigerMsgId_1 = require("./DragonTigerMsgId");
    var DragonTigerVsAnim_1 = require("./DragonTigerVsAnim");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragonTigerBetMgr = function(_super) {
      __extends(DragonTigerBetMgr, _super);
      function DragonTigerBetMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chipLayout = null;
        _this.betPoolNodes = [];
        _this.chipBtnItem = null;
        _this.chipItem = null;
        _this.vsAnim = null;
        _this.recordItem = null;
        _this.recordList = null;
        _this.autoBetNode = null;
        _this.dragonTotalBetRatio = null;
        _this.tigerTotalBetRatio = null;
        _this.tieTotalBetRatio = null;
        _this.betProgress = null;
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
      DragonTigerBetMgr.prototype.start = function() {
        this.initCurBetData();
        this.initChipNodePool();
        this.storagePlayersOrignPos();
        VV_1.vv.analysis.startTimers.betgamecomplete = null;
      };
      DragonTigerBetMgr.prototype.initCurBetData = function() {
        for (var i = 1; i <= this.betPoolNodes.length; i++) this.curBetData[String(i)] = 0;
      };
      DragonTigerBetMgr.prototype.reset = function() {
        this.lastBetData = VV_1.vv.uiMgr.deepClone(this.curBetData);
        for (var key in this.curBetData) this.curBetData[key] = 0;
      };
      DragonTigerBetMgr.prototype.storagePlayersOrignPos = function() {
        var gameMgr = VV_1.vv.gameMgr;
        for (var i = 0; i < gameMgr.PlayerMgr.playerNode.length; i++) gameMgr.PlayerMgr.playerNode[i] && this.playerNodeOrignPos.push(gameMgr.PlayerMgr.playerNode[i].position);
      };
      DragonTigerBetMgr.prototype.destoryChips = function() {
        for (var i = 0; i < this.chipNodes.length; i++) this.chipNodes[i] && this.flyChipFromAtoB(this.chipNodes[i], this.chipNodes[i], VV_1.vv.gameMgr.CardMgr.croupier);
        this.chipNodes.length > 0 && VV_1.vv.audioMgr.playSound("recycleCoin");
        this.chipNodes.splice(0);
      };
      DragonTigerBetMgr.prototype.poolBtnCB = function(event, customData) {
        var index = parseInt(customData);
        index && this.requestBet(this.chipArr[this.curChipIndex] * VV_1.vv.global.exchange_rate, index);
        this.updateRepeatBtn(null, false);
      };
      DragonTigerBetMgr.prototype.createChip = function(parentNode, pos) {
        var chip = null;
        chip = this.chipPool.size() > 0 ? this.chipPool.get() : cc.instantiate(this.chipItem);
        chip.parent = parentNode;
        chip.getComponent(Chip_1.default).init(pos);
        return chip;
      };
      DragonTigerBetMgr.prototype.initChipNodePool = function() {
        this.chipPool = new cc.NodePool();
        for (var i = 0; i < this.poolSize; i++) {
          var chip = cc.instantiate(this.chipItem);
          this.chipPool.put(chip);
        }
      };
      DragonTigerBetMgr.prototype.recyleChip = function(_chip) {
        this.chipPool.put(_chip);
      };
      DragonTigerBetMgr.prototype.flyChipFromAtoB = function(node, nodeA, nodeB) {
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
      DragonTigerBetMgr.prototype.flyChipToPlayer = function(pos, winning) {
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = gameMgr.PlayerMgr.banker.position;
        var ePos = gameMgr.PlayerMgr.playerNode[pos - 1].position;
        var eNode = gameMgr.PlayerMgr.playerNode[pos - 1];
        this.flyChip(winning, sPos, ePos, eNode, true);
      };
      DragonTigerBetMgr.prototype.flyChipToPool = function(poorIndex, seatIndex, betNum) {
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
      DragonTigerBetMgr.prototype.recoverChips = function(poolIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        for (var i = 0; i < this.getChipNumByBet(betNum); i++) {
          var pos = this.getRandomPosInRect(this.betPoolNodes[poolIndex - 1].position, this.betPoolNodes[poolIndex - 1].width / 2, this.betPoolNodes[poolIndex - 1].height / 2);
          var chip = this.createChip(this.node, pos);
          this.chipNodes.push(chip);
        }
      };
      DragonTigerBetMgr.prototype.playerShake = function(tNode, seatIndex) {
        var _this = this;
        tNode.runAction(cc.sequence(cc.moveTo(.1, tNode.position.x + 5, tNode.position.y), cc.moveTo(.1, tNode.position.x - 5, tNode.position.y), cc.callFunc(function() {
          tNode.position = _this.playerNodeOrignPos[seatIndex - 1];
        })));
      };
      DragonTigerBetMgr.prototype.flyChip = function(betNum, sPos, ePos, endNode, isTemp) {
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
      DragonTigerBetMgr.prototype.updateBetBtn = function() {
        var _this = this;
        var coin = parseInt(VV_1.vv.userMgr.coins);
        coin >= 0 && coin <= 2e3 ? this.chipArr = DragonTigerGameConfig_1.GameConfig.BET_COIN.level1 : coin > 2e3 && coin <= 5e3 ? this.chipArr = DragonTigerGameConfig_1.GameConfig.BET_COIN.level2 : coin > 5e3 && coin <= 1e4 ? this.chipArr = DragonTigerGameConfig_1.GameConfig.BET_COIN.level3 : coin > 1e4 && coin <= 2e4 ? this.chipArr = DragonTigerGameConfig_1.GameConfig.BET_COIN.level4 : coin > 2e4 && (this.chipArr = DragonTigerGameConfig_1.GameConfig.BET_COIN.level5);
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
      DragonTigerBetMgr.prototype.updateChipState = function() {
        for (var i = 0; i < this.chipLayout.childrenCount; i++) i == this.curChipIndex ? this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(true) : this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(false);
      };
      DragonTigerBetMgr.prototype.getChipNumByBet = function(betNum) {
        var chipNum = 1;
        betNum > 0 && betNum <= 1 ? chipNum = 1 : betNum > 1 && betNum <= 10 ? chipNum = 2 : betNum > 10 && betNum <= 100 ? chipNum = 5 : betNum > 100 && betNum <= 1e3 ? chipNum = 10 : betNum > 1e3 && betNum <= 2e3 ? chipNum = 20 : betNum > 2e3 && (chipNum = 30);
        return chipNum;
      };
      DragonTigerBetMgr.prototype.getRandomPosInRect = function(point, width, height) {
        var minX = point.x - width / 2;
        var maxX = point.x + width / 2;
        var x = Math.random() * (maxX - minX + 1) + minX;
        var minY = point.y - height / 2;
        var maxY = point.y + height / 2;
        var y = Math.random() * (maxY - minY + 1) + minY;
        return new cc.Vec3(x, y);
      };
      DragonTigerBetMgr.prototype.showResult = function(pools) {
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
      };
      DragonTigerBetMgr.prototype.showRecordList = function(list) {
        var recordData = [];
        recordData = list.length > 23 ? list.slice(-23) : list;
        this.recordList.node.getChildByName("view").getChildByName("content").childrenCount > 0 && this.recordList.node.getChildByName("view").getChildByName("content").removeAllChildren();
        for (var i = 0; i < recordData.length; i++) {
          var record = cc.instantiate(this.recordItem);
          this.recordList.node.getChildByName("view").getChildByName("content").addChild(record);
          recordData[i] && (record.getChildByName("lfhSign" + recordData[i]).active = true);
        }
      };
      DragonTigerBetMgr.prototype.updatePoolState = function(state, state_time) {
        if (state == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) {
          for (var k = 0; k < this.betPoolNodes.length; k++) {
            this.betPoolNodes[k].getChildByName("info").getChildByName("mybet").getComponent(cc.Label).string = "";
            this.betPoolNodes[k].getChildByName("info").getChildByName("totalbet").getComponent(cc.Label).string = "";
          }
          this.dragonTotalBetRatio.string = "";
          this.tigerTotalBetRatio.string = "";
          this.tieTotalBetRatio.string = "";
          var gameMgr = VV_1.vv.gameMgr;
          0 == gameMgr.CardMgr.cardNodes.length && gameMgr.CardMgr.shuffleFakeCard();
          this.showBetProgress(0);
        }
        if (state == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
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
      DragonTigerBetMgr.prototype.showBetProgress = function(state_time) {
        this.betProgress.progress = state_time > 0 ? state_time / 15 : 0;
      };
      DragonTigerBetMgr.prototype.showTotalBetNum = function(pool, total, allBetMap) {
        var dRatio = allBetMap["1"] || 0;
        var tRatio = allBetMap["2"] || 0;
        var tieRatio = allBetMap["3"] || 0;
        total && (this.betPoolNodes[pool - 1].getChildByName("info").getChildByName("totalbet").getComponent(cc.Label).string = "" + total);
      };
      DragonTigerBetMgr.prototype.showMyBetNum = function(pool, num) {
        for (var i = 0; i < this.betPoolNodes.length; i++) num && (this.betPoolNodes[pool - 1].getChildByName("info").getChildByName("mybet").getComponent(cc.Label).string = "" + num);
        for (var key in this.curBetData) parseInt(key) == pool && (this.curBetData[key] = num);
      };
      DragonTigerBetMgr.prototype.autoBetClick = function(event, data) {
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
      DragonTigerBetMgr.prototype.updateRepeatBtn = function(state, forceShow) {
        null != state && (state == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_BET ? this.autoBetNode.interactable = true : this.autoBetNode.interactable = false);
        null != forceShow && (this.autoBetNode.interactable = forceShow);
      };
      DragonTigerBetMgr.prototype.autoBetSwitch = function(state) {
        var _this = this;
        if (!this.lastBetData) return;
        if (state == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
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
      DragonTigerBetMgr.prototype.requestBet = function(chip, side) {
        if (parseInt(VV_1.vv.userMgr.coins) < 50 && false) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is under \u20b950, add cash and continue to play", false, true);
          return;
        }
        if (!VV_1.vv.userMgr.has_recharged && false) {
          VV_1.vv.uiMgr.highPlayerAlertTips();
          return;
        }
        VV_1.vv.netMgr.send(DragonTigerMsgId_1.DragonTiger_MSG_REQ_ID.MSG_PLAYEROPTION_REQ, {
          option: DragonTigerGameConfig_1.OPTION_TYPE.BET,
          chip: chip,
          side: side
        });
      };
      DragonTigerBetMgr.prototype.isCanAutoBet = function(totalCash) {
        if (totalCash > parseInt(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return false;
        }
        return true;
      };
      DragonTigerBetMgr.prototype.showBetTip = function(state) {
        if (null != cc.find("Canvas")) {
          var vsAnimNode = cc.instantiate(this.vsAnim);
          cc.find("Canvas").addChild(vsAnimNode);
          vsAnimNode.getComponent(DragonTigerVsAnim_1.default).show(state);
        }
      };
      __decorate([ property(cc.Node) ], DragonTigerBetMgr.prototype, "chipLayout", void 0);
      __decorate([ property(cc.Node) ], DragonTigerBetMgr.prototype, "betPoolNodes", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerBetMgr.prototype, "chipBtnItem", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerBetMgr.prototype, "chipItem", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerBetMgr.prototype, "vsAnim", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerBetMgr.prototype, "recordItem", void 0);
      __decorate([ property(cc.ScrollView) ], DragonTigerBetMgr.prototype, "recordList", void 0);
      __decorate([ property(cc.Button) ], DragonTigerBetMgr.prototype, "autoBetNode", void 0);
      __decorate([ property(cc.Label) ], DragonTigerBetMgr.prototype, "dragonTotalBetRatio", void 0);
      __decorate([ property(cc.Label) ], DragonTigerBetMgr.prototype, "tigerTotalBetRatio", void 0);
      __decorate([ property(cc.Label) ], DragonTigerBetMgr.prototype, "tieTotalBetRatio", void 0);
      __decorate([ property(cc.ProgressBar) ], DragonTigerBetMgr.prototype, "betProgress", void 0);
      DragonTigerBetMgr = __decorate([ ccclass ], DragonTigerBetMgr);
      return DragonTigerBetMgr;
    }(cc.Component);
    exports.default = DragonTigerBetMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameCommon/Chip": void 0,
    "../../../scripts/games/gameCommon/ChipBtnItem": void 0,
    "./DragonTigerGameConfig": "DragonTigerGameConfig",
    "./DragonTigerMsgId": "DragonTigerMsgId",
    "./DragonTigerVsAnim": "DragonTigerVsAnim"
  } ],
  DragonTigerBigRoadItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b12f6Q6p5Nr5cEIG1DBS3m", "DragonTigerBigRoadItem");
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
    var DragonTigerBigRoadItem = function(_super) {
      __extends(DragonTigerBigRoadItem, _super);
      function DragonTigerBigRoadItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dragonSign = null;
        _this.tigerSign = null;
        _this.tieSign = null;
        return _this;
      }
      DragonTigerBigRoadItem.prototype.start = function() {};
      DragonTigerBigRoadItem.prototype.bindData = function(value) {
        1 == value ? this.dragonSign.active = true : 2 == value ? this.tigerSign.active = true : this.tieSign.active = true;
      };
      __decorate([ property(cc.Node) ], DragonTigerBigRoadItem.prototype, "dragonSign", void 0);
      __decorate([ property(cc.Node) ], DragonTigerBigRoadItem.prototype, "tigerSign", void 0);
      __decorate([ property(cc.Node) ], DragonTigerBigRoadItem.prototype, "tieSign", void 0);
      DragonTigerBigRoadItem = __decorate([ ccclass ], DragonTigerBigRoadItem);
      return DragonTigerBigRoadItem;
    }(cc.Component);
    exports.default = DragonTigerBigRoadItem;
    cc._RF.pop();
  }, {} ],
  DragonTigerCardMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed7c9eYG7BAn6R0t3/BS/jl", "DragonTigerCardMgr");
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
    var DragonTigerCard_1 = require("./DragonTigerCard");
    var CARD_SCALE = .5;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragonTigerCardMgr = function(_super) {
      __extends(DragonTigerCardMgr, _super);
      function DragonTigerCardMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardLeft = null;
        _this.cardRight = null;
        _this.croupier = null;
        _this.cardItem = null;
        _this.nodeVs = null;
        _this.labBetTime = null;
        _this.cardNodes = [];
        return _this;
      }
      DragonTigerCardMgr.prototype.start = function() {};
      DragonTigerCardMgr.prototype.reset = function() {
        for (var i = 0; i < this.cardNodes.length; i++) this.cardNodes[i] && this.cardNodes[i].destroy();
        this.cardNodes.splice(0);
      };
      DragonTigerCardMgr.prototype.showBetTime = function(time) {
        if (time >= 0) {
          this.nodeVs.active = false;
          this.labBetTime.node.active = true;
          this.labBetTime.string = "" + time;
        } else {
          this.nodeVs.active = true;
          this.labBetTime.node.active = false;
        }
      };
      DragonTigerCardMgr.prototype.sendSingleCard = function(value, endPos) {
        var card = cc.instantiate(this.cardItem);
        this.node.addChild(card);
        this.cardNodes.push(card);
        cc.Tween.stopAllByTarget(card);
        cc.tween(card).set({
          scale: 0,
          position: endPos
        }).to(.2, {
          scale: CARD_SCALE
        }, {
          easing: "cubicOut"
        }).call(function() {
          VV_1.vv.audioMgr.playSound("card");
          value && card.getComponent(DragonTigerCard_1.default).setCardValue(value);
        }).start();
      };
      DragonTigerCardMgr.prototype.shuffleFakeCard = function() {
        var enPos = {
          0: cc.v2(this.cardLeft.position.x, this.cardLeft.position.y),
          1: cc.v2(this.cardRight.position.x, this.cardRight.position.y)
        };
        for (var i = 0; i < 2; i++) this.sendSingleCard(null, enPos[i]);
      };
      DragonTigerCardMgr.prototype.flipCard = function(dragonCardValue, tigerCardValue) {
        var _this = this;
        cc.Tween.stopAllByTarget(this.cardNodes[0]);
        cc.tween(this.cardNodes[0]).to(.2, {
          scaleX: 0,
          scaleY: CARD_SCALE
        }).call(function() {
          _this.cardNodes[0].getComponent(DragonTigerCard_1.default).setCardValue(dragonCardValue);
        }).to(.2, {
          scaleX: CARD_SCALE,
          scaleY: CARD_SCALE
        }).delay(1).call(function() {
          cc.Tween.stopAllByTarget(_this.cardNodes[1]);
          cc.tween(_this.cardNodes[1]).to(.2, {
            scaleX: 0,
            scaleY: CARD_SCALE
          }).call(function() {
            _this.cardNodes[1].getComponent(DragonTigerCard_1.default).setCardValue(tigerCardValue);
          }).to(.2, {
            scaleX: CARD_SCALE,
            scaleY: CARD_SCALE
          }).start();
        }).start();
      };
      __decorate([ property(cc.Node) ], DragonTigerCardMgr.prototype, "cardLeft", void 0);
      __decorate([ property(cc.Node) ], DragonTigerCardMgr.prototype, "cardRight", void 0);
      __decorate([ property(cc.Node) ], DragonTigerCardMgr.prototype, "croupier", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerCardMgr.prototype, "cardItem", void 0);
      __decorate([ property(cc.Node) ], DragonTigerCardMgr.prototype, "nodeVs", void 0);
      __decorate([ property(cc.Label) ], DragonTigerCardMgr.prototype, "labBetTime", void 0);
      DragonTigerCardMgr = __decorate([ ccclass ], DragonTigerCardMgr);
      return DragonTigerCardMgr;
    }(cc.Component);
    exports.default = DragonTigerCardMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./DragonTigerCard": "DragonTigerCard"
  } ],
  DragonTigerCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3522EMwYFL2oVMZ2wlZ/P0", "DragonTigerCard");
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
    var DragonTigerGameHelper_1 = require("./DragonTigerGameHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var COLOR_JQK = [ "hs_j", "hs_q", "hs_k" ];
    var DragonTigerCard = function(_super) {
      __extends(DragonTigerCard, _super);
      function DragonTigerCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.cardFront = null;
        _this.cardBack = null;
        _this.blinkNode = null;
        _this._cardValue = null;
        return _this;
      }
      DragonTigerCard.prototype.start = function() {};
      DragonTigerCard.prototype.onDestroy = function() {};
      DragonTigerCard.prototype.getCardData = function() {
        return this._cardValue;
      };
      DragonTigerCard.prototype.setCardValue = function(_value) {
        this.updateCardValue(_value);
      };
      DragonTigerCard.prototype.lightCard = function() {
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
      DragonTigerCard.prototype.setGray = function() {
        this.cardFront.getChildByName("gray").active = true;
      };
      DragonTigerCard.prototype.updateCardValue = function(_cardValue) {
        if (_cardValue) {
          this._cardValue = _cardValue;
          this.cardBack.active = false;
          this.cardFront.active = true;
          var CARD_VALUE = DragonTigerGameHelper_1.DragonTigerGameHelper.getCardValue(_cardValue);
          var CARD_COLOR = DragonTigerGameHelper_1.DragonTigerGameHelper.getCardColor(_cardValue);
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
      };
      DragonTigerCard.prototype.update = function(dt) {};
      __decorate([ property(cc.SpriteAtlas) ], DragonTigerCard.prototype, "atlas", void 0);
      __decorate([ property(cc.Node) ], DragonTigerCard.prototype, "cardFront", void 0);
      __decorate([ property(cc.Node) ], DragonTigerCard.prototype, "cardBack", void 0);
      __decorate([ property(cc.Node) ], DragonTigerCard.prototype, "blinkNode", void 0);
      DragonTigerCard = __decorate([ ccclass ], DragonTigerCard);
      return DragonTigerCard;
    }(cc.Component);
    exports.default = DragonTigerCard;
    cc._RF.pop();
  }, {
    "./DragonTigerGameHelper": "DragonTigerGameHelper"
  } ],
  DragonTigerGameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37df2vDhGlLI6v64HiefFl/", "DragonTigerGameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OPTION_TYPE = exports.CARD_TYPE = exports.TABLE_STATE = exports.GameConfig = void 0;
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
      CARD_TYPE["TYPE_M"] = "M";
      CARD_TYPE["TYPE_A"] = "A";
      CARD_TYPE["TYPE_B"] = "B";
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
    cc._RF.pop();
  }, {} ],
  DragonTigerGameHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3c4cbwQ0tDXIIoAVgOY8EW", "DragonTigerGameHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DragonTigerGameHelper = void 0;
    var DragonTigerGameHelper = function() {
      function DragonTigerGameHelper() {}
      DragonTigerGameHelper.getCardValue = function(_value) {
        if (_value) return _value % 16;
      };
      DragonTigerGameHelper.getCardColor = function(_value) {
        if (_value) return Math.floor(_value / 16);
      };
      DragonTigerGameHelper.CardData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 79 ];
      return DragonTigerGameHelper;
    }();
    exports.DragonTigerGameHelper = DragonTigerGameHelper;
    cc._RF.pop();
  }, {} ],
  DragonTigerGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a157CKmQVBEI7zyqrUmrik", "DragonTigerGameMgr");
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
    var DragonTigerBetMgr_1 = require("./DragonTigerBetMgr");
    var DragonTigerCardMgr_1 = require("./DragonTigerCardMgr");
    var DragonTigerGameConfig_1 = require("./DragonTigerGameConfig");
    var DragonTigerMsgId_1 = require("./DragonTigerMsgId");
    var DragonTigerPlayerMgr_1 = require("./DragonTigerPlayerMgr");
    var DragonTigerTableMgr_1 = require("./DragonTigerTableMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragonTigerGameMgr = function(_super) {
      __extends(DragonTigerGameMgr, _super);
      function DragonTigerGameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sgame_0U2b44 = 9123;
        _this._sgame_I2iNEt = 2833;
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
      DragonTigerGameMgr.prototype._sgame_FAQxFK = function() {
        var a = "Cu8wJ";
        var b = 3808;
        return a.length + b;
      };
      DragonTigerGameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.DragonTiger,
                  room_id: 999999
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) VV_1.vv.netMgr.send(DragonTigerMsgId_1.DragonTiger_MSG_REQ_ID.MSG_JOINTABLE_REQ, {}); else {
                VV_1.vv.logger.warn("\u8fdb\u5165dt\u95f4\u5931\u8d25", data);
                this.exitTable();
              }
              return [ 3, 3 ];

             case 2:
              error_1 = _a.sent();
              VV_1.vv.logger.warn("\u8fdb\u5165dt\u623f\u95f4\u5931\u8d25", error_1);
              this.exitTable();
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      DragonTigerGameMgr.prototype.addNetListener = function() {
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.addHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.addBackGroundListener();
      };
      DragonTigerGameMgr.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.removeHandler(DragonTigerMsgId_1.DragonTiger_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.removeBackGroundListener();
      };
      DragonTigerGameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      DragonTigerGameMgr.prototype.addBackGroundListener = function() {
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_HIDE, this.onHide, this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_SHOW, this.onShow, this);
      };
      DragonTigerGameMgr.prototype.removeBackGroundListener = function() {
        VV_1.vv.eventMgr.offTarget(this);
      };
      DragonTigerGameMgr.prototype.onHide = function() {
        VV_1.vv.logger.log("GAME_EVENT_HIDE");
        this.exitTime = new Date().getTime();
      };
      DragonTigerGameMgr.prototype.onShow = function() {
        var subTime = (new Date().getTime() - this.exitTime) / 1e3;
        VV_1.vv.logger.log("GAME_EVENT_SHOW   ", subTime);
        if (subTime >= 60) {
          console.warn("!!!!! exit exceed 60 seconds !!!!!");
          VV_1.vv.netMgr.closeNet();
        }
      };
      DragonTigerGameMgr.prototype.OnPlayerLeaveBroadCast = function(data) {
        var _this = this;
        data.player_id == VV_1.vv.userMgr.player_id ? 1 == data.status ? VV_1.vv.uiMgr.noOperatingAlertTips(function() {
          _this.exitTable();
        }) : 2 == data.status && this.exitTable() : this.PlayerMgr.removePlayer(data.player_id);
      };
      DragonTigerGameMgr.prototype.OnPlayerListResponse = function(data) {
        var playerInfo = data.player;
        playerInfo && this.PlayerMgr.showPlayerList(playerInfo);
      };
      DragonTigerGameMgr.prototype.OnBigWinnerBroadCast = function(data) {
        data.player && data.player.length > 0 && (this.bigWinnerData = VV_1.vv.uiMgr.deepClone(data.player));
      };
      DragonTigerGameMgr.prototype.OnRecordResponse = function(data) {
        if (data.info) {
          this.recordData = data.info;
          this.BetMgr.showRecordList(data.info);
        }
      };
      DragonTigerGameMgr.prototype.OnJoinTableBroadCast = function(data) {
        data.player && this.PlayerMgr.updatePlayerinfo(data.player);
      };
      DragonTigerGameMgr.prototype.OnJoinTableResponse = function(data) {
        if (data.table_info) {
          VV_1.vv.netMgr.send(DragonTigerMsgId_1.DragonTiger_MSG_REQ_ID.MSG_RECORD_REQ, {});
          this.tableInfo = VV_1.vv.uiMgr.deepClone(data.table_info);
          this.TableMgr.initTable(this.tableInfo);
          this.BetMgr.updatePoolState(this.tableInfo.state, this.tableInfo.state_time);
          this.PlayerMgr.initPlayer(this.tableInfo.players);
          this.PlayerMgr.initSelfInfo();
          if (this.tableInfo.tabledata && this.tableInfo.tabledata.betinfo) {
            if (this.tableInfo.state == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_RESULT) return;
            this.tableInfo.state != DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING && this.tableInfo.state != DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_BET || 0 == this.CardMgr.cardNodes.length && this.CardMgr.shuffleFakeCard();
            for (var key in this.tableInfo.tabledata.betinfo) if (this.tableInfo.tabledata.betinfo[key] > 0) {
              var totalBet = this.tableInfo.tabledata.betinfo[key] / VV_1.vv.global.exchange_rate;
              this.BetMgr.showTotalBetNum(parseInt(key), totalBet, this.tableInfo.tabledata.bet_ratio);
              this.BetMgr.recoverChips(parseInt(key), totalBet);
            }
          }
        }
      };
      DragonTigerGameMgr.prototype.OnLeaveTableResponse = function(data) {
        1 == data.status && this.exitTable();
      };
      DragonTigerGameMgr.prototype.OnPlayerOptionResponse = function(data) {
        if (1 == data.status) {
          if (data.Pool) for (var key in data.Pool) data.Pool[key] > 0 && this.BetMgr.showMyBetNum(parseInt(key), data.Pool[key] / VV_1.vv.global.exchange_rate);
        } else 2 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitNextBet")) : 3 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.rightBetPool")) : 4 == data.status ? VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is insufficient for play. Would you like to Add Cash?", true, false, true, "No,Thanks") : 5 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.betMaxLimit")) : VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitingStart"));
      };
      DragonTigerGameMgr.prototype.OnPlayerOptionBroadCast = function(data) {
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
      DragonTigerGameMgr.prototype.OnTableStateBroadCast = function(data) {
        if (data) {
          this.TableMgr.updateTableState(data.state, data.state_time);
          this.BetMgr.updatePoolState(data.state, data.state_time);
        }
      };
      DragonTigerGameMgr.prototype.OnShufferBroadCast = function(data) {
        data.dragon_card && data.tiger_card && this.CardMgr.flipCard(data.dragon_card, data.tiger_card);
      };
      DragonTigerGameMgr.prototype.OnResultBroadCast = function(data) {
        var _this = this;
        if (VV_1.vv.analysis.startTimers.betgamecomplete) {
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
            result: "success"
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GameCompleted, {
            result: "success"
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME, {
            result: "Dragon_tiger"
          });
          var cost = Date.now() - VV_1.vv.analysis.startTimers.betgamecomplete;
          VV_1.vv.logger.log("otp -> betgamecomplete cost:", cost / 1e3);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_COMPLETE_COST, {
            cost: String(cost / 1e3),
            result: "Dragon_tiger"
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
            _this.CardMgr.reset();
            VV_1.vv.netMgr.send(DragonTigerMsgId_1.DragonTiger_MSG_REQ_ID.MSG_RECORD_REQ, {});
          }), cc.delayTime(1.5), cc.callFunc(function() {
            if (_this.bigWinnerData) {
              _this.PlayerMgr.showBigWinner(_this.bigWinnerData);
              _this.bigWinnerData = null;
            }
          }), cc.delayTime(2), cc.callFunc(function() {})));
        }
      };
      DragonTigerGameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/TableLayer").getComponent(DragonTigerTableMgr_1.default);
        this.PlayerMgr = cc.find("Canvas/PlayerLayer").getComponent(DragonTigerPlayerMgr_1.default);
        this.CardMgr = cc.find("Canvas/CardLayer").getComponent(DragonTigerCardMgr_1.default);
        this.BetMgr = cc.find("Canvas/BetLayer").getComponent(DragonTigerBetMgr_1.default);
        this.BetMgr.updateBetBtn();
      };
      DragonTigerGameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
      };
      DragonTigerGameMgr = __decorate([ ccclass ], DragonTigerGameMgr);
      return DragonTigerGameMgr;
    }(GameMgrBase_1.default);
    exports.default = DragonTigerGameMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "./DragonTigerBetMgr": "DragonTigerBetMgr",
    "./DragonTigerCardMgr": "DragonTigerCardMgr",
    "./DragonTigerGameConfig": "DragonTigerGameConfig",
    "./DragonTigerMsgId": "DragonTigerMsgId",
    "./DragonTigerPlayerMgr": "DragonTigerPlayerMgr",
    "./DragonTigerTableMgr": "DragonTigerTableMgr"
  } ],
  DragonTigerMsgId: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6df75zo8epH6LkKSxNszccx", "DragonTigerMsgId");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DragonTiger_MSG_BROADCAST = exports.DragonTiger_MSG_RES_ID = exports.DragonTiger_MSG_REQ_ID = void 0;
    var DragonTiger_MSG_REQ_ID;
    (function(DragonTiger_MSG_REQ_ID) {
      DragonTiger_MSG_REQ_ID["MSG_JOINTABLE_REQ"] = "DragonJoinTableRequest";
      DragonTiger_MSG_REQ_ID["MSG_LEAVETABLE_REQ"] = "DragonLeaveTableRequest";
      DragonTiger_MSG_REQ_ID["MSG_PLAYEROPTION_REQ"] = "DragonPlayerOptionRequest";
      DragonTiger_MSG_REQ_ID["MSG_PLAYERLIST_REQ"] = "DragonPlayerListRequest";
      DragonTiger_MSG_REQ_ID["MSG_RECORD_REQ"] = "DragonRecentRecordRequest";
    })(DragonTiger_MSG_REQ_ID = exports.DragonTiger_MSG_REQ_ID || (exports.DragonTiger_MSG_REQ_ID = {}));
    var DragonTiger_MSG_RES_ID;
    (function(DragonTiger_MSG_RES_ID) {
      DragonTiger_MSG_RES_ID["MSG_JOINTABLE_RES"] = "DragonJoinTableResponse";
      DragonTiger_MSG_RES_ID["MSG_LEAVETABLE_RES"] = "DragonLeaveTableResponse";
      DragonTiger_MSG_RES_ID["MSG_PLAYEROPTION_RES"] = "DragonPlayerOptionResponse";
      DragonTiger_MSG_RES_ID["MSG_PLAYERLIST_RES"] = "DragonPlayerListResponse";
      DragonTiger_MSG_RES_ID["MSG_RECORD_RES"] = "DragonRecentRecordResponse";
    })(DragonTiger_MSG_RES_ID = exports.DragonTiger_MSG_RES_ID || (exports.DragonTiger_MSG_RES_ID = {}));
    var DragonTiger_MSG_BROADCAST;
    (function(DragonTiger_MSG_BROADCAST) {
      DragonTiger_MSG_BROADCAST["MSG_TABLESTATE_BROADCAST"] = "DragonTableStateBroadCast";
      DragonTiger_MSG_BROADCAST["MSG_DEALINGCARD_BROADCAST"] = "DragonTableDealingBroadCast";
      DragonTiger_MSG_BROADCAST["MSG_PLAYEROPTION_BROADCAST"] = "DragonPlayerOptionBroadCast";
      DragonTiger_MSG_BROADCAST["MSG_JOINTABLE_BROADCAST"] = "DragonPlayerJoinTableBroadCast";
      DragonTiger_MSG_BROADCAST["MSG_RESULT_BROADCAST"] = "DragonResultBroadCast";
      DragonTiger_MSG_BROADCAST["MSG_PLAYERLEAVETABLE_BROADCAST"] = "DragonPlayerLeaveTableBroadCast";
      DragonTiger_MSG_BROADCAST["MSG_BIGWINNER_BROADCAST"] = "DragonBigWinnerBroadcast";
    })(DragonTiger_MSG_BROADCAST = exports.DragonTiger_MSG_BROADCAST || (exports.DragonTiger_MSG_BROADCAST = {}));
    cc._RF.pop();
  }, {} ],
  DragonTigerPlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c70de1TcnBDq4GrlNgEhefg", "DragonTigerPlayerMgr");
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
    var DragonTigerMsgId_1 = require("./DragonTigerMsgId");
    var DragonTigerPlayer_1 = require("./DragonTigerPlayer");
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var BigWinner_1 = require("../../../scripts/games/gameCommon/BigWinner");
    var PlayerList_1 = require("../../../scripts/games/gameCommon/PlayerList");
    var Score_1 = require("../../../scripts/games/gameCommon/Score");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragonTigerPlayerMgr = function(_super) {
      __extends(DragonTigerPlayerMgr, _super);
      function DragonTigerPlayerMgr() {
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
      DragonTigerPlayerMgr.prototype.start = function() {
        this.refreshMoneyListener = this.refreshMoney.bind(this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      DragonTigerPlayerMgr.prototype.onDestroy = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      DragonTigerPlayerMgr.prototype.refreshMoney = function() {
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
      };
      DragonTigerPlayerMgr.prototype.reset = function() {};
      DragonTigerPlayerMgr.prototype.initSelfInfo = function() {
        this.selfNode.getChildByName("head").getChildByName("mask").getChildByName("icon").getComponent(NetPic_1.default).showNetView(VV_1.vv.userMgr.headUrl);
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
        cc.find("nick_name", this.selfNode).getComponent(cc.Label).string = VV_1.vv.userMgr.userName;
      };
      DragonTigerPlayerMgr.prototype.initPlayer = function(_playerInfo) {
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
            player.getComponent(DragonTigerPlayer_1.default).setPlayerInfo(this.playerInfo[j]);
          }
        }
      };
      DragonTigerPlayerMgr.prototype.getLogicPosByPlayerID = function(player_id) {
        for (var i = 0; i < this.playerInfo.length; i++) if (player_id == this.playerInfo[i].player_id) return this.playerInfo[i].pos;
        return 999;
      };
      DragonTigerPlayerMgr.prototype.removePlayer = function(player_id) {
        var pos = this.getLogicPosByPlayerID(player_id);
        if (999 != pos) for (var i = 0; i < this.playerInfo.length; i++) if (pos == this.playerInfo[i].pos) {
          this.playerNode[pos - 1].removeAllChildren();
          this.playerInfo.splice(i, 1);
          break;
        }
      };
      DragonTigerPlayerMgr.prototype.updatePlayerinfo = function(_playerInfo) {
        this.initPlayer(_playerInfo);
      };
      DragonTigerPlayerMgr.prototype.showPlayerList = function(data) {
        var node = cc.instantiate(this.playerListPrefab);
        cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
        node.getComponent(PlayerList_1.default).setData(data);
      };
      DragonTigerPlayerMgr.prototype.PlayerListCB = function() {
        VV_1.vv.netMgr.send(DragonTigerMsgId_1.DragonTiger_MSG_REQ_ID.MSG_PLAYERLIST_REQ, {});
      };
      DragonTigerPlayerMgr.prototype.getPlayerInfo = function() {
        return this.playerInfo;
      };
      DragonTigerPlayerMgr.prototype.showResult = function(pos, settle, isSelf) {
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
      DragonTigerPlayerMgr.prototype.showBigWinner = function(data) {
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
      __decorate([ property(cc.Node) ], DragonTigerPlayerMgr.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], DragonTigerPlayerMgr.prototype, "selfNode", void 0);
      __decorate([ property(cc.Node) ], DragonTigerPlayerMgr.prototype, "playerList", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerPlayerMgr.prototype, "playerListPrefab", void 0);
      __decorate([ property(cc.Node) ], DragonTigerPlayerMgr.prototype, "banker", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerPlayerMgr.prototype, "playerItem", void 0);
      DragonTigerPlayerMgr = __decorate([ ccclass ], DragonTigerPlayerMgr);
      return DragonTigerPlayerMgr;
    }(cc.Component);
    exports.default = DragonTigerPlayerMgr;
    cc._RF.pop();
  }, {
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameCommon/BigWinner": void 0,
    "../../../scripts/games/gameCommon/PlayerList": void 0,
    "../../../scripts/games/gameCommon/Score": void 0,
    "./DragonTigerMsgId": "DragonTigerMsgId",
    "./DragonTigerPlayer": "DragonTigerPlayer"
  } ],
  DragonTigerPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34a4cNtDXVIQo8w7/bHNppb", "DragonTigerPlayer");
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
    var DragonTigerPlayer = function(_super) {
      __extends(DragonTigerPlayer, _super);
      function DragonTigerPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nickName = null;
        _this.coin = null;
        _this.head = null;
        _this.info = {
          player_id: "",
          nick: "",
          facelook: "",
          coin: 0
        };
        return _this;
      }
      DragonTigerPlayer.prototype.getPlayerInfo = function() {
        return this.info;
      };
      DragonTigerPlayer.prototype.setPlayerInfo = function(data) {
        data.player_id && (this.info.player_id = data.player_id);
        if (data.nick) {
          this.info.nick = data.nick;
          this.nickName.string = VV_1.vv.tools.transformNickName(this.info.nick);
        }
        data.facelook && (this.info.facelook = data.facelook);
        data.totalbet && (this.coin.string = data.totalbet);
        this.head.showNetView(this.info.facelook);
      };
      __decorate([ property(cc.Label) ], DragonTigerPlayer.prototype, "nickName", void 0);
      __decorate([ property(cc.Label) ], DragonTigerPlayer.prototype, "coin", void 0);
      __decorate([ property(NetPic_1.default) ], DragonTigerPlayer.prototype, "head", void 0);
      DragonTigerPlayer = __decorate([ ccclass ], DragonTigerPlayer);
      return DragonTigerPlayer;
    }(cc.Component);
    exports.default = DragonTigerPlayer;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  DragonTigerRecordRoad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0013akzghDSLeFHPmlqbZ5", "DragonTigerRecordRoad");
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
    var DragonTigerBigRoadItem_1 = require("./DragonTigerBigRoadItem");
    var DragonTigerBeadRoadItem_1 = require("./DragonTigerBeadRoadItem");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var UIBase_1 = require("../../../scripts/games/gameBase/UIBase");
    var RoadItemType;
    (function(RoadItemType) {
      RoadItemType[RoadItemType["BigRoad"] = 1] = "BigRoad";
      RoadItemType[RoadItemType["BeadRoad"] = 2] = "BeadRoad";
    })(RoadItemType = exports.RoadItemType || (exports.RoadItemType = {}));
    var ResultType;
    (function(ResultType) {
      ResultType[ResultType["Dragon"] = 1] = "Dragon";
      ResultType[ResultType["Tiger"] = 2] = "Tiger";
      ResultType[ResultType["Tie"] = 3] = "Tie";
      ResultType[ResultType["ColorTie"] = 4] = "ColorTie";
    })(ResultType = exports.ResultType || (exports.ResultType = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragonTigerRecordRoad = function(_super) {
      __extends(DragonTigerRecordRoad, _super);
      function DragonTigerRecordRoad() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sgame_qUGHaw = 2510;
        _this._sgame_bxKdMc = 3151;
        _this.bigRoadLayout = null;
        _this.bigRoadItem = null;
        _this.beadRoadItem = null;
        _this.roundLabel = null;
        _this.roundDragonLabel = null;
        _this.roundTigerLabel = null;
        _this.roundTieLabel = null;
        _this.beadRoadStartPos = null;
        _this.beadRoadNode = null;
        _this.poolSize = 10;
        _this.bigRoadItemPool = null;
        _this.beadRoadItemPool = null;
        return _this;
      }
      DragonTigerRecordRoad.prototype._sgame_Az5Ie1 = function() {
        var a = "2GJCr";
        var b = 6410;
        return a.length + b;
      };
      DragonTigerRecordRoad.prototype.onLoad = function() {
        this.initRoadItemNodePool();
        var gameMgr = VV_1.vv.gameMgr;
        if (gameMgr.recordData) {
          this.updateRoundLabel(gameMgr.recordData);
          this.updateBigRoad(gameMgr.recordData);
          this.updateBeadRoad(this.getBeadRoadResult(gameMgr.recordData));
        }
      };
      DragonTigerRecordRoad.prototype.onDestroy = function() {
        this.bigRoadItemPool.clear();
        this.beadRoadItemPool.clear();
      };
      DragonTigerRecordRoad.prototype.initRoadItemNodePool = function() {
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
      DragonTigerRecordRoad.prototype.createRoadItem = function(type, value, parentNode, pos, tieRound) {
        var item = null;
        if (type == RoadItemType.BeadRoad) {
          item = this.beadRoadItemPool.size() > 0 ? this.beadRoadItemPool.get() : cc.instantiate(this.beadRoadItem);
          item.parent = parentNode;
          item.setPosition(pos);
          item.getComponent(DragonTigerBeadRoadItem_1.default).bindData(value, tieRound);
        } else if (type == RoadItemType.BigRoad) {
          item = this.bigRoadItemPool.size() > 0 ? this.bigRoadItemPool.get() : cc.instantiate(this.bigRoadItem);
          item.getComponent(DragonTigerBigRoadItem_1.default).bindData(value);
        }
        return item;
      };
      DragonTigerRecordRoad.prototype.updateRoundLabel = function(recordData) {
        var dragonRoundSum = 0;
        var tigerRoundSum = 0;
        var tieRoundSum = 0;
        var roundSum = recordData.length;
        for (var i = 0; i < recordData.length; i++) recordData[i] == ResultType.Dragon ? dragonRoundSum += 1 : recordData[i] == ResultType.Tiger ? tigerRoundSum += 1 : tieRoundSum += 1;
        this.roundLabel.string = "Round: " + roundSum;
        this.roundDragonLabel.string = String(dragonRoundSum);
        this.roundTigerLabel.string = String(tigerRoundSum);
        this.roundTieLabel.string = String(tieRoundSum);
      };
      DragonTigerRecordRoad.prototype.updateBigRoad = function(recordData) {
        this.bigRoadLayout.removeAllChildren(true);
        for (var i = 0; i < recordData.length; i++) {
          var item = this.createRoadItem(RoadItemType.BigRoad, recordData[i]);
          this.bigRoadLayout.addChild(item);
        }
      };
      DragonTigerRecordRoad.prototype.updateBeadRoad = function(beadRoadData) {
        var temp = beadRoadData;
        beadRoadData.length > 28 && (temp = beadRoadData.slice(-28));
        var startPos = this.beadRoadStartPos.getPosition();
        var gapX = 40;
        var gapY = 40;
        for (var i = 0; i < temp.length; i++) for (var j = 0; j < temp[i].length; j++) {
          var px = 0;
          var py = 0;
          var tieRound = 0;
          if (temp[i][j] == ResultType.Tie) {
            temp[i].length > 1 && (tieRound = temp[i].length);
            px = startPos.x + i * gapX;
            py = startPos.y;
          } else if (j > 5) {
            if (27 == i && j > 5) break;
            px = startPos.x + i * gapX + (j - 5) * gapX;
            py = startPos.y - 5 * gapY;
          } else {
            px = startPos.x + i * gapX;
            py = startPos.y - j * gapY;
          }
          this.createRoadItem(RoadItemType.BeadRoad, temp[i][j], this.beadRoadNode, cc.v2(px, py), tieRound);
        }
      };
      DragonTigerRecordRoad.prototype.getBeadRoadResult = function(a) {
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
      DragonTigerRecordRoad.prototype.start = function() {
        this.show();
      };
      DragonTigerRecordRoad.prototype.btnClose = function() {
        this.hide();
      };
      __decorate([ property(cc.Node) ], DragonTigerRecordRoad.prototype, "bigRoadLayout", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerRecordRoad.prototype, "bigRoadItem", void 0);
      __decorate([ property(cc.Prefab) ], DragonTigerRecordRoad.prototype, "beadRoadItem", void 0);
      __decorate([ property(cc.Label) ], DragonTigerRecordRoad.prototype, "roundLabel", void 0);
      __decorate([ property(cc.Label) ], DragonTigerRecordRoad.prototype, "roundDragonLabel", void 0);
      __decorate([ property(cc.Label) ], DragonTigerRecordRoad.prototype, "roundTigerLabel", void 0);
      __decorate([ property(cc.Label) ], DragonTigerRecordRoad.prototype, "roundTieLabel", void 0);
      __decorate([ property(cc.Node) ], DragonTigerRecordRoad.prototype, "beadRoadStartPos", void 0);
      __decorate([ property(cc.Node) ], DragonTigerRecordRoad.prototype, "beadRoadNode", void 0);
      DragonTigerRecordRoad = __decorate([ ccclass ], DragonTigerRecordRoad);
      return DragonTigerRecordRoad;
    }(UIBase_1.default);
    exports.default = DragonTigerRecordRoad;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameBase/UIBase": void 0,
    "./DragonTigerBeadRoadItem": "DragonTigerBeadRoadItem",
    "./DragonTigerBigRoadItem": "DragonTigerBigRoadItem"
  } ],
  DragonTigerRecord: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9b06HO5uZDgpO2n7CqaQbQ", "DragonTigerRecord");
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
    var DragonTigerRecord = function(_super) {
      __extends(DragonTigerRecord, _super);
      function DragonTigerRecord() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      DragonTigerRecord.prototype.start = function() {};
      __decorate([ property(cc.Label) ], DragonTigerRecord.prototype, "label", void 0);
      __decorate([ property ], DragonTigerRecord.prototype, "text", void 0);
      DragonTigerRecord = __decorate([ ccclass ], DragonTigerRecord);
      return DragonTigerRecord;
    }(cc.Component);
    exports.default = DragonTigerRecord;
    cc._RF.pop();
  }, {} ],
  DragonTigerTableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7164oAZFFF4YfdIv4rIyO3", "DragonTigerTableMgr");
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
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var DragonTigerGameConfig_1 = require("./DragonTigerGameConfig");
    var DragonTigerGameMgr_1 = require("./DragonTigerGameMgr");
    var DragonTigerMsgId_1 = require("./DragonTigerMsgId");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_TableMgr = function(_super) {
      __extends(TP_TableMgr, _super);
      function TP_TableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tableInfo = null;
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
        VV_1.vv.gameMgr = new DragonTigerGameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
      };
      TP_TableMgr.prototype.reset = function() {};
      TP_TableMgr.prototype.btnCB = function(event, customData) {
        "btn_back" == customData ? VV_1.vv.gameMgr.showMenuUI() : "btn_addcash" == customData ? PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash) : "btn_rule" == customData ? VV_1.vv.uiMgr.showGameRule() : "btn_record" == customData ? this.showRecordRoadUI() : "btn_exit" == customData && this.exit();
      };
      TP_TableMgr.prototype.exit = function() {
        var isBeting = false;
        if (VV_1.vv.gameMgr) for (var key in VV_1.vv.gameMgr.BetMgr.curBetData) VV_1.vv.gameMgr.BetMgr.curBetData[key] > 0 && (isBeting = true);
        if (isBeting) {
          VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitSettle"));
          return;
        }
        VV_1.vv.netMgr.send(DragonTigerMsgId_1.DragonTiger_MSG_REQ_ID.MSG_LEAVETABLE_REQ, {});
      };
      TP_TableMgr.prototype.showRecordRoadUI = function() {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("recordRoad");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.DragonTiger, function(bundle) {
          bundle.load("prefabs/recordRoad", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
            }
          });
        });
      };
      TP_TableMgr.prototype.stateUpdate = function(dt) {
        if (!this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active) return;
        this.countTime -= dt;
        this.setState(Math.round(this.countTime));
        this.countTime <= 0 && this.stopTableState();
      };
      TP_TableMgr.prototype.getTipsText = function(state) {
        return 1 == state ? I18n_1.I18n.getText("ab.scene.tips1") : 2 == state ? I18n_1.I18n.getText("ab.scene.tips2") : 3 == state ? I18n_1.I18n.getText("baccarat.scene.tips2") : 4 == state ? I18n_1.I18n.getText("baccarat.scene.tips4") : "";
      };
      TP_TableMgr.prototype.updateTableState = function(state, state_time) {
        if (state) {
          this.tableState = state;
          this.tableInfo.getChildByName("tableState").getChildByName("txtTip").getComponent(cc.Label).string = this.getTipsText(state);
        }
        this.stopTableState();
        this.countTime = state_time;
        this.setState(this.countTime);
        (this.countTime > 0 && state == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_BET || state == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) && (this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active = true);
      };
      TP_TableMgr.prototype.setState = function(dt) {
        if (dt >= 0) {
          this.tableInfo.getChildByName("tableState").active = true;
          this.tableInfo.getChildByName("tableState").getChildByName("txtTime").getComponent(cc.Label).string = "  " + dt + " s ";
          if (this.tableState == DragonTigerGameConfig_1.TABLE_STATE.TABLE_STATE_BET) {
            var gameMgr = VV_1.vv.gameMgr;
            gameMgr.CardMgr.showBetTime(dt);
          }
        }
      };
      TP_TableMgr.prototype.stopTableState = function() {
        this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active = false;
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.CardMgr.showBetTime(-1);
        this.countTime = null;
      };
      TP_TableMgr.prototype.update = function(dt) {
        this.stateUpdate(dt);
      };
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "tableInfo", void 0);
      TP_TableMgr = __decorate([ ccclass ], TP_TableMgr);
      return TP_TableMgr;
    }(cc.Component);
    exports.default = TP_TableMgr;
    cc._RF.pop();
  }, {
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "./DragonTigerGameConfig": "DragonTigerGameConfig",
    "./DragonTigerGameMgr": "DragonTigerGameMgr",
    "./DragonTigerMsgId": "DragonTigerMsgId"
  } ],
  DragonTigerVsAnim: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68aebqmdz5EbZhemZPOLPqg", "DragonTigerVsAnim");
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
    var DragonTigerVsAnim = function(_super) {
      __extends(DragonTigerVsAnim, _super);
      function DragonTigerVsAnim() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dragonBg = null;
        _this.tigerBg = null;
        _this.dragonIcon = null;
        _this.tigerIcon = null;
        _this.line = null;
        _this.vIcon = null;
        _this.sIcon = null;
        _this.vsIcon = null;
        _this._dragonBgStartPos = null;
        _this._tigerBgStartPos = null;
        return _this;
      }
      DragonTigerVsAnim.prototype.onLoad = function() {
        this._dragonBgStartPos = this.dragonBg.position;
        this._tigerBgStartPos = this.tigerBg.position;
      };
      DragonTigerVsAnim.prototype._playDragonBgAnim = function() {
        cc.Tween.stopAllByTarget(this.dragonBg);
        cc.tween(this.dragonBg).set({
          position: cc.v3(-cc.winSize.width / 1.5, 0, 0)
        }).to(.3, {
          scale: 1.2,
          position: this._dragonBgStartPos
        }, {
          easing: "sineOut"
        }).to(.2, {
          scale: 1
        }).start().start();
      };
      DragonTigerVsAnim.prototype._playTigerBgAnim = function() {
        cc.Tween.stopAllByTarget(this.tigerBg);
        cc.tween(this.tigerBg).set({
          position: cc.v3(cc.winSize.width / 1.5, 0, 0)
        }).to(.3, {
          scale: 1.2,
          position: this._tigerBgStartPos
        }, {
          easing: "sineOut"
        }).to(.2, {
          scale: 1
        }).start();
      };
      DragonTigerVsAnim.prototype._playDragonIconAnim = function() {
        cc.Tween.stopAllByTarget(this.dragonIcon);
        cc.tween(this.dragonIcon).to(.4, {
          scale: 1.5
        }, {
          easing: "sineOut"
        }).to(.1, {
          scale: 1
        }).start();
      };
      DragonTigerVsAnim.prototype._playTigerIconAnim = function() {
        cc.Tween.stopAllByTarget(this.tigerIcon);
        cc.tween(this.tigerIcon).to(.4, {
          scale: 1.5
        }, {
          easing: "sineOut"
        }).to(.1, {
          scale: 1
        }).start();
      };
      DragonTigerVsAnim.prototype._playVsIconAnim = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.vIcon);
        cc.tween(this.vIcon).set({
          opacity: 0,
          scale: 1.5
        }).to(.5, {
          scale: 1,
          opacity: 255
        }).start();
        cc.Tween.stopAllByTarget(this.sIcon);
        cc.tween(this.sIcon).set({
          opacity: 0,
          scale: 1.5
        }).to(.5, {
          scale: 1,
          opacity: 255
        }).call(function() {
          _this._playLineAnim();
        }).start();
      };
      DragonTigerVsAnim.prototype._playLineAnim = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.line);
        cc.tween(this.line).set({
          scale: 2,
          active: true
        }).to(.3, {
          scale: 1
        }).call(function() {
          _this._playVsIconLightAnim();
        }).start();
      };
      DragonTigerVsAnim.prototype._playVsIconLightAnim = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.vsIcon);
        cc.tween(this.vsIcon).call(function() {
          _this.vsIcon.active = false;
          _this._playHideAnim();
        }).start();
      };
      DragonTigerVsAnim.prototype._playHideAnim = function() {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).delay(.6).to(.5, {
          opacity: 0
        }).call(function() {
          _this.node.destroy();
        }).start();
      };
      DragonTigerVsAnim.prototype.show = function(state) {
        this._playDragonBgAnim();
        this._playTigerBgAnim();
        this._playTigerIconAnim();
        this._playDragonIconAnim();
        this._playVsIconAnim();
      };
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "dragonBg", void 0);
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "tigerBg", void 0);
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "dragonIcon", void 0);
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "tigerIcon", void 0);
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "line", void 0);
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "vIcon", void 0);
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "sIcon", void 0);
      __decorate([ property(cc.Node) ], DragonTigerVsAnim.prototype, "vsIcon", void 0);
      DragonTigerVsAnim = __decorate([ ccclass ], DragonTigerVsAnim);
      return DragonTigerVsAnim;
    }(cc.Component);
    exports.default = DragonTigerVsAnim;
    cc._RF.pop();
  }, {} ]
}, {}, [ "DragonTigerBeadRoadItem", "DragonTigerBetMgr", "DragonTigerBigRoadItem", "DragonTigerCard", "DragonTigerCardMgr", "DragonTigerGameConfig", "DragonTigerGameHelper", "DragonTigerGameMgr", "DragonTigerMsgId", "DragonTigerPlayer", "DragonTigerPlayerMgr", "DragonTigerRecord", "DragonTigerRecordRoad", "DragonTigerTableMgr", "DragonTigerVsAnim" ]);