window.lunrData = {
  "index": {
    "version": "0.7.2",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "augmented.j",
          "develop",
          "index",
          "next",
          "present",
          "readm",
          "simpli"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_module.html": [
          "document",
          "list",
          "list:modul",
          "modul"
        ],
        "list_namespace.html": [
          "document",
          "list",
          "list:namespac",
          "namespac"
        ],
        "Application.html": [
          "applic",
          "augmented.applicationadd",
          "breadcrumb",
          "class",
          "extens",
          "mediat",
          "present",
          "registr",
          "stylesheet"
        ],
        "Application.html#router": [
          "applic",
          "application#rout",
          "member",
          "properti",
          "router"
        ],
        "Application.html#mediators": [
          "application#medi",
          "mediat",
          "member"
        ],
        "Application.html#stylesheets": [
          "application#stylesheet",
          "member",
          "stylesheet"
        ],
        "Application.html#breadcrumbs": [
          "application#breadcrumb",
          "breadcrumb",
          "member"
        ],
        "Application.html#registerMediator": [
          "application#registermedi",
          "function",
          "mediat",
          "regist",
          "registermedi"
        ],
        "Application.html#deregisterMediator": [
          "application#deregistermedi",
          "deregist",
          "deregistermedi",
          "function",
          "mediat"
        ],
        "Application.html#registerStylesheet": [
          "application#registerstylesheet",
          "function",
          "regist",
          "registerstylesheet",
          "stylesheet"
        ],
        "Application.html#deregisterStylesheet": [
          "application#deregisterstylesheet",
          "deregist",
          "deregisterstylesheet",
          "function",
          "stylesheet"
        ],
        "Application.html#attachStylesheets": [
          "application#attachstylesheet",
          "attach",
          "attachstylesheet",
          "dom",
          "function",
          "regist",
          "stylesheet"
        ],
        "Application.html#replaceStylesheets": [
          "application#replacestylesheet",
          "attach",
          "dom",
          "function",
          "regist",
          "replac",
          "replacestylesheet",
          "stylesheet"
        ],
        "Application.html#setCurrentBreadcrumb": [
          "application#setcurrentbreadcrumb",
          "breadcrumb",
          "current",
          "function",
          "name",
          "set",
          "setcurrentbreadcrumb",
          "uri"
        ],
        "Application.html#getCurrentBreadcrumb": [
          "application#getcurrentbreadcrumb",
          "breadcrumb",
          "current",
          "function",
          "get",
          "getcurrentbreadcrumb"
        ],
        "Application.html#.initialize": [
          "add",
          "application.initi",
          "event",
          "function",
          "initi",
          "lt;static&gt",
          "regist",
          "stylesheet"
        ],
        "Collection.html": [
          "class",
          "collect"
        ],
        "Collection.html#sync": [
          "bound",
          "call",
          "collect",
          "collection#sync",
          "data",
          "function",
          "rest",
          "sync"
        ],
        "LocalStorageCollection.html": [
          "base",
          "class",
          "collect",
          "local",
          "localstoragecollect",
          "storag"
        ],
        "LocalStorageCollection.html#initialize": [
          "function",
          "initi",
          "localstoragecollection#initi",
          "model",
          "need",
          "option",
          "wire"
        ],
        "LocalStorageCollection.html#init": [
          "call",
          "custom",
          "function",
          "init",
          "inititl",
          "localstoragecollection#init",
          "method",
          "model",
          "option"
        ],
        "LocalStorageCollection.html#fetch": [
          "collect",
          "fetch",
          "function",
          "localstoragecollection#fetch",
          "option"
        ],
        "LocalStorageCollection.html#save": [
          "collect",
          "function",
          "localstoragecollection#sav",
          "option",
          "save"
        ],
        "LocalStorageCollection.html#update": [
          "collect",
          "function",
          "localstoragecollection#upd",
          "option",
          "updat"
        ],
        "LocalStorageCollection.html#destroy": [
          "collect",
          "destroy",
          "function",
          "localstoragecollection#destroy",
          "option"
        ],
        "LocalStorageCollection.html#sync": [
          "collect",
          "function",
          "localstoragecollection#sync",
          "method",
          "sync"
        ],
        "PaginatedCollection.html": [
          "class",
          "client",
          "collect",
          "handl",
          "pagin",
          "paginatedcollect",
          "server",
          "side"
        ],
        "PaginatedCollection.html#setPageSize": [
          "function",
          "item",
          "number",
          "page",
          "paginatedcollection#setpages",
          "set",
          "setpages",
          "size"
        ],
        "PaginatedCollection.html#setCurrentPage": [
          "current",
          "function",
          "page",
          "paginatedcollection#setcurrentpag",
          "set",
          "setcurrentpag"
        ],
        "PaginatedCollection.html#fetch": [
          "backbone.collection.fetch",
          "collection.fetch",
          "fetch",
          "function",
          "method",
          "paginatedcollection#fetch",
          "rewritten"
        ],
        "PaginatedCollection.html#nextPage": [
          "function",
          "move",
          "next",
          "nextpag",
          "page",
          "paginatedcollection#nextpag"
        ],
        "PaginatedCollection.html#previousPage": [
          "function",
          "move",
          "page",
          "paginatedcollection#previouspag",
          "previou",
          "previouspag"
        ],
        "PaginatedCollection.html#goToPage": [
          "function",
          "goe",
          "gotopag",
          "page",
          "paginatedcollection#gotopag"
        ],
        "PaginatedCollection.html#firstPage": [
          "first",
          "firstpag",
          "function",
          "move",
          "page",
          "paginatedcollection#firstpag"
        ],
        "PaginatedCollection.html#lastPage": [
          "function",
          "last",
          "lastpag",
          "move",
          "page",
          "paginatedcollection#lastpag"
        ],
        "PaginatedCollection.html#refresh": [
          "collect",
          "function",
          "paginatedcollection#refresh",
          "refresh"
        ],
        "PaginatedCollection.html#sync": [
          "bound",
          "call",
          "collect",
          "data",
          "function",
          "paginatedcollection#sync",
          "rest",
          "sync"
        ],
        "ManagedController.html": [
          "automat",
          "class",
          "compon",
          "control",
          "manag",
          "managedcontrol",
          "set",
          "up"
        ],
        "ManagedController.html#views": [
          "getview",
          "instanc",
          "known",
          "managedcontroller#view",
          "member",
          "view"
        ],
        "ManagedController.html#permissions": [
          "control",
          "managedcontroller#permiss",
          "member",
          "permiss",
          "set"
        ],
        "ManagedController.html#initialize": [
          "add",
          "api",
          "control",
          "function",
          "here",
          "initi",
          "intend",
          "managedcontroller#initi",
          "start"
        ],
        "ManagedController.html#render": [
          "add",
          "api",
          "control",
          "function",
          "here",
          "intend",
          "managedcontroller#rend",
          "method",
          "render",
          "view"
        ],
        "ManagedController.html#remove": [
          "add",
          "api",
          "cleanup",
          "control",
          "end",
          "function",
          "here",
          "intend",
          "managedcontroller#remov",
          "remov",
          "view"
        ],
        "ManagedController.html#manageView": [
          "function",
          "manag",
          "managedcontroller#manageview",
          "manageview",
          "view"
        ],
        "ManagedController.html#removeAllViews": [
          "call",
          "clean",
          "function",
          "known",
          "managedcontroller#removeallview",
          "method",
          "remov",
          "removeallview",
          "thier",
          "up",
          "view"
        ],
        "ManagedController.html#addPermission": [
          "add",
          "addpermiss",
          "control",
          "function",
          "managedcontroller#addpermiss",
          "neg",
          "permiss"
        ],
        "ManagedController.html#removePermission": [
          "control",
          "function",
          "managedcontroller#removepermiss",
          "neg",
          "permiss",
          "remov",
          "removepermiss"
        ],
        "ManagedController.html#clearPermissions": [
          "clear",
          "clearpermiss",
          "control",
          "function",
          "managedcontroller#clearpermiss",
          "permiss"
        ],
        "ManagedController.html#matchesPermission": [
          "control",
          "function",
          "managedcontroller#matchespermiss",
          "match",
          "matchespermiss",
          "neg",
          "permiss"
        ],
        "ManagedController.html#canDisplay": [
          "callback",
          "candisplay",
          "control",
          "display",
          "function",
          "managedcontroller#candisplay",
          "return"
        ],
        "ViewController.html": [
          "api",
          "class",
          "control",
          "group",
          "handl",
          "router",
          "simular",
          "us",
          "view",
          "viewcontrol"
        ],
        "ViewController.html#views": [
          "getview",
          "instanc",
          "known",
          "member",
          "view",
          "viewcontroller#view"
        ],
        "ViewController.html#permissions": [
          "controllerreturn",
          "exclud",
          "format",
          "get",
          "includ",
          "member",
          "permiss",
          "viewcontroller#permiss"
        ],
        "ViewController.html#initialize": [
          "add",
          "api",
          "control",
          "function",
          "here",
          "initi",
          "intend",
          "start",
          "viewcontroller#initi"
        ],
        "ViewController.html#render": [
          "add",
          "api",
          "control",
          "function",
          "here",
          "intend",
          "method",
          "render",
          "view",
          "viewcontroller#rend"
        ],
        "ViewController.html#remove": [
          "add",
          "api",
          "cleanup",
          "control",
          "end",
          "function",
          "here",
          "intend",
          "remov",
          "view",
          "viewcontroller#remov"
        ],
        "ViewController.html#manageView": [
          "function",
          "manag",
          "manageview",
          "view",
          "viewcontroller#manageview"
        ],
        "ViewController.html#removeAllViews": [
          "call",
          "clean",
          "function",
          "known",
          "method",
          "remov",
          "removeallview",
          "thier",
          "up",
          "view",
          "viewcontroller#removeallview"
        ],
        "ViewController.html#addPermission": [
          "add",
          "addpermiss",
          "control",
          "function",
          "neg",
          "permiss",
          "viewcontroller#addpermiss"
        ],
        "ViewController.html#removePermission": [
          "control",
          "function",
          "neg",
          "permiss",
          "remov",
          "removepermiss",
          "viewcontroller#removepermiss"
        ],
        "ViewController.html#clearPermissions": [
          "clear",
          "clearpermiss",
          "control",
          "function",
          "permiss",
          "viewcontroller#clearpermiss"
        ],
        "ViewController.html#matchesPermission": [
          "control",
          "function",
          "match",
          "matchespermiss",
          "neg",
          "permiss",
          "viewcontroller#matchespermiss"
        ],
        "ViewController.html#canDisplay": [
          "callback",
          "candisplay",
          "control",
          "display",
          "function",
          "return",
          "viewcontroller#candisplay"
        ],
        "Dom.html": [
          "class",
          "dom",
          "function",
          "relat"
        ],
        "History.html": [
          "back",
          "backbone.j",
          "base",
          "browser",
          "class",
          "cross",
          "eitherpushst",
          "fragment",
          "handl",
          "histori",
          "ie",
          "manag",
          "natch),fal",
          "old",
          "oronhashchangeand",
          "polling.inspir",
          "real",
          "support",
          "thank",
          "url"
        ],
        "RestLogger.html": [
          "_logm",
          "class",
          "logger",
          "overrid",
          "requir",
          "rest",
          "restlogg"
        ],
        "RestLogger.html#uri": [
          "member",
          "restlogger#uri",
          "uri"
        ],
        "Model.html": [
          "class",
          "model",
          "rest",
          "schema",
          "secur",
          "support",
          "valid"
        ],
        "Pagination.PaginationFactory.html": [
          "api",
          "class",
          "collect",
          "factori",
          "pagin",
          "pagination.paginationfactori",
          "paginationfactori",
          "return",
          "type"
        ],
        "Router.html": [
          "action",
          "arematch",
          "class",
          "creat",
          "event",
          "faux",
          "fire",
          "hash",
          "map",
          "new",
          "on",
          "rout",
          "router",
          "set",
          "static",
          "url"
        ],
        "Router.html#loadView": [
          "call",
          "cleanup",
          "function",
          "last",
          "load",
          "loadview",
          "remov",
          "router#loadview",
          "safe",
          "view"
        ],
        "Router.html#cleanup": [
          "call",
          "cleanup",
          "function",
          "last",
          "remov",
          "router#cleanup",
          "view"
        ],
        "Router.html#initialize": [
          "default",
          "empti",
          "function",
          "initi",
          "logic",
          "overrid",
          "owniniti",
          "router#initi"
        ],
        "Router.html#route": [
          "bind",
          "callback",
          "function",
          "manual",
          "name",
          "rout",
          "router#rout",
          "singl"
        ],
        "Router.html#execute": [
          "anexcel",
          "arg",
          "callback",
          "cleanup",
          "execut",
          "function",
          "handler",
          "paramet",
          "place",
          "post",
          "pre",
          "provid",
          "rout",
          "router#execut",
          "setup"
        ],
        "Router.html#navigate": [
          "fragment",
          "function",
          "histori",
          "navig",
          "option",
          "proxi",
          "router#navig",
          "save",
          "simpl"
        ],
        "Router.html#startHistory": [
          "api",
          "browser",
          "function",
          "histori",
          "option",
          "router#starthistori",
          "start",
          "starthistori",
          "us"
        ],
        "Presentation.LocalStorage.html": [
          "api",
          "class",
          "local",
          "localstorag",
          "localstoragefactori",
          "presentation.localstorag",
          "return",
          "storag"
        ],
        "Presentation.LocalStorageFactory.html": [
          "augmented.localstoragefactoryretriev",
          "class",
          "local",
          "localstoragefactori",
          "object",
          "presentation.localstoragefactori",
          "storag"
        ],
        "Presentation.NamespacedLocalStorage.html": [
          "class",
          "local",
          "namespacedlocalstorag",
          "namespacedlocalstorageretriev",
          "object",
          "presentation.namespacedlocalstorag",
          "storag"
        ],
        "Presentation.AbstractView.html": [
          "abstractview",
          "aubstract",
          "base",
          "class",
          "concept",
          "display",
          "handlng",
          "mv",
          "presentation.abstractview",
          "view"
        ],
        "Presentation.Component.Article.html": [
          "addsect",
          "api",
          "array",
          "articl",
          "bodi",
          "class",
          "classhead",
          "component.articl",
          "div)sect",
          "footer",
          "format",
          "gener",
          "header",
          "markupbodyel",
          "markupfooterel",
          "markupheaderel",
          "mount",
          "name",
          "option",
          "page'support",
          "point",
          "pointbodi",
          "pointfoot",
          "pointstyl",
          "prefil",
          "presentation.component.articl",
          "section",
          "see",
          "set",
          "style",
          "up",
          "viewel"
        ],
        "Presentation.Component.Article.html#header": [
          "article#head",
          "component.article#head",
          "header",
          "member",
          "presentation.component.article#head",
          "properti"
        ],
        "Presentation.Component.Article.html#footer": [
          "articl",
          "article#foot",
          "component.article#foot",
          "footer",
          "member",
          "presentation.component.article#foot"
        ],
        "Presentation.Component.Article.html#body": [
          "article#bodi",
          "bodi",
          "card",
          "component.article#bodi",
          "content",
          "html",
          "member",
          "presentation.component.article#bodi",
          "support"
        ],
        "Presentation.Component.Article.html#sections": [
          "array",
          "article#sect",
          "component.article#sect",
          "member",
          "presentation.component.article#sect",
          "section"
        ],
        "Presentation.Component.Article.html#addSection": [
          "add",
          "addsect",
          "articl",
          "article#addsect",
          "component.article#addsect",
          "function",
          "object",
          "presentation.component.article#addsect",
          "section"
        ],
        "Presentation.Component.Article.html#clearSections": [
          "article#clearsect",
          "clear",
          "clearsect",
          "component.article#clearsect",
          "function",
          "presentation.component.article#clearsect",
          "section"
        ],
        "Presentation.Component.Article.html#render": [
          "articl",
          "article#rend",
          "component.article#rend",
          "function",
          "presentation.component.article#rend",
          "render"
        ],
        "Presentation.Component.Card.html": [
          "card",
          "class",
          "component.card",
          "panel",
          "panel/dialog",
          "presentation.component.card",
          "simpl",
          "view"
        ],
        "Presentation.Component.AlertDialogView.html": [
          "alert",
          "alertdialogview",
          "automat",
          "button",
          "cancel",
          "class",
          "component.alertdialogview",
          "creat",
          "dialog",
          "messag",
          "presentation.component.alertdialogview",
          "view"
        ],
        "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": [
          "augmented.presentation.confirmationdialogview",
          "automat",
          "button",
          "class",
          "comfirm",
          "component.augmented.presentation.confirmationdialogview",
          "confirmationdialogview",
          "creat",
          "dialog",
          "presentation.component.augmented.presentation.confirmationdialogview",
          "presentation.confirmationdialogview",
          "view",
          "ye"
        ],
        "Presentation.Component.DialogView.html": [
          "automat",
          "class",
          "component.dialogview",
          "configur",
          "creat",
          "custom",
          "dialog",
          "dialogview",
          "presentation.component.dialogview",
          "simpl",
          "view"
        ],
        "Presentation.Component.Footer.html": [
          "class",
          "compon",
          "component.foot",
          "footer",
          "presentation.component.foot"
        ],
        "Presentation.Component.AutomaticForm.html": [
          "automat",
          "automaticform",
          "class",
          "component.automaticform",
          "creat",
          "form",
          "json",
          "presentation.component.automaticform",
          "schema",
          "view"
        ],
        "Presentation.Component.Header.html": [
          "class",
          "compon",
          "component.head",
          "header",
          "manag",
          "presentation.component.head"
        ],
        "Presentation.Component.Header.html#title": [
          "component.header#titl",
          "header#titl",
          "member",
          "presentation.component.header#titl",
          "titl"
        ],
        "Presentation.Component.Header.html#subTitle": [
          "component.header#subtitl",
          "header#subtitl",
          "member",
          "presentation.component.header#subtitl",
          "subtitl"
        ],
        "Presentation.Component.Header.html#render": [
          "component.header#rend",
          "function",
          "header",
          "header#rend",
          "presentation.component.header#rend",
          "render"
        ],
        "Presentation.Component.HamburgerMenu.html": [
          "class",
          "component.hamburgermenu",
          "hamburg",
          "hamburgermenu",
          "menu",
          "presentation.component.hamburgermenu",
          "view"
        ],
        "Presentation.Component.Menu.html": [
          "class",
          "component.menu",
          "menu",
          "presentation.component.menu"
        ],
        "Presentation.Component.Menu.html#render": [
          "component.menu#rend",
          "function",
          "menu",
          "menu#rend",
          "presentation.component.menu#rend",
          "render"
        ],
        "Presentation.Component.NavigationMenu.html": [
          "class",
          "component.navigationmenu",
          "menu",
          "navig",
          "navigationmenu",
          "presentation.component.navigationmenu"
        ],
        "Presentation.Component.NavigationMenu.html#render": [
          "component.navigationmenu#rend",
          "function",
          "menu",
          "navigationmenu#rend",
          "presentation.component.navigationmenu#rend",
          "render"
        ],
        "Presentation.Component.NotificationCenter.html": [
          "center",
          "class",
          "compon",
          "component.notificationcent",
          "notfic",
          "notificationcent",
          "presentation.component.notificationcent"
        ],
        "Presentation.Component.NotificationCenter.html#notifications": [
          "component.notificationcenter#notif",
          "member",
          "notif",
          "notificationcenter#notif",
          "presentation.component.notificationcenter#notif"
        ],
        "Presentation.Component.NotificationCenter.html#showNotification": [
          "component.notificationcenter#shownotif",
          "function",
          "notificationcent",
          "notificationcenter#shownotif",
          "presentation.component.notificationcenter#shownotif",
          "show",
          "shownotif"
        ],
        "Presentation.Component.NotificationCenter.html#hideNotification": [
          "component.notificationcenter#hidenotif",
          "function",
          "hide",
          "hidenotif",
          "notificationcent",
          "notificationcenter#hidenotif",
          "presentation.component.notificationcenter#hidenotif"
        ],
        "Presentation.Component.NotificationCenter.html#clearNotifications": [
          "clear",
          "clearnotif",
          "component.notificationcenter#clearnotif",
          "function",
          "notificationcent",
          "notificationcenter#clearnotif",
          "presentation.component.notificationcenter#clearnotif"
        ],
        "Presentation.Component.NotificationCenter.html#render": [
          "component.notificationcenter#rend",
          "function",
          "menu",
          "notificationcenter#rend",
          "presentation.component.notificationcenter#rend",
          "render"
        ],
        "Presentation.Component.AutomaticTable.html": [
          "automat",
          "automatict",
          "automatictablecr",
          "class",
          "component.automatict",
          "data",
          "defint",
          "presentation.component.automatict",
          "schema",
          "tabl",
          "uri/json",
          "via"
        ],
        "Presentation.Component.BigDataTable.html": [
          "bigdatat",
          "class",
          "component.bigdatat",
          "instanc",
          "pagin",
          "preconfigur",
          "presentation.component.bigdatat",
          "sort"
        ],
        "Presentation.Component.EditableBigDataTable.html": [
          "class",
          "component.editablebigdatat",
          "editablebigdatat",
          "instanc",
          "pagin",
          "preconfigur",
          "presentation.component.editablebigdatat",
          "sort"
        ],
        "Presentation.Component.EditableLocalStorageTable.html": [
          "class",
          "component.editablelocalstoraget",
          "edit",
          "editablelocalstoraget",
          "instanc",
          "local",
          "preconfigur",
          "presentation.component.editablelocalstoraget",
          "sort",
          "storag"
        ],
        "Presentation.Component.EditableTable.html": [
          "class",
          "component.editablet",
          "edit",
          "editablet",
          "instanc",
          "preconfigur",
          "presentation.component.editablet"
        ],
        "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": [
          "augmented.presentation.localstoraget",
          "base",
          "class",
          "component.augmented.presentation.localstoraget",
          "instanc",
          "local",
          "localstoraget",
          "preconfigur",
          "presentation.component.augmented.presentation.localstoraget",
          "presentation.localstoraget",
          "storag",
          "tabl"
        ],
        "Presentation.Component.Spreadsheet.html": [
          "10",
          "buffer",
          "class",
          "component.spreadsheet",
          "edit",
          "instanc",
          "length",
          "line",
          "preconfigur",
          "presentation.component.spreadsheet",
          "properi",
          "specifi",
          "spreadsheet",
          "spreadsheet.if",
          "us"
        ],
        "Presentation.Component.AbstractToolbar.html": [
          "abstract",
          "abstracttoolbar",
          "class",
          "compon",
          "component.abstracttoolbar",
          "design",
          "extend",
          "lt;abstract&gt",
          "presentation.component.abstracttoolbar",
          "tooldbar"
        ],
        "Presentation.Component.Toolbar.html": [
          "class",
          "component.toolbar",
          "presentation.component.toolbar",
          "toolbar",
          "view"
        ],
        "Presentation.DecoratorView.html": [
          "abil",
          "achiev",
          "add",
          "annot",
          "append",
          "around",
          "backend",
          "bindings.thi",
          "class",
          "clickdata",
          "concept",
          "contract.although",
          "control",
          "css",
          "custom",
          "customev",
          "data",
          "decor",
          "decoratorview",
          "decoratorviewan",
          "decoupl",
          "design",
          "develop",
          "directly.to",
          "dom",
          "event",
          "events!thi",
          "events'support",
          "functiondata",
          "gener",
          "give",
          "html",
          "i'd",
          "idea",
          "instead",
          "it'",
          "javascript",
          "mvvm",
          "note",
          "prepend",
          "presentation.decoratorview",
          "render",
          "selectorsimport",
          "styledata",
          "templat",
          "templatedata",
          "up",
          "us",
          "via",
          "view",
          "without"
        ],
        "Presentation.Colleague.html": [
          "base",
          "child",
          "class",
          "clean",
          "colleagu",
          "convent",
          "defin",
          "easili",
          "hash",
          "presentation.colleagu",
          "setup",
          "subscript",
          "subscriptionsa",
          "subscriptionscan",
          "view",
          "view.allow"
        ],
        "Presentation.Mediator.html": [
          "achiev",
          "between",
          "class",
          "colleagu",
          "commun",
          "communicatewith",
          "coupl",
          "defin",
          "each",
          "have",
          "interfac",
          "mediat",
          "object",
          "patternth",
          "presentation.medi",
          "view",
          "views.loos"
        ],
        "Presentation.View.html": [
          "aubstract",
          "base",
          "class",
          "concept",
          "display",
          "handlng",
          "mv",
          "presentation.view",
          "view"
        ],
        "Widget.html": [
          "class",
          "modul",
          "present",
          "small",
          "widget"
        ],
        "module-Presentation.html": [
          "augmented.j",
          "compon",
          "modul",
          "module:present",
          "next",
          "present"
        ],
        "module-Presentation-Component.html": [
          "compon",
          "larg",
          "module:presentation~compon",
          "namespac",
          "presentation~compon",
          "ui"
        ],
        "module-Presentation-Pagination.html": [
          "module:presentation~pagin",
          "namespac",
          "pagin",
          "presentation~pagin"
        ],
        "Configuration.xhrFields.html": [
          "configuration.xhrfield",
          "namespac",
          "properti",
          "xhrfield"
        ],
        "Configuration.xhrFields.html#.withCredentials": [
          "configuration.xhrfields.withcredenti",
          "lt;static&gt",
          "member",
          "properti",
          "withcredenti",
          "xhrfields.withcredenti"
        ]
      },
      "length": 131
    },
    "tokenStore": {
      "root": {
        "1": {
          "0": {
            "docs": {
              "Presentation.Component.Spreadsheet.html": {
                "ref": "Presentation.Component.Spreadsheet.html",
                "tf": 3.8461538461538463
              }
            }
          },
          "docs": {}
        },
        "docs": {},
        "a": {
          "docs": {},
          "u": {
            "docs": {},
            "g": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "j": {
                              "docs": {
                                "index.html": {
                                  "ref": "index.html",
                                  "tf": 314
                                },
                                "module-Presentation.html": {
                                  "ref": "module-Presentation.html",
                                  "tf": 10
                                }
                              }
                            },
                            "a": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "Application.html": {
                                                            "ref": "Application.html",
                                                            "tf": 5
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "l": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "y": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "i": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "v": {
                                                                                "docs": {
                                                                                  "Presentation.LocalStorageFactory.html": {
                                                                                    "ref": "Presentation.LocalStorageFactory.html",
                                                                                    "tf": 12.5
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "p": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    ".": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "f": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "m": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "n": {
                                                                              "docs": {},
                                                                              "d": {
                                                                                "docs": {},
                                                                                "i": {
                                                                                  "docs": {},
                                                                                  "a": {
                                                                                    "docs": {},
                                                                                    "l": {
                                                                                      "docs": {},
                                                                                      "o": {
                                                                                        "docs": {},
                                                                                        "g": {
                                                                                          "docs": {},
                                                                                          "v": {
                                                                                            "docs": {},
                                                                                            "i": {
                                                                                              "docs": {},
                                                                                              "e": {
                                                                                                "docs": {},
                                                                                                "w": {
                                                                                                  "docs": {
                                                                                                    "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                                                                                                      "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                                                                                                      "tf": 60
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "l": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {
                                                                                  "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                                                                                    "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                                                                                    "tf": 60
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "m": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "ManagedController.html": {
                          "ref": "ManagedController.html",
                          "tf": 8.333333333333332
                        },
                        "Presentation.Component.AlertDialogView.html": {
                          "ref": "Presentation.Component.AlertDialogView.html",
                          "tf": 5.555555555555555
                        },
                        "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                          "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                          "tf": 6.25
                        },
                        "Presentation.Component.DialogView.html": {
                          "ref": "Presentation.Component.DialogView.html",
                          "tf": 6.25
                        },
                        "Presentation.Component.AutomaticForm.html": {
                          "ref": "Presentation.Component.AutomaticForm.html",
                          "tf": 8.333333333333332
                        },
                        "Presentation.Component.AutomaticTable.html": {
                          "ref": "Presentation.Component.AutomaticTable.html",
                          "tf": 6.25
                        }
                      },
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "m": {
                                  "docs": {
                                    "Presentation.Component.AutomaticForm.html": {
                                      "ref": "Presentation.Component.AutomaticForm.html",
                                      "tf": 700
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "t": {
                            "docs": {
                              "Presentation.Component.AutomaticTable.html": {
                                "ref": "Presentation.Component.AutomaticTable.html",
                                "tf": 700
                              }
                            },
                            "a": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "Presentation.Component.AutomaticTable.html": {
                                            "ref": "Presentation.Component.AutomaticTable.html",
                                            "tf": 6.25
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Presentation.AbstractView.html": {
                              "ref": "Presentation.AbstractView.html",
                              "tf": 6.25
                            },
                            "Presentation.View.html": {
                              "ref": "Presentation.View.html",
                              "tf": 6.25
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Application.html": {
                        "ref": "Application.html",
                        "tf": 1910
                      },
                      "Application.html#router": {
                        "ref": "Application.html#router",
                        "tf": 16.666666666666664
                      }
                    },
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "#": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Application.html#router": {
                                            "ref": "Application.html#router",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {
                                                          "Application.html#registerMediator": {
                                                            "ref": "Application.html#registerMediator",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "s": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "y": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "h": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {
                                                                      "Application.html#registerStylesheet": {
                                                                        "ref": "Application.html#registerStylesheet",
                                                                        "tf": 1150
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "p": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "y": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "h": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {
                                                                    "Application.html#replaceStylesheets": {
                                                                      "ref": "Application.html#replaceStylesheets",
                                                                      "tf": 1150
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "i": {
                                        "docs": {
                                          "Application.html#mediators": {
                                            "ref": "Application.html#mediators",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "y": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "h": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "Application.html#stylesheets": {
                                                        "ref": "Application.html#stylesheets",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "b": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {},
                                                              "c": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "u": {
                                                                    "docs": {},
                                                                    "m": {
                                                                      "docs": {},
                                                                      "b": {
                                                                        "docs": {
                                                                          "Application.html#setCurrentBreadcrumb": {
                                                                            "ref": "Application.html#setCurrentBreadcrumb",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "b": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {
                                                      "Application.html#breadcrumbs": {
                                                        "ref": "Application.html#breadcrumbs",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "d": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {
                                                              "Application.html#deregisterMediator": {
                                                                "ref": "Application.html#deregisterMediator",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "s": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "h": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {
                                                                          "Application.html#deregisterStylesheet": {
                                                                            "ref": "Application.html#deregisterStylesheet",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "h": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "h": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {
                                                                  "Application.html#attachStylesheets": {
                                                                    "ref": "Application.html#attachStylesheets",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "g": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "b": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {},
                                                              "c": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "u": {
                                                                    "docs": {},
                                                                    "m": {
                                                                      "docs": {},
                                                                      "b": {
                                                                        "docs": {
                                                                          "Application.html#getCurrentBreadcrumb": {
                                                                            "ref": "Application.html#getCurrentBreadcrumb",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              ".": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {
                                            "Application.html#.initialize": {
                                              "ref": "Application.html#.initialize",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Presentation.DecoratorView.html": {
                        "ref": "Presentation.DecoratorView.html",
                        "tf": 0.8333333333333334
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {
                "ManagedController.html#initialize": {
                  "ref": "ManagedController.html#initialize",
                  "tf": 6.25
                },
                "ManagedController.html#render": {
                  "ref": "ManagedController.html#render",
                  "tf": 5
                },
                "ManagedController.html#remove": {
                  "ref": "ManagedController.html#remove",
                  "tf": 5
                },
                "ViewController.html": {
                  "ref": "ViewController.html",
                  "tf": 5
                },
                "ViewController.html#initialize": {
                  "ref": "ViewController.html#initialize",
                  "tf": 6.25
                },
                "ViewController.html#render": {
                  "ref": "ViewController.html#render",
                  "tf": 5
                },
                "ViewController.html#remove": {
                  "ref": "ViewController.html#remove",
                  "tf": 5
                },
                "Pagination.PaginationFactory.html": {
                  "ref": "Pagination.PaginationFactory.html",
                  "tf": 7.142857142857142
                },
                "Router.html#startHistory": {
                  "ref": "Router.html#startHistory",
                  "tf": 8.333333333333332
                },
                "Presentation.LocalStorage.html": {
                  "ref": "Presentation.LocalStorage.html",
                  "tf": 10
                },
                "Presentation.Component.Article.html": {
                  "ref": "Presentation.Component.Article.html",
                  "tf": 1.3157894736842104
                }
              }
            }
          },
          "t": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Application.html#attachStylesheets": {
                        "ref": "Application.html#attachStylesheets",
                        "tf": 12.5
                      },
                      "Application.html#replaceStylesheets": {
                        "ref": "Application.html#replaceStylesheets",
                        "tf": 8.333333333333332
                      }
                    },
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "y": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Application.html#attachStylesheets": {
                                            "ref": "Application.html#attachStylesheets",
                                            "tf": 750
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "d": {
              "docs": {
                "Application.html#.initialize": {
                  "ref": "Application.html#.initialize",
                  "tf": 10
                },
                "ManagedController.html#initialize": {
                  "ref": "ManagedController.html#initialize",
                  "tf": 6.25
                },
                "ManagedController.html#render": {
                  "ref": "ManagedController.html#render",
                  "tf": 5
                },
                "ManagedController.html#remove": {
                  "ref": "ManagedController.html#remove",
                  "tf": 5
                },
                "ManagedController.html#addPermission": {
                  "ref": "ManagedController.html#addPermission",
                  "tf": 16.666666666666664
                },
                "ViewController.html#initialize": {
                  "ref": "ViewController.html#initialize",
                  "tf": 6.25
                },
                "ViewController.html#render": {
                  "ref": "ViewController.html#render",
                  "tf": 5
                },
                "ViewController.html#remove": {
                  "ref": "ViewController.html#remove",
                  "tf": 5
                },
                "ViewController.html#addPermission": {
                  "ref": "ViewController.html#addPermission",
                  "tf": 16.666666666666664
                },
                "Presentation.Component.Article.html#addSection": {
                  "ref": "Presentation.Component.Article.html#addSection",
                  "tf": 12.5
                },
                "Presentation.DecoratorView.html": {
                  "ref": "Presentation.DecoratorView.html",
                  "tf": 0.8333333333333334
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "ManagedController.html#addPermission": {
                                "ref": "ManagedController.html#addPermission",
                                "tf": 683.3333333333334
                              },
                              "ViewController.html#addPermission": {
                                "ref": "ViewController.html#addPermission",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.Component.Article.html": {
                          "ref": "Presentation.Component.Article.html",
                          "tf": 1.3157894736842104
                        },
                        "Presentation.Component.Article.html#addSection": {
                          "ref": "Presentation.Component.Article.html#addSection",
                          "tf": 625
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Router.html": {
                        "ref": "Router.html",
                        "tf": 2.941176470588235
                      }
                    }
                  }
                }
              }
            },
            "h": {
              "docs": {},
              "i": {
                "docs": {},
                "e": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "Presentation.DecoratorView.html": {
                        "ref": "Presentation.DecoratorView.html",
                        "tf": 0.8333333333333334
                      },
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 2.1739130434782608
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "h": {
                        "docs": {
                          "Router.html": {
                            "ref": "Router.html",
                            "tf": 2.941176470588235
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {
                "Router.html#execute": {
                  "ref": "Router.html#execute",
                  "tf": 33.33333333333333
                }
              }
            },
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Presentation.Component.Article.html": {
                      "ref": "Presentation.Component.Article.html",
                      "tf": 1.3157894736842104
                    },
                    "Presentation.Component.Article.html#sections": {
                      "ref": "Presentation.Component.Article.html#sections",
                      "tf": 25
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Presentation.Component.Article.html": {
                        "ref": "Presentation.Component.Article.html",
                        "tf": 702.6315789473684
                      },
                      "Presentation.Component.Article.html#footer": {
                        "ref": "Presentation.Component.Article.html#footer",
                        "tf": 25
                      },
                      "Presentation.Component.Article.html#addSection": {
                        "ref": "Presentation.Component.Article.html#addSection",
                        "tf": 12.5
                      },
                      "Presentation.Component.Article.html#render": {
                        "ref": "Presentation.Component.Article.html#render",
                        "tf": 16.666666666666664
                      }
                    },
                    "e": {
                      "docs": {},
                      "#": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Presentation.Component.Article.html#header": {
                                    "ref": "Presentation.Component.Article.html#header",
                                    "tf": 75
                                  }
                                }
                              }
                            }
                          }
                        },
                        "f": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Presentation.Component.Article.html#footer": {
                                    "ref": "Presentation.Component.Article.html#footer",
                                    "tf": 75
                                  }
                                }
                              }
                            }
                          }
                        },
                        "b": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Presentation.Component.Article.html#body": {
                                    "ref": "Presentation.Component.Article.html#body",
                                    "tf": 75
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Presentation.Component.Article.html#sections": {
                                    "ref": "Presentation.Component.Article.html#sections",
                                    "tf": 75
                                  }
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "Presentation.Component.Article.html#addSection": {
                                          "ref": "Presentation.Component.Article.html#addSection",
                                          "tf": 75
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "c": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Presentation.Component.Article.html#clearSections": {
                                              "ref": "Presentation.Component.Article.html#clearSections",
                                              "tf": 75
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Presentation.Component.Article.html#render": {
                                    "ref": "Presentation.Component.Article.html#render",
                                    "tf": 75
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "u": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Presentation.DecoratorView.html": {
                        "ref": "Presentation.DecoratorView.html",
                        "tf": 0.8333333333333334
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "e": {
              "docs": {},
              "x": {
                "docs": {},
                "c": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Router.html#execute": {
                          "ref": "Router.html#execute",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "o": {
                "docs": {},
                "t": {
                  "docs": {
                    "Presentation.DecoratorView.html": {
                      "ref": "Presentation.DecoratorView.html",
                      "tf": 0.8333333333333334
                    }
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Presentation.Component.AbstractToolbar.html": {
                            "ref": "Presentation.Component.AbstractToolbar.html",
                            "tf": 10
                          }
                        },
                        "v": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "w": {
                                "docs": {
                                  "Presentation.AbstractView.html": {
                                    "ref": "Presentation.AbstractView.html",
                                    "tf": 750
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "r": {
                                      "docs": {
                                        "Presentation.Component.AbstractToolbar.html": {
                                          "ref": "Presentation.Component.AbstractToolbar.html",
                                          "tf": 650
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 0.8333333333333334
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "Presentation.Component.AlertDialogView.html": {
                      "ref": "Presentation.Component.AlertDialogView.html",
                      "tf": 5.555555555555555
                    }
                  },
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "v": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "w": {
                                      "docs": {
                                        "Presentation.Component.AlertDialogView.html": {
                                          "ref": "Presentation.Component.AlertDialogView.html",
                                          "tf": 700
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "e": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 14
                        },
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "g": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Application.html#deregisterMediator": {
                            "ref": "Application.html#deregisterMediator",
                            "tf": 25
                          },
                          "Application.html#deregisterStylesheet": {
                            "ref": "Application.html#deregisterStylesheet",
                            "tf": 25
                          }
                        },
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "Application.html#deregisterMediator": {
                                        "ref": "Application.html#deregisterMediator",
                                        "tf": 700
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "y": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "Application.html#deregisterStylesheet": {
                                                    "ref": "Application.html#deregisterStylesheet",
                                                    "tf": 700
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "LocalStorageCollection.html#destroy": {
                          "ref": "LocalStorageCollection.html#destroy",
                          "tf": 725
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "g": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Presentation.Component.AbstractToolbar.html": {
                        "ref": "Presentation.Component.AbstractToolbar.html",
                        "tf": 10
                      },
                      "Presentation.DecoratorView.html": {
                        "ref": "Presentation.DecoratorView.html",
                        "tf": 1.6666666666666667
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Router.html#initialize": {
                          "ref": "Router.html#initialize",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "Presentation.Colleague.html": {
                      "ref": "Presentation.Colleague.html",
                      "tf": 3.3333333333333335
                    },
                    "Presentation.Mediator.html": {
                      "ref": "Presentation.Mediator.html",
                      "tf": 2.1739130434782608
                    }
                  },
                  "t": {
                    "docs": {
                      "Presentation.Component.AutomaticTable.html": {
                        "ref": "Presentation.Component.AutomaticTable.html",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Presentation.DecoratorView.html": {
                      "ref": "Presentation.DecoratorView.html",
                      "tf": 1.6666666666666667
                    }
                  },
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "v": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "w": {
                                  "docs": {
                                    "Presentation.DecoratorView.html": {
                                      "ref": "Presentation.DecoratorView.html",
                                      "tf": 750
                                    }
                                  },
                                  "a": {
                                    "docs": {},
                                    "n": {
                                      "docs": {
                                        "Presentation.DecoratorView.html": {
                                          "ref": "Presentation.DecoratorView.html",
                                          "tf": 0.8333333333333334
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "u": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_module.html": {
                            "ref": "list_module.html",
                            "tf": 35
                          },
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {
                "Application.html#attachStylesheets": {
                  "ref": "Application.html#attachStylesheets",
                  "tf": 12.5
                },
                "Application.html#replaceStylesheets": {
                  "ref": "Application.html#replaceStylesheets",
                  "tf": 8.333333333333332
                },
                "Dom.html": {
                  "ref": "Dom.html",
                  "tf": 1916.6666666666667
                },
                "Presentation.DecoratorView.html": {
                  "ref": "Presentation.DecoratorView.html",
                  "tf": 1.6666666666666667
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "Collection.html#sync": {
                    "ref": "Collection.html#sync",
                    "tf": 8.333333333333332
                  },
                  "PaginatedCollection.html#sync": {
                    "ref": "PaginatedCollection.html#sync",
                    "tf": 8.333333333333332
                  },
                  "Presentation.Component.AutomaticTable.html": {
                    "ref": "Presentation.Component.AutomaticTable.html",
                    "tf": 6.25
                  },
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 0.8333333333333334
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "ManagedController.html#canDisplay": {
                          "ref": "ManagedController.html#canDisplay",
                          "tf": 12.5
                        },
                        "ViewController.html#canDisplay": {
                          "ref": "ViewController.html#canDisplay",
                          "tf": 12.5
                        },
                        "Presentation.AbstractView.html": {
                          "ref": "Presentation.AbstractView.html",
                          "tf": 6.25
                        },
                        "Presentation.View.html": {
                          "ref": "Presentation.View.html",
                          "tf": 6.25
                        }
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              ")": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Presentation.Component.Article.html": {
                            "ref": "Presentation.Component.Article.html",
                            "tf": 1.3157894736842104
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "o": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Presentation.Component.AlertDialogView.html": {
                        "ref": "Presentation.Component.AlertDialogView.html",
                        "tf": 11.11111111111111
                      },
                      "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                        "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                        "tf": 12.5
                      },
                      "Presentation.Component.DialogView.html": {
                        "ref": "Presentation.Component.DialogView.html",
                        "tf": 12.5
                      }
                    },
                    "v": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "w": {
                            "docs": {
                              "Presentation.Component.DialogView.html": {
                                "ref": "Presentation.Component.DialogView.html",
                                "tf": 700
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {
                                "Presentation.DecoratorView.html": {
                                  "ref": "Presentation.DecoratorView.html",
                                  "tf": 0.8333333333333334
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "LocalStorageCollection.html#init": {
                    "ref": "LocalStorageCollection.html#init",
                    "tf": 708.3333333333334
                  }
                },
                "i": {
                  "docs": {
                    "Application.html#.initialize": {
                      "ref": "Application.html#.initialize",
                      "tf": 710
                    },
                    "LocalStorageCollection.html#initialize": {
                      "ref": "LocalStorageCollection.html#initialize",
                      "tf": 712.5
                    },
                    "ManagedController.html#initialize": {
                      "ref": "ManagedController.html#initialize",
                      "tf": 762.5
                    },
                    "ViewController.html#initialize": {
                      "ref": "ViewController.html#initialize",
                      "tf": 762.5
                    },
                    "Router.html#initialize": {
                      "ref": "Router.html#initialize",
                      "tf": 757.1428571428571
                    }
                  },
                  "t": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "LocalStorageCollection.html#init": {
                          "ref": "LocalStorageCollection.html#init",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "ManagedController.html#views": {
                          "ref": "ManagedController.html#views",
                          "tf": 12.5
                        },
                        "ViewController.html#views": {
                          "ref": "ViewController.html#views",
                          "tf": 12.5
                        },
                        "Presentation.Component.BigDataTable.html": {
                          "ref": "Presentation.Component.BigDataTable.html",
                          "tf": 10
                        },
                        "Presentation.Component.EditableBigDataTable.html": {
                          "ref": "Presentation.Component.EditableBigDataTable.html",
                          "tf": 10
                        },
                        "Presentation.Component.EditableLocalStorageTable.html": {
                          "ref": "Presentation.Component.EditableLocalStorageTable.html",
                          "tf": 7.142857142857142
                        },
                        "Presentation.Component.EditableTable.html": {
                          "ref": "Presentation.Component.EditableTable.html",
                          "tf": 12.5
                        },
                        "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                          "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                          "tf": 7.142857142857142
                        },
                        "Presentation.Component.Spreadsheet.html": {
                          "ref": "Presentation.Component.Spreadsheet.html",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "ManagedController.html#initialize": {
                        "ref": "ManagedController.html#initialize",
                        "tf": 6.25
                      },
                      "ManagedController.html#render": {
                        "ref": "ManagedController.html#render",
                        "tf": 5
                      },
                      "ManagedController.html#remove": {
                        "ref": "ManagedController.html#remove",
                        "tf": 5
                      },
                      "ViewController.html#initialize": {
                        "ref": "ViewController.html#initialize",
                        "tf": 6.25
                      },
                      "ViewController.html#render": {
                        "ref": "ViewController.html#render",
                        "tf": 5
                      },
                      "ViewController.html#remove": {
                        "ref": "ViewController.html#remove",
                        "tf": 5
                      }
                    }
                  }
                },
                "r": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "Presentation.Mediator.html": {
                            "ref": "Presentation.Mediator.html",
                            "tf": 2.1739130434782608
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "l": {
                "docs": {},
                "u": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "ViewController.html#permissions": {
                        "ref": "ViewController.html#permissions",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "e": {
              "docs": {},
              "m": {
                "docs": {
                  "PaginatedCollection.html#setPageSize": {
                    "ref": "PaginatedCollection.html#setPageSize",
                    "tf": 12.5
                  }
                }
              }
            },
            "'": {
              "docs": {
                "Presentation.DecoratorView.html": {
                  "ref": "Presentation.DecoratorView.html",
                  "tf": 0.8333333333333334
                }
              }
            }
          },
          "e": {
            "docs": {
              "History.html": {
                "ref": "History.html",
                "tf": 2.380952380952381
              }
            }
          },
          "'": {
            "docs": {},
            "d": {
              "docs": {
                "Presentation.DecoratorView.html": {
                  "ref": "Presentation.DecoratorView.html",
                  "tf": 0.8333333333333334
                }
              }
            }
          },
          "d": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 0.8333333333333334
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "e": {
            "docs": {},
            "x": {
              "docs": {},
              "t": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 314
                  },
                  "PaginatedCollection.html#nextPage": {
                    "ref": "PaginatedCollection.html#nextPage",
                    "tf": 16.666666666666664
                  },
                  "module-Presentation.html": {
                    "ref": "module-Presentation.html",
                    "tf": 10
                  }
                },
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "PaginatedCollection.html#nextPage": {
                          "ref": "PaginatedCollection.html#nextPage",
                          "tf": 750
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "d": {
                "docs": {
                  "LocalStorageCollection.html#initialize": {
                    "ref": "LocalStorageCollection.html#initialize",
                    "tf": 12.5
                  }
                }
              }
            },
            "g": {
              "docs": {
                "ManagedController.html#addPermission": {
                  "ref": "ManagedController.html#addPermission",
                  "tf": 33.33333333333333
                },
                "ManagedController.html#removePermission": {
                  "ref": "ManagedController.html#removePermission",
                  "tf": 33.33333333333333
                },
                "ManagedController.html#matchesPermission": {
                  "ref": "ManagedController.html#matchesPermission",
                  "tf": 33.33333333333333
                },
                "ViewController.html#addPermission": {
                  "ref": "ViewController.html#addPermission",
                  "tf": 33.33333333333333
                },
                "ViewController.html#removePermission": {
                  "ref": "ViewController.html#removePermission",
                  "tf": 33.33333333333333
                },
                "ViewController.html#matchesPermission": {
                  "ref": "ViewController.html#matchesPermission",
                  "tf": 33.33333333333333
                }
              }
            },
            "w": {
              "docs": {
                "Router.html": {
                  "ref": "Router.html",
                  "tf": 2.941176470588235
                }
              }
            }
          },
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "Application.html#setCurrentBreadcrumb": {
                    "ref": "Application.html#setCurrentBreadcrumb",
                    "tf": 33.33333333333333
                  },
                  "Router.html#route": {
                    "ref": "Router.html#route",
                    "tf": 33.33333333333333
                  },
                  "Presentation.Component.Article.html": {
                    "ref": "Presentation.Component.Article.html",
                    "tf": 2.631578947368421
                  }
                },
                "s": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 635
                          },
                          "module-Presentation-Component.html": {
                            "ref": "module-Presentation-Component.html",
                            "tf": 110
                          },
                          "module-Presentation-Pagination.html": {
                            "ref": "module-Presentation-Pagination.html",
                            "tf": 110
                          },
                          "Configuration.xhrFields.html": {
                            "ref": "Configuration.xhrFields.html",
                            "tf": 110
                          }
                        },
                        "e": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {
                                                    "Presentation.NamespacedLocalStorage.html": {
                                                      "ref": "Presentation.NamespacedLocalStorage.html",
                                                      "tf": 750
                                                    }
                                                  },
                                                  "e": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "v": {
                                                                  "docs": {
                                                                    "Presentation.NamespacedLocalStorage.html": {
                                                                      "ref": "Presentation.NamespacedLocalStorage.html",
                                                                      "tf": 12.5
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {},
                  ")": {
                    "docs": {},
                    ",": {
                      "docs": {},
                      "f": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "History.html": {
                                "ref": "History.html",
                                "tf": 2.380952380952381
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "i": {
                "docs": {},
                "g": {
                  "docs": {
                    "Router.html#navigate": {
                      "ref": "Router.html#navigate",
                      "tf": 683.3333333333334
                    },
                    "Presentation.Component.NavigationMenu.html": {
                      "ref": "Presentation.Component.NavigationMenu.html",
                      "tf": 25
                    }
                  },
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "u": {
                                    "docs": {
                                      "Presentation.Component.NavigationMenu.html": {
                                        "ref": "Presentation.Component.NavigationMenu.html",
                                        "tf": 700
                                      }
                                    },
                                    "#": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "Presentation.Component.NavigationMenu.html#render": {
                                                  "ref": "Presentation.Component.NavigationMenu.html#render",
                                                  "tf": 75
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "PaginatedCollection.html#setPageSize": {
                        "ref": "PaginatedCollection.html#setPageSize",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "t": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Presentation.Component.NotificationCenter.html": {
                        "ref": "Presentation.Component.NotificationCenter.html",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "f": {
                  "docs": {
                    "Presentation.Component.NotificationCenter.html#notifications": {
                      "ref": "Presentation.Component.NotificationCenter.html#notifications",
                      "tf": 675
                    }
                  },
                  "i": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Presentation.Component.NotificationCenter.html": {
                                            "ref": "Presentation.Component.NotificationCenter.html",
                                            "tf": 700
                                          },
                                          "Presentation.Component.NotificationCenter.html#showNotification": {
                                            "ref": "Presentation.Component.NotificationCenter.html#showNotification",
                                            "tf": 25
                                          },
                                          "Presentation.Component.NotificationCenter.html#hideNotification": {
                                            "ref": "Presentation.Component.NotificationCenter.html#hideNotification",
                                            "tf": 25
                                          },
                                          "Presentation.Component.NotificationCenter.html#clearNotifications": {
                                            "ref": "Presentation.Component.NotificationCenter.html#clearNotifications",
                                            "tf": 25
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "#": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "f": {
                                                        "docs": {
                                                          "Presentation.Component.NotificationCenter.html#notifications": {
                                                            "ref": "Presentation.Component.NotificationCenter.html#notifications",
                                                            "tf": 75
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "s": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "w": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {
                                                                  "Presentation.Component.NotificationCenter.html#showNotification": {
                                                                    "ref": "Presentation.Component.NotificationCenter.html#showNotification",
                                                                    "tf": 75
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "h": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {
                                                                  "Presentation.Component.NotificationCenter.html#hideNotification": {
                                                                    "ref": "Presentation.Component.NotificationCenter.html#hideNotification",
                                                                    "tf": 75
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "c": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "f": {
                                                                  "docs": {
                                                                    "Presentation.Component.NotificationCenter.html#clearNotifications": {
                                                                      "ref": "Presentation.Component.NotificationCenter.html#clearNotifications",
                                                                      "tf": 75
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "r": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {
                                                        "Presentation.Component.NotificationCenter.html#render": {
                                                          "ref": "Presentation.Component.NotificationCenter.html#render",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 0.8333333333333334
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "e": {
              "docs": {
                "Router.html#execute": {
                  "ref": "Router.html#execute",
                  "tf": 3.8461538461538463
                }
              },
              "s": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 14
                        },
                        "Application.html": {
                          "ref": "Application.html",
                          "tf": 5
                        },
                        "Widget.html": {
                          "ref": "Widget.html",
                          "tf": 12.5
                        },
                        "module-Presentation.html": {
                          "ref": "module-Presentation.html",
                          "tf": 620
                        }
                      },
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                ".": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {
                                                          "Presentation.LocalStorage.html": {
                                                            "ref": "Presentation.LocalStorage.html",
                                                            "tf": 1150
                                                          }
                                                        },
                                                        "e": {
                                                          "docs": {},
                                                          "f": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "c": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {
                                                                          "Presentation.LocalStorageFactory.html": {
                                                                            "ref": "Presentation.LocalStorageFactory.html",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "t": {
                                                            "docs": {
                                                              "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                                                                "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                                                                "tf": 60
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "n": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {
                                                                              "Presentation.NamespacedLocalStorage.html": {
                                                                                "ref": "Presentation.NamespacedLocalStorage.html",
                                                                                "tf": 1150
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "a": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "w": {
                                                          "docs": {
                                                            "Presentation.AbstractView.html": {
                                                              "ref": "Presentation.AbstractView.html",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "c": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    ".": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "c": {
                                                                "docs": {},
                                                                "l": {
                                                                  "docs": {
                                                                    "Presentation.Component.Article.html": {
                                                                      "ref": "Presentation.Component.Article.html",
                                                                      "tf": 1100
                                                                    }
                                                                  },
                                                                  "e": {
                                                                    "docs": {},
                                                                    "#": {
                                                                      "docs": {},
                                                                      "h": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "a": {
                                                                            "docs": {},
                                                                            "d": {
                                                                              "docs": {
                                                                                "Presentation.Component.Article.html#header": {
                                                                                  "ref": "Presentation.Component.Article.html#header",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "f": {
                                                                        "docs": {},
                                                                        "o": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {
                                                                                "Presentation.Component.Article.html#footer": {
                                                                                  "ref": "Presentation.Component.Article.html#footer",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "b": {
                                                                        "docs": {},
                                                                        "o": {
                                                                          "docs": {},
                                                                          "d": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {
                                                                                "Presentation.Component.Article.html#body": {
                                                                                  "ref": "Presentation.Component.Article.html#body",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "s": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "c": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {
                                                                                "Presentation.Component.Article.html#sections": {
                                                                                  "ref": "Presentation.Component.Article.html#sections",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "a": {
                                                                        "docs": {},
                                                                        "d": {
                                                                          "docs": {},
                                                                          "d": {
                                                                            "docs": {},
                                                                            "s": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "c": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {
                                                                                      "Presentation.Component.Article.html#addSection": {
                                                                                        "ref": "Presentation.Component.Article.html#addSection",
                                                                                        "tf": 1075
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "c": {
                                                                        "docs": {},
                                                                        "l": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "c": {
                                                                                      "docs": {},
                                                                                      "t": {
                                                                                        "docs": {
                                                                                          "Presentation.Component.Article.html#clearSections": {
                                                                                            "ref": "Presentation.Component.Article.html#clearSections",
                                                                                            "tf": 1075
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "r": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "n": {
                                                                            "docs": {},
                                                                            "d": {
                                                                              "docs": {
                                                                                "Presentation.Component.Article.html#render": {
                                                                                  "ref": "Presentation.Component.Article.html#render",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "l": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {},
                                                                        "o": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "v": {
                                                                              "docs": {},
                                                                              "i": {
                                                                                "docs": {},
                                                                                "e": {
                                                                                  "docs": {},
                                                                                  "w": {
                                                                                    "docs": {
                                                                                      "Presentation.Component.AlertDialogView.html": {
                                                                                        "ref": "Presentation.Component.AlertDialogView.html",
                                                                                        "tf": 1100
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "u": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "m": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "d": {
                                                                        "docs": {},
                                                                        ".": {
                                                                          "docs": {},
                                                                          "p": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "n": {
                                                                                      "docs": {},
                                                                                      "t": {
                                                                                        "docs": {},
                                                                                        "a": {
                                                                                          "docs": {},
                                                                                          "t": {
                                                                                            "docs": {},
                                                                                            "i": {
                                                                                              "docs": {},
                                                                                              "o": {
                                                                                                "docs": {},
                                                                                                "n": {
                                                                                                  "docs": {},
                                                                                                  ".": {
                                                                                                    "docs": {},
                                                                                                    "c": {
                                                                                                      "docs": {},
                                                                                                      "o": {
                                                                                                        "docs": {},
                                                                                                        "n": {
                                                                                                          "docs": {},
                                                                                                          "f": {
                                                                                                            "docs": {},
                                                                                                            "i": {
                                                                                                              "docs": {},
                                                                                                              "r": {
                                                                                                                "docs": {},
                                                                                                                "m": {
                                                                                                                  "docs": {},
                                                                                                                  "a": {
                                                                                                                    "docs": {},
                                                                                                                    "t": {
                                                                                                                      "docs": {},
                                                                                                                      "i": {
                                                                                                                        "docs": {},
                                                                                                                        "o": {
                                                                                                                          "docs": {},
                                                                                                                          "n": {
                                                                                                                            "docs": {},
                                                                                                                            "d": {
                                                                                                                              "docs": {},
                                                                                                                              "i": {
                                                                                                                                "docs": {},
                                                                                                                                "a": {
                                                                                                                                  "docs": {},
                                                                                                                                  "l": {
                                                                                                                                    "docs": {},
                                                                                                                                    "o": {
                                                                                                                                      "docs": {},
                                                                                                                                      "g": {
                                                                                                                                        "docs": {},
                                                                                                                                        "v": {
                                                                                                                                          "docs": {},
                                                                                                                                          "i": {
                                                                                                                                            "docs": {},
                                                                                                                                            "e": {
                                                                                                                                              "docs": {},
                                                                                                                                              "w": {
                                                                                                                                                "docs": {
                                                                                                                                                  "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                                                                                                                                                    "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                                                                                                                                                    "tf": 1060
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    },
                                                                                                    "l": {
                                                                                                      "docs": {},
                                                                                                      "o": {
                                                                                                        "docs": {},
                                                                                                        "c": {
                                                                                                          "docs": {},
                                                                                                          "a": {
                                                                                                            "docs": {},
                                                                                                            "l": {
                                                                                                              "docs": {},
                                                                                                              "s": {
                                                                                                                "docs": {},
                                                                                                                "t": {
                                                                                                                  "docs": {},
                                                                                                                  "o": {
                                                                                                                    "docs": {},
                                                                                                                    "r": {
                                                                                                                      "docs": {},
                                                                                                                      "a": {
                                                                                                                        "docs": {},
                                                                                                                        "g": {
                                                                                                                          "docs": {},
                                                                                                                          "e": {
                                                                                                                            "docs": {},
                                                                                                                            "t": {
                                                                                                                              "docs": {
                                                                                                                                "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                                                                                                                                  "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                                                                                                                                  "tf": 1060
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "t": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "c": {
                                                                        "docs": {},
                                                                        "f": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "m": {
                                                                                "docs": {
                                                                                  "Presentation.Component.AutomaticForm.html": {
                                                                                    "ref": "Presentation.Component.AutomaticForm.html",
                                                                                    "tf": 1100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        },
                                                                        "t": {
                                                                          "docs": {
                                                                            "Presentation.Component.AutomaticTable.html": {
                                                                              "ref": "Presentation.Component.AutomaticTable.html",
                                                                              "tf": 1100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "b": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        "o": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "l": {
                                                                              "docs": {},
                                                                              "b": {
                                                                                "docs": {},
                                                                                "a": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {
                                                                                      "Presentation.Component.AbstractToolbar.html": {
                                                                                        "ref": "Presentation.Component.AbstractToolbar.html",
                                                                                        "tf": 1100
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "c": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {
                                                                "Presentation.Component.Card.html": {
                                                                  "ref": "Presentation.Component.Card.html",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "d": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "l": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "v": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "w": {
                                                                          "docs": {
                                                                            "Presentation.Component.DialogView.html": {
                                                                              "ref": "Presentation.Component.DialogView.html",
                                                                              "tf": 1100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "f": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "Presentation.Component.Footer.html": {
                                                                  "ref": "Presentation.Component.Footer.html",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "h": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {
                                                                "Presentation.Component.Header.html": {
                                                                  "ref": "Presentation.Component.Header.html",
                                                                  "tf": 1100
                                                                }
                                                              },
                                                              "e": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "#": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {},
                                                                        "t": {
                                                                          "docs": {},
                                                                          "l": {
                                                                            "docs": {
                                                                              "Presentation.Component.Header.html#title": {
                                                                                "ref": "Presentation.Component.Header.html#title",
                                                                                "tf": 1075
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "s": {
                                                                      "docs": {},
                                                                      "u": {
                                                                        "docs": {},
                                                                        "b": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "l": {
                                                                                  "docs": {
                                                                                    "Presentation.Component.Header.html#subTitle": {
                                                                                      "ref": "Presentation.Component.Header.html#subTitle",
                                                                                      "tf": 1075
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "r": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "n": {
                                                                          "docs": {},
                                                                          "d": {
                                                                            "docs": {
                                                                              "Presentation.Component.Header.html#render": {
                                                                                "ref": "Presentation.Component.Header.html#render",
                                                                                "tf": 1075
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "a": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "b": {
                                                              "docs": {},
                                                              "u": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        "m": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "n": {
                                                                              "docs": {},
                                                                              "u": {
                                                                                "docs": {
                                                                                  "Presentation.Component.HamburgerMenu.html": {
                                                                                    "ref": "Presentation.Component.HamburgerMenu.html",
                                                                                    "tf": 1100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "m": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "u": {
                                                              "docs": {
                                                                "Presentation.Component.Menu.html": {
                                                                  "ref": "Presentation.Component.Menu.html",
                                                                  "tf": 1100
                                                                }
                                                              },
                                                              "#": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "n": {
                                                                      "docs": {},
                                                                      "d": {
                                                                        "docs": {
                                                                          "Presentation.Component.Menu.html#render": {
                                                                            "ref": "Presentation.Component.Menu.html#render",
                                                                            "tf": 1075
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "n": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "v": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "g": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "n": {
                                                                          "docs": {},
                                                                          "m": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "n": {
                                                                                "docs": {},
                                                                                "u": {
                                                                                  "docs": {
                                                                                    "Presentation.Component.NavigationMenu.html": {
                                                                                      "ref": "Presentation.Component.NavigationMenu.html",
                                                                                      "tf": 1100
                                                                                    }
                                                                                  },
                                                                                  "#": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "n": {
                                                                                          "docs": {},
                                                                                          "d": {
                                                                                            "docs": {
                                                                                              "Presentation.Component.NavigationMenu.html#render": {
                                                                                                "ref": "Presentation.Component.NavigationMenu.html#render",
                                                                                                "tf": 1075
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "o": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "n": {
                                                                              "docs": {},
                                                                              "c": {
                                                                                "docs": {},
                                                                                "e": {
                                                                                  "docs": {},
                                                                                  "n": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {
                                                                                        "Presentation.Component.NotificationCenter.html": {
                                                                                          "ref": "Presentation.Component.NotificationCenter.html",
                                                                                          "tf": 1100
                                                                                        }
                                                                                      },
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "#": {
                                                                                            "docs": {},
                                                                                            "n": {
                                                                                              "docs": {},
                                                                                              "o": {
                                                                                                "docs": {},
                                                                                                "t": {
                                                                                                  "docs": {},
                                                                                                  "i": {
                                                                                                    "docs": {},
                                                                                                    "f": {
                                                                                                      "docs": {
                                                                                                        "Presentation.Component.NotificationCenter.html#notifications": {
                                                                                                          "ref": "Presentation.Component.NotificationCenter.html#notifications",
                                                                                                          "tf": 1075
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "s": {
                                                                                              "docs": {},
                                                                                              "h": {
                                                                                                "docs": {},
                                                                                                "o": {
                                                                                                  "docs": {},
                                                                                                  "w": {
                                                                                                    "docs": {},
                                                                                                    "n": {
                                                                                                      "docs": {},
                                                                                                      "o": {
                                                                                                        "docs": {},
                                                                                                        "t": {
                                                                                                          "docs": {},
                                                                                                          "i": {
                                                                                                            "docs": {},
                                                                                                            "f": {
                                                                                                              "docs": {
                                                                                                                "Presentation.Component.NotificationCenter.html#showNotification": {
                                                                                                                  "ref": "Presentation.Component.NotificationCenter.html#showNotification",
                                                                                                                  "tf": 1075
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "h": {
                                                                                              "docs": {},
                                                                                              "i": {
                                                                                                "docs": {},
                                                                                                "d": {
                                                                                                  "docs": {},
                                                                                                  "e": {
                                                                                                    "docs": {},
                                                                                                    "n": {
                                                                                                      "docs": {},
                                                                                                      "o": {
                                                                                                        "docs": {},
                                                                                                        "t": {
                                                                                                          "docs": {},
                                                                                                          "i": {
                                                                                                            "docs": {},
                                                                                                            "f": {
                                                                                                              "docs": {
                                                                                                                "Presentation.Component.NotificationCenter.html#hideNotification": {
                                                                                                                  "ref": "Presentation.Component.NotificationCenter.html#hideNotification",
                                                                                                                  "tf": 1075
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "c": {
                                                                                              "docs": {},
                                                                                              "l": {
                                                                                                "docs": {},
                                                                                                "e": {
                                                                                                  "docs": {},
                                                                                                  "a": {
                                                                                                    "docs": {},
                                                                                                    "r": {
                                                                                                      "docs": {},
                                                                                                      "n": {
                                                                                                        "docs": {},
                                                                                                        "o": {
                                                                                                          "docs": {},
                                                                                                          "t": {
                                                                                                            "docs": {},
                                                                                                            "i": {
                                                                                                              "docs": {},
                                                                                                              "f": {
                                                                                                                "docs": {
                                                                                                                  "Presentation.Component.NotificationCenter.html#clearNotifications": {
                                                                                                                    "ref": "Presentation.Component.NotificationCenter.html#clearNotifications",
                                                                                                                    "tf": 1075
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "e": {
                                                                                                "docs": {},
                                                                                                "n": {
                                                                                                  "docs": {},
                                                                                                  "d": {
                                                                                                    "docs": {
                                                                                                      "Presentation.Component.NotificationCenter.html#render": {
                                                                                                        "ref": "Presentation.Component.NotificationCenter.html#render",
                                                                                                        "tf": 1075
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "b": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {
                                                                        "Presentation.Component.BigDataTable.html": {
                                                                          "ref": "Presentation.Component.BigDataTable.html",
                                                                          "tf": 1100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "e": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "b": {
                                                                  "docs": {},
                                                                  "l": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "b": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "d": {
                                                                              "docs": {},
                                                                              "a": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "a": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {
                                                                                        "Presentation.Component.EditableBigDataTable.html": {
                                                                                          "ref": "Presentation.Component.EditableBigDataTable.html",
                                                                                          "tf": 1100
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "l": {
                                                                        "docs": {},
                                                                        "o": {
                                                                          "docs": {},
                                                                          "c": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "l": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "o": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "a": {
                                                                                          "docs": {},
                                                                                          "g": {
                                                                                            "docs": {},
                                                                                            "e": {
                                                                                              "docs": {},
                                                                                              "t": {
                                                                                                "docs": {
                                                                                                  "Presentation.Component.EditableLocalStorageTable.html": {
                                                                                                    "ref": "Presentation.Component.EditableLocalStorageTable.html",
                                                                                                    "tf": 1100
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      },
                                                                      "t": {
                                                                        "docs": {
                                                                          "Presentation.Component.EditableTable.html": {
                                                                            "ref": "Presentation.Component.EditableTable.html",
                                                                            "tf": 1100
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "s": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "h": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {
                                                                              "Presentation.Component.Spreadsheet.html": {
                                                                                "ref": "Presentation.Component.Spreadsheet.html",
                                                                                "tf": 1100
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "t": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "l": {
                                                              "docs": {},
                                                              "b": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {
                                                                      "Presentation.Component.Toolbar.html": {
                                                                        "ref": "Presentation.Component.Toolbar.html",
                                                                        "tf": 1100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "n": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "l": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "g": {
                                                                      "docs": {},
                                                                      "v": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "w": {
                                                                              "docs": {
                                                                                "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                                                                                  "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                                                                                  "tf": 60
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "l": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {
                                                    "Presentation.Colleague.html": {
                                                      "ref": "Presentation.Colleague.html",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "d": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "v": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "w": {
                                                            "docs": {
                                                              "Presentation.DecoratorView.html": {
                                                                "ref": "Presentation.DecoratorView.html",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "i": {
                                          "docs": {
                                            "Presentation.Mediator.html": {
                                              "ref": "Presentation.Mediator.html",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "v": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "w": {
                                          "docs": {
                                            "Presentation.View.html": {
                                              "ref": "Presentation.View.html",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "~": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {
                                                "module-Presentation-Component.html": {
                                                  "ref": "module-Presentation-Component.html",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "p": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "n": {
                                            "docs": {
                                              "module-Presentation-Pagination.html": {
                                                "ref": "module-Presentation-Pagination.html",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "u": {
                      "docs": {
                        "PaginatedCollection.html#previousPage": {
                          "ref": "PaginatedCollection.html#previousPage",
                          "tf": 16.666666666666664
                        }
                      },
                      "s": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "PaginatedCollection.html#previousPage": {
                                  "ref": "PaginatedCollection.html#previousPage",
                                  "tf": 750
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Presentation.Component.Article.html": {
                        "ref": "Presentation.Component.Article.html",
                        "tf": 1.3157894736842104
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Presentation.Component.BigDataTable.html": {
                                  "ref": "Presentation.Component.BigDataTable.html",
                                  "tf": 10
                                },
                                "Presentation.Component.EditableBigDataTable.html": {
                                  "ref": "Presentation.Component.EditableBigDataTable.html",
                                  "tf": 10
                                },
                                "Presentation.Component.EditableLocalStorageTable.html": {
                                  "ref": "Presentation.Component.EditableLocalStorageTable.html",
                                  "tf": 7.142857142857142
                                },
                                "Presentation.Component.EditableTable.html": {
                                  "ref": "Presentation.Component.EditableTable.html",
                                  "tf": 12.5
                                },
                                "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                                  "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                                  "tf": 7.142857142857142
                                },
                                "Presentation.Component.Spreadsheet.html": {
                                  "ref": "Presentation.Component.Spreadsheet.html",
                                  "tf": 3.8461538461538463
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Application.html#router": {
                            "ref": "Application.html#router",
                            "tf": 16.666666666666664
                          },
                          "Presentation.Component.Article.html#header": {
                            "ref": "Presentation.Component.Article.html#header",
                            "tf": 25
                          },
                          "Configuration.xhrFields.html": {
                            "ref": "Configuration.xhrFields.html",
                            "tf": 25
                          },
                          "Configuration.xhrFields.html#.withCredentials": {
                            "ref": "Configuration.xhrFields.html#.withCredentials",
                            "tf": 25
                          }
                        }
                      }
                    },
                    "i": {
                      "docs": {
                        "Presentation.Component.Spreadsheet.html": {
                          "ref": "Presentation.Component.Spreadsheet.html",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Router.html#execute": {
                        "ref": "Router.html#execute",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              },
              "x": {
                "docs": {},
                "i": {
                  "docs": {
                    "Router.html#navigate": {
                      "ref": "Router.html#navigate",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "PaginatedCollection.html": {
                      "ref": "PaginatedCollection.html",
                      "tf": 11.11111111111111
                    },
                    "Pagination.PaginationFactory.html": {
                      "ref": "Pagination.PaginationFactory.html",
                      "tf": 14.285714285714285
                    },
                    "Presentation.Component.BigDataTable.html": {
                      "ref": "Presentation.Component.BigDataTable.html",
                      "tf": 10
                    },
                    "Presentation.Component.EditableBigDataTable.html": {
                      "ref": "Presentation.Component.EditableBigDataTable.html",
                      "tf": 10
                    },
                    "module-Presentation-Pagination.html": {
                      "ref": "module-Presentation-Pagination.html",
                      "tf": 500
                    }
                  },
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "PaginatedCollection.html": {
                                            "ref": "PaginatedCollection.html",
                                            "tf": 1900
                                          }
                                        },
                                        "i": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "#": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {
                                                                  "PaginatedCollection.html#setPageSize": {
                                                                    "ref": "PaginatedCollection.html#setPageSize",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "c": {
                                                        "docs": {},
                                                        "u": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "p": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "g": {
                                                                          "docs": {
                                                                            "PaginatedCollection.html#setCurrentPage": {
                                                                              "ref": "PaginatedCollection.html#setCurrentPage",
                                                                              "tf": 1150
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "y": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {
                                                          "PaginatedCollection.html#sync": {
                                                            "ref": "PaginatedCollection.html#sync",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "f": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "h": {
                                                          "docs": {
                                                            "PaginatedCollection.html#fetch": {
                                                              "ref": "PaginatedCollection.html#fetch",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "i": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "g": {
                                                                "docs": {
                                                                  "PaginatedCollection.html#firstPage": {
                                                                    "ref": "PaginatedCollection.html#firstPage",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "n": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "x": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {
                                                                "PaginatedCollection.html#nextPage": {
                                                                  "ref": "PaginatedCollection.html#nextPage",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "p": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "v": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "u": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "p": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "g": {
                                                                      "docs": {
                                                                        "PaginatedCollection.html#previousPage": {
                                                                          "ref": "PaginatedCollection.html#previousPage",
                                                                          "tf": 1150
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "g": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {
                                                                "PaginatedCollection.html#goToPage": {
                                                                  "ref": "PaginatedCollection.html#goToPage",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "l": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {
                                                                "PaginatedCollection.html#lastPage": {
                                                                  "ref": "PaginatedCollection.html#lastPage",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "r": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "h": {
                                                              "docs": {
                                                                "PaginatedCollection.html#refresh": {
                                                                  "ref": "PaginatedCollection.html#refresh",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            ".": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {
                                                                  "Pagination.PaginationFactory.html": {
                                                                    "ref": "Pagination.PaginationFactory.html",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "f": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "i": {
                                          "docs": {
                                            "Pagination.PaginationFactory.html": {
                                              "ref": "Pagination.PaginationFactory.html",
                                              "tf": 750
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "PaginatedCollection.html#setPageSize": {
                    "ref": "PaginatedCollection.html#setPageSize",
                    "tf": 12.5
                  },
                  "PaginatedCollection.html#setCurrentPage": {
                    "ref": "PaginatedCollection.html#setCurrentPage",
                    "tf": 66.66666666666666
                  },
                  "PaginatedCollection.html#nextPage": {
                    "ref": "PaginatedCollection.html#nextPage",
                    "tf": 16.666666666666664
                  },
                  "PaginatedCollection.html#previousPage": {
                    "ref": "PaginatedCollection.html#previousPage",
                    "tf": 16.666666666666664
                  },
                  "PaginatedCollection.html#goToPage": {
                    "ref": "PaginatedCollection.html#goToPage",
                    "tf": 75
                  },
                  "PaginatedCollection.html#firstPage": {
                    "ref": "PaginatedCollection.html#firstPage",
                    "tf": 16.666666666666664
                  },
                  "PaginatedCollection.html#lastPage": {
                    "ref": "PaginatedCollection.html#lastPage",
                    "tf": 16.666666666666664
                  }
                },
                "'": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Presentation.Component.Article.html": {
                                    "ref": "Presentation.Component.Article.html",
                                    "tf": 1.3157894736842104
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Router.html#execute": {
                          "ref": "Router.html#execute",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {
                    "Presentation.Component.Card.html": {
                      "ref": "Presentation.Component.Card.html",
                      "tf": 10
                    }
                  },
                  "/": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "g": {
                                "docs": {
                                  "Presentation.Component.Card.html": {
                                    "ref": "Presentation.Component.Card.html",
                                    "tf": 10
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {
                            "Presentation.Mediator.html": {
                              "ref": "Presentation.Mediator.html",
                              "tf": 2.1739130434782608
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "ManagedController.html#permissions": {
                          "ref": "ManagedController.html#permissions",
                          "tf": 766.6666666666666
                        },
                        "ManagedController.html#addPermission": {
                          "ref": "ManagedController.html#addPermission",
                          "tf": 49.99999999999999
                        },
                        "ManagedController.html#removePermission": {
                          "ref": "ManagedController.html#removePermission",
                          "tf": 49.99999999999999
                        },
                        "ManagedController.html#clearPermissions": {
                          "ref": "ManagedController.html#clearPermissions",
                          "tf": 16.666666666666664
                        },
                        "ManagedController.html#matchesPermission": {
                          "ref": "ManagedController.html#matchesPermission",
                          "tf": 16.666666666666664
                        },
                        "ViewController.html#permissions": {
                          "ref": "ViewController.html#permissions",
                          "tf": 758.3333333333334
                        },
                        "ViewController.html#addPermission": {
                          "ref": "ViewController.html#addPermission",
                          "tf": 49.99999999999999
                        },
                        "ViewController.html#removePermission": {
                          "ref": "ViewController.html#removePermission",
                          "tf": 49.99999999999999
                        },
                        "ViewController.html#clearPermissions": {
                          "ref": "ViewController.html#clearPermissions",
                          "tf": 16.666666666666664
                        },
                        "ViewController.html#matchesPermission": {
                          "ref": "ViewController.html#matchesPermission",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "History.html": {
                                        "ref": "History.html",
                                        "tf": 2.380952380952381
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "Router.html#execute": {
                    "ref": "Router.html#execute",
                    "tf": 3.8461538461538463
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Presentation.Component.Article.html": {
                      "ref": "Presentation.Component.Article.html",
                      "tf": 1.3157894736842104
                    }
                  },
                  "b": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "i": {
                          "docs": {
                            "Presentation.Component.Article.html": {
                              "ref": "Presentation.Component.Article.html",
                              "tf": 1.3157894736842104
                            }
                          }
                        }
                      }
                    }
                  },
                  "f": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Presentation.Component.Article.html": {
                              "ref": "Presentation.Component.Article.html",
                              "tf": 1.3157894736842104
                            }
                          }
                        }
                      }
                    }
                  },
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "Presentation.Component.Article.html": {
                              "ref": "Presentation.Component.Article.html",
                              "tf": 1.3157894736842104
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "e": {
                  "docs": {
                    "Router.html#execute": {
                      "ref": "Router.html#execute",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              },
              "l": {
                "docs": {
                  "History.html": {
                    "ref": "History.html",
                    "tf": 2.380952380952381
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Application.html#registerMediator": {
                        "ref": "Application.html#registerMediator",
                        "tf": 25
                      },
                      "Application.html#registerStylesheet": {
                        "ref": "Application.html#registerStylesheet",
                        "tf": 25
                      },
                      "Application.html#attachStylesheets": {
                        "ref": "Application.html#attachStylesheets",
                        "tf": 12.5
                      },
                      "Application.html#replaceStylesheets": {
                        "ref": "Application.html#replaceStylesheets",
                        "tf": 8.333333333333332
                      },
                      "Application.html#.initialize": {
                        "ref": "Application.html#.initialize",
                        "tf": 10
                      }
                    },
                    "r": {
                      "docs": {
                        "Application.html": {
                          "ref": "Application.html",
                          "tf": 10
                        }
                      }
                    },
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Application.html#registerMediator": {
                                    "ref": "Application.html#registerMediator",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "h": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "Application.html#registerStylesheet": {
                                                "ref": "Application.html#registerStylesheet",
                                                "tf": 700
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Application.html#replaceStylesheets": {
                        "ref": "Application.html#replaceStylesheets",
                        "tf": 8.333333333333332
                      }
                    },
                    "e": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "y": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "h": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Application.html#replaceStylesheets": {
                                              "ref": "Application.html#replaceStylesheets",
                                              "tf": 750
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "Collection.html#sync": {
                    "ref": "Collection.html#sync",
                    "tf": 8.333333333333332
                  },
                  "PaginatedCollection.html#sync": {
                    "ref": "PaginatedCollection.html#sync",
                    "tf": 8.333333333333332
                  },
                  "RestLogger.html": {
                    "ref": "RestLogger.html",
                    "tf": 10
                  },
                  "Model.html": {
                    "ref": "Model.html",
                    "tf": 8.333333333333332
                  }
                },
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "g": {
                        "docs": {
                          "RestLogger.html": {
                            "ref": "RestLogger.html",
                            "tf": 1900
                          }
                        },
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "#": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "RestLogger.html#uri": {
                                        "ref": "RestLogger.html#uri",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "w": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {
                            "PaginatedCollection.html#fetch": {
                              "ref": "PaginatedCollection.html#fetch",
                              "tf": 10
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "PaginatedCollection.html#refresh": {
                          "ref": "PaginatedCollection.html#refresh",
                          "tf": 775
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "ManagedController.html#render": {
                        "ref": "ManagedController.html#render",
                        "tf": 765
                      },
                      "ViewController.html#render": {
                        "ref": "ViewController.html#render",
                        "tf": 765
                      },
                      "Presentation.Component.Article.html#render": {
                        "ref": "Presentation.Component.Article.html#render",
                        "tf": 708.3333333333334
                      },
                      "Presentation.Component.Header.html#render": {
                        "ref": "Presentation.Component.Header.html#render",
                        "tf": 700
                      },
                      "Presentation.Component.Menu.html#render": {
                        "ref": "Presentation.Component.Menu.html#render",
                        "tf": 700
                      },
                      "Presentation.Component.NavigationMenu.html#render": {
                        "ref": "Presentation.Component.NavigationMenu.html#render",
                        "tf": 700
                      },
                      "Presentation.Component.NotificationCenter.html#render": {
                        "ref": "Presentation.Component.NotificationCenter.html#render",
                        "tf": 700
                      },
                      "Presentation.DecoratorView.html": {
                        "ref": "Presentation.DecoratorView.html",
                        "tf": 0.8333333333333334
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "ManagedController.html#remove": {
                      "ref": "ManagedController.html#remove",
                      "tf": 760
                    },
                    "ManagedController.html#removeAllViews": {
                      "ref": "ManagedController.html#removeAllViews",
                      "tf": 5.555555555555555
                    },
                    "ManagedController.html#removePermission": {
                      "ref": "ManagedController.html#removePermission",
                      "tf": 16.666666666666664
                    },
                    "ViewController.html#remove": {
                      "ref": "ViewController.html#remove",
                      "tf": 760
                    },
                    "ViewController.html#removeAllViews": {
                      "ref": "ViewController.html#removeAllViews",
                      "tf": 5.555555555555555
                    },
                    "ViewController.html#removePermission": {
                      "ref": "ViewController.html#removePermission",
                      "tf": 16.666666666666664
                    },
                    "Router.html#loadView": {
                      "ref": "Router.html#loadView",
                      "tf": 11.11111111111111
                    },
                    "Router.html#cleanup": {
                      "ref": "Router.html#cleanup",
                      "tf": 16.666666666666664
                    }
                  },
                  "e": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "v": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "w": {
                                  "docs": {
                                    "ManagedController.html#removeAllViews": {
                                      "ref": "ManagedController.html#removeAllViews",
                                      "tf": 755.5555555555555
                                    },
                                    "ViewController.html#removeAllViews": {
                                      "ref": "ViewController.html#removeAllViews",
                                      "tf": 755.5555555555555
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "ManagedController.html#removePermission": {
                                      "ref": "ManagedController.html#removePermission",
                                      "tf": 683.3333333333334
                                    },
                                    "ViewController.html#removePermission": {
                                      "ref": "ViewController.html#removePermission",
                                      "tf": 683.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "ManagedController.html#canDisplay": {
                        "ref": "ManagedController.html#canDisplay",
                        "tf": 12.5
                      },
                      "ViewController.html#canDisplay": {
                        "ref": "ViewController.html#canDisplay",
                        "tf": 12.5
                      },
                      "Pagination.PaginationFactory.html": {
                        "ref": "Pagination.PaginationFactory.html",
                        "tf": 7.142857142857142
                      },
                      "Presentation.LocalStorage.html": {
                        "ref": "Presentation.LocalStorage.html",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Dom.html": {
                      "ref": "Dom.html",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            },
            "q": {
              "docs": {},
              "u": {
                "docs": {},
                "i": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "RestLogger.html": {
                        "ref": "RestLogger.html",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "t": {
                "docs": {
                  "Router.html": {
                    "ref": "Router.html",
                    "tf": 5.88235294117647
                  },
                  "Router.html#route": {
                    "ref": "Router.html#route",
                    "tf": 708.3333333333334
                  },
                  "Router.html#execute": {
                    "ref": "Router.html#execute",
                    "tf": 11.538461538461538
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Application.html#router": {
                        "ref": "Application.html#router",
                        "tf": 766.6666666666666
                      },
                      "ViewController.html": {
                        "ref": "ViewController.html",
                        "tf": 5
                      },
                      "Router.html": {
                        "ref": "Router.html",
                        "tf": 1902.9411764705883
                      }
                    },
                    "#": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "v": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "w": {
                                      "docs": {
                                        "Router.html#loadView": {
                                          "ref": "Router.html#loadView",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "p": {
                                    "docs": {
                                      "Router.html#cleanup": {
                                        "ref": "Router.html#cleanup",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Router.html#initialize": {
                                    "ref": "Router.html#initialize",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Router.html#route": {
                                  "ref": "Router.html#route",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "x": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "Router.html#execute": {
                                      "ref": "Router.html#execute",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "v": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "g": {
                                "docs": {
                                  "Router.html#navigate": {
                                    "ref": "Router.html#navigate",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "s": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "Router.html#startHistory": {
                                                  "ref": "Router.html#startHistory",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {
                    "Router.html#navigate": {
                      "ref": "Router.html#navigate",
                      "tf": 8.333333333333332
                    },
                    "Presentation.Component.Card.html": {
                      "ref": "Presentation.Component.Card.html",
                      "tf": 10
                    },
                    "Presentation.Component.DialogView.html": {
                      "ref": "Presentation.Component.DialogView.html",
                      "tf": 6.25
                    }
                  },
                  "i": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 14
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "ViewController.html": {
                          "ref": "ViewController.html",
                          "tf": 5
                        }
                      }
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "e": {
                "docs": {
                  "PaginatedCollection.html": {
                    "ref": "PaginatedCollection.html",
                    "tf": 5.555555555555555
                  }
                }
              }
            },
            "z": {
              "docs": {},
              "e": {
                "docs": {
                  "PaginatedCollection.html#setPageSize": {
                    "ref": "PaginatedCollection.html#setPageSize",
                    "tf": 50
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "l": {
                  "docs": {
                    "Router.html#route": {
                      "ref": "Router.html#route",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "y": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {
                    "Presentation.Component.Article.html": {
                      "ref": "Presentation.Component.Article.html",
                      "tf": 1.3157894736842104
                    }
                  },
                  "s": {
                    "docs": {},
                    "h": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Application.html": {
                                "ref": "Application.html",
                                "tf": 5
                              },
                              "Application.html#stylesheets": {
                                "ref": "Application.html#stylesheets",
                                "tf": 800
                              },
                              "Application.html#registerStylesheet": {
                                "ref": "Application.html#registerStylesheet",
                                "tf": 75
                              },
                              "Application.html#deregisterStylesheet": {
                                "ref": "Application.html#deregisterStylesheet",
                                "tf": 75
                              },
                              "Application.html#attachStylesheets": {
                                "ref": "Application.html#attachStylesheets",
                                "tf": 12.5
                              },
                              "Application.html#replaceStylesheets": {
                                "ref": "Application.html#replaceStylesheets",
                                "tf": 16.666666666666664
                              },
                              "Application.html#.initialize": {
                                "ref": "Application.html#.initialize",
                                "tf": 10
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "d": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {
                            "Presentation.DecoratorView.html": {
                              "ref": "Presentation.DecoratorView.html",
                              "tf": 0.8333333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "r": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "LocalStorageCollection.html": {
                        "ref": "LocalStorageCollection.html",
                        "tf": 12.5
                      },
                      "Presentation.LocalStorage.html": {
                        "ref": "Presentation.LocalStorage.html",
                        "tf": 10
                      },
                      "Presentation.LocalStorageFactory.html": {
                        "ref": "Presentation.LocalStorageFactory.html",
                        "tf": 12.5
                      },
                      "Presentation.NamespacedLocalStorage.html": {
                        "ref": "Presentation.NamespacedLocalStorage.html",
                        "tf": 12.5
                      },
                      "Presentation.Component.EditableLocalStorageTable.html": {
                        "ref": "Presentation.Component.EditableLocalStorageTable.html",
                        "tf": 7.142857142857142
                      },
                      "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                        "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "ManagedController.html#initialize": {
                      "ref": "ManagedController.html#initialize",
                      "tf": 6.25
                    },
                    "ViewController.html#initialize": {
                      "ref": "ViewController.html#initialize",
                      "tf": 6.25
                    },
                    "Router.html#startHistory": {
                      "ref": "Router.html#startHistory",
                      "tf": 8.333333333333332
                    }
                  },
                  "h": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Router.html#startHistory": {
                                    "ref": "Router.html#startHistory",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Router.html": {
                        "ref": "Router.html",
                        "tf": 2.941176470588235
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "Application.html#setCurrentBreadcrumb": {
                  "ref": "Application.html#setCurrentBreadcrumb",
                  "tf": 16.666666666666664
                },
                "PaginatedCollection.html#setPageSize": {
                  "ref": "PaginatedCollection.html#setPageSize",
                  "tf": 12.5
                },
                "PaginatedCollection.html#setCurrentPage": {
                  "ref": "PaginatedCollection.html#setCurrentPage",
                  "tf": 16.666666666666664
                },
                "ManagedController.html": {
                  "ref": "ManagedController.html",
                  "tf": 8.333333333333332
                },
                "ManagedController.html#permissions": {
                  "ref": "ManagedController.html#permissions",
                  "tf": 16.666666666666664
                },
                "ViewController.html#permissions": {
                  "ref": "ViewController.html#permissions",
                  "tf": 16.666666666666664
                },
                "Router.html": {
                  "ref": "Router.html",
                  "tf": 5.88235294117647
                },
                "Presentation.Component.Article.html": {
                  "ref": "Presentation.Component.Article.html",
                  "tf": 1.3157894736842104
                }
              },
              "c": {
                "docs": {},
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "b": {
                                                "docs": {
                                                  "Application.html#setCurrentBreadcrumb": {
                                                    "ref": "Application.html#setCurrentBreadcrumb",
                                                    "tf": 683.3333333333334
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "p": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "PaginatedCollection.html#setCurrentPage": {
                                      "ref": "PaginatedCollection.html#setCurrentPage",
                                      "tf": 700
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "PaginatedCollection.html#setPageSize": {
                            "ref": "PaginatedCollection.html#setPageSize",
                            "tf": 700
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "p": {
                  "docs": {
                    "Router.html#execute": {
                      "ref": "Router.html#execute",
                      "tf": 3.8461538461538463
                    },
                    "Presentation.Colleague.html": {
                      "ref": "Presentation.Colleague.html",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "PaginatedCollection.html": {
                        "ref": "PaginatedCollection.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {
                    "Model.html": {
                      "ref": "Model.html",
                      "tf": 8.333333333333332
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Presentation.Component.Article.html": {
                          "ref": "Presentation.Component.Article.html",
                          "tf": 1.3157894736842104
                        },
                        "Presentation.Component.Article.html#sections": {
                          "ref": "Presentation.Component.Article.html#sections",
                          "tf": 700
                        },
                        "Presentation.Component.Article.html#addSection": {
                          "ref": "Presentation.Component.Article.html#addSection",
                          "tf": 62.5
                        },
                        "Presentation.Component.Article.html#clearSections": {
                          "ref": "Presentation.Component.Article.html#clearSections",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {
                "Presentation.Component.Article.html": {
                  "ref": "Presentation.Component.Article.html",
                  "tf": 1.3157894736842104
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "Presentation.DecoratorView.html": {
                                          "ref": "Presentation.DecoratorView.html",
                                          "tf": 0.8333333333333334
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {
                  "Collection.html#sync": {
                    "ref": "Collection.html#sync",
                    "tf": 758.3333333333334
                  },
                  "LocalStorageCollection.html#sync": {
                    "ref": "LocalStorageCollection.html#sync",
                    "tf": 766.6666666666666
                  },
                  "PaginatedCollection.html#sync": {
                    "ref": "PaginatedCollection.html#sync",
                    "tf": 758.3333333333334
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "LocalStorageCollection.html#save": {
                    "ref": "LocalStorageCollection.html#save",
                    "tf": 725
                  },
                  "Router.html#navigate": {
                    "ref": "Router.html#navigate",
                    "tf": 8.333333333333332
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "e": {
                "docs": {
                  "Router.html#loadView": {
                    "ref": "Router.html#loadView",
                    "tf": 5.555555555555555
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "History.html": {
                          "ref": "History.html",
                          "tf": 2.380952380952381
                        },
                        "Model.html": {
                          "ref": "Model.html",
                          "tf": 8.333333333333332
                        },
                        "Presentation.Component.Article.html#body": {
                          "ref": "Presentation.Component.Article.html#body",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Presentation.Component.Header.html#subTitle": {
                          "ref": "Presentation.Component.Header.html#subTitle",
                          "tf": 675
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "c": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Presentation.Colleague.html": {
                              "ref": "Presentation.Colleague.html",
                              "tf": 3.3333333333333335
                            }
                          },
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "a": {
                                    "docs": {
                                      "Presentation.Colleague.html": {
                                        "ref": "Presentation.Colleague.html",
                                        "tf": 3.3333333333333335
                                      }
                                    }
                                  },
                                  "c": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "n": {
                                        "docs": {
                                          "Presentation.Colleague.html": {
                                            "ref": "Presentation.Colleague.html",
                                            "tf": 3.3333333333333335
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "h": {
              "docs": {},
              "e": {
                "docs": {},
                "m": {
                  "docs": {},
                  "a": {
                    "docs": {
                      "Model.html": {
                        "ref": "Model.html",
                        "tf": 8.333333333333332
                      },
                      "Presentation.Component.AutomaticForm.html": {
                        "ref": "Presentation.Component.AutomaticForm.html",
                        "tf": 8.333333333333332
                      },
                      "Presentation.Component.AutomaticTable.html": {
                        "ref": "Presentation.Component.AutomaticTable.html",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "o": {
              "docs": {},
              "w": {
                "docs": {
                  "Presentation.Component.NotificationCenter.html#showNotification": {
                    "ref": "Presentation.Component.NotificationCenter.html#showNotification",
                    "tf": 25
                  }
                },
                "n": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "Presentation.Component.NotificationCenter.html#showNotification": {
                              "ref": "Presentation.Component.NotificationCenter.html#showNotification",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {
                  "Presentation.Component.BigDataTable.html": {
                    "ref": "Presentation.Component.BigDataTable.html",
                    "tf": 10
                  },
                  "Presentation.Component.EditableBigDataTable.html": {
                    "ref": "Presentation.Component.EditableBigDataTable.html",
                    "tf": 10
                  },
                  "Presentation.Component.EditableLocalStorageTable.html": {
                    "ref": "Presentation.Component.EditableLocalStorageTable.html",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Presentation.Component.Spreadsheet.html": {
                          "ref": "Presentation.Component.Spreadsheet.html",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Presentation.Component.Spreadsheet.html": {
                                  "ref": "Presentation.Component.Spreadsheet.html",
                                  "tf": 700
                                }
                              },
                              ".": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "f": {
                                    "docs": {
                                      "Presentation.Component.Spreadsheet.html": {
                                        "ref": "Presentation.Component.Spreadsheet.html",
                                        "tf": 3.8461538461538463
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "l": {
                  "docs": {
                    "Widget.html": {
                      "ref": "Widget.html",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Application.html": {
                      "ref": "Application.html",
                      "tf": 110
                    },
                    "Collection.html": {
                      "ref": "Collection.html",
                      "tf": 135
                    },
                    "LocalStorageCollection.html": {
                      "ref": "LocalStorageCollection.html",
                      "tf": 110
                    },
                    "PaginatedCollection.html": {
                      "ref": "PaginatedCollection.html",
                      "tf": 115.55555555555556
                    },
                    "ManagedController.html": {
                      "ref": "ManagedController.html",
                      "tf": 110
                    },
                    "ViewController.html": {
                      "ref": "ViewController.html",
                      "tf": 110
                    },
                    "Dom.html": {
                      "ref": "Dom.html",
                      "tf": 110
                    },
                    "History.html": {
                      "ref": "History.html",
                      "tf": 110
                    },
                    "RestLogger.html": {
                      "ref": "RestLogger.html",
                      "tf": 110
                    },
                    "Model.html": {
                      "ref": "Model.html",
                      "tf": 110
                    },
                    "Pagination.PaginationFactory.html": {
                      "ref": "Pagination.PaginationFactory.html",
                      "tf": 110
                    },
                    "Router.html": {
                      "ref": "Router.html",
                      "tf": 110
                    },
                    "Presentation.LocalStorage.html": {
                      "ref": "Presentation.LocalStorage.html",
                      "tf": 110
                    },
                    "Presentation.LocalStorageFactory.html": {
                      "ref": "Presentation.LocalStorageFactory.html",
                      "tf": 110
                    },
                    "Presentation.NamespacedLocalStorage.html": {
                      "ref": "Presentation.NamespacedLocalStorage.html",
                      "tf": 110
                    },
                    "Presentation.AbstractView.html": {
                      "ref": "Presentation.AbstractView.html",
                      "tf": 110
                    },
                    "Presentation.Component.Article.html": {
                      "ref": "Presentation.Component.Article.html",
                      "tf": 111.3157894736842
                    },
                    "Presentation.Component.Card.html": {
                      "ref": "Presentation.Component.Card.html",
                      "tf": 110
                    },
                    "Presentation.Component.AlertDialogView.html": {
                      "ref": "Presentation.Component.AlertDialogView.html",
                      "tf": 110
                    },
                    "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                      "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                      "tf": 110
                    },
                    "Presentation.Component.DialogView.html": {
                      "ref": "Presentation.Component.DialogView.html",
                      "tf": 110
                    },
                    "Presentation.Component.Footer.html": {
                      "ref": "Presentation.Component.Footer.html",
                      "tf": 110
                    },
                    "Presentation.Component.AutomaticForm.html": {
                      "ref": "Presentation.Component.AutomaticForm.html",
                      "tf": 110
                    },
                    "Presentation.Component.Header.html": {
                      "ref": "Presentation.Component.Header.html",
                      "tf": 110
                    },
                    "Presentation.Component.HamburgerMenu.html": {
                      "ref": "Presentation.Component.HamburgerMenu.html",
                      "tf": 110
                    },
                    "Presentation.Component.Menu.html": {
                      "ref": "Presentation.Component.Menu.html",
                      "tf": 110
                    },
                    "Presentation.Component.NavigationMenu.html": {
                      "ref": "Presentation.Component.NavigationMenu.html",
                      "tf": 110
                    },
                    "Presentation.Component.NotificationCenter.html": {
                      "ref": "Presentation.Component.NotificationCenter.html",
                      "tf": 110
                    },
                    "Presentation.Component.AutomaticTable.html": {
                      "ref": "Presentation.Component.AutomaticTable.html",
                      "tf": 110
                    },
                    "Presentation.Component.BigDataTable.html": {
                      "ref": "Presentation.Component.BigDataTable.html",
                      "tf": 120
                    },
                    "Presentation.Component.EditableBigDataTable.html": {
                      "ref": "Presentation.Component.EditableBigDataTable.html",
                      "tf": 120
                    },
                    "Presentation.Component.EditableLocalStorageTable.html": {
                      "ref": "Presentation.Component.EditableLocalStorageTable.html",
                      "tf": 117.14285714285714
                    },
                    "Presentation.Component.EditableTable.html": {
                      "ref": "Presentation.Component.EditableTable.html",
                      "tf": 122.5
                    },
                    "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                      "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                      "tf": 117.14285714285714
                    },
                    "Presentation.Component.Spreadsheet.html": {
                      "ref": "Presentation.Component.Spreadsheet.html",
                      "tf": 113.84615384615384
                    },
                    "Presentation.Component.AbstractToolbar.html": {
                      "ref": "Presentation.Component.AbstractToolbar.html",
                      "tf": 110
                    },
                    "Presentation.Component.Toolbar.html": {
                      "ref": "Presentation.Component.Toolbar.html",
                      "tf": 110
                    },
                    "Presentation.DecoratorView.html": {
                      "ref": "Presentation.DecoratorView.html",
                      "tf": 110
                    },
                    "Presentation.Colleague.html": {
                      "ref": "Presentation.Colleague.html",
                      "tf": 110
                    },
                    "Presentation.Mediator.html": {
                      "ref": "Presentation.Mediator.html",
                      "tf": 110
                    },
                    "Presentation.View.html": {
                      "ref": "Presentation.View.html",
                      "tf": 110
                    },
                    "Widget.html": {
                      "ref": "Widget.html",
                      "tf": 110
                    }
                  },
                  "h": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Presentation.Component.Article.html": {
                              "ref": "Presentation.Component.Article.html",
                              "tf": 1.3157894736842104
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "PaginatedCollection.html": {
                        "ref": "PaginatedCollection.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "k": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {
                            "Presentation.DecoratorView.html": {
                              "ref": "Presentation.DecoratorView.html",
                              "tf": 0.8333333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "n": {
                  "docs": {
                    "ManagedController.html#removeAllViews": {
                      "ref": "ManagedController.html#removeAllViews",
                      "tf": 5.555555555555555
                    },
                    "ViewController.html#removeAllViews": {
                      "ref": "ViewController.html#removeAllViews",
                      "tf": 5.555555555555555
                    },
                    "Presentation.Colleague.html": {
                      "ref": "Presentation.Colleague.html",
                      "tf": 3.3333333333333335
                    }
                  },
                  "u": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "ManagedController.html#remove": {
                          "ref": "ManagedController.html#remove",
                          "tf": 5
                        },
                        "ViewController.html#remove": {
                          "ref": "ViewController.html#remove",
                          "tf": 5
                        },
                        "Router.html#loadView": {
                          "ref": "Router.html#loadView",
                          "tf": 5.555555555555555
                        },
                        "Router.html#cleanup": {
                          "ref": "Router.html#cleanup",
                          "tf": 758.3333333333334
                        },
                        "Router.html#execute": {
                          "ref": "Router.html#execute",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                },
                "r": {
                  "docs": {
                    "ManagedController.html#clearPermissions": {
                      "ref": "ManagedController.html#clearPermissions",
                      "tf": 16.666666666666664
                    },
                    "ViewController.html#clearPermissions": {
                      "ref": "ViewController.html#clearPermissions",
                      "tf": 16.666666666666664
                    },
                    "Presentation.Component.Article.html#clearSections": {
                      "ref": "Presentation.Component.Article.html#clearSections",
                      "tf": 25
                    },
                    "Presentation.Component.NotificationCenter.html#clearNotifications": {
                      "ref": "Presentation.Component.NotificationCenter.html#clearNotifications",
                      "tf": 25
                    }
                  },
                  "p": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "s": {
                                "docs": {
                                  "ManagedController.html#clearPermissions": {
                                    "ref": "ManagedController.html#clearPermissions",
                                    "tf": 750
                                  },
                                  "ViewController.html#clearPermissions": {
                                    "ref": "ViewController.html#clearPermissions",
                                    "tf": 750
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Presentation.Component.Article.html#clearSections": {
                              "ref": "Presentation.Component.Article.html#clearSections",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "f": {
                            "docs": {
                              "Presentation.Component.NotificationCenter.html#clearNotifications": {
                                "ref": "Presentation.Component.NotificationCenter.html#clearNotifications",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Application.html#setCurrentBreadcrumb": {
                          "ref": "Application.html#setCurrentBreadcrumb",
                          "tf": 16.666666666666664
                        },
                        "Application.html#getCurrentBreadcrumb": {
                          "ref": "Application.html#getCurrentBreadcrumb",
                          "tf": 16.666666666666664
                        },
                        "PaginatedCollection.html#setCurrentPage": {
                          "ref": "PaginatedCollection.html#setCurrentPage",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "LocalStorageCollection.html#init": {
                        "ref": "LocalStorageCollection.html#init",
                        "tf": 8.333333333333332
                      },
                      "Presentation.Component.DialogView.html": {
                        "ref": "Presentation.Component.DialogView.html",
                        "tf": 6.25
                      },
                      "Presentation.DecoratorView.html": {
                        "ref": "Presentation.DecoratorView.html",
                        "tf": 0.8333333333333334
                      }
                    },
                    "e": {
                      "docs": {},
                      "v": {
                        "docs": {
                          "Presentation.DecoratorView.html": {
                            "ref": "Presentation.DecoratorView.html",
                            "tf": 0.8333333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Collection.html": {
                          "ref": "Collection.html",
                          "tf": 1925
                        },
                        "Collection.html#sync": {
                          "ref": "Collection.html#sync",
                          "tf": 8.333333333333332
                        },
                        "LocalStorageCollection.html": {
                          "ref": "LocalStorageCollection.html",
                          "tf": 12.5
                        },
                        "LocalStorageCollection.html#fetch": {
                          "ref": "LocalStorageCollection.html#fetch",
                          "tf": 25
                        },
                        "LocalStorageCollection.html#save": {
                          "ref": "LocalStorageCollection.html#save",
                          "tf": 25
                        },
                        "LocalStorageCollection.html#update": {
                          "ref": "LocalStorageCollection.html#update",
                          "tf": 25
                        },
                        "LocalStorageCollection.html#destroy": {
                          "ref": "LocalStorageCollection.html#destroy",
                          "tf": 25
                        },
                        "LocalStorageCollection.html#sync": {
                          "ref": "LocalStorageCollection.html#sync",
                          "tf": 16.666666666666664
                        },
                        "PaginatedCollection.html": {
                          "ref": "PaginatedCollection.html",
                          "tf": 11.11111111111111
                        },
                        "PaginatedCollection.html#refresh": {
                          "ref": "PaginatedCollection.html#refresh",
                          "tf": 25
                        },
                        "PaginatedCollection.html#sync": {
                          "ref": "PaginatedCollection.html#sync",
                          "tf": 8.333333333333332
                        },
                        "Pagination.PaginationFactory.html": {
                          "ref": "Pagination.PaginationFactory.html",
                          "tf": 7.142857142857142
                        }
                      },
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "#": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "y": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "c": {
                                      "docs": {
                                        "Collection.html#sync": {
                                          "ref": "Collection.html#sync",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            ".": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "h": {
                                        "docs": {
                                          "PaginatedCollection.html#fetch": {
                                            "ref": "PaginatedCollection.html#fetch",
                                            "tf": 10
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "u": {
                        "docs": {
                          "Presentation.Colleague.html": {
                            "ref": "Presentation.Colleague.html",
                            "tf": 753.3333333333334
                          },
                          "Presentation.Mediator.html": {
                            "ref": "Presentation.Mediator.html",
                            "tf": 6.521739130434782
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "ManagedController.html": {
                        "ref": "ManagedController.html",
                        "tf": 8.333333333333332
                      },
                      "Presentation.Component.Footer.html": {
                        "ref": "Presentation.Component.Footer.html",
                        "tf": 25
                      },
                      "Presentation.Component.Header.html": {
                        "ref": "Presentation.Component.Header.html",
                        "tf": 25
                      },
                      "Presentation.Component.NotificationCenter.html": {
                        "ref": "Presentation.Component.NotificationCenter.html",
                        "tf": 16.666666666666664
                      },
                      "Presentation.Component.AbstractToolbar.html": {
                        "ref": "Presentation.Component.AbstractToolbar.html",
                        "tf": 10
                      },
                      "module-Presentation.html": {
                        "ref": "module-Presentation.html",
                        "tf": 10
                      },
                      "module-Presentation-Component.html": {
                        "ref": "module-Presentation-Component.html",
                        "tf": 525
                      }
                    },
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "Presentation.Component.Article.html": {
                                            "ref": "Presentation.Component.Article.html",
                                            "tf": 100
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "#": {
                                            "docs": {},
                                            "h": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "Presentation.Component.Article.html#header": {
                                                        "ref": "Presentation.Component.Article.html#header",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "f": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "Presentation.Component.Article.html#footer": {
                                                        "ref": "Presentation.Component.Article.html#footer",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "b": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "Presentation.Component.Article.html#body": {
                                                        "ref": "Presentation.Component.Article.html#body",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "s": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "Presentation.Component.Article.html#sections": {
                                                        "ref": "Presentation.Component.Article.html#sections",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "Presentation.Component.Article.html#addSection": {
                                                              "ref": "Presentation.Component.Article.html#addSection",
                                                              "tf": 75
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "c": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "Presentation.Component.Article.html#clearSections": {
                                                                  "ref": "Presentation.Component.Article.html#clearSections",
                                                                  "tf": 75
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "r": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "Presentation.Component.Article.html#render": {
                                                        "ref": "Presentation.Component.Article.html#render",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "w": {
                                                          "docs": {
                                                            "Presentation.Component.AlertDialogView.html": {
                                                              "ref": "Presentation.Component.AlertDialogView.html",
                                                              "tf": 100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "u": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              ".": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "n": {
                                                                        "docs": {},
                                                                        ".": {
                                                                          "docs": {},
                                                                          "c": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "n": {
                                                                                "docs": {},
                                                                                "f": {
                                                                                  "docs": {},
                                                                                  "i": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      "m": {
                                                                                        "docs": {},
                                                                                        "a": {
                                                                                          "docs": {},
                                                                                          "t": {
                                                                                            "docs": {},
                                                                                            "i": {
                                                                                              "docs": {},
                                                                                              "o": {
                                                                                                "docs": {},
                                                                                                "n": {
                                                                                                  "docs": {},
                                                                                                  "d": {
                                                                                                    "docs": {},
                                                                                                    "i": {
                                                                                                      "docs": {},
                                                                                                      "a": {
                                                                                                        "docs": {},
                                                                                                        "l": {
                                                                                                          "docs": {},
                                                                                                          "o": {
                                                                                                            "docs": {},
                                                                                                            "g": {
                                                                                                              "docs": {},
                                                                                                              "v": {
                                                                                                                "docs": {},
                                                                                                                "i": {
                                                                                                                  "docs": {},
                                                                                                                  "e": {
                                                                                                                    "docs": {},
                                                                                                                    "w": {
                                                                                                                      "docs": {
                                                                                                                        "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                                                                                                                          "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                                                                                                                          "tf": 60
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "l": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "c": {
                                                                                "docs": {},
                                                                                "a": {
                                                                                  "docs": {},
                                                                                  "l": {
                                                                                    "docs": {},
                                                                                    "s": {
                                                                                      "docs": {},
                                                                                      "t": {
                                                                                        "docs": {},
                                                                                        "o": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "a": {
                                                                                              "docs": {},
                                                                                              "g": {
                                                                                                "docs": {},
                                                                                                "e": {
                                                                                                  "docs": {},
                                                                                                  "t": {
                                                                                                    "docs": {
                                                                                                      "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                                                                                                        "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                                                                                                        "tf": 60
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "f": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {
                                                        "Presentation.Component.AutomaticForm.html": {
                                                          "ref": "Presentation.Component.AutomaticForm.html",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "t": {
                                                "docs": {
                                                  "Presentation.Component.AutomaticTable.html": {
                                                    "ref": "Presentation.Component.AutomaticTable.html",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "b": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "b": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {
                                                            "Presentation.Component.AbstractToolbar.html": {
                                                              "ref": "Presentation.Component.AbstractToolbar.html",
                                                              "tf": 100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "c": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Presentation.Component.Card.html": {
                                        "ref": "Presentation.Component.Card.html",
                                        "tf": 100
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "d": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "v": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "w": {
                                                "docs": {
                                                  "Presentation.Component.DialogView.html": {
                                                    "ref": "Presentation.Component.DialogView.html",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "f": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Presentation.Component.Footer.html": {
                                        "ref": "Presentation.Component.Footer.html",
                                        "tf": 100
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Presentation.Component.Header.html": {
                                        "ref": "Presentation.Component.Header.html",
                                        "tf": 100
                                      }
                                    },
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "#": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {
                                                    "Presentation.Component.Header.html#title": {
                                                      "ref": "Presentation.Component.Header.html#title",
                                                      "tf": 75
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "s": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "b": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {
                                                          "Presentation.Component.Header.html#subTitle": {
                                                            "ref": "Presentation.Component.Header.html#subTitle",
                                                            "tf": 75
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "r": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {
                                                    "Presentation.Component.Header.html#render": {
                                                      "ref": "Presentation.Component.Header.html#render",
                                                      "tf": 75
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "a": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {
                                                        "Presentation.Component.HamburgerMenu.html": {
                                                          "ref": "Presentation.Component.HamburgerMenu.html",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "u": {
                                    "docs": {
                                      "Presentation.Component.Menu.html": {
                                        "ref": "Presentation.Component.Menu.html",
                                        "tf": 100
                                      }
                                    },
                                    "#": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "Presentation.Component.Menu.html#render": {
                                                  "ref": "Presentation.Component.Menu.html#render",
                                                  "tf": 75
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "n": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {
                                                          "Presentation.Component.NavigationMenu.html": {
                                                            "ref": "Presentation.Component.NavigationMenu.html",
                                                            "tf": 100
                                                          }
                                                        },
                                                        "#": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "n": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "Presentation.Component.NavigationMenu.html#render": {
                                                                      "ref": "Presentation.Component.NavigationMenu.html#render",
                                                                      "tf": 75
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "o": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "Presentation.Component.NotificationCenter.html": {
                                                                "ref": "Presentation.Component.NotificationCenter.html",
                                                                "tf": 100
                                                              }
                                                            },
                                                            "e": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "#": {
                                                                  "docs": {},
                                                                  "n": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "f": {
                                                                            "docs": {
                                                                              "Presentation.Component.NotificationCenter.html#notifications": {
                                                                                "ref": "Presentation.Component.NotificationCenter.html#notifications",
                                                                                "tf": 75
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "s": {
                                                                    "docs": {},
                                                                    "h": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "w": {
                                                                          "docs": {},
                                                                          "n": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "i": {
                                                                                  "docs": {},
                                                                                  "f": {
                                                                                    "docs": {
                                                                                      "Presentation.Component.NotificationCenter.html#showNotification": {
                                                                                        "ref": "Presentation.Component.NotificationCenter.html#showNotification",
                                                                                        "tf": 75
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "h": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "d": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "n": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "i": {
                                                                                  "docs": {},
                                                                                  "f": {
                                                                                    "docs": {
                                                                                      "Presentation.Component.NotificationCenter.html#hideNotification": {
                                                                                        "ref": "Presentation.Component.NotificationCenter.html#hideNotification",
                                                                                        "tf": 75
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "c": {
                                                                    "docs": {},
                                                                    "l": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "n": {
                                                                              "docs": {},
                                                                              "o": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "i": {
                                                                                    "docs": {},
                                                                                    "f": {
                                                                                      "docs": {
                                                                                        "Presentation.Component.NotificationCenter.html#clearNotifications": {
                                                                                          "ref": "Presentation.Component.NotificationCenter.html#clearNotifications",
                                                                                          "tf": 75
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "r": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "n": {
                                                                        "docs": {},
                                                                        "d": {
                                                                          "docs": {
                                                                            "Presentation.Component.NotificationCenter.html#render": {
                                                                              "ref": "Presentation.Component.NotificationCenter.html#render",
                                                                              "tf": 75
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "b": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "Presentation.Component.BigDataTable.html": {
                                                "ref": "Presentation.Component.BigDataTable.html",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "e": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "b": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "Presentation.Component.EditableBigDataTable.html": {
                                                                "ref": "Presentation.Component.EditableBigDataTable.html",
                                                                "tf": 100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "l": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {
                                                                        "Presentation.Component.EditableLocalStorageTable.html": {
                                                                          "ref": "Presentation.Component.EditableLocalStorageTable.html",
                                                                          "tf": 100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "t": {
                                              "docs": {
                                                "Presentation.Component.EditableTable.html": {
                                                  "ref": "Presentation.Component.EditableTable.html",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "h": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "Presentation.Component.Spreadsheet.html": {
                                                      "ref": "Presentation.Component.Spreadsheet.html",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "t": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {
                                            "Presentation.Component.Toolbar.html": {
                                              "ref": "Presentation.Component.Toolbar.html",
                                              "tf": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                          "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                          "tf": 6.25
                        }
                      }
                    }
                  }
                }
              },
              "m": {
                "docs": {},
                "u": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 2.1739130434782608
                      }
                    },
                    "i": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "w": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "h": {
                                      "docs": {
                                        "Presentation.Mediator.html": {
                                          "ref": "Presentation.Mediator.html",
                                          "tf": 2.1739130434782608
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "ManagedController.html": {
                          "ref": "ManagedController.html",
                          "tf": 8.333333333333332
                        },
                        "ManagedController.html#permissions": {
                          "ref": "ManagedController.html#permissions",
                          "tf": 16.666666666666664
                        },
                        "ManagedController.html#initialize": {
                          "ref": "ManagedController.html#initialize",
                          "tf": 6.25
                        },
                        "ManagedController.html#render": {
                          "ref": "ManagedController.html#render",
                          "tf": 5
                        },
                        "ManagedController.html#remove": {
                          "ref": "ManagedController.html#remove",
                          "tf": 5
                        },
                        "ManagedController.html#addPermission": {
                          "ref": "ManagedController.html#addPermission",
                          "tf": 16.666666666666664
                        },
                        "ManagedController.html#removePermission": {
                          "ref": "ManagedController.html#removePermission",
                          "tf": 16.666666666666664
                        },
                        "ManagedController.html#clearPermissions": {
                          "ref": "ManagedController.html#clearPermissions",
                          "tf": 16.666666666666664
                        },
                        "ManagedController.html#matchesPermission": {
                          "ref": "ManagedController.html#matchesPermission",
                          "tf": 16.666666666666664
                        },
                        "ManagedController.html#canDisplay": {
                          "ref": "ManagedController.html#canDisplay",
                          "tf": 12.5
                        },
                        "ViewController.html": {
                          "ref": "ViewController.html",
                          "tf": 5
                        },
                        "ViewController.html#permissions": {
                          "ref": "ViewController.html#permissions",
                          "tf": 16.666666666666664
                        },
                        "ViewController.html#initialize": {
                          "ref": "ViewController.html#initialize",
                          "tf": 6.25
                        },
                        "ViewController.html#render": {
                          "ref": "ViewController.html#render",
                          "tf": 5
                        },
                        "ViewController.html#remove": {
                          "ref": "ViewController.html#remove",
                          "tf": 5
                        },
                        "ViewController.html#addPermission": {
                          "ref": "ViewController.html#addPermission",
                          "tf": 16.666666666666664
                        },
                        "ViewController.html#removePermission": {
                          "ref": "ViewController.html#removePermission",
                          "tf": 16.666666666666664
                        },
                        "ViewController.html#clearPermissions": {
                          "ref": "ViewController.html#clearPermissions",
                          "tf": 16.666666666666664
                        },
                        "ViewController.html#matchesPermission": {
                          "ref": "ViewController.html#matchesPermission",
                          "tf": 16.666666666666664
                        },
                        "ViewController.html#canDisplay": {
                          "ref": "ViewController.html#canDisplay",
                          "tf": 12.5
                        },
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        }
                      },
                      "l": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "n": {
                                        "docs": {
                                          "ViewController.html#permissions": {
                                            "ref": "ViewController.html#permissions",
                                            "tf": 8.333333333333332
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "h": {
                                          "docs": {
                                            "Presentation.DecoratorView.html": {
                                              "ref": "Presentation.DecoratorView.html",
                                              "tf": 0.8333333333333334
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.Component.Article.html#body": {
                          "ref": "Presentation.Component.Article.html#body",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.AbstractView.html": {
                          "ref": "Presentation.AbstractView.html",
                          "tf": 6.25
                        },
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        },
                        "Presentation.View.html": {
                          "ref": "Presentation.View.html",
                          "tf": 6.25
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "v": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "w": {
                                                    "docs": {
                                                      "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                                                        "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                                                        "tf": 660
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "g": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Presentation.Component.DialogView.html": {
                            "ref": "Presentation.Component.DialogView.html",
                            "tf": 6.25
                          }
                        },
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  ".": {
                                    "docs": {},
                                    "x": {
                                      "docs": {},
                                      "h": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "f": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "Configuration.xhrFields.html": {
                                                        "ref": "Configuration.xhrFields.html",
                                                        "tf": 1150
                                                      }
                                                    },
                                                    "s": {
                                                      "docs": {},
                                                      ".": {
                                                        "docs": {},
                                                        "w": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "h": {
                                                                "docs": {},
                                                                "c": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "d": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "n": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {},
                                                                              "i": {
                                                                                "docs": {
                                                                                  "Configuration.xhrFields.html#.withCredentials": {
                                                                                    "ref": "Configuration.xhrFields.html#.withCredentials",
                                                                                    "tf": 1100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.Colleague.html": {
                          "ref": "Presentation.Colleague.html",
                          "tf": 3.3333333333333335
                        }
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {
                    "Presentation.Mediator.html": {
                      "ref": "Presentation.Mediator.html",
                      "tf": 2.1739130434782608
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "Collection.html#sync": {
                    "ref": "Collection.html#sync",
                    "tf": 8.333333333333332
                  },
                  "LocalStorageCollection.html#init": {
                    "ref": "LocalStorageCollection.html#init",
                    "tf": 8.333333333333332
                  },
                  "PaginatedCollection.html#sync": {
                    "ref": "PaginatedCollection.html#sync",
                    "tf": 8.333333333333332
                  },
                  "ManagedController.html#removeAllViews": {
                    "ref": "ManagedController.html#removeAllViews",
                    "tf": 5.555555555555555
                  },
                  "ViewController.html#removeAllViews": {
                    "ref": "ViewController.html#removeAllViews",
                    "tf": 5.555555555555555
                  },
                  "Router.html#loadView": {
                    "ref": "Router.html#loadView",
                    "tf": 5.555555555555555
                  },
                  "Router.html#cleanup": {
                    "ref": "Router.html#cleanup",
                    "tf": 8.333333333333332
                  }
                },
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "k": {
                        "docs": {
                          "ManagedController.html#canDisplay": {
                            "ref": "ManagedController.html#canDisplay",
                            "tf": 12.5
                          },
                          "ViewController.html#canDisplay": {
                            "ref": "ViewController.html#canDisplay",
                            "tf": 12.5
                          },
                          "Router.html#route": {
                            "ref": "Router.html#route",
                            "tf": 33.33333333333333
                          },
                          "Router.html#execute": {
                            "ref": "Router.html#execute",
                            "tf": 33.33333333333333
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "y": {
                            "docs": {
                              "ManagedController.html#canDisplay": {
                                "ref": "ManagedController.html#canDisplay",
                                "tf": 750
                              },
                              "ViewController.html#canDisplay": {
                                "ref": "ViewController.html#canDisplay",
                                "tf": 750
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Presentation.Component.AlertDialogView.html": {
                        "ref": "Presentation.Component.AlertDialogView.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "d": {
                "docs": {
                  "Presentation.Component.Article.html#body": {
                    "ref": "Presentation.Component.Article.html#body",
                    "tf": 10
                  },
                  "Presentation.Component.Card.html": {
                    "ref": "Presentation.Component.Card.html",
                    "tf": 710
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "History.html": {
                      "ref": "History.html",
                      "tf": 2.380952380952381
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Router.html": {
                      "ref": "Router.html",
                      "tf": 2.941176470588235
                    },
                    "Presentation.Component.AlertDialogView.html": {
                      "ref": "Presentation.Component.AlertDialogView.html",
                      "tf": 5.555555555555555
                    },
                    "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                      "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                      "tf": 6.25
                    },
                    "Presentation.Component.DialogView.html": {
                      "ref": "Presentation.Component.DialogView.html",
                      "tf": 6.25
                    },
                    "Presentation.Component.AutomaticForm.html": {
                      "ref": "Presentation.Component.AutomaticForm.html",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Presentation.Component.NotificationCenter.html": {
                        "ref": "Presentation.Component.NotificationCenter.html",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "s": {
              "docs": {
                "Presentation.DecoratorView.html": {
                  "ref": "Presentation.DecoratorView.html",
                  "tf": 0.8333333333333334
                }
              }
            }
          },
          "h": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {
                    "Presentation.Colleague.html": {
                      "ref": "Presentation.Colleague.html",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_module.html": {
                    "ref": "list_module.html",
                    "tf": 110
                  },
                  "list_namespace.html": {
                    "ref": "list_namespace.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "list_module.html": {
                                "ref": "list_module.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "list_namespace.html": {
                                      "ref": "list_namespace.html",
                                      "tf": 1300
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {
                  "Presentation.Component.Spreadsheet.html": {
                    "ref": "Presentation.Component.Spreadsheet.html",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Application.html#.initialize": {
                                    "ref": "Application.html#.initialize",
                                    "tf": 50
                                  },
                                  "Configuration.xhrFields.html#.withCredentials": {
                                    "ref": "Configuration.xhrFields.html#.withCredentials",
                                    "tf": 50
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "b": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Presentation.Component.AbstractToolbar.html": {
                                        "ref": "Presentation.Component.AbstractToolbar.html",
                                        "tf": 50
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {
                    "LocalStorageCollection.html": {
                      "ref": "LocalStorageCollection.html",
                      "tf": 12.5
                    },
                    "Presentation.LocalStorage.html": {
                      "ref": "Presentation.LocalStorage.html",
                      "tf": 10
                    },
                    "Presentation.LocalStorageFactory.html": {
                      "ref": "Presentation.LocalStorageFactory.html",
                      "tf": 12.5
                    },
                    "Presentation.NamespacedLocalStorage.html": {
                      "ref": "Presentation.NamespacedLocalStorage.html",
                      "tf": 12.5
                    },
                    "Presentation.Component.EditableLocalStorageTable.html": {
                      "ref": "Presentation.Component.EditableLocalStorageTable.html",
                      "tf": 7.142857142857142
                    },
                    "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                      "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                      "tf": 7.142857142857142
                    }
                  },
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "Presentation.LocalStorage.html": {
                                  "ref": "Presentation.LocalStorage.html",
                                  "tf": 750
                                }
                              },
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "LocalStorageCollection.html": {
                                                  "ref": "LocalStorageCollection.html",
                                                  "tf": 1900
                                                }
                                              },
                                              "i": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "#": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "LocalStorageCollection.html#init": {
                                                                  "ref": "LocalStorageCollection.html#init",
                                                                  "tf": 1150
                                                                }
                                                              },
                                                              "i": {
                                                                "docs": {
                                                                  "LocalStorageCollection.html#initialize": {
                                                                    "ref": "LocalStorageCollection.html#initialize",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "f": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "h": {
                                                                "docs": {
                                                                  "LocalStorageCollection.html#fetch": {
                                                                    "ref": "LocalStorageCollection.html#fetch",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "s": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "v": {
                                                            "docs": {
                                                              "LocalStorageCollection.html#save": {
                                                                "ref": "LocalStorageCollection.html#save",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "y": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {
                                                                "LocalStorageCollection.html#sync": {
                                                                  "ref": "LocalStorageCollection.html#sync",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "u": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {
                                                              "LocalStorageCollection.html#update": {
                                                                "ref": "LocalStorageCollection.html#update",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "d": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "y": {
                                                                    "docs": {
                                                                      "LocalStorageCollection.html#destroy": {
                                                                        "ref": "LocalStorageCollection.html#destroy",
                                                                        "tf": 1150
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "f": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "Presentation.LocalStorage.html": {
                                                  "ref": "Presentation.LocalStorage.html",
                                                  "tf": 10
                                                },
                                                "Presentation.LocalStorageFactory.html": {
                                                  "ref": "Presentation.LocalStorageFactory.html",
                                                  "tf": 750
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {
                                    "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                                      "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                                      "tf": 660
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "RestLogger.html": {
                        "ref": "RestLogger.html",
                        "tf": 10
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "c": {
                  "docs": {
                    "Router.html#initialize": {
                      "ref": "Router.html#initialize",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "Router.html#loadView": {
                    "ref": "Router.html#loadView",
                    "tf": 5.555555555555555
                  }
                },
                "v": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "w": {
                        "docs": {
                          "Router.html#loadView": {
                            "ref": "Router.html#loadView",
                            "tf": 700
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "PaginatedCollection.html#lastPage": {
                    "ref": "PaginatedCollection.html#lastPage",
                    "tf": 16.666666666666664
                  },
                  "Router.html#loadView": {
                    "ref": "Router.html#loadView",
                    "tf": 5.555555555555555
                  },
                  "Router.html#cleanup": {
                    "ref": "Router.html#cleanup",
                    "tf": 8.333333333333332
                  }
                },
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "PaginatedCollection.html#lastPage": {
                          "ref": "PaginatedCollection.html#lastPage",
                          "tf": 750
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "g": {
                "docs": {
                  "module-Presentation-Component.html": {
                    "ref": "module-Presentation-Component.html",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "t": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Presentation.Component.Spreadsheet.html": {
                        "ref": "Presentation.Component.Spreadsheet.html",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_module.html": {
                      "ref": "list_module.html",
                      "tf": 635
                    },
                    "Widget.html": {
                      "ref": "Widget.html",
                      "tf": 12.5
                    },
                    "module-Presentation.html": {
                      "ref": "module-Presentation.html",
                      "tf": 110
                    }
                  },
                  "e": {
                    "docs": {},
                    ":": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "module-Presentation.html": {
                                        "ref": "module-Presentation.html",
                                        "tf": 1300
                                      }
                                    },
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "~": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {
                                                              "module-Presentation-Component.html": {
                                                                "ref": "module-Presentation-Component.html",
                                                                "tf": 1300
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "p": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {
                                                            "module-Presentation-Pagination.html": {
                                                              "ref": "module-Presentation-Pagination.html",
                                                              "tf": 1300
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "l": {
                  "docs": {
                    "LocalStorageCollection.html#initialize": {
                      "ref": "LocalStorageCollection.html#initialize",
                      "tf": 12.5
                    },
                    "LocalStorageCollection.html#init": {
                      "ref": "LocalStorageCollection.html#init",
                      "tf": 8.333333333333332
                    },
                    "Model.html": {
                      "ref": "Model.html",
                      "tf": 1908.3333333333333
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "PaginatedCollection.html#nextPage": {
                    "ref": "PaginatedCollection.html#nextPage",
                    "tf": 16.666666666666664
                  },
                  "PaginatedCollection.html#previousPage": {
                    "ref": "PaginatedCollection.html#previousPage",
                    "tf": 16.666666666666664
                  },
                  "PaginatedCollection.html#firstPage": {
                    "ref": "PaginatedCollection.html#firstPage",
                    "tf": 16.666666666666664
                  },
                  "PaginatedCollection.html#lastPage": {
                    "ref": "PaginatedCollection.html#lastPage",
                    "tf": 16.666666666666664
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Presentation.Component.Article.html": {
                      "ref": "Presentation.Component.Article.html",
                      "tf": 5.263157894736842
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Application.html": {
                        "ref": "Application.html",
                        "tf": 5
                      },
                      "Application.html#mediators": {
                        "ref": "Application.html#mediators",
                        "tf": 800
                      },
                      "Application.html#registerMediator": {
                        "ref": "Application.html#registerMediator",
                        "tf": 75
                      },
                      "Application.html#deregisterMediator": {
                        "ref": "Application.html#deregisterMediator",
                        "tf": 75
                      },
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 763.0434782608696
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Application.html#router": {
                        "ref": "Application.html#router",
                        "tf": 110
                      },
                      "Application.html#mediators": {
                        "ref": "Application.html#mediators",
                        "tf": 110
                      },
                      "Application.html#stylesheets": {
                        "ref": "Application.html#stylesheets",
                        "tf": 110
                      },
                      "Application.html#breadcrumbs": {
                        "ref": "Application.html#breadcrumbs",
                        "tf": 110
                      },
                      "ManagedController.html#views": {
                        "ref": "ManagedController.html#views",
                        "tf": 110
                      },
                      "ManagedController.html#permissions": {
                        "ref": "ManagedController.html#permissions",
                        "tf": 110
                      },
                      "ViewController.html#views": {
                        "ref": "ViewController.html#views",
                        "tf": 110
                      },
                      "ViewController.html#permissions": {
                        "ref": "ViewController.html#permissions",
                        "tf": 110
                      },
                      "RestLogger.html#uri": {
                        "ref": "RestLogger.html#uri",
                        "tf": 110
                      },
                      "Presentation.Component.Article.html#header": {
                        "ref": "Presentation.Component.Article.html#header",
                        "tf": 110
                      },
                      "Presentation.Component.Article.html#footer": {
                        "ref": "Presentation.Component.Article.html#footer",
                        "tf": 110
                      },
                      "Presentation.Component.Article.html#body": {
                        "ref": "Presentation.Component.Article.html#body",
                        "tf": 110
                      },
                      "Presentation.Component.Article.html#sections": {
                        "ref": "Presentation.Component.Article.html#sections",
                        "tf": 110
                      },
                      "Presentation.Component.Header.html#title": {
                        "ref": "Presentation.Component.Header.html#title",
                        "tf": 110
                      },
                      "Presentation.Component.Header.html#subTitle": {
                        "ref": "Presentation.Component.Header.html#subTitle",
                        "tf": 110
                      },
                      "Presentation.Component.NotificationCenter.html#notifications": {
                        "ref": "Presentation.Component.NotificationCenter.html#notifications",
                        "tf": 110
                      },
                      "Configuration.xhrFields.html#.withCredentials": {
                        "ref": "Configuration.xhrFields.html#.withCredentials",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "LocalStorageCollection.html#init": {
                        "ref": "LocalStorageCollection.html#init",
                        "tf": 8.333333333333332
                      },
                      "LocalStorageCollection.html#sync": {
                        "ref": "LocalStorageCollection.html#sync",
                        "tf": 16.666666666666664
                      },
                      "PaginatedCollection.html#fetch": {
                        "ref": "PaginatedCollection.html#fetch",
                        "tf": 10
                      },
                      "ManagedController.html#render": {
                        "ref": "ManagedController.html#render",
                        "tf": 5
                      },
                      "ManagedController.html#removeAllViews": {
                        "ref": "ManagedController.html#removeAllViews",
                        "tf": 5.555555555555555
                      },
                      "ViewController.html#render": {
                        "ref": "ViewController.html#render",
                        "tf": 5
                      },
                      "ViewController.html#removeAllViews": {
                        "ref": "ViewController.html#removeAllViews",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Presentation.Component.AlertDialogView.html": {
                        "ref": "Presentation.Component.AlertDialogView.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "u": {
                "docs": {
                  "Presentation.Component.HamburgerMenu.html": {
                    "ref": "Presentation.Component.HamburgerMenu.html",
                    "tf": 16.666666666666664
                  },
                  "Presentation.Component.Menu.html": {
                    "ref": "Presentation.Component.Menu.html",
                    "tf": 750
                  },
                  "Presentation.Component.Menu.html#render": {
                    "ref": "Presentation.Component.Menu.html#render",
                    "tf": 25
                  },
                  "Presentation.Component.NavigationMenu.html": {
                    "ref": "Presentation.Component.NavigationMenu.html",
                    "tf": 25
                  },
                  "Presentation.Component.NavigationMenu.html#render": {
                    "ref": "Presentation.Component.NavigationMenu.html#render",
                    "tf": 25
                  },
                  "Presentation.Component.NotificationCenter.html#render": {
                    "ref": "Presentation.Component.NotificationCenter.html#render",
                    "tf": 25
                  }
                },
                "#": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Presentation.Component.Menu.html#render": {
                              "ref": "Presentation.Component.Menu.html#render",
                              "tf": 75
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "a": {
                "docs": {},
                "g": {
                  "docs": {
                    "ManagedController.html": {
                      "ref": "ManagedController.html",
                      "tf": 8.333333333333332
                    },
                    "ManagedController.html#manageView": {
                      "ref": "ManagedController.html#manageView",
                      "tf": 16.666666666666664
                    },
                    "ViewController.html#manageView": {
                      "ref": "ViewController.html#manageView",
                      "tf": 16.666666666666664
                    },
                    "History.html": {
                      "ref": "History.html",
                      "tf": 2.380952380952381
                    },
                    "Presentation.Component.Header.html": {
                      "ref": "Presentation.Component.Header.html",
                      "tf": 25
                    }
                  },
                  "e": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "l": {
                                    "docs": {
                                      "ManagedController.html": {
                                        "ref": "ManagedController.html",
                                        "tf": 1900
                                      }
                                    },
                                    "l": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "#": {
                                            "docs": {},
                                            "v": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "w": {
                                                    "docs": {
                                                      "ManagedController.html#views": {
                                                        "ref": "ManagedController.html#views",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "p": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {
                                                            "ManagedController.html#permissions": {
                                                              "ref": "ManagedController.html#permissions",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "i": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {
                                                        "ManagedController.html#initialize": {
                                                          "ref": "ManagedController.html#initialize",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "r": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "ManagedController.html#render": {
                                                        "ref": "ManagedController.html#render",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                },
                                                "m": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "v": {
                                                      "docs": {
                                                        "ManagedController.html#remove": {
                                                          "ref": "ManagedController.html#remove",
                                                          "tf": 1150
                                                        }
                                                      },
                                                      "e": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "l": {
                                                              "docs": {},
                                                              "v": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "w": {
                                                                      "docs": {
                                                                        "ManagedController.html#removeAllViews": {
                                                                          "ref": "ManagedController.html#removeAllViews",
                                                                          "tf": 1150
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "p": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "s": {
                                                                      "docs": {
                                                                        "ManagedController.html#removePermission": {
                                                                          "ref": "ManagedController.html#removePermission",
                                                                          "tf": 1150
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "m": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "v": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "w": {
                                                                "docs": {
                                                                  "ManagedController.html#manageView": {
                                                                    "ref": "ManagedController.html#manageView",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "t": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "m": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {},
                                                                    "s": {
                                                                      "docs": {},
                                                                      "s": {
                                                                        "docs": {
                                                                          "ManagedController.html#matchesPermission": {
                                                                            "ref": "ManagedController.html#matchesPermission",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {
                                                                  "ManagedController.html#addPermission": {
                                                                    "ref": "ManagedController.html#addPermission",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "c": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "m": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {
                                                                      "ManagedController.html#clearPermissions": {
                                                                        "ref": "ManagedController.html#clearPermissions",
                                                                        "tf": 1150
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "a": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "y": {
                                                                "docs": {
                                                                  "ManagedController.html#canDisplay": {
                                                                    "ref": "ManagedController.html#canDisplay",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "v": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "w": {
                            "docs": {
                              "ManagedController.html#manageView": {
                                "ref": "ManagedController.html#manageView",
                                "tf": 716.6666666666666
                              },
                              "ViewController.html#manageView": {
                                "ref": "ViewController.html#manageView",
                                "tf": 716.6666666666666
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Router.html#route": {
                        "ref": "Router.html#route",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "ManagedController.html#matchesPermission": {
                      "ref": "ManagedController.html#matchesPermission",
                      "tf": 49.99999999999999
                    },
                    "ViewController.html#matchesPermission": {
                      "ref": "ViewController.html#matchesPermission",
                      "tf": 49.99999999999999
                    }
                  },
                  "e": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "s": {
                                    "docs": {
                                      "ManagedController.html#matchesPermission": {
                                        "ref": "ManagedController.html#matchesPermission",
                                        "tf": 683.3333333333334
                                      },
                                      "ViewController.html#matchesPermission": {
                                        "ref": "ViewController.html#matchesPermission",
                                        "tf": 683.3333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {
                "Router.html": {
                  "ref": "Router.html",
                  "tf": 2.941176470588235
                }
              }
            },
            "r": {
              "docs": {},
              "k": {
                "docs": {},
                "u": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "y": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "Presentation.Component.Article.html": {
                                    "ref": "Presentation.Component.Article.html",
                                    "tf": 1.3157894736842104
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "f": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {
                                      "Presentation.Component.Article.html": {
                                        "ref": "Presentation.Component.Article.html",
                                        "tf": 1.3157894736842104
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "h": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {
                                      "Presentation.Component.Article.html": {
                                        "ref": "Presentation.Component.Article.html",
                                        "tf": 1.3157894736842104
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {
              "Presentation.AbstractView.html": {
                "ref": "Presentation.AbstractView.html",
                "tf": 6.25
              },
              "Presentation.View.html": {
                "ref": "Presentation.View.html",
                "tf": 6.25
              }
            },
            "v": {
              "docs": {},
              "m": {
                "docs": {
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 0.8333333333333334
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "d": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "b": {
                            "docs": {
                              "Application.html": {
                                "ref": "Application.html",
                                "tf": 5
                              },
                              "Application.html#breadcrumbs": {
                                "ref": "Application.html#breadcrumbs",
                                "tf": 800
                              },
                              "Application.html#setCurrentBreadcrumb": {
                                "ref": "Application.html#setCurrentBreadcrumb",
                                "tf": 16.666666666666664
                              },
                              "Application.html#getCurrentBreadcrumb": {
                                "ref": "Application.html#getCurrentBreadcrumb",
                                "tf": 16.666666666666664
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "w": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "History.html": {
                          "ref": "History.html",
                          "tf": 4.761904761904762
                        },
                        "Router.html#startHistory": {
                          "ref": "Router.html#startHistory",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "d": {
                  "docs": {
                    "Collection.html#sync": {
                      "ref": "Collection.html#sync",
                      "tf": 8.333333333333332
                    },
                    "PaginatedCollection.html#sync": {
                      "ref": "PaginatedCollection.html#sync",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "i": {
                "docs": {
                  "Presentation.Component.Article.html": {
                    "ref": "Presentation.Component.Article.html",
                    "tf": 2.631578947368421
                  },
                  "Presentation.Component.Article.html#body": {
                    "ref": "Presentation.Component.Article.html#body",
                    "tf": 685
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "LocalStorageCollection.html": {
                    "ref": "LocalStorageCollection.html",
                    "tf": 12.5
                  },
                  "History.html": {
                    "ref": "History.html",
                    "tf": 2.380952380952381
                  },
                  "Presentation.AbstractView.html": {
                    "ref": "Presentation.AbstractView.html",
                    "tf": 6.25
                  },
                  "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                    "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                    "tf": 7.142857142857142
                  },
                  "Presentation.Colleague.html": {
                    "ref": "Presentation.Colleague.html",
                    "tf": 3.3333333333333335
                  },
                  "Presentation.View.html": {
                    "ref": "Presentation.View.html",
                    "tf": 6.25
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "k": {
                "docs": {
                  "History.html": {
                    "ref": "History.html",
                    "tf": 2.380952380952381
                  }
                },
                "b": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              ".": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "h": {
                                                          "docs": {
                                                            "PaginatedCollection.html#fetch": {
                                                              "ref": "PaginatedCollection.html#fetch",
                                                              "tf": 10
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "j": {
                            "docs": {
                              "History.html": {
                                "ref": "History.html",
                                "tf": 2.380952380952381
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "Router.html#route": {
                    "ref": "Router.html#route",
                    "tf": 8.333333333333332
                  }
                },
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Presentation.DecoratorView.html": {
                                    "ref": "Presentation.DecoratorView.html",
                                    "tf": 0.8333333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "d": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Presentation.Component.BigDataTable.html": {
                            "ref": "Presentation.Component.BigDataTable.html",
                            "tf": 700
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "t": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Presentation.Component.AlertDialogView.html": {
                        "ref": "Presentation.Component.AlertDialogView.html",
                        "tf": 5.555555555555555
                      },
                      "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                        "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "f": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Presentation.Component.Spreadsheet.html": {
                        "ref": "Presentation.Component.Spreadsheet.html",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "w": {
                "docs": {},
                "e": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Presentation.Mediator.html": {
                          "ref": "Presentation.Mediator.html",
                          "tf": 4.3478260869565215
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "x": {
            "docs": {},
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Application.html": {
                        "ref": "Application.html",
                        "tf": 5
                      }
                    }
                  },
                  "d": {
                    "docs": {
                      "Presentation.Component.AbstractToolbar.html": {
                        "ref": "Presentation.Component.AbstractToolbar.html",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "l": {
                "docs": {},
                "u": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "ViewController.html#permissions": {
                        "ref": "ViewController.html#permissions",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "u": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Router.html#execute": {
                        "ref": "Router.html#execute",
                        "tf": 687.1794871794872
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Application.html#.initialize": {
                      "ref": "Application.html#.initialize",
                      "tf": 10
                    },
                    "Router.html": {
                      "ref": "Router.html",
                      "tf": 2.941176470588235
                    },
                    "Presentation.DecoratorView.html": {
                      "ref": "Presentation.DecoratorView.html",
                      "tf": 1.6666666666666667
                    }
                  },
                  "s": {
                    "docs": {},
                    "!": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "Presentation.DecoratorView.html": {
                                "ref": "Presentation.DecoratorView.html",
                                "tf": 0.8333333333333334
                              }
                            }
                          }
                        }
                      }
                    },
                    "'": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Presentation.DecoratorView.html": {
                                        "ref": "Presentation.DecoratorView.html",
                                        "tf": 0.8333333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "d": {
              "docs": {
                "ManagedController.html#remove": {
                  "ref": "ManagedController.html#remove",
                  "tf": 5
                },
                "ViewController.html#remove": {
                  "ref": "ViewController.html#remove",
                  "tf": 5
                }
              }
            }
          },
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "History.html": {
                                    "ref": "History.html",
                                    "tf": 2.380952380952381
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "p": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {
                    "Router.html#initialize": {
                      "ref": "Router.html#initialize",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "Presentation.Component.EditableLocalStorageTable.html": {
                    "ref": "Presentation.Component.EditableLocalStorageTable.html",
                    "tf": 7.142857142857142
                  },
                  "Presentation.Component.EditableTable.html": {
                    "ref": "Presentation.Component.EditableTable.html",
                    "tf": 12.5
                  },
                  "Presentation.Component.Spreadsheet.html": {
                    "ref": "Presentation.Component.Spreadsheet.html",
                    "tf": 7.6923076923076925
                  }
                },
                "a": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Presentation.Component.EditableBigDataTable.html": {
                                            "ref": "Presentation.Component.EditableBigDataTable.html",
                                            "tf": 700
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "Presentation.Component.EditableLocalStorageTable.html": {
                                                      "ref": "Presentation.Component.EditableLocalStorageTable.html",
                                                      "tf": 700
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {
                            "Presentation.Component.EditableTable.html": {
                              "ref": "Presentation.Component.EditableTable.html",
                              "tf": 700
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "Presentation.Colleague.html": {
                        "ref": "Presentation.Colleague.html",
                        "tf": 3.3333333333333335
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "Presentation.Mediator.html": {
                    "ref": "Presentation.Mediator.html",
                    "tf": 2.1739130434782608
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Application.html#registerMediator": {
                            "ref": "Application.html#registerMediator",
                            "tf": 110
                          },
                          "Application.html#deregisterMediator": {
                            "ref": "Application.html#deregisterMediator",
                            "tf": 110
                          },
                          "Application.html#registerStylesheet": {
                            "ref": "Application.html#registerStylesheet",
                            "tf": 110
                          },
                          "Application.html#deregisterStylesheet": {
                            "ref": "Application.html#deregisterStylesheet",
                            "tf": 110
                          },
                          "Application.html#attachStylesheets": {
                            "ref": "Application.html#attachStylesheets",
                            "tf": 110
                          },
                          "Application.html#replaceStylesheets": {
                            "ref": "Application.html#replaceStylesheets",
                            "tf": 110
                          },
                          "Application.html#setCurrentBreadcrumb": {
                            "ref": "Application.html#setCurrentBreadcrumb",
                            "tf": 110
                          },
                          "Application.html#getCurrentBreadcrumb": {
                            "ref": "Application.html#getCurrentBreadcrumb",
                            "tf": 110
                          },
                          "Application.html#.initialize": {
                            "ref": "Application.html#.initialize",
                            "tf": 110
                          },
                          "Collection.html#sync": {
                            "ref": "Collection.html#sync",
                            "tf": 110
                          },
                          "LocalStorageCollection.html#initialize": {
                            "ref": "LocalStorageCollection.html#initialize",
                            "tf": 110
                          },
                          "LocalStorageCollection.html#init": {
                            "ref": "LocalStorageCollection.html#init",
                            "tf": 110
                          },
                          "LocalStorageCollection.html#fetch": {
                            "ref": "LocalStorageCollection.html#fetch",
                            "tf": 110
                          },
                          "LocalStorageCollection.html#save": {
                            "ref": "LocalStorageCollection.html#save",
                            "tf": 110
                          },
                          "LocalStorageCollection.html#update": {
                            "ref": "LocalStorageCollection.html#update",
                            "tf": 110
                          },
                          "LocalStorageCollection.html#destroy": {
                            "ref": "LocalStorageCollection.html#destroy",
                            "tf": 110
                          },
                          "LocalStorageCollection.html#sync": {
                            "ref": "LocalStorageCollection.html#sync",
                            "tf": 110
                          },
                          "PaginatedCollection.html#setPageSize": {
                            "ref": "PaginatedCollection.html#setPageSize",
                            "tf": 110
                          },
                          "PaginatedCollection.html#setCurrentPage": {
                            "ref": "PaginatedCollection.html#setCurrentPage",
                            "tf": 110
                          },
                          "PaginatedCollection.html#fetch": {
                            "ref": "PaginatedCollection.html#fetch",
                            "tf": 110
                          },
                          "PaginatedCollection.html#nextPage": {
                            "ref": "PaginatedCollection.html#nextPage",
                            "tf": 110
                          },
                          "PaginatedCollection.html#previousPage": {
                            "ref": "PaginatedCollection.html#previousPage",
                            "tf": 110
                          },
                          "PaginatedCollection.html#goToPage": {
                            "ref": "PaginatedCollection.html#goToPage",
                            "tf": 110
                          },
                          "PaginatedCollection.html#firstPage": {
                            "ref": "PaginatedCollection.html#firstPage",
                            "tf": 110
                          },
                          "PaginatedCollection.html#lastPage": {
                            "ref": "PaginatedCollection.html#lastPage",
                            "tf": 110
                          },
                          "PaginatedCollection.html#refresh": {
                            "ref": "PaginatedCollection.html#refresh",
                            "tf": 110
                          },
                          "PaginatedCollection.html#sync": {
                            "ref": "PaginatedCollection.html#sync",
                            "tf": 110
                          },
                          "ManagedController.html#initialize": {
                            "ref": "ManagedController.html#initialize",
                            "tf": 110
                          },
                          "ManagedController.html#render": {
                            "ref": "ManagedController.html#render",
                            "tf": 110
                          },
                          "ManagedController.html#remove": {
                            "ref": "ManagedController.html#remove",
                            "tf": 110
                          },
                          "ManagedController.html#manageView": {
                            "ref": "ManagedController.html#manageView",
                            "tf": 110
                          },
                          "ManagedController.html#removeAllViews": {
                            "ref": "ManagedController.html#removeAllViews",
                            "tf": 110
                          },
                          "ManagedController.html#addPermission": {
                            "ref": "ManagedController.html#addPermission",
                            "tf": 110
                          },
                          "ManagedController.html#removePermission": {
                            "ref": "ManagedController.html#removePermission",
                            "tf": 110
                          },
                          "ManagedController.html#clearPermissions": {
                            "ref": "ManagedController.html#clearPermissions",
                            "tf": 110
                          },
                          "ManagedController.html#matchesPermission": {
                            "ref": "ManagedController.html#matchesPermission",
                            "tf": 110
                          },
                          "ManagedController.html#canDisplay": {
                            "ref": "ManagedController.html#canDisplay",
                            "tf": 110
                          },
                          "ViewController.html#initialize": {
                            "ref": "ViewController.html#initialize",
                            "tf": 110
                          },
                          "ViewController.html#render": {
                            "ref": "ViewController.html#render",
                            "tf": 110
                          },
                          "ViewController.html#remove": {
                            "ref": "ViewController.html#remove",
                            "tf": 110
                          },
                          "ViewController.html#manageView": {
                            "ref": "ViewController.html#manageView",
                            "tf": 110
                          },
                          "ViewController.html#removeAllViews": {
                            "ref": "ViewController.html#removeAllViews",
                            "tf": 110
                          },
                          "ViewController.html#addPermission": {
                            "ref": "ViewController.html#addPermission",
                            "tf": 110
                          },
                          "ViewController.html#removePermission": {
                            "ref": "ViewController.html#removePermission",
                            "tf": 110
                          },
                          "ViewController.html#clearPermissions": {
                            "ref": "ViewController.html#clearPermissions",
                            "tf": 110
                          },
                          "ViewController.html#matchesPermission": {
                            "ref": "ViewController.html#matchesPermission",
                            "tf": 110
                          },
                          "ViewController.html#canDisplay": {
                            "ref": "ViewController.html#canDisplay",
                            "tf": 110
                          },
                          "Dom.html": {
                            "ref": "Dom.html",
                            "tf": 16.666666666666664
                          },
                          "Router.html#loadView": {
                            "ref": "Router.html#loadView",
                            "tf": 110
                          },
                          "Router.html#cleanup": {
                            "ref": "Router.html#cleanup",
                            "tf": 110
                          },
                          "Router.html#initialize": {
                            "ref": "Router.html#initialize",
                            "tf": 117.14285714285714
                          },
                          "Router.html#route": {
                            "ref": "Router.html#route",
                            "tf": 110
                          },
                          "Router.html#execute": {
                            "ref": "Router.html#execute",
                            "tf": 110
                          },
                          "Router.html#navigate": {
                            "ref": "Router.html#navigate",
                            "tf": 110
                          },
                          "Router.html#startHistory": {
                            "ref": "Router.html#startHistory",
                            "tf": 110
                          },
                          "Presentation.Component.Article.html#addSection": {
                            "ref": "Presentation.Component.Article.html#addSection",
                            "tf": 110
                          },
                          "Presentation.Component.Article.html#clearSections": {
                            "ref": "Presentation.Component.Article.html#clearSections",
                            "tf": 110
                          },
                          "Presentation.Component.Article.html#render": {
                            "ref": "Presentation.Component.Article.html#render",
                            "tf": 110
                          },
                          "Presentation.Component.Header.html#render": {
                            "ref": "Presentation.Component.Header.html#render",
                            "tf": 110
                          },
                          "Presentation.Component.Menu.html#render": {
                            "ref": "Presentation.Component.Menu.html#render",
                            "tf": 110
                          },
                          "Presentation.Component.NavigationMenu.html#render": {
                            "ref": "Presentation.Component.NavigationMenu.html#render",
                            "tf": 110
                          },
                          "Presentation.Component.NotificationCenter.html#showNotification": {
                            "ref": "Presentation.Component.NotificationCenter.html#showNotification",
                            "tf": 110
                          },
                          "Presentation.Component.NotificationCenter.html#hideNotification": {
                            "ref": "Presentation.Component.NotificationCenter.html#hideNotification",
                            "tf": 110
                          },
                          "Presentation.Component.NotificationCenter.html#clearNotifications": {
                            "ref": "Presentation.Component.NotificationCenter.html#clearNotifications",
                            "tf": 110
                          },
                          "Presentation.Component.NotificationCenter.html#render": {
                            "ref": "Presentation.Component.NotificationCenter.html#render",
                            "tf": 110
                          }
                        },
                        "d": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "a": {
                                "docs": {
                                  "Presentation.DecoratorView.html": {
                                    "ref": "Presentation.DecoratorView.html",
                                    "tf": 0.8333333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "LocalStorageCollection.html#fetch": {
                      "ref": "LocalStorageCollection.html#fetch",
                      "tf": 725
                    },
                    "PaginatedCollection.html#fetch": {
                      "ref": "PaginatedCollection.html#fetch",
                      "tf": 760
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "r": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "PaginatedCollection.html#firstPage": {
                      "ref": "PaginatedCollection.html#firstPage",
                      "tf": 16.666666666666664
                    }
                  },
                  "p": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "g": {
                        "docs": {
                          "PaginatedCollection.html#firstPage": {
                            "ref": "PaginatedCollection.html#firstPage",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "Router.html": {
                    "ref": "Router.html",
                    "tf": 2.941176470588235
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "m": {
                "docs": {
                  "Presentation.Component.AutomaticForm.html": {
                    "ref": "Presentation.Component.AutomaticForm.html",
                    "tf": 8.333333333333332
                  }
                },
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "ViewController.html#permissions": {
                        "ref": "ViewController.html#permissions",
                        "tf": 8.333333333333332
                      },
                      "Presentation.Component.Article.html": {
                        "ref": "Presentation.Component.Article.html",
                        "tf": 1.3157894736842104
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Presentation.Component.Article.html": {
                        "ref": "Presentation.Component.Article.html",
                        "tf": 2.631578947368421
                      },
                      "Presentation.Component.Article.html#footer": {
                        "ref": "Presentation.Component.Article.html#footer",
                        "tf": 700
                      },
                      "Presentation.Component.Footer.html": {
                        "ref": "Presentation.Component.Footer.html",
                        "tf": 725
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "g": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "History.html": {
                            "ref": "History.html",
                            "tf": 2.380952380952381
                          },
                          "Router.html#navigate": {
                            "ref": "Router.html#navigate",
                            "tf": 41.66666666666666
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Pagination.PaginationFactory.html": {
                          "ref": "Pagination.PaginationFactory.html",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "x": {
                "docs": {
                  "Router.html": {
                    "ref": "Router.html",
                    "tf": 2.941176470588235
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "r": {
            "docs": {},
            "i": {
              "docs": {
                "Application.html#setCurrentBreadcrumb": {
                  "ref": "Application.html#setCurrentBreadcrumb",
                  "tf": 33.33333333333333
                },
                "RestLogger.html#uri": {
                  "ref": "RestLogger.html#uri",
                  "tf": 750
                }
              },
              "/": {
                "docs": {},
                "j": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Presentation.Component.AutomaticTable.html": {
                            "ref": "Presentation.Component.AutomaticTable.html",
                            "tf": 6.25
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {
                "History.html": {
                  "ref": "History.html",
                  "tf": 4.761904761904762
                },
                "Router.html": {
                  "ref": "Router.html",
                  "tf": 2.941176470588235
                }
              }
            }
          },
          "p": {
            "docs": {
              "ManagedController.html": {
                "ref": "ManagedController.html",
                "tf": 8.333333333333332
              },
              "ManagedController.html#removeAllViews": {
                "ref": "ManagedController.html#removeAllViews",
                "tf": 5.555555555555555
              },
              "ViewController.html#removeAllViews": {
                "ref": "ViewController.html#removeAllViews",
                "tf": 5.555555555555555
              },
              "Presentation.Component.Article.html": {
                "ref": "Presentation.Component.Article.html",
                "tf": 1.3157894736842104
              },
              "Presentation.DecoratorView.html": {
                "ref": "Presentation.DecoratorView.html",
                "tf": 0.8333333333333334
              }
            },
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "LocalStorageCollection.html#update": {
                      "ref": "LocalStorageCollection.html#update",
                      "tf": 725
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {
              "ViewController.html": {
                "ref": "ViewController.html",
                "tf": 5
              },
              "Router.html#startHistory": {
                "ref": "Router.html#startHistory",
                "tf": 8.333333333333332
              },
              "Presentation.Component.Spreadsheet.html": {
                "ref": "Presentation.Component.Spreadsheet.html",
                "tf": 3.8461538461538463
              },
              "Presentation.DecoratorView.html": {
                "ref": "Presentation.DecoratorView.html",
                "tf": 2.5
              }
            }
          },
          "i": {
            "docs": {
              "module-Presentation-Component.html": {
                "ref": "module-Presentation-Component.html",
                "tf": 12.5
              }
            }
          }
        },
        "g": {
          "docs": {},
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "Application.html#getCurrentBreadcrumb": {
                  "ref": "Application.html#getCurrentBreadcrumb",
                  "tf": 16.666666666666664
                },
                "ViewController.html#permissions": {
                  "ref": "ViewController.html#permissions",
                  "tf": 8.333333333333332
                }
              },
              "c": {
                "docs": {},
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "b": {
                                                "docs": {
                                                  "Application.html#getCurrentBreadcrumb": {
                                                    "ref": "Application.html#getCurrentBreadcrumb",
                                                    "tf": 750
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "w": {
                      "docs": {
                        "ManagedController.html#views": {
                          "ref": "ManagedController.html#views",
                          "tf": 12.5
                        },
                        "ViewController.html#views": {
                          "ref": "ViewController.html#views",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "Presentation.Component.Article.html": {
                      "ref": "Presentation.Component.Article.html",
                      "tf": 1.3157894736842104
                    },
                    "Presentation.DecoratorView.html": {
                      "ref": "Presentation.DecoratorView.html",
                      "tf": 0.8333333333333334
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "e": {
              "docs": {
                "PaginatedCollection.html#goToPage": {
                  "ref": "PaginatedCollection.html#goToPage",
                  "tf": 25
                }
              }
            },
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "PaginatedCollection.html#goToPage": {
                          "ref": "PaginatedCollection.html#goToPage",
                          "tf": 700
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "u": {
                "docs": {},
                "p": {
                  "docs": {
                    "ViewController.html": {
                      "ref": "ViewController.html",
                      "tf": 5
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 0.8333333333333334
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "p": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "LocalStorageCollection.html#initialize": {
                        "ref": "LocalStorageCollection.html#initialize",
                        "tf": 50
                      },
                      "LocalStorageCollection.html#init": {
                        "ref": "LocalStorageCollection.html#init",
                        "tf": 50
                      },
                      "LocalStorageCollection.html#fetch": {
                        "ref": "LocalStorageCollection.html#fetch",
                        "tf": 50
                      },
                      "LocalStorageCollection.html#save": {
                        "ref": "LocalStorageCollection.html#save",
                        "tf": 50
                      },
                      "LocalStorageCollection.html#update": {
                        "ref": "LocalStorageCollection.html#update",
                        "tf": 50
                      },
                      "LocalStorageCollection.html#destroy": {
                        "ref": "LocalStorageCollection.html#destroy",
                        "tf": 50
                      },
                      "Router.html#navigate": {
                        "ref": "Router.html#navigate",
                        "tf": 33.33333333333333
                      },
                      "Router.html#startHistory": {
                        "ref": "Router.html#startHistory",
                        "tf": 50
                      },
                      "Presentation.Component.Article.html": {
                        "ref": "Presentation.Component.Article.html",
                        "tf": 1.3157894736842104
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "d": {
              "docs": {
                "History.html": {
                  "ref": "History.html",
                  "tf": 2.380952380952381
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "h": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "History.html": {
                                              "ref": "History.html",
                                              "tf": 2.380952380952381
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "RestLogger.html": {
                          "ref": "RestLogger.html",
                          "tf": 10
                        },
                        "Router.html#initialize": {
                          "ref": "Router.html#initialize",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "Router.html": {
                "ref": "Router.html",
                "tf": 2.941176470588235
              }
            }
          },
          "w": {
            "docs": {},
            "n": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Router.html#initialize": {
                            "ref": "Router.html#initialize",
                            "tf": 7.142857142857142
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Presentation.LocalStorageFactory.html": {
                        "ref": "Presentation.LocalStorageFactory.html",
                        "tf": 12.5
                      },
                      "Presentation.NamespacedLocalStorage.html": {
                        "ref": "Presentation.NamespacedLocalStorage.html",
                        "tf": 12.5
                      },
                      "Presentation.Component.Article.html#addSection": {
                        "ref": "Presentation.Component.Article.html#addSection",
                        "tf": 12.5
                      },
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 2.1739130434782608
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "i": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "LocalStorageCollection.html#initialize": {
                    "ref": "LocalStorageCollection.html#initialize",
                    "tf": 12.5
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 0.8333333333333334
                        }
                      }
                    }
                  }
                },
                "c": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Configuration.xhrFields.html#.withCredentials": {
                                    "ref": "Configuration.xhrFields.html#.withCredentials",
                                    "tf": 675
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Widget.html": {
                        "ref": "Widget.html",
                        "tf": 1912.5
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "PaginatedCollection.html": {
                      "ref": "PaginatedCollection.html",
                      "tf": 5.555555555555555
                    },
                    "ViewController.html": {
                      "ref": "ViewController.html",
                      "tf": 10
                    },
                    "History.html": {
                      "ref": "History.html",
                      "tf": 2.380952380952381
                    }
                  },
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Router.html#execute": {
                          "ref": "Router.html#execute",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "Presentation.AbstractView.html": {
                          "ref": "Presentation.AbstractView.html",
                          "tf": 6.25
                        },
                        "Presentation.View.html": {
                          "ref": "Presentation.View.html",
                          "tf": 6.25
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "h": {
                "docs": {
                  "Router.html": {
                    "ref": "Router.html",
                    "tf": 2.941176470588235
                  },
                  "Presentation.Colleague.html": {
                    "ref": "Presentation.Colleague.html",
                    "tf": 3.3333333333333335
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "Presentation.Component.HamburgerMenu.html": {
                          "ref": "Presentation.Component.HamburgerMenu.html",
                          "tf": 16.666666666666664
                        }
                      },
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "u": {
                                  "docs": {
                                    "Presentation.Component.HamburgerMenu.html": {
                                      "ref": "Presentation.Component.HamburgerMenu.html",
                                      "tf": 700
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "Presentation.Mediator.html": {
                    "ref": "Presentation.Mediator.html",
                    "tf": 2.1739130434782608
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "ManagedController.html#initialize": {
                    "ref": "ManagedController.html#initialize",
                    "tf": 6.25
                  },
                  "ManagedController.html#render": {
                    "ref": "ManagedController.html#render",
                    "tf": 5
                  },
                  "ManagedController.html#remove": {
                    "ref": "ManagedController.html#remove",
                    "tf": 5
                  },
                  "ViewController.html#initialize": {
                    "ref": "ViewController.html#initialize",
                    "tf": 6.25
                  },
                  "ViewController.html#render": {
                    "ref": "ViewController.html#render",
                    "tf": 5
                  },
                  "ViewController.html#remove": {
                    "ref": "ViewController.html#remove",
                    "tf": 5
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Presentation.Component.Article.html": {
                        "ref": "Presentation.Component.Article.html",
                        "tf": 2.631578947368421
                      },
                      "Presentation.Component.Article.html#header": {
                        "ref": "Presentation.Component.Article.html#header",
                        "tf": 700
                      },
                      "Presentation.Component.Header.html": {
                        "ref": "Presentation.Component.Header.html",
                        "tf": 700
                      },
                      "Presentation.Component.Header.html#render": {
                        "ref": "Presentation.Component.Header.html#render",
                        "tf": 25
                      }
                    },
                    "#": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "Presentation.Component.Header.html#title": {
                                  "ref": "Presentation.Component.Header.html#title",
                                  "tf": 75
                                }
                              }
                            }
                          }
                        }
                      },
                      "s": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "l": {
                                    "docs": {
                                      "Presentation.Component.Header.html#subTitle": {
                                        "ref": "Presentation.Component.Header.html#subTitle",
                                        "tf": 75
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "r": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "d": {
                              "docs": {
                                "Presentation.Component.Header.html#render": {
                                  "ref": "Presentation.Component.Header.html#render",
                                  "tf": 75
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "History.html": {
                          "ref": "History.html",
                          "tf": 1902.3809523809523
                        },
                        "Router.html#navigate": {
                          "ref": "Router.html#navigate",
                          "tf": 16.666666666666664
                        },
                        "Router.html#startHistory": {
                          "ref": "Router.html#startHistory",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "e": {
                "docs": {
                  "Presentation.Component.NotificationCenter.html#hideNotification": {
                    "ref": "Presentation.Component.NotificationCenter.html#hideNotification",
                    "tf": 25
                  }
                },
                "n": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "Presentation.Component.NotificationCenter.html#hideNotification": {
                              "ref": "Presentation.Component.NotificationCenter.html#hideNotification",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "m": {
              "docs": {},
              "l": {
                "docs": {
                  "Presentation.Component.Article.html#body": {
                    "ref": "Presentation.Component.Article.html#body",
                    "tf": 10
                  },
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 0.8333333333333334
                  }
                }
              }
            }
          }
        },
        "k": {
          "docs": {},
          "n": {
            "docs": {},
            "o": {
              "docs": {},
              "w": {
                "docs": {},
                "n": {
                  "docs": {
                    "ManagedController.html#views": {
                      "ref": "ManagedController.html#views",
                      "tf": 12.5
                    },
                    "ManagedController.html#removeAllViews": {
                      "ref": "ManagedController.html#removeAllViews",
                      "tf": 5.555555555555555
                    },
                    "ViewController.html#views": {
                      "ref": "ViewController.html#views",
                      "tf": 12.5
                    },
                    "ViewController.html#removeAllViews": {
                      "ref": "ViewController.html#removeAllViews",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "i": {
            "docs": {},
            "e": {
              "docs": {},
              "w": {
                "docs": {
                  "ManagedController.html#views": {
                    "ref": "ManagedController.html#views",
                    "tf": 762.5
                  },
                  "ManagedController.html#render": {
                    "ref": "ManagedController.html#render",
                    "tf": 5
                  },
                  "ManagedController.html#remove": {
                    "ref": "ManagedController.html#remove",
                    "tf": 5
                  },
                  "ManagedController.html#manageView": {
                    "ref": "ManagedController.html#manageView",
                    "tf": 66.66666666666666
                  },
                  "ManagedController.html#removeAllViews": {
                    "ref": "ManagedController.html#removeAllViews",
                    "tf": 5.555555555555555
                  },
                  "ViewController.html": {
                    "ref": "ViewController.html",
                    "tf": 10
                  },
                  "ViewController.html#views": {
                    "ref": "ViewController.html#views",
                    "tf": 762.5
                  },
                  "ViewController.html#render": {
                    "ref": "ViewController.html#render",
                    "tf": 5
                  },
                  "ViewController.html#remove": {
                    "ref": "ViewController.html#remove",
                    "tf": 5
                  },
                  "ViewController.html#manageView": {
                    "ref": "ViewController.html#manageView",
                    "tf": 66.66666666666666
                  },
                  "ViewController.html#removeAllViews": {
                    "ref": "ViewController.html#removeAllViews",
                    "tf": 5.555555555555555
                  },
                  "Router.html#loadView": {
                    "ref": "Router.html#loadView",
                    "tf": 61.111111111111114
                  },
                  "Router.html#cleanup": {
                    "ref": "Router.html#cleanup",
                    "tf": 8.333333333333332
                  },
                  "Presentation.AbstractView.html": {
                    "ref": "Presentation.AbstractView.html",
                    "tf": 12.5
                  },
                  "Presentation.Component.Card.html": {
                    "ref": "Presentation.Component.Card.html",
                    "tf": 10
                  },
                  "Presentation.Component.AlertDialogView.html": {
                    "ref": "Presentation.Component.AlertDialogView.html",
                    "tf": 5.555555555555555
                  },
                  "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                    "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                    "tf": 6.25
                  },
                  "Presentation.Component.DialogView.html": {
                    "ref": "Presentation.Component.DialogView.html",
                    "tf": 6.25
                  },
                  "Presentation.Component.AutomaticForm.html": {
                    "ref": "Presentation.Component.AutomaticForm.html",
                    "tf": 8.333333333333332
                  },
                  "Presentation.Component.HamburgerMenu.html": {
                    "ref": "Presentation.Component.HamburgerMenu.html",
                    "tf": 16.666666666666664
                  },
                  "Presentation.Component.Toolbar.html": {
                    "ref": "Presentation.Component.Toolbar.html",
                    "tf": 25
                  },
                  "Presentation.DecoratorView.html": {
                    "ref": "Presentation.DecoratorView.html",
                    "tf": 4.166666666666666
                  },
                  "Presentation.Colleague.html": {
                    "ref": "Presentation.Colleague.html",
                    "tf": 6.666666666666667
                  },
                  "Presentation.Mediator.html": {
                    "ref": "Presentation.Mediator.html",
                    "tf": 2.1739130434782608
                  },
                  "Presentation.View.html": {
                    "ref": "Presentation.View.html",
                    "tf": 762.5
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "ViewController.html": {
                                  "ref": "ViewController.html",
                                  "tf": 1900
                                }
                              },
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "#": {
                                      "docs": {},
                                      "v": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "w": {
                                              "docs": {
                                                "ViewController.html#views": {
                                                  "ref": "ViewController.html#views",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "p": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {
                                                      "ViewController.html#permissions": {
                                                        "ref": "ViewController.html#permissions",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "ViewController.html#initialize": {
                                                    "ref": "ViewController.html#initialize",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "ViewController.html#render": {
                                                  "ref": "ViewController.html#render",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          },
                                          "m": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "v": {
                                                "docs": {
                                                  "ViewController.html#remove": {
                                                    "ref": "ViewController.html#remove",
                                                    "tf": 1150
                                                  }
                                                },
                                                "e": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "v": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "w": {
                                                                "docs": {
                                                                  "ViewController.html#removeAllViews": {
                                                                    "ref": "ViewController.html#removeAllViews",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "p": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {
                                                                  "ViewController.html#removePermission": {
                                                                    "ref": "ViewController.html#removePermission",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "m": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "w": {
                                                          "docs": {
                                                            "ViewController.html#manageView": {
                                                              "ref": "ViewController.html#manageView",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "t": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {
                                                                    "ViewController.html#matchesPermission": {
                                                                      "ref": "ViewController.html#matchesPermission",
                                                                      "tf": 1150
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {
                                                            "ViewController.html#addPermission": {
                                                              "ref": "ViewController.html#addPermission",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "c": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {
                                                                "ViewController.html#clearPermissions": {
                                                                  "ref": "ViewController.html#clearPermissions",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {
                                                            "ViewController.html#canDisplay": {
                                                              "ref": "ViewController.html#canDisplay",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Presentation.Component.Article.html": {
                        "ref": "Presentation.Component.Article.html",
                        "tf": 1.3157894736842104
                      }
                    }
                  }
                },
                ".": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "w": {
                            "docs": {
                              "Presentation.Colleague.html": {
                                "ref": "Presentation.Colleague.html",
                                "tf": 3.3333333333333335
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "s": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Presentation.Mediator.html": {
                                "ref": "Presentation.Mediator.html",
                                "tf": 2.1739130434782608
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {
                "Presentation.Component.AutomaticTable.html": {
                  "ref": "Presentation.Component.AutomaticTable.html",
                  "tf": 6.25
                },
                "Presentation.DecoratorView.html": {
                  "ref": "Presentation.DecoratorView.html",
                  "tf": 0.8333333333333334
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "Model.html": {
                      "ref": "Model.html",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "h": {
            "docs": {},
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "ManagedController.html#removeAllViews": {
                      "ref": "ManagedController.html#removeAllViews",
                      "tf": 5.555555555555555
                    },
                    "ViewController.html#removeAllViews": {
                      "ref": "ViewController.html#removeAllViews",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "k": {
                  "docs": {
                    "History.html": {
                      "ref": "History.html",
                      "tf": 2.380952380952381
                    }
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {
                  "Pagination.PaginationFactory.html": {
                    "ref": "Pagination.PaginationFactory.html",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "l": {
                "docs": {
                  "Presentation.Component.Header.html#title": {
                    "ref": "Presentation.Component.Header.html#title",
                    "tf": 675
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "b": {
              "docs": {},
              "l": {
                "docs": {
                  "Presentation.Component.AutomaticTable.html": {
                    "ref": "Presentation.Component.AutomaticTable.html",
                    "tf": 6.25
                  },
                  "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
                    "ref": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Presentation.Component.AbstractToolbar.html": {
                            "ref": "Presentation.Component.AbstractToolbar.html",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                },
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Presentation.Component.Toolbar.html": {
                          "ref": "Presentation.Component.Toolbar.html",
                          "tf": 725
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.DecoratorView.html": {
                          "ref": "Presentation.DecoratorView.html",
                          "tf": 2.5
                        }
                      },
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "a": {
                                "docs": {
                                  "Presentation.DecoratorView.html": {
                                    "ref": "Presentation.DecoratorView.html",
                                    "tf": 0.8333333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "_": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "g": {
                "docs": {},
                "m": {
                  "docs": {
                    "RestLogger.html": {
                      "ref": "RestLogger.html",
                      "tf": 10
                    }
                  }
                }
              }
            }
          }
        },
        "y": {
          "docs": {},
          "e": {
            "docs": {
              "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
                "ref": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
                "tf": 6.25
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "Presentation.Component.AutomaticForm.html": {
                    "ref": "Presentation.Component.AutomaticForm.html",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Presentation.DecoratorView.html": {
                                "ref": "Presentation.DecoratorView.html",
                                "tf": 0.8333333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "x": {
          "docs": {},
          "h": {
            "docs": {},
            "r": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Configuration.xhrFields.html": {
                            "ref": "Configuration.xhrFields.html",
                            "tf": 775
                          }
                        },
                        "s": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "w": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "h": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "Configuration.xhrFields.html#.withCredentials": {
                                                        "ref": "Configuration.xhrFields.html#.withCredentials",
                                                        "tf": 100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 1060
    },
    "corpusTokens": [
      "10",
      "_logm",
      "abil",
      "abstract",
      "abstracttoolbar",
      "abstractview",
      "achiev",
      "action",
      "add",
      "addpermiss",
      "addsect",
      "alert",
      "alertdialogview",
      "anexcel",
      "annot",
      "api",
      "append",
      "applic",
      "application#attachstylesheet",
      "application#breadcrumb",
      "application#deregistermedi",
      "application#deregisterstylesheet",
      "application#getcurrentbreadcrumb",
      "application#medi",
      "application#registermedi",
      "application#registerstylesheet",
      "application#replacestylesheet",
      "application#rout",
      "application#setcurrentbreadcrumb",
      "application#stylesheet",
      "application.initi",
      "arematch",
      "arg",
      "around",
      "array",
      "articl",
      "article#addsect",
      "article#bodi",
      "article#clearsect",
      "article#foot",
      "article#head",
      "article#rend",
      "article#sect",
      "attach",
      "attachstylesheet",
      "aubstract",
      "augmented.applicationadd",
      "augmented.j",
      "augmented.localstoragefactoryretriev",
      "augmented.presentation.confirmationdialogview",
      "augmented.presentation.localstoraget",
      "automat",
      "automaticform",
      "automatict",
      "automatictablecr",
      "back",
      "backbone.collection.fetch",
      "backbone.j",
      "backend",
      "base",
      "between",
      "bigdatat",
      "bind",
      "bindings.thi",
      "bodi",
      "bound",
      "breadcrumb",
      "browser",
      "buffer",
      "button",
      "call",
      "callback",
      "cancel",
      "candisplay",
      "card",
      "center",
      "child",
      "class",
      "classhead",
      "clean",
      "cleanup",
      "clear",
      "clearnotif",
      "clearpermiss",
      "clearsect",
      "clickdata",
      "client",
      "colleagu",
      "collect",
      "collection#sync",
      "collection.fetch",
      "comfirm",
      "commun",
      "communicatewith",
      "compon",
      "component.abstracttoolbar",
      "component.alertdialogview",
      "component.articl",
      "component.article#addsect",
      "component.article#bodi",
      "component.article#clearsect",
      "component.article#foot",
      "component.article#head",
      "component.article#rend",
      "component.article#sect",
      "component.augmented.presentation.confirmationdialogview",
      "component.augmented.presentation.localstoraget",
      "component.automaticform",
      "component.automatict",
      "component.bigdatat",
      "component.card",
      "component.dialogview",
      "component.editablebigdatat",
      "component.editablelocalstoraget",
      "component.editablet",
      "component.foot",
      "component.hamburgermenu",
      "component.head",
      "component.header#rend",
      "component.header#subtitl",
      "component.header#titl",
      "component.menu",
      "component.menu#rend",
      "component.navigationmenu",
      "component.navigationmenu#rend",
      "component.notificationcent",
      "component.notificationcenter#clearnotif",
      "component.notificationcenter#hidenotif",
      "component.notificationcenter#notif",
      "component.notificationcenter#rend",
      "component.notificationcenter#shownotif",
      "component.spreadsheet",
      "component.toolbar",
      "concept",
      "configur",
      "configuration.xhrfield",
      "configuration.xhrfields.withcredenti",
      "confirmationdialogview",
      "content",
      "contract.although",
      "control",
      "controllerreturn",
      "convent",
      "coupl",
      "creat",
      "cross",
      "css",
      "current",
      "custom",
      "customev",
      "data",
      "decor",
      "decoratorview",
      "decoratorviewan",
      "decoupl",
      "default",
      "defin",
      "defint",
      "deregist",
      "deregistermedi",
      "deregisterstylesheet",
      "design",
      "destroy",
      "develop",
      "dialog",
      "dialogview",
      "directly.to",
      "display",
      "div)sect",
      "document",
      "dom",
      "each",
      "easili",
      "edit",
      "editablebigdatat",
      "editablelocalstoraget",
      "editablet",
      "eitherpushst",
      "empti",
      "end",
      "event",
      "events!thi",
      "events'support",
      "exclud",
      "execut",
      "extend",
      "extens",
      "factori",
      "faux",
      "fetch",
      "fire",
      "first",
      "firstpag",
      "footer",
      "form",
      "format",
      "fragment",
      "function",
      "functiondata",
      "gener",
      "get",
      "getcurrentbreadcrumb",
      "getview",
      "give",
      "goe",
      "gotopag",
      "group",
      "hamburg",
      "hamburgermenu",
      "handl",
      "handler",
      "handlng",
      "hash",
      "have",
      "header",
      "header#rend",
      "header#subtitl",
      "header#titl",
      "here",
      "hide",
      "hidenotif",
      "histori",
      "html",
      "i'd",
      "idea",
      "ie",
      "includ",
      "index",
      "init",
      "initi",
      "inititl",
      "instanc",
      "instead",
      "intend",
      "interfac",
      "it'",
      "item",
      "javascript",
      "json",
      "known",
      "larg",
      "last",
      "lastpag",
      "length",
      "line",
      "list",
      "list:class",
      "list:modul",
      "list:namespac",
      "load",
      "loadview",
      "local",
      "localstorag",
      "localstoragecollect",
      "localstoragecollection#destroy",
      "localstoragecollection#fetch",
      "localstoragecollection#init",
      "localstoragecollection#initi",
      "localstoragecollection#sav",
      "localstoragecollection#sync",
      "localstoragecollection#upd",
      "localstoragefactori",
      "localstoraget",
      "logger",
      "logic",
      "lt;abstract&gt",
      "lt;static&gt",
      "manag",
      "managedcontrol",
      "managedcontroller#addpermiss",
      "managedcontroller#candisplay",
      "managedcontroller#clearpermiss",
      "managedcontroller#initi",
      "managedcontroller#manageview",
      "managedcontroller#matchespermiss",
      "managedcontroller#permiss",
      "managedcontroller#remov",
      "managedcontroller#removeallview",
      "managedcontroller#removepermiss",
      "managedcontroller#rend",
      "managedcontroller#view",
      "manageview",
      "manual",
      "map",
      "markupbodyel",
      "markupfooterel",
      "markupheaderel",
      "match",
      "matchespermiss",
      "mediat",
      "member",
      "menu",
      "menu#rend",
      "messag",
      "method",
      "model",
      "modul",
      "module:present",
      "module:presentation~compon",
      "module:presentation~pagin",
      "mount",
      "move",
      "mv",
      "mvvm",
      "name",
      "namespac",
      "namespacedlocalstorag",
      "namespacedlocalstorageretriev",
      "natch),fal",
      "navig",
      "navigationmenu",
      "navigationmenu#rend",
      "need",
      "neg",
      "new",
      "next",
      "nextpag",
      "note",
      "notfic",
      "notif",
      "notificationcent",
      "notificationcenter#clearnotif",
      "notificationcenter#hidenotif",
      "notificationcenter#notif",
      "notificationcenter#rend",
      "notificationcenter#shownotif",
      "number",
      "object",
      "old",
      "on",
      "option",
      "oronhashchangeand",
      "overrid",
      "owniniti",
      "page",
      "page'support",
      "pagin",
      "paginatedcollect",
      "paginatedcollection#fetch",
      "paginatedcollection#firstpag",
      "paginatedcollection#gotopag",
      "paginatedcollection#lastpag",
      "paginatedcollection#nextpag",
      "paginatedcollection#previouspag",
      "paginatedcollection#refresh",
      "paginatedcollection#setcurrentpag",
      "paginatedcollection#setpages",
      "paginatedcollection#sync",
      "pagination.paginationfactori",
      "paginationfactori",
      "panel",
      "panel/dialog",
      "paramet",
      "patternth",
      "permiss",
      "place",
      "point",
      "pointbodi",
      "pointfoot",
      "pointstyl",
      "polling.inspir",
      "post",
      "pre",
      "preconfigur",
      "prefil",
      "prepend",
      "present",
      "presentation.abstractview",
      "presentation.colleagu",
      "presentation.component.abstracttoolbar",
      "presentation.component.alertdialogview",
      "presentation.component.articl",
      "presentation.component.article#addsect",
      "presentation.component.article#bodi",
      "presentation.component.article#clearsect",
      "presentation.component.article#foot",
      "presentation.component.article#head",
      "presentation.component.article#rend",
      "presentation.component.article#sect",
      "presentation.component.augmented.presentation.confirmationdialogview",
      "presentation.component.augmented.presentation.localstoraget",
      "presentation.component.automaticform",
      "presentation.component.automatict",
      "presentation.component.bigdatat",
      "presentation.component.card",
      "presentation.component.dialogview",
      "presentation.component.editablebigdatat",
      "presentation.component.editablelocalstoraget",
      "presentation.component.editablet",
      "presentation.component.foot",
      "presentation.component.hamburgermenu",
      "presentation.component.head",
      "presentation.component.header#rend",
      "presentation.component.header#subtitl",
      "presentation.component.header#titl",
      "presentation.component.menu",
      "presentation.component.menu#rend",
      "presentation.component.navigationmenu",
      "presentation.component.navigationmenu#rend",
      "presentation.component.notificationcent",
      "presentation.component.notificationcenter#clearnotif",
      "presentation.component.notificationcenter#hidenotif",
      "presentation.component.notificationcenter#notif",
      "presentation.component.notificationcenter#rend",
      "presentation.component.notificationcenter#shownotif",
      "presentation.component.spreadsheet",
      "presentation.component.toolbar",
      "presentation.confirmationdialogview",
      "presentation.decoratorview",
      "presentation.localstorag",
      "presentation.localstoragefactori",
      "presentation.localstoraget",
      "presentation.medi",
      "presentation.namespacedlocalstorag",
      "presentation.view",
      "presentation~compon",
      "presentation~pagin",
      "previou",
      "previouspag",
      "properi",
      "properti",
      "provid",
      "proxi",
      "readm",
      "real",
      "refresh",
      "regist",
      "registermedi",
      "registerstylesheet",
      "registr",
      "relat",
      "remov",
      "removeallview",
      "removepermiss",
      "render",
      "replac",
      "replacestylesheet",
      "requir",
      "rest",
      "restlogg",
      "restlogger#uri",
      "return",
      "rewritten",
      "rout",
      "router",
      "router#cleanup",
      "router#execut",
      "router#initi",
      "router#loadview",
      "router#navig",
      "router#rout",
      "router#starthistori",
      "safe",
      "save",
      "schema",
      "section",
      "secur",
      "see",
      "selectorsimport",
      "server",
      "set",
      "setcurrentbreadcrumb",
      "setcurrentpag",
      "setpages",
      "setup",
      "show",
      "shownotif",
      "side",
      "simpl",
      "simpli",
      "simular",
      "singl",
      "size",
      "small",
      "sort",
      "specifi",
      "spreadsheet",
      "spreadsheet.if",
      "start",
      "starthistori",
      "static",
      "storag",
      "style",
      "styledata",
      "stylesheet",
      "subscript",
      "subscriptionsa",
      "subscriptionscan",
      "subtitl",
      "support",
      "sync",
      "tabl",
      "templat",
      "templatedata",
      "thank",
      "thier",
      "titl",
      "toolbar",
      "tooldbar",
      "type",
      "ui",
      "up",
      "updat",
      "uri",
      "uri/json",
      "url",
      "us",
      "valid",
      "via",
      "view",
      "view.allow",
      "viewcontrol",
      "viewcontroller#addpermiss",
      "viewcontroller#candisplay",
      "viewcontroller#clearpermiss",
      "viewcontroller#initi",
      "viewcontroller#manageview",
      "viewcontroller#matchespermiss",
      "viewcontroller#permiss",
      "viewcontroller#remov",
      "viewcontroller#removeallview",
      "viewcontroller#removepermiss",
      "viewcontroller#rend",
      "viewcontroller#view",
      "viewel",
      "views.loos",
      "widget",
      "wire",
      "withcredenti",
      "without",
      "xhrfield",
      "xhrfields.withcredenti",
      "ye"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Augmented.js Next",
      "longname": "index",
      "name": "Augmented.js Next",
      "tags": "index",
      "summary": "Augmented.js Next Presentation - Simply Development.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_module.html": {
      "id": "list_module.html",
      "kind": "list",
      "title": "Modules",
      "longname": "list:module",
      "name": "Modules",
      "tags": "list:module",
      "summary": "All documented modules.",
      "description": "",
      "body": ""
    },
    "list_namespace.html": {
      "id": "list_namespace.html",
      "kind": "list",
      "title": "Namespaces",
      "longname": "list:namespace",
      "name": "Namespaces",
      "tags": "list:namespace",
      "summary": "All documented namespaces.",
      "description": "",
      "body": ""
    },
    "Application.html": {
      "id": "Application.html",
      "kind": "class",
      "title": "Application",
      "longname": "Application",
      "name": "Application",
      "tags": "Application",
      "summary": "",
      "description": "Presentation Application - extension of Augmented.ApplicationAdd registration of mediators to the application, breadcrumbs, and stylesheet registration",
      "body": ""
    },
    "Application.html#router": {
      "id": "Application.html#router",
      "kind": "member",
      "title": "router",
      "longname": "Application#router",
      "name": "router",
      "tags": "Application#router router",
      "summary": "",
      "description": "The router property of the application"
    },
    "Application.html#mediators": {
      "id": "Application.html#mediators",
      "kind": "member",
      "title": "mediators",
      "longname": "Application#mediators",
      "name": "mediators",
      "tags": "Application#mediators mediators",
      "summary": "",
      "description": "All Mediators"
    },
    "Application.html#stylesheets": {
      "id": "Application.html#stylesheets",
      "kind": "member",
      "title": "stylesheets",
      "longname": "Application#stylesheets",
      "name": "stylesheets",
      "tags": "Application#stylesheets stylesheets",
      "summary": "",
      "description": "All Stylesheets"
    },
    "Application.html#breadcrumbs": {
      "id": "Application.html#breadcrumbs",
      "kind": "member",
      "title": "breadcrumbs",
      "longname": "Application#breadcrumbs",
      "name": "breadcrumbs",
      "tags": "Application#breadcrumbs breadcrumbs",
      "summary": "",
      "description": "The breadcrumbs"
    },
    "Application.html#registerMediator": {
      "id": "Application.html#registerMediator",
      "kind": "function",
      "title": "registerMediator( mediator )",
      "longname": "Application#registerMediator",
      "name": "registerMediator",
      "tags": "Application#registerMediator registerMediator",
      "summary": "",
      "description": "Register a Mediator"
    },
    "Application.html#deregisterMediator": {
      "id": "Application.html#deregisterMediator",
      "kind": "function",
      "title": "deregisterMediator( mediator )",
      "longname": "Application#deregisterMediator",
      "name": "deregisterMediator",
      "tags": "Application#deregisterMediator deregisterMediator",
      "summary": "",
      "description": "Deregister a Mediator"
    },
    "Application.html#registerStylesheet": {
      "id": "Application.html#registerStylesheet",
      "kind": "function",
      "title": "registerStylesheet( stylesheet )",
      "longname": "Application#registerStylesheet",
      "name": "registerStylesheet",
      "tags": "Application#registerStylesheet registerStylesheet",
      "summary": "",
      "description": "Register a stylesheet"
    },
    "Application.html#deregisterStylesheet": {
      "id": "Application.html#deregisterStylesheet",
      "kind": "function",
      "title": "deregisterStylesheet( stylesheet )",
      "longname": "Application#deregisterStylesheet",
      "name": "deregisterStylesheet",
      "tags": "Application#deregisterStylesheet deregisterStylesheet",
      "summary": "",
      "description": "Deregister a stylesheet"
    },
    "Application.html#attachStylesheets": {
      "id": "Application.html#attachStylesheets",
      "kind": "function",
      "title": "attachStylesheets()",
      "longname": "Application#attachStylesheets",
      "name": "attachStylesheets",
      "tags": "Application#attachStylesheets attachStylesheets",
      "summary": "",
      "description": "Attach registered stylesheets to the DOM"
    },
    "Application.html#replaceStylesheets": {
      "id": "Application.html#replaceStylesheets",
      "kind": "function",
      "title": "replaceStylesheets()",
      "longname": "Application#replaceStylesheets",
      "name": "replaceStylesheets",
      "tags": "Application#replaceStylesheets replaceStylesheets",
      "summary": "",
      "description": "Replace stylesheets then attach registered stylesheets to the DOM"
    },
    "Application.html#setCurrentBreadcrumb": {
      "id": "Application.html#setCurrentBreadcrumb",
      "kind": "function",
      "title": "setCurrentBreadcrumb( uri, name )",
      "longname": "Application#setCurrentBreadcrumb",
      "name": "setCurrentBreadcrumb",
      "tags": "Application#setCurrentBreadcrumb setCurrentBreadcrumb",
      "summary": "",
      "description": "Sets the current breadcrumb"
    },
    "Application.html#getCurrentBreadcrumb": {
      "id": "Application.html#getCurrentBreadcrumb",
      "kind": "function",
      "title": "getCurrentBreadcrumb()",
      "longname": "Application#getCurrentBreadcrumb",
      "name": "getCurrentBreadcrumb",
      "tags": "Application#getCurrentBreadcrumb getCurrentBreadcrumb",
      "summary": "",
      "description": "Gets the current breadcrumb"
    },
    "Application.html#.initialize": {
      "id": "Application.html#.initialize",
      "kind": "function",
      "title": "&lt;static&gt; initialize()",
      "longname": "Application.initialize",
      "name": "initialize",
      "tags": "Application.initialize initialize",
      "summary": "",
      "description": "Initialize Event - adds any stylesheets registered"
    },
    "Collection.html": {
      "id": "Collection.html",
      "kind": "class",
      "title": "Collection",
      "longname": "Collection",
      "name": "Collection",
      "tags": "Collection",
      "summary": "",
      "description": "Collection Class",
      "body": ""
    },
    "Collection.html#sync": {
      "id": "Collection.html#sync",
      "kind": "function",
      "title": "sync()",
      "longname": "Collection#sync",
      "name": "sync",
      "tags": "Collection#sync sync",
      "summary": "",
      "description": "Sync collection data to bound REST call"
    },
    "LocalStorageCollection.html": {
      "id": "LocalStorageCollection.html",
      "kind": "class",
      "title": "LocalStorageCollection",
      "longname": "LocalStorageCollection",
      "name": "LocalStorageCollection",
      "tags": "LocalStorageCollection",
      "summary": "",
      "description": "A local storage-based Collection",
      "body": ""
    },
    "LocalStorageCollection.html#initialize": {
      "id": "LocalStorageCollection.html#initialize",
      "kind": "function",
      "title": "initialize( options )",
      "longname": "LocalStorageCollection#initialize",
      "name": "initialize",
      "tags": "LocalStorageCollection#initialize initialize",
      "summary": "",
      "description": "Initialize the model with needed wireing"
    },
    "LocalStorageCollection.html#init": {
      "id": "LocalStorageCollection.html#init",
      "kind": "function",
      "title": "init( options )",
      "longname": "LocalStorageCollection#init",
      "name": "init",
      "tags": "LocalStorageCollection#init init",
      "summary": "",
      "description": "Custom init method for the model (called at inititlize)"
    },
    "LocalStorageCollection.html#fetch": {
      "id": "LocalStorageCollection.html#fetch",
      "kind": "function",
      "title": "fetch( options )",
      "longname": "LocalStorageCollection#fetch",
      "name": "fetch",
      "tags": "LocalStorageCollection#fetch fetch",
      "summary": "",
      "description": "Fetch the collection"
    },
    "LocalStorageCollection.html#save": {
      "id": "LocalStorageCollection.html#save",
      "kind": "function",
      "title": "save( options )",
      "longname": "LocalStorageCollection#save",
      "name": "save",
      "tags": "LocalStorageCollection#save save",
      "summary": "",
      "description": "Save the collection"
    },
    "LocalStorageCollection.html#update": {
      "id": "LocalStorageCollection.html#update",
      "kind": "function",
      "title": "update( options )",
      "longname": "LocalStorageCollection#update",
      "name": "update",
      "tags": "LocalStorageCollection#update update",
      "summary": "",
      "description": "Update the collection"
    },
    "LocalStorageCollection.html#destroy": {
      "id": "LocalStorageCollection.html#destroy",
      "kind": "function",
      "title": "destroy( options )",
      "longname": "LocalStorageCollection#destroy",
      "name": "destroy",
      "tags": "LocalStorageCollection#destroy destroy",
      "summary": "",
      "description": "Destroy the collection"
    },
    "LocalStorageCollection.html#sync": {
      "id": "LocalStorageCollection.html#sync",
      "kind": "function",
      "title": "sync()",
      "longname": "LocalStorageCollection#sync",
      "name": "sync",
      "tags": "LocalStorageCollection#sync sync",
      "summary": "",
      "description": "Sync method for Collection"
    },
    "PaginatedCollection.html": {
      "id": "PaginatedCollection.html",
      "kind": "class",
      "title": "PaginatedCollection",
      "longname": "PaginatedCollection",
      "name": "PaginatedCollection",
      "tags": "PaginatedCollection",
      "summary": "",
      "description": "Paginated Collection Class - A Collection that handles pagination from client or server-side",
      "body": ""
    },
    "PaginatedCollection.html#setPageSize": {
      "id": "PaginatedCollection.html#setPageSize",
      "kind": "function",
      "title": "setPageSize( size )",
      "longname": "PaginatedCollection#setPageSize",
      "name": "setPageSize",
      "tags": "PaginatedCollection#setPageSize setPageSize",
      "summary": "",
      "description": "Sets the number of items in a page"
    },
    "PaginatedCollection.html#setCurrentPage": {
      "id": "PaginatedCollection.html#setCurrentPage",
      "kind": "function",
      "title": "setCurrentPage( page )",
      "longname": "PaginatedCollection#setCurrentPage",
      "name": "setCurrentPage",
      "tags": "PaginatedCollection#setCurrentPage setCurrentPage",
      "summary": "",
      "description": "Sets the current page"
    },
    "PaginatedCollection.html#fetch": {
      "id": "PaginatedCollection.html#fetch",
      "kind": "function",
      "title": "fetch()",
      "longname": "PaginatedCollection#fetch",
      "name": "fetch",
      "tags": "PaginatedCollection#fetch fetch",
      "summary": "",
      "description": "Collection.fetch - rewritten fetch method from Backbone.Collection.fetch"
    },
    "PaginatedCollection.html#nextPage": {
      "id": "PaginatedCollection.html#nextPage",
      "kind": "function",
      "title": "nextPage()",
      "longname": "PaginatedCollection#nextPage",
      "name": "nextPage",
      "tags": "PaginatedCollection#nextPage nextPage",
      "summary": "",
      "description": "Moves to the next page"
    },
    "PaginatedCollection.html#previousPage": {
      "id": "PaginatedCollection.html#previousPage",
      "kind": "function",
      "title": "previousPage()",
      "longname": "PaginatedCollection#previousPage",
      "name": "previousPage",
      "tags": "PaginatedCollection#previousPage previousPage",
      "summary": "",
      "description": "Moves to the previous page"
    },
    "PaginatedCollection.html#goToPage": {
      "id": "PaginatedCollection.html#goToPage",
      "kind": "function",
      "title": "goToPage( page )",
      "longname": "PaginatedCollection#goToPage",
      "name": "goToPage",
      "tags": "PaginatedCollection#goToPage goToPage",
      "summary": "",
      "description": "Goes to page"
    },
    "PaginatedCollection.html#firstPage": {
      "id": "PaginatedCollection.html#firstPage",
      "kind": "function",
      "title": "firstPage()",
      "longname": "PaginatedCollection#firstPage",
      "name": "firstPage",
      "tags": "PaginatedCollection#firstPage firstPage",
      "summary": "",
      "description": "Moves to the first page"
    },
    "PaginatedCollection.html#lastPage": {
      "id": "PaginatedCollection.html#lastPage",
      "kind": "function",
      "title": "lastPage()",
      "longname": "PaginatedCollection#lastPage",
      "name": "lastPage",
      "tags": "PaginatedCollection#lastPage lastPage",
      "summary": "",
      "description": "Moves to the last page"
    },
    "PaginatedCollection.html#refresh": {
      "id": "PaginatedCollection.html#refresh",
      "kind": "function",
      "title": "refresh()",
      "longname": "PaginatedCollection#refresh",
      "name": "refresh",
      "tags": "PaginatedCollection#refresh refresh",
      "summary": "",
      "description": "Refreshes the collection"
    },
    "PaginatedCollection.html#sync": {
      "id": "PaginatedCollection.html#sync",
      "kind": "function",
      "title": "sync()",
      "longname": "PaginatedCollection#sync",
      "name": "sync",
      "tags": "PaginatedCollection#sync sync",
      "summary": "",
      "description": "Sync collection data to bound REST call"
    },
    "ManagedController.html": {
      "id": "ManagedController.html",
      "kind": "class",
      "title": "ManagedController",
      "longname": "ManagedController",
      "name": "ManagedController",
      "tags": "ManagedController",
      "summary": "",
      "description": "A managed controller that automatically sets up the components",
      "body": ""
    },
    "ManagedController.html#views": {
      "id": "ManagedController.html#views",
      "kind": "member",
      "title": "views",
      "longname": "ManagedController#views",
      "name": "views",
      "tags": "ManagedController#views views",
      "summary": "",
      "description": "getViews - get the instances of the views known"
    },
    "ManagedController.html#permissions": {
      "id": "ManagedController.html#permissions",
      "kind": "member",
      "title": "permissions",
      "longname": "ManagedController#permissions",
      "name": "permissions",
      "tags": "ManagedController#permissions permissions",
      "summary": "",
      "description": "Sets the permissions to the controller"
    },
    "ManagedController.html#initialize": {
      "id": "ManagedController.html#initialize",
      "kind": "function",
      "title": "initialize()",
      "longname": "ManagedController#initialize",
      "name": "initialize",
      "tags": "ManagedController#initialize initialize",
      "summary": "",
      "description": "initialize - an API for the start of the controller. It is intended to add initializers here"
    },
    "ManagedController.html#render": {
      "id": "ManagedController.html#render",
      "kind": "function",
      "title": "render()",
      "longname": "ManagedController#render",
      "name": "render",
      "tags": "ManagedController#render render",
      "summary": "",
      "description": "render - an API for the render of the controller. It is intended to add view render methods here"
    },
    "ManagedController.html#remove": {
      "id": "ManagedController.html#remove",
      "kind": "function",
      "title": "remove()",
      "longname": "ManagedController#remove",
      "name": "remove",
      "tags": "ManagedController#remove remove",
      "summary": "",
      "description": "remove - an API for the end of the controller. It is intended to add view removal and cleanup here"
    },
    "ManagedController.html#manageView": {
      "id": "ManagedController.html#manageView",
      "kind": "function",
      "title": "manageView( view )",
      "longname": "ManagedController#manageView",
      "name": "manageView",
      "tags": "ManagedController#manageView manageView",
      "summary": "",
      "description": "manageView - manage a view"
    },
    "ManagedController.html#removeAllViews": {
      "id": "ManagedController.html#removeAllViews",
      "kind": "function",
      "title": "removeAllViews()",
      "longname": "ManagedController#removeAllViews",
      "name": "removeAllViews",
      "tags": "ManagedController#removeAllViews removeAllViews",
      "summary": "",
      "description": "removeAllViews - cleans up all views known (calling thier remove method)"
    },
    "ManagedController.html#addPermission": {
      "id": "ManagedController.html#addPermission",
      "kind": "function",
      "title": "addPermission( permission, negative )",
      "longname": "ManagedController#addPermission",
      "name": "addPermission",
      "tags": "ManagedController#addPermission addPermission",
      "summary": "",
      "description": "Adds a permission to the controller"
    },
    "ManagedController.html#removePermission": {
      "id": "ManagedController.html#removePermission",
      "kind": "function",
      "title": "removePermission( permission, negative )",
      "longname": "ManagedController#removePermission",
      "name": "removePermission",
      "tags": "ManagedController#removePermission removePermission",
      "summary": "",
      "description": "Removes a permission to the controller"
    },
    "ManagedController.html#clearPermissions": {
      "id": "ManagedController.html#clearPermissions",
      "kind": "function",
      "title": "clearPermissions()",
      "longname": "ManagedController#clearPermissions",
      "name": "clearPermissions",
      "tags": "ManagedController#clearPermissions clearPermissions",
      "summary": "",
      "description": "Clears the permissions in the controller"
    },
    "ManagedController.html#matchesPermission": {
      "id": "ManagedController.html#matchesPermission",
      "kind": "function",
      "title": "matchesPermission( match, negative )",
      "longname": "ManagedController#matchesPermission",
      "name": "matchesPermission",
      "tags": "ManagedController#matchesPermission matchesPermission",
      "summary": "",
      "description": "Matches a permission in the controller"
    },
    "ManagedController.html#canDisplay": {
      "id": "ManagedController.html#canDisplay",
      "kind": "function",
      "title": "canDisplay()",
      "longname": "ManagedController#canDisplay",
      "name": "canDisplay",
      "tags": "ManagedController#canDisplay canDisplay",
      "summary": "",
      "description": "Callback to return if this controller can display"
    },
    "ViewController.html": {
      "id": "ViewController.html",
      "kind": "class",
      "title": "ViewController",
      "longname": "ViewController",
      "name": "ViewController",
      "tags": "ViewController",
      "summary": "",
      "description": "A controller to handle a group of views. The api is handled simular to views for use in a router.",
      "body": ""
    },
    "ViewController.html#views": {
      "id": "ViewController.html#views",
      "kind": "member",
      "title": "views",
      "longname": "ViewController#views",
      "name": "views",
      "tags": "ViewController#views views",
      "summary": "",
      "description": "getViews - get the instances of the views known"
    },
    "ViewController.html#permissions": {
      "id": "ViewController.html#permissions",
      "kind": "member",
      "title": "permissions",
      "longname": "ViewController#permissions",
      "name": "permissions",
      "tags": "ViewController#permissions permissions",
      "summary": "",
      "description": "Gets the permissions to the controllerReturn format: { include: [], exclude: [] }"
    },
    "ViewController.html#initialize": {
      "id": "ViewController.html#initialize",
      "kind": "function",
      "title": "initialize()",
      "longname": "ViewController#initialize",
      "name": "initialize",
      "tags": "ViewController#initialize initialize",
      "summary": "",
      "description": "initialize - an API for the start of the controller. It is intended to add initializers here"
    },
    "ViewController.html#render": {
      "id": "ViewController.html#render",
      "kind": "function",
      "title": "render()",
      "longname": "ViewController#render",
      "name": "render",
      "tags": "ViewController#render render",
      "summary": "",
      "description": "render - an API for the render of the controller. It is intended to add view render methods here"
    },
    "ViewController.html#remove": {
      "id": "ViewController.html#remove",
      "kind": "function",
      "title": "remove()",
      "longname": "ViewController#remove",
      "name": "remove",
      "tags": "ViewController#remove remove",
      "summary": "",
      "description": "remove - an API for the end of the controller. It is intended to add view removal and cleanup here"
    },
    "ViewController.html#manageView": {
      "id": "ViewController.html#manageView",
      "kind": "function",
      "title": "manageView( view )",
      "longname": "ViewController#manageView",
      "name": "manageView",
      "tags": "ViewController#manageView manageView",
      "summary": "",
      "description": "manageView - manage a view"
    },
    "ViewController.html#removeAllViews": {
      "id": "ViewController.html#removeAllViews",
      "kind": "function",
      "title": "removeAllViews()",
      "longname": "ViewController#removeAllViews",
      "name": "removeAllViews",
      "tags": "ViewController#removeAllViews removeAllViews",
      "summary": "",
      "description": "removeAllViews - cleans up all views known (calling thier remove method)"
    },
    "ViewController.html#addPermission": {
      "id": "ViewController.html#addPermission",
      "kind": "function",
      "title": "addPermission( permission, negative )",
      "longname": "ViewController#addPermission",
      "name": "addPermission",
      "tags": "ViewController#addPermission addPermission",
      "summary": "",
      "description": "Adds a permission to the controller"
    },
    "ViewController.html#removePermission": {
      "id": "ViewController.html#removePermission",
      "kind": "function",
      "title": "removePermission( permission, negative )",
      "longname": "ViewController#removePermission",
      "name": "removePermission",
      "tags": "ViewController#removePermission removePermission",
      "summary": "",
      "description": "Removes a permission to the controller"
    },
    "ViewController.html#clearPermissions": {
      "id": "ViewController.html#clearPermissions",
      "kind": "function",
      "title": "clearPermissions()",
      "longname": "ViewController#clearPermissions",
      "name": "clearPermissions",
      "tags": "ViewController#clearPermissions clearPermissions",
      "summary": "",
      "description": "Clears the permissions in the controller"
    },
    "ViewController.html#matchesPermission": {
      "id": "ViewController.html#matchesPermission",
      "kind": "function",
      "title": "matchesPermission( match, negative )",
      "longname": "ViewController#matchesPermission",
      "name": "matchesPermission",
      "tags": "ViewController#matchesPermission matchesPermission",
      "summary": "",
      "description": "Matches a permission in the controller"
    },
    "ViewController.html#canDisplay": {
      "id": "ViewController.html#canDisplay",
      "kind": "function",
      "title": "canDisplay()",
      "longname": "ViewController#canDisplay",
      "name": "canDisplay",
      "tags": "ViewController#canDisplay canDisplay",
      "summary": "",
      "description": "Callback to return if this controller can display"
    },
    "Dom.html": {
      "id": "Dom.html",
      "kind": "class",
      "title": "Dom",
      "longname": "Dom",
      "name": "Dom",
      "tags": "Dom",
      "summary": "",
      "description": "DOM related functions",
      "body": ""
    },
    "History.html": {
      "id": "History.html",
      "kind": "class",
      "title": "History",
      "longname": "History",
      "name": "History",
      "tags": "History",
      "summary": "",
      "description": "Handles cross-browser history management, based on eitherpushState and real URLs, oronhashchangeand URL fragments. If the browser supports neither (old IE, natch),falls back to polling.Inspired By Backbone.js - Thank you! 😍",
      "body": ""
    },
    "RestLogger.html": {
      "id": "RestLogger.html",
      "kind": "class",
      "title": "RestLogger",
      "longname": "RestLogger",
      "name": "RestLogger",
      "tags": "RestLogger",
      "summary": "",
      "description": "REST Logger - *requires override of _logMe",
      "body": ""
    },
    "RestLogger.html#uri": {
      "id": "RestLogger.html#uri",
      "kind": "member",
      "title": "uri",
      "longname": "RestLogger#uri",
      "name": "uri",
      "tags": "RestLogger#uri uri",
      "summary": "",
      "description": ""
    },
    "Model.html": {
      "id": "Model.html",
      "kind": "class",
      "title": "Model",
      "longname": "Model",
      "name": "Model",
      "tags": "Model",
      "summary": "",
      "description": "Model Supports: REST Validation and Schemas Security",
      "body": ""
    },
    "Pagination.PaginationFactory.html": {
      "id": "Pagination.PaginationFactory.html",
      "kind": "class",
      "title": "PaginationFactory",
      "longname": "Pagination.PaginationFactory",
      "name": "PaginationFactory",
      "tags": "Pagination.PaginationFactory PaginationFactory",
      "summary": "",
      "description": "Pagination factory for returning pagination collections of an API type",
      "body": ""
    },
    "Router.html": {
      "id": "Router.html",
      "kind": "class",
      "title": "Router",
      "longname": "Router",
      "name": "Router",
      "tags": "Router",
      "summary": "",
      "description": "Routers map faux-URLs to actions, and fire events when routes arematched. Creating a new one sets its routes hash, if not set statically.",
      "body": ""
    },
    "Router.html#loadView": {
      "id": "Router.html#loadView",
      "kind": "function",
      "title": "loadView( view )",
      "longname": "Router#loadView",
      "name": "loadView",
      "tags": "Router#loadView loadView",
      "summary": "",
      "description": "Load a view safely and remove the last view by calling cleanup, then remove"
    },
    "Router.html#cleanup": {
      "id": "Router.html#cleanup",
      "kind": "function",
      "title": "cleanup()",
      "longname": "Router#cleanup",
      "name": "cleanup",
      "tags": "Router#cleanup cleanup",
      "summary": "",
      "description": "Remove the last view by calling cleanup, then remove"
    },
    "Router.html#initialize": {
      "id": "Router.html#initialize",
      "kind": "function",
      "title": "initialize()",
      "longname": "Router#initialize",
      "name": "initialize",
      "tags": "Router#initialize initialize",
      "summary": "",
      "description": "Initialize is an empty function by default. Override it with your owninitialization logic."
    },
    "Router.html#route": {
      "id": "Router.html#route",
      "kind": "function",
      "title": "route( route, name, callback )",
      "longname": "Router#route",
      "name": "route",
      "tags": "Router#route route",
      "summary": "",
      "description": "Manually bind a single named route to a callback."
    },
    "Router.html#execute": {
      "id": "Router.html#execute",
      "kind": "function",
      "title": "execute( callback, args )",
      "longname": "Router#execute",
      "name": "execute",
      "tags": "Router#execute execute",
      "summary": "",
      "description": "Execute a route handler with the provided parameters. This is anexcellent place to do pre-route setup or post-route cleanup."
    },
    "Router.html#navigate": {
      "id": "Router.html#navigate",
      "kind": "function",
      "title": "navigate( fragment, options )",
      "longname": "Router#navigate",
      "name": "navigate",
      "tags": "Router#navigate navigate",
      "summary": "",
      "description": "Simple proxy to history to save a fragment into the history."
    },
    "Router.html#startHistory": {
      "id": "Router.html#startHistory",
      "kind": "function",
      "title": "startHistory( options )",
      "longname": "Router#startHistory",
      "name": "startHistory",
      "tags": "Router#startHistory startHistory",
      "summary": "",
      "description": "Start the history using browser History API"
    },
    "Presentation.LocalStorage.html": {
      "id": "Presentation.LocalStorage.html",
      "kind": "class",
      "title": "LocalStorage",
      "longname": "Presentation.LocalStorage",
      "name": "LocalStorage",
      "tags": "Presentation.LocalStorage LocalStorage",
      "summary": "",
      "description": "Local Storage API - returned from LocalStorageFactory",
      "body": ""
    },
    "Presentation.LocalStorageFactory.html": {
      "id": "Presentation.LocalStorageFactory.html",
      "kind": "class",
      "title": "LocalStorageFactory",
      "longname": "Presentation.LocalStorageFactory",
      "name": "LocalStorageFactory",
      "tags": "Presentation.LocalStorageFactory LocalStorageFactory",
      "summary": "",
      "description": "Augmented.LocalStorageFactoryRetrieve a local storage Object",
      "body": ""
    },
    "Presentation.NamespacedLocalStorage.html": {
      "id": "Presentation.NamespacedLocalStorage.html",
      "kind": "class",
      "title": "NamespacedLocalStorage",
      "longname": "Presentation.NamespacedLocalStorage",
      "name": "NamespacedLocalStorage",
      "tags": "Presentation.NamespacedLocalStorage NamespacedLocalStorage",
      "summary": "",
      "description": "NamespacedLocalStorageRetrieve a local storage Object",
      "body": ""
    },
    "Presentation.AbstractView.html": {
      "id": "Presentation.AbstractView.html",
      "kind": "class",
      "title": "AbstractView",
      "longname": "Presentation.AbstractView",
      "name": "AbstractView",
      "tags": "Presentation.AbstractView AbstractView",
      "summary": "",
      "description": "Aubstract View - the base view for handlng display in the MV* Concept",
      "body": ""
    },
    "Presentation.Component.Article.html": {
      "id": "Presentation.Component.Article.html",
      "kind": "class",
      "title": "Article",
      "longname": "Presentation.Component.Article",
      "name": "Article",
      "tags": "Presentation.Component.Article Component.Article Article",
      "summary": "",
      "description": "An article class for setting up a 'page'Supported options are: name - The name of the article viewel - The mount pointstyle - The style classheader - The header markupheaderEl - The header mount pointfooter - The footer markupfooterEl - The footer mount pointbody - The body markupbodyEl - The body mount point (will generate a div)sections - array of sections to prefill (see addSection API for format)",
      "body": ""
    },
    "Presentation.Component.Article.html#header": {
      "id": "Presentation.Component.Article.html#header",
      "kind": "member",
      "title": "header",
      "longname": "Presentation.Component.Article#header",
      "name": "header",
      "tags": "Presentation.Component.Article#header Component.Article#header Article#header header",
      "summary": "",
      "description": "Header property"
    },
    "Presentation.Component.Article.html#footer": {
      "id": "Presentation.Component.Article.html#footer",
      "kind": "member",
      "title": "footer",
      "longname": "Presentation.Component.Article#footer",
      "name": "footer",
      "tags": "Presentation.Component.Article#footer Component.Article#footer Article#footer footer",
      "summary": "",
      "description": "Footer for the article"
    },
    "Presentation.Component.Article.html#body": {
      "id": "Presentation.Component.Article.html#body",
      "kind": "member",
      "title": "body",
      "longname": "Presentation.Component.Article#body",
      "name": "body",
      "tags": "Presentation.Component.Article#body Component.Article#body Article#body body",
      "summary": "",
      "description": "The body content of the card (supports HTML)"
    },
    "Presentation.Component.Article.html#sections": {
      "id": "Presentation.Component.Article.html#sections",
      "kind": "member",
      "title": "sections",
      "longname": "Presentation.Component.Article#sections",
      "name": "sections",
      "tags": "Presentation.Component.Article#sections Component.Article#sections Article#sections sections",
      "summary": "",
      "description": "The section array"
    },
    "Presentation.Component.Article.html#addSection": {
      "id": "Presentation.Component.Article.html#addSection",
      "kind": "function",
      "title": "addSection( section )",
      "longname": "Presentation.Component.Article#addSection",
      "name": "addSection",
      "tags": "Presentation.Component.Article#addSection Component.Article#addSection Article#addSection addSection",
      "summary": "",
      "description": "Add a section object to the article"
    },
    "Presentation.Component.Article.html#clearSections": {
      "id": "Presentation.Component.Article.html#clearSections",
      "kind": "function",
      "title": "clearSections()",
      "longname": "Presentation.Component.Article#clearSections",
      "name": "clearSections",
      "tags": "Presentation.Component.Article#clearSections Component.Article#clearSections Article#clearSections clearSections",
      "summary": "",
      "description": "Clear the sections"
    },
    "Presentation.Component.Article.html#render": {
      "id": "Presentation.Component.Article.html#render",
      "kind": "function",
      "title": "render()",
      "longname": "Presentation.Component.Article#render",
      "name": "render",
      "tags": "Presentation.Component.Article#render Component.Article#render Article#render render",
      "summary": "",
      "description": "render - render the article"
    },
    "Presentation.Component.Card.html": {
      "id": "Presentation.Component.Card.html",
      "kind": "class",
      "title": "Card",
      "longname": "Presentation.Component.Card",
      "name": "Card",
      "tags": "Presentation.Component.Card Component.Card Card",
      "summary": "",
      "description": "A card view - simple panel/dialog-like panel",
      "body": ""
    },
    "Presentation.Component.AlertDialogView.html": {
      "id": "Presentation.Component.AlertDialogView.html",
      "kind": "class",
      "title": "AlertDialogView",
      "longname": "Presentation.Component.AlertDialogView",
      "name": "AlertDialogView",
      "tags": "Presentation.Component.AlertDialogView Component.AlertDialogView AlertDialogView",
      "summary": "",
      "description": "A automatic alert dialog view - creates a dialog with cancel button and a message",
      "body": ""
    },
    "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html": {
      "id": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView.html",
      "kind": "class",
      "title": "ConfirmationDialogView",
      "longname": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView",
      "name": "ConfirmationDialogView",
      "tags": "Presentation.Component.Augmented.Presentation.ConfirmationDialogView Component.Augmented.Presentation.ConfirmationDialogView Augmented.Presentation.ConfirmationDialogView Presentation.ConfirmationDialogView ConfirmationDialogView",
      "summary": "",
      "description": "A automatic comfirmation dialog view - creates a dialog with yes no buttons",
      "body": ""
    },
    "Presentation.Component.DialogView.html": {
      "id": "Presentation.Component.DialogView.html",
      "kind": "class",
      "title": "DialogView",
      "longname": "Presentation.Component.DialogView",
      "name": "DialogView",
      "tags": "Presentation.Component.DialogView Component.DialogView DialogView",
      "summary": "",
      "description": "A automatic dialog view - creates a dialog with simple configurations to customize",
      "body": ""
    },
    "Presentation.Component.Footer.html": {
      "id": "Presentation.Component.Footer.html",
      "kind": "class",
      "title": "Footer",
      "longname": "Presentation.Component.Footer",
      "name": "Footer",
      "tags": "Presentation.Component.Footer Component.Footer Footer",
      "summary": "",
      "description": "A Footer Component",
      "body": ""
    },
    "Presentation.Component.AutomaticForm.html": {
      "id": "Presentation.Component.AutomaticForm.html",
      "kind": "class",
      "title": "AutomaticForm",
      "longname": "Presentation.Component.AutomaticForm",
      "name": "AutomaticForm",
      "tags": "Presentation.Component.AutomaticForm Component.AutomaticForm AutomaticForm",
      "summary": "",
      "description": "A automatic form view created from a JSON Schema",
      "body": ""
    },
    "Presentation.Component.Header.html": {
      "id": "Presentation.Component.Header.html",
      "kind": "class",
      "title": "Header",
      "longname": "Presentation.Component.Header",
      "name": "Header",
      "tags": "Presentation.Component.Header Component.Header Header",
      "summary": "",
      "description": "A Component Manager",
      "body": ""
    },
    "Presentation.Component.Header.html#title": {
      "id": "Presentation.Component.Header.html#title",
      "kind": "member",
      "title": "title",
      "longname": "Presentation.Component.Header#title",
      "name": "title",
      "tags": "Presentation.Component.Header#title Component.Header#title Header#title title",
      "summary": "",
      "description": ""
    },
    "Presentation.Component.Header.html#subTitle": {
      "id": "Presentation.Component.Header.html#subTitle",
      "kind": "member",
      "title": "subTitle",
      "longname": "Presentation.Component.Header#subTitle",
      "name": "subTitle",
      "tags": "Presentation.Component.Header#subTitle Component.Header#subTitle Header#subTitle subTitle",
      "summary": "",
      "description": ""
    },
    "Presentation.Component.Header.html#render": {
      "id": "Presentation.Component.Header.html#render",
      "kind": "function",
      "title": "render()",
      "longname": "Presentation.Component.Header#render",
      "name": "render",
      "tags": "Presentation.Component.Header#render Component.Header#render Header#render render",
      "summary": "",
      "description": "Render the Header"
    },
    "Presentation.Component.HamburgerMenu.html": {
      "id": "Presentation.Component.HamburgerMenu.html",
      "kind": "class",
      "title": "HamburgerMenu",
      "longname": "Presentation.Component.HamburgerMenu",
      "name": "HamburgerMenu",
      "tags": "Presentation.Component.HamburgerMenu Component.HamburgerMenu HamburgerMenu",
      "summary": "",
      "description": "A Hamburger Menu View",
      "body": ""
    },
    "Presentation.Component.Menu.html": {
      "id": "Presentation.Component.Menu.html",
      "kind": "class",
      "title": "Menu",
      "longname": "Presentation.Component.Menu",
      "name": "Menu",
      "tags": "Presentation.Component.Menu Component.Menu Menu",
      "summary": "",
      "description": "A Menu",
      "body": ""
    },
    "Presentation.Component.Menu.html#render": {
      "id": "Presentation.Component.Menu.html#render",
      "kind": "function",
      "title": "render()",
      "longname": "Presentation.Component.Menu#render",
      "name": "render",
      "tags": "Presentation.Component.Menu#render Component.Menu#render Menu#render render",
      "summary": "",
      "description": "Renders the Menu"
    },
    "Presentation.Component.NavigationMenu.html": {
      "id": "Presentation.Component.NavigationMenu.html",
      "kind": "class",
      "title": "NavigationMenu",
      "longname": "Presentation.Component.NavigationMenu",
      "name": "NavigationMenu",
      "tags": "Presentation.Component.NavigationMenu Component.NavigationMenu NavigationMenu",
      "summary": "",
      "description": "A Navigation Menu",
      "body": ""
    },
    "Presentation.Component.NavigationMenu.html#render": {
      "id": "Presentation.Component.NavigationMenu.html#render",
      "kind": "function",
      "title": "render()",
      "longname": "Presentation.Component.NavigationMenu#render",
      "name": "render",
      "tags": "Presentation.Component.NavigationMenu#render Component.NavigationMenu#render NavigationMenu#render render",
      "summary": "",
      "description": "Renders the Menu"
    },
    "Presentation.Component.NotificationCenter.html": {
      "id": "Presentation.Component.NotificationCenter.html",
      "kind": "class",
      "title": "NotificationCenter",
      "longname": "Presentation.Component.NotificationCenter",
      "name": "NotificationCenter",
      "tags": "Presentation.Component.NotificationCenter Component.NotificationCenter NotificationCenter",
      "summary": "",
      "description": "A Notfication Center Component",
      "body": ""
    },
    "Presentation.Component.NotificationCenter.html#notifications": {
      "id": "Presentation.Component.NotificationCenter.html#notifications",
      "kind": "member",
      "title": "notifications",
      "longname": "Presentation.Component.NotificationCenter#notifications",
      "name": "notifications",
      "tags": "Presentation.Component.NotificationCenter#notifications Component.NotificationCenter#notifications NotificationCenter#notifications notifications",
      "summary": "",
      "description": ""
    },
    "Presentation.Component.NotificationCenter.html#showNotification": {
      "id": "Presentation.Component.NotificationCenter.html#showNotification",
      "kind": "function",
      "title": "showNotification()",
      "longname": "Presentation.Component.NotificationCenter#showNotification",
      "name": "showNotification",
      "tags": "Presentation.Component.NotificationCenter#showNotification Component.NotificationCenter#showNotification NotificationCenter#showNotification showNotification",
      "summary": "",
      "description": "Show the NotificationCenter"
    },
    "Presentation.Component.NotificationCenter.html#hideNotification": {
      "id": "Presentation.Component.NotificationCenter.html#hideNotification",
      "kind": "function",
      "title": "hideNotification()",
      "longname": "Presentation.Component.NotificationCenter#hideNotification",
      "name": "hideNotification",
      "tags": "Presentation.Component.NotificationCenter#hideNotification Component.NotificationCenter#hideNotification NotificationCenter#hideNotification hideNotification",
      "summary": "",
      "description": "Hide the NotificationCenter"
    },
    "Presentation.Component.NotificationCenter.html#clearNotifications": {
      "id": "Presentation.Component.NotificationCenter.html#clearNotifications",
      "kind": "function",
      "title": "clearNotifications()",
      "longname": "Presentation.Component.NotificationCenter#clearNotifications",
      "name": "clearNotifications",
      "tags": "Presentation.Component.NotificationCenter#clearNotifications Component.NotificationCenter#clearNotifications NotificationCenter#clearNotifications clearNotifications",
      "summary": "",
      "description": "Clear the NotificationCenter"
    },
    "Presentation.Component.NotificationCenter.html#render": {
      "id": "Presentation.Component.NotificationCenter.html#render",
      "kind": "function",
      "title": "render()",
      "longname": "Presentation.Component.NotificationCenter#render",
      "name": "render",
      "tags": "Presentation.Component.NotificationCenter#render Component.NotificationCenter#render NotificationCenter#render render",
      "summary": "",
      "description": "Renders the Menu"
    },
    "Presentation.Component.AutomaticTable.html": {
      "id": "Presentation.Component.AutomaticTable.html",
      "kind": "class",
      "title": "AutomaticTable",
      "longname": "Presentation.Component.AutomaticTable",
      "name": "AutomaticTable",
      "tags": "Presentation.Component.AutomaticTable Component.AutomaticTable AutomaticTable",
      "summary": "",
      "description": "AutomaticTableCreates a table automatically via a schema for defintion and a uri/json for data",
      "body": ""
    },
    "Presentation.Component.BigDataTable.html": {
      "id": "Presentation.Component.BigDataTable.html",
      "kind": "class",
      "title": "BigDataTable",
      "longname": "Presentation.Component.BigDataTable",
      "name": "BigDataTable",
      "tags": "Presentation.Component.BigDataTable Component.BigDataTable BigDataTable",
      "summary": "",
      "description": "Instance class preconfigured for sorting and pagination",
      "body": ""
    },
    "Presentation.Component.EditableBigDataTable.html": {
      "id": "Presentation.Component.EditableBigDataTable.html",
      "kind": "class",
      "title": "EditableBigDataTable",
      "longname": "Presentation.Component.EditableBigDataTable",
      "name": "EditableBigDataTable",
      "tags": "Presentation.Component.EditableBigDataTable Component.EditableBigDataTable EditableBigDataTable",
      "summary": "",
      "description": "Instance class preconfigured for sorting and pagination",
      "body": ""
    },
    "Presentation.Component.EditableLocalStorageTable.html": {
      "id": "Presentation.Component.EditableLocalStorageTable.html",
      "kind": "class",
      "title": "EditableLocalStorageTable",
      "longname": "Presentation.Component.EditableLocalStorageTable",
      "name": "EditableLocalStorageTable",
      "tags": "Presentation.Component.EditableLocalStorageTable Component.EditableLocalStorageTable EditableLocalStorageTable",
      "summary": "",
      "description": "Instance class preconfigured for editing, sorting, from local storage",
      "body": ""
    },
    "Presentation.Component.EditableTable.html": {
      "id": "Presentation.Component.EditableTable.html",
      "kind": "class",
      "title": "EditableTable",
      "longname": "Presentation.Component.EditableTable",
      "name": "EditableTable",
      "tags": "Presentation.Component.EditableTable Component.EditableTable EditableTable",
      "summary": "",
      "description": "Instance class preconfigured for editing",
      "body": ""
    },
    "Presentation.Component.Augmented.Presentation.LocalStorageTable.html": {
      "id": "Presentation.Component.Augmented.Presentation.LocalStorageTable.html",
      "kind": "class",
      "title": "LocalStorageTable",
      "longname": "Presentation.Component.Augmented.Presentation.LocalStorageTable",
      "name": "LocalStorageTable",
      "tags": "Presentation.Component.Augmented.Presentation.LocalStorageTable Component.Augmented.Presentation.LocalStorageTable Augmented.Presentation.LocalStorageTable Presentation.LocalStorageTable LocalStorageTable",
      "summary": "",
      "description": "Instance class preconfigured for local storage-based table",
      "body": ""
    },
    "Presentation.Component.Spreadsheet.html": {
      "id": "Presentation.Component.Spreadsheet.html",
      "kind": "class",
      "title": "Spreadsheet",
      "longname": "Presentation.Component.Spreadsheet",
      "name": "Spreadsheet",
      "tags": "Presentation.Component.Spreadsheet Component.Spreadsheet Spreadsheet",
      "summary": "",
      "description": "Instance class preconfigured for editing for use as a Spreadsheet.If a propery for length is not specified, it will buffer 10 lines for editing.",
      "body": ""
    },
    "Presentation.Component.AbstractToolbar.html": {
      "id": "Presentation.Component.AbstractToolbar.html",
      "kind": "class",
      "title": "&lt;abstract&gt; AbstractToolbar",
      "longname": "Presentation.Component.AbstractToolbar",
      "name": "AbstractToolbar",
      "tags": "Presentation.Component.AbstractToolbar Component.AbstractToolbar AbstractToolbar",
      "summary": "",
      "description": "An abstract tooldbar Component, designed to be extended",
      "body": ""
    },
    "Presentation.Component.Toolbar.html": {
      "id": "Presentation.Component.Toolbar.html",
      "kind": "class",
      "title": "Toolbar",
      "longname": "Presentation.Component.Toolbar",
      "name": "Toolbar",
      "tags": "Presentation.Component.Toolbar Component.Toolbar Toolbar",
      "summary": "",
      "description": "A Toolbar View",
      "body": ""
    },
    "Presentation.DecoratorView.html": {
      "id": "Presentation.DecoratorView.html",
      "kind": "class",
      "title": "DecoratorView",
      "longname": "Presentation.DecoratorView",
      "name": "DecoratorView",
      "tags": "Presentation.DecoratorView DecoratorView",
      "summary": "",
      "description": "DecoratorViewAn MVVM view designed around decorating the DOM with bindings.This concept is designed to decouple the view from the backend contract.Although this is achieved via views in general, the idea is: As a Javascript Developer, I'd like the ability to decorate HTML and control view rendering without the use of CSS selectorsImportant to note: This view gives up it's template and events!This is because all events and templates are used on the DOM directly.To add custom events, use customEvents instead of 'events'supported annotations: data-clickdata-functiondata-styledata-append-templatedata-prepend-template",
      "body": ""
    },
    "Presentation.Colleague.html": {
      "id": "Presentation.Colleague.html",
      "kind": "class",
      "title": "Colleague",
      "longname": "Presentation.Colleague",
      "name": "Colleague",
      "tags": "Presentation.Colleague Colleague",
      "summary": "",
      "description": "Colleague View - The 'child' view.Allow to define convention-based subscriptionsas an 'subscriptions' hash on a view. Subscriptionscan then be easily setup and cleaned.",
      "body": ""
    },
    "Presentation.Mediator.html": {
      "id": "Presentation.Mediator.html",
      "kind": "class",
      "title": "Mediator",
      "longname": "Presentation.Mediator",
      "name": "Mediator",
      "tags": "Presentation.Mediator Mediator",
      "summary": "",
      "description": "Mediator View - The mediator in the Mediator PatternThe mediator defines the interface for communication between colleague views.Loose coupling between colleague objects is achieved by having colleagues communicatewith the Mediator, rather than with each other. [Mediator]",
      "body": ""
    },
    "Presentation.View.html": {
      "id": "Presentation.View.html",
      "kind": "class",
      "title": "View",
      "longname": "Presentation.View",
      "name": "View",
      "tags": "Presentation.View View",
      "summary": "",
      "description": "Aubstract View - the base view for handlng display in the MV* Concept",
      "body": ""
    },
    "Widget.html": {
      "id": "Widget.html",
      "kind": "class",
      "title": "Widget",
      "longname": "Widget",
      "name": "Widget",
      "tags": "Widget",
      "summary": "",
      "description": "Widgets and small presentation modules",
      "body": ""
    },
    "module-Presentation.html": {
      "id": "module-Presentation.html",
      "kind": "module",
      "title": "Presentation",
      "longname": "module:Presentation",
      "name": "Presentation",
      "tags": "module:Presentation",
      "summary": "",
      "description": "Augmented.js Next Presentation - The Presentation Component",
      "body": ""
    },
    "module-Presentation-Component.html": {
      "id": "module-Presentation-Component.html",
      "kind": "namespace",
      "title": "Presentation~Component",
      "longname": "module:Presentation~Component",
      "name": "Component",
      "tags": "module:Presentation~Component",
      "summary": "",
      "description": "Component - Large UI Components",
      "body": ""
    },
    "module-Presentation-Pagination.html": {
      "id": "module-Presentation-Pagination.html",
      "kind": "namespace",
      "title": "Presentation~Pagination",
      "longname": "module:Presentation~Pagination",
      "name": "Pagination",
      "tags": "module:Presentation~Pagination",
      "summary": "",
      "description": "",
      "body": ""
    },
    "Configuration.xhrFields.html": {
      "id": "Configuration.xhrFields.html",
      "kind": "namespace",
      "title": "xhrFields",
      "longname": "Configuration.xhrFields",
      "name": "xhrFields",
      "tags": "Configuration.xhrFields xhrFields",
      "summary": "",
      "description": "xhrFields property",
      "body": ""
    },
    "Configuration.xhrFields.html#.withCredentials": {
      "id": "Configuration.xhrFields.html#.withCredentials",
      "kind": "member",
      "title": "&lt;static&gt; withCredentials",
      "longname": "Configuration.xhrFields.withCredentials",
      "name": "withCredentials",
      "tags": "Configuration.xhrFields.withCredentials xhrFields.withCredentials withCredentials",
      "summary": "",
      "description": "withCredentials property"
    }
  }
};