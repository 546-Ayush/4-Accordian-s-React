export const Api = [
    {
        id: 1,
        question: "What is JSX?",
        answer: 'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
    },
    {
        id: 2,
        question: "Can web browsers read JSX directly? ",
        answer: 'Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel ',
    },
    {
        id: 3,
        question: "What is the virtual DOM?",
        answer: 'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.',
    },
    {
        id: 4,
        question: "Why use React instead of other frameworks, like Angular?",
        answer: '1- Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it provides less coding and provides more functionality, whereas, with JavaScript applications, code tends to get complex very quickly. 2- Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their own logic and controls, and they can be reused through the application, which, in turn, dramatically reduces the development time of an application.',
    },
    {
        id: 5,
        question: "What are synthetic events in React?",
        answer: 'Synthetic events combine the response of different browsers native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.',
    },
    {
        id: 6,
        question: "Why is there a need for using keys in Lists?",
        answer: "1- A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists. 2- It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered",
    },
]