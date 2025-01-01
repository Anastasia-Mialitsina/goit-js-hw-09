import"./assets/1-gallery-Cav_dCRt.js";import"./assets/vendor-D0gBiHs0.js";const s=`
  <form class="feedback-form" autocomplete="off">
    <label>
      Email
      <input type="email" name="email" autofocus />
    </label>
    <label>
      Message
      <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
  </form>
`;document.getElementById("form-container").innerHTML=s;const m={email:"",message:""},o=document.querySelector(".feedback-form");o.addEventListener("input",t=>{const{name:e,value:a}=t.target;(e==="email"||e==="message")&&(m[e]=a.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(m)))});document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const{email:e,message:a}=JSON.parse(t);o.email.value=e||"",o.message.value=a||""}});o.addEventListener("submit",t=>{t.preventDefault();const{email:e,message:a}=m;if(!e||!a){alert("Fill please all fields");return}console.log(m),localStorage.removeItem("feedback-form-state"),o.reset()});
//# sourceMappingURL=index.js.map
