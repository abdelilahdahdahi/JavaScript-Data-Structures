// https://leetcode.com/problems/merge-two-sorted-lists/description/

// Definition for singly-linked list
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Initialize the two lists
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);

// Function to merge two sorted lists
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to start the merged list
    let dummy = new ListNode();
    let current = dummy;

    // Merge the two lists
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If one of the lists is not empty, append it to the merged list
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // Return the head of the merged list
    return dummy.next;
};

// Merge the lists and print the result
let mergedList = mergeTwoLists(list1, list2);

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Print the merged list
printLinkedList(mergedList);
