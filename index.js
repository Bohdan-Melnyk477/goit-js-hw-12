import{a as S,S as q,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",M="54828616-eec4569a3e2d34c092b017f0c";async function f(o,t){const s={key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await S.get(P,{params:s})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:L,downloads:w})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img src="${s}" alt="${e}" />
          </a>
          <div class="info">
            <div class="info-item">
              <b>Likes</b>
              <span>${r}</span>
            </div>
            <div class="info-item">
              <b>Views</b>
              <span>${n}</span>
            </div>
            <div class="info-item">
              <b>Comments</b>
              <span>${L}</span>
            </div>
            <div class="info-item">
              <b>Downloads</b>
              <span>${w}</span>
            </div>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),B.refresh()}function $(){m.innerHTML=""}function g(){h.classList.add("visible")}function v(){h.classList.remove("visible")}function b(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}const R=document.querySelector(".form"),O=document.querySelector(".load-more");let c=1,d="",u=0;R.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(t){d=t,c=1,$(),l();try{g();const s=await f(d,c);if(u=s.totalHits,s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s.hits),Math.ceil(u/15)>1?b():(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a.error({message:"Something went wrong. Try again!",position:"topRight"})}finally{v()}}});O.addEventListener("click",async()=>{c+=1;try{g(),l();const o=await f(d,c);y(o.hits);const t=Math.ceil(u/15);c>=t?(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b(),E()}catch{a.error({message:"Something went wrong. Try again!",position:"topRight"})}finally{v()}});function E(){const o=document.querySelector(".gallery-item");if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
