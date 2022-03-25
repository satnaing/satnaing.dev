---
coverImageAlt: Sat Naing Portfolio website & Blog
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2022-03-25T16:55:12.000+00:00
tags:
- NextJS
- TailwindCSS
- HeadlessCMS
- Blog
author: Sat Naing
type: article
coverImage: https://res.cloudinary.com/noezectz/image/upload/v1648227332/SatNaing/satnaing-portfolio-and-blog_z3lxkb.png
title: How Do I Develop My Portfolio Website & Blog
description: My experience about developing my first portfolio website and a blog
  using NextJS and a headless CMS.
excerpt: My journey about planning, designing and developing my very first portfolio
  website and my personal blog. Thoughts about my motivation for this project and
  experiences.
slug: how-do-i-develop-my-portfolio-and-blog
featured: true
category: How Do I

---
## Motivation

I've been always thinking about launching my own website with my custom domain name (**satnaing.dev**) since my college student life. But that never happened until this project. I've done several projects and works about web application development but I didn't make an effort to do this.

So, "what about blog?" you may ask. Yeah, blog also has been in my  project list for some time. I always wanted to make a blog project using some of the latest technologies. However, I've been busy with my works and other projects so that blog project has never been started.

Then, one day, when I browse the internet and watching YouTube, one YouTuber (he is also a developer of course) suggested that devs should make a blog project in order to have their own platform to write down experiences and projects. After watching that clip, I decided to make a blog and my own portfolio as soon as possible. Plus, I have decent experiences and confidence to develop this project.

## Tech Stack

For the front-end, I wanted to use React. But React alone is not good enough for SEO; and I did have to consider many factors like routing etc. So, I chose NextJS as my main front-end stack. And of course TypeScript for type checking. (It's said that you'll love TypeScript when you're used to it 😉)

For styling, I use TailwindCSS. This is because I love developer experience that Tailwind gives and it has a lot of flexibilities compared to other component UI libraries like MUI or React Bootstrap.

All contents of this project reside within the GitHub repository. All my blog posts (including this one) are written in Markdown file format since I'm very used to with this. But to write Markdown along with its frontmatter effortlessly, I use Forestry headless CMS. It is a git-based CMS that can serve Markdown and other contents. Because of this, I can write my contents either using Markdown or wysiwyg editor. Besides, writing frontmatters with this is a breeze.

In conclusion, these are the tech stack I've used for this project.

* Front-end: NextJS (TypeScript)
* Styling: TailwindCSS
* CMS: Forestry Headless CMS
* Deployment: Vercel

## Features

The following are certain features of my portfolio and blog

### SEO Friendly

The entire project is developed with SEO focus in mind. I've used proper meta tags, descriptions and heading alignments. This website is now indexed by Google.

> You can search this website on google by using keywords like 'sat naing dev'

![searching satnaing.dev on google](https://res.cloudinary.com/noezectz/image/upload/v1648231400/SatNaing/satnaing-on-google_asflq6.png "satnaing.dev is indexed")

Moreover, this website will be displayed well when shared to social media due to properly used meta tags.

![Card layout when shared to Facebook](https://res.cloudinary.com/noezectz/image/upload/v1648231679/SatNaing/satnaing-dev-on-facebook_zyth0m.png "Card layout when shared to Facebook")

### Light & Dark Themes

Due to dark theme trend in recent years, many websites include dark theme out of the box nowadays. Certainly, my website also supports light & dark themes.

### Fully Accessible

This website is fully accessible. You can navigate around by only using keyboard. I put all a11y enhancement best practices like including alt text in all images, no skipping headings, using semantic HTML tags, using aria-attributes properly.

### Search box, Categories & Tags

All blog contents can be searched by search box. Moreover, contents can be filtered by categories and tags. In this way, blog readers can search and read what they really want.

### Performance and Lighthouse Score

This website got very good performance and lighthouse score thanks to proper development and best practices. Here's the lighthouse score for this website.

![satnaing.dev Lighthouse score](https://user-images.githubusercontent.com/53733092/159957822-7082e459-11e9-4616-8f1e-49d0881f7cbb.png "satnaing.dev Lighthouse score")