# {{cookiecutter.main.name}}

```{include} ../homes/{{cookiecutter.main.slug}}.md
```
{% if cookiecutter.main.erd_mermaid %}
## ERD

```{admonition} What is an Entity Relationship Diagram (ERD)?
:class: dropdown
An **entity relationship diagram (ERD)** shows the relationships of entity sets stored in a database. An entity in this context is an object, a component of data, for example a variable. An entity set is a collection of similar entities. These entities can have attributes that define their properties.

By defining the entities, and their attributes, and showing the relationships between them, an ER diagram illustrates the logical structure of databases. 

Each table demonstrates an entity set, where the rows represent the entities. Each entity set contains a **primary key (PK)** which is unique in the table. A primary key can be one entity, for example, a tax number or a set of entities like longitude and latitude in spatial data.

An entity set may have got a **foreign key (FK)**. It means that the table is connected to another table's primary key. This **relationship** can be represented by a line with a **sign** on its every ending. The sign specifies how many instances of an entity relate to one instance of another entity:
- double lines (one)
- branching line (more)
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