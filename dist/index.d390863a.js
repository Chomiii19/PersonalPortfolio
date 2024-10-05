let e;const t=document.querySelector(".clickHold"),i=document.querySelector(".intro-section"),s=document.querySelector(".hold"),a=document.querySelector(".box"),n=document.querySelector(".cursor"),c=document.querySelector(".noise-container"),o=document.querySelector(".intro");document.querySelector(".intro-name");const d=document.querySelector(".intro-bar"),l=document.querySelectorAll(".move"),r=document.querySelector(".portfolio");document.querySelector(".sub-sections"),document.querySelector(".about"),document.querySelector(".tech-stack");const p=document.querySelector(".slides"),m=document.querySelector(".contents"),v=document.querySelectorAll(".dot"),g="ABCDEFGHIJKLMNOPQRSTUVWXYZ";Array.from(l).map(e=>({posX:e.offsetLeft,posY:e.offsetTop})),c.addEventListener("mousemove",e=>{let t=e.clientX,i=e.clientY;n.style.left=`${t}px`,n.style.top=`${i}px`});const u=e=>{e.classList.add("appear");let i=0,s=setInterval(()=>{e.innerText=e.dataset.value.split("").map((t,s)=>s<i?e.dataset.value[s]:g[Math.floor(Math.random()*g.length)]).join(""),i>=e.dataset.value.length&&(clearInterval(s),"JOMARI BORINES"!==e.dataset.value&&setTimeout(()=>{e.dataset.value="JOMARI BORINES",setTimeout(()=>{t.classList.add("appear"),u(e)},1e3)},2e3)),i+=1/3},50);PowerGlitch.glitch(".glitch",{playMode:"always",createContainers:!0,hideOverflow:!1,timing:{duration:3e3},glitchTimeSpan:{start:.5,end:.7},shake:{velocity:15,amplitudeX:.2,amplitudeY:.2},slice:{count:4,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0},pulse:!1})};setTimeout(()=>{let e=0,t=setInterval(()=>{e>=d.dataset.value&&(clearInterval(t),setTimeout(()=>{o.classList.add("appear"),u(o)},1e3)),e++,d.style.width=`${e}px`},10)},1500);let h=!1;document.addEventListener("mousedown",()=>{t.classList.remove("appear"),a.classList.add("loading"),s.classList.add("appear"),e=setTimeout(()=>{h=!0,i.style.display="none",r.style.display="flex"},3020)}),document.addEventListener("mouseup",()=>{clearTimeout(e),h||(t.classList.add("appear"),s.classList.remove("appear"),a.classList.remove("loading")),h=!1});const y=document.querySelectorAll(".boxCopy");a.addEventListener("mouseenter",()=>{y.forEach(e=>{e.style.transform="rotate(0deg)"})}),a.addEventListener("mouseleave",()=>{let e=0;y.forEach((t,i)=>{e=(i+1)*20,t.style.transform=`rotate(${e}deg)`})});let S=0;y.forEach((e,t)=>{S=(t+1)*20,e.style.transform=`rotate(${S}deg)`});const f=`
<p>
A student studying
  <span>Bachelor of Science in Computer Science</span> at
  Technological University of the Philippines - Manila. Picking
  computer science was not a difficult decision to me since I've
  already had experience in programming before enrolling to this
  university.
</p>

<p>
  My skills mainly focuses on building web applications however,
  my strength excels more in <span>backend development</span> since dealing with designs is not my forte and backend development is not limited to only web
  applications. Although my strength is on backend development, I still think that my <span>frontend development</span> skills is not below average.
</p>

<p>
  I started honing my <span>web development skills</span> this
  July 2024, dedicated in improving my skills by coding everyday
  ever since. Currently, my goal is to expand my tech stacks and
  gain experience by doing personal projects where my learnings
  are being applied.
</p>`,k=`
<h1 class="techStack">TECH STACK</h1>
              <div class="tech-stack">
                <div class="tech html">
                  <img src="img/html.png" alt="" />
                  <p>Html</p>
                </div>
                <div class="tech css">
                  <img src="img/css.png" alt="" />
                  <p>Css</p>
                </div>
                <div class="tech javascript">
                  <img src="img/js.png" alt="" />
                  <p>Javascript</p>
                </div>
                <div class="tech c++C">
                  <img src="img/c++.png" alt="" />
                  <p>C++</p>
                </div>
                <div class="tech react">
                  <img src="img/react.png" alt="" />
                  <p>React</p>
                </div>
                <div class="tech nodejs">
                  <img src="img/nodejs.png" alt="" />
                  <p>Nodejs</p>
                </div>
                <div class="tech express">
                  <img src="img/express.png" alt="" />
                  <p>Expressjs</p>
                </div>
                <div class="tech mongodb">
                  <img src="img/mongodb.png" alt="" />
                  <p>Mongodb</p>
                </div>
                <div class="tech redis">
                  <img src="img/redis.png" alt="" />
                  <p>Redis</p>
                </div>
                <div class="tech postgresql">
                  <img src="img/postgre.png" alt="" />
                  <p>Postgresql</p>
                </div>
                <div class="tech docker">
                  <img src="img/docker.png" alt="" />
                  <p>Docker</p>
                </div>
                <div class="tech git">
                  <img src="img/git.png" alt="" />
                  <p>Git CLI</p>
                </div>
                <div class="tech paaS">
                  <img src="img/paas.png" alt="" />
                  <p>PaaS</p>
                </div>
              </div>`,b=`
<h1 class="projectsHeader">MAJOR PROJECTS</h1>
              <div class="projectContainers">
                <a
                  href="https://academicpulse.onrender.com"
                  target="_blank"
                  class="project"
                >
                  <img src="img/academic.png" alt="" />
                  <div>
                    <h1>AcademicPulse</h1>
                    <p>
                      Crafted for seamless student management, our platform
                      excels in tracking student logs, validating IDs, and
                      streamlining administrative tasks.
                    </p>
                    <div class="techs">
                      <div>HTML</div>
                      <div>CSS</div>
                      <div>JAVASCRIPT</div>
                      <div>NODEJS</div>
                      <div>EXPRESSJS</div>
                      <div>REDIS</div>
                      <div>MONGODB</div>
                      <div>RENDER</div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://chomiii-navigation.netlify.app"
                  class="project"
                  target="_blank"
                >
                  <img src="img/map.png" alt="" />
                  <div>
                    <h1>Chomiii.nav</h1>
                    <p>
                      Start your day by planning the locations using
                      Chomiii.navigation app. Designed for giving routes and
                      distances towards your planned location.
                    </p>
                    <div class="techs">
                      <div>HTML</div>
                      <div>CSS</div>
                      <div>JAVASCRIPT</div>
                      <div>REACT</div>
                      <div>NETLIFY</div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://chomiii19.github.io/chomiii-bank/"
                  class="project"
                  target="_blank"
                >
                  <img src="img/bank.png" alt="" />
                  <div>
                    <h1>Chomi's Bank</h1>
                    <p>
                      Looking for a safe online bank to save your finances? With
                      intuitive features, safety measures, and a sleek
                      interface, it ensures a secure and convenient banking
                      experience.
                    </p>
                    <div class="techs">
                      <div>HTML</div>
                      <div>CSS</div>
                      <div>JAVASCRIPT</div>
                      <div>PAAS</div>
                    </div>
                  </div>
                </a>
              </div>`;p.addEventListener("click",e=>{if(v.forEach(e=>e.classList.remove("active")),e.target.classList.contains("dot")){let t=e.target.dataset.value;e.target.classList.add("active"),m.innerHTML="",m.insertAdjacentHTML("afterbegin",[f,k,b][t])}});
//# sourceMappingURL=index.d390863a.js.map
