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
  Rummy_ButtonMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00c3cGSzAtPyKYCWt1NlF4J", "Rummy_ButtonMgr");
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
    var Rummy_MsgID_1 = require("./Rummy_MsgID");
    var SenectiveContentConfig_1 = require("../../../gp/configs/SenectiveContentConfig");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var PanelConfigs_1 = require("../../../scripts/prefabs/panels/PanelConfigs");
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var Rummy_TableInfoUI_1 = require("./Rummy_TableInfoUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_ButtonMgr = function(_super) {
      __extends(Rummy_ButtonMgr, _super);
      function Rummy_ButtonMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.operateBtnsList = [];
        _this.btn_autoSort = null;
        _this.btn_declare = null;
        _this.declareLable = null;
        _this.btn_finish = null;
        _this.btn_more_winning = null;
        _this.btnHisNode = null;
        _this.dropLabel = null;
        _this.AutoSortStageSPF = [];
        _this.gpNode = [];
        _this.isAutoSort = false;
        return _this;
      }
      Rummy_ButtonMgr.prototype.start = function() {
        this.btn_autoSort.active = false;
        this.btn_declare.active = false;
        if (this.gpNode) for (var i = 0; i < this.gpNode.length; i++) this.gpNode[i].active = SenectiveContentConfig_1.SenectiveContentConfig.enableToShowSenectiveContent;
      };
      Rummy_ButtonMgr.prototype.onEnable = function() {};
      Rummy_ButtonMgr.prototype.onDisable = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      Rummy_ButtonMgr.prototype.sortCardClickLogReport = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.TableMgr.tableInfo.table_id;
      };
      Rummy_ButtonMgr.prototype.reset = function() {
        this.btn_autoSort.active = false;
        this.btn_declare.active = false;
        this.isAutoSort = false;
        this.updateOperateBtnByName([]);
        this.stopBtn_finishAni();
      };
      Rummy_ButtonMgr.prototype.showAutoSortBtn = function(isShow) {
        if (this.isAutoSort) return;
        this.btn_autoSort.active = isShow;
      };
      Rummy_ButtonMgr.prototype.showDeclareBtn = function(isShow) {
        this.btn_declare.active = isShow;
        isShow && !this.isAutoSort && this.showAutoSortBtn(false);
      };
      Rummy_ButtonMgr.prototype.updateDeclareText = function(time) {
        var _this = this;
        var gameMgr = VV_1.vv.gameMgr;
        this.declareLable.string = I18n_1.I18n.getText("rummy.scene.declareTips").format(Math.round(time));
        VV_1.vv.timerMgr.addSchedule(function(timer, dt) {
          var timeLeft = time - timer.loopCount;
          _this.declareLable.string = I18n_1.I18n.getText("rummy.scene.declareTips").format(Math.round(timeLeft));
          0 == timeLeft;
        }, this, 1, time);
      };
      Rummy_ButtonMgr.prototype.updateOperateBtnByName = function(btnNames) {
        for (var _i = 0, _a = this.operateBtnsList; _i < _a.length; _i++) {
          var btn = _a[_i];
          btn.getComponent(cc.Button).interactable = false;
          btn.active = false;
        }
        for (var _b = 0, btnNames_1 = btnNames; _b < btnNames_1.length; _b++) {
          var btnName = btnNames_1[_b];
          for (var _c = 0, _d = this.operateBtnsList; _c < _d.length; _c++) {
            var btn = _d[_c];
            if (btn.name == btnName) {
              btn.getComponent(cc.Button).interactable = true;
              btn.active = true;
            }
          }
        }
      };
      Rummy_ButtonMgr.prototype.OnBtnBackClick = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.tableState.state >= 2 && gameMgr.tableState.state < 7 ? VV_1.vv.uiMgr.exitTableAlertTips(gameMgr.onBtnBack) : gameMgr.onBtnBack();
      };
      Rummy_ButtonMgr.prototype.OnBtnSwitchClick = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.tableState.state >= 2 && gameMgr.tableState.state < 7 ? VV_1.vv.uiMgr.switchTableAlertTips(gameMgr.onBtnSwitch) : gameMgr.onBtnSwitch();
      };
      Rummy_ButtonMgr.prototype.OnBtnCallBack = function(event, customData) {
        var gameMgr = VV_1.vv.gameMgr;
        switch (customData) {
         case "tip":
          gameMgr.TableMgr.showTableTip();
          break;

         case "declare":
          VV_1.vv.timerMgr.deleteByTarget(this);
          gameMgr.onDeclareCallBack();
          break;

         case "group":
          gameMgr.CardMgr.makeNewCardGroup();
          break;

         case "setting":
          VV_1.vv.panelRouter.show({
            panel: PanelConfigs_1.PanelConfigs.settingPanel
          });
          break;

         case "btn_rule":
          VV_1.vv.uiMgr.showGameRule();
          break;

         case "btn_more_winning":
          VV_1.vv.uiMgr.guidePlayerToPlayTP();
          break;

         case "btn_menu":
          VV_1.vv.gameMgr.showMenuUI();
          break;

         case "btn_info":
          this.showRummyTableInfoUI(gameMgr.TableMgr.tableInfo, gameMgr.isPractice());
          break;

         case "btn_history":
          var uinode = VV_1.vv.uiMgr.getUI("outCardshistory");
          if (uinode) {
            uinode.active = !uinode.active;
            this.btnHisNode.rotation = uinode.active ? 90 : 0;
          } else {
            this.showRummyHistoryUI();
            this.btnHisNode.rotation = 90;
          }
          break;

         case "btn_exit":
          gameMgr.tableState.state >= 3 && gameMgr.tableState.state < 7 && !gameMgr.isPractice() ? VV_1.vv.uiMgr.exitTableAlertTips(gameMgr.onBtnBack) : gameMgr.onBtnBack();
          break;

         default:
          VV_1.vv.toast.show(I18n_1.I18n.getText("toast.development"));
        }
      };
      Rummy_ButtonMgr.prototype.showRummyHistoryUI = function() {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("outCardshistory");
        null == view ? BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Rummy, function(bundle) {
          bundle.load("prefabs/outCardshistory", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
            }
          });
        }) : view.active = true;
      };
      Rummy_ButtonMgr.prototype.showRummyTableInfoUI = function(info, isPractice) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("tableInfoUI");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Rummy, function(bundle) {
          bundle.load("prefabs/tableInfoUI", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
              var script = node.getComponent(Rummy_TableInfoUI_1.default);
              script && script.initTableInfoUI(info, isPractice);
            }
          });
        });
      };
      Rummy_ButtonMgr.prototype.destroyHistory = function() {
        var uinode = VV_1.vv.uiMgr.getUI("outCardshistory");
        this.btnHisNode.rotation = 0;
        uinode && uinode.destroy();
      };
      Rummy_ButtonMgr.prototype.onBtn_autoSort = function(event) {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.CardMgr.autoSortCardGroup();
        this.isAutoSort = true;
        this.btn_autoSort.active = false;
        this.sortCardClickLogReport();
      };
      Rummy_ButtonMgr.prototype.OnPlayerOperate = function(event, customData) {
        var gameMgr = VV_1.vv.gameMgr;
        var operatetype = customData;
        operatetype && (2 == operatetype && gameMgr.isMyTurn && 1 == gameMgr.operateType && 1 == gameMgr.CardMgr.getCurSelectCardArr().length ? gameMgr.operateCallBack(5) : gameMgr.operateCallBack(parseInt(operatetype)));
        "4" == customData && this.stopBtn_finishAni();
      };
      Rummy_ButtonMgr.prototype.startBtn_finishAni = function() {
        var gameMgr = VV_1.vv.gameMgr;
        this.stopBtn_finishAni();
        cc.tween(this.btn_finish).repeatForever(cc.tween().to(.1, {
          scale: .9
        }).to(.1, {
          scale: 1
        }).to(.1, {
          scale: 1.1
        }).to(.1, {
          scale: 1
        })).start();
        gameMgr.CardMgr.canFinish = true;
      };
      Rummy_ButtonMgr.prototype.stopBtn_finishAni = function() {
        var gameMgr = VV_1.vv.gameMgr;
        this.btn_finish.stopAllActions();
        this.btn_finish.scale = 1;
        gameMgr.CardMgr.canFinish = false;
      };
      Rummy_ButtonMgr.prototype.onBtn_Score = function() {
        VV_1.vv.netMgr.send(Rummy_MsgID_1.RUMMY_MSG_REQ_ID.MSG_GETGAMERECORD_REQ, {});
      };
      Rummy_ButtonMgr.prototype.onBtn_AddCash = function() {
        PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash);
      };
      __decorate([ property([ cc.Node ]) ], Rummy_ButtonMgr.prototype, "operateBtnsList", void 0);
      __decorate([ property(cc.Node) ], Rummy_ButtonMgr.prototype, "btn_autoSort", void 0);
      __decorate([ property(cc.Node) ], Rummy_ButtonMgr.prototype, "btn_declare", void 0);
      __decorate([ property(cc.Label) ], Rummy_ButtonMgr.prototype, "declareLable", void 0);
      __decorate([ property(cc.Node) ], Rummy_ButtonMgr.prototype, "btn_finish", void 0);
      __decorate([ property(cc.Node) ], Rummy_ButtonMgr.prototype, "btn_more_winning", void 0);
      __decorate([ property(cc.Node) ], Rummy_ButtonMgr.prototype, "btnHisNode", void 0);
      __decorate([ property(cc.Label) ], Rummy_ButtonMgr.prototype, "dropLabel", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Rummy_ButtonMgr.prototype, "AutoSortStageSPF", void 0);
      __decorate([ property(cc.Node) ], Rummy_ButtonMgr.prototype, "gpNode", void 0);
      Rummy_ButtonMgr = __decorate([ ccclass ], Rummy_ButtonMgr);
      return Rummy_ButtonMgr;
    }(cc.Component);
    exports.default = Rummy_ButtonMgr;
    cc._RF.pop();
  }, {
    "../../../gp/configs/SenectiveContentConfig": void 0,
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/prefabs/panels/PanelConfigs": void 0,
    "./Rummy_MsgID": "Rummy_MsgID",
    "./Rummy_TableInfoUI": "Rummy_TableInfoUI"
  } ],
  Rummy_CardGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f958QEckJC5a7n0O5oabWm", "Rummy_CardGroup");
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
    var Rummy_Card_1 = require("./Rummy_Card");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var Rummy_GameHelper_1 = require("./Rummy_GameHelper");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var ADD_BTN_LABEL_COLOR = {
      GREEN: "#ffffff",
      ORANGE: "#ffffff",
      RED: "#ffffff"
    };
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_CardGroup = function(_super) {
      __extends(Rummy_CardGroup, _super);
      function Rummy_CardGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardPrefab = null;
        _this.cardNode = null;
        _this.bgNode = null;
        _this.state = null;
        _this.btnAdd = null;
        _this.beltSPFs = [];
        _this.btnSPFs = [];
        _this._cards = [];
        _this._index = -1;
        _this.groupWidthAni = null;
        _this.tempCard = null;
        return _this;
      }
      Rummy_CardGroup.prototype.onEnable = function() {
        this.state.node.on(cc.Node.EventType.SIZE_CHANGED, this.stateSizeChanged, this);
        this.bgNode.on(cc.Node.EventType.SIZE_CHANGED, this.bgNodeSizeChanged, this);
      };
      Rummy_CardGroup.prototype.onDisable = function() {
        this.state.node.targetOff(this);
        this.bgNode.targetOff(this);
      };
      Rummy_CardGroup.prototype.stateSizeChanged = function() {
        this.state.node.x = (this.bgNode.width - this.state.node.width) / 2;
      };
      Rummy_CardGroup.prototype.bgNodeSizeChanged = function() {
        this.state.node.x = (this.bgNode.width - this.state.node.width) / 2;
        this.btnAdd.x = this.bgNode.x + this.bgNode.width / 2;
      };
      Rummy_CardGroup.prototype.start = function() {};
      Rummy_CardGroup.prototype.addDragCard = function(nodeCard) {
        this.removeDragCard();
        if (!nodeCard) return;
        this.dragcard = cc.instantiate(nodeCard);
        var pw = nodeCard.parent.convertToWorldSpaceAR(nodeCard.position);
        var pn = VV_1.vv.gameMgr.CardMgr.dragNode.convertToNodeSpaceAR(pw);
        this.dragcard.position = pn;
        this.dragcard.scale = nodeCard.scale;
        this.dragcard.children[0].scale = nodeCard.children[0].scale;
        VV_1.vv.gameMgr.CardMgr.dragNode.addChild(this.dragcard);
      };
      Rummy_CardGroup.prototype.moveDragCard = function(nodeCard) {
        if (nodeCard && this.dragcard) {
          var pw = nodeCard.parent.convertToWorldSpaceAR(nodeCard.position);
          var pn = VV_1.vv.gameMgr.CardMgr.dragNode.convertToNodeSpaceAR(pw);
          this.dragcard.position = pn;
          this.dragcard.scale = nodeCard.scale;
          this.dragcard.children[0].scale = nodeCard.children[0].scale;
        }
      };
      Rummy_CardGroup.prototype.removeDragCard = function() {
        VV_1.vv.gameMgr.CardMgr.dragNode.removeAllChildren();
      };
      Rummy_CardGroup.prototype.updateCardGroupCards = function(cards) {
        this._cards = cards;
        var cardNodes = [];
        for (var j = 0; j < this.cardNode.children.length; j++) {
          var card = this.cardNode.children[j];
          var cardTS = card.getComponent(Rummy_Card_1.default);
          cardTS.getCardType() == Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD && cardNodes.push(card);
        }
        var len = Math.max(cards.length, cardNodes.length);
        for (var i = 0; i < len; i++) {
          var card = cardNodes[i];
          if (cards[i]) {
            if (!card) {
              card = cc.instantiate(this.cardPrefab);
              this.cardNode.addChild(card);
            }
            var cardTS = card.getComponent(Rummy_Card_1.default);
            cardTS.setCardValue(cards[i], true, null, null, null, true);
            card.x = this.cardNode.x + i * VV_1.vv.gameMgr.handCardOffX;
            cardTS.originPos && (card.y = cardTS.originPos.y);
            cardTS.setCurPos();
            cardTS.setUp(false);
            cardTS.setCardType(Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD);
            cardTS.setOriginGroup(this);
            card.zIndex = 10 * (i + 1);
            cardTS.originZIndex = card.zIndex;
            this._cards[i] = cardTS.getCardData();
          } else card && card.destroy();
        }
      };
      Rummy_CardGroup.prototype.getCardGroupCards = function() {
        return this._cards;
      };
      Rummy_CardGroup.prototype.getLastCardNode = function() {
        var n = this.cardNode.childrenCount;
        return n > 0 ? this.cardNode.children[n - 1] : null;
      };
      Rummy_CardGroup.prototype.getCardGroupHandCards = function() {
        var cards = [];
        for (var i = 0; i < this.cardNode.children.length; i++) {
          var card = this.cardNode.children[i];
          var cardTS = card.getComponent(Rummy_Card_1.default);
          cardTS.getCardType() == Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD && cards.push(cardTS.getCardData());
        }
        return cards;
      };
      Rummy_CardGroup.prototype.isCardsAction = function() {
        var result = false;
        for (var i = 0; i < this.cardNode.children.length; i++) {
          var card = this.cardNode.children[i];
          var cardTS = card.getComponent(Rummy_Card_1.default);
          if (null != cardTS.cardMoveAni) {
            VV_1.vv.logger.log("warning card:" + cardTS.getCardData() + "is moving!,ignore!");
            result = true;
            break;
          }
        }
        return result;
      };
      Rummy_CardGroup.prototype.getGroupData = function() {
        var cards = this.getCardGroupHandCards();
        if (!cards.length) return null;
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(cards, CardMgr.getRouge());
        return {
          cards: this._cards,
          cardtype: result.cardtype,
          score: result.score
        };
      };
      Rummy_CardGroup.prototype.updateCardsOriginZIndex = function(moveZIndex) {
        for (var i = 0; i < this.cardNode.children.length; i++) {
          var card = this.cardNode.children[i];
          var cardTS = card.getComponent(Rummy_Card_1.default);
          cardTS.originZIndex > moveZIndex && (cardTS.originZIndex -= 10);
        }
      };
      Rummy_CardGroup.prototype.updateCardsData = function(setPos, destroySelf) {
        void 0 === setPos && (setPos = false);
        void 0 === destroySelf && (destroySelf = false);
        this.cardNode.children.sort(function(a, b) {
          return a.zIndex - b.zIndex;
        });
        var temp_cardDatas = [];
        var off = 0;
        var offsetXLog = "";
        for (var i = 0; i < this.cardNode.children.length; i++) {
          var card = this.cardNode.children[i];
          var cardTS = card.getComponent(Rummy_Card_1.default);
          if (cardTS.getCardType() == Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD) {
            card.zIndex = 10 * (off + 1);
            cardTS.originZIndex = card.zIndex;
            var offsetX = this.cardNode.x + off * VV_1.vv.gameMgr.handCardOffX;
            var originPos = cc.v3(offsetX, cardTS.originPos.y, 0);
            offsetXLog += "_" + offsetX;
            setPos && (card.position = originPos);
            cardTS.setCurPos(originPos);
            temp_cardDatas.push(cardTS.getCardData());
            off++;
          }
        }
        this._cards = temp_cardDatas;
        if (destroySelf && !this._cards.length && !this.cardNode.children.length) {
          this.node.destroy();
          VV_1.vv.gameMgr.CardMgr.updateGroupSize();
        }
      };
      Rummy_CardGroup.prototype.updateMoveCardZIndex = function(moveCard) {
        var moveCardTS = moveCard.getComponent(Rummy_Card_1.default);
        var point = Math.floor(moveCard.position.x / VV_1.vv.gameMgr.handCardOffX);
        var zIndex = 10 * point + 1;
        moveCard.zIndex = zIndex;
        var logs = "\u79fb\u52a8\u5361\u7247\u7684\u5c42\u7ea7";
        for (var i = 0; i < this.cardNode.children.length; i++) {
          var card = this.cardNode.children[i];
          var cardTS = card.getComponent(Rummy_Card_1.default);
          var cardPoint = Math.round(cardTS.originZIndex / 10 - 1);
          var modValue = Math.round(card.zIndex % 10);
          if (0 == modValue) if (cardPoint >= point) {
            var newPoint = cardPoint + 1;
            card.zIndex = 10 * newPoint;
            card.x = this.cardNode.x + newPoint * VV_1.vv.gameMgr.handCardOffX;
          } else {
            card.zIndex = 10 * cardPoint;
            card.x = this.cardNode.x + cardPoint * VV_1.vv.gameMgr.handCardOffX;
          }
        }
      };
      Rummy_CardGroup.prototype.addCard = function(card, isRight) {
        var cardTS = card.getComponent(Rummy_Card_1.default);
        this._cards.unshift(cardTS.getCardData());
        card.parent = this.cardNode;
        cardTS.setCardType(Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD);
        this.updateCardGroupSize(this._cards.length - 1, true);
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(this._cards, CardMgr.getRouge());
        this.updateCardGroupState(result.cardtype, result.score);
      };
      Rummy_CardGroup.prototype.removeCard = function(card, removeNode, resetCardType) {
        void 0 === removeNode && (removeNode = true);
        void 0 === resetCardType && (resetCardType = true);
        var cardTS = card.getComponent(Rummy_Card_1.default);
        var cardValue = cardTS.getCardData();
        for (var i = 0; i < this._cards.length; i++) {
          var element = this._cards[i];
          if (element == cardValue) {
            this._cards.splice(i, 1);
            break;
          }
        }
        if (removeNode) {
          card.parent = null;
          resetCardType && cardTS.setCardType(Rummy_EnumMgr_1.eCARD_TYPE.OTHER_CARD);
        }
        this.updateCardGroupSize(this._cards.length - 1, true);
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(this._cards, CardMgr.getRouge());
        this.updateCardGroupState(result.cardtype, result.score);
      };
      Rummy_CardGroup.prototype.getCardByIndex = function(index) {
        var cIndex = 0;
        for (var i = 0; i < this.cardNode.children.length; i++) {
          var card = this.cardNode.children[i];
          var cardTS = card.getComponent(Rummy_Card_1.default);
          if (cardTS.getCardType() == Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD) {
            if (cIndex == index) return card;
            cIndex++;
          }
        }
      };
      Rummy_CardGroup.prototype.getCardPosXByZIndex = function(zIndex) {
        var point = Math.round(zIndex / 10 - 1);
        var x = this.cardNode.x + point * VV_1.vv.gameMgr.handCardOffX;
        return x;
      };
      Rummy_CardGroup.prototype.updateCardGroupSize = function(cardNum, quick) {
        var _this = this;
        void 0 === quick && (quick = false);
        if (cardNum >= 0) {
          this.groupWidthAni && this.groupWidthAni.stop();
          var cardWidth = 140;
          var card = this.cardPrefab.data;
          card && (cardWidth = card.getComponent(Rummy_Card_1.default).cardFront.width);
          var groupWidth = cardWidth + cardNum * VV_1.vv.gameMgr.handCardOffX;
          if (quick) {
            this.node.width = groupWidth;
            this.cardNode.width = groupWidth;
          } else this.groupWidthAni = cc.tween(this.node).to(.2, {
            width: {
              value: groupWidth,
              progress: function(start, end, current, t) {
                var realWidth = start + (end - start) * t;
                _this.cardNode.width = realWidth;
                return realWidth;
              }
            }
          }).call(function() {
            _this.groupWidthAni = null;
          }).start();
          this.bgNode.width = groupWidth + 10;
          this.state.node.x = (this.bgNode.width - this.state.node.width) / 2;
          this.btnAdd.x = this.bgNode.x + this.bgNode.width / 2;
        }
      };
      Rummy_CardGroup.prototype.setCardGroupValue = function(groupData, index, quick) {
        this._index = index;
        this.updateCardGroupSize(groupData.cards.length - 1, quick);
        this.updateCardGroupState(groupData.cardtype, groupData.score, groupData.cardText);
        this.updateCardGroupCards(groupData.cards);
        this.showAddCard(false);
      };
      Rummy_CardGroup.prototype.showAddCard = function(isShow, callBack) {
        var _this = this;
        if (isShow) {
          this.btnAdd.targetOff(this);
          this.btnAdd.active = true;
          this.addCallBack = callBack;
          this.btnAdd.on("click", function() {
            _this.addCallBack();
          }, this);
          this.state.node.active = false;
        } else {
          this.btnAdd.active = false;
          this.state.node.active = true;
        }
      };
      Rummy_CardGroup.prototype.addCallBack = function() {
        throw new Error("Method not implemented.");
      };
      Rummy_CardGroup.prototype.refreshGroup = function() {
        var cardlen = 0;
        cardlen = this._cards.length <= 0 ? cardlen : this._cards.length;
        this.updateCardGroupSize(cardlen - 1, true);
        this.state.node.x = (this.bgNode.width - this.state.node.width) / 2;
        this.updateCardsData(true);
      };
      Rummy_CardGroup.prototype.updateCardGroupState = function(cardtype, score, text, isEnd) {
        this.cardtype = cardtype;
        this.score = score;
        var cfg = this.changeColorByCardType(cardtype, score, text, isEnd);
        if (cfg) {
          this.bgNode.getComponent(cc.Sprite).spriteFrame = this.beltSPFs[cfg.color];
          this.btnAdd.getComponent(cc.Sprite).spriteFrame = this.btnSPFs[cfg.color];
          this.state.string = 0 != score ? "pureseq" == cardtype ? cfg.cardType : cfg.cardType + "(" + score + ")" : cfg.cardType;
          this.state.node.color = cc.color().fromHEX(cfg.labelColor);
        }
      };
      Rummy_CardGroup.prototype.changeColorByCardType = function(cardtype, score, text, isEnd) {
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var cfg = {};
        cfg = isEnd ? {
          rouge: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.GREEN,
            cardType: "",
            labelColor: ADD_BTN_LABEL_COLOR.GREEN
          },
          invalid: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.RED,
            cardType: I18n_1.I18n.getText("rummy.group.invalid"),
            labelColor: ADD_BTN_LABEL_COLOR.RED
          },
          restcard: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.RED,
            cardType: I18n_1.I18n.getText("rummy.group.invalid"),
            labelColor: ADD_BTN_LABEL_COLOR.RED
          },
          rougeset: {
            color: 0 == score ? Rummy_EnumMgr_1.eGROUP_COLOR.BLUE : Rummy_EnumMgr_1.eGROUP_COLOR.YELLOW,
            cardType: 0 == score ? I18n_1.I18n.getText("rummy.group.set") : I18n_1.I18n.getText("rummy.group.1stNeed"),
            labelColor: 0 == score ? ADD_BTN_LABEL_COLOR.GREEN : ADD_BTN_LABEL_COLOR.RED
          },
          rougeseq: {
            color: 0 == score ? Rummy_EnumMgr_1.eGROUP_COLOR.GREEN : Rummy_EnumMgr_1.eGROUP_COLOR.YELLOW,
            cardType: 0 == score ? text || I18n_1.I18n.getText("rummy.group.seq") : I18n_1.I18n.getText("rummy.group.1stNeed"),
            labelColor: 0 == score ? ADD_BTN_LABEL_COLOR.GREEN : ADD_BTN_LABEL_COLOR.RED
          },
          pureseq: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.GREEN,
            cardType: text || I18n_1.I18n.getText("rummy.group.pureSeq"),
            labelColor: ADD_BTN_LABEL_COLOR.GREEN
          },
          pureset: {
            color: 0 == score ? Rummy_EnumMgr_1.eGROUP_COLOR.BLUE : Rummy_EnumMgr_1.eGROUP_COLOR.YELLOW,
            cardType: 0 == score ? I18n_1.I18n.getText("rummy.group.set") : I18n_1.I18n.getText("rummy.group.1stNeed"),
            labelColor: 0 == score ? ADD_BTN_LABEL_COLOR.GREEN : ADD_BTN_LABEL_COLOR.RED
          }
        } : {
          rouge: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.GREEN,
            cardType: "",
            labelColor: ADD_BTN_LABEL_COLOR.GREEN
          },
          invalid: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.RED,
            cardType: I18n_1.I18n.getText("rummy.group.invalid"),
            labelColor: ADD_BTN_LABEL_COLOR.RED
          },
          restcard: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.RED,
            cardType: I18n_1.I18n.getText("rummy.group.invalid"),
            labelColor: ADD_BTN_LABEL_COLOR.RED
          },
          rougeset: {
            color: 0 == score ? Rummy_EnumMgr_1.eGROUP_COLOR.BLUE : Rummy_EnumMgr_1.eGROUP_COLOR.YELLOW,
            cardType: 0 == score ? I18n_1.I18n.getText("rummy.group.set") : 0 == CardMgr.handCardLevel ? I18n_1.I18n.getText("rummy.group.1stNeed") : I18n_1.I18n.getText("rummy.group.2rdNeed"),
            labelColor: 0 == score ? ADD_BTN_LABEL_COLOR.GREEN : ADD_BTN_LABEL_COLOR.RED
          },
          rougeseq: {
            color: 0 == score && CardMgr.handCardLevel > 0 ? Rummy_EnumMgr_1.eGROUP_COLOR.GREEN : Rummy_EnumMgr_1.eGROUP_COLOR.YELLOW,
            cardType: 0 == score ? text || I18n_1.I18n.getText("rummy.group.seq") : 0 == CardMgr.handCardLevel ? I18n_1.I18n.getText("rummy.group.1stNeed") : I18n_1.I18n.getText("rummy.group.2rdNeed"),
            labelColor: 0 == score && CardMgr.handCardLevel > 0 ? ADD_BTN_LABEL_COLOR.GREEN : ADD_BTN_LABEL_COLOR.RED
          },
          pureseq: {
            color: Rummy_EnumMgr_1.eGROUP_COLOR.GREEN,
            cardType: text || I18n_1.I18n.getText("rummy.group.pureSeq"),
            labelColor: ADD_BTN_LABEL_COLOR.GREEN
          },
          pureset: {
            color: 0 == score ? Rummy_EnumMgr_1.eGROUP_COLOR.BLUE : Rummy_EnumMgr_1.eGROUP_COLOR.YELLOW,
            cardType: 0 == score ? I18n_1.I18n.getText("rummy.group.set") : 0 == CardMgr.handCardLevel ? I18n_1.I18n.getText("rummy.group.1stNeed") : I18n_1.I18n.getText("rummy.group.2rdNeed"),
            labelColor: 0 == score ? ADD_BTN_LABEL_COLOR.GREEN : ADD_BTN_LABEL_COLOR.RED
          }
        };
        return cfg[cardtype];
      };
      Rummy_CardGroup.prototype.showCardGroupEnd = function(data, cardtype, score) {
        this.updateCardGroupSize(data.length - 1, true);
        null != cardtype && null != score ? this.updateCardGroupState(cardtype, score, null, true) : this.bgNode.active = false;
        this.state.node.active = false;
        for (var i = 0; i < data.length; i++) {
          var card = cc.instantiate(this.cardPrefab);
          card.getComponent(Rummy_Card_1.default).setCardValue(data[i], true, null, null, null, true);
          this.cardNode.addChild(card);
          card.x = this.cardNode.x + i * VV_1.vv.gameMgr.handCardOffX;
          card.getComponent(Rummy_Card_1.default).setCurPos();
        }
        return this.bgNode.width;
      };
      __decorate([ property(cc.Prefab) ], Rummy_CardGroup.prototype, "cardPrefab", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardGroup.prototype, "cardNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardGroup.prototype, "bgNode", void 0);
      __decorate([ property(cc.Label) ], Rummy_CardGroup.prototype, "state", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardGroup.prototype, "btnAdd", void 0);
      __decorate([ property({
        type: [ cc.SpriteFrame ]
      }) ], Rummy_CardGroup.prototype, "beltSPFs", void 0);
      __decorate([ property({
        type: [ cc.SpriteFrame ]
      }) ], Rummy_CardGroup.prototype, "btnSPFs", void 0);
      Rummy_CardGroup = __decorate([ ccclass ], Rummy_CardGroup);
      return Rummy_CardGroup;
    }(cc.Component);
    exports.default = Rummy_CardGroup;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "./Rummy_Card": "Rummy_Card",
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_GameHelper": "Rummy_GameHelper"
  } ],
  Rummy_CardMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "063bc7YvDVFgK+tAcbIkNia", "Rummy_CardMgr");
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
    var Rummy_Card_1 = require("./Rummy_Card");
    var Rummy_GameHelper_1 = require("./Rummy_GameHelper");
    var Rummy_CardGroup_1 = require("./Rummy_CardGroup");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var Rummy_History_1 = require("./Rummy_History");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var I18nEvent_1 = require("../../../scripts/frameworks/components/i18n/I18nEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_CardMgr = function(_super) {
      __extends(Rummy_CardMgr, _super);
      function Rummy_CardMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sendCardNode = null;
        _this.cardGroupNode = null;
        _this.operateNode = null;
        _this.lightPrefab = null;
        _this.cardPrefab = null;
        _this.cardGroupPrefab = null;
        _this.cardLightNode = null;
        _this.cardGroupMask = null;
        _this.addGroupNode = null;
        _this.dragNode = null;
        _this.shuffle = null;
        _this.rouge = null;
        _this.otherCard = [ 0, 0, 0 ];
        _this.cardInfo = [];
        _this.curSelectCardArr = [];
        _this.curSelectCard = null;
        _this.curSelectCardValue = null;
        _this.outCardList = [];
        _this.playerOutCardHistory = [];
        _this.lastOutCardInfo = null;
        _this.firstOutCard = null;
        _this.canShowSuperCard = false;
        _this.handCardLevel = 0;
        _this.tableRound = 0;
        _this.outCardLock = false;
        _this.canFinish = false;
        return _this;
      }
      Rummy_CardMgr.prototype.onEnable = function() {
        VV_1.vv.eventMgr.on(I18nEvent_1.I18nEvent.OnLanguangeChanged, this.onLanguageChanged, this);
      };
      Rummy_CardMgr.prototype.onDisable = function() {
        VV_1.vv.eventMgr.offTarget(this);
      };
      Rummy_CardMgr.prototype.reset = function() {
        this.outCardLock = false;
        this.cardInfo = [];
        this.otherCard = [ 0, 0, 0 ];
        this.sendCardNode.removeAllChildren();
        this.cardGroupNode.removeAllChildren();
        this.playerOutCardHistory = [];
        this.lastOutCardInfo = null;
        this.firstOutCard = null;
        this.operateNode.active = false;
        this.lightCardGroup(false, []);
        this.operateNode.getChildByName("finishSlotNode").getChildByName("finishCard") && this.operateNode.getChildByName("finishSlotNode").getChildByName("finishCard").destroy();
        this.cardGroupMask.active = false;
        this.hideFinishSlotEffect();
        this.hideOpenDeckEffect();
        VV_1.vv.gameMgr.BtnMgr.destroyHistory();
      };
      Rummy_CardMgr.prototype.start = function() {
        this.finishSlotNode = this.operateNode.getChildByName("finishSlotNode");
        this.openDeckNode = this.operateNode.getChildByName("openDeckNode");
        this.registerTouchEvent();
        this.cardGroupNode.on(cc.Node.EventType.SIZE_CHANGED, this.setGroupMaskSize, this);
      };
      Rummy_CardMgr.prototype.onDestroy = function() {
        this.unRegisterTouchEvent();
        this.cardGroupNode.off(cc.Node.EventType.SIZE_CHANGED, this.setGroupMaskSize, this);
      };
      Rummy_CardMgr.prototype.registerTouchEvent = function() {};
      Rummy_CardMgr.prototype.unRegisterTouchEvent = function() {};
      Rummy_CardMgr.prototype.onTouchStart = function(event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        var cardGroups = this.cardGroupNode.children;
        for (var i = 0; i < cardGroups.length; i++) {
          var cards = cardGroups[i].getChildByName("cardNode").children;
          cards.reverse();
          for (var j = 0; j < cards.length; j++) {
            var card = cards[j];
            var rect = card.getBoundingBoxToWorld();
            if (rect.contains(touchLoc)) {
              this.curSelectCard = card;
              break;
            }
          }
          cards.reverse();
        }
        this.curSelectCard && this.curSelectCard.getComponent(Rummy_Card_1.default).setCardState(1);
      };
      Rummy_CardMgr.prototype.setCurSelectCard = function(card, operateType) {
        void 0 === operateType && (operateType = Rummy_EnumMgr_1.eOPERATE_Type.CLICK);
        this.curSelectCard = card;
        this.operateType = operateType;
      };
      Rummy_CardMgr.prototype.onTouchMove = function(event) {};
      Rummy_CardMgr.prototype.onTouchEnd = function(event) {
        var gameMgr = VV_1.vv.gameMgr;
        if (this.curSelectCard) {
          var rummy_card = this.curSelectCard.getComponent(Rummy_Card_1.default);
          if (rummy_card.isUp) {
            rummy_card.setUp(false, true);
            for (var i = 0; i < this.curSelectCardArr.length; i++) this.curSelectCard == this.curSelectCardArr[i] && this.curSelectCardArr.splice(i, 1);
            1 == this.curSelectCardArr.length && (this.curSelectCard = this.curSelectCardArr[0]);
          } else {
            rummy_card.setUp(true, true);
            this.curSelectCardArr.push(this.curSelectCard);
          }
          this.showAddBtn();
          this.updateOperateBtn();
          gameMgr.BtnMgr.stopBtn_finishAni();
          VV_1.vv.logger.log("\u5f53\u524d\u9009\u4e2d\u7684\u724c\u7684\u96c6\u5408: ", this.curSelectCardArr);
        }
      };
      Rummy_CardMgr.prototype.onTouchCancel = function(event) {
        this.curSelectCard = null;
      };
      Rummy_CardMgr.prototype.getCurSelectCardArr = function() {
        return this.curSelectCardArr;
      };
      Rummy_CardMgr.prototype.hideAllClickBtn = function() {
        while (this.curSelectCardArr.length) {
          var card = this.curSelectCardArr.shift();
          var cardTS = card.getComponent(Rummy_Card_1.default);
          cardTS.setUp(false);
        }
        this.curSelectCard = null;
        VV_1.vv.gameMgr.BtnMgr.updateOperateBtnByName([]);
        var cardGroups = this.cardGroupNode.children;
        for (var m = 0; m < cardGroups.length; m++) cardGroups[m].getComponent(Rummy_CardGroup_1.default).showAddCard(false);
      };
      Rummy_CardMgr.prototype.showAddBtn = function() {
        var _this = this;
        var cardGroups = this.cardGroupNode.children;
        var _loop_1 = function(i) {
          var cards = cardGroups[i].getChildByName("cardNode").children;
          var isCardsDown = true;
          for (var j = 0; j < cards.length; j++) if (cards[j].getComponent(Rummy_Card_1.default).isUp) {
            isCardsDown = false;
            break;
          }
          isCardsDown ? cardGroups[i].getComponent(Rummy_CardGroup_1.default).showAddCard(true, function() {
            _this.insertCardToCardGroup(i, _this.curSelectCardArr);
            _this.curSelectCardArr = [];
          }) : cardGroups[i].getComponent(Rummy_CardGroup_1.default).showAddCard(false);
        };
        for (var i = 0; i < cardGroups.length; i++) _loop_1(i);
        var isAllDown = true;
        for (var k = 0; k < cardGroups.length; k++) {
          var cards = cardGroups[k].getChildByName("cardNode").children;
          for (var n = 0; n < cards.length; n++) if (cards[n].getComponent(Rummy_Card_1.default).isUp) {
            isAllDown = false;
            break;
          }
        }
        if (isAllDown) for (var m = 0; m < cardGroups.length; m++) cardGroups[m].getComponent(Rummy_CardGroup_1.default).showAddCard(false);
      };
      Rummy_CardMgr.prototype.insertCardToCardGroup = function(index, cards) {
        for (var i = 0; i < this.curSelectCardArr.length; i++) this.curSelectCardArr[i] && this.curSelectCardArr[i].parent.parent.getComponent(Rummy_CardGroup_1.default).removeCard(this.curSelectCardArr[i]);
        for (var x = 0; x < this.cardGroupNode.childrenCount; x++) {
          var groupCards = this.cardGroupNode.children[x].getComponent(Rummy_CardGroup_1.default).getCardGroupCards();
          if (x == index) for (var y = 0; y < cards.length; y++) cards[y] && groupCards.push(cards[y].getComponent(Rummy_Card_1.default).getCardData());
        }
        var group = this.getCurCardGroupData();
        this.makeGroupCard(group);
      };
      Rummy_CardMgr.prototype.getRouge = function() {
        return this.rouge ? this.rouge : 79;
      };
      Rummy_CardMgr.prototype.getCardArr = function() {
        var cardArr = [];
        for (var m = 0; m < this.cardGroupNode.childrenCount; m++) {
          var groupCards = this.cardGroupNode.children[m].getComponent(Rummy_CardGroup_1.default).getCardGroupCards();
          cardArr = cardArr.concat(groupCards);
        }
        return cardArr;
      };
      Rummy_CardMgr.prototype.getHandTypeCardArr = function() {
        var cardArr = [];
        for (var m = 0; m < this.cardGroupNode.childrenCount; m++) {
          var groupCards = this.cardGroupNode.children[m].getComponent(Rummy_CardGroup_1.default).getCardGroupHandCards();
          cardArr = cardArr.concat(groupCards);
        }
        return cardArr;
      };
      Rummy_CardMgr.prototype.getHandTypeCardGroup = function() {
        var group = [];
        for (var m = 0; m < this.cardGroupNode.childrenCount; m++) {
          var groupData = this.cardGroupNode.children[m].getComponent(Rummy_CardGroup_1.default).getGroupData();
          groupData && group.push(groupData);
        }
        return group;
      };
      Rummy_CardMgr.prototype.calculationFinish = function() {
        var canFinish = false;
        this.curSelectCard.getComponent(Rummy_Card_1.default).setCardType(Rummy_EnumMgr_1.eCARD_TYPE.OTHER_CARD);
        var group = this.getHandTypeCardGroup();
        var returnData = this.updateCardGroupScore(group);
        if (2 == returnData.level) {
          var score = 0;
          group = returnData.group;
          for (var i = 0; i < group.length; i++) {
            var data = group[i];
            score += data.score;
          }
          0 == score && (canFinish = true);
        }
        this.curSelectCard.getComponent(Rummy_Card_1.default).setCardType(Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD);
        this.canFinish = canFinish;
        VV_1.vv.logger.log("-----\u9884\u6f14\u7b97\u662f\u5426\u80fd\u6210\u724c------", this.canFinish);
        return canFinish;
      };
      Rummy_CardMgr.prototype.getFinishCardGroupData = function(selCard) {
        var group = [];
        var canSetSurSelectCard = this.curSelectCard.getComponent(Rummy_Card_1.default).getCardType() == Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD;
        this.curSelectCard.parent && canSetSurSelectCard && this.curSelectCard.getComponent(Rummy_Card_1.default).setCardType(Rummy_EnumMgr_1.eCARD_TYPE.OTHER_CARD);
        for (var m = 0; m < this.cardGroupNode.childrenCount; m++) {
          var temp = {
            cards: []
          };
          temp.cards = this.cardGroupNode.children[m].getComponent(Rummy_CardGroup_1.default).getCardGroupHandCards();
          temp.cards.length > 0 && group.push(temp);
        }
        this.curSelectCard.parent && canSetSurSelectCard && this.curSelectCard.getComponent(Rummy_Card_1.default).setCardType(Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD);
        VV_1.vv.logger.log("\u6210\u724c\u6570\u636e\uff1a", group);
        return group;
      };
      Rummy_CardMgr.prototype.getDeclareGroup = function() {
        var group = [];
        for (var m = 0; m < this.cardGroupNode.childrenCount; m++) {
          var temp = {
            cards: []
          };
          var groupCards = this.cardGroupNode.children[m].getComponent(Rummy_CardGroup_1.default).getCardGroupCards();
          temp.cards = temp.cards.concat(groupCards);
          temp.cards.length > 0 && group.push(temp);
        }
        return group;
      };
      Rummy_CardMgr.prototype.getCurCardGroupData = function() {
        var group = [];
        for (var m = 0; m < this.cardGroupNode.childrenCount; m++) {
          var temp = {
            cards: [],
            cardtype: null,
            cardcolor: null,
            score: null
          };
          var groupCards = this.cardGroupNode.children[m].getComponent(Rummy_CardGroup_1.default).getCardGroupCards();
          temp.cards = temp.cards.concat(groupCards);
          if (temp.cards.length > 0) {
            var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(temp.cards, this.getRouge());
            temp.cardtype = result.cardtype;
            temp.score = result.score;
            group.push(temp);
          }
        }
        return group;
      };
      Rummy_CardMgr.prototype.showAddGroup = function() {
        this.addGroupNode.active = this.getCurCardGroupData().length < VV_1.vv.global.groupCountLimit;
      };
      Rummy_CardMgr.prototype.hideAddGroup = function() {
        this.addGroupNode.active = false;
      };
      Rummy_CardMgr.prototype.sendCard = function(data) {
        var _this = this;
        var gameMgr = VV_1.vv.gameMgr;
        data.openDeckCard && (this.otherCard[0] = data.openDeckCard);
        if (data.wildJokerCard) {
          this.otherCard[1] = data.wildJokerCard;
          this.rouge = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[data.wildJokerCard];
          14 != this.rouge && 15 != this.rouge || (this.rouge = 1);
        }
        data.info && data.info.player_id == VV_1.vv.userMgr.player_id && (this.cardInfo = data.info.cards);
        this.operateNode.active = false;
        gameMgr.TableMgr.setTipLevel(0);
        var cardArr = this.cardInfo;
        var group = Rummy_GameHelper_1.Rummy_GameHelper.getSendCardGroup(cardArr, this.getRouge());
        var self = this;
        var gWPos = this.cardGroupNode.parent.convertToWorldSpaceAR(this.cardGroupNode.position);
        var gPos = this.sendCardNode.convertToNodeSpaceAR(gWPos);
        var fWPos = this.operateNode.convertToWorldSpaceAR(this.operateNode.getChildByName("finishSlotNode").position);
        var fPos = this.sendCardNode.convertToNodeSpaceAR(fWPos);
        var oWPos = this.operateNode.convertToWorldSpaceAR(this.operateNode.getChildByName("openDeckNode").position);
        var oPos = this.sendCardNode.convertToNodeSpaceAR(oWPos);
        var cWPos = this.operateNode.convertToWorldSpaceAR(this.operateNode.getChildByName("closeDeckNode").position);
        var cPos = this.sendCardNode.convertToNodeSpaceAR(cWPos);
        VV_1.vv.audioMgr.playSound("sendCard");
        var _loop_2 = function(i) {
          var card = cc.instantiate(this_1.cardPrefab);
          this_1.sendCardNode.addChild(card);
          card.getComponent(Rummy_Card_1.default).setCardValue(null);
          card.stopAllActions();
          card.position = this_1.sendCardNode.position;
          card.scale = gameMgr.MINI_CARD_SCALE;
          card.angle = 0;
          card.runAction(cc.sequence(cc.delayTime(.05 * i), cc.spawn(cc.scaleTo(.15, gameMgr.SEND_CARD_SCALE, gameMgr.SEND_CARD_SCALE), cc.moveTo(.15, cc.v2(90 * i - 540, gPos.y))), cc.delayTime(.05 * this_1.cardInfo.length - .02 * i), cc.callFunc(function() {
            card.getComponent(Rummy_Card_1.default).setCardValue(cardArr[i], true, true, false, true, true);
          }), cc.callFunc(function() {
            card.getComponent(Rummy_Card_1.default).setCurPos();
            if (i == _this.cardInfo.length - 1) {
              var _loop_3 = function(j) {
                _this.sendCardNode.children[j].runAction(cc.spawn(cc.delayTime(.1 * j), cc.callFunc(function() {
                  j == _this.cardInfo.length - 1 && _this.sendCardNode.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    _this.sendCardNode.removeAllChildren();
                    _this.makeGroupCard(group, true);
                  }), cc.delayTime(.4), cc.callFunc(function() {
                    for (var k = 0; k < _this.otherCard.length; k++) {
                      var nCard = cc.instantiate(self.cardPrefab);
                      1 == k && (nCard.active = false);
                      self.sendCardNode.addChild(nCard);
                      nCard.getComponent(Rummy_Card_1.default).setCardValue(null);
                      nCard.stopAllActions();
                      nCard.position = self.sendCardNode.position;
                      nCard.scale = gameMgr.MINI_CARD_SCALE;
                      nCard.angle = 0;
                      k == _this.otherCard.length - 1 && self.sendCardNode.childrenCount > 0 && self.sendCardNode.children[0].runAction(cc.sequence(cc.moveTo(.4, cc.v2(oPos.x, oPos.y)).easing(cc.easeSineOut()), cc.callFunc(function() {
                        self.outCardList = [ _this.otherCard[0] ];
                        self.firstOutCard = _this.otherCard[0];
                        self.sendCardNode.children[0].getComponent(Rummy_Card_1.default).setCardValue(_this.otherCard[0], true, true);
                      }), cc.delayTime(.2), cc.callFunc(function() {
                        self.sendCardNode.children[2].runAction(cc.sequence(cc.moveTo(.4, cc.v2(cPos.x, cPos.y)).easing(cc.easeSineOut()), cc.delayTime(.2), cc.callFunc(function() {
                          self.sendCardNode.children[1].position = self.sendCardNode.children[2].position;
                          self.sendCardNode.children[1].active = true;
                          self.sendCardNode.children[1].runAction(cc.sequence(cc.callFunc(function() {
                            self.canShowSuperCard = true;
                            cc.director.emit("showAllSuper", true);
                            self.sendCardNode.children[1].getComponent(Rummy_Card_1.default).setCardType(Rummy_EnumMgr_1.eCARD_TYPE.COVER_CARD);
                            self.sendCardNode.children[1].getComponent(Rummy_Card_1.default).setCardValue(_this.otherCard[1]);
                            self.operateNode.active = true;
                          }), cc.callFunc(function() {
                            var ani = self.sendCardNode.children[1].children[0].getComponent(cc.Animation);
                            ani.play();
                            gameMgr.BtnMgr.showAutoSortBtn(true);
                          })));
                        })));
                      })));
                    }
                  })));
                })));
              };
              for (var j = 0; j < _this.sendCardNode.childrenCount; j++) _loop_3(j);
            }
          })));
        };
        var this_1 = this;
        for (var i = 0; i < this.cardInfo.length; i++) _loop_2(i);
      };
      Object.defineProperty(Rummy_CardMgr.prototype, "outCardNode", {
        get: function() {
          return this.sendCardNode.children[0];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Rummy_CardMgr.prototype, "blackCardNode", {
        get: function() {
          return this.sendCardNode.children[2];
        },
        enumerable: false,
        configurable: true
      });
      Rummy_CardMgr.prototype.showClosedDeck = function(isshow) {
        this.sendCardNode.children[2].active = isshow;
      };
      Rummy_CardMgr.prototype.showShuffle = function(delay) {
        VV_1.vv.logger.log("\u5f00\u59cb\u6d17\u724c");
        var uinode = VV_1.vv.uiMgr.getUI("outCardshistory");
        if (uinode) {
          var script = uinode.getComponent(Rummy_History_1.default);
          script && script.reset();
        }
        if (delay) {
          var self_1 = this;
          this.node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function() {
            self_1.outCardNode.active = false;
            self_1.outCardList = [];
            self_1.playerOutCardHistory = [];
            self_1.lastOutCardInfo = null;
            self_1.shuffleNode = cc.instantiate(self_1.shuffle);
            self_1.cardLightNode.addChild(self_1.shuffleNode);
            var ani = self_1.shuffleNode.children[0].getComponent(cc.Animation);
            ani.play("shuffle2", 0);
            ani.on("finished", self_1.shuffleFinish, self_1);
          })));
        } else {
          this.outCardNode.active = false;
          this.outCardList = [];
          this.playerOutCardHistory = [];
          this.lastOutCardInfo = null;
          this.shuffleNode = cc.instantiate(this.shuffle);
          this.cardLightNode.addChild(this.shuffleNode);
          var ani = this.shuffleNode.children[0].getComponent(cc.Animation);
          ani.play("shuffle2", 0);
          ani.on("finished", this.shuffleFinish, this);
        }
      };
      Rummy_CardMgr.prototype.shuffleFinish = function() {
        if (this.shuffleNode) {
          var cWPos = this.operateNode.convertToWorldSpaceAR(this.operateNode.getChildByName("closeDeckNode").position);
          var cPos = this.cardLightNode.convertToNodeSpaceAR(cWPos);
          var self_2 = this;
          this.shuffleNode.runAction(cc.sequence(cc.moveTo(.4, cc.v2(cPos.x, cPos.y)).easing(cc.easeSineOut()), cc.delayTime(.2), cc.callFunc(function() {
            self_2.shuffleNode.removeFromParent();
            self_2.blackCardNode.active = true;
          })));
        }
      };
      Rummy_CardMgr.prototype.showCardGroupMask = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.BtnMgr.updateOperateBtnByName([]);
        this.cardGroupMask.active = true;
        for (var i = 0; i < this.curSelectCardArr.length; i++) {
          var cardNode = this.curSelectCardArr[i];
          cardNode.getComponent(Rummy_Card_1.default).setUp(false);
        }
      };
      Rummy_CardMgr.prototype.setGroupMaskSize = function() {
        this.cardGroupMask.width = this.cardGroupNode.width - 130;
        this.cardGroupMask.height = this.cardGroupNode.height + 20;
      };
      Rummy_CardMgr.prototype.updateGroupSize = function() {
        var group = this.getCurCardGroupData();
        this.calGroupCardSpacingX(group);
        VV_1.vv.logger.log("\u66f4\u65b0\u65b0\u7684\u724c\u7ec4", group);
        var len = this.cardGroupNode.childrenCount;
        for (var i = 0; i < len; i++) {
          var cardGroup = this.cardGroupNode.children[i];
          if (cardGroup) {
            var cardGroupTS = cardGroup.getComponent(Rummy_CardGroup_1.default);
            cardGroupTS.refreshGroup();
          }
        }
      };
      Rummy_CardMgr.prototype.onLanguageChanged = function() {
        var groups = this.getCurCardGroupData();
        this.makeGroupCard(groups);
      };
      Rummy_CardMgr.prototype.makeGroupCard = function(group, quick, outCard) {
        void 0 === quick && (quick = true);
        var gameMgr = VV_1.vv.gameMgr;
        var score = 0;
        group || (group = Rummy_GameHelper_1.Rummy_GameHelper.sortCardGroup(this.getCurCardGroupData()));
        var returnData = this.updateCardGroupScore(group);
        group = returnData.group;
        VV_1.vv.logger.log("\u751f\u6210\u65b0\u7684\u724c\u7ec4", group);
        this.curSelectCard = null;
        this.curSelectCardArr = [];
        this.cardGroupNode.stopAllActions();
        for (var j = 0; j < group.length; j++) score += group[j].score;
        2 == returnData.level && 0 == score && (returnData.level = 3);
        this.handCardLevel = returnData.level;
        var len = Math.max(group.length, this.cardGroupNode.childrenCount);
        this.calGroupCardSpacingX(group);
        for (var i = 0; i < len; i++) if (group[i] && void 0 != group[i].cards && group[i].cards.length > 0) {
          var cardGroup = this.cardGroupNode.children[i];
          if (!cardGroup) {
            cardGroup = cc.instantiate(this.cardGroupPrefab);
            this.cardGroupNode.addChild(cardGroup, i);
          }
          cardGroup.zIndex = i;
          cardGroup.getComponent(Rummy_CardGroup_1.default).setCardGroupValue(group[i], i, quick);
        } else this.cardGroupNode.children[i] && this.cardGroupNode.children[i].destroy();
        score > 80 && (score = 80);
        gameMgr.PlayerMgr.updateScore(score);
        this.updateOperateBtn(outCard);
      };
      Rummy_CardMgr.prototype.calGroupCardSpacingX = function(group) {
        var empty = 0;
        var len = group.length;
        for (var i = 0; i < len; i++) (!group[i] || void 0 == group[i].cards || group[i].cards.length <= 0) && empty++;
        var cards = 0;
        for (var i = 0; i < len; i++) group[i] && void 0 != group[i].cards && group[i].cards.length > 0 && (cards += group[i].cards.length - 1);
        if (len > 0) {
          var cardWidth = 140;
          var card = this.cardPrefab.data;
          card && (cardWidth = card.getComponent(Rummy_Card_1.default).cardFront.width);
          var sizeT = VV_1.vv.gameMgr.maxHandCardsWidth - cardWidth * (len - empty) - 5 * (len - empty - 1);
          VV_1.vv.gameMgr.handCardOffX = sizeT / cards;
          VV_1.vv.logger.log("vv.gameMgr.handCardOffX:", VV_1.vv.gameMgr.handCardOffX);
        }
      };
      Rummy_CardMgr.prototype.updateCardGroupScore = function(groups) {
        var m_cardGroups = [];
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
          var group = groups_1[_i];
          "rougeset" != group.cardtype && "pureset" != group.cardtype && "rougeseq" != group.cardtype && "pureseq" != group.cardtype || m_cardGroups.push(group);
        }
        var pureseqNum = 1;
        var seqCount = 0;
        var isHavePureSeq = false;
        for (var _a = 0, m_cardGroups_1 = m_cardGroups; _a < m_cardGroups_1.length; _a++) {
          var group = m_cardGroups_1[_a];
          if ("rougeseq" == group.cardtype) seqCount++; else if ("pureseq" == group.cardtype) {
            seqCount++;
            isHavePureSeq = true;
            if (pureseqNum > 2) continue;
            group.cardText = 1 == pureseqNum ? I18n_1.I18n.getText("rummy.group.1st") : I18n_1.I18n.getText("rummy.group.2rd");
            ++pureseqNum;
          }
        }
        if (isHavePureSeq && seqCount >= 2) for (var _b = 0, groups_2 = groups; _b < groups_2.length; _b++) {
          var group = groups_2[_b];
          if ("rougeset" == group.cardtype || "pureset" == group.cardtype || "rougeseq" == group.cardtype || "pureseq" == group.cardtype) {
            group.score = 0;
            if (pureseqNum > 2) continue;
            if ("rougeseq" == group.cardtype) {
              group.cardText = I18n_1.I18n.getText("rummy.group.2rd");
              ++pureseqNum;
            }
          }
        }
        var level = isHavePureSeq ? 1 : 0;
        isHavePureSeq && seqCount >= 2 && (level = 2);
        return {
          group: groups,
          level: level
        };
      };
      Rummy_CardMgr.prototype.updateAllCardGroupScore = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var groups = [];
        for (var _i = 0, _a = this.cardGroupNode.children; _i < _a.length; _i++) {
          var cardGroup = _a[_i];
          var cardGroupTS = cardGroup.getComponent(Rummy_CardGroup_1.default);
          var groupData = cardGroupTS.getGroupData();
          groupData && groups.push(groupData);
        }
        var returnData = this.updateCardGroupScore(groups);
        var countScore = 0;
        for (var _b = 0, _c = returnData.group; _b < _c.length; _b++) {
          var kGroupData = _c[_b];
          countScore += kGroupData.score;
        }
        2 == returnData.level && 0 == countScore && (returnData.level = 3);
        this.handCardLevel = returnData.level;
        var index = 0;
        for (var j = 0; j < returnData.group.length; j++) {
          var nGroupData = returnData.group[index];
          var cardGroup = this.cardGroupNode.children[j];
          var cardGroupTS = cardGroup.getComponent(Rummy_CardGroup_1.default);
          var groupData = cardGroupTS.getGroupData();
          if (!groupData) continue;
          ++index;
          cardGroupTS.updateCardGroupState(nGroupData.cardtype, nGroupData.score, nGroupData.cardText);
        }
        gameMgr.PlayerMgr.updateScore(countScore);
      };
      Rummy_CardMgr.prototype.autoSortCardGroup = function() {
        if (this.cardGroupMask.active) {
          VV_1.vv.logger.log("\u5df2\u5f03\u724c, \u4e0d\u80fd\u81ea\u52a8\u7406\u724c");
          return;
        }
        var cardArr = Rummy_GameHelper_1.Rummy_GameHelper.Newsortcards(this.getCardArr());
        var group = Rummy_GameHelper_1.Rummy_GameHelper.SortGroupCardDefault(cardArr, this.getRouge());
        this.makeGroupCard(group);
      };
      Rummy_CardMgr.prototype.showSuperCardFlag = function(isShow) {
        for (var i = 0; i < this.cardGroupNode.childrenCount; i++) {
          var cardNodes = this.cardGroupNode.children[i].getChildByName("cardNode").children;
          for (var j = 0; j < cardNodes.length; j++) isShow ? cardNodes[j].getComponent(Rummy_Card_1.default).getCardData() == this.getRouge() && cardNodes[j].getComponent(Rummy_Card_1.default).updateSuperCardFlag(isShow, true) : cardNodes[j].getComponent(Rummy_Card_1.default).updateSuperCardFlag(isShow, true);
        }
        this.outCardNode.getComponent(Rummy_Card_1.default).updateSuperCardFlag(isShow);
      };
      Rummy_CardMgr.prototype.selfGetCard = function(cardValue) {
        var gameMgr = VV_1.vv.gameMgr;
        var groups = this.getCurCardGroupData();
        groups[groups.length - 1].cards.push(cardValue);
        VV_1.vv.logger.log(groups);
        var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(groups[groups.length - 1].cards, this.getRouge());
        groups[groups.length - 1].cardtype = result.cardtype;
        groups[groups.length - 1].score = result.score;
        this.makeGroupCard(groups);
        this.autoJumpFinishBtn(groups);
        var cards = [];
        for (var _i = 0, groups_3 = groups; _i < groups_3.length; _i++) {
          var group = groups_3[_i];
          cards = cards.concat(group.cards);
        }
        14 != cards.length && console.warn("Check_Cards---\u6478\u724c--\u540e\u724c\u4e0d\u662f14\u5f20\uff0c\u5b9e\u9645\u5f20\u6570\uff1a", cards.length, "\u6240\u6709\u7684\u724c\uff1a", cards);
      };
      Rummy_CardMgr.prototype.autoJumpFinishBtn = function(group) {
        var gameMgr = VV_1.vv.gameMgr;
        var isFinish = false;
        var failCount = 0;
        var groupIndex = -1;
        var cardIndex = -1;
        var fail = "Level == 3, \u4e0d\u80fd\u51fa\u4efb\u4f55\u4e00\u5f20\u724c\u6210\u724c";
        VV_1.vv.logger.log("---\u81ea\u52a8\u5f39\u51fa\u724c\u7ed9\u73a9\u5bb6\u6210\u724c", "---\u724c\u7ec4\u7b49\u7ea7---", this.handCardLevel);
        if (3 == this.handCardLevel) {
          for (var i = 0; i < group.length; i++) if ("rougeset" == group[i].cardtype || "pureset" == group[i].cardtype || "rougeseq" == group[i].cardtype || "pureseq" == group[i].cardtype) {
            if (group[i].cards.length < 4) continue;
            for (var j = 0; j < group[i].cards.length; j++) {
              var cards = VV_1.vv.uiMgr.deepClone(group[i].cards);
              cards.splice(j, 1);
              var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(cards, this.getRouge());
              if ("rougeset" == result.cardtype || "pureset" == result.cardtype || "rougeseq" == result.cardtype || "pureseq" == result.cardtype) {
                isFinish = true;
                groupIndex = i;
                cardIndex = j;
                break;
              }
            }
            if (isFinish) break;
          }
        } else if (2 == this.handCardLevel) for (var i = 0; i < group.length; i++) if ("rougeset" == group[i].cardtype || "pureset" == group[i].cardtype || "rougeseq" == group[i].cardtype || "pureseq" == group[i].cardtype) VV_1.vv.logger.log("\u724c\u7ec4\u7c7b\u578b", group[i].cardtype); else {
          ++failCount;
          if (failCount >= 2) {
            isFinish = false;
            fail = "Level == 2, \u6709\u4e24\u7ec4\u53ca\u4ee5\u4e0a\u7684\u4e0d\u6210\u724c\u724c\u7ec4";
            break;
          }
          if (1 == group[i].cards.length) {
            isFinish = true;
            groupIndex = i;
            cardIndex = 0;
            continue;
          }
          if (2 == group[i].cards.length) {
            VV_1.vv.logger.log("---2\u5f20\u724c\u7279\u6b8a\u5904\u7406---1111", "---\u724c\u7ec4---", group[i].cards, "\u765e\u5b50\u4e3a\uff1a", this.getRouge());
            var cards = group[i].cards;
            var index = 0;
            for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
              var card = cards_1[_i];
              var CARD_VALUE = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[card];
              var CARD_COLOR = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_COLOR[card];
              VV_1.vv.logger.log("---2\u5f20\u724c\u7279\u6b8a\u5904\u7406---222", "---\u724c\u503c---", CARD_VALUE, "---\u82b1\u8272---", CARD_COLOR + "----\u765e\u5b50\u4e3a---", this.getRouge());
              if (CARD_VALUE == this.getRouge() || CARD_COLOR > 3) {
                VV_1.vv.logger.log("---2\u5f20\u724c\u7279\u6b8a\u5904\u7406---333", "---\u724c\u503c---", CARD_VALUE, "---\u82b1\u8272---", CARD_COLOR + "----\u765e\u5b50\u4e3a---", this.getRouge());
                isFinish = true;
                groupIndex = i;
                cardIndex = 0 == index ? 1 : 0;
                break;
              }
              ++index;
            }
            VV_1.vv.logger.log("---2\u5f20\u724c\u7279\u6b8a\u5904\u7406---444", "---\u6210\u724c---", isFinish, "---\u724c\u7ec4\u5e8f---", groupIndex + "----\u724c\u5e8f---", cardIndex);
            if (isFinish) {
              VV_1.vv.logger.log("---2\u5f20\u724c\u7279\u6b8a\u5904\u7406---555", "---\u6210\u724c---", isFinish, "---\u724c\u7ec4\u5e8f---", groupIndex + "----\u724c\u5e8f---", cardIndex);
              continue;
            }
          } else if (group[i].cards.length < 4) {
            isFinish = false;
            fail = "Level == 2, \u6709\u5c0f\u4e8e4\u5f20\u724c\u4e14\u4e0d\u6210\u724c";
            break;
          }
          for (var j = 0; j < group[i].cards.length; j++) {
            var cards = VV_1.vv.uiMgr.deepClone(group[i].cards);
            cards.splice(j, 1);
            var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(cards, this.getRouge());
            if ("rougeset" == result.cardtype || "pureset" == result.cardtype || "rougeseq" == result.cardtype || "pureseq" == result.cardtype || 1 == group[i].cards.length) {
              isFinish = true;
              groupIndex = i;
              cardIndex = j;
              break;
            }
          }
        }
        if (true == isFinish) {
          var card = this.getCardByGroupAndCardIndex(groupIndex, cardIndex);
          this.setCurSelectCard(card);
          this.onTouchEnd();
          gameMgr.BtnMgr.startBtn_finishAni();
          VV_1.vv.logger.log("----autoJumpFinishBtn---groupIndex: ", groupIndex, "---cardIndex: ", cardIndex);
        } else {
          VV_1.vv.logger.log("autoJumpFinishBtn---fail---", fail);
          gameMgr.BtnMgr.stopBtn_finishAni();
        }
      };
      Rummy_CardMgr.prototype.getCardByGroupAndCardIndex = function(groupIndex, cardIndex) {
        var cardGroupTS = this.cardGroupNode.children[groupIndex].getComponent(Rummy_CardGroup_1.default);
        var card = cardGroupTS.getCardByIndex(cardIndex);
        return card;
      };
      Rummy_CardMgr.prototype.getLastGroupCardWPos = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var lastGroupTS = this.cardGroupNode.children[this.cardGroupNode.childrenCount - 1].getComponent(Rummy_CardGroup_1.default);
        var lastGroupCardNode = lastGroupTS.getLastCardNode();
        var offsetPos = cc.v3(gameMgr.handCardOffX + lastGroupCardNode.x, lastGroupCardNode.y, 0);
        var LastGroupCardWPos = lastGroupTS.cardNode.parent.convertToWorldSpaceAR(lastGroupTS.cardNode.position.add(offsetPos));
        return LastGroupCardWPos;
      };
      Rummy_CardMgr.prototype.setLastGroupSize = function(cardNum) {
        var lastGroupTS = this.cardGroupNode.children[this.cardGroupNode.childrenCount - 1].getComponent(Rummy_CardGroup_1.default);
        cardNum || (cardNum = lastGroupTS.getCardGroupCards().length);
        lastGroupTS.updateCardGroupSize(cardNum);
      };
      Rummy_CardMgr.prototype.setOutCardByServer = function(cardValue) {
        var cardGroups = this.cardGroupNode.children;
        for (var i = 0; i < cardGroups.length; i++) {
          var cards = cardGroups[i].getChildByName("cardNode").children;
          cards.reverse();
          for (var j = 0; j < cards.length; j++) if (cards[j].getComponent(Rummy_Card_1.default).getCardData() == cardValue) {
            this.curSelectCard = cards[j];
            break;
          }
          cards.reverse();
        }
      };
      Rummy_CardMgr.prototype.selfOutCard = function() {
        var self = this;
        if (self.operateType == Rummy_EnumMgr_1.eOPERATE_Type.CLICK) {
          self.curSelectCard && (self.curSelectCard.active = false);
          self.curSelectCard && self.curSelectCard.parent.parent.getComponent(Rummy_CardGroup_1.default).removeCard(self.curSelectCard);
          self.curSelectCard && self.curSelectCard.parent && self.curSelectCard.removeFromParent();
        }
        var group = self.getCurCardGroupData();
        self.makeGroupCard(group, true, true);
      };
      Rummy_CardMgr.prototype.updatePlayerOutCardHistory = function(playerid, cardValue, pickedUp) {
        if (!playerid) {
          VV_1.vv.logger.log("playerid error", playerid);
          return;
        }
        this.playerOutCardHistory[playerid] || (this.playerOutCardHistory[playerid] = []);
        if (pickedUp) {
          if (!this.lastOutCardInfo) return;
          var playerWho = this.lastOutCardInfo.playerid;
          var len = this.playerOutCardHistory[playerWho].length;
          if (len <= 0) return;
          if (this.playerOutCardHistory[playerWho][len - 1].cardValue != cardValue) {
            VV_1.vv.logger.log("first card or pickedUp data error", cardValue);
            return;
          }
          this.playerOutCardHistory[playerWho][len - 1].isPicked = true;
        } else {
          this.playerOutCardHistory[playerid].push({
            cardValue: cardValue,
            isPicked: false
          });
          this.lastOutCardInfo = {
            playerid: playerid,
            cardValue: cardValue
          };
        }
      };
      Rummy_CardMgr.prototype.updateHistoryUI = function(playerid, cardValue, isPickUp) {
        playerid && this.updatePlayerOutCardHistory(playerid, cardValue, isPickUp);
        var uinode = VV_1.vv.uiMgr.getUI("outCardshistory");
        if (uinode) {
          var script = uinode.getComponent(Rummy_History_1.default);
          script && script.updateAInfo(playerid, cardValue, isPickUp);
        }
      };
      Rummy_CardMgr.prototype.resetHistoryUI = function() {
        var uinode = VV_1.vv.uiMgr.getUI("outCardshistory");
        if (uinode) {
          var script = uinode.getComponent(Rummy_History_1.default);
          if (script) {
            script.initDownInfo();
            script.initFirstCard();
          }
        }
      };
      Rummy_CardMgr.prototype.updateOutCard = function(cardValue, option, playerid) {
        var gameMgr = VV_1.vv.gameMgr;
        if (5 == option || 7 == option) {
          if (0 == this.outCardList.length) {
            this.firstOutCard = cardValue;
            this.outCardList.push(cardValue);
            this.resetHistoryUI();
          } else if (playerid) {
            this.outCardList.push(cardValue);
            this.updateHistoryUI(playerid, cardValue);
          }
          this.updateShowOutCard(cardValue);
          VV_1.vv.logger.log("--\u5f03\u724c\u5806--<<<", this.outCardList);
        } else if (4 == option) {
          var card = cc.instantiate(this.cardPrefab);
          this.operateNode.getChildByName("finishSlotNode").addChild(card);
          card.scale = gameMgr.MINI_CARD_SCALE;
          card.name = "finishCard";
          card.getComponent(Rummy_Card_1.default).setCardValue(cardValue);
        }
        this.hideFinishSlotEffect();
        this.hideOpenDeckEffect();
        var cards = this.getCardArr();
        13 != cards.length && console.warn("Check_Cards---\u51fa\u724c---\u540e\u724c\u4e0d\u662f13\u5f20\uff0c\u5b9e\u9645\u5f20\u6570\uff1a", cards.length, "\u6240\u6709\u7684\u724c\uff1a", cards);
      };
      Rummy_CardMgr.prototype.shiftOutCard = function(playerid) {
        var cardValue = null;
        var cardPicked = this.outCardList.pop();
        this.outCardList.length > 0 && (cardValue = this.outCardList[this.outCardList.length - 1]);
        this.updateHistoryUI(playerid, cardPicked, true);
        VV_1.vv.logger.log("--\u5f03\u724c\u5806--\x3e>>", this.outCardList);
        this.updateShowOutCard(cardValue);
      };
      Rummy_CardMgr.prototype.updateShowOutCard = function(cardValue) {
        if (!this.outCardNode) return;
        if (cardValue) {
          this.outCardNode.active = true;
          this.outCardNode.getComponent(Rummy_Card_1.default).setCardValue(cardValue);
        } else this.outCardNode.active = false;
      };
      Rummy_CardMgr.prototype.getGoalWPosByOption = function(option) {
        var localPos = cc.v3(0, 0, 0);
        5 == option || 7 == option ? localPos = this.operateNode.getChildByName("openDeckNode").position : 4 == option ? localPos = this.operateNode.getChildByName("finishSlotNode").position : 1 == option || 8 == option ? localPos = this.operateNode.getChildByName("closeDeckNode").position : 2 == option && (localPos = this.operateNode.getChildByName("openDeckNode").position);
        return this.operateNode.convertToWorldSpaceAR(localPos);
      };
      Rummy_CardMgr.prototype.showFinishSlotEffect = function(cardValue) {
        if (this.finishSlotEffect) return;
        var gameMgr = VV_1.vv.gameMgr;
        var off = this.operateNode.position.sub(this.cardLightNode.position);
        this.finishSlotEffect = cc.instantiate(this.cardPrefab);
        this.cardLightNode.addChild(this.finishSlotEffect);
        this.finishSlotEffect.getComponent(Rummy_Card_1.default).setCardValue(cardValue);
        this.finishSlotEffect.scale = gameMgr.MINI_CARD_SCALE;
        this.finishSlotEffect.position = this.operateNode.getChildByName("finishSlotNode").position.add(off);
        cc.tween(this.finishSlotEffect).repeatForever(cc.tween().to(.25, {
          opacity: 155
        }).to(.25, {
          opacity: 255
        })).start();
      };
      Rummy_CardMgr.prototype.hideFinishSlotEffect = function() {
        if (this.finishSlotEffect) {
          this.finishSlotEffect.destroy();
          this.finishSlotEffect = null;
        }
      };
      Rummy_CardMgr.prototype.showOpenDeckEffect = function(cardValue) {
        if (this.openDeckEffect) return;
        var gameMgr = VV_1.vv.gameMgr;
        var off = this.operateNode.position.sub(this.cardLightNode.position);
        this.outCardNode.active = false;
        this.openDeckEffect = cc.instantiate(this.cardPrefab);
        this.cardLightNode.addChild(this.openDeckEffect);
        this.openDeckEffect.getComponent(Rummy_Card_1.default).setCardValue(cardValue);
        this.openDeckEffect.scale = gameMgr.MINI_CARD_SCALE;
        this.openDeckEffect.position = this.operateNode.getChildByName("openDeckNode").position.add(off);
        cc.tween(this.openDeckEffect).repeatForever(cc.tween().to(.25, {
          opacity: 155
        }).to(.25, {
          opacity: 255
        })).start();
      };
      Rummy_CardMgr.prototype.hideOpenDeckEffect = function() {
        if (this.openDeckEffect) {
          this.openDeckEffect.destroy();
          this.openDeckEffect = null;
          this.outCardNode && this.outCardList.length > 0 && (this.outCardNode.active = true);
        }
      };
      Rummy_CardMgr.prototype.newCardMoveAni = function(cardValue, cWPos, tWPos, call, cScale, tScale, aniType, delay, moveTime, parent, turnAni, useEasing) {
        void 0 === cScale && (cScale = VV_1.vv.gameMgr.MINI_CARD_SCALE);
        void 0 === tScale && (tScale = VV_1.vv.gameMgr.MINI_CARD_SCALE);
        void 0 === aniType && (aniType = Rummy_EnumMgr_1.eFLY_CARD_ANI.NORMAL);
        void 0 === delay && (delay = .767);
        void 0 === moveTime && (moveTime = .333);
        void 0 === parent && (parent = this.node);
        VV_1.vv.logger.log("--\u98de\u724c\u4ece(\u4e16\u754c\u5750\u6807)--", cWPos.x, cWPos.y, "--\u5230--", tWPos.x, tWPos.y);
        var card = cc.instantiate(this.cardPrefab);
        parent.addChild(card);
        var cLPos = parent.convertToNodeSpaceAR(cWPos);
        var tLPos = parent.convertToNodeSpaceAR(tWPos);
        turnAni && card.getComponent(Rummy_Card_1.default).setCardIsFold(turnAni);
        card.position = cLPos;
        card.scale = cScale;
        aniType != Rummy_EnumMgr_1.eFLY_CARD_ANI.START_SHOW ? card.getComponent(Rummy_Card_1.default).setCardValue() : turnAni || card.getComponent(Rummy_Card_1.default).setCardValue(cardValue);
        aniType == Rummy_EnumMgr_1.eFLY_CARD_ANI.ANI_SHOW ? cc.tween(card).to(moveTime, {
          position: tLPos,
          scale: tScale
        }, {
          easing: useEasing || "smooth"
        }).to(.1, {
          scaleX: 0
        }).call(function() {
          card.getComponent(Rummy_Card_1.default).setCardValue(cardValue);
        }).to(.1, {
          scaleX: tScale
        }, {
          easing: useEasing || "smooth"
        }).call(function() {
          card.destroy();
          call && call();
        }).start() : aniType == Rummy_EnumMgr_1.eFLY_CARD_ANI.START_SHOW && turnAni ? cc.tween(card).to(moveTime, {
          position: tLPos,
          scale: tScale
        }, {
          easing: useEasing || "smooth"
        }).call(function() {
          card.getComponent(Rummy_Card_1.default).setCardValue(cardValue, true, turnAni, null, null, true);
        }).delay(.5).call(function() {
          call && call();
          card.destroy();
        }).start() : (aniType == Rummy_EnumMgr_1.eFLY_CARD_ANI.NORMAL || aniType == Rummy_EnumMgr_1.eFLY_CARD_ANI.START_SHOW && !turnAni) && cc.tween(card).to(moveTime, {
          position: tLPos,
          scale: tScale
        }, {
          easing: useEasing || "smooth"
        }).delay(delay).call(function() {
          card.destroy();
          call && call();
        }).start();
      };
      Rummy_CardMgr.prototype.OnDealer = function(data) {
        this.canShowSuperCard = false;
        var gameMgr = VV_1.vv.gameMgr;
        var cardWidth = this.cardPrefab.data.width;
        var cardHeight = this.cardPrefab.data.height;
        var playerWidth = 105;
        var viewOffsePos = {
          1: cc.v3(0, -(1.2 * playerWidth - cardHeight * gameMgr.MINI_CARD_SCALE), 0),
          2: cc.v3(-(playerWidth / 2 + cardWidth * gameMgr.MINI_CARD_SCALE) / 2, -(playerWidth / 2 + cardHeight * gameMgr.MINI_CARD_SCALE) / 2, 0),
          3: cc.v3(0, -(playerWidth / 2 + cardHeight / 2 * gameMgr.MINI_CARD_SCALE), 0),
          4: cc.v3(0, 170 - (playerWidth + cardHeight / 2 * gameMgr.MINI_CARD_SCALE), 0),
          5: cc.v3(0, -(playerWidth / 2 + cardHeight / 2 * gameMgr.MINI_CARD_SCALE), 0),
          6: cc.v3((playerWidth / 2 + cardWidth * gameMgr.MINI_CARD_SCALE) / 2, -(playerWidth / 2 + cardHeight / 2 * gameMgr.MINI_CARD_SCALE) / 2, 0)
        };
        var banker_userid = null;
        var maxCard_userid = null;
        var maxCard = null;
        var maxCardNode = null;
        for (var key in data) {
          var cardValue = data[key].card;
          var wPos = gameMgr.PlayerMgr.getViewWPosByUserId(data[key].player_id);
          var pos = this.sendCardNode.convertToNodeSpaceAR(wPos);
          var viewSeat = gameMgr.PlayerMgr.getViewSeatByUserID(data[key].player_id);
          var card = cc.instantiate(this.cardPrefab);
          this.sendCardNode.addChild(card);
          card.stopAllActions();
          card.scale = gameMgr.MINI_CARD_SCALE;
          card.getComponent(Rummy_Card_1.default).setCardValue(cardValue, true, true);
          pos && (card.position = pos.add(viewOffsePos[viewSeat]));
          data[key].is_dealer && (banker_userid = data[key].player_id);
          14 == cardValue ? cardValue = 1 : 30 == cardValue ? cardValue = 17 : 46 == cardValue ? cardValue = 33 : 62 == cardValue && (cardValue = 49);
          var MAX_CARD_VALUE = -1;
          var MAX_CARD_COLOR = -1;
          if (maxCard) {
            MAX_CARD_VALUE = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[maxCard];
            MAX_CARD_COLOR = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_COLOR[maxCard];
            1 == MAX_CARD_VALUE && (MAX_CARD_VALUE = 14);
          }
          var CARD_VALUE = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[cardValue];
          var CARD_COLOR = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_COLOR[cardValue];
          1 == CARD_VALUE && (CARD_VALUE = 14);
          if (CARD_VALUE > MAX_CARD_VALUE) {
            maxCard = cardValue;
            maxCardNode = card;
            maxCard_userid = data[key].player_id;
          } else if (CARD_VALUE == MAX_CARD_VALUE && CARD_COLOR > MAX_CARD_COLOR) {
            maxCard = cardValue;
            maxCardNode = card;
            maxCard_userid = data[key].player_id;
          }
          VV_1.vv.logger.log("------", maxCard, cardValue, "---showDealer---", MAX_CARD_VALUE, MAX_CARD_COLOR, "----", CARD_VALUE, CARD_COLOR);
        }
        maxCardNode && maxCardNode.getComponent(Rummy_Card_1.default).showDealerAction();
        banker_userid && gameMgr.PlayerMgr.showBankerFlag(banker_userid);
        VV_1.vv.userMgr.player_id == maxCard_userid && VV_1.vv.toast.show(I18n_1.I18n.getText("toast.wonTheToss"));
        this.tableRound = 0;
      };
      Rummy_CardMgr.prototype.lightCardGroup = function(isShow, cfg) {
        if (!this.cardLightNode) {
          console.warn("---Rummy_CardMgr---lightCardGroup---", this.cardLightNode);
          return;
        }
        VV_1.vv.logger.log("---Rummy_CardMgr---lightCardGroup---", this.cardLightNode);
        var cfg2 = {
          closeDeck: this.cardLightNode.getChildByName("closeDeckLight"),
          openDeck: this.cardLightNode.getChildByName("openDeckLight"),
          finishSlot: this.cardLightNode.getChildByName("finishSlotLight")
        };
        for (var key in cfg2) cfg2[key] && cfg2[key].removeAllChildren();
        if (isShow) for (var i = 0; i < cfg.length; i++) if (cfg2[cfg[i]]) {
          var light = cc.instantiate(this.lightPrefab);
          cfg2[cfg[i]].addChild(light);
          light.name = "light";
        }
      };
      Rummy_CardMgr.prototype.removeDealerUI = function() {
        this.sendCardNode.removeAllChildren();
      };
      Rummy_CardMgr.prototype.getCurSelectCardValue = function() {
        if (this.curSelectCard) {
          if (this.curSelectCard.parent) {
            var cardValue = this.curSelectCard.getComponent(Rummy_Card_1.default).getCardData();
            return cardValue || -1;
          }
          return this.curSelectCardValue;
        }
      };
      Object.defineProperty(Rummy_CardMgr.prototype, "outCardData", {
        get: function() {
          this._outCardData || (this._outCardData = {
            table_number_round: "",
            cardValue: -1,
            cardWPos: cc.v3(0, 0, 0)
          });
          return this._outCardData;
        },
        set: function(v) {
          this._outCardData = v;
        },
        enumerable: false,
        configurable: true
      });
      Rummy_CardMgr.prototype.resetOutCardData = function(error_code) {
        var gameMgr = VV_1.vv.gameMgr;
        this._outCardData = {
          table_number_round: "",
          cardValue: -1,
          cardWPos: cc.v3(0, 0, 0)
        };
        gameMgr.outCardReset(error_code);
      };
      Rummy_CardMgr.prototype.updateOutCardData = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var now_table_number_round = String(gameMgr.TableMgr.tableInfo.table_id) + gameMgr.TableMgr.tableInfo.table_number + "_" + this.tableRound;
        if (now_table_number_round == this.outCardData.table_number_round) return;
        var data = this.outCardData;
        if (this.curSelectCard && this.curSelectCard.parent) {
          var cardValue = this.curSelectCard.getComponent(Rummy_Card_1.default).getCardData();
          data.cardValue = cardValue;
          data.cardWPos = this.curSelectCard.parent.convertToWorldSpaceAR(this.curSelectCard.position);
          data.table_number_round = now_table_number_round;
          this.outCardData = data;
        }
        VV_1.vv.logger.log("------updateOutCardData------", this.outCardData);
      };
      Rummy_CardMgr.prototype.canOutCard = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var now_table_number = String(gameMgr.TableMgr.tableInfo.table_id) + gameMgr.TableMgr.tableInfo.table_number + "_" + this.tableRound;
        if (now_table_number == this.outCardData.table_number_round) return false;
        return true;
      };
      Rummy_CardMgr.prototype.updateOperateBtn = function(outCard) {
        var gameMgr = VV_1.vv.gameMgr;
        if (gameMgr.isMyTurn) {
          if (0 == gameMgr.operateType) if (this.curSelectCardArr.length > 1) {
            var showArr = [ "btn_drop" ];
            this.getCurCardGroupData().length < VV_1.vv.global.groupCountLimit && showArr.push("btn_group");
            gameMgr.BtnMgr.updateOperateBtnByName(showArr);
          } else outCard || gameMgr.BtnMgr.updateOperateBtnByName([ "btn_drop" ]); else if (1 == gameMgr.operateType) if (this.curSelectCardArr.length > 1) {
            var showArr = [];
            this.getCurCardGroupData().length < VV_1.vv.global.groupCountLimit && showArr.push("btn_group");
            gameMgr.BtnMgr.updateOperateBtnByName(showArr);
          } else if (1 == this.curSelectCardArr.length) {
            var showBtns = [ "btn_discard", "btn_finish" ];
            gameMgr.BtnMgr.updateOperateBtnByName(showBtns);
          } else gameMgr.BtnMgr.updateOperateBtnByName([]);
        } else if (this.curSelectCardArr.length > 1) {
          var showArr = [];
          this.getCurCardGroupData().length < VV_1.vv.global.groupCountLimit && showArr.push("btn_group");
          gameMgr.BtnMgr.updateOperateBtnByName(showArr);
        } else gameMgr.BtnMgr.updateOperateBtnByName([]);
      };
      Rummy_CardMgr.prototype.makeNewCardGroup = function(cardArr) {
        cardArr || (cardArr = this.curSelectCardArr);
        var temp = {
          cards: [],
          cardtype: null,
          score: null
        };
        for (var i = 0; i < cardArr.length; i++) {
          var cardValue = cardArr[i].getComponent(Rummy_Card_1.default).getCardData();
          cardValue && temp.cards.push(cardValue);
        }
        for (var j = 0; j < cardArr.length; j++) cardArr[j] && cardArr[j].parent.parent.getComponent(Rummy_CardGroup_1.default).removeCard(cardArr[j]);
        var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(temp.cards, this.getRouge());
        temp.cardtype = result.cardtype;
        temp.score = result.score;
        var group = this.getCurCardGroupData();
        temp.cards.length > 0 && ("rougeset" == temp.cardtype || "rougeseq" == temp.cardtype || "pureseq" == temp.cardtype || "pureset" == temp.cardtype ? group.unshift(temp) : group.push(temp));
        this.makeGroupCard(group);
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.BtnMgr.btn_autoSort.active = false;
      };
      Rummy_CardMgr.prototype.getCardGroups = function() {
        return this.cardGroupNode.children;
      };
      Rummy_CardMgr.prototype.initReConnect = function(data) {
        var gameMgr = VV_1.vv.gameMgr;
        var oWPos = this.operateNode.convertToWorldSpaceAR(this.operateNode.getChildByName("openDeckNode").position);
        var oPos = this.sendCardNode.convertToNodeSpaceAR(oWPos);
        var cWPos = this.operateNode.convertToWorldSpaceAR(this.operateNode.getChildByName("closeDeckNode").position);
        var cPos = this.sendCardNode.convertToNodeSpaceAR(cWPos);
        for (var i = 0; i < 3; i++) {
          var card = cc.instantiate(this.cardPrefab);
          this.sendCardNode.addChild(card);
          card.getComponent(Rummy_Card_1.default).setCardValue(null);
          card.stopAllActions();
          card.position = this.sendCardNode.position;
          card.scale = gameMgr.MINI_CARD_SCALE;
          card.angle = 0;
        }
        if (data.openDeckCard) {
          this.outCardList = [ data.openDeckCard ];
          this.sendCardNode.children[0].getComponent(Rummy_Card_1.default).setCardValue(data.openDeckCard);
          this.sendCardNode.children[0].position = cc.v3(oPos.x, oPos.y, 0);
        }
        if (data.wildJokerCard) {
          this.rouge = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[data.wildJokerCard];
          14 != this.rouge && 15 != this.rouge || (this.rouge = 1);
          this.canShowSuperCard = true;
          this.sendCardNode.children[1].getComponent(Rummy_Card_1.default).setCardType(Rummy_EnumMgr_1.eCARD_TYPE.SUPER_CARD);
          this.sendCardNode.children[1].getComponent(Rummy_Card_1.default).setCardValue(data.wildJokerCard);
          this.sendCardNode.children[1].position = cPos.add(cc.v3(-50, 0, 0));
          this.sendCardNode.children[1].angle = 90;
          this.sendCardNode.children[2].position = cPos;
        }
        if (data.cards) {
          this.cardInfo = data.cards;
          var cardArr = Rummy_GameHelper_1.Rummy_GameHelper.Newsortcards(this.cardInfo);
          var group = Rummy_GameHelper_1.Rummy_GameHelper.SortGroupCardDefault(cardArr, this.getRouge());
          this.makeGroupCard(group);
        }
        gameMgr.PlayerMgr.showBankerFlag(data.dealerId);
        this.operateNode.active = true;
      };
      Rummy_CardMgr.prototype.getNeatenGroup = function(cardGroup) {
        var gameMgr = VV_1.vv.gameMgr;
        var handcards = [];
        for (var _i = 0, cardGroup_1 = cardGroup; _i < cardGroup_1.length; _i++) {
          var element = cardGroup_1[_i];
          handcards = handcards.concat(element.cards);
        }
        var neatenGroup;
        if (0 === gameMgr.operateType) {
          if (13 != handcards.length) {
            console.warn("Check_Cards---\u51fa\u724c---\u540e\u724c\u4e0d\u662f13\u5f20\uff0c\u5b9e\u9645\u5f20\u6570\uff1a", handcards.length, "\u6240\u6709\u7684\u724c\uff1a", handcards);
            return cardGroup;
          }
          neatenGroup = Rummy_GameHelper_1.Rummy_GameHelper.getpriorityGroup(handcards, this.getRouge());
        } else {
          if (1 !== gameMgr.operateType) {
            console.warn("\u64cd\u4f5c\u72b6\u6001\u9519\u8bef", gameMgr.operateType);
            return cardGroup;
          }
          if (14 !== handcards.length) {
            console.warn("Check_Cards---\u6478\u724c---\u540e\u724c\u4e0d\u662f14\u5f20\uff0c\u5b9e\u9645\u5f20\u6570\uff1a", handcards.length, "\u6240\u6709\u7684\u724c\uff1a", handcards);
            return cardGroup;
          }
          neatenGroup = Rummy_GameHelper_1.Rummy_GameHelper.getpriorityGroup(handcards, this.getRouge());
        }
        var nhandcards = [];
        for (var _a = 0, neatenGroup_1 = neatenGroup; _a < neatenGroup_1.length; _a++) {
          var element = neatenGroup_1[_a];
          nhandcards = nhandcards.concat(element.cards);
        }
        if (0 === gameMgr.operateType) {
          if (13 == nhandcards.length) return neatenGroup;
          console.warn(handcards.length, "\u8fdb\u5165\u65f6\u724c\uff1a", handcards, "Check_Cards---\u7406\u724c---\u540e\u724c\u4e0d\u662f13\u5f20\uff0c\u5b9e\u9645\u5f20\u6570\uff1a", nhandcards.length, "\u6240\u6709\u7684\u724c\uff1a", nhandcards);
          return cardGroup;
        }
        if (1 === gameMgr.operateType) {
          if (14 == nhandcards.length) return neatenGroup;
          console.warn(handcards.length, "\u8fdb\u5165\u65f6\u724c\uff1a", handcards, "Check_Cards---\u7406\u724c---\u540e\u724c\u4e0d\u662f14\u5f20\uff0c\u5b9e\u9645\u5f20\u6570\uff1a", nhandcards.length, "\u6240\u6709\u7684\u724c\uff1a", nhandcards);
          return cardGroup;
        }
        return nhandcards.length < 13 ? cardGroup : neatenGroup;
      };
      __decorate([ property(cc.Node) ], Rummy_CardMgr.prototype, "sendCardNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardMgr.prototype, "cardGroupNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardMgr.prototype, "operateNode", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_CardMgr.prototype, "lightPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_CardMgr.prototype, "cardPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_CardMgr.prototype, "cardGroupPrefab", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardMgr.prototype, "cardLightNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardMgr.prototype, "cardGroupMask", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardMgr.prototype, "addGroupNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_CardMgr.prototype, "dragNode", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_CardMgr.prototype, "shuffle", void 0);
      Rummy_CardMgr = __decorate([ ccclass ], Rummy_CardMgr);
      return Rummy_CardMgr;
    }(cc.Component);
    exports.default = Rummy_CardMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/frameworks/components/i18n/I18nEvent": void 0,
    "./Rummy_Card": "Rummy_Card",
    "./Rummy_CardGroup": "Rummy_CardGroup",
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_GameHelper": "Rummy_GameHelper",
    "./Rummy_History": "Rummy_History"
  } ],
  Rummy_Card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61c7fdpp1VLEJDYVf5ECjHj", "Rummy_Card");
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
    var Rummy_GameHelper_1 = require("./Rummy_GameHelper");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var Rummy_CardGroup_1 = require("./Rummy_CardGroup");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var COLOR_JQK = [ "hs_j", "hs_q", "hs_k" ];
    var Rummy_Card = function(_super) {
      __extends(Rummy_Card, _super);
      function Rummy_Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.cardFront = null;
        _this.cardBack = null;
        _this.blinkNode = null;
        _this.super_card = null;
        _this.super_card_2 = null;
        _this.yellowCover = null;
        _this.grayCover = null;
        _this.originPos = null;
        _this.originZIndex = null;
        _this._cardValue = null;
        _this._isSuperCard = false;
        _this.STATUS = {
          CLICK: 1,
          DRAG: 2
        };
        _this.operatStatus = null;
        _this.isUp = false;
        _this.lastTouchPos = null;
        _this.isTouchMove = false;
        _this.cardMoveAni = null;
        _this.cardType = Rummy_EnumMgr_1.eCARD_TYPE.OTHER_CARD;
        _this.toFinishSlot = false;
        _this.toOpenDeck = false;
        _this.originGroup = null;
        _this.haveEvent = false;
        _this._scale = 1;
        return _this;
      }
      Rummy_Card.prototype.start = function() {
        this.originPos = this.node.position;
      };
      Rummy_Card.prototype.onDestroy = function() {
        this.setCardType(Rummy_EnumMgr_1.eCARD_TYPE.OTHER_CARD);
        this.unRegisterTouchEvent();
      };
      Rummy_Card.prototype.init = function() {};
      Rummy_Card.prototype.setCardType = function(type) {
        this.cardType = type;
        if (this.cardType == Rummy_EnumMgr_1.eCARD_TYPE.OTHER_CARD) return;
        this.cardType != Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD && this.cardType != Rummy_EnumMgr_1.eCARD_TYPE.REWARD_CARD || this.haveEvent || this.registerTouchEvent();
        this.super_card.position = cc.v3(-43, -22, 0);
        this.super_card.angle = 0;
      };
      Rummy_Card.prototype.getCardType = function() {
        return this.cardType;
      };
      Rummy_Card.prototype.registerTouchEvent = function() {
        this.unRegisterTouchEvent();
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        this.haveEvent = true;
      };
      Rummy_Card.prototype.unRegisterTouchEvent = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        this.haveEvent = false;
      };
      Rummy_Card.prototype._onTouchStart = function(event) {
        if (this.cardType != Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD) return;
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this.isTouchMove = false;
        this.lastTouchPos = touchLoc;
      };
      Rummy_Card.prototype._onTouchMove = function(event) {
        if (this.cardType != Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD) return;
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        var offsetPos = touchLoc.sub(this.lastTouchPos);
        if (offsetPos.mag() > 5 || this.isTouchMove) {
          if (!this.isTouchMove) {
            var cardGroupTS = this.node.parent.parent.getComponent(Rummy_CardGroup_1.default);
            cardGroupTS.updateCardsOriginZIndex(this.originZIndex);
            cardGroupTS.addDragCard(this.node);
            CardMgr.hideAllClickBtn();
            CardMgr.showAddGroup();
          }
          this.isTouchMove = true;
          this.moveCardByOffsetPos(offsetPos);
          this.lastTouchPos = touchLoc;
        }
      };
      Rummy_Card.prototype._onTouchEnd = function(event) {
        if (this.cardType == Rummy_EnumMgr_1.eCARD_TYPE.REWARD_CARD) ; else if (this.cardType == Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD) {
          var cardGroupTS = this.node.parent.parent.getComponent(Rummy_CardGroup_1.default);
          cardGroupTS.removeDragCard();
          var CardMgr_1 = VV_1.vv.gameMgr.CardMgr;
          var gameMgr_1 = VV_1.vv.gameMgr;
          var self_1 = this;
          CardMgr_1.hideFinishSlotEffect();
          CardMgr_1.hideOpenDeckEffect();
          var worldPv2 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
          if (CardMgr_1.addGroupNode.active && CardMgr_1.addGroupNode.getBoundingBoxToWorld().contains(worldPv2)) {
            CardMgr_1.makeNewCardGroup([ this.node ]);
            CardMgr_1.hideAddGroup();
            return;
          }
          CardMgr_1.hideAddGroup();
          if (this.isTouchMove) {
            CardMgr_1.setCurSelectCard(this.node, Rummy_EnumMgr_1.eOPERATE_Type.SLIDE);
            if (gameMgr_1.isMyTurn && 1 == gameMgr_1.operateType && (this.toOpenDeck || this.toFinishSlot) && !gameMgr_1.outCard) {
              var sWPos_1 = this.node.parent.convertToWorldSpaceAR(this.node.position);
              if (this.toOpenDeck) {
                this.clearCardGroupData();
                gameMgr_1.operateCallBack(5);
                this.node.parent = null;
                this.node.parent = CardMgr_1.node;
                var tWPos = CardMgr_1.getGoalWPosByOption(5);
                var tLPos = this.node.parent.convertToNodeSpaceAR(tWPos);
                var sLPos = this.node.parent.convertToNodeSpaceAR(sWPos_1);
                this.node.position = sLPos;
                gameMgr_1.outCardEvent(self_1.getCardData(), 5, self_1.node);
                this.moveCardByToPos(tLPos, function() {
                  gameMgr_1.outCardEvent(self_1.getCardData(), 5, self_1.node);
                }, 1e3, gameMgr_1.MINI_CARD_SCALE);
              } else this.toFinishSlot && gameMgr_1.operateCallBack(4, function() {
                self_1.clearCardGroupData();
                self_1.node.parent = null;
                self_1.node.parent = CardMgr_1.node;
                var tWPos = CardMgr_1.getGoalWPosByOption(4);
                var tLPos = self_1.node.parent.convertToNodeSpaceAR(tWPos);
                var sLPos = self_1.node.parent.convertToNodeSpaceAR(sWPos_1);
                self_1.node.position = sLPos;
                self_1.moveCardByToPos(tLPos, function() {
                  gameMgr_1.outCardEvent(self_1.getCardData(), 4, self_1.node);
                }, 1e3, gameMgr_1.MINI_CARD_SCALE);
              }, function() {
                self_1.transPosition();
              });
            } else {
              VV_1.vv.logger.log("end trans");
              this.transPosition();
            }
          } else {
            CardMgr_1.setCurSelectCard(this.node);
            CardMgr_1.onTouchEnd();
          }
        }
      };
      Rummy_Card.prototype._onTouchCancel = function(event) {
        if (this.cardType != Rummy_EnumMgr_1.eCARD_TYPE.HAND_CARD) return;
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        if (this.isTouchMove) {
          VV_1.vv.logger.log("cancel trans");
          this.transPosition();
        } else CardMgr.onTouchCancel();
        var cardGroupTS = this.node.parent.parent.getComponent(Rummy_CardGroup_1.default);
        cardGroupTS.removeDragCard();
        CardMgr.hideFinishSlotEffect();
        CardMgr.hideOpenDeckEffect();
      };
      Rummy_Card.prototype.transPosition = function() {
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        CardMgr.updateOperateBtn();
        var cardGroupTS = this.node.parent.parent.getComponent(Rummy_CardGroup_1.default);
        if (cardGroupTS.uuid != this.originGroup.uuid) {
          this.originGroup.updateCardsData(true, true);
          this.setOriginGroup(cardGroupTS);
        }
        cardGroupTS.updateCardsData();
        this.resetCardPos();
      };
      Rummy_Card.prototype.clearCardGroupData = function() {
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var GameMgr = VV_1.vv.gameMgr;
        var cardGroupTS = this.node.parent.parent.getComponent(Rummy_CardGroup_1.default);
        GameMgr.outEventCout = 0;
        CardMgr.curSelectCardValue = this.getCardData();
        cardGroupTS.removeCard(this.node, false);
        var cardGroupLayout = CardMgr.cardGroupNode.getComponent(cc.Layout);
        cardGroupLayout.updateLayout();
        this.setCardType(Rummy_EnumMgr_1.eCARD_TYPE.OTHER_CARD);
        cardGroupTS.updateCardsData(true, true);
      };
      Rummy_Card.prototype.moveCardByOffsetPos = function(offsetPos) {
        this.node.position = this.node.position.add(cc.v3(offsetPos.x, offsetPos.y, 0));
        var cardRect = this.node.getBoundingBoxToWorld();
        var centerX = cardRect.x + cardRect.width / 2;
        var lastCardGroup = this.node.parent.parent;
        var lastCardGroupRect = lastCardGroup.getBoundingBoxToWorld();
        var gameMgr = VV_1.vv.gameMgr;
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var cardGroups = CardMgr.getCardGroups();
        var newCardGroup = null;
        var nowCardGroup = lastCardGroup;
        var scale = 1 - .4 * Math.abs((lastCardGroupRect.y - cardRect.y) / (cardRect.height / 2));
        scale = Math.max(scale, gameMgr.MINI_CARD_SCALE);
        scale = Math.min(scale, 1);
        this.node.children[0].scale = scale;
        var cpTS = this.node.parent.parent.getComponent(Rummy_CardGroup_1.default);
        cpTS.moveDragCard(this.node);
        this.toCardGroup = false;
        for (var i = 0; i < cardGroups.length; i++) {
          var cardGroup = cardGroups[i];
          var cardGroupTS = cardGroup.getComponent(Rummy_CardGroup_1.default);
          var cardGroupRect = cardGroupTS.bgNode.getBoundingBoxToWorld();
          if (cardGroupRect.width <= 0) continue;
          if (cardGroupTS.isCardsAction()) return;
          if (centerX > cardGroupRect.x && centerX < cardGroupRect.x + cardGroupRect.width) {
            this.toCardGroup = cardRect.y - cardGroupRect.y < 200 * gameMgr.MINI_CARD_SCALE;
            newCardGroup = cardGroup;
            break;
          }
        }
        if (!this.toCardGroup && gameMgr.isMyTurn && 1 == gameMgr.operateType) {
          var finishSlotRect = CardMgr.finishSlotNode.getBoundingBoxToWorld();
          this.toFinishSlot = finishSlotRect.intersects(cardRect);
          this.toOpenDeck = !this.toFinishSlot;
        } else {
          this.toFinishSlot = false;
          this.toOpenDeck = false;
        }
        this.toFinishSlot ? CardMgr.showFinishSlotEffect(this.getCardData()) : CardMgr.hideFinishSlotEffect();
        this.toOpenDeck ? CardMgr.showOpenDeckEffect(this.getCardData()) : CardMgr.hideOpenDeckEffect();
        if (newCardGroup && newCardGroup.uuid != lastCardGroup.uuid) {
          this.changeGroup(newCardGroup, lastCardGroup);
          nowCardGroup = newCardGroup;
        }
        var nowCardGroupTS = nowCardGroup.getComponent(Rummy_CardGroup_1.default);
        nowCardGroupTS.updateMoveCardZIndex(this.node);
      };
      Rummy_Card.prototype.changeGroup = function(newCardGroup, lastCardGroup) {
        !lastCardGroup && (lastCardGroup = this.node.parent.parent);
        if (lastCardGroup.uuid == newCardGroup.uuid) {
          VV_1.vv.logger.log("\u91cd\u590d\u8bbe\u7f6e\u7236\u8282\u70b9");
          return;
        }
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var cardWPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var lastCardGroupTS = lastCardGroup.getComponent(Rummy_CardGroup_1.default);
        lastCardGroupTS.removeCard(this.node, true, false);
        lastCardGroupTS.removeDragCard();
        lastCardGroupTS.updateCardsData(true);
        var newCardGroupTS = newCardGroup.getComponent(Rummy_CardGroup_1.default);
        newCardGroupTS.addCard(this.node, lastCardGroup.zIndex < newCardGroup.zIndex);
        var cardGroupLayout = CardMgr.cardGroupNode.getComponent(cc.Layout);
        cardGroupLayout.updateLayout();
        this.node.position = this.node.parent.convertToNodeSpaceAR(cardWPos);
        newCardGroupTS.addDragCard(this.node);
        CardMgr.updateAllCardGroupScore();
      };
      Rummy_Card.prototype.resetCardPos = function(moveSpeed) {
        void 0 === moveSpeed && (moveSpeed = 1e3);
        this.moveCardByToPos(this.originPos, null, moveSpeed);
      };
      Rummy_Card.prototype.moveCardByToPos = function(toPos, call, moveSpeed, scale) {
        void 0 === moveSpeed && (moveSpeed = 1e3);
        void 0 === scale && (scale = 1);
        var self = this;
        var moveLen = this.node.position.sub(toPos).mag();
        var moveTime = moveLen / moveSpeed;
        this.cardMoveAni && this.cardMoveAni.stop();
        this.cardMoveAni = cc.tween(this.node).to(moveTime, {
          position: {
            value: toPos,
            progress: function(start, end, current, t) {
              var toScale = cc.misc.lerp(self.node.children[0].scale, scale, t);
              self.node.children[0].scale = toScale;
              return start.lerp(end, t, current);
            }
          }
        }).call(function() {
          VV_1.vv.logger.log("card:" + self._cardValue + " my pos:" + self.node.position);
          self.cardMoveAni = null;
          call && call();
        }).start();
      };
      Rummy_Card.prototype.setCardState = function(state) {
        this.operatStatus = state || this.STATUS.CLICK;
      };
      Rummy_Card.prototype.setUp = function(isUp, userAni) {
        this.isUp = isUp;
        isUp ? userAni ? cc.tween(this.node).to(.15, {
          position: cc.v3(this.node.x, this.originPos.y + 23, 0)
        }, {
          easing: "expoOut"
        }).to(.05, {
          position: cc.v3(this.node.x, this.originPos.y + 20, 0)
        }, {
          easing: "expoOut"
        }).start() : this.node.y = this.originPos.y + 20 : userAni ? cc.tween(this.node).to(.05, {
          position: cc.v3(this.node.x, this.originPos.y + 23, 0)
        }, {
          easing: "expoOut"
        }).to(.15, {
          position: cc.v3(this.node.x, this.originPos.y, 0)
        }, {
          easing: "expoIn"
        }).start() : this.node.y = this.originPos.y;
      };
      Rummy_Card.prototype.getCardData = function() {
        return this._cardValue;
      };
      Rummy_Card.prototype.setCurPos = function(pos) {
        this.originPos = pos ? cc.v3(pos.x, 0, 0) : cc.v3(this.node.position.x, 0, 0);
      };
      Rummy_Card.prototype.setOriginGroup = function(group) {
        this.originGroup = group || this.node.parent.parent.getComponent(Rummy_CardGroup_1.default);
      };
      Rummy_Card.prototype.setCardValue = function(_value, isShowSuper, turnAni, delay, turnScale, myCard) {
        var _this = this;
        void 0 === isShowSuper && (isShowSuper = true);
        this.updateCardValue(_value, turnAni, delay, turnScale);
        if (!isShowSuper) {
          this.updateSuperCardFlag(false);
          return;
        }
        var CardMgr = VV_1.vv.gameMgr.CardMgr;
        var CARD_VALUE = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[this._cardValue];
        var isSuperCard = CARD_VALUE == CardMgr.getRouge();
        isSuperCard && !CardMgr.canShowSuperCard ? cc.director.once("showAllSuper", function() {
          _this.updateSuperCardFlag(isSuperCard, myCard);
        }, this) : this.updateSuperCardFlag(isSuperCard, myCard);
      };
      Rummy_Card.prototype.showGrayCover = function(isShow) {
        this.grayCover.active = isShow;
      };
      Rummy_Card.prototype.updateSuperCardFlag = function(isShow, myCard) {
        if (!this.super_card) return;
        isShow && VV_1.vv.logger.log("show flag");
        if (this.cardType == Rummy_EnumMgr_1.eCARD_TYPE.COVER_CARD) {
          this.super_card_2.active = isShow;
          this.super_card.active = false;
        } else {
          this.super_card_2.active = false;
          this.super_card.active = isShow;
        }
        this.yellowCover.active = isShow && myCard;
        this._isSuperCard = isShow;
      };
      Rummy_Card.prototype.showDealerAction = function() {
        this.blinkNode.active = true;
        this.blinkNode.opacity = 255;
        var self = this;
        cc.tween(this.blinkNode).repeat(10, cc.tween().to(.25, {
          opacity: 55
        }).to(.25, {
          opacity: 255
        })).call(function() {
          self.blinkNode.active = false;
        }).start();
      };
      Rummy_Card.prototype.lightCard = function(isShow) {
        this.blinkNode.active = isShow;
        this.blinkNode.getChildByName("tip").active = isShow;
        this.blinkNode.getChildByName("tip").stopAllActions();
        isShow && this.blinkNode.getChildByName("tip").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.5, cc.v2(0, 90)), cc.delayTime(.1), cc.moveTo(.5, cc.v2(0, 85)))));
      };
      Rummy_Card.prototype.updateCardValue = function(_cardValue, turnAni, delay, turnScale) {
        var gameMgr = VV_1.vv.gameMgr;
        if (_cardValue) {
          14 == _cardValue ? _cardValue = 1 : 30 == _cardValue ? _cardValue = 17 : 46 == _cardValue ? _cardValue = 33 : 62 == _cardValue && (_cardValue = 49);
          this._cardValue = _cardValue;
          this.cardFront.getChildByName("common").getChildByName("value10").getComponent(cc.Label).string = _cardValue;
          this.cardFront.getChildByName("common").getChildByName("value10").active = false;
          var CARD_VALUE_1 = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[_cardValue];
          var CARD_COLOR_1 = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_COLOR[_cardValue];
          if (CARD_COLOR_1 > 3) if (turnAni) {
            var self_2 = this;
            this._scale = this.node.scaleY;
            this.node.runAction(cc.sequence(cc.delayTime(delay || 0), cc.scaleTo(.13, 0, turnScale ? gameMgr.TURN_OVER_CARD_SCALE : this.node.scaleY), cc.callFunc(function() {
              self_2.cardBack.active = false;
              self_2.cardFront.active = true;
              self_2.cardFront.getChildByName("common").active = false;
              self_2.cardFront.getChildByName("joker").active = true;
            }), cc.scaleTo(.1, turnScale ? gameMgr.TURN_OVER_CARD_SCALE : this.node.scaleY, turnScale ? gameMgr.TURN_OVER_CARD_SCALE : this.node.scaleY), cc.scaleTo(.03, this._scale, this._scale)));
          } else {
            this.cardFront.active = true;
            this.cardBack.active = false;
            this.cardFront.getChildByName("common").active = false;
            this.cardFront.getChildByName("joker").active = true;
          } else {
            this.cardFront.getChildByName("common").active = true;
            this.cardFront.getChildByName("joker").active = false;
            if (CARD_VALUE_1) if (turnAni) {
              var self_3 = this;
              this._scale = this.node.scaleY;
              this.node.runAction(cc.sequence(cc.delayTime(delay || 0), cc.scaleTo(.13, 0, turnScale ? gameMgr.TURN_OVER_CARD_SCALE : this.node.scaleY), cc.callFunc(function() {
                self_3.cardBack.active = false;
                self_3.cardFront.active = true;
                self_3.cardFront.getChildByName("common").getChildByName("value").getComponent(cc.Sprite).spriteFrame = self_3.atlas.getSpriteFrame("new_card_" + CARD_COLOR_1 + CARD_VALUE_1.toString(16));
              }), cc.scaleTo(.1, turnScale ? gameMgr.TURN_OVER_CARD_SCALE : this.node.scaleY, turnScale ? gameMgr.TURN_OVER_CARD_SCALE : this.node.scaleY), cc.scaleTo(.03, this._scale, this._scale)));
            } else {
              this.cardBack.active = false;
              this.cardFront.active = true;
              this.cardFront.getChildByName("common").getChildByName("value").getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame("new_card_" + CARD_COLOR_1 + CARD_VALUE_1.toString(16));
            } else VV_1.vv.logger.log("\u724c\u503c\u9519\u8bef: ", _cardValue);
          }
        } else {
          this.cardFront.active = false;
          this.cardBack.active = true;
        }
      };
      Rummy_Card.prototype.setCardIsFold = function(isFold) {
        this.cardBack.active = isFold;
      };
      Rummy_Card.prototype.greycardBack = function() {
        var GRAY_SPRITE = cc.Material.getBuiltinMaterial("2d-gray-sprite");
        this.cardBack.getComponent(cc.Sprite).setMaterial(0, GRAY_SPRITE);
      };
      Rummy_Card.prototype.update = function(dt) {};
      __decorate([ property(cc.SpriteAtlas) ], Rummy_Card.prototype, "atlas", void 0);
      __decorate([ property(cc.Node) ], Rummy_Card.prototype, "cardFront", void 0);
      __decorate([ property(cc.Node) ], Rummy_Card.prototype, "cardBack", void 0);
      __decorate([ property(cc.Node) ], Rummy_Card.prototype, "blinkNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_Card.prototype, "super_card", void 0);
      __decorate([ property(cc.Node) ], Rummy_Card.prototype, "super_card_2", void 0);
      __decorate([ property(cc.Node) ], Rummy_Card.prototype, "yellowCover", void 0);
      __decorate([ property(cc.Node) ], Rummy_Card.prototype, "grayCover", void 0);
      Rummy_Card = __decorate([ ccclass ], Rummy_Card);
      return Rummy_Card;
    }(cc.Component);
    exports.default = Rummy_Card;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./Rummy_CardGroup": "Rummy_CardGroup",
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_GameHelper": "Rummy_GameHelper"
  } ],
  Rummy_EnumMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2da68oMyWlMH46NCshrQk70", "Rummy_EnumMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.eROOM_TYPE = exports.eDIR = exports.eGROUP_COLOR = exports.ePLAY_Type = exports.eOPERATE_Type = exports.eCARD_TYPE = exports.eFLY_CARD_ANI = void 0;
    var eFLY_CARD_ANI;
    (function(eFLY_CARD_ANI) {
      eFLY_CARD_ANI[eFLY_CARD_ANI["NORMAL"] = 0] = "NORMAL";
      eFLY_CARD_ANI[eFLY_CARD_ANI["START_SHOW"] = 1] = "START_SHOW";
      eFLY_CARD_ANI[eFLY_CARD_ANI["ANI_SHOW"] = 2] = "ANI_SHOW";
    })(eFLY_CARD_ANI || (eFLY_CARD_ANI = {}));
    exports.eFLY_CARD_ANI = eFLY_CARD_ANI;
    var eCARD_TYPE;
    (function(eCARD_TYPE) {
      eCARD_TYPE[eCARD_TYPE["OUT_CARD"] = 0] = "OUT_CARD";
      eCARD_TYPE[eCARD_TYPE["SUPER_CARD"] = 1] = "SUPER_CARD";
      eCARD_TYPE[eCARD_TYPE["COVER_CARD"] = 2] = "COVER_CARD";
      eCARD_TYPE[eCARD_TYPE["HAND_CARD"] = 3] = "HAND_CARD";
      eCARD_TYPE[eCARD_TYPE["FLY_CARD"] = 4] = "FLY_CARD";
      eCARD_TYPE[eCARD_TYPE["OTHER_CARD"] = 5] = "OTHER_CARD";
      eCARD_TYPE[eCARD_TYPE["REWARD_CARD"] = 6] = "REWARD_CARD";
    })(eCARD_TYPE || (eCARD_TYPE = {}));
    exports.eCARD_TYPE = eCARD_TYPE;
    var eOPERATE_Type;
    (function(eOPERATE_Type) {
      eOPERATE_Type[eOPERATE_Type["CLICK"] = 0] = "CLICK";
      eOPERATE_Type[eOPERATE_Type["SLIDE"] = 1] = "SLIDE";
    })(eOPERATE_Type || (eOPERATE_Type = {}));
    exports.eOPERATE_Type = eOPERATE_Type;
    var ePLAY_Type;
    (function(ePLAY_Type) {
      ePLAY_Type[ePLAY_Type["POINT"] = 1] = "POINT";
      ePLAY_Type[ePLAY_Type["POOL"] = 2] = "POOL";
      ePLAY_Type[ePLAY_Type["DEAL"] = 3] = "DEAL";
      ePLAY_Type[ePLAY_Type["CARDS"] = 4] = "CARDS";
    })(ePLAY_Type || (ePLAY_Type = {}));
    exports.ePLAY_Type = ePLAY_Type;
    var eGROUP_COLOR;
    (function(eGROUP_COLOR) {
      eGROUP_COLOR[eGROUP_COLOR["RED"] = 0] = "RED";
      eGROUP_COLOR[eGROUP_COLOR["YELLOW"] = 1] = "YELLOW";
      eGROUP_COLOR[eGROUP_COLOR["BLUE"] = 2] = "BLUE";
      eGROUP_COLOR[eGROUP_COLOR["GREEN"] = 3] = "GREEN";
    })(eGROUP_COLOR || (eGROUP_COLOR = {}));
    exports.eGROUP_COLOR = eGROUP_COLOR;
    var eDIR;
    (function(eDIR) {
      eDIR[eDIR["RIGHT"] = 0] = "RIGHT";
      eDIR[eDIR["LEFT"] = 1] = "LEFT";
      eDIR[eDIR["UP"] = 2] = "UP";
      eDIR[eDIR["down"] = 3] = "down";
    })(eDIR || (eDIR = {}));
    exports.eDIR = eDIR;
    var eROOM_TYPE;
    (function(eROOM_TYPE) {
      eROOM_TYPE[eROOM_TYPE["CASH"] = 1] = "CASH";
      eROOM_TYPE[eROOM_TYPE["PRACTICE"] = 2] = "PRACTICE";
    })(eROOM_TYPE || (eROOM_TYPE = {}));
    exports.eROOM_TYPE = eROOM_TYPE;
    cc._RF.pop();
  }, {} ],
  Rummy_GameHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67f88/dSiBH14Jmm5e9F+sX", "Rummy_GameHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Rummy_GameHelper = void 0;
    var VV_1 = require("../../../scripts/frameworks/VV");
    var Rummy_GameHelper;
    (function(Rummy_GameHelper) {
      Rummy_GameHelper._CardData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 79 ];
      function SortGroupCardDefault(cardsData, rouge) {
        if (cardsData.length > 1) {
          var group = [ {
            card_color: 3,
            cards: [],
            cardtype: "Invalid",
            score: 0
          }, {
            card_color: 2,
            cards: [],
            cardtype: "Invalid",
            score: 0
          }, {
            card_color: 1,
            cards: [],
            cardtype: "Invalid",
            score: 0
          }, {
            card_color: 0,
            cards: [],
            cardtype: "Invalid",
            score: 0
          }, {
            card_color: 4,
            cards: [],
            cardtype: "Invalid",
            score: 0
          } ];
          for (var i = 0; i < cardsData.length; i++) {
            var cardColor = Rummy_GameHelper.CardTransfer.CARD_COLOR[cardsData[i]];
            for (var j = 0; j < group.length; j++) group[j].card_color == cardColor && group[j].cards.push(cardsData[i]);
            for (var k = 0; k < group.length; k++) if (group[k].cards.length > 0) {
              var temp = Checkwhatgroup(group[k].cards, rouge);
              if (temp) {
                group[k].cardtype = temp.cardtype;
                group[k].score = temp.score;
              }
            }
          }
          return group;
        }
      }
      Rummy_GameHelper.SortGroupCardDefault = SortGroupCardDefault;
      function getSendCardGroup(cardsData, rouge) {
        if (cardsData.length > 1) {
          var group = [];
          group[0] = {};
          for (var i = 0; i < cardsData.length; i++) {
            var temp = Checkwhatgroup(cardsData, rouge);
            if (temp) {
              group[0].cardtype = temp.cardtype;
              group[0].cards = cardsData;
              group[0].score = temp.score;
            }
          }
          return group;
        }
      }
      Rummy_GameHelper.getSendCardGroup = getSendCardGroup;
      var CardData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 79 ];
      Rummy_GameHelper.CardTransfer = {
        CARD_VALUE: {},
        CARD_COLOR: {},
        TRANSFER: function() {
          for (var k = 0; k < Rummy_GameHelper._CardData.length; k++) {
            var v = Rummy_GameHelper._CardData[k];
            if (1 == v) {
              Rummy_GameHelper.CardTransfer.CARD_VALUE[14] = 14;
              Rummy_GameHelper.CardTransfer.CARD_COLOR[14] = 0;
            } else if (17 == v) {
              Rummy_GameHelper.CardTransfer.CARD_VALUE[30] = 14;
              Rummy_GameHelper.CardTransfer.CARD_COLOR[30] = 1;
            } else if (33 == v) {
              Rummy_GameHelper.CardTransfer.CARD_VALUE[46] = 14;
              Rummy_GameHelper.CardTransfer.CARD_COLOR[46] = 2;
            } else if (49 == v) {
              Rummy_GameHelper.CardTransfer.CARD_VALUE[62] = 14;
              Rummy_GameHelper.CardTransfer.CARD_COLOR[62] = 3;
            }
            Rummy_GameHelper.CardTransfer.CARD_VALUE[v] = v % 16;
            Rummy_GameHelper.CardTransfer.CARD_COLOR[v] = Math.floor(v / 16);
          }
        }
      };
      Rummy_GameHelper.CardTransfer.TRANSFER();
      function GetCardValuespecial(card) {
        return card % 16 === 14 ? 1 : card % 16;
      }
      Rummy_GameHelper.GetCardValuespecial = GetCardValuespecial;
      function getpriorityGroup(handcards, rouge) {
        var assemble = new Array();
        var pureSeqAssemble = new Array();
        var rougeCards = new Array();
        var restRougeCards = new Array();
        var pureSetAssemble = new Array();
        var pureSeqCnt = 0;
        var hasRougeS = false;
        var rougeSeqCnt = 0;
        var handCards = handcards.concat();
        var rougeIdx = new Array();
        handCards = NewMeldsortcards(handCards, rouge, 0);
        var objInfo = fixPureSeq(handCards, rouge);
        handCards = objInfo["handCard"];
        pureSeqAssemble = objInfo["result"];
        pureSeqCnt = objInfo["pureSeqCnt"];
        var reGInfo = givePure(handCards, pureSeqAssemble, rouge);
        handCards = reGInfo["handCard"];
        pureSeqAssemble = reGInfo["pureSeqAssemble"];
        if (pureSeqCnt < 1 || 0 == pureSeqAssemble.length) {
          var restInfo = secondsort(handCards, rouge);
          for (var _i = 0, restInfo_1 = restInfo; _i < restInfo_1.length; _i++) {
            var rest = restInfo_1[_i];
            assemble.push(rest);
          }
          return assemble;
        }
        for (var idx = 0; idx < handCards.length; idx++) if (GetCardValuespecial(handCards[idx]) == rouge || 79 == handCards[idx]) {
          rougeIdx.push(idx);
          rougeCards.push(handCards[idx]);
        }
        handCards = delDupCards(handCards, rougeIdx);
        if (1 == pureSeqCnt && pureSeqAssemble.length > 0) {
          var cardSet = new Object();
          var psq = [];
          seq = NewMeldsortcards(pureSeqAssemble[0], rouge, 0);
          if (seq.length > 3) if (1 == GetCardValue(seq[0])) {
            psq = seq.slice(0, 3);
            for (var _a = 0, _b = seq.slice(3, seq.length); _a < _b.length; _a++) {
              var c = _b[_a];
              GetCardValuespecial(c) == rouge ? rougeCards.push(c) : handCards.push(c);
            }
          } else {
            psq = seq.slice(seq.length - 3, seq.length);
            for (var _c = 0, _d = seq.slice(0, seq.length - 3); _c < _d.length; _c++) {
              var c = _d[_c];
              GetCardValuespecial(c) == rouge ? rougeCards.push(c) : handCards.push(c);
            }
          } else psq = seq;
          cardSet["cardtype"] = "pureseq";
          cardSet["cards"] = psq;
          cardSet["score"] = 0;
          assemble.push(cardSet);
          var hasRougeInfo = hasRougeSeq(handCards, rougeCards, rouge);
          hasRougeS = hasRougeInfo["hasRougeS"];
          rougeSeqCnt = hasRougeInfo["rougeSeqCnt"];
          if (!hasRougeS) {
            var cardSet = new Object();
            cardSet["cardtype"] = "restcard";
            cardSet["cards"] = handCards;
            cardSet["score"] = sumFinalCards(handCards, rouge);
            assemble.push(cardSet);
            assemble = fixFinal(rouge, rougeCards, assemble, false);
            return assemble;
          }
          var setInfo = fixSet(handCards, true, rougeCards.length, rouge);
          handCards = setInfo["handCard"];
          pureSetAssemble = setInfo["result"];
          if (pureSetAssemble.length > 0) for (var _e = 0, pureSetAssemble_1 = pureSetAssemble; _e < pureSetAssemble_1.length; _e++) {
            var ps = pureSetAssemble_1[_e];
            var cardSet = new Object();
            cardSet["cardtype"] = "pureset";
            cardSet["cards"] = ps;
            cardSet["score"] = sumFinalCards(ps, rouge);
            assemble.push(cardSet);
          }
          var allResult = fixAll(handCards, rougeCards, true, rougeSeqCnt, rouge);
          handCards = allResult["handCard"];
          restRougeCards = allResult["result"];
          rougeCards = allResult["rougeCards"];
          if (restRougeCards.length > 0) for (var _f = 0, restRougeCards_1 = restRougeCards; _f < restRougeCards_1.length; _f++) {
            var rc = restRougeCards_1[_f];
            var cardRouge = {};
            cardRouge["cardtype"] = Checkwhatgroup(rc, rouge)["cardtype"];
            cardRouge["cards"] = rc;
            cardRouge["score"] = sumFinalCards(rc, rouge);
            assemble.push(cardRouge);
          }
          var cardRest = {};
          cardRest["cardtype"] = "restcard";
          cardRest["cards"] = handCards;
          cardSet["score"] = sumFinalCards(handCards, rouge);
          assemble.push(cardRest);
        } else if (pureSeqCnt > 1) {
          for (var _g = 0, pureSeqAssemble_1 = pureSeqAssemble; _g < pureSeqAssemble_1.length; _g++) {
            var seq = pureSeqAssemble_1[_g];
            var SendcondCardSet = {};
            var psq = [];
            seq = NewMeldsortcards(seq, rouge, 0);
            if (seq.length > 3) if (1 == GetCardValue(seq[0])) {
              psq = seq.slice(0, 3);
              for (var _h = 0, _j = seq.slice(3, seq.length); _h < _j.length; _h++) {
                var c = _j[_h];
                GetCardValuespecial(c) == rouge ? rougeCards.push(c) : handCards.push(c);
              }
            } else {
              psq = seq.slice(seq.length - 3, seq.length);
              for (var _k = 0, _l = seq.slice(0, seq.length - 3); _k < _l.length; _k++) {
                var c = _l[_k];
                GetCardValuespecial(c) == rouge ? rougeCards.push(c) : handCards.push(c);
              }
            } else psq = seq;
            SendcondCardSet["cardtype"] = "pureseq";
            SendcondCardSet["cards"] = psq;
            SendcondCardSet["score"] = sumFinalCards(psq, rouge);
            assemble.push(SendcondCardSet);
          }
          var setResult = fixSet(handCards, false, rougeCards.length, rouge);
          handCards = setResult["handCard"];
          pureSetAssemble = setResult["result"];
          if (pureSetAssemble.length > 0) for (var _m = 0, pureSetAssemble_2 = pureSetAssemble; _m < pureSetAssemble_2.length; _m++) {
            var ps = pureSetAssemble_2[_m];
            var PureSetCardSet = {};
            PureSetCardSet["cardtype"] = "pureset";
            PureSetCardSet["cards"] = ps;
            PureSetCardSet["score"] = sumFinalCards(ps, rouge);
            assemble.push(PureSetCardSet);
          }
          var fixAllResult = fixAll(handCards, rougeCards, false, 0, rouge);
          handCards = fixAllResult["handCard"];
          restRougeCards = fixAllResult["result"];
          rougeCards = fixAllResult["rougeCards"];
          if (restRougeCards.length > 0) for (var _o = 0, restRougeCards_2 = restRougeCards; _o < restRougeCards_2.length; _o++) {
            rc = restRougeCards_2[_o];
            var cardRouge = {};
            cardRouge["cardtype"] = Checkwhatgroup(rc, rouge)["cardtype"];
            cardRouge["cards"] = rc;
            cardRouge["score"] = sumFinalCards(rc, rouge);
            assemble.push(cardRouge);
          }
          var cardRest = {};
          cardRest["cardtype"] = "restcard";
          cardRest["cards"] = handCards;
          cardRest["score"] = sumFinalCards(handCards, rouge);
          assemble.push(cardRest);
        }
        assemble = fixFinal(rouge, rougeCards, assemble, true);
        assemble = groupLimit(assemble, rouge);
        return assemble;
      }
      Rummy_GameHelper.getpriorityGroup = getpriorityGroup;
      function fixPureSeq(handCards, rouge) {
        var returnInfo = new Object();
        var result = new Array();
        var pureSeqCnt = 0;
        var seqCnt = 0;
        var newHandCards = handCards.concat();
        var dupSeq = new Array();
        for (var a = 0; a < newHandCards.length; a++) for (var b = a + 1; b < newHandCards.length; b++) for (var c = b + 1; c < newHandCards.length; c++) if ((newHandCards[a] == newHandCards[b] + 1 && newHandCards[b] == newHandCards[c] + 1 || newHandCards[a] == newHandCards[c] + 1 && newHandCards[c] == newHandCards[b] + 1 || newHandCards[b] == newHandCards[c] + 1 && newHandCards[c] == newHandCards[a] + 1 || newHandCards[b] == newHandCards[a] + 1 && newHandCards[a] == newHandCards[c] + 1 || newHandCards[c] == newHandCards[a] + 1 && newHandCards[a] == newHandCards[b] + 1 || newHandCards[c] == newHandCards[b] + 1 && newHandCards[b] == newHandCards[a] + 1) && !indexOf(dupSeq, a) && !indexOf(dupSeq, b) && !indexOf(dupSeq, c)) {
          var seq = [ newHandCards[a], newHandCards[b], newHandCards[c] ];
          result.push(seq);
          pureSeqCnt += 1;
          seqCnt += 1;
          dupSeq.push(a, b, c);
        }
        var appendList = [];
        for (var idx = 0; idx < result.length; idx++) if (GetCardValue(seq[0]) == rouge) {
          seq = result[idx].concat();
          seq = sortCardValue(seq);
          var temp = seq.splice(1, seq.length);
          for (var inx = 0; inx < newHandCards.length; inx++) {
            var k = temp.concat();
            k.push(newHandCards[inx]);
            if (Isseq(k) && !indexOf(dupSeq, inx)) {
              var newSeq = [ k[0], k[1], newHandCards[inx] ];
              result[idx] = newSeq;
              dupSeq.push(inx);
              appendList.push(seq[0]);
            }
          }
        }
        newHandCards = delDupCards(newHandCards, dupSeq);
        if (0 != appendList.length) {
          for (var _i = 0, appendList_1 = appendList; _i < appendList_1.length; _i++) {
            var app = appendList_1[_i];
            newHandCards.push(app);
          }
          newHandCards = NewMeldsortcards(newHandCards, rouge, 0);
        }
        newHandCards = delDupCards(newHandCards, dupSeq);
        returnInfo["handCard"] = newHandCards;
        returnInfo["result"] = result;
        returnInfo["pureSeqCnt"] = pureSeqCnt;
        returnInfo["seqCnt"] = seqCnt;
        return returnInfo;
      }
      Rummy_GameHelper.fixPureSeq = fixPureSeq;
      function indexOf(arr, item) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
          var it = arr_1[_i];
          if (it == item) return true;
        }
        return false;
      }
      Rummy_GameHelper.indexOf = indexOf;
      function delDupCards(arrOne, arrTwo) {
        var tempHand = arrOne.concat();
        var retHand = new Array();
        for (var idx = 0; idx < tempHand.length; idx++) {
          var cardFlag = 0;
          for (var dx = 0; dx < arrTwo.length; dx++) if (idx == arrTwo[dx]) {
            arrTwo.splice(dx, 1);
            cardFlag = 1;
            break;
          }
          0 == cardFlag && retHand.push(tempHand[idx]);
        }
        return retHand;
      }
      Rummy_GameHelper.delDupCards = delDupCards;
      function hasRougeSeq(handCards, rougeCards, rouge) {
        var returnInfo = new Object();
        var newHandCards = handCards.concat();
        if (0 == rougeCards.length) {
          returnInfo["hasRougeS"] = false;
          returnInfo["rougeSeqCnt"] = 0;
          return returnInfo;
        }
        newHandCards = NewMeldsortcards(newHandCards, rouge, rougeCards.length);
        for (var a = 0; a < newHandCards.length; a++) for (var b = a + 1; b < newHandCards.length; b++) if ((GetCardValuespecial(newHandCards[b]) - GetCardValuespecial(newHandCards[a]) - 1 <= rougeCards.length && GetCardColor(newHandCards[a]) == GetCardColor(newHandCards[b]) || newHandCards[b] == newHandCards[a] + 1) && newHandCards[a] != newHandCards[b]) {
          returnInfo["hasRougeS"] = true;
          returnInfo["rougeSeqCnt"] = 1;
          return returnInfo;
        }
        if (rougeCards.length >= 2) {
          returnInfo["hasRougeS"] = true;
          returnInfo["rougeSeqCnt"] = 0;
          return returnInfo;
        }
        returnInfo["hasRougeS"] = false;
        returnInfo["rougeSeqCnt"] = 0;
        return returnInfo;
      }
      Rummy_GameHelper.hasRougeSeq = hasRougeSeq;
      function getPossibleSeq(handCards, rougeLen, rouge) {
        var allPossible = new Array();
        var newHandCards = handCards.concat();
        newHandCards = NewMeldsortcards(newHandCards, rouge, rougeLen);
        var dupForOne = [];
        for (var a = 0; a < newHandCards.length; a++) for (var b = a + 1; b < newHandCards.length; b++) if ((GetCardColor(newHandCards[b]) == GetCardColor(newHandCards[a]) && GetCardValue(newHandCards[b]) - GetCardValue(newHandCards[a]) - 1 <= rougeLen || GetCardColor(newHandCards[b]) == GetCardColor(newHandCards[a]) && GetCardValue(newHandCards[b]) == GetCardValue(newHandCards[a]) + 1) && GetCardValue(newHandCards[b]) - GetCardValue(newHandCards[a]) > 0) {
          if (indexOf(dupForOne, a)) continue;
          1 == GetCardValue(newHandCards[a]) && dupForOne.push(a);
          var longSeq = new Array();
          longSeq.push(a, b);
          for (var c = b + 1; c < newHandCards.length; c++) {
            if (longSeq.length >= 4) break;
            if ((newHandCards[longSeq[longSeq.length - 1]] - newHandCards[longSeq[longSeq.length - 2]] == 1 && GetCardColor(newHandCards[c]) == GetCardColor(newHandCards[longSeq[longSeq.length - 1]]) && GetCardValue(newHandCards[c]) - GetCardValue(newHandCards[longSeq[longSeq.length - 1]]) - 1 <= rougeLen && newHandCards[c] != newHandCards[longSeq[longSeq.length - 1]] || newHandCards[longSeq[longSeq.length - 1]] - newHandCards[longSeq[longSeq.length - 2]] > 1 && GetCardColor(newHandCards[c]) == GetCardColor(newHandCards[longSeq[longSeq.length - 1]]) && GetCardValue(newHandCards[c]) - GetCardValue(newHandCards[longSeq[longSeq.length - 1]]) == 1) && 2 == longSeq.length) longSeq.push(c); else {
              if (3 != longSeq.length || newHandCards[c] - newHandCards[longSeq[longSeq.length - 1]] != 1 || newHandCards[longSeq[longSeq.length - 1]] - newHandCards[longSeq[longSeq.length - 2]] != 2) break;
              longSeq.push(c);
            }
          }
          allPossible.push(longSeq);
        }
        return allPossible;
      }
      Rummy_GameHelper.getPossibleSeq = getPossibleSeq;
      function getPossibleBao(handCards, rouge, rougeLen) {
        var allPossible = [];
        var newHandCards = handCards.concat();
        newHandCards = NewMeldsortcards(newHandCards, rouge, rougeLen);
        for (var a = 0; a < newHandCards.length; a++) for (var b = a + 1; b < newHandCards.length; b++) if (GetCardColor(newHandCards[b]) != GetCardColor(newHandCards[a]) && GetCardValuespecial(newHandCards[b]) == GetCardValuespecial(newHandCards[a])) {
          var longBao = [];
          longBao.push(a, b);
          allPossible.push(longBao);
        }
        return allPossible;
      }
      Rummy_GameHelper.getPossibleBao = getPossibleBao;
      function checkLarge(handCards, item, rouge, rougeLen) {
        handCards = NewMeldsortcards(handCards, rouge, rougeLen);
        if (item < 1 || item > handCards.length - 1) return true;
        if (handCards[item] - handCards[item - 1] - 1 == 1 && handCards[item + 1] - handCards[item] == 2) return false;
        return true;
      }
      Rummy_GameHelper.checkLarge = checkLarge;
      function indexOfSeq(cards1, cards2) {
        for (var _i = 0, cards1_1 = cards1; _i < cards1_1.length; _i++) {
          var a = cards1_1[_i];
          for (var _a = 0, cards2_1 = cards2; _a < cards2_1.length; _a++) {
            var b = cards2_1[_a];
            if (a === b) return true;
          }
        }
        return false;
      }
      Rummy_GameHelper.indexOfSeq = indexOfSeq;
      function sumCards(cards) {
        var score = 0;
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
          var c = cards_1[_i];
          1 == GetCardValue(c) || GetCardValue(c) >= 10 ? score += 10 : score += GetCardValue(c);
        }
        return score;
      }
      Rummy_GameHelper.sumCards = sumCards;
      function permute(arr, preVal, l, rs) {
        void 0 === preVal && (preVal = []);
        void 0 === l && (l = arr.length);
        void 0 === rs && (rs = []);
        for (var i = 0; i < arr.length; i++) {
          var _arr = arr.concat();
          var f = _arr.splice(i, 1)[0];
          preVal[l - arr.length] = f;
          0 === _arr.length ? rs.push(preVal.concat()) : permute(_arr, preVal, l, rs);
        }
        return rs;
      }
      Rummy_GameHelper.permute = permute;
      function fixSet(handCards, keep, rougeLen, rouge) {
        var result = new Array();
        var returnInfo = new Object();
        var newHandCards = handCards.concat();
        newHandCards = NewMeldsortcards(newHandCards, rouge, rougeLen);
        var limit = [];
        if (keep) {
          var q = 0;
          var onlySeq = [];
          for (var a = 0; a < newHandCards.length; a++) for (var b = a + 1; b < newHandCards.length; b++) if (GetCardValue(newHandCards[b]) - GetCardValue(newHandCards[a]) - 1 <= rougeLen && GetCardValue(newHandCards[b]) - GetCardValue(newHandCards[a]) > 0 && GetCardColor(newHandCards[a]) == GetCardColor(newHandCards[b])) {
            onlySeq.push(a, b);
            limit.push([ a, b ]);
            q += 1;
          }
          if (1 == q) {
            var delarr = [];
            for (var a = 0; a < newHandCards.length; a++) for (b = a + 1; b < newHandCards.length; b++) for (var c = b + 1; c < newHandCards.length; c++) if (GetCardValuespecial(newHandCards[c]) == GetCardValuespecial(newHandCards[b]) && GetCardValuespecial(newHandCards[b]) == GetCardValuespecial(newHandCards[a]) && GetCardColor(newHandCards[a]) != GetCardColor(newHandCards[b]) && GetCardColor(newHandCards[b]) != GetCardColor(newHandCards[c]) && GetCardColor(newHandCards[a]) != GetCardColor(newHandCards[c]) && !indexOf(delarr, a) && !indexOf(delarr, b) && !indexOf(delarr, c) && !indexOf(onlySeq, a) && !indexOf(onlySeq, b) && !indexOf(onlySeq, c) && checkLarge(newHandCards, a, rouge, rougeLen) && checkLarge(newHandCards, b, rouge, rougeLen) && checkLarge(newHandCards, c, rouge, rougeLen)) {
              delarr.push(a, b, c);
              var baozi = [ newHandCards[a], newHandCards[b], newHandCards[c] ];
              result.push(baozi);
            }
            newHandCards = delDupCards(newHandCards, delarr);
            returnInfo["handCard"] = newHandCards;
            returnInfo["result"] = result;
            return returnInfo;
          }
        }
        var delarr = [];
        for (var a = 0; a < newHandCards.length; a++) for (var b = a + 1; b < newHandCards.length; b++) for (var c = b + 1; c < newHandCards.length; c++) if (GetCardValuespecial(newHandCards[c]) == GetCardValuespecial(newHandCards[b]) && GetCardValuespecial(newHandCards[b]) == GetCardValuespecial(newHandCards[a]) && GetCardColor(newHandCards[a]) != GetCardColor(newHandCards[b]) && GetCardColor(newHandCards[b]) != GetCardColor(newHandCards[c]) && GetCardColor(newHandCards[a]) != GetCardColor(newHandCards[c]) && !indexOf(delarr, a) && !indexOf(delarr, b) && !indexOf(delarr, c)) {
          delarr.push(a, b, c);
          var baozi = [ newHandCards[a], newHandCards[b], newHandCards[c] ];
          result.push(baozi);
        }
        newHandCards = delDupCards(newHandCards, delarr);
        returnInfo["handCard"] = newHandCards;
        returnInfo["result"] = result;
        return returnInfo;
      }
      Rummy_GameHelper.fixSet = fixSet;
      function existSeq(seq, item, rougeLen, rouge, notpure) {
        if (0 == rougeLen) return false;
        seq = sortRougeAndCard(seq, rouge);
        if (GetCardValuespecial(seq[0]) == rouge || GetCardValuespecial(seq[seq.length - 1]) == rouge) return false;
        if (GetCardValue(item) - GetCardValue(seq[seq.length - 1]) == 2 && GetCardColor(seq[seq.length - 1]) == GetCardColor(item)) return true;
        if (GetCardValue(seq[0]) - GetCardValue(item) == 2 && GetCardColor(seq[0]) == GetCardColor(item)) return true;
        return false;
      }
      Rummy_GameHelper.existSeq = existSeq;
      function sortRougeAndCard(cards, rouge) {
        var rougeCard = [];
        var normalCard = [];
        for (var _i = 0, cards_2 = cards; _i < cards_2.length; _i++) {
          var c = cards_2[_i];
          GetCardValuespecial(c) == rouge || 79 == c ? rougeCard.push(c) : normalCard.push(c);
        }
        normalCard = NewMeldsortcards(normalCard, rouge, rougeCard.length);
        for (var i = 0; i < normalCard.length - 1; i++) if (normalCard[i + 1] - normalCard[i] > 1 && rougeCard.length > 0) {
          var rear = normalCard.slice(i + 1, normalCard.length).concat();
          var rougeCardCnt = normalCard[i + 1] - normalCard[i] - 1;
          normalCard = normalCard.slice(0, i + 1);
          normalCard = normalCard.concat(rougeCard.slice(0, rougeCardCnt));
          for (var _a = 0, rear_1 = rear; _a < rear_1.length; _a++) {
            var r = rear_1[_a];
            normalCard.push(r);
          }
          rougeCard.splice(0, rougeCardCnt);
          i += rougeCardCnt;
        }
        if (rougeCard.length > 0) for (var _b = 0, rougeCard_1 = rougeCard; _b < rougeCard_1.length; _b++) {
          var r = rougeCard_1[_b];
          normalCard.push(r);
        }
        return normalCard;
      }
      Rummy_GameHelper.sortRougeAndCard = sortRougeAndCard;
      function checkRougeSeq(cards, rouge) {
        var normal = [];
        var rou = [];
        for (var _i = 0, cards_3 = cards; _i < cards_3.length; _i++) {
          var c = cards_3[_i];
          GetCardValuespecial(c) == rouge ? rou.push(c) : normal.push(c);
        }
        var rougel = rou.length;
        normal = NewMeldsortcards(normal, rouge, rou.length);
        for (var idx = 0; idx < normal.length - 1; idx++) {
          if (!(normal[idx + 1] - normal[idx] - 1 < rougel && normal[idx] != normal[idx + 1])) return false;
          rougel -= normal[idx + 1] - normal[idx] - 1;
        }
        return true;
      }
      Rummy_GameHelper.checkRougeSeq = checkRougeSeq;
      function PureSet(cards, rouge, rougeLen) {
        cards = NewMeldsortcards(cards, rouge, rougeLen);
        for (var i = 0; i < cards.length - 1; i++) if (GetCardValuespecial(cards[i]) != GetCardValuespecial(cards[i + 1]) || GetCardColor(cards[i]) == GetCardColor(cards[i + 1])) return false;
        return true;
      }
      Rummy_GameHelper.PureSet = PureSet;
      function sortvalue(arr) {
        for (var i = 0; i < arr.length - 1; i++) for (var j = 0; j < arr.length - 1 - i; j++) if (sumCards([ arr[j] ]) > sumCards([ arr[i] ])) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        return arr;
      }
      Rummy_GameHelper.sortvalue = sortvalue;
      function fixFinal(rouge, rougeCards, assemble, notstop) {
        var restcard = new Array();
        var newAssemble = new Array();
        var pureSeq = new Array();
        var rougeSeq = new Array();
        var pureSet = new Array();
        var rougeSet = new Array();
        var pureCnt = 0;
        var seqCnt = 0;
        for (var _i = 0, assemble_1 = assemble; _i < assemble_1.length; _i++) {
          var cards = assemble_1[_i];
          if ("restcard" == cards["cardtype"]) restcard = cards["cards"]; else if ("pureseq" == cards["cardtype"]) {
            pureCnt += 1;
            seqCnt += 1;
            pureSeq.push(cards["cards"]);
          } else if ("rougeseq" == cards["cardtype"]) {
            seqCnt += 1;
            rougeSeq.push(cards["cards"]);
          } else "pureset" == cards["cardtype"] ? pureSet.push(cards["cards"]) : "rougeset" == cards["cardtype"] && rougeSet.push(cards["cards"]);
        }
        if (seqCnt < 2 && notstop) {
          for (var _a = 0, pureSet_1 = pureSet; _a < pureSet_1.length; _a++) {
            var pure = pureSet_1[_a];
            for (var _b = 0, pure_1 = pure; _b < pure_1.length; _b++) {
              var p = pure_1[_b];
              restcard.push(p);
            }
          }
          restcard = NewMeldsortcards(restcard, rouge, rougeCards.length);
          pureSet = new Array();
          var seqs = getPossibleSeq(restcard, rougeCards.length, rouge);
          var dup = new Array();
          var seq = new Array();
          for (var _c = 0, seqs_1 = seqs; _c < seqs_1.length; _c++) {
            var s = seqs_1[_c];
            if (indexOfSeq(dup, s)) continue;
            for (var _d = 0, s_1 = s; _d < s_1.length; _d++) {
              var t = s_1[_d];
              dup.push(t);
            }
            seq.push(s);
          }
          var preVal = [];
          var maxCount = 0;
          var allDup = [];
          var sortAll = permute(seq, preVal);
          var CardCnt = new Object();
          var recordCard = new Object();
          for (var idx = 0; idx < sortAll.length; idx++) {
            var tempRest = restcard.concat();
            var newRr = sortAll[idx];
            var tempCount = 0;
            var dup = [];
            for (var _e = 0, newRr_1 = newRr; _e < newRr_1.length; _e++) {
              var result = newRr_1[_e];
              var rougeCnt = rougeCards.length;
              var needCnt = 0;
              if (result.length > 2) {
                var j = Math.abs(restcard[result[1]] - restcard[result[0]]) - 1;
                var i = Math.abs(restcard[result[2]] - restcard[result[1]]) - 1;
                needCnt = j > i ? j : i;
              } else needCnt = Math.abs(restcard[result[1]] - restcard[result[0]]) > 1 ? Math.abs(restcard[result[1]] - restcard[result[0]]) - 1 : 1;
              if (needCnt <= rougeCnt) {
                var tempCards = new Array();
                for (var _f = 0, result_1 = result; _f < result_1.length; _f++) {
                  var r = result_1[_f];
                  tempCards.push(restcard[r]);
                  dup.push(r);
                }
                tempCount += sumCards(tempCards);
                rougeCnt -= needCnt;
              }
              if (rougeCnt <= 0) break;
            }
            tempRest = delDupCards(tempRest, dup);
            var tempSetInfo = fixSet(tempRest, false, 0, rouge);
            var tempSet = tempSetInfo["result"];
            for (var _g = 0, tempSet_1 = tempSet; _g < tempSet_1.length; _g++) {
              var cardSet = tempSet_1[_g];
              tempCount += sumCards(cardSet);
            }
            tempCount > maxCount && (maxCount = tempCount);
            recordCard[idx] = newRr;
            CardCnt[idx] = tempCount;
          }
          var maxIdx = -1;
          Object.getOwnPropertyNames(CardCnt).forEach(function(key) {
            CardCnt[key] === maxCount && (maxIdx = parseInt(key));
          });
          var bestCard = recordCard[maxIdx];
          if (bestCard) {
            for (var _h = 0, bestCard_1 = bestCard; _h < bestCard_1.length; _h++) {
              var cardSort = bestCard_1[_h];
              if (rougeCards.length > 0) {
                var needCnt = 0;
                if (cardSort.length > 2) {
                  var j = Math.abs(restcard[cardSort[1]] - restcard[cardSort[0]]) - 1;
                  var i = Math.abs(restcard[cardSort[2]] - restcard[cardSort[1]]) - 1;
                  needCnt = j > i ? j : i;
                } else needCnt = Math.abs(restcard[cardSort[1]] - restcard[cardSort[0]]) > 1 ? Math.abs(restcard[cardSort[1]] - restcard[cardSort[0]]) - 1 : 1;
                if (rougeCards.length >= needCnt) {
                  var newAll = [];
                  for (var _j = 0, cardSort_1 = cardSort; _j < cardSort_1.length; _j++) {
                    var c = cardSort_1[_j];
                    newAll.push(restcard[c]);
                    allDup.push(c);
                  }
                  var tempR = rougeCards.slice(0, needCnt);
                  for (var _k = 0, tempR_1 = tempR; _k < tempR_1.length; _k++) {
                    var tp = tempR_1[_k];
                    newAll.push(tp);
                  }
                  rougeCards = rougeCards.slice(needCnt, rougeCards.length);
                  var tempAssemble = new Object();
                  tempAssemble["cardtype"] = "rougeseq";
                  tempAssemble["cards"] = newAll;
                  tempAssemble["score"] = sumFinalCards(newAll, rouge);
                  newAssemble.push(tempAssemble);
                }
              }
            }
            restcard = delDupCards(restcard, allDup);
          }
          var setInfo = fixSet(restcard, false, 0, rouge);
          restcard = setInfo["handCard"];
          pureSet = setInfo["result"];
        }
        if (pureCnt >= 2) {
          var retCards = [];
          var retInfo = getRougeFromSeq(pureSeq, rouge, pureCnt, seqCnt);
          pureSeq = retInfo["result"];
          retCards = retInfo["retCards"];
          pureCnt = retInfo["tempCnt"];
          seqCnt = retInfo["tempSeqCnt"];
          for (var _l = 0, retCards_1 = retCards; _l < retCards_1.length; _l++) {
            var rcd = retCards_1[_l];
            restcard.push(rcd);
          }
          var tempRest = [];
          for (var _m = 0, restcard_1 = restcard; _m < restcard_1.length; _m++) {
            var rCard = restcard_1[_m];
            GetCardValuespecial(rCard) == rouge ? rougeCards.push(rCard) : tempRest.push(rCard);
          }
          restcard = tempRest;
          var restFix = [];
          if (pureCnt == seqCnt && 1 == pureCnt) {
            var retInfo1 = fixAll(restcard, rougeCards, true, 1, rouge);
            restcard = retInfo1["handCard"];
            restFix = retInfo1["result"];
            rougeCards = retInfo1["rougeCards"];
          } else {
            var retInfo2 = fixAll(restcard, rougeCards, false, 0, rouge);
            restcard = retInfo2["handCard"];
            restFix = retInfo2["result"];
            rougeCards = retInfo2["rougeCards"];
          }
          if (restFix.length > 0) for (var _o = 0, restFix_1 = restFix; _o < restFix_1.length; _o++) {
            var rc = restFix_1[_o];
            switch (Checkwhatgroup(rc, rouge)["cardtype"]) {
             case "pureseq":
              pureSeq.push(rc);
              break;

             case "rougeseq":
              rougeSeq.push(rc);
              break;

             case "rougeset":
              rougeSet.push(rc);
              break;

             case "pureset":
              pureSet.push(rc);
            }
          }
        }
        var seqCanNotUse = 0;
        var possiblePlus = getPossibleSeq(restcard, rougeCards.length, rouge);
        var possibleGet = possiblePlus.length;
        if (pureCnt >= 1 && seqCnt + possibleGet >= 1) {
          rougeCnt -= rougeSeq.length;
          for (var _p = 0, rougeSeq_1 = rougeSeq; _p < rougeSeq_1.length; _p++) {
            var rougeS = rougeSeq_1[_p];
            for (var _q = 0, rougeS_1 = rougeS; _q < rougeS_1.length; _q++) {
              var r = rougeS_1[_q];
              if (GetCardValuespecial(r) == rouge || 79 == r) {
                seqCanNotUse += 1;
                rougeCards.push(r);
              } else restcard.push(r);
            }
            seqCnt -= 1;
          }
          rougeSeq = [];
        }
        if (0 != pureSeq.length) {
          var dupRest = [];
          var newPureSeq = [];
          restcard = NewMeldsortcards(restcard, rouge, rougeCards.length);
          for (var _r = 0, pureSeq_1 = pureSeq; _r < pureSeq_1.length; _r++) {
            var pure = pureSeq_1[_r];
            for (var idx = 0; idx < restcard.length; idx++) {
              var copyPure = pure.concat();
              copyPure.push(restcard[idx]);
              copyPure = NewMeldsortcards(copyPure, rouge, 0);
              if (Isseq(copyPure) && !indexOf(dupRest, idx)) {
                pure.push(restcard[idx]);
                dupRest.push(idx);
                for (var inx = 0; inx < restcard.length; inx++) {
                  var copySecPure = pure.concat();
                  copySecPure.push(restcard[inx]);
                  copySecPure = NewMeldsortcards(copySecPure, rouge, 0);
                  if (Isseq(copySecPure) && !indexOf(dupRest, inx)) {
                    pure.push(restcard[inx]);
                    dupRest.push(inx);
                  }
                }
              } else {
                if (!(pureCnt >= 2 && seqCnt >= 2 && existSeq(pure, card, rougeCards.length - seqCanNotUse, rouge, false) && !indexOf(dupRest, idx) && rougeCards.length < 2)) continue;
                pure.push(restcard[idx], rougeCards[0]);
                rougeCards.splice(0, 1);
                dupRest.push(idx);
                pureCnt -= 1;
              }
            }
            newPureSeq.push(pure);
          }
          restcard = delDupCards(restcard, dupRest);
          for (var _s = 0, newPureSeq_1 = newPureSeq; _s < newPureSeq_1.length; _s++) {
            var p = newPureSeq_1[_s];
            var tempAssemble = new Object();
            p = NewMeldsortcards(p, rouge, 0);
            tempAssemble["cardtype"] = Checkwhatgroup(p, rouge)["cardtype"];
            var ct = Checkwhatgroup(p, rouge)["cardtype"];
            tempAssemble["cards"] = p;
            tempAssemble["score"] = sumFinalCards(p, rouge);
            newAssemble.push(tempAssemble);
          }
        }
        if (!notstop) {
          for (var _t = 0, rougeCards_1 = rougeCards; _t < rougeCards_1.length; _t++) {
            var rc = rougeCards_1[_t];
            restcard.push(rc);
          }
          var restInfo = secondsort(restcard, rouge);
          for (var _u = 0, restInfo_2 = restInfo; _u < restInfo_2.length; _u++) {
            rest = restInfo_2[_u];
            newAssemble.push(rest);
          }
          return newAssemble;
        }
        var restRougeCards = [];
        if (seqCnt >= 2 && pureCnt >= 1) var retInfoa = fixAll(restcard, rougeCards, false, 1, rouge); else var retInfoa = fixAll(restcard, rougeCards, true, 1, rouge);
        restcard = retInfoa["handCard"];
        restRougeCards = retInfoa["result"];
        rougeCards = retInfoa["rougeCards"];
        if (restRougeCards.length > 0) for (var _v = 0, restRougeCards_3 = restRougeCards; _v < restRougeCards_3.length; _v++) {
          var rc = restRougeCards_3[_v];
          if ("rougeseq" == Checkwhatgroup(rc, rouge)["cardtype"]) rougeSeq.push(rc); else if ("rougeset" == Checkwhatgroup(rc, rouge)["cardtype"]) rougeSet.push(rc); else if ("pureseq" == Checkwhatgroup(rc, rouge)["cardtype"]) {
            var tempAssemble = new Object();
            tempAssemble["cardtype"] = "pureseq";
            tempAssemble["cards"] = rc;
            tempAssemble["score"] = sumFinalCards(rc, rouge);
            newAssemble.push(tempAssemble);
          }
        }
        if (0 != rougeSeq.length) {
          var dupRest = [];
          var newRougeSeq = [];
          restcard = NewMeldsortcards(restcard, rouge, rougeCards.length);
          for (var _w = 0, rougeSeq_2 = rougeSeq; _w < rougeSeq_2.length; _w++) {
            var rouges = rougeSeq_2[_w];
            for (var idx = 0; idx < restcard.length; idx++) {
              var copyRouge = rouges.concat();
              copyRouge.push(restcard[idx]);
              if (checkRougeSeq(copyRouge, rouge) && !indexOf(dupRest, idx)) {
                rouges.push(restcard[idx]);
                dupRest.push(idx);
              } else if (existSeq(rouges, restcard[idx], rougeCards.length, rouge, true) && !indexOf(dupRest, idx)) {
                rouges.push(restcard[idx], rougeCards[0]);
                rougeCards.splice(0, 1);
                dupRest.push(idx);
              } else {
                if ("rougeseq" != Checkwhatgroup(copyRouge, rouge)["cardtype"] || indexOf(dupRest, idx)) continue;
                rouges.push(restcard[idx]);
                dupRest.push(idx);
              }
            }
            newRougeSeq.push(rouges);
          }
          restcard = delDupCards(restcard, dupRest);
          for (var _x = 0, newRougeSeq_1 = newRougeSeq; _x < newRougeSeq_1.length; _x++) {
            var r = newRougeSeq_1[_x];
            var tempAssemble = new Object();
            tempAssemble["cardtype"] = "rougeseq";
            tempAssemble["cards"] = sortRougeAndCard(r, rouge);
            tempAssemble["score"] = sumFinalCards(r, rouge);
            newAssemble.push(tempAssemble);
          }
        }
        if (pureCnt >= 2 && seqCnt >= 3) {
          var retInfos = meldPureSeq(newAssemble, pureCnt, seqCnt);
          newAssemble = retInfos["result"];
          pureCnt = retInfos["seqLen"];
          seqCnt = retInfo["seqCnt"];
        }
        var respInfo = splitFromSeqSide(newAssemble, rouge, restcard, rougeCards, pureSet, rougeSet);
        newAssemble = respInfo["newAssemble"];
        restcard = respInfo["handCards"];
        rougeCards = respInfo["rougeCards"];
        pureSet = respInfo["ps"];
        rougeSet = respInfo["rs"];
        var newAsDup = [];
        for (var idx = 0; idx < newAssemble.length; idx++) {
          var ndCards = newAssemble[idx]["cards"];
          if (ndCards.length < 3) {
            for (var _y = 0, ndCards_1 = ndCards; _y < ndCards_1.length; _y++) {
              var card = ndCards_1[_y];
              GetCardValuespecial(card) == rouge || 79 == card ? rougeCards.push(card) : restcard.push(card);
            }
            newAsDup.push(idx);
          }
        }
        newAssemble = delDupCards(newAssemble, newAsDup);
        var tempSet = [];
        var setInfo = fixSet(restcard, false, rougeCards.length, rouge);
        restcard = setInfo["handCard"];
        tempSet = setInfo["result"];
        pureSet = pureSet.concat(tempSet);
        if (0 != pureSet.length) {
          var dupRest = [];
          var newPureSet = [];
          restcard = NewMeldsortcards(restcard, rouge, rougeCards.length);
          for (var _z = 0, pureSet_2 = pureSet; _z < pureSet_2.length; _z++) {
            var pSet = pureSet_2[_z];
            for (var idx = 0; idx < restcard.length; idx++) {
              var copyRouge = pSet.concat();
              copyRouge.push(restcard[idx]);
              if (!PureSet(copyRouge, rouge, rougeCards.length) || indexOf(dupRest, idx)) continue;
              pSet.push(restcard[idx]);
              dupRest.push(idx);
            }
            newPureSet.push(pSet);
          }
          restcard = delDupCards(restcard, dupRest);
          for (var _0 = 0, newPureSet_1 = newPureSet; _0 < newPureSet_1.length; _0++) {
            var p = newPureSet_1[_0];
            var tempAssemble = new Object();
            tempAssemble["cardtype"] = "pureset";
            tempAssemble["cards"] = p;
            tempAssemble["score"] = sumFinalCards(p, rouge);
            newAssemble.push(tempAssemble);
          }
        }
        if (0 != rougeSet.length) {
          var dupRest = [];
          var newRougeSet = [];
          restcard = NewMeldsortcards(restcard, rouge, rougeCards.length);
          for (var _1 = 0, rougeSet_1 = rougeSet; _1 < rougeSet_1.length; _1++) {
            var rs = rougeSet_1[_1];
            var tempRCard = [];
            var getLess = false;
            var retInfo = finallyRougeSet(newAssemble, rs, rouge, restcard);
            getLess = retInfo["bool"];
            if (getLess) {
              tempRCard = retInfo["result"];
              for (var _2 = 0, tempRCard_1 = tempRCard; _2 < tempRCard_1.length; _2++) {
                var tr = tempRCard_1[_2];
                GetCardValuespecial(tr) == rouge || 79 == tr ? rougeCards.push(tr) : restcard.push(tr);
              }
              var restFix = [];
              var resInfo = fixAll(restcard, rougeCards, false, 0, rouge);
              restcard = resInfo["handCard"];
              restFix = resInfo["result"];
              rougeCards = resInfo["rougeCards"];
              if (restFix.length > 0) for (var _3 = 0, restFix_2 = restFix; _3 < restFix_2.length; _3++) {
                var rf = restFix_2[_3];
                var tempRf = {};
                tempRf["cardtype"] = Checkwhatgroup(rf, rouge)["cardtype"];
                tempRf["cards"] = rf;
                tempRf["score"] = sumFinalCards(rf, rouge);
                newAssemble.push(tempRf);
              }
              pureSet = [];
              var p1 = getPossibleSeq(restcard, rougeCards.length, rouge);
              var p2 = getPossibleBao(restcard, rougeCards.length, rouge);
              if (p1.length > 0 || p2.length > 0) {
                rougeSet = [];
                var resplitInfo = splitFromSeqSide(newAssemble, rouge, restcard, rougeCards, pureSet, rougeSet);
                newAssemble = resplitInfo["newAssemble"];
                restcard = resplitInfo["handCards"];
                rougeCards = resplitInfo["rougeCards"];
                pureSet = resplitInfo["ps"];
                rougeSet = resplitInfo["rs"];
                if (pureSet.length > 0) for (var _4 = 0, pureSet_3 = pureSet; _4 < pureSet_3.length; _4++) {
                  var r = pureSet_3[_4];
                  var tempAssemble1 = {};
                  tempAssemble1["cardtype"] = "pureset";
                  tempAssemble1["cards"] = r;
                  tempAssemble1["score"] = sumFinalCards(r, rouge);
                  newAssemble.push(tempAssemble1);
                }
                if (rougeSet.length > 0) for (var _5 = 0, rougeSet_2 = rougeSet; _5 < rougeSet_2.length; _5++) {
                  var r = rougeSet_2[_5];
                  var tempAssemble2 = {};
                  tempAssemble2["cardtype"] = "rougeset";
                  tempAssemble2["cards"] = r;
                  tempAssemble2["score"] = sumFinalCards(r, rouge);
                  newAssemble.push(tempAssemble2);
                }
              }
            } else {
              for (var idx = 0; idx < restcard.length; idx++) {
                var copyRouge = rs.concat();
                copyRouge.push(restcard[idx]);
                if (!Issetwithrouge(copyRouge, rouge) || indexOf(dupRest, idx)) continue;
                rs.push(restcard[idx]);
                if (rs.length > 3 && hasRouge(rs, rouge)) for (var killr = 0; killr < rs.length; killr++) {
                  var r = rs[killr];
                  if (GetCardValuespecial(r) == rouge || 79 == r) {
                    rougeCards.push(r);
                    rs.splice(killr, 1);
                  }
                  if (rs.length <= 3) break;
                }
                dupRest.push(idx);
              }
              newRougeSet.push(rs);
            }
          }
          restcard = delDupCards(restcard, dupRest);
          for (var _6 = 0, newRougeSet_1 = newRougeSet; _6 < newRougeSet_1.length; _6++) {
            var r = newRougeSet_1[_6];
            var tempAssemble = new Object();
            tempAssemble["cardtype"] = "rougeset";
            tempAssemble["cards"] = r;
            tempAssemble["score"] = sumFinalCards(r, rouge);
            newAssemble.push(tempAssemble);
          }
        }
        while (1) {
          if (rougeCards.length < 2) break;
          if (!(restcard.length > 0)) break;
          restcard = sortValue(restcard);
          var tempAssemble = new Object();
          var cardf = [];
          cardf = [ restcard[0], rougeCards[0], rougeCards[1] ];
          tempAssemble["cardtype"] = "rougeseq";
          tempAssemble["cards"] = cardf;
          tempAssemble["score"] = sumFinalCards(cardf, rouge);
          newAssemble.push(tempAssemble);
          rougeCards.splice(0, 2);
          restcard.splice(0, 1);
          seqCnt += 1;
        }
        var restcardDup = [];
        if (0 != rougeCards.length) {
          if (getSeqCnt(newAssemble) < 2) {
            var retInfo3 = fixAll(restcard, rougeCards, true, 1, rouge);
            restcard = retInfo3["handCard"];
            result = retInfo3["result"];
            rougeCards = retInfo3["rougeCards"];
          } else {
            var retInfo4 = fixAll(restcard, rougeCards, false, 0, rouge);
            restcard = retInfo4["handCard"];
            result = retInfo4["result"];
            rougeCards = retInfo4["rougeCards"];
          }
          for (var _7 = 0, result_2 = result; _7 < result_2.length; _7++) {
            var result = result_2[_7];
            var tempAss = {};
            tempAss["cardtype"] = Checkwhatgroup(result, rouge)["cardtype"];
            tempAss["cards"] = result;
            tempAss["score"] = sumFinalCards(result, rouge);
            newAssemble.push(tempAss);
          }
          for (var idx = 0; idx < newAssemble.length; idx++) {
            if (0 == rougeCards.length) break;
            var cardType = newAssemble[idx]["cardtype"];
            if ("pureseq" == cardType) {
              var pure = newAssemble[idx]["cards"];
              for (var inx = 0; inx < restcard.length; inx++) if (pureCnt >= 2 && seqCnt >= 2 && existSeq(pure, restcard[inx], rougeCards.length, rouge, false) && !indexOf(restcardDup, inx)) {
                var newAssem = new Object();
                var cards = newAssemble[idx]["cards"];
                cards.push(rougeCards[0]);
                newAssem["cardtype"] = Checkwhatgroup(cards, rouge)["cardtype"];
                newAssem["cards"] = cards;
                newAssemble[idx] = newAssem;
                rougeCards.splice(0, 1);
                if (0 == rougeCards.length) break;
              }
            } else if ("rougeseq" == cardType) {
              var newAssem = new Object();
              var cards = newAssemble[idx]["cards"];
              cards.push(rougeCards[0]);
              newAssem["cardtype"] = "rougeseq";
              newAssem["cards"] = cards;
              newAssem["score"] = sumFinalCards(cards, rouge);
              newAssemble[idx] = newAssem;
              rougeCards.splice(0, 1);
              if (0 == rougeCards.length) break;
            }
          }
        }
        var killAllRouge = false;
        if (0 != restcard.length) {
          var poResult = getPossibleSeq(restcard, 2, rouge);
          if (poResult.length > 0 && pureCnt >= 2 && getRougeSetCnt(newAssemble) >= 2) {
            var rougeRest = [];
            var tempRougeRest = [];
            for (var rss = 0; rss < rougeSet.length; rss++) {
              var rst = rougeSet[rss];
              for (var _8 = 0, rst_1 = rst; _8 < rst_1.length; _8++) {
                var rCard = rst_1[_8];
                GetCardValuespecial(rCard) == rouge || 79 == rCard ? tempRougeRest.push(rCard) : rougeRest.push(rCard);
              }
            }
            tempRougeRest = tempRougeRest.concat(rougeCards);
            for (var idx = 0; idx < newAssemble.length; idx++) {
              var nass = newAssemble[idx];
              var nCard = nass["cards"];
              if ("pureseq" == nass["cardtype"]) {
                var newRest = [];
                newRest = newRest.concat(nCard);
                newRest = newRest.concat(restcard);
                newRest = newRest.concat(rougeRest);
                newRest = NewMeldsortcards(newRest, rouge, tempRougeRest.length);
                var resFixInfo = fixSet(newRest, true, tempRougeRest.length, rouge);
                var tempNewRest = resFixInfo["handCard"];
                var res = resFixInfo["result"];
                if (res.length >= 2) {
                  newAssemble.splice(idx, 1);
                  restcard = tempNewRest;
                  pureCnt -= 1;
                  for (var _9 = 0, res_1 = res; _9 < res_1.length; _9++) {
                    var r = res_1[_9];
                    var tempSetemble = {};
                    tempSetemble["cardtype"] = "pureset";
                    tempSetemble["cards"] = r;
                    tempSetemble["score"] = sumFinalCards(r, rouge);
                    newAssemble.push(tempSetemble);
                  }
                  var roResult = [];
                  var rrInfo = fixAll(restcard, rougeCards, true, 1, rouge);
                  restcard = rrInfo["handCard"];
                  roResult = rrInfo["result"];
                  rougeCards = rrInfo["rougeCards"];
                  for (var _10 = 0, roResult_1 = roResult; _10 < roResult_1.length; _10++) {
                    var ro = roResult_1[_10];
                    var tempSetemble = {};
                    tempSetemble["cardtype"] = "rougeseq";
                    tempSetemble["cards"] = ro;
                    tempSetemble["score"] = sumFinalCards(ro, rouge);
                    newAssemble.push(tempSetemble);
                  }
                  killAllRouge = true;
                  tempRougeRest.length > 0 && (restcard = restcard.concat(tempRougeRest));
                  if (pureCnt <= 1) break;
                }
              }
            }
          }
        }
        var delIdx = [];
        if (killAllRouge) {
          for (var idx = 0; idx < newAssemble.length; idx++) "rougeset" == newAssemble[idx]["cardtype"] && delIdx.push(idx);
          newAssemble = delDupCards(newAssemble, delIdx);
        }
        if (0 != rougeCards.length) for (var _11 = 0, rougeCards_2 = rougeCards; _11 < rougeCards_2.length; _11++) {
          var r = rougeCards_2[_11];
          restcard.push(r);
        }
        var restInfo = secondsort(restcard, rouge);
        for (var _12 = 0, restInfo_3 = restInfo; _12 < restInfo_3.length; _12++) {
          var rest = restInfo_3[_12];
          newAssemble.push(rest);
        }
        return newAssemble;
      }
      Rummy_GameHelper.fixFinal = fixFinal;
      function getSeqCnt(assemble) {
        var a = 0;
        for (var _i = 0, assemble_2 = assemble; _i < assemble_2.length; _i++) {
          var ass = assemble_2[_i];
          "pureseq" != ass["cardtype"] && "rougeseq" != ass["cardtype"] || (a += 1);
        }
        return a;
      }
      Rummy_GameHelper.getSeqCnt = getSeqCnt;
      function getRougeSetCnt(assemble) {
        var a = 0;
        for (var _i = 0, assemble_3 = assemble; _i < assemble_3.length; _i++) {
          var ass = assemble_3[_i];
          "rougeset" == ass["cardtype"] && (a += 1);
        }
        return a;
      }
      Rummy_GameHelper.getRougeSetCnt = getRougeSetCnt;
      function exSortSumTotal(cards, handCards) {
        var arr = cards.concat();
        for (var i = 0; i < arr.length - 1; i++) for (var j = i; j < arr.length; j++) if (sumFromHandCard(arr[i], handCards) < sumFromHandCard(arr[j], handCards)) {
          var temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
        return arr;
      }
      Rummy_GameHelper.exSortSumTotal = exSortSumTotal;
      function sumFromHandCard(cards, handCard) {
        var score = 0;
        for (var _i = 0, cards_4 = cards; _i < cards_4.length; _i++) {
          var c = cards_4[_i];
          1 == GetCardValue(handCard[c]) || GetCardValue(handCard[c]) >= 10 ? score += 10 : score += GetCardValue(handCard[c]);
        }
        return score;
      }
      Rummy_GameHelper.sumFromHandCard = sumFromHandCard;
      function sumFinalCards(cards, rouge) {
        var tscore = 0;
        for (var s = 0; s < cards.length; s++) {
          if (GetCardValuespecial(cards[s]) == rouge || 79 == cards[s]) continue;
          GetCardValuespecial(cards[s]) >= 10 ? tscore += 10 : 1 == GetCardValuespecial(cards[s]) ? tscore += 10 : tscore += GetCardValuespecial(cards[s]);
        }
        return tscore;
      }
      Rummy_GameHelper.sumFinalCards = sumFinalCards;
      function getItemTag(cards, item) {
        for (var idx = 0; idx < cards.length; idx++) if (cards[idx] == item) return idx;
        return -1;
      }
      Rummy_GameHelper.getItemTag = getItemTag;
      function sortmethod(arr) {
        for (var i = 0; i < arr.length - 1; i++) for (var j = 0; j < arr.length - 1 - i; j++) if (GetCardValue(arr[i]) < GetCardValue(arr[j])) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        return arr;
      }
      Rummy_GameHelper.sortmethod = sortmethod;
      function sortValue(arr) {
        for (var i = 0; i < arr.length - 1; i++) for (var j = i + 1; j < arr.length; j++) if (sumCards([ arr[j] ]) > sumCards([ arr[i] ])) {
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        return arr;
      }
      Rummy_GameHelper.sortValue = sortValue;
      function sortNewCardValue(cards) {
        var arr = cards.concat();
        for (var i = 0; i < arr.length - 1; i++) for (var j = i; j < arr.length; j++) if (GetCardValue(arr[i]) < GetCardValue(arr[j])) {
          var temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
        return arr;
      }
      Rummy_GameHelper.sortNewCardValue = sortNewCardValue;
      function fixAll(handCards, rougeCards, keep, seqCntr, rouge) {
        var newHandCards = handCards.concat();
        var all = [];
        var allPossible = [];
        newHandCards = NewMeldsortcards(newHandCards, rouge, rougeCards.length);
        var baoZi = getPossibleBao(newHandCards, rouge, rougeCards.length);
        for (var _i = 0, baoZi_1 = baoZi; _i < baoZi_1.length; _i++) {
          var bao = baoZi_1[_i];
          allPossible.push(bao);
        }
        var seQ = getPossibleSeq(newHandCards, rougeCards.length, rouge);
        for (var _a = 0, seQ_1 = seQ; _a < seQ_1.length; _a++) {
          var s = seQ_1[_a];
          allPossible.push(s);
        }
        allPossible = exSortSumTotal(allPossible, newHandCards);
        var tempSeqPossible = getPossibleSeqFromPossible(allPossible, handCards);
        var dup = [];
        var finalNoDup = [];
        if (keep) if (0 == seqCntr) {
          var bestCard = getItemTag(newHandCards, sortNewCardValue(newHandCards)[0]);
          dup.push(bestCard);
          finalNoDup.push([ bestCard ]);
        } else {
          tempSeqPossible = exSortSumTotal(seQ, newHandCards);
          if (1 == tempSeqPossible.length) {
            finalNoDup.push(tempSeqPossible[0]);
            for (var _b = 0, _c = tempSeqPossible[0]; _b < _c.length; _b++) {
              var d = _c[_b];
              dup.push(d);
            }
          } else if (tempSeqPossible.length > 1) {
            var poBao = getPossibleBao(newHandCards, rouge, rougeCards.length);
            var ct = tempSeqPossible[0];
            var ctFlag = 0;
            for (var _d = 0, ct_1 = ct; _d < ct_1.length; _d++) {
              var t = ct_1[_d];
              for (var _e = 0, poBao_1 = poBao; _e < poBao_1.length; _e++) {
                var p = poBao_1[_e];
                for (var _f = 0, p_1 = p; _f < p_1.length; _f++) {
                  var o = p_1[_f];
                  t == o && (ctFlag = 1);
                }
              }
            }
            if (1 == ctFlag && getNeedCnt(ct, newHandCards) >= 2) {
              finalNoDup.push(tempSeqPossible[1]);
              for (var _g = 0, _h = tempSeqPossible[1]; _g < _h.length; _g++) {
                var d = _h[_g];
                dup.push(d);
              }
            } else {
              finalNoDup.push(tempSeqPossible[0]);
              for (var _j = 0, _k = tempSeqPossible[0]; _j < _k.length; _j++) {
                var d = _k[_j];
                dup.push(d);
              }
            }
          }
        }
        if (allPossible.length <= 0) {
          var returnInfo = new Object();
          returnInfo["handCard"] = newHandCards;
          returnInfo["result"] = all;
          returnInfo["rougeCards"] = rougeCards;
          return returnInfo;
        }
        for (var _l = 0, allPossible_1 = allPossible; _l < allPossible_1.length; _l++) {
          var s = allPossible_1[_l];
          if (indexOfSeq(dup, s)) continue;
          for (var _m = 0, s_2 = s; _m < s_2.length; _m++) {
            var d = s_2[_m];
            dup.push(d);
          }
          finalNoDup.push(s);
        }
        var returnInfo = new Object();
        var rs = [];
        var l = finalNoDup.length;
        var preVal = [];
        var sortResult = permute(finalNoDup, preVal);
        var maxCount = 0;
        var CardCnt = new Object();
        var allDup = [];
        var recordCard = new Object();
        if (keep) for (var idx = 0; idx < sortResult.length; idx++) {
          var newRr = sortResult[idx];
          var tempCount = 0;
          var seqCnt = 0;
          var rougeCnt = rougeCards.length;
          for (var nrx = 0; nrx < newRr.length; nrx++) {
            result = newRr[nrx];
            var needCnt = 0;
            if (result.length >= 2) if (GetCardValuespecial(newHandCards[result[1]]) == GetCardValuespecial(newHandCards[result[0]])) needCnt = 1; else if (result.length > 2) {
              var maxNeed = 0;
              for (var i = 0; i < result.length - 1; i++) {
                var tempNeed = Math.abs(newHandCards[result[i + 1]] - newHandCards[result[i]]) - 1;
                tempNeed > maxNeed && (maxNeed = tempNeed);
              }
              needCnt = maxNeed;
            } else needCnt = Math.abs(newHandCards[result[1]] - newHandCards[result[0]]) > 1 ? Math.abs(newHandCards[result[1]] - newHandCards[result[0]]) - 1 : 1; else needCnt = 2;
            if (needCnt <= rougeCnt) {
              result.length >= 2 && GetCardValuespecial(newHandCards[result[1]]) == GetCardValuespecial(newHandCards[result[0]]) || (seqCnt += 1);
              var cards = [];
              for (var _o = 0, result_3 = result; _o < result_3.length; _o++) {
                var r = result_3[_o];
                cards.push(newHandCards[r]);
              }
              tempCount += sumCards(cards);
              rougeCnt -= needCnt;
            } else if (rougeCnt > 0 && needCnt > rougeCnt && result.length > 2) {
              seqCnt += 1;
              var cards = [];
              var newIdx = [];
              for (var id = result.length - 2; id >= 0; id--) {
                if (1 == Math.abs(newHandCards[result[id + 1]] - newHandCards[result[id]])) {
                  cards.push(newHandCards[result[id]], newHandCards[result[id + 1]]);
                  newIdx.push(result[id], result[id + 1]);
                  tempCount += sumCards(cards);
                  rougeCnt -= 1;
                }
                if (rougeCnt <= 0) {
                  newRr[nrx] = newIdx;
                  break;
                }
              }
            }
            if (rougeCnt <= 0) break;
          }
          if (0 == seqCnt) continue;
          recordCard[idx] = newRr;
          CardCnt[idx] = tempCount;
          tempCount > maxCount && (maxCount = tempCount);
        } else for (var idx = 0; idx < sortResult.length; idx++) {
          var newRr = sortResult[idx];
          var tempCount = 0;
          var rougeCnt = rougeCards.length;
          for (var _p = 0, newRr_2 = newRr; _p < newRr_2.length; _p++) {
            var result = newRr_2[_p];
            var needCnt = 0;
            if (GetCardValuespecial(newHandCards[result[1]]) == GetCardValuespecial(newHandCards[result[0]])) needCnt = 1; else if (result.length > 2) {
              var maxNeed = 0;
              for (var i = 0; i < result.length - 1; i++) {
                var tempNeed = Math.abs(newHandCards[result[i + 1]] - newHandCards[result[i]]) - 1;
                tempNeed > maxNeed && (maxNeed = tempNeed);
              }
              needCnt = maxNeed;
            } else needCnt = Math.abs(newHandCards[result[1]] - newHandCards[result[0]]) > 1 ? Math.abs(newHandCards[result[1]] - newHandCards[result[0]]) - 1 : 1;
            if (needCnt <= rougeCnt) {
              var cards = [];
              var newIdx = [];
              for (var _q = 0, result_4 = result; _q < result_4.length; _q++) {
                var r = result_4[_q];
                cards.push(newHandCards[r]);
              }
              tempCount += sumCards(cards);
              rougeCnt -= needCnt;
            } else if (needCnt > rougeCnt && result.length > 2) {
              var cards = [];
              var newIdx = [];
              for (var id = result.length - 2; id >= 0; id--) if (newHandCards[result[id + 1]] - newHandCards[result[id]] == 1) {
                cards.push(newHandCards[id], newHandCards[id + 1]);
                newIdx.push(result[id], result[id + 1]);
                tempCount += sumCards(cards);
                rougeCnt -= needCnt;
              }
            }
            if (rougeCnt <= 0) {
              newRr[nrx] = newIdx;
              break;
            }
          }
          recordCard[idx] = newRr;
          CardCnt[idx] = tempCount;
          tempCount > maxCount && (maxCount = tempCount);
        }
        var maxIdx = -1;
        Object.getOwnPropertyNames(CardCnt).forEach(function(key) {
          CardCnt[key] === maxCount && (maxIdx = parseInt(key));
        });
        var bestNewCard = recordCard[maxIdx];
        if (!bestNewCard) {
          newHandCards = delDupCards(newHandCards, allDup);
          returnInfo["handCard"] = newHandCards;
          returnInfo["result"] = all;
          returnInfo["rougeCards"] = rougeCards;
          return returnInfo;
        }
        for (var _r = 0, bestNewCard_1 = bestNewCard; _r < bestNewCard_1.length; _r++) {
          var cardSort = bestNewCard_1[_r];
          if (rougeCards.length > 0) {
            var needCnt = 0;
            if (cardSort.length >= 2) if (GetCardValuespecial(newHandCards[cardSort[1]]) == GetCardValuespecial(newHandCards[cardSort[0]])) needCnt = 1; else if (cardSort.length > 2) {
              var j = Math.abs(newHandCards[cardSort[1]] - newHandCards[cardSort[0]]) - 1;
              var i = Math.abs(newHandCards[cardSort[2]] - newHandCards[cardSort[1]]) - 1;
              needCnt = j > i ? j : i;
            } else needCnt = Math.abs(newHandCards[cardSort[1]] - newHandCards[cardSort[0]]) > 1 ? Math.abs(newHandCards[cardSort[1]] - newHandCards[cardSort[0]]) - 1 : 1; else needCnt = 2;
            if (rougeCards.length >= needCnt) {
              var newAll = [];
              for (var _s = 0, cardSort_2 = cardSort; _s < cardSort_2.length; _s++) {
                var c = cardSort_2[_s];
                newAll.push(newHandCards[c]);
                allDup.push(c);
              }
              var restRouge = rougeCards.slice(0, needCnt);
              for (var _t = 0, restRouge_1 = restRouge; _t < restRouge_1.length; _t++) {
                var item = restRouge_1[_t];
                newAll.push(item);
              }
              rougeCards.splice(0, needCnt);
              all.push(newAll);
            } else if (needCnt > rougeCards.length && rougeCards.length > 0 && cardSort.length > 2) {
              var cards = [];
              for (var id = 0; id < cardSort.length - 1; id++) if (Math.abs(newHandCards[cardSort[id + 1]]) - newHandCards[cardSort[id]] == 1) {
                cards.push(newHandCards[cardSort[id]], newHandCards[cardSort[id + 1]]);
                allDup.push(cardSort[id], cardSort[id + 1]);
              }
              cards.push(rougeCards[0]);
              rougeCards.splice(0, 1);
              all.push(cards);
            }
          }
        }
        newHandCards = delDupCards(newHandCards, allDup);
        returnInfo["handCard"] = newHandCards;
        returnInfo["result"] = all;
        returnInfo["rougeCards"] = rougeCards;
        return returnInfo;
      }
      Rummy_GameHelper.fixAll = fixAll;
      function getNeedCnt(cardSort, restcard) {
        var needCnt = 0;
        if (cardSort.length > 2) {
          var j = Math.abs(restcard[cardSort[1]] - restcard[cardSort[0]]) - 1;
          var i = Math.abs(restcard[cardSort[2]] - restcard[cardSort[1]]) - 1;
          needCnt = j > i ? j : i;
        } else needCnt = Math.abs(restcard[cardSort[1]] - restcard[cardSort[0]]) > 1 ? Math.abs(restcard[cardSort[1]] - restcard[cardSort[0]]) - 1 : 1;
        return needCnt;
      }
      Rummy_GameHelper.getNeedCnt = getNeedCnt;
      function Checkwhatgroup(cards, rouge) {
        var cardobj = {};
        if (cards.length < 3) {
          cardobj["cardtype"] = "invalid";
          cardobj["cards"] = cards;
          cardobj["score"] = sumFinalCards(cards, rouge);
          var isAllRouge = true;
          for (var s = 0; s < cards.length; s++) if (GetCardValue(cards[s]) != rouge && 79 != cards[s]) {
            isAllRouge = false;
            break;
          }
          isAllRouge && (cardobj["cardtype"] = "rouge");
          return cardobj;
        }
        -1 !== cards.indexOf(14) ? cards[cards.indexOf(14)] = 1 : -1 !== cards.indexOf(30) ? cards[cards.indexOf(30)] = 17 : -1 !== cards.indexOf(46) ? cards[cards.indexOf(46)] = 33 : -1 !== cards.indexOf(62) && (cards[cards.indexOf(62)] = 49);
        var rougecnt = 0;
        for (var c = 0; c < cards.length; c++) 1 === rouge ? 1 !== GetCardValue(cards[c]) && 15 !== GetCardValue(cards[c]) && 14 !== GetCardValue(cards[c]) || (rougecnt += 1) : GetCardValue(cards[c]) !== rouge && 15 !== GetCardValue(cards[c]) || (rougecnt += 1);
        cards = NewMeldsortcards(cards, rouge, rougecnt);
        if (Isseq(cards)) {
          cardobj["cardtype"] = "pureseq";
          cardobj["score"] = 0;
          return cardobj;
        }
        if (3 === cards.length && rougecnt > 1) {
          var tscore = 0;
          cardobj["cardtype"] = "rougeseq";
          for (var s = 0; s < cards.length; s++) {
            if (GetCardValue(cards[s]) === rouge || 15 === GetCardValue(cards[s])) continue;
            GetCardValue(cards[s]) >= 10 ? tscore += 10 : 1 === GetCardValue(cards[s]) ? tscore += 10 : tscore += GetCardValue(cards[s]);
          }
          cardobj["score"] = tscore;
          return cardobj;
        }
        if (!Issetwithrouge(cards, rouge)) {
          var tscore = 0;
          cardobj["cardtype"] = "invalid";
          for (var s = 0; s < cards.length; s++) {
            if (GetCardValue(cards[s]) === rouge || 15 === GetCardValue(cards[s])) continue;
            GetCardValue(cards[s]) >= 10 ? tscore += 10 : 1 === GetCardValue(cards[s]) ? tscore += 10 : tscore += GetCardValue(cards[s]);
          }
          cardobj["score"] = tscore;
          return cardobj;
        }
        if (Isset(cards)) {
          if (Isseq(cards)) {
            var tscore = 0;
            cardobj["cardtype"] = "pureseq";
            cardobj["score"] = 0;
            return cardobj;
          }
          cardobj["cardtype"] = "pureset";
          if (1 === GetCardValue(cards[0]) || GetCardValue(cards[0]) >= 10) var tt = 10; else tt = GetCardValue(cards[0]);
          cardobj["score"] = tt * cards.length;
          return cardobj;
        }
        if (Issetwithrouge(cards, rouge) && !Isset(cards)) {
          if (Checkset(cards, rouge)) {
            var tscore = 0;
            cardobj["cardtype"] = "rougeset";
            for (var s = 0; s < cards.length; s++) {
              if (GetCardValue(cards[s]) === rouge || 15 === GetCardValue(cards[s])) continue;
              GetCardValue(cards[s]) >= 10 ? tscore += 10 : 1 === GetCardValue(cards[s]) ? tscore += 10 : tscore += GetCardValue(cards[s]);
            }
            cardobj["score"] = tscore;
            return cardobj;
          }
          var tscore = 0;
          cardobj["cardtype"] = "rougeseq";
          for (var s = 0; s < cards.length; s++) {
            if (GetCardValue(cards[s]) === rouge || 15 === GetCardValue(cards[s])) continue;
            GetCardValue(cards[s]) >= 10 ? tscore += 10 : 1 === GetCardValue(cards[s]) ? tscore += 10 : tscore += GetCardValue(cards[s]);
          }
          cardobj["score"] = tscore;
          return cardobj;
        }
      }
      Rummy_GameHelper.Checkwhatgroup = Checkwhatgroup;
      function Checkset(cards, rouge) {
        for (var a = 0; a < cards.length; a++) for (var b = a + 1; b < cards.length; b++) if (GetCardValuespecial(cards[b]) === GetCardValuespecial(cards[a]) && GetCardValuespecial(cards[b]) !== rouge && 79 !== cards[b]) return true;
        return false;
      }
      Rummy_GameHelper.Checkset = Checkset;
      function Isset(newcard) {
        if (newcard.length >= 10 || newcard.length < 3) return false;
        var flag = 0;
        for (var idx = 0; idx < newcard.length; idx++) {
          if (0 == idx) continue;
          GetCardValue(newcard[idx]) !== GetCardValue(newcard[idx - 1]) && (flag = 1);
        }
        if (0 === flag) {
          var dupmap = {};
          for (var k = 0; k < newcard.length; k++) {
            var tempcard = dupmap[GetCardColor(newcard[k])];
            1 !== tempcard ? dupmap[GetCardColor(newcard[k])] = 1 : flag = 1;
          }
        }
        if (0 === flag) return true;
        var key = 0;
        for (var idx = 0; idx < newcard.length; idx++) {
          if (0 === idx) continue;
          Isseq(newcard.slice(idx - 1, idx + 1)) || (key = 1);
        }
        return 0 === key;
      }
      Rummy_GameHelper.Isset = Isset;
      function Issetwithrouge(cards, rouge) {
        if (cards.length >= 10 || cards.length < 3) return false;
        var flag = 0;
        var rougecnt = 0;
        var cpcard = [];
        for (var i = 0; i < cards.length; i++) 1 === rouge ? GetCardValue(cards[i]) !== rouge && 15 !== GetCardValue(cards[i]) && 14 !== GetCardValue(cards[i]) || (rougecnt += 1) : GetCardValue(cards[i]) !== rouge && 15 !== GetCardValue(cards[i]) || (rougecnt += 1);
        cards = NewMeldsortcards(cards, rouge, rougecnt);
        for (var i = 0; i < cards.length; i++) 1 === rouge ? GetCardValue(cards[i]) === rouge || 15 === GetCardValue(cards[i]) || 14 === GetCardValue(cards[i]) || cpcard.push(cards[i]) : GetCardValue(cards[i]) === rouge || 15 === GetCardValue(cards[i]) || cpcard.push(cards[i]);
        for (var j = 0; j < cpcard.length; j++) {
          if (0 === j) continue;
          GetCardValuespecial(cpcard[j]) !== GetCardValuespecial(cpcard[j - 1]) && (flag = 1);
        }
        if (0 === flag) {
          cpcard.length + rougecnt > 4 && (flag = 1);
          var dupmap = {};
          for (var k = 0; k < cpcard.length; k++) {
            var tempcard = dupmap[GetCardColor(cpcard[k])];
            1 === tempcard ? flag = 1 : dupmap[GetCardColor(cpcard[k])] = 1;
          }
        }
        if (0 === flag) return true;
        var key = 0;
        for (var w = 0; w < cpcard.length; w++) {
          if (0 === w) continue;
          if (!Samecolor(cpcard[w - 1], cpcard[w])) {
            key = 1;
            break;
          }
          if (GetCardValue(cpcard[w]) - GetCardValue(cpcard[w - 1]) - 1 > rougecnt) {
            key = 1;
            break;
          }
          GetCardValue(cpcard[w]) - GetCardValue(cpcard[w - 1]) >= 2 && (rougecnt -= GetCardValue(cpcard[w]) - GetCardValue(cpcard[w - 1]) - 1);
          if (GetCardValue(cpcard[w]) === GetCardValue(cpcard[w - 1])) {
            key = 1;
            break;
          }
        }
        return 0 === key;
      }
      Rummy_GameHelper.Issetwithrouge = Issetwithrouge;
      function Samecolor(card1, card2) {
        return GetCardColor(card1) === GetCardColor(card2);
      }
      Rummy_GameHelper.Samecolor = Samecolor;
      var CardData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 79 ];
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      Rummy_GameHelper.getRandomInt = getRandomInt;
      function GetCardValue(card) {
        return card % 16;
      }
      Rummy_GameHelper.GetCardValue = GetCardValue;
      function GetCardColor(card) {
        return Math.floor(card / 16);
      }
      Rummy_GameHelper.GetCardColor = GetCardColor;
      function sort(arr) {
        for (var i = 0; i < arr.length - 1; i++) for (var j = 0; j < arr.length - 1 - i; j++) if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        return arr;
      }
      Rummy_GameHelper.sort = sort;
      function NewMeldsortcards(cards, rouge, rougeLen) {
        var diamond = new Array();
        var club = new Array();
        var heart = new Array();
        var spade = new Array();
        var ghost = new Array();
        var finish = new Array();
        for (var idx = 0; idx < cards.length; idx++) switch (GetCardColor(cards[idx])) {
         case 0:
          diamond.push(cards[idx]);
          break;

         case 1:
          club.push(cards[idx]);
          break;

         case 2:
          heart.push(cards[idx]);
          break;

         case 3:
          spade.push(cards[idx]);
          break;

         case 4:
          ghost.push(cards[idx]);
        }
        diamond = sort(diamond);
        diamond.length > 1 && (diamond = NewTurnAtoforteen(diamond, rouge, rougeLen));
        club = sort(club);
        club.length > 1 && (club = NewTurnAtoforteen(club, rouge, rougeLen));
        heart = sort(heart);
        heart.length > 1 && (heart = NewTurnAtoforteen(heart, rouge, rougeLen));
        spade = sort(spade);
        spade.length > 1 && (spade = NewTurnAtoforteen(spade, rouge, rougeLen));
        for (var _i = 0, diamond_1 = diamond; _i < diamond_1.length; _i++) {
          var a = diamond_1[_i];
          finish.push(a);
        }
        for (var _a = 0, club_1 = club; _a < club_1.length; _a++) {
          var b = club_1[_a];
          finish.push(b);
        }
        for (var _b = 0, heart_1 = heart; _b < heart_1.length; _b++) {
          var c = heart_1[_b];
          finish.push(c);
        }
        for (var _c = 0, spade_1 = spade; _c < spade_1.length; _c++) {
          var d = spade_1[_c];
          finish.push(d);
        }
        for (var _d = 0, ghost_1 = ghost; _d < ghost_1.length; _d++) {
          var e = ghost_1[_d];
          finish.push(e);
        }
        return finish;
      }
      Rummy_GameHelper.NewMeldsortcards = NewMeldsortcards;
      function turnBackToOne(cards) {
        for (var idx = 0; idx < cards.length; idx++) 14 == GetCardValue(cards[idx]) && (cards[idx] = cards[idx] - 13);
        return cards;
      }
      Rummy_GameHelper.turnBackToOne = turnBackToOne;
      function sortCardValue(arr) {
        for (var i = 0; i < arr.length - 1; i++) for (var j = i + 1; j < arr.length; j++) if (GetCardValue(arr[j]) < GetCardValue(arr[i])) {
          var temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
        return arr;
      }
      Rummy_GameHelper.sortCardValue = sortCardValue;
      function Newsortcards(cards) {
        var diamond = new Array();
        var club = new Array();
        var heart = new Array();
        var spade = new Array();
        var ghost = new Array();
        var finish = new Array();
        for (var idx = 0; idx < cards.length; idx++) switch (GetCardColor(cards[idx])) {
         case 0:
          diamond.push(cards[idx]);
          break;

         case 1:
          club.push(cards[idx]);
          break;

         case 2:
          heart.push(cards[idx]);
          break;

         case 3:
          spade.push(cards[idx]);
          break;

         case 4:
          ghost.push(cards[idx]);
        }
        diamond = sort(diamond);
        diamond.length > 1 && (diamond = TurnAtoforteen(diamond));
        club = sort(club);
        club.length > 1 && (club = TurnAtoforteen(club));
        heart = sort(heart);
        heart.length > 1 && (heart = TurnAtoforteen(heart));
        spade = sort(spade);
        spade.length > 1 && (spade = TurnAtoforteen(spade));
        for (var _i = 0, diamond_2 = diamond; _i < diamond_2.length; _i++) {
          var a = diamond_2[_i];
          finish.push(a);
        }
        for (var _a = 0, club_2 = club; _a < club_2.length; _a++) {
          var b = club_2[_a];
          finish.push(b);
        }
        for (var _b = 0, heart_2 = heart; _b < heart_2.length; _b++) {
          var c = heart_2[_b];
          finish.push(c);
        }
        for (var _c = 0, spade_2 = spade; _c < spade_2.length; _c++) {
          var d = spade_2[_c];
          finish.push(d);
        }
        for (var _d = 0, ghost_2 = ghost; _d < ghost_2.length; _d++) {
          var e = ghost_2[_d];
          finish.push(e);
        }
        return finish;
      }
      Rummy_GameHelper.Newsortcards = Newsortcards;
      function TurnAtoforteen(cards) {
        if (1 === GetCardValue(cards[0]) && 2 === cards.length) {
          if (GetCardValue(cards[1]) >= 6) {
            var newcard = 16 * GetCardColor(cards[0]) + 14;
            cards.splice(0, 1);
            cards.push(newcard);
          }
          return cards;
        }
        if (1 === GetCardValue(cards[0]) && GetCardValue(cards[1]) > 3 && GetCardValue(cards[cards.length - 1]) >= 12 || 1 === GetCardValue(cards[0]) && 13 === GetCardValue(cards[cards.length - 1]) && 12 === GetCardValue(cards[cards.length - 2]) || 1 === GetCardValue(cards[0]) && GetCardValue(cards[0]) === GetCardValue(cards[1]) && GetCardValue(cards[cards.length - 1]) >= 12 || 1 === GetCardValue(cards[0]) && GetCardValue(cards[0]) === GetCardValue(cards[1]) && 13 === GetCardValue(cards[cards.length - 1]) || 1 == GetCardValue(cards[0]) && GetCardValue(cards[1]) >= 10) {
          var newcard = 16 * GetCardColor(cards[0]) + 14;
          cards.splice(0, 1);
          cards.push(newcard);
        }
        return cards;
      }
      Rummy_GameHelper.TurnAtoforteen = TurnAtoforteen;
      function Check(group, rouge) {
        var cnt = 0;
        var cardaaa = [];
        for (var g = 0; g < group.length; g++) {
          var card = group[g]["cards"];
          cnt += card.length;
        }
        if (14 == cnt) return true;
        return false;
      }
      Rummy_GameHelper.Check = Check;
      function Check2(s, group, rouge) {
        var cnt = 0;
        var cardaaa = [];
        for (var g = 0; g < group.length; g++) {
          var cardscore = group[g]["score"];
          console.log(cardscore);
          if (!cardscore) return false;
        }
        return true;
      }
      Rummy_GameHelper.Check2 = Check2;
      function IsTurn(cards, rougeCnt) {
        var c1 = 0;
        var c2 = 0;
        for (var _i = 0, cards_5 = cards; _i < cards_5.length; _i++) {
          var c = cards_5[_i];
          12 == GetCardValue(c) ? c1 = 1 : 13 == GetCardValue(c) && (c2 = 1);
        }
        if (c1 > 0 && c2 > 0) return true;
        var c3 = 0;
        var c4 = 0;
        for (var _a = 0, cards_6 = cards; _a < cards_6.length; _a++) {
          var c = cards_6[_a];
          2 == GetCardValue(c) ? c3 = 1 : 3 == GetCardValue(c) && (c4 = 1);
        }
        if (c3 > 0 && c4 > 0) return false;
        var sum1 = 0;
        var sumCard1 = [];
        var sum2 = 0;
        var sumCard2 = [];
        for (var b = 0; b < cards.length; b++) if (GetCardValue(cards[b]) - 1 - 1 <= rougeCnt && 1 != GetCardValue(cards[b]) && !indexOf(sumCard1, cards[b])) {
          rougeCnt -= GetCardValue(cards[b]) - 1 - 1;
          sumCard1.push(cards[b]);
          for (var d = b + 1; d < cards.length; d++) {
            if (!(GetCardValue(cards[d]) - GetCardValue(sumCard1[sumCard1.length - 1]) - 1 <= rougeCnt)) break;
            sumCard1.push(cards[d]);
          }
        }
        sum1 = sumCards(sumCard1);
        for (var b = cards.length - 1; b > 0; b--) if (14 - GetCardValue(cards[b]) - 1 <= rougeCnt && 1 != GetCardValue(cards[b]) && !indexOf(sumCard2, cards[b])) {
          sumCard2.push(cards[b]);
          rougeCnt -= 14 - GetCardValue(cards[b]) - 1;
          for (var d = b - 1; d < cards.length; d++) {
            if (GetCardValue(cards[d]) - GetCardValue(sumCard2[0]) - 1 != 1) break;
            sumCard2.push(cards[d]);
          }
        }
        sum2 = sumCards(sumCard2);
        if (sum2 > sum1) return true;
        return false;
      }
      Rummy_GameHelper.IsTurn = IsTurn;
      function Isseq(cards) {
        for (var i = 0; i < cards.length - 1; i++) if (GetCardValue(cards[i]) + 1 !== GetCardValue(cards[i + 1]) || GetCardColor(cards[i]) !== GetCardColor(cards[i + 1])) return false;
        return true;
      }
      Rummy_GameHelper.Isseq = Isseq;
      function secondsort(restcard, rouge) {
        var diamondcards = new Array();
        var clubcards = new Array();
        var heartcards = new Array();
        var spadecards = new Array();
        var allcard = new Array();
        var ghost = new Array();
        var dscore = 0;
        var cscore = 0;
        var hscore = 0;
        var sscore = 0;
        for (var a = 0; a < restcard.length; a++) switch (GetCardColor(restcard[a])) {
         case 0:
          diamondcards.push(restcard[a]);
          if (GetCardValue(restcard[a]) === rouge || 15 === GetCardValue(restcard[a])) continue;
          GetCardValue([ restcard[a] ]) >= 10 ? dscore += 10 : 1 === GetCardValue(restcard[a]) ? dscore += 10 : dscore += GetCardValue(restcard[a]);
          break;

         case 1:
          clubcards.push(restcard[a]);
          if (GetCardValue(restcard[a]) === rouge || 15 === GetCardValue(restcard[a])) continue;
          GetCardValue([ restcard[a] ]) >= 10 ? cscore += 10 : 1 === GetCardValue(restcard[a]) ? cscore += 10 : cscore += GetCardValue(restcard[a]);
          break;

         case 2:
          heartcards.push(restcard[a]);
          if (GetCardValue(restcard[a]) === rouge || 15 === GetCardValue(restcard[a])) continue;
          GetCardValue([ restcard[a] ]) >= 10 ? hscore += 10 : 1 === GetCardValue(restcard[a]) ? hscore += 10 : hscore += GetCardValue(restcard[a]);
          break;

         case 3:
          spadecards.push(restcard[a]);
          if (GetCardValue(restcard[a]) === rouge || 15 === GetCardValue(restcard[a])) continue;
          GetCardValue([ restcard[a] ]) >= 10 ? sscore += 10 : 1 === GetCardValue(restcard[a]) ? sscore += 10 : sscore += GetCardValue(restcard[a]);
          break;

         case 4:
          ghost.push(restcard[a]);
          var gscore = 0;
        }
        if (diamondcards.length > 0) {
          var diaobj = {};
          diaobj["cards"] = diamondcards;
          diaobj["cardtype"] = Checkwhatgroup(diamondcards, rouge)["cardtype"];
          diaobj["score"] = dscore;
          allcard.push(diaobj);
        }
        if (clubcards.length > 0) {
          var cluobj = {};
          cluobj["cards"] = clubcards;
          cluobj["cardtype"] = Checkwhatgroup(clubcards, rouge)["cardtype"];
          cluobj["score"] = cscore;
          allcard.push(cluobj);
        }
        if (heartcards.length > 0) {
          var heaobj = {};
          heaobj["cards"] = heartcards;
          heaobj["cardtype"] = Checkwhatgroup(heartcards, rouge)["cardtype"];
          heaobj["score"] = hscore;
          allcard.push(heaobj);
        }
        if (spadecards.length > 0) {
          var spaobj = {};
          spaobj["cards"] = spadecards;
          spaobj["cardtype"] = Checkwhatgroup(spadecards, rouge)["cardtype"];
          spaobj["score"] = sscore;
          allcard.push(spaobj);
        }
        if (ghost.length > 0) {
          var ghobj = {};
          ghobj["cards"] = ghost;
          ghobj["cardtype"] = "restcard";
          ghobj["score"] = gscore;
          allcard.push(ghobj);
        }
        return allcard;
      }
      Rummy_GameHelper.secondsort = secondsort;
      function getBetterPossible(possible, handCard) {
        var hC = handCard.concat();
        for (var idx = 0; idx < possible.length; idx++) {
          var po = possible[idx];
          if (po.length > 2) {
            var restTemp = 0;
            var p = po.concat();
            p = sortCardValue(p);
            hC = sortCardValue(hC);
            restTemp = hC[p[1]] - hC[p[0]] == 1 ? p[2] : p[0];
            for (var inx = idx + 1; inx < possible.length; inx++) indexOf(possible[inx], restTemp) && (possible[idx] = delCard(possible[idx], restTemp));
          }
        }
        return possible;
      }
      Rummy_GameHelper.getBetterPossible = getBetterPossible;
      function getPossibleSeqFromPossible(allPossible, handCards) {
        var retInfo = [];
        for (var _i = 0, allPossible_2 = allPossible; _i < allPossible_2.length; _i++) {
          var all = allPossible_2[_i];
          checkIsSeq(all, handCards) && retInfo.push(all);
        }
        return retInfo;
      }
      Rummy_GameHelper.getPossibleSeqFromPossible = getPossibleSeqFromPossible;
      function meldPureSeq(cardAssemble, seqLen, seqN) {
        var seqNowLen = seqLen;
        var seqNormal = seqN;
        var newAssemble = cardAssemble.concat();
        var returnInfo = {};
        var result = [];
        for (var idx = 0; idx < newAssemble.length; idx++) {
          if (idx == newAssemble.length - 1) {
            result.push(newAssemble[idx]);
            break;
          }
          seqLen >= 1 && seqN >= 2 || result.push(newAssemble[idx]);
          var temp1 = newAssemble[idx]["cards"].concat();
          var temp2 = newAssemble[idx + 1]["cards"].concat();
          for (var _i = 0, temp2_1 = temp2; _i < temp2_1.length; _i++) {
            var card1 = temp2_1[_i];
            temp1.push(card1);
          }
          if (Isseq(temp1)) {
            var newSeq = temp1;
            newSeq = sortCardValue(newSeq);
            var newCardSeq = {};
            newCardSeq["cards"] = newSeq;
            newCardSeq["cardtype"] = "pureseq";
            result.push(newCardSeq);
            seqNowLen -= 1;
            seqNormal -= 1;
            idx++;
          } else result.push(newAssemble[idx]);
        }
        returnInfo["result"] = result;
        returnInfo["seqLen"] = seqNowLen;
        returnInfo["seqCnt"] = seqNormal;
        return returnInfo;
      }
      Rummy_GameHelper.meldPureSeq = meldPureSeq;
      function sortPureSeq(assemble) {
        for (var i = 0; i < assemble.length - 1; i++) for (var idx = i + 1; idx < assemble.length; idx++) if (sumCards(assemble[idx]) < sumCards(assemble[i])) {
          var temp = assemble[idx];
          assemble[idx] = assemble[i];
          assemble[i] = temp;
        }
        return assemble;
      }
      Rummy_GameHelper.sortPureSeq = sortPureSeq;
      function getRougeFromSeq(assemble, rouge, pureCnt, seqCnt) {
        var tempCnt = pureCnt;
        var tempSeqCnt = seqCnt;
        var result = [];
        var retCards = [];
        var retInfo = {};
        assemble = sortPureSeq(assemble);
        for (var assembleIdx = 0; assembleIdx < assemble.length; assembleIdx++) {
          var rougeFlag = 0;
          var cardsSeq = assemble[assembleIdx];
          for (var _i = 0, cardsSeq_1 = cardsSeq; _i < cardsSeq_1.length; _i++) {
            var card = cardsSeq_1[_i];
            GetCardValuespecial(card) == rouge && (rougeFlag = 1);
          }
          if (1 == rougeFlag) {
            assemble[assembleIdx] = [];
            for (var _a = 0, cardsSeq_2 = cardsSeq; _a < cardsSeq_2.length; _a++) {
              var cs = cardsSeq_2[_a];
              retCards.push(cs);
            }
            tempCnt -= 1;
            tempSeqCnt -= 1;
          }
          if (tempCnt < 2) break;
        }
        for (var _b = 0, assemble_4 = assemble; _b < assemble_4.length; _b++) {
          var item = assemble_4[_b];
          item.length > 0 && result.push(item);
        }
        retInfo["result"] = result;
        retInfo["retCards"] = retCards;
        retInfo["tempCnt"] = tempCnt;
        retInfo["tempSeqCnt"] = tempSeqCnt;
        return retInfo;
      }
      Rummy_GameHelper.getRougeFromSeq = getRougeFromSeq;
      function replaceRougeByPure(rougeSetSeq, item, rouge) {
        var restCard = [];
        var rougeCards = [];
        var retRougeCards = [];
        var retResult = [];
        var retRougeSet = [];
        var retInfo = {};
        for (var seqIdx = 0; seqIdx < rougeSetSeq.length; seqIdx++) {
          var setS = rougeSetSeq[seqIdx];
          if (hasRouge(setS, rouge)) {
            var tempSeq = [];
            rougeCards = [];
            for (var _i = 0, setS_1 = setS; _i < setS_1.length; _i++) {
              var s = setS_1[_i];
              GetCardValuespecial(s) == rouge || 79 == s ? rougeCards.push(s) : tempSeq.push(s);
            }
            tempSeq.push(item);
            var result = [];
            var retInfoa = fixSet(tempSeq, false, 0, rouge);
            restCard = retInfoa["handCard"];
            result = retInfoa["result"];
            if (result.length > 0) {
              for (var _a = 0, result_5 = result; _a < result_5.length; _a++) {
                var r = result_5[_a];
                retResult.push(r);
              }
              rougeSetSeq[seqIdx] = [];
              for (var _b = 0, rougeCards_3 = rougeCards; _b < rougeCards_3.length; _b++) {
                var rs = rougeCards_3[_b];
                retRougeCards.push(rs);
              }
              break;
            }
          }
        }
        for (var _c = 0, rougeSetSeq_1 = rougeSetSeq; _c < rougeSetSeq_1.length; _c++) {
          var r = rougeSetSeq_1[_c];
          r.length > 0 && retRougeSet.push(r);
        }
        retInfo["handCard"] = restCard;
        retInfo["retRougeCards"] = retRougeCards;
        retInfo["retRougeSet"] = retRougeSet;
        retInfo["retResult"] = retResult;
        return retInfo;
      }
      Rummy_GameHelper.replaceRougeByPure = replaceRougeByPure;
      function checkMoreThanFour(assemble) {
        var cnt = 0;
        for (var _i = 0, assemble_5 = assemble; _i < assemble_5.length; _i++) {
          var asem = assemble_5[_i];
          asem["cards"].length >= 4 && cnt++;
        }
        return cnt >= 2;
      }
      Rummy_GameHelper.checkMoreThanFour = checkMoreThanFour;
      function ifPossible(handCards, rougeCards, rouge) {
        var a = getPossibleSeq(handCards, rougeCards.length, rouge);
        var b = getPossibleBao(handCards, rougeCards.length, rouge);
        if (a.length > 0 || b.length > 0) return true;
        return false;
      }
      Rummy_GameHelper.ifPossible = ifPossible;
      function splitFromSeqSide(newAssemble, rouge, restCard, rougeCards, pureSet, rougeSet) {
        var retInfo = {};
        for (var idx = 0; idx < newAssemble.length; idx++) {
          var restCardDup = [];
          var checkDup = [];
          var ascDup = [];
          var resDup = [];
          var newAss = newAssemble[idx];
          var newCard = newAssemble[idx]["cards"];
          newCard = "rougeseq" == newAss["cardtype"] ? sortRougeAndCard(newAss["cards"], rouge) : "pureseq" == newAss["cardtype"] ? NewMeldsortcards(newAss["cards"], rouge, 0) : newAss["cards"];
          if (!hasRouge(newCard, rouge) && newCard.length <= 3) continue;
          if (checkMoreThanFour(newAssemble) && restCard.length > 0) {
            var checkCard1 = newCard[0];
            var checkCard2 = newCard[newCard.length - 1];
            var cCard = [ checkCard2, checkCard1 ];
            for (var inx = 0; inx < cCard.length; inx++) {
              if (indexOf(checkDup, inx)) continue;
              var chCard = cCard[inx];
              for (var iqx = 0; iqx < newAssemble.length; iqx++) {
                var asCard = newAssemble[iqx]["cards"];
                var asAss = newAssemble[iqx]["cardtype"];
                "rougeseq" == asAss ? asCard = sortRougeAndCard(asCard, rouge) : "pureseq" == asAss && (asCard = NewMeldsortcards(asCard, rouge, 0));
                if (asCard.length < 4 || iqx == idx || !hasRouge(asCard, rouge) && asCard.length <= 3) continue;
                var asCardFirst = asCard[0];
                var asCardFinal = asCard[asCard.length - 1];
                var asCards = [ asCardFinal, asCardFirst ];
                for (var iax = 0; iax < asCards.length; iax++) {
                  if (indexOf(ascDup, iax)) continue;
                  var asC = asCards[iax];
                  if (ifPossible([ chCard, asC ], rougeCards, rouge)) for (var itx = 0; itx < restCard.length; itx++) {
                    if (indexOf(resDup, iax)) continue;
                    var rCard = restCard[itx];
                    var tempCardSet = [ chCard, asC, rCard ];
                    if (Issetwithrouge(tempCardSet, rouge) && !indexOf(restCardDup, idx)) {
                      var tempAssemble = {};
                      tempAssemble["cardtype"] = Checkwhatgroup(tempCardSet, rouge)["cardtype"];
                      tempAssemble["cards"] = tempCardSet;
                      tempAssemble["score"] = sumFinalCards(tempCardSet, rouge);
                      newAssemble.push(tempAssemble);
                      restCardDup.push(itx);
                      var qx = 0;
                      qx = 0 == inx ? newCard.length - 1 : 0;
                      var px = 0;
                      px = 0 == iax ? asCard.length - 1 : 0;
                      checkDup.push(inx);
                      ascDup.push(iax);
                      resDup.push(itx);
                      newCard = delCard(newCard, newCard[qx]);
                      newAssemble[idx]["cards"] = newCard;
                      asCard = delCard(asCard, asCard[px]);
                      newAssemble[iqx]["cards"] = asCard;
                      if (asCard.length <= 3 || newCard.length <= 3) break;
                    }
                  }
                }
              }
            }
          }
          0 != restCardDup.length && (restCard = delDupCards(restCard, restCardDup));
          if ("pureseq" == newAssemble[idx]["cardtype"]) while (1) {
            if (newCard.length <= 3) break;
            var checkCard1 = newCard[0];
            var checkCard2 = newCard[newCard.length - 1];
            var tempCheck1 = restCard.concat();
            var tempCheck2 = restCard.concat();
            tempCheck1.push(checkCard1);
            tempCheck2.push(checkCard2);
            var result1 = [];
            var result2 = [];
            var finalCheck1 = [];
            var finalCheck2 = [];
            var setInfo1 = fixSet(tempCheck1, false, 0, rouge);
            finalCheck1 = setInfo1["handCard"];
            result1 = setInfo1["result"];
            if (GetCardValuespecial(checkCard1) == rouge && 0 == result1.length) {
              tempCheck1 = tempCheck1.splice(tempCheck1.length - 1, 1);
              var retInfo1 = fixAll(tempCheck1, [ checkCard1 ], false, 0, rouge);
              finalCheck1 = retInfo1["handCard"];
              result1 = retInfo1["result"];
              delCard(finalCheck1, checkCard1);
            }
            var setInfo2 = fixSet(tempCheck2, false, 0, rouge);
            if (GetCardValuespecial(checkCard2) == rouge && 0 == result1.length) {
              tempCheck2 = tempCheck2.splice(tempCheck2.length - 1, 1);
              var retInfo2 = fixAll(tempCheck2, [ checkCard2 ], false, 0, rouge);
              finalCheck2 = retInfo2["handCard"];
              result2 = retInfo2["result"];
              delCard(finalCheck2, checkCard2);
            }
            finalCheck2 = setInfo2["handCard"];
            result2 = setInfo2["result"];
            if (result1.length > 0 && indexOfSecArr(result1, checkCard1)) {
              for (var _i = 0, result1_1 = result1; _i < result1_1.length; _i++) {
                var r1 = result1_1[_i];
                var setName = Checkwhatgroup(r1, rouge);
                if ("pureset" == setName["cardtype"]) pureSet.push(r1); else if ("rougeset" == setName["cardtype"]) rougeSet.push(r1); else if ("rougeseq" == setName["cardtype"]) {
                  var tempAssemble = {};
                  tempAssemble["cardtype"] = "rougeseq";
                  tempAssemble["cards"] = sortRougeAndCard(r1, rouge);
                  newAssemble.push(tempAssemble);
                } else if ("pureseq" == setName["cardtype"]) {
                  var tempAssemble = {};
                  tempAssemble["cardtype"] = "pureseq";
                  tempAssemble["cards"] = sortRougeAndCard(r1, rouge);
                  newAssemble.push(tempAssemble);
                }
              }
              restCard = finalCheck1;
              newCard.splice(0, 1);
              var getNewCard = newCard;
              newAssemble[idx]["cards"] = newCard;
              if (getNewCard.length <= 3) break;
            } else if (result2.length > 0 && indexOfSecArr(result2, checkCard2)) {
              for (var _a = 0, result2_1 = result2; _a < result2_1.length; _a++) {
                var r2 = result2_1[_a];
                var setName = Checkwhatgroup(r2, rouge);
                if ("pureset" == setName["cardtype"]) pureSet.push(r2); else if ("rougeset" == setName["cardtype"]) rougeSet.push(r2); else if ("rougeseq" == setName["cardtype"]) {
                  var tempAssemble = {};
                  tempAssemble["cardtype"] = "rougeseq";
                  tempAssemble["cards"] = sortRougeAndCard(r2, rouge);
                  newAssemble.push(tempAssemble);
                } else if ("pureseq" == setName["cardtype"]) {
                  var tempAssemble = {};
                  tempAssemble["cardtype"] = "pureseq";
                  tempAssemble["cards"] = sortRougeAndCard(r2, rouge);
                  newAssemble.push(tempAssemble);
                }
              }
              restCard = finalCheck2;
              newCard.splice(newCard.length - 1, 1);
              var getNewCard = newCard;
              newAssemble[idx]["cards"] = newCard;
              if (getNewCard.length <= 3) break;
            } else {
              var tempRouge1 = [];
              var tempRest1 = [];
              var tempPureSet1 = [];
              var retInfo = replaceRougeByPure(rougeSet, checkCard2, rouge);
              tempRest1 = retInfo["handCard"];
              tempRouge1 = retInfo["retRougeCards"];
              rougeSet = retInfo["retRougeSet"];
              tempPureSet1 = retInfo["retResult"];
              if (tempPureSet1.length > 0) {
                for (var _b = 0, tempPureSet1_1 = tempPureSet1; _b < tempPureSet1_1.length; _b++) {
                  var tp1 = tempPureSet1_1[_b];
                  pureSet.push(tp1);
                }
                for (var _c = 0, tempRouge1_1 = tempRouge1; _c < tempRouge1_1.length; _c++) {
                  var tr1 = tempRouge1_1[_c];
                  rougeCards.push(tr1);
                }
                for (var _d = 0, tempRest1_1 = tempRest1; _d < tempRest1_1.length; _d++) {
                  var trs1 = tempRest1_1[_d];
                  restCard.push(trs1);
                }
                var getNewCard = newCard.slice(0, newCard.length - 1);
                newCard = getNewCard;
                newAssemble[idx]["cards"] = getNewCard;
                if (getNewCard.length <= 3) break;
              }
              var tempRouge2 = [];
              var tempRest2 = [];
              var tempPureSet2 = [];
              var retInfo = replaceRougeByPure(rougeSet, checkCard1, rouge);
              tempRest2 = retInfo["handCard"];
              tempRouge2 = retInfo["retRougeCards"];
              rougeSet = retInfo["retRougeSet"];
              tempPureSet2 = retInfo["retResult"];
              if (tempPureSet2.length > 0) {
                for (var _e = 0, tempPureSet2_1 = tempPureSet2; _e < tempPureSet2_1.length; _e++) {
                  var tp2 = tempPureSet2_1[_e];
                  pureSet.push(tp2);
                }
                for (var _f = 0, tempRouge2_1 = tempRouge2; _f < tempRouge2_1.length; _f++) {
                  var tr2 = tempRouge2_1[_f];
                  rougeCards.push(tr2);
                }
                for (var _g = 0, tempRest2_1 = tempRest2; _g < tempRest2_1.length; _g++) {
                  var trs2 = tempRest2_1[_g];
                  restCard.push(trs2);
                }
                var getNewCard = newCard.slice(1, newCard.length);
                newCard = getNewCard;
                newAssemble[idx]["cards"] = getNewCard;
                if (getNewCard.length <= 3) break;
              }
              if (!(tempPureSet1.length > 0 || tempPureSet2.length > 0)) break;
            }
          } else if ("rougeseq" == newAssemble[idx]["cardtype"]) while (1) {
            if (newCard.length <= 3) break;
            var checkCard1 = newCard[0];
            var checkCard2 = newCard[newCard.length - 1];
            var tempCheck1 = restCard.concat();
            var tempCheck2 = restCard.concat();
            tempCheck1.push(checkCard1);
            tempCheck2.push(checkCard2);
            var result1 = [];
            var result2 = [];
            var finalCheck1 = [];
            var finalCheck2 = [];
            var setInfo1 = fixSet(tempCheck1, false, 0, rouge);
            finalCheck1 = setInfo1["handCard"];
            result1 = setInfo1["result"];
            if (GetCardValuespecial(checkCard1) == rouge && 0 == result1.length) {
              tempCheck1 = tempCheck1.slice(0, tempCheck1.length - 1);
              var resInfo = fixAll(tempCheck1, [ checkCard1 ], false, 0, rouge);
              finalCheck1 = resInfo["handCard"];
              result1 = resInfo["result"];
              result1.length > 0 && delCard(finalCheck1, checkCard1);
            }
            var setInfo2 = fixSet(tempCheck2, false, 0, rouge);
            finalCheck2 = setInfo2["handCard"];
            result2 = setInfo2["result"];
            if (GetCardValuespecial(checkCard2) == rouge && 0 == result2.length) {
              tempCheck2 = tempCheck2.slice(0, tempCheck2.length - 1);
              var reqInfo = fixAll(tempCheck2, [ checkCard2 ], false, 0, rouge);
              finalCheck2 = reqInfo["handCard"];
              result2 = reqInfo["result"];
              result2.length > 0 && delCard(finalCheck2, checkCard2);
            }
            if (result1.length > 0 && indexOfSecArr(result1, checkCard1)) {
              for (var _h = 0, result1_2 = result1; _h < result1_2.length; _h++) {
                var r1 = result1_2[_h];
                var setName = Checkwhatgroup(r1, rouge);
                if ("pureset" == setName["cardtype"]) pureSet.push(r1); else if ("rougeset" == setName["cardtype"]) rougeSet.push(r1); else if ("rougeseq" == setName["cardtype"]) {
                  var tempAssemblea = {};
                  tempAssemblea["cardtype"] = "rougeseq";
                  tempAssemblea["cards"] = sortRougeAndCard(r1, rouge);
                  newAssemble.push(tempAssemblea);
                } else if ("pureseq" == setName["cardtype"]) {
                  var tempAssemblea = {};
                  tempAssemblea["cardtype"] = "pureseq";
                  tempAssemblea["cards"] = sortRougeAndCard(r1, rouge);
                  newAssemble.push(tempAssemblea);
                }
              }
              restCard = finalCheck1;
              newCard.splice(0, 1);
              var getNewCard = newCard;
              newCard = getNewCard;
              newAssemble[idx]["cards"] = getNewCard;
              if (getNewCard.length <= 3) break;
            } else {
              if (!(result2.length > 0 && indexOfSecArr(result2, checkCard2))) break;
              for (var _j = 0, result2_2 = result2; _j < result2_2.length; _j++) {
                var r2 = result2_2[_j];
                var setName = Checkwhatgroup(r2, rouge);
                if ("pureset" == setName["cardtype"]) pureSet.push(r2); else if ("rougeset" == setName["cardtype"]) rougeSet.push(r2); else if ("rougeseq" == setName["cardtype"]) {
                  var tempAssembles = {};
                  tempAssembles["cardtype"] = "rougeseq";
                  tempAssembles["cards"] = sortRougeAndCard(r2, rouge);
                  newAssemble.push(tempAssembles);
                } else if ("pureseq" == setName["cardtype"]) {
                  var tempAssembles = {};
                  tempAssembles["cardtype"] = "pureseq";
                  tempAssembles["cards"] = sortRougeAndCard(r2, rouge);
                  newAssemble.push(tempAssembles);
                }
              }
              restCard = finalCheck2;
              newCard.splice(newCard.length - 1, 1);
              var getNewCard = newCard;
              newCard = getNewCard;
              newAssemble[idx]["cards"] = getNewCard;
              if (getNewCard.length <= 3) break;
            }
          }
        }
        retInfo["newAssemble"] = newAssemble;
        retInfo["handCards"] = restCard;
        retInfo["rougeCards"] = rougeCards;
        retInfo["ps"] = pureSet;
        retInfo["rs"] = rougeSet;
        return retInfo;
      }
      Rummy_GameHelper.splitFromSeqSide = splitFromSeqSide;
      function checkIsSeq(pos, handCards) {
        for (var id = 0; id < pos.length - 1; id++) if (GetCardValuespecial(handCards[pos[id]]) == GetCardValuespecial(handCards[pos[id + 1]])) return false;
        return true;
      }
      Rummy_GameHelper.checkIsSeq = checkIsSeq;
      function finallyRougeSet(assemble, rougeSet, rouge, restCard) {
        var retInfo = {};
        if (!hasRouge(rougeSet, rouge)) {
          retInfo["assemble"] = assemble;
          retInfo["result"] = [];
          retInfo["bool"] = false;
          return retInfo;
        }
        var r1 = getPossibleSeq(restCard, 1, rouge);
        var r2 = getPossibleBao(restCard, 1, rouge);
        if (0 == r1.length && 0 == r2.length) {
          retInfo["assemble"] = assemble;
          retInfo["result"] = [];
          retInfo["bool"] = false;
          return retInfo;
        }
        var cardLeft = [];
        var rgLeft = [];
        var dupCard = [];
        for (var rgx = 0; rgx < rougeSet.length; rgx++) {
          if (GetCardValuespecial(rougeSet[rgx]) == rouge || 79 == rougeSet[rgx]) continue;
          for (var idx = 0; idx < assemble.length; idx++) {
            var ase = assemble[idx];
            var tempCard = ase["cards"].concat();
            var rg = rougeSet[rgx];
            tempCard.push(rg);
            if (Issetwithrouge(tempCard, rouge) && !indexOf(dupCard, rgx)) {
              assemble[idx]["cardtype"] = Checkwhatgroup(tempCard, rouge)["cardtype"];
              assemble[idx]["score"] = sumFinalCards(tempCard, rouge);
              assemble[idx]["cards"] = tempCard;
              rgLeft.push(rg);
              dupCard.push(rgx);
            }
          }
        }
        if (rgLeft.length <= 0) {
          retInfo["assemble"] = assemble;
          retInfo["result"] = [];
          retInfo["bool"] = false;
          return retInfo;
        }
        for (var k = 0; k < rougeSet.length; k++) {
          var ks = rougeSet[k];
          indexOf(rgLeft, ks) || cardLeft.push(ks);
        }
        retInfo["assemble"] = assemble;
        retInfo["result"] = cardLeft;
        retInfo["bool"] = true;
        return retInfo;
      }
      Rummy_GameHelper.finallyRougeSet = finallyRougeSet;
      function hasRouge(cards, rouge) {
        for (var _i = 0, cards_7 = cards; _i < cards_7.length; _i++) {
          var card = cards_7[_i];
          if (GetCardValuespecial(card) == rouge || 79 == card) return true;
        }
        return false;
      }
      Rummy_GameHelper.hasRouge = hasRouge;
      function delCard(cards, item) {
        var defIdx = -1;
        for (var id = 0; id < cards.length; id++) cards[id] == item && (defIdx = id);
        -1 != defIdx && cards.splice(defIdx, 1);
        return cards;
      }
      Rummy_GameHelper.delCard = delCard;
      function indexOfSecArr(res, item) {
        for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
          var rs = res_2[_i];
          for (var _a = 0, rs_1 = rs; _a < rs_1.length; _a++) {
            var r = rs_1[_a];
            if (r == item) return true;
          }
        }
        return false;
      }
      Rummy_GameHelper.indexOfSecArr = indexOfSecArr;
      function NewTurnAtoforteen(incards, rouge, rougeLen) {
        var cards = [];
        var rougeSeq = [];
        if (rougeLen > 0) for (var _i = 0, incards_1 = incards; _i < incards_1.length; _i++) {
          var c = incards_1[_i];
          GetCardValue(c) == rouge || 79 == c ? rougeSeq.push(c) : cards.push(c);
        } else for (var _a = 0, incards_2 = incards; _a < incards_2.length; _a++) {
          var c = incards_2[_a];
          cards.push(c);
        }
        if (cards.length < 2 || null == cards) return incards;
        cards = turnBackToOne(cards);
        cards = sortCardValue(cards);
        if (IsTurn(cards, rougeLen) && 1 == GetCardValue(cards[0])) {
          var newcard = 16 * GetCardColor(cards[0]) + 14;
          cards.splice(0, 1);
          cards.push(newcard);
        } else if (IsTurn(cards, rougeLen) && 1 == rouge) for (var idx = 0; idx < rougeSeq.length; idx++) {
          var card = rougeSeq[idx];
          card = 16 * GetCardColor(card) + 14;
          rougeSeq[idx] = card;
        }
        for (var i = 0; i < cards.length - 1; i++) if (cards[i + 1] - cards[i] > 1 && rougeSeq.length > 0) {
          var rear = cards.slice(i + 1, cards.length).concat();
          cards = cards.slice(0, i + 1);
          cards.push(rougeSeq[0]);
          for (var _b = 0, rear_2 = rear; _b < rear_2.length; _b++) {
            var r = rear_2[_b];
            cards.push(r);
          }
          rougeSeq.splice(0, 1);
          i += 1;
        }
        if (rougeSeq.length > 0) for (var _c = 0, rougeSeq_3 = rougeSeq; _c < rougeSeq_3.length; _c++) {
          var r = rougeSeq_3[_c];
          if (GetCardValue(r) < GetCardValue(cards[0])) {
            var tempCards = [ r ];
            for (var _d = 0, cards_8 = cards; _d < cards_8.length; _d++) {
              var c = cards_8[_d];
              tempCards.push(c);
            }
            cards = tempCards;
          } else cards.push(r);
        }
        return cards;
      }
      Rummy_GameHelper.NewTurnAtoforteen = NewTurnAtoforteen;
      function givePure(handCards, pureSeq, rouge) {
        var dupCards = [];
        var retInfo = {};
        var newHandCards = handCards.concat();
        for (var ipx = 0; ipx < pureSeq.length; ipx++) {
          var pure = pureSeq[ipx];
          for (var idx = 0; idx < handCards.length; idx++) {
            if (GetCardValuespecial(handCards[idx]) == rouge) continue;
            var copyPure = pure.concat();
            copyPure.push(handCards[idx]);
            copyPure = NewMeldsortcards(copyPure, rouge, 0);
            if (Isseq(copyPure) && !indexOf(dupCards, idx)) {
              pure.push(handCards[idx]);
              pureSeq[ipx] = pure;
              dupCards.push(idx);
              for (var inx = 0; inx < handCards.length; inx++) {
                var copySecPure = pure.concat();
                copySecPure.push(handCards[inx]);
                copySecPure = NewMeldsortcards(copySecPure, rouge, 0);
                if (Isseq(copySecPure) && !indexOf(dupCards, inx)) {
                  pure.push(handCards[inx]);
                  pureSeq[ipx] = pure;
                  dupCards.push(inx);
                }
              }
            }
          }
        }
        newHandCards = delDupCards(newHandCards, dupCards);
        retInfo["handCard"] = newHandCards;
        retInfo["pureSeqAssemble"] = pureSeq;
        return retInfo;
      }
      Rummy_GameHelper.givePure = givePure;
      function cardLogByValues(_cardValues, logPrefix, isPrint) {
        void 0 === logPrefix && (logPrefix = "");
        void 0 === isPrint && (isPrint = true);
        var logs = logPrefix;
        for (var i = 0; i < _cardValues.length; i++) {
          var _cardValue = _cardValues[i];
          logs += Rummy_GameHelper.cardLogByValue(_cardValue, "__", false);
        }
        isPrint && VV_1.vv.logger.log(logs);
        return logs;
      }
      Rummy_GameHelper.cardLogByValues = cardLogByValues;
      function cardLogByValue(_cardValue, logPrefix, isPrint) {
        void 0 === logPrefix && (logPrefix = "");
        void 0 === isPrint && (isPrint = true);
        var logColors = [ "\u65b9\u5757", "\u6885\u82b1", "\u7ea2\u6843", "\u9ed1\u6843" ];
        var logValue = {
          11: "J",
          12: "Q",
          13: "K",
          1: "A"
        };
        14 == _cardValue ? _cardValue = 1 : 30 == _cardValue ? _cardValue = 17 : 46 == _cardValue ? _cardValue = 33 : 62 == _cardValue && (_cardValue = 49);
        var CARD_VALUE = Rummy_GameHelper.CardTransfer.CARD_VALUE[_cardValue];
        var CARD_COLOR = Rummy_GameHelper.CardTransfer.CARD_COLOR[_cardValue];
        var log = logPrefix + logColors[CARD_COLOR] + ":" + (logValue[CARD_VALUE] ? logValue[CARD_VALUE] : CARD_VALUE);
        isPrint && VV_1.vv.logger.log(log);
        return log;
      }
      Rummy_GameHelper.cardLogByValue = cardLogByValue;
      function unique(arr) {
        return arr.filter(function(item, index, arr) {
          return arr.indexOf(item, 0) === index;
        });
      }
      Rummy_GameHelper.unique = unique;
      function mod(a, b) {
        return a - Math.floor(a / b) * b;
      }
      Rummy_GameHelper.mod = mod;
      function ceil(a, b) {
        return Math.ceil(a / b) - 1;
      }
      Rummy_GameHelper.ceil = ceil;
      function GetCardScore(nCardData) {
        var cardScore = null;
        var cardValue = Rummy_GameHelper.CardTransfer.CARD_VALUE[nCardData];
        cardScore = 1 == cardValue || 11 == cardValue || 12 == cardValue || 13 == cardValue ? 10 : cardValue;
        if (cardScore) return cardScore;
      }
      Rummy_GameHelper.GetCardScore = GetCardScore;
      function sortCardGroup(group) {
        var newGroup = group;
        for (var key in newGroup) newGroup[key].cards.length > 0 && (newGroup[key].cards = Newsortcards(newGroup[key].cards));
        return newGroup;
      }
      Rummy_GameHelper.sortCardGroup = sortCardGroup;
      function groupLimit(assemble, rouge) {
        assemble.sort(function(groupA, groupB) {
          var valueA = 0;
          1 == groupA.cards.length && (valueA = 1);
          var valueB = 0;
          1 == groupB.cards.length && (valueB = 1);
          return valueA - valueB;
        });
        var singleCards = [];
        while (1 == assemble[assemble.length - 1].cards.length) singleCards = singleCards.concat(assemble.pop().cards);
        if (singleCards.length) {
          var singleGroup = Checkwhatgroup(singleCards, rouge);
          singleGroup["cards"] = singleCards;
          assemble.push(singleGroup);
        }
        if (assemble.length > VV_1.vv.global.groupCountLimit) {
          var cards = [];
          while (assemble.length > VV_1.vv.global.groupCountLimit - 1) cards = cards.concat(assemble.pop().cards);
          var newGroup = Checkwhatgroup(cards, rouge);
          newGroup["cards"] = cards;
          assemble.push(newGroup);
        }
        return assemble;
      }
      Rummy_GameHelper.groupLimit = groupLimit;
    })(Rummy_GameHelper = exports.Rummy_GameHelper || (exports.Rummy_GameHelper = {}));
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  Rummy_GameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f11bnel9VJCbwAitgLM0Gc", "Rummy_GameMgr");
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
    var ErrorCode_1 = require("../../../scripts/components/ErrorCode");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var GameMgrBase_1 = require("../../../scripts/games/gameBase/GameMgrBase");
    var SystemOperation_1 = require("../../../scripts/platform/system/SystemOperation");
    var Rummy_ButtonMgr_1 = require("./Rummy_ButtonMgr");
    var Rummy_Card_1 = require("./Rummy_Card");
    var Rummy_CardGroup_1 = require("./Rummy_CardGroup");
    var Rummy_CardMgr_1 = require("./Rummy_CardMgr");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var Rummy_MsgID_1 = require("./Rummy_MsgID");
    var Rummy_PlayerMgr_1 = require("./Rummy_PlayerMgr");
    var Rummy_TableMgr_1 = require("./Rummy_TableMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_GameMgr = function(_super) {
      __extends(Rummy_GameMgr, _super);
      function Rummy_GameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TableMgr = null;
        _this.CardMgr = null;
        _this.PlayerMgr = null;
        _this.BtnMgr = null;
        _this.tableState = {
          state: null,
          state_time: null
        };
        _this.tableInfo = null;
        _this.isMyTurn = false;
        _this.operateType = 0;
        _this.outEventCout = 0;
        _this.outCard = null;
        _this.MINI_CARD_SCALE = .65;
        _this.SEND_CARD_SCALE = 1;
        _this.isEnterTp = false;
        _this.handCardOffX = 80;
        _this.maxHandCardsWidth = Math.min(1230, cc.winSize.width - 50);
        _this.TURN_OVER_CARD_SCALE = 1.1;
        _this._round = 0;
        _this.TotalSettleData = null;
        _this.settleData = null;
        _this.play_type = Rummy_EnumMgr_1.ePLAY_Type.POINT;
        _this.room_type = Rummy_EnumMgr_1.eROOM_TYPE.CASH;
        _this.netTimers = [];
        _this.netTimerKeys = {
          JoinTable: true,
          LeaveTable: true,
          PlayerOption: true,
          PlayerDeclare: true,
          GetGameRecord: true,
          GetBonusCards: true,
          ChangedTable: true
        };
        return _this;
      }
      Rummy_GameMgr.prototype.onLoad = function() {};
      Rummy_GameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.Rummy,
                  room_id: VV_1.vv.enterGameMgr.getRoomInfo().room_id
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) {
                VV_1.vv.enterGameMgr.getRoomInfo().play_type && (this.play_type = this.getPlayTypeByStr(VV_1.vv.enterGameMgr.getRoomInfo().play_type));
                VV_1.vv.enterGameMgr.getRoomInfo().room_type && (this.room_type = VV_1.vv.enterGameMgr.getRoomInfo().room_type);
                this.isPractice() && (VV_1.vv.global.pCoinRummy = 2e5);
                VV_1.vv.netMgr.send(Rummy_MsgID_1.RUMMY_MSG_REQ_ID.MSG_JOINTABLE_REQ, {});
                this.BtnMgr.dropLabel.node.active = this.play_type == Rummy_EnumMgr_1.ePLAY_Type.POINT && !this.isPractice();
              } else {
                VV_1.vv.logger.warn("\u8fdb\u5165rummy\u95f4\u5931\u8d25", data);
                this.exitTable();
              }
              return [ 3, 3 ];

             case 2:
              error_1 = _a.sent();
              VV_1.vv.logger.warn("\u8fdb\u5165rummy\u623f\u95f4\u5931\u8d25", error_1);
              this.exitTable();
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Rummy_GameMgr.prototype.addNetListener = function() {
        this.removeNetListener();
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOperateResponse, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_PLAYERDECLARE_RES, this.OnPlayerDeclareResponse, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_LEAVETABLE_BROADCAST, this.OnLeaveTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnPlayerJoinTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEDEALER_BROADCAST, this.OnTableDealerBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnDealingCardBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEPLAY_BROADCAST, this.OnTablePlayBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOperateBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_DECLAREPLAY_BROADCAST, this.OnPlayerDeclareBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLERESULT_BROADCAST, this.OnTableResultBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_ERROR_BROADCAST, this.OnErrorBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_GAMERESULT_BROADCAST, this.OnGameResultBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEROUND_BROADCAST, this.OnTableNumberBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_GETGAMERECORD_RES, this.OnGetGameRecordResponse, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEPRIZE_BROADCAST, this.OnTablePrizeBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_CHANGTABLE_RES, this.OnChangedTableResponse, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_PLAYEROFFLINE_BROADCAST, this.OnPlayerOfflineBroadCast, this);
        VV_1.vv.netMgr.addHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_REJOINTABLE_RES, this.onReConnectResponse, this);
      };
      Rummy_GameMgr.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_JOINTABLE_RES, this.OnJoinTableResponse, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_LEAVETABLE_RES, this.OnLeaveTableResponse, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_PLAYEROPTION_RES, this.OnPlayerOperateResponse, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_PLAYERDECLARE_RES, this.OnPlayerDeclareResponse, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_LEAVETABLE_BROADCAST, this.OnLeaveTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLESTATE_BROADCAST, this.OnTableStateBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_JOINTABLE_BROADCAST, this.OnPlayerJoinTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEDEALER_BROADCAST, this.OnTableDealerBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_DEALINGCARD_BROADCAST, this.OnDealingCardBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLERESULT_BROADCAST, this.OnTableResultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_PLAYEROPTION_BROADCAST, this.OnPlayerOperateBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_ERROR_BROADCAST, this.OnErrorBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_DECLAREPLAY_BROADCAST, this.OnPlayerDeclareBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_GAMERESULT_BROADCAST, this.OnGameResultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEROUND_BROADCAST, this.OnTableNumberBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_GETGAMERECORD_RES, this.OnGetGameRecordResponse, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEPLAY_BROADCAST, this.OnTablePlayBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_TABLEPRIZE_BROADCAST, this.OnTablePrizeBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_CHANGTABLE_RES, this.OnChangedTableResponse, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_BROADCAST.MSG_PLAYEROFFLINE_BROADCAST, this.OnPlayerOfflineBroadCast, this);
        VV_1.vv.netMgr.removeHandler(Rummy_MsgID_1.RUMMY_MSG_RES_ID.MSG_REJOINTABLE_RES, this.onReConnectResponse, this);
      };
      Rummy_GameMgr.prototype.getPlayTypeByStr = function(type) {
        switch (type) {
         case "point":
          return Rummy_EnumMgr_1.ePLAY_Type.POINT;

         case "pool":
          return Rummy_EnumMgr_1.ePLAY_Type.POOL;

         case "deals":
          return Rummy_EnumMgr_1.ePLAY_Type.DEAL;
        }
      };
      Rummy_GameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      Object.defineProperty(Rummy_GameMgr.prototype, "round", {
        get: function() {
          return this._round;
        },
        set: function(value) {
          this._round = value;
          this.isDeclare ? this.BtnMgr.dropLabel.string = "\u20b9" + VV_1.vv.tools.keepTwoDecimalFull(80 * this.tableInfo.score / VV_1.vv.global.exchange_rate) : this.BtnMgr.dropLabel.string = "\u20b9" + VV_1.vv.tools.keepTwoDecimalFull(this.tableInfo.score * (0 == this._round ? 20 : 40) / VV_1.vv.global.exchange_rate);
        },
        enumerable: false,
        configurable: true
      });
      Rummy_GameMgr.prototype.reset = function() {
        this.round = 0;
        this.operateType = 0;
        this.isMyTurn = false;
        this.CardMgr.reset();
        this.TableMgr.reset();
        this.PlayerMgr.reset();
        this.BtnMgr.reset();
        this.outCard && this.outCard.destroy();
        this.outCard = null;
        this.isDeclare = false;
        this.declearPlayer = null;
      };
      Rummy_GameMgr.prototype.OnPlayerOfflineBroadCast = function(data) {
        VV_1.vv.logger.log("\u79bb\u7ebf\u5e7f\u64ad", data);
        data.player_id && this.PlayerMgr.setOfflineSByUserID(data.player_id);
      };
      Rummy_GameMgr.prototype.OnChangedTableResponse = function(data) {
        VV_1.vv.logger.log("\u5207\u6362\u724c\u684c\u8fd4\u56de", data);
        1 == data.status ? this.reset() : VV_1.vv.toast.show(I18n_1.I18n.getText("toast.switchTableFail"));
      };
      Rummy_GameMgr.prototype.OnTablePrizeBroadCast = function(data) {
        VV_1.vv.logger.log("\u623f\u95f4\u5956\u52b1\u5e7f\u64ad", data);
        this.TableMgr.setTablePrize(data.prize);
      };
      Rummy_GameMgr.prototype.OnGetGameRecordResponse = function(data) {
        VV_1.vv.logger.log("\u8fd4\u56de\u724c\u684c\u6e38\u620f\u8bb0\u5f55\u4fe1\u606f", data);
        if (!data || !data.records || !data.records.length) {
          data = {};
          data.players = this.PlayerMgr.getPlayerInfo();
        }
        this.TableMgr.showScoreWindow(data);
      };
      Rummy_GameMgr.prototype.OnTableNumberBroadCast = function(data) {
        VV_1.vv.logger.log("\u724c\u684c\u5c40\u6570\u5e7f\u64ad", data);
        this.TableMgr.updateTableNumber(data.table_number);
      };
      Rummy_GameMgr.prototype.OnGameResultBroadCast = function(data) {
        VV_1.vv.logger.log("\u6536\u5230\u6700\u7ec8\u7ed3\u7b97\u5e7f\u64ad", data);
        this.TotalSettleData = data;
        this.TableMgr.getSettleTS() && this.TableMgr.getSettleTS().totalSettle();
      };
      Rummy_GameMgr.prototype.OnErrorBroadCast = function(data) {
        if (10002e3 == data.error_code) {
          this.OnLeaveTableResponse({
            status: 1
          });
          return;
        }
        data.error_code && VV_1.vv.toast.show(" " + ErrorCode_1.ErrorCode[data.error_code].en);
      };
      Rummy_GameMgr.prototype.OnTableResultBroadCast = function(data) {
        VV_1.vv.logger.log("\u6536\u5230\u7ed3\u7b97\u5e7f\u64ad", data);
        this.settleData = data;
        if (data) {
          data.table_number = this.TableMgr.tableInfo.table_number;
          this.TableMgr.showSettle(data);
        }
        if (this.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL || this.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL) for (var i = 0; i < data.results.length; i++) {
          var userData = data.results[i];
          this.PlayerMgr.setPTSByUserID(userData.player_id, userData.total_score);
        }
        this.reset();
      };
      Rummy_GameMgr.prototype.OnPlayerDeclareResponse = function(data) {
        1 == data.status ? VV_1.vv.logger.log("\u5ba3\u544a\u6210\u529f") : VV_1.vv.logger.log("\u5ba3\u544a\u5931\u8d25");
      };
      Rummy_GameMgr.prototype.OnPlayerDeclareBroadCast = function(data) {
        if (data) {
          if (data.player_id == VV_1.vv.userMgr.player_id) {
            this.BtnMgr.showDeclareBtn(true);
            this.PlayerMgr.stopAllCountTime();
            var time = data.time ? data.time - 2 : 28;
            this.BtnMgr.updateDeclareText(time);
            this.isDeclare = true;
            this.BtnMgr.dropLabel.string = "\u20b9" + VV_1.vv.tools.keepTwoDecimalFull(80 * this.tableInfo.score / VV_1.vv.global.exchange_rate);
          }
          this.BtnMgr.updateOperateBtnByName([]);
        }
      };
      Rummy_GameMgr.prototype.OnPlayerOperateResponse = function(data) {
        var _this = this;
        VV_1.vv.logger.log("\u81ea\u5df1\u64cd\u4f5c\u4e4b\u540e\u8fd4\u56de: ", data);
        if (data) if (1 == data.option || 2 == data.option) {
          this.round += 1;
          var cardvalue_1 = data.card;
          if (cardvalue_1) {
            this.CardMgr.lightCardGroup(this.isMyTurn, [ "openDeck", "finishSlot" ]);
            var cWPos = this.CardMgr.getGoalWPosByOption(data.option);
            var LastGroupCardWPos = this.CardMgr.getLastGroupCardWPos();
            VV_1.vv.audioMgr.playSound("card");
            this.CardMgr.newCardMoveAni(cardvalue_1, cWPos, LastGroupCardWPos, function() {
              _this.operateType = 1;
              _this.CardMgr.selfGetCard(cardvalue_1);
            }, this.MINI_CARD_SCALE, 1, Rummy_EnumMgr_1.eFLY_CARD_ANI.START_SHOW, 0, void 0, void 0, 1 == data.option);
            2 == data.option && this.CardMgr.shiftOutCard(VV_1.vv.userMgr.player_id);
          }
        } else if (5 == data.option || 4 == data.option) {
          ++this.CardMgr.tableRound;
          this.isMyTurn = false;
          this.operateType = 0;
          var outCardData = this.CardMgr.outCardData;
          var cardValue_1 = outCardData.cardValue;
          var outCardWPos = outCardData.cardWPos;
          this.CardMgr.selfOutCard();
          var goalWPos = this.CardMgr.getGoalWPosByOption(data.option);
          VV_1.vv.audioMgr.playSound("card");
          if (this.CardMgr.operateType == Rummy_EnumMgr_1.eOPERATE_Type.CLICK) this.CardMgr.newCardMoveAni(cardValue_1, outCardWPos, goalWPos, function() {
            _this.CardMgr.updateOutCard(cardValue_1, data.option, VV_1.vv.userMgr.player_id);
          }, 1, this.MINI_CARD_SCALE, Rummy_EnumMgr_1.eFLY_CARD_ANI.START_SHOW, 0); else {
            this.outCardEvent(cardValue_1, data.option);
            this.CardMgr.updateOutCard(cardValue_1, data.option, VV_1.vv.userMgr.player_id);
          }
          4 == data.option && (this.declearPlayer = VV_1.vv.userMgr.player_id);
        } else if (3 == data.option && this.PlayerMgr.getPlayerCount() > 2) {
          this.PlayerMgr.setDroppedByUserID(VV_1.vv.userMgr.player_id);
          this.CardMgr.showCardGroupMask();
          ++this.CardMgr.tableRound;
        }
      };
      Rummy_GameMgr.prototype.outCardEvent = function(cardValue, option, card) {
        card && (this.outCard = card);
        this.outEventCout += 1;
        if (3 == this.outEventCout) {
          this.CardMgr.updateOutCard(cardValue, option);
          this.outCard && this.outCard.destroy();
          this.outCard = null;
        }
      };
      Rummy_GameMgr.prototype.outCardReset = function(error_code) {
        if (this.outCard) {
          if (10002007 == error_code) {
            this.outCard && this.outCard.destroy();
            this.outCard = null;
            return;
          }
          var cardTS = this.outCard.getComponent(Rummy_Card_1.default);
          var cardGroups = this.CardMgr.getCardGroups();
          var cardGroupTS = cardGroups[cardGroups.length - 1].getComponent(Rummy_CardGroup_1.default);
          cardGroupTS.addCard(this.outCard);
          cardTS.setOriginGroup(cardGroupTS);
          cardGroupTS.updateCardsData();
          cardTS.resetCardPos();
          this.outCard = null;
        }
      };
      Rummy_GameMgr.prototype.OnPlayerOperateBroadCast = function(data) {
        var _this = this;
        VV_1.vv.logger.log("\u73a9\u5bb6\u64cd\u4f5c\u4e4b\u540e\u5e7f\u64ad: ", data);
        if (3 == data.option && data.player_id) {
          this.PlayerMgr.setDroppedByUserID(data.player_id);
          data.player_id == VV_1.vv.userMgr.player_id && this.PlayerMgr.getPlayerCount() > 2 && this.CardMgr.showCardGroupMask();
        }
        if (data.player_id == VV_1.vv.userMgr.player_id) return;
        if (1 == data.option || 2 == data.option || 8 == data.option) {
          var cWPos = this.CardMgr.getGoalWPosByOption(data.option);
          var goalWPos = this.PlayerMgr.getViewWPosByUserId(data.player_id);
          VV_1.vv.audioMgr.playSound("card");
          if (1 == data.option) this.CardMgr.newCardMoveAni(data.card, cWPos, goalWPos, null, this.MINI_CARD_SCALE, .4, Rummy_EnumMgr_1.eFLY_CARD_ANI.NORMAL); else {
            var card = this.CardMgr.sendCardNode.children[0].getComponent(Rummy_Card_1.default).getCardData();
            this.CardMgr.newCardMoveAni(card, cWPos, goalWPos, null, this.MINI_CARD_SCALE, .4, Rummy_EnumMgr_1.eFLY_CARD_ANI.START_SHOW);
            this.CardMgr.shiftOutCard(data.player_id);
          }
        } else if ((5 == data.option || 4 == data.option) && data.card) {
          var operateWPos = this.PlayerMgr.getViewWPosByUserId(data.player_id);
          var goalWPos = this.CardMgr.getGoalWPosByOption(data.option);
          VV_1.vv.audioMgr.playSound("card");
          this.CardMgr.newCardMoveAni(data.card, operateWPos, goalWPos, function() {
            _this.CardMgr.updateOutCard(data.card, data.option, data.player_id);
          }, .4, this.MINI_CARD_SCALE, Rummy_EnumMgr_1.eFLY_CARD_ANI.START_SHOW, 0);
        }
      };
      Rummy_GameMgr.prototype.OnTablePlayBroadCast = function(data) {
        if (data) {
          var logicSeat = data.pos;
          var operateTime = data.time;
          logicSeat && logicSeat == this.PlayerMgr.getMySeat() ? this.isMyTurn = true : this.isMyTurn = false;
          if (this.isMyTurn) {
            data.cards && (data.cards.length >= 14 ? this.operateType = 1 : this.operateType = 0);
            VV_1.vv.audioMgr.settings.shake && SystemOperation_1.SystemOperation.startShake(1e3);
            VV_1.vv.audioMgr.playSound("outCardStart");
          }
          this.CardMgr.updateOperateBtn();
          0 == this.operateType ? this.CardMgr.lightCardGroup(this.isMyTurn, [ "closeDeck", "openDeck" ]) : this.CardMgr.lightCardGroup(this.isMyTurn, [ "finishSlot", "openDeck" ]);
          this.PlayerMgr.playerOperateCDStart(logicSeat, operateTime);
        }
      };
      Rummy_GameMgr.prototype.OnDealingCardBroadCast = function(data) {
        VV_1.vv.logger.log("\u53d1\u724c\u6570\u636e\uff1a ", data);
        this.CardMgr.removeDealerUI();
        this.CardMgr.sendCard(data);
        this.PlayerMgr.resetBackTime();
      };
      Rummy_GameMgr.prototype.OnTableDealerBroadCast = function(data) {
        if (data.info) {
          this.CardMgr.OnDealer(data.info);
          !this.isPractice() || this.play_type != Rummy_EnumMgr_1.ePLAY_Type.POOL && this.play_type != Rummy_EnumMgr_1.ePLAY_Type.DEAL || this.TableMgr.setTablePrize(Math.round(data.info.length * VV_1.vv.global.prize * 100), 2);
        }
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.RUMMY_GAME_START, {
          result: this.isPractice() ? "non_cash" : "cash"
        });
        if (VV_1.vv.analysis.startTimers.rummyEnter) {
          var cost = Date.now() - VV_1.vv.analysis.startTimers.rummyEnter;
          VV_1.vv.logger.log("otp -> rummyEnter cost:", cost / 1e3);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.RUMMY_GAME_START_COST, {
            cost: String(cost / 1e3)
          });
          VV_1.vv.analysis.startTimers.rummyEnter = null;
        }
        VV_1.vv.analysis.startTimers.rummygameComplete = Date.now();
      };
      Rummy_GameMgr.prototype.OnPlayerJoinTableBroadCast = function(data) {
        null != data.player && this.PlayerMgr.updatePlayerInfo(data.player);
      };
      Rummy_GameMgr.prototype.OnTableStateBroadCast = function(data) {
        if (data) {
          this.tableState.state = data.state;
          this.tableState.state_time = data.state_time;
          3 == this.tableState.state && this.TableMgr.hideSettle();
          1 == this.tableState.state || 2 == this.tableState.state || 7 == this.tableState.state || 9 == this.tableState.state ? this.TableMgr.updateTableState(this.tableState.state, this.tableState.state_time) : this.TableMgr.updateTableState(this.tableState.state, 0);
        }
      };
      Rummy_GameMgr.prototype.OnLeaveTableResponse = function(data) {
        1 == data.status && this.exitTable();
      };
      Rummy_GameMgr.prototype.OnLeaveTableBroadCast = function(data) {
        VV_1.vv.logger.log("\u6709\u73a9\u5bb6\u79bb\u5f00\u6e38\u620f\u4e86\uff1a", data);
        if (data.player_id) if (data.player_id == VV_1.vv.userMgr.player_id) {
          this.TotalSettleData || this.settleData || this.exitTable();
          this.isGoHall = true;
        } else this.PlayerMgr.removePlayer(data.player_id);
      };
      Rummy_GameMgr.prototype.OnJoinTableResponse = function(data) {
        if (null != data) {
          this.tableInfo = VV_1.vv.uiMgr.deepClone(data.table_info);
          this.initTableInfo(this.tableInfo);
          this.PlayerMgr.initPlayer(this.tableInfo.players);
        }
        this.round = 0;
      };
      Rummy_GameMgr.prototype.onReConnectResponse = function(data) {
        VV_1.vv.logger.log("\u91cd\u8fde\u8fdb\u5165\u724c\u684c\uff1a", data);
        if (null != data) {
          if (data.table_info) {
            this.tableInfo = VV_1.vv.uiMgr.deepClone(data.table_info);
            this.initTableInfo(this.tableInfo);
            this.PlayerMgr.initPlayer(this.tableInfo.players);
          }
          this.CardMgr.initReConnect(data);
          data.pos && data.time && this.OnTablePlayBroadCast({
            pos: data.pos,
            time: data.time,
            cards: data.cards
          });
          this.BtnMgr.showAutoSortBtn(true);
        }
      };
      Rummy_GameMgr.prototype.initTableInfo = function(data) {
        if (null != data) {
          VV_1.vv.logger.log("\u724c\u684c\u6d88\u606f\uff1a", data);
          this.TableMgr.updateTableInfo(data);
        }
      };
      Rummy_GameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/TableLayer").getComponent(Rummy_TableMgr_1.default);
        this.PlayerMgr = cc.find("Canvas/PlayerLayer").getComponent(Rummy_PlayerMgr_1.default);
        this.CardMgr = cc.find("Canvas/CardLayer").getComponent(Rummy_CardMgr_1.default);
        this.BtnMgr = cc.find("Canvas/ButtonLayer").getComponent(Rummy_ButtonMgr_1.default);
      };
      Rummy_GameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
        VV_1.vv.audioMgr.stopAll();
      };
      Rummy_GameMgr.prototype.isPractice = function() {
        return 2 == this.room_type;
      };
      Rummy_GameMgr.prototype.updatepCoin = function(value) {
        VV_1.vv.global.pCoinRummy += value;
        VV_1.vv.global.pCoinRummy = Math.round(100 * VV_1.vv.global.pCoinRummy) / 100;
        VV_1.vv.logger.log("----------\u7ec3\u4e60\u573a\u91d1\u5e01----------", VV_1.vv.global.pCoinRummy);
        VV_1.vv.global.pCoinRummy > 0 ? this.PlayerMgr.updateCoin(VV_1.vv.global.pCoinRummy, 2) : VV_1.vv.netMgr.send(Rummy_MsgID_1.RUMMY_MSG_REQ_ID.MSG_LEAVETABLE_REQ, {});
      };
      Rummy_GameMgr.prototype.onBtnBack = function() {
        VV_1.vv.netMgr.send(Rummy_MsgID_1.RUMMY_MSG_REQ_ID.MSG_LEAVETABLE_REQ, {});
      };
      Rummy_GameMgr.prototype.onBtnSwitch = function() {
        VV_1.vv.netMgr.send(Rummy_MsgID_1.RUMMY_MSG_REQ_ID.MSG_CHANGTABLE_REQ, {});
      };
      Rummy_GameMgr.prototype.onDeclareCallBack = function() {
        var msg = {
          groups: []
        };
        msg.groups = this.CardMgr.getDeclareGroup();
        VV_1.vv.netMgr.send(Rummy_MsgID_1.RUMMY_MSG_REQ_ID.MSG_PLAYERDECLARE_REQ, msg);
        VV_1.vv.logger.log("\u53d1\u9001\u5ba3\u544a\u6d88\u606f: ", msg);
      };
      Rummy_GameMgr.prototype.operateCallBack = function(operateType, okCall, cancelCall) {
        var _this = this;
        if (!this.isMyTurn) {
          VV_1.vv.toast.show(I18n_1.I18n.getText("toast.pleaseWaitYourTurn"));
          return;
        }
        var msg_1 = {
          option: null,
          card: null,
          groups: []
        };
        if (null == operateType) return;
        msg_1.option = operateType;
        switch (operateType) {
         case 3:
          VV_1.vv.alert.show({
            content: I18n_1.I18n.getText("alert.drop.content"),
            okText: I18n_1.I18n.getText("alert.drop.okText"),
            okCB: function() {
              _this.sendPlayerOptionRequest(msg_1);
            }
          });
          break;

         case 4:
          if (1 != this.operateType) {
            VV_1.vv.logger.log("\u672a\u6478\u724c\uff0c\u5ffd\u7565");
            return;
          }
          if (!this.CardMgr.canOutCard()) {
            VV_1.vv.logger.log("\u8be5\u56de\u5408\u91cd\u590d\u53d1\u9001\u51fa\u724c\u6d88\u606f\uff01", this.CardMgr.outCardData);
            return;
          }
          this.CardMgr.calculationFinish();
          if (this.CardMgr.canFinish) {
            this.CardMgr.updateOutCardData();
            okCall && okCall();
            var cardValue = this.CardMgr.getCurSelectCardValue();
            msg_1.card = cardValue;
            msg_1.groups = this.CardMgr.getFinishCardGroupData(cardValue);
            this.sendPlayerOptionRequest(msg_1);
          } else VV_1.vv.alert.show({
            content: I18n_1.I18n.getText("alert.pointsZero.content"),
            cancelCB: function() {
              cancelCall && cancelCall();
            },
            showOkBtn: false
          });
          break;

         case 5:
          if (1 != this.operateType) {
            VV_1.vv.logger.log("\u672a\u6478\u724c\uff0c\u5ffd\u7565");
            return;
          }
          if (!this.CardMgr.canOutCard()) {
            VV_1.vv.logger.log("\u8be5\u56de\u5408\u91cd\u590d\u53d1\u9001\u51fa\u724c\u6d88\u606f\uff01", this.CardMgr.outCardData);
            return;
          }
          this.CardMgr.updateOutCardData();
          msg_1.card = this.CardMgr.getCurSelectCardValue();
          this.sendPlayerOptionRequest(msg_1);
          break;

         default:
          this.sendPlayerOptionRequest(msg_1);
        }
      };
      Rummy_GameMgr.prototype.sendPlayerOptionRequest = function(msg) {
        VV_1.vv.netMgr.send(Rummy_MsgID_1.RUMMY_MSG_REQ_ID.MSG_PLAYEROPTION_REQ, msg);
      };
      Rummy_GameMgr.prototype.deleteStrByStr = function(value, deleteValue) {
        return value.replace(new RegExp(deleteValue, "g"), "");
      };
      Rummy_GameMgr.prototype.addNetDelayedTimer = function(msgId) {
        var key = this.deleteStrByStr(msgId, "Request");
        if (!this.netTimerKeys[key]) return;
        var timerData = new TimerData();
        timerData.netKey = key;
        timerData.timerId = ++this._timeID;
        timerData.msgId = msgId;
        this.netTimers.push(timerData);
        VV_1.vv.logger.log("++++++addNetDelayedTimer++++++", timerData.msgId);
      };
      Rummy_GameMgr.prototype.deleteNetDelayedTimer = function(msgId) {
        "ReJoinTableResponse" == msgId && (msgId = "JoinTableResponse");
        var key = this.deleteStrByStr(msgId, "Response");
        if (!this.netTimerKeys[key]) return;
        for (var i = 0; i < this.netTimers.length; i++) {
          var timerData = this.netTimers[i];
          if (timerData.netKey == key) {
            this.netTimers.splice(i, 1);
            VV_1.vv.logger.log("------deleteNetDelayedTimer------", timerData.msgId);
            break;
          }
        }
      };
      Rummy_GameMgr.prototype.netTimeout = function(timerData) {
        VV_1.vv.toast.show(I18n_1.I18n.getText("toast.pleaseWait"));
        VV_1.vv.logger.log("------netTimeout------", timerData.msgId);
      };
      Rummy_GameMgr.prototype.update = function(dt) {
        var _this = this;
        this.netTimers = this.netTimers.filter(function(timerData) {
          timerData.countTime -= dt;
          if (timerData.countTime <= 0) {
            _this.netTimeout(timerData);
            return false;
          }
          return true;
        });
      };
      Rummy_GameMgr = __decorate([ ccclass ], Rummy_GameMgr);
      return Rummy_GameMgr;
    }(GameMgrBase_1.default);
    exports.default = Rummy_GameMgr;
    var TimerData = function() {
      function TimerData() {
        this._sgame_Nnrgaq = 1834;
        this._sgame_pLXp3l = 5173;
        this.countTime = 3;
        this.netKey = "";
        this.timerId = 0;
        this.msgId = "";
      }
      TimerData.prototype._sgame_vNazf0 = function() {
        var a = "o8a3z";
        var b = 840;
        return a.length + b;
      };
      return TimerData;
    }();
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/ErrorCode": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "../../../scripts/platform/system/SystemOperation": void 0,
    "./Rummy_ButtonMgr": "Rummy_ButtonMgr",
    "./Rummy_Card": "Rummy_Card",
    "./Rummy_CardGroup": "Rummy_CardGroup",
    "./Rummy_CardMgr": "Rummy_CardMgr",
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_MsgID": "Rummy_MsgID",
    "./Rummy_PlayerMgr": "Rummy_PlayerMgr",
    "./Rummy_TableMgr": "Rummy_TableMgr"
  } ],
  Rummy_History: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71392IsZlBMALUNl9VlHR1G", "Rummy_History");
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
    var Rummy_Card_1 = require("./Rummy_Card");
    var Rummy_GameHelper_1 = require("./Rummy_GameHelper");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var Init_Down_Pos = cc.v3(-351, 39, 0);
    var Card_Value_Str = {
      1: "A",
      11: "J",
      12: "Q",
      13: "K"
    };
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Card_Scale = .37;
    var Rummy_History = function(_super) {
      __extends(Rummy_History, _super);
      function Rummy_History() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cardPrefab = null;
        _this.historyItemPrefab = null;
        _this.sendCard = null;
        _this.middleScrollContent = null;
        _this.downNode = null;
        _this.topToggleNode = null;
        _this._cardsData = [];
        _this._selectPlayerId = null;
        return _this;
      }
      Rummy_History.prototype.onLoad = function() {
        this.initDownInfo();
        this.initFirstCard();
        this.initToggle();
      };
      Rummy_History.prototype.onDestroy = function() {};
      Rummy_History.prototype.reset = function() {
        this._cardsData = [];
        this.middleScrollContent.removeAllChildren();
        this.sendCard.removeAllChildren();
        this.downNode.removeAllChildren();
      };
      Rummy_History.prototype.initToggle = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var players = gameMgr.PlayerMgr.getPlayerInfo();
        for (var i = 0; i < players.length; i++) {
          var tg = cc.instantiate(this.topToggleNode);
          this.topToggleNode.parent.addChild(tg);
          tg.getComponent(cc.Toggle).uncheck();
          var labs = tg.getComponentsInChildren(cc.Label);
          for (var j = 0; j < labs.length; j++) {
            tg.name = "" + players[i].player_id;
            labs[j].string = players[i].player_id == VV_1.vv.userMgr.player_id ? "ME" : VV_1.vv.tools.transformNickName(players[i].nick, 8);
          }
        }
        this.topToggleNode.active = false;
        this.topToggleNode.parent.getComponent(cc.ToggleContainer).allowSwitchOff = false;
        this.topToggleNode.parent.children[1].getComponent(cc.Toggle).check();
        this._selectPlayerId = this.topToggleNode.parent.children[1].name;
      };
      Rummy_History.prototype.onClickUpHistoryToggle = function(event, data) {
        var player_id = event.target.name;
        if (!player_id) {
          VV_1.vv.logger.log("player_id null!");
          return;
        }
        this._selectPlayerId = player_id;
        this.middleScrollContent.removeAllChildren();
        var gameMgr = VV_1.vv.gameMgr;
        var cardData = gameMgr.CardMgr.playerOutCardHistory[player_id];
        if (cardData) for (var i = 0; i < cardData.length; i++) this.pushAHistory(cardData[i]);
      };
      Rummy_History.prototype.pushAHistory = function(cardData) {
        var card = cc.instantiate(this.cardPrefab);
        card.scale = Card_Scale;
        this.middleScrollContent.addChild(card);
        card.getComponent(Rummy_Card_1.default).setCardValue(cardData.cardValue);
        cardData.isPicked && card.getComponent(Rummy_Card_1.default).showGrayCover(true);
      };
      Rummy_History.prototype.initFirstCard = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var card = cc.instantiate(this.cardPrefab);
        card.scale = Card_Scale;
        this.sendCard.addChild(card);
        card.getComponent(Rummy_Card_1.default).setCardValue(gameMgr.CardMgr.firstOutCard);
      };
      Rummy_History.prototype.initDownInfo = function() {
        var gameMgr = VV_1.vv.gameMgr;
        var data = gameMgr.CardMgr.outCardList;
        for (var i = 0; i < data.length; i++) {
          var item = cc.instantiate(this.historyItemPrefab);
          this.downNode.addChild(item);
          this.setDownItemPosition(item, data[i]);
          this._cardsData.push(data[i]);
        }
      };
      Rummy_History.prototype.updateAInfo = function(playerid, _cardValue, isPickUp) {
        var gameMgr = VV_1.vv.gameMgr;
        var lastInfo = gameMgr.CardMgr.lastOutCardInfo;
        if (isPickUp) {
          this.downNode.children[this.downNode.childrenCount - 1].removeFromParent();
          this._cardsData.pop();
          if (!lastInfo) return;
          if (parseInt(this._selectPlayerId) == parseInt(lastInfo.playerid)) {
            if (this.middleScrollContent.childrenCount <= 0) return;
            var lastcard = this.middleScrollContent.children[this.middleScrollContent.childrenCount - 1];
            lastcard.getComponent(Rummy_Card_1.default).showGrayCover(true);
          }
        } else {
          var item = cc.instantiate(this.historyItemPrefab);
          this.downNode.addChild(item);
          this.setDownItemPosition(item, _cardValue);
          this._cardsData.push(_cardValue);
          if (parseInt(this._selectPlayerId) == parseInt(playerid)) {
            var cardData = gameMgr.CardMgr.playerOutCardHistory[playerid];
            this.pushAHistory(cardData[cardData.length - 1]);
          }
        }
      };
      Rummy_History.prototype.setDownItemPosition = function(item, _cardValue) {
        if (!_cardValue) {
          VV_1.vv.logger.log("card value is null");
          return;
        }
        14 == _cardValue ? _cardValue = 1 : 30 == _cardValue ? _cardValue = 17 : 46 == _cardValue ? _cardValue = 33 : 62 == _cardValue && (_cardValue = 49);
        var CARD_VALUE = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_VALUE[_cardValue];
        var CARD_COLOR = Rummy_GameHelper_1.Rummy_GameHelper.CardTransfer.CARD_COLOR[_cardValue];
        if (CARD_COLOR > 3) return;
        var line = 3 - CARD_COLOR;
        var col = 2 * (CARD_VALUE - 1) + (this.isOutCardRepeat(_cardValue) ? 1 : 0);
        item.position = cc.v3(Init_Down_Pos.x + col * (item.width + 2), Init_Down_Pos.y - line * (item.height + 2), 0);
        var vl = item.children[0].getComponent(cc.Label);
        vl.string = 1 == CARD_VALUE || CARD_VALUE > 10 ? Card_Value_Str[CARD_VALUE] : CARD_VALUE;
      };
      Rummy_History.prototype.isOutCardRepeat = function(cardValue) {
        for (var i = 0; i < this._cardsData.length; i++) if (this._cardsData[i] == cardValue) return true;
        return false;
      };
      Rummy_History.prototype.onClose = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Prefab) ], Rummy_History.prototype, "cardPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_History.prototype, "historyItemPrefab", void 0);
      __decorate([ property(cc.Node) ], Rummy_History.prototype, "sendCard", void 0);
      __decorate([ property(cc.Node) ], Rummy_History.prototype, "middleScrollContent", void 0);
      __decorate([ property(cc.Node) ], Rummy_History.prototype, "downNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_History.prototype, "topToggleNode", void 0);
      Rummy_History = __decorate([ ccclass ], Rummy_History);
      return Rummy_History;
    }(cc.Component);
    exports.default = Rummy_History;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./Rummy_Card": "Rummy_Card",
    "./Rummy_GameHelper": "Rummy_GameHelper"
  } ],
  Rummy_MsgID: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f8cfhAjo9C1JNFcjDB3QdI", "Rummy_MsgID");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RUMMY_MSG_BROADCAST = exports.RUMMY_MSG_RES_ID = exports.RUMMY_MSG_REQ_ID = void 0;
    var RUMMY_MSG_REQ_ID;
    (function(RUMMY_MSG_REQ_ID) {
      RUMMY_MSG_REQ_ID["MSG_JOINTABLE_REQ"] = "JoinTableRequest";
      RUMMY_MSG_REQ_ID["MSG_LEAVETABLE_REQ"] = "LeaveTableRequest";
      RUMMY_MSG_REQ_ID["MSG_PLAYEROPTION_REQ"] = "PlayerOptionRequest";
      RUMMY_MSG_REQ_ID["MSG_PLAYERDECLARE_REQ"] = "PlayerDeclareRequest";
      RUMMY_MSG_REQ_ID["MSG_GETGAMERECORD_REQ"] = "GetGameRecordRequest";
      RUMMY_MSG_REQ_ID["MSG_GETBONUSCARDS_REQ"] = "GetBonusCardsRequest";
      RUMMY_MSG_REQ_ID["MSG_CHANGTABLE_REQ"] = "ChangedTableRequest";
    })(RUMMY_MSG_REQ_ID = exports.RUMMY_MSG_REQ_ID || (exports.RUMMY_MSG_REQ_ID = {}));
    var RUMMY_MSG_RES_ID;
    (function(RUMMY_MSG_RES_ID) {
      RUMMY_MSG_RES_ID["MSG_JOINTABLE_RES"] = "JoinTableResponse";
      RUMMY_MSG_RES_ID["MSG_LEAVETABLE_RES"] = "LeaveTableResponse";
      RUMMY_MSG_RES_ID["MSG_PLAYEROPTION_RES"] = "PlayerOptionResponse";
      RUMMY_MSG_RES_ID["MSG_PLAYERDECLARE_RES"] = "PlayerDeclareResponse";
      RUMMY_MSG_RES_ID["MSG_GETGAMERECORD_RES"] = "GetGameRecordResponse";
      RUMMY_MSG_RES_ID["MSG_GETBONUSCARDS_RES"] = "GetBonusCardsResponse";
      RUMMY_MSG_RES_ID["MSG_CHANGTABLE_RES"] = "ChangedTableResponse";
      RUMMY_MSG_RES_ID["MSG_REJOINTABLE_RES"] = "ReJoinTableResponse";
    })(RUMMY_MSG_RES_ID = exports.RUMMY_MSG_RES_ID || (exports.RUMMY_MSG_RES_ID = {}));
    var RUMMY_MSG_BROADCAST;
    (function(RUMMY_MSG_BROADCAST) {
      RUMMY_MSG_BROADCAST["MSG_JOINTABLE_BROADCAST"] = "PlayerJoinTableBroadCast";
      RUMMY_MSG_BROADCAST["MSG_LEAVETABLE_BROADCAST"] = "PlayerLeaveTableBroadCast";
      RUMMY_MSG_BROADCAST["MSG_TABLESTATE_BROADCAST"] = "TableStateBroadCast";
      RUMMY_MSG_BROADCAST["MSG_TABLEDEALER_BROADCAST"] = "TableDealerBroadCast";
      RUMMY_MSG_BROADCAST["MSG_DEALINGCARD_BROADCAST"] = "TableDealingBroadCast";
      RUMMY_MSG_BROADCAST["MSG_TABLEPLAY_BROADCAST"] = "TablePlayBroadCast";
      RUMMY_MSG_BROADCAST["MSG_PLAYEROPTION_BROADCAST"] = "PlayerOptionBroadCast";
      RUMMY_MSG_BROADCAST["MSG_DECLAREPLAY_BROADCAST"] = "DeclarePlayBroadCast";
      RUMMY_MSG_BROADCAST["MSG_TABLERESULT_BROADCAST"] = "TableResultBroadCast";
      RUMMY_MSG_BROADCAST["MSG_ERROR_BROADCAST"] = "ErrorMessageBroadCast";
      RUMMY_MSG_BROADCAST["MSG_TABLEROUND_BROADCAST"] = "TableNumberBroadCast";
      RUMMY_MSG_BROADCAST["MSG_GAMERESULT_BROADCAST"] = "GameResultBroadCast";
      RUMMY_MSG_BROADCAST["MSG_GETBONUSCARDS_BROADCAST"] = "GameBonusCardsBroadCast";
      RUMMY_MSG_BROADCAST["MSG_TABLEPRIZE_BROADCAST"] = "TablePrizeBroadCast";
      RUMMY_MSG_BROADCAST["MSG_PLAYEROFFLINE_BROADCAST"] = "PlayerOfflineBroadCast";
    })(RUMMY_MSG_BROADCAST = exports.RUMMY_MSG_BROADCAST || (exports.RUMMY_MSG_BROADCAST = {}));
    cc._RF.pop();
  }, {} ],
  Rummy_OperateLight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b119dAwI1HKpGhxesK1AYv", "Rummy_OperateLight");
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
    var Rummy_OperateLight = function(_super) {
      __extends(Rummy_OperateLight, _super);
      function Rummy_OperateLight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tip = null;
        return _this;
      }
      Rummy_OperateLight.prototype.start = function() {
        if (this.tip) {
          this.tip.stopAllActions;
          this.tip.runAction(cc.repeatForever(cc.sequence(cc.moveTo(.5, cc.v2(0, 90)), cc.delayTime(.1), cc.moveTo(.5, cc.v2(0, 85)))));
        }
      };
      __decorate([ property(cc.Node) ], Rummy_OperateLight.prototype, "tip", void 0);
      Rummy_OperateLight = __decorate([ ccclass ], Rummy_OperateLight);
      return Rummy_OperateLight;
    }(cc.Component);
    exports.default = Rummy_OperateLight;
    cc._RF.pop();
  }, {} ],
  Rummy_PlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "995aflwQZJHOLeC3VR6aJC7", "Rummy_PlayerMgr");
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
    var Rummy_Player_1 = require("./Rummy_Player");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_PlayerMgr = function(_super) {
      __extends(Rummy_PlayerMgr, _super);
      function Rummy_PlayerMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerNodes = [];
        _this.playerPrefab = null;
        _this.selfPlayerPrefab = null;
        _this.MAX_PLAYER = 6;
        _this.mySeat = 1;
        _this.playerInfo = [];
        return _this;
      }
      Rummy_PlayerMgr.prototype.start = function() {};
      Rummy_PlayerMgr.prototype.reset = function() {
        for (var i = 0; i < this.playerNodes.length; i++) if (this.playerNodes[i].childrenCount > 0) {
          var playerTS = this.playerNodes[i].children[0].getComponent(Rummy_Player_1.default);
          playerTS.showBankerFlag(false);
          playerTS.stopOperateCD();
          playerTS.hideMask();
        }
      };
      Rummy_PlayerMgr.prototype.getPlayerInfo = function() {
        return this.playerInfo;
      };
      Rummy_PlayerMgr.prototype.getPlayerCount = function() {
        return this.playerInfo.length;
      };
      Rummy_PlayerMgr.prototype.initPlayer = function(players) {
        var gameMgr = VV_1.vv.gameMgr;
        for (var j = 0; j < this.playerNodes.length; j++) this.playerNodes[j].destroyAllChildren();
        this.playerInfo = VV_1.vv.uiMgr.deepClone(players);
        for (var i = 0; i < players.length; i++) if (players[i] && players[i].player_id == VV_1.vv.userMgr.player_id) {
          var playerData = players[i];
          this.mySeat = playerData.pos;
          break;
        }
        for (var j = 0; j < players.length; j++) {
          var playerData = players[j];
          var viewSeat = this.logicSeatToViewSeat(playerData.pos);
          var player = cc.instantiate(this.getPlayerPrefab(viewSeat));
          this.playerNodes[viewSeat - 1].addChild(player);
          player.getComponent(Rummy_Player_1.default).setPlayerInfo(playerData);
        }
      };
      Rummy_PlayerMgr.prototype.updatePlayerInfo = function(info) {
        if (-1 === this.getLogicSeatByUserID(info.player_id)) {
          this.playerInfo.push(info);
          var viewSeat = this.logicSeatToViewSeat(info.pos);
          var player = cc.instantiate(this.getPlayerPrefab(viewSeat));
          this.playerNodes[viewSeat - 1].destroyAllChildren();
          this.playerNodes[viewSeat - 1].addChild(player);
          player.getComponent(Rummy_Player_1.default).setPlayerInfo(info);
        } else this.setOfflineSByUserID(info.player_id, false);
        VV_1.vv.logger.log("\u6240\u6709\u7684\u73a9\u5bb6\u4fe1\u606f: ", this.playerInfo);
      };
      Rummy_PlayerMgr.prototype.removePlayer = function(userid) {
        VV_1.vv.logger.log("\u6240\u6709\u7684\u73a9\u5bb6\u4fe1\u606f: ", this.playerInfo);
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        playerNodeLayer && playerNodeLayer.destroyAllChildren();
        for (var i = 0; i < this.playerInfo.length; i++) if (this.playerInfo[i].player_id == userid) {
          this.playerInfo.splice(i, 1);
          break;
        }
        var gameMgr = VV_1.vv.gameMgr;
        this.playerInfo && this.playerInfo.length <= 1 && gameMgr.TableMgr.stopTableState();
      };
      Rummy_PlayerMgr.prototype.getPlayerPrefab = function(pos) {
        return 1 == pos ? this.selfPlayerPrefab : this.playerPrefab;
      };
      Rummy_PlayerMgr.prototype.setPTSByUserID = function(userid, pts) {
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setPTSByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(Rummy_Player_1.default);
        playerItemTS.setPTSLabel(pts || 0);
      };
      Rummy_PlayerMgr.prototype.setOfflineSByUserID = function(userid, isOffline) {
        void 0 === isOffline && (isOffline = true);
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setOfflineSByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(Rummy_Player_1.default);
        playerItemTS.setOffline(isOffline);
      };
      Rummy_PlayerMgr.prototype.setDroppedByUserID = function(userid, isDrop) {
        void 0 === isDrop && (isDrop = true);
        var playerNodeLayer = this.getPlayerNodeByUserId(userid);
        if (!playerNodeLayer) {
          console.warn("setDroppedByUserID--\u672a\u627e\u5230\u8be5\u73a9\u5bb6");
          return;
        }
        var playerItemTS = playerNodeLayer.children[0].getComponent(Rummy_Player_1.default);
        playerItemTS.setDropped(isDrop);
      };
      Rummy_PlayerMgr.prototype.updateScore = function(score) {
        this.playerNodes[0].children[0].getComponent(Rummy_Player_1.default).updateScore(score);
      };
      Rummy_PlayerMgr.prototype.updateCoin = function(coin, type) {
        void 0 === type && (type = 1);
        this.playerNodes[0].children[0].getComponent(Rummy_Player_1.default).updateCoin(coin, type);
      };
      Rummy_PlayerMgr.prototype.getMyNode = function() {
        return this.playerNodes[0];
      };
      Rummy_PlayerMgr.prototype.getPlayerNickNameByUserID = function(userid) {
        for (var i = 0; i < this.playerInfo.length; i++) if (userid == this.playerInfo[i].player_id) return this.playerInfo[i].nick;
      };
      Rummy_PlayerMgr.prototype.getMySeat = function() {
        return this.mySeat;
      };
      Rummy_PlayerMgr.prototype.getLogicSeatByUserID = function(userid) {
        for (var i = 0; i < this.playerInfo.length; i++) if (userid == this.playerInfo[i].player_id) return this.playerInfo[i].pos;
        return -1;
      };
      Rummy_PlayerMgr.prototype.getViewSeatByUserID = function(userid) {
        for (var i = 0; i < this.playerInfo.length; i++) if (userid == this.playerInfo[i].player_id) return this.logicSeatToViewSeat(this.playerInfo[i].pos);
        return -1;
      };
      Rummy_PlayerMgr.prototype.getViewWPosByUserId = function(userid) {
        var viewSeat = this.getViewSeatByUserID(userid);
        return -1 != viewSeat ? this.node.convertToWorldSpaceAR(this.playerNodes[viewSeat - 1].position) : this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
      };
      Rummy_PlayerMgr.prototype.getPlayerNodeByUserId = function(userid) {
        var viewSeat = this.getViewSeatByUserID(userid);
        return -1 != viewSeat ? this.playerNodes[viewSeat - 1] : null;
      };
      Rummy_PlayerMgr.prototype.checkPlayerIsExistByLogicSeat = function(logicSrat) {
        for (var i = 0; i < this.playerInfo.length; i++) if (logicSrat == this.playerInfo[i].pos) return true;
        return false;
      };
      Rummy_PlayerMgr.prototype.logicSeatToViewSeat = function(logicSeat) {
        return logicSeat && logicSeat > 0 ? (this.MAX_PLAYER - this.mySeat + logicSeat) % this.MAX_PLAYER + 1 : -1;
      };
      Rummy_PlayerMgr.prototype.showBankerFlag = function(userid) {
        var viewSeat = this.getViewSeatByUserID(userid);
        viewSeat && this.playerNodes[viewSeat - 1].children[0].getComponent(Rummy_Player_1.default).showBankerFlag(true);
      };
      Rummy_PlayerMgr.prototype.playerOperateCDStart = function(logicSeat, nTime) {
        if (this.checkPlayerIsExistByLogicSeat(logicSeat)) {
          var viewSeat = this.logicSeatToViewSeat(logicSeat);
          for (var i = 0; i < this.playerNodes.length; i++) i == viewSeat - 1 ? this.playerNodes[viewSeat - 1].children[0].getComponent(Rummy_Player_1.default).startOperateCD(nTime) : this.playerNodes[i].childrenCount > 0 && this.playerNodes[i].children[0].getComponent(Rummy_Player_1.default).stopOperateCD();
        }
      };
      Rummy_PlayerMgr.prototype.stopAllCountTime = function() {
        for (var i = 0; i < this.playerNodes.length; i++) if (this.playerNodes[i].childrenCount > 0) {
          var playerTS = this.playerNodes[i].children[0].getComponent(Rummy_Player_1.default);
          playerTS.stopOperateCD();
        }
      };
      Rummy_PlayerMgr.prototype.resetBackTime = function() {
        for (var i = 0; i < this.playerNodes.length; i++) this.playerNodes[i].childrenCount > 0 && this.playerNodes[i].children[0].getComponent(Rummy_Player_1.default).resetBackTime();
      };
      __decorate([ property(cc.Node) ], Rummy_PlayerMgr.prototype, "playerNodes", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_PlayerMgr.prototype, "playerPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_PlayerMgr.prototype, "selfPlayerPrefab", void 0);
      Rummy_PlayerMgr = __decorate([ ccclass ], Rummy_PlayerMgr);
      return Rummy_PlayerMgr;
    }(cc.Component);
    exports.default = Rummy_PlayerMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./Rummy_Player": "Rummy_Player"
  } ],
  Rummy_Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4be2aphl5BNLq6Ycea/kLuk", "Rummy_Player");
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
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var NetPic_1 = require("../../../scripts/components/hall/NetPic");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_Player = function(_super) {
      __extends(Rummy_Player, _super);
      function Rummy_Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.banker_flag = null;
        _this.countDown = null;
        _this.countProgress = null;
        _this.PTSLabel = null;
        _this.nick_name = null;
        _this.coin = null;
        _this.score = null;
        _this.bg = null;
        _this.coinLayout = null;
        _this.head = null;
        _this.txt_1 = null;
        _this.txt_2 = null;
        _this.maskNode = null;
        _this.maskLabel = null;
        _this.gridLine = null;
        _this.cashSP = null;
        _this.countTime = 30;
        _this.beginCountTime = false;
        _this.staticCountTime = 30;
        _this.refreshMoneyListener = null;
        _this.isPlayer = false;
        _this.PTSLabelInitData = {
          position: cc.v3(),
          anchorX: .5
        };
        _this.info = {
          player_id: null,
          nick: null,
          facelook: null,
          coin: null,
          score: null,
          pos: null,
          standby_time: null
        };
        _this.isLost = false;
        _this.countDownNum = 0;
        return _this;
      }
      Rummy_Player.prototype.onLoad = function() {
        this.PTSLabelInitData.position = this.PTSLabel.node.position;
        this.PTSLabelInitData.anchorX = this.PTSLabel.node.anchorX;
      };
      Rummy_Player.prototype.onDestroy = function() {
        this.isPlayer && VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
      };
      Rummy_Player.prototype.refreshMoney = function() {
        this.updateCoin(VV_1.vv.userMgr.coins);
      };
      Rummy_Player.prototype.getPlayerInfo = function() {
        return this.info;
      };
      Rummy_Player.prototype.setPlayerInfo = function(data) {
        var gameMgr = VV_1.vv.gameMgr;
        data.player_id && (this.info.player_id = data.player_id);
        if (VV_1.vv.userMgr.player_id == this.info.player_id) {
          this.isPlayer = true;
          this.refreshMoneyListener = this.refreshMoney.bind(this);
          VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoneyListener);
        }
        data.nick ? this.info.nick = data.nick : VV_1.vv.userMgr.player_id == this.info.player_id && (this.info.nick = VV_1.vv.userMgr.userName);
        data.facelook && (this.info.facelook = data.facelook);
        data.score && (this.info.score = data.score);
        data.pos && (this.info.pos = data.pos);
        data.standby_time ? this.info.standby_time = data.standby_time : this.info.standby_time = 30;
        this.txt_2.string = this.info.standby_time.toString();
        this.PTSLabel.node.active = gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL;
        this.coinLayout.active = !this.PTSLabel.node.active;
        var startPTS = 0;
        gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL && (startPTS = 80 * gameMgr.TableMgr.tableInfo.total_round);
        this.nick_name.string = VV_1.vv.tools.transformNickName(this.info.nick, 8);
        if (this.info.player_id == VV_1.vv.userMgr.player_id) {
          gameMgr.isPractice() ? this.updateCoin(VV_1.vv.global.pCoinRummy, 2) : this.updateCoin(VV_1.vv.userMgr.coins);
          this.score.string = "80";
          this.PTSLabel.string = "PTS:" + startPTS;
          this.head.showNetView(VV_1.vv.userMgr.headUrl);
        } else {
          this.bg.active = this.PTSLabel.node.active || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POINT;
          this.bg.anchorX = .5;
          this.coinLayout.active = false;
          this.score.node.active = false;
          this.PTSLabel.string = "PTS:" + startPTS;
          this.head.showNetView(data.facelook);
          this.gridLine.active = false;
        }
        if (1 == data.drop_state) {
          this.setDropped(true);
          VV_1.vv.userMgr.player_id == this.info.player_id && gameMgr.CardMgr.showCardGroupMask();
        }
        data.total_score && this.setPTSLabel(data.total_score);
      };
      Rummy_Player.prototype.updateScore = function(score) {
        score >= 80 && (score = 80);
        this.score.string = score;
      };
      Rummy_Player.prototype.updateCoin = function(coin, type) {
        void 0 === type && (type = 1);
        var gameMgr = VV_1.vv.gameMgr;
        if (gameMgr.room_type != type) return;
        this.coin.string = String(coin);
      };
      Rummy_Player.prototype.setPTSLabel = function(pts) {
        var gameMgr = VV_1.vv.gameMgr;
        this.PTSLabel.string = "PTS:" + pts;
        if (gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL) if (pts > gameMgr.TableMgr.tableInfo.dead_line) {
          this.isLost = true;
          this.maskNode.active = true;
          this.maskLabel.string = "LOST";
        } else this.isLost = false;
      };
      Rummy_Player.prototype.showBankerFlag = function(isShow) {
        this.banker_flag.active = isShow;
      };
      Rummy_Player.prototype.setOffline = function(isOffline) {
        if (this.isLost) return;
        this.maskNode.active = isOffline;
        this.maskLabel.string = "OUT";
      };
      Rummy_Player.prototype.setDropped = function(isDrop) {
        if (this.isLost) return;
        this.maskNode.active = isDrop;
        this.maskLabel.string = "DROP";
      };
      Rummy_Player.prototype.hideMask = function() {
        if (this.isLost) return;
        this.maskNode.active = false;
      };
      Rummy_Player.prototype.countDownCB = function() {
        this.txt_1.string = Math.round(this.countTime).toString();
        this.countProgress.progress = this.countTime / this.staticCountTime;
        if (2 == this.countDownNum) {
          this.info.standby_time = Math.round(this.countTime);
          this.txt_2.string = Math.round(this.countTime).toString();
        }
      };
      Rummy_Player.prototype.startOperateCD = function(nTime) {
        this.countDownNum += 1;
        this.countTime = Number(nTime);
        this.staticCountTime = this.countTime;
        this.beginCountTime = true;
        this.countDown.active = true;
      };
      Rummy_Player.prototype.stopOperateCD = function() {
        this.beginCountTime = false;
        this.countDown.active = false;
        this.countTime = 30;
        this.countDownNum = 0;
        this.txt_1.string = this.countTime.toString();
        this.txt_2.string = this.info.standby_time.toString();
      };
      Rummy_Player.prototype.resetBackTime = function() {
        this.info.standby_time = 30;
        this.txt_2.string = this.info.standby_time.toString();
      };
      Rummy_Player.prototype.update = function(dt) {
        if (this.beginCountTime) {
          this.countTime -= dt;
          this.countTime <= 0 && (this.countTime = 0);
          this.countDownCB();
          !this.countTime && (this.beginCountTime = false);
        }
      };
      __decorate([ property(cc.Node) ], Rummy_Player.prototype, "banker_flag", void 0);
      __decorate([ property(cc.Node) ], Rummy_Player.prototype, "countDown", void 0);
      __decorate([ property(cc.ProgressBar) ], Rummy_Player.prototype, "countProgress", void 0);
      __decorate([ property(cc.Label) ], Rummy_Player.prototype, "PTSLabel", void 0);
      __decorate([ property(cc.Label) ], Rummy_Player.prototype, "nick_name", void 0);
      __decorate([ property(cc.Label) ], Rummy_Player.prototype, "coin", void 0);
      __decorate([ property(cc.Label) ], Rummy_Player.prototype, "score", void 0);
      __decorate([ property(cc.Node) ], Rummy_Player.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], Rummy_Player.prototype, "coinLayout", void 0);
      __decorate([ property(NetPic_1.default) ], Rummy_Player.prototype, "head", void 0);
      __decorate([ property(cc.Label) ], Rummy_Player.prototype, "txt_1", void 0);
      __decorate([ property(cc.Label) ], Rummy_Player.prototype, "txt_2", void 0);
      __decorate([ property(cc.Node) ], Rummy_Player.prototype, "maskNode", void 0);
      __decorate([ property(cc.Label) ], Rummy_Player.prototype, "maskLabel", void 0);
      __decorate([ property(cc.Node) ], Rummy_Player.prototype, "gridLine", void 0);
      __decorate([ property(cc.Sprite) ], Rummy_Player.prototype, "cashSP", void 0);
      Rummy_Player = __decorate([ ccclass ], Rummy_Player);
      return Rummy_Player;
    }(cc.Component);
    exports.default = Rummy_Player;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "./Rummy_EnumMgr": "Rummy_EnumMgr"
  } ],
  Rummy_PracticeItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6569fBzFb1BTpljnFWKuQSm", "Rummy_PracticeItem");
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
    var Rummy_PracticeItem = function(_super) {
      __extends(Rummy_PracticeItem, _super);
      function Rummy_PracticeItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerCountLabel = null;
        _this.playingDataLabel = null;
        return _this;
      }
      Rummy_PracticeItem.prototype.start = function() {};
      Rummy_PracticeItem.prototype.onClick = function() {
        "pool" != this.roomData.play_type && "deals" != this.roomData.play_type || (VV_1.vv.global.poundage_rate = Math.round(100 * this.roomData.poundage_rate) / 100);
        VV_1.vv.enterGameMgr.enterTable(this.roomData);
      };
      Rummy_PracticeItem.prototype.initPracticeItem = function(roomData) {
        this.playerCountLabel.string = roomData.player_count ? roomData.player_count : "97";
        "pool" == roomData.play_type ? roomData.total_round && roomData.total_round > 0 && (this.playingDataLabel.string = "Best of: " + roomData.total_round) : "deals" == roomData.play_type && roomData.dead_line && roomData.dead_line > 0 && (this.playingDataLabel.string = "Deadline: " + roomData.dead_line);
        this.roomData = roomData;
      };
      __decorate([ property(cc.Label) ], Rummy_PracticeItem.prototype, "playerCountLabel", void 0);
      __decorate([ property(cc.Label) ], Rummy_PracticeItem.prototype, "playingDataLabel", void 0);
      Rummy_PracticeItem = __decorate([ ccclass ], Rummy_PracticeItem);
      return Rummy_PracticeItem;
    }(cc.Component);
    exports.default = Rummy_PracticeItem;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  Rummy_RollItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fb29MIvYdPMIs8IaG5hes7", "Rummy_RollItem");
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
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RollData = function() {
      function RollData(endValue, label, endTime, interval) {
        this.endValue = endValue;
        this.label = label;
        this.endTime = endTime;
        this._time = 0;
        this.interval = interval;
      }
      return RollData;
    }();
    var Rummy_RollItem = function(_super) {
      __extends(Rummy_RollItem, _super);
      function Rummy_RollItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.numberLabelsLayer = null;
        _this.startRoll = false;
        _this.endValues = [ -1, -1, -1, -1, -1, -1 ];
        _this.interval = .02;
        _this._canUpdate = false;
        _this._time = 0;
        _this._rollDataList = [];
        return _this;
      }
      Rummy_RollItem.prototype.start = function() {
        if (this.startRoll) {
          this.reStart();
          this._canUpdate = true;
        }
      };
      Rummy_RollItem.prototype.reStart = function(obj) {
        if (obj) for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var data = obj[key];
          this[key] = data;
        }
        this.resetData();
        for (var i = 0; i < this.numberLabelsLayer.childrenCount; i++) {
          var labelLayer = this.numberLabelsLayer.children[i];
          var label = labelLayer.children[0].getComponent(cc.Label);
          var endTime = -1 == this.endValues[i] ? -1 : 0;
          label.string = "";
          this._rollDataList.push(new RollData(this.endValues[i], label, endTime, this.interval));
        }
      };
      Rummy_RollItem.prototype.resetData = function() {
        this._callFun = null;
        this._time = 0;
        this._rollDataList = [];
      };
      Rummy_RollItem.prototype.replenishValue = function(value, target, rValue) {
        var rCout = target - value.length;
        if (0 == rCout) return value;
        if (rCout > 0) {
          var rValues = "";
          while (rCout) {
            rValues += rValue;
            rCout--;
          }
          return rValues + value;
        }
        if (rCout < 0) return value.substr(0, value.length - Math.abs(rCout));
      };
      Rummy_RollItem.prototype.rollToValue = function(params) {
        this.resetData();
        params.interval && (this.interval = params.interval);
        this._callFun = params.callFun;
        !params.direction && (params.direction = Rummy_EnumMgr_1.eDIR.LEFT);
        var strValue = String(Math.round(params.value));
        strValue = this.replenishValue(strValue, this.numberLabelsLayer.childrenCount, "0");
        var endTime = 0;
        params.direction == Rummy_EnumMgr_1.eDIR.LEFT && (endTime = this.numberLabelsLayer.childrenCount * params.valueInterval);
        for (var i = 0; i < this.numberLabelsLayer.childrenCount; i++) {
          var labelLayer = this.numberLabelsLayer.children[i];
          var label = labelLayer.children[0].getComponent(cc.Label);
          params.direction == Rummy_EnumMgr_1.eDIR.LEFT ? endTime -= params.valueInterval : endTime += params.valueInterval;
          if (isNaN(strValue[i])) label.string = strValue[i]; else {
            label.string = "";
            this._rollDataList.push(new RollData(Number(strValue[i]), label, endTime, this.interval));
          }
        }
        this._canUpdate = true;
      };
      Object.defineProperty(Rummy_RollItem.prototype, "canUpdate", {
        set: function(value) {
          this._canUpdate = value;
        },
        enumerable: false,
        configurable: true
      });
      Rummy_RollItem.prototype.scopeRandom_Int = function(min, max) {
        return Math.round(Math.round(min) + Math.random() * Math.round(max - min));
      };
      Rummy_RollItem.prototype.scopeRandom_float = function(min, max) {
        return min + Math.random() * (max - min);
      };
      Rummy_RollItem.prototype.update = function(dt) {
        if (!this._canUpdate) return;
        var self = this;
        this._time += dt;
        this._rollDataList = this._rollDataList.filter(function(rollData) {
          rollData._time += dt;
          if (rollData._time >= rollData.interval) {
            rollData._time = 0;
            rollData.label.string = String(self.scopeRandom_Int(0, 10));
          }
          if (-1 != rollData.endValue && -1 != rollData.endTime && self._time >= rollData.endTime) {
            rollData.label.string = String(rollData.endValue);
            return false;
          }
          return true;
        });
        if (!this._rollDataList.length) {
          this._canUpdate = false;
          this._callFun && this._callFun();
        }
      };
      __decorate([ property(cc.Node) ], Rummy_RollItem.prototype, "numberLabelsLayer", void 0);
      __decorate([ property({
        tooltip: "\u521d\u59cb\u8df3\u52a8"
      }) ], Rummy_RollItem.prototype, "startRoll", void 0);
      __decorate([ property({
        type: [ cc.Integer ],
        tooltip: "\u4fdd\u6301\u9759\u6001\u7684\u6570\u5b57:\n-1 \u8868\u793a\u8be5\u6570\u5b57\u4fdd\u6301\u52a8\u6001"
      }) ], Rummy_RollItem.prototype, "endValues", void 0);
      __decorate([ property({
        tooltip: "\u6570\u5b57\u5237\u65b0\u95f4\u9694"
      }) ], Rummy_RollItem.prototype, "interval", void 0);
      Rummy_RollItem = __decorate([ ccclass ], Rummy_RollItem);
      return Rummy_RollItem;
    }(cc.Component);
    exports.default = Rummy_RollItem;
    cc._RF.pop();
  }, {
    "./Rummy_EnumMgr": "Rummy_EnumMgr"
  } ],
  Rummy_RoomType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c54b1aBS8BOQqJzIkdQiB5D", "Rummy_RoomType");
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
    var SceneManager_1 = require("../../../scripts/frameworks/SceneManager");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var GameConfig_1 = require("../../../scripts/platform/GameConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_RoomType = function(_super) {
      __extends(Rummy_RoomType, _super);
      function Rummy_RoomType() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.topNode = null;
        return _this;
      }
      Rummy_RoomType.prototype.start = function() {
        this.initUserInfo();
      };
      Rummy_RoomType.prototype.btnBack = function() {
        SceneManager_1.default.getInstance().loadBundleScene(GameConst_1.GameBundle.Lobby, GameConfig_1.GameConfig.hallScene);
      };
      Rummy_RoomType.prototype.enterTableList = function(event, customData) {
        SceneManager_1.default.getInstance().loadBundleScene(GameConst_1.GameBundle.Rummy, "rummy_tablelist");
      };
      Rummy_RoomType.prototype.initUserInfo = function() {
        var nickname = VV_1.vv.userMgr.userName || "rummy";
        var id = VV_1.vv.userMgr.player_id || "100000";
        var coin = VV_1.vv.userMgr.coins || "0";
        this.topNode.getChildByName("box").getChildByName("name").getComponent(cc.Label).string = nickname;
        this.topNode.getChildByName("box").getChildByName("id").getComponent(cc.Label).string = id.toString();
        this.topNode.getChildByName("coinBg").getChildByName("coin").getComponent(cc.Label).string = coin.toString();
      };
      __decorate([ property(cc.Node) ], Rummy_RoomType.prototype, "topNode", void 0);
      Rummy_RoomType = __decorate([ ccclass ], Rummy_RoomType);
      return Rummy_RoomType;
    }(cc.Component);
    exports.default = Rummy_RoomType;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/SceneManager": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/platform/GameConfig": void 0
  } ],
  Rummy_ScoreWindowItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7f4e/1AoZNMZbdpm5dC0N1", "Rummy_ScoreWindowItem");
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
    var GameRecordPlayer = function() {
      function GameRecordPlayer() {}
      return GameRecordPlayer;
    }();
    var Rummy_ScoreWindowItem = function(_super) {
      __extends(Rummy_ScoreWindowItem, _super);
      function Rummy_ScoreWindowItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scoresLayer = null;
        _this.indexLabel = null;
        return _this;
      }
      Rummy_ScoreWindowItem.prototype.start = function() {};
      Rummy_ScoreWindowItem.prototype.initData = function(players, index) {
        this.indexLabel.string = String(index);
        var scoresLabelNodes = this.scoresLayer.children;
        for (var i = 0; i < scoresLabelNodes.length; i++) {
          var player = players[i];
          scoresLabelNodes[i].getComponent(cc.Label).string = player ? String(player.score ? player.score : 0) : "";
        }
      };
      __decorate([ property(cc.Node) ], Rummy_ScoreWindowItem.prototype, "scoresLayer", void 0);
      __decorate([ property(cc.Label) ], Rummy_ScoreWindowItem.prototype, "indexLabel", void 0);
      Rummy_ScoreWindowItem = __decorate([ ccclass ], Rummy_ScoreWindowItem);
      return Rummy_ScoreWindowItem;
    }(cc.Component);
    exports.default = Rummy_ScoreWindowItem;
    cc._RF.pop();
  }, {} ],
  Rummy_ScoreWindow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89555y4ugxMm4lPjOBgDLz9", "Rummy_ScoreWindow");
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
    var Rummy_ScoreWindowItem_1 = require("./Rummy_ScoreWindowItem");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var UIBase_1 = require("../../../scripts/games/gameBase/UIBase");
    var GameRecordPlayer = function() {
      function GameRecordPlayer() {}
      return GameRecordPlayer;
    }();
    var GameRecord = function() {
      function GameRecord() {}
      return GameRecord;
    }();
    var GetGameRecordResponse = function() {
      function GetGameRecordResponse() {}
      return GetGameRecordResponse;
    }();
    var PlayerData = function() {
      function PlayerData() {
        this.nick = "";
        this.pos = -1;
        this.countScore = 0;
        this.records = [];
      }
      return PlayerData;
    }();
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_ScoreWindow = function(_super) {
      __extends(Rummy_ScoreWindow, _super);
      function Rummy_ScoreWindow() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.content = null;
        _this.userNamesLayer = null;
        _this.scoresLayer = null;
        _this.table_id = null;
        return _this;
      }
      Rummy_ScoreWindow.prototype.start = function() {};
      Rummy_ScoreWindow.prototype.setRecordsData = function(data) {
        var gameMgr = VV_1.vv.gameMgr;
        this.table_id.string = I18n_1.I18n.getText("rummy.scoreUI.gameId").format(gameMgr.TableMgr.tableInfo.table_id);
        if (!data.records) {
          data.players.sort(function(a, b) {
            return a.pos - b.pos;
          });
          for (var l = 0; l < this.userNamesLayer.children.length; l++) {
            var userNamesNode = this.userNamesLayer.children[l];
            var scoreNode = this.scoresLayer.children[l];
            var playerData = data.players[l];
            if (playerData) {
              playerData.nick || (playerData.nick = VV_1.vv.userMgr.userName);
              userNamesNode.getComponent(cc.Label).string = VV_1.vv.tools.transformNickName(playerData.nick);
              scoreNode.getComponent(cc.Label).string = "";
            } else {
              userNamesNode.getComponent(cc.Label).string = "";
              scoreNode.getComponent(cc.Label).string = "";
            }
          }
          return;
        }
        for (var i = 0; i < data.records.length; i++) {
          var record = data.records[i];
          record.players.sort(function(a, b) {
            return a.pos - b.pos;
          });
        }
        data.records.sort(function(a, b) {
          return a.number - b.number;
        });
        var playerDataList = [];
        for (var j = 0; j < data.records[0].players.length; j++) {
          var playerData = new PlayerData();
          for (var k = 0; k < data.records.length; k++) {
            var record = data.records[k];
            playerData.nick = record.players[j].nick;
            playerData.pos = record.players[j].pos;
            playerData.countScore += record.players[j].score ? record.players[j].score : 0;
            playerData.records.push(record.players[j]);
          }
          playerDataList.push(playerData);
        }
        for (var l = 0; l < this.userNamesLayer.children.length; l++) {
          var userNamesNode = this.userNamesLayer.children[l];
          var scoreNode = this.scoresLayer.children[l];
          var playerData = playerDataList[l];
          if (playerData) {
            playerData.nick || (playerData.nick = VV_1.vv.userMgr.userName);
            userNamesNode.getComponent(cc.Label).string = VV_1.vv.tools.transformNickName(playerData.nick);
            scoreNode.getComponent(cc.Label).string = String(playerData.countScore);
          } else {
            userNamesNode.getComponent(cc.Label).string = "";
            scoreNode.getComponent(cc.Label).string = "";
          }
        }
        for (var i = 0; i < data.records.length; i++) {
          var record = data.records[i];
          var itemNode = cc.instantiate(this.itemPrefab);
          this.content.addChild(itemNode);
          var itemTS = itemNode.getComponent(Rummy_ScoreWindowItem_1.default);
          itemTS.initData(record.players, i + 1);
        }
        this.show();
      };
      Rummy_ScoreWindow.prototype.btnClose = function() {
        this.hide();
      };
      __decorate([ property(cc.Prefab) ], Rummy_ScoreWindow.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Node) ], Rummy_ScoreWindow.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], Rummy_ScoreWindow.prototype, "userNamesLayer", void 0);
      __decorate([ property(cc.Node) ], Rummy_ScoreWindow.prototype, "scoresLayer", void 0);
      __decorate([ property(cc.Label) ], Rummy_ScoreWindow.prototype, "table_id", void 0);
      Rummy_ScoreWindow = __decorate([ ccclass ], Rummy_ScoreWindow);
      return Rummy_ScoreWindow;
    }(UIBase_1.default);
    exports.default = Rummy_ScoreWindow;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/UIBase": void 0,
    "./Rummy_ScoreWindowItem": "Rummy_ScoreWindowItem"
  } ],
  Rummy_SettleItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd32bmwYPpIiaAmiODzXuw+", "Rummy_SettleItem");
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
    var Rummy_CardGroup_1 = require("./Rummy_CardGroup");
    var Rummy_GameHelper_1 = require("./Rummy_GameHelper");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.defaultBg = null;
        _this.ownBg = null;
        _this.nickName = null;
        _this.rank = null;
        _this.handcard = null;
        _this.gamescore = null;
        _this.totalscore = null;
        _this.waitText = null;
        _this.cardGroupPrefab = null;
        _this.won_score = null;
        _this.cardsLayer = null;
        _this.wait_text = null;
        _this.layoutLayer = null;
        _this.linesLayer = null;
        _this.winParticle = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var gameMgr = VV_1.vv.gameMgr;
        if (gameMgr.play_type != Rummy_EnumMgr_1.ePLAY_Type.DEAL) {
          this.won_score.node.active = false;
          this.layoutLayer.getComponent(cc.Layout).updateLayout();
        }
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.updateItemData = function(data, resultType) {
        this.data = data;
        var gameMgr = VV_1.vv.gameMgr;
        if (data.player_id == VV_1.vv.userMgr.player_id) {
          data.nick || (data.nick = VV_1.vv.userMgr.userName);
          this.ownBg.active = true;
          this.defaultBg.active = false;
        }
        data.nick && (this.nickName.getComponent(cc.Label).string = VV_1.vv.tools.transformNickName(data.nick));
        if (data.result) {
          this.rank.getComponent(cc.Label).string = this.getResultStr(data.result);
          this.rank.children[0].active = 1 == data.result;
          this.rank.children[1].active = 2 == data.result;
          this.showCardGroup(resultType, data.result, data.groups, data.time);
        }
        this.gamescore.getComponent(cc.Label).string = data.game_score ? data.game_score : 0;
        if (gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL) this.totalscore.getComponent(cc.Label).string = data.total_score ? data.total_score : 0; else {
          this.totalscore.getComponent(cc.Label).string = data.settle ? VV_1.vv.tools.keepTwoDecimalFull(data.settle / VV_1.vv.global.exchange_rate) : "0";
          if (gameMgr.isPractice()) {
            data.settle || (data.settle = 0);
            data.player_id == VV_1.vv.userMgr.player_id && gameMgr.updatepCoin(Math.round(data.settle * VV_1.vv.global.score));
            this.totalscore.getComponent(cc.Label).string = String(Math.round(data.settle * VV_1.vv.global.score * 100) / 100);
          }
        }
        this.won_score.string = data.won ? data.won : 0;
      };
      NewClass.prototype.getResultStr = function(type) {
        return 1 == type ? "" : 2 == type ? "" : 3 == type ? I18n_1.I18n.getText("rummy.playerStatus.drop") : "";
      };
      NewClass.prototype.showCardGroup = function(resultType, type, group, time) {
        if (1 == resultType) this.showDropCard(); else if (2 == resultType) {
          var gameMgr = VV_1.vv.gameMgr;
          if (1 == type || 2 == type) {
            if (group && group.length > 0) {
              var newgroup = group;
              for (var i = 0; i < newgroup.length; i++) if (newgroup[i].cards) {
                var result = Rummy_GameHelper_1.Rummy_GameHelper.Checkwhatgroup(newgroup[i].cards, VV_1.vv.gameMgr.CardMgr.getRouge());
                newgroup[i]["cardtype"] = result.cardtype;
                newgroup[i]["score"] = result.score;
              }
              var returnData = gameMgr.CardMgr.updateCardGroupScore(newgroup);
              newgroup = returnData.group;
              this.handcard.removeAllChildren();
              var widthCount = 10 * (newgroup.length - 1) * this.handcard.scaleX;
              for (var j = 0; j < newgroup.length; j++) if (newgroup[j].cards) {
                var cardGroup = cc.instantiate(this.cardGroupPrefab);
                var gWidth = cardGroup.getComponent(Rummy_CardGroup_1.default).showCardGroupEnd(newgroup[j].cards, newgroup[j].cardtype, newgroup[j].score);
                this.handcard.addChild(cardGroup);
                widthCount += gWidth * this.handcard.scaleX;
              }
              if (widthCount > this.cardsLayer.width) {
                this.handcard.scale = this.handcard.scale * (this.cardsLayer.width / widthCount);
                VV_1.vv.logger.log("resize scale:", this.handcard.scale);
              }
            }
          } else if (3 == type) this.showDropCard(); else if (4 == type) {
            VV_1.vv.logger.log("\u7b49\u5f85\u5ba3\u544a\u3002\u3002\u3002");
            time && time > 0 && this.showWaitingDelcareCD(time);
          }
        }
      };
      NewClass.prototype.showWaitingDelcareCD = function(time) {
        var _this = this;
        var nTime = Math.ceil(time);
        var callback = function() {
          if (nTime <= 0) {
            _this.unschedule(callback);
            _this.waitText.active = false;
          }
          _this.waitText.getComponent(cc.Label).string = "Waiting... ( " + nTime + " s)";
          nTime = Math.ceil(nTime - 1);
        };
        if (nTime > 0) {
          this.unschedule(callback);
          this.waitText.active = true;
          this.schedule(callback, 1);
        }
      };
      NewClass.prototype.showDropCard = function() {
        var cards = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        var cardGroup = cc.instantiate(this.cardGroupPrefab);
        var gWidth = cardGroup.getComponent(Rummy_CardGroup_1.default).showCardGroupEnd(cards, null, null);
        this.handcard.addChild(cardGroup);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "defaultBg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "ownBg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nickName", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "rank", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "handcard", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "gamescore", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "totalscore", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "waitText", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "cardGroupPrefab", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "won_score", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "cardsLayer", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "wait_text", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "layoutLayer", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "linesLayer", void 0);
      __decorate([ property(cc.ParticleSystem) ], NewClass.prototype, "winParticle", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "./Rummy_CardGroup": "Rummy_CardGroup",
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_GameHelper": "Rummy_GameHelper"
  } ],
  Rummy_Settle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5dc83RjW7JKdoX9uzxiLnAH", "Rummy_Settle");
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
    var Rummy_SettleItem_1 = require("./Rummy_SettleItem");
    var Rummy_Card_1 = require("./Rummy_Card");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var UIBase_1 = require("../../../scripts/games/gameBase/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_Settle = function(_super) {
      __extends(Rummy_Settle, _super);
      function Rummy_Settle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sgame_7gK2Ks = 739;
        _this._sgame_fhb7rP = 9264;
        _this.itemPrefab = null;
        _this.cardPrefab = null;
        _this.tableInfo = null;
        _this.table_id = null;
        _this.wonScore = null;
        _this.content = null;
        _this.Cards = null;
        _this.rougeCard = null;
        _this.tableStateLabel = null;
        _this.btnLayer = null;
        _this.state_time = 10;
        _this.resultType = 1;
        _this.countDownTips = "";
        _this.canCountDown = false;
        _this.countDownTime = 0;
        return _this;
      }
      Rummy_Settle.prototype._sgame_z5xmtc = function() {
        var a = "STrIj";
        var b = 1796;
        return a.length + b;
      };
      Rummy_Settle.prototype.onLoad = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.play_type != Rummy_EnumMgr_1.ePLAY_Type.DEAL && (this.wonScore.active = false);
        if (VV_1.vv.analysis.startTimers.rummygameComplete) {
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.rummy_one_game, {
            result: "success",
            room_id: gameMgr.TableMgr.tableInfo.table_id
          });
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GameCompleted, {
            result: "success",
            room_id: gameMgr.TableMgr.tableInfo.table_id
          });
          gameMgr.isPractice() || VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
            result: "success"
          });
          var cost = Date.now() - VV_1.vv.analysis.startTimers.rummygameComplete;
          VV_1.vv.logger.log("otp -> rummygameComplete cost:", cost / 1e3);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.RUMMY_GAME_COMPLETE_COST, {
            cost: String(cost / 1e3),
            result: "tp",
            entrance: gameMgr.isPractice() ? "practice" : "cash"
          });
          VV_1.vv.analysis.startTimers.rummygameComplete = null;
        }
      };
      Rummy_Settle.prototype.onDestroy = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr && gameMgr.TotalSettleData && gameMgr.TableMgr.showTotalSettle(gameMgr.TotalSettleData);
      };
      Rummy_Settle.prototype.start = function() {};
      Rummy_Settle.prototype.setSettleData = function(data) {
        if (null == data) return;
        this.canCountDown = false;
        data.result_type && (this.resultType = data.result_type);
        var gameMgr = VV_1.vv.gameMgr;
        data.table_id && (gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL ? this.table_id.string = I18n_1.I18n.getText("rummy.scoreUI.gameIdDeal").format(data.table_id, data.table_number) : this.table_id.string = I18n_1.I18n.getText("rummy.scoreUI.gameId").format(data.table_id));
        gameMgr.play_type != Rummy_EnumMgr_1.ePLAY_Type.POOL && gameMgr.play_type != Rummy_EnumMgr_1.ePLAY_Type.DEAL || (this.btnLayer.active = false);
        data.results && this.initList(data.results);
        this.showRougeCard(VV_1.vv.gameMgr.CardMgr.getRouge());
        this.show();
      };
      Rummy_Settle.prototype.startCD = function() {
        this.stopCD();
        this.schedule(this.countCallback, 1);
      };
      Rummy_Settle.prototype.stopCD = function() {
        this.unschedule(this.countCallback);
        this.state_time = 10;
      };
      Rummy_Settle.prototype.countCallback = function() {
        if (this.state_time <= 0) {
          this.stopCD();
          this.hide();
        }
        this.state_time = Math.ceil(this.state_time - 1);
      };
      Rummy_Settle.prototype.initList = function(data) {
        this.content.removeAllChildren();
        var allDelcare = true;
        var selfWinScore = null;
        for (var i = 0; i < data.length; i++) {
          var item = cc.instantiate(this.itemPrefab);
          this.content.addChild(item);
          item.getComponent(Rummy_SettleItem_1.default).updateItemData(data[i], this.resultType);
          4 == data[i].result && (allDelcare = false);
          data[i].player_id == VV_1.vv.userMgr.player_id && (selfWinScore = data[i].settle / VV_1.vv.global.exchange_rate);
        }
        if (allDelcare) {
          var gameMgr = VV_1.vv.gameMgr;
          gameMgr.TotalSettleData || this.resetStartCountDown();
        } else this.tableStateLabel.string = I18n_1.I18n.getText("rummy.settleUI.waitPlayer");
        selfWinScore >= 1e3;
      };
      Rummy_Settle.prototype.getItemNodeByPlayerId = function(id) {
        for (var i = 0; i < this.content.childrenCount; i++) {
          var node = this.content.children[i];
          if (id == node.getComponent(Rummy_SettleItem_1.default).data.player_id) return node;
        }
      };
      Rummy_Settle.prototype.showRougeCard = function(cardValue) {
        var card = cc.instantiate(this.cardPrefab);
        this.rougeCard.addChild(card);
        card.getComponent(Rummy_Card_1.default).setCardValue(cardValue);
        card.stopAllActions();
      };
      Rummy_Settle.prototype.btnClose = function(event, customData) {
        this.hide();
      };
      Rummy_Settle.prototype.btnLeaveTable = function(event, customData) {
        var gameMgr = VV_1.vv.gameMgr;
        this.hide(gameMgr.onBtnBack, gameMgr);
      };
      Rummy_Settle.prototype.btnSwitchTable = function(event, customData) {
        var gameMgr = VV_1.vv.gameMgr;
        this.hide(gameMgr.onBtnSwitch, gameMgr);
      };
      Rummy_Settle.prototype.onHide = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.settleData = null;
        gameMgr.isGoHall && gameMgr.exitTable();
      };
      Rummy_Settle.prototype.resetStartCountDown = function(call) {
        this.timeOverCall = call;
        this.canCountDown = true;
        this.countDownTime = 10;
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POINT && gameMgr.TableMgr.tableInfo.bonus ? this.countDownTips = "The luck bonus will start" : this.countDownTips = I18n_1.I18n.getText("rummy.scene.statusTips3");
      };
      Rummy_Settle.prototype.updateTableStateLabel = function() {
        this.tableStateLabel.string = this.countDownTips + " " + I18n_1.I18n.getText("rummy.settleUI.sec").format(Math.round(this.countDownTime).toString());
        if (this.countDownTime <= 0) {
          this.tableStateLabel.string = "";
          this.canCountDown = false;
          this.timeOverCall && this.timeOverCall();
        }
      };
      Rummy_Settle.prototype.totalSettle = function() {
        var _this = this;
        this.canCountDown = false;
        this.tableStateLabel.string = "";
        this.resetStartCountDown(function() {
          _this.btnClose();
        });
      };
      Rummy_Settle.prototype.update = function(dt) {
        if (this.canCountDown) {
          this.countDownTime -= dt;
          this.updateTableStateLabel();
        }
      };
      __decorate([ property(cc.Prefab) ], Rummy_Settle.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Rummy_Settle.prototype, "cardPrefab", void 0);
      __decorate([ property(cc.Node) ], Rummy_Settle.prototype, "tableInfo", void 0);
      __decorate([ property(cc.Label) ], Rummy_Settle.prototype, "table_id", void 0);
      __decorate([ property(cc.Node) ], Rummy_Settle.prototype, "wonScore", void 0);
      __decorate([ property(cc.Node) ], Rummy_Settle.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], Rummy_Settle.prototype, "Cards", void 0);
      __decorate([ property(cc.Node) ], Rummy_Settle.prototype, "rougeCard", void 0);
      __decorate([ property(cc.Label) ], Rummy_Settle.prototype, "tableStateLabel", void 0);
      __decorate([ property(cc.Node) ], Rummy_Settle.prototype, "btnLayer", void 0);
      Rummy_Settle = __decorate([ ccclass ], Rummy_Settle);
      return Rummy_Settle;
    }(UIBase_1.default);
    exports.default = Rummy_Settle;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameBase/UIBase": void 0,
    "./Rummy_Card": "Rummy_Card",
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_SettleItem": "Rummy_SettleItem"
  } ],
  Rummy_TableInfoUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "181ddtDy59KWI16OvQtgGwL", "Rummy_TableInfoUI");
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
    var UIBase_1 = require("../../../scripts/games/gameBase/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_TableInfoUI = function(_super) {
      __extends(Rummy_TableInfoUI, _super);
      function Rummy_TableInfoUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moveTime = null;
        _this.extraTime = null;
        _this.maxExtraTime = null;
        _this.tableName = null;
        _this.gameType = null;
        _this.pointValue = null;
        return _this;
      }
      Rummy_TableInfoUI.prototype.start = function() {};
      Rummy_TableInfoUI.prototype.onDestroy = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      Rummy_TableInfoUI.prototype.onHide = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      Rummy_TableInfoUI.prototype.initTableInfoUI = function(info, isPractice) {
        this.tableName.string = info.table_id;
        this.pointValue.string = VV_1.vv.tools.keepTwoDecimalFull(info.score / VV_1.vv.global.exchange_rate);
        this.gameType.string = isPractice ? "Practice" : "Cash";
      };
      __decorate([ property(cc.Label) ], Rummy_TableInfoUI.prototype, "moveTime", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableInfoUI.prototype, "extraTime", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableInfoUI.prototype, "maxExtraTime", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableInfoUI.prototype, "tableName", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableInfoUI.prototype, "gameType", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableInfoUI.prototype, "pointValue", void 0);
      Rummy_TableInfoUI = __decorate([ ccclass ], Rummy_TableInfoUI);
      return Rummy_TableInfoUI;
    }(UIBase_1.default);
    exports.default = Rummy_TableInfoUI;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameBase/UIBase": void 0
  } ],
  Rummy_TableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b1e48GgOhM64/5tpQZFBki", "Rummy_TableMgr");
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
    var Rummy_TotalSettle_1 = require("./Rummy_TotalSettle");
    var Rummy_GameMgr_1 = require("./Rummy_GameMgr");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var Rummy_ScoreWindow_1 = require("./Rummy_ScoreWindow");
    var BundleMgr_1 = require("../../../loading/script/BundleMgr");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var showTimeAni_1 = require("../../../scripts/common/showTimeAni");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var I18nEvent_1 = require("../../../scripts/frameworks/components/i18n/I18nEvent");
    var Rummy_Settle_1 = require("./Rummy_Settle");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_TableMgr = function(_super) {
      __extends(Rummy_TableMgr, _super);
      function Rummy_TableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tableStateNode = null;
        _this.tableInfoNode = null;
        _this.tableTipNode = null;
        _this.tableTipItemsLayer = null;
        _this.roomTypeLabel = null;
        _this.btn_score = null;
        _this.pointValueLabel = null;
        _this.beforeLabel = null;
        _this.tableStateBg = null;
        _this.pointLayout = null;
        _this.chipSPF = null;
        _this.cashSP = null;
        _this.roomIDLabel = null;
        _this.countTime = null;
        _this.nowTipLevel = 0;
        return _this;
      }
      Rummy_TableMgr.prototype.onEnable = function() {
        VV_1.vv.gameMgr = new Rummy_GameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
        VV_1.vv.eventMgr.on(I18nEvent_1.I18nEvent.OnLanguangeChanged, this.onLangChanged, this);
      };
      Rummy_TableMgr.prototype.onDisable = function() {
        VV_1.vv.eventMgr.offTarget(this);
      };
      Rummy_TableMgr.prototype.reset = function() {};
      Rummy_TableMgr.prototype.start = function() {
        VV_1.vv.gameMgr.launch();
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.RUMMY_GAME_ROOM_ENTER, {
          result: "suc"
        });
        VV_1.vv.analysis.startTimers.rummyEnter = Date.now();
        VV_1.vv.analysis.startTimers.rummygameComplete = null;
      };
      Rummy_TableMgr.prototype.updateTableInfo = function(info) {
        !info.table_number && (info.table_number = 1);
        this.tableInfo = info;
        var gameMgr = VV_1.vv.gameMgr;
        info.table_id && (this.roomIDLabel.string = info.table_id);
        if (gameMgr.isPractice()) {
          this.cashSP.spriteFrame = this.chipSPF;
          gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL ? info.prize = null : info.score = 100 * VV_1.vv.global.score;
        }
        gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL ? this.setTablePrize(info.prize, gameMgr.room_type) : this.setTablePrize(info.score, gameMgr.room_type);
        this.btn_score.active = gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL;
        this.updateRoomType();
        this.updateTableState(info.state, info.state_time);
        this.last_table_number = info.table_number;
      };
      Rummy_TableMgr.prototype.setTablePrize = function(value, type) {
        void 0 === type && (type = 1);
        var gameMgr = VV_1.vv.gameMgr;
        if (!value) {
          this.pointLayout.active = false;
          return;
        }
        if (type != gameMgr.room_type) return;
        if (gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL || gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL) {
          this.beforeLabel.node.active = true;
          this.beforeLabel.string = I18n_1.I18n.getText("tableList.mainUI.prize");
          this.pointValueLabel.string = VV_1.vv.tools.keepTwoDecimalFull(value / VV_1.vv.global.exchange_rate * (1 - VV_1.vv.global.poundage_rate));
        } else {
          this.beforeLabel.node.active = false;
          this.pointValueLabel.string = VV_1.vv.tools.keepTwoDecimalFull(value / VV_1.vv.global.exchange_rate);
        }
        this.pointLayout.active = true;
      };
      Rummy_TableMgr.prototype.updateTableNumber = function(tableNumber) {
        this.last_table_number = this.tableInfo.table_number;
        this.tableInfo.table_number = tableNumber;
        this.updateRoomType();
      };
      Rummy_TableMgr.prototype.onLangChanged = function() {
        this.updateRoomType();
      };
      Rummy_TableMgr.prototype.updateRoomType = function() {
        var info = this.tableInfo;
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POINT ? this.roomTypeLabel.string = I18n_1.I18n.getText("rummy.scene.pointTitle") : gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL ? this.roomTypeLabel.string = I18n_1.I18n.getText("rummy.scene.poolTitle").format(info.dead_line, info.table_number) : gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL && (this.roomTypeLabel.string = I18n_1.I18n.getText("rummy.scene.dealsTitle").format(info.total_round, info.table_number, info.total_round));
      };
      Rummy_TableMgr.prototype.setState = function(nTime) {
        if (nTime >= 0) {
          this.tableStateNode.getChildByName("background").getChildByName("count").active = true;
          this.tableStateNode.getChildByName("background").getChildByName("count").getComponent(cc.Label).string = " ( " + nTime + " s ) ";
        }
      };
      Rummy_TableMgr.prototype.stateUpdate = function(dt) {
        if (!this.tableStateNode.active) return;
        this.countTime -= dt;
        this.setState(Math.round(this.countTime));
        this.countTime <= 0 && this.stopTableState();
      };
      Rummy_TableMgr.prototype.stateCallBack = function() {
        this.countTime <= 0 && this.stopTableState();
        this.setState(this.countTime);
        this.countTime = Math.ceil(this.countTime - 1);
      };
      Rummy_TableMgr.prototype.stopTableState = function() {
        this.tableStateNode.active = false;
        this.countTime = null;
      };
      Rummy_TableMgr.prototype.updateTableState = function(state, state_time) {
        if (5 == state) return;
        this.stopTableState();
        this.countTime = state_time;
        var stateStr = this.getStateStr(state);
        this.tableStateNode.getChildByName("background").getChildByName("label").getComponent(cc.Label).string = stateStr;
        this.setState(this.countTime);
        this.countTime > 0 && (this.tableStateNode.active = true);
      };
      Rummy_TableMgr.prototype.getStateStr = function(state) {
        var gameMgr = VV_1.vv.gameMgr;
        var str = "";
        switch (state) {
         case 1:
          str = I18n_1.I18n.getText("rummy.scene.statusTips1");
          break;

         case 2:
          str = I18n_1.I18n.getText("rummy.scene.statusTips2");
          break;

         case 3:
         case 4:
         case 5:
         case 6:
          break;

         case 7:
          gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POINT && gameMgr.TableMgr.tableInfo.bonus || (str = I18n_1.I18n.getText("rummy.scene.statusTips3"));
          break;

         case 9:
          break;

         default:
          str = "error";
        }
        return str;
      };
      Rummy_TableMgr.prototype.showTableTip = function() {
        this.tableTipNode.getComponent(showTimeAni_1.default).showAniByParams();
      };
      Rummy_TableMgr.prototype.setTipLevel = function(tipLevel) {
        for (var i = 0; i < this.tableTipItemsLayer.children.length; i++) {
          var tableTipItem = this.tableTipItemsLayer.children[i];
          tableTipItem.active = i < tipLevel;
        }
        if (tipLevel <= this.nowTipLevel) {
          this.nowTipLevel = tipLevel;
          return;
        }
        this.nowTipLevel = tipLevel;
        this.showTableTip();
      };
      Rummy_TableMgr.prototype.showSettle = function(data) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("settle");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Rummy, function(bundle) {
          bundle.load("prefabs/settle", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG + 1);
              var script = node.getComponent(Rummy_Settle_1.default);
              script && script.setSettleData(data);
            }
          });
        });
      };
      Rummy_TableMgr.prototype.hideSettle = function() {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("settle");
        view && view.getComponent(Rummy_Settle_1.default).hide();
      };
      Rummy_TableMgr.prototype.getSettleTS = function() {
        var canvas = cc.find("Canvas");
        if (!canvas) return null;
        var view = canvas.getChildByName("settle");
        if (view) return view.getComponent(Rummy_Settle_1.default);
      };
      Rummy_TableMgr.prototype.showTotalSettle = function(data) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("totalSettle");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Rummy, function(bundle) {
          bundle.load("prefabs/totalSettle", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
              var script = node.getComponent(Rummy_TotalSettle_1.default);
              script && script.setSettleData(data);
            }
          });
        });
      };
      Rummy_TableMgr.prototype.showScoreWindow = function(data) {
        var canvas = cc.find("Canvas");
        if (!canvas) return;
        var view = canvas.getChildByName("scoreWindow");
        null == view && BundleMgr_1.default.getInstance().loadBundle(GameConst_1.GameBundle.Rummy, function(bundle) {
          bundle.load("prefabs/scoreWindow", cc.Prefab, function(err, prefab) {
            if (err) return;
            if (null != cc.find("Canvas")) {
              var node = cc.instantiate(prefab);
              cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
              var script = node.getComponent(Rummy_ScoreWindow_1.default);
              script && script.setRecordsData(data);
            }
          });
        });
      };
      Rummy_TableMgr.prototype.update = function(dt) {
        this.stateUpdate(dt);
      };
      __decorate([ property(cc.Node) ], Rummy_TableMgr.prototype, "tableStateNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_TableMgr.prototype, "tableInfoNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_TableMgr.prototype, "tableTipNode", void 0);
      __decorate([ property(cc.Node) ], Rummy_TableMgr.prototype, "tableTipItemsLayer", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableMgr.prototype, "roomTypeLabel", void 0);
      __decorate([ property(cc.Node) ], Rummy_TableMgr.prototype, "btn_score", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableMgr.prototype, "pointValueLabel", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableMgr.prototype, "beforeLabel", void 0);
      __decorate([ property(cc.Node) ], Rummy_TableMgr.prototype, "tableStateBg", void 0);
      __decorate([ property(cc.Node) ], Rummy_TableMgr.prototype, "pointLayout", void 0);
      __decorate([ property(cc.SpriteFrame) ], Rummy_TableMgr.prototype, "chipSPF", void 0);
      __decorate([ property(cc.Sprite) ], Rummy_TableMgr.prototype, "cashSP", void 0);
      __decorate([ property(cc.Label) ], Rummy_TableMgr.prototype, "roomIDLabel", void 0);
      Rummy_TableMgr = __decorate([ ccclass ], Rummy_TableMgr);
      return Rummy_TableMgr;
    }(cc.Component);
    exports.default = Rummy_TableMgr;
    cc._RF.pop();
  }, {
    "../../../loading/script/BundleMgr": void 0,
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/common/showTimeAni": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/frameworks/components/i18n/I18nEvent": void 0,
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_GameMgr": "Rummy_GameMgr",
    "./Rummy_ScoreWindow": "Rummy_ScoreWindow",
    "./Rummy_Settle": "Rummy_Settle",
    "./Rummy_TotalSettle": "Rummy_TotalSettle"
  } ],
  Rummy_TotalSettleItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cccdnZx8ZEHpZNoeM8PXAq", "Rummy_TotalSettleItem");
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
    var GameResultPlayer = function() {
      function GameResultPlayer() {}
      return GameResultPlayer;
    }();
    var Rummy_TotalSettleItem = function(_super) {
      __extends(Rummy_TotalSettleItem, _super);
      function Rummy_TotalSettleItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.line = null;
        _this.avatarImg = null;
        _this.userName = null;
        _this.totalScoreLabel = null;
        _this.prizeLabel = null;
        return _this;
      }
      Rummy_TotalSettleItem.prototype.start = function() {};
      Rummy_TotalSettleItem.prototype.initData = function(params, index, settle) {
        var gameMgr = VV_1.vv.gameMgr;
        this.line.active = !index;
        params.nick ? this.userName.string = params.nick : VV_1.vv.userMgr.player_id == params.player_id && (this.userName.string = VV_1.vv.userMgr.userName);
        this.totalScoreLabel.string = String(params.total_score ? params.total_score : 0);
        if (3 == params.prize) {
          this.prizeLabel.string = VV_1.vv.tools.keepTwoDecimalFull(settle / VV_1.vv.global.exchange_rate);
          this.prizeLabel.node.color = cc.color().fromHEX("#FFE295");
          gameMgr.isPractice() && VV_1.vv.userMgr.player_id == params.player_id && gameMgr.updatepCoin(Number(VV_1.vv.tools.keepTwoDecimalFull(settle / VV_1.vv.global.exchange_rate)));
        } else {
          this.prizeLabel.string = 1 == params.prize ? "Lost" : "Playing";
          this.prizeLabel.node.color = cc.color().fromHEX("#FFFFFF");
          gameMgr.isPractice() && VV_1.vv.userMgr.player_id == params.player_id && 1 == params.prize && gameMgr.updatepCoin(-VV_1.vv.global.prize);
        }
        this.avatarImg.showNetView(params.facelook);
      };
      __decorate([ property(cc.Node) ], Rummy_TotalSettleItem.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], Rummy_TotalSettleItem.prototype, "line", void 0);
      __decorate([ property(NetPic_1.default) ], Rummy_TotalSettleItem.prototype, "avatarImg", void 0);
      __decorate([ property(cc.Label) ], Rummy_TotalSettleItem.prototype, "userName", void 0);
      __decorate([ property(cc.Label) ], Rummy_TotalSettleItem.prototype, "totalScoreLabel", void 0);
      __decorate([ property(cc.Label) ], Rummy_TotalSettleItem.prototype, "prizeLabel", void 0);
      Rummy_TotalSettleItem = __decorate([ ccclass ], Rummy_TotalSettleItem);
      return Rummy_TotalSettleItem;
    }(cc.Component);
    exports.default = Rummy_TotalSettleItem;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  Rummy_TotalSettle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffadfuoQxlP+Lb+guxmHXWq", "Rummy_TotalSettle");
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
    var Rummy_TotalSettleItem_1 = require("./Rummy_TotalSettleItem");
    var Rummy_EnumMgr_1 = require("./Rummy_EnumMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var UIBase_1 = require("../../../scripts/games/gameBase/UIBase");
    var GameResultBroadCast = function() {
      function GameResultBroadCast() {}
      return GameResultBroadCast;
    }();
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rummy_TotalSettle = function(_super) {
      __extends(Rummy_TotalSettle, _super);
      function Rummy_TotalSettle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.content = null;
        return _this;
      }
      Rummy_TotalSettle.prototype.start = function() {};
      Rummy_TotalSettle.prototype.setSettleData = function(data) {
        var gameMgr = VV_1.vv.gameMgr;
        this.content.removeAllChildren();
        var playData = null;
        gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.POOL ? data.results.sort(function(a, b) {
          a.total_score || (a.total_score = 0);
          b.total_score || (b.total_score = 0);
          return a.total_score - b.total_score;
        }) : gameMgr.play_type == Rummy_EnumMgr_1.ePLAY_Type.DEAL && data.results.sort(function(a, b) {
          a.total_score || (a.total_score = 0);
          b.total_score || (b.total_score = 0);
          return b.total_score - a.total_score;
        });
        if (2 == data.result_type) for (var k = 0; k < data.results.length; k++) {
          var sUserData = data.results[k];
          sUserData.prize = 0 == k ? 3 : 1;
        }
        for (var i = 0; i < data.results.length; i++) {
          var userData = data.results[i];
          if (userData.player_id == VV_1.vv.userMgr.player_id) {
            playData = userData;
            data.results.splice(i, 1);
            break;
          }
        }
        data.results.unshift(playData);
        for (var j = 0; j < data.results.length; j++) {
          var nUserData = data.results[j];
          var node = cc.instantiate(this.itemPrefab);
          this.content.addChild(node);
          var nodeTS = node.getComponent(Rummy_TotalSettleItem_1.default);
          gameMgr.isPractice() && (data.settle = 100 * data.results.length * VV_1.vv.global.prize * (1 - VV_1.vv.global.poundage_rate));
          nodeTS.initData(nUserData, j, data.settle);
        }
        this.show();
      };
      Rummy_TotalSettle.prototype.btnClose = function() {
        var gameMgr = VV_1.vv.gameMgr;
        gameMgr.TotalSettleData = null;
        this.hide(gameMgr.onBtnBack, gameMgr);
      };
      __decorate([ property(cc.Prefab) ], Rummy_TotalSettle.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Node) ], Rummy_TotalSettle.prototype, "content", void 0);
      Rummy_TotalSettle = __decorate([ ccclass ], Rummy_TotalSettle);
      return Rummy_TotalSettle;
    }(UIBase_1.default);
    exports.default = Rummy_TotalSettle;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/games/gameBase/UIBase": void 0,
    "./Rummy_EnumMgr": "Rummy_EnumMgr",
    "./Rummy_TotalSettleItem": "Rummy_TotalSettleItem"
  } ]
}, {}, [ "Rummy_ButtonMgr", "Rummy_Card", "Rummy_CardGroup", "Rummy_CardMgr", "Rummy_EnumMgr", "Rummy_GameHelper", "Rummy_GameMgr", "Rummy_History", "Rummy_MsgID", "Rummy_OperateLight", "Rummy_Player", "Rummy_PlayerMgr", "Rummy_PracticeItem", "Rummy_RollItem", "Rummy_RoomType", "Rummy_ScoreWindow", "Rummy_ScoreWindowItem", "Rummy_Settle", "Rummy_SettleItem", "Rummy_TableInfoUI", "Rummy_TableMgr", "Rummy_TotalSettle", "Rummy_TotalSettleItem" ]);