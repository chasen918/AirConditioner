import "./App.scss";

import { ThemeProvider } from "./theme";
import Container from "@material-ui/core/Container";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rc from "./pages/Rc";
import { useEffect } from "react";

import pkg from "../package.json";


