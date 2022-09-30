function LinkedList(data) {
  const head = Node(data, null)
  let length = 0

  return {
    append(value) {
      let tmp = head
      while (tmp.next !== null) {
        tmp = tmp.next
      }
      tmp.next = Node(value, null)
      // adds new node containing value to end of list
    },
    prepend(value) {
      let newHead = Node(value, head)
      head = newHead
      // adds new node containing value to start of list
    },
    size() {
      let count = 0
      let tmp = head
      while (tmp !== null) {
        count++
      }
      return count
      // returns total number of nodes in list
    },
    head() {
      return head.value
      // returns the first node in the list
    },
    tail() {
      let tmp = head
      while (tmp.next !== null) {
        tmp = tmp.next
      }
      return tmp.value
      // returns the last node in list
    },
    at(index) {
      let i = 0
      let tmp = head
      while (tmp.next !== null && i !== index) {
        tmp = tmp.next
        i++
      }
      return tmp.value
      // returns the node at the given index
    },
    pop() {
      let tmp = head
      while (tmp.next !== null) {
        tmp = tmp.next
      }
      tmp = null
      // removes the last element of the list
    },
    contains(value) {
      let tmp = head
      while (tmp.value !== value) {
        if (tmp.next === null) return false
        tmp = tmp.next
      }
      return true
      // returns true if the passed in value is in the list and otherwise returns false
    },
    find(value) {
      let tmp = head
      let i = 0
      while (tmp !== null && tmp.value !== value) {
        tmp = tmp.next
        i++
      }
      return tmp.value === value ? i : null
      // returns the index of the node containing value, or null if not found
    },
    toString() {
      let str = ''
      let tmp = head
      while (tmp.next !== null) {
        str += `(${tmp.value}) => `
        tmp = tmp.next
      }

      str += "(null)"
      return str
      // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    }
  }
}

function Node(data, next) {
  return {
    value: data || null,
    next: next || null
  }
}