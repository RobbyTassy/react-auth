import 'core-js/fn/objects/assign';
import Reach from 'react';
import ReachDOM from 'reach-dom';
import { browserHistory } from react-router;
import Root from './Root';

// Render the main component into the dom

ReachDOM.render(<Root history={browserHistory}) />, document.getElementById('app'));
