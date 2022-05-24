# {{cookiecutter.main.name}}

```{include} ../datasets/{{cookiecutter.main.slug}}/description.md
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

{% for notebook in cookiecutter.main.notebooks %}


:::::{panels} 
    :body: bg-warning
    :column: col-12

::::{div} row

```{div} col-4
**{{notebook.title}} Analysis**
```

```{div} col-4
 <a href="../datasets/{{cookiecutter.main.slug}}/{{notebook.name}}.html">{badge}`Open Notebook,badge-success`</a>
```

{% if (notebook.figures|length + notebook.output_html|length) == 0 %}
    {% set button_text = "No Figure" %}
    {% set button_disabled = "disabled" %}
{% else %}
    {% set button_text = "Figure" %}
    {% set button_disabled = "" %}
{% endif %}


```{div} col-4
<button class="sphinx-bs badge badge-success" onclick="hideReveal('slideshow', {{loop.index0}}, true)" {{button_disabled}}>{{button_text}}</button>

```
::::
:::::

::::::{div} slideshow start-dis
:::::{panels}
:container: container-lg
:column: col-12

::::{div} row

{% for figure in notebook.figures %}
```{image} ../datasets/{{cookiecutter.main.slug}}/{{figure}}
:class: myslides start-dis
```
{% endfor %}

{% for html_out in notebook.output_html %}
:::{div} myslides start-dis
```{include} ../datasets/{{cookiecutter.main.slug}}/{{html_out}}
```
:::
{% endfor %}

::::

^^^
::::{div} row

<div class = "col-6 docutils" align = "right">
<button  onclick="slideImage({{loop.index0}}, -1)">&#10094;</button>
</div>

<div class = "col-6 docutils" align = "left">
<button  onclick="slideImage({{loop.index0}}, 1)">&#10095;</button>
</div>

::::

:::::
::::::

{% endfor %}
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

```{div} col-4
**{{table.name}} Table**
```

```{div} col-4
 <a href="{{table.csv_url}}">{badge}`Download CSV,badge-primary`</a>
```

```{div} col-4
 <a href="{{table.profile_url}}">{badge}`Open Table Profile,badge-success`</a>
```

::::

^^^
::::{div} row

```{div} col-4
**Size**: {{table.n_rows}} × {{table.n_cols}} ({{table.csv_filesize}})
```

```{div} col-4
**Last Changed**: {{table.update_date}}
```

```{div} col-4
<button class = "sphinx-bs badge badge-success" onclick="hideReveal('head-dataframe', {{loop.index0}})">First 5 rows</button>
```
::::
:::::

::::{div} head-dataframe start-dis
{{ table.head_html }}
::::
{% endfor %}

## Sources

- project url: {{cookiecutter.main.project_url}}
{% if cookiecutter.main.source_urls %}- data downloaded from
{% for url in cookiecutter.main.source_urls %}  - {{url}}
{% endfor %}
{% endif %}
