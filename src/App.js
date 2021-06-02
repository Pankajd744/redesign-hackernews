import Comments from "./component/comments";
import Nav from "./component/nav";
import Ask from "./component/ask";
import Login from "./component/login";
import Job from "./component/job";
import News from "./component/news";
import Show from "./component/show";
import Past from "./component/past";
import Forgot from "./component/forgot";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route path="/comments" component={Comments} />
        <Route path="/ask" component={Ask} />
        <Route path="/login" component={Login} />
        <Route path="/job" component={Job} />
        <Route path="/new" component={News} />
        <Route path="/show" component={Show} />
        <Route path="/past" component={Past} />
        <Route path="/forgot" component={Forgot} />
      </Router>
    </div>
  );
}

export default App;
