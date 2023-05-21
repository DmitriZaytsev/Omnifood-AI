<p align="center">

<img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black">

<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">

<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">

<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">

<img src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black">

</p>

### About:

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Rubik&size=18&duration=1000&color=030A0E&multiline=true&repeat=false&width=435&height=60&lines=Responsive+and+cross%2Dbrowser+site+;with+Drag+and+Drop+feacture.)](https://git.io/typing-svg)

# Omnifood Project

![Presentation of site](README.assets/omnifood-project.png)

### Links

Live site: (https://omnifoodai-site.netlify.app/)

## Overview

#### Used technologies:

- CSS3
- HTML5
- JS(ES6+)
- Webpack
- Docker
  <br>

### What was realized?

1. Used media queries and JS for creating Mobile navigation.

![Responsive effect - video](README.assets/responsive-effect.gif)
<br>

2. Created ability to drag item without Drap and Drop Api. When it is above the red circle, the circle changes color. After dropping item on circle, these two elements are deleted.

![DragDrop effect - video](README.assets/DragDrop-effect.gif)
<br>

3. Realized smooth scrolling, sticky navigation with JS.

<strong>For cross-browser compatibility:</strong>

4. Used polyfill to support scroll bevavior "smooth". Used JS as an alternative to `@supports`. This was done more for practice than for real support. Also added vendors thanks to Webpack.

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

### With Webpack was implemented:

- concatenation, prefixing and compressing CSS
- transpiling and compressing JS modules
- compressing html
- minification images and convertion to .webp
<br>

### Usage Docker in project

1. Containers are connected by omnifood_network

2. Database container have 2 volumes - omnifood_data and omnifood_config

3. Mongo-express-container(needed for management of data using web-interface) is connected to database container.

4. Dockerfile created for building frontend part(all components in this directory)

5. Docker compose file created for building frontend and backend part(mongodb and mongo-express)
<br>

This is structure and my Docker Hub profile:

![Docker structure](README.assets/docker-structure.png)

And received result:

![Docker result](README.assets/docker-results.png)

## 🚀Quick Setup

1.  Clone this repository:

        git clone https://github.com/DmitriZaitsev/Omnifood-AI.git

2.  Install npm packages:

        npm i

3.  Open site in browser:

        npm start

## Setup with Docker
<br>
Install Docker and then...

### Variant 1(build whole app)

        docker compose up -d

### Variant 2(build frontend part)

1.  Pull image

        docker pull dmitrizaytsev/omnifood-project

2.  Run container

        docker run -p 8080:8080 --name frontend omnifood-project

### Variant 3(build frontend part)

1.  Build image

        docker build -t omnifood-frontend .

2.  Run container

        docker run -p 8080:8080 --name frontend omnifood-frontend

---

### 💌Contacts

Telegram: [@dmitr1_zaytsev](https://t.me/dmitr1_zaytsev)

Mail: <dmitri_zaytsev@bk.ru>
