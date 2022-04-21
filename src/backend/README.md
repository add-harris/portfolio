---
sidebar: auto
---

# Backend

Although I have plenty of experience in developing backend projects - 
none of it is in the public domain! :sleepy:

So I built a small demo project just for this portfolio, and....

# :tada: :information_desk_person:

## Kanye REST API

Voila! ... Welcome to the Kanye REST API (Replica). A replica of the [Kayne REST project](https://kanye.rest/).


><h4 class="quote">A free REST API for random Kanye West quotes (Kanye as a Service)</h4>
 
<style>
.quote {
  color: dodgerblue;
}
</style>

Just to be clear, this is replica of an API I made for returning randomized Kanye Quest quotes.
What more could you ever want from an API?

Give it a try...

::: tip Kanye Says ...
<quote-box :url="$themeConfig.quotesUrl"/>
:::

### Usage :notebook_with_decorative_cover:

#### Example Request

```shell
curl -v https://quotes-api-sv3nhcltwa-nw.a.run.app/v1/quotes/kanye
```

This is a live API, freely available on the internet at 
[https://quotes-api-sv3nhcltwa-nw.a.run.app](https://quotes-api-sv3nhcltwa-nw.a.run.app/v1/quotes/kanye)

The source code, along with examples of how to use it, 
are available here in the [project repo](https://github.com/add-harris/quotes-service).

It is also documented with OpenAPI 3 specifications with a Swagger-UI 
available [here](https://editor.swagger.io/?url=https://raw.githubusercontent.com/add-harris/quotes-service/main/src/main/resources/openapi.yaml).

### Tech Stack :man_technologist:

Although the majority of professional experience is with Java 11 and Spring-Boot,
this API is actually built using some alternative latest JVM technologies:

>- [Java 17](https://openjdk.java.net/projects/jdk/17/)
>- [Kotlin](https://kotlinlang.org/)
>- [Quarkus](https://quarkus.io/)
>- [Maven](https://maven.apache.org/)
>- and [Docker](https://www.docker.com/?)

Comprehensively tested with:

>- [Junit 5](https://junit.org/junit5/)
>- [mockk](https://mockk.io/) (a dedicated mocking library for Kotlin)
>- and [RestAssured](https://rest-assured.io/)

And has a fully automated CI/CD pipeline in place using:

>- [Github](https://github.com/)
>- [Google Cloud Build](https://cloud.google.com/build)
>- [Google Container Registry](https://cloud.google.com/container-registry)
>- [Google Cloud Run](https://cloud.google.com/run)


<script>
import QuoteBox from "../.vuepress/components/QuoteBox";
    
export default {
        
    components: {QuoteBox}

}
</script>