/
@swagger
path:
/books/:
get:
    summary: Lists all the books
tags: [Books]
responses:
    "200":
description: The list of books.
    content:
application/json:
schema:
    $ref: '#/components/schemas/Book'
post:
    summary: Creates a new book
tags: [Books]
requestBody:
    required: true
content:
    application/json:
schema:
    $ref: '#/components/schemas/Book'
responses:
    "200":
description: The created book.
    content:
application/json:
schema:
    $ref: '#/components/schemas/Book'
    /books/{id}:
get:
    summary: Gets a book by id
tags: [Books]
parameters:
    - in: path
name: id
schema:
    type: integer
required: true
description: The book id
responses:
    "200":
description: The list of books.
    content:
application/json:
schema:
    $ref: '#/components/schemas/Book'
"404":
description: Book not found.
    put:
summary: Updates a book
tags: [Books]
parameters:
    - in: path
name: id
schema:
    type: integer
required: true
description: The book id
requestBody:
    required: true
content:
    application/json:
schema:
    $ref: '#/components/schemas/Book'
responses:
    "204":
description: Update was successful.
"404":
description: Book not found.
    delete:
summary: Deletes a book by id
tags: [Books]
parameters:
    - in: path
name: id
schema:
    type: integer
required: true
description: The book id
responses:
    "204":
description: Delete was successful.
"404":
description: Book not found.
/