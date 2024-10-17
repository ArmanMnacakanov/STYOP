var Banner = document.createElement('div')
Banner.setAttribute('class', 'banner')
Banner.setAttribute('id', 'banner_box')

var TitleBox = document.createElement('div')
var Title = document.createElement('h1')
Title.innerText = 'STYOP'
TitleBox.append(Title);

var Title2Box = document.createElement('div')
var Title2 = document.createElement('h3')
Title2.innerText = 'CREATIVE DIRECTOR'
Title2Box.append(Title2);

var ContextBox = document.createElement('div')
var Context = document.createElement('p')
Context.innerHTML = `I am a professional <b>UX Designer</b> and <b>Front-End Developer</b> creating modern and responsive designs for <b>Web</b> and <b>Mobile</b>. Let us work together. Thank you.`
ContextBox.append(Context);

var ButtonBox = document.createElement('div')
var Button = document.createElement('button')
Button.innerText = `Let's Begin`
ButtonBox.append(Button);

var appendBox = document.createElement('div')
appendBox.append(TitleBox, Title2Box, ContextBox, ButtonBox)
Banner.append(appendBox)

document.querySelector('main').append(Banner);


document.addEventListener('scroll', () => {
    var x = window.scrollY;

    if (x >= 0) {
        document.querySelector('header').style.height = '70px'
        document.querySelector('header').style.opacity = '1'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('.home').style.color = '#eb5424'
        document.querySelector('.worklink').style.color = 'black'
    } if (x >= 450) {
        document.querySelector('header').style.height = '70px'
        document.querySelector('header').style.opacity = '1'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('.worklink').style.color = '#eb5424'
        document.querySelector('.home').style.color = 'black'
        document.querySelector('.portfolio').style.color = 'black'
    }
    if (x >= 700) {
        document.querySelector('header').style.height = '70px'
        document.querySelector('header').style.opacity = '1'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('.portfolio').style.color = '#eb5424'
        document.querySelector('.worklink').style.color = 'black'
        document.querySelector('.resume').style.color = 'black'
    }
    if (x >= 1000) {
        document.querySelector('header').style.height = '70px'
        document.querySelector('header').style.opacity = '1'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('.resume').style.color = '#eb5424'
        document.querySelector('.portfolio').style.color = 'black'
        document.querySelector('.about').style.color = 'black'
    }
    if (x >= 1300) {
        document.querySelector('header').style.height = '70px'
        document.querySelector('header').style.opacity = '1'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('.about').style.color = '#eb5424'
        document.querySelector('.resume').style.color = 'black'
        document.querySelector('.contact').style.color = 'black'
    }

    if (x >= 3000) {
        document.querySelector('header').style.height = '70px'
        document.querySelector('header').style.opacity = '1'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('.contact').style.color = '#eb5424'
        document.querySelector('.about').style.color = 'black'
    }
})


var WorkConainer = document.createElement('div')
WorkConainer.setAttribute('class', 'Work_Container')
WorkConainer.setAttribute('id', 'Work_Container_Box')
var WorkTitleBox = document.createElement('div')
WorkTitleBox.setAttribute('class', 'WorkTitleBOX')
var Worktitle = document.createElement('h1')
Worktitle.innerHTML = `MY <span>WORK</span>`
WorkTitleBox.append(Worktitle)
WorkConainer.append(WorkTitleBox)
const WorkBox = document.createElement('div');
WorkBox.classList.add('WorkBox')
WorkConainer.append(WorkBox)
document.querySelector('main').append(WorkConainer)

