import { type SchemaTypeDefinition } from "sanity";
import { settings } from "./settings";
import { areasType } from "./areasType";
import { heroType } from "./heroType";
import { blogPost } from "./blogPost";
import { topbar } from "./topbar";
import { twoColumnsText } from "./twoColumnsText";
import { imageText } from "./imageText";
import { pageType } from "./pageType";
import { areasBlockType } from "./areasBlockType";
import { galeryType } from "./galeryType";
import { userType } from "./userType";
import { userRoleType } from "./userRoleType";
import { subjectType } from "./subjectType";
import { blogCategoryType } from "./blogCategoryType";
import { menuType } from "./menuType";
import { iframeType } from "./iframeType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    settings,
    areasType,
    heroType,
    blogPost,
    topbar,
    twoColumnsText,
    imageText,
    areasBlockType,
    galeryType,
    userType,
    userRoleType,
    subjectType,
    blogCategoryType,
    menuType,
    iframeType,
  ],
};
