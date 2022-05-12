# {{cookiecutter.main.name}}

```{include} ../homes/{{cookiecutter.main.slug}}.md
```

---

{% for table in cookiecutter.main.tables %}


:::::{panels} :column: col-12

::::{div} row

```{div} col-8
**{{table.name}} Table**
```

```{div} col-4
 <a href="{{table.csv_url}}">{badge}`download csv,badge-primary`</a>
```
::::

^^^
::::{div} row

```{div} col-4
**size**: {{table.n_rows}} × {{table.n_cols}}
```

```{div} col-4
**updated**: {{table.update_date}}
```

```{div} col-4

 <a href="{{table.profile_url}}">{badge}`table description,badge-primary`</a>

```

::::

:::::

{% endfor %}


## Sources

- project url: {{cookiecutter.main.project_url}}
{% if cookiecutter.main.source_urls %}- data downloaded from
{% for url in cookiecutter.main.source_urls %}  - {{url}}
{% endfor %}
{% endif %}

## Exploration

```{tableofcontents}
```