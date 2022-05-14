# {{cookiecutter.main.name}}

```{include} ../homes/{{cookiecutter.main.slug}}.md
```

## ERD

```{mermaid}
{{ cookiecutter.main.erd_mermaid }}
```

## Exploration / Analysis



## Tables

> There {% if cookiecutter.main.n_tables|int > 1 %}are{% else %}is{% endif %} {{cookiecutter.main.n_tables}} table{% if cookiecutter.main.n_tables|int > 1 %}s{% endif %}{% if cookiecutter.main.update_str %} and the [sources](#sources) are **checked for updates {{ cookiecutter.main.update_str }}** {% endif %}

{% for table in cookiecutter.main.tables %}


:::::{panels} :column: col-12

::::{div} row

```{div} col-9
**{{table.name}} Table**
```

```{div} col-3
 <a href="{{table.csv_url}}">{badge}`Download CSV,badge-primary`</a>
```
::::

^^^
::::{div} row

```{div} col-4
**Size**: {{table.n_rows}} × {{table.n_cols}} ({{table.csv_filesize}})
```

```{div} col-5
**Last Changed**: {{table.update_date}}
```

```{div} col-3

 <a href="{{table.profile_url}}">{badge}`Open Table Profile,badge-success`</a>

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