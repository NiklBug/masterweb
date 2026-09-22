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
  AB_BetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "207e1xkoo1KLYnitwOmsxmR", "AB_BetMgr");
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
    var AB_BetTip_1 = require("./AB_BetTip");
    var AB_GameConfig_1 = require("./AB_GameConfig");
    var AB_MsgId_1 = require("./AB_MsgId");
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var Chip_1 = require("../../../scripts/games/gameCommon/Chip");
    var ChipBtnItem_1 = require("../../../scripts/games/gameCommon/ChipBtnItem");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AB_BetMgr = function(_super) {
      __extends(AB_BetMgr, _super);
      function AB_BetMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chipLayout = null;
        _this.betPoolNodes = [];
        _this.chipBtnItem = null;
        _this.chipItem = null;
        _this.recordItem = null;
        _this.recordList = null;
        _this.autoBetNode = null;
        _this.poolSize = 10;
        _this.chipPool = null;
        _this.chipArr = [];
        _this.chipNodes = [];
        _this.curChipIndex = 0;
        _this.playerNodeOrignPos = [];
        _this.lastBetData = null;
        _this.curBetData = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0
        };
        return _this;
      }
      AB_BetMgr.prototype.start = function() {
        this.initChipNodePool();
        this.storagePlayersOrignPos();
        VV_1.vv.analysis.startTimers.betgamecomplete = null;
      };
      AB_BetMgr.prototype.reset = function() {
        this.lastBetData = VV_1.vv.uiMgr.deepClone(this.curBetData);
        cc.log("====\u4e0a\u4e00\u628a\u4e0b\u6ce8=====", this.lastBetData);
        for (var key in this.curBetData) this.curBetData[key] = 0;
      };
      AB_BetMgr.prototype.storagePlayersOrignPos = function() {
        var gameMgr = VV_1.vv.gameMgr;
        for (var i = 0; i < gameMgr.PlayerMgr.playerNode.length; i++) gameMgr.PlayerMgr.playerNode[i] && this.playerNodeOrignPos.push(gameMgr.PlayerMgr.playerNode[i].position);
      };
      AB_BetMgr.prototype.destoryChips = function() {
        for (var i = 0; i < this.chipNodes.length; i++) this.chipNodes[i] && this.flyChipFromAtoB(this.chipNodes[i], this.chipNodes[i], VV_1.vv.gameMgr.CardMgr.croupier);
        this.chipNodes.length > 0 && VV_1.vv.audioMgr.playSound("recycleCoin");
        this.chipNodes.splice(0);
      };
      AB_BetMgr.prototype.poolBtnCB = function(event, customData) {
        var index = parseInt(customData);
        index && this.requestBet(this.chipArr[this.curChipIndex] * VV_1.vv.global.exchange_rate, index);
      };
      AB_BetMgr.prototype.createChip = function(parentNode, pos) {
        var chip = null;
        chip = this.chipPool.size() > 0 ? this.chipPool.get() : cc.instantiate(this.chipItem);
        chip.parent = parentNode;
        chip.getComponent(Chip_1.default).init(pos);
        return chip;
      };
      AB_BetMgr.prototype.initChipNodePool = function() {
        this.chipPool = new cc.NodePool();
        for (var i = 0; i < this.poolSize; i++) {
          var chip = cc.instantiate(this.chipItem);
          this.chipPool.put(chip);
        }
      };
      AB_BetMgr.prototype.recyleChip = function(_chip) {
        this.chipPool.put(_chip);
      };
      AB_BetMgr.prototype.flyChipFromAtoB = function(node, nodeA, nodeB) {
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
      AB_BetMgr.prototype.flyChipToPlayer = function(pos, winning) {
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = gameMgr.PlayerMgr.banker.position;
        var ePos = gameMgr.PlayerMgr.playerNode[pos - 1].position;
        var eNode = gameMgr.PlayerMgr.playerNode[pos - 1];
        this.flyChip(winning, sPos, ePos, eNode, true);
      };
      AB_BetMgr.prototype.flyChipToPool = function(poorIndex, seatIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        var gameMgr = VV_1.vv.gameMgr;
        var sPos = null;
        var lPos = null;
        if (999 == seatIndex) sPos = gameMgr.PlayerMgr.playerList.position; else if (-1 == seatIndex) sPos = gameMgr.PlayerMgr.selfNode.position; else {
          sPos = gameMgr.PlayerMgr.playerNode[seatIndex - 1].position;
          this.playerShake(gameMgr.PlayerMgr.playerNode[seatIndex - 1], seatIndex);
        }
        var desNode = this.betPoolNodes[poorIndex - 1];
        cc.find("chipsRect", this.betPoolNodes[poorIndex - 1]) && (desNode = cc.find("chipsRect", this.betPoolNodes[poorIndex - 1]));
        var wPos = desNode.convertToWorldSpaceAR(sPos);
        lPos = 999 == seatIndex ? gameMgr.PlayerMgr.playerList.convertToNodeSpaceAR(wPos) : -1 == seatIndex ? gameMgr.PlayerMgr.selfNode.convertToNodeSpaceAR(wPos) : gameMgr.PlayerMgr.playerNode[seatIndex - 1].convertToNodeSpaceAR(wPos);
        this.flyChip(betNum, sPos, lPos, desNode, false);
      };
      AB_BetMgr.prototype.recoverChips = function(poolIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        for (var i = 0; i < this.getChipNumByBet(betNum); i++) {
          var pos = this.getRandomPosInRect(this.betPoolNodes[poolIndex - 1].position, this.betPoolNodes[poolIndex - 1].width / 2, this.betPoolNodes[poolIndex - 1].height / 2);
          var chip = this.createChip(this.node, pos);
          this.chipNodes.push(chip);
        }
      };
      AB_BetMgr.prototype.playerShake = function(tNode, seatIndex) {
        var _this = this;
        tNode.runAction(cc.sequence(cc.moveTo(.1, tNode.position.x + 5, tNode.position.y), cc.moveTo(.1, tNode.position.x - 5, tNode.position.y), cc.callFunc(function() {
          tNode.position = _this.playerNodeOrignPos[seatIndex - 1];
        })));
      };
      AB_BetMgr.prototype.flyChip = function(betNum, sPos, ePos, endNode, isTemp) {
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
      AB_BetMgr.prototype.updateBetBtn = function() {
        var _this = this;
        var coin = parseInt(VV_1.vv.userMgr.coins);
        coin >= 0 && coin <= 2e3 ? this.chipArr = AB_GameConfig_1.GameConfig.BET_COIN.level1 : coin > 2e3 && coin <= 5e3 ? this.chipArr = AB_GameConfig_1.GameConfig.BET_COIN.level2 : coin > 5e3 && coin <= 1e4 ? this.chipArr = AB_GameConfig_1.GameConfig.BET_COIN.level3 : coin > 1e4 && coin <= 2e4 ? this.chipArr = AB_GameConfig_1.GameConfig.BET_COIN.level4 : coin > 2e4 && (this.chipArr = AB_GameConfig_1.GameConfig.BET_COIN.level5);
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
      AB_BetMgr.prototype.updateChipState = function() {
        for (var i = 0; i < this.chipLayout.childrenCount; i++) i == this.curChipIndex ? this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(true) : this.chipLayout.children[i].getComponent(ChipBtnItem_1.default).setSelect(false);
      };
      AB_BetMgr.prototype.getChipNumByBet = function(betNum) {
        var chipNum = 1;
        betNum > 0 && betNum <= 1 ? chipNum = 1 : betNum > 1 && betNum <= 10 ? chipNum = 2 : betNum > 10 && betNum <= 100 ? chipNum = 5 : betNum > 100 && betNum <= 1e3 ? chipNum = 10 : betNum > 1e3 && betNum <= 2e3 ? chipNum = 20 : betNum > 2e3 && (chipNum = 30);
        return chipNum;
      };
      AB_BetMgr.prototype.getRandomPosInRect = function(point, width, height) {
        var minX = point.x - width / 2;
        var maxX = point.x + width / 2;
        var x = Math.random() * (maxX - minX + 1) + minX;
        var minY = point.y - height / 2;
        var maxY = point.y + height / 2;
        var y = Math.random() * (maxY - minY + 1) + minY;
        return new cc.Vec3(x, y);
      };
      AB_BetMgr.prototype.showResult = function(index) {
        var _this = this;
        this.betPoolNodes[index - 1].getChildByName("select").active = true;
        cc.tween(this.betPoolNodes[index - 1].getChildByName("select")).repeat(8, cc.tween().to(.25, {
          opacity: 55
        }).to(.25, {
          opacity: 255
        })).call(function() {
          _this.betPoolNodes[index - 1].getChildByName("select").active = false;
        }).start();
      };
      AB_BetMgr.prototype.showRecordList = function(list) {
        this.recordList.node.getChildByName("view").getChildByName("content").childrenCount > 0 && this.recordList.node.getChildByName("view").getChildByName("content").removeAllChildren();
        list.length > 8 && (list = list.slice(-8));
        for (var i = 0; i < list.length; i++) {
          var record = cc.instantiate(this.recordItem);
          this.recordList.node.getChildByName("view").getChildByName("content").addChild(record);
          list[i].AB && (record.getChildByName("ab").getChildByName(String(list[i].AB)).active = true);
          list[i].Color && (record.getChildByName("color").getChildByName(String(list[i].Color)).active = true);
          i == list.length - 1 && (record.getChildByName("light").active = true);
        }
      };
      AB_BetMgr.prototype.updatePoolState = function(state) {
        for (var i = 0; i < 4; i++) this.betPoolNodes[i].getChildByName("light").active = state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_BET;
        for (var i = 4; i < 6; i++) state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FINAL_BET || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FIRST_BET ? this.betPoolNodes[i].getChildByName("light").active = true : this.betPoolNodes[i].getChildByName("light").active = false;
        if (state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FIRST_WAITING || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_WAITING) for (var k = 0; k < this.betPoolNodes.length; k++) {
          this.betPoolNodes[k].getChildByName("info").getChildByName("mybet").getComponent(cc.Label).string = "";
          this.betPoolNodes[k].getChildByName("info").getChildByName("totalbet").getComponent(cc.Label).string = "";
        }
        if (state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_BET || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FINAL_BET || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FIRST_BET) {
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
      AB_BetMgr.prototype.showTotalBetNum = function(pool, total) {
        for (var i = 0; i < this.betPoolNodes.length; i++) total && (this.betPoolNodes[pool - 1].getChildByName("info").getChildByName("totalbet").getComponent(cc.Label).string = "\u20b9:" + total);
      };
      AB_BetMgr.prototype.showMyBetNum = function(pool, num) {
        for (var i = 0; i < this.betPoolNodes.length; i++) num && (this.betPoolNodes[pool - 1].getChildByName("info").getChildByName("mybet").getComponent(cc.Label).string = "\u20b9:" + num);
        for (var key in this.curBetData) parseInt(key) == pool && (this.curBetData[key] = num);
      };
      AB_BetMgr.prototype.autoBetClick = function(event, data) {
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
      AB_BetMgr.prototype.updateRepeatBtn = function(state, forceShow) {
        null != state && (state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_BET || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FIRST_BET ? this.autoBetNode.interactable = true : this.autoBetNode.interactable = false);
        null != forceShow && (this.autoBetNode.interactable = forceShow);
      };
      AB_BetMgr.prototype.autoBetSwitch = function(state) {
        var _this = this;
        if (!this.lastBetData) return;
        if (state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_BET) {
          var totalCash = 0;
          for (var key in this.lastBetData) parseInt(key) < 5 && (totalCash = this.lastBetData[key] + totalCash);
          if (!this.isCanAutoBet(totalCash)) return;
          var tIndex_1 = 0;
          var actRepeat = cc.repeat(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
            if (tIndex_1 > 4) return;
            ++tIndex_1;
            _this.lastBetData[tIndex_1] > 0 && _this.requestBet(_this.lastBetData[tIndex_1] * VV_1.vv.global.exchange_rate, tIndex_1);
          })), 4);
          this.node.runAction(actRepeat);
        } else if (state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FIRST_BET) {
          var totalCash = 0;
          for (var key in this.lastBetData) parseInt(key) > 4 && (totalCash = this.lastBetData[key] + totalCash);
          if (!this.isCanAutoBet(totalCash)) return;
          var tIndex_2 = 4;
          var actRepeat = cc.repeat(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
            if (tIndex_2 > 6) return;
            ++tIndex_2;
            _this.lastBetData[tIndex_2] > 0 && _this.requestBet(_this.lastBetData[tIndex_2] * VV_1.vv.global.exchange_rate, tIndex_2);
          })), 2);
          this.node.runAction(actRepeat);
        }
      };
      AB_BetMgr.prototype.requestBet = function(chip, side) {
        if (parseInt(VV_1.vv.userMgr.coins) < 50 && false) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is under \u20b950, add cash and continue to play", false, true);
          return;
        }
        if (!VV_1.vv.userMgr.has_recharged && false) {
          VV_1.vv.uiMgr.highPlayerAlertTips();
          return;
        }
        VV_1.vv.netMgr.send(AB_MsgId_1.AB_MSG_REQ_ID.MSG_PLAYEROPTION_REQ, {
          option: AB_GameConfig_1.OPTION_TYPE.BET,
          chip: chip,
          side: side
        });
      };
      AB_BetMgr.prototype.isCanAutoBet = function(totalCash) {
        if (totalCash > parseInt(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return false;
        }
        return true;
      };
      AB_BetMgr.prototype.showBetTip = function(state) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("betTip");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.AndarBahar, function(bundle) {
          bundle.load("prefabs/betTip", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node);
              var script = node.getComponent(AB_BetTip_1.default);
              script && script.show(state);
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], AB_BetMgr.prototype, "chipLayout", void 0);
      __decorate([ property(cc.Node) ], AB_BetMgr.prototype, "betPoolNodes", void 0);
      __decorate([ property(cc.Prefab) ], AB_BetMgr.prototype, "chipBtnItem", void 0);
      __decorate([ property(cc.Prefab) ], AB_BetMgr.prototype, "chipItem", void 0);
      __decorate([ property(cc.Prefab) ], AB_BetMgr.prototype, "recordItem", void 0);
      __decorate([ property(cc.ScrollView) ], AB_BetMgr.prototype, "recordList", void 0);
      __decorate([ property(cc.Button) ], AB_BetMgr.prototype, "autoBetNode", void 0);
      AB_BetMgr = __decorate([ ccclass ], AB_BetMgr);
      return AB_BetMgr;
    }(cc.Component);
    exports.default = AB_BetMgr;
    cc._RF.pop();
  }, {
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameCommon/Chip": void 0,
    "../../../scripts/games/gameCommon/ChipBtnItem": void 0,
    "./AB_BetTip": "AB_BetTip",
    "./AB_GameConfig": "AB_GameConfig",
    "./AB_MsgId": "AB_MsgId"
  } ],
  AB_BetTip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9fc9JeXeRHY5wMZQSIctBr", "AB_BetTip");
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
    var I18nSprite_1 = require("../../../scripts/frameworks/components/i18n/I18nSprite");
    var AB_GameConfig_1 = require("./AB_GameConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AB_BetTip = function(_super) {
      __extends(AB_BetTip, _super);
      function AB_BetTip() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.imgArr = [];
        _this.img = null;
        return _this;
      }
      AB_BetTip.prototype.start = function() {
        this.node.setScale(1, 0);
      };
      AB_BetTip.prototype.show = function(state) {
        var _this = this;
        VV_1.vv.audioMgr.playSound("outCardStart");
        state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_BET ? this.img.string = this.imgArr[0] : state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FIRST_BET ? this.img.string = this.imgArr[1] : state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FINAL_BET && (this.img.string = this.imgArr[2]);
        this.node.runAction(cc.sequence(cc.scaleTo(.1, 1), cc.delayTime(2), cc.scaleTo(.1, 1, 0), cc.callFunc(function() {
          _this.node.destroy();
        })));
      };
      __decorate([ property([ cc.String ]) ], AB_BetTip.prototype, "imgArr", void 0);
      __decorate([ property(I18nSprite_1.default) ], AB_BetTip.prototype, "img", void 0);
      AB_BetTip = __decorate([ ccclass ], AB_BetTip);
      return AB_BetTip;
    }(cc.Component);
    exports.default = AB_BetTip;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18nSprite": void 0,
    "./AB_GameConfig": "AB_GameConfig"
  } ],
  AB_CardMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "498b8VGbuBD/p1YVxEu8s3m", "AB_CardMgr");
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
    var AB_Card_1 = require("./AB_Card");
    var AB_GameConfig_1 = require("./AB_GameConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AB_CardMgr = function(_super) {
      __extends(AB_CardMgr, _super);
      function AB_CardMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardLeft = null;
        _this.cardRight = null;
        _this.cardMiddle = null;
        _this.croupier = null;
        _this.cardItem = null;
        _this.cardNodes = [];
        return _this;
      }
      AB_CardMgr.prototype.reset = function() {
        for (var i = 0; i < this.cardNodes.length; i++) this.cardNodes[i] && this.cardNodes[i].destroy();
        this.cardNodes.splice(0);
      };
      AB_CardMgr.prototype.shuffle = function(type, value) {
        var cfg = {
          M: {
            endPos: cc.v2(this.cardMiddle.position.x, this.cardMiddle.position.y),
            cardScale: .5
          },
          A: {
            endPos: cc.v2(this.cardLeft.position.x, this.cardLeft.position.y),
            cardScale: .65
          },
          B: {
            endPos: cc.v2(this.cardRight.position.x, this.cardRight.position.y),
            cardScale: .65
          }
        };
        var card = cc.instantiate(this.cardItem);
        this.node.addChild(card);
        this.cardNodes.push(card);
        card.stopAllActions();
        card.position = this.croupier.position;
        card.scale = 0;
        card.angle = 0;
        cc.tween(card).to(.5, {
          position: cfg[type].endPos,
          scale: cfg[type].cardScale,
          angle: 360
        }, {
          easing: "cubicOut"
        }).call(function() {
          VV_1.vv.audioMgr.playSound("card");
          card.getComponent(AB_Card_1.default).setCardValue(value, type);
        }).start();
      };
      AB_CardMgr.prototype.showWinCardAnim = function(index) {
        var type = null;
        if (5 == index) type = AB_GameConfig_1.CARD_TYPE.TYPE_A; else {
          if (6 != index) return;
          type = AB_GameConfig_1.CARD_TYPE.TYPE_B;
        }
        for (var i = 0; i < this.cardNodes.length; i++) this.cardNodes[i].getComponent(AB_Card_1.default).getCardType() == AB_GameConfig_1.CARD_TYPE.TYPE_M || this.cardNodes[i].getComponent(AB_Card_1.default).getCardType() == type ? this.cardNodes[i].getComponent(AB_Card_1.default).lightCard() : this.cardNodes[i].getComponent(AB_Card_1.default).setGray();
      };
      AB_CardMgr.prototype.showMCardAnim = function(mCardValue) {
        var _this = this;
        if (mCardValue) {
          var _loop_1 = function(i) {
            if (this_1.cardNodes[i].getComponent(AB_Card_1.default).getCardType() == AB_GameConfig_1.CARD_TYPE.TYPE_M) {
              this_1.cardNodes[i].stopAllActions();
              this_1.cardNodes[i].runAction(cc.sequence(cc.scaleTo(.2, 0, .5), cc.scaleTo(.2, .5, .5), cc.callFunc(function() {
                _this.cardNodes[i].getComponent(AB_Card_1.default).setCardValue(mCardValue, AB_GameConfig_1.CARD_TYPE.TYPE_M);
              })));
            }
          };
          var this_1 = this;
          for (var i = 0; i < this.cardNodes.length; i++) _loop_1(i);
          VV_1.vv.audioMgr.playSound("card");
        }
      };
      AB_CardMgr.prototype.initMCard = function(value, state) {
        if (value) {
          var card = cc.instantiate(this.cardItem);
          card.position = this.cardMiddle.position;
          card.scale = .5;
          this.node.addChild(card);
          card.getComponent(AB_Card_1.default).setCardType(AB_GameConfig_1.CARD_TYPE.TYPE_M);
          state >= AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_RESULT ? card.getComponent(AB_Card_1.default).setCardValue(value, AB_GameConfig_1.CARD_TYPE.TYPE_M) : card.getComponent(AB_Card_1.default).setCardValue(null, AB_GameConfig_1.CARD_TYPE.TYPE_M);
          this.cardNodes.push(card);
        }
      };
      __decorate([ property(cc.Node) ], AB_CardMgr.prototype, "cardLeft", void 0);
      __decorate([ property(cc.Node) ], AB_CardMgr.prototype, "cardRight", void 0);
      __decorate([ property(cc.Node) ], AB_CardMgr.prototype, "cardMiddle", void 0);
      __decorate([ property(cc.Node) ], AB_CardMgr.prototype, "croupier", void 0);
      __decorate([ property(cc.Prefab) ], AB_CardMgr.prototype, "cardItem", void 0);
      AB_CardMgr = __decorate([ ccclass ], AB_CardMgr);
      return AB_CardMgr;
    }(cc.Component);
    exports.default = AB_CardMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./AB_Card": "AB_Card",
    "./AB_GameConfig": "AB_GameConfig"
  } ],
  AB_Card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5f30YztC9CR48Bx0ptuAzt", "AB_Card");
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
    var AB_GameHelper_1 = require("./AB_GameHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AB_Card = function(_super) {
      __extends(AB_Card, _super);
      function AB_Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.cardFront = null;
        _this.cardBack = null;
        _this.blinkNode = null;
        _this._cardValue = null;
        _this._cardType = null;
        return _this;
      }
      AB_Card.prototype.start = function() {};
      AB_Card.prototype.onDestroy = function() {};
      AB_Card.prototype.getCardData = function() {
        return this._cardValue;
      };
      AB_Card.prototype.setCardValue = function(_value, _cardtype) {
        this.setCardType(_cardtype);
        this.updateCardValue(_value);
      };
      AB_Card.prototype.setCardType = function(type) {
        this._cardType = type;
      };
      AB_Card.prototype.getCardType = function() {
        return this._cardType;
      };
      AB_Card.prototype.lightCard = function() {
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
      AB_Card.prototype.setGray = function() {
        this.cardFront.getChildByName("gray").active = true;
      };
      AB_Card.prototype.updateCardValue = function(_cardValue) {
        if (_cardValue) {
          this._cardValue = _cardValue;
          this.cardBack.active = false;
          this.cardFront.active = true;
          var CARD_VALUE = AB_GameHelper_1.AB_GameHelper.getCardValue(_cardValue);
          var CARD_COLOR = AB_GameHelper_1.AB_GameHelper.getCardColor(_cardValue);
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
      __decorate([ property(cc.SpriteAtlas) ], AB_Card.prototype, "atlas", void 0);
      __decorate([ property(cc.Node) ], AB_Card.prototype, "cardFront", void 0);
      __decorate([ property(cc.Node) ], AB_Card.prototype, "cardBack", void 0);
      __decorate([ property(cc.Node) ], AB_Card.prototype, "blinkNode", void 0);
      AB_Card = __decorate([ ccclass ], AB_Card);
      return AB_Card;
    }(cc.Component);
    exports.default = AB_Card;
    cc._RF.pop();
  }, {
    "./AB_GameHelper": "AB_GameHelper"
  } ],
  AB_GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8fb4PWZmhJ84Bi3xnZ4zcv", "AB_GameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OPTION_TYPE = exports.CARD_TYPE = exports.TABLE_STATE = exports.GameConfig = void 0;
    var TABLE_STATE;
    (function(TABLE_STATE) {
      TABLE_STATE[TABLE_STATE["TABLE_STATE_WAITING"] = 1] = "TABLE_STATE_WAITING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_COLOR_DEALING"] = 2] = "TABLE_STATE_COLOR_DEALING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_COLOR_BET"] = 3] = "TABLE_STATE_COLOR_BET";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_COLOR_RESULT"] = 4] = "TABLE_STATE_COLOR_RESULT";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_FIRST_WAITING"] = 5] = "TABLE_STATE_FIRST_WAITING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_FIRST_BET"] = 6] = "TABLE_STATE_FIRST_BET";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_FIRST_DEALING"] = 7] = "TABLE_STATE_FIRST_DEALING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_FINAL_BET"] = 8] = "TABLE_STATE_FINAL_BET";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_FINAL_DEALING"] = 9] = "TABLE_STATE_FINAL_DEALING";
      TABLE_STATE[TABLE_STATE["TABLE_STATE_FINAL_RESULT"] = 10] = "TABLE_STATE_FINAL_RESULT";
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
          3: "Bet on Colour ends in",
          4: "Color Settle",
          5: "Next Round starts in",
          6: "First Bet",
          7: "Dealing Cards",
          8: "Final Bet",
          9: "Dealing Cards",
          10: "Final Settle"
        }
      }
    };
    exports.GameConfig = GameConfig;
    cc._RF.pop();
  }, {} ],
  AB_GameHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ddad0WQ+g5LL55Fkl2vNbxs", "AB_GameHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AB_GameHelper = void 0;
    var AB_GameHelper = function() {
      function AB_GameHelper() {}
      AB_GameHelper.getCardValue = function(_value) {
        if (_value) return _value % 16;
      };
      AB_GameHelper.getCardColor = function(_value) {
        if (_value) return Math.floor(_value / 16);
      };
      AB_GameHelper.CardData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 79 ];
      return AB_GameHelper;
    }();
    exports.AB_GameHelper = AB_GameHelper;
    cc._RF.pop();
  }, {} ],
  AB_GameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0c5bzH3C1EcKZ7eiT8SjzM", "AB_GameMgr");
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
    var AB_BetMgr_1 = require("./AB_BetMgr");
    var AB_CardMgr_1 = require("./AB_CardMgr");
    var AB_GameConfig_1 = require("./AB_GameConfig");
    var AB_MsgId_1 = require("./AB_MsgId");
    var AB_PlayerMgr_1 = require("./AB_PlayerMgr");
    var AB_TableMgr_1 = require("./AB_TableMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AB_GameMgr = function(_super) {
      __extends(AB_GameMgr, _super);
      function AB_GameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TableMgr = null;
        _this.CardMgr = null;
        _this.PlayerMgr = null;
        _this.BetMgr = null;
        _this.tableInfo = null;
        _this.exitTime = null;
        _this.bigWinnerData = null;
        return _this;
      }
      AB_GameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.AndarBahar,
                  room_id: 999999
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) VV_1.vv.netMgr.send(AB_MsgId_1.AB_MSG_REQ_ID.MSG_JOINTABLE_REQ, {}); else {
                VV_1.vv.logger.warn("\u8fdb\u5165AB\u95f4\u5931\u8d25", data);
                this.exitTable();
              }
              return [ 3, 3 ];

             case 2:
              error_1 = _a.sent();
              VV_1.vv.logger.warn("\u8fdb\u5165AB\u623f\u95f4\u5931\u8d25", error_1);
              this.exitTable();
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      AB_GameMgr.prototype.addNetListener = function() {
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.addHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.addBackGroundListener();
      };
      AB_GameMgr.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOptionResponse, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_PLAYERLIST_RES, this.OnPlayerListResponse, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_RES_ID.MSG_RECORD_RES, this.OnRecordResponse, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnJoinTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnShufferBroadCast, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_RESULT_BROADCAST, this.OnResultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_PLAYERLEAVETABLE_BROADCAST, this.OnPlayerLeaveBroadCast, this);
        VV_1.vv.netMgr.removeHandler(AB_MsgId_1.AB_MSG_BROADCAST.MSG_BIGWINNER_BROADCAST, this.OnBigWinnerBroadCast, this);
        this.removeBackGroundListener();
      };
      AB_GameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      AB_GameMgr.prototype.addBackGroundListener = function() {
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_HIDE, this.onHide, this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_SHOW, this.onShow, this);
      };
      AB_GameMgr.prototype.removeBackGroundListener = function() {
        VV_1.vv.eventMgr.offTarget(this);
      };
      AB_GameMgr.prototype.onHide = function() {
        VV_1.vv.logger.log("GAME_EVENT_HIDE");
        this.exitTime = new Date().getTime();
      };
      AB_GameMgr.prototype.onShow = function() {
        var subTime = (new Date().getTime() - this.exitTime) / 1e3;
        VV_1.vv.logger.log("GAME_EVENT_SHOW   ", subTime);
        if (subTime >= 60) {
          console.warn("!!!!! exit exceed 20 seconds !!!!!");
          VV_1.vv.netMgr.closeNet();
        }
      };
      AB_GameMgr.prototype.OnPlayerLeaveBroadCast = function(data) {
        var _this = this;
        data.player_id == VV_1.vv.userMgr.player_id ? 1 == data.status ? VV_1.vv.uiMgr.noOperatingAlertTips(function() {
          _this.exitTable();
        }) : 2 == data.status && this.exitTable() : this.PlayerMgr.removePlayer(data.player_id);
      };
      AB_GameMgr.prototype.OnPlayerListResponse = function(data) {
        var playerInfo = data.player;
        playerInfo && this.PlayerMgr.showPlayerList(playerInfo);
      };
      AB_GameMgr.prototype.OnBigWinnerBroadCast = function(data) {
        data.player && data.player.length > 0 && (this.bigWinnerData = VV_1.vv.uiMgr.deepClone(data.player));
      };
      AB_GameMgr.prototype.OnRecordResponse = function(data) {
        data.info && this.BetMgr.showRecordList(data.info);
      };
      AB_GameMgr.prototype.OnJoinTableBroadCast = function(data) {
        data.player && this.PlayerMgr.updatePlayerinfo(data.player);
      };
      AB_GameMgr.prototype.OnJoinTableResponse = function(data) {
        if (data.table_info) {
          VV_1.vv.netMgr.send(AB_MsgId_1.AB_MSG_REQ_ID.MSG_RECORD_REQ, {});
          this.tableInfo = VV_1.vv.uiMgr.deepClone(data.table_info);
          this.TableMgr.initTable(this.tableInfo);
          this.BetMgr.updatePoolState(this.tableInfo.state);
          this.PlayerMgr.initPlayer(this.tableInfo.players);
          this.PlayerMgr.initSelfInfo();
          if (this.tableInfo.tabledata) {
            this.tableInfo.tabledata.oricard && this.tableInfo.state > AB_GameConfig_1.TABLE_STATE.TABLE_STATE_WAITING && this.tableInfo.state != AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FINAL_RESULT && this.CardMgr.initMCard(this.tableInfo.tabledata.oricard, this.tableInfo.state);
            if (this.tableInfo.tabledata.betinfo) {
              if (this.tableInfo.state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_RESULT || this.tableInfo.state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FINAL_RESULT) return;
              for (var key in this.tableInfo.tabledata.betinfo) if (this.tableInfo.tabledata.betinfo[key] > 0) {
                var totalBet = this.tableInfo.tabledata.betinfo[key] / VV_1.vv.global.exchange_rate;
                this.BetMgr.showTotalBetNum(parseInt(key), totalBet);
                this.BetMgr.recoverChips(parseInt(key), totalBet);
              }
            }
          }
        }
      };
      AB_GameMgr.prototype.OnLeaveTableResponse = function(data) {
        1 == data.status && this.exitTable();
      };
      AB_GameMgr.prototype.OnPlayerOptionResponse = function(data) {
        if (1 == data.status) {
          if (data.Pool) for (var key in data.Pool) data.Pool[key] > 0 && this.BetMgr.showMyBetNum(parseInt(key), data.Pool[key] / VV_1.vv.global.exchange_rate);
        } else 2 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitNextBet")) : 3 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.rightBetPool")) : 4 == data.status ? VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is insufficient for play. Would you like to Add Cash?", true, false, true, "No,Thanks") : 5 == data.status ? VV_1.vv.toast.show(I18n_1.I18n.getText("toast.betMaxLimit")) : VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitingStart"));
      };
      AB_GameMgr.prototype.OnPlayerOptionBroadCast = function(data) {
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
      AB_GameMgr.prototype.OnTableStateBroadCast = function(data) {
        if (data) {
          this.TableMgr.updateTableState(data.state, data.state_time);
          this.BetMgr.updatePoolState(data.state);
        }
      };
      AB_GameMgr.prototype.OnShufferBroadCast = function(data) {
        data.cards && data.cardside && ("M" == data.cardside ? this.CardMgr.shuffle(data.cardside, null) : this.CardMgr.shuffle(data.cardside, data.cards));
      };
      AB_GameMgr.prototype.OnResultBroadCast = function(data) {
        var _this = this;
        if (VV_1.vv.analysis.startTimers.betgamecomplete) {
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
            result: "success"
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GameCompleted, {
            result: "success"
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME, {
            result: "AB"
          });
          var cost = Date.now() - VV_1.vv.analysis.startTimers.betgamecomplete;
          VV_1.vv.logger.log("otp -> betgamecomplete cost:", cost / 1e3);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_COMPLETE_COST, {
            cost: String(cost / 1e3),
            result: "AB"
          });
          VV_1.vv.analysis.startTimers.betgamecomplete = null;
        }
        if (data) {
          var selfWin_1 = 0;
          var canvas = cc.find("Canvas");
          canvas.runAction(cc.sequence(cc.callFunc(function() {
            _this.BetMgr.showResult(data.pool);
            1 == data.round ? _this.CardMgr.showMCardAnim(data.prize_card) : _this.CardMgr.showWinCardAnim(data.pool);
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
            if (2 == data.round) {
              _this.BetMgr.reset();
              _this.CardMgr.reset();
              VV_1.vv.netMgr.send(AB_MsgId_1.AB_MSG_REQ_ID.MSG_RECORD_REQ, {});
            }
          }), cc.delayTime(1.5), cc.callFunc(function() {
            if (_this.bigWinnerData) {
              _this.PlayerMgr.showBigWinner(_this.bigWinnerData);
              _this.bigWinnerData = null;
            }
          })));
        }
      };
      AB_GameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/TableLayer").getComponent(AB_TableMgr_1.default);
        this.PlayerMgr = cc.find("Canvas/PlayerLayer").getComponent(AB_PlayerMgr_1.default);
        this.CardMgr = cc.find("Canvas/CardLayer").getComponent(AB_CardMgr_1.default);
        this.BetMgr = cc.find("Canvas/BetLayer").getComponent(AB_BetMgr_1.default);
        this.BetMgr.updateBetBtn();
      };
      AB_GameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
      };
      AB_GameMgr = __decorate([ ccclass ], AB_GameMgr);
      return AB_GameMgr;
    }(GameMgrBase_1.default);
    exports.default = AB_GameMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "./AB_BetMgr": "AB_BetMgr",
    "./AB_CardMgr": "AB_CardMgr",
    "./AB_GameConfig": "AB_GameConfig",
    "./AB_MsgId": "AB_MsgId",
    "./AB_PlayerMgr": "AB_PlayerMgr",
    "./AB_TableMgr": "AB_TableMgr"
  } ],
  AB_MsgId: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f0c9e9G02JFsK5bA9+hM1Q1", "AB_MsgId");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AB_MSG_BROADCAST = exports.AB_MSG_RES_ID = exports.AB_MSG_REQ_ID = void 0;
    var AB_MSG_REQ_ID;
    (function(AB_MSG_REQ_ID) {
      AB_MSG_REQ_ID["MSG_JOINTABLE_REQ"] = "AbJoinTableRequest";
      AB_MSG_REQ_ID["MSG_LEAVETABLE_REQ"] = "AbLeaveTableRequest";
      AB_MSG_REQ_ID["MSG_PLAYEROPTION_REQ"] = "AbPlayerOptionRequest";
      AB_MSG_REQ_ID["MSG_PLAYERLIST_REQ"] = "AbPlayerListRequest";
      AB_MSG_REQ_ID["MSG_RECORD_REQ"] = "AbRecentRecordRequest";
    })(AB_MSG_REQ_ID = exports.AB_MSG_REQ_ID || (exports.AB_MSG_REQ_ID = {}));
    var AB_MSG_RES_ID;
    (function(AB_MSG_RES_ID) {
      AB_MSG_RES_ID["MSG_JOINTABLE_RES"] = "AbJoinTableResponse";
      AB_MSG_RES_ID["MSG_LEAVETABLE_RES"] = "AbLeaveTableResponse";
      AB_MSG_RES_ID["MSG_PLAYEROPTION_RES"] = "AbPlayerOptionResponse";
      AB_MSG_RES_ID["MSG_PLAYERLIST_RES"] = "AbPlayerListResponse";
      AB_MSG_RES_ID["MSG_RECORD_RES"] = "AbRecentRecordResponse";
    })(AB_MSG_RES_ID = exports.AB_MSG_RES_ID || (exports.AB_MSG_RES_ID = {}));
    var AB_MSG_BROADCAST;
    (function(AB_MSG_BROADCAST) {
      AB_MSG_BROADCAST["MSG_TABLESTATE_BROADCAST"] = "AbTableStateBroadCast";
      AB_MSG_BROADCAST["MSG_DEALINGCARD_BROADCAST"] = "AbTableDealingBroadCast";
      AB_MSG_BROADCAST["MSG_PLAYEROPTION_BROADCAST"] = "AbPlayerOptionBroadCast";
      AB_MSG_BROADCAST["MSG_JOINTABLE_BROADCAST"] = "AbPlayerJoinTableBroadCast";
      AB_MSG_BROADCAST["MSG_RESULT_BROADCAST"] = "AbResultBroadCast";
      AB_MSG_BROADCAST["MSG_PLAYERLEAVETABLE_BROADCAST"] = "AbPlayerLeaveTableBroadCast";
      AB_MSG_BROADCAST["MSG_BIGWINNER_BROADCAST"] = "AbBigWinnerBroadcast";
    })(AB_MSG_BROADCAST = exports.AB_MSG_BROADCAST || (exports.AB_MSG_BROADCAST = {}));
    cc._RF.pop();
  }, {} ],
  AB_PlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "325a978ccdNrqSEbJWo/b2X", "AB_PlayerMgr");
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
    var AB_MsgId_1 = require("./AB_MsgId");
    var AB_Player_1 = require("./AB_Player");
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var PlayerList_1 = require("../../../scripts/games/gameCommon/PlayerList");
    var Score_1 = require("../../../scripts/games/gameCommon/Score");
    var BigWinner_1 = require("../../../scripts/games/gameCommon/BigWinner");
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AB_PlayerMgr = function(_super) {
      __extends(AB_PlayerMgr, _super);
      function AB_PlayerMgr() {
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
      AB_PlayerMgr.prototype.start = function() {
        this.refreshMoneyListener = this.refreshMoney.bind(this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      AB_PlayerMgr.prototype.onDestroy = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      AB_PlayerMgr.prototype.refreshMoney = function() {
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
      };
      AB_PlayerMgr.prototype.reset = function() {};
      AB_PlayerMgr.prototype.initSelfInfo = function() {
        this.selfNode.getChildByName("head").getChildByName("mask").getChildByName("icon").getComponent(NetPic_1.default).showNetView(VV_1.vv.userMgr.headUrl);
        this.selfNode.getChildByName("coin").getComponent(cc.Label).string = VV_1.vv.userMgr.coins;
        this.selfNode.getChildByName("nick_name").getComponent(cc.Label).string = VV_1.vv.userMgr.userName;
      };
      AB_PlayerMgr.prototype.initPlayer = function(_playerInfo) {
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
            player.getComponent(AB_Player_1.default).setPlayerInfo(this.playerInfo[j]);
          }
        }
      };
      AB_PlayerMgr.prototype.getLogicPosByPlayerID = function(player_id) {
        for (var i = 0; i < this.playerInfo.length; i++) if (player_id == this.playerInfo[i].player_id) return this.playerInfo[i].pos;
        return 999;
      };
      AB_PlayerMgr.prototype.removePlayer = function(player_id) {
        var pos = this.getLogicPosByPlayerID(player_id);
        if (999 != pos) for (var i = 0; i < this.playerInfo.length; i++) if (pos == this.playerInfo[i].pos) {
          this.playerNode[pos - 1].removeAllChildren();
          this.playerInfo.splice(i, 1);
          break;
        }
      };
      AB_PlayerMgr.prototype.updatePlayerinfo = function(_playerInfo) {
        this.initPlayer(_playerInfo);
      };
      AB_PlayerMgr.prototype.showPlayerList = function(data) {
        var node = cc.instantiate(this.playerListPrefab);
        cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
        node.getComponent(PlayerList_1.default).setData(data);
      };
      AB_PlayerMgr.prototype.PlayerListCB = function() {
        VV_1.vv.netMgr.send(AB_MsgId_1.AB_MSG_REQ_ID.MSG_PLAYERLIST_REQ, {});
      };
      AB_PlayerMgr.prototype.getPlayerInfo = function() {
        return this.playerInfo;
      };
      AB_PlayerMgr.prototype.showResult = function(pos, settle, isSelf) {
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
      AB_PlayerMgr.prototype.showBigWinner = function(data) {
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
      __decorate([ property(cc.Node) ], AB_PlayerMgr.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], AB_PlayerMgr.prototype, "selfNode", void 0);
      __decorate([ property(cc.Node) ], AB_PlayerMgr.prototype, "playerList", void 0);
      __decorate([ property(cc.Prefab) ], AB_PlayerMgr.prototype, "playerListPrefab", void 0);
      __decorate([ property(cc.Node) ], AB_PlayerMgr.prototype, "banker", void 0);
      __decorate([ property(cc.Prefab) ], AB_PlayerMgr.prototype, "playerItem", void 0);
      AB_PlayerMgr = __decorate([ ccclass ], AB_PlayerMgr);
      return AB_PlayerMgr;
    }(cc.Component);
    exports.default = AB_PlayerMgr;
    cc._RF.pop();
  }, {
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameCommon/BigWinner": void 0,
    "../../../scripts/games/gameCommon/PlayerList": void 0,
    "../../../scripts/games/gameCommon/Score": void 0,
    "./AB_MsgId": "AB_MsgId",
    "./AB_Player": "AB_Player"
  } ],
  AB_Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcd24ysJOJIeZ/stCLyBfnY", "AB_Player");
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
    var AB_Player = function(_super) {
      __extends(AB_Player, _super);
      function AB_Player() {
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
      AB_Player.prototype.getPlayerInfo = function() {
        return this.info;
      };
      AB_Player.prototype.setPlayerInfo = function(data) {
        data.player_id && (this.info.player_id = data.player_id);
        if (data.nick) {
          this.info.nick = data.nick;
          this.nickName.string = VV_1.vv.tools.transformNickName(this.info.nick);
        }
        data.facelook && (this.info.facelook = data.facelook);
        this.head.showNetView(this.info.facelook);
      };
      __decorate([ property(cc.Label) ], AB_Player.prototype, "nickName", void 0);
      __decorate([ property(NetPic_1.default) ], AB_Player.prototype, "head", void 0);
      AB_Player = __decorate([ ccclass ], AB_Player);
      return AB_Player;
    }(cc.Component);
    exports.default = AB_Player;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  AB_TableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d1b7zoIzlExol8knBR5PvW", "AB_TableMgr");
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
    var AB_GameConfig_1 = require("./AB_GameConfig");
    var AB_MsgId_1 = require("../andarbahar/AB_MsgId");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var AB_GameMgr_1 = require("./AB_GameMgr");
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
        VV_1.vv.gameMgr = new AB_GameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
      };
      TP_TableMgr.prototype.reset = function() {};
      TP_TableMgr.prototype.btnCB = function(event, customData) {
        "btn_back" == customData ? VV_1.vv.gameMgr.showMenuUI() : "btn_addcash" == customData ? PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash) : "btn_rule" == customData ? VV_1.vv.uiMgr.showGameRule() : "btn_exit" == customData ? this.exit() : "btn_superclient" == customData && VV_1.vv.supperClient.showBetList();
      };
      TP_TableMgr.prototype.exit = function() {
        var isBeting = false;
        if (VV_1.vv.gameMgr) for (var key in VV_1.vv.gameMgr.BetMgr.curBetData) VV_1.vv.gameMgr.BetMgr.curBetData[key] > 0 && (isBeting = true);
        if (isBeting) {
          VV_1.vv.toast.show(I18n_1.I18n.getText("toast.waitSettle"));
          return;
        }
        VV_1.vv.netMgr.send(AB_MsgId_1.AB_MSG_REQ_ID.MSG_LEAVETABLE_REQ, {});
      };
      TP_TableMgr.prototype.stateUpdate = function(dt) {
        if (!this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active) return;
        this.countTime -= dt;
        this.setState(Math.round(this.countTime));
        this.countTime <= 0 && this.stopTableState();
      };
      TP_TableMgr.prototype.getTipsText = function(state) {
        return 1 == state ? I18n_1.I18n.getText("ab.scene.tips1") : 2 == state || 7 == state || 9 == state ? I18n_1.I18n.getText("ab.scene.tips2") : 3 == state ? I18n_1.I18n.getText("ab.scene.tips3") : 4 == state ? I18n_1.I18n.getText("ab.scene.tips4") : 5 == state ? I18n_1.I18n.getText("ab.scene.tips5") : 6 == state ? I18n_1.I18n.getText("ab.scene.tips6") : 8 == state ? I18n_1.I18n.getText("ab.scene.tips7") : 10 == state ? I18n_1.I18n.getText("ab.scene.tips8") : "";
      };
      TP_TableMgr.prototype.updateTableState = function(state, state_time) {
        if (state) {
          this.tableState = state;
          this.tableInfo.getChildByName("tableState").getChildByName("txtTip").getComponent(cc.Label).string = this.getTipsText(state);
        }
        this.stopTableState();
        this.countTime = state_time;
        this.setState(this.countTime);
        (this.countTime > 0 && state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_COLOR_BET || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_WAITING || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FINAL_BET || state == AB_GameConfig_1.TABLE_STATE.TABLE_STATE_FIRST_BET) && (this.tableInfo.getChildByName("tableState").getChildByName("txtTime").active = true);
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
    "../andarbahar/AB_MsgId": "AB_MsgId",
    "./AB_GameConfig": "AB_GameConfig",
    "./AB_GameMgr": "AB_GameMgr"
  } ]
}, {}, [ "AB_BetMgr", "AB_BetTip", "AB_Card", "AB_CardMgr", "AB_GameConfig", "AB_GameHelper", "AB_GameMgr", "AB_MsgId", "AB_Player", "AB_PlayerMgr", "AB_TableMgr" ]);