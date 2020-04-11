import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import SignIn from "../pages/SignIn";

import Dashboard from "../pages/Dashboard";
import CadDeliveryMan from "../pages/CadDeliveryMan";
import Modal from "../components/AvatarInput";
import teste from "../pages/Dashboard/tempDialog";
import deliveryMan from "../pages/DeliveryMan";
import recipientes from "../pages/Recipients";
import problems from "../pages/Problems";
import EditDeliveryMan from "../pages/EditDeliveryMan";
import cadRecipients from "../pages/CadRecipients";
import EditRecipients from "../pages/EditRecipients";
import CadDelivery from "../pages/CadDelivery";
import EditDelivery from "../pages/EditDelivery";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/modal" component={Modal} isPrivate />
      {/* <Route path="/teste" component={teste} isPrivate /> */}
      <Route path="/recipients" component={recipientes} isPrivate />
      <Route path="/EditRecipients" component={EditRecipients} isPrivate />
      <Route path="/cadRecipients" component={cadRecipients} isPrivate />
      <Route path="/problems" component={problems} isPrivate />
      <Route path="/deliveryman" component={deliveryMan} isPrivate />
      <Route path="/cadDeliveryman" component={CadDeliveryMan} isPrivate />
      <Route path="/editDeliveryMan" component={EditDeliveryMan} isPrivate />
      <Route path="/cadDelivery" component={CadDelivery} isPrivate />
      <Route path="/EditDelivery" component={EditDelivery} isPrivate />
    </Switch>
  );
}
