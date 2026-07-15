// ============================================================================
//  WEDDING INVITATION — EDIT EVERYTHING HERE
//  Change the values below to personalise the invitation.
//  (Names, date, venue, family names, timeline, blessings.)
// ============================================================================

export const weddingConfig = {
  // ---- Couple ----------------------------------------------------------------
  brideFirstName: "Shruthi",
  groomFirstName: "Vignesh",
  brideFullName: "Shruthi R",
  groomFullName: "Vignesh N",

  // ---- Family names ----------------------------------------------------------
  brideParents: "Mr. Rajkumar B & Mrs. Uma N",
  groomParents: "Mr. Nagarajan R & Mrs. Vijayalakshmi G",
  closingFamilies: "Rajkumar Family & Nagarajan Family",

  // ---- Date & time -----------------------------------------------------------
  // weddingDateTime is used by the live countdown. Use ISO format with timezone.
  weddingDateText: "12 & 13 September 2026",
  weddingDay: "Saturday & Sunday",
  weddingTimeText: "Muhurtham at 7:00 AM",
  weddingDateTime: "2026-09-13T07:00:00+05:30",

  // ---- Venue -----------------------------------------------------------------
  venueName: "Sri Kumaran Mahal",
  venueAddress:
    "Sri Kumaran Mahal, Sathy Road, Kovilpalayam, Coimbatore, Tamil Nadu - 641107",
  googleMapLink: "https://share.google/QBfmAqlSM01v0UI4F",

  // ---- Invitation copy -------------------------------------------------------
  inviteOverline: "Together with our families",
  inviteMessage:
    "Request the honour of your presence as we begin our journey of a lifetime, blessed under the divine grace of Lord Krishna.",

  // ---- Blessing / divine section --------------------------------------------
  blessingVerse:
    "Where the flute of Krishna plays, love blossoms like a thousand lotuses. May Radha and Madhava bless this sacred union with eternal devotion.",
  sanskritBlessing: "· Shubham Astu · Vivaha Mangalam · Om Shri Krishnaya Namaha ·",

  // ---- Event timeline --------------------------------------------------------
  timeline: [
    {
      time: "12 Sep 2026 · 10:00 AM",
      title: "Mappillai Azhaippu",
      subtitle: "Welcoming the Groom",
      description:
        "A joyful welcome for the groom as two families unite in love, tradition, and celebration.",
    },
    {
      time: "12 Sep 2026 · 6:00 PM",
      title: "Reception",
      subtitle: "Blessings & Celebration",
      description:
        "An evening reception to shower the couple with warmth, blessings and festivity.",
    },
    {
      time: "13 Sep 2026 · 7:00 AM",
      title: "Muhurtham",
      subtitle: "The Sacred Vows",
      description:
        "The auspicious hour of the wedding, solemnised with Vedic rites around the holy fire.",
    },
    {
      time: "13 Sep 2026 · 12:00 PM",
      title: "Wedding Lunch",
      subtitle: "Traditional Sadhya",
      description:
        "A grand feast served on banana leaf to celebrate the newlyweds with loved ones.",
    },
  ],

  // ---- Closing ---------------------------------------------------------------
  closingMessage: "With love and blessings from both families.",
};

export default weddingConfig;
