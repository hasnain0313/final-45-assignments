const originalGuestList: string[] = ["sameer", "hasnain", "muzammil", "hassan"];
const guestWhoCantMakeIt: string = "sameer";
const replacementGuest: string = "NewGuest";

// Remove guest who can't make it and add the replacement
const updatedGuestList: string[] = originalGuestList.filter(guest => guest !== guestWhoCantMakeIt);
updatedGuestList.push(replacementGuest);

// Send out new invitations with updated guest list
console.log( updatedGuestList.join(", "));