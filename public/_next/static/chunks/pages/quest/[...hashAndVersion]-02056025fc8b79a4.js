(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{2217:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quest/[...hashAndVersion]",function(){return __webpack_require__(329)}])},3264:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{VB:function(){return getBungieImageURL},ZP:function(){return BungieImage}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7458),process=__webpack_require__(3656);let imageProxyPrefix=process.env.NEXT_PUBLIC_IMAGE_PROXY;function getBungieImageURL(src){return src.startsWith("http")?src:"https://www.bungie.net".concat(src)}function BungieImage(param){let{src,...rest}=param;if(!src)return null;let bungieUrl=getBungieImageURL(src||"/img/misc/missing_icon_d2.png");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{loading:"lazy",src:imageProxyPrefix?imageProxyPrefix+bungieUrl:bungieUrl,...rest})}},3040:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7458);__webpack_require__(2983);var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8048),_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);let QuestObjectives=param=>{let{objectiveHashes,objectiveDefinitions}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:objectiveHashes.map(hash=>{let def=objectiveDefinitions[hash];if(!def)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em",{children:"Missing data"})});let isBoolean=(0===def.valueStyle||2===def.valueStyle)&&1===def.completionValue,progressDescription=isBoolean&&!def.progressDescription?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em",{children:"Completed"}):def.progressDescription;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().objective,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().track,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description,children:progressDescription}),!isBoolean&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().value,children:def.completionValue})]})]},hash)})})};__webpack_exports__.Z=QuestObjectives},4485:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J0:function(){return castDefinitionsTable},cO:function(){return friendlyTableName},Eb:function(){return getDescription},Gf:function(){return getDisplayName},zW:function(){return getIconSrc},Dw:function(){return notEmpty}});var tableNameMappings_namespaceObject=JSON.parse('{"DestinyMedalTierDefinition":"MedalTiers","DestinyHistoricalStatsDefinition":"HistoricalStats","DestinyReportReasonCategoryDefinition":"ReportReasonCategories","DestinyUnlockDefinition":"Unlocks","DestinyMilestoneDefinition":"Milestones","DestinyRaceDefinition":"Races","DestinyChecklistDefinition":"Checklists","DestinyEventCardDefinition":"EventCards","DestinySeasonPassDefinition":"SeasonPasses","DestinySeasonDefinition":"Seasons","DestinyBreakerTypeDefinition":"BreakerTypes","DestinyItemCategoryDefinition":"ItemCategories","DestinyTalentGridDefinition":"Talents","DestinyPlugSetDefinition":"PlugSets","DestinyEnergyTypeDefinition":"EnergyTypes","DestinyMetricDefinition":"Metrics","DestinyLoreDefinition":"Lore","DestinyRecordDefinition":"Triumphs","DestinyCollectibleDefinition":"Collectibles","DestinyPresentationNodeDefinition":"PresentationNodes","DestinyTraitCategoryDefinition":"TraitCategories","DestinyTraitDefinition":"Traits","DestinyRewardSourceDefinition":"RewardSources","DestinyProgressionLevelRequirementDefinition":"ProgressionLevelRequirements","DestinyPowerCapDefinition":"PowerCaps","DestinyArtifactDefinition":"Artifacts","DestinySandboxPatternDefinition":"SandboxPatterns","DestinyFactionDefinition":"Factions","DestinyVendorGroupDefinition":"VendorGroups","DestinyActivityTypeDefinition":"ActivityTypes","DestinyPlaceDefinition":"Places","DestinyActivityModeDefinition":"ActivityModes","DestinyLocationDefinition":"Locations","DestinyDamageTypeDefinition":"DamageTypes","DestinySandboxPerkDefinition":"SandboxPerks","DestinyObjectiveDefinition":"Objectives","DestinyActivityModifierDefinition":"ActivityModifiers","DestinyActivityDefinition":"Activities","DestinyActivityGraphDefinition":"ActivityGraphs","DestinyDestinationDefinition":"Destinations","DestinyVendorDefinition":"Vendors","DestinyGenderDefinition":"Genders","DestinyClassDefinition":"Classes","DestinyEquipmentSlotDefinition":"EquipmentSlots","DestinyStatGroupDefinition":"StatGroups","DestinyStatDefinition":"Stats","DestinyItemTierTypeDefinition":"ItemTierTypes","DestinyInventoryBucketDefinition":"InventoryBuckets","DestinyMaterialRequirementSetDefinition":"MaterialRequirementSets","DestinySocketCategoryDefinition":"SocketCategories","DestinySocketTypeDefinition":"SocketTypes","DestinyInventoryItemDefinition":"Items","DestinyProgressionDefinition":"Progressions"}');function friendlyTableName(name){let useMobileName=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(useMobileName&&tableNameMappings_namespaceObject[name])return tableNameMappings_namespaceObject[name];let match=name.match(/Destiny(\w+)Definition/);return match?match[1]:name}function castDefinitionsTable(castToTableName,inputTableName,defs){if(inputTableName!==castToTableName)throw Error("Unable to cast ".concat(inputTableName," to ").concat(castToTableName));return defs}function hasDisplayProperties(def){return"displayProperties"in def&&void 0!==def.displayProperties}function getDisplayName(def){return def?859929450===def.hash?"Unyielding Casque":hasDisplayProperties(def)&&"name"in def.displayProperties&&def.displayProperties.name?def.displayProperties.name:"name"in def&&def.name?def.name:void 0:void 0}function getIconSrc(def){return def?hasDisplayProperties(def)&&"icon"in def.displayProperties&&def.displayProperties.icon?def.displayProperties.icon:"iconImagePath"in def&&def.iconImagePath?def.iconImagePath:"colorImagePath"in def&&def.colorImagePath?def.colorImagePath:void 0:void 0}function getDescription(def){if(def&&hasDisplayProperties(def)&&"description"in def.displayProperties&&def.displayProperties.description)return def.displayProperties.description}function notEmpty(value){return null!=value}},329:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return _hashAndVersion_}});var jsx_runtime=__webpack_require__(7458);__webpack_require__(2983);var styles_module=__webpack_require__(1082),styles_module_default=__webpack_require__.n(styles_module),QuestObjectives=__webpack_require__(3040),utils=__webpack_require__(4485),BungieImage=__webpack_require__(3264),RewardItem_styles_module=__webpack_require__(4860),RewardItem_styles_module_default=__webpack_require__.n(RewardItem_styles_module);let RewardItem=param=>{let{item}=param;return(0,jsx_runtime.jsxs)("div",{className:RewardItem_styles_module_default().questItem,children:[(0,jsx_runtime.jsx)(BungieImage.ZP,{className:RewardItem_styles_module_default().questIcon,src:(0,utils.zW)(item)}),(0,jsx_runtime.jsx)("div",{className:RewardItem_styles_module_default().questItemName,children:(0,utils.Gf)(item)}),(null==item?void 0:item.itemTypeAndTierDisplayName)&&(0,jsx_runtime.jsx)("div",{className:RewardItem_styles_module_default().questItemType,children:item.itemTypeAndTierDisplayName})]})};var ItemHeader_styles_module=__webpack_require__(9395),ItemHeader_styles_module_default=__webpack_require__.n(ItemHeader_styles_module);let ItemHeader=param=>{var ref,ref1;let{item}=param,name=(null===(ref=item.setData)||void 0===ref?void 0:ref.questLineName)||(null===(ref1=item.displayProperties)||void 0===ref1?void 0:ref1.name)||"";return(0,jsx_runtime.jsxs)("div",{className:ItemHeader_styles_module_default().itemSummary,children:[(0,jsx_runtime.jsx)(BungieImage.ZP,{className:ItemHeader_styles_module_default().icon,src:(0,utils.zW)(item)}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h2",{className:ItemHeader_styles_module_default().title,children:(0,jsx_runtime.jsx)("span",{children:name})}),(0,jsx_runtime.jsx)("p",{className:ItemHeader_styles_module_default().subtitle,children:item.itemTypeAndTierDisplayName})]})]})},QuestPage=param=>{var ref,ref1,ref2,ref3,ref4,ref5,_itemHash,ref6;let{questHash,rewardItemHashes,interactionRewards,itemDefinitions,relatedVendors,objectiveDefinitions}=param,thisQuest=itemDefinitions[questHash],questName=null!==(ref4=null!==(ref3=null==thisQuest?void 0:null===(ref=thisQuest.setData)||void 0===ref?void 0:ref.questLineName)&&void 0!==ref3?ref3:null==thisQuest?void 0:null===(ref1=thisQuest.displayProperties)||void 0===ref1?void 0:ref1.name)&&void 0!==ref4?ref4:"",allQuestDefs=(null!==(ref5=null==thisQuest?void 0:null===(ref2=thisQuest.setData)||void 0===ref2?void 0:ref2.itemList)&&void 0!==ref5?ref5:[]).map(v=>itemDefinitions[null!==(_itemHash=v.itemHash)&&void 0!==_itemHash?_itemHash:0]).filter(Boolean),relatedInteractions=relatedVendors.map(vendor=>{var ref;return{vendor:vendor,interactions:null===(ref=vendor.interactions)||void 0===ref?void 0:ref.filter(interaction=>{var ref;return questName&&(null===(ref=interaction.headerDisplayProperties)||void 0===ref?void 0:ref.name)===questName})}});return(0,jsx_runtime.jsxs)("div",{className:styles_module_default().root,children:[(0,jsx_runtime.jsx)(ItemHeader,{item:thisQuest}),(0,jsx_runtime.jsxs)("div",{className:styles_module_default().grid,children:[allQuestDefs.length>0&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Steps"}),allQuestDefs.map((item,index)=>{var ref;return(0,jsx_runtime.jsxs)("div",{className:questHash===item.hash?styles_module_default().selectedStep:styles_module_default().step,children:[(0,jsx_runtime.jsx)("div",{className:styles_module_default().stepHeader,children:(0,jsx_runtime.jsxs)("span",{className:styles_module_default().stepHeaderText,children:[(0,jsx_runtime.jsxs)("span",{className:styles_module_default().stepNumber,children:[index+1,"."]})," ",(0,utils.Gf)(item)]})}),(0,jsx_runtime.jsx)("p",{children:(0,utils.Eb)(item)}),item.displaySource&&(0,jsx_runtime.jsx)("p",{className:styles_module_default().displaySource,children:item.displaySource}),(0,jsx_runtime.jsx)(QuestObjectives.Z,{objectiveHashes:null!==(ref6=null===(ref=item.objectives)||void 0===ref?void 0:ref.objectiveHashes)&&void 0!==ref6?ref6:[],objectiveDefinitions:objectiveDefinitions})]})})]}),relatedInteractions.length>0&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Interactions"}),relatedInteractions.map(param=>{let{interactions,vendor}=param;return(0,jsx_runtime.jsxs)("div",{className:styles_module_default().interaction,children:[(0,jsx_runtime.jsx)("div",{className:styles_module_default().stepHeader,children:(0,utils.Gf)(vendor)}),null==interactions?void 0:interactions.map(interaction=>{var ref,_hash,_interactionIndex,ref1;let itemHashes=null!==(ref1=null===(ref=interactionRewards[null!==(_hash=vendor.hash)&&void 0!==_hash?_hash:0])||void 0===ref?void 0:ref[null!==(_interactionIndex=interaction.interactionIndex)&&void 0!==_interactionIndex?_interactionIndex:-1])&&void 0!==ref1?ref1:[],items=itemHashes.map(v=>itemDefinitions[v]).filter(Boolean);return(0,jsx_runtime.jsxs)("blockquote",{className:styles_module_default().interactionQuote,children:[(0,jsx_runtime.jsx)("p",{children:interaction.flavorLineOne}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().itemGrid,children:items.map(item=>(0,jsx_runtime.jsx)(RewardItem,{item:item}))})]})})]})}),(0,jsx_runtime.jsx)("p",{className:styles_module_default().disclaimer,children:"Note: Vendor interactions are guesses, and are not guarenteed to be in the correct order."})]}),rewardItemHashes.length>0&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Related items & rewards"}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().itemGrid,children:rewardItemHashes.map(itemHash=>(0,jsx_runtime.jsx)(RewardItem,{item:itemDefinitions[itemHash]}))})]})]})]})},QuestPageWrapper=props=>(0,jsx_runtime.jsx)(QuestPage,{...props});var __N_SSG=!0,_hashAndVersion_=QuestPageWrapper},9395:function(module){module.exports={itemSummary:"styles_itemSummary__XcCB8",title:"styles_title__je_cb",subtitle:"styles_subtitle___gH02",icon:"styles_icon__1eoEf"}},8048:function(module){module.exports={objective:"styles_objective__AohQv",box:"styles_box__J2JWm",track:"styles_track__oG8zy",value:"styles_value__zqP9g"}},1082:function(module){module.exports={root:"styles_root__YmOBY",grid:"styles_grid__MKsFF",step:"styles_step__V_aza",selectedStep:"styles_selectedStep__3U4VL styles_step__V_aza",stepHeader:"styles_stepHeader___3pXn",stepHeaderText:"styles_stepHeaderText__opQ4b",stepNumber:"styles_stepNumber__sYDN9",icon:"styles_icon__fabJK",bigIcon:"styles_bigIcon__9p4Vf",interaction:"styles_interaction__IYn2t",interactionQuote:"styles_interactionQuote__rGuhL",disclaimer:"styles_disclaimer__zpJrB",itemGrid:"styles_itemGrid__XZWJ1",displaySource:"styles_displaySource__1Ujnu"}},4860:function(module){module.exports={questItem:"styles_questItem__iML0L",questIcon:"styles_questIcon__Txpnw",questItemName:"styles_questItemName__Y0dQP",questItemType:"styles_questItemType__kkb7h"}},3656:function(module){var cachedSetTimeout,cachedClearTimeout,currentQueue,process=module.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(fun){if(cachedSetTimeout===setTimeout)return setTimeout(fun,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(fun,0);try{return cachedSetTimeout(fun,0)}catch(e1){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e1){cachedClearTimeout=defaultClearTimeout}}();var queue=[],draining=!1,queueIndex=-1;function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var timeout=runTimeout(cleanUpNextTick);draining=!0;for(var len=queue.length;len;){for(currentQueue=queue,queue=[];++queueIndex<len;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,len=queue.length}currentQueue=null,draining=!1,function(marker){if(cachedClearTimeout===clearTimeout)return clearTimeout(marker);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(marker);try{cachedClearTimeout(marker)}catch(e1){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}(timeout)}}function Item(fun,array){this.fun=fun,this.array=array}function noop(){}process.nextTick=function(fun){var args=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)args[i-1]=arguments[i];queue.push(new Item(fun,args)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(name){return[]},process.binding=function(name){throw Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(dir){throw Error("process.chdir is not supported")},process.umask=function(){return 0}}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=2217)}),_N_E=__webpack_require__.O()}]);