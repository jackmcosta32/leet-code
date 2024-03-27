/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

// (1) -> (2) -> (3) -> (4)
// (4) -> (3) -> (2) -> (1)

function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  let nxt: ListNode | null = null;
  let prev: ListNode | null = null;

  while (curr) {
    nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }

  return prev;
}
