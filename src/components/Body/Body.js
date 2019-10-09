import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomPage from "../HomePage/HomPage";
import WriteComment from "../WriteComment/WriteComment";
import Comments from "../Comments/Comments";


const Body = () => {
    return (
        <div className="Body">
            <Switch>
                <Route path='/codebright/build/' exact component={HomPage} />
                <Route path='/codebright/build/comments' exact component={Comments} />
                <Route path='/codebright/build/comments/:id' exact component={WriteComment} />
                <Route path='/codebright/build/' component={HomPage} />
            </Switch>
        </div>
    )
};

export default Body;
