<p align="center">

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

</p>
###About:
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Rubik&size=18&duration=1000&color=030A0E&multiline=true&repeat=false&width=435&height=60&lines=Responsive+and+cross-browser+site+;with+Drag+and+Drop+feacture.)](https://git.io/typing-svg)

#Omnifood Project
![Presentation of site](README.assets\omnifood-project.png)

###Links
Live site: (https://)

***

##Overview
####Used technologies:
-  CSS3
-  HTML5
-  JS(ES6+)
-  Webpack
<br>

###What was realized?
1. Used media queries and JS for creating Mobile navigation.<br>
![Responsive effect - video](README.assets\responsive-effect.gif)
<br>

2. Created ability to drag item without Drap and Drop Api. When it is above the red circle, the circle changes color. After dropping item on circle, these two elements are deleted.

![DragDrop effect - video](README.assets\DragDrop-effect.gif)

3. Realized smooth scrolling, sticky navigation with JS.

<strong>For cross-browser compatibility:</strong>

4. Use polyfill to support scroll bevavior "smooth" in Safari. Used JS as an alternative to @supports(for support Safari too🙃). Added vendors thanks to Webpack.

Support for last versions of browsers:

    <picture>
        <source
                type="image/webp"
                srcset="img\omnifood-logo.webp"
                sizes="22" />
        <img
                src="img\omnifood-logo.png"
                height="22"
                alt="Omnifood logo"
                class="logo" />
    </picture>
<br>


###With Webpack was implemented:
- concatenation, prefixing and compressing CSS
- transpiling and compressing JS modules
- compressing html
- minification images and convertion to .webp
***
##🚀Quick Setup
1. Clone this repository:

        git clone https://github.com/DmitriZaitsev/Omnifood-AI.git

2. Install npm packages:

        npm i

3. Open site in browser:

        npm start
***
###💌Contacts
Telegram: [@dmitr1_zaytsev](https://t.me/dmitr1_zaytsev)
Mail: [dmitri_zaytsev@mail.ru](dmitri_zaytsev@bk.ru)
