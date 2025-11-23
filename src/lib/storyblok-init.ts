import "server-only"

import {
  withCardsData,
  withFormBuilderData,
  withHeaderData,
  withNavData,
  withNotFoundPageData,
  withPageData,
  withPopoverData,
} from "@gotpop/storyblok"
import {
  BaselineStatusBlock,
  Card,
  Cards,
  FooterDefault,
  HeaderDefault,
  HeroDefault,
  LinkList,
  LogoDefault,
  NavDefault,
  NavItemDefault,
  PageDefault,
  PageFilter,
  PageNotFound,
  PagePost,
  RichTextBlock,
  RichTextCodeBlock,
  SnippetBlock,
} from "@gotpop/system"
import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc"
import { FormBuilder } from "@/Components/FormBuilder/FormBuilder"
import { FormInputButtonSubmit } from "@/Components/FormInputButtonSubmit/FormInputButtonSubmit"
import { FormInputText } from "@/Components/FormInputText/FormInputText"
import { FormInputTextArea } from "@/Components/FormInputTextArea/FormInputTextArea"
import { Popover } from "@/Components/Popover/Popover"

let isInitialized = false

export function ensureStoryblokInitialised() {
  if (isInitialized) {
    return getStoryblokApi()
  }

  const accessToken = process.env.STORYBLOK_ACCESS_TOKEN

  if (!accessToken) {
    throw new Error("STORYBLOK_ACCESS_TOKEN environment variable is required")
  }

  const components = {
    baseline_status_block: BaselineStatusBlock,
    card: Card,
    cards: withCardsData(Cards),
    footer_default: FooterDefault,
    form_builder: withFormBuilderData(FormBuilder),
    header_default: withHeaderData(HeaderDefault),
    hero_default: HeroDefault,
    link_list: LinkList,
    logo_default: LogoDefault,
    nav_default: withNavData(NavDefault),
    nav_item_default: NavItemDefault,
    not_found: withNotFoundPageData(PageNotFound),
    page_default: withPageData(PageDefault),
    page_filter: withPageData(PageFilter),
    popover: withPopoverData(Popover),
    page_post: withPageData(PagePost),
    rich_text_block: RichTextBlock,
    rich_text_code_block: RichTextCodeBlock,
    snippet_block: SnippetBlock,
    form_input_text: FormInputText,
    form_input_textarea: FormInputTextArea,
    form_input_button_submit: FormInputButtonSubmit,
  }

  storyblokInit({
    accessToken,
    use: [apiPlugin],
    components,
    apiOptions: {
      region: "eu",
    },
  })

  isInitialized = true

  return getStoryblokApi()
}

ensureStoryblokInitialised()
