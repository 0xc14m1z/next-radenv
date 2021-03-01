import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { EntitiesPage } from "./features/entities";
import { NotFoundPage } from "./features/not-found";

export const Application: React.FC = () => (
  <BrowserRouter basename="/api/radenv/designer">
    <Switch>
      <Route exact path="/" component={EntitiesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
