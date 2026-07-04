## Senior FE engineer - Technical challenge

This repository contains two apps:

- The FE consuming app `ingredient-hub`
- The BE app `ingredients-api`

You are to make changes only within `ingredient-hub` front-end application.

### How to submit your work:

1. On the GH repository page, click the green button "Use this template" to create a new repository (do not fork).
1. Name it `food-pantry-${your-full-name}` and set it to _Private_.
1. Invite `thiagocam-marleyspoon` as a collaborator to give the hiring manager access.
1. Create a feature branch, complete this coding challenge, and commit/push your changes.
1. Open a PR of your feature branch into your main branch _within your own private repository_ and assign `thiagocam-marleyspoon` as a reviewer.

### The challenge:

- Update the `/ingredients` and `/login` page to include "Careers", "Recycling", "About" and "How it works" in the footer, and "Sustainability" in the header
- Group "About", "Privacy", "Careers" in the footer under "Learn more" group, and "Recycling", "How it works" under "Interesting Stuff"
- Change footer logo from `#12110C` to `#FFFFFF`, make the background of the footer `#12110C`, make the `/ingredients` footer, `/admin/login footer` and `/admin/manage` footers look consistent, even though the `/admin/manage` footer is different.
- Implement a DN color scheme: Headings should use `text-neutral-900` by default, however if the page domain contains the word `dinnerly` the heading should use text-purple-900
- Integrate the API by fetching data from `/api/data` and rendering the first 100 items on the `/ingredients` page

### Documentation and expectations:

The solution is expected to be maintainable, scalable and have a good user experience.<br>
If there's ambiguity on any of the requirements, write down in the `README.md` file what were the possible interpretations and which one you went with.<br>
Similarly, if there are architectural decisions to be made, document the different options with their pros and cons, and explain why you made your final choice.

### Timeboxing:

Please target your development time for under 2 hours. This may require prioritizing some features over others and taking shortcuts. If you did not manage to complete everything you wanted to within the time limit, please provide an outlook of things you would have added or changed in the README document.
