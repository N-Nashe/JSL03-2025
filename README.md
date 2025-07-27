# Task managament system 

## Important Prerequisite

1. Before viewing this project ensure that you are ideally on a desktop pc however mobile works too
2. If on mobile the link for it will be provided below 
3. If on desktop please install Visual studio code or any other code editor like X-Code etc etc 
4. Once done you can right click on the file titled "index.html"
5. You will get an option to "open it with live server" choose this option
5. Once on the board enter your three tasks
6. Once done and you recieve the alert telling you there's enough tasks on the board right click in your browser
7. Choose "inspect" or "inspect element" depending on your browser this will take you to the dev tools
8. Once done with this go to the console and click the drop downs where you will see the tasks you entered as well as the ones that are done


## Overview

This project involves creating a **simple task management system** where users can add **up to three new tasks** to an existing task array. Tasks are **stored as objects in an array**, each with a **unique incremental ID**. Users will enter task details via prompts, and the system will allow filtering to view only completed tasks. The project focuses on **array manipulation, user interaction via prompts and alerts, and console logging for task management**.

## Key Objectives

### Logic & User Interaction

- Store tasks as **objects inside an array** for structured data management.
- Allow users to **add up to three new tasks** to the existing task list.
- Ensure each new task has a **unique incremental ID** based on the last task in the array.
- Prompt users to enter **task details (title, description, status)** and store them in an object.
- Alert users when the y reach the task limit with the message:
  _"There are enough tasks on your board, please check them in the console."_
  Implement a **filter function** to display only tasks with the status `"done"`.
- Log **all tasks** in the console with a clear label for easy review.
- Log **only completed tasks** (status: `"done"`) in the console under a "Completed Tasks" label for quick reference.


## Expected Outcome

A **structured and limited task management system** that enables users to add, review, and filter tasks efficiently while ensuring **clean, well-documented, and maintainable code.**

**Console Log of all and completed tasks**

![console log](./explainer-images/console%20log.png)
