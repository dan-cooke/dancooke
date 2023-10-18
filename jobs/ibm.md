---
company: IBM
role: Senior Software Engineer
logoUrl: /ibm.jpeg
startDate: 2018-07-01
endDate: 2021-04-01
skills:
  - React
  - NextJS
  - NodeJS
  - Cypress
  - Docker
  - GraphQL
  - Rust
---

IBM was my first major role after graduating from university, and what a learning experience it was. I was surrounded by some incredible engineers, on the QRadar UI team.

During my time working on the QRadar SIEM I worked with NextJS and NodeJS extensively. We mantained a complex GraphQL API gateway that connected the various QRadar Java services.

QRadar uses its own subset of **SQL called AQL (Ariel Query Language)**. One of my most notable achievements was building the QRadar Event viewer, a dashboard which allows users to perform AQL queries against millions of events ocurring across their organisation's network. The implementation had to gracefully handle failed requests. We use **Apollo Client to cache certain AQL GraphQL queries on the client for rapid response times.**

Another complexity with the application was the requirement for almost every screen/state to be shareable via URL. We had to encode complex UI state in the URL, I achieved this with a custom built react state -> URL "compiler" and "decompiler". This meant that no matter how complex the current UI state was, the analyst could share their view with colleagues.

I used **Rust** only briefly to create a few CLI tools that allowed non technical users to spin up development versions of the app.

I received multiple promotions at IBM and had the opportunity to travel around the world and talk at several events on topics such as Docker and Cypress.

Working on a data-intensive system like a SIEM, our UI had to be very cognant and efficient with its data fetching using tools like graphql/dataloader to ensure we aren’t overfetching and implementing exponential backoff for failed requests. Testing was paramount on a system like this, and I developed several testing dashboards and utils to assist with our Cypress e2e testing. I had several placement students under my mentorship by the end of my tenure and thoroughly enjoyed every moment of this role!

<!-- PREVIEW_END -->
