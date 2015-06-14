# hexo-theme-shed
>A pure and fresh hexo theme that crafted with jQuery and Bootstrap.

### Features
* Responsive layout
* List categories and tags in sidebar
* Highlight code with Highlight.js
* Delay load Duoshuo comment
* Delay load Swiftype Search

### Install
Execute the following command and modify theme in `_config.yml` to shed.

```bash
git clone https://github.com/tangjiujun/hexo-theme-shed.git themes/shed
```

### Configuration
* Replace `duoshuo_short_name` with your duoshuo short name at `theme/shed/_config.yml` line 8.
* Replace `theme/shed/source/img/favicon.ico` with your `favicon.ico`.
* Replace `swiftype_key` with your swiftype key at `theme/shed/source/js/blog.js` line 8

### Catena
Write a series of posts, such as reading notes.

```bash
hexo new page 'algorithm'
```

Then config `theme/shed/_config.yml` catena, like below:

```yaml
catena:
  Design Pattern: '/design-pattern'
  Algorithm: /algorithm
```
