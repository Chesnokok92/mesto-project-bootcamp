(()=>{"use strict";var e="";const t=e+"156d07d84524cc942d68.jpg",n=e+"167b0005add1694393db.jpg",c=e+"50bb648b47735ffba9eb.jpg",o=e+"e2daa86be296ebffd99c.jpg",l=e+"d75cf55cc6dcd72e4e9a.jpg",u=e+"99b6e21b94798ec54759.jpg";var r=[2,3,5].map((function(e){return 2*e}));console.log(r);var i=[{name:"Архыз",link:t},{name:"Челябинская область",link:n},{name:"Иваново",link:c},{name:"Камчатка",link:o},{name:"Холмогорский район",link:l},{name:"Байкал",link:u}],a=document.querySelector(".profile-popup"),d=(document.getElementById("pictureAddPop"),document.getElementById("profile")),m=document.querySelector(".pop-up__button-close"),p=document.getElementById("pictureAdd"),s=document.querySelector(".profile__name").textContent,_=document.querySelector(".profile__about").textContent,v=document.getElementById("inputTitle").textContent,y=document.getElementById("inputLinkPicture").textContent,f=(document.querySelector("#inputName"),document.querySelector("#inputInfo"),document.querySelector(".pop-up")),E=f.querySelector(".pop-up__input"),g=document.querySelector(".elements"),b=document.querySelector("#card__template").content,k=document.getElementById("newPicture"),q=(document.querySelector("elements"),document.getElementById("inputTitle").value,document.getElementById("inputLinkPicture").value,document.getElementById("pictureFull")),L=a.querySelector(".pop-up__errors"),S=function(){a.classList.remove("pop-up__all_active")};document.addEventListener("keydown",(function(e){"Escape"===e.key&&S()})),i.map((function(e){return{name:e.name,link:e.link}})).forEach((function(e){var t=e.name,n=e.link,c=b.querySelector(".elements__element").cloneNode(!0);c.querySelector(".elements__text").textContent=t,c.querySelector(".elements__photo").src=n,c.querySelector(".elements__photo").alt=t,g.prepend(c)})),k.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("inputTitle").value,n=document.getElementById("inputLinkPicture").value,c=document.createElement("article");c.className="elements__element",c.insertAdjacentHTML("beforeend",'\n    <button class="elements__thrash" type="submit"></button>\n                    <button class="elements__button" type="submit">\n                        <img class="elements__photo"  src="'.concat(n,'"  alt="').concat(t,'" />\n                    </button>\n                    <div class="elements__info">\n                    <h2 class="elements__text">').concat(t,'</h2>\n                        <button class="elements__like" type="submit">\n                        </button>\n                    </div>\n\n  ')),g.insertAdjacentElement("afterbegin",c),pictureAddPop.classList.remove("pop-up__all_active")})),d.addEventListener("click",(function(e){e.preventDefault(),a.classList.add("pop-up__all_active"),document.getElementById("inputName").value=s,document.getElementById("inputInfo").value=_})),m.addEventListener("click",(function(e){e.preventDefault(),S()})),a.addEventListener("click",(function(e){e.currentTarget===e.target&&S()})),p.addEventListener("click",(function(e){e.preventDefault(),pictureAddPop.classList.add("pop-up__all_active"),document.getElementById("inputTitle").value=v,document.getElementById("inputLinkPicture").value=y})),f.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("inputName").value,n=document.getElementById("inputInfo").value,c=document.querySelector(".profile__name"),o=document.querySelector(".profile__about");c.textContent=t,o.textContent=n})),document.querySelectorAll(".elements__like").forEach((function(e){e.addEventListener("click",(function(){return e.classList.toggle("elements__like_active")}))})),document.querySelectorAll(".elements__thrash").forEach((function(e){e.addEventListener("click",(function(){e.closest(".elements__element").remove()}))})),document.querySelectorAll("elements__photo");var I=document.querySelectorAll(".elements__button"),B=document.getElementById("picText");I.forEach((function(e){e.addEventListener("click",(function(){var e=document.getElementById("picO");q.classList.add("pop-up__all_active");var t=document.querySelector(".elements__text").textContent,n=document.querySelector(".elements__photo").src,c=document.createElement("img");c.className="pop-up__picOpen",c.src=n;var o=document.createElement("h2");o.className="pop-up__picText",o.textContent=t,console.log(t),console.log(n),console.log(c),e.replaceWith(c),B.replaceWith(o)}))})),E.addEventListener("input",(function(){E.validity.valid?L.classList.remove("pop-up__errors_active"):L.classList.add("pop-up__errors_active")}))})();