import { assertEquals, assertThrows } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { getUserId, getUsername, getVanityName, scrollTimeline, expandTimeline, extractFriends, downloadPhotos, clearTimeline } from "../fbtoolkit.user.js";

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

Deno.test("extractFriends returns a valid friends list", async () => {
  const friends = await extractFriends();
  assertEquals(Array.isArray(friends.list), true);
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
