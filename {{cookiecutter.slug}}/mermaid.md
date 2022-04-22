```{mermaid}

    flowchart TD
        {% for dataset in cookiecutter.datasets.datasets %}{% for table in dataset.tables %}
        {{dataset.slug}}([{{dataset.name}}]) --- {{dataset.slug}}_{{table.slug}}[{{table.name}}]
        click {{dataset.slug}}_{{table.slug}} href "{{table.profile_url}}" "Profile"
        {% endfor %}{% endfor %}
```