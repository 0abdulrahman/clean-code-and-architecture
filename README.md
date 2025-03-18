This is a [Next.js](https://nextjs.org) project initialized alongside most common community libraries for **Elevate** students. It shows how the structure of an enterprise business project should be, and how we can write clean code in React.js and Next.js.

## Getting Started

**First**, install yarn package manager:

```bash
npm i -g yarn
```

**Second**, delete the `package-lock.json` file.

**Third**, install all dependencies using yarn:

```bash
yarn install
```

**Lastly**, run the project using yarn:

```bash
yarn dev
```

## Code Organization Guidelines

Please ensure that the code in **hooks** and **components** is consistently organized in the following order:

1. **Translation** – Import and define any translation-related logic.
2. **Navigation** – Define any navigation-related logic or hooks.
3. **State** – Declare local or global state variables.
4. **Context** – Use context providers and consumers.
5. **Hooks** – Call custom and built-in React hooks.
6. **Ref** – Declare and manage `ref` objects.
7. **Queries** – Handle data fetching queries (e.g., using React Query).
8. **Mutation** – Handle data mutation logic (e.g., using React Query).
9. **Form & Validation** – Set up form state and validation (e.g., using `react-hook-form`, `zod`).
10. **Variables** – Define any constants or variables (this is flexible based on context).
11. **Functions** – Define utility functions or component-specific functions.
12. **Effects** – Use `useEffect` or similar side-effect hooks at the end.

Following this order helps maintain code consistency, improves readability, and makes it easier to debug and scale the project.

## Resources

1. **Project #1 - Exam App**: [Figma Design](https://www.figma.com/design/jJl1SNjeasOAF0WSlK8epD/Exam-Online-Elevate?node-id=0-1&t=S7I2ScakQLuXTMqI-1) - [API Docs](https://documenter.getpostman.com/view/5709532/2sAXxMfYUf)
2. **Project #2 - Flower App**: [Figma Design](https://www.figma.com/design/QqsPTLi6eOzPXy3uueAg67/Rose?node-id=0-1&t=5euUht8bw4zd4s8z-1) - [API Docs](https://documenter.getpostman.com/view/5709532/2sAY52cKZg)