var WorkData = [

    {
        icon: `<i class="fa-solid fa-link"></i>`,
        name: 'MOBILE UX',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
         sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.`
    },
    {
        icon: `<i class="fa-solid fa-bolt"></i>`,
        name: 'WEB DESIGN',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
         sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.`
    },
    {
        icon: `<i class="fa-solid fa-gauge-simple-high"></i>`,
        name: 'HTML TEMPLATES',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna.`
    }
]

WorkData.forEach((e) => {
    const Work = document.createElement('div');
    Work.classList.add('Work');
    const Work_img = document.createElement('div');
    Work_img.innerHTML = e.icon;
    const Work_Name = document.createElement('h2');
    Work_Name.innerText = e.name;
    Work_Description = document.createElement('p');
    Work_Description.innerText = e.description;
    Work.append(Work_img, Work_Name, Work_Description);
    WorkBox.append(Work)
}
)

var PortfolioContainer = document.createElement('div')
PortfolioContainer.setAttribute('class', 'PortfolioContainer');
PortfolioContainer.setAttribute('id', 'Portfolio_Container_Box');
var PortfolioTitleBox = document.createElement('div')
PortfolioTitleBox.setAttribute('class', 'PortfolioTitleBox')
var PortfolioTitle = document.createElement('h2');
PortfolioTitle.innerHTML = `MY <span>PORTFOLIO</span>`;
PortfolioTitleBox.append(PortfolioTitle)
document.querySelector('main').append(PortfolioContainer)

var Links = document.createElement('ul')
Links.setAttribute('class', 'Links')
var Links_Data = [
    {
        InnerTitle: 'ALL',
    },
    {
        InnerTitle: 'HTML',
    },
    {
        InnerTitle: 'Photoshop',
    },
    {
        InnerTitle: 'Wordpress',
    },
    {
        InnerTitle: 'Mobile',
    }
]
Links_Data.map((e) => {
    const link = document.createElement('li');
    link.innerHTML = `<button class="filter-btn" data-category = ${e.InnerTitle}> ${e.InnerTitle}</button>`
    Links.append(link)
})

var PortfolioBox = document.createElement('div')
PortfolioBox.setAttribute('class', 'Portfolio_Box')
PortfolioContainer.append(PortfolioTitleBox, Links, PortfolioBox)

var PortfolioData = [
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img1.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['HTML', 'Photoshop', 'Wordpress', 'Mobile']
    },
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img2.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['HTML', 'Wordpress', 'Mobile']
    },
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img3.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['Wordpress']
    },
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img4.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['HTML', 'Mobile']
    },
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img5.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['Wordpress']
    },
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img6.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['HTML', 'Photoshop']
    },
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img7.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['Photoshop']
    },
    {
        img: `https://templatemo.com/templates/templatemo_464_ultra_profile/images/portfolio-img8.jpg`,
        name: 'UX DESIGN',
        description: `Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit, sed<br> diam nonumm.`,
        id: ['Wordpress']
    }
]

const filterButtons = document.querySelectorAll('.filter-btn');

function dislayItems(filtteredItems) {
    PortfolioBox.innerHTML = '';
    filtteredItems.forEach((e) => {
        var Portfolio = document.createElement('div')
        Portfolio.setAttribute('class', 'Portfolio')
        Portfolio.style.backgroundImage = `url(${e.img})`
        var Portfolio_Info = document.createElement('div')
        Portfolio_Info.setAttribute('class', 'Portfolio_Info')
        Portfolio_Info.innerHTML = `
    <h3>${e.name}</h3>
    <p>${e.description}</p>`
        Portfolio.append(Portfolio_Info)
        PortfolioBox.append(Portfolio)
    })
}


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        if (category === 'ALL') {
            dislayItems(PortfolioData)
        } else {
            const filtteredItems = PortfolioData.filter(item => item.id.includes(category));
            dislayItems(filtteredItems)
        }
    })
})

dislayItems(PortfolioData)


var Profile_Skills = document.createElement('div')//conteynerna
Profile_Skills.setAttribute('class', 'ProfileSkills_container')
Profile_Skills.setAttribute('id', 'ProfileSkills_Box')
var ProfileTitleBox = document.createElement('div')
ProfileTitleBox.setAttribute('class', 'Profile')
var ProfileTitle = document.createElement('h1')
ProfileTitle.setAttribute('class', 'ProfileName')
ProfileTitle.innerHTML = `MY <span>PROFILE</span>`
var Profile_List = document.createElement('ul')
Profile_List.setAttribute('class', 'ProfileList')
ProfileTitleBox.append(ProfileTitle)
const Profile_box = document.createElement('div');
Profile_box.classList.add('profile_box')
Profile_box.append(Profile_List)
ProfileTitleBox.append(Profile_box)
var Profile_Data = [
    {
        name: 'Name',
        Inner: 'Styop Tonyan'
    },
    {
        name: 'Birthday',
        Inner: 'August 5, 2011'
    },
    {
        name: 'Adress',
        Inner: 'Armenia, Byureghavan'
    },
    {
        name: 'Phone',
        Inner: '098 *** ***'
    },
    {
        name: 'E-mail',
        Inner: 'fstx-mstx@gmail.com'
    },
    {
        name: 'Website',
        Inner: `www.fstx.com`
    }
]
Profile_Data.map((e, Index) => {
    if (Index === Profile_Data.length - 1) {
        const Profils = document.createElement('li');
        Profils.innerHTML = `<span>${e.name}</span> <a href ="#">${e.Inner}</a>`
        Profile_List.append(Profils)

    } else {
        const Profils = document.createElement('li');
        Profils.innerHTML = `<span>${e.name}</span> <h3>${e.Inner}</h3>`
        Profile_List.append(Profils)
    }

})
document.querySelector('main').append(Profile_Skills)

var Skill_Box = document.createElement('div')
Skill_Box.setAttribute('class', 'Skill_Box')

