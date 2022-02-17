# Django Markdownify

```
{% load markdownify %}
{{'Some *test* [link](#)'|markdownify }}
```
아래처럼 변한다
```
<p>
  Some <em>test</em> <a href="#">link</a>
</p>
```

## References
* [Django Markdownify - A Django Markdown filter](https://django-markdownify.readthedocs.io/en/latest/index.html)