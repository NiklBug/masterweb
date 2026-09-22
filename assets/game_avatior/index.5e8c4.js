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
  AVatiorBtnLongPress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bb72zXDnFF5J4IdDTEItb0", "AVatiorBtnLongPress");
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
    var AVatiorBtnLongPress = function(_super) {
      __extends(AVatiorBtnLongPress, _super);
      function AVatiorBtnLongPress() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_nLongTouchTimer = 2;
        _this.m_nStartTouchTimer = 0;
        return _this;
      }
      AVatiorBtnLongPress.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      AVatiorBtnLongPress.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      AVatiorBtnLongPress.prototype.onTouchStart = function(event) {
        this.m_nStartTouchTimer = Date.now();
      };
      AVatiorBtnLongPress.prototype.onTouchEnd = function(event) {
        this.m_nStartTouchTimer = 0;
        this.m_nLongTouchTimer = 2;
      };
      AVatiorBtnLongPress.prototype.update = function(dt) {
        if (0 == this.m_nStartTouchTimer) return;
        this.m_nLongTouchTimer -= dt;
        this.m_nLongTouchTimer <= 0 && cc.Component.EventHandler.emitEvents(this.node.getComponent(cc.Button).clickEvents, this.node.getComponent(cc.Button).clickEvents[0].customEventData);
      };
      AVatiorBtnLongPress = __decorate([ ccclass ], AVatiorBtnLongPress);
      return AVatiorBtnLongPress;
    }(cc.Component);
    exports.default = AVatiorBtnLongPress;
    cc._RF.pop();
  }, {} ],
  AvatiorAllBetsControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36be3sS2zVDLLVcUC+E63PM", "AvatiorAllBetsControl");
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
    var AvatiorMsgs_1 = require("./AvatiorMsgs");
    var AvatiorPlayerItem_1 = require("./AvatiorPlayerItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorAllBetsControl = function(_super) {
      __extends(AvatiorAllBetsControl, _super);
      function AvatiorAllBetsControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oParentContent = null;
        _this.m_oPlayerInfoItem = null;
        _this.m_oAllBetsLabel = null;
        _this.m_oPreRateLabel = null;
        _this.m_oPreRateNode = null;
        _this.m_oPreBtn = null;
        _this.m_oClickedPreBtn = null;
        _this.m_bCkickPreRound = false;
        return _this;
      }
      AvatiorAllBetsControl.prototype.onLoad = function() {
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorLastPlayerInfoResponse, this.updatePrePlayerList, this);
      };
      AvatiorAllBetsControl.prototype.onDisable = function() {
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorLastPlayerInfoResponse, this.updatePrePlayerList, this);
      };
      AvatiorAllBetsControl.prototype.updatePlayerList = function() {
        var _this = this;
        if (this.m_bCkickPreRound) return;
        this.m_oParentContent.removeAllChildren();
        var PlayerList = VV_1.vv.gameMgr.playerInfoList;
        PlayerList.forEach(function(info) {
          var itemNode = cc.instantiate(_this.m_oPlayerInfoItem);
          if (itemNode) {
            itemNode.getComponent(AvatiorPlayerItem_1.default).initPlayerDatda(info);
            itemNode.active = true;
            itemNode.getChildByName("head").getChildByName("icon").getComponent(NetPic_1.default).showNetView(info.facelook);
            itemNode.getChildByName("name").getComponent(cc.Label).string = VV_1.vv.tools.transFormName(info.nick);
            itemNode.getChildByName("bet").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.chip / VV_1.vv.global.exchange_rate), ",");
            if (0 != info.cashout_mult) {
              itemNode.getChildByName("bg1").active = true;
              itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cashout_mult), ",") + "x";
              itemNode.getChildByName("bg1").getChildByName("betRate").color = _this.getLevelColor(info.cashout_mult);
              itemNode.getChildByName("win").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_gold / VV_1.vv.global.exchange_rate), ",");
              itemNode.getChildByName("select").active = true;
            }
            _this.m_oParentContent.addChild(itemNode);
          }
        });
        this.m_oPreRateNode.active = false;
        this.updateAllBets();
      };
      AvatiorAllBetsControl.prototype.frameUpdatePlayerList = function() {
        if (this.m_bCkickPreRound) return;
        this.m_oPreRateNode.active = false;
        var self = this;
        var PlayerList = VV_1.vv.gameMgr.playerInfoList;
        PlayerList.forEach(function(info, index) {
          var itemNode = self.m_oParentContent.children[index];
          if (itemNode) {
            var NeedUpdate = itemNode.getComponent(AvatiorPlayerItem_1.default).checkPlayerNeedUpdate(info);
            if (NeedUpdate) {
              itemNode.active = true;
              itemNode.getChildByName("head").getChildByName("icon").getComponent(NetPic_1.default).showNetView(info.facelook);
              itemNode.getChildByName("name").getComponent(cc.Label).string = VV_1.vv.tools.transFormName(info.nick);
              itemNode.getChildByName("bet").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.chip / VV_1.vv.global.exchange_rate), ",");
              if (0 != info.cashout_mult) {
                itemNode.getChildByName("bg1").active = true;
                itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cashout_mult), ",") + "x";
                itemNode.getChildByName("bg1").getChildByName("betRate").color = self.getLevelColor(info.cashout_mult);
                itemNode.getChildByName("win").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_gold / VV_1.vv.global.exchange_rate), ",");
                itemNode.getChildByName("select").active = true;
              } else {
                itemNode.getChildByName("bg1").active = false;
                itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = "";
                itemNode.getChildByName("win").getComponent(cc.Label).string = "";
                itemNode.getChildByName("select").active = false;
              }
            }
          }
        });
        this.updateAllBets();
      };
      AvatiorAllBetsControl.prototype.getLevelColor = function(mult) {
        return mult > 10 ? cc.color(232, 62, 140) : mult > 2 ? cc.color(135, 52, 244) : cc.color(44, 139, 205);
      };
      AvatiorAllBetsControl.prototype.updateAllBets = function() {
        this.m_oAllBetsLabel.string = VV_1.vv.gameMgr.allBet;
      };
      AvatiorAllBetsControl.prototype.updatePrePlayerList = function(data) {
        var _this = this;
        this.m_oParentContent.removeAllChildren();
        var PlayerList = data.players;
        PlayerList.forEach(function(info) {
          var itemNode = cc.instantiate(_this.m_oPlayerInfoItem);
          if (itemNode) {
            itemNode.active = true;
            itemNode.getChildByName("head").getChildByName("icon").getComponent(NetPic_1.default).showNetView(info.facelook);
            itemNode.getChildByName("name").getComponent(cc.Label).string = VV_1.vv.tools.transFormName(info.nick);
            itemNode.getChildByName("bet").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.chip / VV_1.vv.global.exchange_rate), ",");
            if (0 != info.cashout_mult) {
              itemNode.getChildByName("bg1").active = true;
              itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cashout_mult), ",") + "x";
              itemNode.getChildByName("bg1").getChildByName("betRate").color = _this.getLevelColor(info.cashout_mult);
              itemNode.getChildByName("win").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_gold / VV_1.vv.global.exchange_rate), ",");
              itemNode.getChildByName("select").active = true;
            }
            _this.m_oParentContent.addChild(itemNode);
          }
        });
        this.m_oPreRateNode.active = true;
        this.m_oAllBetsLabel.string = data.count;
        this.m_oPreRateLabel.string = VV_1.vv.gameMgr.recordList[0].cashout_mult + "x";
        this.m_oPreRateLabel.node.color = this.getLevelColor(VV_1.vv.gameMgr.recordList[0].cashout_mult);
      };
      AvatiorAllBetsControl.prototype.onClickPreRound = function(event, custom) {
        this.m_bCkickPreRound = !this.m_bCkickPreRound;
        if (this.m_bCkickPreRound) {
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorLastPlayerInfoRequest, {});
          this.m_oClickedPreBtn.active = true;
          this.m_oPreBtn.active = false;
        } else {
          this.m_oClickedPreBtn.active = false;
          this.m_oPreBtn.active = true;
          this.updatePlayerList();
        }
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u6570\u636e\u5217\u8868\u7236\u8282\u70b9"
      }) ], AvatiorAllBetsControl.prototype, "m_oParentContent", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u73a9\u5bb6\u8282\u70b9"
      }) ], AvatiorAllBetsControl.prototype, "m_oPlayerInfoItem", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "allbets"
      }) ], AvatiorAllBetsControl.prototype, "m_oAllBetsLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u4e0a\u5c40\u500d\u7387"
      }) ], AvatiorAllBetsControl.prototype, "m_oPreRateLabel", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u4e0a\u5c40\u500d\u7387\u8282\u70b9"
      }) ], AvatiorAllBetsControl.prototype, "m_oPreRateNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "prebtn"
      }) ], AvatiorAllBetsControl.prototype, "m_oPreBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "clicked preBtn"
      }) ], AvatiorAllBetsControl.prototype, "m_oClickedPreBtn", void 0);
      AvatiorAllBetsControl = __decorate([ ccclass ], AvatiorAllBetsControl);
      return AvatiorAllBetsControl;
    }(cc.Component);
    exports.default = AvatiorAllBetsControl;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "./AvatiorMsgs": "AvatiorMsgs",
    "./AvatiorPlayerItem": "AvatiorPlayerItem"
  } ],
  AvatiorAutoBetSettingPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0acc0ap9ZdBqruUWcEcgz0I", "AvatiorAutoBetSettingPanel");
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
    var AvatiorAutoBetSettingPanel = function(_super) {
      __extends(AvatiorAutoBetSettingPanel, _super);
      function AvatiorAutoBetSettingPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oDecreasEdit = null;
        _this.m_oIncreasEdit = null;
        _this.m_oExceedEdit = null;
        _this.m_oDecreaseToggle = null;
        _this.m_oIncreaseToggle = null;
        _this.m_oSingleToggle = null;
        _this.m_nSelectAutoType = 0;
        return _this;
      }
      AvatiorAutoBetSettingPanel.prototype.setSelectAutoType = function(ntype) {
        this.m_nSelectAutoType = ntype;
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftAutoRound = 10 : VV_1.vv.gameMgr.m_nRightAutoRound = 10;
      };
      AvatiorAutoBetSettingPanel.prototype.onClickRoundToggle = function(event, custom) {
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftAutoRound = parseFloat(custom) : VV_1.vv.gameMgr.m_nRightAutoRound = parseFloat(custom);
      };
      AvatiorAutoBetSettingPanel.prototype.setDecreaseOpState = function(isChecked) {
        this.m_oDecreasEdit.node.color = isChecked ? cc.color(255, 255, 255) : cc.color(108, 117, 125);
        this.m_oDecreasEdit.textLabel.node.color = isChecked ? cc.color(255, 255, 255) : cc.color(108, 117, 125);
        this.m_oDecreasEdit.placeholderLabel.string = "0.00";
        this.m_oDecreasEdit.textLabel.string = "0.00";
        this.m_oDecreasEdit.string = "0.00";
        this.m_oDecreasEdit.enabled = isChecked;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oDecreaseToggle.parent, "decreaseBtn").getComponent(cc.Button).interactable = isChecked;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oDecreaseToggle.parent, "addBtn").getComponent(cc.Button).interactable = isChecked;
      };
      AvatiorAutoBetSettingPanel.prototype.onClickDecreaseToggle = function(event) {
        var isChecked = event.node.getComponent(cc.Toggle).isChecked;
        if (1 == this.m_nSelectAutoType) {
          VV_1.vv.gameMgr.m_nLeftDecreaseNum = isChecked ? 0 : -1;
          VV_1.vv.gameMgr.m_bLeftDecreaseSelect = isChecked;
        } else {
          VV_1.vv.gameMgr.m_nRightDecreaseNum = isChecked ? 0 : -1;
          VV_1.vv.gameMgr.m_bRightDecreaseSelect = isChecked;
        }
        this.setDecreaseOpState(isChecked);
      };
      AvatiorAutoBetSettingPanel.prototype.setIncreaseOpState = function(isChecked) {
        this.m_oIncreasEdit.node.color = isChecked ? cc.color(255, 255, 255) : cc.color(108, 117, 125);
        this.m_oIncreasEdit.textLabel.node.color = isChecked ? cc.color(255, 255, 255) : cc.color(108, 117, 125);
        this.m_oIncreasEdit.placeholderLabel.string = "0.00";
        this.m_oIncreasEdit.textLabel.string = "0.00";
        this.m_oIncreasEdit.string = "0.00";
        this.m_oIncreasEdit.enabled = isChecked;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oIncreaseToggle.parent, "decreaseBtn").getComponent(cc.Button).interactable = isChecked;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oIncreaseToggle.parent, "addBtn").getComponent(cc.Button).interactable = isChecked;
      };
      AvatiorAutoBetSettingPanel.prototype.onClickIncreaseToggle = function(event) {
        var isChecked = event.node.getComponent(cc.Toggle).isChecked;
        if (1 == this.m_nSelectAutoType) {
          VV_1.vv.gameMgr.m_nLeftIncreaseNum = isChecked ? 0 : -1;
          VV_1.vv.gameMgr.m_bLeftIncreaseSelect = isChecked;
        } else {
          VV_1.vv.gameMgr.m_nRightIncreaseNum = isChecked ? 0 : -1;
          VV_1.vv.gameMgr.m_bRightIncreaseSelect = isChecked;
        }
        this.setIncreaseOpState(isChecked);
      };
      AvatiorAutoBetSettingPanel.prototype.setSingleOpState = function(isChecked) {
        this.m_oExceedEdit.node.color = isChecked ? cc.color(255, 255, 255) : cc.color(108, 117, 125);
        this.m_oExceedEdit.textLabel.node.color = isChecked ? cc.color(255, 255, 255) : cc.color(108, 117, 125);
        this.m_oExceedEdit.placeholderLabel.string = "0.00";
        this.m_oExceedEdit.textLabel.string = "0.00";
        this.m_oExceedEdit.string = "0.00";
        this.m_oExceedEdit.enabled = isChecked;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oSingleToggle.parent, "decreaseBtn").getComponent(cc.Button).interactable = isChecked;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oSingleToggle.parent, "addBtn").getComponent(cc.Button).interactable = isChecked;
      };
      AvatiorAutoBetSettingPanel.prototype.onClickSingleToggle = function(event) {
        var isChecked = event.node.getComponent(cc.Toggle).isChecked;
        if (1 == this.m_nSelectAutoType) {
          VV_1.vv.gameMgr.m_nLeftExceedNum = isChecked ? 0 : -1;
          VV_1.vv.gameMgr.m_bLeftExceedSelect = isChecked;
        } else {
          VV_1.vv.gameMgr.m_nRightExceedNum = isChecked ? 0 : -1;
          VV_1.vv.gameMgr.m_bRightExceedSelect = isChecked;
        }
        this.setSingleOpState(isChecked);
      };
      AvatiorAutoBetSettingPanel.prototype.onClickRestart = function() {
        if (1 == this.m_nSelectAutoType) {
          VV_1.vv.gameMgr.resetAutoPlayByType(1);
          3 == VV_1.vv.gameMgr.m_nAutoType ? VV_1.vv.gameMgr.m_nAutoType = 2 : 1 == VV_1.vv.gameMgr.m_nAutoType && (VV_1.vv.gameMgr.m_nAutoType = 0);
        } else {
          VV_1.vv.gameMgr.resetAutoPlayByType(2);
          3 == VV_1.vv.gameMgr.m_nAutoType ? VV_1.vv.gameMgr.m_nAutoType = 1 : 2 == VV_1.vv.gameMgr.m_nAutoType && (VV_1.vv.gameMgr.m_nAutoType = 0);
        }
        this.m_oDecreaseToggle.getComponent(cc.Toggle).isChecked = false;
        this.m_oDecreaseToggle.getComponent(cc.Toggle).checkMark.node.active = false;
        this.m_oIncreaseToggle.getComponent(cc.Toggle).isChecked = false;
        this.m_oIncreaseToggle.getComponent(cc.Toggle).checkMark.node.active = false;
        this.m_oSingleToggle.getComponent(cc.Toggle).isChecked = false;
        this.m_oSingleToggle.getComponent(cc.Toggle).checkMark.node.active = false;
        this.setDecreaseOpState(false);
        this.setIncreaseOpState(false);
        this.setSingleOpState(false);
      };
      AvatiorAutoBetSettingPanel.prototype.onClickStatrAuto = function() {
        if (1 == this.m_nSelectAutoType) {
          if (VV_1.vv.gameMgr.lockBalance > Number(VV_1.vv.userMgr.coins) || VV_1.vv.gameMgr.betMgr.m_CurLeftBetNum > Number(VV_1.vv.userMgr.coins)) {
            VV_1.vv.uiMgr.showBalanceNotEnoughTips();
            VV_1.vv.gameMgr.m_bLeftAutoBet && VV_1.vv.gameMgr.betMgr.onClickStopLeftAuto();
            VV_1.vv.gameMgr.betMgr.m_oLeftBetBtn.active = true;
            VV_1.vv.gameMgr.betMgr.m_oLeftCashoutBtn.active = false;
            VV_1.vv.gameMgr.betMgr.m_oLeftCancelBetBtn.active = false;
            this.onClickRestart();
            this.node.destroy();
            return;
          }
          if (0 == VV_1.vv.gameMgr.m_nLeftAutoRound) {
            VV_1.vv.toast.show("Please, set number of rounds");
            return;
          }
          if (0 == VV_1.vv.gameMgr.m_nLeftDecreaseNum || 0 == VV_1.vv.gameMgr.m_nLeftExceedNum) {
            VV_1.vv.toast.show("Can't set 0.00 as stop point");
            return;
          }
          0 == VV_1.vv.gameMgr.m_nAutoType ? VV_1.vv.gameMgr.m_nAutoType = 1 : 2 == VV_1.vv.gameMgr.m_nAutoType && (VV_1.vv.gameMgr.m_nAutoType = 3);
          VV_1.vv.gameMgr.m_bLeftAutoBet = true;
          VV_1.vv.gameMgr.m_nLeftStartAutoBetCoin = VV_1.vv.userMgr.coins;
          VV_1.vv.gameMgr.betMgr.doAutoLeftBet();
          VV_1.vv.gameMgr.betMgr.updateBetOrAutoToggleInteractive(1, false);
        } else {
          if (VV_1.vv.gameMgr.lockBalance > Number(VV_1.vv.userMgr.coins) || VV_1.vv.gameMgr.betMgr.m_CurRightBetNum > Number(VV_1.vv.userMgr.coins)) {
            VV_1.vv.uiMgr.showBalanceNotEnoughTips();
            VV_1.vv.gameMgr.m_bRightAutoBet && VV_1.vv.gameMgr.betMgr.onClickStopRightAuto();
            VV_1.vv.gameMgr.betMgr.m_oRightBetBtn.active = true;
            VV_1.vv.gameMgr.betMgr.m_oRightCancelBetBtn.active = false;
            VV_1.vv.gameMgr.betMgr.m_oRightCashouttBtn.active = false;
            this.onClickRestart();
            this.node.destroy();
            return;
          }
          if (0 == VV_1.vv.gameMgr.m_nRightAutoRound) {
            VV_1.vv.toast.show("Please, set number of rounds");
            return;
          }
          if (0 == VV_1.vv.gameMgr.m_nRightDecreaseNum || 0 == VV_1.vv.gameMgr.m_nRightExceedNum) {
            VV_1.vv.toast.show("Can't set 0.00 as stop point");
            return;
          }
          0 == VV_1.vv.gameMgr.m_nAutoType ? VV_1.vv.gameMgr.m_nAutoType = 2 : 1 == VV_1.vv.gameMgr.m_nAutoType && (VV_1.vv.gameMgr.m_nAutoType = 3);
          VV_1.vv.gameMgr.m_bRightAutoBet = true;
          VV_1.vv.gameMgr.m_nRightStartAutoBetCoin = VV_1.vv.userMgr.coins;
          VV_1.vv.gameMgr.betMgr.doAutoRightBet();
          VV_1.vv.gameMgr.betMgr.updateBetOrAutoToggleInteractive(2, false);
        }
        VV_1.vv.gameMgr.betMgr.updteAutoPlayCount();
        this.node.destroy();
      };
      AvatiorAutoBetSettingPanel.prototype.onClickCloseBtn = function() {
        this.onClickRestart();
        this.node.destroy();
      };
      AvatiorAutoBetSettingPanel.prototype.onClickDecreaseAddorReduceBtn = function(event, custom) {
        var num = parseFloat(custom);
        var decreaseNum = 0;
        decreaseNum = 1 == this.m_nSelectAutoType ? parseFloat(VV_1.vv.gameMgr.m_nLeftDecreaseNum) + num : parseFloat(VV_1.vv.gameMgr.m_nRightDecreaseNum) + num;
        decreaseNum < 0 ? decreaseNum = 0 : decreaseNum > 1e4 && (decreaseNum = 1e4);
        this.m_oDecreasEdit.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(decreaseNum), ",");
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftDecreaseNum = decreaseNum : VV_1.vv.gameMgr.m_nRightDecreaseNum = decreaseNum;
      };
      AvatiorAutoBetSettingPanel.prototype.onClickIncreaseAddorReduceBtn = function(event, custom) {
        var num = parseFloat(custom);
        var increaseNum = 0;
        increaseNum = 1 == this.m_nSelectAutoType ? parseFloat(VV_1.vv.gameMgr.m_nLeftIncreaseNum) + num : parseFloat(VV_1.vv.gameMgr.m_nRightIncreaseNum) + num;
        increaseNum < 0 ? increaseNum = 0 : increaseNum > 1e4 && (increaseNum = 1e4);
        this.m_oIncreasEdit.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(increaseNum), ",");
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftIncreaseNum = increaseNum : VV_1.vv.gameMgr.m_nRightIncreaseNum = increaseNum;
      };
      AvatiorAutoBetSettingPanel.prototype.onClickExceedAddorReduceBtn = function(event, custom) {
        var num = parseFloat(custom);
        var exceedNum = 0;
        exceedNum = 1 == this.m_nSelectAutoType ? parseFloat(VV_1.vv.gameMgr.m_nLeftExceedNum) + num : parseFloat(VV_1.vv.gameMgr.m_nRightExceedNum) + num;
        exceedNum < 0 ? exceedNum = 0 : exceedNum > 1e4 && (exceedNum = 1e4);
        this.m_oExceedEdit.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(exceedNum), ",");
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftExceedNum = exceedNum : VV_1.vv.gameMgr.m_nRightExceedNum = exceedNum;
      };
      AvatiorAutoBetSettingPanel.prototype.onDecreaseEditBegin = function() {
        this.m_oDecreasEdit.placeholderLabel.string = "";
        this.m_oDecreasEdit.string = "";
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftDecreaseNum = 0 : VV_1.vv.gameMgr.m_nRightDecreaseNum = 0;
      };
      AvatiorAutoBetSettingPanel.prototype.onDecreaseEditEnd = function() {
        if (1 == this.m_nSelectAutoType) {
          VV_1.vv.uiMgr.isNull(this.m_oDecreasEdit.string) ? VV_1.vv.gameMgr.m_nLeftDecreaseNum = 0 : VV_1.vv.gameMgr.m_nLeftDecreaseNum = parseFloat(this.m_oDecreasEdit.string);
          VV_1.vv.gameMgr.m_nLeftDecreaseNum > 1e4 ? VV_1.vv.gameMgr.m_nLeftDecreaseNum = 1e4 : VV_1.vv.gameMgr.m_nLeftDecreaseNum < 0 && (VV_1.vv.gameMgr.m_nLeftDecreaseNum = 0);
          this.m_oDecreasEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nLeftDecreaseNum), ",");
          this.m_oDecreasEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nLeftDecreaseNum), ",");
        } else {
          VV_1.vv.uiMgr.isNull(this.m_oDecreasEdit.string) ? VV_1.vv.gameMgr.m_nRightDecreaseNum = 0 : VV_1.vv.gameMgr.m_nRightDecreaseNum = parseFloat(this.m_oDecreasEdit.string);
          VV_1.vv.gameMgr.m_nRightDecreaseNum > 1e4 ? VV_1.vv.gameMgr.m_nRightDecreaseNum = 1e4 : VV_1.vv.gameMgr.m_nRightDecreaseNum < 0 && (VV_1.vv.gameMgr.m_nRightDecreaseNum = 0);
          this.m_oDecreasEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nRightDecreaseNum), ",");
          this.m_oDecreasEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nRightDecreaseNum), ",");
        }
      };
      AvatiorAutoBetSettingPanel.prototype.onIncreaseEditBegin = function() {
        this.m_oIncreasEdit.placeholderLabel.string = "";
        this.m_oIncreasEdit.string = "";
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftIncreaseNum = 0 : VV_1.vv.gameMgr.m_nRightIncreaseNum = 0;
      };
      AvatiorAutoBetSettingPanel.prototype.onIncreaseEditEnd = function() {
        if (1 == this.m_nSelectAutoType) {
          VV_1.vv.uiMgr.isNull(this.m_oIncreasEdit.string) ? VV_1.vv.gameMgr.m_nLeftIncreaseNum = 0 : VV_1.vv.gameMgr.m_nLeftIncreaseNum = parseFloat(this.m_oIncreasEdit.string);
          VV_1.vv.gameMgr.m_nLeftIncreaseNum > 1e4 ? VV_1.vv.gameMgr.m_nLeftIncreaseNum = 1e4 : VV_1.vv.gameMgr.m_nLeftIncreaseNum < 0 && (VV_1.vv.gameMgr.m_nLeftIncreaseNum = 0);
          this.m_oIncreasEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nLeftIncreaseNum), ",");
          this.m_oIncreasEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nLeftIncreaseNum), ",");
        } else {
          VV_1.vv.uiMgr.isNull(this.m_oIncreasEdit.string) ? VV_1.vv.gameMgr.m_nRightIncreaseNum = 0 : VV_1.vv.gameMgr.m_nRightIncreaseNum = parseFloat(this.m_oIncreasEdit.string);
          VV_1.vv.gameMgr.m_nRightIncreaseNum > 1e4 ? VV_1.vv.gameMgr.m_nRightIncreaseNum = 1e4 : VV_1.vv.gameMgr.m_nRightIncreaseNum < 0 && (VV_1.vv.gameMgr.m_nRightIncreaseNum = 0);
          this.m_oIncreasEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nRightIncreaseNum), ",");
          this.m_oIncreasEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nRightIncreaseNum), ",");
        }
      };
      AvatiorAutoBetSettingPanel.prototype.onExceedEditBegin = function() {
        this.m_oExceedEdit.placeholderLabel.string = "";
        this.m_oExceedEdit.string = "";
        1 == this.m_nSelectAutoType ? VV_1.vv.gameMgr.m_nLeftExceedNum = 0 : VV_1.vv.gameMgr.m_nRightExceedNum = 0;
      };
      AvatiorAutoBetSettingPanel.prototype.onExceedEditEnd = function() {
        if (1 == this.m_nSelectAutoType) {
          VV_1.vv.uiMgr.isNull(this.m_oExceedEdit.string) ? VV_1.vv.gameMgr.m_nLeftExceedNum = 0 : VV_1.vv.gameMgr.m_nLeftExceedNum = parseFloat(this.m_oExceedEdit.string);
          VV_1.vv.gameMgr.m_nLeftExceedNum > 1e4 ? VV_1.vv.gameMgr.m_nLeftExceedNum = 1e4 : VV_1.vv.gameMgr.m_nLeftExceedNum < 0 && (VV_1.vv.gameMgr.m_nLeftExceedNum = 0);
          this.m_oExceedEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nLeftExceedNum), ",");
          this.m_oExceedEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nLeftExceedNum), ",");
        } else {
          VV_1.vv.uiMgr.isNull(this.m_oExceedEdit.string) ? VV_1.vv.gameMgr.m_nRightExceedNum = 0 : VV_1.vv.gameMgr.m_nRightExceedNum = parseFloat(this.m_oExceedEdit.string);
          VV_1.vv.gameMgr.m_nRightExceedNum > 1e4 ? VV_1.vv.gameMgr.m_nRightExceedNum = 1e4 : VV_1.vv.gameMgr.m_nRightExceedNum < 0 && (VV_1.vv.gameMgr.m_nRightExceedNum = 0);
          this.m_oExceedEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nRightExceedNum), ",");
          this.m_oExceedEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.m_nRightExceedNum), ",");
        }
      };
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u91d1\u5e01\u51cf\u5c11\u63a7\u5236\u8f93\u5165\u6846"
      }) ], AvatiorAutoBetSettingPanel.prototype, "m_oDecreasEdit", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u91d1\u5e01\u589e\u52a0\u63a7\u5236\u8f93\u5165\u6846"
      }) ], AvatiorAutoBetSettingPanel.prototype, "m_oIncreasEdit", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u5355\u573a\u6700\u5927\u8d62\u63a7\u5236\u8f93\u5165\u6846"
      }) ], AvatiorAutoBetSettingPanel.prototype, "m_oExceedEdit", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u6700\u5927\u51cf\u5c11\u9009\u62e9\u5f00\u5173\u6309\u94ae"
      }) ], AvatiorAutoBetSettingPanel.prototype, "m_oDecreaseToggle", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u6700\u5927\u589e\u52a0\u9009\u62e9\u5f00\u5173\u6309\u94ae"
      }) ], AvatiorAutoBetSettingPanel.prototype, "m_oIncreaseToggle", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5355\u53e5\u76c8\u5229\u9009\u62e9\u5f00\u5173\u6309\u94ae"
      }) ], AvatiorAutoBetSettingPanel.prototype, "m_oSingleToggle", void 0);
      AvatiorAutoBetSettingPanel = __decorate([ ccclass ], AvatiorAutoBetSettingPanel);
      return AvatiorAutoBetSettingPanel;
    }(cc.Component);
    exports.default = AvatiorAutoBetSettingPanel;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  AvatiorBetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "147fbXOLA9FQ6UeclwsM1rE", "AvatiorBetMgr");
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
    var AvatiorAutoBetSettingPanel_1 = require("./AvatiorAutoBetSettingPanel");
    var AvatiorConfig_1 = require("./AvatiorConfig");
    var AvatiorMsgs_1 = require("./AvatiorMsgs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvaitorBetMgr = function(_super) {
      __extends(AvaitorBetMgr, _super);
      function AvaitorBetMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oCurBetNumRightLabel = null;
        _this.m_oCurBetNumLeftLabel = null;
        _this.m_oCurBetNumRightEdit = null;
        _this.m_oCurBetNumLeftEdit = null;
        _this.m_oRightBetBtn = null;
        _this.m_oLeftBetBtn = null;
        _this.m_oRightCancelBetBtn = null;
        _this.m_oLeftCancelBetBtn = null;
        _this.m_oRightCashouttBtn = null;
        _this.m_oLeftCashoutBtn = null;
        _this.m_oCurCashoutRightLabel = null;
        _this.m_oCurCashoutLeftLabel = null;
        _this.m_oLeftNormalBetNode = null;
        _this.m_oLeftAutoBetNode = null;
        _this.m_oRightNormalBetNode = null;
        _this.m_oRightAutoBetNode = null;
        _this.m_oLeftBetZone = null;
        _this.m_oRightBetZone = null;
        _this.m_oLeftAutoCoutEdit = null;
        _this.m_oRightAutoCoutEdit = null;
        _this.m_oAutoSettingPrefab = null;
        _this.m_oLeftStopAutoBtn = null;
        _this.m_oRightStopAutoBtn = null;
        _this.m_oLeftMaskAllOp = [];
        _this.m_oRightMaskAllOp = [];
        _this.m_CurRightBetNum = 10;
        _this.m_CurLeftBetNum = 10;
        _this.m_CurMultNum = 0;
        _this.m_bLeftBet = false;
        _this.m_bRightBet = false;
        _this.m_bPreLeftBet = false;
        _this.m_bPreRightBet = false;
        _this.m_nLetAutoCOutRate = 1.1;
        _this.m_nRightAutoCOutRate = 1.1;
        _this.m_bLeftAutoCOut = false;
        _this.m_bRightAutoCout = false;
        _this.m_bLeftSendAutoCout = false;
        _this.m_bRightSendAutoCout = false;
        return _this;
      }
      AvaitorBetMgr.prototype.setRightBetInfo = function() {
        this.m_oCurBetNumRightLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurRightBetNum), ",") + " <size=22>INR</size>";
        this.m_oCurBetNumRightEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurRightBetNum), ",");
        this.m_oCurBetNumRightEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurRightBetNum), ",");
      };
      AvaitorBetMgr.prototype.setLeftBetInfo = function() {
        this.m_oCurBetNumLeftLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurLeftBetNum), ",") + " <size=22>INR</size>";
        this.m_oCurBetNumLeftEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurLeftBetNum), ",");
        this.m_oCurBetNumLeftEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurLeftBetNum), ",");
      };
      AvaitorBetMgr.prototype.onSelectRightBetNum = function(event, customData) {
        this.m_CurRightBetNum = parseFloat(customData);
        this.setRightBetInfo();
      };
      AvaitorBetMgr.prototype.onSelectLeftBetNum = function(event, customData) {
        this.m_CurLeftBetNum = parseFloat(customData);
        this.setLeftBetInfo();
      };
      AvaitorBetMgr.prototype.onClickReduceBetNum = function(event, customData) {
        if ("right" == customData) {
          this.m_CurRightBetNum -= 1;
          this.m_CurRightBetNum < 10 && (this.m_CurRightBetNum = 10);
          this.setRightBetInfo();
        } else {
          this.m_CurLeftBetNum -= 1;
          this.m_CurLeftBetNum < 10 && (this.m_CurLeftBetNum = 10);
          this.setLeftBetInfo();
        }
      };
      AvaitorBetMgr.prototype.onClickAddBetNum = function(event, customData) {
        if ("right" == customData) {
          this.m_CurRightBetNum += 1;
          this.m_CurRightBetNum > 8e3 && (this.m_CurRightBetNum = 8e3);
          this.setRightBetInfo();
        } else {
          this.m_CurLeftBetNum += 1;
          this.m_CurLeftBetNum > 8e3 && (this.m_CurLeftBetNum = 8e3);
          this.setLeftBetInfo();
        }
      };
      AvaitorBetMgr.prototype.doAutoRightBet = function() {
        this.updateRightBtnState();
        this.m_oRightMaskAllOp[0].active = true;
        this.m_oRightMaskAllOp[1].active = true;
        AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState && this.sendBetInfoToSever();
      };
      AvaitorBetMgr.prototype.updateRightBtnState = function() {
        if (!this.m_oRightCashouttBtn.active) {
          this.m_oRightBetBtn.active = false;
          this.m_oRightCashouttBtn.active = false;
          this.m_oRightCancelBetBtn.active = true;
        }
        VV_1.vv.gameMgr.m_bRightAutoBet && (this.m_bPreRightBet = true);
      };
      AvaitorBetMgr.prototype.onClickRightBet = function() {
        if (!VV_1.vv.userMgr.has_recharged) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Earn more with any recharge,would you like to add cash?", true, false, true, "No,Thanks");
          return;
        }
        if (VV_1.vv.gameMgr.lockBalance > Number(VV_1.vv.userMgr.coins) || this.m_CurRightBetNum > Number(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return;
        }
        VV_1.vv.gameMgr.gameState != AvatiorConfig_1.AvatiorTableState.Gameing && VV_1.vv.gameMgr.gameState != AvatiorConfig_1.AvatiorTableState.Result || this.updateRightBtnState();
        this.m_oRightMaskAllOp[0].active = true;
        this.m_oRightMaskAllOp[1].active = true;
        this.m_bPreRightBet = true;
        AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState && this.sendBetInfoToSever();
      };
      AvaitorBetMgr.prototype.onClickRightCancel = function() {
        this.m_oRightBetBtn.active = true;
        this.m_oRightCashouttBtn.active = false;
        this.m_oRightCancelBetBtn.active = false;
        this.m_oRightMaskAllOp[0].active = false;
        this.m_oRightMaskAllOp[1].active = false;
        AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState && VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
          option: 3,
          pos: 2,
          seed: VV_1.vv.gameMgr.seed
        });
        this.m_bRightBet = false;
        this.m_bPreRightBet = false;
        VV_1.vv.gameMgr.m_bRightAutoBet && this.onClickStopRightAuto();
      };
      AvaitorBetMgr.prototype.onClickRightCashout = function() {
        this.m_oRightBetBtn.active = !VV_1.vv.gameMgr.m_bRightAutoBet;
        this.m_oRightCashouttBtn.active = false;
        this.m_oRightCancelBetBtn.active = !!VV_1.vv.gameMgr.m_bRightAutoBet;
        this.m_bRightBet = false;
        this.m_bPreRightBet = !!VV_1.vv.gameMgr.m_bRightAutoBet;
        VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
          option: 2,
          pos: 2,
          seed: VV_1.vv.gameMgr.seed
        });
        if (!VV_1.vv.gameMgr.m_bRightAutoBet) {
          this.m_oRightMaskAllOp[0].active = false;
          this.m_oRightMaskAllOp[1].active = false;
        }
      };
      AvaitorBetMgr.prototype.doAutoLeftBet = function() {
        this.updateLeftBtnState();
        this.m_oLeftMaskAllOp[0].active = true;
        this.m_oLeftMaskAllOp[1].active = true;
        AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState && this.sendBetInfoToSever();
      };
      AvaitorBetMgr.prototype.updateLeftBtnState = function() {
        if (!this.m_oLeftCashoutBtn.active) {
          this.m_oLeftBetBtn.active = false;
          this.m_oLeftCashoutBtn.active = false;
          this.m_oLeftCancelBetBtn.active = true;
        }
        VV_1.vv.gameMgr.m_bLeftAutoBet && (this.m_bPreLeftBet = true);
      };
      AvaitorBetMgr.prototype.onClickLeftBet = function() {
        if (!VV_1.vv.userMgr.has_recharged) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Earn more with any recharge,would you like to add cash?", true, false, true, "No,Thanks");
          return;
        }
        if (VV_1.vv.gameMgr.lockBalance > Number(VV_1.vv.userMgr.coins) || this.m_CurLeftBetNum > Number(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return;
        }
        VV_1.vv.gameMgr.gameState != AvatiorConfig_1.AvatiorTableState.Gameing && VV_1.vv.gameMgr.gameState != AvatiorConfig_1.AvatiorTableState.Result || this.updateLeftBtnState();
        this.m_oLeftMaskAllOp[0].active = true;
        this.m_oLeftMaskAllOp[1].active = true;
        this.m_bPreLeftBet = true;
        AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState && this.sendBetInfoToSever();
      };
      AvaitorBetMgr.prototype.onClickLeftCancel = function() {
        this.m_oLeftBetBtn.active = true;
        this.m_oLeftCashoutBtn.active = false;
        this.m_oLeftCancelBetBtn.active = false;
        this.m_bLeftBet = false;
        this.m_bPreLeftBet = false;
        this.m_oLeftMaskAllOp[0].active = false;
        this.m_oLeftMaskAllOp[1].active = false;
        AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState && VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
          option: 3,
          pos: 1,
          seed: VV_1.vv.gameMgr.seed
        });
        VV_1.vv.gameMgr.m_bLeftAutoBet && this.onClickStopLeftAuto();
      };
      AvaitorBetMgr.prototype.onClickLeftCashout = function() {
        this.m_oLeftBetBtn.active = !VV_1.vv.gameMgr.m_bLeftAutoBet;
        this.m_oLeftCashoutBtn.active = false;
        this.m_oLeftCancelBetBtn.active = !!VV_1.vv.gameMgr.m_bLeftAutoBet;
        this.m_bLeftBet = false;
        this.m_bPreLeftBet = !!VV_1.vv.gameMgr.m_bLeftAutoBet;
        VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
          option: 2,
          pos: 1,
          seed: VV_1.vv.gameMgr.seed
        });
        if (!VV_1.vv.gameMgr.m_bLeftAutoBet) {
          this.m_oLeftMaskAllOp[0].active = false;
          this.m_oLeftMaskAllOp[1].active = false;
        }
      };
      AvaitorBetMgr.prototype.onClickRightInputBegin = function() {
        this.m_CurRightBetNum = 10;
        this.m_oCurBetNumRightEdit.placeholderLabel.string = "";
        this.m_oCurBetNumRightEdit.textLabel.string = "";
        this.m_oCurBetNumRightEdit.string = "";
      };
      AvaitorBetMgr.prototype.onClickLeftInputBegin = function() {
        this.m_CurLeftBetNum = 10;
        this.m_oCurBetNumLeftEdit.placeholderLabel.string = "";
        this.m_oCurBetNumLeftEdit.textLabel.string = "";
        this.m_oCurBetNumLeftEdit.string = "";
      };
      AvaitorBetMgr.prototype.onClickRightInputReturn = function() {
        VV_1.vv.uiMgr.isNull(this.m_oCurBetNumRightEdit.textLabel.string) ? this.m_CurRightBetNum = 10 : this.m_CurRightBetNum = parseFloat(this.m_oCurBetNumRightEdit.textLabel.string);
        this.m_CurRightBetNum <= 10 ? this.m_CurRightBetNum = 10 : this.m_CurRightBetNum >= 8e3 && (this.m_CurRightBetNum = 8e3);
        this.m_oCurBetNumRightEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurRightBetNum), ",");
        this.m_oCurBetNumRightEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurRightBetNum), ",");
        this.setRightBetInfo();
      };
      AvaitorBetMgr.prototype.onClickLeftInputReturn = function() {
        VV_1.vv.uiMgr.isNull(this.m_oCurBetNumLeftEdit.textLabel.string) ? this.m_CurLeftBetNum = 10 : this.m_CurLeftBetNum = parseFloat(this.m_oCurBetNumLeftEdit.textLabel.string);
        this.m_CurLeftBetNum <= 10 ? this.m_CurLeftBetNum = 10 : this.m_CurLeftBetNum >= 8e3 && (this.m_CurLeftBetNum = 8e3);
        this.m_oCurBetNumLeftEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurLeftBetNum), ",");
        this.m_oCurBetNumLeftEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_CurLeftBetNum), ",");
        this.setLeftBetInfo();
      };
      AvaitorBetMgr.prototype.onClickAutoPlayBtn = function(event, custom) {
        if (!VV_1.vv.userMgr.has_recharged) {
          VV_1.vv.uiMgr.betAddCashAlertTips("Earn more with any recharge,would you like to add cash?", true, false, true, "No,Thanks");
          return;
        }
        VV_1.vv.gameMgr.m_nAutoType += parseFloat(custom);
        var settingNode = cc.instantiate(this.m_oAutoSettingPrefab);
        if (settingNode) {
          var parentNode = cc.find("Canvas");
          parentNode.addChild(settingNode);
          settingNode.getComponent(AvatiorAutoBetSettingPanel_1.default).setSelectAutoType(parseFloat(custom));
        }
      };
      AvaitorBetMgr.prototype.updateBetOrAutoToggleInteractive = function(ntype, isChecked) {
        if (1 == ntype) {
          VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "betToggle").getComponent(cc.Toggle).interactable = isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "betToggle").getComponent(cc.Toggle).isChecked = isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "autoToggle").getComponent(cc.Toggle).interactable = isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "autoToggle").getComponent(cc.Toggle).isChecked = !isChecked;
        } else {
          VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "betToggle1").getComponent(cc.Toggle).interactable = isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "betToggle1").getComponent(cc.Toggle).isChecked = isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "autoToggle1").getComponent(cc.Toggle).interactable = isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "autoToggle1").getComponent(cc.Toggle).isChecked = !isChecked;
        }
      };
      AvaitorBetMgr.prototype.updateCashoutNum = function(multNum) {
        this.m_bRightBet && (this.m_oRightCashouttBtn.active = true);
        this.m_bLeftBet && (this.m_oLeftCashoutBtn.active = true);
        this.m_oCurCashoutRightLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(multNum * this.m_CurRightBetNum), ",") + " <size=22>INR</size>";
        this.m_oCurCashoutLeftLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(multNum * this.m_CurLeftBetNum), ",") + " <size=22>INR</size>";
      };
      AvaitorBetMgr.prototype.updteOpBtnShow = function() {
        if (AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState || AvatiorConfig_1.AvatiorTableState.Result == VV_1.vv.gameMgr.gameState) {
          if (VV_1.vv.gameMgr.m_bLeftAutoBet) {
            this.m_oLeftBetBtn.active = false;
            this.m_oLeftCancelBetBtn.active = true;
            this.m_oLeftMaskAllOp[0].active = true;
            this.m_oLeftMaskAllOp[1].active = true;
            this.m_oLeftCashoutBtn.active = false;
            if (AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState) {
              this.m_oLeftCancelBetBtn.getChildByName("desc").active = false;
              this.m_oLeftCancelBetBtn.getChildByName("desc1").setPosition(0, 40);
              this.m_oLeftCancelBetBtn.height = 120;
            } else {
              this.m_oLeftCancelBetBtn.getChildByName("desc").active = true;
              this.m_oLeftCancelBetBtn.getChildByName("desc1").setPosition(0, 18);
              this.m_oLeftCancelBetBtn.height = 70;
            }
          } else {
            this.m_oLeftBetBtn.active = !this.m_bPreLeftBet;
            this.m_oLeftCancelBetBtn.active = this.m_bPreLeftBet;
            this.m_oLeftMaskAllOp[0].active = this.m_bPreLeftBet;
            this.m_oLeftMaskAllOp[1].active = this.m_bPreLeftBet;
            this.m_oLeftCashoutBtn.active = false;
            if (AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState) {
              this.m_oLeftCancelBetBtn.getChildByName("desc").active = false;
              this.m_oLeftCancelBetBtn.getChildByName("desc1").setPosition(0, 40);
              this.m_oLeftCancelBetBtn.height = 120;
            } else {
              this.m_oLeftCancelBetBtn.getChildByName("desc").active = true;
              this.m_oLeftCancelBetBtn.getChildByName("desc1").setPosition(0, 18);
              this.m_oLeftCancelBetBtn.height = 70;
            }
          }
          if (VV_1.vv.gameMgr.m_bRightAutoBet) {
            this.m_oRightBetBtn.active = false;
            this.m_oRightCancelBetBtn.active = true;
            this.m_oRightMaskAllOp[0].active = true;
            this.m_oRightMaskAllOp[1].active = true;
            this.m_oRightCashouttBtn.active = false;
            if (AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState) {
              this.m_oRightCancelBetBtn.getChildByName("desc").active = false;
              this.m_oRightCancelBetBtn.getChildByName("desc1").setPosition(0, 40);
              this.m_oRightCancelBetBtn.height = 120;
            } else {
              this.m_oRightCancelBetBtn.getChildByName("desc").active = true;
              this.m_oRightCancelBetBtn.getChildByName("desc1").setPosition(0, 18);
              this.m_oRightCancelBetBtn.height = 70;
            }
          } else {
            this.m_oRightBetBtn.active = !this.m_bPreRightBet;
            this.m_oRightCancelBetBtn.active = this.m_bPreRightBet;
            this.m_oRightMaskAllOp[0].active = this.m_bPreRightBet;
            this.m_oRightMaskAllOp[1].active = this.m_bPreRightBet;
            this.m_oRightCashouttBtn.active = false;
            if (AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState) {
              this.m_oRightCancelBetBtn.getChildByName("desc").active = false;
              this.m_oRightCancelBetBtn.getChildByName("desc1").setPosition(0, 40);
              this.m_oRightCancelBetBtn.height = 120;
            } else {
              this.m_oRightCancelBetBtn.getChildByName("desc").active = true;
              this.m_oRightCancelBetBtn.getChildByName("desc1").setPosition(0, 18);
              this.m_oRightCancelBetBtn.height = 70;
            }
          }
          if (AvatiorConfig_1.AvatiorTableState.Result == VV_1.vv.gameMgr.gameState) {
            this.m_bLeftBet = false;
            this.m_bRightBet = false;
          }
        } else if (AvatiorConfig_1.AvatiorTableState.Gameing == VV_1.vv.gameMgr.gameState) {
          this.m_oLeftBetBtn.active = !this.m_bLeftBet;
          this.m_oLeftCancelBetBtn.active = !this.m_bLeftBet && this.m_bPreLeftBet;
          this.m_oLeftCancelBetBtn.getChildByName("desc").active = true;
          this.m_oLeftCancelBetBtn.getChildByName("desc1").setPosition(0, 18);
          this.m_oLeftCancelBetBtn.height = 70;
          this.m_oLeftCashoutBtn.active = this.m_bLeftBet;
          if (this.m_bLeftBet) {
            this.m_oLeftMaskAllOp[0].active = true;
            this.m_oLeftMaskAllOp[1].active = true;
          }
          this.m_oRightBetBtn.active = !this.m_bRightBet;
          this.m_oRightCancelBetBtn.active = !this.m_bRightBet && this.m_bPreRightBet;
          this.m_oRightCancelBetBtn.getChildByName("desc").active = true;
          this.m_oRightCancelBetBtn.getChildByName("desc1").setPosition(0, 18);
          this.m_oRightCancelBetBtn.height = 70;
          this.m_oRightCashouttBtn.active = this.m_bRightBet;
          if (this.m_bRightBet) {
            this.m_oRightMaskAllOp[0].active = true;
            this.m_oRightMaskAllOp[1].active = true;
          }
        }
      };
      AvaitorBetMgr.prototype.updteAutoPlayCount = function() {
        if (VV_1.vv.gameMgr.m_bLeftAutoBet) {
          this.m_oLeftStopAutoBtn.active = true;
          this.m_oLeftStopAutoBtn.getChildByName("count").getComponent(cc.Label).string = "stop(" + VV_1.vv.gameMgr.m_nLeftAutoRound + ")";
        }
        if (VV_1.vv.gameMgr.m_bRightAutoBet) {
          this.m_oRightStopAutoBtn.active = true;
          this.m_oRightStopAutoBtn.getChildByName("count").getComponent(cc.Label).string = "stop(" + VV_1.vv.gameMgr.m_nRightAutoRound + ")";
        }
      };
      AvaitorBetMgr.prototype.checkAndSendBet = function() {
        AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState && (this.m_bPreLeftBet || this.m_bPreRightBet) && this.sendBetInfoToSever();
      };
      AvaitorBetMgr.prototype.checkCOut = function(mult) {
        if (!this.m_bLeftSendAutoCout && this.m_bLeftAutoCOut && mult >= this.m_nLetAutoCOutRate && this.m_bLeftBet) {
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
            option: 2,
            pos: 1,
            seed: VV_1.vv.gameMgr.seed,
            plan_cashmult: this.m_nLetAutoCOutRate
          });
          this.m_bLeftSendAutoCout = true;
          if (VV_1.vv.gameMgr.m_bLeftAutoBet) {
            this.m_oLeftBetBtn.active = false;
            this.m_oLeftCashoutBtn.active = false;
            this.m_oLeftCancelBetBtn.active = true;
            this.m_oLeftMaskAllOp[0].active = true;
            this.m_oLeftMaskAllOp[1].active = true;
            this.m_bLeftBet = false;
            this.m_bPreLeftBet = true;
          } else {
            this.m_oLeftBetBtn.active = true;
            this.m_oLeftCashoutBtn.active = false;
            this.m_oLeftCancelBetBtn.active = false;
            this.m_oLeftMaskAllOp[0].active = false;
            this.m_oLeftMaskAllOp[1].active = false;
            this.m_bLeftBet = false;
            this.m_bPreLeftBet = false;
          }
        }
        if (!this.m_bRightSendAutoCout && this.m_bRightAutoCout && mult >= this.m_nRightAutoCOutRate && this.m_bRightBet) {
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
            option: 2,
            pos: 2,
            seed: VV_1.vv.gameMgr.seed,
            plan_cashmult: this.m_nRightAutoCOutRate
          });
          this.m_bRightSendAutoCout = true;
          if (VV_1.vv.gameMgr.m_bRightAutoBet) {
            this.m_oRightBetBtn.active = false;
            this.m_oRightCashouttBtn.active = false;
            this.m_oRightCancelBetBtn.active = true;
            this.m_oRightMaskAllOp[0].active = true;
            this.m_oRightMaskAllOp[1].active = true;
            this.m_bRightBet = false;
            this.m_bPreRightBet = true;
          } else {
            this.m_oRightBetBtn.active = true;
            this.m_oRightCashouttBtn.active = false;
            this.m_oRightCancelBetBtn.active = false;
            this.m_oRightMaskAllOp[0].active = false;
            this.m_oRightMaskAllOp[1].active = false;
            this.m_bRightBet = false;
            this.m_bPreRightBet = false;
          }
        }
      };
      AvaitorBetMgr.prototype.sendBetInfoToSever = function() {
        if (this.m_bPreLeftBet && !this.m_bLeftBet) if ((VV_1.vv.gameMgr.lockBalance > Number(VV_1.vv.userMgr.coins) || this.m_CurLeftBetNum > Number(VV_1.vv.userMgr.coins)) && VV_1.vv.gameMgr.m_bLeftAutoBet) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          this.onClickStopLeftAuto();
          this.m_oLeftBetBtn.active = true;
          this.m_oLeftCashoutBtn.active = false;
          this.m_oLeftCancelBetBtn.active = false;
        } else {
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
            option: 1,
            pos: 1,
            chip: this.m_CurLeftBetNum * VV_1.vv.global.exchange_rate,
            seed: VV_1.vv.gameMgr.seed,
            plan_cashmult: this.m_bLeftAutoCOut ? this.m_nLetAutoCOutRate : 0
          });
          if (1 == VV_1.vv.gameMgr.m_nAutoType || 3 == VV_1.vv.gameMgr.m_nAutoType) {
            this.m_bPreLeftBet = true;
            VV_1.vv.gameMgr.m_nLeftAutoRound -= 1;
            this.updteAutoPlayCount();
          } else this.m_bPreLeftBet = false;
        }
        if (this.m_bPreRightBet && !this.m_bRightBet) if ((VV_1.vv.gameMgr.lockBalance > Number(VV_1.vv.userMgr.coins) || this.m_bPreLeftBet && this.m_CurRightBetNum > Number(VV_1.vv.userMgr.coins) - this.m_CurLeftBetNum || !this.m_bPreLeftBet && this.m_CurRightBetNum > Number(VV_1.vv.userMgr.coins)) && VV_1.vv.gameMgr.m_bRightAutoBet) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          this.onClickStopRightAuto();
          this.m_oRightBetBtn.active = true;
          this.m_oRightCancelBetBtn.active = false;
          this.m_oRightCashouttBtn.active = false;
        } else {
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
            option: 1,
            pos: 2,
            chip: this.m_CurRightBetNum * VV_1.vv.global.exchange_rate,
            seed: VV_1.vv.gameMgr.seed,
            plan_cashmult: this.m_bRightAutoCout ? this.m_nRightAutoCOutRate : 0
          });
          if (2 == VV_1.vv.gameMgr.m_nAutoType || 3 == VV_1.vv.gameMgr.m_nAutoType) {
            this.m_bPreRightBet = true;
            VV_1.vv.gameMgr.m_nRightAutoRound -= 1;
            this.updteAutoPlayCount();
          } else this.m_bPreRightBet = false;
        }
      };
      AvaitorBetMgr.prototype.onClickAutoMenuToggle = function(event, custom) {
        switch (event.target.name) {
         case "betToggle":
          var self = this;
          self.m_oLeftAutoBetNode.active = false;
          cc.tween(this.m_oLeftNormalBetNode).to(.2, {
            position: new cc.Vec3(this.m_oLeftNormalBetNode.position.x, this.m_oLeftNormalBetNode.position.y - 20, 0)
          }).call(function() {}).start();
          break;

         case "autoToggle":
          var self = this;
          cc.tween(this.m_oLeftNormalBetNode).to(.2, {
            position: new cc.Vec3(this.m_oLeftNormalBetNode.position.x, this.m_oLeftNormalBetNode.position.y + 20, 0)
          }).call(function() {
            self.m_oLeftAutoBetNode.active = true;
          }).start();
          break;

         case "betToggle1":
          var self = this;
          self.m_oRightAutoBetNode.active = false;
          cc.tween(this.m_oRightNormalBetNode).to(.2, {
            position: new cc.Vec3(this.m_oRightNormalBetNode.position.x, this.m_oRightNormalBetNode.position.y - 20, 0)
          }).call(function() {}).start();
          break;

         case "autoToggle1":
          var self = this;
          cc.tween(this.m_oRightNormalBetNode).to(.2, {
            position: new cc.Vec3(this.m_oRightNormalBetNode.position.x, this.m_oRightNormalBetNode.position.y + 20, 0)
          }).call(function() {
            self.m_oRightAutoBetNode.active = true;
          }).start();
        }
      };
      AvaitorBetMgr.prototype.cancelRightZoneOp = function() {
        this.m_bPreRightBet = false;
        this.m_oRightCancelBetBtn.active = false;
        this.m_oRightCashouttBtn.active = false;
        this.m_oRightBetBtn.active = true;
        if (VV_1.vv.gameMgr.m_bRightAutoBet) {
          this.onClickStopRightAuto();
          this.updateBetOrAutoToggleInteractive(2, true);
        }
      };
      AvaitorBetMgr.prototype.onClickSingleShow = function(event, custom) {
        if (this.m_bRightBet) return;
        event.target.active = false;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "open").active = true;
        this.m_oRightAutoBetNode.active = false;
        this.cancelRightZoneOp();
        var self = this;
        cc.tween(this.m_oLeftBetZone).to(.05, {
          position: new cc.Vec3(0, 0, 0)
        }).start();
        cc.tween(this.m_oRightBetZone).to(.2, {
          position: new cc.Vec3(0, 0, 0)
        }).call(function() {
          VV_1.vv.uiMgr.seekNodeByName(self.m_oRightBetZone, "betToggle1").getComponent(cc.Toggle).isChecked = true;
          VV_1.vv.uiMgr.seekNodeByName(self.m_oRightBetZone, "autoToggle1").getComponent(cc.Toggle).isChecked = false;
          VV_1.vv.uiMgr.seekNodeByName(self.m_oRightBetZone, "betToggle1").getComponent(cc.Toggle).interactable = true;
          VV_1.vv.uiMgr.seekNodeByName(self.m_oRightBetZone, "autoToggle1").getComponent(cc.Toggle).interactable = true;
          VV_1.vv.uiMgr.seekNodeByName(self.m_oRightBetZone, "select1").getComponent(cc.Toggle).isChecked = false;
        }).start();
        this.m_oRightMaskAllOp[0].active = false;
        this.m_oRightMaskAllOp[1].active = false;
      };
      AvaitorBetMgr.prototype.onClickDoubleShow = function(event, custom) {
        this.m_oRightAutoBetNode.active = false;
        event.target.active = false;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "guanbi").active = true;
        var self = this;
        cc.tween(this.m_oLeftBetZone).to(.05, {
          position: new cc.Vec3(-234.51, -3.655, 0)
        }).start();
        cc.tween(this.m_oRightBetZone).to(.2, {
          position: new cc.Vec3(236.149, -3.655, 0)
        }).call(function() {
          VV_1.vv.uiMgr.seekNodeByName(self.m_oRightBetZone, "betToggle1").getComponent(cc.Toggle).isChecked = true;
          VV_1.vv.uiMgr.seekNodeByName(self.m_oRightBetZone, "autoToggle1").getComponent(cc.Toggle).isChecked = false;
        }).start();
      };
      AvaitorBetMgr.prototype.onClickAutoCashOutToggle = function(event, custom) {
        var isChecked = event.node.getComponent(cc.Toggle).isChecked;
        switch (event.node.name) {
         case "select":
          this.m_oLeftAutoCoutEdit.enabled = isChecked;
          this.m_bLeftBet || (this.m_bLeftAutoCOut = isChecked);
          VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "betToggle").getComponent(cc.Toggle).interactable = !isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "autoToggle").getComponent(cc.Toggle).interactable = !isChecked;
          break;

         case "select1":
          this.m_oRightAutoCoutEdit.enabled = isChecked;
          this.m_bRightBet || (this.m_bRightAutoCout = isChecked);
          VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "betToggle1").getComponent(cc.Toggle).interactable = !isChecked;
          VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "autoToggle1").getComponent(cc.Toggle).interactable = !isChecked;
        }
      };
      AvaitorBetMgr.prototype.onClickStopLeftAuto = function() {
        if (this.m_bLeftBet && AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState) {
          this.m_oLeftBetBtn.active = true;
          this.m_oLeftCashoutBtn.active = false;
          this.m_oLeftCancelBetBtn.active = false;
          this.m_bLeftBet = false;
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
            option: 3,
            pos: 1,
            seed: VV_1.vv.gameMgr.seed
          });
        }
        this.m_oLeftAutoBetNode.active = false;
        this.m_oLeftStopAutoBtn.active = false;
        this.m_bPreLeftBet = false;
        this.m_oLeftAutoCoutEdit.enabled = false;
        this.m_bLeftBet || (this.m_bLeftAutoCOut = false);
        VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "select").getComponent(cc.Toggle).isChecked = false;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "select").getComponent(cc.Toggle).interactable = true;
        if (AvatiorConfig_1.AvatiorTableState.Gameing == VV_1.vv.gameMgr.gameState && !this.m_oLeftCashoutBtn.active) {
          this.m_oLeftBetBtn.active = true;
          this.m_oLeftCashoutBtn.active = false;
          this.m_oLeftCancelBetBtn.active = false;
        }
        this.m_oLeftMaskAllOp[0].active = false;
        this.m_oLeftMaskAllOp[1].active = false;
        VV_1.vv.gameMgr.m_nAutoType -= 1;
        cc.tween(this.m_oLeftNormalBetNode).to(.2, {
          position: new cc.Vec3(this.m_oLeftNormalBetNode.position.x, this.m_oLeftNormalBetNode.position.y - 20, 0)
        }).call(function() {}).start();
        VV_1.vv.gameMgr.resetAutoPlayByType(1);
        this.updateBetOrAutoToggleInteractive(1, true);
        VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "betToggle").getComponent(cc.Toggle).isChecked = true;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "autoToggle").getComponent(cc.Toggle).isChecked = false;
      };
      AvaitorBetMgr.prototype.onClickStopRightAuto = function() {
        if (this.m_bRightBet && AvatiorConfig_1.AvatiorTableState.Bet == VV_1.vv.gameMgr.gameState) {
          this.m_oRightBetBtn.active = true;
          this.m_oRightCashouttBtn.active = false;
          this.m_oRightCancelBetBtn.active = false;
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorPlayerOptionRequest, {
            option: 3,
            pos: 2,
            seed: VV_1.vv.gameMgr.seed
          });
          this.m_bRightBet = false;
        }
        this.m_oRightAutoBetNode.active = false;
        this.m_oRightStopAutoBtn.active = false;
        this.m_bPreRightBet = false;
        VV_1.vv.gameMgr.m_nAutoType -= 2;
        this.m_oRightAutoCoutEdit.enabled = false;
        this.m_bRightBet || (this.m_bRightAutoCout = false);
        VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "select1").getComponent(cc.Toggle).isChecked = false;
        if (AvatiorConfig_1.AvatiorTableState.Gameing == VV_1.vv.gameMgr.gameState && !this.m_oRightCashouttBtn.active) {
          this.m_oRightBetBtn.active = true;
          this.m_oRightCancelBetBtn.active = false;
          this.m_oRightCashouttBtn.active = false;
        }
        this.m_oRightMaskAllOp[0].active = true;
        this.m_oRightMaskAllOp[1].active = true;
        cc.tween(this.m_oRightNormalBetNode).to(.2, {
          position: new cc.Vec3(this.m_oRightNormalBetNode.position.x, this.m_oRightNormalBetNode.position.y - 20, 0)
        }).call(function() {}).start();
        VV_1.vv.gameMgr.resetAutoPlayByType(2);
        this.updateBetOrAutoToggleInteractive(2, true);
        VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "betToggle1").getComponent(cc.Toggle).isChecked = true;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oRightBetZone, "autoToggle1").getComponent(cc.Toggle).isChecked = false;
        VV_1.vv.uiMgr.seekNodeByName(this.m_oLeftBetZone, "select").getComponent(cc.Toggle).interactable = true;
      };
      AvaitorBetMgr.prototype.onLeftRateEditBegin = function() {
        this.m_oLeftAutoCoutEdit.placeholderLabel.string = "";
        this.m_oLeftAutoCoutEdit.textLabel.string = "";
        this.m_oLeftAutoCoutEdit.string = "";
        this.m_nLetAutoCOutRate = 1.01;
      };
      AvaitorBetMgr.prototype.onLeftRateEditEnd = function() {
        VV_1.vv.uiMgr.isNull(this.m_oLeftAutoCoutEdit.textLabel.string) ? this.m_nLetAutoCOutRate = 1.1 : this.m_nLetAutoCOutRate = parseFloat(this.m_oLeftAutoCoutEdit.textLabel.string);
        this.m_nLetAutoCOutRate < 1.01 ? this.m_nLetAutoCOutRate = 1.01 : this.m_nLetAutoCOutRate > 100 && (this.m_nLetAutoCOutRate = 100);
        this.m_oLeftAutoCoutEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_nLetAutoCOutRate), ",");
        this.m_oLeftAutoCoutEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_nLetAutoCOutRate), ",");
      };
      AvaitorBetMgr.prototype.onRightRateEditBegin = function() {
        this.m_oRightAutoCoutEdit.placeholderLabel.string = "";
        this.m_oRightAutoCoutEdit.textLabel.string = "";
        this.m_oRightAutoCoutEdit.string = "";
        this.m_nRightAutoCOutRate = 1.01;
      };
      AvaitorBetMgr.prototype.onRightRateEditEnd = function() {
        VV_1.vv.uiMgr.isNull(this.m_oRightAutoCoutEdit.textLabel.string) ? this.m_nRightAutoCOutRate = 1.1 : this.m_nRightAutoCOutRate = parseFloat(this.m_oRightAutoCoutEdit.textLabel.string);
        this.m_nRightAutoCOutRate < 1.01 ? this.m_nRightAutoCOutRate = 1.01 : this.m_nRightAutoCOutRate > 100 && (this.m_nRightAutoCOutRate = 100);
        this.m_oRightAutoCoutEdit.textLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_nRightAutoCOutRate), ",");
        this.m_oRightAutoCoutEdit.placeholderLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(this.m_nRightAutoCOutRate), ",");
      };
      __decorate([ property({
        type: cc.RichText,
        tooltip: "\u5f53\u524d\u53f3\u8fb9\u4e0b\u6ce8\u503c"
      }) ], AvaitorBetMgr.prototype, "m_oCurBetNumRightLabel", void 0);
      __decorate([ property({
        type: cc.RichText,
        tooltip: "\u5f53\u524d\u5de6\u8fb9\u4e0b\u6ce8\u503c"
      }) ], AvaitorBetMgr.prototype, "m_oCurBetNumLeftLabel", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u53f3\u4fa7\u81ea\u8f93\u5165\u4e0b\u6ce8\u503c"
      }) ], AvaitorBetMgr.prototype, "m_oCurBetNumRightEdit", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u5de6\u4fa7\u81ea\u8f93\u5165\u4e0b\u6ce8\u503c"
      }) ], AvaitorBetMgr.prototype, "m_oCurBetNumLeftEdit", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u4fa7\u4e0b\u6ce8\u6309\u94ae"
      }) ], AvaitorBetMgr.prototype, "m_oRightBetBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u4fa7\u4e0b\u6ce8\u6309\u94ae"
      }) ], AvaitorBetMgr.prototype, "m_oLeftBetBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u4fa7\u53d6\u6d88\u6309\u94ae"
      }) ], AvaitorBetMgr.prototype, "m_oRightCancelBetBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u4fa7\u53d6\u6d88\u6309\u94ae"
      }) ], AvaitorBetMgr.prototype, "m_oLeftCancelBetBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u4fa7\u8df3\u8f66\u6309\u94ae"
      }) ], AvaitorBetMgr.prototype, "m_oRightCashouttBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u4fa7\u8df3\u8f66\u6309\u94ae"
      }) ], AvaitorBetMgr.prototype, "m_oLeftCashoutBtn", void 0);
      __decorate([ property({
        type: cc.RichText,
        tooltip: "\u5f53\u524d\u53f3\u8fb9\u8df3\u8f66\u500d\u7387"
      }) ], AvaitorBetMgr.prototype, "m_oCurCashoutRightLabel", void 0);
      __decorate([ property({
        type: cc.RichText,
        tooltip: "\u5f53\u524d\u5de6\u8fb9\u8df3\u8f66\u500d\u7387"
      }) ], AvaitorBetMgr.prototype, "m_oCurCashoutLeftLabel", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u4fa7\u6b63\u5e38\u4e0b\u6ce8\u533a"
      }) ], AvaitorBetMgr.prototype, "m_oLeftNormalBetNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u4fa7\u81ea\u52a8\u4e0b\u6ce8\u533a"
      }) ], AvaitorBetMgr.prototype, "m_oLeftAutoBetNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u4fa7\u6b63\u5e38\u4e0b\u6ce8\u533a"
      }) ], AvaitorBetMgr.prototype, "m_oRightNormalBetNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u4fa7\u81ea\u52a8\u4e0b\u6ce8\u533a"
      }) ], AvaitorBetMgr.prototype, "m_oRightAutoBetNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u4fa7\u64cd\u4f5c\u533a"
      }) ], AvaitorBetMgr.prototype, "m_oLeftBetZone", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u4fa7\u64cd\u4f5c\u533a"
      }) ], AvaitorBetMgr.prototype, "m_oRightBetZone", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u5de6\u4fa7\u81ea\u52a8\u63d0\u53d6\u8f93\u5165\u6846"
      }) ], AvaitorBetMgr.prototype, "m_oLeftAutoCoutEdit", void 0);
      __decorate([ property({
        type: cc.EditBox,
        tooltip: "\u5de6\u4fa7\u81ea\u52a8\u63d0\u53d6\u8f93\u5165\u6846"
      }) ], AvaitorBetMgr.prototype, "m_oRightAutoCoutEdit", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u8bbe\u7f6e\u81ea\u52a8\u9009\u62e9"
      }) ], AvaitorBetMgr.prototype, "m_oAutoSettingPrefab", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u4fa7\u505c\u6b62\u81ea\u52a8\u4e0b\u6ce8"
      }) ], AvaitorBetMgr.prototype, "m_oLeftStopAutoBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u4fa7\u505c\u6b62\u4e0b\u6ce8"
      }) ], AvaitorBetMgr.prototype, "m_oRightStopAutoBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u63a7\u5236\u5de6\u4fa7\u64cd\u4f5c\u6309\u94ae\u4e0d\u53ef\u70b9\u51fb\u8499\u7248"
      }) ], AvaitorBetMgr.prototype, "m_oLeftMaskAllOp", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u63a7\u5236\u53f3\u4fa7\u64cd\u4f5c\u6309\u94ae\u4e0d\u53ef\u70b9\u51fb\u8499\u7248"
      }) ], AvaitorBetMgr.prototype, "m_oRightMaskAllOp", void 0);
      AvaitorBetMgr = __decorate([ ccclass ], AvaitorBetMgr);
      return AvaitorBetMgr;
    }(cc.Component);
    exports.default = AvaitorBetMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./AvatiorAutoBetSettingPanel": "AvatiorAutoBetSettingPanel",
    "./AvatiorConfig": "AvatiorConfig",
    "./AvatiorMsgs": "AvatiorMsgs"
  } ],
  AvatiorConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24c29phSIFPr7JKBam5/Kvz", "AvatiorConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AvatiorTableState = void 0;
    var AvatiorTableState;
    (function(AvatiorTableState) {
      AvatiorTableState[AvatiorTableState["None"] = 0] = "None";
      AvatiorTableState[AvatiorTableState["Bet"] = 1] = "Bet";
      AvatiorTableState[AvatiorTableState["Gameing"] = 2] = "Gameing";
      AvatiorTableState[AvatiorTableState["Result"] = 3] = "Result";
    })(AvatiorTableState = exports.AvatiorTableState || (exports.AvatiorTableState = {}));
    cc._RF.pop();
  }, {} ],
  AvatiorDraw: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5279/rDbRPW7IoaDLZYsWc", "AvatiorDraw");
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
    var AvatiorConfig_1 = require("./AvatiorConfig");
    var AvatiorMsgs_1 = require("./AvatiorMsgs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MAX_WIDTH = 781;
    var PIC_SCALE_X = .95;
    var PIC_SCALE_Y = .45;
    var AvatiorDraw = function(_super) {
      __extends(AvatiorDraw, _super);
      function AvatiorDraw() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oPlaneNode = null;
        _this.m_oRateBgNode = null;
        _this.m_oRateLabel = null;
        _this.pathNode = [];
        _this.sinPathNode = [];
        _this.totlaGrids = 720;
        _this.totalSeconds = 8;
        _this.gridsPerSecond = _this.totlaGrids / _this.totalSeconds;
        _this.caculateY = 260;
        _this.m_bIsPlayFlying = false;
        _this.m_nCurMult = 1;
        _this.m_nMultTimer = 1;
        _this.sinLineIndex = 0;
        _this.isPlayAni = false;
        _this.timer = 0;
        _this.index = 0;
        _this.lastTime = -1;
        _this.runTimer = null;
        _this.timerAdd = [ .02, .05, .04 ];
        _this.timerAdd1 = [ .2, .3, .5 ];
        _this.sinpathTimer = null;
        return _this;
      }
      AvatiorDraw.prototype.onLoad = function() {
        this.addNetListener();
        this.caculatePath();
      };
      AvatiorDraw.prototype.onDisable = function() {
        this.removeNetListener();
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      AvatiorDraw.prototype.addNetListener = function() {
        this.removeNetListener();
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorSysnMultBroadCast, this.avatiorSysMult, this);
      };
      AvatiorDraw.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorSysnMultBroadCast, this.avatiorSysMult, this);
      };
      AvatiorDraw.prototype.switchPlaneState = function() {
        switch (VV_1.vv.gameMgr.gameState) {
         case AvatiorConfig_1.AvatiorTableState.Bet:
          this.m_oPlaneNode.active = true;
          this.node.children[0].scaleX = PIC_SCALE_X;
          this.node.children[0].scaleY = PIC_SCALE_Y;
          this.node.width = 0;
          this.m_oPlaneNode.position = new cc.Vec3(0, 0, 0);
          break;

         case AvatiorConfig_1.AvatiorTableState.Gameing:
          this.m_bIsPlayFlying = true;
          this.setStart();
          break;

         case AvatiorConfig_1.AvatiorTableState.Result:
          this.m_bIsPlayFlying = false;
          this.m_oRateBgNode.active = false;
          this.m_oRateLabel.string = "";
          this.m_oRateLabel.node.active = false;
          this.playFlyAway();
        }
      };
      AvatiorDraw.prototype.playFlyAway = function() {
        var self = this;
        cc.tween(this.m_oPlaneNode).to(.2, {
          position: new cc.Vec3(960, 420, 0)
        }).call(function() {
          self.timer = 0;
          self.index = 0;
        }).start();
        this.m_nCurMult = 1;
        this.m_nMultTimer = 1;
        this.sinLineIndex = 0;
        this.lastTime = 0;
        this.isPlayAni = false;
        this.node.children[0].getComponent(cc.Animation).stop();
      };
      AvatiorDraw.prototype.setStart = function() {
        var _this = this;
        this.m_oRateLabel.node.active = true;
        VV_1.vv.timerMgr.deleteByTimer(this.runTimer);
        var self = this;
        this.runTimer = VV_1.vv.timerMgr.addScheduleByObject({
          callback: function(timerData, dt) {},
          target: this,
          intervalTime: 999,
          updateCallback: function(timerData, dt) {
            if (Math.abs(timerData.runTime - self.lastTime) > 15) {
              VV_1.vv.timerMgr.deleteByTimer(self.runTimer);
              return;
            }
            _this.pushPathByTime(timerData.runTime);
          }
        });
      };
      AvatiorDraw.prototype.avatiorSysMult = function(data) {
        if (data && data.time) {
          -1 == this.lastTime && this.initGame(data.time);
          this.lastTime = data.time;
          this.runTimer.runTime = data.time;
        }
      };
      AvatiorDraw.prototype.initGame = function(time) {
        var mult = .97 * (Math.exp(.08 * time) - 1) + 1;
        this.m_nCurMult = mult;
      };
      AvatiorDraw.prototype.pushPathByTime = function(time) {
        if (this.m_bIsPlayFlying) {
          var mult = .97 * (Math.exp(.08 * time) - 1) + 1;
          this.m_nCurMult = mult;
          this.setMultLable(this.m_nCurMult);
        }
      };
      AvatiorDraw.prototype.setMultLable = function(mult) {
        this.m_oRateBgNode.active = true;
        this.m_oRateLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(mult), ",") + "x";
        this.m_oRateBgNode.color = this.getColor(mult);
        VV_1.vv.gameMgr.betMgr.updateCashoutNum(mult);
        VV_1.vv.gameMgr.betMgr.checkCOut(mult);
      };
      AvatiorDraw.prototype.getColor = function(mult) {
        return mult > 10 ? cc.color(232, 62, 140) : mult > 2 ? cc.color(135, 52, 244) : cc.color(44, 139, 205);
      };
      AvatiorDraw.prototype.update = function(dt) {
        if (this.m_bIsPlayFlying) {
          this.timer += dt;
          if (this.node.width >= MAX_WIDTH) {
            if (!this.isPlayAni) {
              this.node.children[0].getComponent(cc.Animation).play("spineline", 0);
              this.isPlayAni = true;
              this.node.width = 910;
            }
            this.drawSinLine();
            return;
          }
          this.drawLine();
        }
      };
      AvatiorDraw.prototype.caculatePath = function() {
        for (var i = 0; i <= MAX_WIDTH + 5; i++) {
          var pos = this.createPoint(i);
          this.pathNode[i] = new cc.Vec2(i, pos);
        }
      };
      AvatiorDraw.prototype.drawLine = function() {
        this.index = Math.floor(this.timer * this.gridsPerSecond);
        var self = this;
        if (this.index < this.pathNode.length) {
          for (var i = 0; i < self.index; i++) 0 == i || i < self.pathNode.length && this.m_oPlaneNode.setPosition(self.pathNode[i].x - 30, self.pathNode[i].y);
          this.node.width = self.pathNode[self.index].x;
        }
      };
      AvatiorDraw.prototype.drawSinLine = function() {
        var line = this.node.children[0];
        var x = line.width * line.scaleX;
        var y = line.height * line.scaleY;
        this.m_oPlaneNode.setPosition(x - 30, y - 5);
      };
      AvatiorDraw.prototype.createPoint = function(x) {
        var resultY = 185 * Math.sin(1.5 * Math.PI + .5 * Math.PI / 720 * x) + 185 + (x > 620 ? .2 * (x - 620) : 0);
        return resultY;
      };
      AvatiorDraw.prototype.caculateSinPath1 = function() {
        var _this = this;
        var sinTimer = 8;
        var self = this;
        this.sinpathTimer = VV_1.vv.timerMgr.addSchedule(function() {
          sinTimer += 1 / 60;
          _this.caculateSinPath(sinTimer);
          sinTimer >= 14 && VV_1.vv.timerMgr.deleteByTimer(self.sinpathTimer);
        }, this, 0, -1);
      };
      AvatiorDraw.prototype.caculateSinPath = function(sinTimer) {
        var caculateTimer = sinTimer;
        sinTimer - 8 >= 3 && (caculateTimer = 22 - sinTimer);
        this.caculateY = 260 - 40 * (caculateTimer - 8);
        var sinPathNodeTmp = [];
        for (var i = 0; i < 720; i++) {
          var pos = this.createSinPoint(i);
          sinPathNodeTmp[i] = new cc.Vec2(i, pos);
        }
        this.sinPathNode && this.sinPathNode.push(sinPathNodeTmp);
      };
      AvatiorDraw.prototype.createSinPoint = function(x) {
        var sinY = Math.sin(1.5 * Math.PI + .5 * Math.PI / 720 * x) * this.caculateY + this.caculateY;
        return sinY;
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u98de\u673a"
      }) ], AvatiorDraw.prototype, "m_oPlaneNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u80cc\u666f\u989c\u8272\u8282\u70b9"
      }) ], AvatiorDraw.prototype, "m_oRateBgNode", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u500d\u7387"
      }) ], AvatiorDraw.prototype, "m_oRateLabel", void 0);
      AvatiorDraw = __decorate([ ccclass ], AvatiorDraw);
      return AvatiorDraw;
    }(cc.Component);
    exports.default = AvatiorDraw;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./AvatiorConfig": "AvatiorConfig",
    "./AvatiorMsgs": "AvatiorMsgs"
  } ],
  AvatiorFairnessPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "000c93mSetHM52RPHobCuux", "AvatiorFairnessPanel");
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
    var AvatiorFairnessPanel = function(_super) {
      __extends(AvatiorFairnessPanel, _super);
      function AvatiorFairnessPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oServerSeed = null;
        _this.m_oClientSeed = [];
        _this.m_oPlayerHead = [];
        _this.m_oPlayerName = [];
        _this.m_oHashLabel = null;
        _this.m_oHexLabel = null;
        _this.m_oDeciamlLabel = null;
        _this.m_oResultLabel = null;
        _this.m_oRoundLabel = null;
        _this.m_oRateLabel = null;
        _this.m_oTimeLabel = null;
        _this.m_oFairnessRulePanel = null;
        return _this;
      }
      AvatiorFairnessPanel.prototype.initUiData = function(data) {
        var _this = this;
        this.m_oRoundLabel.string = data.number;
        this.m_oTimeLabel.string = this.changeTime(data.time);
        if (VV_1.vv.uiMgr.isNull(data.cashout_mult)) {
          if (!VV_1.vv.uiMgr.isNull(data.cash_out_mult)) {
            this.m_oRateLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(data.cash_out_mult), ",") + "x";
            this.m_oRateLabel.node.color = this.getLevelColor(data.cash_out_mult);
            this.m_oRateLabel._forceUpdateRenderData();
            this.m_oResultLabel.string = data.cash_out_mult;
            this.m_oRateLabel.node.getContentSize().width + 10 > this.m_oRateLabel.node.parent.width && this.m_oRateLabel.node.parent.setContentSize(this.m_oRateLabel.node.getContentSize().width + 10, this.m_oRateLabel.node.parent.height);
          }
        } else {
          this.m_oRateLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(data.cashout_mult), ",") + "x";
          this.m_oRateLabel.node.color = this.getLevelColor(data.cashout_mult);
          this.m_oRateLabel._forceUpdateRenderData();
          this.m_oResultLabel.string = data.cashout_mult;
          this.m_oRateLabel.node.getContentSize().width + 10 > this.m_oRateLabel.node.parent.width && this.m_oRateLabel.node.parent.setContentSize(this.m_oRateLabel.node.getContentSize().width + 10, this.m_oRateLabel.node.parent.height);
        }
        this.m_oServerSeed.string = data.seed;
        var hashString = data.seed;
        data.players.forEach(function(player, index) {
          _this.m_oClientSeed[index].string = player.seed;
          _this.m_oPlayerHead[index].showNetView(player.facelook);
          _this.m_oPlayerName[index].string = VV_1.vv.tools.transFormName(player.nick);
          hashString += player.seed;
        });
        hashString = VV_1.vv.tools.sha512Hash(hashString);
        this.m_oHashLabel.string = hashString;
        var hexString = hashString.substring(0, 12);
        this.m_oHexLabel.string = hexString;
        this.m_oDeciamlLabel.string = parseInt(hexString, 16).toString();
      };
      AvatiorFairnessPanel.prototype.getLevelColor = function(mult) {
        return mult > 10 ? cc.color(232, 62, 140) : mult > 2 ? cc.color(135, 52, 244) : cc.color(44, 139, 205);
      };
      AvatiorFairnessPanel.prototype.onClickCloe = function() {
        this.node.destroy();
      };
      AvatiorFairnessPanel.prototype.changeTime = function(timer) {
        var date = new Date(1e3 * timer);
        var hours = String(date.getHours()).padStart(2, "0");
        var minutes = String(date.getMinutes()).padStart(2, "0");
        var seconds = String(date.getSeconds()).padStart(2, "0");
        return hours + ":" + minutes + ":" + seconds;
      };
      AvatiorFairnessPanel.prototype.onClickRule = function() {
        var ruleNode = cc.instantiate(this.m_oFairnessRulePanel);
        ruleNode.parent = this.node.parent;
        this.onClickCloe();
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "server seed"
      }) ], AvatiorFairnessPanel.prototype, "m_oServerSeed", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "client Sedd"
      }) ], AvatiorFairnessPanel.prototype, "m_oClientSeed", void 0);
      __decorate([ property({
        type: NetPic_1.default,
        tooltip: "\u73a9\u5bb6\u5934\u50cf"
      }) ], AvatiorFairnessPanel.prototype, "m_oPlayerHead", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u73a9\u5bb6\u540d\u5b57"
      }) ], AvatiorFairnessPanel.prototype, "m_oPlayerName", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "ash512"
      }) ], AvatiorFairnessPanel.prototype, "m_oHashLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "hex"
      }) ], AvatiorFairnessPanel.prototype, "m_oHexLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "deciaml"
      }) ], AvatiorFairnessPanel.prototype, "m_oDeciamlLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "result"
      }) ], AvatiorFairnessPanel.prototype, "m_oResultLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "round"
      }) ], AvatiorFairnessPanel.prototype, "m_oRoundLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "rate"
      }) ], AvatiorFairnessPanel.prototype, "m_oRateLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "time"
      }) ], AvatiorFairnessPanel.prototype, "m_oTimeLabel", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u516c\u5e73\u89c4\u5219\u8282\u70b9"
      }) ], AvatiorFairnessPanel.prototype, "m_oFairnessRulePanel", void 0);
      AvatiorFairnessPanel = __decorate([ ccclass ], AvatiorFairnessPanel);
      return AvatiorFairnessPanel;
    }(cc.Component);
    exports.default = AvatiorFairnessPanel;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  AvatiorGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c23e61TMhA5ahw6d1YSp8Q", "AvatiorGameMgr");
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
    var GameMgrBase_1 = require("../../../scripts/games/gameBase/GameMgrBase");
    var AvatiorBetMgr_1 = require("./AvatiorBetMgr");
    var AvatiorMsgs_1 = require("./AvatiorMsgs");
    var AvatiorTableMgr_1 = require("./AvatiorTableMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorGameMgr = function(_super) {
      __extends(AvatiorGameMgr, _super);
      function AvatiorGameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betMgr = null;
        _this.tableMgr = null;
        _this.tableData = null;
        _this.cashout_mult = 0;
        _this.cashout_time = 0;
        _this.seed = "";
        _this.allBet = 0;
        _this.m_nAutoType = 0;
        _this.m_nLeftAutoRound = 10;
        _this.m_nLeftDecreaseNum = -1;
        _this.m_nLeftIncreaseNum = -1;
        _this.m_nLeftExceedNum = -1;
        _this.m_bLeftAutoBet = false;
        _this.m_nLeftStartAutoBetCoin = 0;
        _this.m_bLeftDecreaseSelect = false;
        _this.m_bLeftIncreaseSelect = false;
        _this.m_bLeftExceedSelect = false;
        _this.m_nRightAutoRound = 10;
        _this.m_nRightDecreaseNum = -1;
        _this.m_nRightIncreaseNum = -1;
        _this.m_nRightExceedNum = -1;
        _this.m_bRightAutoBet = false;
        _this.m_nRightStartAutoBetCoin = 0;
        _this.m_bRightDecreaseSelect = false;
        _this.m_bRightIncreaseSelect = false;
        _this.m_bRightExceedSelect = false;
        _this.lockBalance = 0;
        _this.myBetsList = [];
        _this.playerInfoList = [];
        return _this;
      }
      AvatiorGameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.AVATIOR,
                  room_id: 999999
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorJoinTableRequest, {}); else {
                VV_1.vv.logger.warn("\u8fdb\u5165Av\u95f4\u5931\u8d25", data);
                this.exitTable();
              }
              return [ 3, 3 ];

             case 2:
              error_1 = _a.sent();
              VV_1.vv.logger.warn("\u8fdb\u5165Av\u623f\u95f4\u5931\u8d25", error_1);
              this.exitTable();
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      AvatiorGameMgr.prototype.removeNetListener = function() {
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorJoinTableResponse, this.joinTableRes, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorLeaveTableResponse, this.leaveTableRes, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorPlayerOptionResponse, this.optionRes, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorRecentRecordResponse, this.recordRes, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorMyBetRecordResponse, this.myBetsRes, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorTableResultPlayer, this.playerResultRes, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorPlayerLeaveTableBroadCast, this.leaveTableBrodCast, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorTableStateBroadCast, this.tableStateUpte, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorOutMultBroadCast, this.multBroadcast, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorPlayerInfoBroadCast, this.allBetBroadcast, this);
      };
      AvatiorGameMgr.prototype.addNetListener = function() {
        this.removeNetListener();
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorJoinTableResponse, this.joinTableRes, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorLeaveTableResponse, this.leaveTableRes, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorPlayerOptionResponse, this.optionRes, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorRecentRecordResponse, this.recordRes, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorMyBetRecordResponse, this.myBetsRes, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorTableResultPlayer, this.playerResultRes, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorPlayerLeaveTableBroadCast, this.leaveTableBrodCast, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorTableStateBroadCast, this.tableStateUpte, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorOutMultBroadCast, this.multBroadcast, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorPlayerInfoBroadCast, this.allBetBroadcast, this);
      };
      AvatiorGameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      AvatiorGameMgr.prototype.destory = function() {
        this.resetAutoPlayByType(1);
        this.resetAutoPlayByType(2);
        this.betMgr.destroy();
        this.tableMgr.destroy();
      };
      AvatiorGameMgr.prototype.joinTableRes = function(data) {
        this.lockBalance = data.table_info.lock_balance / VV_1.vv.global.exchange_rate;
        this.gameState = data.table_info.state;
        this.tableMgr.initTable(data.table_info);
      };
      AvatiorGameMgr.prototype.leaveTableRes = function(data) {
        1 == data.status && this.tableMgr.exitTable();
      };
      AvatiorGameMgr.prototype.optionRes = function(data) {
        if (1 == data.option) {
          switch (data.status) {
           case 1:
            if (1 == data.pos) {
              this.betMgr.updateLeftBtnState();
              this.betMgr.m_bLeftBet = true;
            } else {
              this.betMgr.updateRightBtnState();
              this.betMgr.m_bRightBet = true;
            }
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.CRASH_GAME, {
              result: "Aviator"
            });
            break;

           case 2:
            VV_1.vv.toast.show("Please, watting next round!");
            break;

           case 3:
            VV_1.vv.toast.show("Your Fairness seed error!");
            break;

           case 4:
            VV_1.vv.uiMgr.betAddCashAlertTips("Your balance is insufficient for play. Would you like to Add Cash?", true, false, true, "No,Thanks");
            break;

           case 5:
            VV_1.vv.toast.show("Betting below the minimum bet or above the maximum bet");
            break;

           case 6:
            VV_1.vv.toast.show("Please, watting next round!");
            break;

           case 7:
            VV_1.vv.toast.show("You have cashed out!");
            break;

           case 8:
            VV_1.vv.uiMgr.betAddCashAlertTips("Earn more with any recharge,would you like to add cash?", true, false, true, "No,Thanks");
            break;

           case 9:
            VV_1.vv.toast.show("You have placed wrong bet");
            break;

           case 10:
            VV_1.vv.toast.show("You have placed this bet zone");
            break;

           case 11:
            VV_1.vv.toast.show("Please, watting next round!");
          }
          1 != data.status && this.m_bLeftAutoBet && 1 == data.pos ? this.betMgr.onClickStopLeftAuto() : 1 != data.status && this.m_bRightAutoBet && 2 == data.pos && this.betMgr.onClickStopRightAuto();
        }
      };
      AvatiorGameMgr.prototype.recordRes = function(data) {
        this.recordList = [].concat(data.info);
        this.tableMgr.setHistoryList();
      };
      AvatiorGameMgr.prototype.myBetsRes = function(data) {
        this.myBetsList = [].concat(data.info);
        this.tableMgr.showMyAllBetsPanel();
      };
      AvatiorGameMgr.prototype.resetAutoPlayByType = function(ntype) {
        if (1 == ntype) {
          this.m_nLeftAutoRound = 10;
          this.m_nLeftDecreaseNum = -1;
          this.m_nLeftIncreaseNum = -1;
          this.m_nLeftExceedNum = -1;
          this.m_bLeftAutoBet = false;
          this.m_nLeftStartAutoBetCoin = 0;
          this.betMgr.m_bLeftSendAutoCout = false;
          this.m_bLeftDecreaseSelect = false;
          this.m_bLeftIncreaseSelect = false;
          this.m_bLeftExceedSelect = false;
        } else {
          this.m_nRightAutoRound = 10;
          this.m_nRightDecreaseNum = -1;
          this.m_nRightIncreaseNum = -1;
          this.m_nRightExceedNum = -1;
          this.m_bRightAutoBet = false;
          this.m_nRightStartAutoBetCoin = 0;
          this.betMgr.m_bLeftSendAutoCout = false;
          this.m_bRightDecreaseSelect = false;
          this.m_bRightIncreaseSelect = false;
          this.m_bRightExceedSelect = false;
        }
      };
      AvatiorGameMgr.prototype.playerResultRes = function(data) {
        if (1 == data.pos) {
          this.betMgr.m_bLeftSendAutoCout = false;
          if (0 == data.win_gold) {
            this.m_bLeftDecreaseSelect && (this.m_nLeftDecreaseNum -= parseFloat(VV_1.vv.tools.keepTwoDecimalFull(data.bet_gold / VV_1.vv.global.exchange_rate)));
            this.m_bLeftIncreaseSelect && this.m_bLeftDecreaseSelect && (this.m_nLeftIncreaseNum += parseFloat(VV_1.vv.tools.keepTwoDecimalFull(data.bet_gold / VV_1.vv.global.exchange_rate)));
          } else {
            this.m_bLeftIncreaseSelect && (this.m_nLeftIncreaseNum -= parseFloat(VV_1.vv.tools.keepTwoDecimalFull((data.win_gold - data.bet_gold) / VV_1.vv.global.exchange_rate)));
            this.m_bLeftIncreaseSelect && this.m_bLeftDecreaseSelect && (this.m_nLeftDecreaseNum += parseFloat(VV_1.vv.tools.keepTwoDecimalFull((data.win_gold - data.bet_gold) / VV_1.vv.global.exchange_rate)));
            this.tableMgr.showLeftCashOutResult(data);
          }
          this.m_bLeftAutoBet && 0 == this.m_nLeftAutoRound ? this.betMgr.onClickStopLeftAuto() : this.m_bLeftAutoBet && this.m_nLeftDecreaseNum <= 0 && this.m_bLeftDecreaseSelect ? this.betMgr.onClickStopLeftAuto() : this.m_bLeftAutoBet && this.m_nLeftIncreaseNum <= 0 && this.m_bLeftIncreaseSelect ? this.betMgr.onClickStopLeftAuto() : this.m_bLeftAutoBet && this.m_bLeftExceedSelect && this.m_nLeftExceedNum <= parseFloat(VV_1.vv.tools.keepTwoDecimalFull(data.win_gold / VV_1.vv.global.exchange_rate)) && this.betMgr.onClickStopLeftAuto();
        } else {
          this.betMgr.m_bRightSendAutoCout = false;
          if (0 == data.win_gold) {
            this.m_bRightDecreaseSelect && (this.m_nRightDecreaseNum -= parseFloat(VV_1.vv.tools.keepTwoDecimalFull(data.bet_gold / VV_1.vv.global.exchange_rate)));
            this.m_bRightDecreaseSelect && this.m_bRightIncreaseSelect && (this.m_nRightIncreaseNum += parseFloat(VV_1.vv.tools.keepTwoDecimalFull(data.bet_gold / VV_1.vv.global.exchange_rate)));
          } else {
            this.m_bRightIncreaseSelect && (this.m_nRightIncreaseNum -= parseFloat(VV_1.vv.tools.keepTwoDecimalFull((data.win_gold - data.bet_gold) / VV_1.vv.global.exchange_rate)));
            this.m_bRightDecreaseSelect && this.m_bRightIncreaseSelect && (this.m_nRightDecreaseNum += parseFloat(VV_1.vv.tools.keepTwoDecimalFull((data.win_gold - data.bet_gold) / VV_1.vv.global.exchange_rate)));
            this.tableMgr.showRightCashOutResult(data);
          }
          this.m_bRightAutoBet && 0 == this.m_nRightAutoRound ? this.betMgr.onClickStopRightAuto() : this.m_bRightAutoBet && this.m_nRightDecreaseNum <= 0 && this.m_bRightDecreaseSelect ? this.betMgr.onClickStopRightAuto() : this.m_bRightAutoBet && this.m_nRightIncreaseNum <= 0 && this.m_bRightIncreaseSelect ? this.betMgr.onClickStopRightAuto() : this.m_bRightAutoBet && this.m_bRightExceedSelect && this.m_nRightExceedNum <= parseFloat(VV_1.vv.tools.keepTwoDecimalFull(data.win_gold / VV_1.vv.global.exchange_rate)) && this.betMgr.onClickStopRightAuto();
        }
      };
      AvatiorGameMgr.prototype.leaveTableBrodCast = function(data) {
        data.player_id == VV_1.vv.userMgr.player_id && this.tableMgr.exitTable();
      };
      AvatiorGameMgr.prototype.tableStateUpte = function(data) {
        this.gameState = data.state;
        this.tableMgr.updateTableState(data);
        this.betMgr.updteOpBtnShow();
        this.betMgr.checkAndSendBet();
      };
      AvatiorGameMgr.prototype.multBroadcast = function(data) {
        this.cashout_mult = data.cashout_mult;
        this.recordList.reverse();
        this.recordList.push(data);
        this.recordList.length > 60 && this.recordList.shift();
        this.recordList.reverse();
        this.tableMgr.showResultInfo(this.cashout_mult);
        this.tableMgr.setHistoryList();
        this.betMgr.m_bLeftSendAutoCout = false;
        this.betMgr.m_bRightSendAutoCout = false;
      };
      AvatiorGameMgr.prototype.allBetBroadcast = function(data) {
        this.playerInfoList = [].concat(data.players);
        this.allBet = data.count;
        this.tableMgr.showAllBetsPanel();
      };
      AvatiorGameMgr.prototype.initMgr = function() {
        this.setSeed();
        this.tableMgr = cc.find("Canvas/mianPanel").getComponent(AvatiorTableMgr_1.default);
        this.betMgr = cc.find("Canvas/betPanel").getComponent(AvatiorBetMgr_1.default);
      };
      AvatiorGameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
      };
      AvatiorGameMgr.prototype.setSeed = function() {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.seed = "";
        for (var i = 0; i < 20; i++) this.seed += characters.charAt(Math.floor(Math.random() * characters.length));
        return this.seed;
      };
      AvatiorGameMgr = __decorate([ ccclass ], AvatiorGameMgr);
      return AvatiorGameMgr;
    }(GameMgrBase_1.default);
    exports.default = AvatiorGameMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "./AvatiorBetMgr": "AvatiorBetMgr",
    "./AvatiorMsgs": "AvatiorMsgs",
    "./AvatiorTableMgr": "AvatiorTableMgr"
  } ],
  AvatiorGmameRule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cb6ejHOHBHi4TsrV91D0YJ", "AvatiorGmameRule");
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
    var CommonUIShowHideV2_1 = require("../../../scripts/frameworks/components/router/CommonUIShowHideV2");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorGmameRule = function(_super) {
      __extends(AvatiorGmameRule, _super);
      function AvatiorGmameRule() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oFairnessRulePanel = null;
        return _this;
      }
      AvatiorGmameRule.prototype.onClickFairness = function() {
        var ruleNode = cc.instantiate(this.m_oFairnessRulePanel);
        ruleNode.parent = this.node.parent;
        this.onClickCloseBtn();
      };
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u516c\u5e73\u89c4\u5219\u8282\u70b9"
      }) ], AvatiorGmameRule.prototype, "m_oFairnessRulePanel", void 0);
      AvatiorGmameRule = __decorate([ ccclass ], AvatiorGmameRule);
      return AvatiorGmameRule;
    }(CommonUIShowHideV2_1.default);
    exports.default = AvatiorGmameRule;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/components/router/CommonUIShowHideV2": void 0
  } ],
  AvatiorMsgs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9dc4bRKmi9GOI+54iAmoB1Y", "AvatiorMsgs");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AvatiorMsg_Brd = exports.AvatiorMsg_Res = exports.AvatiorMsgs_Req = void 0;
    var AvatiorMsgs_Req;
    (function(AvatiorMsgs_Req) {
      AvatiorMsgs_Req["AviatorJoinTableRequest"] = "AviatorJoinTableRequest";
      AvatiorMsgs_Req["AviatorLeaveTableRequest"] = "AviatorLeaveTableRequest";
      AvatiorMsgs_Req["AviatorPlayerOptionRequest"] = "AviatorPlayerOptionRequest";
      AvatiorMsgs_Req["AviatorRecentRecordRequest"] = "AviatorRecentRecordRequest";
      AvatiorMsgs_Req["AviatorLastPlayerInfoRequest"] = "AviatorLastPlayerInfoRequest";
      AvatiorMsgs_Req["AviatorMyBetRecordRequest"] = "AviatorMyBetRecordRequest";
      AvatiorMsgs_Req["AviatorHugeWinsRequest"] = "AviatorHugeWinsRequest";
      AvatiorMsgs_Req["AviatorBiggestWinsRequest"] = "AviatorBiggestWinsRequest";
      AvatiorMsgs_Req["AviatorMultipliersRequest"] = "AviatorMultipliersRequest";
    })(AvatiorMsgs_Req = exports.AvatiorMsgs_Req || (exports.AvatiorMsgs_Req = {}));
    var AvatiorMsg_Res;
    (function(AvatiorMsg_Res) {
      AvatiorMsg_Res["AviatorJoinTableResponse"] = "AviatorJoinTableResponse";
      AvatiorMsg_Res["AviatorLeaveTableResponse"] = "AviatorLeaveTableResponse";
      AvatiorMsg_Res["AviatorPlayerOptionResponse"] = "AviatorPlayerOptionResponse";
      AvatiorMsg_Res["AviatorRecentRecordResponse"] = "AviatorRecentRecordResponse";
      AvatiorMsg_Res["AviatorLastPlayerInfoResponse"] = "AviatorLastPlayerInfoResponse";
      AvatiorMsg_Res["AviatorMyBetRecordResponse"] = "AviatorMyBetRecordResponse";
      AvatiorMsg_Res["AviatorHugeWinsResponse"] = "AviatorHugeWinsResponse";
      AvatiorMsg_Res["AviatorBiggestWinsResponse"] = "AviatorBiggestWinsResponse";
      AvatiorMsg_Res["AviatorMultipliersResponse"] = "AviatorMultipliersResponse";
      AvatiorMsg_Res["AviatorTableResultPlayer"] = "AviatorTableResultPlayer";
    })(AvatiorMsg_Res = exports.AvatiorMsg_Res || (exports.AvatiorMsg_Res = {}));
    var AvatiorMsg_Brd;
    (function(AvatiorMsg_Brd) {
      AvatiorMsg_Brd["AviatorPlayerLeaveTableBroadCast"] = "AviatorPlayerLeaveTableBroadCast";
      AvatiorMsg_Brd["AviatorTableStateBroadCast"] = "AviatorTableStateBroadCast";
      AvatiorMsg_Brd["AviatorOutMultBroadCast"] = "AviatorOutMultBroadCast";
      AvatiorMsg_Brd["AviatorSysnMultBroadCast"] = "AviatorSysnMultBroadCast";
      AvatiorMsg_Brd["AviatorTableBetBroadCast"] = "AviatorTableBetBroadCast";
      AvatiorMsg_Brd["AviatorPlayerInfoBroadCast"] = "AviatorPlayerInfoBroadCast";
    })(AvatiorMsg_Brd = exports.AvatiorMsg_Brd || (exports.AvatiorMsg_Brd = {}));
    cc._RF.pop();
  }, {} ],
  AvatiorMyBetsControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93a25xx7g9MLLsDa4Xv5Ons", "AvatiorMyBetsControl");
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
    var AvatiorFairnessPanel_1 = require("./AvatiorFairnessPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorMyBetsControl = function(_super) {
      __extends(AvatiorMyBetsControl, _super);
      function AvatiorMyBetsControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oParentContent = null;
        _this.m_oMyBetItem = null;
        _this.m_oFairnessPrefab = null;
        return _this;
      }
      AvatiorMyBetsControl.prototype.updateMyBetsList = function() {
        var _this = this;
        this.m_oParentContent.removeAllChildren();
        var list = VV_1.vv.gameMgr.myBetsList;
        list.forEach(function(info) {
          var itemNode = cc.instantiate(_this.m_oMyBetItem);
          if (itemNode) {
            itemNode.active = true;
            itemNode.getChildByName("date").getComponent(cc.Label).string = _this.changeTime(info.time);
            itemNode.getChildByName("bet").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.bet / VV_1.vv.global.exchange_rate), ",");
            if (0 != info.cash_gold) {
              itemNode.getChildByName("win").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_gold / VV_1.vv.global.exchange_rate), ",");
              itemNode.getChildByName("bg").getChildByName("select").active = true;
            } else itemNode.getChildByName("win").getComponent(cc.Label).string = "";
            itemNode.getChildByName("bg1").active = true;
            if (0 != info.cash_mult) {
              itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_mult), ",") + "x";
              itemNode.getChildByName("bg1").getChildByName("betRate").color = _this.getLevelColor(info.cash_mult);
            } else {
              itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_out_mult), ",") + "x";
              itemNode.getChildByName("bg1").getChildByName("betRate").color = _this.getLevelColor(info.cash_out_mult);
            }
            itemNode.getChildByName("icon").on(cc.Node.EventType.TOUCH_END, function() {
              var detailNode = cc.instantiate(_this.m_oFairnessPrefab);
              if (detailNode) {
                detailNode.getComponent(AvatiorFairnessPanel_1.default).initUiData(info);
                detailNode.y = 360;
                cc.find("Canvas").addChild(detailNode);
              }
            }, _this);
            _this.m_oParentContent.addChild(itemNode);
          }
        });
      };
      AvatiorMyBetsControl.prototype.getLevelColor = function(mult) {
        return mult > 10 ? cc.color(232, 62, 140) : mult > 2 ? cc.color(135, 52, 244) : cc.color(44, 139, 205);
      };
      AvatiorMyBetsControl.prototype.changeTime = function(timer) {
        var date = new Date(1e3 * timer);
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, "0");
        var day = String(date.getDate()).padStart(2, "0");
        var hours = String(date.getHours()).padStart(2, "0");
        var minutes = String(date.getMinutes()).padStart(2, "0");
        return hours + ":" + minutes + "\n         " + day + "-" + month + "-" + year;
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5217\u8868\u7236\u8282\u70b9"
      }) ], AvatiorMyBetsControl.prototype, "m_oParentContent", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u8bb0\u5f55\u8282\u70b9"
      }) ], AvatiorMyBetsControl.prototype, "m_oMyBetItem", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u8be6\u7ec6\u4fe1\u606f\u9884\u5236\u4f53"
      }) ], AvatiorMyBetsControl.prototype, "m_oFairnessPrefab", void 0);
      AvatiorMyBetsControl = __decorate([ ccclass ], AvatiorMyBetsControl);
      return AvatiorMyBetsControl;
    }(cc.Component);
    exports.default = AvatiorMyBetsControl;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./AvatiorFairnessPanel": "AvatiorFairnessPanel"
  } ],
  AvatiorPlayerItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db91080yd9HKKSDgt2U0I8G", "AvatiorPlayerItem");
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
    var AvatiorPlayerItem = function(_super) {
      __extends(AvatiorPlayerItem, _super);
      function AvatiorPlayerItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oPlayerData = null;
        return _this;
      }
      AvatiorPlayerItem.prototype.initPlayerDatda = function(data) {
        this.m_oPlayerData = data;
      };
      AvatiorPlayerItem.prototype.checkPlayerNeedUpdate = function(data) {
        if (data.player_id != this.m_oPlayerData.player_id) return true;
        if (data.chip != this.m_oPlayerData.chip) return true;
        if (data.pos != this.m_oPlayerData.pos) return true;
        if (data.cash_gold = this.m_oPlayerData.cash_gold) return true;
      };
      AvatiorPlayerItem = __decorate([ ccclass ], AvatiorPlayerItem);
      return AvatiorPlayerItem;
    }(cc.Component);
    exports.default = AvatiorPlayerItem;
    cc._RF.pop();
  }, {} ],
  AvatiorRecordItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f59bbe1R1lL1p2bhamF5cwC", "AvatiorRecordItem");
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
    var AvatiorFairnessPanel_1 = require("./AvatiorFairnessPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorRecordItem = function(_super) {
      __extends(AvatiorRecordItem, _super);
      function AvatiorRecordItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oMultLable = null;
        _this.m_oFairnessPrefab = null;
        _this.recordData = null;
        return _this;
      }
      AvatiorRecordItem.prototype.initInfo = function(itemData) {
        this.recordData = itemData;
        if (itemData.cashout_mult && !VV_1.vv.uiMgr.isNull(itemData.cashout_mult)) {
          this.m_oMultLable.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(itemData.cashout_mult), ",") + "x";
          this.m_oMultLable.node.color = this.getLevelColor(itemData.cashout_mult);
        } else if (itemData.cash_out_mult && !VV_1.vv.uiMgr.isNull(itemData.cash_out_mult)) {
          this.m_oMultLable.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(itemData.cash_out_mult), ",") + "x";
          this.m_oMultLable.node.color = this.getLevelColor(itemData.cash_out_mult);
        }
        this.m_oMultLable._forceUpdateRenderData();
      };
      AvatiorRecordItem.prototype.getLevelColor = function(mult) {
        return mult > 10 ? cc.color(232, 62, 140) : mult > 2 ? cc.color(135, 52, 244) : cc.color(44, 139, 205);
      };
      AvatiorRecordItem.prototype.onClickNode = function() {
        var detailNode = cc.instantiate(this.m_oFairnessPrefab);
        if (detailNode) {
          detailNode.getComponent(AvatiorFairnessPanel_1.default).initUiData(this.recordData);
          detailNode.y = 360;
          cc.find("Canvas").addChild(detailNode);
        }
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "mult \u500d\u6570"
      }) ], AvatiorRecordItem.prototype, "m_oMultLable", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u8be6\u7ec6\u4fe1\u606f\u9884\u5236\u4f53"
      }) ], AvatiorRecordItem.prototype, "m_oFairnessPrefab", void 0);
      AvatiorRecordItem = __decorate([ ccclass ], AvatiorRecordItem);
      return AvatiorRecordItem;
    }(cc.Component);
    exports.default = AvatiorRecordItem;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./AvatiorFairnessPanel": "AvatiorFairnessPanel"
  } ],
  AvatiorResultAnim: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80a46NGhmxKp7PQ+wh8x0bd", "AvatiorResultAnim");
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
    var AvatiorResultAnim = function(_super) {
      __extends(AvatiorResultAnim, _super);
      function AvatiorResultAnim() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oMultLabel = null;
        _this.m_oResultLabel = null;
        _this.m_oLeftResultPop = null;
        _this.m_oRightResultPop = null;
        return _this;
      }
      AvatiorResultAnim.prototype.setResultInfo = function(info) {
        VV_1.vv.audioMgr.playSound("games/aviator/audio/4", "");
        this.m_oMultLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_mult), ",") + "x";
        this.m_oResultLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.win_gold / VV_1.vv.global.exchange_rate), ",");
        this.showAnim();
      };
      AvatiorResultAnim.prototype.showAnim = function() {
        var self = this;
        var moveto = new cc.Vec3(0, 300, 0);
        this.m_oLeftResultPop.active ? moveto = new cc.Vec3(0, 220, 0) : this.m_oRightResultPop.active && (moveto = new cc.Vec3(0, 220, 0));
        this.node.active = true;
        this.node.opacity = 0;
        cc.tween(this.node).to(1, {
          position: moveto,
          opacity: 255
        }, {
          easing: "fade"
        }).delay(3).call(function() {
          self.hideAnim();
        }).start();
      };
      AvatiorResultAnim.prototype.hideAnim = function() {
        var self = this;
        this.node.active = true;
        this.node.opacity = 255;
        var moveto = cc.moveTo(1, new cc.Vec2(0, 380));
        var fadeOut = cc.fadeOut(.5);
        var spawn = cc.spawn(moveto, fadeOut);
        this.node.runAction(cc.sequence(spawn, cc.callFunc(function() {
          self.node.position = new cc.Vec3(0, 120, 0);
          self.node.active = false;
        })));
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "mult"
      }) ], AvatiorResultAnim.prototype, "m_oMultLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "result"
      }) ], AvatiorResultAnim.prototype, "m_oResultLabel", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5de6\u8fb9\u7ed3\u7b97\u98d8\u7a97"
      }) ], AvatiorResultAnim.prototype, "m_oLeftResultPop", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53f3\u8fb9\u7ed3\u7b97\u98d8\u7a97"
      }) ], AvatiorResultAnim.prototype, "m_oRightResultPop", void 0);
      AvatiorResultAnim = __decorate([ ccclass ], AvatiorResultAnim);
      return AvatiorResultAnim;
    }(cc.Component);
    exports.default = AvatiorResultAnim;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  AvatiorSpcaceXCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5cf7odnyhItKVdV8mntdhD", "AvatiorSpcaceXCtrl");
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
    var AvatiorConfig_1 = require("./AvatiorConfig");
    var AvatiorMsgs_1 = require("./AvatiorMsgs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorSpcaceXCtrl = function(_super) {
      __extends(AvatiorSpcaceXCtrl, _super);
      function AvatiorSpcaceXCtrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oBetRateItem = null;
        _this.m_oBetTimeItem = null;
        _this.m_oBetRateLineContent = null;
        _this.m_oBetTimeLineContent = null;
        _this.m_tLindNodes = [];
        _this.m_tTimeNodes = [];
        _this.m_nTimeLineMoveOffsetX = 800;
        _this.m_nRateLineMoveOffsetY = 200;
        _this.runTimer = null;
        _this.lastTime = -1;
        return _this;
      }
      AvatiorSpcaceXCtrl.prototype.onLoad = function() {};
      AvatiorSpcaceXCtrl.prototype.onEnable = function() {
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorSysnMultBroadCast, this.onCrashSysnMultBroadCast, this);
      };
      AvatiorSpcaceXCtrl.prototype.onDisable = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Brd.AviatorSysnMultBroadCast, this.onCrashSysnMultBroadCast, this);
      };
      AvatiorSpcaceXCtrl.prototype.onCrashSysnMultBroadCast = function(data) {};
      AvatiorSpcaceXCtrl.prototype.showSpaceCtrl = function(isShow) {
        this.node.active = isShow;
        if (isShow) {
          this.createLineNode();
          this.createTimeNode();
        } else {
          this.m_oBetRateLineContent.removeAllChildren();
          this.m_oBetTimeLineContent.removeAllChildren();
          this.m_oBetRateLineContent.setPosition(0, 0);
          this.m_oBetTimeLineContent.setPosition(0, 0);
          this.timeNum = 0;
        }
      };
      AvatiorSpcaceXCtrl.prototype.createLineNode = function() {
        this.m_tLindNodes = [];
        for (var t = 0; t < 15; t++) {
          var e = cc.instantiate(this.m_oBetRateItem);
          e.active = true;
          e.parent = this.m_oBetRateLineContent;
          this.m_tLindNodes.push(e);
        }
      };
      AvatiorSpcaceXCtrl.prototype.createTimeNode = function() {
        this.m_tTimeNodes = [];
        for (var t = 0; t < 15; t++) {
          var e = cc.instantiate(this.m_oBetTimeItem);
          e.active = true;
          e.parent = this.m_oBetTimeLineContent;
          this.m_tTimeNodes.push(e);
        }
      };
      AvatiorSpcaceXCtrl.prototype.update = function(dt) {
        if (VV_1.vv.gameMgr.gameState == AvatiorConfig_1.AvatiorTableState.Gameing) {
          this.timeNum += dt;
          if (this.timeNum > 8) {
            this.m_oBetTimeLineContent.x -= .8;
            this.m_oBetRateLineContent.y -= .5;
            this.m_nTimeLineMoveOffsetX -= .8;
            if (this.m_nTimeLineMoveOffsetX <= 0) {
              this.m_nTimeLineMoveOffsetX = 880;
              this.createTimeNode();
            }
            this.m_nRateLineMoveOffsetY -= .5;
            if (this.m_nRateLineMoveOffsetY <= 0) {
              this.m_nRateLineMoveOffsetY = 240;
              this.createLineNode();
            }
          }
        }
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "betRate\u84dd\u70b9"
      }) ], AvatiorSpcaceXCtrl.prototype, "m_oBetRateItem", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "betTime\u767d\u70b9"
      }) ], AvatiorSpcaceXCtrl.prototype, "m_oBetTimeItem", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u500d\u7387\u8868\u793a\u5bb9\u5668"
      }) ], AvatiorSpcaceXCtrl.prototype, "m_oBetRateLineContent", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u65f6\u95f4\u8868\u793a\u5bb9\u5668"
      }) ], AvatiorSpcaceXCtrl.prototype, "m_oBetTimeLineContent", void 0);
      AvatiorSpcaceXCtrl = __decorate([ ccclass ], AvatiorSpcaceXCtrl);
      return AvatiorSpcaceXCtrl;
    }(cc.Component);
    exports.default = AvatiorSpcaceXCtrl;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./AvatiorConfig": "AvatiorConfig",
    "./AvatiorMsgs": "AvatiorMsgs"
  } ],
  AvatiorTableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2924ba2LqZEEo6qY+qGT+M+", "AvatiorTableMgr");
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
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var SceneManager_1 = require("../../../scripts/frameworks/SceneManager");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var GameConfig_1 = require("../../../scripts/platform/GameConfig");
    var AvatiorAllBetsControl_1 = require("./AvatiorAllBetsControl");
    var AvatiorConfig_1 = require("./AvatiorConfig");
    var AvatiorDraw_1 = require("./AvatiorDraw");
    var AvatiorGameMgr_1 = require("./AvatiorGameMgr");
    var AvatiorMsgs_1 = require("./AvatiorMsgs");
    var AvatiorMyBetsControl_1 = require("./AvatiorMyBetsControl");
    var AvatiorRecordItem_1 = require("./AvatiorRecordItem");
    var AvatiorResultAnim_1 = require("./AvatiorResultAnim");
    var AvatiorSpcaceXCtrl_1 = require("./AvatiorSpcaceXCtrl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorTableMgr = function(_super) {
      __extends(AvatiorTableMgr, _super);
      function AvatiorTableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oBetPanel = null;
        _this.m_oBetTimeProgress = null;
        _this.m_oDecodeLine = null;
        _this.m_oAllBetsPrefab = null;
        _this.m_oMyBetsPfefab = null;
        _this.m_oTopPfefab = null;
        _this.m_oInfoParent = null;
        _this.m_oResultNode = null;
        _this.m_oRecordContent = null;
        _this.m_oRecordItem = null;
        _this.m_oHeadImg = null;
        _this.m_oHeadImg1 = null;
        _this.m_oSelfCoin = null;
        _this.m_oSelfId = null;
        _this.m_oSelfName = null;
        _this.m_oSelfName1 = null;
        _this.m_oHistoryNode = null;
        _this.m_oMenueNode = null;
        _this.m_oGameLimitPanel = null;
        _this.m_oGameRulePanel = null;
        _this.m_oMinimumLabel = null;
        _this.m_oMaximumLabel = null;
        _this.m_oMaxWinLabel = null;
        _this.m_oSpcaceCtrl = null;
        _this.m_oAvatiorDraw = null;
        _this.m_nBetTimer = 0;
        _this.m_nBetTotalTime = 5;
        _this.m_sClickToggleName = "allBets";
        return _this;
      }
      AvatiorTableMgr.prototype.start = function() {
        VV_1.vv.gameMgr.launch();
        VV_1.vv.eventMgr.on(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoney, this);
      };
      AvatiorTableMgr.prototype.onEnable = function() {
        VV_1.vv.gameMgr = new AvatiorGameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
      };
      AvatiorTableMgr.prototype.onDestroy = function() {
        VV_1.vv.eventMgr.off(GameConst_1.GAME_EVENT.EVENT_REFRESH_MONEY, this.refreshMoney, this);
      };
      AvatiorTableMgr.prototype.refreshMoney = function() {
        this.m_oSelfCoin.string = VV_1.vv.userMgr.coins;
      };
      AvatiorTableMgr.prototype.onLoad = function() {
        VV_1.vv.audioMgr.playBGM("sounds/bg_music");
      };
      AvatiorTableMgr.prototype.initSelfInfo = function() {
        this.m_oHeadImg.showNetView(VV_1.vv.userMgr.headUrl);
        this.m_oSelfCoin.string = VV_1.vv.userMgr.coins;
        this.m_oSelfId.string = "ID:" + VV_1.vv.userMgr.uid.toString();
        this.m_oSelfName.string = VV_1.vv.tools.transformNickName(VV_1.vv.userMgr.userName);
        this.m_oHeadImg1.showNetView(VV_1.vv.userMgr.headUrl);
        this.m_oSelfName1.string = VV_1.vv.userMgr.userName;
      };
      AvatiorTableMgr.prototype.initTable = function(tableInfo) {
        VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorRecentRecordRequest, {});
        this.initTableLimit(tableInfo);
        this.initSelfInfo();
        this.m_oAvatiorDraw.switchPlaneState();
        switch (tableInfo.state) {
         case AvatiorConfig_1.AvatiorTableState.Bet:
          this.m_nBetTimer = tableInfo.state_time;
          this.m_oSpcaceCtrl.showSpaceCtrl(false);
          this.showBetPanel(true);
          this.showMainPanel(false);
          break;

         case AvatiorConfig_1.AvatiorTableState.Gameing:
          this.m_oSpcaceCtrl.showSpaceCtrl(true);
          this.showBetPanel(false);
          this.showMainPanel(true);
          break;

         case AvatiorConfig_1.AvatiorTableState.Result:
          this.m_oSpcaceCtrl.showSpaceCtrl(false);
          this.showBetPanel(false);
          this.showMainPanel(true);
        }
      };
      AvatiorTableMgr.prototype.initTableLimit = function(tableInfo) {
        this.m_oMinimumLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(tableInfo.bet_min / VV_1.vv.global.exchange_rate), ",");
        this.m_oMaximumLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(tableInfo.bet_max / VV_1.vv.global.exchange_rate), ",");
        this.m_oMaxWinLabel.string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(tableInfo.win_max / VV_1.vv.global.exchange_rate), ",");
      };
      AvatiorTableMgr.prototype.updateTableState = function(tableData) {
        this.m_oAvatiorDraw.switchPlaneState();
        switch (tableData.state) {
         case AvatiorConfig_1.AvatiorTableState.Bet:
          this.m_nBetTimer = tableData.state_time;
          this.m_oSpcaceCtrl.showSpaceCtrl(false);
          this.showBetPanel(true);
          this.showMainPanel(false);
          break;

         case AvatiorConfig_1.AvatiorTableState.Gameing:
          VV_1.vv.audioMgr.playSound("3", "");
          this.m_oSpcaceCtrl.showSpaceCtrl(true);
          this.showBetPanel(false);
          this.showMainPanel(true);
          break;

         case AvatiorConfig_1.AvatiorTableState.Result:
          VV_1.vv.audioMgr.playSound("2", "");
          this.m_oSpcaceCtrl.showSpaceCtrl(false);
          this.showBetPanel(false);
          this.showMainPanel(true);
          this.showResultInfo(tableData.cash_mult);
        }
      };
      AvatiorTableMgr.prototype.showBetPanel = function(isShow) {
        this.m_oBetPanel.active = isShow;
        isShow && this.updateBetTimeProgress();
      };
      AvatiorTableMgr.prototype.updateBetTimeProgress = function() {
        this.m_oBetTimeProgress.progress = this.m_nBetTimer / this.m_nBetTotalTime;
      };
      AvatiorTableMgr.prototype.showMainPanel = function(isShow) {
        this.m_oDecodeLine.active = isShow;
        this.m_oResultNode.active = false;
      };
      AvatiorTableMgr.prototype.showResultInfo = function(mult) {
        this.m_oResultNode.active = true;
        var multNode = VV_1.vv.uiMgr.seekNodeByName(this.m_oResultNode, "mult");
        multNode && (multNode.getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(mult), ",") + "x");
      };
      AvatiorTableMgr.prototype.showLeftCashOutResult = function(data) {
        var leftResult = this.node.getChildByName("leftResultPop");
        leftResult && leftResult.getComponent(AvatiorResultAnim_1.default).setResultInfo(data);
      };
      AvatiorTableMgr.prototype.showRightCashOutResult = function(data) {
        var rightResult = this.node.getChildByName("rightResultPop");
        rightResult && rightResult.getComponent(AvatiorResultAnim_1.default).setResultInfo(data);
      };
      AvatiorTableMgr.prototype.onClickMenmue = function() {
        this.m_oMenueNode.active = !this.m_oMenueNode.active;
      };
      AvatiorTableMgr.prototype.onClickMenuToggle = function(event, custom) {
        this.m_sClickToggleName = event.target.name;
        switch (event.target.name) {
         case "allBets":
          this.showAllBetsPanel(true);
          break;

         case "mybets":
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorMyBetRecordRequest, {});
          break;

         case "top":
          this.m_oInfoParent.removeAllChildren();
          var topNode = cc.instantiate(this.m_oTopPfefab);
          topNode && this.m_oInfoParent.addChild(topNode);
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorHugeWinsRequest, {
            type: 1
          });
          break;

         case "gameLimitBtn":
          this.m_oGameLimitPanel.active = !this.m_oGameLimitPanel.active;
          break;

         case "gameRuleBtn":
          var gameRule = cc.instantiate(this.m_oGameRulePanel);
          gameRule.parent = this.node.parent;
          break;

         case "homBtn":
          this.onClickLeaveRoom();
          break;

         case "closeLimit":
          this.m_oGameLimitPanel.active = !this.m_oGameLimitPanel.active;
          break;

         case "addc":
          PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash);
        }
      };
      AvatiorTableMgr.prototype.onClickLeaveRoom = function() {
        VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorLeaveTableRequest, {});
      };
      AvatiorTableMgr.prototype.showAllBetsPanel = function(isClick) {
        void 0 === isClick && (isClick = false);
        if ("allBets" != this.m_sClickToggleName) return;
        var allBetsPanel = this.m_oInfoParent.getChildByName("allBetsPanel");
        if (allBetsPanel && !isClick && allBetsPanel.getComponent(AvatiorAllBetsControl_1.default).m_bCkickPreRound) return;
        if (allBetsPanel) allBetsPanel.getComponent(AvatiorAllBetsControl_1.default).frameUpdatePlayerList(); else {
          this.m_oInfoParent.removeAllChildren();
          var allBetNode = cc.instantiate(this.m_oAllBetsPrefab);
          if (allBetNode) {
            allBetNode.getComponent(AvatiorAllBetsControl_1.default).updatePlayerList();
            this.m_oInfoParent.addChild(allBetNode);
          }
        }
      };
      AvatiorTableMgr.prototype.showMyAllBetsPanel = function() {
        this.m_oInfoParent.removeAllChildren();
        var myBetsNode = cc.instantiate(this.m_oMyBetsPfefab);
        if (myBetsNode) {
          myBetsNode.getComponent(AvatiorMyBetsControl_1.default).updateMyBetsList();
          this.m_oInfoParent.addChild(myBetsNode);
        }
      };
      AvatiorTableMgr.prototype.setHistoryList = function() {
        this.m_oRecordContent.removeAllChildren();
        var historyList = VV_1.vv.gameMgr.recordList;
        for (var i = 0; i < 15; i++) {
          var item = historyList[i];
          var recodeNode = cc.instantiate(this.m_oRecordItem);
          if (recodeNode) {
            recodeNode.getComponent(AvatiorRecordItem_1.default).initInfo(item);
            var labelNode = recodeNode.getComponent(AvatiorRecordItem_1.default).m_oMultLable;
            labelNode.node.getContentSize().width + 10 > recodeNode.width && recodeNode.setContentSize(labelNode.node.getContentSize().width + 10, recodeNode.height);
            recodeNode.active = true;
            this.m_oRecordContent.addChild(recodeNode);
          }
        }
      };
      AvatiorTableMgr.prototype.onCloseHistorPanel = function() {
        var normal = cc.find("Canvas/historyBtn/icon");
        normal.color = cc.Color.WHITE;
        normal.getChildByName("jiantou").color = cc.Color.WHITE;
        normal.getChildByName("jiantou").runAction(cc.sequence(cc.rotateTo(.5, 0), cc.delayTime(.1)));
        this.m_oHistoryNode.active = !this.m_oHistoryNode.active;
      };
      AvatiorTableMgr.prototype.onClickHistoryBtn = function(event, custom) {
        var normal = event.target.getChildByName("icon");
        if (this.m_oHistoryNode.active) {
          normal.color = cc.Color.WHITE;
          normal.getChildByName("jiantou").color = cc.Color.WHITE;
          normal.getChildByName("jiantou").runAction(cc.sequence(cc.rotateTo(.5, 0), cc.delayTime(.1)));
        } else {
          normal.color = cc.Color.RED;
          normal.getChildByName("jiantou").color = cc.Color.RED;
          normal.getChildByName("jiantou").runAction(cc.sequence(cc.rotateTo(.5, 180), cc.delayTime(.1)));
        }
        this.m_oHistoryNode.active = !this.m_oHistoryNode.active;
        var recordContent = this.m_oHistoryNode.getChildByName("content");
        recordContent.removeAllChildren();
        var historyList = VV_1.vv.gameMgr.recordList;
        for (var i = 0; i < historyList.length; i++) {
          var item = historyList[i];
          var recodeNode = cc.instantiate(this.m_oRecordItem);
          if (recodeNode) {
            recodeNode.getComponent(AvatiorRecordItem_1.default).initInfo(item);
            var labelNode = recodeNode.getComponent(AvatiorRecordItem_1.default).m_oMultLable;
            labelNode.node.getContentSize().width + 10 > recodeNode.width && recodeNode.setContentSize(labelNode.node.getContentSize().width + 10, recodeNode.height);
            recodeNode.active = true;
            recordContent.addChild(recodeNode);
          }
        }
      };
      AvatiorTableMgr.prototype.exitTable = function() {
        VV_1.vv.audioMgr.stopAll();
        VV_1.vv.uiMgr.showLoading();
        VV_1.vv.gameMgr.removeNetListener();
        SceneManager_1.default.getInstance().loadBundleScene(GameConst_1.GameBundle.Lobby, GameConfig_1.GameConfig.hallScene, function() {
          VV_1.vv.gameMgr.destory();
          VV_1.vv.gameMgr = null;
        });
      };
      AvatiorTableMgr.prototype.update = function(dt) {
        if (VV_1.vv.gameMgr && VV_1.vv.gameMgr.gameState == AvatiorConfig_1.AvatiorTableState.Bet) {
          this.m_nBetTimer -= dt;
          this.m_nBetTimer >= 0 ? this.updateBetTimeProgress() : this.showBetPanel(false);
        }
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u7b49\u5f85\u4e0b\u6ce8\u7ba1\u7406\u754c\u9762"
      }) ], AvatiorTableMgr.prototype, "m_oBetPanel", void 0);
      __decorate([ property({
        type: cc.ProgressBar,
        tooltip: "\u5012\u8ba1\u65f6\u8fdb\u5ea6\u6761"
      }) ], AvatiorTableMgr.prototype, "m_oBetTimeProgress", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u4e3b\u754c\u9762\u88c5\u9970\u6761"
      }) ], AvatiorTableMgr.prototype, "m_oDecodeLine", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u6240\u6709\u73a9\u5bb6\u4e0b\u6ce8\u9884\u5236\u4f53"
      }) ], AvatiorTableMgr.prototype, "m_oAllBetsPrefab", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u6211\u90fd\u4e0b\u6ce8\u8bb0\u5f55\u9884\u5236\u4f53"
      }) ], AvatiorTableMgr.prototype, "m_oMyBetsPfefab", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u6392\u884c\u699c\u9884\u5236\u4f53"
      }) ], AvatiorTableMgr.prototype, "m_oTopPfefab", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u52a0\u8f7d\u4fe1\u606f\u754c\u9762\u7236\u8282\u70b9"
      }) ], AvatiorTableMgr.prototype, "m_oInfoParent", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u7ed3\u7b97\u5c55\u793a\u8282\u70b9"
      }) ], AvatiorTableMgr.prototype, "m_oResultNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5386\u53f2\u8bb0\u5f55\u5bb9\u5668"
      }) ], AvatiorTableMgr.prototype, "m_oRecordContent", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5386\u53f2\u8bb0\u5f55\u8282\u70b9"
      }) ], AvatiorTableMgr.prototype, "m_oRecordItem", void 0);
      __decorate([ property({
        type: NetPic_1.default,
        tooltip: "\u73a9\u5bb6\u4e2a\u4eba\u4fe1\u606f"
      }) ], AvatiorTableMgr.prototype, "m_oHeadImg", void 0);
      __decorate([ property({
        type: NetPic_1.default,
        tooltip: "\u73a9\u5bb6\u4e2a\u4eba\u4fe1\u606f"
      }) ], AvatiorTableMgr.prototype, "m_oHeadImg1", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u73a9\u5bb6\u4e2a\u4eba\u91d1\u5e01"
      }) ], AvatiorTableMgr.prototype, "m_oSelfCoin", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u73a9\u5bb6\u4e2a\u4ebaId"
      }) ], AvatiorTableMgr.prototype, "m_oSelfId", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u73a9\u5bb6\u4e2a\u4eba\u540d\u5b57"
      }) ], AvatiorTableMgr.prototype, "m_oSelfName", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u73a9\u5bb6\u4e2a\u4eba\u540d\u5b57"
      }) ], AvatiorTableMgr.prototype, "m_oSelfName1", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5386\u53f2\u8bb0\u5f55\u8282\u70b9"
      }) ], AvatiorTableMgr.prototype, "m_oHistoryNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u76ee\u5f55\u754c\u9762"
      }) ], AvatiorTableMgr.prototype, "m_oMenueNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u6e38\u620f\u9650\u5236\u754c\u9762"
      }) ], AvatiorTableMgr.prototype, "m_oGameLimitPanel", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u6e38\u620f\u89c4\u5219\u754c\u9762"
      }) ], AvatiorTableMgr.prototype, "m_oGameRulePanel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u6700\u5c0f\u4e0b\u6ce8"
      }) ], AvatiorTableMgr.prototype, "m_oMinimumLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u6700\u5927\u4e0b\u6ce8"
      }) ], AvatiorTableMgr.prototype, "m_oMaximumLabel", void 0);
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u5355\u6ce8\u6700\u5927\u8d62\u6ce8"
      }) ], AvatiorTableMgr.prototype, "m_oMaxWinLabel", void 0);
      __decorate([ property({
        type: AvatiorSpcaceXCtrl_1.default,
        tooltip: "\u500d\u7387/\u65f6\u95f4\u6807\u8bc6"
      }) ], AvatiorTableMgr.prototype, "m_oSpcaceCtrl", void 0);
      __decorate([ property({
        type: AvatiorDraw_1.default,
        tooltip: "\u5c0f\u98de\u673a\u753b\u7ebf\u63a7\u5236"
      }) ], AvatiorTableMgr.prototype, "m_oAvatiorDraw", void 0);
      AvatiorTableMgr = __decorate([ ccclass ], AvatiorTableMgr);
      return AvatiorTableMgr;
    }(cc.Component);
    exports.default = AvatiorTableMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/SceneManager": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/platform/GameConfig": void 0,
    "./AvatiorAllBetsControl": "AvatiorAllBetsControl",
    "./AvatiorConfig": "AvatiorConfig",
    "./AvatiorDraw": "AvatiorDraw",
    "./AvatiorGameMgr": "AvatiorGameMgr",
    "./AvatiorMsgs": "AvatiorMsgs",
    "./AvatiorMyBetsControl": "AvatiorMyBetsControl",
    "./AvatiorRecordItem": "AvatiorRecordItem",
    "./AvatiorResultAnim": "AvatiorResultAnim",
    "./AvatiorSpcaceXCtrl": "AvatiorSpcaceXCtrl"
  } ],
  AvatiorTopPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81a67alhIBHn5IeiUDswtfr", "AvatiorTopPanel");
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
    var AvatiorFairnessPanel_1 = require("./AvatiorFairnessPanel");
    var AvatiorMsgs_1 = require("./AvatiorMsgs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatiorTopPanel = function(_super) {
      __extends(AvatiorTopPanel, _super);
      function AvatiorTopPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_oParentContent = null;
        _this.m_oRankItem = null;
        _this.m_oRankItem1 = null;
        _this.m_oMultiItem = null;
        _this.m_oMultiItem1 = null;
        _this.m_oFairnessPrefab = null;
        _this.m_nRankType = 1;
        return _this;
      }
      AvatiorTopPanel.prototype.onLoad = function() {
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorHugeWinsResponse, this.updateHugWinList, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorBiggestWinsResponse, this.updateBigWinList, this);
        VV_1.vv.netMgr.addHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorMultipliersResponse, this.updateMultipierList, this);
      };
      AvatiorTopPanel.prototype.onDisable = function() {
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorHugeWinsResponse, this.updateHugWinList, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorBiggestWinsResponse, this.updateBigWinList, this);
        VV_1.vv.netMgr.removeHandler(AvatiorMsgs_1.AvatiorMsg_Res.AviatorMultipliersResponse, this.updateMultipierList, this);
      };
      AvatiorTopPanel.prototype.onClickRankTypeToggle = function(event, custom) {
        switch (event.target.name) {
         case "huge":
          this.m_nRankType = 1;
          break;

         case "biggest":
          this.m_nRankType = 2;
          break;

         case "multiper":
          this.m_nRankType = 3;
        }
        this.sendToServer(null, 1);
      };
      AvatiorTopPanel.prototype.sendToServer = function(event, custom) {
        var ntype = parseInt(custom);
        switch (this.m_nRankType) {
         case 1:
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorHugeWinsRequest, {
            type: ntype
          });
          break;

         case 2:
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorBiggestWinsRequest, {
            type: ntype
          });
          break;

         case 3:
          VV_1.vv.netMgr.send(AvatiorMsgs_1.AvatiorMsgs_Req.AviatorMultipliersRequest, {
            type: ntype
          });
        }
      };
      AvatiorTopPanel.prototype.updateHugWinList = function(data) {
        var _this = this;
        this.m_oParentContent.removeAllChildren();
        data.info.forEach(function(info) {
          var itemNode = cc.instantiate(_this.m_oRankItem);
          if (itemNode) {
            itemNode.active = true;
            itemNode.getChildByName("head").getChildByName("icon").getComponent(NetPic_1.default).showNetView(info.facelook);
            itemNode.getChildByName("name").getComponent(cc.Label).string = VV_1.vv.tools.transFormName(info.nick);
            itemNode.getChildByName("round").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(info.cash_out_mult, ",") + "x";
            itemNode.getChildByName("time").getComponent(cc.Label).string = _this.changeTime(info.time);
            itemNode.getChildByName("bet").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.bet / VV_1.vv.global.exchange_rate), ",");
            itemNode.getChildByName("win").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_gold / VV_1.vv.global.exchange_rate), ",");
            itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_mult), ",") + "x";
            itemNode.getChildByName("bg1").getChildByName("betRate").color = _this.getLevelColor(info.cash_mult);
            itemNode.getChildByName("icon").on(cc.Node.EventType.TOUCH_END, function() {
              var detailNode = cc.instantiate(_this.m_oFairnessPrefab);
              if (detailNode) {
                detailNode.getComponent(AvatiorFairnessPanel_1.default).initUiData(info);
                detailNode.y = 360;
                cc.find("Canvas").addChild(detailNode);
              }
            }, _this);
            _this.m_oParentContent.addChild(itemNode);
          }
        });
      };
      AvatiorTopPanel.prototype.updateBigWinList = function(data) {
        var _this = this;
        this.m_oParentContent.removeAllChildren();
        data.info.forEach(function(info) {
          var itemNode = cc.instantiate(_this.m_oRankItem1);
          if (itemNode) {
            itemNode.active = true;
            itemNode.getChildByName("head").getChildByName("icon").getComponent(NetPic_1.default).showNetView(info.facelook);
            itemNode.getChildByName("name").getComponent(cc.Label).string = VV_1.vv.tools.transFormName(info.nick);
            itemNode.getChildByName("round").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(info.cash_out_mult, ",") + "x";
            itemNode.getChildByName("time").getComponent(cc.Label).string = _this.changeTime(info.time);
            itemNode.getChildByName("bet").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.bet / VV_1.vv.global.exchange_rate), ",");
            itemNode.getChildByName("win").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_gold / VV_1.vv.global.exchange_rate), ",");
            itemNode.getChildByName("bg1").getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_mult), ",") + "x";
            itemNode.getChildByName("bg1").getChildByName("betRate").color = _this.getLevelColor(info.cash_mult);
            itemNode.getChildByName("icon").on(cc.Node.EventType.TOUCH_END, function() {
              var detailNode = cc.instantiate(_this.m_oFairnessPrefab);
              if (detailNode) {
                detailNode.getComponent(AvatiorFairnessPanel_1.default).initUiData(info);
                detailNode.y = 360;
                cc.find("Canvas").addChild(detailNode);
              }
            }, _this);
            _this.m_oParentContent.addChild(itemNode);
          }
        });
      };
      AvatiorTopPanel.prototype.updateMultipierList = function(data) {
        var _this = this;
        this.m_oParentContent.removeAllChildren();
        data.info.forEach(function(info, index) {
          var itemNode = null;
          itemNode = 0 == index ? cc.instantiate(_this.m_oMultiItem) : cc.instantiate(_this.m_oMultiItem1);
          if (itemNode) {
            itemNode.active = true;
            itemNode.getChildByName("time").getComponent(cc.Label).string = _this.changeTime(info.time);
            itemNode.getChildByName("betRate").getComponent(cc.Label).string = VV_1.vv.tools.transformNumberSeparator(VV_1.vv.tools.keepTwoDecimalFull(info.cash_out_mult), ",") + "x";
            itemNode.getChildByName("betRate").color = _this.getLevelColor(info.cash_out_mult);
            itemNode.getChildByName("icon").on(cc.Node.EventType.TOUCH_END, function() {
              var detailNode = cc.instantiate(_this.m_oFairnessPrefab);
              if (detailNode) {
                detailNode.getComponent(AvatiorFairnessPanel_1.default).initUiData(info);
                detailNode.y = 360;
                cc.find("Canvas").addChild(detailNode);
              }
            }, _this);
            _this.m_oParentContent.addChild(itemNode);
          }
        });
      };
      AvatiorTopPanel.prototype.getLevelColor = function(mult) {
        return mult > 10 ? cc.color(232, 62, 140) : mult > 2 ? cc.color(135, 52, 244) : cc.color(44, 139, 205);
      };
      AvatiorTopPanel.prototype.changeTime = function(timer) {
        var date = new Date(1e3 * timer);
        var month = date.toLocaleDateString("en-Us", {
          month: "long"
        }).substring(0, 3);
        var day = String(date.getDate()).padStart(2, "0");
        return day + " " + month;
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5217\u8868\u7236\u8282\u70b9"
      }) ], AvatiorTopPanel.prototype, "m_oParentContent", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u8bb0\u5f55\u8282\u70b9"
      }) ], AvatiorTopPanel.prototype, "m_oRankItem", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u8bb0\u5f55\u8282\u70b9"
      }) ], AvatiorTopPanel.prototype, "m_oRankItem1", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u8bb0\u5f55\u8282\u70b9"
      }) ], AvatiorTopPanel.prototype, "m_oMultiItem", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u8bb0\u5f55\u8282\u70b9"
      }) ], AvatiorTopPanel.prototype, "m_oMultiItem1", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u8be6\u7ec6\u4fe1\u606f\u9884\u5236\u4f53"
      }) ], AvatiorTopPanel.prototype, "m_oFairnessPrefab", void 0);
      AvatiorTopPanel = __decorate([ ccclass ], AvatiorTopPanel);
      return AvatiorTopPanel;
    }(cc.Component);
    exports.default = AvatiorTopPanel;
    cc._RF.pop();
  }, {
    "../../../scripts/components/hall/NetPic": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "./AvatiorFairnessPanel": "AvatiorFairnessPanel",
    "./AvatiorMsgs": "AvatiorMsgs"
  } ]
}, {}, [ "AVatiorBtnLongPress", "AvatiorAllBetsControl", "AvatiorAutoBetSettingPanel", "AvatiorBetMgr", "AvatiorConfig", "AvatiorDraw", "AvatiorFairnessPanel", "AvatiorGameMgr", "AvatiorGmameRule", "AvatiorMsgs", "AvatiorMyBetsControl", "AvatiorPlayerItem", "AvatiorRecordItem", "AvatiorResultAnim", "AvatiorSpcaceXCtrl", "AvatiorTableMgr", "AvatiorTopPanel" ]);