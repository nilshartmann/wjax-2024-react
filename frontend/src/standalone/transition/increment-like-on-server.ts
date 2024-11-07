import { longRunningOperation } from "./utils.ts";

let likes = 0;

export function getLikes() {
  return likes;
}

export async function incrementLikeOnServer() {
  // Im echten Leben: fetch-Call o.ä.
  if (likes > 5) {
    throw new Error("Too many likes");
  }
  likes = await longRunningOperation(likes + 1, 3000);
  return likes;
}
