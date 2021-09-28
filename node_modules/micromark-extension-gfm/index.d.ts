/**
 * Support GFM or markdown on github.com.
 *
 * @param {Options} [options]
 * @returns {Extension}
 */
export function gfm(
  options?:
    | import('micromark-extension-gfm-strikethrough/lib/syntax').Options
    | undefined
): Extension
/** @type {HtmlExtension} */
export const gfmHtml: HtmlExtension
export type Extension = import('micromark-util-types').Extension
export type HtmlExtension = import('micromark-util-types').HtmlExtension
export type Options = import('micromark-extension-gfm-strikethrough').Options
