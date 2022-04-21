---
sources:
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-1.png"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-2.png"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-3.png"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/2048/2048-6.png"
---

# 2048 Game

2048 is a sliding panel game, use the arrow keys 
:arrow_left: , :arrow_up: , :arrow_right: , :arrow_down: , 
to slide panels around.  
Hit two of the same number together 
to add them up.

The goal is to reach 2048! But you can keep playing for as long as want 
to beat your high score :100:

#

<img-carousel :sources="$frontmatter.sources"></img-carousel>

## Play :game_die:

Give it a try, it's available at:

>- [https://add-harris.github.io/2048-game/](https://add-harris.github.io/2048-game/)

## Tech Stack :man_technologist:

I am always keen to learn and experiment with new exciting technologies :man_student:  
So I made this app with a few that I am particularly interested in:

>- [VueJs](https://vuejs.org/)
>- and [NuxtJs](https://nuxtjs.org/)

It is then built with [NodeJs](https://nodejs.org/en/) and deployed to [Github Pages](https://pages.github.com/).

All source code is available here in the [project repo](https://github.com/add-harris/2048-game).

<script>
import ImgCarousel from "../.vuepress/components/ImgCarousel";
export default { components: {ImgCarousel} }
</script>
