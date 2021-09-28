/**
 * @typedef {import('mdast').Footnote} Footnote
 * @typedef {import('../index.js').Handler} Handler
 */

import {footnoteReference} from './footnote-reference.js'

/**
 * @type {Handler}
 * @param {Footnote} node
 */
export function footnote(h, node) {
  const footnoteById = h.footnoteById
  const footnoteOrder = h.footnoteOrder
  let no = 1

  while (no in footnoteById) no++

  const identifier = String(no)

  // No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
  // to not exist because we just generated it.
  footnoteOrder.push(identifier)

  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  }

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier,
    position: node.position
  })
}
