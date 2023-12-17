# AFTAS-FrontEnd

This repository contains the source code for the AFTAS Angular 16 frontend. The frontend interacts with the AFTAS Java Spring Boot API to provide a user interface for managing members, levels, fishes, competitions, rankings, and huntings in the context of an angling competition.

## Prerequisites

Before you start, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Angular CLI](https://angular.io/cli)

## Configuration

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/SuperGhostSama/AFTAS-FrontEnd
    cd AFTAS-FrontEnd
    ```

2. **Update API URL:**

   Open the `src/environments/environment.ts` file.

   - Update the `apiUrl` to point to your AFTAS Java Spring Boot API instance.

## Installing Dependencies

Install project dependencies using the following commands:

```
npm install
```

## Running the Application

Please ensure that your AFTAS Java Spring Boot API is up and running before using this frontend. Follow the instructions in the AFTAS API repository to set it up properly.

Run the application using the following command:

```
ng serve
```
