# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt).

## Overview

### The challenge

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![desktop with filters on ](./public/desktop-with-filter.png),
![mobile with filters on ](./public/mobile-with-filter.png),

### Links

- [Solution URL Github](https://github.com/Thanos-M11/angular-job-listing)
- [Live Site URL](https://thanos-m11.github.io/job-listing-typescript/)

## My process

### Interfaces, Types

- Job interface
- Filter interface
- BtnType type

### Services

- injectable `FilterService` class with 4 methods:

  - `getFilter()`
  - `setFilter()`
  - `clearFilter()`
  - `isEmpty()`

- injectable `JobService` class with 3 methods:
  - `getJobs()`
  - `setJobs()`
  - `getFilteredJobs()`

### Flexible component

- `ButtonComponent`
  - receives:
    - 4 `input` props (`content`, `feature`, `withWrapper`, `className`)
    - a `filterService`
  - and has 2 handle Methods:
    - `addFilterHandler`
    - `removeFilterHandler`

The concept is to have one button component to handle three types of operations:

1. an operation that adds a filter of a specific feature,
2. an operation that removes a filter of a specific feature
3. an operation that clears all filter
   Pluss that each opeartion have a different style.
   The opeartion that removes a filter has a wrapper remove icon at the end.

### Built with

- Angular@18, signals, services, `ngDoCheck` lifecycle hook
- CSS custom properties
- Flexbox, CSS Grid
- Mobile-first workflow
- Responsive

### Continued development

## Author

- Website - [Thanos Kalaitzis](https://thanosdev.netlify.app/homepage)
- Frontend Mentor Profile - [@Thanos-M11](https://www.frontendmentor.io/profile/Thanos-M11)
