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
  TP_ButtonMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e611+UWfZG177bygQgF24j", "TP_ButtonMgr");
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
    var TP_EnumMgr_1 = require("./TP_EnumMgr");
    var TP_Player_1 = require("./TP_Player");
    var TP_EnumMgr_2 = require("../teenpatti/TP_EnumMgr");
    var SenectiveContentConfig_1 = require("../../../gp/configs/SenectiveContentConfig");
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var PanelConfigs_1 = require("../../../scripts/prefabs/panels/PanelConfigs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_ButtonMgr = function(_super) {
      __extends(TP_ButtonMgr, _super);
      function TP_ButtonMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betLayer = null;
        _this.packBtn = null;
        _this.btn_switch = null;
        _this.gpNode = [];
        _this.autoPack = false;
        _this.playerOptionLockTime = 0;
        _this.btnNames = [ "packBtn", "chaalBtn", "blindBtn", "chaalBtn_x2", "blindBtn_x2", "sideShowBtn", "showBtn" ];
        _this.adjustBtnNames = [ "betAddBtn", "betSubBtn" ];
        return _this;
      }
      TP_ButtonMgr.prototype.onLoad = function() {
        this.setSwitchBtn(false);
        if (this.gpNode) for (var i = 0; i < this.gpNode.length; i++) this.gpNode[i].active = SenectiveContentConfig_1.SenectiveContentConfig.enableToShowSenectiveContent;
      };
      TP_ButtonMgr.prototype.start = function() {};
      TP_ButtonMgr.prototype.btnCB = function(event, customData) {
        var gameMgr = VV_1.vv.gameMgr;
        VV_1.vv.logger.log("------TP_ButtonMgr------btnCB------", customData);
        switch (customData) {
         case "btn_switch":
          3 != gameMgr.TableMgr.tableStateData.state && 4 != gameMgr.TableMgr.tableStateData.state || gameMgr.PlayerMgr.getMyNodeTS().playerStatus == TP_EnumMgr_2.ePlayer_Status.PACK || gameMgr.PlayerMgr.getMyNodeTS().playerStatus == TP_EnumMgr_2.ePlayer_Status.LOSE || gameMgr.PlayerMgr.getMyNodeTS().playerStatus == TP_EnumMgr_2.ePlayer_Status.WAIT ? gameMgr.onBtnSwitch() : VV_1.vv.uiMgr.switchTableAlertTips(gameMgr.onBtnSwitch);
          break;

         case "btn_setting":
          VV_1.vv.panelRouter.show({
            panel: PanelConfigs_1.PanelConfigs.settingPanel
          });
          break;

         case "btn_info":
          SenectiveContentConfig_1.SenectiveContentConfig.enableToShowSenectiveContent && VV_1.vv.gameMgr.showTPTableInfoUI(gameMgr.TableMgr.tableInfo);
          break;

         case "addCashBtn":
          PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash);
          break;

         case "btn_rule":
          VV_1.vv.uiMgr.showGameRule();
          break;

         case "btn_exit":
          this.exit();
          break;

         case "btn_bindPhone":
          VV_1.vv.panelRouter.show({
            panel: PanelConfigs_1.PanelConfigs.bindPhonePanel
          });
          break;

         case "btn_menu":
          VV_1.vv.gameMgr.showMenuUI();
        }
      };
      TP_ButtonMgr.prototype.exit = function() {
        var gameMgr = VV_1.vv.gameMgr;
        3 != gameMgr.TableMgr.tableStateData.state && 4 != gameMgr.TableMgr.tableStateData.state || gameMgr.PlayerMgr.getMyNodeTS().playerStatus == TP_EnumMgr_2.ePlayer_Status.PACK || gameMgr.PlayerMgr.getMyNodeTS().playerStatus == TP_EnumMgr_2.ePlayer_Status.LOSE ? gameMgr.onBtnBack() : VV_1.vv.uiMgr.exitTableAlertTips(gameMgr.onBtnBack);
      };
      TP_ButtonMgr.prototype.betBtnCb = function(event, customData) {
        var gameMgr = VV_1.vv.gameMgr;
        var target = event.target;
        VV_1.vv.logger.log("------TP_ButtonMgr------betBtnCb------", target.name);
        var lockTime = 1;
        switch (target.name) {
         case "packBtn":
          if (this.getPlayerOptionLockStage()) return;
          this.playerOptionLock(lockTime);
          gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.PACK);
          break;

         case "betSubBtn":
          gameMgr.TableMgr.setBetMultiple(false);
          this.setAdjustBetBtn([ "betAddBtn" ]);
          break;

         case "betAddBtn":
          gameMgr.TableMgr.setBetMultiple(true);
          this.setAdjustBetBtn([ "betSubBtn" ]);
          break;

         case "chaalBtn":
          if (this.getPlayerOptionLockStage()) return;
          this.playerOptionLock(lockTime);
          gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.CHAAL, false);
          break;

         case "chaalBtn_x2":
          if (this.getPlayerOptionLockStage()) return;
          this.playerOptionLock(lockTime);
          gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.CHAAL, true);
          break;

         case "blindBtn":
          if (this.getPlayerOptionLockStage()) return;
          this.playerOptionLock(lockTime);
          gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.BLIND, false);
          break;

         case "blindBtn_x2":
          if (this.getPlayerOptionLockStage()) return;
          this.playerOptionLock(lockTime);
          gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.BLIND, true);
          break;

         case "sideShowBtn":
          if (this.getPlayerOptionLockStage()) return;
          this.playerOptionLock(lockTime);
          gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.SIDE_SHOW);
          break;

         case "showBtn":
          if (this.getPlayerOptionLockStage()) return;
          this.playerOptionLock(lockTime);
          gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.SHOW);
        }
      };
      TP_ButtonMgr.prototype.setBtnGold = function(btnName) {
        var btnNode = this.betLayer.getChildByName(btnName);
        if (!btnNode || !cc.find("gold", btnNode)) {
          VV_1.vv.logger.log("---btn--- not found!");
          return;
        }
        var gameMgr = VV_1.vv.gameMgr;
        var bet = gameMgr.TableMgr.getCurRoundBet();
        var txt2 = cc.find("gold/txt", btnNode).getComponent(cc.Label);
        var st = "";
        var num = 0;
        switch (btnName) {
         case "chaalBtn":
          num = (gameMgr.PlayerMgr.getMyNodeTS().isLookCard ? 2 * bet : bet) / VV_1.vv.global.exchange_rate;
          num > gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate && (num = gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate);
          st = VV_1.vv.tools.keepTwoDecimalFull(num);
          txt2.string = st;
          break;

         case "chaalBtn_x2":
          num = (gameMgr.PlayerMgr.getMyNodeTS().isLookCard ? 4 * bet : 2 * bet) / VV_1.vv.global.exchange_rate;
          num > gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate && (num = gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate);
          st = VV_1.vv.tools.keepTwoDecimalFull(num);
          txt2.string = st;
          break;

         case "blindBtn":
          txt2.string = VV_1.vv.tools.keepTwoDecimalFull(bet / VV_1.vv.global.exchange_rate);
          break;

         case "blindBtn_x2":
          num = 2 * bet / VV_1.vv.global.exchange_rate;
          2 * num > gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate && (num = gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate / 2);
          st = VV_1.vv.tools.keepTwoDecimalFull(num);
          txt2.string = st;
          break;

         case "sideShowBtn":
         case "showBtn":
          num = (gameMgr.PlayerMgr.getMyNodeTS().isLookCard ? 2 * bet : bet) / VV_1.vv.global.exchange_rate;
          num > gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate && (num = gameMgr.TableMgr.tableInfo.chaal_limit / VV_1.vv.global.exchange_rate);
          st = VV_1.vv.tools.keepTwoDecimalFull(num);
          txt2.string = st;
        }
      };
      TP_ButtonMgr.prototype.playerOptionLock = function(lockTime) {
        this.playerOptionLockTime = lockTime;
      };
      TP_ButtonMgr.prototype.getPlayerOptionLockStage = function() {
        if (0 != this.playerOptionLockTime) {
          VV_1.vv.logger.log("----\u64cd\u4f5c\u9501----");
          return true;
        }
        return false;
      };
      TP_ButtonMgr.prototype.playerOptionLockUpdate = function(dt) {
        if (this.playerOptionLockTime) {
          this.playerOptionLockTime -= dt;
          this.playerOptionLockTime <= 0 && (this.playerOptionLockTime = 0);
        }
      };
      TP_ButtonMgr.prototype.setBlindBtnShow = function(isShow) {
        this.betLayer.getChildByName("blindBtn").active = isShow;
        this.betLayer.getChildByName("blindBtn_x2").active = isShow;
        this.betLayer.getChildByName("chaalBtn").active = !isShow;
        this.betLayer.getChildByName("chaalBtn_x2").active = !isShow;
      };
      TP_ButtonMgr.prototype.setSideShowBtnShow = function(isShow) {
        this.betLayer.getChildByName("sideShowBtn").active = isShow;
        this.betLayer.getChildByName("showBtn").active = !isShow;
      };
      TP_ButtonMgr.prototype.setBetBtnInteractable = function(canBtnNames) {
        for (var _i = 0, _a = this.btnNames; _i < _a.length; _i++) {
          var btnName = _a[_i];
          var btnNode = this.betLayer.getChildByName(btnName);
          var btn = btnNode.getComponent(cc.Button);
          btn.interactable = false;
          this.setBtnGold(btnName);
        }
        for (var _b = 0, canBtnNames_1 = canBtnNames; _b < canBtnNames_1.length; _b++) {
          var btnName = canBtnNames_1[_b];
          var btnNode = this.betLayer.getChildByName(btnName);
          var btn = btnNode.getComponent(cc.Button);
          btn.interactable = true;
        }
      };
      TP_ButtonMgr.prototype.setAdjustBetBtn = function(canBtnNames) {
        for (var _i = 0, _a = this.adjustBtnNames; _i < _a.length; _i++) {
          var btnName = _a[_i];
          var btnNode = this.betLayer.getChildByName(btnName);
          var btn = btnNode.getComponent(cc.Button);
          btn.interactable = false;
        }
        for (var _b = 0, canBtnNames_2 = canBtnNames; _b < canBtnNames_2.length; _b++) {
          var btnName = canBtnNames_2[_b];
          var btnNode = this.betLayer.getChildByName(btnName);
          var btn = btnNode.getComponent(cc.Button);
          btn.interactable = true;
        }
      };
      TP_ButtonMgr.prototype.setBetBtnInteractableByType = function(type) {
        void 0 === type && (type = TP_EnumMgr_1.eBetBtn_CanType.All_NOCAN);
        var canBtnNames = [];
        var adjustBtnNames = [];
        switch (type) {
         case TP_EnumMgr_1.eBetBtn_CanType.ALL_CAN:
          canBtnNames = [ "packBtn", "chaalBtn", "blindBtn", "chaalBtn_x2", "blindBtn_x2", "sideShowBtn", "showBtn" ];
          break;

         case TP_EnumMgr_1.eBetBtn_CanType.All_NOCAN:
          canBtnNames = [ "packBtn" ];
          this.setAdjustBetBtn([]);
          break;

         case TP_EnumMgr_1.eBetBtn_CanType.SIDESHOW_NOCAN:
          canBtnNames = [ "packBtn", "chaalBtn", "blindBtn", "chaalBtn_x2", "blindBtn_x2", "showBtn" ];
        }
        this.setBetBtnInteractable(canBtnNames);
      };
      TP_ButtonMgr.prototype.updateOperationStatus = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var canBtnNames = [ "packBtn" ];
        if (gameMgr.isMyTurn) {
          canBtnNames.push("chaalBtn");
          canBtnNames.push("blindBtn");
          canBtnNames.push("chaalBtn_x2");
          canBtnNames.push("blindBtn_x2");
          canBtnNames.push("showBtn");
          var upPlayerNode = gameMgr.PlayerMgr.getUpPlayerNode();
          upPlayerNode && gameMgr.PlayerMgr.getMyNodeTS().isLookCard && upPlayerNode.getComponent(TP_Player_1.default).getIsLookCard() && canBtnNames.push("sideShowBtn");
          1 == gameMgr.PlayerMgr.getLivePlayerNodes().length ? gameMgr.BtnMgr.setSideShowBtnShow(false) : gameMgr.BtnMgr.setSideShowBtnShow(true);
        } else this.setAdjustBetBtn([]);
        this.setBetBtnInteractable(canBtnNames);
      };
      TP_ButtonMgr.prototype.onTestBtn = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.reset();
        gameMgr.PlayerMgr.initPlayer([ {
          player_id: VV_1.vv.userMgr.player_id,
          facelook: "10001",
          pos: 1,
          standby_time: 30
        }, {
          player_id: 11309502,
          nick: "Madeline Silas",
          facelook: "http://v.gameschalo.com/user/quizboos/avatar/95/02/11309502.jpg?x-oss-process=style/s&mtime=1601178293",
          pos: 2,
          standby_time: 30
        }, {
          player_id: 89078206,
          nick: "Amanda Lynch",
          facelook: "http://v.gameschalo.com/user/quizboos/avatar/82/06/89078206.jpg?x-oss-process=style/s&mtime=1601178293",
          pos: 3,
          standby_time: 30
        }, {
          player_id: 19339902,
          nick: "Eunice George",
          facelook: "http://v.gameschalo.com/user/quizboos/avatar/99/02/19339902.jpg?x-oss-process=style/s&mtime=1601178294",
          pos: 4,
          standby_time: 30
        }, {
          player_id: 27198106,
          nick: "Steward Melville",
          facelook: "http://v.gameschalo.com/user/quizboos/avatar/81/06/27198106.jpg?x-oss-process=style/s&mtime=1601178294",
          pos: 5,
          standby_time: 30
        } ]);
        gameMgr.TableMgr.initTableInfo({
          bootBet: .1
        });
        gameMgr.CardMgr.sendCard(3, [ 1, 2, 5, 4, 3 ]);
        this.scheduleOnce(function() {
          gameMgr.onTpTablePlayBroadCast({
            pos: 1,
            time: 10
          });
        }, 3);
        this.scheduleOnce(function() {
          gameMgr.onTpPlayerOptionBroadCast({
            player_id: "11309502",
            option: 1,
            bet: .4
          });
        }, 1);
      };
      TP_ButtonMgr.prototype.onTest1Btn = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.onTpSideShowResultBroadCast({
          has_agree: true,
          win_id: 27198106,
          lose_id: 11309502
        });
      };
      TP_ButtonMgr.prototype.onTest2Btn = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.onTpPlayerOptionBroadCast({
          player_id: "27198106",
          option: 2,
          multiple: true,
          bet: .4
        });
      };
      TP_ButtonMgr.prototype.onTest3Btn = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.onTpSideShowBroadCast({
          defier_id: 27198106,
          target_id: 11309502
        });
      };
      TP_ButtonMgr.prototype.reset = function() {
        this.setBlindBtnShow(true);
        this.setSideShowBtnShow(true);
        this.setBetBtnInteractableByType();
        this.setAutoPack(false);
        this.setSwitchBtn(false);
      };
      TP_ButtonMgr.prototype.setAutoPack = function(isAuto) {
        this.packBtn.children[0].active = isAuto;
        this.autoPack = this.packBtn.children[0].active;
      };
      TP_ButtonMgr.prototype.setSwitchBtn = function(isShow) {
        this.btn_switch.active = isShow;
      };
      TP_ButtonMgr.prototype.update = function(dt) {
        this.playerOptionLockUpdate(dt);
      };
      __decorate([ property(cc.Node) ], TP_ButtonMgr.prototype, "betLayer", void 0);
      __decorate([ property(cc.Node) ], TP_ButtonMgr.prototype, "packBtn", void 0);
      __decorate([ property(cc.Node) ], TP_ButtonMgr.prototype, "btn_switch", void 0);
      __decorate([ property(cc.Node) ], TP_ButtonMgr.prototype, "gpNode", void 0);
      TP_ButtonMgr = __decorate([ ccclass ], TP_ButtonMgr);
      return TP_ButtonMgr;
    }(cc.Component);
    exports.default = TP_ButtonMgr;
    cc._RF.pop();
  }, {
    "../../../gp/configs/SenectiveContentConfig": void 0,
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/prefabs/panels/PanelConfigs": void 0,
    "../teenpatti/TP_EnumMgr": "TP_EnumMgr",
    "./TP_EnumMgr": "TP_EnumMgr",
    "./TP_Player": "TP_Player"
  } ],
  TP_CardGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ed35AhvWNH6ZuhY8xk9ZOO", "TP_CardGroup");
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
    var I18nSprite_1 = require("../../../scripts/frameworks/components/i18n/I18nSprite");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var TP_Card_1 = require("./TP_Card");
    var TP_EnumMgr_1 = require("./TP_EnumMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LayoutItem = function() {
      function LayoutItem() {
        this.pos = cc.v3(0, 0, 0);
        this.angle = 0;
      }
      __decorate([ property({
        tooltip: "\u4f4d\u7f6e"
      }) ], LayoutItem.prototype, "pos", void 0);
      __decorate([ property({
        tooltip: "\u89d2\u5ea6"
      }) ], LayoutItem.prototype, "angle", void 0);
      LayoutItem = __decorate([ ccclass("LayoutItem") ], LayoutItem);
      return LayoutItem;
    }();
    var TP_CardGroup = function(_super) {
      __extends(TP_CardGroup, _super);
      function TP_CardGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardPrefab = null;
        _this.LayoutList = [];
        _this.seeBtn = null;
        _this.seenNode = null;
        _this.cardTypeNode = null;
        _this.cardTypeBgNode = null;
        _this.cardTypeSp = null;
        _this.cardTypeSPFList = [];
        _this.cardList = [];
        _this.isMy = false;
        return _this;
      }
      TP_CardGroup.prototype.start = function() {
        this.cardTypeSp.node.on(cc.Node.EventType.SIZE_CHANGED, this.cardTypeSpSizeChanged, this);
      };
      TP_CardGroup.prototype.cardTypeSpSizeChanged = function() {
        this.cardTypeBgNode.setContentSize(cc.size(this.cardTypeSp.node.width + 20, this.cardTypeSp.node.height + 15));
      };
      TP_CardGroup.prototype.reset = function() {
        while (this.cardList.length) this.cardList.pop().destroy();
        this.setSeeBtn(false);
        this.setSeenNode(false);
        this.type = TP_EnumMgr_1.eCardType.None;
        this.cardTypeNode.active = false;
        this.node.scale = this.initScale;
        this.cardTypeNodeBaseScale = {
          scaleX: this.cardTypeNode.scaleX,
          scaleY: this.cardTypeNode.scaleY
        };
      };
      TP_CardGroup.prototype.init = function(isMy, playerTS) {
        this.isMy = isMy;
        this.setSeeBtn(false);
        this.setSeenNode(false);
        this.seenNode.scale = 1 / this.node.scale;
        this.seeBtn.scale = 1 / this.node.scale;
        this.playerTS = playerTS;
        this.initScale = this.node.scale;
      };
      TP_CardGroup.prototype.getCardWPosByIndex = function() {};
      TP_CardGroup.prototype.addCardByWPos = function(sWPos) {
        var self = this;
        var sPos = this.node.convertToNodeSpaceAR(sWPos);
        var layoutData = this.LayoutList[this.cardList.length];
        if (!layoutData) {
          console.warn("----\u5e03\u5c40\u4e0d\u5b58\u5728----");
          return;
        }
        var card = cc.instantiate(this.cardPrefab);
        var cardTS = card.getComponent(TP_Card_1.default);
        cardTS.setCardValue(null);
        this.node.addChild(card, -9);
        card.position = sPos;
        card.scale = .2 / this.node.scale;
        var speed = 1800;
        var mag = sPos.sub(layoutData.pos).mag();
        var toAngle = mag / 2;
        var cycles = Math.round(toAngle / 360);
        toAngle = 360 * cycles + layoutData.angle;
        var time = mag / speed;
        VV_1.vv.audioMgr.playSound("card");
        cc.tween(card).to(time, {
          position: layoutData.pos,
          angle: toAngle,
          scale: 1
        }, {
          easing: "cubicOut"
        }).call(function() {
          card.angle = layoutData.angle;
          3 == self.cardList.length && self.isMy && !self.playerTS.isLookCard && self.setSeeBtn(true);
        }).start();
        this.cardList.push(card);
      };
      TP_CardGroup.prototype.reAddCards = function() {
        for (var i = 0; i < this.LayoutList.length; i++) {
          var layoutData = this.LayoutList[i];
          var card = cc.instantiate(this.cardPrefab);
          var cardTS = card.getComponent(TP_Card_1.default);
          cardTS.setCardValue(null);
          this.node.addChild(card, -9);
          card.position = layoutData.pos;
          card.angle = layoutData.angle;
          card.scale = 1;
          this.cardList.push(card);
        }
      };
      TP_CardGroup.prototype.showCards = function(cards, isSelf) {
        this.cardList.length || this.reAddCards();
        isSelf || (this.node.scale = .5);
        var _loop_1 = function(i) {
          var card = this_1.cardList[i];
          isSelf || (card.y += 30);
          var cardTS = card.getComponent(TP_Card_1.default);
          if (cardTS.getCardData()) return "continue";
          if (null == cards) {
            VV_1.vv.logger.log("!card is null");
            return {
              value: void 0
            };
          }
          var cardValue = cards[i];
          cc.tween(card).delay(.1 * i).to(.1, {
            scaleX: 0
          }).call(function() {
            cardTS.setCardValue(cardValue);
          }).to(.1, {
            scaleX: 1
          }).start();
        };
        var this_1 = this;
        for (var i = 0; i < this.cardList.length; i++) {
          var state_1 = _loop_1(i);
          if ("object" === typeof state_1) return state_1.value;
        }
      };
      TP_CardGroup.prototype.showCardType = function(type) {
        var SPRITE = cc.Material.getBuiltinMaterial("2d-sprite");
        var GRAY_SPRITE = cc.Material.getBuiltinMaterial("2d-gray-sprite");
        this.setSeeBtn(false);
        this.setSeenNode(false);
        if (!type) return;
        this.type = type;
        this.cardTypeNode.active = true;
        this.cardTypeSp.string = this.cardTypeSPFList[type - 1];
        type == TP_EnumMgr_1.eCardType.GAO ? this.cardTypeSp.node.getComponent(cc.Sprite).setMaterial(0, GRAY_SPRITE) : this.cardTypeSp.node.getComponent(cc.Sprite).setMaterial(0, SPRITE);
        this.cardTypeNode.scaleX = 0;
        cc.tween(this.cardTypeNode).to(.2, {
          scaleX: 1.2
        }).to(.05, {
          scaleX: 1
        }).start();
      };
      TP_CardGroup.prototype.onSeeBtn = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.SEE);
      };
      TP_CardGroup.prototype.setSeeBtn = function(isShow) {
        this.seeBtn.active = isShow;
      };
      TP_CardGroup.prototype.setSeenNode = function(isShow) {
        this.seenNode.active = isShow;
      };
      TP_CardGroup.prototype.cardGrey = function() {
        for (var i = 0; i < this.cardList.length; i++) {
          var card = this.cardList[i];
          var cardTS = card.getComponent(TP_Card_1.default);
          cardTS.greycardBack();
        }
      };
      __decorate([ property(cc.Prefab) ], TP_CardGroup.prototype, "cardPrefab", void 0);
      __decorate([ property({
        type: [ LayoutItem ],
        tooltip: "\u5e03\u5c40\u5217\u8868"
      }) ], TP_CardGroup.prototype, "LayoutList", void 0);
      __decorate([ property(cc.Node) ], TP_CardGroup.prototype, "seeBtn", void 0);
      __decorate([ property(cc.Node) ], TP_CardGroup.prototype, "seenNode", void 0);
      __decorate([ property(cc.Node) ], TP_CardGroup.prototype, "cardTypeNode", void 0);
      __decorate([ property(cc.Node) ], TP_CardGroup.prototype, "cardTypeBgNode", void 0);
      __decorate([ property(I18nSprite_1.default) ], TP_CardGroup.prototype, "cardTypeSp", void 0);
      __decorate([ property([ cc.String ]) ], TP_CardGroup.prototype, "cardTypeSPFList", void 0);
      TP_CardGroup = __decorate([ ccclass ], TP_CardGroup);
      return TP_CardGroup;
    }(cc.Component);
    exports.default = TP_CardGroup;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18nSprite": void 0,
    "./TP_Card": "TP_Card",
    "./TP_EnumMgr": "TP_EnumMgr"
  } ],
  TP_CardMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f6cauAom9J4ajfwMrGakbm", "TP_CardMgr");
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
    var TP_Player_1 = require("./TP_Player");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_CardMgr = function(_super) {
      __extends(TP_CardMgr, _super);
      function TP_CardMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sendCardPos = null;
        _this.sendCardDate = 0;
        _this.sendCardSeq = [];
        return _this;
      }
      TP_CardMgr.prototype.start = function() {};
      TP_CardMgr.prototype.reset = function() {
        this.sendCardSeq = [];
      };
      TP_CardMgr.prototype.sendCard = function(startSeat, playerSeatList) {
        var gameMgr = VV_1.vv.gameMgr;
        var beforeList = playerSeatList.filter(function(value) {
          return value <= startSeat;
        });
        var backList = playerSeatList.filter(function(value) {
          return value > startSeat;
        });
        beforeList.sort(function(a, b) {
          return b - a;
        });
        backList.sort(function(a, b) {
          return b - a;
        });
        var sendCardSeatList = beforeList.concat(backList);
        VV_1.vv.logger.log("---\u53d1\u724c\u4f4d\u7f6e\uff1a", startSeat, "---\u53d1\u724c\u5e8f\u5217\uff1a", sendCardSeatList);
        this.sendCardDate = new Date().getTime();
        this.sendCardSeq = [];
        var sendCardTime = 0;
        var sendCardInterval = .1;
        var sendCardWPos = this.sendCardPos.parent.convertToWorldSpaceAR(this.sendCardPos.position);
        for (var i = 0; i < 3; i++) for (var j = 0; j < sendCardSeatList.length; j++) {
          var seat = sendCardSeatList[j];
          if (-1 == seat) {
            console.warn("--sendCard--\u5ea7\u4f4d\u53f7\u5bf9\u5e94\u73a9\u5bb6\u4e0d\u5b58\u5728---", seat);
            continue;
          }
          var playerNode = gameMgr.PlayerMgr.getPlayerNodeByViewSeat(seat);
          if (!playerNode || !playerNode.children[0]) {
            console.warn("--sendCard--\u5ea7\u4f4d\u53f7\u5bf9\u5e94\u73a9\u5bb6\u4e0d\u5b58\u5728---", seat);
            continue;
          }
          var playerTS = playerNode.children[0].getComponent(TP_Player_1.default);
          this.sendCardSeq.push({
            countDown: sendCardTime,
            cardGroup: playerTS.cardGroup,
            wPos: sendCardWPos
          });
          sendCardTime += sendCardInterval;
        }
      };
      TP_CardMgr.prototype.update = function(dt) {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr && gameMgr.timeUpdate(dt);
        if (this.sendCardSeq.length) {
          this.sendCardSeq = this.sendCardSeq.filter(function(sendCardData) {
            sendCardData.countDown -= dt;
            if (sendCardData.countDown <= 0) {
              sendCardData.cardGroup.addCardByWPos(sendCardData.wPos);
              return false;
            }
            return true;
          });
          if (!this.sendCardSeq.length) {
            VV_1.vv.logger.log("---\u724c\u5df2\u5168\u90e8\u53d1\u5b8c---\u53d1\u724c\u4f7f\u7528\u65f6\u95f4---", new Date().getTime() - this.sendCardDate);
            if (gameMgr.PlayerMgr.getMyNodeTS().info.bet) {
              gameMgr.TableMgr.setBetLayer(true);
              gameMgr.BtnMgr.updateOperationStatus();
            }
          }
        }
      };
      __decorate([ property(cc.Node) ], TP_CardMgr.prototype, "sendCardPos", void 0);
      TP_CardMgr = __decorate([ ccclass ], TP_CardMgr);
      return TP_CardMgr;
    }(cc.Component);
    exports.default = TP_CardMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./TP_Player": "TP_Player"
  } ],
  TP_Card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fec7IvqfxEmL4OEIpy0em6", "TP_Card");
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
    var TP_GameHelper_1 = require("./TP_GameHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_Card = function(_super) {
      __extends(TP_Card, _super);
      function TP_Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.cardFront = null;
        _this.cardBack = null;
        _this.blinkNode = null;
        _this._cardValue = null;
        return _this;
      }
      TP_Card.prototype.getCardData = function() {
        return this._cardValue;
      };
      TP_Card.prototype.setCardValue = function(_value) {
        this.updateCardValue(_value);
      };
      TP_Card.prototype.updateCardValue = function(_cardValue) {
        if (_cardValue) {
          this._cardValue = _cardValue;
          this.cardBack.active = false;
          this.cardFront.active = true;
          var CARD_VALUE = TP_GameHelper_1.TP_GameHelper.getCardValue(_cardValue);
          var CARD_COLOR = TP_GameHelper_1.TP_GameHelper.getCardColor(_cardValue);
          if (CARD_COLOR > 3) {
            this.cardFront.getChildByName("common").active = false;
            this.cardFront.getChildByName("joker").active = true;
          } else {
            this.cardFront.getChildByName("common").active = true;
            this.cardFront.getChildByName("joker").active = false;
            CARD_VALUE ? this.cardFront.getChildByName("common").getChildByName("value").getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("new_card_" + CARD_COLOR + CARD_VALUE.toString(16)) : VV_1.vv.logger.log("\u724c\u503c\u9519\u8bef: ", _cardValue);
          }
        } else {
          this.cardFront.active = false;
          this.cardBack.active = true;
        }
      };
      TP_Card.prototype.greycardBack = function() {
        var GRAY_SPRITE = cc.Material.getBuiltinMaterial("2d-gray-sprite");
        this.cardBack.getComponent(cc.Sprite).setMaterial(0, GRAY_SPRITE);
      };
      __decorate([ property(cc.SpriteAtlas) ], TP_Card.prototype, "atlas", void 0);
      __decorate([ property(cc.Node) ], TP_Card.prototype, "cardFront", void 0);
      __decorate([ property(cc.Node) ], TP_Card.prototype, "cardBack", void 0);
      __decorate([ property(cc.Node) ], TP_Card.prototype, "blinkNode", void 0);
      TP_Card = __decorate([ ccclass ], TP_Card);
      return TP_Card;
    }(cc.Component);
    exports.default = TP_Card;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./TP_GameHelper": "TP_GameHelper"
  } ],
  TP_EnumMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "233f8+Vv+5F/KhWsv6jFwXb", "TP_EnumMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.eGIRL_ANI = exports.eBET_TYPE = exports.eROOM_TYPE = exports.eMaskType = exports.eOptionType = exports.eCardType = exports.ePlayer_Status = exports.eBetBtn_CanType = exports.eOperation_Tips = void 0;
    var eOperation_Tips;
    (function(eOperation_Tips) {
      eOperation_Tips[eOperation_Tips["BLIND"] = 0] = "BLIND";
      eOperation_Tips[eOperation_Tips["BLINDX2"] = 1] = "BLINDX2";
      eOperation_Tips[eOperation_Tips["CHAAL"] = 2] = "CHAAL";
      eOperation_Tips[eOperation_Tips["CHAALX2"] = 3] = "CHAALX2";
      eOperation_Tips[eOperation_Tips["SIDE_SHOW"] = 4] = "SIDE_SHOW";
      eOperation_Tips[eOperation_Tips["SHOW"] = 5] = "SHOW";
    })(eOperation_Tips || (eOperation_Tips = {}));
    exports.eOperation_Tips = eOperation_Tips;
    var eBetBtn_CanType;
    (function(eBetBtn_CanType) {
      eBetBtn_CanType[eBetBtn_CanType["All_NOCAN"] = 0] = "All_NOCAN";
      eBetBtn_CanType[eBetBtn_CanType["ALL_CAN"] = 1] = "ALL_CAN";
      eBetBtn_CanType[eBetBtn_CanType["ADD_NOCAN"] = 2] = "ADD_NOCAN";
      eBetBtn_CanType[eBetBtn_CanType["SUB_NOCAN"] = 3] = "SUB_NOCAN";
      eBetBtn_CanType[eBetBtn_CanType["SIDESHOW_NOCAN"] = 4] = "SIDESHOW_NOCAN";
    })(eBetBtn_CanType || (eBetBtn_CanType = {}));
    exports.eBetBtn_CanType = eBetBtn_CanType;
    var ePlayer_Status;
    (function(ePlayer_Status) {
      ePlayer_Status[ePlayer_Status["NORMAL"] = 0] = "NORMAL";
      ePlayer_Status[ePlayer_Status["WIN"] = 1] = "WIN";
      ePlayer_Status[ePlayer_Status["LOSE"] = 2] = "LOSE";
      ePlayer_Status[ePlayer_Status["PACK"] = 3] = "PACK";
      ePlayer_Status[ePlayer_Status["WAIT"] = 4] = "WAIT";
    })(ePlayer_Status || (ePlayer_Status = {}));
    exports.ePlayer_Status = ePlayer_Status;
    var eCardType;
    (function(eCardType) {
      eCardType[eCardType["None"] = 0] = "None";
      eCardType[eCardType["BAOZI"] = 1] = "BAOZI";
      eCardType[eCardType["PURESEQ"] = 2] = "PURESEQ";
      eCardType[eCardType["SEQ"] = 3] = "SEQ";
      eCardType[eCardType["COLOR"] = 4] = "COLOR";
      eCardType[eCardType["DUIPAI"] = 5] = "DUIPAI";
      eCardType[eCardType["GAO"] = 6] = "GAO";
    })(eCardType || (eCardType = {}));
    exports.eCardType = eCardType;
    var eOptionType;
    (function(eOptionType) {
      eOptionType[eOptionType["SEE"] = 1] = "SEE";
      eOptionType[eOptionType["BLIND"] = 2] = "BLIND";
      eOptionType[eOptionType["CHAAL"] = 3] = "CHAAL";
      eOptionType[eOptionType["SIDE_SHOW"] = 4] = "SIDE_SHOW";
      eOptionType[eOptionType["SHOW"] = 5] = "SHOW";
      eOptionType[eOptionType["PACK"] = 6] = "PACK";
      eOptionType[eOptionType["RECHARGE"] = 7] = "RECHARGE";
      eOptionType[eOptionType["RECHARGE_SUC"] = 8] = "RECHARGE_SUC";
    })(eOptionType || (eOptionType = {}));
    exports.eOptionType = eOptionType;
    var eMaskType;
    (function(eMaskType) {
      eMaskType[eMaskType["OUT"] = 0] = "OUT";
      eMaskType[eMaskType["LOSE"] = 1] = "LOSE";
      eMaskType[eMaskType["PACK"] = 2] = "PACK";
      eMaskType[eMaskType["CHARGING"] = 3] = "CHARGING";
    })(eMaskType || (eMaskType = {}));
    exports.eMaskType = eMaskType;
    var eROOM_TYPE;
    (function(eROOM_TYPE) {
      eROOM_TYPE[eROOM_TYPE["CASH"] = 1] = "CASH";
      eROOM_TYPE[eROOM_TYPE["PRACTICE"] = 2] = "PRACTICE";
    })(eROOM_TYPE || (eROOM_TYPE = {}));
    exports.eROOM_TYPE = eROOM_TYPE;
    var eBET_TYPE;
    (function(eBET_TYPE) {
      eBET_TYPE[eBET_TYPE["SILVER"] = 0] = "SILVER";
      eBET_TYPE[eBET_TYPE["GOLD"] = 1] = "GOLD";
      eBET_TYPE[eBET_TYPE["GOLD_BAR"] = 2] = "GOLD_BAR";
    })(eBET_TYPE || (eBET_TYPE = {}));
    exports.eBET_TYPE = eBET_TYPE;
    var eGIRL_ANI;
    (function(eGIRL_ANI) {
      eGIRL_ANI[eGIRL_ANI["SEND_CARD"] = 0] = "SEND_CARD";
      eGIRL_ANI[eGIRL_ANI["IDLE"] = 1] = "IDLE";
      eGIRL_ANI[eGIRL_ANI["KNOCK"] = 2] = "KNOCK";
    })(eGIRL_ANI || (eGIRL_ANI = {}));
    exports.eGIRL_ANI = eGIRL_ANI;
    cc._RF.pop();
  }, {} ],
  TP_GameHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf5c1sbiIFIequk0soUFqI4", "TP_GameHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TP_GameHelper = void 0;
    var TP_GameHelper = function() {
      function TP_GameHelper() {}
      TP_GameHelper.getCardValue = function(_value) {
        if (_value) return _value % 16;
      };
      TP_GameHelper.getCardColor = function(_value) {
        if (_value) return Math.floor(_value / 16);
      };
      TP_GameHelper.CardData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 79 ];
      return TP_GameHelper;
    }();
    exports.TP_GameHelper = TP_GameHelper;
    cc._RF.pop();
  }, {} ],
  TP_GameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fb94GQRGVMWqQYQfxP5Phj", "TP_GameMgr");
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
    var TP_ButtonMgr_1 = require("./TP_ButtonMgr");
    var TP_CardMgr_1 = require("./TP_CardMgr");
    var TP_EnumMgr_1 = require("./TP_EnumMgr");
    var TP_MsgId_1 = require("./TP_MsgId");
    var TP_Player_1 = require("./TP_Player");
    var TP_PlayerMgr_1 = require("./TP_PlayerMgr");
    var TP_TableMgr_1 = require("./TP_TableMgr");
    var SenectiveContentConfig_1 = require("../../../gp/configs/SenectiveContentConfig");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var AlertInterface_1 = require("../../../scripts/components/alert/AlertInterface");
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var GameMgrBase_1 = require("../../../scripts/games/gameBase/GameMgrBase");
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var TP_SideShowUI_1 = require("./TP_SideShowUI");
    var TP_TableInfoUI_1 = require("./TP_TableInfoUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_GameMgr = function(_super) {
      __extends(TP_GameMgr, _super);
      function TP_GameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TableMgr = null;
        _this.CardMgr = null;
        _this.PlayerMgr = null;
        _this.BtnMgr = null;
        _this.rechargeInTpListener = null;
        _this.optionStateChangeListener = null;
        _this.rechargeSucListener = null;
        _this.bindPhoneSucListener = null;
        _this.isPlayWinTextAni = 0;
        _this.isSettle = false;
        _this.comparingWinner = 0;
        _this.isShowTPInfo = false;
        _this.isMyTurn = false;
        _this.netListenerList = [];
        _this.canSee = false;
        _this.room_type = TP_EnumMgr_1.eROOM_TYPE.CASH;
        return _this;
      }
      TP_GameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.TeenPatti,
                  room_id: VV_1.vv.enterGameMgr.getRoomInfo().room_id
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) {
                VV_1.vv.enterGameMgr.getRoomInfo().room_type && (this.room_type = VV_1.vv.enterGameMgr.getRoomInfo().room_type);
                this.isPractice() && (VV_1.vv.global.pCoin = 2e5);
                VV_1.vv.netMgr.send(TP_MsgId_1.TP_MSG_REQ_ID.JoinTpTableRequest, {});
              } else {
                VV_1.vv.logger.warn("\u8fdb\u5165teenpatti\u95f4\u5931\u8d25", data);
                this.exitTable();
              }
              return [ 3, 3 ];

             case 2:
              error_1 = _a.sent();
              VV_1.vv.logger.warn("\u8fdb\u5165teenpatti\u623f\u95f4\u5931\u8d25", error_1);
              this.exitTable();
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      TP_GameMgr.prototype.addNetListener = function() {
        this.removeNetListener();
        this.pushNetListener(TP_MsgId_1.TP_MSG_RES_ID.JoinTpTableResponse, this.onJoinTpTableResponse);
        this.pushNetListener(TP_MsgId_1.TP_MSG_RES_ID.ReJoinTpTableResponse, this.onReJoinTpTableResponse);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpTableDealerBroadCast, this.onTpTableDealerBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpPlayerJoinTableBroadCast, this.onTpPlayerJoinTableBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpPlayerOfflineBroadCast, this.onTpPlayerOfflineBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpPlayerLeaveTableBroadCast, this.onTpPlayerLeaveTableBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpTableStateBroadCast, this.onTpTableStateBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpTablePlayBroadCast, this.onTpTablePlayBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_RES_ID.TpPlayerOptionResponse, this.onTpPlayerOptionResponse);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpPlayerOptionBroadCast, this.onTpPlayerOptionBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpPotBroadCast, this.onTpPotBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpSideShowBroadCast, this.onTpSideShowBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpSideShowResultBroadCast, this.onTpSideShowResultBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpTableResultBroadCast, this.onTpTableResultBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_RES_ID.ChangedTpTableResponse, this.onChangedTableResponse);
        this.pushNetListener(TP_MsgId_1.TP_MSG_RES_ID.LeaveTpTableResponse, this.onLeaveTableResponse);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.AiChargeBroadCast, this.onAiChargeBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpRoundBroadCast, this.onTpRoundBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpPlayerKickBroadCast, this.onTpPlayerKickBroadCast);
        this.pushNetListener(TP_MsgId_1.TP_MSG_BROADCAST.TpAiCoinsLeftBroadCast, this.onTpAiCoinsLeftBroadCast);
        this.addBackGroundListener();
        this.addEventListener();
      };
      TP_GameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      TP_GameMgr.prototype.addEventListener = function() {
        this.rechargeInTpListener = this.onHandlerRechargeInTP.bind(this);
        this.optionStateChangeListener = this.onHandlerOptionState.bind(this);
        this.rechargeSucListener = this.onHandlerRechargeSuc.bind(this);
        this.bindPhoneSucListener = this.bindPhoneSuc.bind(this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_PAY_IN_TP, this.rechargeInTpListener);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_OPTION_STATE_CHANGE_IN_TP, this.optionStateChangeListener);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_PAYSUCCEED, this.rechargeSucListener);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_BINDPHONE, this.bindPhoneSucListener);
      };
      TP_GameMgr.prototype.removeEventListener = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_PAY_IN_TP, this.rechargeInTpListener);
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_OPTION_STATE_CHANGE_IN_TP, this.optionStateChangeListener);
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_PAYSUCCEED, this.rechargeSucListener);
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_BINDPHONE, this.bindPhoneSucListener);
      };
      TP_GameMgr.prototype.onHandlerRechargeInTP = function() {
        this.isMyTurn && this.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.RECHARGE);
      };
      TP_GameMgr.prototype.onHandlerRechargeSuc = function() {
        this.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.RECHARGE_SUC);
      };
      TP_GameMgr.prototype.onHandlerOptionState = function() {
        PayMgr_1.default._isRecharging && this.isMyTurn && this.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.RECHARGE);
      };
      TP_GameMgr.prototype.bindPhoneSuc = function() {
        this.TableMgr.showBindPhoneTipNode(false);
      };
      TP_GameMgr.prototype.onTpAiCoinsLeftBroadCast = function(data) {
        VV_1.vv.logger.log("----ai\u91d1\u5e01\u63a8\u9001----", data);
        if (data && data.player_id) {
          var playerNode = this.PlayerMgr.getPlayerNodeByUserId(data.player_id);
          if (playerNode && !this.isPractice()) {
            var playerNodeTS = playerNode.children[0].getComponent(TP_Player_1.default);
            playerNodeTS.updateCoin(VV_1.vv.tools.keepTwoDecimalFull(data.coins / VV_1.vv.global.exchange_rate));
          }
        }
      };
      TP_GameMgr.prototype.onTpPlayerKickBroadCast = function(data) {
        VV_1.vv.logger.log("----\u8d85\u65f6\u9000\u51fa----", data);
        this.exitTable();
      };
      TP_GameMgr.prototype.onTpRoundBroadCast = function(data) {
        VV_1.vv.logger.log("----\u56de\u5408\u5e7f\u64ad----", data);
        data.round = data.round - 1;
        this.TableMgr.updateRoundLabel(data.round);
      };
      TP_GameMgr.prototype.onAiChargeBroadCast = function(data) {
        VV_1.vv.logger.log("----AI \u663e\u793a\u5145\u503c\u4e2d----", data);
        var winPlayerNode = this.PlayerMgr.getPlayerNodeByUserId(data.player_id);
        if (winPlayerNode) {
          var winPlayerNodeTS = winPlayerNode.children[0].getComponent(TP_Player_1.default);
          1 == data.status ? winPlayerNodeTS.showMask(TP_EnumMgr_1.eMaskType.CHARGING) : winPlayerNodeTS.hideMask();
        }
      };
      TP_GameMgr.prototype.addBackGroundListener = function() {
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_HIDE, this.onHide, this);
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.GAME_SHOW, this.onShow, this);
      };
      TP_GameMgr.prototype.onHide = function() {
        VV_1.vv.logger.log("GAME_EVENT_HIDE");
        this.exitTime = new Date().getTime();
      };
      TP_GameMgr.prototype.onShow = function() {
        PayMgr_1.default._isRecharging = false;
        var subTime = (new Date().getTime() - this.exitTime) / 1e3;
        VV_1.vv.logger.log("GAME_EVENT_SHOW   ", subTime);
        if (!PayMgr_1.default._isRecharging && subTime >= 50) {
          console.warn("!!!!! exit exceed 50 seconds !!!!!");
          VV_1.vv.netMgr.closeNet();
        }
      };
      TP_GameMgr.prototype.checkGoldEnough = function() {
        if (this.isPractice()) return true;
        var min_entry = this.TableMgr.tableInfo.min_entry / VV_1.vv.global.exchange_rate;
        var myCoin = parseFloat(this.PlayerMgr.getMyNodeTS().info.coin);
        if (myCoin < min_entry) {
          this.isGoHall = true;
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
        }
      };
      TP_GameMgr.prototype.removeBackGroundListener = function() {
        VV_1.vv.eventMgr.offTarget(this);
      };
      TP_GameMgr.prototype.onTpTableResultBroadCast = function(data) {
        this.BtnMgr.setSwitchBtn(false);
        data.win.length > 1 && (this.isPlayWinTextAni = data.win.length);
        VV_1.vv.logger.log("----\u724c\u5c40\u7ed3\u7b97\u5e7f\u64ad----", data);
        if (VV_1.vv.analysis.startTimers.tpGamecomplete) {
          var gameMgr = VV_1.vv.gameMgr;
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.tp_one_game, {
            result: "success",
            room_id: gameMgr.TableMgr.tableInfo.table_id
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GameCompleted, {
            result: "success",
            room_id: gameMgr.TableMgr.tableInfo.table_id
          });
          this.isPractice() || VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
            result: "success"
          });
        }
        if (VV_1.vv.userMgr.is_guide_tp && VV_1.vv.analysis.startTimers.tpGamecomplete) {
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.FIRST_GAME_COMPLETE, {
            result: "success"
          });
          if (VV_1.vv.analysis.startTimers.tpGuideGame) {
            var cost = Date.now() - VV_1.vv.analysis.startTimers.tpGuideGame;
            VV_1.vv.logger.log("otp -> tpGuideGame cost:", cost / 1e3);
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.FIRST_GAME_COST, {
              cost: String(cost / 1e3)
            });
            VV_1.vv.analysis.startTimers.tpGuideGame = null;
          }
          VV_1.vv.userMgr.is_guide_tp = false;
        }
        if (VV_1.vv.analysis.startTimers.tpGamecomplete) {
          var cost = Date.now() - VV_1.vv.analysis.startTimers.tpGamecomplete;
          VV_1.vv.logger.log("otp -> tpGamecomplete cost:", cost / 1e3);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.TP_GAME_COMPLETE_COST, {
            cost: String(cost / 1e3),
            result: "tp",
            entrance: this.isPractice() ? "practice" : "cash"
          });
          VV_1.vv.analysis.startTimers.tpGamecomplete = null;
        }
        this.PlayerMgr.stopAllCountTime();
        if (data.lose && data.lose.length) {
          VV_1.vv.audioMgr.playSound("someone_wins");
          this.isMyTurn = false;
          this.isSettle = true;
          this.comparingWinner = data.win[0].player_id;
          this.playerWinAndLoseListAni(data, data.win.length > 1);
          this.BtnMgr.updateOperationStatus();
          return;
        }
        if (data.win.length > 1) return;
        this.checkGoldEnough();
        for (var index = 0; index < data.win.length; index++) {
          if (data.win[index].player_id == this.comparingWinner) continue;
          var winPlayerNode = this.PlayerMgr.getPlayerNodeByUserId(data.win[index].player_id);
          var winPlayerNodeTS = winPlayerNode.children[0].getComponent(TP_Player_1.default);
          winPlayerNodeTS.setSatus(TP_EnumMgr_1.ePlayer_Status.WIN);
          winPlayerNodeTS.showCards(data.win[index].cards, data.win[index].player_id == VV_1.vv.userMgr.player_id);
          winPlayerNodeTS.showCardType(data.win[index].cardType);
          this.TableMgr.allBetTo(winPlayerNode.parent.convertToWorldSpaceAR(winPlayerNode.position));
          this.TableMgr.setTableBetCountLabel(0);
          if (this.isPlayWinTextAni > 0 && data.chip) {
            this.isPlayWinTextAni--;
            this.isSettle = this.isPlayWinTextAni <= 0;
            var winPlayerNode_1 = this.PlayerMgr.getPlayerNodeByUserId(data.win[index].player_id);
            this.TableMgr.playWinTextAni(winPlayerNode_1.parent.convertToWorldSpaceAR(winPlayerNode_1.position), data.chip);
            this.isPractice() && (data.win[index].player_id == VV_1.vv.userMgr.player_id ? this.updatepCoin(data.chip / VV_1.vv.global.exchange_rate) : this.updatepAiCoin(data.win[index].player_id, data.chip / VV_1.vv.global.exchange_rate));
          }
        }
        VV_1.vv.audioMgr.playSound("someone_wins");
      };
      TP_GameMgr.prototype.playerWinAndLoseListAni = function(data, isEnd) {
        var _this = this;
        var winData = data.win[0];
        var loseDataList = data.lose;
        var _loop_1 = function(i) {
          var loseData = loseDataList[i];
          var winPlayerNode = this_1.PlayerMgr.getPlayerNodeByUserId(winData.player_id);
          var winPlayerNodeTS = winPlayerNode.children[0].getComponent(TP_Player_1.default);
          var losePlayerNode = this_1.PlayerMgr.getPlayerNodeByUserId(loseData.player_id);
          var losePlayerNodeTS = losePlayerNode.children[0].getComponent(TP_Player_1.default);
          if (isEnd) {
            if (!losePlayerNodeTS.node || !winPlayerNodeTS.node) return "continue";
            losePlayerNodeTS.setSatus(TP_EnumMgr_1.ePlayer_Status.LOSE);
            losePlayerNodeTS.showCards(loseData.cards, loseData.player_id == VV_1.vv.userMgr.player_id);
            losePlayerNodeTS.showCardType(loseData.cardType);
            return "continue";
          }
          this_1.TableMgr.playThunderLineEff(winPlayerNode.parent.convertToWorldSpaceAR(winPlayerNode.position), losePlayerNode.parent.convertToWorldSpaceAR(losePlayerNode.position), .8, function() {
            if (!losePlayerNodeTS.node || !winPlayerNodeTS.node) return;
            losePlayerNodeTS.setSatus(TP_EnumMgr_1.ePlayer_Status.LOSE);
            losePlayerNodeTS.showCards(loseData.cards, loseData.player_id == VV_1.vv.userMgr.player_id);
            losePlayerNodeTS.showCardType(loseData.cardType);
            if (0 == i) {
              winPlayerNodeTS.setSatus(TP_EnumMgr_1.ePlayer_Status.WIN);
              winPlayerNodeTS.showCards(winData.cards, data.win[i].player_id == VV_1.vv.userMgr.player_id);
              winPlayerNodeTS.showCardType(winData.cardType);
              _this.TableMgr.allBetTo(winPlayerNode.parent.convertToWorldSpaceAR(winPlayerNode.position));
              _this.TableMgr.setTableBetCountLabel(0);
              if (_this.isPlayWinTextAni > 0 && data.chip) {
                _this.isPlayWinTextAni = 0;
                var winPlayerNode_2 = _this.PlayerMgr.getPlayerNodeByUserId(winData.player_id);
                _this.TableMgr.playWinTextAni(winPlayerNode_2.parent.convertToWorldSpaceAR(winPlayerNode_2.position), data.chip);
                _this.isPractice() && (winData.player_id == VV_1.vv.userMgr.player_id ? _this.updatepCoin(data.chip / VV_1.vv.global.exchange_rate) : _this.updatepAiCoin(winData.player_id, data.chip / VV_1.vv.global.exchange_rate));
              }
              data.chip / VV_1.vv.global.exchange_rate >= 1e3 && winData.player_id == VV_1.vv.userMgr.player_id;
            }
          });
        };
        var this_1 = this;
        for (var i = 0; i < loseDataList.length; i++) _loop_1(i);
      };
      TP_GameMgr.prototype.onTpSideShowResultBroadCast = function(data) {
        var _this = this;
        VV_1.vv.logger.log("----\u6bd4\u724c\u7ed3\u679c\u5e7f\u64ad----", data);
        this.TableMgr.stopChallengeAni();
        if (!data.has_agree) {
          var targetPlayerNode = this.PlayerMgr.getPlayerNodeByUserId(data.target_id);
          this.TableMgr.playRefuseAni(targetPlayerNode.parent.convertToWorldSpaceAR(targetPlayerNode.position));
          return;
        }
        var winPlayerNode = this.PlayerMgr.getPlayerNodeByUserId(data.win_id);
        var winPlayerNodeTS = winPlayerNode.children[0].getComponent(TP_Player_1.default);
        var losePlayerNode = this.PlayerMgr.getPlayerNodeByUserId(data.lose_id);
        var losePlayerNodeTS = losePlayerNode.children[0].getComponent(TP_Player_1.default);
        this.TableMgr.playVSAni(function() {
          _this.TableMgr.playThunderLineEff(winPlayerNode.parent.convertToWorldSpaceAR(winPlayerNode.position), losePlayerNode.parent.convertToWorldSpaceAR(losePlayerNode.position), .8, function() {
            if (!losePlayerNodeTS.node) return;
            losePlayerNodeTS.setSatus(TP_EnumMgr_1.ePlayer_Status.LOSE);
            data.lose_id == VV_1.vv.userMgr.player_id || losePlayerNodeTS.cardGroup.cardGrey();
            _this.BtnMgr.updateOperationStatus();
          });
        });
      };
      TP_GameMgr.prototype.onTpSideShowBroadCast = function(data) {
        VV_1.vv.logger.log("----\u6bd4\u724c\u5e7f\u64ad----", data);
        var defierPlayerNode = this.PlayerMgr.getPlayerNodeByUserId(data.defier_id);
        var defierPlayerNodeTS = defierPlayerNode.children[0].getComponent(TP_Player_1.default);
        defierPlayerNodeTS.stopOperateCD();
        var targetPlayerNode = this.PlayerMgr.getPlayerNodeByUserId(data.target_id);
        var targetPlayerNodeTS = targetPlayerNode.children[0].getComponent(TP_Player_1.default);
        targetPlayerNodeTS.startOperateCD(10);
        var scaleStart = cc.find("headBg", defierPlayerNode.children[0]).width / 148;
        var endStart = cc.find("headBg", targetPlayerNode.children[0]).width / 148;
        if (data.defier_id == VV_1.vv.userMgr.player_id) {
          VV_1.vv.audioMgr.playSound("sideshow");
          this.isMyTurn = false;
          this.BtnMgr.updateOperationStatus();
          var headnode = cc.find("headFrame", defierPlayerNode.children[0]);
          scaleStart = headnode.height / 100;
          defierPlayerNode = headnode;
        }
        if (data.target_id == VV_1.vv.userMgr.player_id) {
          this.showSideShowUI({
            content: I18n_1.I18n.getText("alert.sideShow.content").format(defierPlayerNodeTS.getPlayerInfo().nick),
            okCB: function() {
              VV_1.vv.netMgr.send(TP_MsgId_1.TP_MSG_REQ_ID.TpSideShowRequest, {
                has_agree: true
              });
            },
            cancelCB: function() {
              VV_1.vv.netMgr.send(TP_MsgId_1.TP_MSG_REQ_ID.TpSideShowRequest, {
                has_agree: false
              });
            },
            showTimer: {
              time: 10,
              autoClick: AlertInterface_1.eAlertAutoClickType.hide
            }
          }, defierPlayerNodeTS.getPlayerInfo().facelook);
          var headnode = cc.find("headFrame", targetPlayerNode.children[0]);
          endStart = cc.find("headFrame", targetPlayerNode.children[0]).height / 100;
          targetPlayerNode = headnode;
        }
        this.TableMgr.playChallengeAni({
          startWPos: defierPlayerNode.parent.convertToWorldSpaceAR(defierPlayerNode.position),
          toWPos: targetPlayerNode.parent.convertToWorldSpaceAR(targetPlayerNode.position),
          startScale: scaleStart,
          endScale: endStart
        });
      };
      TP_GameMgr.prototype.showSideShowUI = function(showInfo, facelook) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.TeenPatti, function(bundle) {
          bundle.load("prefabs/sideshow_alert", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
              var script = node.getComponent(TP_SideShowUI_1.default);
              script && script.init(showInfo, facelook);
            }
          });
        });
      };
      TP_GameMgr.prototype.onTpPotBroadCast = function(data) {
        VV_1.vv.logger.log("----\u5e95\u6c60\u5e7f\u64ad----", data);
        this.TableMgr.setBetMultiple(false);
        this.TableMgr.setTableBetCountLabel(data.pot);
        this.TableMgr.setBootBet(data.chip);
      };
      TP_GameMgr.prototype.onTpTableStateBroadCast = function(data) {
        VV_1.vv.logger.log("----\u8fdb\u5165\u724c\u684c\u72b6\u6001\u5e7f\u64ad----", data);
        this.TableMgr.setTableState(data);
      };
      TP_GameMgr.prototype.onJoinTpTableResponse = function(data) {
        VV_1.vv.logger.log("----\u8fdb\u5165\u724c\u684c\u8fd4\u56de----", data);
        this.table_info = data.table_info;
        data.table_info.pot;
        this.PlayerMgr.initPlayer(this.table_info.players);
        this.TableMgr.initTableInfo(this.table_info);
        data.pos && data.time && this.onTpTablePlayBroadCast({
          pos: data.pos,
          time: data.time,
          cards: data.cards
        });
        SenectiveContentConfig_1.SenectiveContentConfig.enableToShowSenectiveContent && !this.isShowTPInfo && this.showTPTableInfoUI(this.table_info, 3);
        this.isShowTPInfo = true;
      };
      TP_GameMgr.prototype.showTPTableInfoUI = function(info, countdown, hideCb) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("TableInfoUI");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.TeenPatti, function(bundle) {
          bundle.load("prefabs/TableInfoUI", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
              var script = node.getComponent(TP_TableInfoUI_1.default);
              script && script.initTableInfoUI(info, countdown, hideCb);
            }
          });
        });
      };
      TP_GameMgr.prototype.onReJoinTpTableResponse = function(data) {
        VV_1.vv.logger.log("----\u91cd\u8fde\u8fdb\u5165\u724c\u684c\u8fd4\u56de----", data);
        this.PlayerMgr.initPlayer(data.table_info.players);
        this.TableMgr.initTableInfo(data.table_info);
        data.pos && data.time && this.onTpTablePlayBroadCast({
          pos: data.pos,
          time: data.time
        });
      };
      TP_GameMgr.prototype.onTpTableDealerBroadCast = function(data) {
        var _this = this;
        VV_1.vv.logger.log("----\u5b9a\u5e84\u6570\u636e\u5e7f\u64ad----", data);
        this.PlayerMgr.setDealerByUserID(data.dealer_id);
        this.PlayerMgr.playersBootBetByPlayers(data.players);
        this.TableMgr.setTableBetCountLabel(data.pot);
        this.TableMgr.setBootBet();
        var sendCardData = this.PlayerMgr.getSendCardDataByDealerIdAndPlayers(data.dealer_id, data.players);
        this.addTimer(function() {
          _this.CardMgr.sendCard(sendCardData.startSeat, sendCardData.playerSeatList);
        }, .5);
      };
      TP_GameMgr.prototype.onTpPlayerJoinTableBroadCast = function(data) {
        VV_1.vv.logger.log("----\u73a9\u5bb6\u8fdb\u5165\u724c\u684c\u5e7f\u64ad----", data);
        null != data.player && this.PlayerMgr.updatePlayerInfo(data.player);
      };
      TP_GameMgr.prototype.onTpPlayerOfflineBroadCast = function(data) {
        VV_1.vv.logger.log("----\u73a9\u5bb6\u79bb\u7ebf\u5e7f\u64ad----", data);
      };
      TP_GameMgr.prototype.onTpPlayerLeaveTableBroadCast = function(data) {
        VV_1.vv.logger.log("----\u73a9\u5bb6\u79bb\u5f00\u724c\u684c\u5e7f\u64ad----", data);
        if (data.player_id) if (data.player_id == VV_1.vv.userMgr.player_id) this.isSettle ? this.isGoHall = true : this.exitTable(); else {
          this.PlayerMgr.removePlayer(data.player_id);
          this.BtnMgr.updateOperationStatus();
        }
      };
      TP_GameMgr.prototype.onTpTablePlayBroadCast = function(data) {
        if (!this.canSee) {
          this.canSee = true;
          this.PlayerMgr.getMyNodeTS().isLookCard || this.PlayerMgr.getMyNodeTS().playerStatus != TP_EnumMgr_1.ePlayer_Status.NORMAL || this.PlayerMgr.getMyNodeTS().cardGroup.setSeeBtn(true);
        }
        if (data) {
          var logicSeat = data.pos;
          var operateTime = data.time;
          logicSeat && logicSeat == this.PlayerMgr.getMySeat() ? this.PlayerMgr.getMyNodeTS().playerStatus == TP_EnumMgr_1.ePlayer_Status.LOSE ? this.isMyTurn = false : this.isMyTurn = true : this.isMyTurn = false;
          if (this.isMyTurn) {
            VV_1.vv.eventMgr.emit(GameConst_1.GAME_EVENT.EVENT_OPTION_STATE_CHANGE_IN_TP);
            this.TableMgr.setBetLayer(true);
            2 * this.TableMgr.tableInfo.chip >= this.TableMgr.tableInfo.chaal_limit ? this.BtnMgr.setAdjustBetBtn([]) : this.BtnMgr.setAdjustBetBtn([ "betAddBtn" ]);
            1 == this.PlayerMgr.getLivePlayerNodes().length ? this.BtnMgr.setSideShowBtnShow(false) : this.BtnMgr.setSideShowBtnShow(true);
            this.BtnMgr.autoPack && this.onTpPlayerOptionRequest(TP_EnumMgr_1.eOptionType.PACK);
          }
          this.BtnMgr.updateOperationStatus();
          this.PlayerMgr.playerOperateCDStart(logicSeat, operateTime);
        }
      };
      TP_GameMgr.prototype.pushNetListener = function(msg, call) {
        this.netListenerList.push({
          msg: msg,
          call: call
        });
        VV_1.vv.netMgr.addHandler(msg, call, this);
      };
      TP_GameMgr.prototype.removeNetListener = function() {
        while (this.netListenerList.length) {
          var netListenerData = this.netListenerList.shift();
          VV_1.vv.netMgr.removeHandler(netListenerData.msg, netListenerData.call, this);
        }
        this.removeBackGroundListener();
        this.removeEventListener();
      };
      TP_GameMgr.prototype.reset = function() {
        this.canSee = false;
        this.isSettle = false;
        this.comparingWinner = 0;
        this.isPlayWinTextAni = 1;
        this.CardMgr.reset();
        this.TableMgr.reset();
        this.PlayerMgr.reset();
        this.BtnMgr.reset();
      };
      TP_GameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/TableLayer").getComponent(TP_TableMgr_1.default);
        this.PlayerMgr = cc.find("Canvas/PlayerLayer").getComponent(TP_PlayerMgr_1.default);
        this.CardMgr = cc.find("Canvas/CardLayer").getComponent(TP_CardMgr_1.default);
        this.BtnMgr = cc.find("Canvas/ButtonLayer").getComponent(TP_ButtonMgr_1.default);
      };
      TP_GameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.logger.log("sceneName:", sceneName);
        VV_1.vv.uiMgr.hideLoading();
        VV_1.vv.audioMgr.stopAll();
      };
      TP_GameMgr.prototype.isPractice = function() {
        return this.room_type == TP_EnumMgr_1.eROOM_TYPE.PRACTICE;
      };
      TP_GameMgr.prototype.updatepAiCoin = function(player_id, value) {
        var playerNode = this.PlayerMgr.getPlayerNodeByUserId(player_id);
        if (playerNode) {
          var playerNodeTS = playerNode.children[0].getComponent(TP_Player_1.default);
          playerNodeTS.pCoin += value;
          if (playerNodeTS.pCoin > 0) playerNodeTS.updateCoin(playerNodeTS.pCoin, 2); else {
            playerNodeTS.pCoin = 2e5;
            playerNodeTS.updateCoin(playerNodeTS.pCoin, 2);
          }
        }
      };
      TP_GameMgr.prototype.updateGlobalPGold = function() {
        VV_1.vv.global.pCoin = parseInt(this.TableMgr.myGold.string);
      };
      TP_GameMgr.prototype.updatepCoin = function(value) {
        VV_1.vv.global.pCoin += value;
        VV_1.vv.global.pCoin = Math.round(100 * VV_1.vv.global.pCoin) / 100;
        VV_1.vv.logger.log("----------\u7ec3\u4e60\u573a\u91d1\u5e01----------", VV_1.vv.global.pCoin);
        if (VV_1.vv.global.pCoin > 0) this.PlayerMgr.updateCoin(VV_1.vv.global.pCoin, 2); else {
          VV_1.vv.global.pCoin = 2e5;
          this.PlayerMgr.updateCoin(VV_1.vv.global.pCoin, 2);
        }
        cc.sys.localStorage.setItem(GameConst_1.KEY_STORE.GREEN_GOLD, VV_1.vv.global.pCoin);
      };
      TP_GameMgr.prototype.onChangedTableResponse = function(data) {
        VV_1.vv.logger.log("\u5207\u6362\u724c\u684c\u8fd4\u56de", data);
        VV_1.vv.uiMgr.hideLoading();
        1 == data.status ? this.reset() : VV_1.vv.toast.show(I18n_1.I18n.getText("toast.switchTableFail"));
      };
      TP_GameMgr.prototype.onLeaveTableResponse = function(data) {
        1 == data.status && this.exitTable();
      };
      TP_GameMgr.prototype.onBtnBack = function() {
        VV_1.vv.netMgr.send(TP_MsgId_1.TP_MSG_REQ_ID.LeaveTpTableRequest, {});
      };
      TP_GameMgr.prototype.onBtnSwitch = function() {
        VV_1.vv.uiMgr.showLoading();
        VV_1.vv.netMgr.send(TP_MsgId_1.TP_MSG_REQ_ID.ChangedTpTableRequest, {});
      };
      TP_GameMgr.prototype.onTpPlayerOptionRequest = function(option, multiple) {
        VV_1.vv.netMgr.send(TP_MsgId_1.TP_MSG_REQ_ID.TpPlayerOptionRequest, {
          option: option,
          multiple: multiple
        });
      };
      TP_GameMgr.prototype.onTpPlayerOptionResponse = function(data) {
        VV_1.vv.logger.log("----\u81ea\u5df1\u64cd\u4f5c\u8fd4\u56de----", data);
        var playerNode = this.PlayerMgr.getMyNode();
        var playerNodeTS = playerNode.children[0].getComponent(TP_Player_1.default);
        var opTip = null;
        if (data.option == TP_EnumMgr_1.eOptionType.SEE) {
          playerNodeTS.showCards(data.cards, true);
          this.BtnMgr.setBlindBtnShow(false);
          this.TableMgr.setBetLabel();
          VV_1.vv.audioMgr.playSound("lookCard");
        } else if (data.option == TP_EnumMgr_1.eOptionType.BLIND) {
          opTip = data.multiple ? TP_EnumMgr_1.eOperation_Tips.BLINDX2 : TP_EnumMgr_1.eOperation_Tips.BLIND;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.CHAAL) {
          opTip = data.multiple ? TP_EnumMgr_1.eOperation_Tips.CHAALX2 : TP_EnumMgr_1.eOperation_Tips.CHAAL;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.SIDE_SHOW) {
          opTip = TP_EnumMgr_1.eOperation_Tips.SIDE_SHOW;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.SHOW) {
          opTip = TP_EnumMgr_1.eOperation_Tips.SHOW;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.PACK) {
          playerNodeTS.setSatus(TP_EnumMgr_1.ePlayer_Status.PACK);
          VV_1.vv.audioMgr.playSound("lookCard");
        }
        if (data.bet) {
          var optionBet = data.bet - playerNodeTS.getPlayerInfo().bet;
          playerNodeTS.setBetCountLabel(data.bet);
          null != opTip && playerNodeTS.setCurBetInfo(opTip, optionBet);
          var gameMgr = VV_1.vv.gameMgr;
          playerNodeTS.playerBet(optionBet / VV_1.vv.global.exchange_rate);
          this.isPractice() && this.updatepCoin(-optionBet / VV_1.vv.global.exchange_rate);
        }
        playerNodeTS.stopOperateCD();
        this.BtnMgr.updateOperationStatus();
      };
      TP_GameMgr.prototype.onTpPlayerOptionBroadCast = function(data) {
        VV_1.vv.logger.log("----\u73a9\u5bb6\u64cd\u4f5c\u8fd4\u56de----", data);
        var isMy = VV_1.vv.userMgr.player_id == data.player_id;
        if (isMy && data.option != TP_EnumMgr_1.eOptionType.PACK) return;
        var playerNode = this.PlayerMgr.getPlayerNodeByUserId(data.player_id);
        if (!playerNode) {
          console.warn("\u73a9\u5bb6\u4e0d\u518d\u724c\u684c");
          return;
        }
        var playerNodeTS = playerNode.children[0].getComponent(TP_Player_1.default);
        var opTip = null;
        if (data.option == TP_EnumMgr_1.eOptionType.SEE) {
          VV_1.vv.audioMgr.playSound("lookCard");
          this.PlayerMgr.setLookCardByUserID(data.player_id);
        } else if (data.option == TP_EnumMgr_1.eOptionType.BLIND) {
          opTip = data.multiple ? TP_EnumMgr_1.eOperation_Tips.BLINDX2 : TP_EnumMgr_1.eOperation_Tips.BLIND;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.CHAAL) {
          opTip = data.multiple ? TP_EnumMgr_1.eOperation_Tips.CHAALX2 : TP_EnumMgr_1.eOperation_Tips.CHAAL;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.SIDE_SHOW) {
          opTip = TP_EnumMgr_1.eOperation_Tips.SIDE_SHOW;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.SHOW) {
          opTip = TP_EnumMgr_1.eOperation_Tips.SHOW;
          playerNodeTS.addOperationTips(opTip);
        } else if (data.option == TP_EnumMgr_1.eOptionType.PACK) {
          playerNodeTS.setSatus(TP_EnumMgr_1.ePlayer_Status.PACK);
          VV_1.vv.audioMgr.playSound("lookCard");
        }
        if (data.bet) {
          var optionBet = data.bet - playerNodeTS.getPlayerInfo().bet;
          playerNodeTS.setBetCountLabel(data.bet);
          null != opTip && playerNodeTS.setCurBetInfo(opTip, optionBet);
          var gameMgr = VV_1.vv.gameMgr;
          playerNodeTS.playerBet(optionBet / VV_1.vv.global.exchange_rate);
          this.isPractice() && this.updatepAiCoin(data.player_id, -optionBet / VV_1.vv.global.exchange_rate);
        }
        playerNodeTS.stopOperateCD();
        this.BtnMgr.updateOperationStatus();
      };
      TP_GameMgr = __decorate([ ccclass ], TP_GameMgr);
      return TP_GameMgr;
    }(GameMgrBase_1.default);
    exports.default = TP_GameMgr;
    cc._RF.pop();
  }, {
    "../../../gp/configs/SenectiveContentConfig": void 0,
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/alert/AlertInterface": void 0,
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "./TP_ButtonMgr": "TP_ButtonMgr",
    "./TP_CardMgr": "TP_CardMgr",
    "./TP_EnumMgr": "TP_EnumMgr",
    "./TP_MsgId": "TP_MsgId",
    "./TP_Player": "TP_Player",
    "./TP_PlayerMgr": "TP_PlayerMgr",
    "./TP_SideShowUI": "TP_SideShowUI",
    "./TP_TableInfoUI": "TP_TableInfoUI",
    "./TP_TableMgr": "TP_TableMgr"
  } ],
  TP_MsgId: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67be42ttptK3J9/jAFNXGoE", "TP_MsgId");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TP_MSG_BROADCAST = exports.TP_MSG_RES_ID = exports.TP_MSG_REQ_ID = void 0;
    var TP_MSG_REQ_ID;
    (function(TP_MSG_REQ_ID) {
      TP_MSG_REQ_ID["JoinTpTableRequest"] = "JoinTpTableRequest";
      TP_MSG_REQ_ID["TpPlayerOptionRequest"] = "TpPlayerOptionRequest";
      TP_MSG_REQ_ID["TpSideShowRequest"] = "TpSideShowRequest";
      TP_MSG_REQ_ID["ChangedTpTableRequest"] = "ChangedTpTableRequest";
      TP_MSG_REQ_ID["LeaveTpTableRequest"] = "LeaveTpTableRequest";
    })(TP_MSG_REQ_ID = exports.TP_MSG_REQ_ID || (exports.TP_MSG_REQ_ID = {}));
    var TP_MSG_RES_ID;
    (function(TP_MSG_RES_ID) {
      TP_MSG_RES_ID["JoinTpTableResponse"] = "JoinTpTableResponse";
      TP_MSG_RES_ID["ReJoinTpTableResponse"] = "ReJoinTpTableResponse";
      TP_MSG_RES_ID["TpPlayerOptionResponse"] = "TpPlayerOptionResponse";
      TP_MSG_RES_ID["ChangedTpTableResponse"] = "ChangedTpTableResponse";
      TP_MSG_RES_ID["LeaveTpTableResponse"] = "LeaveTpTableResponse";
    })(TP_MSG_RES_ID = exports.TP_MSG_RES_ID || (exports.TP_MSG_RES_ID = {}));
    var TP_MSG_BROADCAST;
    (function(TP_MSG_BROADCAST) {
      TP_MSG_BROADCAST["TpTableDealerBroadCast"] = "TpTableDealerBroadCast";
      TP_MSG_BROADCAST["TpPlayerJoinTableBroadCast"] = "TpPlayerJoinTableBroadCast";
      TP_MSG_BROADCAST["TpPlayerOfflineBroadCast"] = "TpPlayerOfflineBroadCast";
      TP_MSG_BROADCAST["TpPlayerLeaveTableBroadCast"] = "TpPlayerLeaveTableBroadCast";
      TP_MSG_BROADCAST["TpTableStateBroadCast"] = "TpTableStateBroadCast";
      TP_MSG_BROADCAST["TpTablePlayBroadCast"] = "TpTablePlayBroadCast";
      TP_MSG_BROADCAST["TpPlayerOptionBroadCast"] = "TpPlayerOptionBroadCast";
      TP_MSG_BROADCAST["TpPotBroadCast"] = "TpPotBroadCast";
      TP_MSG_BROADCAST["TpSideShowBroadCast"] = "TpSideShowBroadCast";
      TP_MSG_BROADCAST["TpSideShowResultBroadCast"] = "TpSideShowResultBroadCast";
      TP_MSG_BROADCAST["TpTableResultBroadCast"] = "TpTableResultBroadCast";
      TP_MSG_BROADCAST["AiChargeBroadCast"] = "AiChargeBroadCast";
      TP_MSG_BROADCAST["TpRoundBroadCast"] = "TpRoundBroadCast";
      TP_MSG_BROADCAST["TpPlayerKickBroadCast"] = "TpPlayerKickBroadCast";
      TP_MSG_BROADCAST["TpAiCoinsLeftBroadCast"] = "TpAiCoinsLeftBroadCast";
    })(TP_MSG_BROADCAST = exports.TP_MSG_BROADCAST || (exports.TP_MSG_BROADCAST = {}));
    cc._RF.pop();
  }, {} ],
  TP_PlayerLayoutTool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72f280loyNB2r+U2HwUBeLf", "TP_PlayerLayoutTool");
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
    var TP_PlayerLayoutTool = function(_super) {
      __extends(TP_PlayerLayoutTool, _super);
      function TP_PlayerLayoutTool() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betNodePos = cc.v3(0, 0, 0);
        _this.betNodeScale = 1;
        _this.CardGroupPos = cc.v3(0, 0, 0);
        _this.CardGroupScale = 1;
        _this.betTipsPos = cc.v3(0, 0, 0);
        _this.betTipsScale = 1;
        return _this;
      }
      TP_PlayerLayoutTool.prototype.start = function() {};
      __decorate([ property ], TP_PlayerLayoutTool.prototype, "betNodePos", void 0);
      __decorate([ property ], TP_PlayerLayoutTool.prototype, "betNodeScale", void 0);
      __decorate([ property ], TP_PlayerLayoutTool.prototype, "CardGroupPos", void 0);
      __decorate([ property ], TP_PlayerLayoutTool.prototype, "CardGroupScale", void 0);
      __decorate([ property ], TP_PlayerLayoutTool.prototype, "betTipsPos", void 0);
      __decorate([ property ], TP_PlayerLayoutTool.prototype, "betTipsScale", void 0);
      TP_PlayerLayoutTool = __decorate([ ccclass ], TP_PlayerLayoutTool);
      return TP_PlayerLayoutTool;
    }(cc.Component);
    exports.default = TP_PlayerLayoutTool;
    cc._RF.pop();
  }, {} ],
  TP_PlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1d07BBM8NFIZXERkR2Dojz", "TP_PlayerMgr");
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
    var TP_EnumMgr_1 = require("./TP_EnumMgr");
    var TP_Player_1 = require("./TP_Player");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_PlayerMgr = function(_super) {
      __extends(TP_PlayerMgr, _super);
      function TP_PlayerMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerNodes = [];
        _this.playerPrefab = null;
        _this.playerSelftPrefab = null;
        _this.MAX_PLAYER = 5;
        _this.mySeat = 1;
        _this.playerInfo = [];
        return _this;
      }
      TP_PlayerMgr.prototype.start = function() {};
      TP_PlayerMgr.prototype.reset = function() {
        for (var i = 0; i < this.playerNodes.length; i++) if (this.playerNodes[i].childrenCount > 0) {
          var playerTS = this.playerNodes[i].children[0].getComponent(TP_Player_1.default);
          playerTS.reset();
        }
      };
      TP_PlayerMgr.prototype.getPlayerInfo = function() {
        return this.playerInfo;
      };
      TP_PlayerMgr.prototype.getPlayerCount = function() {
        return this.playerInfo.length;
      };
      TP_PlayerMgr.prototype.initPlayer = function(players) {
        var gameMgr = VV_1.vv.gameMgr;
        for (var j = 0; j < this.playerNodes.length; j++) VV_1.vv.tools.removeAllChildren(this.playerNodes[j]);
        this.playerInfo = VV_1.vv.uiMgr.deepClone(players);
        for (var i = 0; i < players.length; i++) if (players[i] && players[i].player_id == VV_1.vv.userMgr.player_id) {
          var playerData = players[i];
          this.mySeat = playerData.pos;
          break;
        }
        for (var j = 0; j < players.length; j++) {
          var playerData = players[j];
          var viewSeat = this.logicSeatToViewSeat(playerData.pos);
          var player = null;
          player = 1 == viewSeat ? cc.instantiate(this.playerSelftPrefab) : cc.instantiate(this.playerPrefab);
          this.playerNodes[viewSeat - 1].addChild(player);
          player.getComponent(TP_Player_1.default).setPlayerInfo(playerData);
        }
      };
      TP_PlayerMgr.prototype.updatePlayerInfo = function(info) {
        if (-1 === this.getLogicSeatByUserID(info.player_id)) {
          this.playerInfo.push(info);
          var viewSeat = this.logicSeatToViewSeat(info.pos);
          var player = null;
          player = 1 == viewSeat ? cc.instantiate(this.playerSelftPrefab) : cc.instantiate(this.playerPrefab);
          this.playerNodes[viewSeat - 1].addChild(player);
          player.getComponent(TP_Player_1.default).setPlayerInfo(info);
        }
        VV_1.vv.logger.log("\u6240\u6709\u7684\u73a9\u5bb6\u4fe1\u606f: ", this.playerInfo);
      };
      TP_PlayerMgr.prototype.removePlayer = function(userid) {
        VV_1.vv.logger.log("\u6240\u6709\u7684\u73a9\u5bb6\u4fe1\u606f: ", this.playerInfo);
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        playerNodeLayer && VV_1.vv.tools.removeAllChildren(playerNodeLayer);
        for (var i = 0; i < this.playerInfo.length; i++) if (this.playerInfo[i].player_id == userid) {
          this.playerInfo.splice(i, 1);
          break;
        }
        var gameMgr = VV_1.vv.gameMgr;
        this.playerInfo && this.playerInfo.length <= 1;
      };
      TP_PlayerMgr.prototype.setOfflineSByUserID = function(userid, isOffline) {
        void 0 === isOffline && (isOffline = true);
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setOfflineSByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(TP_Player_1.default);
        isOffline ? playerItemTS.showMask(TP_EnumMgr_1.eMaskType.OUT) : playerItemTS.hideMask();
      };
      TP_PlayerMgr.prototype.setLookCardByUserID = function(userid) {
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setDroppedByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(TP_Player_1.default);
        playerItemTS.setLookCard(true);
      };
      TP_PlayerMgr.prototype.setCoinByUserID = function(userid, coin) {
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setDroppedByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(TP_Player_1.default);
        playerItemTS.updateCoin(coin);
      };
      TP_PlayerMgr.prototype.setBetCountByUserID = function(userid, betCount) {
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setDroppedByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(TP_Player_1.default);
        playerItemTS.setBetCountLabel(betCount);
      };
      TP_PlayerMgr.prototype.setDealerByUserID = function(userid) {
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setDroppedByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(TP_Player_1.default);
        playerItemTS.setDealer(true);
      };
      TP_PlayerMgr.prototype.getSendCardDataByDealerIdAndPlayers = function(dealerId, players) {
        var dealerViewSeat = this.getViewSeatByUserID(dealerId);
        var viewSeatList = this.getSendCardViewSeatList(players);
        viewSeatList.sort(function(a, b) {
          return a - b;
        });
        var dealerIndex = viewSeatList.findIndex(function(value) {
          return value == dealerViewSeat;
        });
        var sideIndex = dealerIndex + 1;
        sideIndex >= viewSeatList.length && (sideIndex = 0);
        return {
          startSeat: viewSeatList[sideIndex],
          playerSeatList: viewSeatList
        };
      };
      TP_PlayerMgr.prototype.getSendCardViewSeatList = function(players) {
        var viewSeatList = [];
        for (var i = 0; i < players.length; i++) {
          var playerData = players[i];
          var viewSeat = this.getViewSeatByUserID(playerData.player_id);
          viewSeatList.push(viewSeat);
        }
        return viewSeatList;
      };
      TP_PlayerMgr.prototype.updateCoin = function(coin, type) {
        void 0 === type && (type = TP_EnumMgr_1.eROOM_TYPE.CASH);
        this.playerNodes[0].children[0].getComponent(TP_Player_1.default).updateCoin(coin, type);
      };
      TP_PlayerMgr.prototype.getMyNode = function() {
        return this.playerNodes[0];
      };
      TP_PlayerMgr.prototype.getMyNodeTS = function() {
        return this.playerNodes[0].children[0].getComponent(TP_Player_1.default);
      };
      TP_PlayerMgr.prototype.getPlayerNickNameByUserID = function(userid) {
        for (var i = 0; i < this.playerInfo.length; i++) if (userid == this.playerInfo[i].player_id) return this.playerInfo[i].nick;
      };
      TP_PlayerMgr.prototype.setPlayerSatusByUserID = function(userid, playerStatus) {
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setDroppedByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(TP_Player_1.default);
        playerItemTS.setSatus(playerStatus);
      };
      TP_PlayerMgr.prototype.getUpPlayerNode = function() {
        var upSeat = 1;
        var playerNode = null;
        while (!playerNode) {
          upSeat -= 1;
          upSeat <= 0 && (upSeat = this.MAX_PLAYER);
          if (upSeat > this.MAX_PLAYER) break;
          if (1 == upSeat) break;
          var playerNodeLayer = this.getPlayerNodeByViewSeat(upSeat);
          var tempPlayerNode = playerNodeLayer.children[0];
          if (!tempPlayerNode) continue;
          var playerNodeTS = tempPlayerNode.getComponent(TP_Player_1.default);
          if (playerNodeTS.playerStatus == TP_EnumMgr_1.ePlayer_Status.LOSE || playerNodeTS.playerStatus == TP_EnumMgr_1.ePlayer_Status.WAIT || playerNodeTS.playerStatus == TP_EnumMgr_1.ePlayer_Status.PACK) continue;
          VV_1.vv.logger.log("-------\u627e\u5230\u4e0a\u5bb6-------", playerNodeTS.info.nick);
          playerNode = tempPlayerNode;
          break;
        }
        playerNode || console.warn("----\u627e\u4e0d\u5230\u4e0a\u5bb6\uff08\u4e0a\u5bb6\u72b6\u6001\u4e3a\u5f03\u724c\u3001\u8f93\u724c\u3001\u7b49\u5f85\uff09----");
        return playerNode;
      };
      TP_PlayerMgr.prototype.getLivePlayerNodes = function() {
        var livePlayerNodes = [];
        for (var j = 0; j < this.playerNodes.length; j++) {
          var playerNodeLayer = this.playerNodes[j];
          var playerNode = playerNodeLayer.children[0];
          if (playerNode) {
            var playerNodeTS = playerNode.getComponent(TP_Player_1.default);
            if (playerNodeTS.getPlayerInfo().player_id == VV_1.vv.userMgr.player_id) continue;
            if (playerNodeTS.playerStatus == TP_EnumMgr_1.ePlayer_Status.LOSE || playerNodeTS.playerStatus == TP_EnumMgr_1.ePlayer_Status.WAIT || playerNodeTS.playerStatus == TP_EnumMgr_1.ePlayer_Status.PACK) continue;
            livePlayerNodes.push(playerNode);
          }
        }
        return livePlayerNodes;
      };
      TP_PlayerMgr.prototype.getMySeat = function() {
        return this.mySeat;
      };
      TP_PlayerMgr.prototype.getLogicSeatByUserID = function(userid) {
        for (var i = 0; i < this.playerInfo.length; i++) if (userid == this.playerInfo[i].player_id) return this.playerInfo[i].pos;
        return -1;
      };
      TP_PlayerMgr.prototype.getViewSeatByUserID = function(userid) {
        for (var i = 0; i < this.playerInfo.length; i++) if (userid == this.playerInfo[i].player_id) return this.logicSeatToViewSeat(this.playerInfo[i].pos);
        return -1;
      };
      TP_PlayerMgr.prototype.getViewWPosByUserId = function(userid) {
        var viewSeat = this.getViewSeatByUserID(userid);
        return -1 != viewSeat ? this.node.convertToWorldSpaceAR(this.playerNodes[viewSeat - 1].position) : this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
      };
      TP_PlayerMgr.prototype.getPlayerNodeByUserId = function(userid) {
        var viewSeat = this.getViewSeatByUserID(userid);
        return -1 != viewSeat ? this.playerNodes[viewSeat - 1] : null;
      };
      TP_PlayerMgr.prototype.getPlayerNodeByViewSeat = function(viewSeat) {
        return this.playerNodes[viewSeat - 1] ? this.playerNodes[viewSeat - 1] : null;
      };
      TP_PlayerMgr.prototype.checkPlayerIsExistByLogicSeat = function(logicSrat) {
        for (var i = 0; i < this.playerInfo.length; i++) if (logicSrat == this.playerInfo[i].pos) return true;
        return false;
      };
      TP_PlayerMgr.prototype.logicSeatToViewSeat = function(logicSeat) {
        return logicSeat && logicSeat > 0 ? (this.MAX_PLAYER - this.mySeat + logicSeat) % this.MAX_PLAYER + 1 : -1;
      };
      TP_PlayerMgr.prototype.playerOperateCDStart = function(logicSeat, nTime) {
        if (this.checkPlayerIsExistByLogicSeat(logicSeat)) {
          var viewSeat = this.logicSeatToViewSeat(logicSeat);
          for (var i = 0; i < this.playerNodes.length; i++) i == viewSeat - 1 ? this.playerNodes[viewSeat - 1].children[0].getComponent(TP_Player_1.default).startOperateCD(nTime) : this.playerNodes[i].childrenCount > 0 && this.playerNodes[i].children[0].getComponent(TP_Player_1.default).stopOperateCD();
        }
      };
      TP_PlayerMgr.prototype.stopAllCountTime = function() {
        for (var i = 0; i < this.playerNodes.length; i++) if (this.playerNodes[i].childrenCount > 0) {
          var playerTS = this.playerNodes[i].children[0].getComponent(TP_Player_1.default);
          playerTS.stopOperateCD();
        }
      };
      TP_PlayerMgr.prototype.playersBootBetByPlayers = function(players) {
        for (var i = 0; i < players.length; i++) {
          var playerData = players[i];
          this.playersBootBetByUserID(playerData.player_id, playerData.bet);
        }
      };
      TP_PlayerMgr.prototype.playersBootBetByUserID = function(userid, bet) {
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setDroppedByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(TP_Player_1.default);
        var gameMgr = VV_1.vv.gameMgr;
        playerItemTS.playerBet(bet / VV_1.vv.global.exchange_rate);
        playerItemTS.setBetCountLabel(bet);
        playerItemTS.setCurBetInfo(6, bet);
        playerItemTS.setSatus(TP_EnumMgr_1.ePlayer_Status.NORMAL);
        gameMgr.isPractice() && (userid == VV_1.vv.userMgr.player_id ? gameMgr.updatepCoin(-bet / VV_1.vv.global.exchange_rate) : gameMgr.updatepAiCoin(userid, -bet / VV_1.vv.global.exchange_rate));
      };
      __decorate([ property(cc.Node) ], TP_PlayerMgr.prototype, "playerNodes", void 0);
      __decorate([ property(cc.Prefab) ], TP_PlayerMgr.prototype, "playerPrefab", void 0);
      __decorate([ property(cc.Prefab) ], TP_PlayerMgr.prototype, "playerSelftPrefab", void 0);
      TP_PlayerMgr = __decorate([ ccclass ], TP_PlayerMgr);
      return TP_PlayerMgr;
    }(cc.Component);
    exports.default = TP_PlayerMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./TP_EnumMgr": "TP_EnumMgr",
    "./TP_Player": "TP_Player"
  } ],
  TP_Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f001ab9NVpMwJ8FAcRtUC8q", "TP_Player");
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
    var PlayerInfoUI_1 = require("../../../scripts/components/PlayerInfoUI");
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var I18nLabel_1 = require("../../../scripts/frameworks/components/i18n/I18nLabel");
    var I18nSprite_1 = require("../../../scripts/frameworks/components/i18n/I18nSprite");
    var EmojiConfig_1 = require("../../../scripts/frameworks/emoji/EmojiConfig");
    var EmojiMgr_1 = require("../../../scripts/frameworks/emoji/EmojiMgr");
    var PoolMgr_1 = require("../../../scripts/frameworks/lib/PoolMgr");
    var TP_CardGroup_1 = require("./TP_CardGroup");
    var TP_EnumMgr_1 = require("./TP_EnumMgr");
    var TP_PlayerLayoutTool_1 = require("./TP_PlayerLayoutTool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_Player = function(_super) {
      __extends(TP_Player, _super);
      function TP_Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.countDown = null;
        _this.countDownTimeLb = null;
        _this.countProgress = null;
        _this.nick_name = null;
        _this.coin = null;
        _this.head = null;
        _this.maskNode = null;
        _this.maskLabel = null;
        _this.betNode = null;
        _this.betCountLabel = null;
        _this.betInfoLabel = null;
        _this.betInfobg = null;
        _this.cardGroup = null;
        _this.betTipsNode = null;
        _this.coinNode = null;
        _this.dealerNode = null;
        _this.cashSPList = [];
        _this.maskI18 = null;
        _this.maskSPFList = [];
        _this.ChaalSPF = "";
        _this.BlindSPF = "";
        _this.X2SPF = null;
        _this.SideSPF = "";
        _this.ShowSPF = "";
        _this.gifBtn = null;
        _this.cashNode = null;
        _this.refreshMoneyListener = null;
        _this.playerWPos = cc.v3(0, 0, 0);
        _this.cashWPos = cc.v3(0, 0, 0);
        _this.played_knock = false;
        _this.tipString = {
          0: "Blind",
          1: "Blind+",
          2: "Chaal",
          3: "Chaal+",
          4: "S.Show",
          5: "Show",
          6: "Blind"
        };
        _this.PlayerInfoUITS = null;
        _this.info = {
          player_id: null,
          nick: null,
          facelook: null,
          coin: null,
          score: null,
          pos: null,
          standby_time: null,
          bet: 0,
          has_see: false,
          state: TP_EnumMgr_1.ePlayer_Status.WAIT
        };
        _this.pCoin = 2e5;
        _this.playerStatus = TP_EnumMgr_1.ePlayer_Status.WAIT;
        _this.isLookCard = false;
        _this.baseBetCount = 0;
        _this.playerBetCount = 0;
        _this.countTime = 30;
        _this.beginCountTime = false;
        _this.staticCountTime = 30;
        return _this;
      }
      TP_Player.prototype.onLoad = function() {
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoney, this);
        this.playerWPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.cashWPos = this.cashNode.parent.convertToWorldSpaceAR(this.cashNode.position);
        this.gifBtn.active = false;
      };
      TP_Player.prototype.start = function() {};
      TP_Player.prototype.onDestroy = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoney, this);
      };
      TP_Player.prototype.refreshMoney = function() {
        this.updateCoin(VV_1.vv.userMgr.coins);
      };
      TP_Player.prototype.earlyWarning = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var boot = gameMgr.TableMgr.getBootBet();
        var curBet = gameMgr.TableMgr.getCurBet();
        var myCoin = Number(VV_1.vv.userMgr.coins);
        var isWarning = false;
        2 * curBet < 32 * boot && myCoin < 32 * boot ? isWarning = true : 2 * curBet < 32 * boot && myCoin < 2 * curBet && (isWarning = true);
        gameMgr.isPractice() || gameMgr.TableMgr.showWarningTipNode(isWarning);
      };
      TP_Player.prototype.onClick = function() {};
      TP_Player.prototype.onGifBtn = function() {
        EmojiMgr_1.EmojiMgr.instance.showEmojiUI(this.info.player_id);
      };
      TP_Player.prototype.showPlayerInfoUI = function() {
        return __awaiter(this, void 0, void 0, function() {
          var node, canvas;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, PoolMgr_1.poolMgr.getBundleNodeByPath(GameConst_1.GameBundle.TeenPatti, "prefabs/PlayerInfoUI") ];

             case 1:
              node = _a.sent();
              canvas = cc.director.getScene().getChildByName("Canvas");
              if (canvas) {
                canvas.addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
                this.PlayerInfoUITS = node.getComponent(PlayerInfoUI_1.PlayerInfoUI);
                this.PlayerInfoUITS.initPlayerInfoUI(this);
              }
              return [ 2 ];
            }
          });
        });
      };
      TP_Player.prototype.updateCoin = function(coin, type) {
        void 0 === type && (type = TP_EnumMgr_1.eROOM_TYPE.CASH);
        var gameMgr = VV_1.vv.gameMgr;
        if (gameMgr.room_type != type) return;
        gameMgr.isPractice() ? this.coin.string = String(coin) : this.coin.string = "\u20b9 " + String(coin);
        this.info.coin = coin;
        this.PlayerInfoUITS && this.PlayerInfoUITS.updateCoin(coin);
        this.info.player_id == VV_1.vv.userMgr.player_id && gameMgr.TableMgr.setMyGold(coin);
      };
      TP_Player.prototype.reset = function() {
        this.stopOperateCD();
        this.hideMask();
        this.clearBetTips();
        this.betNode.active = false;
        this.betCountLabel && (this.betCountLabel.node.active = false);
        this.cardGroup.reset();
        this.setSatus(TP_EnumMgr_1.ePlayer_Status.WAIT);
        this.isLookCard = false;
        this.setDealer(false);
        this.playerBetCount = 0;
        this.played_knock = false;
        this.betInfobg && (this.betInfobg.active = false);
        if (this.betInfoLabel) {
          this.betInfoLabel.node.active = false;
          this.betInfoLabel.string = "";
        }
      };
      TP_Player.prototype.setBetCountLabel = function(betCount) {
        betCount || (betCount = this.info.bet);
        if (!this.betCountLabel) return;
        VV_1.vv.logger.log("\u8bbe\u7f6e\u73a9\u5bb6 ", this.info.player_id, "bet:", betCount);
        this.info.bet = betCount;
        if (VV_1.vv.userMgr.player_id == this.info.player_id) return;
        if (betCount) {
          this.betNode.active = true;
          this.betCountLabel.node.active = true;
        } else {
          this.betNode.active = false;
          this.betCountLabel.node.active = false;
        }
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.isPractice() ? this.betCountLabel.string = VV_1.vv.tools.keepTwoDecimalFull(betCount / VV_1.vv.global.exchange_rate) : this.betCountLabel.string = "\u20b9 " + VV_1.vv.tools.keepTwoDecimalFull(betCount / VV_1.vv.global.exchange_rate);
      };
      TP_Player.prototype.setDealer = function(isDealer) {
        this.dealerNode.active = isDealer;
      };
      TP_Player.prototype.setCurBetInfo = function(tipsType, amount) {
        this.betNode.active = true;
        this.betInfobg && (this.betInfobg.active = true);
        if (this.betInfoLabel) {
          this.betInfoLabel.node.active = true;
          var gameMgr = VV_1.vv.gameMgr;
          VV_1.vv.logger.log("amount:", amount);
          this.betInfoLabel.string = this.tipString[tipsType] + "(" + VV_1.vv.tools.keepTwoDecimalFull(amount / VV_1.vv.global.exchange_rate) + ")";
        }
      };
      TP_Player.prototype.addOperationTips = function(tipsType) {
        this.clearBetTips();
        var tipNode = new cc.Node();
        tipNode.addComponent(cc.Sprite);
        var tipNodeSP = tipNode.addComponent(I18nSprite_1.default);
        var tip1Node = null;
        var tip1NodeSP = null;
        if (tipsType == TP_EnumMgr_1.eOperation_Tips.BLIND) ; else if (tipsType == TP_EnumMgr_1.eOperation_Tips.BLINDX2) {
          tipNodeSP.string = this.BlindSPF;
          tip1Node = new cc.Node();
          tip1NodeSP = tip1Node.addComponent(cc.Sprite);
          tip1NodeSP.spriteFrame = this.X2SPF;
        } else if (tipsType == TP_EnumMgr_1.eOperation_Tips.CHAAL) ; else if (tipsType == TP_EnumMgr_1.eOperation_Tips.CHAALX2) {
          tipNodeSP.string = this.ChaalSPF;
          tip1Node = new cc.Node();
          tip1NodeSP = tip1Node.addComponent(cc.Sprite);
          tip1NodeSP.spriteFrame = this.X2SPF;
        } else tipsType == TP_EnumMgr_1.eOperation_Tips.SIDE_SHOW || tipsType == TP_EnumMgr_1.eOperation_Tips.SHOW;
        this.betTipsNode.addChild(tipNode);
        tip1Node && this.betTipsNode.addChild(tip1Node, 9);
        this.betTipsNode.stopAllActions();
        this.betTipsNode.scale = .8 * this.playerLayoutTool.betTipsScale;
        cc.tween(this.betTipsNode).to(.2, {
          scale: 1.2 * this.playerLayoutTool.betTipsScale
        }, {
          easing: "cubicOut"
        }).to(.2, {
          scale: this.playerLayoutTool.betTipsScale
        }, {
          easing: "cubicOut"
        }).delay(1).call(function() {
          tipNode.runAction(cc.fadeOut(1));
          tip1Node && tip1Node.runAction(cc.fadeOut(1));
        }).start();
      };
      TP_Player.prototype.clearBetTips = function() {
        this.betTipsNode.removeAllChildren();
      };
      TP_Player.prototype.getPlayerInfo = function() {
        return this.info;
      };
      TP_Player.prototype.setPlayerInfo = function(data) {
        this.info = data;
        var playerLayoutTool = this.node.parent.getComponent(TP_PlayerLayoutTool_1.default);
        this.playerLayoutTool = playerLayoutTool;
        this.betNode.position = playerLayoutTool.betNodePos;
        this.cardGroup.node.position = playerLayoutTool.CardGroupPos;
        this.betTipsNode.position = playerLayoutTool.betTipsPos;
        this.betNode.scale = this.betNode.scale * playerLayoutTool.betNodeScale;
        this.cardGroup.node.scale = this.cardGroup.node.scale * playerLayoutTool.CardGroupScale;
        this.betTipsNode.scale = this.betTipsNode.scale * playerLayoutTool.betTipsScale;
        this.cardGroup.init(this.info.player_id == VV_1.vv.userMgr.player_id, this);
        data.bet && !data.state && (data.state = TP_EnumMgr_1.ePlayer_Status.NORMAL);
        null == this.info.bet && (this.info.bet = 0);
        var gameMgr = VV_1.vv.gameMgr;
        if (VV_1.vv.userMgr.player_id == this.info.player_id) {
          this.info.nick = VV_1.vv.userMgr.userName;
          this.info.facelook = VV_1.vv.userMgr.headUrl;
        }
        data.state != TP_EnumMgr_1.ePlayer_Status.WAIT && this.reAddCards();
        this.head.showNetView(data.facelook);
        this.nick_name.string = VV_1.vv.tools.transformNickName(this.info.nick, 8);
        if (this.info.player_id === VV_1.vv.userMgr.player_id) {
          gameMgr.isPractice() ? this.updateCoin(VV_1.vv.global.pCoin, 2) : this.updateCoin(VV_1.vv.userMgr.coins);
          gameMgr.table_info.cards ? this.showCards(gameMgr.table_info.cards, true) : data.state == TP_EnumMgr_1.ePlayer_Status.NORMAL && this.cardGroup.setSeeBtn(true);
        } else {
          gameMgr.isPractice() ? this.updateCoin(this.pCoin, 2) : this.updateCoin(VV_1.vv.tools.keepTwoDecimalFull(data.coins / VV_1.vv.global.exchange_rate));
          this.setLookCard(!!this.info.has_see && this.info.has_see);
          VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoney, this);
        }
        if (gameMgr.isPractice()) for (var i = 0; i < this.cashSPList.length; i++) {
          var cashSP = this.cashSPList[i];
          cashSP.spriteFrame = gameMgr.TableMgr.chipSPF;
        }
        this.setBetCountLabel();
        this.setSatus(data.state, true);
        this.clearBetTips();
      };
      TP_Player.prototype.setSatus = function(playerStatus, isInit) {
        void 0 === playerStatus && (playerStatus = TP_EnumMgr_1.ePlayer_Status.NORMAL);
        void 0 === isInit && (isInit = false);
        this.playerStatus = playerStatus;
        this.info.player_id == VV_1.vv.userMgr.player_id && VV_1.vv.logger.log("----\u5f53\u524d\u81ea\u5df1\u72b6\u6001----", TP_EnumMgr_1.ePlayer_Status[this.playerStatus]);
        if (playerStatus == TP_EnumMgr_1.ePlayer_Status.LOSE) {
          this.showMask(TP_EnumMgr_1.eMaskType.LOSE);
          EmojiMgr_1.EmojiMgr.instance.playEmojiToOther(EmojiConfig_1.EmojiEnum.grenade, this.node);
        } else if (playerStatus == TP_EnumMgr_1.ePlayer_Status.PACK) {
          this.showMask(TP_EnumMgr_1.eMaskType.PACK);
          this.cardGroup.setSeeBtn(false);
        } else playerStatus == TP_EnumMgr_1.ePlayer_Status.WIN && !isInit && this.showWinnerAni();
        if (playerStatus == TP_EnumMgr_1.ePlayer_Status.LOSE || playerStatus == TP_EnumMgr_1.ePlayer_Status.PACK) {
          if (this.info.player_id == VV_1.vv.userMgr.player_id) {
            var gameMgr = VV_1.vv.gameMgr;
            gameMgr.TableMgr.setBetLayer(false);
            !gameMgr.isSettle && gameMgr.BtnMgr.setSwitchBtn(true);
          }
          this.cardGroup.cardGrey();
          this.betInfobg && (this.betInfobg.active = false);
          this.betInfoLabel && (this.betInfoLabel.string = "");
        }
      };
      TP_Player.prototype.hideMask = function() {
        this.maskNode.active = false;
      };
      TP_Player.prototype.showMask = function(maskType) {
        this.maskType = maskType;
        this.maskNode.active = true;
        this.maskI18 && (this.maskI18.string = this.maskSPFList[maskType]);
      };
      TP_Player.prototype.setLookCard = function(isLook) {
        this.isLookCard = isLook;
        this.cardGroup.setSeenNode(isLook);
      };
      TP_Player.prototype.getIsLookCard = function() {
        return this.isLookCard;
      };
      TP_Player.prototype.showCards = function(cards, isSelf) {
        var gameMgr = VV_1.vv.gameMgr;
        this.isLookCard = true;
        this.cardGroup.showCards(cards, isSelf);
        this.cardGroup.setSeenNode(false);
        gameMgr.TableMgr.setBetLabel();
        this.cardGroup.setSeeBtn(false);
      };
      TP_Player.prototype.showCardType = function(cardType) {
        this.cardGroup.showCardType(cardType);
      };
      TP_Player.prototype.reAddCards = function() {
        this.cardGroup.reAddCards();
      };
      TP_Player.prototype.showWinnerAni = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.TableMgr.playWinnerAni(this.playerWPos.add(cc.v3(0, 80, 0)));
        var pos1 = this.playerWPos.add(cc.v3(VV_1.vv.tools.scopeRandom_float(-30, 30), VV_1.vv.tools.scopeRandom_float(-30, 30), 0));
        var pos2 = this.playerWPos.add(cc.v3(VV_1.vv.tools.scopeRandom_float(-30, 30), VV_1.vv.tools.scopeRandom_float(-30, 30), 0));
        var pos3 = this.playerWPos.add(cc.v3(VV_1.vv.tools.scopeRandom_float(-30, 30), VV_1.vv.tools.scopeRandom_float(-30, 30), 0));
        gameMgr.TableMgr.playRocketAni(pos1, function() {
          gameMgr.TableMgr.playRocketAni(pos2, function() {
            gameMgr.TableMgr.playRocketAni(pos3);
          });
        });
      };
      TP_Player.prototype.playerBet = function(count) {
        var gameMgr = VV_1.vv.gameMgr;
        VV_1.vv.audioMgr.playSound("coins_fly");
        gameMgr.TableMgr.addNewBet(this.cashWPos, Math.round(100 * count) / 100);
      };
      TP_Player.prototype.FPSPlayerBet = function() {
        if (this.playerBetCount <= 0) return;
        --this.playerBetCount;
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr && gameMgr.TableMgr;
      };
      TP_Player.prototype.FPSPlayerBets = function() {
        if (this.playerBetCount) {
          var betToCount = Math.max(Math.round(this.baseBetCount / 20), 1);
          betToCount = Math.min(betToCount, 20);
          for (var i = 0; i < betToCount; i++) this.FPSPlayerBet();
        }
      };
      TP_Player.prototype.startOperateCD = function(nTime) {
        this.info.player_id == VV_1.vv.userMgr.player_id && VV_1.vv.audioMgr.playSound("outCardStart");
        this.countTime = Number(nTime);
        this.staticCountTime = this.countTime;
        this.beginCountTime = true;
        this.countDown.active = true;
        this.clearBetTips();
      };
      TP_Player.prototype.stopOperateCD = function() {
        this.beginCountTime = false;
        this.countDown.active = false;
        this.countTime = 30;
      };
      TP_Player.prototype.countDownCB = function() {
        this.countProgress.progress = this.countTime / this.staticCountTime;
        this.countDownTimeLb.string = "" + Math.floor(this.countTime);
        var bar = this.countProgress.node.children[0];
        var newColor = cc.Color.WHITE;
        this.countTime <= 5 && (newColor = cc.Color.RED);
        if (this.info.player_id == VV_1.vv.userMgr.player_id && this.countTime <= 9 && !this.played_knock) {
          var gameMgr = VV_1.vv.gameMgr;
          gameMgr.TableMgr.setGirlAni(TP_EnumMgr_1.eGIRL_ANI.KNOCK);
          this.played_knock = true;
          cc.tween(this.node).delay(3).call(function() {
            VV_1.vv.audioMgr.playSound("knock");
          }).start();
        }
        bar.color = newColor;
      };
      TP_Player.prototype.update = function(dt) {
        this.FPSPlayerBets();
        if (this.beginCountTime) {
          this.countTime -= dt;
          this.countTime <= 0 && (this.countTime = 0);
          this.countDownCB();
          !this.countTime && (this.beginCountTime = false);
        }
      };
      __decorate([ property(cc.Node) ], TP_Player.prototype, "countDown", void 0);
      __decorate([ property(cc.Label) ], TP_Player.prototype, "countDownTimeLb", void 0);
      __decorate([ property(cc.ProgressBar) ], TP_Player.prototype, "countProgress", void 0);
      __decorate([ property(cc.Label) ], TP_Player.prototype, "nick_name", void 0);
      __decorate([ property(cc.Label) ], TP_Player.prototype, "coin", void 0);
      __decorate([ property(NetPic_1.default) ], TP_Player.prototype, "head", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "maskNode", void 0);
      __decorate([ property(cc.Label) ], TP_Player.prototype, "maskLabel", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "betNode", void 0);
      __decorate([ property(cc.Label) ], TP_Player.prototype, "betCountLabel", void 0);
      __decorate([ property(cc.Label) ], TP_Player.prototype, "betInfoLabel", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "betInfobg", void 0);
      __decorate([ property(TP_CardGroup_1.default) ], TP_Player.prototype, "cardGroup", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "betTipsNode", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "coinNode", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "dealerNode", void 0);
      __decorate([ property([ cc.Sprite ]) ], TP_Player.prototype, "cashSPList", void 0);
      __decorate([ property(I18nLabel_1.default) ], TP_Player.prototype, "maskI18", void 0);
      __decorate([ property([ cc.String ]) ], TP_Player.prototype, "maskSPFList", void 0);
      __decorate([ property(cc.String) ], TP_Player.prototype, "ChaalSPF", void 0);
      __decorate([ property(cc.String) ], TP_Player.prototype, "BlindSPF", void 0);
      __decorate([ property(cc.SpriteFrame) ], TP_Player.prototype, "X2SPF", void 0);
      __decorate([ property(cc.String) ], TP_Player.prototype, "SideSPF", void 0);
      __decorate([ property(cc.String) ], TP_Player.prototype, "ShowSPF", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "gifBtn", void 0);
      __decorate([ property(cc.Node) ], TP_Player.prototype, "cashNode", void 0);
      TP_Player = __decorate([ ccclass ], TP_Player);
      return TP_Player;
    }(cc.Component);
    exports.default = TP_Player;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/PlayerInfoUI": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18nLabel": void 0,
    "../../../scripts/frameworks/components/i18n/I18nSprite": void 0,
    "../../../scripts/frameworks/emoji/EmojiConfig": void 0,
    "../../../scripts/frameworks/emoji/EmojiMgr": void 0,
    "../../../scripts/frameworks/lib/PoolMgr": void 0,
    "./TP_CardGroup": "TP_CardGroup",
    "./TP_EnumMgr": "TP_EnumMgr",
    "./TP_PlayerLayoutTool": "TP_PlayerLayoutTool"
  } ],
  TP_SideShowUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6acb3AyNfFDFJfyxbxCfGB6", "TP_SideShowUI");
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
    var AlertInterface_1 = require("../../../scripts/components/alert/AlertInterface");
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_SideShowUI = function(_super) {
      __extends(TP_SideShowUI, _super);
      function TP_SideShowUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.rootNode = null;
        _this.contentLabel = null;
        _this.okLabel = null;
        _this.cancelLabel = null;
        _this.okBtn = null;
        _this.cancelBtn = null;
        _this.contentNode = null;
        _this.timeLabel = null;
        _this.head = null;
        _this.showInfoList = [];
        _this.facelooks = [];
        _this.showInfo = null;
        _this.contentNodeInitHeight = 200;
        _this.playAniing = false;
        return _this;
      }
      TP_SideShowUI.prototype.onLoad = function() {
        this.contentNodeInitHeight = this.contentNode.height;
        this.contentLabel.node.on(cc.Node.EventType.SIZE_CHANGED, this.contentLabelSizeChanged, this);
      };
      TP_SideShowUI.prototype.onDisable = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      TP_SideShowUI.prototype.contentLabelSizeChanged = function() {
        if (this.contentNodeInitHeight < this.contentLabel.node.height) this.contentNode.setContentSize(this.contentNode.width, this.contentLabel.node.height); else {
          this.contentNode.setContentSize(this.contentNode.width, this.contentNodeInitHeight);
          this.contentNode.position = cc.v3(0, 0);
        }
      };
      TP_SideShowUI.prototype.addShowInfo = function(showInfo, facelook) {
        if (this.showInfo.content === showInfo.content) return;
        for (var _i = 0, _a = this.showInfoList; _i < _a.length; _i++) {
          var nShowInfo = _a[_i];
          if (nShowInfo.content === showInfo.content) return;
        }
        this.showInfoList.push(showInfo);
        this.facelooks.push(facelook);
      };
      TP_SideShowUI.prototype.init = function(showInfo, facelook) {
        var _this = this;
        if (this.showInfo) {
          this.addShowInfo(showInfo, facelook);
          return;
        }
        this.showInfo = showInfo;
        false === showInfo.showOkBtn ? showInfo.showOkBtn = false : showInfo.showOkBtn = true;
        false === showInfo.showCancelBtn ? showInfo.showCancelBtn = false : showInfo.showCancelBtn = true;
        this.okBtn.active = showInfo.showOkBtn;
        this.cancelBtn.active = showInfo.showCancelBtn;
        this.contentLabel.string = showInfo.content;
        this.head.showNetView(facelook);
        showInfo.showTimer && VV_1.vv.timerMgr.addScheduleByObject({
          callback: function(timer, dt) {
            showInfo.showTimer.autoClick == AlertInterface_1.eAlertAutoClickType.ok ? _this.onOkBtn() : showInfo.showTimer.autoClick == AlertInterface_1.eAlertAutoClickType.cancel ? _this.onCancelBtn() : showInfo.showTimer.autoClick == AlertInterface_1.eAlertAutoClickType.close ? _this.onCloseBtn() : showInfo.showTimer.autoClick == AlertInterface_1.eAlertAutoClickType.hide && _this.hide();
          },
          target: this,
          intervalTime: showInfo.showTimer.time,
          updateCallback: function(timer, dt) {
            var remainTime = showInfo.showTimer.time - timer.runTime;
            _this.timeLabel.string = "" + Math.round(remainTime);
          }
        });
        this.show();
      };
      TP_SideShowUI.prototype.onCancelBtn = function() {
        if (this.playAniing) return;
        this.hide();
        if (this.showInfo.cancelCB) {
          this.showInfo.cancelCB();
          return;
        }
        if (this.showInfo.closeCB) {
          this.showInfo.closeCB();
          return;
        }
      };
      TP_SideShowUI.prototype.onCloseBtn = function() {
        if (this.playAniing) return;
        this.hide();
        if (this.showInfo.closeCB) {
          this.showInfo.closeCB();
          return;
        }
        if (this.showInfo.cancelCB) {
          this.showInfo.cancelCB();
          return;
        }
      };
      TP_SideShowUI.prototype.onOkBtn = function() {
        if (this.playAniing) return;
        this.hide();
        this.showInfo.okCB && this.showInfo.okCB();
      };
      TP_SideShowUI.prototype.nextShowInfo = function() {
        if (!this.showInfoList.length) return;
        this.init(this.showInfoList.shift(), this.facelooks.shift());
      };
      TP_SideShowUI.prototype.show = function() {
        var _this = this;
        this.playAniing = true;
        this.node.active = true;
        this.rootNode.scaleY = 1;
        this.rootNode.active = true;
        this.bg.opacity = 0;
        this.bg.stopAllActions();
        cc.tween(this.bg).to(.2, {
          opacity: 180
        }).call(function() {
          _this.playAniing = false;
        }).start();
      };
      TP_SideShowUI.prototype.hide = function() {
        var _this = this;
        this.playAniing = true;
        this.rootNode.scaleY = 1;
        this.rootNode.active = true;
        this.bg.opacity = 180;
        this.bg.stopAllActions();
        cc.tween(this.bg).to(.2, {
          opacity: 0
        }).call(function() {}).start();
        this.rootNode.stopAllActions();
        cc.tween(this.rootNode).to(.2, {
          scaleY: 0
        }, {
          easing: "quadIn"
        }).call(function() {
          _this.node.active = false;
          _this.playAniing = false;
          _this.showInfo = null;
          _this.nextShowInfo();
        }).start();
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u80cc\u666f"
      }) ], TP_SideShowUI.prototype, "bg", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5185\u5bb9\u6839\u8282\u70b9"
      }) ], TP_SideShowUI.prototype, "rootNode", void 0);
      __decorate([ property({
        type: cc.RichText,
        tooltip: "\u5185\u5bb9Label"
      }) ], TP_SideShowUI.prototype, "contentLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u786e\u5b9aLabel"
      }) ], TP_SideShowUI.prototype, "okLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u53d6\u6d88Label"
      }) ], TP_SideShowUI.prototype, "cancelLabel", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u786e\u5b9a\u6309\u94ae"
      }) ], TP_SideShowUI.prototype, "okBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53d6\u6d88\u6309\u94ae"
      }) ], TP_SideShowUI.prototype, "cancelBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5305\u88f9\u5185\u5bb9\u7684\u5bb9\u5668"
      }) ], TP_SideShowUI.prototype, "contentNode", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u65f6\u95f4label"
      }) ], TP_SideShowUI.prototype, "timeLabel", void 0);
      __decorate([ property(NetPic_1.default) ], TP_SideShowUI.prototype, "head", void 0);
      TP_SideShowUI = __decorate([ ccclass ], TP_SideShowUI);
      return TP_SideShowUI;
    }(cc.Component);
    exports.default = TP_SideShowUI;
    cc._RF.pop();
  }, {
    "../../../scripts/components/alert/AlertInterface": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  TP_TableInfoUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99705f6i0pLY77CZYNS7hIa", "TP_TableInfoUI");
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
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var UIBase_1 = require("../../../scripts/games/gameBase/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_TableInfoUI = function(_super) {
      __extends(TP_TableInfoUI, _super);
      function TP_TableInfoUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sgame_rZoShd = 712;
        _this._sgame_6R1hEE = 6002;
        _this.bootAmountLabel = null;
        _this.chaalLimitLabel = null;
        _this.maxBlindsLabel = null;
        _this.roundLimitLabel = null;
        _this.potLimitLabel = null;
        _this.okLabel = null;
        _this.timer = null;
        _this.hideCb = null;
        return _this;
      }
      TP_TableInfoUI.prototype._sgame_yFzjZb = function() {
        var a = "w8k5U";
        var b = 1592;
        return a.length + b;
      };
      TP_TableInfoUI.prototype.onDestroy = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      TP_TableInfoUI.prototype.onHide = function() {
        this.hideCb && this.hideCb();
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      TP_TableInfoUI.prototype.initTableInfoUI = function(info, countdown, hideCb) {
        var gameMgr = VV_1.vv.gameMgr;
        this.bootAmountLabel.string = VV_1.vv.tools.keepTwoDecimalFull(info.score / VV_1.vv.global.exchange_rate);
        this.chaalLimitLabel.string = VV_1.vv.tools.keepTwoDecimalFull(info.chaal_limit / VV_1.vv.global.exchange_rate);
        this.potLimitLabel.string = VV_1.vv.tools.keepTwoDecimalFull(info.potlimit / VV_1.vv.global.exchange_rate);
        this.maxBlindsLabel.string = info.max_blinds;
        this.roundLimitLabel.string = info.round_max;
        this.show();
        this.hideCb = hideCb;
        if (countdown) {
          this.okLabel.string = "Okay(3)";
          VV_1.vv.timerMgr.addSchedule(this.hide, this, countdown, 0, this.timerUpdate);
        } else this.okLabel.string = I18n_1.I18n.getText("tp.tableInfoUI.okey");
      };
      TP_TableInfoUI.prototype.timerUpdate = function(timer, dt) {
        this.okLabel.string = I18n_1.I18n.getText("tp.tableInfoUI.okeyFormat").format(Math.round(timer._time));
      };
      __decorate([ property(cc.Label) ], TP_TableInfoUI.prototype, "bootAmountLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableInfoUI.prototype, "chaalLimitLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableInfoUI.prototype, "maxBlindsLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableInfoUI.prototype, "roundLimitLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableInfoUI.prototype, "potLimitLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableInfoUI.prototype, "okLabel", void 0);
      TP_TableInfoUI = __decorate([ ccclass ], TP_TableInfoUI);
      return TP_TableInfoUI;
    }(UIBase_1.default);
    exports.default = TP_TableInfoUI;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/UIBase": void 0
  } ],
  TP_TableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58548ScktVNBIAT9k9qh0g9", "TP_TableMgr");
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
    var frameAnimation_1 = require("../../../scripts/common/frameAnimation");
    var timingToTargetPos_1 = require("../../../scripts/common/timingToTargetPos");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var PoolMgr_1 = require("../../../scripts/frameworks/lib/PoolMgr");
    var TP_EnumMgr_1 = require("./TP_EnumMgr");
    var TP_GameMgr_1 = require("./TP_GameMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TP_TableMgr = function(_super) {
      __extends(TP_TableMgr, _super);
      function TP_TableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tableBetCountLabel = null;
        _this.tableInfoNode = null;
        _this.thunderLineLayer = null;
        _this.thunderLineEffPrefab = null;
        _this.betLayer = null;
        _this.betPoolNode = null;
        _this.betPoolBackNode = null;
        _this.betPrefab = null;
        _this.bootAmountLabel = null;
        _this.chaalLimitLabel = null;
        _this.maxBlindsLabel = null;
        _this.potLimitLabel = null;
        _this.betLabel = null;
        _this.refuseAniPrefab = null;
        _this.challengeAniTS = null;
        _this.betMultiple = false;
        _this.winAniPrefab = null;
        _this.rocketAniPrefab = null;
        _this.winTextAniPrefab = null;
        _this.tableStatusNode = null;
        _this.chipSPF = null;
        _this.chipPractice = null;
        _this.betSPFs = [];
        _this.chipSPList = [];
        _this.roundLabel = null;
        _this.roundCountLabel = null;
        _this.tableBetCountNode = null;
        _this.warnningTipsNode = null;
        _this.bindPhoneTipNode = null;
        _this.tableLimitProgress = null;
        _this.myGold = null;
        _this.animVSNode = null;
        _this.initTableStatusTimer = null;
        _this.statusText = "";
        _this.tableStateData = {
          state: 1,
          state_time: 10
        };
        _this.statusCountTime = 0;
        _this.baseAddBetCount = 0;
        _this.addBetCount = 0;
        _this.betList = [];
        _this.soundEffInterval = .2;
        _this.soundEffTime = 0;
        _this.startAllBetTo = false;
        _this.betToPos = cc.v3(0, 0, 0);
        _this.betCount = 0;
        return _this;
      }
      TP_TableMgr.prototype.onLoad = function() {
        this.animVSNode.active = false;
        VV_1.vv.analysis.startTimers.tpGamecomplete = null;
      };
      TP_TableMgr.prototype.onDisable = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      TP_TableMgr.prototype.start = function() {
        VV_1.vv.gameMgr.launch();
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.TP_GAME_ROOM_ENTER, {
          result: "suc"
        });
        VV_1.vv.analysis.startTimers.tpEnter = Date.now();
        this.setBetLayer(false);
      };
      TP_TableMgr.prototype.onEnable = function() {
        VV_1.vv.gameMgr = new TP_GameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
      };
      TP_TableMgr.prototype.reset = function() {
        this.hideBetAndInfoLayer();
        this.setBetLayer(false);
        this.startAllBetTo = false;
        this.deleteAllBet();
        this.stopChallengeAni();
        this.betPoolBackNode.position = this.betPoolNode.position;
        this.betList = [];
        this.updateRoundLabel(0);
        this.clearAllEffect();
        this.showWarningTipNode(false);
      };
      TP_TableMgr.prototype.setGirlAni = function(state) {};
      TP_TableMgr.prototype.showBindPhoneTipNode = function(isShow) {
        this.bindPhoneTipNode.active = isShow;
      };
      TP_TableMgr.prototype.setMyGold = function(gold) {
        this.myGold.string = gold;
      };
      TP_TableMgr.prototype.clearAllEffect = function() {
        VV_1.vv.tools.removeAllChildren(this.thunderLineLayer);
      };
      TP_TableMgr.prototype.initTableInfo = function(info) {
        this.tableInfo = info;
        var gameMgr = VV_1.vv.gameMgr;
        this.setTableInfoLayer(info);
        this.setBetLabel();
        this.setTableBetCountLabel(info.pot ? info.pot : 0);
        if (gameMgr.isPractice()) for (var i = 0; i < this.chipSPList.length; i++) {
          var chipSP = this.chipSPList[i];
          chipSP.spriteFrame = this.chipPractice;
        } else for (var i = 0; i < this.chipSPList.length; i++) {
          var chipSP = this.chipSPList[i];
          chipSP.spriteFrame = this.chipSPF;
        }
        VV_1.vv.timerMgr.addSchedule(this.initTableStatus, this, .3);
      };
      TP_TableMgr.prototype.initTableStatus = function() {
        var info = this.tableInfo;
        info.state && this.setTableState({
          state: info.state,
          state_time: info.state_time
        });
      };
      TP_TableMgr.prototype.setBetLimitProgress = function() {
        var limit = parseInt(this.potLimitLabel.string);
        var betnow = parseInt(this.tableBetCountLabel.string) || 0;
        if (!limit) return;
        this.tableLimitProgress.progress = betnow / limit;
      };
      TP_TableMgr.prototype.setTableInfoLayer = function(info) {
        var gameMgr = VV_1.vv.gameMgr;
        this.bootAmountLabel.string = VV_1.vv.tools.keepTwoDecimalFull(info.score / VV_1.vv.global.exchange_rate);
        this.chaalLimitLabel.string = VV_1.vv.tools.keepTwoDecimalFull(info.chaal_limit / VV_1.vv.global.exchange_rate);
        this.maxBlindsLabel.string = info.max_blinds;
        this.potLimitLabel.string = VV_1.vv.tools.keepTwoDecimalFull(info.potlimit / VV_1.vv.global.exchange_rate);
        this.roundCountLabel.string = " / " + info.round_max;
        this.roundLabel.string = info.round ? info.round : 0;
      };
      TP_TableMgr.prototype.updateRoundLabel = function(round) {
        this.tableInfo.round = round;
        this.roundLabel.string = this.tableInfo.round ? this.tableInfo.round : 0;
      };
      TP_TableMgr.prototype.setTableBetCountLabel = function(countBat) {
        var gameMgr = VV_1.vv.gameMgr;
        this.tableBetCountLabel.string = VV_1.vv.tools.keepTwoDecimalFull(countBat / VV_1.vv.global.exchange_rate);
        this.setBetLimitProgress();
      };
      TP_TableMgr.prototype.setBootBet = function(value) {
        this.tableInfo.chip = value || this.tableInfo.score;
        this.setBetLabel();
      };
      TP_TableMgr.prototype.getBootBet = function() {
        return Number(this.bootAmountLabel.string);
      };
      TP_TableMgr.prototype.getCurBet = function() {
        return Number(this.betLabel.string);
      };
      TP_TableMgr.prototype.showWarningTipNode = function(isShow) {
        this.warnningTipsNode.active = isShow;
      };
      TP_TableMgr.prototype.setBetLabel = function(value) {
        var gameMgr = VV_1.vv.gameMgr;
        var multiple = (this.betMultiple ? 2 : 1) * (gameMgr.PlayerMgr.getMyNodeTS().isLookCard ? 2 : 1);
        var nowBaseBet = value || (this.tableInfo.chip ? this.tableInfo.chip : this.tableInfo.score);
        var nowBet = VV_1.vv.tools.keepTwoDecimalFull(nowBaseBet * multiple / VV_1.vv.global.exchange_rate);
        this.betLabel.string = nowBet;
      };
      TP_TableMgr.prototype.getNowBet = function(value) {
        var gameMgr = VV_1.vv.gameMgr;
        var multiple = gameMgr.PlayerMgr.getMyNodeTS().isLookCard ? 2 : 1;
        var nowBaseBet = value || (this.tableInfo.chip ? this.tableInfo.chip : this.tableInfo.score);
        var nowBet = VV_1.vv.tools.keepTwoDecimalFull(nowBaseBet * multiple / VV_1.vv.global.exchange_rate);
        return nowBet;
      };
      TP_TableMgr.prototype.getCurRoundBet = function() {
        return this.tableInfo.chip ? this.tableInfo.chip : this.tableInfo.score;
      };
      TP_TableMgr.prototype.setBetMultiple = function(isMultiple) {
        this.betMultiple = isMultiple;
        this.setBetLabel();
      };
      TP_TableMgr.prototype.setBetLayer = function(isShow) {
        this.betLayer.active = isShow;
        this.tableInfoNode.active = false;
      };
      TP_TableMgr.prototype.hideBetAndInfoLayer = function() {
        this.betLayer.active = false;
        this.tableInfoNode.active = false;
      };
      TP_TableMgr.prototype.setTableState = function(data) {
        var gameMgr = VV_1.vv.gameMgr;
        this.tableStateData = data;
        VV_1.vv.timerMgr.deleteByTarget(this);
        switch (this.tableStateData.state) {
         case 1:
          this.statusText = I18n_1.I18n.getText("rummy.scene.statusTips1");
          this.startStatusTimer(data.state_time);
          break;

         case 2:
          this.statusText = I18n_1.I18n.getText("rummy.scene.statusTips2");
          this.startStatusTimer(data.state_time);
          gameMgr.reset();
          break;

         case 3:
          if (VV_1.vv.userMgr.is_guide_tp) {
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.FIRST_GAME_START, {
              result: "success",
              room_id: gameMgr.TableMgr.tableInfo.table_id
            });
            VV_1.vv.analysis.startTimers.tpGuideGame = Date.now();
          }
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.TP_GAME_START, {
            result: "success",
            room_id: gameMgr.TableMgr.tableInfo.table_id
          });
          if (VV_1.vv.analysis.startTimers.tpEnter) {
            var cost = Date.now() - VV_1.vv.analysis.startTimers.tpEnter;
            VV_1.vv.logger.log("otp -> tpEnter cost:", cost / 1e3);
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.TP_GAME_START_COST, {
              cost: String(cost / 1e3)
            });
            VV_1.vv.analysis.startTimers.tpEnter = null;
          }
          VV_1.vv.analysis.startTimers.tpGamecomplete = Date.now();
        }
      };
      TP_TableMgr.prototype.getNowStatus = function() {
        return this.tableStateData.state;
      };
      TP_TableMgr.prototype.startStatusTimer = function(time) {
        this.statusCountTime = time;
        this.tableStatusNode.active = true;
      };
      TP_TableMgr.prototype.stopStatusTimer = function() {
        this.statusCountTime = 0;
        this.tableStatusNode.active = false;
      };
      TP_TableMgr.prototype.statusTimerUpdate = function(dt) {
        if (this.tableStatusNode.active && this.statusCountTime) {
          this.statusCountTime -= dt;
          if (this.statusCountTime <= 0) {
            this.statusCountTime = 0;
            this.stopStatusTimer();
          }
          this.tableStatusNode.children[0].getComponent(cc.Label).string = this.statusText + " ( " + Math.round(this.statusCountTime) + " s )";
        }
      };
      TP_TableMgr.prototype.playWinTextAni = function(sWPos, goldCount) {
        var winTextAniNode = cc.instantiate(this.winTextAniPrefab);
        var str = "";
        var gameMgr = VV_1.vv.gameMgr;
        str = "+" + VV_1.vv.tools.keepTwoDecimalFull(goldCount / VV_1.vv.global.exchange_rate);
        winTextAniNode.children[0].getComponent(cc.Label).string = str;
        this.thunderLineLayer.addChild(winTextAniNode, 2);
        var sPos = this.thunderLineLayer.convertToNodeSpaceAR(sWPos);
        winTextAniNode.position = sPos;
      };
      TP_TableMgr.prototype.playRefuseAni = function(sWPos) {
        var refuseAniNode = cc.instantiate(this.refuseAniPrefab);
        this.thunderLineLayer.addChild(refuseAniNode);
        var sPos = this.thunderLineLayer.convertToNodeSpaceAR(sWPos);
        refuseAniNode.position = sPos;
      };
      TP_TableMgr.prototype.playChallengeAni = function(obj) {
        this.stopChallengeAni();
        this.challengeAniTS.startFly(obj);
      };
      TP_TableMgr.prototype.stopChallengeAni = function() {
        this.challengeAniTS.stopFly();
      };
      TP_TableMgr.prototype.playWinnerAni = function(sWPos, call) {
        var winNode = cc.instantiate(this.winAniPrefab);
        this.thunderLineLayer.addChild(winNode);
        var winTS = winNode.getComponent(frameAnimation_1.default);
        winNode.position = this.thunderLineLayer.convertToNodeSpaceAR(sWPos);
        winTS.playAni(call);
      };
      TP_TableMgr.prototype.playRocketAni = function(sWPos, call) {
        var rocketNode = cc.instantiate(this.rocketAniPrefab);
        this.thunderLineLayer.addChild(rocketNode, 1);
        var rocketTS = rocketNode.getComponent(frameAnimation_1.default);
        rocketNode.position = this.thunderLineLayer.convertToNodeSpaceAR(sWPos);
        rocketTS.playAni(call);
      };
      TP_TableMgr.prototype.playVSAni = function(call) {
        var playFinish = function() {
          this.animVS.removeEventListener(dragonBones.EventObject.COMPLETE, playFinish, this);
          this.animVSNode.active = false;
          call && call();
        }.bind(this);
        this.animVSNode.active = true;
        this.animVS = this.animVSNode.getComponent(dragonBones.ArmatureDisplay);
        this.animVS.playAnimation("vs", 1);
        this.animVS.addEventListener(dragonBones.EventObject.COMPLETE, playFinish, this);
      };
      TP_TableMgr.prototype.playThunderLineEff = function(sWPos, tWPos, playTime, call) {
        var thunderLineEffNode = cc.instantiate(this.thunderLineEffPrefab);
        this.thunderLineLayer.addChild(thunderLineEffNode);
        var tPos = this.thunderLineLayer.convertToNodeSpaceAR(tWPos);
        var sPos = this.thunderLineLayer.convertToNodeSpaceAR(sWPos);
        thunderLineEffNode.position = sPos;
        var lineAngle = Math.atan2(sPos.y - tPos.y, sPos.x - tPos.x);
        lineAngle = 180 * lineAngle / Math.PI + 90;
        thunderLineEffNode.angle = lineAngle;
        thunderLineEffNode.setContentSize(cc.size(thunderLineEffNode.width, tPos.sub(sPos).mag()));
        cc.tween(thunderLineEffNode).delay(playTime).call(function() {
          call && call();
          thunderLineEffNode.destroy();
        }).start();
      };
      TP_TableMgr.prototype.addBetByBeyCount = function(addBetCount) {
        this.addBetCount = addBetCount;
        this.baseAddBetCount = addBetCount;
      };
      TP_TableMgr.prototype.getNewBetNode = function(cash, type) {
        void 0 === type && (type = TP_EnumMgr_1.eBET_TYPE.SILVER);
        return __awaiter(this, void 0, Promise, function() {
          var gameMgr, betNode;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              gameMgr = VV_1.vv.gameMgr;
              return [ 4, PoolMgr_1.poolMgr.getBundleNodeByPath(GameConst_1.GameBundle.TeenPatti, "prefabs/newBetPrefab") ];

             case 1:
              betNode = _a.sent();
              gameMgr.isPractice() ? betNode.children[1].getComponent(cc.Sprite).spriteFrame = this.chipPractice : betNode.children[1].getComponent(cc.Sprite).spriteFrame = this.betSPFs[type];
              betNode.children[2].getComponent(cc.Label).string = cash;
              return [ 2, betNode ];
            }
          });
        });
      };
      TP_TableMgr.prototype.addNewBet = function(sWPos, cash, type) {
        return __awaiter(this, void 0, void 0, function() {
          var betNode, speed, sPos, tPos, mag;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getNewBetNode(cash, type) ];

             case 1:
              betNode = _a.sent();
              speed = 800;
              sPos = this.betPoolNode.convertToNodeSpaceAR(sWPos);
              tPos = this.betPoolNode.convertToNodeSpaceAR(this.tableBetCountNode.parent.convertToWorldSpaceAR(this.tableBetCountNode.position));
              mag = sPos.sub(tPos).mag();
              this.betPoolNode.addChild(betNode);
              betNode.position = sPos;
              betNode.stopAllActions();
              cc.tween(betNode).to(mag / speed, {
                position: tPos
              }).call(function() {
                betNode.destroy();
              }).start();
              return [ 2 ];
            }
          });
        });
      };
      TP_TableMgr.prototype.getBetNode = function(type) {
        void 0 === type && (type = TP_EnumMgr_1.eBET_TYPE.SILVER);
        return __awaiter(this, void 0, Promise, function() {
          var gameMgr, betNode;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              gameMgr = VV_1.vv.gameMgr;
              return [ 4, PoolMgr_1.poolMgr.getBundleNodeByPath(GameConst_1.GameBundle.TeenPatti, "prefabs/betPrefab") ];

             case 1:
              betNode = _a.sent();
              if (gameMgr.isPractice()) {
                betNode.getComponent(cc.Sprite).spriteFrame = this.chipPractice;
                betNode.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
                betNode.setContentSize(cc.size(41, 36));
              } else {
                betNode.getComponent(cc.Sprite).spriteFrame = this.betSPFs[type];
                betNode.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
                betNode.setContentSize(cc.size(41, 36));
              }
              return [ 2, betNode ];
            }
          });
        });
      };
      TP_TableMgr.prototype.addStaticBet = function() {
        return __awaiter(this, void 0, void 0, function() {
          var centerPos, betNode, tPos;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              centerPos = cc.v3(this.betPoolNode.width / 2, 3 * this.betPoolNode.height / 4, 0);
              return [ 4, this.getBetNode() ];

             case 1:
              betNode = _a.sent();
              this.betPoolBackNode.addChild(betNode);
              tPos = this.getBetPosition();
              betNode.position = tPos;
              betNode.stopAllActions();
              this.betList.push(betNode);
              return [ 2 ];
            }
          });
        });
      };
      TP_TableMgr.prototype.FPSAddStaticBet = function() {
        if (this.addBetCount <= 0) return;
        --this.addBetCount;
        this.addStaticBet();
      };
      TP_TableMgr.prototype.FPSAddBets = function(dt) {
        if (this.addBetCount) {
          var betToCount = Math.max(Math.round(this.baseAddBetCount / 20), 1);
          betToCount = Math.min(betToCount, 10);
          for (var i = 0; i < betToCount; i++) this.FPSAddStaticBet();
        }
      };
      TP_TableMgr.prototype.getBetCount = function() {
        return this.betList.length;
      };
      TP_TableMgr.prototype.addBet = function(sWPos, type) {
        return __awaiter(this, void 0, void 0, function() {
          var centerPos, betNode, sPos, tPos, speed, mag, deleteBetNode;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              centerPos = cc.v3(this.betPoolNode.width / 2, 3 * this.betPoolNode.height / 4, 0);
              return [ 4, this.getBetNode(type) ];

             case 1:
              betNode = _a.sent();
              this.betPoolNode.addChild(betNode);
              sPos = this.betPoolNode.convertToNodeSpaceAR(sWPos);
              tPos = this.getBetPosition();
              betNode.position = sPos;
              speed = 800;
              mag = sPos.sub(tPos).mag();
              betNode.stopAllActions();
              cc.tween(betNode).to(mag / speed, {
                position: tPos
              }, {
                easing: "cubicOut"
              }).call(function() {
                betNode.parent = _this.betPoolBackNode;
              }).start();
              this.betList.push(betNode);
              if (this.betList.length >= 1024) {
                deleteBetNode = this.betList.shift();
                deleteBetNode.stopAllActions();
                PoolMgr_1.poolMgr.putNode(deleteBetNode);
              }
              return [ 2 ];
            }
          });
        });
      };
      TP_TableMgr.prototype.getBetPosition = function() {
        var random = Math.random();
        var angle = VV_1.vv.tools.scopeRandom_float(0, 360);
        var radius = this.betPoolNode.height / 2 * Math.sqrt(Math.random());
        var centerPos = cc.v3(this.betPoolNode.width / 2, this.betPoolNode.height / 2, 0);
        var pos = centerPos.add(cc.v3(this.betPoolNode.width / this.betPoolNode.height * Math.cos(angle * Math.PI / 180), Math.sin(angle * Math.PI / 180), 0).mul(radius));
        return cc.v3(pos.x, pos.y, 0);
      };
      TP_TableMgr.prototype.allBetTo = function(tWPos, call) {
        VV_1.vv.audioMgr.playSound("coins_fly");
        this.betToPos = this.betPoolNode.convertToNodeSpaceAR(tWPos);
        this.allBetTocall = call;
        this.startAllBetTo = true;
        this.betCount = this.betList.length;
        this.soundEffTime = 0;
      };
      TP_TableMgr.prototype.betTo = function(betNode) {
        var speed = 800;
        var mag = this.node.position.sub(this.betToPos).mag();
        betNode.stopAllActions();
        var angle = VV_1.vv.tools.scopeRandom_float(0, 360);
        var radius = VV_1.vv.tools.scopeRandom_float(0, 38);
        var pos = this.betToPos.add(cc.v3(Math.cos(angle * Math.PI / 180), Math.sin(angle * Math.PI / 180), 0).mul(radius));
        betNode.parent = this.betPoolNode;
        cc.tween(betNode).to(mag / speed, {
          position: pos
        }, {
          easing: "cubicOut"
        }).call(function() {
          PoolMgr_1.poolMgr.putNode(betNode);
        }).start();
        this.betList.length || this.allBetTocall && this.allBetTocall();
      };
      TP_TableMgr.prototype.FPSBetTo = function() {
        if (this.startAllBetTo && this.betList.length) {
          var betNode = this.betList.pop();
          this.betTo(betNode);
        }
      };
      TP_TableMgr.prototype.deleteAllBet = function() {
        while (this.betList.length) {
          var betNode = this.betList.shift();
          betNode.stopAllActions();
          PoolMgr_1.poolMgr.putNode(betNode);
        }
      };
      TP_TableMgr.prototype.update = function(dt) {
        this.statusTimerUpdate(dt);
        if (this.startAllBetTo && this.betList.length) {
          var betToCount = Math.max(Math.round(this.betCount / 20), 1);
          betToCount = Math.min(betToCount, 10);
          for (var i = 0; i < betToCount; i++) this.FPSBetTo();
          this.soundEffTime -= dt;
          if (this.soundEffTime <= 0) {
            this.soundEffTime = this.soundEffInterval;
            VV_1.vv.audioMgr.playSound("coins_fly");
          }
        }
        this.FPSAddBets(dt);
      };
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "tableBetCountLabel", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "tableInfoNode", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "thunderLineLayer", void 0);
      __decorate([ property(cc.Prefab) ], TP_TableMgr.prototype, "thunderLineEffPrefab", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "betLayer", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "betPoolNode", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "betPoolBackNode", void 0);
      __decorate([ property(cc.Prefab) ], TP_TableMgr.prototype, "betPrefab", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "bootAmountLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "chaalLimitLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "maxBlindsLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "potLimitLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "betLabel", void 0);
      __decorate([ property(cc.Prefab) ], TP_TableMgr.prototype, "refuseAniPrefab", void 0);
      __decorate([ property(timingToTargetPos_1.default) ], TP_TableMgr.prototype, "challengeAniTS", void 0);
      __decorate([ property(cc.Prefab) ], TP_TableMgr.prototype, "winAniPrefab", void 0);
      __decorate([ property(cc.Prefab) ], TP_TableMgr.prototype, "rocketAniPrefab", void 0);
      __decorate([ property(cc.Prefab) ], TP_TableMgr.prototype, "winTextAniPrefab", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "tableStatusNode", void 0);
      __decorate([ property(cc.SpriteFrame) ], TP_TableMgr.prototype, "chipSPF", void 0);
      __decorate([ property(cc.SpriteFrame) ], TP_TableMgr.prototype, "chipPractice", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], TP_TableMgr.prototype, "betSPFs", void 0);
      __decorate([ property([ cc.Sprite ]) ], TP_TableMgr.prototype, "chipSPList", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "roundLabel", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "roundCountLabel", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "tableBetCountNode", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "warnningTipsNode", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "bindPhoneTipNode", void 0);
      __decorate([ property(cc.ProgressBar) ], TP_TableMgr.prototype, "tableLimitProgress", void 0);
      __decorate([ property(cc.Label) ], TP_TableMgr.prototype, "myGold", void 0);
      __decorate([ property(cc.Node) ], TP_TableMgr.prototype, "animVSNode", void 0);
      TP_TableMgr = __decorate([ ccclass ], TP_TableMgr);
      return TP_TableMgr;
    }(cc.Component);
    exports.default = TP_TableMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/common/frameAnimation": void 0,
    "../../../scripts/common/timingToTargetPos": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/frameworks/lib/PoolMgr": void 0,
    "./TP_EnumMgr": "TP_EnumMgr",
    "./TP_GameMgr": "TP_GameMgr"
  } ]
}, {}, [ "TP_ButtonMgr", "TP_Card", "TP_CardGroup", "TP_CardMgr", "TP_EnumMgr", "TP_GameHelper", "TP_GameMgr", "TP_MsgId", "TP_Player", "TP_PlayerLayoutTool", "TP_PlayerMgr", "TP_SideShowUI", "TP_TableInfoUI", "TP_TableMgr" ]);