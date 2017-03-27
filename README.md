# Paginate-Table
Creates a table with pagination in default bootstrap styling

## Dependencies
* jQuery
* Bootstrap ```only requires bootstrap.min.css```

## Example usage
In JavaScript
```javascript
paginate(users, 10, "users", ["id", "name", "email", "created_at"], ["edit", "delete"]);
// users: is any list of objects often the results from a query
// 10: pageSize sets the default number of results per page
// "users": corresponds to the id of the div that will be turned into a table
// an array of column names: these need to correspond with keys in the list
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

Should show something like:

| Id  | Name  | Email              | Created At         | Actions             |
|:---:|:-----:|:------------------:|:------------------:|:-------------------:|
| 1   | Dan   | dan@example.com    | 15:19 Nov 23, 2016 | [Edit]() [Delete]() |
| 2   | Tim   | tim@example.com    | 10:03 Dec 21, 2016 | [Edit]() [Delete]() |
| 3   | Marco | marco@example.com  | 12:19 Dec 23, 2016 | [Edit]() [Delete]() |
| 4   | Anne  | anne@example.com   | 13:12 Jan 03, 2017 | [Edit]() [Delete]() |
| 5   | D2    | d2@example.com     | 09:44 Jan 28, 2017 | [Edit]() [Delete]() |
| 6   | Rae   | rae@example.com    | 17:55 Feb 05, 2017 | [Edit]() [Delete]() |
| 7   | Minh  | minh@example.com   | 11:32 Feb 09, 2017 | [Edit]() [Delete]() |
| 8   | Joey  | joey@example.com   | 15:10 Mar 02, 2017 | [Edit]() [Delete]() |
| 9   | Karen | karen@example.com  | 14:14 Mar 15, 2017 | [Edit]() [Delete]() |
| 10  | Kyle  | kyle@example.com   | 14:29 Mar 17, 2017 | [Edit]() [Delete]() |

[<<]() [<]() [1]() [2]() [3]() [4]() [5]() [6]() [7]() [8]() [9]() [>]() [>>]()

