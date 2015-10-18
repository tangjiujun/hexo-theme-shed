# hexo-theme-shed
>A pure and fresh hexo theme that crafted with jQuery and Bootstrap.

### Features
* Responsive layout
* List categories and tags in sidebar
* Highlight code with Highlight.js
* Delay load Duoshuo comment
* Delay load Swiftype Search
* Change backgound image per 10 minutes

### Install
Execute the following command and modify theme in `_config.yml` to shed.

```bash
git clone https://github.com/tangjiujun/hexo-theme-shed.git themes/shed
```

### Configuration

```yaml
menu:
  Projects: /projects
  Archives: /archives

# catena:
  # Design Pattern: '/design-pattern'

duoshuo_short_name: 'duoshuo short name'

links:
  about: /about.html
  feed: /atom.xml

site_start_time: 'site start time'

swiftype_key: 'swiftype key'
```

### Catena
Write a series of posts, such as reading notes.

```bash
hexo new page 'algorithm'
```

Then config `theme/shed/_config.yml` catena, like below:

```yaml
catena:
  Algorithm: /algorithm
```
