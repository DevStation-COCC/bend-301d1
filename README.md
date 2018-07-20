<a id="top"></a>
# Code 301: Facilitator's Guide

- [Course Overview & Objectives](#courseoverview)
- [Daily Lecture Structure](#lectures)
- [Weekly Overviews](#weeklyoverviews)
- [Course Materials in this Repository](#materials)
- [Course Operations](#operations)
- [Course GitHub Organization & Setup](#organization)
- [Course Grading & Prework; Other Academic Information](#grading)
- [Student Setup & Lab Workflow](#studentsetup)

<a id="courseoverview"></a>
## Course Overview

![301 Curriulum](../301-curriculum.png)

This course guides students through the collaborative process of developing a single page, dynamic web application, using the MVC (Model-View-Controller) design pattern.

The lab assignments for the course are in four main parts:

1. Fulfillment, via pair-programming, of TODO items from starter code in a pre-existing blog application that evolves throughout weeks 1 and 2. This is a real-world exercise for students in collaboration while learning and extending an existing codebase. These assignments are also a foundation for tackling technical challenges, developing code-reading skills, and gaining knowledge of application architecture.

2. A stand-alone mobile-only application during week 3. Students will work with the same partner throughout the week on a Heroku-deployed application following MVC structure. This one-week sprint will help prepare students for project week and serve as an additional personal portfolio piece.

3. Daily coding challenges from Code Wars (excluding Fridays). Students will psuedocode their solution on the whiteboard and add their final solution to a personal repository. This assignment will allow 301 students to gain practice solving coding puzzles and feel comfortable discussing code on a whiteboard.

4. Stand-alone CSS challenges based on wireframes during the mornings of days 6 and 11. These challenges should be released at 9 a.m. and turned in right before lecture starts. The wireframes will include a mobile view and a desktop view. 

##### Course Learning Objectives

- Students will collaboratively design and create a single page web application from scratch using MVC architecture built with clean HTML, CSS, and JavaScript that satisfies stakeholder requirements captured in user stories.
- Students will have the skills to enroll in a Code 401 course or attain an entry-level website development job or internship by completing the course requirements.


[-top-](#top)

---

<a id="lectures"></a>
## Daily Lecture Structure

Daily lectures typically follow a three-part pattern: code review of the previous class's lab, introduction/demo of new material, and preparation for the daily lab assignment:

##### Code Review

Using the evolving codebase as the starting point for daily lectures, you will act as the navigator while walking through the previous classs assignment(s).  This portion of lecture should facilitate a discussion-based code review that is inviting and engaging, in order to promote class participation.  This will allow students to vocalize on-screen code and improve their development vocabulary.

Students will often have detailed technical questions about the previous class’s assignments, so be sure to familiarize yourself with the codebase regularly.  A typical code review lasts around 30 minutes, but can go much longer. It may be necessary to do upwards of 60-90 minutes of code review if the students are not comprehending the previously assigned lab materials.

##### Introduction and Demonstration of New Material

The subsequent portion of lecture should be focused on the introduction of new concepts.  Students learn in a variety of different ways, so it often works well to start out with a series of (provided) introductory slides.  As you read and discuss each slide, continue to encourage class participation by frequently checking for understanding and reiterating concepts as needed. A real-life story based on your relevant experiences may benefit the class here as well.

If the students seem eager to take a deeper dive into any given topic, feel free to perform live code demos, documentation reviews, and whiteboard diagrams as needed. Alternatively, these additions can be reserved for the end of the lecture as a part of preparing students for their next assignment.

##### Preparation for Lab

Properly preparing students for their daily assignments is a vital part of every day.  To get started, open up the codebase in code editor and walk students through ***all*** of the REVIEW and TODO items defined for that day in the starter code.  Be sure to read through each task description and paraphrase or discuss any confusing terminology.  Depending on the number of TODO items, you can also feel free to work through one (or more) of them in class.  This process should generally take around 30-45 minutes, but feel free to spend as much time as needed.

Using the concepts and class structure summarized above, you will be ready to prepare students for the next 401 course or for a job in their career. Be patient, inviting, and passionate throughout the length of your course and it will be a big boost to your overall success. Have fun!

[-top-](#top)

---

<a id="weeklyoverviews"></a>
## Weekly Overviews

### Week 1: View

***The focus of the View module is on teaching students how to understand and construct the view layer of a basic MVC web application.***

The View module begins in Class 1 with an introduction to mobile-first design and  responsive development principles, and includes the fundamentals of modular CSS, SMACSS, the box model, positioning, layouts, media queries, and design.  In Class 2, using jQuery and the JavaScript constructor pattern, you guide students through DOM selection, traversal, and manipulation; in addition, an introduction to Agile methodology is presented on this day. In Class 3 students explore jQuery events, effects, delegation, and principles of code modularity. In Class 4 the practical applications of typography and HTML templates are covered, ES6 template literals are presented, and a 3rd-party templating library is introduced ([Handlebars](http://handlebarsjs.com)). Class 5 is a form-building workshop that brings it all together and gives students an opportunity to apply their skills to the discussion and implementation of a new problem.

##### Week 1 (View) Learning Objectives

* Managing the view layer: Students will construct and manage interactive, client-side websites by creating and altering the Document Object Model through selection, traversal, and manipulation.

### Week 2: Model

***The focus of this week is on teaching the concepts of a model layer through the use of Node.js and PostgreSQL, providing students their first hands-on interaction with a full-stack application.***

The Model module begins in Class 6 with an introduction to the use of AJAX and JSON in the contexts of both the Web Request/Response Cycle (WRRC) and locally stored data files. In addition, the ES6 `let` and `const` variable declarations are presented on this day. The primary jQuery AJAX methods used during this week are **$.ajax(), $.get(), $.getJSON()**. Class 7 is an introduction to server-side code using Node.js, NPM, and Express. In Class 8 students are introduced to CRUD, persistence, and database concepts and get their first exposure to PostgreSQL. These two days (Classes 7 and 8) present an enormous paradigm shift to students and are conceptually challenging for them. Class 9 focuses on more advanced SQL topics including joins and relations. Class 10 is an introduction to concepts of functional programming via the use of the JavaScript array methods **.map(), .filter(), .reduce()**.  

##### Week 2 (Model) Learning Objectives

* Students will write a model layer in their applications that accesses and transforms persisted client-side data,  conforming to common WRRC, FP, and CRUD conventions.

### Week 3: Controller

***The focus of this week is the controller layer of an MVC application.  Through the use of [Page.js](https://visionmedia.github.io/page.js/), students will be introduced to client-side routing, deployments and development environments, managing application state, and general OOP based modularity & refactoring.***

The Controller module begins in Class 11 with an introduction to single-page applications (SPAs) and client-side routing concepts using the 3rd-party library Page.js. This day will also include the concepts of production environments and early deployment. In Class 12, the focus is on rounding out and solidifying student understanding of HTTP and REST concepts, and token-based access of data from external APIs. Class 13 is centered on the concepts of authentication and requesting data from external APIs. Class 14 is a deeper examination into the role of middleware in the management of application state, specifically getting/setting URL parameters with Page.js via its `context` object. Class 15 is for review and also the transition into Project Week.

##### Week 3 (Controller) Learning Objectives

* Students will finalize their MVC apps by:

    * completing our Single-Page App pattern with routing and controllers

    * integrating with 3rd-party REST APIs to display external data

    * and deploying to production environments with a pre-existing server.


### Week 4: Project Week

In teams, students create a single page web application that demonstrates command of all of the primary concepts discussed in this course.  Overall, the application should make API calls, have dynamic functionality, and display a well-factored MVC architecture.  You act as a guide and support system for students as many project groups hit the occasional roadblocks and need assistance throughout the week.  Otherwise, groups should be generally be self-managing. They will need to have proper Agile processes in place in order to keep their project in scope and delivered on time.

[-top-](#top)

---

<a id="materials"></a>
## Course Materials in this Repository

#### Lecture Guides

*Note that the Lecture Guides are not intended to be student-facing, but can be adapted as such.*

Within each of the adjacent class directories you'll find a README document containing the following:
- Overview of the day
- Daily earning objectives
- Daily readings
- Slides/Resources
- Lecture Topics
- Link to the lab README document

There is also a subdirectory within each daily directory that contains code demos that you may elect to use.

#### Lab Code

The starter code for each day's lab assignments are in the `labs/` directory of this repository. Each day is its own repository, so you will need to create a GitHub organization to host the lab repositories, create the individual repositories for each day, add the contents, and then publish them each day of class.

[-top-](#top)

---

<a id="operations"></a>
## Course Operations

Here's organizational tasks to keep in mind for each day as the class progresses:

- For the student-facing lecture repo, in each daily directory, a README should be generated that has, at a minimum, a daily class agenda, learning objectives, and links to readings and resources. That document can be an adapted version of the READMEs in the adjacent daily `lecture/` directories of this repository.
- The day's paired lab and individual Code Wars assignments should be prepped and poised for publication into the daily lab repository at the appropriate time in lecture. The Code Wars challenge should be released towards the end of lecture to prevent students from working on the lab assignment during lecture. The pair-programmed lab can also be released at the time, or released at the start of lab time the following morning.
- It is strongly encouraged that the instructor open and test both the lab assignment and the lab solution each day; that is a solid reminder of the focus of the day, and preps you for seeing what the students will be seeing later.
- Don't forget to check for code demos in each adjacent daily directory!
- Be mindful of any items to be published in Canvas, and verify that the due dates on those items are correct prior to publication.

[-top-](#top)

---

<a id="organization"></a>
## Course GitHub Organization & Setup

##### Setting Up a New Class Repository

You should have a class repo (often referred to as the "course lecture repo") that lives in the Code Fellows account on GitHub. The name of the repository and subsequent informational fields should follow the patterns of the following example:

- **Name**: https://github.com/codefellows/seattle-301d18 (city, hyphen, course number, course specific code)
- **About**: "Class lecture repo for seattle-301d18. Lead Instructor: Sam Hamm"
- At the time of creating the lecture repo, a directory should be created for each day as seen in the example above.
- The README at the root level of your lecture repo should contain the same content as the example given above.

##### Setting up a Lab Organization and Individual Lab Repositories

- Each lab assignment should be a separate repository housed within a single organization, named in the pattern of this example: https://github.com/codefellows-seattle-301d18
- The individual lab directories can be copied over from the `labs/` girectory from this repository. Each daily lab will then need to be `git init`ed and have its remote set to a new corresponding repository within the lab organization.

[-top-](#top)

---

<a id="grading"></a>
## Course Grading & Prework; Other Academic Information

##### Grade Weightings

- The standard [course weightings](https://docs.google.com/document/d/1WnQkPbM1FzWxYgzhrayL_SerO80DXC4tybl-I1aiSUI/edit).

##### Prework

- Here is the prework GitHub repo link: [Code-301-prework](https://github.com/codefellows/code-301-prework)

- Prework assignments are graded like all others. This link should be shared with students by Admissions at the time of enrollment. It is wise to issue reminders to students to complete the prework in the days leading up to the start of the course.

##### Attendance

- Generally, students are expected to maintain a 90% attendance rate.
- Please refer to [Instructor Handbook](https://docs.google.com/document/d/1rByNEzSuJgUokU_kMXIxKzNotJSTIViwR1wdpP4HHDs/edit#bookmark=id.rydixnehkl2) for more information.

##### Quizzes

- Course quizzes (one per week, published on Friday afternoon to be completed over the subsequent weekend) are administered through Canvas. It is recommended that you review the quizzes so that you know exactly what the students will be seeing.

##### One On Ones

- Depending on class size, you may need perform a weekly, or at the least, a midway one-on-one pulse check on all students. This is also an ***extremely*** useful means of addressing the concerns of students that are revealed on the weekly surveys.

- A good way to start these conversations is to first ask "How’s it going?"

- If they reply with only a "good" or “okay” you can follow-up with “Anything in particular you want to talk about?” and keep things light before diving into any details below.

- The site youcanbookme.com is a handy way of scheduling one-on-one meetings.

##### Whiteboarding (optional)

- This can be spread out across one or several days, usually time-boxed to 15-30 minutes (example spreadsheet for student sign-ups [here](https://docs.google.com/spreadsheets/d/119p29UJhGulpSpwJYRdTSAvtfXMvZom5VWiiq4VxVGg/edit?usp=sharing) with different slots being assigned to different instructors / TAs).

- A good starting guide for content can start with this problem domain:


- "We are tasked with modeling out buildings. We want to keep track of buildings in Seattle and are asked to pick up on just three initial properties that matter the most to us":

  1. The year that the building was constructed

  2. The number of floors that the building has

  3. The address the building is located

- With this information, help us build a constructor to model our buildings

Once they have a constructor, ask them to instantiate a new Building with the constructor, then have them write the output of what that new object would look like (including its properties and values).

- Next, propose a situation where the team has an **array** of these Building objects. For the sake of this example it can be an array of 3 buildings. We now want to target specific information about each building, and our job is to now retrieve **just the year** from each Building, and transform that into a **new array**.

- Guide the students to use Array.map() method to accomplish this goal, keeping in mind that in order to access this new array, they will need to save the result into a new variable.

##### Reading Assignments

- Reading is one of the primary language-learning processes that students will utilize to develop their skills. Each day, one or more reading assignment is due before the start of lecture. Students are expected to make at least one observation and ask a question to promote curiosity and class discussion. Their submission is completed by them and graded within your Canvas course. The reading submissions in Canvas are by default setup to be graded with either a ‘complete’ or ‘incomplete’ mark, and as a result, the late submission policy is not in effect for reading assignments.

##### Late Submission Policy

- [See Code Assignment Grading and Expectations](https://drive.google.com/open?id=0B9LDi5IfeIjCTHh6VU4yQV9ZaDQ)

##### Extra Credit

- Extra Credit should be viewed as an additional opportunity for learning. Most students will already have the required textbook ([Jon Duckett's JS & jQuery](http://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647)) so the cost of signing up for these online resources can be justified (if a cost is even relevant as most sites will allow a free trial period).

- There can be one extra credit assignment associated with each class day. This is perfect for students looking to dive deeper into a given subject. The late policy does not apply to extra credit assignments.

[-top-](#top)

---

<a id="studentsetup"></a>
## Student Setup & Lab Workflow

The README for the first lab assignment (../labs/01-mobile-first) has detailed instructions for students in setting up their local directories on their laptops and also instructions in pair-programming process. Please refer there for more details.

[-top-](#top)
