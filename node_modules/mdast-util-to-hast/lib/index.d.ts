/**
 * Transform `tree` (an mdast node) to a hast node.
 *
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {HastNode|null|undefined} hast node
 */
export function toHast(
  tree: MdastNode,
  options?: Options | undefined
): HastNode | null | undefined
export type MdastNode =
  | import('mdast').Root
  | import('mdast').Parent['children'][number]
export type HastNode =
  | import('hast').Root
  | import('hast').Parent['children'][number]
export type Parent = import('mdast').Parent
export type Definition = import('mdast').Definition
export type FootnoteDefinition = import('mdast').FootnoteDefinition
export type Properties = import('hast').Properties
export type Text = import('hast').Text
export type Comment = import('hast').Comment
export type Element = import('hast').Element
export type Root = import('hast').Root
export type Content = import('hast').ElementContent
export type PositionLike = import('unist-util-position').PositionLike
export type EmbeddedHastFields = {
  /**
   * Defines the tag name of an element
   */
  hName?: string | undefined
  /**
   * Defines the properties of an element
   */
  hProperties?: import('hast').Properties | undefined
  /**
   * Defines the (hast) children of an element
   */
  hChildren?: import('hast').ElementContent[] | undefined
}
/**
 * unist data with embedded hast fields
 */
export type Data = {
  [x: string]: unknown
} & EmbeddedHastFields
/**
 * unist node with embedded hast data
 */
export type NodeWithData = MdastNode & {
  data?: Data
}
export type Handler = (
  h: H,
  node: any,
  parent: Parent | null
) => Content | Array<Content> | null | undefined
export type HFunctionProps = (
  node: MdastNode | PositionLike | null | undefined,
  tagName: string,
  props: Properties,
  children?: import('hast').ElementContent[] | null | undefined
) => Element
export type HFunctionNoProps = (
  node: MdastNode | PositionLike | null | undefined,
  tagName: string,
  children?: import('hast').ElementContent[] | null | undefined
) => Element
export type HFields = {
  /**
   * Whether HTML is allowed
   */
  dangerous: boolean
  /**
   * Definition cache
   */
  definition: (identifier: string) => Definition | null
  /**
   * Footnote cache
   */
  footnoteById: {
    [x: string]: FootnoteDefinition
  }
  /**
   * Order in which footnotes occur
   */
  footnoteOrder: Array<string>
  /**
   * Applied handlers
   */
  handlers: Handlers
  /**
   * Handler for any none not in `passThrough` or otherwise handled
   */
  unknownHandler: Handler
  /**
   * Like `h` but lower-level and usable on non-elements.
   */
  augment: (
    left: NodeWithData | PositionLike | null | undefined,
    right: Content
  ) => Content
  /**
   * List of node types to pass through untouched (except for their children).
   */
  passThrough: Array<string>
}
export type Options = {
  /**
   * Whether to allow `html` nodes and inject them as `raw` HTML
   */
  allowDangerousHtml?: boolean | undefined
  /**
   * Object mapping mdast nodes to functions handling them
   */
  handlers?: Handlers | undefined
  /**
   * List of custom mdast node types to pass through (keep) in hast
   */
  passThrough?: string[] | undefined
  /**
   * Handler for all unknown nodes.
   */
  unknownHandler?: Handler | undefined
}
/**
 * Map of node types to handlers
 */
export type Handlers = Record<string, Handler>
/**
 * Handle context
 */
export type H = HFunctionProps & HFunctionNoProps & HFields
