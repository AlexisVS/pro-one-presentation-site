// useAssetLoader.ts

import { ref, onMounted, onBeforeUnmount } from "vue";

export function useAssetLoader() {
  const isLoading = ref(true);
  const assetsToLoad = ref(0);
  const assetsLoaded = ref(0);

  const interval = setInterval(() => {
    handleAssetLoad();
  }, 300);

  const handleAssetLoad = () => {
    const assets = document.querySelectorAll("video, img") as NodeListOf<
      HTMLVideoElement | HTMLImageElement
    >;

    assets.forEach((target) => {
      if (target.tagName === "VIDEO") {
        const video = target as HTMLVideoElement;

        if (video.readyState >= 4) assetsLoaded.value++;
      }

      if (target.tagName === "IMG") {
        const image = target as HTMLImageElement;

        if (image.complete) assetsLoaded.value++;
      }
    });

    if (assetsLoaded.value >= assetsToLoad.value || assetsToLoad.value === 0) {
      const timeout = setTimeout(() => {
        isLoading.value = false;
      }, 700)();

      clearTimeout(timeout);
    }
  };

  onMounted(() => {
    const videos = document.querySelectorAll("video");
    const images = document.querySelectorAll("img");

    assetsToLoad.value = videos.length + images.length;

    images.forEach((asset) => {
      asset.addEventListener("load", handleAssetLoad);
    });

    videos.forEach((asset) => {
      asset.addEventListener("loadeddata", handleAssetLoad);
    });
  });

  onBeforeUnmount(() => {
    const images = document.querySelectorAll("img");
    const videos = document.querySelectorAll("video");

    images.forEach((asset) => {
      asset.removeEventListener("load", handleAssetLoad);
    });

    videos.forEach((asset) => {
      asset.removeEventListener("loadeddata", handleAssetLoad);
    });

    clearInterval(interval);
  });

  return { isLoading };
}
