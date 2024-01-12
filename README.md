Developing an application on one of the specified topics, with a RESTful backend which accessed data stored in a relational database through a persistence API as well as data from an external service and an SPA front-end built with a component based framework.
-	Front-end must be build with a component based framework(React.js, which is covered in the course, or Angular 2+, Vue.js)
-	Back-end must have a REST interface and must be implemented in node.js
-	Storage must be over a relational database and access to the database must be done via an ORM
-	Code must be versioned in a git repository with incremental commits with clear descriptions
Objective
Implementing a web application for conference organization and management.
Description
The application must cover organizing scientific conferences, based on the uploading and approval of papers.

The application is built on a Single Page Application architecture and is accessible from the browser on the desktop, mobile devices or tablets (depending on user preference).
Functionality (minimal)

-	The application has three types of users:  organizers, reviewers and authors
-	An organizer can create a conference and allocate a series of reviewers
-	An author can register for a conference and make a paper proposal
-	On receiving an article, 2 reviewers are automatically allocated
-	Reviewers can accept the article or they can provide feedback to the author for an article update
-	The author can then upload a new version of the article based on the received feedback
-	The organizer can monitor the state of received articles
