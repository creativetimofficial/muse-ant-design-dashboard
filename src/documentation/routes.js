import Overview from "./pages/gettingStarted/Overview";
import License from "./pages/gettingStarted/License";
import QuickStart from "./pages/gettingStarted/QuickStart";
import WhatIsAnt from "./pages/gettingStarted/WhatIsAnt";

import Colors from "./pages/foundation/Colors";
import Icons from "./pages/foundation/Icons";
import Typography from "./pages/foundation/Typography";

import Alert from "./pages/components/Alert";
import Avatar from "./pages/components/Avatar";
import Badge from "./pages/components/Badge";
import Button from "./pages/components/Button";
import Card from "./pages/components/Card";
import Collapse from "./pages/components/Collapse";
import Modal from "./pages/components/Modal";
import Popover from "./pages/components/Popover";
import Progress from "./pages/components/Progress";
import Table from "./pages/components/Table";
import Timeline from "./pages/components/Timeline";
import Tooltips from "./pages/components/Tooltips";
import Tabs from "./pages/components/Tabs";

import Grid from "./pages/layout/Grid";
import Layout from "./pages/layout/Layout";

import Affix from "./pages/navigation/Affix";
import Dropdown from "./pages/navigation/Dropdown";
import Menu from "./pages/navigation/Menu";
import Pagination from "./pages/navigation/Pagination";

import Checkbox from "./pages/form/Checkbox";
import Form from "./pages/form/Form";
import Input from "./pages/form/Input";
import Radio from "./pages/form/Radio";
import Select from "./pages/form/Select";
import Switch from "./pages/form/Switch";
import Upload from "./pages/form/Upload";

const routes = [
  {
    id: "overview",
    path: "/overview",
    component: Overview,
  },
  {
    id: "license",
    path: "/license",
    component: License,
  },
  {
    id: "quick",
    path: "/quick",
    component: QuickStart,
  },
  {
    id: "whatisant",
    path: "/whatisant",
    component: WhatIsAnt,
  },
  {
    id: "colors",
    path: "/colors",
    component: Colors,
  },
  {
    id: "icons",
    path: "/icons",
    component: Icons,
  },
  {
    id: "typography",
    path: "/typography",
    component: Typography,
  },
  {
    id: "alter",
    path: "/alter",
    component: Alert,
  },
  {
    id: "avtar",
    path: "/avtar",
    component: Avatar,
  },
  {
    id: "badge",
    path: "/badge",
    component: Badge,
  },
  {
    id: "button",
    path: "/button",
    component: Button,
  },
  {
    id: "card",
    path: "/card",
    component: Card,
  },
  {
    id: "collapse",
    path: "/collapse",
    component: Collapse,
  },
  {
    id: "modal",
    path: "/modal",
    component: Modal,
  },
  {
    id: "popover",
    path: "/popover",
    component: Popover,
  },

  {
    id: "Progress",
    path: "/Progress",
    component: Progress,
  },
  {
    id: "table",
    path: "/table",
    component: Table,
  },
  {
    id: "tabs",
    path: "/tabs",
    component: Tabs,
  },
  {
    id: "timeline",
    path: "/timeline",
    component: Timeline,
  },
  {
    id: "tooltips",
    path: "/tooltips",
    component: Tooltips,
  },
  {
    id: "grid",
    path: "/grid",
    component: Grid,
  },
  {
    id: "layout",
    path: "/layout",
    component: Layout,
  },
  {
    id: "affix",
    path: "/affix",
    component: Affix,
  },
  {
    id: "dropdown",
    path: "/dropdown",
    component: Dropdown,
  },
  {
    id: "menu",
    path: "/menu",
    component: Menu,
  },
  {
    id: "pagination",
    path: "/pagination",
    component: Pagination,
  },
  {
    id: "checkbox",
    path: "/checkbox",
    component: Checkbox,
  },
  {
    id: "form",
    path: "/form",
    component: Form,
  },
  {
    id: "input",
    path: "/input",
    component: Input,
  },
  {
    id: "radio",
    path: "/radio",
    component: Radio,
  },
  {
    id: "select",
    path: "/select",
    component: Select,
  },
  {
    id: "switch",
    path: "/switch",
    component: Switch,
  },
  {
    id: "upload",
    path: "/upload",
    component: Upload,
  },
];

export default routes;
