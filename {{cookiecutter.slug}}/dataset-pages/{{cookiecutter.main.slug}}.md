# {{cookiecutter.main.name}}

```{include} ../homes/{{cookiecutter.main.slug}}.md
```
{% if cookiecutter.main.erd_mermaid %}
## ERD

```{note}
WIP: extend this

This is an [ERD Diagram](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) / [Schema Diagram](https://en.wikipedia.org/wiki/Database_schema) mix. It is generated automatically from the code that creates the data. It shows names and types of variables stored in different tables, and the links between them.
```


```{mermaid}
{{ cookiecutter.main.erd_mermaid }}
```
{% endif %}

## Exploration / Analysis

```{note}
Here are some summaries of initial analyses we conducted on the tables of the dataset.
```


WIP: cards here, that summarize the notebooks where we put some analysis, looks something like this:

:::::{panels}

:header: bg-warning
:column: col-12

::::{div} row

```{div} col-4
**Notebook Title**
```

```{div} col-4
Subtitle if possible?
```

```{div} col-4
 <a href="../datasets/{{cookiecutter.main.slug}}/intro.html">{badge}`Open Notebook,badge-success`</a>
```
::::

^^^
::::{div} row

```{div} col-4
??
```

```{div} col-4
**Modified**: 2022-04-24 21:41?
```

```{div} col-4
 <a href="">{badge}`Download Notebook?,badge-primary`</a>
```

::::

:::::

```{tableofcontents}
```


## Tables

```{note}
WIP: extend this

These are download links and some basic information about the tables. The Table Profile is probably the first thing to look at when considering downloading a table. 

Also, in some cases, the dataset updates periodically, the logic of this is summarized below

```

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