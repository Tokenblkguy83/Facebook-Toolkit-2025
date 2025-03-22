import { assertEquals, assertThrows, assertMatch } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { getUserId, getUsername, getVanityName, scrollTimeline, expandTimeline, extractFriends, downloadPhotos, clearTimeline, showUserId } from "../fbtoolkit.user.js";

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

Deno.test("showUserId displays a message when user ID is successfully retrieved", () => {
  const originalAlert = window.alert;
  let alertMessage = "";
  window.alert = (message) => { alertMessage = message; };

  showUserId();

  assertMatch(alertMessage, /User ID: \d+ retrieved successfully./);

  window.alert = originalAlert;
});

Deno.test("scrollTimeline implements retry logic and logs errors", () => {
  const originalConsoleError = console.error;
  const originalConsoleLog = console.log;
  let errorMessage = "";
  let logMessage = "";
  console.error = (message) => { errorMessage = message; };
  console.log = (message) => { logMessage = message; };

  scrollTimeline(1);

  assertMatch(errorMessage, /Scroll timeline failed:/);
  assertMatch(logMessage, /Retrying... \(1 attempts left\)/);

  console.error = originalConsoleError;
  console.log = originalConsoleLog;
});
