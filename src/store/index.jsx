import { create } from "zustand";
import { devtools } from "zustand/middleware";
import staticStore from "./staticStore";
import blogStore from "./blogStore";

const useStore = create(
  devtools((set, get, api) => ({
    staticStore: { ...staticStore(set, get, api) },
    blogStore: { ...blogStore(set, get, api) },
  }))
);

export default useStore;
