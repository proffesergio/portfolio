(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/profile.ab50a9be.jpg"},16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(14),i=t.n(s),l=(t(21),t(2)),o=t(3),c=t(5),m=t(4),d=t(15),u=t.n(d),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:u.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#tools"},"Tools")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),t}(n.Component),g=t(6),b=t(11),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," "),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:bilal.hossai1@gmail.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(g.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(g.a,{icon:b.a})))))}}]),t}(n.Component),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),f=t(7),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).projects=e.projects,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Projects"),this.projects.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-12"},r.a.createElement("h3",{className:"mb-0"},r.a.createElement(g.a,{icon:f.c,color:"blue"}),r.a.createElement("span",{className:"ml-3"},e.title)),r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:f.d,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.aboutWork)))}))))}}]),t}(n.Component),N=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("div",{className:"subheading mb-3"},e.major),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Application Programming & Development"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:f.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),t}(n.Component),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).tools=e.tools,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"tools"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Tools"),r.a.createElement("div",{className:"subheading mb-3"},"Other Tools & Technologies"),r.a.createElement("div",{className:"row"},this.tools.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:f.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),t}(n.Component),j=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),y=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).awards=e.awards,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(g.a,{icon:f.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))})))))}}]),t}(n.Component),D=t(8),O=t(12),S=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={landingData:D.landing,experience:D.experience,projects:D.projects,education:D.education,skills:D.skills,tools:D.tools,interests:D.interests,awards:D.awards},O.a.initialize("UA-158818625-1"),O.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(h,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(v,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{projects:this.state.projects}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{tools:this.state.tools}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(y,{awards:this.state.awards})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Billal ","lastName":"Hossain","phoneNumber":"+8801842168117","bio":"A highly organized and self-motivated programmer who is passionate about solving problems. Known as a self-starter, team player and good at multitasking who is strive to consistently exceed expectations. I have strong knowledge of object-oriented programming and application development tools using different programming languages.","email":"bilal.hossai1@gmail.com","linkedin":"https://linkedin.com/in/hossainbillal/","github":"https://github.com/proffesergio"},"experience":[{"position":"Junior Software Engineer (Intern)","organization":"Geeksntechnology","aboutWork":"Selected to develop a client-based online wholesale web application. Key responsibilities and accomplishments:|\u2756 Handled database and Web site programming tasks (primarily using Php, Javascript, HTML, CSS, Bootstrap,) working an average of 20 hours per week while maintaining regular classes.|\u2756 Resolved as many problems as I could as a beginner and used Laravel web application framework to develop the online wholesale mobile phone shop.","fromDate":"August 2019","toDate":"December 2019"},{"position":"Web Developer (Part-time)","organization":"VectorIT Solutions","aboutWork":"Developed a web interface for the company itself using Bootstrap, HTML5, CSS3, Javascript","fromDate":"January 2020","toDate":"May 2020"},{"position":"Graphic Content Creator","organization":"MyGasBD Ltd","aboutWork":"Key responsibility was to design creative flyers, posters, banners and promote them on digital social media platforms based on different marketing strategies.","fromDate":"July 2018","toDate":"December 2018"}],"projects":[{"title":"Progressive Web Application","aboutWork":"Developed using Spring Boot Framework and Vaadin Framework. |\u2022 RESTful API with proper documentation using Swagger. |\u2022 Followed the Test-Driven Development (TDD) approach with Unit and Integration Tests. |\u2022 Built with microservices architecture, independent back-end and front-end apps running on different server on Heroku. |\u2022 Continuous Integration followed by Version Controlling via Github.","live":"www.registration-frontend.herokuapp.com"},{"title":"Android TODO Application","aboutWork":"\u2022 SQLite Room Persistence Library was used to create an offline database cache. |\u2022 Developed UI/UX and used proper Room architecture pattern. |\u2022 Threading and AsyncTask used to get smooth transition between different fragments.","live":""},{"title":"Django Blog App","aboutWork":"\u2022\\nSimple blog app using Django Framework, Bootstrap, Javascript, HTML5,\\nCSS3.\\n\u2022\\nImplemented user registration attached with a SQL database to store user\\ninformation.\\n\u2022\\nResponsive design to achieve the goal of smooth access from any device."}],"education":[{"university":"Southeast University","degree":"Bachelor of Computer Science and Engineering","major":"Software Engineering","gpa":"2.98","fromDate":"July 2016","toDate":"January 2020"},{"university":"Gulshan Model High School and College","degree":"Higher Secondary Certificate","major":"Science","gpa":"4.17","fromDate":"January 2013","toDate":"December 2015"},{"university":"Dulalpur CM High School","degree":"Secondary School Certificate","major":"Science","gpa":"5.00","fromDate":"January 2008","toDate":"December 2012"}],"skills":[{"name":"Java Object Oriented Programming"},{"name":"Functional Programming"},{"name":"Web Application Development"},{"name":"Data Structures"},{"name":"Data Mining"},{"name":"Version Control [Git]"},{"name":"Unit Testing [JUnit]"},{"name":"Springboot Framework"},{"name":"Java FX FXML"},{"name":"Hibernate"},{"name":"RESTful API"},{"name":"Web Services"},{"name":"Relational Databases(MySQL / PostgreSQL)"},{"name":"MongoDB / NoSQL"},{"name":"Netflix Eureka Discovery/Gateway Server Setup"},{"name":"Tomcat Apache Server Setup"},{"name":"Cloud Deployment [Heroku, AWS]"}],"tools":[{"name":"IntelliJ IDEA"},{"name":"Apache Netbeans"},{"name":"Adobe XD"},{"name":"Adobe Illustrator"},{"name":"Adobe Photoshop"},{"name":"WEKA [Data Mining Tool]"},{"name":"Linux OS"},{"name":"HTML5"},{"name":"CSS"}],"interests":{"paragraphOne":"Apart from being a computer programmer, I enjoy most of my time being at outdoors and play football. During the winter season, I love cycling around a lot. I enjoy hiking, free climbing, and kayaking.","paragraphTwo":"When forced indoors, I follow a number of sci-fi, thriller and crime genre movies and television shows, I am a true technology geek, and I spend a most of my time exploring the latest technology advancements in the current tech world."},"awards":[{"awardDetail":"Logo Design Contest Winner \u25aa SEU Alumni Association"},{"awardDetail":"Logo Design Contest Winner \u25aa SEU Computer Club"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.1d819df2.chunk.js.map