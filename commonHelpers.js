import{a as g,i as l,S as h}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function p(s,r=1,n=15){const o="https://pixabay.com/api/",e=new URLSearchParams({key:"45077635-6eb8c9a3980485254b901d63b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:n});try{return(await g.get(`${o}?${e}`)).data}catch(t){iziToast.error({title:"Error",message:t.message,position:"center"})}}function y(s){const r=document.querySelector(".gallery"),n=s.map(o=>`<li>
                <a href="${o.largeImageURL}">
                  <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
                </a>
                <ul class="info">
                  <li><span>Likes:</span> ${o.likes}</li>
                  <li><span>Views:</span> ${o.views}</li>
                  <li><span>Comments:</span> ${o.comments}</li>
                  <li><span>Downloads:</span> ${o.downloads}</li>
                </ul>
              </li>`).join("");r.insertAdjacentHTML("beforeend",n)}const L=document.querySelector("#search-form"),b=document.querySelector(".gallery"),u=document.querySelector("#loader-top"),m=document.querySelector("#loader-bottom"),a=document.querySelector(".js-load-more-btn");let c,i=1,f="";L.addEventListener("submit",S);a.addEventListener("click",w);async function S(s){s.preventDefault();const r=s.target.elements.query.value.trim();if(r===""){l.error({title:"Error",message:"Search query cannot be empty!",position:"center"});return}b.innerHTML="",u.classList.remove("hidden"),i=1;try{const n=await p(r,i);if(u.classList.add("hidden"),n.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),a.classList.add("hidden");return}y(n.hits),c=new h(".gallery a"),c.refresh(),a.classList.remove("hidden"),i+=1,f=r}catch(n){u.classList.add("hidden"),l.error({title:"Error",message:n.message,position:"center"})}}async function w(s){s.preventDefault(),m.classList.remove("hidden"),a.classList.add("hidden");try{const r=await p(f,i);y(r.hits),c=new h(".gallery a"),c.refresh(),i+=1,i*15>=r.totalHits?(a.classList.add("hidden"),l.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"center"})):a.classList.remove("hidden"),m.classList.add("hidden"),q()}catch(r){m.classList.add("hidden"),l.error({title:"Error",message:r.message,position:"center"})}}function q(){const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
