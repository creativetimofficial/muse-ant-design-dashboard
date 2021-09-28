import { OverViewComponent } from "../pages/sidebarPages/gettingStart.pages/overView.component.jsx";
import { LicenseComponentPage } from "../pages/sidebarPages/gettingStart.pages/license.componentPage.jsx";
import { QuickComponentPage } from "../pages/sidebarPages/gettingStart.pages/quick.componentPage";
import { WhatIsAntComponentPage } from "../pages/sidebarPages/gettingStart.pages/whatIsAnt.componentPage";
import { ColorsComponentPage } from "../pages/sidebarPages/foundation.pages/colors.componentPage";
import { IconsComponentPage } from "../pages/sidebarPages/foundation.pages/icons.componentPage";
import { TypographyComponentPage } from "../pages/sidebarPages/foundation.pages/typograpgy.componentPage";
import { AlertComponentPage } from "../pages/sidebarPages/component.pages/alert.componentPage";
import { AvtarComponentPage } from "../pages/sidebarPages/component.pages/avtar.componentPage";
import { BadgeComponentPage } from "../pages/sidebarPages/component.pages/badge.componentPage";
import { ButtonComponentPage } from "../pages/sidebarPages/component.pages/button.componentPage";
import { CardComponentPage } from "../pages/sidebarPages/component.pages/card.componentPage";
import { CollapseComponentPage } from "../pages/sidebarPages/component.pages/collapse.componentPage";
import { ModalComponentPage } from "../pages/sidebarPages/component.pages/modal.componentPage";
import { PopoverComponentPage } from "../pages/sidebarPages/component.pages/popover.componentPage";
import { ProgressComponentPage } from "../pages/sidebarPages/component.pages/progress.componentPage";
import { TableComponentPage } from "../pages/sidebarPages/component.pages/table.componentPage";
import { TimeLineComponentPage } from "../pages/sidebarPages/component.pages/timeLine.componentPage";
import { TooltipsComponentPage } from "../pages/sidebarPages/component.pages/tooltips.componentPage";
import { GridComponentPage } from "../pages/sidebarPages/layout.pages/grid.componentPage.jsx";
import { LayoutComponentPage } from "../pages/sidebarPages/layout.pages/layout.componentPage.jsx";
import { AffixComponentPage } from "../pages/sidebarPages/navigation.pages/affix.componentPage.jsx";
import { DropdownComponentPage } from "../pages/sidebarPages/navigation.pages/dropdown.componentPage.jsx";
import { MenuComponentPage } from "../pages/sidebarPages/navigation.pages/menu.componentPage.jsx";
import { PaginationComponentPage } from "../pages/sidebarPages/navigation.pages/pagination.componentPage.jsx";
import { TabsCmponentPage } from "../pages/sidebarPages/component.pages/tabs.componentPage.jsx";
import { CheckBoxComponentPage } from "../pages/sidebarPages/dataEntry.pages/checkBox.componentPage.jsx";
import { FormComponentPage } from "../pages/sidebarPages/dataEntry.pages/form.componentPage.jsx";
import { InputComponentPage } from "../pages/sidebarPages/dataEntry.pages/input.componentPage.jsx";
import { RadioComponentPage } from "../pages/sidebarPages/dataEntry.pages/radio.componentPage.jsx";
import { SelectComponentPage } from "../pages/sidebarPages/dataEntry.pages/select.componentPage.jsx";
import { SwitchComponentPage } from "../pages/sidebarPages/dataEntry.pages/switch.componentPage.jsx";
import { UploadComponentPage } from "../pages/sidebarPages/dataEntry.pages/upload.componentPage.jsx";

export const routes = [
  {
    id: "overview",
    path: "/overview",
    component: OverViewComponent,
    exact: true,
  },
  {
    id: "license",
    path: "/license",
    component: LicenseComponentPage,
    exact: true,
  },
  {
    id: "quick",
    path: "/quick",
    component: QuickComponentPage,
    exact: true,
  },
  {
    id: "whatisant",
    path: "/whatisant",
    component: WhatIsAntComponentPage,
    exact: true,
  },
  {
    id: "colors",
    path: "/colors",
    component: ColorsComponentPage,
    exact: true,
  },
  {
    id: "icons",
    path: "/icons",
    component: IconsComponentPage,
    exact: true,
  },
  {
    id: "typography",
    path: "/typography",
    component: TypographyComponentPage,
    exact: true,
  },
  {
    id: "alter",
    path: "/alter",
    component: AlertComponentPage,
    exact: true,
  },
  {
    id: "avtar",
    path: "/avtar",
    component: AvtarComponentPage,
    exact: true,
  },
  {
    id: "badge",
    path: "/badge",
    component: BadgeComponentPage,
    exact: true,
  },
  {
    id: "button",
    path: "/button",
    component: ButtonComponentPage,
    exact: true,
  },
  {
    id: "card",
    path: "/card",
    component: CardComponentPage,
    exact: true,
  },
  {
    id: "collapse",
    path: "/collapse",
    component: CollapseComponentPage,
    exact: true,
  },
  {
    id: "modal",
    path: "/modal",
    component: ModalComponentPage,
    exact: true,
  },
  {
    id: "popover",
    path: "/popover",
    component: PopoverComponentPage,
    exact: true,
  },

  {
    id: "Progress",
    path: "/Progress",
    component: ProgressComponentPage,
    exact: true,
  },
  {
    id: "table",
    path: "/table",
    component: TableComponentPage,
    exact: true,
  },
  {
    id: "tabs",
    path: "/tabs",
    component: TabsCmponentPage,
    exact: true,
  },
  {
    id: "timeline",
    path: "/timeline",
    component: TimeLineComponentPage,
    exact: true,
  },
  {
    id: "tooltips",
    path: "/tooltips",
    component: TooltipsComponentPage,
    exact: true,
  },
  {
    id: "grid",
    path: "/grid",
    component: GridComponentPage,
    exact: true,
  },
  {
    id: "layout",
    path: "/layout",
    component: LayoutComponentPage,
    exact: true,
  },
  {
    id: "affix",
    path: "/affix",
    component: AffixComponentPage,
    exact: true,
  },
  {
    id: "dropdown",
    path: "/dropdown",
    component: DropdownComponentPage,
    exact: true,
  },
  {
    id: "menu",
    path: "/menu",
    component: MenuComponentPage,
    exact: true,
  },
  {
    id: "pagination",
    path: "/pagination",
    component: PaginationComponentPage,
    exact: true,
  },
  {
    id: "checkbox",
    path: "/checkbox",
    component: CheckBoxComponentPage,
    exact: true,
  },
  {
    id: "form",
    path: "/form",
    component: FormComponentPage,
    exact: true,
  },
  {
    id: "input",
    path: "/input",
    component: InputComponentPage,
    exact: true,
  },
  {
    id: "radio",
    path: "/radio",
    component: RadioComponentPage,
    exact: true,
  },
  {
    id: "select",
    path: "/select",
    component: SelectComponentPage,
    exact: true,
  },
  {
    id: "switch",
    path: "/switch",
    component: SwitchComponentPage,
    exact: true,
  },
  {
    id: "upload",
    path: "/upload",
    component: UploadComponentPage,
    exact: true,
  },
];
