---
sidebar: auto
video:
  mp: "https://storage.googleapis.com/portfolio_images_src/portfolio/thatlittlepuff.mp4"
  ogg: "https://storage.googleapis.com/portfolio_images_src/portfolio/thatlittlepuff.ogv"
sources:
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-5580.JPG"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0000.jpg"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0020.jpg"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0012.jpg"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0016.jpg"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0017.jpg"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0004.jpg"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0018.jpg"
  - "https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-20220421-WA0022.jpg"
---

# Cloud Computing :partly_sunny:

Before we talk about Cloud Computing, first let me show you something from Camera Roll... :camera:

## St Lucia :palm_tree::sunny:

Here are some snaps from our family holiday to 
[St Lucia](https://www.google.com/maps/place/St+Lucia/@13.9128128,-61.1106027,11z/data=!3m1!4b1!4m5!3m4!1s0x8c406065f12da31d:0x6e7486c4e8399df5!8m2!3d13.909444!4d-60.978893), 
back in 2019:

<img-carousel :sources="$frontmatter.sources"></img-carousel>

## TikTok :smile_cat:

This is TikTok account [@thatlittlepuff](https://www.tiktok.com/@thatlittlepuff?lang=en) 
that I found during lockdown of Chef-Cat that makes 
cocktails and human food :fried_shrimp::dango::shaved_ice: :yum:

<video-box :ogg="$frontmatter.video.ogg" :mp="$frontmatter.video.mp"></video-box>

How amazing is that !? :heart_eyes_cat:

## "That's lovely, but why?" you ask...

__All the media content for this site is stored and served
using [Google Cloud Storage](https://cloud.google.com/storage) (Googles equivalent of Amazon S3).__

They are set up in my personal GCP account and made 
available publicly using urls like this:

>- <span class="wrap-text">[https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-5580.JPG](https://storage.googleapis.com/portfolio_images_src/portfolio/st-lucia/IMG-5580.JPG)</span>

In fact most of the projects in this portfolio
incorporate some form of Google Cloud technology.

The [Kanye REST (replica)](/backend/#kanye-rest-api) API for example uses:

>- [Google Cloud Build](https://cloud.google.com/build) for CI / CD
>- is stored as a Docker image in [Google Container Registry](https://cloud.google.com/container-registry)
>- and is deployed and hosted to [Google Cloud Run](https://cloud.google.com/run).

## Google Cloud Platform - GCP

I have bee using GCP for my personal projects over the past few years,
giving my great working knowledge over a host GCP technologies, including:

>- [Google Cloud Build](https://cloud.google.com/build)
>- [Google Cloud Storage](https://cloud.google.com/storage)
>- [Google Cloud Functions](https://cloud.google.com/functions)
>- [Google Cloud Pub/Sub](https://cloud.google.com/pubsub)
>- [Firestore](https://cloud.google.com/firestore)
>- [Firebase](https://firebase.google.com/)
>- [Google Container Registry](https://cloud.google.com/container-registry)
>- [Google Cloud Run](https://cloud.google.com/run)

## Amazon Web Services - AWS

The majority of my professional experience has been working in 
[AWS cloud](https://aws.amazon.com/).
Most projects I've been a part of since around 2017 have been hosted there, 
and I'm not one to shy away from a bit of DevOps.
This has given me plenty of hands-on experience with AWS technologies, from 
[S3](https://aws.amazon.com/s3/) buckets 
to [EC2](https://aws.amazon.com/ec2/) instances, 
load balancers and more:

>- [S3](https://aws.amazon.com/s3/)
>- [SQS](https://aws.amazon.com/sqs/)
>- [EC2](https://aws.amazon.com/ec2/)
>- [ECR](https://aws.amazon.com/ecr/)
>- [KMS](https://aws.amazon.com/kms/)

<script>
import ImgCarousel from "../.vuepress/components/ImgCarousel";
import VideoBox from "../.vuepress/components/VideoBox";
export default { components: {ImgCarousel, VideoBox} }
</script>

<style>

.wrap-text {
  max-width: 100%;
  word-wrap: break-word;
}

</style>
