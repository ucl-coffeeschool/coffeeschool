# Coffee School

Coffee School is a project to provide an introduction to JavaScript and give some exposure to game development in an interactive environment where the student can see the direct result of their code without having to install or run anything locally on their machine.

Once students are introduced to JavaScript in general, Coffee School gets students to produce a game similar to "Flappy Bird" through a series of lessons using a JavaScript framework called Craftyjs while trying to inform about programming and game development concepts and practices where relevant. It is aimed at GCSE students aged 14-17.

For the lessons the students will just need a web browser.

Our team is Alexis Enston, Matt Bell and Fraser Savage. We were inspired to create this because we wanted to show how easy programming in JavaScript was and how students can create interactive websites easily. Also we wanted to say that the sterotype of hackers in basements was not true, and that computer scientists come from a wide range of backgrounds and skills, and to convince people that Computer Science is a viable career option.

This project is licensed under the GNU GPL v2.

# To create pages


1. you will need npm.
2. `npm install -g gulp`
3. restart terminal to have gulp appear in your PATH
3. `npm install`
4. Add lesson files to lessons folder. You need a lesson{X}.md for lesson content, and a lesson{X}.js for the give javascript.
5. `gulp handlebars`
6. look in the interface folder
