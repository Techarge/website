---
title: "RSS Feed"
date: 2021-10-13T12:14:56+01:00
draft: False
summary: A way to standardise your content so users can easily keep up with your latest post updates without storing user emails.
authors: ["Zoe Utting"]
featured_image: ["/images/RSS_BLOG.png"]
categories: ["Latest Tech"]
---
We have recently added the option for our users to view our blog as an RSS Feed in XML which, you can find a link to on our main blog page.

RSS stands for Really Simple Syndication, it provides a way to standardise content so users can easily keep updated with their favourite websites, blog and social media pages. Using RSS Feed, users no longer have to check each of their favourite sites for new content as they can get a notification for website updates. RSS Feed generates automatically, so users get notifications soon as the site is updated. 

## How do I get started with RSS?
There are many RSS Feed readers available, but the best way to find the most popular and update to date reader is to do a google search. When you have found a reader you would like to use which matches your preferences. There should be an option to add the content through a URL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

## How can I find RSS Feed URLs?
How you view RSS Feed depends on the website your favourite content is on but on many sites, you can view it by adding /feed to the URL or by keeping a lookout for the RSS icon.
![RSS Icon for Blog](/images/rss.png "rss icon")

**Figure 1** - RSS icon

On our site, you can find a link to our RSS options on our blog page or visit our RSS page at [https://techarge.co.uk/rss/](https://techarge.co.uk/rss/). We have also allowed our users to filter their RSS Feed more by providing author and category options. Users can then subscribe to a particular author's content or a specific category they enjoy like Latest in Tech.

## What is the advantages of Providing RSS on my site?
By providing RSS Feed, it helps to keep your audience updated with your content whilst avoiding storing user data. Many sites update their users through email newsletters, but not all users like websites having access to their email due to spam or privacy concerns. This helps you to keep your audience as users don't have to provide any of their details.

## How did you create your website's RSS Feed?
Our site is developed using Hugo, so we found a guide to help us to set up our RSS Feed online. [https://gohugo.io/templates/rss/](https://gohugo.io/templates/rss/) is the instructions for anyone else using Hugo. You can often find other helpful guides online depending on how your site is built. 

For us, the steps consisted of updating our site's .toml file to include params for authors. Then you have to create an XML File which is what RSS Feed is written in. Here is a link to the XML File we used. 
[https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/rss.xml](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/rss.xml)

You then add a link to this file as part of your website's header using a link tag.With relationship as "alternate" and type as "application/rss+xml".

```<link rel="alternate" type="application/rss+xml" href="https://example.com/index.xml" title="Site Title">```

We then chose to output RSS into an HTML page which uses a range loop to output all our values with an XML link to each output. There is already a guide that we looked at for guidance. https://pakstech.com/blog/hugo-rss/

## Do people still use RSS Feed?
Many people have discussed RSS as old technology that not many sites still use, and most modern sites rely on email newsletters to keep their users updated. This feed is still popular with podcasts, news and blogs. It is also one of the ways Google play and Itunes collect the newest podcast episodes from a range of sites.


### RSS Setup Links
RSS Templates - Hugo [https://gohugo.io/templates/rss/](https://gohugo.io/templates/rss/)

Add an RSS Feed to Your Hugo Blog - PAKSTECH [https://pakstech.com/blog/hugo-rss/](https://pakstech.com/blog/hugo-rss/)

Hugo XML - Github [https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/rss.xml](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/rss.xml)


### References
What Is an RSS Feed? (And Where to Get It) - Lifewire [https://www.lifewire.com/what-is-an-rss-feed-4684568](https://www.lifewire.com/what-is-an-rss-feed-4684568)

What is an RSS feed? - digitaltrends [https://www.digitaltrends.com/computing/what-is-an-rss-feed/](https://www.digitaltrends.com/computing/what-is-an-rss-feed/)

RSS Made Easy - Youtube [https://www.youtube.com/watch?v=6HNUqDL-pI8](https://www.youtube.com/watch?v=6HNUqDL-pI8)





