# web-project
Project for the Web class

[General objective]
Developing an application on one of the specified topics, with a RESTful backend which accessed data stored in a relational database through a persistence API as well as data from an external service and an SPA front-end built with a component based framework.

[Technological constraints]
-	Front-end must be build with a component based framework(React.js, which is covered in the course, or Angular 2+, Vue.js)
-	Back-end must have a REST interface and must be implemented in node.js
-	Storage must be over a relational database and access to the database must be done via an ORM
-	Code must be versioned in a git repository with incremental commits with clear descriptions

[Code quality and style]
-	Real application, coherent from a business logic standpoint
-	The code must be well organized, variable names should be suggestive of their purpose and use a naming standard (e.g. camel case), the code should be indented for readability
-	The code must be documented with comments for each class, function etc.
-	Non working applications receive no points. However, functionality of the front-end or back-end can be demonstrated separately
-	Opțional: test coverage


[Partial deliverables] - 3 stages (delivery is done by supplying a link to a repository through a google form; the coordinating university staff member will be invited as a contributor to the repository) - non delivery of an intemediary stage reduces the maximum receivable points by 10% (i.e. if the maximum grade for the project is 5 points, delivering it directly at the end means the maximum points receivable is 4)
-	Detailed specifications, project plan, presence of a git project - 21.11.2021
-	Functional RESTful service present in the repository + instructions to run said sevice -  05.12.2021
-	Complete application - deliveded in the last tutorial (demo) - last tutorial

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



