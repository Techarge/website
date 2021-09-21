# Techarge website
This site is built using [hugo](https://gohugo.io/getting-started/installing/#quick-install)
and [Tailwindcss](https://tailwindcss.com/)

After installing hugo, run the test site using: 
```
cd techarge
npm i 
npm run dev
```

We also use alpinejs and turbolinks. Note you will need to install latest versions of `go` and `git`:
```
hugo mod get -u ./...
```

## How to create a new blog post 
cd into techarge directory then use 
hugo new posts/[INSERT BLOG POST TITLE]

for example to create new blog post emsx I used 
hugo new posts/emsx.md

to see the post on the Blog index Page you will need to set draft to false
