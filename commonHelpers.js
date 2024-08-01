import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="45077635-6eb8c9a3980485254b901d63b",f="https://pixabay.com/api/";function p(s,o=1,n=9){return fetch(`${f}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(s){const o=document.querySelector(".gallery"),n=s.map(r=>`<li>
                <a href="${r.largeImageURL}">
                  <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
                </a>
                <ul class="info">
                  <li><span>Likes:</span> ${r.likes}</li>
                  <li><span>Views:</span> ${r.views}</li>
                  <li><span>Comments:</span> ${r.comments}</li>
                  <li><span>Downloads:</span> ${r.downloads}</li>
                </ul>
              </li>`).join("");o.innerHTML=n}const y=document.querySelector("#search-form"),h=document.querySelector(".gallery"),a=document.querySelector("#loader");let c;y.addEventListener("submit",g);function g(s){s.preventDefault();const o=s.target.elements.query.value.trim();if(o===""){l.error({title:"Error",message:"Search query cannot be empty!",position:"center"});return}h.innerHTML="",a.classList.remove("hidden"),p(o).then(n=>{if(a.classList.add("hidden"),n.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}m(n.hits),c=new u(".gallery a"),c.refresh()}).catch(n=>{a.classList.add("hidden"),l.error({title:"Error",message:n.message,position:"center"})})}
//# sourceMappingURL=commonHelpers.js.map
