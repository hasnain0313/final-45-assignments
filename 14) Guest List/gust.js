"use strict";
class DinnerGuest {
    constructor(name) {
        this.name = name;
    }
    sendInvitation() {
        return `Dear ${this.name},\n\nYou are cordially invited to join me for dinner. Your presence would be an honor, and I look forward to the opportunity to share a delightful evening of conversation and camaraderie.\n\nSincerely,\n[Your Name]`;
    }
}
// Create a list of dinner guests
const guest1 = new DinnerGuest("hasnain malik");
const guest2 = new DinnerGuest("yasir rao");
const guest3 = new DinnerGuest("muzammil khan");
// Print personalized invitations
console.log(guest1.sendInvitation());
console.log("\n---------------------------\n");
console.log(guest2.sendInvitation());
console.log("\n---------------------------\n");
console.log(guest3.sendInvitation());
