import { atom, SetStateAction, useAtom } from "jotai";

//Atom type definition
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Fetch posts
const fetchPosts: (start: number) => Promise<Post[]> = async (start) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=6`
  );
  const data = await res.json();
  return data;
};

//Post atom
const postAtom = atom<Post[]>([]);
const loaderAtom = atom<boolean>(false);

// Atom setter
const paginateAtomSetter = atom(null, async (_get, set, start: number) => {
  set(loaderAtom, true);
  set(postAtom, await fetchPosts(start));
  set(loaderAtom, false);
});

//Use Atom
export const useLoaderGetter: () => boolean = () => {
  return useAtom(loaderAtom)[0];
};

export const usePostGetter: () => Post[] = () => {
  return useAtom(postAtom)[0];
};

export const usePaginationSetter: () => (
  update: number
) => Promise<void> = () => {
  return useAtom(paginateAtomSetter)[1];
};
