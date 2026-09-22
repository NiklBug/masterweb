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
  CrashAnalysisEvents: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dea51xOfNDBo+O0E9zgAAk", "CrashAnalysisEvents");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CrashAnalysisEvent = void 0;
    exports.CrashAnalysisEvent = {
      game_first_start: {
        define: "\u6e38\u620f\u5f00\u59cb \u65f6",
        action: "game_first_start",
        action_id: "1030112001"
      },
      game_first_complete: {
        define: "\u6e38\u620f\u5b8c\u6210 \u65f6\uff08\u65c1\u89c2\u7684\u4e0d\u7b97\uff09",
        action: "game_first_complete",
        action_id: "1030113001"
      },
      game_first_cost: {
        define: "\u5f00\u59cb \u5230 \u5b8c\u6210 \u6e38\u620f\u7684\u8017\u65f6",
        action: "game_first_cost",
        action_id: "1030190001"
      },
      game_type_enter_game_failed: {
        define: "\u8fdb\u5165\u623f\u95f4\u7684\u8fc7\u7a0b\u4e2d\u5931\u8d25 \u65f6",
        action: "game_type_enter_game_failed",
        action_id: "1030215001"
      },
      game_type_enter_game_success: {
        define: "\u8fdb\u5165\u623f\u95f4\u5e76\u83b7\u53d6\u623f\u95f4\u5185\u6d88\u606f\u8fd4\u56de\u6210\u529f \u65f6",
        action: "game_type_enter_game_success",
        action_id: "1030214001"
      },
      game_type_out_click: {
        define: "\u70b9\u51fb \u79bb\u5f00\u623f\u95f4\u6309\u94ae \u65f6",
        action: "game_type_out_click",
        action_id: "1030601001"
      },
      game_type_out_success: {
        define: "\u9000\u51fa\u623f\u95f4\u8fd4\u56de\u5927\u5385 \u6210\u529f \u65f6",
        action: "game_type_out_success",
        action_id: "1040490009"
      },
      game_type_round_start: {
        define: "\u6e38\u620f\u5f00\u59cb \u65f6",
        action: "game_type_round_start",
        action_id: "1030312001"
      },
      game_type_complete_cost: {
        define: "\u6e38\u620f \u5f00\u59cb \u5230 \u7ed3\u675f \u4e00\u5c40\u8017\u65f6",
        action: "game_type_complete_cost",
        action_id: "1030390001"
      },
      game_type_start_cost: {
        define: "\u8fdb\u5165  \u6e38\u620f\u623f\u95f4 \u5230\u5f00\u59cb\u6e38\u620f\u6240\u82b1\u8d39\u7684\u65f6\u957f",
        action: "game_type_start_cost",
        action_id: "1030390002"
      },
      game_type_every_day_first_complete: {
        define: "\u6bcf\u65e5\u53c2\u4e0e\u5e76\u5b8c\u62101\u5c40 \uff08\u975e\u514d\u8d39\uff09\u6e38\u620f \u6253\u70b9",
        action: "game_type_every_day_first_complete",
        action_id: "1030313002"
      },
      game_type_cash_1_complete: {
        define: "\u771f\u91d1\u6e38\u620f1\u5c40 \u5b8c\u6210\u724c\u5c40\u65f6",
        action: "game_type_cash_1_complete",
        action_id: "1030313003"
      },
      game_type_used_auto_click: {
        define: "\u70b9\u51fb \u81ea\u52a8 \u65f6",
        action: "game_type_used_auto_click",
        action_id: "1030401001"
      },
      game_type_used_history_click: {
        define: "\u70b9\u51fb \u8bb0\u5f55 \u65f6",
        action: "game_type_used_history_click",
        action_id: "1030401002"
      },
      game_type_used_history_show: {
        define: "\u8bb0\u5f55\u5f39\u7a97\u5c55\u793a \u65f6",
        action: "game_type_used_history_show",
        action_id: "1030402001"
      },
      game_type_used_history_sha_click: {
        define: "\u70b9\u51fb SHA\u9a8c\u8bc1 \u65f6",
        action: "game_type_used_history_sha_click",
        action_id: "1030401003"
      }
    };
    cc._RF.pop();
  }, {} ],
  CrashAutoSelectTimeUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c84198bkjhHep1k28qT3mzE", "CrashAutoSelectTimeUI");
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
    var CrashGameID_1 = require("./CrashGameID");
    var CrashAnalysisEvents_1 = require("./CrashAnalysisEvents");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashAutoSelectTimeUI = function(_super) {
      __extends(CrashAutoSelectTimeUI, _super);
      function CrashAutoSelectTimeUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.status = false;
        return _this;
      }
      CrashAutoSelectTimeUI.prototype.onClickBtn = function(event) {
        var count = Number(event.target.name);
        VV_1.vv.gameMgr.betMgr.autoBetCount = count;
        this.hide();
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GAME_TYPE_USED_AUTO_CLICK, {
          action_id: CrashAnalysisEvents_1.CrashAnalysisEvent.game_type_used_auto_click.action_id,
          game_type: CrashGameID_1.CrashGameID,
          result: count
        });
      };
      CrashAutoSelectTimeUI.prototype.show = function() {
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.24, {
          scaleY: 1
        }).start();
      };
      CrashAutoSelectTimeUI.prototype.hide = function() {
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).to(.24, {
          scaleY: 0
        }).start();
      };
      CrashAutoSelectTimeUI = __decorate([ ccclass ], CrashAutoSelectTimeUI);
      return CrashAutoSelectTimeUI;
    }(cc.Component);
    exports.default = CrashAutoSelectTimeUI;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "./CrashAnalysisEvents": "CrashAnalysisEvents",
    "./CrashGameID": "CrashGameID"
  } ],
  CrashBetInfoItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7edba0DsURIz7zOD7BBnrNo", "CrashBetInfoItem");
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
    var CrashBetPlayerInfoItem_1 = require("./CrashBetPlayerInfoItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashBetInfoItem = function(_super) {
      __extends(CrashBetInfoItem, _super);
      function CrashBetInfoItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betPlayerInfoItemContent = null;
        _this.betPlayerInfoItemPrefab = null;
        _this.playerCountLabel = null;
        _this.totalBetLabel = null;
        _this.betPlayerInfoItemCtrls = [];
        _this.lastTotalBet = 0;
        return _this;
      }
      CrashBetInfoItem.prototype.setTotalBet = function(value) {
        this.totalBetLabel.string = value ? VV_1.vv.tools.keepTwoDecimalFull(value / VV_1.vv.global.exchange_rate) : "0";
        value ? this.lastTotalBet = value - this.lastTotalBet : VV_1.vv.logger.error("value:", value);
      };
      CrashBetInfoItem.prototype.setPlayerCount = function(value) {
        this.playerCountLabel.string = value.toString();
      };
      CrashBetInfoItem.prototype.setPlayerBetInfo = function(players) {
        var _this = this;
        players.forEach(function(data, i) {
          var ctrl = _this.betPlayerInfoItemCtrls[i];
          if (!ctrl) {
            var node = cc.instantiate(_this.betPlayerInfoItemPrefab);
            _this.betPlayerInfoItemContent.addChild(node);
            ctrl = node.getComponent(CrashBetPlayerInfoItem_1.default);
            _this.betPlayerInfoItemCtrls[i] = ctrl;
          }
          ctrl.setPlayerBetInfo(data);
        });
      };
      CrashBetInfoItem.prototype.setPlayerSettleInfo = function() {
        this.betPlayerInfoItemCtrls.forEach(function(ctrl, i) {
          if (ctrl.isSettle) return;
          ctrl.setPlayerSettleInfo(null);
        });
      };
      CrashBetInfoItem.prototype.reset = function() {
        this.totalBetLabel.string = "0";
        this.lastTotalBet = 0;
        this.betPlayerInfoItemCtrls.forEach(function(ctrl, i) {
          ctrl.reset();
        });
      };
      __decorate([ property(cc.Node) ], CrashBetInfoItem.prototype, "betPlayerInfoItemContent", void 0);
      __decorate([ property(cc.Prefab) ], CrashBetInfoItem.prototype, "betPlayerInfoItemPrefab", void 0);
      __decorate([ property(cc.Label) ], CrashBetInfoItem.prototype, "playerCountLabel", void 0);
      __decorate([ property(cc.Label) ], CrashBetInfoItem.prototype, "totalBetLabel", void 0);
      CrashBetInfoItem = __decorate([ ccclass ], CrashBetInfoItem);
      return CrashBetInfoItem;
    }(cc.Component);
    exports.default = CrashBetInfoItem;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./CrashBetPlayerInfoItem": "CrashBetPlayerInfoItem"
  } ],
  CrashBetInfoMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "077bcVfVspJDqdbpSnFVIAz", "CrashBetInfoMgr");
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
    var CrashBetInfoItem_1 = require("./CrashBetInfoItem");
    var CrashModel_1 = require("./CrashModel");
    var CrashMsgs_1 = require("./CrashMsgs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashBetInfoMgr = function(_super) {
      __extends(CrashBetInfoMgr, _super);
      function CrashBetInfoMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betInfoItemCtrl = null;
        return _this;
      }
      CrashBetInfoMgr.prototype.onLoad = function() {};
      CrashBetInfoMgr.prototype.onEnable = function() {
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerOptionBroadCast, this.onCrashPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerBetTotallist, this.onCrashPlayerBetTotallist, this);
        VV_1.vv.gameMgr.betInfoMgr = this;
      };
      CrashBetInfoMgr.prototype.onDisable = function() {
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerOptionBroadCast, this.onCrashPlayerOptionBroadCast, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerBetTotallist, this.onCrashPlayerBetTotallist, this);
      };
      CrashBetInfoMgr.prototype.onCrashPlayerBetTotallist = function(data) {
        data.player && this.betInfoItemCtrl.setPlayerBetInfo(data.player);
        this.betInfoItemCtrl.setTotalBet(data.bet_total);
        this.betInfoItemCtrl.setPlayerCount(data.player_number);
      };
      CrashBetInfoMgr.prototype.onCrashPlayerOptionBroadCast = function(data) {
        this.betInfoItemCtrl.setTotalBet(data.bettotal);
      };
      CrashBetInfoMgr.prototype.updateState = function(state) {
        state == CrashModel_1.eCrash_TableStatus.betting ? this.reset() : state == CrashModel_1.eCrash_TableStatus.settle && this.betInfoItemCtrl.setPlayerSettleInfo();
      };
      CrashBetInfoMgr.prototype.reset = function() {
        this.betInfoItemCtrl.reset();
      };
      __decorate([ property(CrashBetInfoItem_1.default) ], CrashBetInfoMgr.prototype, "betInfoItemCtrl", void 0);
      CrashBetInfoMgr = __decorate([ ccclass ], CrashBetInfoMgr);
      return CrashBetInfoMgr;
    }(cc.Component);
    exports.default = CrashBetInfoMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./CrashBetInfoItem": "CrashBetInfoItem",
    "./CrashModel": "CrashModel",
    "./CrashMsgs": "CrashMsgs"
  } ],
  CrashBetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75b98UWRVVI2KggoZapporN", "CrashBetMgr");
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
    var CrashModel_1 = require("./CrashModel");
    var CrashMsgs_1 = require("./CrashMsgs");
    var CrashNotEnoughTipsCtrl_1 = require("./CrashNotEnoughTipsCtrl");
    var CrashAutoSelectTimeUI_1 = require("./CrashAutoSelectTimeUI");
    var CrashBetPoolCtrl_1 = require("./CrashBetPoolCtrl");
    var CrashGameID_1 = require("./CrashGameID");
    var CrashAnalysisEvents_1 = require("./CrashAnalysisEvents");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var ChipBtnItem_1 = require("../../../scripts/games/gameCommon/ChipBtnItem");
    var CommonChipFly_1 = require("../../../scripts/games/gameCommon/CommonChipFly");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashBetMgr = function(_super) {
      __extends(CrashBetMgr, _super);
      function CrashBetMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betPoolCtrl1 = null;
        _this.chipBtnLayer = null;
        _this.chipBtnPrefab = null;
        _this.collectBtnLayer = null;
        _this.autoSelectTimeUI = null;
        _this.offAutoBetBtn = null;
        _this.notEnoughTipsCtrl = null;
        _this.sendBetBtnMask = null;
        _this.collectBtnNode = null;
        _this.selfPlayerNode = null;
        _this.otherPlayerNode = null;
        _this.rocketAni = null;
        _this.chipPrefab = null;
        _this.curChipIndex = 0;
        _this.betPool = 1;
        _this.betLevelCoins = [];
        _this._autoBetCount = 0;
        _this.nowSelectChipBtnIndex = 0;
        _this.myBetTotal = 0;
        _this.isLock = false;
        _this.collectValueList = [ .1, 1, 10 ];
        _this.nowOptionBetPoolCtrl = _this.betPoolCtrl1;
        _this.autobetStatus = false;
        _this.curMyBetData = new Map();
        _this.lastBetData = new Map();
        _this.isCashLogevent = false;
        _this.gameStartDate = null;
        return _this;
      }
      Object.defineProperty(CrashBetMgr.prototype, "autoBetCount", {
        get: function() {
          return this._autoBetCount;
        },
        set: function(value) {
          this._autoBetCount = value;
          this.offAutoBetBtn.active = 0 != value;
          this.offAutoBetBtn.children[1].getComponent(cc.Label).string = "Parada(" + value + ")";
          this.offAutoBetBtn.children[1].active = 999 != value;
          this.offAutoBetBtn.children[2].active = 999 == value;
          this.autobetStatus = false;
        },
        enumerable: false,
        configurable: true
      });
      CrashBetMgr.prototype.onLoad = function() {};
      CrashBetMgr.prototype.start = function() {
        this.nowOptionBetPoolCtrl = this.betPoolCtrl1;
        VV_1.vv.analysis.startTimers.betgamecomplete = null;
      };
      CrashBetMgr.prototype.onEnable = function() {
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerOptionResponse, this.onCrashPlayerOptionResponse, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashTableBetBroadCast, this.onCrashPlayerBetTotal, this);
        VV_1.vv.gameMgr.betMgr = this;
      };
      CrashBetMgr.prototype.onDisable = function() {
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerOptionResponse, this.onCrashPlayerOptionResponse, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashTableBetBroadCast, this.onCrashPlayerBetTotal, this);
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      CrashBetMgr.prototype.init = function() {
        this.nowOptionBetPoolCtrl.init();
      };
      CrashBetMgr.prototype.onCrashPlayerOptionResponse = function(data) {
        if (data.option == CrashModel_1.eCrash_OptionType.bet) 1 == data.status && this.showMyBetNum(1, data); else if (data.option == CrashModel_1.eCrash_OptionType.collect && 1 == data.status) {
          this.collectBtnNode.getComponent(cc.Button).interactable = false;
          var betPoolCtrl = this.betPoolCtrl1;
          VV_1.vv.gameMgr.spaceXCtrl.setMySettleMult(data);
          betPoolCtrl.reset();
          this.gameFirstLogEvent();
          this.gameCompleteLogEvent();
        }
        1 == data.status ? VV_1.vv.logger.log("option succeed") : 2 == data.status ? VV_1.vv.toast.show("Please Wait until the game ends") : 3 == data.status ? VV_1.vv.toast.show("Failure to bet") : 4 == data.status ? this.notEnoughTipsCtrl.show() : 5 == data.status ? VV_1.vv.toast.show("You have reached the max limit") : 6 == data.status ? VV_1.vv.toast.show("Please Wait until the game ends") : 7 == data.status ? VV_1.vv.toast.show("The deal failed") : 8 == data.status ? VV_1.vv.toast.show("This game is only available to paying players, please reload") : VV_1.vv.toast.show("Please Wait until the game ends");
      };
      CrashBetMgr.prototype.updateBetBtn = function() {
        var _this = this;
        this.chipBtnLayer.destroyAllChildren();
        this.chipBtnLayer.getComponent(cc.ToggleContainer).enabled = false;
        var levelConins = Object.keys(VV_1.vv.gameMgr.chipConfig).sort(function(a, b) {
          return Number(b) - Number(a);
        });
        var betLevelCoins1 = [];
        for (var _i = 0, levelConins_1 = levelConins; _i < levelConins_1.length; _i++) {
          var levelConin = levelConins_1[_i];
          if (Number(levelConin) / VV_1.vv.global.exchange_rate <= Number(VV_1.vv.userMgr.coins)) {
            betLevelCoins1 = VV_1.vv.gameMgr.chipConfig[levelConin];
            break;
          }
        }
        this.betLevelCoins = betLevelCoins1;
        var _loop_1 = function(i) {
          var posX = 130 + 135 * (i - 1);
          var wPos = cc.v2(posX, 0);
          var item = cc.instantiate(this_1.chipBtnPrefab);
          item.setPosition(wPos);
          this_1.chipBtnLayer.addChild(item);
          var coin = betLevelCoins1[i];
          item.getComponent(ChipBtnItem_1.default).setChipInfo(Number(coin) / VV_1.vv.global.exchange_rate, i);
          item.on("click", function() {
            _this.nowSelectChipBtnIndex = i;
            _this.updateChipState();
          }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < betLevelCoins1.length; i++) _loop_1(i);
        this.updateChipState();
      };
      CrashBetMgr.prototype.updateChipState = function() {
        for (var i = 0; i < this.chipBtnLayer.childrenCount; i++) i == this.nowSelectChipBtnIndex ? this.chipBtnLayer.children[i].getComponent(ChipBtnItem_1.default).setSelect(true) : this.chipBtnLayer.children[i].getComponent(ChipBtnItem_1.default).setSelect(false);
      };
      CrashBetMgr.prototype.onClickHalfBtn = function() {
        var count = Number(this.nowOptionBetPoolCtrl.betCount) * VV_1.vv.global.exchange_rate / 2;
        this.nowOptionBetPoolCtrl.setBetCount(count);
      };
      CrashBetMgr.prototype.onClickDoubleBtn = function() {
        var count = Number(this.nowOptionBetPoolCtrl.betCount) * VV_1.vv.global.exchange_rate * 2;
        this.nowOptionBetPoolCtrl.setBetCount(count);
      };
      CrashBetMgr.prototype.onClickCollectValueBtn = function(index) {
        VV_1.vv.logger.log("\u5f53\u524d\u70b9\u51fb\u91c7\u96c6\u500d\u6570\u4e0b\u6807_", index, this.collectValueList[index]);
        this.nowOptionBetPoolCtrl.setCollectCount(Number(this.nowOptionBetPoolCtrl.collectCount) + this.collectValueList[index]);
      };
      CrashBetMgr.prototype.onClickSelectPool = function(toggle) {
        this.nowOptionBetPoolCtrl = toggle.node.getComponent(CrashBetPoolCtrl_1.default);
        this.updatePoolStatus();
      };
      CrashBetMgr.prototype.updatePoolStatus = function() {
        var state = VV_1.vv.gameMgr.tableMgr.tableState;
        if (state == CrashModel_1.eCrash_TableStatus.betting) {
          var betPoolCtrl = this.betPoolCtrl1;
          betPoolCtrl.isAdvanceBet = false;
        } else state == CrashModel_1.eCrash_TableStatus.lottery ? this.nowOptionBetPoolCtrl.isBet ? this.collectBtnNode.getComponent(cc.Button).interactable = true : this.collectBtnNode.getComponent(cc.Button).interactable = false : state == CrashModel_1.eCrash_TableStatus.settle && (this.collectBtnNode.getComponent(cc.Button).interactable = false);
      };
      CrashBetMgr.prototype.onClickSendBetBtn = function() {
        if (Number(this.nowOptionBetPoolCtrl.betCount) <= 0) return;
        if (!VV_1.vv.userMgr.has_recharged) {
          VV_1.vv.uiMgr.highPlayerAlertTips();
          return;
        }
        if (this.isLock) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return;
        }
        var minCoin = VV_1.vv.gameMgr.minBalance / VV_1.vv.global.exchange_rate;
        if (Number(VV_1.vv.userMgr.coins) < minCoin && this.betLevelCoins[this.nowSelectChipBtnIndex] / VV_1.vv.global.exchange_rate != Number(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return;
        }
        VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashPlayerOptionRequest, {
          option: CrashModel_1.eCrash_OptionType.bet,
          chip: this.betLevelCoins[this.nowSelectChipBtnIndex],
          plan_cashmult: Number(this.nowOptionBetPoolCtrl.collectCount)
        });
      };
      CrashBetMgr.prototype.onClickCollectBtn = function() {
        VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashPlayerOptionRequest, {
          option: CrashModel_1.eCrash_OptionType.collect
        });
      };
      CrashBetMgr.prototype.onClickOffAutoBetBtn = function() {
        this.autoBetCount = 0;
      };
      CrashBetMgr.prototype.onAutoBetBtn = function() {
        if (!this.isBet) {
          VV_1.vv.toast.show("Por favor, fa\xe7a suas apostas primeiro");
          return;
        }
        this.autobetStatus = !this.autobetStatus;
        this.autobetStatus ? this.autoSelectTimeUI.show() : this.autoSelectTimeUI.hide();
      };
      CrashBetMgr.prototype.onCrashPlayerBetTotal = function(data) {
        VV_1.vv.gameMgr.betInfoMgr.betInfoItemCtrl.setTotalBet(data.bet_total);
        this.flyChipToPool(0, VV_1.vv.gameMgr.betInfoMgr.betInfoItemCtrl.lastTotalBet / VV_1.vv.global.exchange_rate);
      };
      CrashBetMgr.prototype.showMyBetNum = function(pool, data) {
        VV_1.vv.logger.log("\u663e\u793a\u5f53\u524d\u81ea\u5df1\u7684\u4e0b\u6ce8\u91d1\u989d: ", pool, data.chip);
        this.myBetTotal = data.chip - this.myBetTotal;
        var betPoolCtrl = this.betPoolCtrl1;
        betPoolCtrl.setMyBetCound(data.chip / VV_1.vv.global.exchange_rate);
        betPoolCtrl.setCollectCount(data.plan_cashmult);
        betPoolCtrl.isBet = true;
        VV_1.vv.gameMgr.tableMgr.tableState != CrashModel_1.eCrash_TableStatus.betting && (betPoolCtrl.isAdvanceBet = true);
        this.curMyBetData.set(pool, data);
        this.updatePoolStatus();
        this.flyChipToPool(-1, this.myBetTotal / VV_1.vv.global.exchange_rate);
        this.myBetTotal = data.chip;
      };
      CrashBetMgr.prototype.flyChipToPool = function(seatIndex, betNum) {
        void 0 === betNum && (betNum = 1);
        var snode = null;
        snode = -1 == seatIndex ? this.selfPlayerNode : this.otherPlayerNode;
        CommonChipFly_1.default.flyChip(betNum, snode, this.betPoolCtrl1.betChipFatherNode, this.node, this.chipPrefab, false);
      };
      CrashBetMgr.prototype.isBetCurRound = function(color) {
        var isBet = false;
        this.curMyBetData.forEach(function(v, k) {
          v.chip > 0 && (isBet = true);
        });
        return isBet;
      };
      CrashBetMgr.prototype.autoBetSwitch = function(stage) {
        if (0 == this.autoBetCount) return;
        if (!this.lastBetData.size) return;
        var minCoin = VV_1.vv.gameMgr.minBalance / VV_1.vv.global.exchange_rate;
        if (Number(VV_1.vv.userMgr.coins) < minCoin && this.betLevelCoins[this.nowSelectChipBtnIndex] / VV_1.vv.global.exchange_rate != Number(VV_1.vv.userMgr.coins)) {
          VV_1.vv.uiMgr.showBalanceNotEnoughTips();
          return;
        }
        var betCount = 0;
        if (stage == CrashModel_1.eCrash_TableStatus.betting) {
          999 != this.autoBetCount && --this.autoBetCount;
          this.lastBetData.forEach(function(v, k) {
            betCount += v.chip;
          });
          if (!this.canAutoBet(betCount)) return;
          this.lastBetData.forEach(function(v, k) {
            VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashPlayerOptionRequest, {
              option: CrashModel_1.eCrash_OptionType.bet,
              chip: v.chip,
              plan_cashmult: v.plan_cashmult
            });
          });
        }
      };
      CrashBetMgr.prototype.canAutoBet = function(betCount) {
        if (betCount / VV_1.vv.global.exchange_rate > Number(VV_1.vv.userMgr.coins)) {
          this.autoBetCount = 0;
          this.notEnoughTipsCtrl.show();
          return false;
        }
        return true;
      };
      Object.defineProperty(CrashBetMgr.prototype, "isBet", {
        get: function() {
          var betCount = 0;
          this.curMyBetData.forEach(function(v, k) {
            betCount += v.chip;
          });
          if (betCount) return true;
          return false;
        },
        enumerable: false,
        configurable: true
      });
      CrashBetMgr.prototype.gameFirstLogEvent = function() {
        if (this.isBet && VV_1.vv.analysis.is_guide_crash && VV_1.vv.analysis.cost_statistics.game_first_time) {
          VV_1.vv.analysis.is_guide_crash = false;
          VV_1.vv.analysis.cost_statistics.game_first_time = null;
        }
      };
      CrashBetMgr.prototype.gameCompleteLogEvent = function() {
        if (this.isBet && VV_1.vv.analysis.startTimers.betgamecomplete) {
          if (this.isBet) {
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
              result: "success"
            });
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME, {
              result: "crash"
            });
          }
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GameCompleted, {
            result: "success"
          });
          var cost = Date.now() - VV_1.vv.analysis.startTimers.betgamecomplete;
          VV_1.vv.logger.log("otp -> betgamecomplete cost:", cost / 1e3);
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_COMPLETE_COST, {
            cost: String(cost / 1e3),
            value: "crash"
          });
          VV_1.vv.analysis.startTimers.betgamecomplete = null;
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME, {
            value: "crash",
            result: "suc"
          });
        }
        if (this.isBet && !this.isCashLogevent) {
          this.isCashLogevent = true;
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.PayGameCompleted, {
            action_id: CrashAnalysisEvents_1.CrashAnalysisEvent.game_type_cash_1_complete.action_id,
            game_type: CrashGameID_1.CrashGameID
          });
        }
      };
      CrashBetMgr.prototype.updateState = function(state) {
        if (state == CrashModel_1.eCrash_TableStatus.betting) {
          this.reset();
          this.collectBtnNode.getComponent(cc.Button).interactable = false;
          this.betPoolCtrl1.node.active = true;
          this.rocketAni.active = true;
          var betPoolCtrl = this.betPoolCtrl1;
          betPoolCtrl.isAdvanceBet = false;
          if (Number(VV_1.vv.userMgr.coins) < VV_1.vv.gameMgr.lockBalance / VV_1.vv.global.exchange_rate) {
            this.isLock = true;
            this.sendBetBtnMask.active = true;
          } else {
            this.isLock = false;
            this.sendBetBtnMask.active = false;
          }
        } else if (state == CrashModel_1.eCrash_TableStatus.lottery) {
          this.nowOptionBetPoolCtrl.isBet ? this.collectBtnNode.getComponent(cc.Button).interactable = true : this.collectBtnNode.getComponent(cc.Button).interactable = false;
          this.betPoolCtrl1.node.active = false;
          this.rocketAni.active = false;
        } else if (state == CrashModel_1.eCrash_TableStatus.settle) {
          this.collectBtnNode.getComponent(cc.Button).interactable = false;
          this.betPoolCtrl1.node.active = false;
          this.rocketAni.active = false;
          this.gameFirstLogEvent();
          this.gameCompleteLogEvent();
        }
        this.autoBetSwitch(state);
      };
      CrashBetMgr.prototype.reset = function() {
        var _this = this;
        this.isCashLogevent = false;
        this.lastBetData.clear();
        this.curMyBetData.forEach(function(v, k) {
          _this.lastBetData.set(k, v);
        });
        !this.betPoolCtrl1.isAdvanceBet && this.curMyBetData.delete(1);
        this.betPoolCtrl1.setMyBetCound(0);
        this.resetBetPools();
      };
      CrashBetMgr.prototype.resetBetPools = function() {
        var betPoolCtrl = this.betPoolCtrl1;
        betPoolCtrl.isBet && !betPoolCtrl.isAdvanceBet && (betPoolCtrl.isBet = false);
      };
      __decorate([ property(CrashBetPoolCtrl_1.default) ], CrashBetMgr.prototype, "betPoolCtrl1", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "chipBtnLayer", void 0);
      __decorate([ property(cc.Prefab) ], CrashBetMgr.prototype, "chipBtnPrefab", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "collectBtnLayer", void 0);
      __decorate([ property(CrashAutoSelectTimeUI_1.default) ], CrashBetMgr.prototype, "autoSelectTimeUI", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "offAutoBetBtn", void 0);
      __decorate([ property(CrashNotEnoughTipsCtrl_1.default) ], CrashBetMgr.prototype, "notEnoughTipsCtrl", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "sendBetBtnMask", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "collectBtnNode", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "selfPlayerNode", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "otherPlayerNode", void 0);
      __decorate([ property(cc.Node) ], CrashBetMgr.prototype, "rocketAni", void 0);
      __decorate([ property(cc.Prefab) ], CrashBetMgr.prototype, "chipPrefab", void 0);
      CrashBetMgr = __decorate([ ccclass ], CrashBetMgr);
      return CrashBetMgr;
    }(cc.Component);
    exports.default = CrashBetMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameCommon/ChipBtnItem": void 0,
    "../../../scripts/games/gameCommon/CommonChipFly": void 0,
    "./CrashAnalysisEvents": "CrashAnalysisEvents",
    "./CrashAutoSelectTimeUI": "CrashAutoSelectTimeUI",
    "./CrashBetPoolCtrl": "CrashBetPoolCtrl",
    "./CrashGameID": "CrashGameID",
    "./CrashModel": "CrashModel",
    "./CrashMsgs": "CrashMsgs",
    "./CrashNotEnoughTipsCtrl": "CrashNotEnoughTipsCtrl"
  } ],
  CrashBetPlayerInfoItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c5807kRnVHubKHPCQ2htX+", "CrashBetPlayerInfoItem");
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
    var PlayerInfoComponent_1 = require("../../../scripts/components/player/PlayerInfoComponent");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashBetPlayerInfoItem = function(_super) {
      __extends(CrashBetPlayerInfoItem, _super);
      function CrashBetPlayerInfoItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playInfoCtrl = null;
        _this.collectLabel = null;
        _this.settleLabel = null;
        _this.isSettle = false;
        return _this;
      }
      CrashBetPlayerInfoItem.prototype.setPlayerBetInfo = function(data) {
        if (!data) return;
        this.playInfoCtrl.setID(data.player_id);
        this.playInfoCtrl.setCoin(data.bet / VV_1.vv.global.exchange_rate);
        this.playInfoCtrl.setName(data.nick_name);
        data.cash_gold && this.setPlayerSettleInfo(data);
      };
      CrashBetPlayerInfoItem.prototype.setPlayerSettleInfo = function(data) {
        if (data) {
          this.settleLabel.string = "+ " + VV_1.vv.tools.keepTwoDecimalFull(data.cash_gold / VV_1.vv.global.exchange_rate);
          this.collectLabel.string = data.cash_mult + "x";
          this.isSettle = true;
          this.settleLabel.node.color = cc.color(4, 212, 124);
          this.collectLabel.node.color = cc.color(169, 169, 169);
          this.playInfoCtrl.coinLabel.node.color = cc.color(255, 255, 255);
        } else {
          this.settleLabel.string = "-";
          this.collectLabel.string = "-";
          this.settleLabel.node.color = cc.color(241, 44, 76);
          this.collectLabel.node.color = cc.color(241, 44, 76);
          this.playInfoCtrl.coinLabel.node.color = cc.color(241, 44, 76);
        }
      };
      CrashBetPlayerInfoItem.prototype.reset = function() {
        this.isSettle = false;
        this.settleLabel.string = "";
        this.collectLabel.string = "";
        this.playInfoCtrl.setID(-1);
        this.playInfoCtrl.setCoin("");
        this.playInfoCtrl.setName("");
        this.settleLabel.node.color = cc.color(4, 212, 124);
        this.collectLabel.node.color = cc.color(169, 169, 169);
        this.playInfoCtrl.coinLabel.node.color = cc.color(255, 255, 255);
      };
      __decorate([ property(PlayerInfoComponent_1.default) ], CrashBetPlayerInfoItem.prototype, "playInfoCtrl", void 0);
      __decorate([ property(cc.Label) ], CrashBetPlayerInfoItem.prototype, "collectLabel", void 0);
      __decorate([ property(cc.Label) ], CrashBetPlayerInfoItem.prototype, "settleLabel", void 0);
      CrashBetPlayerInfoItem = __decorate([ ccclass ], CrashBetPlayerInfoItem);
      return CrashBetPlayerInfoItem;
    }(cc.Component);
    exports.default = CrashBetPlayerInfoItem;
    cc._RF.pop();
  }, {
    "../../../scripts/components/player/PlayerInfoComponent": void 0,
    "../../../scripts/frameworks/VV": void 0
  } ],
  CrashBetPoolCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db115wj/pRD3Lilog77ne8Z", "CrashBetPoolCtrl");
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
    var VV_1 = require("../../../scripts/frameworks/VV");
    var CrashModel_1 = require("./CrashModel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashBetPoolCtrl = function(_super) {
      __extends(CrashBetPoolCtrl, _super);
      function CrashBetPoolCtrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betLabel = null;
        _this.collectLabel = null;
        _this.myBetCountLabel = null;
        _this.betChipFatherNode = null;
        _this.poolIndex = 0;
        _this.betCount = "1";
        _this.collectCount = "0";
        _this.showingInputUI = false;
        _this.isAdvanceBet = false;
        _this.isBet = false;
        return _this;
      }
      CrashBetPoolCtrl.prototype.onLoad = function() {};
      CrashBetPoolCtrl.prototype.init = function() {
        var betCount = cc.sys.localStorage.getItem(CrashModel_1.eCrash_Cache.crash_betCount);
        if (betCount) {
          -1 != betCount.search(/[A-Za-z]+/) && (betCount = VV_1.vv.tools.keepTwoDecimalFull(VV_1.vv.gameMgr.tableMgr.tableData.min_bet_gold / VV_1.vv.global.exchange_rate));
          this.setBetCount(100 * Number(betCount));
        }
      };
      CrashBetPoolCtrl.prototype.setMyBetCound = function(value) {
        this.myBetCountLabel.string = "" + value;
      };
      CrashBetPoolCtrl.prototype.setBetCount = function(value) {
        value = Math.round(value);
        value < VV_1.vv.gameMgr.tableMgr.tableData.min_bet_gold && (value = VV_1.vv.gameMgr.tableMgr.tableData.min_bet_gold);
        var betCount = VV_1.vv.tools.keepTwoDecimalFull(value / VV_1.vv.global.exchange_rate);
        this.betLabel.string = betCount;
        this.betCount = betCount.replace(",", ".");
        cc.sys.localStorage.setItem(CrashModel_1.eCrash_Cache.crash_betCount, this.betCount);
        this.showingInputUI = false;
      };
      CrashBetPoolCtrl.prototype.onClickBetInput = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      CrashBetPoolCtrl.prototype.setCollectCount = function(value) {
        value || (value = 0);
        value <= 1 && (value = 0);
        var collectCount = VV_1.vv.tools.keepTwoDecimalFull(value);
        this.collectLabel.string = "" + collectCount;
        this.collectCount = collectCount;
        cc.sys.localStorage.setItem(CrashModel_1.eCrash_Cache.crash_collect, this.collectCount);
        this.showingInputUI = false;
      };
      CrashBetPoolCtrl.prototype.onClickcollectInput = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      CrashBetPoolCtrl.prototype.reset = function() {
        this.isBet = false;
        this.isAdvanceBet = false;
        this.showingInputUI = false;
      };
      __decorate([ property(cc.Label) ], CrashBetPoolCtrl.prototype, "betLabel", void 0);
      __decorate([ property(cc.Label) ], CrashBetPoolCtrl.prototype, "collectLabel", void 0);
      __decorate([ property(cc.Label) ], CrashBetPoolCtrl.prototype, "myBetCountLabel", void 0);
      __decorate([ property(cc.Node) ], CrashBetPoolCtrl.prototype, "betChipFatherNode", void 0);
      __decorate([ property ], CrashBetPoolCtrl.prototype, "poolIndex", void 0);
      CrashBetPoolCtrl = __decorate([ ccclass ], CrashBetPoolCtrl);
      return CrashBetPoolCtrl;
    }(cc.Component);
    exports.default = CrashBetPoolCtrl;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "./CrashModel": "CrashModel"
  } ],
  CrashGameID: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f585IWKahL8bo9NrmuqglE", "CrashGameID");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CrashGameID = void 0;
    exports.CrashGameID = 100033;
    cc._RF.pop();
  }, {} ],
  CrashGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57631lnSsBI5phk8xu9fyPf", "CrashGameMgr");
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
    var CrashGameID_1 = require("./CrashGameID");
    var CrashBetMgr_1 = require("./CrashBetMgr");
    var CrashMsgs_1 = require("./CrashMsgs");
    var CrashTableMgr_1 = require("./CrashTableMgr");
    var CrashBetInfoMgr_1 = require("./CrashBetInfoMgr");
    var CrashSpaceXCtrl_1 = require("./CrashSpaceXCtrl");
    var CrashAnalysisEvents_1 = require("./CrashAnalysisEvents");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var SceneManager_1 = require("../../../scripts/frameworks/SceneManager");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var GameMgrBase_1 = require("../../../scripts/games/gameBase/GameMgrBase");
    var GameConfig_1 = require("../../../scripts/platform/GameConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashGameMgr = function(_super) {
      __extends(CrashGameMgr, _super);
      function CrashGameMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.betMgr = null;
        _this.tableMgr = null;
        _this.betInfoMgr = null;
        _this.spaceXCtrl = null;
        _this._chipConfig = {
          0: [ 20, 50, 100, 200, 500 ]
        };
        _this.enterDate = null;
        _this.minBalance = 0;
        _this.lockBalance = 0;
        return _this;
      }
      Object.defineProperty(CrashGameMgr.prototype, "chipConfig", {
        get: function() {
          return this._chipConfig;
        },
        set: function(config) {
          this._chipConfig = config;
        },
        enumerable: false,
        configurable: true
      });
      CrashGameMgr.prototype.launch = function() {
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
                  game_id: GameConst_1.GAME_ID.CRASH,
                  room_id: 999999
                }
              }) ];

             case 1:
              data = _a.sent();
              if (1 == data.status) VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashJoinTableRequest, {}); else {
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
      CrashGameMgr.prototype.removeNetListener = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashJoinTableResponse, this.onJoinTableRes, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerLeaveTableBroadCast, this.onCrashPlayerLeaveTableBroadCast, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashOutMultBroadCast, this.onCrashOutMultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashTablePlayerCountBroadCast, this.onCrashTablePlayerCountBroadCast, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashLeaveTableResponse, this.onLeaveTableResponse, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerListResponse, this.showPlayerListUI, this);
      };
      CrashGameMgr.prototype.addNetListener = function() {
        this.removeNetListener();
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashJoinTableResponse, this.onJoinTableRes, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerLeaveTableBroadCast, this.onCrashPlayerLeaveTableBroadCast, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashOutMultBroadCast, this.onCrashOutMultBroadCast, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashTablePlayerCountBroadCast, this.onCrashTablePlayerCountBroadCast, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashLeaveTableResponse, this.onLeaveTableResponse, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerListResponse, this.showPlayerListUI, this);
      };
      CrashGameMgr.prototype.onEnable = function() {
        this.initMgr();
        this.addNetListener();
      };
      CrashGameMgr.prototype.onDisable = function() {};
      CrashGameMgr.prototype.onCrashOutMultBroadCast = function(data) {
        VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashRecentRecordRequest, {});
        this.spaceXCtrl.setSettle(data.cashout_mult);
      };
      CrashGameMgr.prototype.onCrashTablePlayerCountBroadCast = function(data) {
        this.betInfoMgr.betInfoItemCtrl.setPlayerCount(data.count);
      };
      CrashGameMgr.prototype.onJoinTableRes = function(data) {
        this.minBalance = data.table_info.enter_min;
        this.lockBalance = data.table_info.enter_balance;
        this.tableMgr.initTable(data.table_info);
        this.betMgr.init();
        VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashRecentRecordRequest, {});
        data.chip_config = {};
        Object.keys(data.table_info.bet_levels).forEach(function(key) {
          var need = data.table_info.bet_need_coin[key];
          var chipCoins = data.table_info.bet_levels[key];
          data.chip_config[need[0]] = chipCoins;
        });
        this.chipConfig = data.chip_config;
        this.betInfoMgr.betInfoItemCtrl.setPlayerCount(data.play_num);
        this.betMgr.updateBetBtn();
      };
      CrashGameMgr.prototype.onCrashPlayerLeaveTableBroadCast = function(data) {
        data.player_id == Number(VV_1.vv.userMgr.player_id) && this.exit();
      };
      CrashGameMgr.prototype.onLeaveTableResponse = function(data) {
        if (1 == data.status) {
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GAME_TYPE_OUT_SUCCESS, {
            action_id: CrashAnalysisEvents_1.CrashAnalysisEvent.game_type_out_success.action_id,
            game_type: CrashGameID_1.CrashGameID
          });
          this.exit();
        } else VV_1.vv.uiMgr.hideLoading();
      };
      CrashGameMgr.prototype.exit = function() {
        var _this = this;
        VV_1.vv.audioMgr.stopAll();
        VV_1.vv.uiMgr.showLoading();
        this.removeNetListener();
        SceneManager_1.default.getInstance().loadBundleScene(GameConst_1.GameBundle.Lobby, GameConfig_1.GameConfig.hallScene, function() {
          _this.destory();
        });
      };
      CrashGameMgr.prototype.showPlayerListUI = function(serverdata) {
        serverdata && this.tableMgr.showPlayerListUI(serverdata);
      };
      CrashGameMgr.prototype.getDebugLabel = function() {
        var pnode = new cc.Node();
        pnode.color = cc.Color.GREEN;
        var pLabel = pnode.addComponent(cc.Label);
        pLabel.fontSize = 32;
        pLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        pLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
        var pLabelOutline = pnode.addComponent(cc.LabelOutline);
        pLabelOutline.color = cc.Color.BLACK;
        pLabelOutline.width = 2;
        return pLabel;
      };
      CrashGameMgr.prototype.initMgr = function() {
        this.TableMgr = cc.find("Canvas/tableBg").getComponent(CrashTableMgr_1.default);
        this.betInfoMgr = cc.find("Canvas/betInfoLayer").getComponent(CrashBetInfoMgr_1.default);
        this.spaceXCtrl = cc.find("Canvas/spaceXLayer").getComponent(CrashSpaceXCtrl_1.default);
        this.betMgr = cc.find("Canvas/betLayer").getComponent(CrashBetMgr_1.default);
      };
      CrashGameMgr.prototype.enterTable = function(bundleName, sceneName, data) {
        if (!sceneName) return;
        VV_1.vv.uiMgr.hideLoading();
      };
      CrashGameMgr = __decorate([ ccclass ], CrashGameMgr);
      return CrashGameMgr;
    }(GameMgrBase_1.default);
    exports.default = CrashGameMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/frameworks/SceneManager": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/games/gameBase/GameMgrBase": void 0,
    "../../../scripts/platform/GameConfig": void 0,
    "./CrashAnalysisEvents": "CrashAnalysisEvents",
    "./CrashBetInfoMgr": "CrashBetInfoMgr",
    "./CrashBetMgr": "CrashBetMgr",
    "./CrashGameID": "CrashGameID",
    "./CrashMsgs": "CrashMsgs",
    "./CrashSpaceXCtrl": "CrashSpaceXCtrl",
    "./CrashTableMgr": "CrashTableMgr"
  } ],
  CrashHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec0a8DjOS5PMKjSDF6q4qmO", "CrashHistoryItem");
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
    var VerticalScrollViewItem_1 = require("../../../../scripts/components/scrollview/VerticalScrollViewItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashHistoryItem = function(_super) {
      __extends(CrashHistoryItem, _super);
      function CrashHistoryItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.ballSpfs = [];
        return _this;
      }
      CrashHistoryItem.prototype.start = function() {};
      CrashHistoryItem.prototype.reset = function() {};
      CrashHistoryItem.prototype.init = function(rate) {
        this.ball.spriteFrame = this.ballSpfs[rate - 1];
      };
      __decorate([ property(cc.Sprite) ], CrashHistoryItem.prototype, "ball", void 0);
      __decorate([ property(cc.SpriteFrame) ], CrashHistoryItem.prototype, "ballSpfs", void 0);
      CrashHistoryItem = __decorate([ ccclass ], CrashHistoryItem);
      return CrashHistoryItem;
    }(VerticalScrollViewItem_1.VerticalScrollViewItem);
    exports.default = CrashHistoryItem;
    cc._RF.pop();
  }, {
    "../../../../scripts/components/scrollview/VerticalScrollViewItem": void 0
  } ],
  CrashHistoryUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecd7ds2aFhEmJCytFZlZUzl", "CrashHistoryUI");
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
    var VV_1 = require("../../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var PanelComponent_1 = require("../../../../scripts/frameworks/components/router/PanelComponent");
    var PanelConfigs_1 = require("../../../../scripts/prefabs/panels/PanelConfigs");
    var CrashAnalysisEvents_1 = require("../CrashAnalysisEvents");
    var CrashGameID_1 = require("../CrashGameID");
    var CrashHistoryItem_1 = require("./CrashHistoryItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashHistoryUI = function(_super) {
      __extends(CrashHistoryUI, _super);
      function CrashHistoryUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fatherNode = null;
        _this.historyItem = null;
        return _this;
      }
      CrashHistoryUI.prototype.start = function() {
        var data = this.getFilterRecordList();
        var maxData = this.checkSpecialLength(data);
        var index = maxData.index;
        var maxLength = maxData.arry.length > 6 && maxData.arry.length - 6 > index ? maxData.arry.length - 6 - index : 0;
        var colNum = 0;
        var rowNum = 0;
        var lastRateLevel = -1;
        var startPos = cc.v3(-22.5, -20.5);
        var space = cc.v2(58.2, 55);
        this.fatherNode.removeAllChildren();
        for (var colNum_1 = 0; colNum_1 < data.length; colNum_1++) for (var rowNum_1 = 0; rowNum_1 < data[colNum_1].length; rowNum_1++) {
          if (colNum_1 + maxLength > 19) break;
          var p = cc.instantiate(this.historyItem);
          p.getComponent(CrashHistoryItem_1.default).init(data[colNum_1][rowNum_1]);
          if (rowNum_1 > 5) {
            if (colNum_1 + maxLength == 19 && rowNum_1 > 5) break;
            p.x = startPos.x - (colNum_1 + maxLength) * space.x + (rowNum_1 - 5) * space.x;
            p.y = startPos.y - 5 * space.y;
          } else {
            p.x = startPos.x - (colNum_1 + maxLength) * space.x;
            p.y = startPos.y - rowNum_1 * space.y;
          }
          this.fatherNode.addChild(p);
        }
      };
      CrashHistoryUI.prototype.getRateLevel = function(rate) {
        return rate >= 20 ? 5 : rate >= 10 ? 4 : rate >= 5 ? 3 : rate >= 2 ? 2 : 1;
      };
      CrashHistoryUI.prototype.getFilterRecordList = function() {
        var data = VV_1.vv.gameMgr.newestRecordList;
        var t = [];
        var com = [];
        var s = 0;
        while (data.length > 0) {
          if (s >= data.length) {
            t.push(com);
            break;
          }
          var level = this.getRateLevel(data[s].cashout_mult);
          if (0 == com.length) {
            com.push(level);
            ++s;
          } else if (com[0] == level) {
            com.push(level);
            ++s;
          } else if (3 != level && 4 != level && 5 != level || 3 != com[0] && 4 != com[0] && 5 != com[0]) {
            com.reverse();
            t.push(com);
            com = [];
          } else {
            com.push(level);
            ++s;
          }
        }
        return t;
      };
      CrashHistoryUI.prototype.checkSpecialLength = function(a) {
        var maxIndex = 0;
        var longestArray = a.reduce(function(longest, current, currentIndex) {
          if (current.length > longest.arry.length) {
            maxIndex = currentIndex;
            return {
              arry: current,
              index: maxIndex
            };
          }
          return {
            arry: longest.arry,
            index: maxIndex
          };
        }, {
          arry: [],
          index: 0
        });
        return longestArray;
      };
      CrashHistoryUI.prototype.onClickCloseBtn = function() {
        VV_1.vv.panelRouter.destroy({
          panel: PanelConfigs_1.PanelConfigs.crashHistoryPanel
        });
      };
      CrashHistoryUI.prototype.show = function(option) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            option.onShowed();
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GAME_TYPE_USED_HISTORY_SHOW, {
              action_id: CrashAnalysisEvents_1.CrashAnalysisEvent.game_type_used_history_show.action_id,
              game_type: CrashGameID_1.CrashGameID
            });
            return [ 2 ];
          });
        });
      };
      CrashHistoryUI.prototype.hide = function(option) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            option.onHided();
            return [ 2 ];
          });
        });
      };
      __decorate([ property(cc.Node) ], CrashHistoryUI.prototype, "fatherNode", void 0);
      __decorate([ property(cc.Prefab) ], CrashHistoryUI.prototype, "historyItem", void 0);
      CrashHistoryUI = __decorate([ ccclass ], CrashHistoryUI);
      return CrashHistoryUI;
    }(PanelComponent_1.PanelComponent);
    exports.default = CrashHistoryUI;
    cc._RF.pop();
  }, {
    "../../../../scripts/frameworks/VV": void 0,
    "../../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../../scripts/frameworks/components/router/PanelComponent": void 0,
    "../../../../scripts/prefabs/panels/PanelConfigs": void 0,
    "../CrashAnalysisEvents": "CrashAnalysisEvents",
    "../CrashGameID": "CrashGameID",
    "./CrashHistoryItem": "CrashHistoryItem"
  } ],
  CrashLineNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73ab4rMufxK7LQ76kULUGQL", "CrashLineNode");
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
    var CrashSettleCoins = function(_super) {
      __extends(CrashSettleCoins, _super);
      function CrashSettleCoins() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.smallNode = null;
        _this.beishu = 0;
        _this.temY = 0;
        _this.index = 0;
        return _this;
      }
      __decorate([ property(cc.Label) ], CrashSettleCoins.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], CrashSettleCoins.prototype, "smallNode", void 0);
      CrashSettleCoins = __decorate([ ccclass ], CrashSettleCoins);
      return CrashSettleCoins;
    }(cc.Component);
    exports.default = CrashSettleCoins;
    cc._RF.pop();
  }, {} ],
  CrashModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "503dfxwwfxIZ4i2VTUieqr0", "CrashModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.eCrash_Color = exports.eCrash_Cache = exports.cCrash_TableStatusTipsStr = exports.cCrash_BetLevelCoins = exports.eCrash_OptionType = exports.eCrash_TableStatus = exports.eCrash_Events = void 0;
    var eCrash_Events;
    (function(eCrash_Events) {
      eCrash_Events["initSucceed"] = "initSucceed";
    })(eCrash_Events = exports.eCrash_Events || (exports.eCrash_Events = {}));
    var eCrash_TableStatus;
    (function(eCrash_TableStatus) {
      eCrash_TableStatus[eCrash_TableStatus["betting"] = 1] = "betting";
      eCrash_TableStatus[eCrash_TableStatus["lottery"] = 2] = "lottery";
      eCrash_TableStatus[eCrash_TableStatus["settle"] = 3] = "settle";
    })(eCrash_TableStatus = exports.eCrash_TableStatus || (exports.eCrash_TableStatus = {}));
    var eCrash_OptionType;
    (function(eCrash_OptionType) {
      eCrash_OptionType[eCrash_OptionType["bet"] = 1] = "bet";
      eCrash_OptionType[eCrash_OptionType["collect"] = 2] = "collect";
      eCrash_OptionType[eCrash_OptionType["cancel"] = 3] = "cancel";
    })(eCrash_OptionType = exports.eCrash_OptionType || (exports.eCrash_OptionType = {}));
    exports.cCrash_BetLevelCoins = [ 1, 10, 200, 500, 1e3 ];
    exports.cCrash_TableStatusTipsStr = {
      1: "A partir de ",
      2: "Wait ...",
      3: "Wait ..."
    };
    var eCrash_Cache;
    (function(eCrash_Cache) {
      eCrash_Cache["crash_betCount"] = "crash_betCount";
      eCrash_Cache["crash_collect"] = "crash_collect";
      eCrash_Cache["crash_selectChipBtnIndex"] = "crash_selectChipBtnIndex";
    })(eCrash_Cache = exports.eCrash_Cache || (exports.eCrash_Cache = {}));
    var eCrash_Color;
    (function(eCrash_Color) {
      eCrash_Color[eCrash_Color["red"] = 1] = "red";
      eCrash_Color[eCrash_Color["blue"] = 2] = "blue";
      eCrash_Color[eCrash_Color["grey"] = 3] = "grey";
      eCrash_Color[eCrash_Color["yellow"] = 4] = "yellow";
      eCrash_Color[eCrash_Color["green"] = 5] = "green";
    })(eCrash_Color = exports.eCrash_Color || (exports.eCrash_Color = {}));
    cc._RF.pop();
  }, {} ],
  CrashMsgs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17cd7NzSo1M3Jm3IhvamSA8", "CrashMsgs");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.eCrash_Msgs = void 0;
    var eCrash_Msgs;
    (function(eCrash_Msgs) {
      eCrash_Msgs["CrashJoinTableRequest"] = "CrashJoinTableRequest";
      eCrash_Msgs["CrashJoinTableResponse"] = "CrashJoinTableResponse";
      eCrash_Msgs["CrashLeaveTableRequest"] = "CrashLeaveTableRequest";
      eCrash_Msgs["CrashLeaveTableResponse"] = "CrashLeaveTableResponse";
      eCrash_Msgs["CrashPlayerOptionRequest"] = "CrashPlayerOptionRequest";
      eCrash_Msgs["CrashPlayerOptionResponse"] = "CrashPlayerOptionResponse";
      eCrash_Msgs["CrashPlayerListRequest"] = "CrashPlayerListRequest";
      eCrash_Msgs["CrashPlayerListResponse"] = "CrashPlayerListResponse";
      eCrash_Msgs["CrashRecentRecordRequest"] = "CrashRecentRecordRequest";
      eCrash_Msgs["CrashRecentRecordResponse"] = "CrashRecentRecordResponse";
      eCrash_Msgs["CrashTableStateBroadCast"] = "CrashTableStateBroadCast";
      eCrash_Msgs["CrashRidePositionBroadCast"] = "CrashRidePositionBroadCast";
      eCrash_Msgs["CrashPlayerOptionBroadCast"] = "CrashPlayerOptionBroadCast";
      eCrash_Msgs["CrashPlayerJoinTableBroadCast"] = "CrashPlayerJoinTableBroadCast";
      eCrash_Msgs["CrashResultBroadCast"] = "CrashResultBroadCast";
      eCrash_Msgs["CrashPlayerLeaveTableBroadCast"] = "CrashPlayerLeaveTableBroadCast";
      eCrash_Msgs["CrashBigWinnerBroadcast"] = "CrashBigWinnerBroadcast";
      eCrash_Msgs["CrashPlayerBetTotallist"] = "CrashPlayerBetTotallist";
      eCrash_Msgs["CrashOutMultBroadCast"] = "CrashOutMultBroadCast";
      eCrash_Msgs["CrashSysnMultBroadCast"] = "CrashSysnMultBroadCast";
      eCrash_Msgs["CrashTableBetBroadCast"] = "CrashTableBetBroadCast";
      eCrash_Msgs["CrashPlayerCashBroadCast"] = "CrashPlayerCashBroadCast";
      eCrash_Msgs["CrashTablePlayerCountBroadCast"] = "CrashTablePlayerCountBroadCast";
    })(eCrash_Msgs = exports.eCrash_Msgs || (exports.eCrash_Msgs = {}));
    cc._RF.pop();
  }, {} ],
  CrashNotEnoughTipsCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e29a4/nUNFOpIKu0ayDOIlY", "CrashNotEnoughTipsCtrl");
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
    var CrashNotEnoughTipsCtrl = function(_super) {
      __extends(CrashNotEnoughTipsCtrl, _super);
      function CrashNotEnoughTipsCtrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      CrashNotEnoughTipsCtrl.prototype.start = function() {};
      CrashNotEnoughTipsCtrl.prototype.show = function() {
        this.label.string = "Your balance is not enough, please add cash " + VV_1.vv.userMgr.coins;
        this.node.active = true;
      };
      CrashNotEnoughTipsCtrl.prototype.hide = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Label) ], CrashNotEnoughTipsCtrl.prototype, "label", void 0);
      CrashNotEnoughTipsCtrl = __decorate([ ccclass ], CrashNotEnoughTipsCtrl);
      return CrashNotEnoughTipsCtrl;
    }(cc.Component);
    exports.default = CrashNotEnoughTipsCtrl;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0
  } ],
  CrashRecordMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28b76Jip/ZB6Io+OAJEVwfy", "CrashRecordMgr");
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
    var CrashGameID_1 = require("./CrashGameID");
    var CrashMsgs_1 = require("./CrashMsgs");
    var CrashAnalysisEvents_1 = require("./CrashAnalysisEvents");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var PanelConfigs_1 = require("../../../scripts/prefabs/panels/PanelConfigs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashRecordMgr = function(_super) {
      __extends(CrashRecordMgr, _super);
      function CrashRecordMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.recordLayout = null;
        _this.recordItemPrefab = null;
        _this.recordSpf = [];
        return _this;
      }
      CrashRecordMgr.prototype.onEnable = function() {
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashRecentRecordResponse, this.onCrashRecentRecordResponse, this);
      };
      CrashRecordMgr.prototype.onDisable = function() {
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashRecentRecordResponse, this.onCrashRecentRecordResponse, this);
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      CrashRecordMgr.prototype.onCrashRecentRecordResponse = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            VV_1.vv.gameMgr.newestRecordList = [].concat(data.info).reverse();
            this.updateRecordList(data.info);
            return [ 2 ];
          });
        });
      };
      CrashRecordMgr.prototype.updateRecordList = function(list) {
        var _this = this;
        if (!list) return;
        var listLast12 = list;
        listLast12.length > 10 && (listLast12 = listLast12.slice(-10));
        listLast12.forEach(function(v, i) {
          var recordItem = _this.recordLayout.children[i];
          if (!cc.isValid(recordItem)) {
            recordItem = cc.instantiate(_this.recordItemPrefab);
            _this.recordLayout.addChild(recordItem, i);
          }
          var label = recordItem.children[0].getComponent(cc.Label);
          label.string = VV_1.vv.tools.keepTwoDecimalFull(v.cashout_mult ? v.cashout_mult : 1) + "x";
          v.cashout_mult >= 20 ? recordItem.getComponent(cc.Sprite).spriteFrame = _this.recordSpf[4] : v.cashout_mult >= 10 ? recordItem.getComponent(cc.Sprite).spriteFrame = _this.recordSpf[3] : v.cashout_mult >= 5 ? recordItem.getComponent(cc.Sprite).spriteFrame = _this.recordSpf[2] : v.cashout_mult >= 2 ? recordItem.getComponent(cc.Sprite).spriteFrame = _this.recordSpf[1] : recordItem.getComponent(cc.Sprite).spriteFrame = _this.recordSpf[0];
        });
        this.scrollView.stopAutoScroll();
        this.scrollView.scrollToTop(0);
      };
      CrashRecordMgr.prototype.onClickRecordBtn = function() {
        VV_1.vv.panelRouter.show({
          panel: PanelConfigs_1.PanelConfigs.crashHistoryPanel
        });
        VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GAME_TYPE_USED_HISTORY_CLICK, {
          action_id: CrashAnalysisEvents_1.CrashAnalysisEvent.game_type_used_history_click.action_id,
          game_type: CrashGameID_1.CrashGameID
        });
      };
      __decorate([ property(cc.ScrollView) ], CrashRecordMgr.prototype, "scrollView", void 0);
      __decorate([ property(cc.Node) ], CrashRecordMgr.prototype, "recordLayout", void 0);
      __decorate([ property(cc.Prefab) ], CrashRecordMgr.prototype, "recordItemPrefab", void 0);
      __decorate([ property(cc.SpriteFrame) ], CrashRecordMgr.prototype, "recordSpf", void 0);
      CrashRecordMgr = __decorate([ ccclass ], CrashRecordMgr);
      return CrashRecordMgr;
    }(cc.Component);
    exports.default = CrashRecordMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/prefabs/panels/PanelConfigs": void 0,
    "./CrashAnalysisEvents": "CrashAnalysisEvents",
    "./CrashGameID": "CrashGameID",
    "./CrashMsgs": "CrashMsgs"
  } ],
  CrashSettleCoins: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8487bIDKJVE17ZknO4UByqC", "CrashSettleCoins");
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
    var CrashSettleCoins = function(_super) {
      __extends(CrashSettleCoins, _super);
      function CrashSettleCoins() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      CrashSettleCoins.prototype.setCoins = function(count) {
        var _this = this;
        this.label.string = (count >= 0 ? "+" : "") + count;
        count < 0 && this.label.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
        cc.tween(this.node).set({
          scale: 0
        }).to(.1, {
          scale: 1
        }).delay(.3).by(.2, {
          y: 75
        }).delay(1.4).call(function() {
          _this.node.destroy();
        }).start();
      };
      __decorate([ property(cc.Label) ], CrashSettleCoins.prototype, "label", void 0);
      CrashSettleCoins = __decorate([ ccclass ], CrashSettleCoins);
      return CrashSettleCoins;
    }(cc.Component);
    exports.default = CrashSettleCoins;
    cc._RF.pop();
  }, {} ],
  CrashSpaceXCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c46a3NWhJxJBYvojqQ+ZnEu", "CrashSpaceXCtrl");
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
    var PlayerInfoComponent_1 = require("../../../scripts/components/player/PlayerInfoComponent");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var CrashLineNode_1 = require("./CrashLineNode");
    var CrashModel_1 = require("./CrashModel");
    var CrashMsgs_1 = require("./CrashMsgs");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashSpaceXCtrl = function(_super) {
      __extends(CrashSpaceXCtrl, _super);
      function CrashSpaceXCtrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spaceX = null;
        _this.normalNode = null;
        _this.baozhaNode = null;
        _this.rectNode = null;
        _this.nowMultNode = null;
        _this.nowMultLabel = null;
        _this.settleMultNode = null;
        _this.settleMultLabel = null;
        _this.mySettleMultNode = null;
        _this.mySettleMultLabel = null;
        _this.mySettleGoldLabel = null;
        _this.waitingLabelNode = null;
        _this.zeroSecNode = null;
        _this.timeScaleItemPrefab = null;
        _this.oneMultNode = null;
        _this.multScaleItemPrefab = null;
        _this.timeLineNode = null;
        _this.statrtPoint = null;
        _this.lineContenNode = null;
        _this.guijiNode = null;
        _this.yellowLine = null;
        _this.redLine = null;
        _this.redPoint = null;
        _this.rateSpf = [];
        _this.playerHead = null;
        _this.playerHeadFatherNode = null;
        _this.timeNodes = [];
        _this.lindNodes = [];
        _this.addBeishu = .5;
        _this.preY = 0;
        _this.maxY = 300;
        _this.maxBeishu = 2;
        _this.currY = 1;
        _this.isUpdateBeiShuLine = false;
        _this.currBeishu = 0;
        _this.headNodes = [];
        _this.lastTime = -1;
        _this.paths = [ {
          mult: 1,
          time: 0
        } ];
        _this.runTimer = null;
        _this.baseMult = 1.5;
        _this.baseSec = 6;
        return _this;
      }
      CrashSpaceXCtrl.prototype.onLoad = function() {
        this.nowMultNode.active = false;
        this.settleMultNode.active = false;
        this.waitingLabelNode.active = false;
        this.mySettleMultNode.active = false;
        this.preY = this.maxY / this.maxBeishu;
        this.createLineNode();
        this.createTimeNode();
      };
      CrashSpaceXCtrl.prototype.start = function() {};
      CrashSpaceXCtrl.prototype.onEnable = function() {
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashSysnMultBroadCast, this.onCrashSysnMultBroadCast, this);
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerCashBroadCast, this.onCrashPlayerCashBroadCast, this);
      };
      CrashSpaceXCtrl.prototype.onDisable = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashSysnMultBroadCast, this.onCrashSysnMultBroadCast, this);
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashPlayerCashBroadCast, this.onCrashPlayerCashBroadCast, this);
      };
      CrashSpaceXCtrl.prototype.onCrashSysnMultBroadCast = function(data) {
        if (data && data.time) {
          -1 == this.lastTime && this.initGame(data.time);
          this.lastTime = data.time;
          this.runTimer.runTime = data.time;
        }
      };
      CrashSpaceXCtrl.prototype.onCrashPlayerCashBroadCast = function(msg) {
        var a = cc.instantiate(this.playerHead);
        var sc = a.getComponent(PlayerInfoComponent_1.default);
        sc.setHead(msg.facelook);
        var i = cc.find("rate", a);
        var rate = i.getComponent(cc.Label);
        rate.string = msg.cash_multx;
        a.parent = this.playerHeadFatherNode;
        var e = msg.cash_mult;
        i.color = cc.color(15, 179, 19);
        e >= 2 && e < 10 ? i.color = cc.color(0, 200, 214) : e >= 10 && e < 20 ? i.color = cc.color(195, 47, 250) : e >= 20 && (i.color = cc.color(242, 118, 50));
        var aa = 300 * this.currBeishu / this.maxBeishu, n = Math.sqrt(aa / 3e-4);
        a.x = n;
        a.y = aa;
        sc.nameLengthLimit = n;
        a.opacity = 255;
        this.headNodes.push(a);
        cc.tween(a).delay(3).to(2, {
          opacity: 0
        }).call(function(t) {
          t.removeFromParent();
        }).start();
      };
      CrashSpaceXCtrl.prototype.updateIconsPos1 = function() {
        for (var t = 300 * this.currBeishu / this.maxBeishu, e = Math.sqrt(t / 3e-4), o = this.headNodes.length - 1; o >= 0; o--) {
          var i = this.headNodes[o];
          var temX = i.getComponent(PlayerInfoComponent_1.default).nameLengthLimit;
          var a = temX * (this.spaceX.x - 75) / e, n = 3e-4 * Math.pow(a, 2);
          i.x = a;
          i.y = n;
        }
      };
      CrashSpaceXCtrl.prototype.updateState = function(state) {
        state == CrashModel_1.eCrash_TableStatus.betting ? this.setWaiting() : state == CrashModel_1.eCrash_TableStatus.lottery && this.setStart();
      };
      CrashSpaceXCtrl.prototype.initGame = function(time) {
        this.isUpdateBeiShuLine = !1;
        this.currBeishu = 1.08 * Math.pow(time, 2.1) * .01;
        this.setRocketPos();
        this.setLindPos();
      };
      CrashSpaceXCtrl.prototype.setRocketPos = function() {
        var t = 300 * (this.currBeishu > this.maxBeishu ? this.maxBeishu : this.currBeishu) / this.maxBeishu, e = Math.sqrt(t / 3e-4);
        this.spaceX.x = 75 + e;
        this.spaceX.y = t;
        this.guijiNode.width = e;
        this.spaceX.angle = -60;
      };
      CrashSpaceXCtrl.prototype.setLindPos = function() {
        if (this.currBeishu > this.maxBeishu) {
          this.lineContenNode.removeAllChildren();
          this.lindNodes = [];
          for (var t = 0, e = 0; e < 10 && !((t = Math.pow(2, e)) > this.currBeishu); e++) ;
          var o = t / this.maxBeishu, i = this.currY;
          for (e = 0; e < 10; e++) {
            var a = cc.instantiate(this.multScaleItemPrefab);
            var sc = a.getComponent(CrashLineNode_1.default);
            a.parent = this.lineContenNode;
            sc.beishu = (e + 1) * o + 1;
            sc.temY = this.preY * sc.beishu;
            a.y = sc.temY * this.spaceX.y / i;
            sc.label.string = sc.beishu + "x";
            if (0 == e) sc.smallNode.y = -.5 * a.y; else {
              var n = .5 * (this.lindNodes[e - 1].y - a.y);
              sc.smallNode.y = n;
            }
            this.lindNodes.push(a);
          }
        } else this.createLineNode();
      };
      CrashSpaceXCtrl.prototype.pushPathByTime = function(time) {
        this.paths = this.paths.filter(function(v) {
          if (0 == v.time) return true;
          return v.time <= time;
        });
        if (time == this.paths[this.paths.length - 1].time) return;
        var fpsTime = 1 / 15;
        var mult = 1.08 * Math.pow(time, 2.1) * .01;
        this.paths.push({
          mult: mult,
          time: time
        });
        this.currBeishu = mult;
        this.currY = 300 * this.currBeishu / this.maxBeishu;
      };
      CrashSpaceXCtrl.prototype.setSettle = function(mult) {
        VV_1.vv.timerMgr.deleteByTarget(this);
        this.nowMultNode.active = false;
        this.settleMultNode.active = true;
        this.waitingLabelNode.active = false;
        this.setRocketState(true);
        this.settleMultLabel.string = VV_1.vv.tools.keepTwoDecimalFull(mult || 1) + "X";
        if ("1X" == this.settleMultLabel.string) {
          var t = 300 * (this.currBeishu > this.maxBeishu ? this.maxBeishu : this.currBeishu) / this.maxBeishu, e = Math.sqrt(t / 3e-4);
          this.spaceX.x = 75 + e;
          this.spaceX.y = t;
          this.spaceX.angle = -75;
          this.currBeishu = 0;
          this.currY = 0;
        }
        this.lastTime = 0;
      };
      CrashSpaceXCtrl.prototype.setRocketState = function(isExplore) {
        if (isExplore) {
          this.baozhaNode.active = true;
          this.baozhaNode.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          this.normalNode.active = false;
          this.yellowLine.active = false;
          this.redLine.active = true;
          this.redPoint.x = 75 + this.guijiNode.width;
          this.redPoint.y = this.spaceX.y + 2;
          this.redPoint.active = true;
        } else {
          this.baozhaNode.active = false;
          this.normalNode.active = true;
          this.yellowLine.active = true;
          this.redLine.active = false;
          this.redPoint.active = false;
        }
      };
      CrashSpaceXCtrl.prototype.setStart = function() {
        var _this = this;
        this.playerHeadFatherNode.active = true;
        this.paths = [ {
          mult: 1,
          time: 0
        } ];
        this.guijiNode.width = 0;
        this.nowMultNode.active = true;
        this.settleMultNode.active = false;
        this.waitingLabelNode.active = false;
        this.currBeishu = 0;
        this.currY = 0;
        var t = 300 * (this.currBeishu > this.maxBeishu ? this.maxBeishu : this.currBeishu) / this.maxBeishu, e = Math.sqrt(t / 3e-4);
        this.spaceX.x = 75 + e;
        this.spaceX.y = t;
        this.spaceX.angle = -75;
        this.spaceX.active = true;
        this.setRocketState();
        this.guijiNode.active = true;
        this.createLineNode();
        this.createTimeNode();
        VV_1.vv.timerMgr.deleteByTarget(this);
        this.runTimer = VV_1.vv.timerMgr.addScheduleByObject({
          callback: function(timerData, dt) {
            console.log(_this.paths.length);
          },
          target: this,
          intervalTime: 999,
          updateCallback: function(timerData, dt) {
            if (Math.abs(timerData.runTime - _this.lastTime) > 15) {
              VV_1.vv.timerMgr.deleteByTimer(_this.runTimer);
              return;
            }
            _this.pushPathByTime(timerData.runTime);
          }
        });
      };
      CrashSpaceXCtrl.prototype.setWaiting = function() {
        this.currBeishu = 0;
        this.currY = 0;
        this.nowMultNode.active = false;
        this.settleMultNode.active = false;
        this.mySettleMultNode.active = false;
        this.spaceX.active = false;
        this.spaceX.x = 75;
        this.spaceX.y = 0;
        this.guijiNode.active = false;
        this.redPoint.active = false;
        this.guijiNode.width = 0;
        this.playerHeadFatherNode.removeAllChildren();
        this.playerHeadFatherNode.active = false;
        this.headNodes = [];
        this.createLineNode();
        this.createTimeNode();
      };
      CrashSpaceXCtrl.prototype.setMySettleMult = function(data) {
        this.mySettleMultNode.active = true;
        this.mySettleGoldLabel.string = "YOU WIN! " + VV_1.vv.tools.keepTwoDecimalFull(data.cash_gold / VV_1.vv.global.exchange_rate);
        this.mySettleMultLabel.string = "X" + VV_1.vv.tools.keepTwoDecimalFull(data.cash_mult);
      };
      CrashSpaceXCtrl.prototype.update = function(dt) {
        if (!this.nowMultNode.active) return;
        this.drawLine();
        if (this.currBeishu > this.maxBeishu) {
          this.updateTimeNode();
          this.updateIconsPos1();
          this.updateBeiY();
          return;
        }
        this.rocketAction1();
      };
      CrashSpaceXCtrl.prototype.drawLine = function() {
        var baseMult = this.baseMult;
        var baseSec = this.baseSec;
        var basePos = this.rectNode.position;
        var baseW = this.rectNode.width;
        var baseH = this.rectNode.height;
        var lastPathData = this.paths[this.paths.length - 1];
        lastPathData.time > baseSec && (baseSec = lastPathData.time);
        lastPathData.mult > baseMult && (baseMult = lastPathData.mult);
        var rate = VV_1.vv.tools.keepTwoDecimalFull(this.currBeishu + 1);
        this.nowMultLabel.string = rate + "x";
        this.currBeishu + 1 >= 20 ? this.nowMultNode.getComponent(cc.Sprite).spriteFrame = this.rateSpf[4] : this.currBeishu + 1 >= 10 ? this.nowMultNode.getComponent(cc.Sprite).spriteFrame = this.rateSpf[3] : this.currBeishu + 1 >= 5 ? this.nowMultNode.getComponent(cc.Sprite).spriteFrame = this.rateSpf[2] : this.currBeishu + 1 >= 2 ? this.nowMultNode.getComponent(cc.Sprite).spriteFrame = this.rateSpf[1] : this.nowMultNode.getComponent(cc.Sprite).spriteFrame = this.rateSpf[0];
      };
      CrashSpaceXCtrl.prototype.rocketAction1 = function() {
        var t = this.spaceX.getPosition();
        var e = this.currY;
        var o = Math.sqrt(e / 3e-4) + 75;
        var i = cc.v2(o, e).subtract(t).normalize();
        this.spaceX.x = o;
        this.spaceX.y = e;
        this.guijiNode.width = o - 75;
        if (0 != i.x && 0 != i.y) {
          var ag = 180 * cc.v2(0, 1).signAngle(i) / Math.PI;
          ag < 0 ? this.spaceX.angle = ag : VV_1.vv.logger.log("ag", ag);
        }
      };
      CrashSpaceXCtrl.prototype.createLineNode = function() {
        this.lineContenNode.removeAllChildren();
        this.lindNodes = [];
        for (var t = 0; t < 10; t++) {
          var e = cc.instantiate(this.multScaleItemPrefab);
          e.parent = this.lineContenNode;
          var sc = e.getComponent(CrashLineNode_1.default);
          sc.beishu = (t + 1) * this.addBeishu + 1;
          e.y = this.preY * (sc.beishu - 1);
          sc.temY = e.y;
          sc.label.string = sc.beishu + "x";
          sc.smallNode.y = -33;
          this.lindNodes.push(e);
        }
      };
      CrashSpaceXCtrl.prototype.createTimeNode = function() {
        this.timeLineNode.x = 0;
        this.timeNodes = [];
        this.timeLineNode.removeAllChildren();
        for (var t = 0; t < 6; t++) {
          var e = cc.instantiate(this.timeScaleItemPrefab);
          e.x = 240 * t;
          e.getComponentInChildren(cc.Label).string = 2 * t + "s";
          e.parent = this.timeLineNode;
          this.timeNodes.push(e);
        }
        this.timeNum = 5;
      };
      CrashSpaceXCtrl.prototype.updateBeiY = function() {
        var t = this;
        var e = this.currY;
        for (var o = this.lindNodes.length - 1; o >= 0; o--) {
          var r = this.lindNodes[o];
          var sc = r.getComponent(CrashLineNode_1.default);
          var i = sc.temY * this.spaceX.y / e;
          r.y = i;
          if (0 == o) sc.smallNode.y = -.5 * r.y; else {
            var a = .5 * (this.lindNodes[o - 1].y - r.y);
            sc.smallNode.y = a;
          }
        }
        if (!this.isUpdateBeiShuLine && this.lindNodes[1] && this.lindNodes[1].y < .8 * this.preY) {
          this.isUpdateBeiShuLine = !0;
          var n_1 = 0;
          var _loop_1 = function(o) {
            if (o % 2 == 0) {
              var r = this_1.lindNodes[o];
              var sc_1 = r.getComponent(CrashLineNode_1.default);
              sc_1.index = o;
              cc.tween(r).to(.5, {
                opacity: 0
              }).call(function(o) {
                t.lindNodes.splice(sc_1.index, 1);
                o.removeFromParent();
                o.opacity = 255;
                n_1++;
                for (var i = t.lindNodes.length - 1; i >= 0; i--) {
                  var a = t.lindNodes[i];
                  var scc = a.getComponent(CrashLineNode_1.default);
                  if (0 == i) scc.smallNode.y = -.5 * a.y; else {
                    var r_1 = .5 * (t.lindNodes[i - 1].y - a.y);
                    scc.smallNode.y = r_1;
                  }
                }
                if (5 == n_1) {
                  var c = t.lindNodes[t.lindNodes.length - 1].getComponent(CrashLineNode_1.default).temY;
                  var s = t.lindNodes[t.lindNodes.length - 1].getComponent(CrashLineNode_1.default).beishu;
                  var l = t.lindNodes[1].getComponent(CrashLineNode_1.default).beishu - t.lindNodes[0].getComponent(CrashLineNode_1.default).beishu;
                  for (var p = 0; p < n_1; p++) {
                    var h = cc.instantiate(t.multScaleItemPrefab);
                    h.parent = t.lineContenNode;
                    var sc_2 = h.getComponent(CrashLineNode_1.default);
                    sc_2.temY = c + t.preY * l * (p + 1);
                    h.y = sc_2.temY * t.spaceX.y / e;
                    sc_2.beishu = s + l * (p + 1);
                    sc_2.label.string = sc_2.beishu + "x";
                    sc_2.smallNode.y = -33;
                    t.lindNodes.push(h);
                  }
                  t.isUpdateBeiShuLine = !1;
                }
              }).start();
            }
          };
          var this_1 = this;
          for (var o = this.lindNodes.length - 1; o >= 0; o--) _loop_1(o);
        }
      };
      CrashSpaceXCtrl.prototype.updateTimeNode = function() {
        this.timeLineNode.x -= 2;
        var t = this.timeNodes[0];
        var wp = this.timeLineNode.convertToWorldSpaceAR(t.position);
        var p = this.statrtPoint.convertToNodeSpaceAR(wp);
        if (p.x < -240) {
          this.timeNodes.splice(0, 1);
          this.timeNum++;
          var e = this.timeNum, o = cc.instantiate(this.timeScaleItemPrefab);
          o.x = 240 * e;
          o.getComponentInChildren(cc.Label).string = 2 * e + "s";
          o.parent = this.timeLineNode;
          this.timeNodes.push(o);
          t.parent = null;
        }
      };
      CrashSpaceXCtrl.prototype.clearScaleLine = function() {};
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "spaceX", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "normalNode", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "baozhaNode", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "rectNode", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "nowMultNode", void 0);
      __decorate([ property(cc.Label) ], CrashSpaceXCtrl.prototype, "nowMultLabel", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "settleMultNode", void 0);
      __decorate([ property(cc.Label) ], CrashSpaceXCtrl.prototype, "settleMultLabel", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "mySettleMultNode", void 0);
      __decorate([ property(cc.Label) ], CrashSpaceXCtrl.prototype, "mySettleMultLabel", void 0);
      __decorate([ property(cc.Label) ], CrashSpaceXCtrl.prototype, "mySettleGoldLabel", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "waitingLabelNode", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "zeroSecNode", void 0);
      __decorate([ property(cc.Prefab) ], CrashSpaceXCtrl.prototype, "timeScaleItemPrefab", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "oneMultNode", void 0);
      __decorate([ property(cc.Prefab) ], CrashSpaceXCtrl.prototype, "multScaleItemPrefab", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "timeLineNode", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "statrtPoint", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "lineContenNode", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "guijiNode", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "yellowLine", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "redLine", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "redPoint", void 0);
      __decorate([ property(cc.SpriteFrame) ], CrashSpaceXCtrl.prototype, "rateSpf", void 0);
      __decorate([ property(cc.Prefab) ], CrashSpaceXCtrl.prototype, "playerHead", void 0);
      __decorate([ property(cc.Node) ], CrashSpaceXCtrl.prototype, "playerHeadFatherNode", void 0);
      CrashSpaceXCtrl = __decorate([ ccclass ], CrashSpaceXCtrl);
      return CrashSpaceXCtrl;
    }(cc.Component);
    exports.default = CrashSpaceXCtrl;
    cc._RF.pop();
  }, {
    "../../../scripts/components/player/PlayerInfoComponent": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "./CrashLineNode": "CrashLineNode",
    "./CrashModel": "CrashModel",
    "./CrashMsgs": "CrashMsgs"
  } ],
  CrashTableMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d835arnjHtHaoOmeZMYuLzt", "CrashTableMgr");
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
    var CrashGameID_1 = require("./CrashGameID");
    var CrashModel_1 = require("./CrashModel");
    var CrashMsgs_1 = require("./CrashMsgs");
    var CrashAnalysisEvents_1 = require("./CrashAnalysisEvents");
    var GameConst_1 = require("../../../scripts/common/GameConst");
    var PayMgr_1 = require("../../../scripts/components/pay/PayMgr");
    var VV_1 = require("../../../scripts/frameworks/VV");
    var AnalysisEvent_1 = require("../../../scripts/frameworks/components/analysis/AnalysisEvent");
    var I18n_1 = require("../../../scripts/frameworks/components/i18n/I18n");
    var CommonChipFly_1 = require("../../../scripts/games/gameCommon/CommonChipFly");
    var PlayerList_1 = require("../../../scripts/games/gameCommon/PlayerList");
    var PanelConfigs_1 = require("../../../scripts/prefabs/panels/PanelConfigs");
    var CrashGameMgr_1 = require("./CrashGameMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CrashTableMgr = function(_super) {
      __extends(CrashTableMgr, _super);
      function CrashTableMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.texTipLabel = null;
        _this.texTimeLabel = null;
        _this.barNode = null;
        _this.stateLayerNode = null;
        _this.playerListPrefab = null;
        _this.tableData = null;
        _this.tableState = CrashModel_1.eCrash_TableStatus.betting;
        return _this;
      }
      CrashTableMgr.prototype.onLoad = function() {};
      CrashTableMgr.prototype.start = function() {
        VV_1.vv.gameMgr.launch();
        VV_1.vv.analysis.startTimers.betgameEnter = Date.now();
      };
      CrashTableMgr.prototype.onEnable = function() {
        VV_1.vv.netMgr.addHandler(CrashMsgs_1.eCrash_Msgs.CrashTableStateBroadCast, this.onCrashTableStateBroadCast, this);
        VV_1.vv.gameMgr = new CrashGameMgr_1.default();
        VV_1.vv.gameMgr.onEnable();
        VV_1.vv.gameMgr.tableMgr = this;
      };
      CrashTableMgr.prototype.onDisable = function() {
        VV_1.vv.netMgr.removeHandler(CrashMsgs_1.eCrash_Msgs.CrashTableStateBroadCast, this.onCrashTableStateBroadCast, this);
        VV_1.vv.timerMgr.deleteByTarget(this);
      };
      CrashTableMgr.prototype.onCrashTableStateBroadCast = function(data) {
        this.startTableState(data.state, data.state_time || 0);
      };
      CrashTableMgr.prototype.initTable = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            data.min_bet_gold || (data.min_bet_gold = 10);
            this.tableData = data;
            data.state && this.startTableState(data.state, data.state_time || 0);
            return [ 2 ];
          });
        });
      };
      CrashTableMgr.prototype.onBtnCB = function(event) {
        switch (event.target.name) {
         case "BtnExit":
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GAME_TYPE_OUT_CLICK, {
            action_id: CrashAnalysisEvents_1.CrashAnalysisEvent.game_type_out_click.action_id,
            game_type: CrashGameID_1.CrashGameID
          });
          if (VV_1.vv.gameMgr.betMgr.isBet && VV_1.vv.gameMgr.tableMgr.tableState == CrashModel_1.eCrash_TableStatus.betting) {
            VV_1.vv.alert.show({
              title: "Tips",
              content: I18n_1.I18n.getText("toast.waitSettle"),
              showCancelBtn: false,
              showOkBtn: true
            });
            return;
          }
          this.sendExitTable();
          break;

         case "BtnRule":
          VV_1.vv.panelRouter.show({
            panel: PanelConfigs_1.PanelConfigs.crashRulePanel
          });
          break;

         case "BtnAddCash":
          PayMgr_1.default.show(PayMgr_1.RechargeUIType.addcash);
          break;

         case "BtnPlayList":
          this.getPlayerList();
        }
      };
      CrashTableMgr.prototype.sendExitTable = function() {
        VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashLeaveTableRequest, {});
      };
      CrashTableMgr.prototype.getPlayerList = function() {
        VV_1.vv.netMgr.send(CrashMsgs_1.eCrash_Msgs.CrashPlayerListRequest, {});
      };
      CrashTableMgr.prototype.showPlayerListUI = function(data) {
        var node = cc.instantiate(this.playerListPrefab);
        cc.find("Canvas").addChild(node, GameConst_1.Z_ORDER.Z_DIALOG);
        node.getComponent(PlayerList_1.default).setData(data.players);
      };
      CrashTableMgr.prototype.getStateTips = function(state) {
        return CrashModel_1.cCrash_TableStatusTipsStr[state];
      };
      CrashTableMgr.prototype.startTableState = function(state, state_time) {
        var _this = this;
        this.tableState = state;
        VV_1.vv.gameMgr.betMgr.updateState(state);
        VV_1.vv.gameMgr.betInfoMgr.updateState(state);
        VV_1.vv.gameMgr.spaceXCtrl.updateState(state);
        if (state == CrashModel_1.eCrash_TableStatus.betting) {
          this.stateLayerNode.active = true;
          VV_1.vv.analysis.is_guide_crash && (VV_1.vv.analysis.cost_statistics.game_first_time = Date.now());
          if (VV_1.vv.analysis.startTimers.betgameEnter) {
            var cost = Date.now() - VV_1.vv.analysis.startTimers.betgameEnter;
            VV_1.vv.logger.log("otp -> betgameEnter cost:", cost / 1e3);
            VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_START_COST, {
              cost: String(cost / 1e3)
            });
            VV_1.vv.analysis.startTimers.betgameEnter = null;
          }
          VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.BET_GAME_START, {
            value: "crash",
            result: "suc"
          });
          VV_1.vv.analysis.startTimers.betgamecomplete = Date.now();
        } else if (state == CrashModel_1.eCrash_TableStatus.lottery) {
          CommonChipFly_1.default.clearAllChips();
          this.stateLayerNode.active = false;
          VV_1.vv.gameMgr.betMgr.isBet && VV_1.vv.analysis.logEvent(AnalysisEvent_1.AnalysisEvent.GAME_TYPE_ROUND_START, {
            action_id: CrashAnalysisEvents_1.CrashAnalysisEvent.game_type_round_start.action_id,
            game_type: CrashGameID_1.CrashGameID
          });
        }
        this.texTipLabel.string = this.getStateTips(state);
        this.stopTableState();
        state_time && VV_1.vv.timerMgr.addScheduleByObject({
          callback: function(timer, dt) {
            _this.stopTableState();
          },
          target: this,
          intervalTime: state_time,
          updateCallback: function(timer, dt) {
            var remaining = VV_1.vv.tools.clamp(state_time - timer.runTime, 0, 999);
            _this.texTimeLabel.string = Math.floor(remaining) + "S";
            _this.barNode.parent.getComponent(cc.ProgressBar).progress = remaining / state_time;
          }
        });
      };
      CrashTableMgr.prototype.stopTableState = function() {
        VV_1.vv.timerMgr.deleteByTarget(this);
        this.texTimeLabel.string = "";
      };
      __decorate([ property(cc.Label) ], CrashTableMgr.prototype, "texTipLabel", void 0);
      __decorate([ property(cc.Label) ], CrashTableMgr.prototype, "texTimeLabel", void 0);
      __decorate([ property(cc.Node) ], CrashTableMgr.prototype, "barNode", void 0);
      __decorate([ property(cc.Node) ], CrashTableMgr.prototype, "stateLayerNode", void 0);
      __decorate([ property(cc.Prefab) ], CrashTableMgr.prototype, "playerListPrefab", void 0);
      CrashTableMgr = __decorate([ ccclass ], CrashTableMgr);
      return CrashTableMgr;
    }(cc.Component);
    exports.default = CrashTableMgr;
    cc._RF.pop();
  }, {
    "../../../scripts/common/GameConst": void 0,
    "../../../scripts/components/pay/PayMgr": void 0,
    "../../../scripts/frameworks/VV": void 0,
    "../../../scripts/frameworks/components/analysis/AnalysisEvent": void 0,
    "../../../scripts/frameworks/components/i18n/I18n": void 0,
    "../../../scripts/games/gameCommon/CommonChipFly": void 0,
    "../../../scripts/games/gameCommon/PlayerList": void 0,
    "../../../scripts/prefabs/panels/PanelConfigs": void 0,
    "./CrashAnalysisEvents": "CrashAnalysisEvents",
    "./CrashGameID": "CrashGameID",
    "./CrashGameMgr": "CrashGameMgr",
    "./CrashModel": "CrashModel",
    "./CrashMsgs": "CrashMsgs"
  } ]
}, {}, [ "CrashAnalysisEvents", "CrashAutoSelectTimeUI", "CrashBetInfoItem", "CrashBetInfoMgr", "CrashBetMgr", "CrashBetPlayerInfoItem", "CrashBetPoolCtrl", "CrashGameID", "CrashGameMgr", "CrashLineNode", "CrashModel", "CrashMsgs", "CrashNotEnoughTipsCtrl", "CrashRecordMgr", "CrashSettleCoins", "CrashSpaceXCtrl", "CrashTableMgr", "CrashHistoryItem", "CrashHistoryUI" ]);