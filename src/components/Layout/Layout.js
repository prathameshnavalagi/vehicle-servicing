import React from 'react';
//import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) =>(
    <div>
        <Toolbar/>
        <main>
            {props.children}
        </main>
    </div>
);

export default layout;