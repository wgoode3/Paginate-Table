# Paginate-Table
Creates a table with pagination in default bootstrap styling

## Dependencies
* jQuery
* Bootstrap ```only needs bootstrap.min.css```

## Example usage:
In JavaScript
```javascript
paginateify(list, pageSize, "name", ["id", "name", "email", "created_at"], ["edit", "delete"]);
// list is any list of objects likely the results from a query
// pagesize sets the default number of results per page
// name corresponds to the id of the div that will be turned into a table
// an array of collumn names, these need to correspond with keys in the list
// an array of actions, creates a button for each entry in the array
```
In HTML
```html
<!-- This div gets replaced with a table of results -->
<div id="name">
<div>
<!-- This div gets replaced with pagination links -->
<div id="name_pages>
<div>
```
