
const heading = React.createElement("div",{id:"Parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{id:"heading"},"Hello World From React!"),React.createElement("h2",{id:"head"},"Hello World! From React!")]),React.createElement("div",{id:"child"},React.createElement("h1",{id:"img" },"Hello World From React!") )]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const hero= React.createElement("div",{id:"img"},[React.createElement("img",{id:"img",src:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"},null )]);
const heroroot =ReactDOM.createRoot(document.getElementById("hero"));
heroroot.render(hero);
