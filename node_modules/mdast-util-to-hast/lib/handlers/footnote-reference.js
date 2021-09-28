/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../index.js').Handler} Handler
 */

import {u} from 'unist-builder'

/**
 * @type {Handler}
 * @param {FootnoteReference} node
 */
export function footnoteReference(h, node) {
  const footnoteOrder = h.footnoteOrder
  const identifier = String(node.identifier)
  const index = footnoteOrder.indexOf(identifier)
  const marker = String(
    index === -1 ? footnoteOrder.push(identifier) : index + 1
  )

  return h(
    node,
    'a',
    {
      href: '#fn' + marker,
      className: ['footnote-ref'],
      id: 'fnref' + marker,
      role: 'doc-noteref'
    },
    [h(node.position, 'sup', [u('text', marker)])]
  )
}
