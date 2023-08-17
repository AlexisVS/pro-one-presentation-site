<template>
  <div v-if="displayed" ref="observed" :style="getTransition().initial">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from "vue";

type transitionKey = "appear" | "leave" | "initial";

type transitionType = {
  [key in transitionKey]: CSSProperties;
};

type transitionsObject = {
  default: transitionType;
  [key: string]: transitionType;
};

type transitionPreset = "default" | "easeTranslateTop";

const props = defineProps({
  // Pre build-in transition name or custom transition object
  transition: {
    type: [String, Object] as PropType<transitionPreset | transitionType>,
    default: "default",
    required: false,
  },
  // Animation is triggered only once
  once: {
    type: Boolean,
    default: false,
    required: false,
  },
  // Stay visible after the appears transition
  visibility: {
    type: Boolean,
    default: true,
    required: false,
  },
  // For disabling the transition when the element is out of the viewport
  leave: {
    type: Boolean,
    default: true,
    required: false,
  },
  delay: {
    type: Number,
    default: 0,
    required: false,
  },
});

const displayed = ref(true);
const hasIntersected = ref(false);
const observed = ref<HTMLElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);
const transitions: transitionsObject = {
  default: {
    initial: {
      opacity: 0,
      transform: "translateY(-100%)",
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
    appear: {
      opacity: 1,
      transform: "translateY(0)",
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
    leave: {
      transform: "translateY(100%)",
      opacity: 0,
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
  },
  easeTranslateTop: {
    initial: {
      opacity: 0,
      transform: "translateY(100%)",
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
    appear: {
      opacity: 1,
      transform: "translateY(0)",
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-100%)",
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
  },
};

const getTransition = (): transitionType => {
  if (typeof props.transition === "string") {
    const transitionName = props.transition as string;

    if (transitionName in transitions) {
      return transitions[transitionName];
    } else {
      throw new Error(`Invalid transition name: ${transitionName}`);
    }
  } else {
    const transition = props.transition as transitionType;

    // Verify if all keys of the object are of type 'transitionKey'
    for (const key in transition) {
      if (!(key in transitions)) {
        throw new Error(`Invalid transitionType object for key: ${key}`);
      }
    }
    return transition;
  }
};

const applyTransitionStyle = (
  transitionKey: transitionKey,
  element: Element,
): void => {
  const htmlElement = element as HTMLElement;
  Object.entries(getTransition()[transitionKey]).forEach(([key, value]) => {
    htmlElement.style.setProperty(key, value as string);
    htmlElement.style.setProperty("transition-delay", `${props.delay}ms`);
  });
};

const handleInIntersection = (element: Element) => {
  applyTransitionStyle("appear", element);
};

const handleOutIntersection = (element: Element) => {
  applyTransitionStyle("leave", element);
};

const getTransitionDurationNumber = (transitionKey: transitionKey): number => {
  const transition = getTransition()[transitionKey];
  const transitionDuration = transition["transition-duration"] as string;
  return parseInt(transitionDuration.substring(-2));
};

onMounted(() => {
  const intersectionObserver = new IntersectionObserver(
    ([entry]): void => {
      // has already handleIntersection once
      if (props.once && hasIntersected.value) return;

      const element = entry.target as HTMLElement;

      // intersected
      if (entry && entry.isIntersecting) {
        handleInIntersection(element);

        setTimeout(() => {
          hasIntersected.value = true;

          if (!props.visibility && props.once) {
            observer.value?.unobserve(element);

            if (props.leave) {
              handleOutIntersection(element);
            } else {
              displayed.value = false;
            }
          }
        }, getTransitionDurationNumber("appear"));
      } else if (entry && !entry.isIntersecting && props.visibility === false) {
        if (props.leave) {
          handleOutIntersection(element);
        } else {
          displayed.value = false;
        }
      }
    },
    { threshold: 1 },
  );

  intersectionObserver.observe(observed.value as Element);
  observer.value = intersectionObserver;
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>
