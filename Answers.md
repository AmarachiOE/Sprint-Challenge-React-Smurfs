1.  Explain the differences between `client-side routing` and `server-side routing`.

In client-side routing, is when routing is handled internally by Javascript. Javascript manages the data for the app in its own memory, and the browser doesn’t need to refresh between routes. However, the maybe data stored that the user may never access.

In server-side routing, information is requested from the server and the server retrieves that info to be displayed on the browser. This calls for a page reload, which included unnecessary requests of data (such as a the header and footer). Only the needed parts of the the total webpage are requested and retrieved at a time.

2.  What does HTTP stand for?

HyperText Transfer Protocol

3.  What does CRUD stand for?

CRUD are server operations to Create, Read, Update, and Delete data.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Post maps to the CREATE operations. Get maps to the READ operation. Put maps to the UPDATE operation. Delete maps to the DELETE operation.

5.  Mention three tools we can use to make AJAX requests

Fetch method on CDM, axios library, and the Postman app.