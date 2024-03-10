"use strict";
const originalGuestList = ["sameer", "hasnain", "muzammil", "hassan"];
const guestWhoCantMakeIt = "sameer";
const replacementGuest = "NewGuest";
// Remove guest who can't make it and add the replacement
const updatedGuestList = originalGuestList.filter(guest => guest !== guestWhoCantMakeIt);
updatedGuestList.push(replacementGuest);
// Send out new invitations with updated guest list
console.log(updatedGuestList.join(", "));
