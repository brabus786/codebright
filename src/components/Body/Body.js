import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomPage from "../HomePage/HomPage";
import WriteComment from "../WriteComment/WriteComment";
import Comments from "../Comments/Comments";


const Body = () => {
    return (
        <div className="Body">
            <Switch>
                <Route path='/' exact component={HomPage} />
                <Route path='/comments' exact component={Comments} />
                <Route path='/comments/:id' exact component={WriteComment} />
            </Switch>
            {/*<HomPage/>*/}
            {/*<WriteComment/>*/}
            {/*<Comments/>*/}
        </div>
    )
};

export default Body;
