# Paginate-Table
Creates a table with pagination in default bootstrap styling

## Dependencies
* jQuery
* Bootstrap ```only requires bootstrap.min.css```

## Example usage
In JavaScript
```javascript
paginateify(users, 10, "users", ["id", "name", "email", "created_at"], ["edit", "delete"]);
// users: is any list of objects often the results from a query
// 10: pageSize sets the default number of results per page
// "users": corresponds to the id of the div that will be turned into a table
// an array of collumn names: these need to correspond with keys in the list
// an array of actions: creates a button for each entry in the array
```
In HTML
```html
<div id="users">
  <!-- This div gets filled with a table of results -->
</div>
<div id="users_pages">
  <!-- This div gets filled with pagination links -->
</div>
```
