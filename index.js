import{a as S,S as q,i as c}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const B="https://pixabay.com/api/",M="54828616-eec4569a3e2d34c092b017f0c";async function u(o,t){const i={key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await S.get(B,{params:i})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:n,comments:L,downloads:w})=>`
        <li class="gallery-item">
          <a href="${s}">
            <img src="${i}" alt="${e}" />
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
      `).join("");f.insertAdjacentHTML("beforeend",t),P.refresh()}function $(){f.innerHTML=""}function h(){m.classList.add("visible")}function g(){m.classList.remove("visible")}function v(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}const O=document.querySelector(".form"),R=document.querySelector(".load-more");let a=1,l="",d=0;O.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(t){l=t,a=1,$(),b();try{h();const i=await u(l,a);if(d=i.totalHits,i.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i.hits),d>15&&v()}catch{c.error({message:"Something went wrong. Try again!",position:"topRight"})}finally{g()}}});R.addEventListener("click",async()=>{a+=1;try{h(),b();const o=await u(l,a);y(o.hits);const t=Math.ceil(d/15);a>=t?c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):v(),E()}catch{c.error({message:"Something went wrong. Try again!",position:"topRight"})}finally{g()}});function E(){const o=document.querySelector(".gallery-item");if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
