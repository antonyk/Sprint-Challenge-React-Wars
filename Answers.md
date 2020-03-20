# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React.js is a UI library which makes creating interactive web components much easier. One of the problems it tries to solve is the dynamic update of UI based on changes in state.


2. What does it mean to think in react?

Thinking in React means imagining the pieces we can break up our web application into in order to create components with which to compose the whole. It also means thinking about our data such that it is passed from parent to child component. 

3. Describe state.

In the world of React.js, a state is all of a component's slices of state, which in turn are data that we want the component to track for changes and re-render itself on said change.

4. Describe props.

Props refers to the single parameter (which can be called props or anything else) that points to the object containing data passed down from a parent component to a child component.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects in React.js are special hooks to which we can attach callbacks to execute after the component renders. They run after the component renders and their dependency has changed. To sync effects to state or prop changes, we would set those in the effect's dependency array.