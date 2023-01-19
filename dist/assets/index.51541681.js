(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=()=>{const r=localStorage.getItem("cartProducts");return r?JSON.parse(r):[]},w=r=>{if(!r)throw new Error("Voc\xEA deve fornecer um ID");const e=[...m()],n=e.indexOf(r);e.splice(n,1),localStorage.setItem("cartProducts",JSON.stringify(e))},_=document.querySelector(".cart__address"),E=document.querySelector(".cep-input"),P=async r=>{const e=await Promise.any([fetch(`https://cep.awesomeapi.com.br/json/${r}`),fetch(`https://brasilapi.com.br/api/cep/v2/${r}`)]),n=await e.json(),c=404;if(e.status===c)throw new Error("CEP n\xE3o encontrado");return`${n.address} - ${n.district} - ${n.city} - ${n.state}`},T=async()=>{try{const r=E.value,e=8;if(r.length<e)return;const n=await P(r);_.innerHTML=n}catch{_.innerHTML="CEP n\xE3o encontrado"}},h=async r=>{if(r===void 0)throw new Error("ID n\xE3o informado");try{return await(await fetch(`https://api.mercadolibre.com/items/${r}`)).json()}catch(e){return e.message}},b=async r=>{if(r===void 0)throw new Error("Termo de busca n\xE3o informado");try{return(await(await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${r}`)).json()).results}catch(e){return e.message}},d=document.querySelector(".total-price"),p=r=>{const e=document.createElement("img");return e.className="product__image",e.src=r.replace("I.jpg","O.jpg"),e},s=(r,e,n="")=>{const c=document.createElement(r);return c.className=e,c.innerText=n,c},S=async(r,e)=>{r.remove(),w(e);const n=await h(e),t=Number(d.innerText)-n.price;d.innerText=t.toFixed(2)},C=({id:r,title:e,price:n,pictures:c})=>{const t=document.createElement("li");t.className="cart__product";const o=s("div","cart__product__image-container"),a=p(c[0].url);o.appendChild(a);const i=p((c[1]||c[0]).url);o.appendChild(i),t.appendChild(o);const l=s("div","cart__product__info-container");l.appendChild(s("span","product__title",e));const f=s("span","product__price","R$ ");f.appendChild(s("span","product__price__value",n)),l.appendChild(f),t.appendChild(l);const v=s("i","material-icons cart__product__remove","delete");return t.appendChild(v),t.addEventListener("click",()=>S(t,r)),t},L=document.querySelector(".cart__products"),x=async r=>{const e=await h(r),n=C({id:e.id,title:e.title,price:e.price,pictures:e.pictures});L.appendChild(n);const c=m();c.push(r),localStorage.setItem("cartProducts",JSON.stringify(c));const o=Number(d.innerText)+e.price;d.innerText=o.toFixed(2)},N=({id:r,title:e,thumbnail:n,price:c})=>{const t=document.createElement("section");t.className="product",t.appendChild(s("span","product__id",r));const o=s("div","img__container");o.appendChild(p(n)),t.appendChild(o),t.appendChild(s("span","product__title",e));const a=s("span","product__price","R$ ");a.appendChild(s("span","product__price__value",c)),t.appendChild(a);const i=s("button","product__add","Adicionar ao carrinho!");return i.addEventListener("click",()=>x(r)),t.appendChild(i),t};document.querySelector(".cep-button").addEventListener("click",T);const y=document.querySelector(".products"),u=document.createElement("h2"),$=document.querySelector(".cart__products"),q=document.querySelector(".total-price");function g(r,e){u.innerText=r,u.className=e,y.appendChild(u)}function I(){document.querySelector(".loading").remove()}const O=async()=>{try{g("carregando...","loading"),(await b("computador")).forEach(e=>{const n=N({id:e.id,title:e.title,thumbnail:e.thumbnail,price:e.price});y.appendChild(n)}),I()}catch{g("Algum erro ocorreu, recarregue a p\xE1gina e tente novamente","error")}};O();async function j(){const e=m().map(t=>h(t)),n=await Promise.all(e);n.forEach(t=>{const o=C({id:t.id,title:t.title,price:t.price,pictures:t.pictures});$.appendChild(o)});const c=n.reduce((t,o)=>t+o.price,0);q.innerHTML=c}window.onload=j;