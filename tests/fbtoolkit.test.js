import { assertEquals, assertThrows } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { getUserId, getUsername, getVanityName, scrollTimeline, expandTimeline, extractFriends, downloadPhotos, clearTimeline, convertJsonToHtml, displayPictures } from "../fbtoolkit.user.js";

Deno.test("getUserId returns a valid user ID", () => {
  const userId = getUserId();
  assertEquals(typeof userId, "number");
  assertEquals(userId > 0, true);
});

Deno.test("getUsername returns a valid username", () => {
  const username = getUsername();
  assertEquals(typeof username, "string");
  assertEquals(username.length > 0, true);
});

Deno.test("getVanityName returns a valid vanity name", () => {
  const vanityName = getVanityName("https://www.facebook.com/vanityname?ref=profile");
  assertEquals(typeof vanityName, "string");
  assertEquals(vanityName.length > 0, true);
});

Deno.test("scrollTimeline does not throw an error", () => {
  assertThrows(() => {
    scrollTimeline();
  }, Error);
});

Deno.test("expandTimeline does not throw an error", () => {
  assertThrows(() => {
    expandTimeline();
  }, Error);
});

Deno.test("extractFriends returns a valid friends list with names and links", async () => {
  const friends = await extractFriends();
  assertEquals(Array.isArray(friends.list), true);
  friends.list.forEach(friend => {
    assertEquals(typeof friend.name, "string");
    assertEquals(typeof friend.link, "string");
  });
});

Deno.test("downloadPhotos returns a valid photos list", async () => {
  const photos = await downloadPhotos();
  assertEquals(Array.isArray(photos), true);
});

Deno.test("clearTimeline does not throw an error", () => {
  assertThrows(() => {
    clearTimeline();
  }, Error);
});

Deno.test("convertJsonToHtml returns valid HTML content", () => {
  const jsonData = {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "profilePicture": "https://example.com/profile.jpg"
  };
  const htmlContent = convertJsonToHtml(jsonData);
  assertEquals(typeof htmlContent, "string");
  assertEquals(htmlContent.includes("John Doe"), true);
  assertEquals(htmlContent.includes("30"), true);
  assertEquals(htmlContent.includes("john.doe@example.com"), true);
  assertEquals(htmlContent.includes("https://example.com/profile.jpg"), true);
});

Deno.test("convertJsonToHtml includes interactive elements", () => {
  const jsonData = {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "profilePicture": "https://example.com/profile.jpg"
  };
  const htmlContent = convertJsonToHtml(jsonData);
  assertEquals(htmlContent.includes('<button onclick="filterData()">Filter Data</button>'), true);
  assertEquals(htmlContent.includes('<div id="chartContainer"></div>'), true);
  assertEquals(htmlContent.includes('function allowDrop(event)'), true);
  assertEquals(htmlContent.includes('function drag(event)'), true);
  assertEquals(htmlContent.includes('function drop(event)'), true);
});

Deno.test("displayPictures returns valid HTML content for pictures", () => {
  const pictures = [
    { url: "https://example.com/pic1.jpg", alt: "Picture 1" },
    { url: "https://example.com/pic2.jpg", alt: "Picture 2" }
  ];
  const htmlContent = displayPictures(pictures);
  assertEquals(typeof htmlContent, "string");
  assertEquals(htmlContent.includes("https://example.com/pic1.jpg"), true);
  assertEquals(htmlContent.includes("Picture 1"), true);
  assertEquals(htmlContent.includes("https://example.com/pic2.jpg"), true);
  assertEquals(htmlContent.includes("Picture 2"), true);
});