var Skill_Title = document.createElement('h1')
Skill_Title.setAttribute('class', 'Skill_Name')
Skill_Title.innerHTML = `SOME <span>SKILLS</span>`

var Skill_Text = document.createElement('p')
Skill_Text.innerHTML = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br> nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat <br> volutpat`

var Progress_Box = document.createElement('div')
Progress_Box.setAttribute('class', 'Progress_Box')
Skill_Box.append(Skill_Title, Skill_Text, Progress_Box)
var Skills_Progress_Data = [
    {
        Inner: 'HTML',
        max: 100,
        min: 100
    },
    {
        Inner: 'CSS',
        max: 100,
        min: 90
    },
    {
        Inner: 'JAVASCRIPT',
        max: 100,
        min: 80
    }
]
Skills_Progress_Data.map((e) => {
    const Progress_Title = document.createElement('label')
    Progress_Title.innerText = e.Inner
    var progres_value_box = document.createElement('div');
    const Progress_Value = document.createElement('span')
    const Progress = document.createElement('progress')
    Progress.value = e.min;
    Progress.max = e.max
    Progress_Title.max = e.Inner
    Progress_Value.innerHTML = ` ${e.min}%`
    progres_value_box.append(Progress_Title, Progress_Value,)
    Progress_Box.append(progres_value_box, Progress)
})
Profile_Skills.append(ProfileTitleBox, Skill_Box)

var Resume = document.createElement('div')//conteinerna
Resume.setAttribute('class', 'Resume')
Resume.setAttribute('id', 'Resume')
var Resume_Box = document.createElement('div')
Resume_Box.setAttribute('class', 'Resume_Box')
Resume_Box.innerHTML = `
<h4>THIS IS <span>ME</span></h4>
<h2>CREATIVE <span>DIRECTOR</span> </h2>
<p>This is free Bootstrap v3.3.4 mobile friendly layout from <a href ='#'>templatemo</a>. Feel free to use it for your website. Credit goes to <a href = '#'>Pixabay</a> for photos used in this template. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
`
Resume.append(Resume_Box)
document.querySelector('main').append(Resume)

var Social_Link = document.createElement('div')
Social_Link.setAttribute('class', 'Social_Link')
document.querySelector('main').append(Social_Link)
var Social_Link_Data = [
    {
        icon: `<i class="fa-brands fa-facebook-f"></i>`,
        title: 'FOLLOW ME ON',
        info: 'SOCIAL FACEBOOK'
    },
    {
        icon: `<i class="fa-brands fa-instagram"></i>`,
        title: 'FOLLOW ME ON',
        info: 'SOCIAL INSTAGRAM'
    },
    {
        icon: `<i class="fa-brands fa-tiktok"></i>`,
        title: 'FOLLOW ME ON',
        info: 'SOCIAL TIK TOK'
    }
]
Social_Link_Data.map((e) => {
    const Social_Info = document.createElement('a')
    Social_Info.setAttribute('class', 'Social_Info')
    Social_Info.innerHTML = `
    <div>
    ${e.icon}
    </div>

    <div>
    <h3>${e.title}</h3>
    <span>${e.info}</span>
    </div>
    `
    Social_Link.append(Social_Info)
}
)

var Drop_Line = document.createElement('div')//conteynerna
Drop_Line.setAttribute('class', 'Drop_Line')
Drop_Line.setAttribute('id', 'Drop_Line_Box')
document.querySelector('main').append(Drop_Line)
var Drop_Title = document.createElement('div')
Drop_Title.setAttribute('class', 'Drop_Title')
Drop_Title.innerHTML = `<h1>DROP <span>ME A LINE</span></h1>`
Drop_Line.append(Drop_Title)

var Input_Box = document.createElement('div')
Input_Box.setAttribute('class', 'Input_Box')
Input_Box.innerHTML = `
<div><input class = "Name" type = "text" placeholder = "Your Name"></input>
<input class = "Email" type = "email" placeholder = "Your Email"></input></div>
<div><input class = "Subject" type = "text" placeholder = "Your Subject"></input></div>
<div><textarea cols="150" rows="7" placeholder = "Your Message"></textarea></div>
<button>SHOOT MESSAGE</button>
`
Drop_Line.append(Input_Box)
document.getElementById('menu_btn').onclick = () => {
        document.querySelector('.Menu').classList.toggle('openmenu');
        document.getElementById('menu_btn').classList.toggle('open')
}
const navlinks = document.querySelectorAll('.Menu>ul>li>a');
console.log(navlinks);

navlinks.forEach((link)=>{
    link.onclick=()=>{
        document.querySelector('.Menu').classList.toggle('openmenu');
        document.getElementById('menu_btn').classList.remove('open')
    }
})