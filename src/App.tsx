import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";

/*
The <App> component renders an <Admin> component, which is the root component of a react-admin application. 
This component expects a dataProvider prop - a function capable of fetching data from an API
*/

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

/*
The line <Resource name="users" /> informs react-admin 
to fetch the “users” records from the https://jsonplaceholder.typicode.com/users URL.
<Resource> also defines the React components to use for each CRUD operation (list, create, edit, and show).
The list={ListGuesser} tells react-admin to use the <ListGuesser> component to display the list of users.
*/
const App = () => (
  <Admin dataProvider={dataProvider}>
    
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
