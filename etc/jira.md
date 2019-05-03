# jira

## python
* https://jira.readthedocs.io/en/master/index.html
* https://pypi.org/project/jira/

```python
from jira import JIRA

jira = JIRA('https://jira.atlassian.com')
# jira = JIRA('https://jira.atlassian.com', auth=(username, password))

issue = jira.issue('JRA-9')

print(issue.fields.project.key)             # 'JRA'
print(issue.fields.issuetype.name)          # 'New Feature'
print(issue.fields.reporter.displayName)    # 'Mike Cannon-Brookes [Atlassian]'
```