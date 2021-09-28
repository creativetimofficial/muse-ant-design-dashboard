/**
 * @typedef MarkdownTableOptions
 * @property {string|null|Array.<string|null|undefined>} [align]
 * @property {boolean} [padding=true]
 * @property {boolean} [delimiterStart=true]
 * @property {boolean} [delimiterStart=true]
 * @property {boolean} [delimiterEnd=true]
 * @property {boolean} [alignDelimiters=true]
 * @property {(value: string) => number} [stringLength]
 */
/**
 * Create a table from a matrix of strings.
 *
 * @param {Array.<Array.<string|null|undefined>>} table
 * @param {MarkdownTableOptions} [options]
 * @returns {string}
 */
export function markdownTable(
  table: Array<Array<string | null | undefined>>,
  options?: MarkdownTableOptions | undefined
): string
export type MarkdownTableOptions = {
  align?: string | (string | null | undefined)[] | null | undefined
  padding?: boolean | undefined
  delimiterStart?: boolean | undefined
  delimiterEnd?: boolean | undefined
  alignDelimiters?: boolean | undefined
  stringLength?: ((value: string) => number) | undefined
}
