let parent = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
  ]),
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
