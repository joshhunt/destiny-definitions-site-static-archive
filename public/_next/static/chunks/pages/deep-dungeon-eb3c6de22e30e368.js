(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{7881:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deep-dungeon",function(){return __webpack_require__(2925)}])},4003:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7458);__webpack_require__(2983);var _lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4485),_BungieImage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3264),_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(426),_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__),_Redacted__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4764),classnames__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7608),classnames__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);let GenericItem=param=>{var ref,ref1,ref2,ref3,ref4,ref5;let{perkItem}=param,name=null!==(ref5=(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.Gf)(perkItem))&&void 0!==ref5?ref5:"",isEmblem=null===(ref=perkItem.itemCategoryHashes)||void 0===ref?void 0:ref.includes(19),emblemBg=isEmblem?null===(ref1=perkItem.displayProperties)||void 0===ref1?void 0:null===(ref2=ref1.iconSequences)||void 0===ref2?void 0:null===(ref3=ref2[6])||void 0===ref3?void 0:null===(ref4=ref3.frames)||void 0===ref4?void 0:ref4[0]:void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().largePerk,emblemBg&&_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emblem),style:emblemBg?{backgroundImage:'url("'.concat(emblemBg,'")')}:void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BungieImage__WEBPACK_IMPORTED_MODULE_3__.ZP,{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().largePerkIcon,src:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.zW)(perkItem)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().largePerkName,style:{fontWeight:500},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Redacted__WEBPACK_IMPORTED_MODULE_4__.Z,{text:name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().largePerkDescription,children:null==perkItem?void 0:perkItem.itemTypeDisplayName})]})};__webpack_exports__.Z=GenericItem},2925:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSP:function(){return __N_SSP},default:function(){return deep_dungeon}});var jsx_runtime=__webpack_require__(7458),lodash=__webpack_require__(9378),utils=__webpack_require__(4485),ItemSummary=__webpack_require__(2087),GenericItem=__webpack_require__(4003),SectionHeading=__webpack_require__(3133),styles_module=__webpack_require__(5360),styles_module_default=__webpack_require__.n(styles_module),WeaponDetails=__webpack_require__(7442),WeaponHeader=__webpack_require__(8452),WeaponHeading=__webpack_require__(4368),Redacted=__webpack_require__(4764);let BUCKET_ORDER=["1498876634","2465295065","953998645"],CLASS_NAME={0:"Titan",1:"Hunter",2:"Warlock"},armorBucketOrder=[3448274439,3551918588,14239492,20886954,1585787867],modOrder=[-9,539051925,1389309840,1947468772,4243059257,2158846614,1036972936,1036972937,1036972938,1036972939];function weaponSorter(item){var ref,ref1,ref2;let index=null!==(ref2=BUCKET_ORDER.indexOf((null!==(ref1=null==item?void 0:null===(ref=item.inventory)||void 0===ref?void 0:ref.bucketTypeHash)&&void 0!==ref1?ref1:-1).toString()))&&void 0!==ref2?ref2:999;return index}function armorSorter(item){var ref,ref1,ref2;let index=null!==(ref2=armorBucketOrder.indexOf(null!==(ref1=null==item?void 0:null===(ref=item.inventory)||void 0===ref?void 0:ref.bucketTypeHash)&&void 0!==ref1?ref1:-1))&&void 0!==ref2?ref2:999;return index}function indexSorter(item){return item.index}function modSorter(item){var _hash;return modOrder.indexOf(null!==(_hash=item.hash)&&void 0!==_hash?_hash:-1)||9999}function classTypeSorter(item){var _classType;return null!==(_classType=item.classType)&&void 0!==_classType?_classType:-1}var __N_SSP=!0,deep_dungeon=function(props){var _classType;let{weapons,armor,cosmetics,otherDefinitions}=props,sortedWeapons=(0,lodash.sortBy)(weapons.filter(utils.Dw),weaponSorter,indexSorter),weaponsBySlot=(0,lodash.groupBy)(sortedWeapons,v=>{var ref;return null===(ref=v.inventory)||void 0===ref?void 0:ref.bucketTypeHash}),armorByClass=(0,lodash.groupBy)(armor,v=>null!==(_classType=v.classType)&&void 0!==_classType?_classType:-1),itemsWithLore=[...armor,...weapons,...cosmetics].filter(v=>v.loreHash);return(0,jsx_runtime.jsxs)("div",{className:styles_module_default().root,children:[(0,jsx_runtime.jsx)("div",{className:styles_module_default().hero,children:(0,jsx_runtime.jsxs)("div",{className:styles_module_default().heroText,children:[(0,jsx_runtime.jsx)("h2",{className:styles_module_default().subtitle,children:"Loot preview"}),(0,jsx_runtime.jsx)("h1",{className:styles_module_default().pageTitle,children:"Ghosts of the Deep"})]})}),(0,jsx_runtime.jsxs)("div",{className:styles_module_default().section,children:[(0,jsx_runtime.jsx)(SectionHeading.Z,{children:"Armor"}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().weaponBuckets,children:Object.entries(armorByClass).sort((param,param1)=>{let[a]=param,[b]=param1;return parseInt(a)-parseInt(b)}).map(param=>{let[classType,armorForClass]=param,className=CLASS_NAME[classType];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(WeaponHeading.Z,{children:className}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().gearList,children:(0,lodash.sortBy)(armorForClass,armorSorter).map(item=>(0,jsx_runtime.jsx)("a",{className:styles_module_default().invisibleLink,href:"#item_".concat(item.hash),children:(0,jsx_runtime.jsx)(ItemSummary.Z,{item:item})},item.hash))})]},classType)})})]}),(0,jsx_runtime.jsxs)("div",{className:styles_module_default().section,children:[(0,jsx_runtime.jsx)(SectionHeading.Z,{children:"Weapons"}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().weaponBuckets,children:Object.entries(weaponsBySlot).sort((param,param1)=>{let[a]=param,[b]=param1;return BUCKET_ORDER.indexOf(a)-BUCKET_ORDER.indexOf(b)}).map(param=>{var ref,ref1;let[bucketHash,weaponsForBucket]=param,bucketDef=null===(ref=otherDefinitions.DestinyInventoryBucketDefinition)||void 0===ref?void 0:ref[null!=bucketHash?bucketHash:-1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(WeaponHeading.Z,{children:null==bucketDef?void 0:null===(ref1=bucketDef.displayProperties)||void 0===ref1?void 0:ref1.name}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().gearList,children:(0,lodash.sortBy)(weaponsForBucket,indexSorter).map(item=>(0,jsx_runtime.jsx)("a",{className:styles_module_default().invisibleLink,href:"#item_".concat(item.hash),children:(0,jsx_runtime.jsx)(ItemSummary.Z,{item:item})},item.hash))})]},bucketHash)})})]}),(0,jsx_runtime.jsxs)("div",{className:styles_module_default().section,children:[(0,jsx_runtime.jsx)(SectionHeading.Z,{children:"Cosmetics"}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().modList,children:(0,lodash.sortBy)(cosmetics.filter(utils.Dw),modSorter).map(item=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(GenericItem.Z,{perkItem:item,otherDefinitions:otherDefinitions})},item.hash))})]}),(0,jsx_runtime.jsxs)("div",{className:styles_module_default().section,children:[(0,jsx_runtime.jsx)(SectionHeading.Z,{children:"Weapon rolls"}),sortedWeapons.map(item=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(WeaponDetails.Z,{item:item,otherDefinitions:otherDefinitions})},item.hash))]}),(0,jsx_runtime.jsxs)("div",{className:styles_module_default().section,children:[(0,jsx_runtime.jsx)(SectionHeading.Z,{children:"Lore"}),(0,lodash.sortBy)(itemsWithLore,classTypeSorter,armorSorter,indexSorter).map(item=>{var ref,ref1,_loreHash;let loreDef=null===(ref=otherDefinitions.DestinyLoreDefinition)||void 0===ref?void 0:ref[null!==(_loreHash=item.loreHash)&&void 0!==_loreHash?_loreHash:-1];return(0,jsx_runtime.jsxs)("div",{className:styles_module_default().loreBox,id:"item_".concat(item.hash),children:[(0,jsx_runtime.jsx)(WeaponHeader.Z,{item:item,otherDefinitions:otherDefinitions}),(0,jsx_runtime.jsx)("h4",{children:(0,jsx_runtime.jsx)("em",{children:(0,jsx_runtime.jsx)(Redacted.Z,{text:item.flavorText})})}),(0,jsx_runtime.jsx)("div",{className:styles_module_default().lore,children:(0,jsx_runtime.jsx)(Redacted.Z,{text:null==loreDef?void 0:null===(ref1=loreDef.displayProperties)||void 0===ref1?void 0:ref1.description})})]})})]})]})}},426:function(module){module.exports={largePerk:"styles_largePerk__dxYX_",largePerkIcon:"styles_largePerkIcon__iDly5",largePerkName:"styles_largePerkName__2gi0E",largePerkDescription:"styles_largePerkDescription__EsUtJ",emblem:"styles_emblem__3Xuku"}}},function(__webpack_require__){__webpack_require__.O(0,[508,41,610,774,888,179],function(){return __webpack_require__(__webpack_require__.s=7881)}),_N_E=__webpack_require__.O()}]);