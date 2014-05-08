# mop-include directive

A simple directive to include templates and pass arbitrary parameters

main.html:

    <mop-include src="test.html" values="{'test': 'test'}"></mop-include>

test.html:

    <div>{{ values.test }}</div>
