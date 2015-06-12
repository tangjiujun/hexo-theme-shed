# hexo-theme-shed
>A pure and fresh hexo theme that crafted with jQuery and Bootstrap.

### Features
* Responsive layout
* List categories and tags in sidebar
* Highlight code with Highlight.js
* Delay load Duoshuo comment
* Delay load Swiftype Search

### Configuration
* Config `_config.yml` and `theme/shed/_config.yml`
* Replace `theme/shed/source/img/favicon.ico` with your favicon
* Replace 'swiftype_key' with your swiftype key at `theme/shed/source/js/blog.js` line 8

### Catena
Write a series of posts, such as reading notes.

```bash
hexo new page 'algorithm'
```

Then config `theme/shed/_config.yml` catena, like below:

```yaml
# 系列
catena:
  Design Pattern: '/design-pattern'
  Algorithm: /algorithm
```
