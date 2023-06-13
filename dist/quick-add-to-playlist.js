var quickDaddDtoDplaylist=(()=>{var o=Object.create,d=Object.defineProperty,r=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,e=(e,t)=>function(){return t||(0,e[c(e)[0]])((t={exports:{}}).exports,t),t.exports},t=(e,t,i)=>{i=null!=e?o(p(e)):{};var l=!t&&e&&e.__esModule?i:d(i,"default",{value:e,enumerable:!0}),a=e,n=void 0,s=void 0;if(a&&"object"==typeof a||"function"==typeof a)for(let e of c(a))u.call(l,e)||e===n||d(l,e,{get:()=>a[e],enumerable:!(s=r(a,e))||s.enumerable});return l},i=e({"external-global-plugin:react-dom"(e,t){t.exports=Spicetify.ReactDOM}}),s=t(e({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}})()),l=t(i()),f={settingsContainer:"settings-module__settingsContainer___10GVL_quickDaddDtoDplaylist",heading:"settings-module__heading___H3Y7k_quickDaddDtoDplaylist",description:"settings-module__description___SrDvZ_quickDaddDtoDplaylist",inputWrapper:"settings-module__inputWrapper___a0OZK_quickDaddDtoDplaylist"},a=class{constructor(e,t,i={}){this.name=e,this.settingsId=t,this.initialSettingsFields=i,this.settingsFields=this.initialSettingsFields,this.setRerender=null,this.buttonClassnames=null,this.pushSettings=async()=>{for(Object.entries(this.settingsFields).forEach(([e,t])=>{"button"!==t.type&&void 0===this.getFieldValue(e)&&this.setFieldValue(e,t.defaultValue)});!Spicetify?.Platform?.History?.listen;)await new Promise(e=>setTimeout(e,100));this.stopHistoryListener&&this.stopHistoryListener(),this.stopHistoryListener=Spicetify.Platform.History.listen(e=>{"/preferences"===e.pathname&&this.render()}),"/preferences"===Spicetify.Platform.History.location.pathname&&await this.render()},this.rerender=()=>{this.setRerender&&this.setRerender(Math.random())},this.render=async()=>{for(;!document.getElementById("desktop.settings.selectLanguage");){if("/preferences"!==Spicetify.Platform.History.location.pathname)return;await new Promise(e=>setTimeout(e,100))}var e=document.querySelector(".main-view-container__scroll-node-child main div");if(!e)return console.error("[spcr-settings] settings container not found");this.buttonClassnames=Array.from(e.querySelectorAll(":scope > button")).at(-1)?.className??null;let t=Array.from(e.children).find(e=>e.id===this.settingsId);t?console.log(t):((t=document.createElement("div")).id=this.settingsId,t.className=f.settingsContainer,e.appendChild(t)),l.default.render(s.default.createElement(this.FieldsContainer,null),t)},this.addButton=(e,t,i,l,a)=>{this.settingsFields[e]={type:"button",description:t,value:i,events:{onClick:l,...a}}},this.addInput=(e,t,i,l,a)=>{this.settingsFields[e]={type:"input",description:t,defaultValue:i,events:{onChange:l,...a}}},this.addHidden=(e,t)=>{this.settingsFields[e]={type:"hidden",defaultValue:t}},this.addToggle=(e,t,i,l,a)=>{this.settingsFields[e]={type:"toggle",description:t,defaultValue:i,events:{onChange:l,...a}}},this.addDropDown=(e,t,i,l,a,n)=>{this.settingsFields[e]={type:"dropdown",description:t,defaultValue:i[l],options:i,events:{onSelect:a,...n}}},this.getFieldValue=e=>JSON.parse(Spicetify.LocalStorage.get(this.settingsId+"."+e)||"{}")?.value,this.setFieldValue=(e,t)=>{Spicetify.LocalStorage.set(this.settingsId+"."+e,JSON.stringify({value:t}))},this.FieldsContainer=()=>{var[e,t]=(0,s.useState)(0);return this.setRerender=t,s.default.createElement("div",{className:f.settingsContainer,key:e},s.default.createElement("h2",{className:["main-shelf-title main-type-cello",f.heading].join(" ")},this.name),Object.entries(this.settingsFields).map(([e,t])=>s.default.createElement(this.Field,{nameId:e,field:t})))},this.Field=i=>{var e=this.settingsId+"."+i.nameId;let t;if(t="button"===i.field.type?i.field.value:this.getFieldValue(i.nameId),"hidden"===i.field.type)return s.default.createElement(s.default.Fragment,null);const[l,a]=(0,s.useState)(t),n=e=>{void 0!==e&&(a(e),this.setFieldValue(i.nameId,e))};return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"main-type-mesto",style:{color:"var(--spice-subtext)"}},s.default.createElement("label",{className:f.description,htmlFor:e},i.field.description||"")),s.default.createElement("span",{className:["x-settings-secondColumn",f.inputWrapper].join(" ")},"input"===i.field.type?s.default.createElement("input",{className:"main-dropDown-dropDown",id:e,dir:"ltr",value:l,type:"text",...i.field.events,onChange:e=>{n(e.currentTarget.value);var t=i.field.events?.onChange;t&&t(e)}}):"button"===i.field.type?s.default.createElement("span",{className:""},s.default.createElement("button",{id:e,className:this.buttonClassnames??"",...i.field.events,onClick:e=>{n();var t=i.field.events?.onClick;t&&t(e)},type:"button"},l)):"toggle"===i.field.type?s.default.createElement("label",{className:"x-toggle-wrapper x-settings-secondColumn"},s.default.createElement("input",{id:e,className:"x-toggle-input",type:"checkbox",checked:l,...i.field.events,onClick:e=>{n(e.currentTarget.checked);var t=i.field.events?.onClick;t&&t(e)}}),s.default.createElement("span",{className:"x-toggle-indicatorWrapper"},s.default.createElement("span",{className:"x-toggle-indicator"}))):"dropdown"===i.field.type?s.default.createElement("select",{className:"main-dropDown-dropDown",id:e,...i.field.events,onChange:e=>{n(i.field.options[e.currentTarget.selectedIndex]);var t=i.field.events?.onChange;t&&t(e)}},i.field.options.map((e,t)=>s.default.createElement("option",{selected:e===l,value:t+1},e))):s.default.createElement(s.default.Fragment,null)))}}},n="add_to_playlist.playlist",h='<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41665 3.75H4.58331V5H3.33331V5.83333H4.58331V7.08333H5.41665V5.83333H6.66665V5H5.41665V3.75Z" fill="white"/><path d="M8.33331 2.08333H4.75581L4.04456 1.37208C4.00594 1.33332 3.96002 1.30257 3.90947 1.28162C3.85891 1.26067 3.80471 1.24992 3.74998 1.25H1.66665C1.20706 1.25 0.833313 1.62375 0.833313 2.08333V7.91667C0.833313 8.37625 1.20706 8.75 1.66665 8.75H8.33331C8.7929 8.75 9.16665 8.37625 9.16665 7.91667V2.91667C9.16665 2.45708 8.7929 2.08333 8.33331 2.08333ZM1.66665 7.91667V2.91667H8.33331L8.33415 7.91667H1.66665Z" fill="white"/></svg>',m='<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33331 2.08333H4.75581L4.04456 1.37208C4.00594 1.33332 3.96002 1.30257 3.90946 1.28162C3.85891 1.26067 3.80471 1.24992 3.74998 1.25H1.66665C1.20706 1.25 0.833313 1.62375 0.833313 2.08333V7.91667C0.833313 8.37625 1.20706 8.75 1.66665 8.75H8.33331C8.7929 8.75 9.16665 8.37625 9.16665 7.91667V2.91667C9.16665 2.45708 8.7929 2.08333 8.33331 2.08333ZM1.66665 7.91667V2.91667H8.33331L8.33415 7.91667H1.66665Z" fill="white"/><path d="M3.28082 5H6.61416V5.83333H3.28082V5Z" fill="white"/></svg>',y='<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_13)"><path d="M5.23438 2.33928C5.88038 2.33928 6.40407 1.81561 6.40407 1.16964C6.40407 0.523665 5.88038 0 5.23438 0C4.58838 0 4.0647 0.523665 4.0647 1.16964C4.0647 1.81561 4.58838 2.33928 5.23438 2.33928Z" fill="white"/><path d="M5.23439 9.99997C5.62195 9.99997 5.93612 9.68581 5.93612 9.29827C5.93612 8.91072 5.62195 8.59656 5.23439 8.59656C4.84683 8.59656 4.53265 8.91072 4.53265 9.29827C4.53265 9.68581 4.84683 9.99997 5.23439 9.99997Z" fill="white"/><path d="M2.36029 3.41251C2.94173 3.41251 3.41308 2.94118 3.41308 2.35976C3.41308 1.77834 2.94173 1.30701 2.36029 1.30701C1.77885 1.30701 1.3075 1.77834 1.3075 2.35976C1.3075 2.94118 1.77885 3.41251 2.36029 3.41251Z" fill="white"/><path d="M8.10852 8.69222C8.43152 8.69222 8.69337 8.43039 8.69337 8.1074C8.69337 7.78442 8.43152 7.52258 8.10852 7.52258C7.78552 7.52258 7.52368 7.78442 7.52368 8.1074C7.52368 8.43039 7.78552 8.69222 8.10852 8.69222Z" fill="white"/><path d="M1.16971 6.16967C1.68638 6.16967 2.10523 5.75084 2.10523 5.23419C2.10523 4.71754 1.68638 4.29871 1.16971 4.29871C0.653038 4.29871 0.234192 4.71754 0.234192 5.23419C0.234192 5.75084 0.653038 6.16967 1.16971 6.16967Z" fill="white"/><path d="M9.29869 5.70134C9.55692 5.70134 9.76626 5.49201 9.76626 5.23379C9.76626 4.97557 9.55692 4.76624 9.29869 4.76624C9.04045 4.76624 8.83112 4.97557 8.83112 5.23379C8.83112 5.49201 9.04045 5.70134 9.29869 5.70134Z" fill="white"/><path d="M1.78152 7.52945C1.46158 7.84938 1.46158 8.36702 1.78152 8.68695C2.10107 9.00687 2.6195 9.00687 2.93906 8.68695C3.25899 8.36702 3.25899 7.84938 2.93906 7.52945C2.6195 7.20915 2.10145 7.20611 1.78152 7.52945Z" fill="white"/><path d="M8.10812 2.71048C8.3018 2.71048 8.4588 2.55349 8.4588 2.35982C8.4588 2.16615 8.3018 2.00916 8.10812 2.00916C7.91445 2.00916 7.75745 2.16615 7.75745 2.35982C7.75745 2.55349 7.91445 2.71048 8.10812 2.71048Z" fill="white"/></g><defs><clipPath id="clip0_4_13"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>';function g(){var e;return null!=(e=JSON.parse(Spicetify.LocalStorage.get(n)))?e:null}async function C(e){e.icon=y,e.label="Loading...";var t=g();null!==t&&(await async function(e){var t=Spicetify.Player.data.track,i=[];let l=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${e}/tracks?limit=100&fields=next,items(track(uri))`);for(i.push(...l.items.map(e=>e.track.uri));null!=l.next;)l=await Spicetify.CosmosAsync.get(l.next),i.push(...l.items.map(e=>e.track.uri));return i.includes(null==t?void 0:t.uri)}(t.id)?(e.icon=m,e.label="Remove from "+t.name):(e.icon=h,e.label="Add to "+t.name))}function v(e,t){null!=e&&null!=(e=null==(e=null==(e=document.querySelector(`[aria-describedby="onClickHintspotify:playlist:${e}"]`))?void 0:e.parentElement)?void 0:e.parentElement)&&e.classList.remove("quick-add-to-playlist--selected-playlist"),null!=t&&null!=(e=null==(t=null==(e=document.querySelector(`[aria-describedby="onClickHintspotify:playlist:${t}"]`))?void 0:e.parentElement)?void 0:t.parentElement)&&e.classList.add("quick-add-to-playlist--selected-playlist")}function w(e="#1c1818"){return`
    .quick-add-to-playlist--selected-playlist {
      background-color: ${e} !important;
      border-radius: 6px;
    }

    .quick-add-to-playlist--selected-playlist span.ListRowTitle__LineClamp-sc-1xe2if1-0:after  {
      position: absolute;
      right: 10px;
      content: " (selected 📂)";
      text-align: right;
      color: gray;
      font-size: 11px;
    }
  `}function _(e){var t=document.body,i=t.querySelector("#quick-add-to-playlist-style");null!=i?(i.innerHTML=e,t.appendChild(i)):((i=document.createElement("style")).setAttribute("id","quick-add-to-playlist-style"),i.innerHTML=e,t.appendChild(i))}var S=async function(){var e=await async function(){const e=new a("Quick add to playlist","quick-add-to-playlist");return e.addInput("selected-bgcolor","Selected playlist background color","#1c1818"),e.addButton("save","Apply changes now","Apply",()=>{_(w(e.getFieldValue("selected-bgcolor"))),Spicetify.showNotification("Changes applied!")}),await e.pushSettings(),e}();_(w(e.getFieldValue("selected-bgcolor")));const l=new Spicetify.Topbar.Button("Loading...",y,async e=>{const t=g();var i;null!=t&&null!=(i=Spicetify.Player.data.track)&&(e.icon===h?Spicetify.CosmosAsync.post(`https://api.spotify.com/v1/playlists/${t.id}/tracks`,{uris:[null==i?void 0:i.uri]}).then(()=>{Spicetify.showNotification("Added to "+t.name),l.icon=m,l.label="Remove from "+t.name}).catch(()=>{Spicetify.showNotification("An error has occured!")}):e.icon===m&&Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${t.id}/tracks`,{tracks:[{uri:null==i?void 0:i.uri}]}).then(()=>{Spicetify.showNotification("Removed from "+t.name),l.icon=h,l.label="Add to "+t.name}).catch(()=>{Spicetify.showNotification("An error has occured!")}))});await C(l),new Spicetify.ContextMenu.Item("Select playlist",async([e],[]=[],t)=>{var i=g(),e=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/playlists/"+e.split(":")[2]);Spicetify.LocalStorage.set(n,JSON.stringify({name:e.name,id:e.id})),v(null!=i?i.id:null,e.id),Spicetify.showNotification(`Selected playlist: "${e.name}"`),await C(l)},([e])=>{switch(e.split(":")[1]){case Spicetify.URI.Type.PLAYLIST:case Spicetify.URI.Type.PLAYLIST_V2:return!0;default:return!1}},"playlist-folder").register(),Spicetify.Player.addEventListener("songchange",async()=>{await C(l)}),null!=(e=g())&&v(null,e.id)};(async()=>{await S()})()})();(async()=>{var e;document.getElementById("quickDaddDtoDplaylist")||((e=document.createElement("style")).id="quickDaddDtoDplaylist",e.textContent=String.raw`
  .settings-module__settingsContainer___10GVL_quickDaddDtoDplaylist{display:contents}.settings-module__heading___H3Y7k_quickDaddDtoDplaylist{grid-column:1/-1;font-size:1.125rem;line-height:1.5rem;color:#fff;margin-top:24px}.settings-module__description___SrDvZ_quickDaddDtoDplaylist{font-size:.875rem;line-height:1.25rem}.settings-module__inputWrapper___a0OZK_quickDaddDtoDplaylist{display:flex;justify-self:end}
      `.trim(),document.head.appendChild(e))})();